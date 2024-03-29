/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , E = C.document
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.concat
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , l = a.call(Object)
      , y = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.1"
      , k = function(e, t) {
        return new k.fn.init(e,t)
    }
      , p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function d(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (d(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
    k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date, m = n.document, S = 0, r = 0, p = ue(), x = ue(), N = ue(), A = ue(), D = function(e, t) {
            return e === t && (l = !0),
            0
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", F = new RegExp(M + "+","g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp($), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + $),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), ne = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(m.childNodes), m.childNodes),
            t[m.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","),
                        f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        A(t, !0)
                    } finally {
                        s === k && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[k] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : m;
            return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = k,
                !C.getElementsByName || !C.getElementsByName(k).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", $)
            }),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== C && T(e),
            d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    A(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) !== C && T(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) !== C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(D),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = p[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [S, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]),
                                    a === e))
                                        break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace(B, "$1"));
                    return s[k] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === S && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)),
            y && !y[k] && (y = Ce(y, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v) {
                    i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(B, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = N[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                (a = N(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = S += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument === C || (T(o),
                            n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (S = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (S = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = k.split("").sort(D).join("") === k,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    k.find = h,
    k.expr = h.selectors,
    k.expr[":"] = k.expr.pseudos,
    k.uniqueSort = k.unique = h.uniqueSort,
    k.text = h.getText,
    k.isXMLDoc = h.isXML,
    k.contains = h.contains,
    k.escapeSelector = h.escape;
    var T = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && k(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , N = k.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    k.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(k(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (k.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || q,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t,
                k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                D.test(r[1]) && k.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }
    ).prototype = k.fn,
    q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/
      , O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            k.merge([], e.childNodes))
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = k.filter(t, n)),
            1 < this.length && (O[r] || k.uniqueSort(n),
            H.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var R = /[^\x20\t\r\n\f]+/g;
    function M(e) {
        return e
    }
    function I(e) {
        throw e
    }
    function W(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        k.each(e.match(R) || [], function(e, t) {
            n[t] = !0
        }),
        n) : k.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    k.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return k.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = k.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < k.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    k.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return k.Deferred(function(r) {
                        k.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++,
                                    t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== I && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return k.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : M)),
                        o[2][3].add(l(0, e, m(n) ? n : I))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? k.extend(e, a) : a
                }
            }
              , s = {};
            return k.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = k.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                W(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    k.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = k.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        k.ready()
    }
    k.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            k.readyException(e)
        }),
        this
    }
    ,
    k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
        }
    }),
    k.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                _(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(k(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , z = /^-ms-/
      , U = /-([a-z])/g;
    function X(e, t) {
        return t.toUpperCase()
    }
    function V(e) {
        return e.replace(z, "ms-").replace(U, X)
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Y() {
        this.expando = k.expando + Y.uid++
    }
    Y.uid = 1,
    Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[V(t)] = n;
            else
                for (r in t)
                    i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t))in r ? [t] : t.match(R) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var Q = new Y
      , J = new Y
      , K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Z = /[A-Z]/g;
    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                J.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }),
    k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = J.get(o),
                1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)),
                        ee(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                J.set(this, n)
            }) : _(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    J.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }),
    k.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Q.get(e, t),
                n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                k.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$","i")
      , re = ["Top", "Right", "Bottom", "Left"]
      , ie = E.documentElement
      , oe = function(e) {
        return k.contains(e.ownerDocument, e)
    }
      , ae = {
        composed: !0
    };
    ie.getRootNode && (oe = function(e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    }
    );
    var se = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display")
    }
      , ue = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
        t)
            e.style[o] = a[o];
        return i
    };
    function le(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return k.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"), c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                k.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            k.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ce = {};
    function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Q.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = k.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ce[s] = u)))) : "none" !== n && (l[c] = "none",
            Q.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    k.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i
      , de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , he = /^$|^module$|\/(?:java|ecma)script/i
      , ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? k.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option,
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;
    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    k.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    k.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < k.inArray(o, r))
                i && i.push(o);
            else if (l = oe(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")),
    (xe = E.createElement("input")).setAttribute("type", "radio"),
    xe.setAttribute("checked", "checked"),
    xe.setAttribute("name", "t"),
    me.appendChild(xe),
    y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked,
    me.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/
      , Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ee = /^([^.]*)(?:\.(.+)|)/;
    function ke() {
        return !0
    }
    function Se() {
        return !1
    }
    function Ne(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Ae(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Se;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return k().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = k.guid++)),
        e.each(function() {
            k.event.add(this, t, i, r, n)
        })
    }
    function De(e, i, o) {
        o ? (Q.set(e, i, !1),
        k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Q.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    r.length && (Q.set(this, i, {
                        value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
            if (v) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && k.find.matchesSelector(ie, i),
                n.guid || (n.guid = k.guid++),
                (u = v.events) || (u = v.events = {}),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(R) || [""]).length;
                while (l--)
                    d = g = (s = Ee.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = k.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = k.event.special[d] || {},
                    c = k.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && k.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    k.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;
                while (l--)
                    if (d = g = (s = Ee.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = k.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e), u = new Array(arguments.length), l = (Q.get(this, "events") || {})[s.type] || [], c = k.event.special[s.type] || {};
            for (u[0] = s,
            t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                a = k.event.handlers.call(this, s, l),
                t = 0;
                while ((i = a[t++]) && !s.isPropagationStopped()) {
                    s.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
                        s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                        s.data = o.data,
                        void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                        s.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    k.Event = function(e, t) {
        if (!(this instanceof k.Event))
            return new k.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && k.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[k.expando] = !0
    }
    ,
    k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp),
    k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        k.event.special[e] = {
            setup: function() {
                return De(this, e, Ne),
                !1
            },
            trigger: function() {
                return De(this, e),
                !0
            },
            delegateType: t
        }
    }),
    k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    k.fn.extend({
        on: function(e, t, n, r) {
            return Ae(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Se),
            this.each(function() {
                k.event.remove(this, e, n, t)
            })
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , qe = /<script|<style|<link/i
      , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
      , He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }
    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e),
            a = Q.set(t, o),
            l = o.events))
                for (i in delete a.handle,
                a.events = {},
                l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e),
            u = k.extend({}, s),
            J.set(t, u))
        }
    }
    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                Ie(t, r, i, o)
            });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)
                u = e,
                c !== p && (u = k.clone(u, !0, !0),
                s && k.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                k.map(a, Re),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }) : b(u.textContent.replace(He, ""), u, l))
        }
        return n
    }
    function We(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || k.cleanData(ve(r)),
            r.parentNode && (n && oe(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Me(o[r], a[r]);
                else
                    Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }),
    k.fn.extend({
        detach: function(e) {
            return We(this, e, !0)
        },
        remove: function(e) {
            return We(this, e)
        },
        text: function(e) {
            return _(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (k.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ve(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                k(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$","i")
      , Fe = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , Be = new RegExp(re.join("|"),"i");
    function _e(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)),
        !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function ze(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top,
                a = 12 === t(e.marginLeft),
                u.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                u.style.position = "absolute",
                i = 12 === t(u.offsetWidth / 3),
                ie.removeChild(s),
                u = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s = E.createElement("div"), u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === u.style.backgroundClip,
        k.extend(y, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                a
            },
            scrollboxSize: function() {
                return e(),
                i
            }
        }))
    }();
    var Ue = ["Webkit", "Moz", "ms"]
      , Xe = E.createElement("div").style
      , Ve = {};
    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = Ue.length;
            while (n--)
                if ((e = Ue[n] + t)in Xe)
                    return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/
      , Qe = /^--/
      , Je = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ke = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += k.css(e, n + re[a], !0, i)),
            r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
            "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i),
            "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function tt(e, t, n) {
        var r = Fe(e)
          , i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r)
          , o = i
          , a = _e(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e,t,n,r,i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t), u = Qe.test(t), l = e.style;
                if (u || (t = Ge(s)),
                a = k.cssHooks[t] || k.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return Qe.test(t) || (t = Ge(s)),
            (a = k.cssHooks[t] || k.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = _e(e, t, r)),
            "normal" === i && t in Ke && (i = Ke[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    k.each(["height", "width"], function(e, u) {
        k.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function() {
                        return tt(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Fe(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i), s = n ? et(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)),
                s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = k.css(e, u)),
                Ze(0, t, s)
            }
        }
    }),
    k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (k.cssHooks[i + o].set = Ze)
    }),
    k.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Fe(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = k.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((k.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || k.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : nt.propHooks._default.set(this),
            this
        }
    }).init.prototype = nt.prototype,
    (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    k.fx = nt.prototype.init,
    k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;
    function lt() {
        it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval),
        k.fx.tick())
    }
    function ct() {
        return C.setTimeout(function() {
            rt = void 0
        }),
        rt = Date.now()
    }
    function ft(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function dt(o, e, t) {
        var n, a, r = 0, i = dt.prefilters.length, s = k.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: k.extend({}, e),
            opts: k.extend(!0, {
                specialEasing: {},
                easing: k.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: rt || ct(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = V(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = k.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = dt.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return k.map(c, pt, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        k.fx.timer(k.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    k.Animation = k.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(R);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                dt.tweeners[n] = dt.tweeners[n] || [],
                dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && se(e), v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    k.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                st.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Q.get(e, "display")),
                "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0),
                l = e.style.display || l,
                c = k.css(e, "display"),
                fe([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && fe([e], !0),
                    p.done(function() {
                        for (r in g || fe([e]),
                        Q.remove(e, "fxshow"),
                        d)
                            k.style(e, r, d[r])
                    })),
                    u = pt(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }),
    k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && k.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t)
              , o = k.speed(e, n, r)
              , a = function() {
                var e = dt(this, k.extend({}, t), o);
                (i || Q.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && !1 !== i && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = k.timers
                  , r = Q.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && ut.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Q.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                k.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
        }
    }),
    k.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    k.timers = [],
    k.fx.tick = function() {
        var e, t = 0, n = k.timers;
        for (rt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(),
        rt = void 0
    }
    ,
    k.fx.timer = function(e) {
        k.timers.push(e),
        k.fx.start()
    }
    ,
    k.fx.interval = 13,
    k.fx.start = function() {
        it || (it = !0,
        lt())
    }
    ,
    k.fx.stop = function() {
        it = null
    }
    ,
    k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    ot = E.createElement("input"),
    at = E.createElement("select").appendChild(E.createElement("option")),
    ot.type = "checkbox",
    y.checkOn = "" !== ot.value,
    y.optSelected = at.selected,
    (ot = E.createElement("input")).value = "t",
    ot.type = "radio",
    y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }),
    k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)),
                void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(R);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    ht = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || k.find.attr;
        gt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = gt[o],
            gt[o] = r,
            r = null != a(e, t, n) ? o : null,
            gt[o] = i),
            r
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i
      , yt = /^(?:a|area)$/i;
    function mt(e) {
        return (e.match(R) || []).join(" ")
    }
    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    k.fn.extend({
        prop: function(e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }),
    k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t,
                i = k.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    y.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }),
    k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    k(this).addClass(t.call(this, e, xt(this)))
                });
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n),
                    r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    k(this).removeClass(t.call(this, e, xt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n),
                    r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                k(this).toggleClass(i.call(this, e, xt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0,
                    n = k(this),
                    r = bt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var wt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }),
    k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : mt(k.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = k.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        },
        y.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/
      , Ct = function(e) {
        e.stopPropagation()
    };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[k.expando] ? e : new k.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : k.makeArray(t, [e]),
            c = k.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                k.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, Ct),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, Ct),
                k.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }),
    k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return k.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = Q.access(e, r);
                t || e.addEventListener(n, i, !0),
                Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Q.remove(e, r))
            }
        }
    });
    var Et = C.location
      , kt = Date.now()
      , St = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e),
        t
    }
    ;
    var Nt = /\[\]$/
      , At = /\r?\n/g
      , Dt = /^(?:submit|button|image|reset|file)$/i
      , jt = /^(?:input|select|textarea|keygen)/i;
    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            k.each(e, function(e, t) {
                r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                qt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e))
            k.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                qt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g
      , Ht = /#.*$/
      , Ot = /([?&])_=[^&]*/
      , Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Rt = /^(?:GET|HEAD)$/
      , Mt = /^\/\//
      , It = {}
      , Wt = {}
      , $t = "*/".concat("*")
      , Ft = E.createElement("a");
    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(R) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function _t(t, i, o, a) {
        var s = {}
          , u = t === Wt;
        function l(e) {
            var r;
            return s[e] = !0,
            k.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function zt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r),
        e
    }
    Ft.href = Et.href,
    k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event, x = k.Deferred(), b = k.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Pt.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)),
            _t(It, v, t, T),
            h)
                return T;
            for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Rt.test(v.type),
            f = v.url.replace(Ht, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Ot, "$1"),
            o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o),
            v.url = f + o),
            v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
            k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = _t(Wt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --k.active || k.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }),
    k.each(["get", "post"], function(e, i) {
        k[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }),
    k._evalUrl = function(e, t) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                k.globalEval(e, t)
            }
        })
    }
    ,
    k.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = k(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e)
    }
    ,
    k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Ut = {
        0: 200,
        1223: 204
    }
      , Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials"in Xt,
    y.ajax = Xt = !!Xt,
    k.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || Xt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e),
                e
            }
        }
    }),
    k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    k.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = k("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Vt, Gt = [], Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || k.expando + "_" + kt++;
            return this[e] = !0,
            e
        }
    }),
    k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || k.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? k(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Gt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Vt.childNodes.length),
    k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o),
        o && o.length && k(o).remove(),
        k.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    k.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = mt(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"), c = k(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = k.css(e, "top"),
            u = k.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, k.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    k.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    k.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === k.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0),
                    i.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - k.css(r, "marginTop", !0),
                    left: t.left - i.left - k.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === k.css(e, "position"))
                    e = e.offsetParent;
                return e || ie
            })
        }
    }),
    k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return _(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = ze(y.pixelPosition, function(e, t) {
            if (t)
                return t = _e(e, n),
                $e.test(t) ? k(e).position()[n] + "px" : t
        })
    }),
    k.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    k.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || k.guid++,
            i
    }
    ,
    k.holdReady = function(e) {
        e ? k.readyWait++ : k.ready(!0)
    }
    ,
    k.isArray = Array.isArray,
    k.parseJSON = JSON.parse,
    k.nodeName = A,
    k.isFunction = m,
    k.isWindow = x,
    k.camelCase = V,
    k.type = w,
    k.now = Date.now,
    k.isNumeric = function(e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Qt = C.jQuery
      , Jt = C.$;
    return k.noConflict = function(e) {
        return C.$ === k && (C.$ = Jt),
        e && C.jQuery === k && (C.jQuery = Qt),
        k
    }
    ,
    e || (C.jQuery = C.$ = k),
    k
});

/*!
 * Materialize v1.0.0 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
var _get = function t(e, i, n) {
    null === e && (e = Function.prototype);
    var s = Object.getOwnPropertyDescriptor(e, i);
    if (void 0 === s) {
        var o = Object.getPrototypeOf(e);
        return null === o ? void 0 : t(o, i, n)
    }
    if ("value"in s)
        return s.value;
    var a = s.get;
    return void 0 !== a ? a.call(n) : void 0
}
  , _createClass = function() {
    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(t, e, i) {
        return e && n(t.prototype, e),
        i && n(t, i),
        t
    }
}();
function _possibleConstructorReturn(t, e) {
    if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
window.cash = function() {
    var i, o = document, a = window, t = Array.prototype, r = t.slice, n = t.filter, s = t.push, e = function() {}, h = function(t) {
        return typeof t == typeof e && t.call
    }, d = function(t) {
        return "string" == typeof t
    }, l = /^#[\w-]*$/, u = /^\.[\w-]*$/, c = /<.+>/, p = /^\w+$/;
    function v(t, e) {
        e = e || o;
        var i = u.test(t) ? e.getElementsByClassName(t.slice(1)) : p.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
        return i
    }
    function f(t) {
        if (!i) {
            var e = (i = o.implementation.createHTMLDocument(null)).createElement("base");
            e.href = o.location.href,
            i.head.appendChild(e)
        }
        return i.body.innerHTML = t,
        i.body.childNodes
    }
    function m(t) {
        "loading" !== o.readyState ? t() : o.addEventListener("DOMContentLoaded", t)
    }
    function g(t, e) {
        if (!t)
            return this;
        if (t.cash && t !== a)
            return t;
        var i, n = t, s = 0;
        if (d(t))
            n = l.test(t) ? o.getElementById(t.slice(1)) : c.test(t) ? f(t) : v(t, e);
        else if (h(t))
            return m(t),
            this;
        if (!n)
            return this;
        if (n.nodeType || n === a)
            this[0] = n,
            this.length = 1;
        else
            for (i = this.length = n.length; s < i; s++)
                this[s] = n[s];
        return this
    }
    function _(t, e) {
        return new g(t,e)
    }
    var y = _.fn = _.prototype = g.prototype = {
        cash: !0,
        length: 0,
        push: s,
        splice: t.splice,
        map: t.map,
        init: g
    };
    function k(t, e) {
        for (var i = t.length, n = 0; n < i && !1 !== e.call(t[n], t[n], n, t); n++)
            ;
    }
    function b(t, e) {
        var i = t && (t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector);
        return !!i && i.call(t, e)
    }
    function w(e) {
        return d(e) ? b : e.cash ? function(t) {
            return e.is(t)
        }
        : function(t, e) {
            return t === e
        }
    }
    function C(t) {
        return _(r.call(t).filter(function(t, e, i) {
            return i.indexOf(t) === e
        }))
    }
    Object.defineProperty(y, "constructor", {
        value: _
    }),
    _.parseHTML = f,
    _.noop = e,
    _.isFunction = h,
    _.isString = d,
    _.extend = y.extend = function(t) {
        t = t || {};
        var e = r.call(arguments)
          , i = e.length
          , n = 1;
        for (1 === e.length && (t = this,
        n = 0); n < i; n++)
            if (e[n])
                for (var s in e[n])
                    e[n].hasOwnProperty(s) && (t[s] = e[n][s]);
        return t
    }
    ,
    _.extend({
        merge: function(t, e) {
            for (var i = +e.length, n = t.length, s = 0; s < i; n++,
            s++)
                t[n] = e[s];
            return t.length = n,
            t
        },
        each: k,
        matches: b,
        unique: C,
        isArray: Array.isArray,
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }
    });
    var E = _.uid = "_cash" + Date.now();
    function M(t) {
        return t[E] = t[E] || {}
    }
    function O(t, e, i) {
        return M(t)[e] = i
    }
    function x(t, e) {
        var i = M(t);
        return void 0 === i[e] && (i[e] = t.dataset ? t.dataset[e] : _(t).attr("data-" + e)),
        i[e]
    }
    y.extend({
        data: function(e, i) {
            if (d(e))
                return void 0 === i ? x(this[0], e) : this.each(function(t) {
                    return O(t, e, i)
                });
            for (var t in e)
                this.data(t, e[t]);
            return this
        },
        removeData: function(s) {
            return this.each(function(t) {
                return i = s,
                void ((n = M(e = t)) ? delete n[i] : e.dataset ? delete e.dataset[i] : _(e).removeAttr("data-" + name));
                var e, i, n
            })
        }
    });
    var L = /\S+/g;
    function T(t) {
        return d(t) && t.match(L)
    }
    function $(t, e) {
        return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)","gi").test(t.className)
    }
    function B(t, e, i) {
        t.classList ? t.classList.add(e) : i.indexOf(" " + e + " ") && (t.className += " " + e)
    }
    function D(t, e) {
        t.classList ? t.classList.remove(e) : t.className = t.className.replace(e, "")
    }
    y.extend({
        addClass: function(t) {
            var n = T(t);
            return n ? this.each(function(e) {
                var i = " " + e.className + " ";
                k(n, function(t) {
                    B(e, t, i)
                })
            }) : this
        },
        attr: function(e, i) {
            if (e) {
                if (d(e))
                    return void 0 === i ? this[0] ? this[0].getAttribute ? this[0].getAttribute(e) : this[0][e] : void 0 : this.each(function(t) {
                        t.setAttribute ? t.setAttribute(e, i) : t[e] = i
                    });
                for (var t in e)
                    this.attr(t, e[t]);
                return this
            }
        },
        hasClass: function(t) {
            var e = !1
              , i = T(t);
            return i && i.length && this.each(function(t) {
                return !(e = $(t, i[0]))
            }),
            e
        },
        prop: function(e, i) {
            if (d(e))
                return void 0 === i ? this[0][e] : this.each(function(t) {
                    t[e] = i
                });
            for (var t in e)
                this.prop(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            return this.each(function(t) {
                t.removeAttribute ? t.removeAttribute(e) : delete t[e]
            })
        },
        removeClass: function(t) {
            if (!arguments.length)
                return this.attr("class", "");
            var i = T(t);
            return i ? this.each(function(e) {
                k(i, function(t) {
                    D(e, t)
                })
            }) : this
        },
        removeProp: function(e) {
            return this.each(function(t) {
                delete t[e]
            })
        },
        toggleClass: function(t, e) {
            if (void 0 !== e)
                return this[e ? "addClass" : "removeClass"](t);
            var n = T(t);
            return n ? this.each(function(e) {
                var i = " " + e.className + " ";
                k(n, function(t) {
                    $(e, t) ? D(e, t) : B(e, t, i)
                })
            }) : this
        }
    }),
    y.extend({
        add: function(t, e) {
            return C(_.merge(this, _(t, e)))
        },
        each: function(t) {
            return k(this, t),
            this
        },
        eq: function(t) {
            return _(this.get(t))
        },
        filter: function(e) {
            if (!e)
                return this;
            var i = h(e) ? e : w(e);
            return _(n.call(this, function(t) {
                return i(t, e)
            }))
        },
        first: function() {
            return this.eq(0)
        },
        get: function(t) {
            return void 0 === t ? r.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        index: function(t) {
            var e = t ? _(t)[0] : this[0]
              , i = t ? this : _(e).parent().children();
            return r.call(i).indexOf(e)
        },
        last: function() {
            return this.eq(-1)
        }
    });
    var S, I, A, R, H, P, W = (H = /(?:^\w|[A-Z]|\b\w)/g,
    P = /[\s-_]+/g,
    function(t) {
        return t.replace(H, function(t, e) {
            return t[0 === e ? "toLowerCase" : "toUpperCase"]()
        }).replace(P, "")
    }
    ), j = (S = {},
    I = document,
    A = I.createElement("div"),
    R = A.style,
    function(e) {
        if (e = W(e),
        S[e])
            return S[e];
        var t = e.charAt(0).toUpperCase() + e.slice(1)
          , i = (e + " " + ["webkit", "moz", "ms", "o"].join(t + " ") + t).split(" ");
        return k(i, function(t) {
            if (t in R)
                return S[t] = e = S[e] = t,
                !1
        }),
        S[e]
    }
    );
    function F(t, e) {
        return parseInt(a.getComputedStyle(t[0], null)[e], 10) || 0
    }
    function q(e, i, t) {
        var n, s = x(e, "_cashEvents"), o = s && s[i];
        o && (t ? (e.removeEventListener(i, t),
        0 <= (n = o.indexOf(t)) && o.splice(n, 1)) : (k(o, function(t) {
            e.removeEventListener(i, t)
        }),
        o = []))
    }
    function N(t, e) {
        return "&" + encodeURIComponent(t) + "=" + encodeURIComponent(e).replace(/%20/g, "+")
    }
    function z(t) {
        var e, i, n, s = t.type;
        if (!s)
            return null;
        switch (s.toLowerCase()) {
        case "select-one":
            return 0 <= (n = (i = t).selectedIndex) ? i.options[n].value : null;
        case "select-multiple":
            return e = [],
            k(t.options, function(t) {
                t.selected && e.push(t.value)
            }),
            e.length ? e : null;
        case "radio":
        case "checkbox":
            return t.checked ? t.value : null;
        default:
            return t.value ? t.value : null
        }
    }
    function V(e, i, n) {
        var t = d(i);
        t || !i.length ? k(e, t ? function(t) {
            return t.insertAdjacentHTML(n ? "afterbegin" : "beforeend", i)
        }
        : function(t, e) {
            return function(t, e, i) {
                if (i) {
                    var n = t.childNodes[0];
                    t.insertBefore(e, n)
                } else
                    t.appendChild(e)
            }(t, 0 === e ? i : i.cloneNode(!0), n)
        }
        ) : k(i, function(t) {
            return V(e, t, n)
        })
    }
    _.prefixedProp = j,
    _.camelCase = W,
    y.extend({
        css: function(e, i) {
            if (d(e))
                return e = j(e),
                1 < arguments.length ? this.each(function(t) {
                    return t.style[e] = i
                }) : a.getComputedStyle(this[0])[e];
            for (var t in e)
                this.css(t, e[t]);
            return this
        }
    }),
    k(["Width", "Height"], function(e) {
        var t = e.toLowerCase();
        y[t] = function() {
            return this[0].getBoundingClientRect()[t]
        }
        ,
        y["inner" + e] = function() {
            return this[0]["client" + e]
        }
        ,
        y["outer" + e] = function(t) {
            return this[0]["offset" + e] + (t ? F(this, "margin" + ("Width" === e ? "Left" : "Top")) + F(this, "margin" + ("Width" === e ? "Right" : "Bottom")) : 0)
        }
    }),
    y.extend({
        off: function(e, i) {
            return this.each(function(t) {
                return q(t, e, i)
            })
        },
        on: function(a, i, r, l) {
            var n;
            if (!d(a)) {
                for (var t in a)
                    this.on(t, i, a[t]);
                return this
            }
            return h(i) && (r = i,
            i = null),
            "ready" === a ? (m(r),
            this) : (i && (n = r,
            r = function(t) {
                for (var e = t.target; !b(e, i); ) {
                    if (e === this || null === e)
                        return e = !1;
                    e = e.parentNode
                }
                e && n.call(e, t)
            }
            ),
            this.each(function(t) {
                var e, i, n, s, o = r;
                l && (o = function() {
                    r.apply(this, arguments),
                    q(t, a, o)
                }
                ),
                i = a,
                n = o,
                (s = x(e = t, "_cashEvents") || O(e, "_cashEvents", {}))[i] = s[i] || [],
                s[i].push(n),
                e.addEventListener(i, n)
            }))
        },
        one: function(t, e, i) {
            return this.on(t, e, i, !0)
        },
        ready: m,
        trigger: function(t, e) {
            if (document.createEvent) {
                var i = document.createEvent("HTMLEvents");
                return i.initEvent(t, !0, !1),
                i = this.extend(i, e),
                this.each(function(t) {
                    return t.dispatchEvent(i)
                })
            }
        }
    }),
    y.extend({
        serialize: function() {
            var s = "";
            return k(this[0].elements || this, function(t) {
                if (!t.disabled && "FIELDSET" !== t.tagName) {
                    var e = t.name;
                    switch (t.type.toLowerCase()) {
                    case "file":
                    case "reset":
                    case "submit":
                    case "button":
                        break;
                    case "select-multiple":
                        var i = z(t);
                        null !== i && k(i, function(t) {
                            s += N(e, t)
                        });
                        break;
                    default:
                        var n = z(t);
                        null !== n && (s += N(e, n))
                    }
                }
            }),
            s.substr(1)
        },
        val: function(e) {
            return void 0 === e ? z(this[0]) : this.each(function(t) {
                return t.value = e
            })
        }
    }),
    y.extend({
        after: function(t) {
            return _(t).insertAfter(this),
            this
        },
        append: function(t) {
            return V(this, t),
            this
        },
        appendTo: function(t) {
            return V(_(t), this),
            this
        },
        before: function(t) {
            return _(t).insertBefore(this),
            this
        },
        clone: function() {
            return _(this.map(function(t) {
                return t.cloneNode(!0)
            }))
        },
        empty: function() {
            return this.html(""),
            this
        },
        html: function(t) {
            if (void 0 === t)
                return this[0].innerHTML;
            var e = t.nodeType ? t[0].outerHTML : t;
            return this.each(function(t) {
                return t.innerHTML = e
            })
        },
        insertAfter: function(t) {
            var s = this;
            return _(t).each(function(t, e) {
                var i = t.parentNode
                  , n = t.nextSibling;
                s.each(function(t) {
                    i.insertBefore(0 === e ? t : t.cloneNode(!0), n)
                })
            }),
            this
        },
        insertBefore: function(t) {
            var s = this;
            return _(t).each(function(e, i) {
                var n = e.parentNode;
                s.each(function(t) {
                    n.insertBefore(0 === i ? t : t.cloneNode(!0), e)
                })
            }),
            this
        },
        prepend: function(t) {
            return V(this, t, !0),
            this
        },
        prependTo: function(t) {
            return V(_(t), this, !0),
            this
        },
        remove: function() {
            return this.each(function(t) {
                if (t.parentNode)
                    return t.parentNode.removeChild(t)
            })
        },
        text: function(e) {
            return void 0 === e ? this[0].textContent : this.each(function(t) {
                return t.textContent = e
            })
        }
    });
    var X = o.documentElement;
    return y.extend({
        position: function() {
            var t = this[0];
            return {
                left: t.offsetLeft,
                top: t.offsetTop
            }
        },
        offset: function() {
            var t = this[0].getBoundingClientRect();
            return {
                top: t.top + a.pageYOffset - X.clientTop,
                left: t.left + a.pageXOffset - X.clientLeft
            }
        },
        offsetParent: function() {
            return _(this[0].offsetParent)
        }
    }),
    y.extend({
        children: function(e) {
            var i = [];
            return this.each(function(t) {
                s.apply(i, t.children)
            }),
            i = C(i),
            e ? i.filter(function(t) {
                return b(t, e)
            }) : i
        },
        closest: function(t) {
            return !t || this.length < 1 ? _() : this.is(t) ? this.filter(t) : this.parent().closest(t)
        },
        is: function(e) {
            if (!e)
                return !1;
            var i = !1
              , n = w(e);
            return this.each(function(t) {
                return !(i = n(t, e))
            }),
            i
        },
        find: function(e) {
            if (!e || e.nodeType)
                return _(e && this.has(e).length ? e : null);
            var i = [];
            return this.each(function(t) {
                s.apply(i, v(e, t))
            }),
            C(i)
        },
        has: function(e) {
            var t = d(e) ? function(t) {
                return 0 !== v(e, t).length
            }
            : function(t) {
                return t.contains(e)
            }
            ;
            return this.filter(t)
        },
        next: function() {
            return _(this[0].nextElementSibling)
        },
        not: function(e) {
            if (!e)
                return this;
            var i = w(e);
            return this.filter(function(t) {
                return !i(t, e)
            })
        },
        parent: function() {
            var e = [];
            return this.each(function(t) {
                t && t.parentNode && e.push(t.parentNode)
            }),
            C(e)
        },
        parents: function(e) {
            var i, n = [];
            return this.each(function(t) {
                for (i = t; i && i.parentNode && i !== o.body.parentNode; )
                    i = i.parentNode,
                    (!e || e && b(i, e)) && n.push(i)
            }),
            C(n)
        },
        prev: function() {
            return _(this[0].previousElementSibling)
        },
        siblings: function(t) {
            var e = this.parent().children(t)
              , i = this[0];
            return e.filter(function(t) {
                return t !== i
            })
        }
    }),
    _
}();
var Component = function() {
    function s(t, e, i) {
        _classCallCheck(this, s),
        e instanceof Element || console.error(Error(e + " is not an HTML Element"));
        var n = t.getInstance(e);
        n && n.destroy(),
        this.el = e,
        this.$el = cash(e)
    }
    return _createClass(s, null, [{
        key: "init",
        value: function(t, e, i) {
            var n = null;
            if (e instanceof Element)
                n = new t(e,i);
            else if (e && (e.jquery || e.cash || e instanceof NodeList)) {
                for (var s = [], o = 0; o < e.length; o++)
                    s.push(new t(e[o],i));
                n = s
            }
            return n
        }
    }]),
    s
}();
!function(t) {
    t.Package ? M = {} : t.M = {},
    M.jQueryLoaded = !!t.jQuery
}(window),
"function" == typeof define && define.amd ? define("M", [], function() {
    return M
}) : "undefined" == typeof exports || exports.nodeType || ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = M),
exports.default = M),
M.version = "1.0.0",
M.keys = {
    TAB: 9,
    ENTER: 13,
    ESC: 27,
    ARROW_UP: 38,
    ARROW_DOWN: 40
},
M.tabPressed = !1,
M.keyDown = !1;
var docHandleKeydown = function(t) {
    M.keyDown = !0,
    t.which !== M.keys.TAB && t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || (M.tabPressed = !0)
}
  , docHandleKeyup = function(t) {
    M.keyDown = !1,
    t.which !== M.keys.TAB && t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || (M.tabPressed = !1)
}
  , docHandleFocus = function(t) {
    M.keyDown && document.body.classList.add("keyboard-focused")
}
  , docHandleBlur = function(t) {
    document.body.classList.remove("keyboard-focused")
};
document.addEventListener("keydown", docHandleKeydown, !0),
document.addEventListener("keyup", docHandleKeyup, !0),
document.addEventListener("focus", docHandleFocus, !0),
document.addEventListener("blur", docHandleBlur, !0),
M.initializeJqueryWrapper = function(n, s, o) {
    jQuery.fn[s] = function(e) {
        if (n.prototype[e]) {
            var i = Array.prototype.slice.call(arguments, 1);
            if ("get" === e.slice(0, 3)) {
                var t = this.first()[0][o];
                return t[e].apply(t, i)
            }
            return this.each(function() {
                var t = this[o];
                t[e].apply(t, i)
            })
        }
        if ("object" == typeof e || !e)
            return n.init(this, e),
            this;
        jQuery.error("Method " + e + " does not exist on jQuery." + s)
    }
}
,
M.AutoInit = function(t) {
    var e = t || document.body
      , i = {
        Autocomplete: e.querySelectorAll(".autocomplete:not(.no-autoinit)"),
        Carousel: e.querySelectorAll(".carousel:not(.no-autoinit)"),
        Chips: e.querySelectorAll(".chips:not(.no-autoinit)"),
        Collapsible: e.querySelectorAll(".collapsible:not(.no-autoinit)"),
        Datepicker: e.querySelectorAll(".datepicker:not(.no-autoinit)"),
        Dropdown: e.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"),
        Materialbox: e.querySelectorAll(".materialboxed:not(.no-autoinit)"),
        Modal: e.querySelectorAll(".modal:not(.no-autoinit)"),
        Parallax: e.querySelectorAll(".parallax:not(.no-autoinit)"),
        Pushpin: e.querySelectorAll(".pushpin:not(.no-autoinit)"),
        ScrollSpy: e.querySelectorAll(".scrollspy:not(.no-autoinit)"),
        FormSelect: e.querySelectorAll("select:not(.no-autoinit)"),
        Sidenav: e.querySelectorAll(".sidenav:not(.no-autoinit)"),
        Tabs: e.querySelectorAll(".tabs:not(.no-autoinit)"),
        TapTarget: e.querySelectorAll(".tap-target:not(.no-autoinit)"),
        Timepicker: e.querySelectorAll(".timepicker:not(.no-autoinit)"),
        Tooltip: e.querySelectorAll(".tooltipped:not(.no-autoinit)"),
        FloatingActionButton: e.querySelectorAll(".fixed-action-btn:not(.no-autoinit)")
    };
    for (var n in i) {
        M[n].init(i[n])
    }
}
,
M.objectSelectorString = function(t) {
    return ((t.prop("tagName") || "") + (t.attr("id") || "") + (t.attr("class") || "")).replace(/\s/g, "")
}
,
M.guid = function() {
    function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    }
}(),
M.escapeHash = function(t) {
    return t.replace(/(:|\.|\[|\]|,|=|\/)/g, "\\$1")
}
,
M.elementOrParentIsFixed = function(t) {
    var e = $(t)
      , i = e.add(e.parents())
      , n = !1;
    return i.each(function() {
        if ("fixed" === $(this).css("position"))
            return !(n = !0)
    }),
    n
}
,
M.checkWithinContainer = function(t, e, i) {
    var n = {
        top: !1,
        right: !1,
        bottom: !1,
        left: !1
    }
      , s = t.getBoundingClientRect()
      , o = t === document.body ? Math.max(s.bottom, window.innerHeight) : s.bottom
      , a = t.scrollLeft
      , r = t.scrollTop
      , l = e.left - a
      , h = e.top - r;
    return (l < s.left + i || l < i) && (n.left = !0),
    (l + e.width > s.right - i || l + e.width > window.innerWidth - i) && (n.right = !0),
    (h < s.top + i || h < i) && (n.top = !0),
    (h + e.height > o - i || h + e.height > window.innerHeight - i) && (n.bottom = !0),
    n
}
,
M.checkPossibleAlignments = function(t, e, i, n) {
    var s = {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0,
        spaceOnTop: null,
        spaceOnRight: null,
        spaceOnBottom: null,
        spaceOnLeft: null
    }
      , o = "visible" === getComputedStyle(e).overflow
      , a = e.getBoundingClientRect()
      , r = Math.min(a.height, window.innerHeight)
      , l = Math.min(a.width, window.innerWidth)
      , h = t.getBoundingClientRect()
      , d = e.scrollLeft
      , u = e.scrollTop
      , c = i.left - d
      , p = i.top - u
      , v = i.top + h.height - u;
    return s.spaceOnRight = o ? window.innerWidth - (h.left + i.width) : l - (c + i.width),
    s.spaceOnRight < 0 && (s.left = !1),
    s.spaceOnLeft = o ? h.right - i.width : c - i.width + h.width,
    s.spaceOnLeft < 0 && (s.right = !1),
    s.spaceOnBottom = o ? window.innerHeight - (h.top + i.height + n) : r - (p + i.height + n),
    s.spaceOnBottom < 0 && (s.top = !1),
    s.spaceOnTop = o ? h.bottom - (i.height + n) : v - (i.height - n),
    s.spaceOnTop < 0 && (s.bottom = !1),
    s
}
,
M.getOverflowParent = function(t) {
    return null == t ? null : t === document.body || "visible" !== getComputedStyle(t).overflow ? t : M.getOverflowParent(t.parentElement)
}
,
M.getIdFromTrigger = function(t) {
    var e = t.getAttribute("data-target");
    return e || (e = (e = t.getAttribute("href")) ? e.slice(1) : ""),
    e
}
,
M.getDocumentScrollTop = function() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}
,
M.getDocumentScrollLeft = function() {
    return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
}
;
var getTime = Date.now || function() {
    return (new Date).getTime()
}
;
M.throttle = function(i, n, s) {
    var o = void 0
      , a = void 0
      , r = void 0
      , l = null
      , h = 0;
    s || (s = {});
    var d = function() {
        h = !1 === s.leading ? 0 : getTime(),
        l = null,
        r = i.apply(o, a),
        o = a = null
    };
    return function() {
        var t = getTime();
        h || !1 !== s.leading || (h = t);
        var e = n - (t - h);
        return o = this,
        a = arguments,
        e <= 0 ? (clearTimeout(l),
        l = null,
        h = t,
        r = i.apply(o, a),
        o = a = null) : l || !1 === s.trailing || (l = setTimeout(d, e)),
        r
    }
}
;
var $jscomp = {
    scope: {}
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, i) {
    if (i.get || i.set)
        throw new TypeError("ES3 does not support getters and setters.");
    t != Array.prototype && t != Object.prototype && (t[e] = i.value)
}
,
$jscomp.getGlobal = function(t) {
    return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t
}
,
$jscomp.global = $jscomp.getGlobal(this),
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_",
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {}
    ,
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
}
,
$jscomp.symbolCounter_ = 0,
$jscomp.Symbol = function(t) {
    return $jscomp.SYMBOL_PREFIX + (t || "") + $jscomp.symbolCounter_++
}
,
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var t = $jscomp.global.Symbol.iterator;
    t || (t = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")),
    "function" != typeof Array.prototype[t] && $jscomp.defineProperty(Array.prototype, t, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this)
        }
    }),
    $jscomp.initSymbolIterator = function() {}
}
,
$jscomp.arrayIterator = function(t) {
    var e = 0;
    return $jscomp.iteratorPrototype(function() {
        return e < t.length ? {
            done: !1,
            value: t[e++]
        } : {
            done: !0
        }
    })
}
,
$jscomp.iteratorPrototype = function(t) {
    return $jscomp.initSymbolIterator(),
    (t = {
        next: t
    })[$jscomp.global.Symbol.iterator] = function() {
        return this
    }
    ,
    t
}
,
$jscomp.array = $jscomp.array || {},
$jscomp.iteratorFromArray = function(e, i) {
    $jscomp.initSymbolIterator(),
    e instanceof String && (e += "");
    var n = 0
      , s = {
        next: function() {
            if (n < e.length) {
                var t = n++;
                return {
                    value: i(t, e[t]),
                    done: !1
                }
            }
            return s.next = function() {
                return {
                    done: !0,
                    value: void 0
                }
            }
            ,
            s.next()
        }
    };
    return s[Symbol.iterator] = function() {
        return s
    }
    ,
    s
}
,
$jscomp.polyfill = function(t, e, i, n) {
    if (e) {
        for (i = $jscomp.global,
        t = t.split("."),
        n = 0; n < t.length - 1; n++) {
            var s = t[n];
            s in i || (i[s] = {}),
            i = i[s]
        }
        (e = e(n = i[t = t[t.length - 1]])) != n && null != e && $jscomp.defineProperty(i, t, {
            configurable: !0,
            writable: !0,
            value: e
        })
    }
}
,
$jscomp.polyfill("Array.prototype.keys", function(t) {
    return t || function() {
        return $jscomp.iteratorFromArray(this, function(t) {
            return t
        })
    }
}, "es6-impl", "es3");
var $jscomp$this = this;
M.anime = function() {
    function s(t) {
        if (!B.col(t))
            try {
                return document.querySelectorAll(t)
            } catch (t) {}
    }
    function b(t, e) {
        for (var i = t.length, n = 2 <= arguments.length ? e : void 0, s = [], o = 0; o < i; o++)
            if (o in t) {
                var a = t[o];
                e.call(n, a, o, t) && s.push(a)
            }
        return s
    }
    function d(t) {
        return t.reduce(function(t, e) {
            return t.concat(B.arr(e) ? d(e) : e)
        }, [])
    }
    function o(t) {
        return B.arr(t) ? t : (B.str(t) && (t = s(t) || t),
        t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
    }
    function a(t, e) {
        return t.some(function(t) {
            return t === e
        })
    }
    function r(t) {
        var e, i = {};
        for (e in t)
            i[e] = t[e];
        return i
    }
    function u(t, e) {
        var i, n = r(t);
        for (i in t)
            n[i] = e.hasOwnProperty(i) ? e[i] : t[i];
        return n
    }
    function c(t, e) {
        var i, n = r(t);
        for (i in e)
            n[i] = B.und(t[i]) ? e[i] : t[i];
        return n
    }
    function l(t) {
        if (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))
            return t[2]
    }
    function h(t, e) {
        return B.fnc(t) ? t(e.target, e.id, e.total) : t
    }
    function w(t, e) {
        if (e in t.style)
            return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
    }
    function p(t, e) {
        return B.dom(t) && a($, e) ? "transform" : B.dom(t) && (t.getAttribute(e) || B.svg(t) && t[e]) ? "attribute" : B.dom(t) && "transform" !== e && w(t, e) ? "css" : null != t[e] ? "object" : void 0
    }
    function v(t, e) {
        switch (p(t, e)) {
        case "transform":
            return function(t, i) {
                var e, n = -1 < (e = i).indexOf("translate") || "perspective" === e ? "px" : -1 < e.indexOf("rotate") || -1 < e.indexOf("skew") ? "deg" : void 0, n = -1 < i.indexOf("scale") ? 1 : 0 + n;
                if (!(t = t.style.transform))
                    return n;
                for (var s = [], o = [], a = [], r = /(\w+)\((.+?)\)/g; s = r.exec(t); )
                    o.push(s[1]),
                    a.push(s[2]);
                return (t = b(a, function(t, e) {
                    return o[e] === i
                })).length ? t[0] : n
            }(t, e);
        case "css":
            return w(t, e);
        case "attribute":
            return t.getAttribute(e)
        }
        return t[e] || 0
    }
    function f(t, e) {
        var i = /^(\*=|\+=|-=)/.exec(t);
        if (!i)
            return t;
        var n = l(t) || 0;
        switch (e = parseFloat(e),
        t = parseFloat(t.replace(i[0], "")),
        i[0][0]) {
        case "+":
            return e + t + n;
        case "-":
            return e - t + n;
        case "*":
            return e * t + n
        }
    }
    function m(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }
    function i(t) {
        t = t.points;
        for (var e, i = 0, n = 0; n < t.numberOfItems; n++) {
            var s = t.getItem(n);
            0 < n && (i += m(e, s)),
            e = s
        }
        return i
    }
    function g(t) {
        if (t.getTotalLength)
            return t.getTotalLength();
        switch (t.tagName.toLowerCase()) {
        case "circle":
            return 2 * Math.PI * t.getAttribute("r");
        case "rect":
            return 2 * t.getAttribute("width") + 2 * t.getAttribute("height");
        case "line":
            return m({
                x: t.getAttribute("x1"),
                y: t.getAttribute("y1")
            }, {
                x: t.getAttribute("x2"),
                y: t.getAttribute("y2")
            });
        case "polyline":
            return i(t);
        case "polygon":
            var e = t.points;
            return i(t) + m(e.getItem(e.numberOfItems - 1), e.getItem(0))
        }
    }
    function C(e, i) {
        function t(t) {
            return t = void 0 === t ? 0 : t,
            e.el.getPointAtLength(1 <= i + t ? i + t : 0)
        }
        var n = t()
          , s = t(-1)
          , o = t(1);
        switch (e.property) {
        case "x":
            return n.x;
        case "y":
            return n.y;
        case "angle":
            return 180 * Math.atan2(o.y - s.y, o.x - s.x) / Math.PI
        }
    }
    function _(t, e) {
        var i, n = /-?\d*\.?\d+/g;
        if (i = B.pth(t) ? t.totalLength : t,
        B.col(i))
            if (B.rgb(i)) {
                var s = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i);
                i = s ? "rgba(" + s[1] + ",1)" : i
            } else
                i = B.hex(i) ? function(t) {
                    t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) {
                        return e + e + i + i + n + n
                    });
                    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                    t = parseInt(e[1], 16);
                    var i = parseInt(e[2], 16)
                      , e = parseInt(e[3], 16);
                    return "rgba(" + t + "," + i + "," + e + ",1)"
                }(i) : B.hsl(i) ? function(t) {
                    function e(t, e, i) {
                        return i < 0 && (i += 1),
                        1 < i && --i,
                        i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                    }
                    var i = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);
                    t = parseInt(i[1]) / 360;
                    var n = parseInt(i[2]) / 100
                      , s = parseInt(i[3]) / 100
                      , i = i[4] || 1;
                    if (0 == n)
                        s = n = t = s;
                    else {
                        var o = s < .5 ? s * (1 + n) : s + n - s * n
                          , a = 2 * s - o
                          , s = e(a, o, t + 1 / 3)
                          , n = e(a, o, t);
                        t = e(a, o, t - 1 / 3)
                    }
                    return "rgba(" + 255 * s + "," + 255 * n + "," + 255 * t + "," + i + ")"
                }(i) : void 0;
        else
            s = (s = l(i)) ? i.substr(0, i.length - s.length) : i,
            i = e && !/\s/g.test(i) ? s + e : s;
        return {
            original: i += "",
            numbers: i.match(n) ? i.match(n).map(Number) : [0],
            strings: B.str(t) || e ? i.split(n) : []
        }
    }
    function y(t) {
        return b(t = t ? d(B.arr(t) ? t.map(o) : o(t)) : [], function(t, e, i) {
            return i.indexOf(t) === e
        })
    }
    function k(t, i) {
        var e = r(i);
        if (B.arr(t)) {
            var n = t.length;
            2 !== n || B.obj(t[0]) ? B.fnc(i.duration) || (e.duration = i.duration / n) : t = {
                value: t
            }
        }
        return o(t).map(function(t, e) {
            return e = e ? 0 : i.delay,
            t = B.obj(t) && !B.pth(t) ? t : {
                value: t
            },
            B.und(t.delay) && (t.delay = e),
            t
        }).map(function(t) {
            return c(t, e)
        })
    }
    function E(o, a) {
        var r;
        return o.tweens.map(function(t) {
            var e = (t = function(t, e) {
                var i, n = {};
                for (i in t) {
                    var s = h(t[i], e);
                    B.arr(s) && 1 === (s = s.map(function(t) {
                        return h(t, e)
                    })).length && (s = s[0]),
                    n[i] = s
                }
                return n.duration = parseFloat(n.duration),
                n.delay = parseFloat(n.delay),
                n
            }(t, a)).value
              , i = v(a.target, o.name)
              , n = r ? r.to.original : i
              , n = B.arr(e) ? e[0] : n
              , s = f(B.arr(e) ? e[1] : e, n)
              , i = l(s) || l(n) || l(i);
            return t.from = _(n, i),
            t.to = _(s, i),
            t.start = r ? r.end : o.offset,
            t.end = t.start + t.delay + t.duration,
            t.easing = function(t) {
                return B.arr(t) ? D.apply(this, t) : S[t]
            }(t.easing),
            t.elasticity = (1e3 - Math.min(Math.max(t.elasticity, 1), 999)) / 1e3,
            t.isPath = B.pth(e),
            t.isColor = B.col(t.from.original),
            t.isColor && (t.round = 1),
            r = t
        })
    }
    function M(e, t, i, n) {
        var s = "delay" === e;
        return t.length ? (s ? Math.min : Math.max).apply(Math, t.map(function(t) {
            return t[e]
        })) : s ? n.delay : i.offset + n.delay + n.duration
    }
    function n(t) {
        var e, i, n, s, o = u(L, t), a = u(T, t), r = (i = t.targets,
        (n = y(i)).map(function(t, e) {
            return {
                target: t,
                id: e,
                total: n.length
            }
        })), l = [], h = c(o, a);
        for (e in t)
            h.hasOwnProperty(e) || "targets" === e || l.push({
                name: e,
                offset: h.offset,
                tweens: k(t[e], a)
            });
        return s = l,
        t = b(d(r.map(function(n) {
            return s.map(function(t) {
                var e = p(n.target, t.name);
                if (e) {
                    var i = E(t, n);
                    t = {
                        type: e,
                        property: t.name,
                        animatable: n,
                        tweens: i,
                        duration: i[i.length - 1].end,
                        delay: i[0].delay
                    }
                } else
                    t = void 0;
                return t
            })
        })), function(t) {
            return !B.und(t)
        }),
        c(o, {
            children: [],
            animatables: r,
            animations: t,
            duration: M("duration", t, o, a),
            delay: M("delay", t, o, a)
        })
    }
    function O(t) {
        function d() {
            return window.Promise && new Promise(function(t) {
                return _ = t
            }
            )
        }
        function u(t) {
            return k.reversed ? k.duration - t : t
        }
        function c(e) {
            for (var t = 0, i = {}, n = k.animations, s = n.length; t < s; ) {
                var o = n[t]
                  , a = o.animatable
                  , r = o.tweens
                  , l = r.length - 1
                  , h = r[l];
                l && (h = b(r, function(t) {
                    return e < t.end
                })[0] || h);
                for (var r = Math.min(Math.max(e - h.start - h.delay, 0), h.duration) / h.duration, d = isNaN(r) ? 1 : h.easing(r, h.elasticity), r = h.to.strings, u = h.round, l = [], c = void 0, c = h.to.numbers.length, p = 0; p < c; p++) {
                    var v = void 0
                      , v = h.to.numbers[p]
                      , f = h.from.numbers[p]
                      , v = h.isPath ? C(h.value, d * v) : f + d * (v - f);
                    u && (h.isColor && 2 < p || (v = Math.round(v * u) / u)),
                    l.push(v)
                }
                if (h = r.length)
                    for (c = r[0],
                    d = 0; d < h; d++)
                        u = r[d + 1],
                        p = l[d],
                        isNaN(p) || (c = u ? c + (p + u) : c + (p + " "));
                else
                    c = l[0];
                I[o.type](a.target, o.property, c, i, a.id),
                o.currentValue = c,
                t++
            }
            if (t = Object.keys(i).length)
                for (n = 0; n < t; n++)
                    x || (x = w(document.body, "transform") ? "transform" : "-webkit-transform"),
                    k.animatables[n].target.style[x] = i[n].join(" ");
            k.currentTime = e,
            k.progress = e / k.duration * 100
        }
        function p(t) {
            k[t] && k[t](k)
        }
        function v() {
            k.remaining && !0 !== k.remaining && k.remaining--
        }
        function e(t) {
            var e = k.duration
              , i = k.offset
              , n = i + k.delay
              , s = k.currentTime
              , o = k.reversed
              , a = u(t);
            if (k.children.length) {
                var r = k.children
                  , l = r.length;
                if (a >= k.currentTime)
                    for (var h = 0; h < l; h++)
                        r[h].seek(a);
                else
                    for (; l--; )
                        r[l].seek(a)
            }
            (n <= a || !e) && (k.began || (k.began = !0,
            p("begin")),
            p("run")),
            i < a && a < e ? c(a) : (a <= i && 0 !== s && (c(0),
            o && v()),
            (e <= a && s !== e || !e) && (c(e),
            o || v())),
            p("update"),
            e <= t && (k.remaining ? (m = f,
            "alternate" === k.direction && (k.reversed = !k.reversed)) : (k.pause(),
            k.completed || (k.completed = !0,
            p("complete"),
            "Promise"in window && (_(),
            y = d()))),
            g = 0)
        }
        t = void 0 === t ? {} : t;
        var f, m, g = 0, _ = null, y = d(), k = n(t);
        return k.reset = function() {
            var t = k.direction
              , e = k.loop;
            for (k.currentTime = 0,
            k.progress = 0,
            k.paused = !0,
            k.began = !1,
            k.completed = !1,
            k.reversed = "reverse" === t,
            k.remaining = "alternate" === t && 1 === e ? 2 : e,
            c(0),
            t = k.children.length; t--; )
                k.children[t].reset()
        }
        ,
        k.tick = function(t) {
            f = t,
            m || (m = f),
            e((g + f - m) * O.speed)
        }
        ,
        k.seek = function(t) {
            e(u(t))
        }
        ,
        k.pause = function() {
            var t = A.indexOf(k);
            -1 < t && A.splice(t, 1),
            k.paused = !0
        }
        ,
        k.play = function() {
            k.paused && (k.paused = !1,
            m = 0,
            g = u(k.currentTime),
            A.push(k),
            R || H())
        }
        ,
        k.reverse = function() {
            k.reversed = !k.reversed,
            m = 0,
            g = u(k.currentTime)
        }
        ,
        k.restart = function() {
            k.pause(),
            k.reset(),
            k.play()
        }
        ,
        k.finished = y,
        k.reset(),
        k.autoplay && k.play(),
        k
    }
    var x, L = {
        update: void 0,
        begin: void 0,
        run: void 0,
        complete: void 0,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        offset: 0
    }, T = {
        duration: 1e3,
        delay: 0,
        easing: "easeOutElastic",
        elasticity: 500,
        round: 0
    }, $ = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "), B = {
        arr: function(t) {
            return Array.isArray(t)
        },
        obj: function(t) {
            return -1 < Object.prototype.toString.call(t).indexOf("Object")
        },
        pth: function(t) {
            return B.obj(t) && t.hasOwnProperty("totalLength")
        },
        svg: function(t) {
            return t instanceof SVGElement
        },
        dom: function(t) {
            return t.nodeType || B.svg(t)
        },
        str: function(t) {
            return "string" == typeof t
        },
        fnc: function(t) {
            return "function" == typeof t
        },
        und: function(t) {
            return void 0 === t
        },
        hex: function(t) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
        },
        rgb: function(t) {
            return /^rgb/.test(t)
        },
        hsl: function(t) {
            return /^hsl/.test(t)
        },
        col: function(t) {
            return B.hex(t) || B.rgb(t) || B.hsl(t)
        }
    }, D = function() {
        function u(t, e, i) {
            return (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t
        }
        return function(a, r, l, h) {
            if (0 <= a && a <= 1 && 0 <= l && l <= 1) {
                var d = new Float32Array(11);
                if (a !== r || l !== h)
                    for (var t = 0; t < 11; ++t)
                        d[t] = u(.1 * t, a, l);
                return function(t) {
                    if (a === r && l === h)
                        return t;
                    if (0 === t)
                        return 0;
                    if (1 === t)
                        return 1;
                    for (var e = 0, i = 1; 10 !== i && d[i] <= t; ++i)
                        e += .1;
                    var i = e + (t - d[--i]) / (d[i + 1] - d[i]) * .1
                      , n = 3 * (1 - 3 * l + 3 * a) * i * i + 2 * (3 * l - 6 * a) * i + 3 * a;
                    if (.001 <= n) {
                        for (e = 0; e < 4 && 0 != (n = 3 * (1 - 3 * l + 3 * a) * i * i + 2 * (3 * l - 6 * a) * i + 3 * a); ++e)
                            var s = u(i, a, l) - t
                              , i = i - s / n;
                        t = i
                    } else if (0 === n)
                        t = i;
                    else {
                        for (var i = e, e = e + .1, o = 0; 0 < (n = u(s = i + (e - i) / 2, a, l) - t) ? e = s : i = s,
                        1e-7 < Math.abs(n) && ++o < 10; )
                            ;
                        t = s
                    }
                    return u(t, r, h)
                }
            }
        }
    }(), S = function() {
        function i(t, e) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin(2 * (t - 1 - e / (2 * Math.PI) * Math.asin(1)) * Math.PI / e)
        }
        var t, n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "), e = {
            In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], i],
            Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function(t, e) {
                return 1 - i(1 - t, e)
            }
            ],
            InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function(t, e) {
                return t < .5 ? i(2 * t, e) / 2 : 1 - i(-2 * t + 2, e) / 2
            }
            ]
        }, s = {
            linear: D(.25, .25, .75, .75)
        }, o = {};
        for (t in e)
            o.type = t,
            e[o.type].forEach(function(i) {
                return function(t, e) {
                    s["ease" + i.type + n[e]] = B.fnc(t) ? t : D.apply($jscomp$this, t)
                }
            }(o)),
            o = {
                type: o.type
            };
        return s
    }(), I = {
        css: function(t, e, i) {
            return t.style[e] = i
        },
        attribute: function(t, e, i) {
            return t.setAttribute(e, i)
        },
        object: function(t, e, i) {
            return t[e] = i
        },
        transform: function(t, e, i, n, s) {
            n[s] || (n[s] = []),
            n[s].push(e + "(" + i + ")")
        }
    }, A = [], R = 0, H = function() {
        function n() {
            R = requestAnimationFrame(t)
        }
        function t(t) {
            var e = A.length;
            if (e) {
                for (var i = 0; i < e; )
                    A[i] && A[i].tick(t),
                    i++;
                n()
            } else
                cancelAnimationFrame(R),
                R = 0
        }
        return n
    }();
    return O.version = "2.2.0",
    O.speed = 1,
    O.running = A,
    O.remove = function(t) {
        t = y(t);
        for (var e = A.length; e--; )
            for (var i = A[e], n = i.animations, s = n.length; s--; )
                a(t, n[s].animatable.target) && (n.splice(s, 1),
                n.length || i.pause())
    }
    ,
    O.getValue = v,
    O.path = function(t, e) {
        var i = B.str(t) ? s(t)[0] : t
          , n = e || 100;
        return function(t) {
            return {
                el: i,
                property: t,
                totalLength: g(i) * (n / 100)
            }
        }
    }
    ,
    O.setDashoffset = function(t) {
        var e = g(t);
        return t.setAttribute("stroke-dasharray", e),
        e
    }
    ,
    O.bezier = D,
    O.easings = S,
    O.timeline = function(n) {
        var s = O(n);
        return s.pause(),
        s.duration = 0,
        s.add = function(t) {
            return s.children.forEach(function(t) {
                t.began = !0,
                t.completed = !0
            }),
            o(t).forEach(function(t) {
                var e = c(t, u(T, n || {}));
                e.targets = e.targets || n.targets,
                t = s.duration;
                var i = e.offset;
                e.autoplay = !1,
                e.direction = s.direction,
                e.offset = B.und(i) ? t : f(i, t),
                s.began = !0,
                s.completed = !0,
                s.seek(e.offset),
                (e = O(e)).began = !0,
                e.completed = !0,
                e.duration > t && (s.duration = e.duration),
                s.children.push(e)
            }),
            s.seek(0),
            s.reset(),
            s.autoplay && s.restart(),
            s
        }
        ,
        s
    }
    ,
    O.random = function(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    }
    ,
    O
}(),
function(r, l) {
    "use strict";
    var e = {
        accordion: !0,
        onOpenStart: void 0,
        onOpenEnd: void 0,
        onCloseStart: void 0,
        onCloseEnd: void 0,
        inDuration: 300,
        outDuration: 300
    }
      , t = function(t) {
        function s(t, e) {
            _classCallCheck(this, s);
            var i = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, t, e));
            (i.el.M_Collapsible = i).options = r.extend({}, s.defaults, e),
            i.$headers = i.$el.children("li").children(".collapsible-header"),
            i.$headers.attr("tabindex", 0),
            i._setupEventHandlers();
            var n = i.$el.children("li.active").children(".collapsible-body");
            return i.options.accordion ? n.first().css("display", "block") : n.css("display", "block"),
            i
        }
        return _inherits(s, Component),
        _createClass(s, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.M_Collapsible = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                var e = this;
                this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind(this),
                this._handleCollapsibleKeydownBound = this._handleCollapsibleKeydown.bind(this),
                this.el.addEventListener("click", this._handleCollapsibleClickBound),
                this.$headers.each(function(t) {
                    t.addEventListener("keydown", e._handleCollapsibleKeydownBound)
                })
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                var e = this;
                this.el.removeEventListener("click", this._handleCollapsibleClickBound),
                this.$headers.each(function(t) {
                    t.removeEventListener("keydown", e._handleCollapsibleKeydownBound)
                })
            }
        }, {
            key: "_handleCollapsibleClick",
            value: function(t) {
                var e = r(t.target).closest(".collapsible-header");
                if (t.target && e.length) {
                    var i = e.closest(".collapsible");
                    if (i[0] === this.el) {
                        var n = e.closest("li")
                          , s = i.children("li")
                          , o = n[0].classList.contains("active")
                          , a = s.index(n);
                        o ? this.close(a) : this.open(a)
                    }
                }
            }
        }, {
            key: "_handleCollapsibleKeydown",
            value: function(t) {
                13 === t.keyCode && this._handleCollapsibleClickBound(t)
            }
        }, {
            key: "_animateIn",
            value: function(t) {
                var e = this
                  , i = this.$el.children("li").eq(t);
                if (i.length) {
                    var n = i.children(".collapsible-body");
                    l.remove(n[0]),
                    n.css({
                        display: "block",
                        overflow: "hidden",
                        height: 0,
                        paddingTop: "",
                        paddingBottom: ""
                    });
                    var s = n.css("padding-top")
                      , o = n.css("padding-bottom")
                      , a = n[0].scrollHeight;
                    n.css({
                        paddingTop: 0,
                        paddingBottom: 0
                    }),
                    l({
                        targets: n[0],
                        height: a,
                        paddingTop: s,
                        paddingBottom: o,
                        duration: this.options.inDuration,
                        easing: "easeInOutCubic",
                        complete: function(t) {
                            n.css({
                                overflow: "",
                                paddingTop: "",
                                paddingBottom: "",
                                height: ""
                            }),
                            "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, i[0])
                        }
                    })
                }
            }
        }, {
            key: "_animateOut",
            value: function(t) {
                var e = this
                  , i = this.$el.children("li").eq(t);
                if (i.length) {
                    var n = i.children(".collapsible-body");
                    l.remove(n[0]),
                    n.css("overflow", "hidden"),
                    l({
                        targets: n[0],
                        height: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        duration: this.options.outDuration,
                        easing: "easeInOutCubic",
                        complete: function() {
                            n.css({
                                height: "",
                                overflow: "",
                                padding: "",
                                display: ""
                            }),
                            "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, i[0])
                        }
                    })
                }
            }
        }, {
            key: "open",
            value: function(t) {
                var i = this
                  , e = this.$el.children("li").eq(t);
                if (e.length && !e[0].classList.contains("active")) {
                    if ("function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, e[0]),
                    this.options.accordion) {
                        var n = this.$el.children("li");
                        this.$el.children("li.active").each(function(t) {
                            var e = n.index(r(t));
                            i.close(e)
                        })
                    }
                    e[0].classList.add("active"),
                    this._animateIn(t)
                }
            }
        }, {
            key: "close",
            value: function(t) {
                var e = this.$el.children("li").eq(t);
                e.length && e[0].classList.contains("active") && ("function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, e[0]),
                e[0].classList.remove("active"),
                this._animateOut(t))
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Collapsible
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        s
    }();
    M.Collapsible = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "collapsible", "M_Collapsible")
}(cash, M.anime),
function(h, i) {
    "use strict";
    var e = {
        alignment: "left",
        autoFocus: !0,
        constrainWidth: !0,
        container: null,
        coverTrigger: !0,
        closeOnClick: !0,
        hover: !1,
        inDuration: 150,
        outDuration: 250,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        onItemClick: null
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return i.el.M_Dropdown = i,
            n._dropdowns.push(i),
            i.id = M.getIdFromTrigger(t),
            i.dropdownEl = document.getElementById(i.id),
            i.$dropdownEl = h(i.dropdownEl),
            i.options = h.extend({}, n.defaults, e),
            i.isOpen = !1,
            i.isScrollable = !1,
            i.isTouchMoving = !1,
            i.focusedIndex = -1,
            i.filterQuery = [],
            i.options.container ? h(i.options.container).append(i.dropdownEl) : i.$el.after(i.dropdownEl),
            i._makeDropdownFocusable(),
            i._resetFilterQueryBound = i._resetFilterQuery.bind(i),
            i._handleDocumentClickBound = i._handleDocumentClick.bind(i),
            i._handleDocumentTouchmoveBound = i._handleDocumentTouchmove.bind(i),
            i._handleDropdownClickBound = i._handleDropdownClick.bind(i),
            i._handleDropdownKeydownBound = i._handleDropdownKeydown.bind(i),
            i._handleTriggerKeydownBound = i._handleTriggerKeydown.bind(i),
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._resetDropdownStyles(),
                this._removeEventHandlers(),
                n._dropdowns.splice(n._dropdowns.indexOf(this), 1),
                this.el.M_Dropdown = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this.el.addEventListener("keydown", this._handleTriggerKeydownBound),
                this.dropdownEl.addEventListener("click", this._handleDropdownClickBound),
                this.options.hover ? (this._handleMouseEnterBound = this._handleMouseEnter.bind(this),
                this.el.addEventListener("mouseenter", this._handleMouseEnterBound),
                this._handleMouseLeaveBound = this._handleMouseLeave.bind(this),
                this.el.addEventListener("mouseleave", this._handleMouseLeaveBound),
                this.dropdownEl.addEventListener("mouseleave", this._handleMouseLeaveBound)) : (this._handleClickBound = this._handleClick.bind(this),
                this.el.addEventListener("click", this._handleClickBound))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("keydown", this._handleTriggerKeydownBound),
                this.dropdownEl.removeEventListener("click", this._handleDropdownClickBound),
                this.options.hover ? (this.el.removeEventListener("mouseenter", this._handleMouseEnterBound),
                this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound),
                this.dropdownEl.removeEventListener("mouseleave", this._handleMouseLeaveBound)) : this.el.removeEventListener("click", this._handleClickBound)
            }
        }, {
            key: "_setupTemporaryEventHandlers",
            value: function() {
                document.body.addEventListener("click", this._handleDocumentClickBound, !0),
                document.body.addEventListener("touchend", this._handleDocumentClickBound),
                document.body.addEventListener("touchmove", this._handleDocumentTouchmoveBound),
                this.dropdownEl.addEventListener("keydown", this._handleDropdownKeydownBound)
            }
        }, {
            key: "_removeTemporaryEventHandlers",
            value: function() {
                document.body.removeEventListener("click", this._handleDocumentClickBound, !0),
                document.body.removeEventListener("touchend", this._handleDocumentClickBound),
                document.body.removeEventListener("touchmove", this._handleDocumentTouchmoveBound),
                this.dropdownEl.removeEventListener("keydown", this._handleDropdownKeydownBound)
            }
        }, {
            key: "_handleClick",
            value: function(t) {
                t.preventDefault(),
                this.open()
            }
        }, {
            key: "_handleMouseEnter",
            value: function() {
                this.open()
            }
        }, {
            key: "_handleMouseLeave",
            value: function(t) {
                var e = t.toElement || t.relatedTarget
                  , i = !!h(e).closest(".dropdown-content").length
                  , n = !1
                  , s = h(e).closest(".dropdown-trigger");
                s.length && s[0].M_Dropdown && s[0].M_Dropdown.isOpen && (n = !0),
                n || i || this.close()
            }
        }, {
            key: "_handleDocumentClick",
            value: function(t) {
                var e = this
                  , i = h(t.target);
                this.options.closeOnClick && i.closest(".dropdown-content").length && !this.isTouchMoving ? setTimeout(function() {
                    e.close()
                }, 0) : !i.closest(".dropdown-trigger").length && i.closest(".dropdown-content").length || setTimeout(function() {
                    e.close()
                }, 0),
                this.isTouchMoving = !1
            }
        }, {
            key: "_handleTriggerKeydown",
            value: function(t) {
                t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ENTER || this.isOpen || (t.preventDefault(),
                this.open())
            }
        }, {
            key: "_handleDocumentTouchmove",
            value: function(t) {
                h(t.target).closest(".dropdown-content").length && (this.isTouchMoving = !0)
            }
        }, {
            key: "_handleDropdownClick",
            value: function(t) {
                if ("function" == typeof this.options.onItemClick) {
                    var e = h(t.target).closest("li")[0];
                    this.options.onItemClick.call(this, e)
                }
            }
        }, {
            key: "_handleDropdownKeydown",
            value: function(t) {
                if (t.which === M.keys.TAB)
                    t.preventDefault(),
                    this.close();
                else if (t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || !this.isOpen)
                    if (t.which === M.keys.ENTER && this.isOpen) {
                        var e = this.dropdownEl.children[this.focusedIndex]
                          , i = h(e).find("a, button").first();
                        i.length ? i[0].click() : e && e.click()
                    } else
                        t.which === M.keys.ESC && this.isOpen && (t.preventDefault(),
                        this.close());
                else {
                    t.preventDefault();
                    var n = t.which === M.keys.ARROW_DOWN ? 1 : -1
                      , s = this.focusedIndex
                      , o = !1;
                    do {
                        if (s += n,
                        this.dropdownEl.children[s] && -1 !== this.dropdownEl.children[s].tabIndex) {
                            o = !0;
                            break
                        }
                    } while (s < this.dropdownEl.children.length && 0 <= s);
                    o && (this.focusedIndex = s,
                    this._focusFocusedItem())
                }
                var a = String.fromCharCode(t.which).toLowerCase();
                if (a && -1 === [9, 13, 27, 38, 40].indexOf(t.which)) {
                    this.filterQuery.push(a);
                    var r = this.filterQuery.join("")
                      , l = h(this.dropdownEl).find("li").filter(function(t) {
                        return 0 === h(t).text().toLowerCase().indexOf(r)
                    })[0];
                    l && (this.focusedIndex = h(l).index(),
                    this._focusFocusedItem())
                }
                this.filterTimeout = setTimeout(this._resetFilterQueryBound, 1e3)
            }
        }, {
            key: "_resetFilterQuery",
            value: function() {
                this.filterQuery = []
            }
        }, {
            key: "_resetDropdownStyles",
            value: function() {
                this.$dropdownEl.css({
                    display: "",
                    width: "",
                    height: "",
                    left: "",
                    top: "",
                    "transform-origin": "",
                    transform: "",
                    opacity: ""
                })
            }
        }, {
            key: "_makeDropdownFocusable",
            value: function() {
                this.dropdownEl.tabIndex = 0,
                h(this.dropdownEl).children().each(function(t) {
                    t.getAttribute("tabindex") || t.setAttribute("tabindex", 0)
                })
            }
        }, {
            key: "_focusFocusedItem",
            value: function() {
                0 <= this.focusedIndex && this.focusedIndex < this.dropdownEl.children.length && this.options.autoFocus && this.dropdownEl.children[this.focusedIndex].focus()
            }
        }, {
            key: "_getDropdownPosition",
            value: function() {
                this.el.offsetParent.getBoundingClientRect();
                var t = this.el.getBoundingClientRect()
                  , e = this.dropdownEl.getBoundingClientRect()
                  , i = e.height
                  , n = e.width
                  , s = t.left - e.left
                  , o = t.top - e.top
                  , a = {
                    left: s,
                    top: o,
                    height: i,
                    width: n
                }
                  , r = this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent : this.dropdownEl.parentNode
                  , l = M.checkPossibleAlignments(this.el, r, a, this.options.coverTrigger ? 0 : t.height)
                  , h = "top"
                  , d = this.options.alignment;
                if (o += this.options.coverTrigger ? 0 : t.height,
                this.isScrollable = !1,
                l.top || (l.bottom ? h = "bottom" : (this.isScrollable = !0,
                l.spaceOnTop > l.spaceOnBottom ? (h = "bottom",
                i += l.spaceOnTop,
                o -= l.spaceOnTop) : i += l.spaceOnBottom)),
                !l[d]) {
                    var u = "left" === d ? "right" : "left";
                    l[u] ? d = u : l.spaceOnLeft > l.spaceOnRight ? (d = "right",
                    n += l.spaceOnLeft,
                    s -= l.spaceOnLeft) : (d = "left",
                    n += l.spaceOnRight)
                }
                return "bottom" === h && (o = o - e.height + (this.options.coverTrigger ? t.height : 0)),
                "right" === d && (s = s - e.width + t.width),
                {
                    x: s,
                    y: o,
                    verticalAlignment: h,
                    horizontalAlignment: d,
                    height: i,
                    width: n
                }
            }
        }, {
            key: "_animateIn",
            value: function() {
                var e = this;
                i.remove(this.dropdownEl),
                i({
                    targets: this.dropdownEl,
                    opacity: {
                        value: [0, 1],
                        easing: "easeOutQuad"
                    },
                    scaleX: [.3, 1],
                    scaleY: [.3, 1],
                    duration: this.options.inDuration,
                    easing: "easeOutQuint",
                    complete: function(t) {
                        e.options.autoFocus && e.dropdownEl.focus(),
                        "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, e.el)
                    }
                })
            }
        }, {
            key: "_animateOut",
            value: function() {
                var e = this;
                i.remove(this.dropdownEl),
                i({
                    targets: this.dropdownEl,
                    opacity: {
                        value: 0,
                        easing: "easeOutQuint"
                    },
                    scaleX: .3,
                    scaleY: .3,
                    duration: this.options.outDuration,
                    easing: "easeOutQuint",
                    complete: function(t) {
                        e._resetDropdownStyles(),
                        "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, e.el)
                    }
                })
            }
        }, {
            key: "_placeDropdown",
            value: function() {
                var t = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
                this.dropdownEl.style.width = t + "px";
                var e = this._getDropdownPosition();
                this.dropdownEl.style.left = e.x + "px",
                this.dropdownEl.style.top = e.y + "px",
                this.dropdownEl.style.height = e.height + "px",
                this.dropdownEl.style.width = e.width + "px",
                this.dropdownEl.style.transformOrigin = ("left" === e.horizontalAlignment ? "0" : "100%") + " " + ("top" === e.verticalAlignment ? "0" : "100%")
            }
        }, {
            key: "open",
            value: function() {
                this.isOpen || (this.isOpen = !0,
                "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el),
                this._resetDropdownStyles(),
                this.dropdownEl.style.display = "block",
                this._placeDropdown(),
                this._animateIn(),
                this._setupTemporaryEventHandlers())
            }
        }, {
            key: "close",
            value: function() {
                this.isOpen && (this.isOpen = !1,
                this.focusedIndex = -1,
                "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                this._animateOut(),
                this._removeTemporaryEventHandlers(),
                this.options.autoFocus && this.el.focus())
            }
        }, {
            key: "recalculateDimensions",
            value: function() {
                this.isOpen && (this.$dropdownEl.css({
                    width: "",
                    height: "",
                    left: "",
                    top: "",
                    "transform-origin": ""
                }),
                this._placeDropdown())
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Dropdown
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    t._dropdowns = [],
    M.Dropdown = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "dropdown", "M_Dropdown")
}(cash, M.anime),
function(s, i) {
    "use strict";
    var e = {
        opacity: .5,
        inDuration: 250,
        outDuration: 250,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: !0,
        dismissible: !0,
        startingTop: "4%",
        endingTop: "10%"
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Modal = i).options = s.extend({}, n.defaults, e),
            i.isOpen = !1,
            i.id = i.$el.attr("id"),
            i._openingTrigger = void 0,
            i.$overlay = s('<div class="modal-overlay"></div>'),
            i.el.tabIndex = 0,
            i._nthModalOpened = 0,
            n._count++,
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                n._count--,
                this._removeEventHandlers(),
                this.el.removeAttribute("style"),
                this.$overlay.remove(),
                this.el.M_Modal = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleOverlayClickBound = this._handleOverlayClick.bind(this),
                this._handleModalCloseClickBound = this._handleModalCloseClick.bind(this),
                1 === n._count && document.body.addEventListener("click", this._handleTriggerClick),
                this.$overlay[0].addEventListener("click", this._handleOverlayClickBound),
                this.el.addEventListener("click", this._handleModalCloseClickBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                0 === n._count && document.body.removeEventListener("click", this._handleTriggerClick),
                this.$overlay[0].removeEventListener("click", this._handleOverlayClickBound),
                this.el.removeEventListener("click", this._handleModalCloseClickBound)
            }
        }, {
            key: "_handleTriggerClick",
            value: function(t) {
                var e = s(t.target).closest(".modal-trigger");
                if (e.length) {
                    var i = M.getIdFromTrigger(e[0])
                      , n = document.getElementById(i).M_Modal;
                    n && n.open(e),
                    t.preventDefault()
                }
            }
        }, {
            key: "_handleOverlayClick",
            value: function() {
                this.options.dismissible && this.close()
            }
        }, {
            key: "_handleModalCloseClick",
            value: function(t) {
                s(t.target).closest(".modal-close").length && this.close()
            }
        }, {
            key: "_handleKeydown",
            value: function(t) {
                27 === t.keyCode && this.options.dismissible && this.close()
            }
        }, {
            key: "_handleFocus",
            value: function(t) {
                this.el.contains(t.target) || this._nthModalOpened !== n._modalsOpen || this.el.focus()
            }
        }, {
            key: "_animateIn",
            value: function() {
                var t = this;
                s.extend(this.el.style, {
                    display: "block",
                    opacity: 0
                }),
                s.extend(this.$overlay[0].style, {
                    display: "block",
                    opacity: 0
                }),
                i({
                    targets: this.$overlay[0],
                    opacity: this.options.opacity,
                    duration: this.options.inDuration,
                    easing: "easeOutQuad"
                });
                var e = {
                    targets: this.el,
                    duration: this.options.inDuration,
                    easing: "easeOutCubic",
                    complete: function() {
                        "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el, t._openingTrigger)
                    }
                };
                this.el.classList.contains("bottom-sheet") ? s.extend(e, {
                    bottom: 0,
                    opacity: 1
                }) : s.extend(e, {
                    top: [this.options.startingTop, this.options.endingTop],
                    opacity: 1,
                    scaleX: [.8, 1],
                    scaleY: [.8, 1]
                }),
                i(e)
            }
        }, {
            key: "_animateOut",
            value: function() {
                var t = this;
                i({
                    targets: this.$overlay[0],
                    opacity: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuart"
                });
                var e = {
                    targets: this.el,
                    duration: this.options.outDuration,
                    easing: "easeOutCubic",
                    complete: function() {
                        t.el.style.display = "none",
                        t.$overlay.remove(),
                        "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el)
                    }
                };
                this.el.classList.contains("bottom-sheet") ? s.extend(e, {
                    bottom: "-100%",
                    opacity: 0
                }) : s.extend(e, {
                    top: [this.options.endingTop, this.options.startingTop],
                    opacity: 0,
                    scaleX: .8,
                    scaleY: .8
                }),
                i(e)
            }
        }, {
            key: "open",
            value: function(t) {
                if (!this.isOpen)
                    return this.isOpen = !0,
                    n._modalsOpen++,
                    this._nthModalOpened = n._modalsOpen,
                    this.$overlay[0].style.zIndex = 1e3 + 2 * n._modalsOpen,
                    this.el.style.zIndex = 1e3 + 2 * n._modalsOpen + 1,
                    this._openingTrigger = t ? t[0] : void 0,
                    "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el, this._openingTrigger),
                    this.options.preventScrolling && (document.body.style.overflow = "hidden"),
                    this.el.classList.add("open"),
                    this.el.insertAdjacentElement("afterend", this.$overlay[0]),
                    this.options.dismissible && (this._handleKeydownBound = this._handleKeydown.bind(this),
                    this._handleFocusBound = this._handleFocus.bind(this),
                    document.addEventListener("keydown", this._handleKeydownBound),
                    document.addEventListener("focus", this._handleFocusBound, !0)),
                    i.remove(this.el),
                    i.remove(this.$overlay[0]),
                    this._animateIn(),
                    this.el.focus(),
                    this
            }
        }, {
            key: "close",
            value: function() {
                if (this.isOpen)
                    return this.isOpen = !1,
                    n._modalsOpen--,
                    this._nthModalOpened = 0,
                    "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                    this.el.classList.remove("open"),
                    0 === n._modalsOpen && (document.body.style.overflow = ""),
                    this.options.dismissible && (document.removeEventListener("keydown", this._handleKeydownBound),
                    document.removeEventListener("focus", this._handleFocusBound, !0)),
                    i.remove(this.el),
                    i.remove(this.$overlay[0]),
                    this._animateOut(),
                    this
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Modal
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    t._modalsOpen = 0,
    t._count = 0,
    M.Modal = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "modal", "M_Modal")
}(cash, M.anime),
function(o, a) {
    "use strict";
    var e = {
        inDuration: 275,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Materialbox = i).options = o.extend({}, n.defaults, e),
            i.overlayActive = !1,
            i.doneAnimating = !0,
            i.placeholder = o("<div></div>").addClass("material-placeholder"),
            i.originalWidth = 0,
            i.originalHeight = 0,
            i.originInlineStyles = i.$el.attr("style"),
            i.caption = i.el.getAttribute("data-caption") || "",
            i.$el.before(i.placeholder),
            i.placeholder.append(i.$el),
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.M_Materialbox = void 0,
                o(this.placeholder).after(this.el).remove(),
                this.$el.removeAttr("style")
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind(this),
                this.el.addEventListener("click", this._handleMaterialboxClickBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleMaterialboxClickBound)
            }
        }, {
            key: "_handleMaterialboxClick",
            value: function(t) {
                !1 === this.doneAnimating || this.overlayActive && this.doneAnimating ? this.close() : this.open()
            }
        }, {
            key: "_handleWindowScroll",
            value: function() {
                this.overlayActive && this.close()
            }
        }, {
            key: "_handleWindowResize",
            value: function() {
                this.overlayActive && this.close()
            }
        }, {
            key: "_handleWindowEscape",
            value: function(t) {
                27 === t.keyCode && this.doneAnimating && this.overlayActive && this.close()
            }
        }, {
            key: "_makeAncestorsOverflowVisible",
            value: function() {
                this.ancestorsChanged = o();
                for (var t = this.placeholder[0].parentNode; null !== t && !o(t).is(document); ) {
                    var e = o(t);
                    "visible" !== e.css("overflow") && (e.css("overflow", "visible"),
                    void 0 === this.ancestorsChanged ? this.ancestorsChanged = e : this.ancestorsChanged = this.ancestorsChanged.add(e)),
                    t = t.parentNode
                }
            }
        }, {
            key: "_animateImageIn",
            value: function() {
                var t = this
                  , e = {
                    targets: this.el,
                    height: [this.originalHeight, this.newHeight],
                    width: [this.originalWidth, this.newWidth],
                    left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2,
                    top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2,
                    duration: this.options.inDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        t.doneAnimating = !0,
                        "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el)
                    }
                };
                this.maxWidth = this.$el.css("max-width"),
                this.maxHeight = this.$el.css("max-height"),
                "none" !== this.maxWidth && (e.maxWidth = this.newWidth),
                "none" !== this.maxHeight && (e.maxHeight = this.newHeight),
                a(e)
            }
        }, {
            key: "_animateImageOut",
            value: function() {
                var t = this
                  , e = {
                    targets: this.el,
                    width: this.originalWidth,
                    height: this.originalHeight,
                    left: 0,
                    top: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        t.placeholder.css({
                            height: "",
                            width: "",
                            position: "",
                            top: "",
                            left: ""
                        }),
                        t.attrWidth && t.$el.attr("width", t.attrWidth),
                        t.attrHeight && t.$el.attr("height", t.attrHeight),
                        t.$el.removeAttr("style"),
                        t.originInlineStyles && t.$el.attr("style", t.originInlineStyles),
                        t.$el.removeClass("active"),
                        t.doneAnimating = !0,
                        t.ancestorsChanged.length && t.ancestorsChanged.css("overflow", ""),
                        "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el)
                    }
                };
                a(e)
            }
        }, {
            key: "_updateVars",
            value: function() {
                this.windowWidth = window.innerWidth,
                this.windowHeight = window.innerHeight,
                this.caption = this.el.getAttribute("data-caption") || ""
            }
        }, {
            key: "open",
            value: function() {
                var t = this;
                this._updateVars(),
                this.originalWidth = this.el.getBoundingClientRect().width,
                this.originalHeight = this.el.getBoundingClientRect().height,
                this.doneAnimating = !1,
                this.$el.addClass("active"),
                this.overlayActive = !0,
                "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el),
                this.placeholder.css({
                    width: this.placeholder[0].getBoundingClientRect().width + "px",
                    height: this.placeholder[0].getBoundingClientRect().height + "px",
                    position: "relative",
                    top: 0,
                    left: 0
                }),
                this._makeAncestorsOverflowVisible(),
                this.$el.css({
                    position: "absolute",
                    "z-index": 1e3,
                    "will-change": "left, top, width, height"
                }),
                this.attrWidth = this.$el.attr("width"),
                this.attrHeight = this.$el.attr("height"),
                this.attrWidth && (this.$el.css("width", this.attrWidth + "px"),
                this.$el.removeAttr("width")),
                this.attrHeight && (this.$el.css("width", this.attrHeight + "px"),
                this.$el.removeAttr("height")),
                this.$overlay = o('<div id="materialbox-overlay"></div>').css({
                    opacity: 0
                }).one("click", function() {
                    t.doneAnimating && t.close()
                }),
                this.$el.before(this.$overlay);
                var e = this.$overlay[0].getBoundingClientRect();
                this.$overlay.css({
                    width: this.windowWidth + "px",
                    height: this.windowHeight + "px",
                    left: -1 * e.left + "px",
                    top: -1 * e.top + "px"
                }),
                a.remove(this.el),
                a.remove(this.$overlay[0]),
                a({
                    targets: this.$overlay[0],
                    opacity: 1,
                    duration: this.options.inDuration,
                    easing: "easeOutQuad"
                }),
                "" !== this.caption && (this.$photocaption && a.remove(this.$photoCaption[0]),
                this.$photoCaption = o('<div class="materialbox-caption"></div>'),
                this.$photoCaption.text(this.caption),
                o("body").append(this.$photoCaption),
                this.$photoCaption.css({
                    display: "inline"
                }),
                a({
                    targets: this.$photoCaption[0],
                    opacity: 1,
                    duration: this.options.inDuration,
                    easing: "easeOutQuad"
                }));
                var i = 0
                  , n = this.originalWidth / this.windowWidth
                  , s = this.originalHeight / this.windowHeight;
                this.newWidth = 0,
                this.newHeight = 0,
                s < n ? (i = this.originalHeight / this.originalWidth,
                this.newWidth = .9 * this.windowWidth,
                this.newHeight = .9 * this.windowWidth * i) : (i = this.originalWidth / this.originalHeight,
                this.newWidth = .9 * this.windowHeight * i,
                this.newHeight = .9 * this.windowHeight),
                this._animateImageIn(),
                this._handleWindowScrollBound = this._handleWindowScroll.bind(this),
                this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                this._handleWindowEscapeBound = this._handleWindowEscape.bind(this),
                window.addEventListener("scroll", this._handleWindowScrollBound),
                window.addEventListener("resize", this._handleWindowResizeBound),
                window.addEventListener("keyup", this._handleWindowEscapeBound)
            }
        }, {
            key: "close",
            value: function() {
                var t = this;
                this._updateVars(),
                this.doneAnimating = !1,
                "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                a.remove(this.el),
                a.remove(this.$overlay[0]),
                "" !== this.caption && a.remove(this.$photoCaption[0]),
                window.removeEventListener("scroll", this._handleWindowScrollBound),
                window.removeEventListener("resize", this._handleWindowResizeBound),
                window.removeEventListener("keyup", this._handleWindowEscapeBound),
                a({
                    targets: this.$overlay[0],
                    opacity: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        t.overlayActive = !1,
                        t.$overlay.remove()
                    }
                }),
                this._animateImageOut(),
                "" !== this.caption && a({
                    targets: this.$photoCaption[0],
                    opacity: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        t.$photoCaption.remove()
                    }
                })
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Materialbox
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.Materialbox = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "materialbox", "M_Materialbox")
}(cash, M.anime),
function(s) {
    "use strict";
    var e = {
        responsiveThreshold: 0
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Parallax = i).options = s.extend({}, n.defaults, e),
            i._enabled = window.innerWidth > i.options.responsiveThreshold,
            i.$img = i.$el.find("img").first(),
            i.$img.each(function() {
                this.complete && s(this).trigger("load")
            }),
            i._updateParallax(),
            i._setupEventHandlers(),
            i._setupStyles(),
            n._parallaxes.push(i),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                n._parallaxes.splice(n._parallaxes.indexOf(this), 1),
                this.$img[0].style.transform = "",
                this._removeEventHandlers(),
                this.$el[0].M_Parallax = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleImageLoadBound = this._handleImageLoad.bind(this),
                this.$img[0].addEventListener("load", this._handleImageLoadBound),
                0 === n._parallaxes.length && (n._handleScrollThrottled = M.throttle(n._handleScroll, 5),
                window.addEventListener("scroll", n._handleScrollThrottled),
                n._handleWindowResizeThrottled = M.throttle(n._handleWindowResize, 5),
                window.addEventListener("resize", n._handleWindowResizeThrottled))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.$img[0].removeEventListener("load", this._handleImageLoadBound),
                0 === n._parallaxes.length && (window.removeEventListener("scroll", n._handleScrollThrottled),
                window.removeEventListener("resize", n._handleWindowResizeThrottled))
            }
        }, {
            key: "_setupStyles",
            value: function() {
                this.$img[0].style.opacity = 1
            }
        }, {
            key: "_handleImageLoad",
            value: function() {
                this._updateParallax()
            }
        }, {
            key: "_updateParallax",
            value: function() {
                var t = 0 < this.$el.height() ? this.el.parentNode.offsetHeight : 500
                  , e = this.$img[0].offsetHeight - t
                  , i = this.$el.offset().top + t
                  , n = this.$el.offset().top
                  , s = M.getDocumentScrollTop()
                  , o = window.innerHeight
                  , a = e * ((s + o - n) / (t + o));
                this._enabled ? s < i && n < s + o && (this.$img[0].style.transform = "translate3D(-50%, " + a + "px, 0)") : this.$img[0].style.transform = ""
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Parallax
            }
        }, {
            key: "_handleScroll",
            value: function() {
                for (var t = 0; t < n._parallaxes.length; t++) {
                    var e = n._parallaxes[t];
                    e._updateParallax.call(e)
                }
            }
        }, {
            key: "_handleWindowResize",
            value: function() {
                for (var t = 0; t < n._parallaxes.length; t++) {
                    var e = n._parallaxes[t];
                    e._enabled = window.innerWidth > e.options.responsiveThreshold
                }
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    t._parallaxes = [],
    M.Parallax = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "parallax", "M_Parallax")
}(cash),
function(a, s) {
    "use strict";
    var e = {
        duration: 300,
        onShow: null,
        swipeable: !1,
        responsiveThreshold: 1 / 0
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Tabs = i).options = a.extend({}, n.defaults, e),
            i.$tabLinks = i.$el.children("li.tab").children("a"),
            i.index = 0,
            i._setupActiveTabLink(),
            i.options.swipeable ? i._setupSwipeableTabs() : i._setupNormalTabs(),
            i._setTabsAndTabWidth(),
            i._createIndicator(),
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._indicator.parentNode.removeChild(this._indicator),
                this.options.swipeable ? this._teardownSwipeableTabs() : this._teardownNormalTabs(),
                this.$el[0].M_Tabs = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                window.addEventListener("resize", this._handleWindowResizeBound),
                this._handleTabClickBound = this._handleTabClick.bind(this),
                this.el.addEventListener("click", this._handleTabClickBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                window.removeEventListener("resize", this._handleWindowResizeBound),
                this.el.removeEventListener("click", this._handleTabClickBound)
            }
        }, {
            key: "_handleWindowResize",
            value: function() {
                this._setTabsAndTabWidth(),
                0 !== this.tabWidth && 0 !== this.tabsWidth && (this._indicator.style.left = this._calcLeftPos(this.$activeTabLink) + "px",
                this._indicator.style.right = this._calcRightPos(this.$activeTabLink) + "px")
            }
        }, {
            key: "_handleTabClick",
            value: function(t) {
                var e = this
                  , i = a(t.target).closest("li.tab")
                  , n = a(t.target).closest("a");
                if (n.length && n.parent().hasClass("tab"))
                    if (i.hasClass("disabled"))
                        t.preventDefault();
                    else if (!n.attr("target")) {
                        this.$activeTabLink.removeClass("active");
                        var s = this.$content;
                        this.$activeTabLink = n,
                        this.$content = a(M.escapeHash(n[0].hash)),
                        this.$tabLinks = this.$el.children("li.tab").children("a"),
                        this.$activeTabLink.addClass("active");
                        var o = this.index;
                        this.index = Math.max(this.$tabLinks.index(n), 0),
                        this.options.swipeable ? this._tabsCarousel && this._tabsCarousel.set(this.index, function() {
                            "function" == typeof e.options.onShow && e.options.onShow.call(e, e.$content[0])
                        }) : this.$content.length && (this.$content[0].style.display = "block",
                        this.$content.addClass("active"),
                        "function" == typeof this.options.onShow && this.options.onShow.call(this, this.$content[0]),
                        s.length && !s.is(this.$content) && (s[0].style.display = "none",
                        s.removeClass("active"))),
                        this._setTabsAndTabWidth(),
                        this._animateIndicator(o),
                        t.preventDefault()
                    }
            }
        }, {
            key: "_createIndicator",
            value: function() {
                var t = this
                  , e = document.createElement("li");
                e.classList.add("indicator"),
                this.el.appendChild(e),
                this._indicator = e,
                setTimeout(function() {
                    t._indicator.style.left = t._calcLeftPos(t.$activeTabLink) + "px",
                    t._indicator.style.right = t._calcRightPos(t.$activeTabLink) + "px"
                }, 0)
            }
        }, {
            key: "_setupActiveTabLink",
            value: function() {
                this.$activeTabLink = a(this.$tabLinks.filter('[href="' + location.hash + '"]')),
                0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a.active").first()),
                0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a").first()),
                this.$tabLinks.removeClass("active"),
                this.$activeTabLink[0].classList.add("active"),
                this.index = Math.max(this.$tabLinks.index(this.$activeTabLink), 0),
                this.$activeTabLink.length && (this.$content = a(M.escapeHash(this.$activeTabLink[0].hash)),
                this.$content.addClass("active"))
            }
        }, {
            key: "_setupSwipeableTabs",
            value: function() {
                var i = this;
                window.innerWidth > this.options.responsiveThreshold && (this.options.swipeable = !1);
                var n = a();
                this.$tabLinks.each(function(t) {
                    var e = a(M.escapeHash(t.hash));
                    e.addClass("carousel-item"),
                    n = n.add(e)
                });
                var t = a('<div class="tabs-content carousel carousel-slider"></div>');
                n.first().before(t),
                t.append(n),
                n[0].style.display = "";
                var e = this.$activeTabLink.closest(".tab").index();
                this._tabsCarousel = M.Carousel.init(t[0], {
                    fullWidth: !0,
                    noWrap: !0,
                    onCycleTo: function(t) {
                        var e = i.index;
                        i.index = a(t).index(),
                        i.$activeTabLink.removeClass("active"),
                        i.$activeTabLink = i.$tabLinks.eq(i.index),
                        i.$activeTabLink.addClass("active"),
                        i._animateIndicator(e),
                        "function" == typeof i.options.onShow && i.options.onShow.call(i, i.$content[0])
                    }
                }),
                this._tabsCarousel.set(e)
            }
        }, {
            key: "_teardownSwipeableTabs",
            value: function() {
                var t = this._tabsCarousel.$el;
                this._tabsCarousel.destroy(),
                t.after(t.children()),
                t.remove()
            }
        }, {
            key: "_setupNormalTabs",
            value: function() {
                this.$tabLinks.not(this.$activeTabLink).each(function(t) {
                    if (t.hash) {
                        var e = a(M.escapeHash(t.hash));
                        e.length && (e[0].style.display = "none")
                    }
                })
            }
        }, {
            key: "_teardownNormalTabs",
            value: function() {
                this.$tabLinks.each(function(t) {
                    if (t.hash) {
                        var e = a(M.escapeHash(t.hash));
                        e.length && (e[0].style.display = "")
                    }
                })
            }
        }, {
            key: "_setTabsAndTabWidth",
            value: function() {
                this.tabsWidth = this.$el.width(),
                this.tabWidth = Math.max(this.tabsWidth, this.el.scrollWidth) / this.$tabLinks.length
            }
        }, {
            key: "_calcRightPos",
            value: function(t) {
                return Math.ceil(this.tabsWidth - t.position().left - t[0].getBoundingClientRect().width)
            }
        }, {
            key: "_calcLeftPos",
            value: function(t) {
                return Math.floor(t.position().left)
            }
        }, {
            key: "updateTabIndicator",
            value: function() {
                this._setTabsAndTabWidth(),
                this._animateIndicator(this.index)
            }
        }, {
            key: "_animateIndicator",
            value: function(t) {
                var e = 0
                  , i = 0;
                0 <= this.index - t ? e = 90 : i = 90;
                var n = {
                    targets: this._indicator,
                    left: {
                        value: this._calcLeftPos(this.$activeTabLink),
                        delay: e
                    },
                    right: {
                        value: this._calcRightPos(this.$activeTabLink),
                        delay: i
                    },
                    duration: this.options.duration,
                    easing: "easeOutQuad"
                };
                s.remove(this._indicator),
                s(n)
            }
        }, {
            key: "select",
            value: function(t) {
                var e = this.$tabLinks.filter('[href="#' + t + '"]');
                e.length && e.trigger("click")
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Tabs
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.Tabs = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "tabs", "M_Tabs")
}(cash, M.anime),
function(d, e) {
    "use strict";
    var i = {
        exitDelay: 200,
        enterDelay: 0,
        html: null,
        margin: 5,
        inDuration: 250,
        outDuration: 200,
        position: "bottom",
        transitionMovement: 10
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Tooltip = i).options = d.extend({}, n.defaults, e),
            i.isOpen = !1,
            i.isHovered = !1,
            i.isFocused = !1,
            i._appendTooltipEl(),
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                d(this.tooltipEl).remove(),
                this._removeEventHandlers(),
                this.el.M_Tooltip = void 0
            }
        }, {
            key: "_appendTooltipEl",
            value: function() {
                var t = document.createElement("div");
                t.classList.add("material-tooltip"),
                this.tooltipEl = t;
                var e = document.createElement("div");
                e.classList.add("tooltip-content"),
                e.innerHTML = this.options.html,
                t.appendChild(e),
                document.body.appendChild(t)
            }
        }, {
            key: "_updateTooltipContent",
            value: function() {
                this.tooltipEl.querySelector(".tooltip-content").innerHTML = this.options.html
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleMouseEnterBound = this._handleMouseEnter.bind(this),
                this._handleMouseLeaveBound = this._handleMouseLeave.bind(this),
                this._handleFocusBound = this._handleFocus.bind(this),
                this._handleBlurBound = this._handleBlur.bind(this),
                this.el.addEventListener("mouseenter", this._handleMouseEnterBound),
                this.el.addEventListener("mouseleave", this._handleMouseLeaveBound),
                this.el.addEventListener("focus", this._handleFocusBound, !0),
                this.el.addEventListener("blur", this._handleBlurBound, !0)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("mouseenter", this._handleMouseEnterBound),
                this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound),
                this.el.removeEventListener("focus", this._handleFocusBound, !0),
                this.el.removeEventListener("blur", this._handleBlurBound, !0)
            }
        }, {
            key: "open",
            value: function(t) {
                this.isOpen || (t = void 0 === t || void 0,
                this.isOpen = !0,
                this.options = d.extend({}, this.options, this._getAttributeOptions()),
                this._updateTooltipContent(),
                this._setEnterDelayTimeout(t))
            }
        }, {
            key: "close",
            value: function() {
                this.isOpen && (this.isHovered = !1,
                this.isFocused = !1,
                this.isOpen = !1,
                this._setExitDelayTimeout())
            }
        }, {
            key: "_setExitDelayTimeout",
            value: function() {
                var t = this;
                clearTimeout(this._exitDelayTimeout),
                this._exitDelayTimeout = setTimeout(function() {
                    t.isHovered || t.isFocused || t._animateOut()
                }, this.options.exitDelay)
            }
        }, {
            key: "_setEnterDelayTimeout",
            value: function(t) {
                var e = this;
                clearTimeout(this._enterDelayTimeout),
                this._enterDelayTimeout = setTimeout(function() {
                    (e.isHovered || e.isFocused || t) && e._animateIn()
                }, this.options.enterDelay)
            }
        }, {
            key: "_positionTooltip",
            value: function() {
                var t, e = this.el, i = this.tooltipEl, n = e.offsetHeight, s = e.offsetWidth, o = i.offsetHeight, a = i.offsetWidth, r = this.options.margin, l = void 0, h = void 0;
                this.xMovement = 0,
                this.yMovement = 0,
                l = e.getBoundingClientRect().top + M.getDocumentScrollTop(),
                h = e.getBoundingClientRect().left + M.getDocumentScrollLeft(),
                "top" === this.options.position ? (l += -o - r,
                h += s / 2 - a / 2,
                this.yMovement = -this.options.transitionMovement) : "right" === this.options.position ? (l += n / 2 - o / 2,
                h += s + r,
                this.xMovement = this.options.transitionMovement) : "left" === this.options.position ? (l += n / 2 - o / 2,
                h += -a - r,
                this.xMovement = -this.options.transitionMovement) : (l += n + r,
                h += s / 2 - a / 2,
                this.yMovement = this.options.transitionMovement),
                t = this._repositionWithinScreen(h, l, a, o),
                d(i).css({
                    top: t.y + "px",
                    left: t.x + "px"
                })
            }
        }, {
            key: "_repositionWithinScreen",
            value: function(t, e, i, n) {
                var s = M.getDocumentScrollLeft()
                  , o = M.getDocumentScrollTop()
                  , a = t - s
                  , r = e - o
                  , l = {
                    left: a,
                    top: r,
                    width: i,
                    height: n
                }
                  , h = this.options.margin + this.options.transitionMovement
                  , d = M.checkWithinContainer(document.body, l, h);
                return d.left ? a = h : d.right && (a -= a + i - window.innerWidth),
                d.top ? r = h : d.bottom && (r -= r + n - window.innerHeight),
                {
                    x: a + s,
                    y: r + o
                }
            }
        }, {
            key: "_animateIn",
            value: function() {
                this._positionTooltip(),
                this.tooltipEl.style.visibility = "visible",
                e.remove(this.tooltipEl),
                e({
                    targets: this.tooltipEl,
                    opacity: 1,
                    translateX: this.xMovement,
                    translateY: this.yMovement,
                    duration: this.options.inDuration,
                    easing: "easeOutCubic"
                })
            }
        }, {
            key: "_animateOut",
            value: function() {
                e.remove(this.tooltipEl),
                e({
                    targets: this.tooltipEl,
                    opacity: 0,
                    translateX: 0,
                    translateY: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutCubic"
                })
            }
        }, {
            key: "_handleMouseEnter",
            value: function() {
                this.isHovered = !0,
                this.isFocused = !1,
                this.open(!1)
            }
        }, {
            key: "_handleMouseLeave",
            value: function() {
                this.isHovered = !1,
                this.isFocused = !1,
                this.close()
            }
        }, {
            key: "_handleFocus",
            value: function() {
                M.tabPressed && (this.isFocused = !0,
                this.open(!1))
            }
        }, {
            key: "_handleBlur",
            value: function() {
                this.isFocused = !1,
                this.close()
            }
        }, {
            key: "_getAttributeOptions",
            value: function() {
                var t = {}
                  , e = this.el.getAttribute("data-tooltip")
                  , i = this.el.getAttribute("data-position");
                return e && (t.html = e),
                i && (t.position = i),
                t
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Tooltip
            }
        }, {
            key: "defaults",
            get: function() {
                return i
            }
        }]),
        n
    }();
    M.Tooltip = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "tooltip", "M_Tooltip")
}(cash, M.anime),
function(i) {
    "use strict";
    var t = t || {}
      , e = document.querySelectorAll.bind(document);
    function m(t) {
        var e = "";
        for (var i in t)
            t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
        return e
    }
    var g = {
        duration: 750,
        show: function(t, e) {
            if (2 === t.button)
                return !1;
            var i = e || this
              , n = document.createElement("div");
            n.className = "waves-ripple",
            i.appendChild(n);
            var s, o, a, r, l, h, d, u = (h = {
                top: 0,
                left: 0
            },
            d = (s = i) && s.ownerDocument,
            o = d.documentElement,
            void 0 !== s.getBoundingClientRect && (h = s.getBoundingClientRect()),
            a = null !== (l = r = d) && l === l.window ? r : 9 === r.nodeType && r.defaultView,
            {
                top: h.top + a.pageYOffset - o.clientTop,
                left: h.left + a.pageXOffset - o.clientLeft
            }), c = t.pageY - u.top, p = t.pageX - u.left, v = "scale(" + i.clientWidth / 100 * 10 + ")";
            "touches"in t && (c = t.touches[0].pageY - u.top,
            p = t.touches[0].pageX - u.left),
            n.setAttribute("data-hold", Date.now()),
            n.setAttribute("data-scale", v),
            n.setAttribute("data-x", p),
            n.setAttribute("data-y", c);
            var f = {
                top: c + "px",
                left: p + "px"
            };
            n.className = n.className + " waves-notransition",
            n.setAttribute("style", m(f)),
            n.className = n.className.replace("waves-notransition", ""),
            f["-webkit-transform"] = v,
            f["-moz-transform"] = v,
            f["-ms-transform"] = v,
            f["-o-transform"] = v,
            f.transform = v,
            f.opacity = "1",
            f["-webkit-transition-duration"] = g.duration + "ms",
            f["-moz-transition-duration"] = g.duration + "ms",
            f["-o-transition-duration"] = g.duration + "ms",
            f["transition-duration"] = g.duration + "ms",
            f["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            f["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            f["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            f["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            n.setAttribute("style", m(f))
        },
        hide: function(t) {
            l.touchup(t);
            var e = this
              , i = (e.clientWidth,
            null)
              , n = e.getElementsByClassName("waves-ripple");
            if (!(0 < n.length))
                return !1;
            var s = (i = n[n.length - 1]).getAttribute("data-x")
              , o = i.getAttribute("data-y")
              , a = i.getAttribute("data-scale")
              , r = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
            r < 0 && (r = 0),
            setTimeout(function() {
                var t = {
                    top: o + "px",
                    left: s + "px",
                    opacity: "0",
                    "-webkit-transition-duration": g.duration + "ms",
                    "-moz-transition-duration": g.duration + "ms",
                    "-o-transition-duration": g.duration + "ms",
                    "transition-duration": g.duration + "ms",
                    "-webkit-transform": a,
                    "-moz-transform": a,
                    "-ms-transform": a,
                    "-o-transform": a,
                    transform: a
                };
                i.setAttribute("style", m(t)),
                setTimeout(function() {
                    try {
                        e.removeChild(i)
                    } catch (t) {
                        return !1
                    }
                }, g.duration)
            }, r)
        },
        wrapInput: function(t) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e];
                if ("input" === i.tagName.toLowerCase()) {
                    var n = i.parentNode;
                    if ("i" === n.tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect"))
                        continue;
                    var s = document.createElement("i");
                    s.className = i.className + " waves-input-wrapper";
                    var o = i.getAttribute("style");
                    o || (o = ""),
                    s.setAttribute("style", o),
                    i.className = "waves-button-input",
                    i.removeAttribute("style"),
                    n.replaceChild(s, i),
                    s.appendChild(i)
                }
            }
        }
    }
      , l = {
        touches: 0,
        allowEvent: function(t) {
            var e = !0;
            return "touchstart" === t.type ? l.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function() {
                0 < l.touches && (l.touches -= 1)
            }, 500) : "mousedown" === t.type && 0 < l.touches && (e = !1),
            e
        },
        touchup: function(t) {
            l.allowEvent(t)
        }
    };
    function n(t) {
        var e = function(t) {
            if (!1 === l.allowEvent(t))
                return null;
            for (var e = null, i = t.target || t.srcElement; null !== i.parentNode; ) {
                if (!(i instanceof SVGElement) && -1 !== i.className.indexOf("waves-effect")) {
                    e = i;
                    break
                }
                i = i.parentNode
            }
            return e
        }(t);
        null !== e && (g.show(t, e),
        "ontouchstart"in i && (e.addEventListener("touchend", g.hide, !1),
        e.addEventListener("touchcancel", g.hide, !1)),
        e.addEventListener("mouseup", g.hide, !1),
        e.addEventListener("mouseleave", g.hide, !1),
        e.addEventListener("dragend", g.hide, !1))
    }
    t.displayEffect = function(t) {
        "duration"in (t = t || {}) && (g.duration = t.duration),
        g.wrapInput(e(".waves-effect")),
        "ontouchstart"in i && document.body.addEventListener("touchstart", n, !1),
        document.body.addEventListener("mousedown", n, !1)
    }
    ,
    t.attach = function(t) {
        "input" === t.tagName.toLowerCase() && (g.wrapInput([t]),
        t = t.parentNode),
        "ontouchstart"in i && t.addEventListener("touchstart", n, !1),
        t.addEventListener("mousedown", n, !1)
    }
    ,
    i.Waves = t,
    document.addEventListener("DOMContentLoaded", function() {
        t.displayEffect()
    }, !1)
}(window),
function(i, n) {
    "use strict";
    var t = {
        html: "",
        displayLength: 4e3,
        inDuration: 300,
        outDuration: 375,
        classes: "",
        completeCallback: null,
        activationPercent: .8
    }
      , e = function() {
        function s(t) {
            _classCallCheck(this, s),
            this.options = i.extend({}, s.defaults, t),
            this.message = this.options.html,
            this.panning = !1,
            this.timeRemaining = this.options.displayLength,
            0 === s._toasts.length && s._createContainer(),
            s._toasts.push(this);
            var e = this._createToast();
            (e.M_Toast = this).el = e,
            this.$el = i(e),
            this._animateIn(),
            this._setTimer()
        }
        return _createClass(s, [{
            key: "_createToast",
            value: function() {
                var t = document.createElement("div");
                return t.classList.add("toast"),
                this.options.classes.length && i(t).addClass(this.options.classes),
                ("object" == typeof HTMLElement ? this.message instanceof HTMLElement : this.message && "object" == typeof this.message && null !== this.message && 1 === this.message.nodeType && "string" == typeof this.message.nodeName) ? t.appendChild(this.message) : this.message.jquery ? i(t).append(this.message[0]) : t.innerHTML = this.message,
                s._container.appendChild(t),
                t
            }
        }, {
            key: "_animateIn",
            value: function() {
                n({
                    targets: this.el,
                    top: 0,
                    opacity: 1,
                    duration: this.options.inDuration,
                    easing: "easeOutCubic"
                })
            }
        }, {
            key: "_setTimer",
            value: function() {
                var t = this;
                this.timeRemaining !== 1 / 0 && (this.counterInterval = setInterval(function() {
                    t.panning || (t.timeRemaining -= 20),
                    t.timeRemaining <= 0 && t.dismiss()
                }, 20))
            }
        }, {
            key: "dismiss",
            value: function() {
                var t = this;
                window.clearInterval(this.counterInterval);
                var e = this.el.offsetWidth * this.options.activationPercent;
                this.wasSwiped && (this.el.style.transition = "transform .05s, opacity .05s",
                this.el.style.transform = "translateX(" + e + "px)",
                this.el.style.opacity = 0),
                n({
                    targets: this.el,
                    opacity: 0,
                    marginTop: -40,
                    duration: this.options.outDuration,
                    easing: "easeOutExpo",
                    complete: function() {
                        "function" == typeof t.options.completeCallback && t.options.completeCallback(),
                        t.$el.remove(),
                        s._toasts.splice(s._toasts.indexOf(t), 1),
                        0 === s._toasts.length && s._removeContainer()
                    }
                })
            }
        }], [{
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Toast
            }
        }, {
            key: "_createContainer",
            value: function() {
                var t = document.createElement("div");
                t.setAttribute("id", "toast-container"),
                t.addEventListener("touchstart", s._onDragStart),
                t.addEventListener("touchmove", s._onDragMove),
                t.addEventListener("touchend", s._onDragEnd),
                t.addEventListener("mousedown", s._onDragStart),
                document.addEventListener("mousemove", s._onDragMove),
                document.addEventListener("mouseup", s._onDragEnd),
                document.body.appendChild(t),
                s._container = t
            }
        }, {
            key: "_removeContainer",
            value: function() {
                document.removeEventListener("mousemove", s._onDragMove),
                document.removeEventListener("mouseup", s._onDragEnd),
                i(s._container).remove(),
                s._container = null
            }
        }, {
            key: "_onDragStart",
            value: function(t) {
                if (t.target && i(t.target).closest(".toast").length) {
                    var e = i(t.target).closest(".toast")[0].M_Toast;
                    e.panning = !0,
                    (s._draggedToast = e).el.classList.add("panning"),
                    e.el.style.transition = "",
                    e.startingXPos = s._xPos(t),
                    e.time = Date.now(),
                    e.xPos = s._xPos(t)
                }
            }
        }, {
            key: "_onDragMove",
            value: function(t) {
                if (s._draggedToast) {
                    t.preventDefault();
                    var e = s._draggedToast;
                    e.deltaX = Math.abs(e.xPos - s._xPos(t)),
                    e.xPos = s._xPos(t),
                    e.velocityX = e.deltaX / (Date.now() - e.time),
                    e.time = Date.now();
                    var i = e.xPos - e.startingXPos
                      , n = e.el.offsetWidth * e.options.activationPercent;
                    e.el.style.transform = "translateX(" + i + "px)",
                    e.el.style.opacity = 1 - Math.abs(i / n)
                }
            }
        }, {
            key: "_onDragEnd",
            value: function() {
                if (s._draggedToast) {
                    var t = s._draggedToast;
                    t.panning = !1,
                    t.el.classList.remove("panning");
                    var e = t.xPos - t.startingXPos
                      , i = t.el.offsetWidth * t.options.activationPercent;
                    Math.abs(e) > i || 1 < t.velocityX ? (t.wasSwiped = !0,
                    t.dismiss()) : (t.el.style.transition = "transform .2s, opacity .2s",
                    t.el.style.transform = "",
                    t.el.style.opacity = ""),
                    s._draggedToast = null
                }
            }
        }, {
            key: "_xPos",
            value: function(t) {
                return t.targetTouches && 1 <= t.targetTouches.length ? t.targetTouches[0].clientX : t.clientX
            }
        }, {
            key: "dismissAll",
            value: function() {
                for (var t in s._toasts)
                    s._toasts[t].dismiss()
            }
        }, {
            key: "defaults",
            get: function() {
                return t
            }
        }]),
        s
    }();
    e._toasts = [],
    e._container = null,
    e._draggedToast = null,
    M.Toast = e,
    M.toast = function(t) {
        return new e(t)
    }
}(cash, M.anime),
function(s, o) {
    "use strict";
    var e = {
        edge: "left",
        draggable: !0,
        inDuration: 250,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: !0
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Sidenav = i).id = i.$el.attr("id"),
            i.options = s.extend({}, n.defaults, e),
            i.isOpen = !1,
            i.isFixed = i.el.classList.contains("sidenav-fixed"),
            i.isDragged = !1,
            i.lastWindowWidth = window.innerWidth,
            i.lastWindowHeight = window.innerHeight,
            i._createOverlay(),
            i._createDragTarget(),
            i._setupEventHandlers(),
            i._setupClasses(),
            i._setupFixed(),
            n._sidenavs.push(i),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._enableBodyScrolling(),
                this._overlay.parentNode.removeChild(this._overlay),
                this.dragTarget.parentNode.removeChild(this.dragTarget),
                this.el.M_Sidenav = void 0,
                this.el.style.transform = "";
                var t = n._sidenavs.indexOf(this);
                0 <= t && n._sidenavs.splice(t, 1)
            }
        }, {
            key: "_createOverlay",
            value: function() {
                var t = document.createElement("div");
                this._closeBound = this.close.bind(this),
                t.classList.add("sidenav-overlay"),
                t.addEventListener("click", this._closeBound),
                document.body.appendChild(t),
                this._overlay = t
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                0 === n._sidenavs.length && document.body.addEventListener("click", this._handleTriggerClick),
                this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this),
                this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this),
                this._handleCloseDragBound = this._handleCloseDrag.bind(this),
                this._handleCloseReleaseBound = this._handleCloseRelease.bind(this),
                this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this),
                this.dragTarget.addEventListener("touchmove", this._handleDragTargetDragBound),
                this.dragTarget.addEventListener("touchend", this._handleDragTargetReleaseBound),
                this._overlay.addEventListener("touchmove", this._handleCloseDragBound),
                this._overlay.addEventListener("touchend", this._handleCloseReleaseBound),
                this.el.addEventListener("touchmove", this._handleCloseDragBound),
                this.el.addEventListener("touchend", this._handleCloseReleaseBound),
                this.el.addEventListener("click", this._handleCloseTriggerClickBound),
                this.isFixed && (this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                window.addEventListener("resize", this._handleWindowResizeBound))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                1 === n._sidenavs.length && document.body.removeEventListener("click", this._handleTriggerClick),
                this.dragTarget.removeEventListener("touchmove", this._handleDragTargetDragBound),
                this.dragTarget.removeEventListener("touchend", this._handleDragTargetReleaseBound),
                this._overlay.removeEventListener("touchmove", this._handleCloseDragBound),
                this._overlay.removeEventListener("touchend", this._handleCloseReleaseBound),
                this.el.removeEventListener("touchmove", this._handleCloseDragBound),
                this.el.removeEventListener("touchend", this._handleCloseReleaseBound),
                this.el.removeEventListener("click", this._handleCloseTriggerClickBound),
                this.isFixed && window.removeEventListener("resize", this._handleWindowResizeBound)
            }
        }, {
            key: "_handleTriggerClick",
            value: function(t) {
                var e = s(t.target).closest(".sidenav-trigger");
                if (t.target && e.length) {
                    var i = M.getIdFromTrigger(e[0])
                      , n = document.getElementById(i).M_Sidenav;
                    n && n.open(e),
                    t.preventDefault()
                }
            }
        }, {
            key: "_startDrag",
            value: function(t) {
                var e = t.targetTouches[0].clientX;
                this.isDragged = !0,
                this._startingXpos = e,
                this._xPos = this._startingXpos,
                this._time = Date.now(),
                this._width = this.el.getBoundingClientRect().width,
                this._overlay.style.display = "block",
                this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop(),
                this._verticallyScrolling = !1,
                o.remove(this.el),
                o.remove(this._overlay)
            }
        }, {
            key: "_dragMoveUpdate",
            value: function(t) {
                var e = t.targetTouches[0].clientX
                  , i = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
                this.deltaX = Math.abs(this._xPos - e),
                this._xPos = e,
                this.velocityX = this.deltaX / (Date.now() - this._time),
                this._time = Date.now(),
                this._initialScrollTop !== i && (this._verticallyScrolling = !0)
            }
        }, {
            key: "_handleDragTargetDrag",
            value: function(t) {
                if (this.options.draggable && !this._isCurrentlyFixed() && !this._verticallyScrolling) {
                    this.isDragged || this._startDrag(t),
                    this._dragMoveUpdate(t);
                    var e = this._xPos - this._startingXpos
                      , i = 0 < e ? "right" : "left";
                    e = Math.min(this._width, Math.abs(e)),
                    this.options.edge === i && (e = 0);
                    var n = e
                      , s = "translateX(-100%)";
                    "right" === this.options.edge && (s = "translateX(100%)",
                    n = -n),
                    this.percentOpen = Math.min(1, e / this._width),
                    this.el.style.transform = s + " translateX(" + n + "px)",
                    this._overlay.style.opacity = this.percentOpen
                }
            }
        }, {
            key: "_handleDragTargetRelease",
            value: function() {
                this.isDragged && (.2 < this.percentOpen ? this.open() : this._animateOut(),
                this.isDragged = !1,
                this._verticallyScrolling = !1)
            }
        }, {
            key: "_handleCloseDrag",
            value: function(t) {
                if (this.isOpen) {
                    if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling)
                        return;
                    this.isDragged || this._startDrag(t),
                    this._dragMoveUpdate(t);
                    var e = this._xPos - this._startingXpos
                      , i = 0 < e ? "right" : "left";
                    e = Math.min(this._width, Math.abs(e)),
                    this.options.edge !== i && (e = 0);
                    var n = -e;
                    "right" === this.options.edge && (n = -n),
                    this.percentOpen = Math.min(1, 1 - e / this._width),
                    this.el.style.transform = "translateX(" + n + "px)",
                    this._overlay.style.opacity = this.percentOpen
                }
            }
        }, {
            key: "_handleCloseRelease",
            value: function() {
                this.isOpen && this.isDragged && (.8 < this.percentOpen ? this._animateIn() : this.close(),
                this.isDragged = !1,
                this._verticallyScrolling = !1)
            }
        }, {
            key: "_handleCloseTriggerClick",
            value: function(t) {
                s(t.target).closest(".sidenav-close").length && !this._isCurrentlyFixed() && this.close()
            }
        }, {
            key: "_handleWindowResize",
            value: function() {
                this.lastWindowWidth !== window.innerWidth && (992 < window.innerWidth ? this.open() : this.close()),
                this.lastWindowWidth = window.innerWidth,
                this.lastWindowHeight = window.innerHeight
            }
        }, {
            key: "_setupClasses",
            value: function() {
                "right" === this.options.edge && (this.el.classList.add("right-aligned"),
                this.dragTarget.classList.add("right-aligned"))
            }
        }, {
            key: "_removeClasses",
            value: function() {
                this.el.classList.remove("right-aligned"),
                this.dragTarget.classList.remove("right-aligned")
            }
        }, {
            key: "_setupFixed",
            value: function() {
                this._isCurrentlyFixed() && this.open()
            }
        }, {
            key: "_isCurrentlyFixed",
            value: function() {
                return this.isFixed && 992 < window.innerWidth
            }
        }, {
            key: "_createDragTarget",
            value: function() {
                var t = document.createElement("div");
                t.classList.add("drag-target"),
                document.body.appendChild(t),
                this.dragTarget = t
            }
        }, {
            key: "_preventBodyScrolling",
            value: function() {
                document.body.style.overflow = "hidden"
            }
        }, {
            key: "_enableBodyScrolling",
            value: function() {
                document.body.style.overflow = ""
            }
        }, {
            key: "open",
            value: function() {
                !0 !== this.isOpen && (this.isOpen = !0,
                "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el),
                this._isCurrentlyFixed() ? (o.remove(this.el),
                o({
                    targets: this.el,
                    translateX: 0,
                    duration: 0,
                    easing: "easeOutQuad"
                }),
                this._enableBodyScrolling(),
                this._overlay.style.display = "none") : (this.options.preventScrolling && this._preventBodyScrolling(),
                this.isDragged && 1 == this.percentOpen || this._animateIn()))
            }
        }, {
            key: "close",
            value: function() {
                if (!1 !== this.isOpen)
                    if (this.isOpen = !1,
                    "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                    this._isCurrentlyFixed()) {
                        var t = "left" === this.options.edge ? "-105%" : "105%";
                        this.el.style.transform = "translateX(" + t + ")"
                    } else
                        this._enableBodyScrolling(),
                        this.isDragged && 0 == this.percentOpen ? this._overlay.style.display = "none" : this._animateOut()
            }
        }, {
            key: "_animateIn",
            value: function() {
                this._animateSidenavIn(),
                this._animateOverlayIn()
            }
        }, {
            key: "_animateSidenavIn",
            value: function() {
                var t = this
                  , e = "left" === this.options.edge ? -1 : 1;
                this.isDragged && (e = "left" === this.options.edge ? e + this.percentOpen : e - this.percentOpen),
                o.remove(this.el),
                o({
                    targets: this.el,
                    translateX: [100 * e + "%", 0],
                    duration: this.options.inDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el)
                    }
                })
            }
        }, {
            key: "_animateOverlayIn",
            value: function() {
                var t = 0;
                this.isDragged ? t = this.percentOpen : s(this._overlay).css({
                    display: "block"
                }),
                o.remove(this._overlay),
                o({
                    targets: this._overlay,
                    opacity: [t, 1],
                    duration: this.options.inDuration,
                    easing: "easeOutQuad"
                })
            }
        }, {
            key: "_animateOut",
            value: function() {
                this._animateSidenavOut(),
                this._animateOverlayOut()
            }
        }, {
            key: "_animateSidenavOut",
            value: function() {
                var t = this
                  , e = "left" === this.options.edge ? -1 : 1
                  , i = 0;
                this.isDragged && (i = "left" === this.options.edge ? e + this.percentOpen : e - this.percentOpen),
                o.remove(this.el),
                o({
                    targets: this.el,
                    translateX: [100 * i + "%", 105 * e + "%"],
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el)
                    }
                })
            }
        }, {
            key: "_animateOverlayOut",
            value: function() {
                var t = this;
                o.remove(this._overlay),
                o({
                    targets: this._overlay,
                    opacity: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        s(t._overlay).css("display", "none")
                    }
                })
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Sidenav
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    t._sidenavs = [],
    M.Sidenav = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "sidenav", "M_Sidenav")
}(cash, M.anime),
function(o, a) {
    "use strict";
    var e = {
        throttle: 100,
        scrollOffset: 200,
        activeClass: "active",
        getActiveElement: function(t) {
            return 'a[href="#' + t + '"]'
        }
    }
      , t = function(t) {
        function c(t, e) {
            _classCallCheck(this, c);
            var i = _possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, t, e));
            return (i.el.M_ScrollSpy = i).options = o.extend({}, c.defaults, e),
            c._elements.push(i),
            c._count++,
            c._increment++,
            i.tickId = -1,
            i.id = c._increment,
            i._setupEventHandlers(),
            i._handleWindowScroll(),
            i
        }
        return _inherits(c, Component),
        _createClass(c, [{
            key: "destroy",
            value: function() {
                c._elements.splice(c._elements.indexOf(this), 1),
                c._elementsInView.splice(c._elementsInView.indexOf(this), 1),
                c._visibleElements.splice(c._visibleElements.indexOf(this.$el), 1),
                c._count--,
                this._removeEventHandlers(),
                o(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass),
                this.el.M_ScrollSpy = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                var t = M.throttle(this._handleWindowScroll, 200);
                this._handleThrottledResizeBound = t.bind(this),
                this._handleWindowScrollBound = this._handleWindowScroll.bind(this),
                1 === c._count && (window.addEventListener("scroll", this._handleWindowScrollBound),
                window.addEventListener("resize", this._handleThrottledResizeBound),
                document.body.addEventListener("click", this._handleTriggerClick))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                0 === c._count && (window.removeEventListener("scroll", this._handleWindowScrollBound),
                window.removeEventListener("resize", this._handleThrottledResizeBound),
                document.body.removeEventListener("click", this._handleTriggerClick))
            }
        }, {
            key: "_handleTriggerClick",
            value: function(t) {
                for (var e = o(t.target), i = c._elements.length - 1; 0 <= i; i--) {
                    var n = c._elements[i];
                    if (e.is('a[href="#' + n.$el.attr("id") + '"]')) {
                        t.preventDefault();
                        var s = n.$el.offset().top + 1;
                        a({
                            targets: [document.documentElement, document.body],
                            scrollTop: s - n.options.scrollOffset,
                            duration: 400,
                            easing: "easeOutCubic"
                        });
                        break
                    }
                }
            }
        }, {
            key: "_handleWindowScroll",
            value: function() {
                c._ticks++;
                for (var t = M.getDocumentScrollTop(), e = M.getDocumentScrollLeft(), i = e + window.innerWidth, n = t + window.innerHeight, s = c._findElements(t, i, n, e), o = 0; o < s.length; o++) {
                    var a = s[o];
                    a.tickId < 0 && a._enter(),
                    a.tickId = c._ticks
                }
                for (var r = 0; r < c._elementsInView.length; r++) {
                    var l = c._elementsInView[r]
                      , h = l.tickId;
                    0 <= h && h !== c._ticks && (l._exit(),
                    l.tickId = -1)
                }
                c._elementsInView = s
            }
        }, {
            key: "_enter",
            value: function() {
                (c._visibleElements = c._visibleElements.filter(function(t) {
                    return 0 != t.height()
                }))[0] ? (o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),
                c._visibleElements[0][0].M_ScrollSpy && this.id < c._visibleElements[0][0].M_ScrollSpy.id ? c._visibleElements.unshift(this.$el) : c._visibleElements.push(this.$el)) : c._visibleElements.push(this.$el),
                o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass)
            }
        }, {
            key: "_exit",
            value: function() {
                var e = this;
                (c._visibleElements = c._visibleElements.filter(function(t) {
                    return 0 != t.height()
                }))[0] && (o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),
                (c._visibleElements = c._visibleElements.filter(function(t) {
                    return t.attr("id") != e.$el.attr("id")
                }))[0] && o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass))
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_ScrollSpy
            }
        }, {
            key: "_findElements",
            value: function(t, e, i, n) {
                for (var s = [], o = 0; o < c._elements.length; o++) {
                    var a = c._elements[o]
                      , r = t + a.options.scrollOffset || 200;
                    if (0 < a.$el.height()) {
                        var l = a.$el.offset().top
                          , h = a.$el.offset().left
                          , d = h + a.$el.width()
                          , u = l + a.$el.height();
                        !(e < h || d < n || i < l || u < r) && s.push(a)
                    }
                }
                return s
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        c
    }();
    t._elements = [],
    t._elementsInView = [],
    t._visibleElements = [],
    t._count = 0,
    t._increment = 0,
    t._ticks = 0,
    M.ScrollSpy = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "scrollSpy", "M_ScrollSpy")
}(cash, M.anime),
function(h) {
    "use strict";
    var e = {
        data: {},
        limit: 1 / 0,
        onAutocomplete: null,
        minLength: 1,
        sortFunction: function(t, e, i) {
            return t.indexOf(i) - e.indexOf(i)
        }
    }
      , t = function(t) {
        function s(t, e) {
            _classCallCheck(this, s);
            var i = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, t, e));
            return (i.el.M_Autocomplete = i).options = h.extend({}, s.defaults, e),
            i.isOpen = !1,
            i.count = 0,
            i.activeIndex = -1,
            i.oldVal,
            i.$inputField = i.$el.closest(".input-field"),
            i.$active = h(),
            i._mousedown = !1,
            i._setupDropdown(),
            i._setupEventHandlers(),
            i
        }
        return _inherits(s, Component),
        _createClass(s, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._removeDropdown(),
                this.el.M_Autocomplete = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleInputBlurBound = this._handleInputBlur.bind(this),
                this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind(this),
                this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                this._handleInputClickBound = this._handleInputClick.bind(this),
                this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind(this),
                this._handleContainerMouseupAndTouchendBound = this._handleContainerMouseupAndTouchend.bind(this),
                this.el.addEventListener("blur", this._handleInputBlurBound),
                this.el.addEventListener("keyup", this._handleInputKeyupAndFocusBound),
                this.el.addEventListener("focus", this._handleInputKeyupAndFocusBound),
                this.el.addEventListener("keydown", this._handleInputKeydownBound),
                this.el.addEventListener("click", this._handleInputClickBound),
                this.container.addEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound),
                this.container.addEventListener("mouseup", this._handleContainerMouseupAndTouchendBound),
                void 0 !== window.ontouchstart && (this.container.addEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound),
                this.container.addEventListener("touchend", this._handleContainerMouseupAndTouchendBound))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("blur", this._handleInputBlurBound),
                this.el.removeEventListener("keyup", this._handleInputKeyupAndFocusBound),
                this.el.removeEventListener("focus", this._handleInputKeyupAndFocusBound),
                this.el.removeEventListener("keydown", this._handleInputKeydownBound),
                this.el.removeEventListener("click", this._handleInputClickBound),
                this.container.removeEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound),
                this.container.removeEventListener("mouseup", this._handleContainerMouseupAndTouchendBound),
                void 0 !== window.ontouchstart && (this.container.removeEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound),
                this.container.removeEventListener("touchend", this._handleContainerMouseupAndTouchendBound))
            }
        }, {
            key: "_setupDropdown",
            value: function() {
                var e = this;
                this.container = document.createElement("ul"),
                this.container.id = "autocomplete-options-" + M.guid(),
                h(this.container).addClass("autocomplete-content dropdown-content"),
                this.$inputField.append(this.container),
                this.el.setAttribute("data-target", this.container.id),
                this.dropdown = M.Dropdown.init(this.el, {
                    autoFocus: !1,
                    closeOnClick: !1,
                    coverTrigger: !1,
                    onItemClick: function(t) {
                        e.selectOption(h(t))
                    }
                }),
                this.el.removeEventListener("click", this.dropdown._handleClickBound)
            }
        }, {
            key: "_removeDropdown",
            value: function() {
                this.container.parentNode.removeChild(this.container)
            }
        }, {
            key: "_handleInputBlur",
            value: function() {
                this._mousedown || (this.close(),
                this._resetAutocomplete())
            }
        }, {
            key: "_handleInputKeyupAndFocus",
            value: function(t) {
                "keyup" === t.type && (s._keydown = !1),
                this.count = 0;
                var e = this.el.value.toLowerCase();
                13 !== t.keyCode && 38 !== t.keyCode && 40 !== t.keyCode && (this.oldVal === e || !M.tabPressed && "focus" === t.type || this.open(),
                this.oldVal = e)
            }
        }, {
            key: "_handleInputKeydown",
            value: function(t) {
                s._keydown = !0;
                var e = t.keyCode
                  , i = void 0
                  , n = h(this.container).children("li").length;
                e === M.keys.ENTER && 0 <= this.activeIndex ? (i = h(this.container).children("li").eq(this.activeIndex)).length && (this.selectOption(i),
                t.preventDefault()) : e !== M.keys.ARROW_UP && e !== M.keys.ARROW_DOWN || (t.preventDefault(),
                e === M.keys.ARROW_UP && 0 < this.activeIndex && this.activeIndex--,
                e === M.keys.ARROW_DOWN && this.activeIndex < n - 1 && this.activeIndex++,
                this.$active.removeClass("active"),
                0 <= this.activeIndex && (this.$active = h(this.container).children("li").eq(this.activeIndex),
                this.$active.addClass("active")))
            }
        }, {
            key: "_handleInputClick",
            value: function(t) {
                this.open()
            }
        }, {
            key: "_handleContainerMousedownAndTouchstart",
            value: function(t) {
                this._mousedown = !0
            }
        }, {
            key: "_handleContainerMouseupAndTouchend",
            value: function(t) {
                this._mousedown = !1
            }
        }, {
            key: "_highlight",
            value: function(t, e) {
                var i = e.find("img")
                  , n = e.text().toLowerCase().indexOf("" + t.toLowerCase())
                  , s = n + t.length - 1
                  , o = e.text().slice(0, n)
                  , a = e.text().slice(n, s + 1)
                  , r = e.text().slice(s + 1);
                e.html("<span>" + o + "<span class='highlight'>" + a + "</span>" + r + "</span>"),
                i.length && e.prepend(i)
            }
        }, {
            key: "_resetCurrentElement",
            value: function() {
                this.activeIndex = -1,
                this.$active.removeClass("active")
            }
        }, {
            key: "_resetAutocomplete",
            value: function() {
                h(this.container).empty(),
                this._resetCurrentElement(),
                this.oldVal = null,
                this.isOpen = !1,
                this._mousedown = !1
            }
        }, {
            key: "selectOption",
            value: function(t) {
                var e = t.text().trim();
                this.el.value = e,
                this.$el.trigger("change"),
                this._resetAutocomplete(),
                this.close(),
                "function" == typeof this.options.onAutocomplete && this.options.onAutocomplete.call(this, e)
            }
        }, {
            key: "_renderDropdown",
            value: function(t, i) {
                var n = this;
                this._resetAutocomplete();
                var e = [];
                for (var s in t)
                    if (t.hasOwnProperty(s) && -1 !== s.toLowerCase().indexOf(i)) {
                        if (this.count >= this.options.limit)
                            break;
                        var o = {
                            data: t[s],
                            key: s
                        };
                        e.push(o),
                        this.count++
                    }
                if (this.options.sortFunction) {
                    e.sort(function(t, e) {
                        return n.options.sortFunction(t.key.toLowerCase(), e.key.toLowerCase(), i.toLowerCase())
                    })
                }
                for (var a = 0; a < e.length; a++) {
                    var r = e[a]
                      , l = h("<li></li>");
                    r.data ? l.append('<img src="' + r.data + '" class="right circle"><span>' + r.key + "</span>") : l.append("<span>" + r.key + "</span>"),
                    h(this.container).append(l),
                    this._highlight(i, l)
                }
            }
        }, {
            key: "open",
            value: function() {
                var t = this.el.value.toLowerCase();
                this._resetAutocomplete(),
                t.length >= this.options.minLength && (this.isOpen = !0,
                this._renderDropdown(this.options.data, t)),
                this.dropdown.isOpen ? this.dropdown.recalculateDimensions() : this.dropdown.open()
            }
        }, {
            key: "close",
            value: function() {
                this.dropdown.close()
            }
        }, {
            key: "updateData",
            value: function(t) {
                var e = this.el.value.toLowerCase();
                this.options.data = t,
                this.isOpen && this._renderDropdown(t, e)
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Autocomplete
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        s
    }();
    t._keydown = !1,
    M.Autocomplete = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "autocomplete", "M_Autocomplete")
}(cash),
function(d) {
    M.updateTextFields = function() {
        d("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea").each(function(t, e) {
            var i = d(this);
            0 < t.value.length || d(t).is(":focus") || t.autofocus || null !== i.attr("placeholder") ? i.siblings("label").addClass("active") : t.validity ? i.siblings("label").toggleClass("active", !0 === t.validity.badInput) : i.siblings("label").removeClass("active")
        })
    }
    ,
    M.validate_field = function(t) {
        var e = null !== t.attr("data-length")
          , i = parseInt(t.attr("data-length"))
          , n = t[0].value.length;
        0 !== n || !1 !== t[0].validity.badInput || t.is(":required") ? t.hasClass("validate") && (t.is(":valid") && e && n <= i || t.is(":valid") && !e ? (t.removeClass("invalid"),
        t.addClass("valid")) : (t.removeClass("valid"),
        t.addClass("invalid"))) : t.hasClass("validate") && (t.removeClass("valid"),
        t.removeClass("invalid"))
    }
    ,
    M.textareaAutoResize = function(t) {
        if (t instanceof Element && (t = d(t)),
        t.length) {
            var e = d(".hiddendiv").first();
            e.length || (e = d('<div class="hiddendiv common"></div>'),
            d("body").append(e));
            var i = t.css("font-family")
              , n = t.css("font-size")
              , s = t.css("line-height")
              , o = t.css("padding-top")
              , a = t.css("padding-right")
              , r = t.css("padding-bottom")
              , l = t.css("padding-left");
            n && e.css("font-size", n),
            i && e.css("font-family", i),
            s && e.css("line-height", s),
            o && e.css("padding-top", o),
            a && e.css("padding-right", a),
            r && e.css("padding-bottom", r),
            l && e.css("padding-left", l),
            t.data("original-height") || t.data("original-height", t.height()),
            "off" === t.attr("wrap") && e.css("overflow-wrap", "normal").css("white-space", "pre"),
            e.text(t[0].value + "\n");
            var h = e.html().replace(/\n/g, "<br>");
            e.html(h),
            0 < t[0].offsetWidth && 0 < t[0].offsetHeight ? e.css("width", t.width() + "px") : e.css("width", window.innerWidth / 2 + "px"),
            t.data("original-height") <= e.innerHeight() ? t.css("height", e.innerHeight() + "px") : t[0].value.length < t.data("previous-length") && t.css("height", t.data("original-height") + "px"),
            t.data("previous-length", t[0].value.length)
        } else
            console.error("No textarea element found")
    }
    ,
    d(document).ready(function() {
        var n = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";
        d(document).on("change", n, function() {
            0 === this.value.length && null === d(this).attr("placeholder") || d(this).siblings("label").addClass("active"),
            M.validate_field(d(this))
        }),
        d(document).ready(function() {
            M.updateTextFields()
        }),
        d(document).on("reset", function(t) {
            var e = d(t.target);
            e.is("form") && (e.find(n).removeClass("valid").removeClass("invalid"),
            e.find(n).each(function(t) {
                this.value.length && d(this).siblings("label").removeClass("active")
            }),
            setTimeout(function() {
                e.find("select").each(function() {
                    this.M_FormSelect && d(this).trigger("change")
                })
            }, 0))
        }),
        document.addEventListener("focus", function(t) {
            d(t.target).is(n) && d(t.target).siblings("label, .prefix").addClass("active")
        }, !0),
        document.addEventListener("blur", function(t) {
            var e = d(t.target);
            if (e.is(n)) {
                var i = ".prefix";
                0 === e[0].value.length && !0 !== e[0].validity.badInput && null === e.attr("placeholder") && (i += ", label"),
                e.siblings(i).removeClass("active"),
                M.validate_field(e)
            }
        }, !0);
        d(document).on("keyup", "input[type=radio], input[type=checkbox]", function(t) {
            if (t.which === M.keys.TAB)
                return d(this).addClass("tabbed"),
                void d(this).one("blur", function(t) {
                    d(this).removeClass("tabbed")
                })
        });
        var t = ".materialize-textarea";
        d(t).each(function() {
            var t = d(this);
            t.data("original-height", t.height()),
            t.data("previous-length", this.value.length),
            M.textareaAutoResize(t)
        }),
        d(document).on("keyup", t, function() {
            M.textareaAutoResize(d(this))
        }),
        d(document).on("keydown", t, function() {
            M.textareaAutoResize(d(this))
        }),
        d(document).on("change", '.file-field input[type="file"]', function() {
            for (var t = d(this).closest(".file-field").find("input.file-path"), e = d(this)[0].files, i = [], n = 0; n < e.length; n++)
                i.push(e[n].name);
            t[0].value = i.join(", "),
            t.trigger("change")
        })
    })
}(cash),
function(s, o) {
    "use strict";
    var e = {
        indicators: !0,
        height: 400,
        duration: 500,
        interval: 6e3
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Slider = i).options = s.extend({}, n.defaults, e),
            i.$slider = i.$el.find(".slides"),
            i.$slides = i.$slider.children("li"),
            i.activeIndex = i.$slides.filter(function(t) {
                return s(t).hasClass("active")
            }).first().index(),
            -1 != i.activeIndex && (i.$active = i.$slides.eq(i.activeIndex)),
            i._setSliderHeight(),
            i.$slides.find(".caption").each(function(t) {
                i._animateCaptionIn(t, 0)
            }),
            i.$slides.find("img").each(function(t) {
                var e = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                s(t).attr("src") !== e && (s(t).css("background-image", 'url("' + s(t).attr("src") + '")'),
                s(t).attr("src", e))
            }),
            i._setupIndicators(),
            i.$active ? i.$active.css("display", "block") : (i.$slides.first().addClass("active"),
            o({
                targets: i.$slides.first()[0],
                opacity: 1,
                duration: i.options.duration,
                easing: "easeOutQuad"
            }),
            i.activeIndex = 0,
            i.$active = i.$slides.eq(i.activeIndex),
            i.options.indicators && i.$indicators.eq(i.activeIndex).addClass("active")),
            i.$active.find("img").each(function(t) {
                o({
                    targets: i.$active.find(".caption")[0],
                    opacity: 1,
                    translateX: 0,
                    translateY: 0,
                    duration: i.options.duration,
                    easing: "easeOutQuad"
                })
            }),
            i._setupEventHandlers(),
            i.start(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this.pause(),
                this._removeIndicators(),
                this._removeEventHandlers(),
                this.el.M_Slider = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                var e = this;
                this._handleIntervalBound = this._handleInterval.bind(this),
                this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this),
                this.options.indicators && this.$indicators.each(function(t) {
                    t.addEventListener("click", e._handleIndicatorClickBound)
                })
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                var e = this;
                this.options.indicators && this.$indicators.each(function(t) {
                    t.removeEventListener("click", e._handleIndicatorClickBound)
                })
            }
        }, {
            key: "_handleIndicatorClick",
            value: function(t) {
                var e = s(t.target).index();
                this.set(e)
            }
        }, {
            key: "_handleInterval",
            value: function() {
                var t = this.$slider.find(".active").index();
                this.$slides.length === t + 1 ? t = 0 : t += 1,
                this.set(t)
            }
        }, {
            key: "_animateCaptionIn",
            value: function(t, e) {
                var i = {
                    targets: t,
                    opacity: 0,
                    duration: e,
                    easing: "easeOutQuad"
                };
                s(t).hasClass("center-align") ? i.translateY = -100 : s(t).hasClass("right-align") ? i.translateX = 100 : s(t).hasClass("left-align") && (i.translateX = -100),
                o(i)
            }
        }, {
            key: "_setSliderHeight",
            value: function() {
                this.$el.hasClass("fullscreen") || (this.options.indicators ? this.$el.css("height", this.options.height + 40 + "px") : this.$el.css("height", this.options.height + "px"),
                this.$slider.css("height", this.options.height + "px"))
            }
        }, {
            key: "_setupIndicators",
            value: function() {
                var n = this;
                this.options.indicators && (this.$indicators = s('<ul class="indicators"></ul>'),
                this.$slides.each(function(t, e) {
                    var i = s('<li class="indicator-item"></li>');
                    n.$indicators.append(i[0])
                }),
                this.$el.append(this.$indicators[0]),
                this.$indicators = this.$indicators.children("li.indicator-item"))
            }
        }, {
            key: "_removeIndicators",
            value: function() {
                this.$el.find("ul.indicators").remove()
            }
        }, {
            key: "set",
            value: function(t) {
                var e = this;
                if (t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1),
                this.activeIndex != t) {
                    this.$active = this.$slides.eq(this.activeIndex);
                    var i = this.$active.find(".caption");
                    this.$active.removeClass("active"),
                    o({
                        targets: this.$active[0],
                        opacity: 0,
                        duration: this.options.duration,
                        easing: "easeOutQuad",
                        complete: function() {
                            e.$slides.not(".active").each(function(t) {
                                o({
                                    targets: t,
                                    opacity: 0,
                                    translateX: 0,
                                    translateY: 0,
                                    duration: 0,
                                    easing: "easeOutQuad"
                                })
                            })
                        }
                    }),
                    this._animateCaptionIn(i[0], this.options.duration),
                    this.options.indicators && (this.$indicators.eq(this.activeIndex).removeClass("active"),
                    this.$indicators.eq(t).addClass("active")),
                    o({
                        targets: this.$slides.eq(t)[0],
                        opacity: 1,
                        duration: this.options.duration,
                        easing: "easeOutQuad"
                    }),
                    o({
                        targets: this.$slides.eq(t).find(".caption")[0],
                        opacity: 1,
                        translateX: 0,
                        translateY: 0,
                        duration: this.options.duration,
                        delay: this.options.duration,
                        easing: "easeOutQuad"
                    }),
                    this.$slides.eq(t).addClass("active"),
                    this.activeIndex = t,
                    this.start()
                }
            }
        }, {
            key: "pause",
            value: function() {
                clearInterval(this.interval)
            }
        }, {
            key: "start",
            value: function() {
                clearInterval(this.interval),
                this.interval = setInterval(this._handleIntervalBound, this.options.duration + this.options.interval)
            }
        }, {
            key: "next",
            value: function() {
                var t = this.activeIndex + 1;
                t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1),
                this.set(t)
            }
        }, {
            key: "prev",
            value: function() {
                var t = this.activeIndex - 1;
                t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1),
                this.set(t)
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Slider
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.Slider = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "slider", "M_Slider")
}(cash, M.anime),
function(n, s) {
    n(document).on("click", ".card", function(t) {
        if (n(this).children(".card-reveal").length) {
            var i = n(t.target).closest(".card");
            void 0 === i.data("initialOverflow") && i.data("initialOverflow", void 0 === i.css("overflow") ? "" : i.css("overflow"));
            var e = n(this).find(".card-reveal");
            n(t.target).is(n(".card-reveal .card-title")) || n(t.target).is(n(".card-reveal .card-title i")) ? s({
                targets: e[0],
                translateY: 0,
                duration: 225,
                easing: "easeInOutQuad",
                complete: function(t) {
                    var e = t.animatables[0].target;
                    n(e).css({
                        display: "none"
                    }),
                    i.css("overflow", i.data("initialOverflow"))
                }
            }) : (n(t.target).is(n(".card .activator")) || n(t.target).is(n(".card .activator i"))) && (i.css("overflow", "hidden"),
            e.css({
                display: "block"
            }),
            s({
                targets: e[0],
                translateY: "-100%",
                duration: 300,
                easing: "easeInOutQuad"
            }))
        }
    })
}(cash, M.anime),
function(h) {
    "use strict";
    var e = {
        data: [],
        placeholder: "",
        secondaryPlaceholder: "",
        autocompleteOptions: {},
        limit: 1 / 0,
        onChipAdd: null,
        onChipSelect: null,
        onChipDelete: null
    }
      , t = function(t) {
        function l(t, e) {
            _classCallCheck(this, l);
            var i = _possibleConstructorReturn(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, l, t, e));
            return (i.el.M_Chips = i).options = h.extend({}, l.defaults, e),
            i.$el.addClass("chips input-field"),
            i.chipsData = [],
            i.$chips = h(),
            i._setupInput(),
            i.hasAutocomplete = 0 < Object.keys(i.options.autocompleteOptions).length,
            i.$input.attr("id") || i.$input.attr("id", M.guid()),
            i.options.data.length && (i.chipsData = i.options.data,
            i._renderChips(i.chipsData)),
            i.hasAutocomplete && i._setupAutocomplete(),
            i._setPlaceholder(),
            i._setupLabel(),
            i._setupEventHandlers(),
            i
        }
        return _inherits(l, Component),
        _createClass(l, [{
            key: "getData",
            value: function() {
                return this.chipsData
            }
        }, {
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.$chips.remove(),
                this.el.M_Chips = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleChipClickBound = this._handleChipClick.bind(this),
                this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                this._handleInputFocusBound = this._handleInputFocus.bind(this),
                this._handleInputBlurBound = this._handleInputBlur.bind(this),
                this.el.addEventListener("click", this._handleChipClickBound),
                document.addEventListener("keydown", l._handleChipsKeydown),
                document.addEventListener("keyup", l._handleChipsKeyup),
                this.el.addEventListener("blur", l._handleChipsBlur, !0),
                this.$input[0].addEventListener("focus", this._handleInputFocusBound),
                this.$input[0].addEventListener("blur", this._handleInputBlurBound),
                this.$input[0].addEventListener("keydown", this._handleInputKeydownBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleChipClickBound),
                document.removeEventListener("keydown", l._handleChipsKeydown),
                document.removeEventListener("keyup", l._handleChipsKeyup),
                this.el.removeEventListener("blur", l._handleChipsBlur, !0),
                this.$input[0].removeEventListener("focus", this._handleInputFocusBound),
                this.$input[0].removeEventListener("blur", this._handleInputBlurBound),
                this.$input[0].removeEventListener("keydown", this._handleInputKeydownBound)
            }
        }, {
            key: "_handleChipClick",
            value: function(t) {
                var e = h(t.target).closest(".chip")
                  , i = h(t.target).is(".close");
                if (e.length) {
                    var n = e.index();
                    i ? (this.deleteChip(n),
                    this.$input[0].focus()) : this.selectChip(n)
                } else
                    this.$input[0].focus()
            }
        }, {
            key: "_handleInputFocus",
            value: function() {
                this.$el.addClass("focus")
            }
        }, {
            key: "_handleInputBlur",
            value: function() {
                this.$el.removeClass("focus")
            }
        }, {
            key: "_handleInputKeydown",
            value: function(t) {
                if (l._keydown = !0,
                13 === t.keyCode) {
                    if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen)
                        return;
                    t.preventDefault(),
                    this.addChip({
                        tag: this.$input[0].value
                    }),
                    this.$input[0].value = ""
                } else
                    8 !== t.keyCode && 37 !== t.keyCode || "" !== this.$input[0].value || !this.chipsData.length || (t.preventDefault(),
                    this.selectChip(this.chipsData.length - 1))
            }
        }, {
            key: "_renderChip",
            value: function(t) {
                if (t.tag) {
                    var e = document.createElement("div")
                      , i = document.createElement("i");
                    if (e.classList.add("chip"),
                    e.textContent = t.tag,
                    e.setAttribute("tabindex", 0),
                    h(i).addClass("material-icons close"),
                    i.textContent = "close",
                    t.image) {
                        var n = document.createElement("img");
                        n.setAttribute("src", t.image),
                        e.insertBefore(n, e.firstChild)
                    }
                    return e.appendChild(i),
                    e
                }
            }
        }, {
            key: "_renderChips",
            value: function() {
                this.$chips.remove();
                for (var t = 0; t < this.chipsData.length; t++) {
                    var e = this._renderChip(this.chipsData[t]);
                    this.$el.append(e),
                    this.$chips.add(e)
                }
                this.$el.append(this.$input[0])
            }
        }, {
            key: "_setupAutocomplete",
            value: function() {
                var e = this;
                this.options.autocompleteOptions.onAutocomplete = function(t) {
                    e.addChip({
                        tag: t
                    }),
                    e.$input[0].value = "",
                    e.$input[0].focus()
                }
                ,
                this.autocomplete = M.Autocomplete.init(this.$input[0], this.options.autocompleteOptions)
            }
        }, {
            key: "_setupInput",
            value: function() {
                this.$input = this.$el.find("input"),
                this.$input.length || (this.$input = h("<input></input>"),
                this.$el.append(this.$input)),
                this.$input.addClass("input")
            }
        }, {
            key: "_setupLabel",
            value: function() {
                this.$label = this.$el.find("label"),
                this.$label.length && this.$label.setAttribute("for", this.$input.attr("id"))
            }
        }, {
            key: "_setPlaceholder",
            value: function() {
                void 0 !== this.chipsData && !this.chipsData.length && this.options.placeholder ? h(this.$input).prop("placeholder", this.options.placeholder) : (void 0 === this.chipsData || this.chipsData.length) && this.options.secondaryPlaceholder && h(this.$input).prop("placeholder", this.options.secondaryPlaceholder)
            }
        }, {
            key: "_isValid",
            value: function(t) {
                if (t.hasOwnProperty("tag") && "" !== t.tag) {
                    for (var e = !1, i = 0; i < this.chipsData.length; i++)
                        if (this.chipsData[i].tag === t.tag) {
                            e = !0;
                            break
                        }
                    return !e
                }
                return !1
            }
        }, {
            key: "addChip",
            value: function(t) {
                if (this._isValid(t) && !(this.chipsData.length >= this.options.limit)) {
                    var e = this._renderChip(t);
                    this.$chips.add(e),
                    this.chipsData.push(t),
                    h(this.$input).before(e),
                    this._setPlaceholder(),
                    "function" == typeof this.options.onChipAdd && this.options.onChipAdd.call(this, this.$el, e)
                }
            }
        }, {
            key: "deleteChip",
            value: function(t) {
                var e = this.$chips.eq(t);
                this.$chips.eq(t).remove(),
                this.$chips = this.$chips.filter(function(t) {
                    return 0 <= h(t).index()
                }),
                this.chipsData.splice(t, 1),
                this._setPlaceholder(),
                "function" == typeof this.options.onChipDelete && this.options.onChipDelete.call(this, this.$el, e[0])
            }
        }, {
            key: "selectChip",
            value: function(t) {
                var e = this.$chips.eq(t);
                (this._selectedChip = e)[0].focus(),
                "function" == typeof this.options.onChipSelect && this.options.onChipSelect.call(this, this.$el, e[0])
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(l.__proto__ || Object.getPrototypeOf(l), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Chips
            }
        }, {
            key: "_handleChipsKeydown",
            value: function(t) {
                l._keydown = !0;
                var e = h(t.target).closest(".chips")
                  , i = t.target && e.length;
                if (!h(t.target).is("input, textarea") && i) {
                    var n = e[0].M_Chips;
                    if (8 === t.keyCode || 46 === t.keyCode) {
                        t.preventDefault();
                        var s = n.chipsData.length;
                        if (n._selectedChip) {
                            var o = n._selectedChip.index();
                            n.deleteChip(o),
                            n._selectedChip = null,
                            s = Math.max(o - 1, 0)
                        }
                        n.chipsData.length && n.selectChip(s)
                    } else if (37 === t.keyCode) {
                        if (n._selectedChip) {
                            var a = n._selectedChip.index() - 1;
                            if (a < 0)
                                return;
                            n.selectChip(a)
                        }
                    } else if (39 === t.keyCode && n._selectedChip) {
                        var r = n._selectedChip.index() + 1;
                        r >= n.chipsData.length ? n.$input[0].focus() : n.selectChip(r)
                    }
                }
            }
        }, {
            key: "_handleChipsKeyup",
            value: function(t) {
                l._keydown = !1
            }
        }, {
            key: "_handleChipsBlur",
            value: function(t) {
                l._keydown || (h(t.target).closest(".chips")[0].M_Chips._selectedChip = null)
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        l
    }();
    t._keydown = !1,
    M.Chips = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "chips", "M_Chips"),
    h(document).ready(function() {
        h(document.body).on("click", ".chip .close", function() {
            var t = h(this).closest(".chips");
            t.length && t[0].M_Chips || h(this).closest(".chip").remove()
        })
    })
}(cash),
function(s) {
    "use strict";
    var e = {
        top: 0,
        bottom: 1 / 0,
        offset: 0,
        onPositionChange: null
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Pushpin = i).options = s.extend({}, n.defaults, e),
            i.originalOffset = i.el.offsetTop,
            n._pushpins.push(i),
            i._setupEventHandlers(),
            i._updatePosition(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this.el.style.top = null,
                this._removePinClasses(),
                this._removeEventHandlers();
                var t = n._pushpins.indexOf(this);
                n._pushpins.splice(t, 1)
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                document.addEventListener("scroll", n._updateElements)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                document.removeEventListener("scroll", n._updateElements)
            }
        }, {
            key: "_updatePosition",
            value: function() {
                var t = M.getDocumentScrollTop() + this.options.offset;
                this.options.top <= t && this.options.bottom >= t && !this.el.classList.contains("pinned") && (this._removePinClasses(),
                this.el.style.top = this.options.offset + "px",
                this.el.classList.add("pinned"),
                "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pinned")),
                t < this.options.top && !this.el.classList.contains("pin-top") && (this._removePinClasses(),
                this.el.style.top = 0,
                this.el.classList.add("pin-top"),
                "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-top")),
                t > this.options.bottom && !this.el.classList.contains("pin-bottom") && (this._removePinClasses(),
                this.el.classList.add("pin-bottom"),
                this.el.style.top = this.options.bottom - this.originalOffset + "px",
                "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-bottom"))
            }
        }, {
            key: "_removePinClasses",
            value: function() {
                this.el.classList.remove("pin-top"),
                this.el.classList.remove("pinned"),
                this.el.classList.remove("pin-bottom")
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Pushpin
            }
        }, {
            key: "_updateElements",
            value: function() {
                for (var t in n._pushpins) {
                    n._pushpins[t]._updatePosition()
                }
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    t._pushpins = [],
    M.Pushpin = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "pushpin", "M_Pushpin")
}(cash),
function(r, s) {
    "use strict";
    var e = {
        direction: "top",
        hoverEnabled: !0,
        toolbarEnabled: !1
    };
    r.fn.reverse = [].reverse;
    var t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_FloatingActionButton = i).options = r.extend({}, n.defaults, e),
            i.isOpen = !1,
            i.$anchor = i.$el.children("a").first(),
            i.$menu = i.$el.children("ul").first(),
            i.$floatingBtns = i.$el.find("ul .btn-floating"),
            i.$floatingBtnsReverse = i.$el.find("ul .btn-floating").reverse(),
            i.offsetY = 0,
            i.offsetX = 0,
            i.$el.addClass("direction-" + i.options.direction),
            "top" === i.options.direction ? i.offsetY = 40 : "right" === i.options.direction ? i.offsetX = -40 : "bottom" === i.options.direction ? i.offsetY = -40 : i.offsetX = 40,
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.M_FloatingActionButton = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleFABClickBound = this._handleFABClick.bind(this),
                this._handleOpenBound = this.open.bind(this),
                this._handleCloseBound = this.close.bind(this),
                this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.addEventListener("mouseenter", this._handleOpenBound),
                this.el.addEventListener("mouseleave", this._handleCloseBound)) : this.el.addEventListener("click", this._handleFABClickBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.removeEventListener("mouseenter", this._handleOpenBound),
                this.el.removeEventListener("mouseleave", this._handleCloseBound)) : this.el.removeEventListener("click", this._handleFABClickBound)
            }
        }, {
            key: "_handleFABClick",
            value: function() {
                this.isOpen ? this.close() : this.open()
            }
        }, {
            key: "_handleDocumentClick",
            value: function(t) {
                r(t.target).closest(this.$menu).length || this.close()
            }
        }, {
            key: "open",
            value: function() {
                this.isOpen || (this.options.toolbarEnabled ? this._animateInToolbar() : this._animateInFAB(),
                this.isOpen = !0)
            }
        }, {
            key: "close",
            value: function() {
                this.isOpen && (this.options.toolbarEnabled ? (window.removeEventListener("scroll", this._handleCloseBound, !0),
                document.body.removeEventListener("click", this._handleDocumentClickBound, !0),
                this._animateOutToolbar()) : this._animateOutFAB(),
                this.isOpen = !1)
            }
        }, {
            key: "_animateInFAB",
            value: function() {
                var e = this;
                this.$el.addClass("active");
                var i = 0;
                this.$floatingBtnsReverse.each(function(t) {
                    s({
                        targets: t,
                        opacity: 1,
                        scale: [.4, 1],
                        translateY: [e.offsetY, 0],
                        translateX: [e.offsetX, 0],
                        duration: 275,
                        delay: i,
                        easing: "easeInOutQuad"
                    }),
                    i += 40
                })
            }
        }, {
            key: "_animateOutFAB",
            value: function() {
                var e = this;
                this.$floatingBtnsReverse.each(function(t) {
                    s.remove(t),
                    s({
                        targets: t,
                        opacity: 0,
                        scale: .4,
                        translateY: e.offsetY,
                        translateX: e.offsetX,
                        duration: 175,
                        easing: "easeOutQuad",
                        complete: function() {
                            e.$el.removeClass("active")
                        }
                    })
                })
            }
        }, {
            key: "_animateInToolbar",
            value: function() {
                var t, e = this, i = window.innerWidth, n = window.innerHeight, s = this.el.getBoundingClientRect(), o = r('<div class="fab-backdrop"></div>'), a = this.$anchor.css("background-color");
                this.$anchor.append(o),
                this.offsetX = s.left - i / 2 + s.width / 2,
                this.offsetY = n - s.bottom,
                t = i / o[0].clientWidth,
                this.btnBottom = s.bottom,
                this.btnLeft = s.left,
                this.btnWidth = s.width,
                this.$el.addClass("active"),
                this.$el.css({
                    "text-align": "center",
                    width: "100%",
                    bottom: 0,
                    left: 0,
                    transform: "translateX(" + this.offsetX + "px)",
                    transition: "none"
                }),
                this.$anchor.css({
                    transform: "translateY(" + -this.offsetY + "px)",
                    transition: "none"
                }),
                o.css({
                    "background-color": a
                }),
                setTimeout(function() {
                    e.$el.css({
                        transform: "",
                        transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
                    }),
                    e.$anchor.css({
                        overflow: "visible",
                        transform: "",
                        transition: "transform .2s"
                    }),
                    setTimeout(function() {
                        e.$el.css({
                            overflow: "hidden",
                            "background-color": a
                        }),
                        o.css({
                            transform: "scale(" + t + ")",
                            transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                        }),
                        e.$menu.children("li").children("a").css({
                            opacity: 1
                        }),
                        e._handleDocumentClickBound = e._handleDocumentClick.bind(e),
                        window.addEventListener("scroll", e._handleCloseBound, !0),
                        document.body.addEventListener("click", e._handleDocumentClickBound, !0)
                    }, 100)
                }, 0)
            }
        }, {
            key: "_animateOutToolbar",
            value: function() {
                var t = this
                  , e = window.innerWidth
                  , i = window.innerHeight
                  , n = this.$el.find(".fab-backdrop")
                  , s = this.$anchor.css("background-color");
                this.offsetX = this.btnLeft - e / 2 + this.btnWidth / 2,
                this.offsetY = i - this.btnBottom,
                this.$el.removeClass("active"),
                this.$el.css({
                    "background-color": "transparent",
                    transition: "none"
                }),
                this.$anchor.css({
                    transition: "none"
                }),
                n.css({
                    transform: "scale(0)",
                    "background-color": s
                }),
                this.$menu.children("li").children("a").css({
                    opacity: ""
                }),
                setTimeout(function() {
                    n.remove(),
                    t.$el.css({
                        "text-align": "",
                        width: "",
                        bottom: "",
                        left: "",
                        overflow: "",
                        "background-color": "",
                        transform: "translate3d(" + -t.offsetX + "px,0,0)"
                    }),
                    t.$anchor.css({
                        overflow: "",
                        transform: "translate3d(0," + t.offsetY + "px,0)"
                    }),
                    setTimeout(function() {
                        t.$el.css({
                            transform: "translate3d(0,0,0)",
                            transition: "transform .2s"
                        }),
                        t.$anchor.css({
                            transform: "translate3d(0,0,0)",
                            transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                        })
                    }, 20)
                }, 200)
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_FloatingActionButton
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.FloatingActionButton = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "floatingActionButton", "M_FloatingActionButton")
}(cash, M.anime),
function(g) {
    "use strict";
    var e = {
        autoClose: !1,
        format: "mmm dd, yyyy",
        parse: null,
        defaultDate: null,
        setDefaultDate: !1,
        disableWeekends: !1,
        disableDayFn: null,
        firstDay: 0,
        minDate: null,
        maxDate: null,
        yearRange: 10,
        minYear: 0,
        maxYear: 9999,
        minMonth: void 0,
        maxMonth: void 0,
        startRange: null,
        endRange: null,
        isRTL: !1,
        showMonthAfterYear: !1,
        showDaysInNextAndPreviousMonths: !1,
        container: null,
        showClearBtn: !1,
        i18n: {
            cancel: "Cancel",
            clear: "Clear",
            done: "Ok",
            previousMonth: "â€¹",
            nextMonth: "â€º",
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysAbbrev: ["S", "M", "T", "W", "T", "F", "S"]
        },
        events: [],
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null
    }
      , t = function(t) {
        function B(t, e) {
            _classCallCheck(this, B);
            var i = _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this, B, t, e));
            (i.el.M_Datepicker = i).options = g.extend({}, B.defaults, e),
            e && e.hasOwnProperty("i18n") && "object" == typeof e.i18n && (i.options.i18n = g.extend({}, B.defaults.i18n, e.i18n)),
            i.options.minDate && i.options.minDate.setHours(0, 0, 0, 0),
            i.options.maxDate && i.options.maxDate.setHours(0, 0, 0, 0),
            i.id = M.guid(),
            i._setupVariables(),
            i._insertHTMLIntoDOM(),
            i._setupModal(),
            i._setupEventHandlers(),
            i.options.defaultDate || (i.options.defaultDate = new Date(Date.parse(i.el.value)));
            var n = i.options.defaultDate;
            return B._isDate(n) ? i.options.setDefaultDate ? (i.setDate(n, !0),
            i.setInputValue()) : i.gotoDate(n) : i.gotoDate(new Date),
            i.isOpen = !1,
            i
        }
        return _inherits(B, Component),
        _createClass(B, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.modal.destroy(),
                g(this.modalEl).remove(),
                this.destroySelects(),
                this.el.M_Datepicker = void 0
            }
        }, {
            key: "destroySelects",
            value: function() {
                var t = this.calendarEl.querySelector(".orig-select-year");
                t && M.FormSelect.getInstance(t).destroy();
                var e = this.calendarEl.querySelector(".orig-select-month");
                e && M.FormSelect.getInstance(e).destroy()
            }
        }, {
            key: "_insertHTMLIntoDOM",
            value: function() {
                this.options.showClearBtn && (g(this.clearBtn).css({
                    visibility: ""
                }),
                this.clearBtn.innerHTML = this.options.i18n.clear),
                this.doneBtn.innerHTML = this.options.i18n.done,
                this.cancelBtn.innerHTML = this.options.i18n.cancel,
                this.options.container ? this.$modalEl.appendTo(this.options.container) : this.$modalEl.insertBefore(this.el)
            }
        }, {
            key: "_setupModal",
            value: function() {
                var t = this;
                this.modalEl.id = "modal-" + this.id,
                this.modal = M.Modal.init(this.modalEl, {
                    onCloseEnd: function() {
                        t.isOpen = !1
                    }
                })
            }
        }, {
            key: "toString",
            value: function(t) {
                var e = this;
                return t = t || this.options.format,
                B._isDate(this.date) ? t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g).map(function(t) {
                    return e.formats[t] ? e.formats[t]() : t
                }).join("") : ""
            }
        }, {
            key: "setDate",
            value: function(t, e) {
                if (!t)
                    return this.date = null,
                    this._renderDateDisplay(),
                    this.draw();
                if ("string" == typeof t && (t = new Date(Date.parse(t))),
                B._isDate(t)) {
                    var i = this.options.minDate
                      , n = this.options.maxDate;
                    B._isDate(i) && t < i ? t = i : B._isDate(n) && n < t && (t = n),
                    this.date = new Date(t.getTime()),
                    this._renderDateDisplay(),
                    B._setToStartOfDay(this.date),
                    this.gotoDate(this.date),
                    e || "function" != typeof this.options.onSelect || this.options.onSelect.call(this, this.date)
                }
            }
        }, {
            key: "setInputValue",
            value: function() {
                this.el.value = this.toString(),
                this.$el.trigger("change", {
                    firedBy: this
                })
            }
        }, {
            key: "_renderDateDisplay",
            value: function() {
                var t = B._isDate(this.date) ? this.date : new Date
                  , e = this.options.i18n
                  , i = e.weekdaysShort[t.getDay()]
                  , n = e.monthsShort[t.getMonth()]
                  , s = t.getDate();
                this.yearTextEl.innerHTML = t.getFullYear(),
                this.dateTextEl.innerHTML = i + ", " + n + " " + s
            }
        }, {
            key: "gotoDate",
            value: function(t) {
                var e = !0;
                if (B._isDate(t)) {
                    if (this.calendars) {
                        var i = new Date(this.calendars[0].year,this.calendars[0].month,1)
                          , n = new Date(this.calendars[this.calendars.length - 1].year,this.calendars[this.calendars.length - 1].month,1)
                          , s = t.getTime();
                        n.setMonth(n.getMonth() + 1),
                        n.setDate(n.getDate() - 1),
                        e = s < i.getTime() || n.getTime() < s
                    }
                    e && (this.calendars = [{
                        month: t.getMonth(),
                        year: t.getFullYear()
                    }]),
                    this.adjustCalendars()
                }
            }
        }, {
            key: "adjustCalendars",
            value: function() {
                this.calendars[0] = this.adjustCalendar(this.calendars[0]),
                this.draw()
            }
        }, {
            key: "adjustCalendar",
            value: function(t) {
                return t.month < 0 && (t.year -= Math.ceil(Math.abs(t.month) / 12),
                t.month += 12),
                11 < t.month && (t.year += Math.floor(Math.abs(t.month) / 12),
                t.month -= 12),
                t
            }
        }, {
            key: "nextMonth",
            value: function() {
                this.calendars[0].month++,
                this.adjustCalendars()
            }
        }, {
            key: "prevMonth",
            value: function() {
                this.calendars[0].month--,
                this.adjustCalendars()
            }
        }, {
            key: "render",
            value: function(t, e, i) {
                var n = this.options
                  , s = new Date
                  , o = B._getDaysInMonth(t, e)
                  , a = new Date(t,e,1).getDay()
                  , r = []
                  , l = [];
                B._setToStartOfDay(s),
                0 < n.firstDay && (a -= n.firstDay) < 0 && (a += 7);
                for (var h = 0 === e ? 11 : e - 1, d = 11 === e ? 0 : e + 1, u = 0 === e ? t - 1 : t, c = 11 === e ? t + 1 : t, p = B._getDaysInMonth(u, h), v = o + a, f = v; 7 < f; )
                    f -= 7;
                v += 7 - f;
                for (var m = !1, g = 0, _ = 0; g < v; g++) {
                    var y = new Date(t,e,g - a + 1)
                      , k = !!B._isDate(this.date) && B._compareDates(y, this.date)
                      , b = B._compareDates(y, s)
                      , w = -1 !== n.events.indexOf(y.toDateString())
                      , C = g < a || o + a <= g
                      , E = g - a + 1
                      , M = e
                      , O = t
                      , x = n.startRange && B._compareDates(n.startRange, y)
                      , L = n.endRange && B._compareDates(n.endRange, y)
                      , T = n.startRange && n.endRange && n.startRange < y && y < n.endRange;
                    C && (g < a ? (E = p + E,
                    M = h,
                    O = u) : (E -= o,
                    M = d,
                    O = c));
                    var $ = {
                        day: E,
                        month: M,
                        year: O,
                        hasEvent: w,
                        isSelected: k,
                        isToday: b,
                        isDisabled: n.minDate && y < n.minDate || n.maxDate && y > n.maxDate || n.disableWeekends && B._isWeekend(y) || n.disableDayFn && n.disableDayFn(y),
                        isEmpty: C,
                        isStartRange: x,
                        isEndRange: L,
                        isInRange: T,
                        showDaysInNextAndPreviousMonths: n.showDaysInNextAndPreviousMonths
                    };
                    l.push(this.renderDay($)),
                    7 == ++_ && (r.push(this.renderRow(l, n.isRTL, m)),
                    _ = 0,
                    m = !(l = []))
                }
                return this.renderTable(n, r, i)
            }
        }, {
            key: "renderDay",
            value: function(t) {
                var e = []
                  , i = "false";
                if (t.isEmpty) {
                    if (!t.showDaysInNextAndPreviousMonths)
                        return '<td class="is-empty"></td>';
                    e.push("is-outside-current-month"),
                    e.push("is-selection-disabled")
                }
                return t.isDisabled && e.push("is-disabled"),
                t.isToday && e.push("is-today"),
                t.isSelected && (e.push("is-selected"),
                i = "true"),
                t.hasEvent && e.push("has-event"),
                t.isInRange && e.push("is-inrange"),
                t.isStartRange && e.push("is-startrange"),
                t.isEndRange && e.push("is-endrange"),
                '<td data-day="' + t.day + '" class="' + e.join(" ") + '" aria-selected="' + i + '"><button class="datepicker-day-button" type="button" data-year="' + t.year + '" data-month="' + t.month + '" data-day="' + t.day + '">' + t.day + "</button></td>"
            }
        }, {
            key: "renderRow",
            value: function(t, e, i) {
                return '<tr class="datepicker-row' + (i ? " is-selected" : "") + '">' + (e ? t.reverse() : t).join("") + "</tr>"
            }
        }, {
            key: "renderTable",
            value: function(t, e, i) {
                return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + i + '">' + this.renderHead(t) + this.renderBody(e) + "</table></div>"
            }
        }, {
            key: "renderHead",
            value: function(t) {
                var e = void 0
                  , i = [];
                for (e = 0; e < 7; e++)
                    i.push('<th scope="col"><abbr title="' + this.renderDayName(t, e) + '">' + this.renderDayName(t, e, !0) + "</abbr></th>");
                return "<thead><tr>" + (t.isRTL ? i.reverse() : i).join("") + "</tr></thead>"
            }
        }, {
            key: "renderBody",
            value: function(t) {
                return "<tbody>" + t.join("") + "</tbody>"
            }
        }, {
            key: "renderTitle",
            value: function(t, e, i, n, s, o) {
                var a, r, l = void 0, h = void 0, d = void 0, u = this.options, c = i === u.minYear, p = i === u.maxYear, v = '<div id="' + o + '" class="datepicker-controls" role="heading" aria-live="assertive">', f = !0, m = !0;
                for (d = [],
                l = 0; l < 12; l++)
                    d.push('<option value="' + (i === s ? l - e : 12 + l - e) + '"' + (l === n ? ' selected="selected"' : "") + (c && l < u.minMonth || p && l > u.maxMonth ? 'disabled="disabled"' : "") + ">" + u.i18n.months[l] + "</option>");
                for (a = '<select class="datepicker-select orig-select-month" tabindex="-1">' + d.join("") + "</select>",
                g.isArray(u.yearRange) ? (l = u.yearRange[0],
                h = u.yearRange[1] + 1) : (l = i - u.yearRange,
                h = 1 + i + u.yearRange),
                d = []; l < h && l <= u.maxYear; l++)
                    l >= u.minYear && d.push('<option value="' + l + '" ' + (l === i ? 'selected="selected"' : "") + ">" + l + "</option>");
                r = '<select class="datepicker-select orig-select-year" tabindex="-1">' + d.join("") + "</select>";
                v += '<button class="month-prev' + (f ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg></button>',
                v += '<div class="selects-container">',
                u.showMonthAfterYear ? v += r + a : v += a + r,
                v += "</div>",
                c && (0 === n || u.minMonth >= n) && (f = !1),
                p && (11 === n || u.maxMonth <= n) && (m = !1);
                return (v += '<button class="month-next' + (m ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg></button>') + "</div>"
            }
        }, {
            key: "draw",
            value: function(t) {
                if (this.isOpen || t) {
                    var e, i = this.options, n = i.minYear, s = i.maxYear, o = i.minMonth, a = i.maxMonth, r = "";
                    this._y <= n && (this._y = n,
                    !isNaN(o) && this._m < o && (this._m = o)),
                    this._y >= s && (this._y = s,
                    !isNaN(a) && this._m > a && (this._m = a)),
                    e = "datepicker-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
                    for (var l = 0; l < 1; l++)
                        this._renderDateDisplay(),
                        r += this.renderTitle(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year, e) + this.render(this.calendars[l].year, this.calendars[l].month, e);
                    this.destroySelects(),
                    this.calendarEl.innerHTML = r;
                    var h = this.calendarEl.querySelector(".orig-select-year")
                      , d = this.calendarEl.querySelector(".orig-select-month");
                    M.FormSelect.init(h, {
                        classes: "select-year",
                        dropdownOptions: {
                            container: document.body,
                            constrainWidth: !1
                        }
                    }),
                    M.FormSelect.init(d, {
                        classes: "select-month",
                        dropdownOptions: {
                            container: document.body,
                            constrainWidth: !1
                        }
                    }),
                    h.addEventListener("change", this._handleYearChange.bind(this)),
                    d.addEventListener("change", this._handleMonthChange.bind(this)),
                    "function" == typeof this.options.onDraw && this.options.onDraw(this)
                }
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                this._handleInputClickBound = this._handleInputClick.bind(this),
                this._handleInputChangeBound = this._handleInputChange.bind(this),
                this._handleCalendarClickBound = this._handleCalendarClick.bind(this),
                this._finishSelectionBound = this._finishSelection.bind(this),
                this._handleMonthChange = this._handleMonthChange.bind(this),
                this._closeBound = this.close.bind(this),
                this.el.addEventListener("click", this._handleInputClickBound),
                this.el.addEventListener("keydown", this._handleInputKeydownBound),
                this.el.addEventListener("change", this._handleInputChangeBound),
                this.calendarEl.addEventListener("click", this._handleCalendarClickBound),
                this.doneBtn.addEventListener("click", this._finishSelectionBound),
                this.cancelBtn.addEventListener("click", this._closeBound),
                this.options.showClearBtn && (this._handleClearClickBound = this._handleClearClick.bind(this),
                this.clearBtn.addEventListener("click", this._handleClearClickBound))
            }
        }, {
            key: "_setupVariables",
            value: function() {
                var e = this;
                this.$modalEl = g(B._template),
                this.modalEl = this.$modalEl[0],
                this.calendarEl = this.modalEl.querySelector(".datepicker-calendar"),
                this.yearTextEl = this.modalEl.querySelector(".year-text"),
                this.dateTextEl = this.modalEl.querySelector(".date-text"),
                this.options.showClearBtn && (this.clearBtn = this.modalEl.querySelector(".datepicker-clear")),
                this.doneBtn = this.modalEl.querySelector(".datepicker-done"),
                this.cancelBtn = this.modalEl.querySelector(".datepicker-cancel"),
                this.formats = {
                    d: function() {
                        return e.date.getDate()
                    },
                    dd: function() {
                        var t = e.date.getDate();
                        return (t < 10 ? "0" : "") + t
                    },
                    ddd: function() {
                        return e.options.i18n.weekdaysShort[e.date.getDay()]
                    },
                    dddd: function() {
                        return e.options.i18n.weekdays[e.date.getDay()]
                    },
                    m: function() {
                        return e.date.getMonth() + 1
                    },
                    mm: function() {
                        var t = e.date.getMonth() + 1;
                        return (t < 10 ? "0" : "") + t
                    },
                    mmm: function() {
                        return e.options.i18n.monthsShort[e.date.getMonth()]
                    },
                    mmmm: function() {
                        return e.options.i18n.months[e.date.getMonth()]
                    },
                    yy: function() {
                        return ("" + e.date.getFullYear()).slice(2)
                    },
                    yyyy: function() {
                        return e.date.getFullYear()
                    }
                }
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleInputClickBound),
                this.el.removeEventListener("keydown", this._handleInputKeydownBound),
                this.el.removeEventListener("change", this._handleInputChangeBound),
                this.calendarEl.removeEventListener("click", this._handleCalendarClickBound)
            }
        }, {
            key: "_handleInputClick",
            value: function() {
                this.open()
            }
        }, {
            key: "_handleInputKeydown",
            value: function(t) {
                t.which === M.keys.ENTER && (t.preventDefault(),
                this.open())
            }
        }, {
            key: "_handleCalendarClick",
            value: function(t) {
                if (this.isOpen) {
                    var e = g(t.target);
                    e.hasClass("is-disabled") || (!e.hasClass("datepicker-day-button") || e.hasClass("is-empty") || e.parent().hasClass("is-disabled") ? e.closest(".month-prev").length ? this.prevMonth() : e.closest(".month-next").length && this.nextMonth() : (this.setDate(new Date(t.target.getAttribute("data-year"),t.target.getAttribute("data-month"),t.target.getAttribute("data-day"))),
                    this.options.autoClose && this._finishSelection()))
                }
            }
        }, {
            key: "_handleClearClick",
            value: function() {
                this.date = null,
                this.setInputValue(),
                this.close()
            }
        }, {
            key: "_handleMonthChange",
            value: function(t) {
                this.gotoMonth(t.target.value)
            }
        }, {
            key: "_handleYearChange",
            value: function(t) {
                this.gotoYear(t.target.value)
            }
        }, {
            key: "gotoMonth",
            value: function(t) {
                isNaN(t) || (this.calendars[0].month = parseInt(t, 10),
                this.adjustCalendars())
            }
        }, {
            key: "gotoYear",
            value: function(t) {
                isNaN(t) || (this.calendars[0].year = parseInt(t, 10),
                this.adjustCalendars())
            }
        }, {
            key: "_handleInputChange",
            value: function(t) {
                var e = void 0;
                t.firedBy !== this && (e = this.options.parse ? this.options.parse(this.el.value, this.options.format) : new Date(Date.parse(this.el.value)),
                B._isDate(e) && this.setDate(e))
            }
        }, {
            key: "renderDayName",
            value: function(t, e, i) {
                for (e += t.firstDay; 7 <= e; )
                    e -= 7;
                return i ? t.i18n.weekdaysAbbrev[e] : t.i18n.weekdays[e]
            }
        }, {
            key: "_finishSelection",
            value: function() {
                this.setInputValue(),
                this.close()
            }
        }, {
            key: "open",
            value: function() {
                if (!this.isOpen)
                    return this.isOpen = !0,
                    "function" == typeof this.options.onOpen && this.options.onOpen.call(this),
                    this.draw(),
                    this.modal.open(),
                    this
            }
        }, {
            key: "close",
            value: function() {
                if (this.isOpen)
                    return this.isOpen = !1,
                    "function" == typeof this.options.onClose && this.options.onClose.call(this),
                    this.modal.close(),
                    this
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(B.__proto__ || Object.getPrototypeOf(B), "init", this).call(this, this, t, e)
            }
        }, {
            key: "_isDate",
            value: function(t) {
                return /Date/.test(Object.prototype.toString.call(t)) && !isNaN(t.getTime())
            }
        }, {
            key: "_isWeekend",
            value: function(t) {
                var e = t.getDay();
                return 0 === e || 6 === e
            }
        }, {
            key: "_setToStartOfDay",
            value: function(t) {
                B._isDate(t) && t.setHours(0, 0, 0, 0)
            }
        }, {
            key: "_getDaysInMonth",
            value: function(t, e) {
                return [31, B._isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
            }
        }, {
            key: "_isLeapYear",
            value: function(t) {
                return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
            }
        }, {
            key: "_compareDates",
            value: function(t, e) {
                return t.getTime() === e.getTime()
            }
        }, {
            key: "_setToStartOfDay",
            value: function(t) {
                B._isDate(t) && t.setHours(0, 0, 0, 0)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Datepicker
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        B
    }();
    t._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', "</div>", '<div class="datepicker-calendar-container">', '<div class="datepicker-calendar"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', "</div>", "</div>", "</div>", "</div>", "</div>"].join(""),
    M.Datepicker = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "datepicker", "M_Datepicker")
}(cash),
function(h) {
    "use strict";
    var e = {
        dialRadius: 135,
        outerRadius: 105,
        innerRadius: 70,
        tickRadius: 20,
        duration: 350,
        container: null,
        defaultTime: "now",
        fromNow: 0,
        showClearBtn: !1,
        i18n: {
            cancel: "Cancel",
            clear: "Clear",
            done: "Ok"
        },
        autoClose: !1,
        twelveHour: !0,
        vibrate: !0,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        onSelect: null
    }
      , t = function(t) {
        function f(t, e) {
            _classCallCheck(this, f);
            var i = _possibleConstructorReturn(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this, f, t, e));
            return (i.el.M_Timepicker = i).options = h.extend({}, f.defaults, e),
            i.id = M.guid(),
            i._insertHTMLIntoDOM(),
            i._setupModal(),
            i._setupVariables(),
            i._setupEventHandlers(),
            i._clockSetup(),
            i._pickerSetup(),
            i
        }
        return _inherits(f, Component),
        _createClass(f, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.modal.destroy(),
                h(this.modalEl).remove(),
                this.el.M_Timepicker = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                this._handleInputClickBound = this._handleInputClick.bind(this),
                this._handleClockClickStartBound = this._handleClockClickStart.bind(this),
                this._handleDocumentClickMoveBound = this._handleDocumentClickMove.bind(this),
                this._handleDocumentClickEndBound = this._handleDocumentClickEnd.bind(this),
                this.el.addEventListener("click", this._handleInputClickBound),
                this.el.addEventListener("keydown", this._handleInputKeydownBound),
                this.plate.addEventListener("mousedown", this._handleClockClickStartBound),
                this.plate.addEventListener("touchstart", this._handleClockClickStartBound),
                h(this.spanHours).on("click", this.showView.bind(this, "hours")),
                h(this.spanMinutes).on("click", this.showView.bind(this, "minutes"))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleInputClickBound),
                this.el.removeEventListener("keydown", this._handleInputKeydownBound)
            }
        }, {
            key: "_handleInputClick",
            value: function() {
                this.open()
            }
        }, {
            key: "_handleInputKeydown",
            value: function(t) {
                t.which === M.keys.ENTER && (t.preventDefault(),
                this.open())
            }
        }, {
            key: "_handleClockClickStart",
            value: function(t) {
                t.preventDefault();
                var e = this.plate.getBoundingClientRect()
                  , i = e.left
                  , n = e.top;
                this.x0 = i + this.options.dialRadius,
                this.y0 = n + this.options.dialRadius,
                this.moved = !1;
                var s = f._Pos(t);
                this.dx = s.x - this.x0,
                this.dy = s.y - this.y0,
                this.setHand(this.dx, this.dy, !1),
                document.addEventListener("mousemove", this._handleDocumentClickMoveBound),
                document.addEventListener("touchmove", this._handleDocumentClickMoveBound),
                document.addEventListener("mouseup", this._handleDocumentClickEndBound),
                document.addEventListener("touchend", this._handleDocumentClickEndBound)
            }
        }, {
            key: "_handleDocumentClickMove",
            value: function(t) {
                t.preventDefault();
                var e = f._Pos(t)
                  , i = e.x - this.x0
                  , n = e.y - this.y0;
                this.moved = !0,
                this.setHand(i, n, !1, !0)
            }
        }, {
            key: "_handleDocumentClickEnd",
            value: function(t) {
                var e = this;
                t.preventDefault(),
                document.removeEventListener("mouseup", this._handleDocumentClickEndBound),
                document.removeEventListener("touchend", this._handleDocumentClickEndBound);
                var i = f._Pos(t)
                  , n = i.x - this.x0
                  , s = i.y - this.y0;
                this.moved && n === this.dx && s === this.dy && this.setHand(n, s),
                "hours" === this.currentView ? this.showView("minutes", this.options.duration / 2) : this.options.autoClose && (h(this.minutesView).addClass("timepicker-dial-out"),
                setTimeout(function() {
                    e.done()
                }, this.options.duration / 2)),
                "function" == typeof this.options.onSelect && this.options.onSelect.call(this, this.hours, this.minutes),
                document.removeEventListener("mousemove", this._handleDocumentClickMoveBound),
                document.removeEventListener("touchmove", this._handleDocumentClickMoveBound)
            }
        }, {
            key: "_insertHTMLIntoDOM",
            value: function() {
                this.$modalEl = h(f._template),
                this.modalEl = this.$modalEl[0],
                this.modalEl.id = "modal-" + this.id;
                var t = document.querySelector(this.options.container);
                this.options.container && t ? this.$modalEl.appendTo(t) : this.$modalEl.insertBefore(this.el)
            }
        }, {
            key: "_setupModal",
            value: function() {
                var t = this;
                this.modal = M.Modal.init(this.modalEl, {
                    onOpenStart: this.options.onOpenStart,
                    onOpenEnd: this.options.onOpenEnd,
                    onCloseStart: this.options.onCloseStart,
                    onCloseEnd: function() {
                        "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t),
                        t.isOpen = !1
                    }
                })
            }
        }, {
            key: "_setupVariables",
            value: function() {
                this.currentView = "hours",
                this.vibrate = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null,
                this._canvas = this.modalEl.querySelector(".timepicker-canvas"),
                this.plate = this.modalEl.querySelector(".timepicker-plate"),
                this.hoursView = this.modalEl.querySelector(".timepicker-hours"),
                this.minutesView = this.modalEl.querySelector(".timepicker-minutes"),
                this.spanHours = this.modalEl.querySelector(".timepicker-span-hours"),
                this.spanMinutes = this.modalEl.querySelector(".timepicker-span-minutes"),
                this.spanAmPm = this.modalEl.querySelector(".timepicker-span-am-pm"),
                this.footer = this.modalEl.querySelector(".timepicker-footer"),
                this.amOrPm = "PM"
            }
        }, {
            key: "_pickerSetup",
            value: function() {
                var t = h('<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.clear + "</button>").appendTo(this.footer).on("click", this.clear.bind(this));
                this.options.showClearBtn && t.css({
                    visibility: ""
                });
                var e = h('<div class="confirmation-btns"></div>');
                h('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.cancel + "</button>").appendTo(e).on("click", this.close.bind(this)),
                h('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.done + "</button>").appendTo(e).on("click", this.done.bind(this)),
                e.appendTo(this.footer)
            }
        }, {
            key: "_clockSetup",
            value: function() {
                this.options.twelveHour && (this.$amBtn = h('<div class="am-btn">AM</div>'),
                this.$pmBtn = h('<div class="pm-btn">PM</div>'),
                this.$amBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm),
                this.$pmBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm)),
                this._buildHoursView(),
                this._buildMinutesView(),
                this._buildSVGClock()
            }
        }, {
            key: "_buildSVGClock",
            value: function() {
                var t = this.options.dialRadius
                  , e = this.options.tickRadius
                  , i = 2 * t
                  , n = f._createSVGEl("svg");
                n.setAttribute("class", "timepicker-svg"),
                n.setAttribute("width", i),
                n.setAttribute("height", i);
                var s = f._createSVGEl("g");
                s.setAttribute("transform", "translate(" + t + "," + t + ")");
                var o = f._createSVGEl("circle");
                o.setAttribute("class", "timepicker-canvas-bearing"),
                o.setAttribute("cx", 0),
                o.setAttribute("cy", 0),
                o.setAttribute("r", 4);
                var a = f._createSVGEl("line");
                a.setAttribute("x1", 0),
                a.setAttribute("y1", 0);
                var r = f._createSVGEl("circle");
                r.setAttribute("class", "timepicker-canvas-bg"),
                r.setAttribute("r", e),
                s.appendChild(a),
                s.appendChild(r),
                s.appendChild(o),
                n.appendChild(s),
                this._canvas.appendChild(n),
                this.hand = a,
                this.bg = r,
                this.bearing = o,
                this.g = s
            }
        }, {
            key: "_buildHoursView",
            value: function() {
                var t = h('<div class="timepicker-tick"></div>');
                if (this.options.twelveHour)
                    for (var e = 1; e < 13; e += 1) {
                        var i = t.clone()
                          , n = e / 6 * Math.PI
                          , s = this.options.outerRadius;
                        i.css({
                            left: this.options.dialRadius + Math.sin(n) * s - this.options.tickRadius + "px",
                            top: this.options.dialRadius - Math.cos(n) * s - this.options.tickRadius + "px"
                        }),
                        i.html(0 === e ? "00" : e),
                        this.hoursView.appendChild(i[0])
                    }
                else
                    for (var o = 0; o < 24; o += 1) {
                        var a = t.clone()
                          , r = o / 6 * Math.PI
                          , l = 0 < o && o < 13 ? this.options.innerRadius : this.options.outerRadius;
                        a.css({
                            left: this.options.dialRadius + Math.sin(r) * l - this.options.tickRadius + "px",
                            top: this.options.dialRadius - Math.cos(r) * l - this.options.tickRadius + "px"
                        }),
                        a.html(0 === o ? "00" : o),
                        this.hoursView.appendChild(a[0])
                    }
            }
        }, {
            key: "_buildMinutesView",
            value: function() {
                for (var t = h('<div class="timepicker-tick"></div>'), e = 0; e < 60; e += 5) {
                    var i = t.clone()
                      , n = e / 30 * Math.PI;
                    i.css({
                        left: this.options.dialRadius + Math.sin(n) * this.options.outerRadius - this.options.tickRadius + "px",
                        top: this.options.dialRadius - Math.cos(n) * this.options.outerRadius - this.options.tickRadius + "px"
                    }),
                    i.html(f._addLeadingZero(e)),
                    this.minutesView.appendChild(i[0])
                }
            }
        }, {
            key: "_handleAmPmClick",
            value: function(t) {
                var e = h(t.target);
                this.amOrPm = e.hasClass("am-btn") ? "AM" : "PM",
                this._updateAmPmView()
            }
        }, {
            key: "_updateAmPmView",
            value: function() {
                this.options.twelveHour && (this.$amBtn.toggleClass("text-primary", "AM" === this.amOrPm),
                this.$pmBtn.toggleClass("text-primary", "PM" === this.amOrPm))
            }
        }, {
            key: "_updateTimeFromInput",
            value: function() {
                var t = ((this.el.value || this.options.defaultTime || "") + "").split(":");
                if (this.options.twelveHour && void 0 !== t[1] && (0 < t[1].toUpperCase().indexOf("AM") ? this.amOrPm = "AM" : this.amOrPm = "PM",
                t[1] = t[1].replace("AM", "").replace("PM", "")),
                "now" === t[0]) {
                    var e = new Date(+new Date + this.options.fromNow);
                    t = [e.getHours(), e.getMinutes()],
                    this.options.twelveHour && (this.amOrPm = 12 <= t[0] && t[0] < 24 ? "PM" : "AM")
                }
                this.hours = +t[0] || 0,
                this.minutes = +t[1] || 0,
                this.spanHours.innerHTML = this.hours,
                this.spanMinutes.innerHTML = f._addLeadingZero(this.minutes),
                this._updateAmPmView()
            }
        }, {
            key: "showView",
            value: function(t, e) {
                "minutes" === t && h(this.hoursView).css("visibility");
                var i = "hours" === t
                  , n = i ? this.hoursView : this.minutesView
                  , s = i ? this.minutesView : this.hoursView;
                this.currentView = t,
                h(this.spanHours).toggleClass("text-primary", i),
                h(this.spanMinutes).toggleClass("text-primary", !i),
                s.classList.add("timepicker-dial-out"),
                h(n).css("visibility", "visible").removeClass("timepicker-dial-out"),
                this.resetClock(e),
                clearTimeout(this.toggleViewTimer),
                this.toggleViewTimer = setTimeout(function() {
                    h(s).css("visibility", "hidden")
                }, this.options.duration)
            }
        }, {
            key: "resetClock",
            value: function(t) {
                var e = this.currentView
                  , i = this[e]
                  , n = "hours" === e
                  , s = i * (Math.PI / (n ? 6 : 30))
                  , o = n && 0 < i && i < 13 ? this.options.innerRadius : this.options.outerRadius
                  , a = Math.sin(s) * o
                  , r = -Math.cos(s) * o
                  , l = this;
                t ? (h(this.canvas).addClass("timepicker-canvas-out"),
                setTimeout(function() {
                    h(l.canvas).removeClass("timepicker-canvas-out"),
                    l.setHand(a, r)
                }, t)) : this.setHand(a, r)
            }
        }, {
            key: "setHand",
            value: function(t, e, i) {
                var n = this
                  , s = Math.atan2(t, -e)
                  , o = "hours" === this.currentView
                  , a = Math.PI / (o || i ? 6 : 30)
                  , r = Math.sqrt(t * t + e * e)
                  , l = o && r < (this.options.outerRadius + this.options.innerRadius) / 2
                  , h = l ? this.options.innerRadius : this.options.outerRadius;
                this.options.twelveHour && (h = this.options.outerRadius),
                s < 0 && (s = 2 * Math.PI + s);
                var d = Math.round(s / a);
                s = d * a,
                this.options.twelveHour ? o ? 0 === d && (d = 12) : (i && (d *= 5),
                60 === d && (d = 0)) : o ? (12 === d && (d = 0),
                d = l ? 0 === d ? 12 : d : 0 === d ? 0 : d + 12) : (i && (d *= 5),
                60 === d && (d = 0)),
                this[this.currentView] !== d && this.vibrate && this.options.vibrate && (this.vibrateTimer || (navigator[this.vibrate](10),
                this.vibrateTimer = setTimeout(function() {
                    n.vibrateTimer = null
                }, 100))),
                this[this.currentView] = d,
                o ? this.spanHours.innerHTML = d : this.spanMinutes.innerHTML = f._addLeadingZero(d);
                var u = Math.sin(s) * (h - this.options.tickRadius)
                  , c = -Math.cos(s) * (h - this.options.tickRadius)
                  , p = Math.sin(s) * h
                  , v = -Math.cos(s) * h;
                this.hand.setAttribute("x2", u),
                this.hand.setAttribute("y2", c),
                this.bg.setAttribute("cx", p),
                this.bg.setAttribute("cy", v)
            }
        }, {
            key: "open",
            value: function() {
                this.isOpen || (this.isOpen = !0,
                this._updateTimeFromInput(),
                this.showView("hours"),
                this.modal.open())
            }
        }, {
            key: "close",
            value: function() {
                this.isOpen && (this.isOpen = !1,
                this.modal.close())
            }
        }, {
            key: "done",
            value: function(t, e) {
                var i = this.el.value
                  , n = e ? "" : f._addLeadingZero(this.hours) + ":" + f._addLeadingZero(this.minutes);
                this.time = n,
                !e && this.options.twelveHour && (n = n + " " + this.amOrPm),
                (this.el.value = n) !== i && this.$el.trigger("change"),
                this.close(),
                this.el.focus()
            }
        }, {
            key: "clear",
            value: function() {
                this.done(null, !0)
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(f.__proto__ || Object.getPrototypeOf(f), "init", this).call(this, this, t, e)
            }
        }, {
            key: "_addLeadingZero",
            value: function(t) {
                return (t < 10 ? "0" : "") + t
            }
        }, {
            key: "_createSVGEl",
            value: function(t) {
                return document.createElementNS("http://www.w3.org/2000/svg", t)
            }
        }, {
            key: "_Pos",
            value: function(t) {
                return t.targetTouches && 1 <= t.targetTouches.length ? {
                    x: t.targetTouches[0].clientX,
                    y: t.targetTouches[0].clientY
                } : {
                    x: t.clientX,
                    y: t.clientY
                }
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Timepicker
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        f
    }();
    t._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ":", '<span class="timepicker-span-minutes"></span>', "</div>", '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', "</div>", '<div class="timepicker-footer"></div>', "</div>", "</div>", "</div>"].join(""),
    M.Timepicker = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "timepicker", "M_Timepicker")
}(cash),
function(s) {
    "use strict";
    var e = {}
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_CharacterCounter = i).options = s.extend({}, n.defaults, e),
            i.isInvalid = !1,
            i.isValidLength = !1,
            i._setupCounter(),
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.CharacterCounter = void 0,
                this._removeCounter()
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleUpdateCounterBound = this.updateCounter.bind(this),
                this.el.addEventListener("focus", this._handleUpdateCounterBound, !0),
                this.el.addEventListener("input", this._handleUpdateCounterBound, !0)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("focus", this._handleUpdateCounterBound, !0),
                this.el.removeEventListener("input", this._handleUpdateCounterBound, !0)
            }
        }, {
            key: "_setupCounter",
            value: function() {
                this.counterEl = document.createElement("span"),
                s(this.counterEl).addClass("character-counter").css({
                    float: "right",
                    "font-size": "12px",
                    height: 1
                }),
                this.$el.parent().append(this.counterEl)
            }
        }, {
            key: "_removeCounter",
            value: function() {
                s(this.counterEl).remove()
            }
        }, {
            key: "updateCounter",
            value: function() {
                var t = +this.$el.attr("data-length")
                  , e = this.el.value.length;
                this.isValidLength = e <= t;
                var i = e;
                t && (i += "/" + t,
                this._validateInput()),
                s(this.counterEl).html(i)
            }
        }, {
            key: "_validateInput",
            value: function() {
                this.isValidLength && this.isInvalid ? (this.isInvalid = !1,
                this.$el.removeClass("invalid")) : this.isValidLength || this.isInvalid || (this.isInvalid = !0,
                this.$el.removeClass("valid"),
                this.$el.addClass("invalid"))
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_CharacterCounter
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.CharacterCounter = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "characterCounter", "M_CharacterCounter")
}(cash),
function(b) {
    "use strict";
    var e = {
        duration: 200,
        dist: -100,
        shift: 0,
        padding: 0,
        numVisible: 5,
        fullWidth: !1,
        indicators: !1,
        noWrap: !1,
        onCycleTo: null
    }
      , t = function(t) {
        function i(t, e) {
            _classCallCheck(this, i);
            var n = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, e));
            return (n.el.M_Carousel = n).options = b.extend({}, i.defaults, e),
            n.hasMultipleSlides = 1 < n.$el.find(".carousel-item").length,
            n.showIndicators = n.options.indicators && n.hasMultipleSlides,
            n.noWrap = n.options.noWrap || !n.hasMultipleSlides,
            n.pressed = !1,
            n.dragged = !1,
            n.offset = n.target = 0,
            n.images = [],
            n.itemWidth = n.$el.find(".carousel-item").first().innerWidth(),
            n.itemHeight = n.$el.find(".carousel-item").first().innerHeight(),
            n.dim = 2 * n.itemWidth + n.options.padding || 1,
            n._autoScrollBound = n._autoScroll.bind(n),
            n._trackBound = n._track.bind(n),
            n.options.fullWidth && (n.options.dist = 0,
            n._setCarouselHeight(),
            n.showIndicators && n.$el.find(".carousel-fixed-item").addClass("with-indicators")),
            n.$indicators = b('<ul class="indicators"></ul>'),
            n.$el.find(".carousel-item").each(function(t, e) {
                if (n.images.push(t),
                n.showIndicators) {
                    var i = b('<li class="indicator-item"></li>');
                    0 === e && i[0].classList.add("active"),
                    n.$indicators.append(i)
                }
            }),
            n.showIndicators && n.$el.append(n.$indicators),
            n.count = n.images.length,
            n.options.numVisible = Math.min(n.count, n.options.numVisible),
            n.xform = "transform",
            ["webkit", "Moz", "O", "ms"].every(function(t) {
                var e = t + "Transform";
                return void 0 === document.body.style[e] || (n.xform = e,
                !1)
            }),
            n._setupEventHandlers(),
            n._scroll(n.offset),
            n
        }
        return _inherits(i, Component),
        _createClass(i, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.M_Carousel = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                var i = this;
                this._handleCarouselTapBound = this._handleCarouselTap.bind(this),
                this._handleCarouselDragBound = this._handleCarouselDrag.bind(this),
                this._handleCarouselReleaseBound = this._handleCarouselRelease.bind(this),
                this._handleCarouselClickBound = this._handleCarouselClick.bind(this),
                void 0 !== window.ontouchstart && (this.el.addEventListener("touchstart", this._handleCarouselTapBound),
                this.el.addEventListener("touchmove", this._handleCarouselDragBound),
                this.el.addEventListener("touchend", this._handleCarouselReleaseBound)),
                this.el.addEventListener("mousedown", this._handleCarouselTapBound),
                this.el.addEventListener("mousemove", this._handleCarouselDragBound),
                this.el.addEventListener("mouseup", this._handleCarouselReleaseBound),
                this.el.addEventListener("mouseleave", this._handleCarouselReleaseBound),
                this.el.addEventListener("click", this._handleCarouselClickBound),
                this.showIndicators && this.$indicators && (this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this),
                this.$indicators.find(".indicator-item").each(function(t, e) {
                    t.addEventListener("click", i._handleIndicatorClickBound)
                }));
                var t = M.throttle(this._handleResize, 200);
                this._handleThrottledResizeBound = t.bind(this),
                window.addEventListener("resize", this._handleThrottledResizeBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                var i = this;
                void 0 !== window.ontouchstart && (this.el.removeEventListener("touchstart", this._handleCarouselTapBound),
                this.el.removeEventListener("touchmove", this._handleCarouselDragBound),
                this.el.removeEventListener("touchend", this._handleCarouselReleaseBound)),
                this.el.removeEventListener("mousedown", this._handleCarouselTapBound),
                this.el.removeEventListener("mousemove", this._handleCarouselDragBound),
                this.el.removeEventListener("mouseup", this._handleCarouselReleaseBound),
                this.el.removeEventListener("mouseleave", this._handleCarouselReleaseBound),
                this.el.removeEventListener("click", this._handleCarouselClickBound),
                this.showIndicators && this.$indicators && this.$indicators.find(".indicator-item").each(function(t, e) {
                    t.removeEventListener("click", i._handleIndicatorClickBound)
                }),
                window.removeEventListener("resize", this._handleThrottledResizeBound)
            }
        }, {
            key: "_handleCarouselTap",
            value: function(t) {
                "mousedown" === t.type && b(t.target).is("img") && t.preventDefault(),
                this.pressed = !0,
                this.dragged = !1,
                this.verticalDragged = !1,
                this.reference = this._xpos(t),
                this.referenceY = this._ypos(t),
                this.velocity = this.amplitude = 0,
                this.frame = this.offset,
                this.timestamp = Date.now(),
                clearInterval(this.ticker),
                this.ticker = setInterval(this._trackBound, 100)
            }
        }, {
            key: "_handleCarouselDrag",
            value: function(t) {
                var e = void 0
                  , i = void 0
                  , n = void 0;
                if (this.pressed)
                    if (e = this._xpos(t),
                    i = this._ypos(t),
                    n = this.reference - e,
                    Math.abs(this.referenceY - i) < 30 && !this.verticalDragged)
                        (2 < n || n < -2) && (this.dragged = !0,
                        this.reference = e,
                        this._scroll(this.offset + n));
                    else {
                        if (this.dragged)
                            return t.preventDefault(),
                            t.stopPropagation(),
                            !1;
                        this.verticalDragged = !0
                    }
                if (this.dragged)
                    return t.preventDefault(),
                    t.stopPropagation(),
                    !1
            }
        }, {
            key: "_handleCarouselRelease",
            value: function(t) {
                if (this.pressed)
                    return this.pressed = !1,
                    clearInterval(this.ticker),
                    this.target = this.offset,
                    (10 < this.velocity || this.velocity < -10) && (this.amplitude = .9 * this.velocity,
                    this.target = this.offset + this.amplitude),
                    this.target = Math.round(this.target / this.dim) * this.dim,
                    this.noWrap && (this.target >= this.dim * (this.count - 1) ? this.target = this.dim * (this.count - 1) : this.target < 0 && (this.target = 0)),
                    this.amplitude = this.target - this.offset,
                    this.timestamp = Date.now(),
                    requestAnimationFrame(this._autoScrollBound),
                    this.dragged && (t.preventDefault(),
                    t.stopPropagation()),
                    !1
            }
        }, {
            key: "_handleCarouselClick",
            value: function(t) {
                if (this.dragged)
                    return t.preventDefault(),
                    t.stopPropagation(),
                    !1;
                if (!this.options.fullWidth) {
                    var e = b(t.target).closest(".carousel-item").index();
                    0 !== this._wrap(this.center) - e && (t.preventDefault(),
                    t.stopPropagation()),
                    this._cycleTo(e)
                }
            }
        }, {
            key: "_handleIndicatorClick",
            value: function(t) {
                t.stopPropagation();
                var e = b(t.target).closest(".indicator-item");
                e.length && this._cycleTo(e.index())
            }
        }, {
            key: "_handleResize",
            value: function(t) {
                this.options.fullWidth ? (this.itemWidth = this.$el.find(".carousel-item").first().innerWidth(),
                this.imageHeight = this.$el.find(".carousel-item.active").height(),
                this.dim = 2 * this.itemWidth + this.options.padding,
                this.offset = 2 * this.center * this.itemWidth,
                this.target = this.offset,
                this._setCarouselHeight(!0)) : this._scroll()
            }
        }, {
            key: "_setCarouselHeight",
            value: function(t) {
                var i = this
                  , e = this.$el.find(".carousel-item.active").length ? this.$el.find(".carousel-item.active").first() : this.$el.find(".carousel-item").first()
                  , n = e.find("img").first();
                if (n.length)
                    if (n[0].complete) {
                        var s = n.height();
                        if (0 < s)
                            this.$el.css("height", s + "px");
                        else {
                            var o = n[0].naturalWidth
                              , a = n[0].naturalHeight
                              , r = this.$el.width() / o * a;
                            this.$el.css("height", r + "px")
                        }
                    } else
                        n.one("load", function(t, e) {
                            i.$el.css("height", t.offsetHeight + "px")
                        });
                else if (!t) {
                    var l = e.height();
                    this.$el.css("height", l + "px")
                }
            }
        }, {
            key: "_xpos",
            value: function(t) {
                return t.targetTouches && 1 <= t.targetTouches.length ? t.targetTouches[0].clientX : t.clientX
            }
        }, {
            key: "_ypos",
            value: function(t) {
                return t.targetTouches && 1 <= t.targetTouches.length ? t.targetTouches[0].clientY : t.clientY
            }
        }, {
            key: "_wrap",
            value: function(t) {
                return t >= this.count ? t % this.count : t < 0 ? this._wrap(this.count + t % this.count) : t
            }
        }, {
            key: "_track",
            value: function() {
                var t, e, i, n;
                e = (t = Date.now()) - this.timestamp,
                this.timestamp = t,
                i = this.offset - this.frame,
                this.frame = this.offset,
                n = 1e3 * i / (1 + e),
                this.velocity = .8 * n + .2 * this.velocity
            }
        }, {
            key: "_autoScroll",
            value: function() {
                var t = void 0
                  , e = void 0;
                this.amplitude && (t = Date.now() - this.timestamp,
                2 < (e = this.amplitude * Math.exp(-t / this.options.duration)) || e < -2 ? (this._scroll(this.target - e),
                requestAnimationFrame(this._autoScrollBound)) : this._scroll(this.target))
            }
        }, {
            key: "_scroll",
            value: function(t) {
                var e = this;
                this.$el.hasClass("scrolling") || this.el.classList.add("scrolling"),
                null != this.scrollingTimeout && window.clearTimeout(this.scrollingTimeout),
                this.scrollingTimeout = window.setTimeout(function() {
                    e.$el.removeClass("scrolling")
                }, this.options.duration);
                var i, n, s, o, a = void 0, r = void 0, l = void 0, h = void 0, d = void 0, u = void 0, c = this.center, p = 1 / this.options.numVisible;
                if (this.offset = "number" == typeof t ? t : this.offset,
                this.center = Math.floor((this.offset + this.dim / 2) / this.dim),
                o = -(s = (n = this.offset - this.center * this.dim) < 0 ? 1 : -1) * n * 2 / this.dim,
                i = this.count >> 1,
                this.options.fullWidth ? (l = "translateX(0)",
                u = 1) : (l = "translateX(" + (this.el.clientWidth - this.itemWidth) / 2 + "px) ",
                l += "translateY(" + (this.el.clientHeight - this.itemHeight) / 2 + "px)",
                u = 1 - p * o),
                this.showIndicators) {
                    var v = this.center % this.count
                      , f = this.$indicators.find(".indicator-item.active");
                    f.index() !== v && (f.removeClass("active"),
                    this.$indicators.find(".indicator-item").eq(v)[0].classList.add("active"))
                }
                if (!this.noWrap || 0 <= this.center && this.center < this.count) {
                    r = this.images[this._wrap(this.center)],
                    b(r).hasClass("active") || (this.$el.find(".carousel-item").removeClass("active"),
                    r.classList.add("active"));
                    var m = l + " translateX(" + -n / 2 + "px) translateX(" + s * this.options.shift * o * a + "px) translateZ(" + this.options.dist * o + "px)";
                    this._updateItemStyle(r, u, 0, m)
                }
                for (a = 1; a <= i; ++a) {
                    if (this.options.fullWidth ? (h = this.options.dist,
                    d = a === i && n < 0 ? 1 - o : 1) : (h = this.options.dist * (2 * a + o * s),
                    d = 1 - p * (2 * a + o * s)),
                    !this.noWrap || this.center + a < this.count) {
                        r = this.images[this._wrap(this.center + a)];
                        var g = l + " translateX(" + (this.options.shift + (this.dim * a - n) / 2) + "px) translateZ(" + h + "px)";
                        this._updateItemStyle(r, d, -a, g)
                    }
                    if (this.options.fullWidth ? (h = this.options.dist,
                    d = a === i && 0 < n ? 1 - o : 1) : (h = this.options.dist * (2 * a - o * s),
                    d = 1 - p * (2 * a - o * s)),
                    !this.noWrap || 0 <= this.center - a) {
                        r = this.images[this._wrap(this.center - a)];
                        var _ = l + " translateX(" + (-this.options.shift + (-this.dim * a - n) / 2) + "px) translateZ(" + h + "px)";
                        this._updateItemStyle(r, d, -a, _)
                    }
                }
                if (!this.noWrap || 0 <= this.center && this.center < this.count) {
                    r = this.images[this._wrap(this.center)];
                    var y = l + " translateX(" + -n / 2 + "px) translateX(" + s * this.options.shift * o + "px) translateZ(" + this.options.dist * o + "px)";
                    this._updateItemStyle(r, u, 0, y)
                }
                var k = this.$el.find(".carousel-item").eq(this._wrap(this.center));
                c !== this.center && "function" == typeof this.options.onCycleTo && this.options.onCycleTo.call(this, k[0], this.dragged),
                "function" == typeof this.oneTimeCallback && (this.oneTimeCallback.call(this, k[0], this.dragged),
                this.oneTimeCallback = null)
            }
        }, {
            key: "_updateItemStyle",
            value: function(t, e, i, n) {
                t.style[this.xform] = n,
                t.style.zIndex = i,
                t.style.opacity = e,
                t.style.visibility = "visible"
            }
        }, {
            key: "_cycleTo",
            value: function(t, e) {
                var i = this.center % this.count - t;
                this.noWrap || (i < 0 ? Math.abs(i + this.count) < Math.abs(i) && (i += this.count) : 0 < i && Math.abs(i - this.count) < i && (i -= this.count)),
                this.target = this.dim * Math.round(this.offset / this.dim),
                i < 0 ? this.target += this.dim * Math.abs(i) : 0 < i && (this.target -= this.dim * i),
                "function" == typeof e && (this.oneTimeCallback = e),
                this.offset !== this.target && (this.amplitude = this.target - this.offset,
                this.timestamp = Date.now(),
                requestAnimationFrame(this._autoScrollBound))
            }
        }, {
            key: "next",
            value: function(t) {
                (void 0 === t || isNaN(t)) && (t = 1);
                var e = this.center + t;
                if (e >= this.count || e < 0) {
                    if (this.noWrap)
                        return;
                    e = this._wrap(e)
                }
                this._cycleTo(e)
            }
        }, {
            key: "prev",
            value: function(t) {
                (void 0 === t || isNaN(t)) && (t = 1);
                var e = this.center - t;
                if (e >= this.count || e < 0) {
                    if (this.noWrap)
                        return;
                    e = this._wrap(e)
                }
                this._cycleTo(e)
            }
        }, {
            key: "set",
            value: function(t, e) {
                if ((void 0 === t || isNaN(t)) && (t = 0),
                t > this.count || t < 0) {
                    if (this.noWrap)
                        return;
                    t = this._wrap(t)
                }
                this._cycleTo(t, e)
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Carousel
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        i
    }();
    M.Carousel = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "carousel", "M_Carousel")
}(cash),
function(S) {
    "use strict";
    var e = {
        onOpen: void 0,
        onClose: void 0
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_TapTarget = i).options = S.extend({}, n.defaults, e),
            i.isOpen = !1,
            i.$origin = S("#" + i.$el.attr("data-target")),
            i._setup(),
            i._calculatePositioning(),
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.TapTarget = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleDocumentClickBound = this._handleDocumentClick.bind(this),
                this._handleTargetClickBound = this._handleTargetClick.bind(this),
                this._handleOriginClickBound = this._handleOriginClick.bind(this),
                this.el.addEventListener("click", this._handleTargetClickBound),
                this.originEl.addEventListener("click", this._handleOriginClickBound);
                var t = M.throttle(this._handleResize, 200);
                this._handleThrottledResizeBound = t.bind(this),
                window.addEventListener("resize", this._handleThrottledResizeBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleTargetClickBound),
                this.originEl.removeEventListener("click", this._handleOriginClickBound),
                window.removeEventListener("resize", this._handleThrottledResizeBound)
            }
        }, {
            key: "_handleTargetClick",
            value: function(t) {
                this.open()
            }
        }, {
            key: "_handleOriginClick",
            value: function(t) {
                this.close()
            }
        }, {
            key: "_handleResize",
            value: function(t) {
                this._calculatePositioning()
            }
        }, {
            key: "_handleDocumentClick",
            value: function(t) {
                S(t.target).closest(".tap-target-wrapper").length || (this.close(),
                t.preventDefault(),
                t.stopPropagation())
            }
        }, {
            key: "_setup",
            value: function() {
                this.wrapper = this.$el.parent()[0],
                this.waveEl = S(this.wrapper).find(".tap-target-wave")[0],
                this.originEl = S(this.wrapper).find(".tap-target-origin")[0],
                this.contentEl = this.$el.find(".tap-target-content")[0],
                S(this.wrapper).hasClass(".tap-target-wrapper") || (this.wrapper = document.createElement("div"),
                this.wrapper.classList.add("tap-target-wrapper"),
                this.$el.before(S(this.wrapper)),
                this.wrapper.append(this.el)),
                this.contentEl || (this.contentEl = document.createElement("div"),
                this.contentEl.classList.add("tap-target-content"),
                this.$el.append(this.contentEl)),
                this.waveEl || (this.waveEl = document.createElement("div"),
                this.waveEl.classList.add("tap-target-wave"),
                this.originEl || (this.originEl = this.$origin.clone(!0, !0),
                this.originEl.addClass("tap-target-origin"),
                this.originEl.removeAttr("id"),
                this.originEl.removeAttr("style"),
                this.originEl = this.originEl[0],
                this.waveEl.append(this.originEl)),
                this.wrapper.append(this.waveEl))
            }
        }, {
            key: "_calculatePositioning",
            value: function() {
                var t = "fixed" === this.$origin.css("position");
                if (!t)
                    for (var e = this.$origin.parents(), i = 0; i < e.length && !(t = "fixed" == S(e[i]).css("position")); i++)
                        ;
                var n = this.$origin.outerWidth()
                  , s = this.$origin.outerHeight()
                  , o = t ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top
                  , a = t ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left
                  , r = window.innerWidth
                  , l = window.innerHeight
                  , h = r / 2
                  , d = l / 2
                  , u = a <= h
                  , c = h < a
                  , p = o <= d
                  , v = d < o
                  , f = .25 * r <= a && a <= .75 * r
                  , m = this.$el.outerWidth()
                  , g = this.$el.outerHeight()
                  , _ = o + s / 2 - g / 2
                  , y = a + n / 2 - m / 2
                  , k = t ? "fixed" : "absolute"
                  , b = f ? m : m / 2 + n
                  , w = g / 2
                  , C = p ? g / 2 : 0
                  , E = u && !f ? m / 2 - n : 0
                  , O = n
                  , x = v ? "bottom" : "top"
                  , L = 2 * n
                  , T = L
                  , $ = g / 2 - T / 2
                  , B = m / 2 - L / 2
                  , D = {};
                D.top = p ? _ + "px" : "",
                D.right = c ? r - y - m + "px" : "",
                D.bottom = v ? l - _ - g + "px" : "",
                D.left = u ? y + "px" : "",
                D.position = k,
                S(this.wrapper).css(D),
                S(this.contentEl).css({
                    width: b + "px",
                    height: w + "px",
                    top: C + "px",
                    right: "0px",
                    bottom: "0px",
                    left: E + "px",
                    padding: O + "px",
                    verticalAlign: x
                }),
                S(this.waveEl).css({
                    top: $ + "px",
                    left: B + "px",
                    width: L + "px",
                    height: T + "px"
                })
            }
        }, {
            key: "open",
            value: function() {
                this.isOpen || ("function" == typeof this.options.onOpen && this.options.onOpen.call(this, this.$origin[0]),
                this.isOpen = !0,
                this.wrapper.classList.add("open"),
                document.body.addEventListener("click", this._handleDocumentClickBound, !0),
                document.body.addEventListener("touchend", this._handleDocumentClickBound))
            }
        }, {
            key: "close",
            value: function() {
                this.isOpen && ("function" == typeof this.options.onClose && this.options.onClose.call(this, this.$origin[0]),
                this.isOpen = !1,
                this.wrapper.classList.remove("open"),
                document.body.removeEventListener("click", this._handleDocumentClickBound, !0),
                document.body.removeEventListener("touchend", this._handleDocumentClickBound))
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_TapTarget
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.TapTarget = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "tapTarget", "M_TapTarget")
}(cash),
function(d) {
    "use strict";
    var e = {
        classes: "",
        dropdownOptions: {}
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return i.$el.hasClass("browser-default") ? _possibleConstructorReturn(i) : ((i.el.M_FormSelect = i).options = d.extend({}, n.defaults, e),
            i.isMultiple = i.$el.prop("multiple"),
            i.el.tabIndex = -1,
            i._keysSelected = {},
            i._valueDict = {},
            i._setupDropdown(),
            i._setupEventHandlers(),
            i)
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._removeDropdown(),
                this.el.M_FormSelect = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                var e = this;
                this._handleSelectChangeBound = this._handleSelectChange.bind(this),
                this._handleOptionClickBound = this._handleOptionClick.bind(this),
                this._handleInputClickBound = this._handleInputClick.bind(this),
                d(this.dropdownOptions).find("li:not(.optgroup)").each(function(t) {
                    t.addEventListener("click", e._handleOptionClickBound)
                }),
                this.el.addEventListener("change", this._handleSelectChangeBound),
                this.input.addEventListener("click", this._handleInputClickBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                var e = this;
                d(this.dropdownOptions).find("li:not(.optgroup)").each(function(t) {
                    t.removeEventListener("click", e._handleOptionClickBound)
                }),
                this.el.removeEventListener("change", this._handleSelectChangeBound),
                this.input.removeEventListener("click", this._handleInputClickBound)
            }
        }, {
            key: "_handleSelectChange",
            value: function(t) {
                this._setValueToInput()
            }
        }, {
            key: "_handleOptionClick",
            value: function(t) {
                t.preventDefault();
                var e = d(t.target).closest("li")[0]
                  , i = e.id;
                if (!d(e).hasClass("disabled") && !d(e).hasClass("optgroup") && i.length) {
                    var n = !0;
                    if (this.isMultiple) {
                        var s = d(this.dropdownOptions).find("li.disabled.selected");
                        s.length && (s.removeClass("selected"),
                        s.find('input[type="checkbox"]').prop("checked", !1),
                        this._toggleEntryFromArray(s[0].id)),
                        n = this._toggleEntryFromArray(i)
                    } else
                        d(this.dropdownOptions).find("li").removeClass("selected"),
                        d(e).toggleClass("selected", n);
                    d(this._valueDict[i].el).prop("selected") !== n && (d(this._valueDict[i].el).prop("selected", n),
                    this.$el.trigger("change"))
                }
                t.stopPropagation()
            }
        }, {
            key: "_handleInputClick",
            value: function() {
                this.dropdown && this.dropdown.isOpen && (this._setValueToInput(),
                this._setSelectedStates())
            }
        }, {
            key: "_setupDropdown",
            value: function() {
                var n = this;
                this.wrapper = document.createElement("div"),
                d(this.wrapper).addClass("select-wrapper " + this.options.classes),
                this.$el.before(d(this.wrapper)),
                this.wrapper.appendChild(this.el),
                this.el.disabled && this.wrapper.classList.add("disabled"),
                this.$selectOptions = this.$el.children("option, optgroup"),
                this.dropdownOptions = document.createElement("ul"),
                this.dropdownOptions.id = "select-options-" + M.guid(),
                d(this.dropdownOptions).addClass("dropdown-content select-dropdown " + (this.isMultiple ? "multiple-select-dropdown" : "")),
                this.$selectOptions.length && this.$selectOptions.each(function(t) {
                    if (d(t).is("option")) {
                        var e = void 0;
                        e = n.isMultiple ? n._appendOptionWithIcon(n.$el, t, "multiple") : n._appendOptionWithIcon(n.$el, t),
                        n._addOptionToValueDict(t, e)
                    } else if (d(t).is("optgroup")) {
                        var i = d(t).children("option");
                        d(n.dropdownOptions).append(d('<li class="optgroup"><span>' + t.getAttribute("label") + "</span></li>")[0]),
                        i.each(function(t) {
                            var e = n._appendOptionWithIcon(n.$el, t, "optgroup-option");
                            n._addOptionToValueDict(t, e)
                        })
                    }
                }),
                this.$el.after(this.dropdownOptions),
                this.input = document.createElement("input"),
                d(this.input).addClass("select-dropdown dropdown-trigger"),
                this.input.setAttribute("type", "text"),
                this.input.setAttribute("readonly", "true"),
                this.input.setAttribute("data-target", this.dropdownOptions.id),
                this.el.disabled && d(this.input).prop("disabled", "true"),
                this.$el.before(this.input),
                this._setValueToInput();
                var t = d('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
                if (this.$el.before(t[0]),
                !this.el.disabled) {
                    var e = d.extend({}, this.options.dropdownOptions);
                    e.onOpenEnd = function(t) {
                        var e = d(n.dropdownOptions).find(".selected").first();
                        if (e.length && (M.keyDown = !0,
                        n.dropdown.focusedIndex = e.index(),
                        n.dropdown._focusFocusedItem(),
                        M.keyDown = !1,
                        n.dropdown.isScrollable)) {
                            var i = e[0].getBoundingClientRect().top - n.dropdownOptions.getBoundingClientRect().top;
                            i -= n.dropdownOptions.clientHeight / 2,
                            n.dropdownOptions.scrollTop = i
                        }
                    }
                    ,
                    this.isMultiple && (e.closeOnClick = !1),
                    this.dropdown = M.Dropdown.init(this.input, e)
                }
                this._setSelectedStates()
            }
        }, {
            key: "_addOptionToValueDict",
            value: function(t, e) {
                var i = Object.keys(this._valueDict).length
                  , n = this.dropdownOptions.id + i
                  , s = {};
                e.id = n,
                s.el = t,
                s.optionEl = e,
                this._valueDict[n] = s
            }
        }, {
            key: "_removeDropdown",
            value: function() {
                d(this.wrapper).find(".caret").remove(),
                d(this.input).remove(),
                d(this.dropdownOptions).remove(),
                d(this.wrapper).before(this.$el),
                d(this.wrapper).remove()
            }
        }, {
            key: "_appendOptionWithIcon",
            value: function(t, e, i) {
                var n = e.disabled ? "disabled " : ""
                  , s = "optgroup-option" === i ? "optgroup-option " : ""
                  , o = this.isMultiple ? '<label><input type="checkbox"' + n + '"/><span>' + e.innerHTML + "</span></label>" : e.innerHTML
                  , a = d("<li></li>")
                  , r = d("<span></span>");
                r.html(o),
                a.addClass(n + " " + s),
                a.append(r);
                var l = e.getAttribute("data-icon");
                if (l) {
                    var h = d('<img alt="" src="' + l + '">');
                    a.prepend(h)
                }
                return d(this.dropdownOptions).append(a[0]),
                a[0]
            }
        }, {
            key: "_toggleEntryFromArray",
            value: function(t) {
                var e = !this._keysSelected.hasOwnProperty(t)
                  , i = d(this._valueDict[t].optionEl);
                return e ? this._keysSelected[t] = !0 : delete this._keysSelected[t],
                i.toggleClass("selected", e),
                i.find('input[type="checkbox"]').prop("checked", e),
                i.prop("selected", e),
                e
            }
        }, {
            key: "_setValueToInput",
            value: function() {
                var i = [];
                if (this.$el.find("option").each(function(t) {
                    if (d(t).prop("selected")) {
                        var e = d(t).text();
                        i.push(e)
                    }
                }),
                !i.length) {
                    var t = this.$el.find("option:disabled").eq(0);
                    t.length && "" === t[0].value && i.push(t.text())
                }
                this.input.value = i.join(", ")
            }
        }, {
            key: "_setSelectedStates",
            value: function() {
                for (var t in this._keysSelected = {},
                this._valueDict) {
                    var e = this._valueDict[t]
                      , i = d(e.el).prop("selected");
                    d(e.optionEl).find('input[type="checkbox"]').prop("checked", i),
                    i ? (this._activateOption(d(this.dropdownOptions), d(e.optionEl)),
                    this._keysSelected[t] = !0) : d(e.optionEl).removeClass("selected")
                }
            }
        }, {
            key: "_activateOption",
            value: function(t, e) {
                e && (this.isMultiple || t.find("li.selected").removeClass("selected"),
                d(e).addClass("selected"))
            }
        }, {
            key: "getSelectedValues",
            value: function() {
                var t = [];
                for (var e in this._keysSelected)
                    t.push(this._valueDict[e].el.value);
                return t
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_FormSelect
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.FormSelect = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "formSelect", "M_FormSelect")
}(cash),
function(s, e) {
    "use strict";
    var i = {}
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Range = i).options = s.extend({}, n.defaults, e),
            i._mousedown = !1,
            i._setupThumb(),
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._removeThumb(),
                this.el.M_Range = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleRangeChangeBound = this._handleRangeChange.bind(this),
                this._handleRangeMousedownTouchstartBound = this._handleRangeMousedownTouchstart.bind(this),
                this._handleRangeInputMousemoveTouchmoveBound = this._handleRangeInputMousemoveTouchmove.bind(this),
                this._handleRangeMouseupTouchendBound = this._handleRangeMouseupTouchend.bind(this),
                this._handleRangeBlurMouseoutTouchleaveBound = this._handleRangeBlurMouseoutTouchleave.bind(this),
                this.el.addEventListener("change", this._handleRangeChangeBound),
                this.el.addEventListener("mousedown", this._handleRangeMousedownTouchstartBound),
                this.el.addEventListener("touchstart", this._handleRangeMousedownTouchstartBound),
                this.el.addEventListener("input", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.addEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.addEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.addEventListener("mouseup", this._handleRangeMouseupTouchendBound),
                this.el.addEventListener("touchend", this._handleRangeMouseupTouchendBound),
                this.el.addEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound),
                this.el.addEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound),
                this.el.addEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("change", this._handleRangeChangeBound),
                this.el.removeEventListener("mousedown", this._handleRangeMousedownTouchstartBound),
                this.el.removeEventListener("touchstart", this._handleRangeMousedownTouchstartBound),
                this.el.removeEventListener("input", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.removeEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.removeEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.removeEventListener("mouseup", this._handleRangeMouseupTouchendBound),
                this.el.removeEventListener("touchend", this._handleRangeMouseupTouchendBound),
                this.el.removeEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound),
                this.el.removeEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound),
                this.el.removeEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound)
            }
        }, {
            key: "_handleRangeChange",
            value: function() {
                s(this.value).html(this.$el.val()),
                s(this.thumb).hasClass("active") || this._showRangeBubble();
                var t = this._calcRangeOffset();
                s(this.thumb).addClass("active").css("left", t + "px")
            }
        }, {
            key: "_handleRangeMousedownTouchstart",
            value: function(t) {
                if (s(this.value).html(this.$el.val()),
                this._mousedown = !0,
                this.$el.addClass("active"),
                s(this.thumb).hasClass("active") || this._showRangeBubble(),
                "input" !== t.type) {
                    var e = this._calcRangeOffset();
                    s(this.thumb).addClass("active").css("left", e + "px")
                }
            }
        }, {
            key: "_handleRangeInputMousemoveTouchmove",
            value: function() {
                if (this._mousedown) {
                    s(this.thumb).hasClass("active") || this._showRangeBubble();
                    var t = this._calcRangeOffset();
                    s(this.thumb).addClass("active").css("left", t + "px"),
                    s(this.value).html(this.$el.val())
                }
            }
        }, {
            key: "_handleRangeMouseupTouchend",
            value: function() {
                this._mousedown = !1,
                this.$el.removeClass("active")
            }
        }, {
            key: "_handleRangeBlurMouseoutTouchleave",
            value: function() {
                if (!this._mousedown) {
                    var t = 7 + parseInt(this.$el.css("padding-left")) + "px";
                    s(this.thumb).hasClass("active") && (e.remove(this.thumb),
                    e({
                        targets: this.thumb,
                        height: 0,
                        width: 0,
                        top: 10,
                        easing: "easeOutQuad",
                        marginLeft: t,
                        duration: 100
                    })),
                    s(this.thumb).removeClass("active")
                }
            }
        }, {
            key: "_setupThumb",
            value: function() {
                this.thumb = document.createElement("span"),
                this.value = document.createElement("span"),
                s(this.thumb).addClass("thumb"),
                s(this.value).addClass("value"),
                s(this.thumb).append(this.value),
                this.$el.after(this.thumb)
            }
        }, {
            key: "_removeThumb",
            value: function() {
                s(this.thumb).remove()
            }
        }, {
            key: "_showRangeBubble",
            value: function() {
                var t = -7 + parseInt(s(this.thumb).parent().css("padding-left")) + "px";
                e.remove(this.thumb),
                e({
                    targets: this.thumb,
                    height: 30,
                    width: 30,
                    top: -30,
                    marginLeft: t,
                    duration: 300,
                    easing: "easeOutQuint"
                })
            }
        }, {
            key: "_calcRangeOffset",
            value: function() {
                var t = this.$el.width() - 15
                  , e = parseFloat(this.$el.attr("max")) || 100
                  , i = parseFloat(this.$el.attr("min")) || 0;
                return (parseFloat(this.$el.val()) - i) / (e - i) * t
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Range
            }
        }, {
            key: "defaults",
            get: function() {
                return i
            }
        }]),
        n
    }();
    M.Range = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "range", "M_Range"),
    t.init(s("input[type=range]"))
}(cash, M.anime);

/* PrismJS 1.17.1
https://prismjs.com/download.html?#themes=prism&languages=markup+css+clike+javascript&plugins=line-highlight+line-numbers+file-highlight+show-invisibles */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}
  , Prism = function(u) {
    var c = /\blang(?:uage)?-([\w-]+)\b/i
      , a = 0;
    var _ = {
        manual: u.Prism && u.Prism.manual,
        disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
        util: {
            encode: function(e) {
                return e instanceof L ? new L(e.type,_.util.encode(e.content),e.alias) : Array.isArray(e) ? e.map(_.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
            },
            type: function(e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            },
            objId: function(e) {
                return e.__id || Object.defineProperty(e, "__id", {
                    value: ++a
                }),
                e.__id
            },
            clone: function n(e, r) {
                var t, a, i = _.util.type(e);
                switch (r = r || {},
                i) {
                case "Object":
                    if (a = _.util.objId(e),
                    r[a])
                        return r[a];
                    for (var o in t = {},
                    r[a] = t,
                    e)
                        e.hasOwnProperty(o) && (t[o] = n(e[o], r));
                    return t;
                case "Array":
                    return a = _.util.objId(e),
                    r[a] ? r[a] : (t = [],
                    r[a] = t,
                    e.forEach(function(e, a) {
                        t[a] = n(e, r)
                    }),
                    t);
                default:
                    return e
                }
            }
        },
        languages: {
            extend: function(e, a) {
                var n = _.util.clone(_.languages[e]);
                for (var r in a)
                    n[r] = a[r];
                return n
            },
            insertBefore: function(n, e, a, r) {
                var t = (r = r || _.languages)[n]
                  , i = {};
                for (var o in t)
                    if (t.hasOwnProperty(o)) {
                        if (o == e)
                            for (var l in a)
                                a.hasOwnProperty(l) && (i[l] = a[l]);
                        a.hasOwnProperty(o) || (i[o] = t[o])
                    }
                var s = r[n];
                return r[n] = i,
                _.languages.DFS(_.languages, function(e, a) {
                    a === s && e != n && (this[e] = i)
                }),
                i
            },
            DFS: function e(a, n, r, t) {
                t = t || {};
                var i = _.util.objId;
                for (var o in a)
                    if (a.hasOwnProperty(o)) {
                        n.call(a, o, a[o], r || o);
                        var l = a[o]
                          , s = _.util.type(l);
                        "Object" !== s || t[i(l)] ? "Array" !== s || t[i(l)] || (t[i(l)] = !0,
                        e(l, n, o, t)) : (t[i(l)] = !0,
                        e(l, n, null, t))
                    }
            }
        },
        plugins: {},
        highlightAll: function(e, a) {
            _.highlightAllUnder(document, e, a)
        },
        highlightAllUnder: function(e, a, n) {
            var r = {
                callback: n,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            _.hooks.run("before-highlightall", r);
            for (var t, i = e.querySelectorAll(r.selector), o = 0; t = i[o++]; )
                _.highlightElement(t, !0 === a, r.callback)
        },
        highlightElement: function(e, a, n) {
            var r = function(e) {
                for (; e && !c.test(e.className); )
                    e = e.parentNode;
                return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none"
            }(e)
              , t = _.languages[r];
            e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r;
            var i = e.parentNode;
            i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r);
            var o = {
                element: e,
                language: r,
                grammar: t,
                code: e.textContent
            };
            function l(e) {
                o.highlightedCode = e,
                _.hooks.run("before-insert", o),
                o.element.innerHTML = o.highlightedCode,
                _.hooks.run("after-highlight", o),
                _.hooks.run("complete", o),
                n && n.call(o.element)
            }
            if (_.hooks.run("before-sanity-check", o),
            !o.code)
                return _.hooks.run("complete", o),
                void (n && n.call(o.element));
            if (_.hooks.run("before-highlight", o),
            o.grammar)
                if (a && u.Worker) {
                    var s = new Worker(_.filename);
                    s.onmessage = function(e) {
                        l(e.data)
                    }
                    ,
                    s.postMessage(JSON.stringify({
                        language: o.language,
                        code: o.code,
                        immediateClose: !0
                    }))
                } else
                    l(_.highlight(o.code, o.grammar, o.language));
            else
                l(_.util.encode(o.code))
        },
        highlight: function(e, a, n) {
            var r = {
                code: e,
                grammar: a,
                language: n
            };
            return _.hooks.run("before-tokenize", r),
            r.tokens = _.tokenize(r.code, r.grammar),
            _.hooks.run("after-tokenize", r),
            L.stringify(_.util.encode(r.tokens), r.language)
        },
        matchGrammar: function(e, a, n, r, t, i, o) {
            for (var l in n)
                if (n.hasOwnProperty(l) && n[l]) {
                    var s = n[l];
                    s = Array.isArray(s) ? s : [s];
                    for (var u = 0; u < s.length; ++u) {
                        if (o && o == l + "," + u)
                            return;
                        var c = s[u]
                          , g = c.inside
                          , f = !!c.lookbehind
                          , h = !!c.greedy
                          , d = 0
                          , m = c.alias;
                        if (h && !c.pattern.global) {
                            var p = c.pattern.toString().match(/[imsuy]*$/)[0];
                            c.pattern = RegExp(c.pattern.source, p + "g")
                        }
                        c = c.pattern || c;
                        for (var y = r, v = t; y < a.length; v += a[y].length,
                        ++y) {
                            var k = a[y];
                            if (a.length > e.length)
                                return;
                            if (!(k instanceof L)) {
                                if (h && y != a.length - 1) {
                                    if (c.lastIndex = v,
                                    !(x = c.exec(e)))
                                        break;
                                    for (var b = x.index + (f && x[1] ? x[1].length : 0), w = x.index + x[0].length, A = y, P = v, O = a.length; A < O && (P < w || !a[A].type && !a[A - 1].greedy); ++A)
                                        (P += a[A].length) <= b && (++y,
                                        v = P);
                                    if (a[y]instanceof L)
                                        continue;
                                    j = A - y,
                                    k = e.slice(v, P),
                                    x.index -= v
                                } else {
                                    c.lastIndex = 0;
                                    var x = c.exec(k)
                                      , j = 1
                                }
                                if (x) {
                                    f && (d = x[1] ? x[1].length : 0);
                                    w = (b = x.index + d) + (x = x[0].slice(d)).length;
                                    var N = k.slice(0, b)
                                      , S = k.slice(w)
                                      , C = [y, j];
                                    N && (++y,
                                    v += N.length,
                                    C.push(N));
                                    var E = new L(l,g ? _.tokenize(x, g) : x,m,x,h);
                                    if (C.push(E),
                                    S && C.push(S),
                                    Array.prototype.splice.apply(a, C),
                                    1 != j && _.matchGrammar(e, a, n, y, v, !0, l + "," + u),
                                    i)
                                        break
                                } else if (i)
                                    break
                            }
                        }
                    }
                }
        },
        tokenize: function(e, a) {
            var n = [e]
              , r = a.rest;
            if (r) {
                for (var t in r)
                    a[t] = r[t];
                delete a.rest
            }
            return _.matchGrammar(e, n, a, 0, 0, !1),
            n
        },
        hooks: {
            all: {},
            add: function(e, a) {
                var n = _.hooks.all;
                n[e] = n[e] || [],
                n[e].push(a)
            },
            run: function(e, a) {
                var n = _.hooks.all[e];
                if (n && n.length)
                    for (var r, t = 0; r = n[t++]; )
                        r(a)
            }
        },
        Token: L
    };
    function L(e, a, n, r, t) {
        this.type = e,
        this.content = a,
        this.alias = n,
        this.length = 0 | (r || "").length,
        this.greedy = !!t
    }
    if (u.Prism = _,
    L.stringify = function(e, a) {
        if ("string" == typeof e)
            return e;
        if (Array.isArray(e))
            return e.map(function(e) {
                return L.stringify(e, a)
            }).join("");
        var n = {
            type: e.type,
            content: L.stringify(e.content, a),
            tag: "span",
            classes: ["token", e.type],
            attributes: {},
            language: a
        };
        if (e.alias) {
            var r = Array.isArray(e.alias) ? e.alias : [e.alias];
            Array.prototype.push.apply(n.classes, r)
        }
        _.hooks.run("wrap", n);
        var t = Object.keys(n.attributes).map(function(e) {
            return e + '="' + (n.attributes[e] || "").replace(/"/g, "&quot;") + '"'
        }).join(" ");
        return "<" + n.tag + ' class="' + n.classes.join(" ") + '"' + (t ? " " + t : "") + ">" + n.content + "</" + n.tag + ">"
    }
    ,
    !u.document)
        return u.addEventListener && (_.disableWorkerMessageHandler || u.addEventListener("message", function(e) {
            var a = JSON.parse(e.data)
              , n = a.language
              , r = a.code
              , t = a.immediateClose;
            u.postMessage(_.highlight(r, _.languages[n], n)),
            t && u.close()
        }, !1)),
        _;
    var e = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
    if (e && (_.filename = e.src,
    e.hasAttribute("data-manual") && (_.manual = !0)),
    !_.manual) {
        function n() {
            _.manual || _.highlightAll()
        }
        "loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n) : window.setTimeout(n, 16) : document.addEventListener("DOMContentLoaded", n)
    }
    return _
}(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism),
"undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
        greedy: !0
    },
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                inside: {
                    punctuation: [/^=/, {
                        pattern: /^(\s*)["']|["']$/,
                        lookbehind: !0
                    }]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
},
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity,
Prism.hooks.add("wrap", function(a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
}),
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function(a, e) {
        var s = {};
        s["language-" + e] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[e]
        },
        s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var n = {
            "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: s
            }
        };
        n["language-" + e] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[e]
        };
        var t = {};
        t[a] = {
            pattern: RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g, a), "i"),
            lookbehind: !0,
            greedy: !0,
            inside: n
        },
        Prism.languages.insertBefore("markup", "cdata", t)
    }
}),
Prism.languages.xml = Prism.languages.extend("markup", {}),
Prism.languages.html = Prism.languages.markup,
Prism.languages.mathml = Prism.languages.markup,
Prism.languages.svg = Prism.languages.markup;
!function(s) {
    var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
            inside: {
                rule: /@[\w-]+/
            }
        },
        url: {
            pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
            inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/
            }
        },
        selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
        string: {
            pattern: t,
            greedy: !0
        },
        property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        important: /!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:,]/
    },
    s.languages.css.atrule.inside.rest = s.languages.css;
    var e = s.languages.markup;
    e && (e.tag.addInlined("style", "css"),
    s.languages.insertBefore("inside", "attr-value", {
        "style-attr": {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
                "attr-name": {
                    pattern: /^\s*style/i,
                    inside: e.tag.inside
                },
                punctuation: /^\s*=\s*['"]|['"]\s*$/,
                "attr-value": {
                    pattern: /.+/i,
                    inside: s.languages.css
                }
            },
            alias: "language-css"
        }
    }, e.tag))
}(Prism);
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
    }],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: !0
    }],
    keyword: [{
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: !0
    }, {
        pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
    }],
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
}),
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,
Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*(?:$|[\r\n,.;})\]]))/,
        lookbehind: !0,
        greedy: !0
    },
    "function-variable": {
        pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: "function"
    },
    parameter: [{
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
    }, {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}),
Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
        greedy: !0,
        inside: {
            "template-punctuation": {
                pattern: /^`|`$/,
                alias: "string"
            },
            interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                lookbehind: !0,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\${|}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    }
}),
Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"),
Prism.languages.js = Prism.languages.javascript;
!function() {
    if ("undefined" != typeof self && self.Prism && self.document && document.querySelector) {
        var t, n = function() {
            if (void 0 === t) {
                var e = document.createElement("div");
                e.style.fontSize = "13px",
                e.style.lineHeight = "1.5",
                e.style.padding = 0,
                e.style.border = 0,
                e.innerHTML = "&nbsp;<br />&nbsp;",
                document.body.appendChild(e),
                t = 38 === e.offsetHeight,
                document.body.removeChild(e)
            }
            return t
        }, a = 0;
        Prism.hooks.add("before-sanity-check", function(e) {
            var t = e.element.parentNode
              , n = t && t.getAttribute("data-line");
            if (t && n && /pre/i.test(t.nodeName)) {
                var i = 0;
                r(".line-highlight", t).forEach(function(e) {
                    i += e.textContent.length,
                    e.parentNode.removeChild(e)
                }),
                i && /^( \n)+$/.test(e.code.slice(-i)) && (e.code = e.code.slice(0, -i))
            }
        }),
        Prism.hooks.add("complete", function e(t) {
            var n = t.element.parentNode
              , i = n && n.getAttribute("data-line");
            if (n && i && /pre/i.test(n.nodeName)) {
                clearTimeout(a);
                var r = Prism.plugins.lineNumbers
                  , o = t.plugins && t.plugins.lineNumbers;
                if (l(n, "line-numbers") && r && !o)
                    Prism.hooks.add("line-numbers", e);
                else
                    s(n, i)(),
                    a = setTimeout(u, 1)
            }
        }),
        window.addEventListener("hashchange", u),
        window.addEventListener("resize", function() {
            var t = [];
            r("pre[data-line]").forEach(function(e) {
                t.push(s(e))
            }),
            t.forEach(i)
        })
    }
    function r(e, t) {
        return Array.prototype.slice.call((t || document).querySelectorAll(e))
    }
    function l(e, t) {
        return t = " " + t + " ",
        -1 < (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(t)
    }
    function i(e) {
        e()
    }
    function s(u, e, d) {
        var t = (e = "string" == typeof e ? e : u.getAttribute("data-line")).replace(/\s+/g, "").split(",")
          , c = +u.getAttribute("data-line-offset") || 0
          , f = (n() ? parseInt : parseFloat)(getComputedStyle(u).lineHeight)
          , h = l(u, "line-numbers")
          , p = h ? u : u.querySelector("code") || u
          , m = [];
        return t.forEach(function(e) {
            var t = e.split("-")
              , n = +t[0]
              , i = +t[1] || n
              , r = u.querySelector('.line-highlight[data-range="' + e + '"]') || document.createElement("div");
            if (m.push(function() {
                r.setAttribute("aria-hidden", "true"),
                r.setAttribute("data-range", e),
                r.className = (d || "") + " line-highlight"
            }),
            h && Prism.plugins.lineNumbers) {
                var o = Prism.plugins.lineNumbers.getLine(u, n)
                  , a = Prism.plugins.lineNumbers.getLine(u, i);
                if (o) {
                    var l = o.offsetTop + "px";
                    m.push(function() {
                        r.style.top = l
                    })
                }
                if (a) {
                    var s = a.offsetTop - o.offsetTop + a.offsetHeight + "px";
                    m.push(function() {
                        r.style.height = s
                    })
                }
            } else
                m.push(function() {
                    r.setAttribute("data-start", n),
                    n < i && r.setAttribute("data-end", i),
                    r.style.top = (n - c - 1) * f + "px",
                    r.textContent = new Array(i - n + 2).join(" \n")
                });
            m.push(function() {
                p.appendChild(r)
            })
        }),
        function() {
            m.forEach(i)
        }
    }
    function u() {
        var e = location.hash.slice(1);
        r(".temporary.line-highlight").forEach(function(e) {
            e.parentNode.removeChild(e)
        });
        var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1];
        if (t && !document.getElementById(e)) {
            var n = e.slice(0, e.lastIndexOf("."))
              , i = document.getElementById(n);
            if (i)
                i.hasAttribute("data-line") || i.setAttribute("data-line", ""),
                s(i, t, "temporary ")(),
                document.querySelector(".temporary.line-highlight").scrollIntoView()
        }
    }
}();
!function() {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var l = "line-numbers"
          , c = /\n(?!$)/g
          , m = function(e) {
            var t = a(e)["white-space"];
            if ("pre-wrap" === t || "pre-line" === t) {
                var n = e.querySelector("code")
                  , r = e.querySelector(".line-numbers-rows")
                  , s = e.querySelector(".line-numbers-sizer")
                  , i = n.textContent.split(c);
                s || ((s = document.createElement("span")).className = "line-numbers-sizer",
                n.appendChild(s)),
                s.style.display = "block",
                i.forEach(function(e, t) {
                    s.textContent = e || "\n";
                    var n = s.getBoundingClientRect().height;
                    r.children[t].style.height = n + "px"
                }),
                s.textContent = "",
                s.style.display = "none"
            }
        }
          , a = function(e) {
            return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
        };
        window.addEventListener("resize", function() {
            Array.prototype.forEach.call(document.querySelectorAll("pre." + l), m)
        }),
        Prism.hooks.add("complete", function(e) {
            if (e.code) {
                var t = e.element
                  , n = t.parentNode;
                if (n && /pre/i.test(n.nodeName) && !t.querySelector(".line-numbers-rows")) {
                    for (var r = !1, s = /(?:^|\s)line-numbers(?:\s|$)/, i = t; i; i = i.parentNode)
                        if (s.test(i.className)) {
                            r = !0;
                            break
                        }
                    if (r) {
                        t.className = t.className.replace(s, " "),
                        s.test(n.className) || (n.className += " line-numbers");
                        var l, a = e.code.match(c), o = a ? a.length + 1 : 1, u = new Array(o + 1).join("<span></span>");
                        (l = document.createElement("span")).setAttribute("aria-hidden", "true"),
                        l.className = "line-numbers-rows",
                        l.innerHTML = u,
                        n.hasAttribute("data-start") && (n.style.counterReset = "linenumber " + (parseInt(n.getAttribute("data-start"), 10) - 1)),
                        e.element.appendChild(l),
                        m(n),
                        Prism.hooks.run("line-numbers", e)
                    }
                }
            }
        }),
        Prism.hooks.add("line-numbers", function(e) {
            e.plugins = e.plugins || {},
            e.plugins.lineNumbers = !0
        }),
        Prism.plugins.lineNumbers = {
            getLine: function(e, t) {
                if ("PRE" === e.tagName && e.classList.contains(l)) {
                    var n = e.querySelector(".line-numbers-rows")
                      , r = parseInt(e.getAttribute("data-start"), 10) || 1
                      , s = r + (n.children.length - 1);
                    t < r && (t = r),
                    s < t && (t = s);
                    var i = t - r;
                    return n.children[i]
                }
            }
        }
    }
}();
"undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function(e) {
    e = e || document;
    var i = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex"
    };
    Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e) {
        if (!e.hasAttribute("data-src-loaded")) {
            for (var t, a = e.getAttribute("data-src"), s = e, n = /\blang(?:uage)?-([\w-]+)\b/i; s && !n.test(s.className); )
                s = s.parentNode;
            if (s && (t = (e.className.match(n) || [, ""])[1]),
            !t) {
                var r = (a.match(/\.(\w+)$/) || [, ""])[1];
                t = i[r] || r
            }
            var o = document.createElement("code");
            o.className = "language-" + t,
            e.textContent = "",
            o.textContent = "Loading…",
            e.appendChild(o);
            var l = new XMLHttpRequest;
            l.open("GET", a, !0),
            l.onreadystatechange = function() {
                4 == l.readyState && (l.status < 400 && l.responseText ? (o.textContent = l.responseText,
                Prism.highlightElement(o),
                e.setAttribute("data-src-loaded", "")) : 400 <= l.status ? o.textContent = "✖ Error " + l.status + " while fetching file: " + l.statusText : o.textContent = "✖ Error: File does not exist or is empty")
            }
            ,
            l.send(null)
        }
    })
}
,
document.addEventListener("DOMContentLoaded", function() {
    self.Prism.fileHighlight()
}));
!function() {
    if (("undefined" == typeof self || self.Prism) && ("undefined" == typeof global || global.Prism)) {
        var i = {
            tab: /\t/,
            crlf: /\r\n/,
            lf: /\n/,
            cr: /\r/,
            space: / /
        };
        Prism.hooks.add("before-highlight", function(r) {
            s(r.grammar)
        })
    }
    function f(r, e) {
        var i = r[e];
        switch (Prism.util.type(i)) {
        case "RegExp":
            var a = {};
            r[e] = {
                pattern: i,
                inside: a
            },
            s(a);
            break;
        case "Array":
            for (var n = 0, t = i.length; n < t; n++)
                f(i, n);
            break;
        default:
            s(a = i.inside || (i.inside = {}))
        }
    }
    function s(r) {
        if (r && !r.tab) {
            for (var e in i)
                i.hasOwnProperty(e) && (r[e] = i[e]);
            for (var e in r)
                r.hasOwnProperty(e) && !i[e] && ("rest" === e ? s(r.rest) : f(r, e))
        }
    }
}();

/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.PerfectScrollbar = e()
}(this, function() {
    "use strict";
    function t(t) {
        return getComputedStyle(t)
    }
    function e(t, e) {
        for (var i in e) {
            var r = e[i];
            "number" == typeof r && (r += "px"),
            t.style[i] = r
        }
        return t
    }
    function i(t) {
        var e = document.createElement("div");
        return e.className = t,
        e
    }
    function r(t, e) {
        if (!v)
            throw new Error("No element matching method supported");
        return v.call(t, e)
    }
    function l(t) {
        t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
    }
    function n(t, e) {
        return Array.prototype.filter.call(t.children, function(t) {
            return r(t, e)
        })
    }
    function o(t, e) {
        var i = t.element.classList
          , r = m.state.scrolling(e);
        i.contains(r) ? clearTimeout(Y[e]) : i.add(r)
    }
    function s(t, e) {
        Y[e] = setTimeout(function() {
            return t.isAlive && t.element.classList.remove(m.state.scrolling(e))
        }, t.settings.scrollingThreshold)
    }
    function a(t, e) {
        o(t, e),
        s(t, e)
    }
    function c(t) {
        if ("function" == typeof window.CustomEvent)
            return new CustomEvent(t);
        var e = document.createEvent("CustomEvent");
        return e.initCustomEvent(t, !1, !1, void 0),
        e
    }
    function h(t, e, i, r, l) {
        var n = i[0]
          , o = i[1]
          , s = i[2]
          , h = i[3]
          , u = i[4]
          , d = i[5];
        void 0 === r && (r = !0),
        void 0 === l && (l = !1);
        var f = t.element;
        t.reach[h] = null,
        f[s] < 1 && (t.reach[h] = "start"),
        f[s] > t[n] - t[o] - 1 && (t.reach[h] = "end"),
        e && (f.dispatchEvent(c("ps-scroll-" + h)),
        e < 0 ? f.dispatchEvent(c("ps-scroll-" + u)) : e > 0 && f.dispatchEvent(c("ps-scroll-" + d)),
        r && a(t, h)),
        t.reach[h] && (e || l) && f.dispatchEvent(c("ps-" + h + "-reach-" + t.reach[h]))
    }
    function u(t) {
        return parseInt(t, 10) || 0
    }
    function d(t) {
        return r(t, "input,[contenteditable]") || r(t, "select,[contenteditable]") || r(t, "textarea,[contenteditable]") || r(t, "button,[contenteditable]")
    }
    function f(e) {
        var i = t(e);
        return u(i.width) + u(i.paddingLeft) + u(i.paddingRight) + u(i.borderLeftWidth) + u(i.borderRightWidth)
    }
    function p(t, e) {
        return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)),
        t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)),
        e
    }
    function b(t, i) {
        var r = {
            width: i.railXWidth
        }
          , l = Math.floor(t.scrollTop);
        i.isRtl ? r.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth : r.left = t.scrollLeft,
        i.isScrollbarXUsingBottom ? r.bottom = i.scrollbarXBottom - l : r.top = i.scrollbarXTop + l,
        e(i.scrollbarXRail, r);
        var n = {
            top: l,
            height: i.railYHeight
        };
        i.isScrollbarYUsingRight ? i.isRtl ? n.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth : n.right = i.scrollbarYRight - t.scrollLeft : i.isRtl ? n.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : n.left = i.scrollbarYLeft + t.scrollLeft,
        e(i.scrollbarYRail, n),
        e(i.scrollbarX, {
            left: i.scrollbarXLeft,
            width: i.scrollbarXWidth - i.railBorderXWidth
        }),
        e(i.scrollbarY, {
            top: i.scrollbarYTop,
            height: i.scrollbarYHeight - i.railBorderYWidth
        })
    }
    function g(t, e) {
        function i(e) {
            b[d] = g + Y * (e[a] - v),
            o(t, f),
            R(t),
            e.stopPropagation(),
            e.preventDefault()
        }
        function r() {
            s(t, f),
            t[p].classList.remove(m.state.clicking),
            t.event.unbind(t.ownerDocument, "mousemove", i)
        }
        var l = e[0]
          , n = e[1]
          , a = e[2]
          , c = e[3]
          , h = e[4]
          , u = e[5]
          , d = e[6]
          , f = e[7]
          , p = e[8]
          , b = t.element
          , g = null
          , v = null
          , Y = null;
        t.event.bind(t[h], "mousedown", function(e) {
            g = b[d],
            v = e[a],
            Y = (t[n] - t[l]) / (t[c] - t[u]),
            t.event.bind(t.ownerDocument, "mousemove", i),
            t.event.once(t.ownerDocument, "mouseup", r),
            t[p].classList.add(m.state.clicking),
            e.stopPropagation(),
            e.preventDefault()
        })
    }
    var v = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector)
      , m = {
        main: "ps",
        element: {
            thumb: function(t) {
                return "ps__thumb-" + t
            },
            rail: function(t) {
                return "ps__rail-" + t
            },
            consuming: "ps__child--consume"
        },
        state: {
            focus: "ps--focus",
            clicking: "ps--clicking",
            active: function(t) {
                return "ps--active-" + t
            },
            scrolling: function(t) {
                return "ps--scrolling-" + t
            }
        }
    }
      , Y = {
        x: null,
        y: null
    }
      , X = function(t) {
        this.element = t,
        this.handlers = {}
    }
      , w = {
        isEmpty: {
            configurable: !0
        }
    };
    X.prototype.bind = function(t, e) {
        void 0 === this.handlers[t] && (this.handlers[t] = []),
        this.handlers[t].push(e),
        this.element.addEventListener(t, e, !1)
    }
    ,
    X.prototype.unbind = function(t, e) {
        var i = this;
        this.handlers[t] = this.handlers[t].filter(function(r) {
            return !(!e || r === e) || (i.element.removeEventListener(t, r, !1),
            !1)
        })
    }
    ,
    X.prototype.unbindAll = function() {
        var t = this;
        for (var e in t.handlers)
            t.unbind(e)
    }
    ,
    w.isEmpty.get = function() {
        var t = this;
        return Object.keys(this.handlers).every(function(e) {
            return 0 === t.handlers[e].length
        })
    }
    ,
    Object.defineProperties(X.prototype, w);
    var y = function() {
        this.eventElements = []
    };
    y.prototype.eventElement = function(t) {
        var e = this.eventElements.filter(function(e) {
            return e.element === t
        })[0];
        return e || (e = new X(t),
        this.eventElements.push(e)),
        e
    }
    ,
    y.prototype.bind = function(t, e, i) {
        this.eventElement(t).bind(e, i)
    }
    ,
    y.prototype.unbind = function(t, e, i) {
        var r = this.eventElement(t);
        r.unbind(e, i),
        r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1)
    }
    ,
    y.prototype.unbindAll = function() {
        this.eventElements.forEach(function(t) {
            return t.unbindAll()
        }),
        this.eventElements = []
    }
    ,
    y.prototype.once = function(t, e, i) {
        var r = this.eventElement(t)
          , l = function(t) {
            r.unbind(e, l),
            i(t)
        };
        r.bind(e, l)
    }
    ;
    var W = function(t, e, i, r, l) {
        void 0 === r && (r = !0),
        void 0 === l && (l = !1);
        var n;
        if ("top" === e)
            n = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
        else {
            if ("left" !== e)
                throw new Error("A proper axis should be provided");
            n = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
        }
        h(t, i, n, r, l)
    }
      , L = {
        isWebKit: "undefined" != typeof document && "WebkitAppearance"in document.documentElement.style,
        supportsTouch: "undefined" != typeof window && ("ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
        isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
    }
      , R = function(t) {
        var e = t.element
          , i = Math.floor(e.scrollTop);
        t.containerWidth = e.clientWidth,
        t.containerHeight = e.clientHeight,
        t.contentWidth = e.scrollWidth,
        t.contentHeight = e.scrollHeight,
        e.contains(t.scrollbarXRail) || (n(e, m.element.rail("x")).forEach(function(t) {
            return l(t)
        }),
        e.appendChild(t.scrollbarXRail)),
        e.contains(t.scrollbarYRail) || (n(e, m.element.rail("y")).forEach(function(t) {
            return l(t)
        }),
        e.appendChild(t.scrollbarYRail)),
        !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0,
        t.railXWidth = t.containerWidth - t.railXMarginWidth,
        t.railXRatio = t.containerWidth / t.railXWidth,
        t.scrollbarXWidth = p(t, u(t.railXWidth * t.containerWidth / t.contentWidth)),
        t.scrollbarXLeft = u((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1,
        !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0,
        t.railYHeight = t.containerHeight - t.railYMarginHeight,
        t.railYRatio = t.containerHeight / t.railYHeight,
        t.scrollbarYHeight = p(t, u(t.railYHeight * t.containerHeight / t.contentHeight)),
        t.scrollbarYTop = u(i * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1,
        t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
        t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
        b(e, t),
        t.scrollbarXActive ? e.classList.add(m.state.active("x")) : (e.classList.remove(m.state.active("x")),
        t.scrollbarXWidth = 0,
        t.scrollbarXLeft = 0,
        e.scrollLeft = 0),
        t.scrollbarYActive ? e.classList.add(m.state.active("y")) : (e.classList.remove(m.state.active("y")),
        t.scrollbarYHeight = 0,
        t.scrollbarYTop = 0,
        e.scrollTop = 0)
    }
      , T = {
        "click-rail": function(t) {
            t.event.bind(t.scrollbarY, "mousedown", function(t) {
                return t.stopPropagation()
            }),
            t.event.bind(t.scrollbarYRail, "mousedown", function(e) {
                var i = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
                t.element.scrollTop += i * t.containerHeight,
                R(t),
                e.stopPropagation()
            }),
            t.event.bind(t.scrollbarX, "mousedown", function(t) {
                return t.stopPropagation()
            }),
            t.event.bind(t.scrollbarXRail, "mousedown", function(e) {
                var i = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
                t.element.scrollLeft += i * t.containerWidth,
                R(t),
                e.stopPropagation()
            })
        },
        "drag-thumb": function(t) {
            g(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]),
            g(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
        },
        keyboard: function(t) {
            function e(e, r) {
                var l = Math.floor(i.scrollTop);
                if (0 === e) {
                    if (!t.scrollbarYActive)
                        return !1;
                    if (0 === l && r > 0 || l >= t.contentHeight - t.containerHeight && r < 0)
                        return !t.settings.wheelPropagation
                }
                var n = i.scrollLeft;
                if (0 === r) {
                    if (!t.scrollbarXActive)
                        return !1;
                    if (0 === n && e < 0 || n >= t.contentWidth - t.containerWidth && e > 0)
                        return !t.settings.wheelPropagation
                }
                return !0
            }
            var i = t.element
              , l = function() {
                return r(i, ":hover")
            }
              , n = function() {
                return r(t.scrollbarX, ":focus") || r(t.scrollbarY, ":focus")
            };
            t.event.bind(t.ownerDocument, "keydown", function(r) {
                if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented) && (l() || n())) {
                    var o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                    if (o) {
                        if ("IFRAME" === o.tagName)
                            o = o.contentDocument.activeElement;
                        else
                            for (; o.shadowRoot; )
                                o = o.shadowRoot.activeElement;
                        if (d(o))
                            return
                    }
                    var s = 0
                      , a = 0;
                    switch (r.which) {
                    case 37:
                        s = r.metaKey ? -t.contentWidth : r.altKey ? -t.containerWidth : -30;
                        break;
                    case 38:
                        a = r.metaKey ? t.contentHeight : r.altKey ? t.containerHeight : 30;
                        break;
                    case 39:
                        s = r.metaKey ? t.contentWidth : r.altKey ? t.containerWidth : 30;
                        break;
                    case 40:
                        a = r.metaKey ? -t.contentHeight : r.altKey ? -t.containerHeight : -30;
                        break;
                    case 32:
                        a = r.shiftKey ? t.containerHeight : -t.containerHeight;
                        break;
                    case 33:
                        a = t.containerHeight;
                        break;
                    case 34:
                        a = -t.containerHeight;
                        break;
                    case 36:
                        a = t.contentHeight;
                        break;
                    case 35:
                        a = -t.contentHeight;
                        break;
                    default:
                        return
                    }
                    t.settings.suppressScrollX && 0 !== s || t.settings.suppressScrollY && 0 !== a || (i.scrollTop -= a,
                    i.scrollLeft += s,
                    R(t),
                    e(s, a) && r.preventDefault())
                }
            })
        },
        wheel: function(e) {
            function i(t, i) {
                var r = Math.floor(o.scrollTop)
                  , l = 0 === o.scrollTop
                  , n = r + o.offsetHeight === o.scrollHeight
                  , s = 0 === o.scrollLeft
                  , a = o.scrollLeft + o.offsetWidth === o.scrollWidth;
                return !(Math.abs(i) > Math.abs(t) ? l || n : s || a) || !e.settings.wheelPropagation
            }
            function r(t) {
                var e = t.deltaX
                  , i = -1 * t.deltaY;
                return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6,
                i = t.wheelDeltaY / 6),
                t.deltaMode && 1 === t.deltaMode && (e *= 10,
                i *= 10),
                e !== e && i !== i && (e = 0,
                i = t.wheelDelta),
                t.shiftKey ? [-i, -e] : [e, i]
            }
            function l(e, i, r) {
                if (!L.isWebKit && o.querySelector("select:focus"))
                    return !0;
                if (!o.contains(e))
                    return !1;
                for (var l = e; l && l !== o; ) {
                    if (l.classList.contains(m.element.consuming))
                        return !0;
                    var n = t(l);
                    if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
                        var s = l.scrollHeight - l.clientHeight;
                        if (s > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === s && r < 0))
                            return !0;
                        var a = l.scrollWidth - l.clientWidth;
                        if (a > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === a && i > 0))
                            return !0
                    }
                    l = l.parentNode
                }
                return !1
            }
            function n(t) {
                var n = r(t)
                  , s = n[0]
                  , a = n[1];
                if (!l(t.target, s, a)) {
                    var c = !1;
                    e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (a ? o.scrollTop -= a * e.settings.wheelSpeed : o.scrollTop += s * e.settings.wheelSpeed,
                    c = !0) : e.scrollbarXActive && !e.scrollbarYActive && (s ? o.scrollLeft += s * e.settings.wheelSpeed : o.scrollLeft -= a * e.settings.wheelSpeed,
                    c = !0) : (o.scrollTop -= a * e.settings.wheelSpeed,
                    o.scrollLeft += s * e.settings.wheelSpeed),
                    R(e),
                    (c = c || i(s, a)) && !t.ctrlKey && (t.stopPropagation(),
                    t.preventDefault())
                }
            }
            var o = e.element;
            void 0 !== window.onwheel ? e.event.bind(o, "wheel", n) : void 0 !== window.onmousewheel && e.event.bind(o, "mousewheel", n)
        },
        touch: function(e) {
            function i(t, i) {
                var r = Math.floor(h.scrollTop)
                  , l = h.scrollLeft
                  , n = Math.abs(t)
                  , o = Math.abs(i);
                if (o > n) {
                    if (i < 0 && r === e.contentHeight - e.containerHeight || i > 0 && 0 === r)
                        return 0 === window.scrollY && i > 0 && L.isChrome
                } else if (n > o && (t < 0 && l === e.contentWidth - e.containerWidth || t > 0 && 0 === l))
                    return !0;
                return !0
            }
            function r(t, i) {
                h.scrollTop -= i,
                h.scrollLeft -= t,
                R(e)
            }
            function l(t) {
                return t.targetTouches ? t.targetTouches[0] : t
            }
            function n(t) {
                return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
            }
            function o(t) {
                if (n(t)) {
                    var e = l(t);
                    u.pageX = e.pageX,
                    u.pageY = e.pageY,
                    d = (new Date).getTime(),
                    null !== p && clearInterval(p)
                }
            }
            function s(e, i, r) {
                if (!h.contains(e))
                    return !1;
                for (var l = e; l && l !== h; ) {
                    if (l.classList.contains(m.element.consuming))
                        return !0;
                    var n = t(l);
                    if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
                        var o = l.scrollHeight - l.clientHeight;
                        if (o > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === o && r < 0))
                            return !0;
                        var s = l.scrollLeft - l.clientWidth;
                        if (s > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === s && i > 0))
                            return !0
                    }
                    l = l.parentNode
                }
                return !1
            }
            function a(t) {
                if (n(t)) {
                    var e = l(t)
                      , o = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    }
                      , a = o.pageX - u.pageX
                      , c = o.pageY - u.pageY;
                    if (s(t.target, a, c))
                        return;
                    r(a, c),
                    u = o;
                    var h = (new Date).getTime()
                      , p = h - d;
                    p > 0 && (f.x = a / p,
                    f.y = c / p,
                    d = h),
                    i(a, c) && t.preventDefault()
                }
            }
            function c() {
                e.settings.swipeEasing && (clearInterval(p),
                p = setInterval(function() {
                    e.isInitialized ? clearInterval(p) : f.x || f.y ? Math.abs(f.x) < .01 && Math.abs(f.y) < .01 ? clearInterval(p) : (r(30 * f.x, 30 * f.y),
                    f.x *= .8,
                    f.y *= .8) : clearInterval(p)
                }, 10))
            }
            if (L.supportsTouch || L.supportsIePointer) {
                var h = e.element
                  , u = {}
                  , d = 0
                  , f = {}
                  , p = null;
                L.supportsTouch ? (e.event.bind(h, "touchstart", o),
                e.event.bind(h, "touchmove", a),
                e.event.bind(h, "touchend", c)) : L.supportsIePointer && (window.PointerEvent ? (e.event.bind(h, "pointerdown", o),
                e.event.bind(h, "pointermove", a),
                e.event.bind(h, "pointerup", c)) : window.MSPointerEvent && (e.event.bind(h, "MSPointerDown", o),
                e.event.bind(h, "MSPointerMove", a),
                e.event.bind(h, "MSPointerUp", c)))
            }
        }
    }
      , H = function(r, l) {
        var n = this;
        if (void 0 === l && (l = {}),
        "string" == typeof r && (r = document.querySelector(r)),
        !r || !r.nodeName)
            throw new Error("no element is specified to initialize PerfectScrollbar");
        this.element = r,
        r.classList.add(m.main),
        this.settings = {
            handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollingThreshold: 1e3,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !0,
            wheelSpeed: 1
        };
        for (var o in l)
            n.settings[o] = l[o];
        this.containerWidth = null,
        this.containerHeight = null,
        this.contentWidth = null,
        this.contentHeight = null;
        var s = function() {
            return r.classList.add(m.state.focus)
        }
          , a = function() {
            return r.classList.remove(m.state.focus)
        };
        this.isRtl = "rtl" === t(r).direction,
        this.isNegativeScroll = function() {
            var t = r.scrollLeft
              , e = null;
            return r.scrollLeft = -1,
            e = r.scrollLeft < 0,
            r.scrollLeft = t,
            e
        }(),
        this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0,
        this.event = new y,
        this.ownerDocument = r.ownerDocument || document,
        this.scrollbarXRail = i(m.element.rail("x")),
        r.appendChild(this.scrollbarXRail),
        this.scrollbarX = i(m.element.thumb("x")),
        this.scrollbarXRail.appendChild(this.scrollbarX),
        this.scrollbarX.setAttribute("tabindex", 0),
        this.event.bind(this.scrollbarX, "focus", s),
        this.event.bind(this.scrollbarX, "blur", a),
        this.scrollbarXActive = null,
        this.scrollbarXWidth = null,
        this.scrollbarXLeft = null;
        var c = t(this.scrollbarXRail);
        this.scrollbarXBottom = parseInt(c.bottom, 10),
        isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1,
        this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0,
        this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth),
        e(this.scrollbarXRail, {
            display: "block"
        }),
        this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight),
        e(this.scrollbarXRail, {
            display: ""
        }),
        this.railXWidth = null,
        this.railXRatio = null,
        this.scrollbarYRail = i(m.element.rail("y")),
        r.appendChild(this.scrollbarYRail),
        this.scrollbarY = i(m.element.thumb("y")),
        this.scrollbarYRail.appendChild(this.scrollbarY),
        this.scrollbarY.setAttribute("tabindex", 0),
        this.event.bind(this.scrollbarY, "focus", s),
        this.event.bind(this.scrollbarY, "blur", a),
        this.scrollbarYActive = null,
        this.scrollbarYHeight = null,
        this.scrollbarYTop = null;
        var h = t(this.scrollbarYRail);
        this.scrollbarYRight = parseInt(h.right, 10),
        isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1,
        this.scrollbarYLeft = u(h.left)) : this.isScrollbarYUsingRight = !0,
        this.scrollbarYOuterWidth = this.isRtl ? f(this.scrollbarY) : null,
        this.railBorderYWidth = u(h.borderTopWidth) + u(h.borderBottomWidth),
        e(this.scrollbarYRail, {
            display: "block"
        }),
        this.railYMarginHeight = u(h.marginTop) + u(h.marginBottom),
        e(this.scrollbarYRail, {
            display: ""
        }),
        this.railYHeight = null,
        this.railYRatio = null,
        this.reach = {
            x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
            y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
        },
        this.isAlive = !0,
        this.settings.handlers.forEach(function(t) {
            return T[t](n)
        }),
        this.lastScrollTop = Math.floor(r.scrollTop),
        this.lastScrollLeft = r.scrollLeft,
        this.event.bind(this.element, "scroll", function(t) {
            return n.onScroll(t)
        }),
        R(this)
    };
    return H.prototype.update = function() {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0,
        e(this.scrollbarXRail, {
            display: "block"
        }),
        e(this.scrollbarYRail, {
            display: "block"
        }),
        this.railXMarginWidth = u(t(this.scrollbarXRail).marginLeft) + u(t(this.scrollbarXRail).marginRight),
        this.railYMarginHeight = u(t(this.scrollbarYRail).marginTop) + u(t(this.scrollbarYRail).marginBottom),
        e(this.scrollbarXRail, {
            display: "none"
        }),
        e(this.scrollbarYRail, {
            display: "none"
        }),
        R(this),
        W(this, "top", 0, !1, !0),
        W(this, "left", 0, !1, !0),
        e(this.scrollbarXRail, {
            display: ""
        }),
        e(this.scrollbarYRail, {
            display: ""
        }))
    }
    ,
    H.prototype.onScroll = function(t) {
        this.isAlive && (R(this),
        W(this, "top", this.element.scrollTop - this.lastScrollTop),
        W(this, "left", this.element.scrollLeft - this.lastScrollLeft),
        this.lastScrollTop = Math.floor(this.element.scrollTop),
        this.lastScrollLeft = this.element.scrollLeft)
    }
    ,
    H.prototype.destroy = function() {
        this.isAlive && (this.event.unbindAll(),
        l(this.scrollbarX),
        l(this.scrollbarY),
        l(this.scrollbarXRail),
        l(this.scrollbarYRail),
        this.removePsClasses(),
        this.element = null,
        this.scrollbarX = null,
        this.scrollbarY = null,
        this.scrollbarXRail = null,
        this.scrollbarYRail = null,
        this.isAlive = !1)
    }
    ,
    H.prototype.removePsClasses = function() {
        this.element.className = this.element.className.split(" ").filter(function(t) {
            return !t.match(/^ps([-_].+|)$/)
        }).join(" ")
    }
    ,
    H
});

// Internalization
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).i18next = t()
}(this, function() {
    "use strict";
    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(t)
    }
    function t(n) {
        return (t = "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? function(t) {
            return e(t)
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t)
        }
        )(n)
    }
    function n(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {}
              , o = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))),
            o.forEach(function(t) {
                n(e, t, r[t])
            })
        }
        return e
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function a(e, t, n) {
        return t && i(e.prototype, t),
        n && i(e, n),
        e
    }
    function s(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function u(e, n) {
        return !n || "object" !== t(n) && "function" != typeof n ? s(e) : n
    }
    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function f(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        t && c(e, t)
    }
    function p(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                return n
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var g = {
        type: "logger",
        log: function(e) {
            this.output("log", e)
        },
        warn: function(e) {
            this.output("warn", e)
        },
        error: function(e) {
            this.output("error", e)
        },
        output: function(e, t) {
            var n;
            console && console[e] && (n = console)[e].apply(n, p(t))
        }
    }
      , h = new (function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            o(this, e),
            this.init(t, n)
        }
        return a(e, [{
            key: "init",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.prefix = t.prefix || "i18next:",
                this.logger = e || g,
                this.options = t,
                this.debug = t.debug
            }
        }, {
            key: "setDebug",
            value: function(e) {
                this.debug = e
            }
        }, {
            key: "log",
            value: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return this.forward(t, "log", "", !0)
            }
        }, {
            key: "warn",
            value: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return this.forward(t, "warn", "", !0)
            }
        }, {
            key: "error",
            value: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return this.forward(t, "error", "")
            }
        }, {
            key: "deprecate",
            value: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
            }
        }, {
            key: "forward",
            value: function(e, t, n, r) {
                return r && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])),
                this.logger[t](e))
            }
        }, {
            key: "create",
            value: function(t) {
                return new e(this.logger,r({}, {
                    prefix: "".concat(this.prefix, ":").concat(t, ":")
                }, this.options))
            }
        }]),
        e
    }())
      , d = function() {
        function e() {
            o(this, e),
            this.observers = {}
        }
        return a(e, [{
            key: "on",
            value: function(e, t) {
                var n = this;
                return e.split(" ").forEach(function(e) {
                    n.observers[e] = n.observers[e] || [],
                    n.observers[e].push(t)
                }),
                this
            }
        }, {
            key: "off",
            value: function(e, t) {
                var n = this;
                this.observers[e] && this.observers[e].forEach(function() {
                    if (t) {
                        var r = n.observers[e].indexOf(t);
                        r > -1 && n.observers[e].splice(r, 1)
                    } else
                        delete n.observers[e]
                })
            }
        }, {
            key: "emit",
            value: function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                this.observers[e] && [].concat(this.observers[e]).forEach(function(e) {
                    e.apply(void 0, n)
                });
                this.observers["*"] && [].concat(this.observers["*"]).forEach(function(t) {
                    t.apply(t, [e].concat(n))
                })
            }
        }]),
        e
    }();
    function v() {
        var e, t, n = new Promise(function(n, r) {
            e = n,
            t = r
        }
        );
        return n.resolve = e,
        n.reject = t,
        n
    }
    function y(e) {
        return null == e ? "" : "" + e
    }
    function m(e, t, n) {
        function r(e) {
            return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
        }
        function o() {
            return !e || "string" == typeof e
        }
        for (var i = "string" != typeof t ? [].concat(t) : t.split("."); i.length > 1; ) {
            if (o())
                return {};
            var a = r(i.shift());
            !e[a] && n && (e[a] = new n),
            e = e[a]
        }
        return o() ? {} : {
            obj: e,
            k: r(i.shift())
        }
    }
    function b(e, t, n) {
        var r = m(e, t, Object);
        r.obj[r.k] = n
    }
    function k(e, t) {
        var n = m(e, t)
          , r = n.obj
          , o = n.k;
        if (r)
            return r[o]
    }
    function x(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
    var S = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    };
    function w(e) {
        return "string" == typeof e ? e.replace(/[&<>"'\/]/g, function(e) {
            return S[e]
        }) : e
    }
    var O = function(e) {
        function t(e) {
            var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                ns: ["translation"],
                defaultNS: "translation"
            };
            return o(this, t),
            n = u(this, l(t).call(this)),
            d.call(s(n)),
            n.data = e || {},
            n.options = r,
            void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
            n
        }
        return f(t, d),
        a(t, [{
            key: "addNamespaces",
            value: function(e) {
                this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
            }
        }, {
            key: "removeNamespaces",
            value: function(e) {
                var t = this.options.ns.indexOf(e);
                t > -1 && this.options.ns.splice(t, 1)
            }
        }, {
            key: "getResource",
            value: function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                  , o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator
                  , i = [e, t];
                return n && "string" != typeof n && (i = i.concat(n)),
                n && "string" == typeof n && (i = i.concat(o ? n.split(o) : n)),
                e.indexOf(".") > -1 && (i = e.split(".")),
                k(this.data, i)
            }
        }, {
            key: "addResource",
            value: function(e, t, n, r) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                    silent: !1
                }
                  , i = this.options.keySeparator;
                void 0 === i && (i = ".");
                var a = [e, t];
                n && (a = a.concat(i ? n.split(i) : n)),
                e.indexOf(".") > -1 && (r = t,
                t = (a = e.split("."))[1]),
                this.addNamespaces(t),
                b(this.data, a, r),
                o.silent || this.emit("added", e, t, n, r)
            }
        }, {
            key: "addResources",
            value: function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    silent: !1
                };
                for (var o in n)
                    "string" != typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(e, t, o, n[o], {
                        silent: !0
                    });
                r.silent || this.emit("added", e, t, n)
            }
        }, {
            key: "addResourceBundle",
            value: function(e, t, n, o, i) {
                var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                    silent: !1
                }
                  , s = [e, t];
                e.indexOf(".") > -1 && (o = n,
                n = t,
                t = (s = e.split("."))[1]),
                this.addNamespaces(t);
                var u = k(this.data, s) || {};
                o ? function e(t, n, r) {
                    for (var o in n)
                        o in t ? "string" == typeof t[o] || t[o]instanceof String || "string" == typeof n[o] || n[o]instanceof String ? r && (t[o] = n[o]) : e(t[o], n[o], r) : t[o] = n[o];
                    return t
                }(u, n, i) : u = r({}, u, n),
                b(this.data, s, u),
                a.silent || this.emit("added", e, t, n)
            }
        }, {
            key: "removeResourceBundle",
            value: function(e, t) {
                this.hasResourceBundle(e, t) && delete this.data[e][t],
                this.removeNamespaces(t),
                this.emit("removed", e, t)
            }
        }, {
            key: "hasResourceBundle",
            value: function(e, t) {
                return void 0 !== this.getResource(e, t)
            }
        }, {
            key: "getResourceBundle",
            value: function(e, t) {
                return t || (t = this.options.defaultNS),
                "v1" === this.options.compatibilityAPI ? r({}, {}, this.getResource(e, t)) : this.getResource(e, t)
            }
        }, {
            key: "getDataByLanguage",
            value: function(e) {
                return this.data[e]
            }
        }, {
            key: "toJSON",
            value: function() {
                return this.data
            }
        }]),
        t
    }()
      , R = {
        processors: {},
        addPostProcessor: function(e) {
            this.processors[e.name] = e
        },
        handle: function(e, t, n, r, o) {
            var i = this;
            return e.forEach(function(e) {
                i.processors[e] && (t = i.processors[e].process(t, n, r, o))
            }),
            t
        }
    }
      , j = function(e) {
        function n(e) {
            var t, r, i, a, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return o(this, n),
            t = u(this, l(n).call(this)),
            d.call(s(t)),
            r = ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat"],
            i = e,
            a = s(t),
            r.forEach(function(e) {
                i[e] && (a[e] = i[e])
            }),
            t.options = c,
            void 0 === t.options.keySeparator && (t.options.keySeparator = "."),
            t.logger = h.create("translator"),
            t
        }
        return f(n, d),
        a(n, [{
            key: "changeLanguage",
            value: function(e) {
                e && (this.language = e)
            }
        }, {
            key: "exists",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    interpolation: {}
                }
                  , n = this.resolve(e, t);
                return n && void 0 !== n.res
            }
        }, {
            key: "extractFromKey",
            value: function(e, t) {
                var n = t.nsSeparator || this.options.nsSeparator;
                void 0 === n && (n = ":");
                var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                  , o = t.ns || this.options.defaultNS;
                if (n && e.indexOf(n) > -1) {
                    var i = e.split(n);
                    (n !== r || n === r && this.options.ns.indexOf(i[0]) > -1) && (o = i.shift()),
                    e = i.join(r)
                }
                return "string" == typeof o && (o = [o]),
                {
                    key: e,
                    namespaces: o
                }
            }
        }, {
            key: "translate",
            value: function(e, n) {
                var o = this;
                if ("object" !== t(n) && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)),
                n || (n = {}),
                null == e)
                    return "";
                Array.isArray(e) || (e = [String(e)]);
                var i = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator
                  , a = this.extractFromKey(e[e.length - 1], n)
                  , s = a.key
                  , u = a.namespaces
                  , l = u[u.length - 1]
                  , c = n.lng || this.language
                  , f = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                if (c && "cimode" === c.toLowerCase()) {
                    if (f) {
                        var p = n.nsSeparator || this.options.nsSeparator;
                        return l + p + s
                    }
                    return s
                }
                var g = this.resolve(e, n)
                  , h = g && g.res
                  , d = g && g.usedKey || s
                  , v = g && g.exactUsedKey || s
                  , y = Object.prototype.toString.apply(h)
                  , m = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays
                  , b = !this.i18nFormat || this.i18nFormat.handleAsObject;
                if (b && h && ("string" != typeof h && "boolean" != typeof h && "number" != typeof h) && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(y) < 0 && ("string" != typeof m || "[object Array]" !== y)) {
                    if (!n.returnObjects && !this.options.returnObjects)
                        return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),
                        this.options.returnedObjectHandler ? this.options.returnedObjectHandler(d, h, n) : "key '".concat(s, " (").concat(this.language, ")' returned an object instead of string.");
                    if (i) {
                        var k = "[object Array]" === y
                          , x = k ? [] : {}
                          , S = k ? v : d;
                        for (var w in h)
                            if (Object.prototype.hasOwnProperty.call(h, w)) {
                                var O = "".concat(S).concat(i).concat(w);
                                x[w] = this.translate(O, r({}, n, {
                                    joinArrays: !1,
                                    ns: u
                                })),
                                x[w] === O && (x[w] = h[w])
                            }
                        h = x
                    }
                } else if (b && "string" == typeof m && "[object Array]" === y)
                    (h = h.join(m)) && (h = this.extendTranslation(h, e, n));
                else {
                    var R = !1
                      , j = !1;
                    if (!this.isValidLookup(h) && void 0 !== n.defaultValue) {
                        if (R = !0,
                        void 0 !== n.count) {
                            var L = this.pluralResolver.getSuffix(c, n.count);
                            h = n["defaultValue".concat(L)]
                        }
                        h || (h = n.defaultValue)
                    }
                    this.isValidLookup(h) || (j = !0,
                    h = s);
                    var N = n.defaultValue && n.defaultValue !== h && this.options.updateMissing;
                    if (j || R || N) {
                        this.logger.log(N ? "updateKey" : "missingKey", c, l, s, N ? n.defaultValue : h);
                        var C = []
                          , E = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                        if ("fallback" === this.options.saveMissingTo && E && E[0])
                            for (var P = 0; P < E.length; P++)
                                C.push(E[P]);
                        else
                            "all" === this.options.saveMissingTo ? C = this.languageUtils.toResolveHierarchy(n.lng || this.language) : C.push(n.lng || this.language);
                        var F = function(e, t) {
                            o.options.missingKeyHandler ? o.options.missingKeyHandler(e, l, t, N ? n.defaultValue : h, N, n) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(e, l, t, N ? n.defaultValue : h, N, n),
                            o.emit("missingKey", e, l, t, h)
                        };
                        if (this.options.saveMissing) {
                            var A = void 0 !== n.count && "string" != typeof n.count;
                            this.options.saveMissingPlurals && A ? C.forEach(function(e) {
                                o.pluralResolver.getPluralFormsOfKey(e, s).forEach(function(t) {
                                    return F([e], t)
                                })
                            }) : F(C, s)
                        }
                    }
                    h = this.extendTranslation(h, e, n, g),
                    j && h === s && this.options.appendNamespaceToMissingKey && (h = "".concat(l, ":").concat(s)),
                    j && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(h))
                }
                return h
            }
        }, {
            key: "extendTranslation",
            value: function(e, t, n, o) {
                var i = this;
                if (this.i18nFormat && this.i18nFormat.parse)
                    e = this.i18nFormat.parse(e, n, o.usedLng, o.usedNS, o.usedKey, {
                        resolved: o
                    });
                else if (!n.skipInterpolation) {
                    n.interpolation && this.interpolator.init(r({}, n, {
                        interpolation: r({}, this.options.interpolation, n.interpolation)
                    }));
                    var a = n.replace && "string" != typeof n.replace ? n.replace : n;
                    this.options.interpolation.defaultVariables && (a = r({}, this.options.interpolation.defaultVariables, a)),
                    e = this.interpolator.interpolate(e, a, n.lng || this.language, n),
                    !1 !== n.nest && (e = this.interpolator.nest(e, function() {
                        return i.translate.apply(i, arguments)
                    }, n)),
                    n.interpolation && this.interpolator.reset()
                }
                var s = n.postProcess || this.options.postProcess
                  , u = "string" == typeof s ? [s] : s;
                return null != e && u && u.length && !1 !== n.applyPostProcessor && (e = R.handle(u, e, t, n, this)),
                e
            }
        }, {
            key: "resolve",
            value: function(e) {
                var t, n, r, o, i, a = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return "string" == typeof e && (e = [e]),
                e.forEach(function(e) {
                    if (!a.isValidLookup(t)) {
                        var u = a.extractFromKey(e, s)
                          , l = u.key;
                        n = l;
                        var c = u.namespaces;
                        a.options.fallbackNS && (c = c.concat(a.options.fallbackNS));
                        var f = void 0 !== s.count && "string" != typeof s.count
                          , p = void 0 !== s.context && "string" == typeof s.context && "" !== s.context
                          , g = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                        c.forEach(function(e) {
                            a.isValidLookup(t) || (i = e,
                            g.forEach(function(n) {
                                if (!a.isValidLookup(t)) {
                                    o = n;
                                    var i, u, c = l, g = [c];
                                    if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                                        a.i18nFormat.addLookupKeys(g, l, n, e, s);
                                    else
                                        f && (i = a.pluralResolver.getSuffix(n, s.count)),
                                        f && p && g.push(c + i),
                                        p && g.push(c += "".concat(a.options.contextSeparator).concat(s.context)),
                                        f && g.push(c += i);
                                    for (; u = g.pop(); )
                                        a.isValidLookup(t) || (r = u,
                                        t = a.getResource(n, e, u, s))
                                }
                            }))
                        })
                    }
                }),
                {
                    res: t,
                    usedKey: n,
                    exactUsedKey: r,
                    usedLng: o,
                    usedNS: i
                }
            }
        }, {
            key: "isValidLookup",
            value: function(e) {
                return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
            }
        }, {
            key: "getResource",
            value: function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r)
            }
        }]),
        n
    }();
    function L(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    var N = function() {
        function e(t) {
            o(this, e),
            this.options = t,
            this.whitelist = this.options.whitelist || !1,
            this.logger = h.create("languageUtils")
        }
        return a(e, [{
            key: "getScriptPartFromCode",
            value: function(e) {
                if (!e || e.indexOf("-") < 0)
                    return null;
                var t = e.split("-");
                return 2 === t.length ? null : (t.pop(),
                this.formatLanguageCode(t.join("-")))
            }
        }, {
            key: "getLanguagePartFromCode",
            value: function(e) {
                if (!e || e.indexOf("-") < 0)
                    return e;
                var t = e.split("-");
                return this.formatLanguageCode(t[0])
            }
        }, {
            key: "formatLanguageCode",
            value: function(e) {
                if ("string" == typeof e && e.indexOf("-") > -1) {
                    var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"]
                      , n = e.split("-");
                    return this.options.lowerCaseLng ? n = n.map(function(e) {
                        return e.toLowerCase()
                    }) : 2 === n.length ? (n[0] = n[0].toLowerCase(),
                    n[1] = n[1].toUpperCase(),
                    t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = L(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(),
                    2 === n[1].length && (n[1] = n[1].toUpperCase()),
                    "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                    t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = L(n[1].toLowerCase())),
                    t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = L(n[2].toLowerCase()))),
                    n.join("-")
                }
                return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
            }
        }, {
            key: "isWhitelisted",
            value: function(e) {
                return ("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (e = this.getLanguagePartFromCode(e)),
                !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(e) > -1
            }
        }, {
            key: "getFallbackCodes",
            value: function(e, t) {
                if (!e)
                    return [];
                if ("string" == typeof e && (e = [e]),
                "[object Array]" === Object.prototype.toString.apply(e))
                    return e;
                if (!t)
                    return e.default || [];
                var n = e[t];
                return n || (n = e[this.getScriptPartFromCode(t)]),
                n || (n = e[this.formatLanguageCode(t)]),
                n || (n = e.default),
                n || []
            }
        }, {
            key: "toResolveHierarchy",
            value: function(e, t) {
                var n = this
                  , r = this.getFallbackCodes(t || this.options.fallbackLng || [], e)
                  , o = []
                  , i = function(e) {
                    e && (n.isWhitelisted(e) ? o.push(e) : n.logger.warn("rejecting non-whitelisted language code: ".concat(e)))
                };
                return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)),
                "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)),
                "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" == typeof e && i(this.formatLanguageCode(e)),
                r.forEach(function(e) {
                    o.indexOf(e) < 0 && i(n.formatLanguageCode(e))
                }),
                o
            }
        }]),
        e
    }()
      , C = [{
        lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
        nr: [1, 2],
        fc: 1
    }, {
        lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
        nr: [1, 2],
        fc: 2
    }, {
        lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
        nr: [1],
        fc: 3
    }, {
        lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
        nr: [1, 2, 5],
        fc: 4
    }, {
        lngs: ["ar"],
        nr: [0, 1, 2, 3, 11, 100],
        fc: 5
    }, {
        lngs: ["cs", "sk"],
        nr: [1, 2, 5],
        fc: 6
    }, {
        lngs: ["csb", "pl"],
        nr: [1, 2, 5],
        fc: 7
    }, {
        lngs: ["cy"],
        nr: [1, 2, 3, 8],
        fc: 8
    }, {
        lngs: ["fr"],
        nr: [1, 2],
        fc: 9
    }, {
        lngs: ["ga"],
        nr: [1, 2, 3, 7, 11],
        fc: 10
    }, {
        lngs: ["gd"],
        nr: [1, 2, 3, 20],
        fc: 11
    }, {
        lngs: ["is"],
        nr: [1, 2],
        fc: 12
    }, {
        lngs: ["jv"],
        nr: [0, 1],
        fc: 13
    }, {
        lngs: ["kw"],
        nr: [1, 2, 3, 4],
        fc: 14
    }, {
        lngs: ["lt"],
        nr: [1, 2, 10],
        fc: 15
    }, {
        lngs: ["lv"],
        nr: [1, 2, 0],
        fc: 16
    }, {
        lngs: ["mk"],
        nr: [1, 2],
        fc: 17
    }, {
        lngs: ["mnk"],
        nr: [0, 1, 2],
        fc: 18
    }, {
        lngs: ["mt"],
        nr: [1, 2, 11, 20],
        fc: 19
    }, {
        lngs: ["or"],
        nr: [2, 1],
        fc: 2
    }, {
        lngs: ["ro"],
        nr: [1, 2, 20],
        fc: 20
    }, {
        lngs: ["sl"],
        nr: [5, 1, 2, 3],
        fc: 21
    }, {
        lngs: ["he"],
        nr: [1, 2, 20, 21],
        fc: 22
    }]
      , E = {
        1: function(e) {
            return Number(e > 1)
        },
        2: function(e) {
            return Number(1 != e)
        },
        3: function(e) {
            return 0
        },
        4: function(e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
        },
        5: function(e) {
            return Number(0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
        },
        6: function(e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
        },
        7: function(e) {
            return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
        },
        8: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
        },
        9: function(e) {
            return Number(e >= 2)
        },
        10: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
        },
        11: function(e) {
            return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
        },
        12: function(e) {
            return Number(e % 10 != 1 || e % 100 == 11)
        },
        13: function(e) {
            return Number(0 !== e)
        },
        14: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
        },
        15: function(e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
        },
        16: function(e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
        },
        17: function(e) {
            return Number(1 == e || e % 10 == 1 ? 0 : 1)
        },
        18: function(e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2)
        },
        19: function(e) {
            return Number(1 == e ? 0 : 0 === e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
        },
        20: function(e) {
            return Number(1 == e ? 0 : 0 === e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
        },
        21: function(e) {
            return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
        },
        22: function(e) {
            return Number(1 === e ? 0 : 2 === e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
        }
    };
    var P = function() {
        function e(t) {
            var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            o(this, e),
            this.languageUtils = t,
            this.options = r,
            this.logger = h.create("pluralResolver"),
            this.rules = (n = {},
            C.forEach(function(e) {
                e.lngs.forEach(function(t) {
                    n[t] = {
                        numbers: e.nr,
                        plurals: E[e.fc]
                    }
                })
            }),
            n)
        }
        return a(e, [{
            key: "addRule",
            value: function(e, t) {
                this.rules[e] = t
            }
        }, {
            key: "getRule",
            value: function(e) {
                return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
            }
        }, {
            key: "needsPlural",
            value: function(e) {
                var t = this.getRule(e);
                return t && t.numbers.length > 1
            }
        }, {
            key: "getPluralFormsOfKey",
            value: function(e, t) {
                var n = this
                  , r = []
                  , o = this.getRule(e);
                return o ? (o.numbers.forEach(function(o) {
                    var i = n.getSuffix(e, o);
                    r.push("".concat(t).concat(i))
                }),
                r) : r
            }
        }, {
            key: "getSuffix",
            value: function(e, t) {
                var n = this
                  , r = this.getRule(e);
                if (r) {
                    var o = r.noAbs ? r.plurals(t) : r.plurals(Math.abs(t))
                      , i = r.numbers[o];
                    this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] && (2 === i ? i = "plural" : 1 === i && (i = ""));
                    var a = function() {
                        return n.options.prepend && i.toString() ? n.options.prepend + i.toString() : i.toString()
                    };
                    return "v1" === this.options.compatibilityJSON ? 1 === i ? "" : "number" == typeof i ? "_plural_".concat(i.toString()) : a() : "v2" === this.options.compatibilityJSON ? a() : this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] ? a() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString()
                }
                return this.logger.warn("no plural rule found for: ".concat(e)),
                ""
            }
        }]),
        e
    }()
      , F = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o(this, e),
            this.logger = h.create("interpolator"),
            this.options = t,
            this.format = t.interpolation && t.interpolation.format || function(e) {
                return e
            }
            ,
            this.init(t)
        }
        return a(e, [{
            key: "init",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e.interpolation || (e.interpolation = {
                    escapeValue: !0
                });
                var t = e.interpolation;
                this.escape = void 0 !== t.escape ? t.escape : w,
                this.escapeValue = void 0 === t.escapeValue || t.escapeValue,
                this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape,
                this.prefix = t.prefix ? x(t.prefix) : t.prefixEscaped || "{{",
                this.suffix = t.suffix ? x(t.suffix) : t.suffixEscaped || "}}",
                this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",",
                this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-",
                this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "",
                this.nestingPrefix = t.nestingPrefix ? x(t.nestingPrefix) : t.nestingPrefixEscaped || x("$t("),
                this.nestingSuffix = t.nestingSuffix ? x(t.nestingSuffix) : t.nestingSuffixEscaped || x(")"),
                this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3,
                this.resetRegExp()
            }
        }, {
            key: "reset",
            value: function() {
                this.options && this.init(this.options)
            }
        }, {
            key: "resetRegExp",
            value: function() {
                var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                this.regexp = new RegExp(e,"g");
                var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                this.regexpUnescape = new RegExp(t,"g");
                var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                this.nestingRegexp = new RegExp(n,"g")
            }
        }, {
            key: "interpolate",
            value: function(e, t, n, o) {
                var i, a, s, u = this, l = r({}, this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, t);
                function c(e) {
                    return e.replace(/\$/g, "$$$$")
                }
                var f = function(e) {
                    if (e.indexOf(u.formatSeparator) < 0)
                        return k(l, e);
                    var t = e.split(u.formatSeparator)
                      , r = t.shift().trim()
                      , o = t.join(u.formatSeparator).trim();
                    return u.format(k(l, r), o, n)
                };
                this.resetRegExp();
                var p = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler;
                for (s = 0; i = this.regexpUnescape.exec(e); ) {
                    if (void 0 === (a = f(i[1].trim())))
                        if ("function" == typeof p) {
                            var g = p(e, i, o);
                            a = "string" == typeof g ? g : ""
                        } else
                            this.logger.warn("missed to pass in variable ".concat(i[1], " for interpolating ").concat(e)),
                            a = "";
                    else
                        "string" == typeof a || this.useRawValueToEscape || (a = y(a));
                    if (e = e.replace(i[0], c(a)),
                    this.regexpUnescape.lastIndex = 0,
                    ++s >= this.maxReplaces)
                        break
                }
                for (s = 0; i = this.regexp.exec(e); ) {
                    if (void 0 === (a = f(i[1].trim())))
                        if ("function" == typeof p) {
                            var h = p(e, i, o);
                            a = "string" == typeof h ? h : ""
                        } else
                            this.logger.warn("missed to pass in variable ".concat(i[1], " for interpolating ").concat(e)),
                            a = "";
                    else
                        "string" == typeof a || this.useRawValueToEscape || (a = y(a));
                    if (a = this.escapeValue ? c(this.escape(a)) : c(a),
                    e = e.replace(i[0], a),
                    this.regexp.lastIndex = 0,
                    ++s >= this.maxReplaces)
                        break
                }
                return e
            }
        }, {
            key: "nest",
            value: function(e, t) {
                var n, o, i = r({}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
                function a(e, t) {
                    if (e.indexOf(",") < 0)
                        return e;
                    var n = e.split(",");
                    e = n.shift();
                    var o = n.join(",");
                    o = (o = this.interpolate(o, i)).replace(/'/g, '"');
                    try {
                        i = JSON.parse(o),
                        t && (i = r({}, t, i))
                    } catch (t) {
                        this.logger.error("failed parsing options string in nesting for key ".concat(e), t)
                    }
                    return e
                }
                for (i.applyPostProcessor = !1; n = this.nestingRegexp.exec(e); ) {
                    if ((o = t(a.call(this, n[1].trim(), i), i)) && n[0] === e && "string" != typeof o)
                        return o;
                    "string" != typeof o && (o = y(o)),
                    o || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)),
                    o = ""),
                    e = e.replace(n[0], o),
                    this.regexp.lastIndex = 0
                }
                return e
            }
        }]),
        e
    }();
    function A(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = []
              , r = !0
              , o = !1
              , i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                i = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (o)
                        throw i
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var T = function(e) {
        function t(e, n, r) {
            var i, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return o(this, t),
            i = u(this, l(t).call(this)),
            d.call(s(i)),
            i.backend = e,
            i.store = n,
            i.languageUtils = r.languageUtils,
            i.options = a,
            i.logger = h.create("backendConnector"),
            i.state = {},
            i.queue = [],
            i.backend && i.backend.init && i.backend.init(r, a.backend, a),
            i
        }
        return f(t, d),
        a(t, [{
            key: "queueLoad",
            value: function(e, t, n, r) {
                var o = this
                  , i = []
                  , a = []
                  , s = []
                  , u = [];
                return e.forEach(function(e) {
                    var r = !0;
                    t.forEach(function(t) {
                        var s = "".concat(e, "|").concat(t);
                        !n.reload && o.store.hasResourceBundle(e, t) ? o.state[s] = 2 : o.state[s] < 0 || (1 === o.state[s] ? a.indexOf(s) < 0 && a.push(s) : (o.state[s] = 1,
                        r = !1,
                        a.indexOf(s) < 0 && a.push(s),
                        i.indexOf(s) < 0 && i.push(s),
                        u.indexOf(t) < 0 && u.push(t)))
                    }),
                    r || s.push(e)
                }),
                (i.length || a.length) && this.queue.push({
                    pending: a,
                    loaded: {},
                    errors: [],
                    callback: r
                }),
                {
                    toLoad: i,
                    pending: a,
                    toLoadLanguages: s,
                    toLoadNamespaces: u
                }
            }
        }, {
            key: "loaded",
            value: function(e, t, n) {
                var r = A(e.split("|"), 2)
                  , o = r[0]
                  , i = r[1];
                t && this.emit("failedLoading", o, i, t),
                n && this.store.addResourceBundle(o, i, n),
                this.state[e] = t ? -1 : 2;
                var a = {};
                this.queue.forEach(function(n) {
                    var r, s, u, l, c, f;
                    r = n.loaded,
                    s = i,
                    l = m(r, [o], Object),
                    c = l.obj,
                    f = l.k,
                    c[f] = c[f] || [],
                    u && (c[f] = c[f].concat(s)),
                    u || c[f].push(s),
                    function(e, t) {
                        for (var n = e.indexOf(t); -1 !== n; )
                            e.splice(n, 1),
                            n = e.indexOf(t)
                    }(n.pending, e),
                    t && n.errors.push(t),
                    0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach(function(e) {
                        a[e] || (a[e] = []),
                        n.loaded[e].length && n.loaded[e].forEach(function(t) {
                            a[e].indexOf(t) < 0 && a[e].push(t)
                        })
                    }),
                    n.done = !0,
                    n.errors.length ? n.callback(n.errors) : n.callback())
                }),
                this.emit("loaded", a),
                this.queue = this.queue.filter(function(e) {
                    return !e.done
                })
            }
        }, {
            key: "read",
            value: function(e, t, n) {
                var r = this
                  , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                  , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250
                  , a = arguments.length > 5 ? arguments[5] : void 0;
                return e.length ? this.backend[n](e, t, function(s, u) {
                    s && u && o < 5 ? setTimeout(function() {
                        r.read.call(r, e, t, n, o + 1, 2 * i, a)
                    }, i) : a(s, u)
                }) : a(null, {})
            }
        }, {
            key: "prepareLoading",
            value: function(e, t) {
                var n = this
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , o = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend)
                    return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
                    o && o();
                "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)),
                "string" == typeof t && (t = [t]);
                var i = this.queueLoad(e, t, r, o);
                if (!i.toLoad.length)
                    return i.pending.length || o(),
                    null;
                i.toLoad.forEach(function(e) {
                    n.loadOne(e)
                })
            }
        }, {
            key: "load",
            value: function(e, t, n) {
                this.prepareLoading(e, t, {}, n)
            }
        }, {
            key: "reload",
            value: function(e, t, n) {
                this.prepareLoading(e, t, {
                    reload: !0
                }, n)
            }
        }, {
            key: "loadOne",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , r = A(e.split("|"), 2)
                  , o = r[0]
                  , i = r[1];
                this.read(o, i, "read", null, null, function(r, a) {
                    r && t.logger.warn("".concat(n, "loading namespace ").concat(i, " for language ").concat(o, " failed"), r),
                    !r && a && t.logger.log("".concat(n, "loaded namespace ").concat(i, " for language ").concat(o), a),
                    t.loaded(e, r, a)
                })
            }
        }, {
            key: "saveMissing",
            value: function(e, t, n, o, i) {
                var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                this.backend && this.backend.create && this.backend.create(e, t, n, o, null, r({}, a, {
                    isUpdate: i
                })),
                e && e[0] && this.store.addResource(e[0], t, n, o)
            }
        }]),
        t
    }();
    function V(e) {
        return "string" == typeof e.ns && (e.ns = [e.ns]),
        "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
        "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
        e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])),
        e
    }
    function U() {}
    return new (function(e) {
        function n() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
            if (o(this, n),
            e = u(this, l(n).call(this)),
            d.call(s(e)),
            e.options = V(t),
            e.services = {},
            e.logger = h,
            e.modules = {
                external: []
            },
            r && !e.isInitialized && !t.isClone) {
                if (!e.options.initImmediate)
                    return e.init(t, r),
                    u(e, s(e));
                setTimeout(function() {
                    e.init(t, r)
                }, 0)
            }
            return e
        }
        return f(n, d),
        a(n, [{
            key: "init",
            value: function() {
                var e = this
                  , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , o = arguments.length > 1 ? arguments[1] : void 0;
                function i(e) {
                    return e ? "function" == typeof e ? new e : e : null
                }
                if ("function" == typeof n && (o = n,
                n = {}),
                this.options = r({}, {
                    debug: !1,
                    initImmediate: !0,
                    ns: ["translation"],
                    defaultNS: ["translation"],
                    fallbackLng: ["dev"],
                    fallbackNS: !1,
                    whitelist: !1,
                    nonExplicitWhitelist: !1,
                    load: "all",
                    preload: !1,
                    simplifyPluralSuffix: !0,
                    keySeparator: ".",
                    nsSeparator: ":",
                    pluralSeparator: "_",
                    contextSeparator: "_",
                    partialBundledLanguages: !1,
                    saveMissing: !1,
                    updateMissing: !1,
                    saveMissingTo: "fallback",
                    saveMissingPlurals: !0,
                    missingKeyHandler: !1,
                    missingInterpolationHandler: !1,
                    postProcess: !1,
                    returnNull: !0,
                    returnEmptyString: !0,
                    returnObjects: !1,
                    joinArrays: !1,
                    returnedObjectHandler: !1,
                    parseMissingKeyHandler: !1,
                    appendNamespaceToMissingKey: !1,
                    appendNamespaceToCIMode: !1,
                    overloadTranslationOptionHandler: function(e) {
                        var n = {};
                        if ("object" === t(e[1]) && (n = e[1]),
                        "string" == typeof e[1] && (n.defaultValue = e[1]),
                        "string" == typeof e[2] && (n.tDescription = e[2]),
                        "object" === t(e[2]) || "object" === t(e[3])) {
                            var r = e[3] || e[2];
                            Object.keys(r).forEach(function(e) {
                                n[e] = r[e]
                            })
                        }
                        return n
                    },
                    interpolation: {
                        escapeValue: !0,
                        format: function(e, t, n) {
                            return e
                        },
                        prefix: "{{",
                        suffix: "}}",
                        formatSeparator: ",",
                        unescapePrefix: "-",
                        nestingPrefix: "$t(",
                        nestingSuffix: ")",
                        maxReplaces: 1e3
                    }
                }, this.options, V(n)),
                this.format = this.options.interpolation.format,
                o || (o = U),
                !this.options.isClone) {
                    this.modules.logger ? h.init(i(this.modules.logger), this.options) : h.init(null, this.options);
                    var a = new N(this.options);
                    this.store = new O(this.options.resources,this.options);
                    var s = this.services;
                    s.logger = h,
                    s.resourceStore = this.store,
                    s.languageUtils = a,
                    s.pluralResolver = new P(a,{
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix
                    }),
                    s.interpolator = new F(this.options),
                    s.backendConnector = new T(i(this.modules.backend),s.resourceStore,s,this.options),
                    s.backendConnector.on("*", function(t) {
                        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                            r[o - 1] = arguments[o];
                        e.emit.apply(e, [t].concat(r))
                    }),
                    this.modules.languageDetector && (s.languageDetector = i(this.modules.languageDetector),
                    s.languageDetector.init(s, this.options.detection, this.options)),
                    this.modules.i18nFormat && (s.i18nFormat = i(this.modules.i18nFormat),
                    s.i18nFormat.init && s.i18nFormat.init(this)),
                    this.translator = new j(this.services,this.options),
                    this.translator.on("*", function(t) {
                        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                            r[o - 1] = arguments[o];
                        e.emit.apply(e, [t].concat(r))
                    }),
                    this.modules.external.forEach(function(t) {
                        t.init && t.init(e)
                    })
                }
                ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(function(t) {
                    e[t] = function() {
                        var n;
                        return (n = e.store)[t].apply(n, arguments)
                    }
                });
                var u = v()
                  , l = function() {
                    e.changeLanguage(e.options.lng, function(t, n) {
                        e.isInitialized = !0,
                        e.logger.log("initialized", e.options),
                        e.emit("initialized", e.options),
                        u.resolve(n),
                        o(t, n)
                    })
                };
                return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0),
                u
            }
        }, {
            key: "loadResources",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U;
                if (!this.options.resources || this.options.partialBundledLanguages) {
                    if (this.language && "cimode" === this.language.toLowerCase())
                        return t();
                    var n = []
                      , r = function(t) {
                        t && e.services.languageUtils.toResolveHierarchy(t).forEach(function(e) {
                            n.indexOf(e) < 0 && n.push(e)
                        })
                    };
                    if (this.language)
                        r(this.language);
                    else
                        this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(e) {
                            return r(e)
                        });
                    this.options.preload && this.options.preload.forEach(function(e) {
                        return r(e)
                    }),
                    this.services.backendConnector.load(n, this.options.ns, t)
                } else
                    t(null)
            }
        }, {
            key: "reloadResources",
            value: function(e, t, n) {
                var r = v();
                return e || (e = this.languages),
                t || (t = this.options.ns),
                n || (n = U),
                this.services.backendConnector.reload(e, t, function(e) {
                    r.resolve(),
                    n(e)
                }),
                r
            }
        }, {
            key: "use",
            value: function(e) {
                return "backend" === e.type && (this.modules.backend = e),
                ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e),
                "languageDetector" === e.type && (this.modules.languageDetector = e),
                "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                "postProcessor" === e.type && R.addPostProcessor(e),
                "3rdParty" === e.type && this.modules.external.push(e),
                this
            }
        }, {
            key: "changeLanguage",
            value: function(e, t) {
                var n = this
                  , r = v();
                this.emit("languageChanging", e);
                var o = function(e) {
                    e && (n.language = e,
                    n.languages = n.services.languageUtils.toResolveHierarchy(e),
                    n.translator.language || n.translator.changeLanguage(e),
                    n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(e)),
                    n.loadResources(function(o) {
                        !function(e, o) {
                            n.translator.changeLanguage(o),
                            o && (n.emit("languageChanged", o),
                            n.logger.log("languageChanged", o)),
                            r.resolve(function() {
                                return n.t.apply(n, arguments)
                            }),
                            t && t(e, function() {
                                return n.t.apply(n, arguments)
                            })
                        }(o, e)
                    })
                };
                return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(o) : o(e) : o(this.services.languageDetector.detect()),
                r
            }
        }, {
            key: "getFixedT",
            value: function(e, n) {
                var o = this
                  , i = function e(n, i) {
                    var a;
                    if ("object" !== t(i)) {
                        for (var s = arguments.length, u = new Array(s > 2 ? s - 2 : 0), l = 2; l < s; l++)
                            u[l - 2] = arguments[l];
                        a = o.options.overloadTranslationOptionHandler([n, i].concat(u))
                    } else
                        a = r({}, i);
                    return a.lng = a.lng || e.lng,
                    a.lngs = a.lngs || e.lngs,
                    a.ns = a.ns || e.ns,
                    o.t(n, a)
                };
                return "string" == typeof e ? i.lng = e : i.lngs = e,
                i.ns = n,
                i
            }
        }, {
            key: "t",
            value: function() {
                var e;
                return this.translator && (e = this.translator).translate.apply(e, arguments)
            }
        }, {
            key: "exists",
            value: function() {
                var e;
                return this.translator && (e = this.translator).exists.apply(e, arguments)
            }
        }, {
            key: "setDefaultNamespace",
            value: function(e) {
                this.options.defaultNS = e
            }
        }, {
            key: "loadNamespaces",
            value: function(e, t) {
                var n = this
                  , r = v();
                return this.options.ns ? ("string" == typeof e && (e = [e]),
                e.forEach(function(e) {
                    n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                }),
                this.loadResources(function(e) {
                    r.resolve(),
                    t && t(e)
                }),
                r) : (t && t(),
                Promise.resolve())
            }
        }, {
            key: "loadLanguages",
            value: function(e, t) {
                var n = v();
                "string" == typeof e && (e = [e]);
                var r = this.options.preload || []
                  , o = e.filter(function(e) {
                    return r.indexOf(e) < 0
                });
                return o.length ? (this.options.preload = r.concat(o),
                this.loadResources(function(e) {
                    n.resolve(),
                    t && t(e)
                }),
                n) : (t && t(),
                Promise.resolve())
            }
        }, {
            key: "dir",
            value: function(e) {
                if (e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language),
                !e)
                    return "rtl";
                return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr"
            }
        }, {
            key: "createInstance",
            value: function() {
                return new n(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},arguments.length > 1 ? arguments[1] : void 0)
            }
        }, {
            key: "cloneInstance",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U
                  , i = r({}, this.options, t, {
                    isClone: !0
                })
                  , a = new n(i);
                return ["store", "services", "language"].forEach(function(t) {
                    a[t] = e[t]
                }),
                a.translator = new j(a.services,a.options),
                a.translator.on("*", function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    a.emit.apply(a, [e].concat(n))
                }),
                a.init(i, o),
                a.translator.options = a.options,
                a
            }
        }]),
        n
    }())
});

// i18next-xhr-backend
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).i18nextXHRBackend = e()
}(this, function() {
    "use strict";
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1,
            o.configurable = !0,
            "value"in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o)
        }
    }
    var e = []
      , n = e.forEach
      , o = e.slice;
    function i(t) {
        return n.call(o.call(arguments, 1), function(e) {
            if (e)
                for (var n in e)
                    void 0 === t[n] && (t[n] = e[n])
        }),
        t
    }
    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function(t) {
            return r(t)
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : r(t)
        }
        )(t)
    }
    function s(t, e) {
        if (e && "object" === a(e)) {
            var n = ""
              , o = encodeURIComponent;
            for (var i in e)
                n += "&" + o(i) + "=" + o(e[i]);
            if (!n)
                return t;
            t = t + (-1 !== t.indexOf("?") ? "&" : "?") + n.slice(1)
        }
        return t
    }
    function l(t, e, n, o, i) {
        o && "object" === a(o) && (i || (o._t = new Date),
        o = s("", o).slice(1)),
        e.queryStringParams && (t = s(t, e.queryStringParams));
        try {
            var r;
            (r = XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP.3.0")).open(o ? "POST" : "GET", t, 1),
            e.crossDomain || r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            r.withCredentials = !!e.withCredentials,
            o && r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
            r.overrideMimeType && r.overrideMimeType("application/json");
            var l = e.customHeaders;
            if (l = "function" == typeof l ? l() : l)
                for (var u in l)
                    r.setRequestHeader(u, l[u]);
            r.onreadystatechange = function() {
                r.readyState > 3 && n && n(r.responseText, r)
            }
            ,
            r.send(o)
        } catch (t) {
            console && console.log(t)
        }
    }
    function u() {
        return {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
            addPath: "/locales/add/{{lng}}/{{ns}}",
            allowMultiLoading: !1,
            parse: JSON.parse,
            parsePayload: function(t, e, n) {
                return function(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n,
                    t
                }({}, e, n || "")
            },
            crossDomain: !1,
            ajax: l
        }
    }
    var c = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.init(t, n),
            this.type = "backend"
        }
        var n, o, r;
        return n = e,
        (o = [{
            key: "init",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.services = t,
                this.options = i(e, this.options || {}, u())
            }
        }, {
            key: "readMulti",
            value: function(t, e, n) {
                var o = this.options.loadPath;
                "function" == typeof this.options.loadPath && (o = this.options.loadPath(t, e));
                var i = this.services.interpolator.interpolate(o, {
                    lng: t.join("+"),
                    ns: e.join("+")
                });
                this.loadUrl(i, n)
            }
        }, {
            key: "read",
            value: function(t, e, n) {
                var o = this.options.loadPath;
                "function" == typeof this.options.loadPath && (o = this.options.loadPath([t], [e]));
                var i = this.services.interpolator.interpolate(o, {
                    lng: t,
                    ns: e
                });
                this.loadUrl(i, n)
            }
        }, {
            key: "loadUrl",
            value: function(t, e) {
                var n = this;
                this.options.ajax(t, this.options, function(o, i) {
                    if (i.status >= 500 && i.status < 600)
                        return e("failed loading " + t, !0);
                    if (i.status >= 400 && i.status < 500)
                        return e("failed loading " + t, !1);
                    var r, a;
                    try {
                        r = n.options.parse(o, t)
                    } catch (e) {
                        a = "failed parsing " + t + " to json"
                    }
                    if (a)
                        return e(a, !1);
                    e(null, r)
                })
            }
        }, {
            key: "create",
            value: function(t, e, n, o) {
                var i = this;
                "string" == typeof t && (t = [t]);
                var r = this.options.parsePayload(e, n, o);
                t.forEach(function(t) {
                    var n = i.services.interpolator.interpolate(i.options.addPath, {
                        lng: t,
                        ns: e
                    });
                    i.options.ajax(n, i.options, function(t, e) {}, r)
                })
            }
        }]) && t(n.prototype, o),
        r && t(n, r),
        e
    }();
    return c.type = "backend",
    c
});

// Language detector i18n
!function(e, o) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : e.i18nextBrowserLanguageDetector = o()
}(this, function() {
    "use strict";
    function e(e) {
        return a.call(i.call(arguments, 1), function(o) {
            if (o)
                for (var t in o)
                    void 0 === e[t] && (e[t] = o[t])
        }),
        e
    }
    function o(e, o) {
        if (!(e instanceof o))
            throw new TypeError("Cannot call a class as a function")
    }
    function t() {
        return {
            order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
            lookupQuerystring: "lng",
            lookupCookie: "i18next",
            lookupLocalStorage: "i18nextLng",
            caches: ["localStorage"],
            excludeCacheFor: ["cimode"]
        }
    }
    var n = []
      , a = n.forEach
      , i = n.slice
      , r = {
        create: function(e, o, t, n) {
            var a = void 0;
            if (t) {
                var i = new Date;
                i.setTime(i.getTime() + 60 * t * 1e3),
                a = "; expires=" + i.toGMTString()
            } else
                a = "";
            n = n ? "domain=" + n + ";" : "",
            document.cookie = e + "=" + o + a + ";" + n + "path=/"
        },
        read: function(e) {
            for (var o = e + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                for (var a = t[n]; " " === a.charAt(0); )
                    a = a.substring(1, a.length);
                if (0 === a.indexOf(o))
                    return a.substring(o.length, a.length)
            }
            return null
        },
        remove: function(e) {
            this.create(e, "", -1)
        }
    }
      , u = {
        name: "cookie",
        lookup: function(e) {
            var o = void 0;
            if (e.lookupCookie && "undefined" != typeof document) {
                var t = r.read(e.lookupCookie);
                t && (o = t)
            }
            return o
        },
        cacheUserLanguage: function(e, o) {
            o.lookupCookie && "undefined" != typeof document && r.create(o.lookupCookie, e, o.cookieMinutes, o.cookieDomain)
        }
    }
      , c = {
        name: "querystring",
        lookup: function(e) {
            var o = void 0;
            if ("undefined" != typeof window)
                for (var t = window.location.search.substring(1), n = t.split("&"), a = 0; a < n.length; a++) {
                    var i = n[a].indexOf("=");
                    if (i > 0) {
                        var r = n[a].substring(0, i);
                        r === e.lookupQuerystring && (o = n[a].substring(i + 1))
                    }
                }
            return o
        }
    }
      , l = void 0;
    try {
        l = "undefined" !== window && null !== window.localStorage;
        window.localStorage.setItem("i18next.translate.boo", "foo"),
        window.localStorage.removeItem("i18next.translate.boo")
    } catch (e) {
        l = !1
    }
    var s = {
        name: "localStorage",
        lookup: function(e) {
            var o = void 0;
            if (e.lookupLocalStorage && l) {
                var t = window.localStorage.getItem(e.lookupLocalStorage);
                t && (o = t)
            }
            return o
        },
        cacheUserLanguage: function(e, o) {
            o.lookupLocalStorage && l && window.localStorage.setItem(o.lookupLocalStorage, e)
        }
    }
      , d = {
        name: "navigator",
        lookup: function(e) {
            var o = [];
            if ("undefined" != typeof navigator) {
                if (navigator.languages)
                    for (var t = 0; t < navigator.languages.length; t++)
                        o.push(navigator.languages[t]);
                navigator.userLanguage && o.push(navigator.userLanguage),
                navigator.language && o.push(navigator.language)
            }
            return o.length > 0 ? o : void 0
        }
    }
      , f = {
        name: "htmlTag",
        lookup: function(e) {
            var o = void 0
              , t = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
            return t && "function" == typeof t.getAttribute && (o = t.getAttribute("lang")),
            o
        }
    }
      , g = {
        name: "path",
        lookup: function(e) {
            var o = void 0;
            if ("undefined" != typeof window) {
                var t = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                if (t instanceof Array)
                    if ("number" == typeof e.lookupFromPathIndex) {
                        if ("string" != typeof t[e.lookupFromPathIndex])
                            return;
                        o = t[e.lookupFromPathIndex].replace("/", "")
                    } else
                        o = t[0].replace("/", "")
            }
            return o
        }
    }
      , p = {
        name: "subdomain",
        lookup: function(e) {
            var o = void 0;
            if ("undefined" != typeof window) {
                var t = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
                t instanceof Array && (o = "number" == typeof e.lookupFromSubdomainIndex ? t[e.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : t[0].replace("http://", "").replace("https://", "").replace(".", ""))
            }
            return o
        }
    }
      , h = function() {
        function e(e, o) {
            for (var t = 0; t < o.length; t++) {
                var n = o[t];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(o, t, n) {
            return t && e(o.prototype, t),
            n && e(o, n),
            o
        }
    }()
      , v = function() {
        function n(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            o(this, n),
            this.type = "languageDetector",
            this.detectors = {},
            this.init(e, t)
        }
        return h(n, [{
            key: "init",
            value: function(o) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                this.services = o,
                this.options = e(n, this.options || {}, t()),
                this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
                this.i18nOptions = a,
                this.addDetector(u),
                this.addDetector(c),
                this.addDetector(s),
                this.addDetector(d),
                this.addDetector(f),
                this.addDetector(g),
                this.addDetector(p)
            }
        }, {
            key: "addDetector",
            value: function(e) {
                this.detectors[e.name] = e
            }
        }, {
            key: "detect",
            value: function(e) {
                var o = this;
                e || (e = this.options.order);
                var t = [];
                e.forEach(function(e) {
                    if (o.detectors[e]) {
                        var n = o.detectors[e].lookup(o.options);
                        n && "string" == typeof n && (n = [n]),
                        n && (t = t.concat(n))
                    }
                });
                var n = void 0;
                if (t.forEach(function(e) {
                    if (!n) {
                        var t = o.services.languageUtils.formatLanguageCode(e);
                        o.services.languageUtils.isWhitelisted(t) && (n = t)
                    }
                }),
                !n) {
                    var a = this.i18nOptions.fallbackLng;
                    "string" == typeof a && (a = [a]),
                    a || (a = []),
                    n = "[object Array]" === Object.prototype.toString.apply(a) ? a[0] : a[0] || a.default && a.default[0]
                }
                return n
            }
        }, {
            key: "cacheUserLanguage",
            value: function(e, o) {
                var t = this;
                o || (o = this.options.caches),
                o && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || o.forEach(function(o) {
                    t.detectors[o] && t.detectors[o].cacheUserLanguage(e, t.options)
                }))
            }
        }]),
        n
    }();
    return v.type = "languageDetector",
    v
});

// I18n Jquery
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.jqueryI18next = e()
}(this, function() {
    "use strict";
    function t(t, a) {
        function i(n, a, i) {
            function r(t, n) {
                return f.parseDefaultValueFromContent ? e({}, t, {
                    defaultValue: n
                }) : t
            }
            if (0 !== a.length) {
                var o = "text";
                if (0 === a.indexOf("[")) {
                    var l = a.split("]");
                    a = l[1],
                    o = l[0].substr(1, l[0].length - 1)
                }
                if (a.indexOf(";") === a.length - 1 && (a = a.substr(0, a.length - 2)),
                "html" === o)
                    n.html(t.t(a, r(i, n.html())));
                else if ("text" === o)
                    n.text(t.t(a, r(i, n.text())));
                else if ("prepend" === o)
                    n.prepend(t.t(a, r(i, n.html())));
                else if ("append" === o)
                    n.append(t.t(a, r(i, n.html())));
                else if (0 === o.indexOf("data-")) {
                    var s = o.substr("data-".length)
                      , d = t.t(a, r(i, n.data(s)));
                    n.data(s, d),
                    n.attr(o, d)
                } else
                    n.attr(o, t.t(a, r(i, n.attr(o))))
            }
        }
        function r(t, n) {
            var r = t.attr(f.selectorAttr);
            if (r || void 0 === r || !1 === r || (r = t.text() || t.val()),
            r) {
                var o = t
                  , l = t.data(f.targetAttr);
                if (l && (o = t.find(l) || t),
                n || !0 !== f.useOptionsAttr || (n = t.data(f.optionsAttr)),
                n = n || {},
                r.indexOf(";") >= 0) {
                    var s = r.split(";");
                    a.each(s, function(t, e) {
                        "" !== e && i(o, e.trim(), n)
                    })
                } else
                    i(o, r, n);
                if (!0 === f.useOptionsAttr) {
                    var d = {};
                    d = e({
                        clone: d
                    }, n),
                    delete d.lng,
                    t.data(f.optionsAttr, d)
                }
            }
        }
        function o(t) {
            return this.each(function() {
                r(a(this), t),
                a(this).find("[" + f.selectorAttr + "]").each(function() {
                    r(a(this), t)
                })
            })
        }
        var f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        f = e({}, n, f),
        a[f.tName] = t.t.bind(t),
        a[f.i18nName] = t,
        a.fn[f.handleName] = o
    }
    var e = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
        }
        return t
    }
      , n = {
        tName: "t",
        i18nName: "i18n",
        handleName: "localize",
        selectorAttr: "data-i18n",
        targetAttr: "i18n-target",
        optionsAttr: "i18n-options",
        useOptionsAttr: !1,
        parseDefaultValueFromContent: !0
    };
    return {
        init: t
    }
});

//
