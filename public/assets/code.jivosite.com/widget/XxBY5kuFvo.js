!function() {
    "use strict";
    function e() {
        return document.currentScript ? document.currentScript : document.querySelector("script[jv-id]") || document.querySelector("script[data-jv-id]")
    }
    function t(e) {
        return e && e.match(/https?:\/\/(\S+(\.com|\.ru|\.tech))\/(widget\.js|widget\/[A-Za-z0-9]+)/)
    }
    function n(e) {
        return e && e.match(/^https?:\/\/(\S+)\/script\/widget\/([A-Za-z0-9]+)/)
    }
    function o(e) {
        return e && e.match(/https?:\/\/(\S+)\/script\/geo-widget\/([A-Za-z0-9]+)/)
    }
    function r() {
        var e = window.location && window.location.protocol;
        return -1 === ["http", "https"].indexOf(e || "") && (e = "https:"),
        e
    }
    function i() {
        return window.jivo_config && window.jivo_config.shard_id || "main"
    }
    function a() {
        return window.jivo_config && window.jivo_config.telemetry_host || null
    }
    function d(e, t, n) {
        var o;
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && (e.attachEvent("on" + t, (o = e,
        function() {
            n.call(o, window.event)
        }
        )),
        e = null)
    }
    function s(e) {
        try {
            d(window, "scroll", e),
            d(document.body, "mousemove", e)
        } catch (t) {
            e && e()
        }
    }
    function l(e, t, n) {
        if (window.removeEventListener)
            e.removeEventListener(t, n, !1);
        else {
            if (!window.detachEvent)
                return !1;
            e.detachEvent("on" + t, (function() {
                n.call(e)
            }
            ))
        }
    }
    function c(e) {
        try {
            l(window, "scroll", e),
            l(document.body, "mousemove", e)
        } catch (e) {
            console.warn(e)
        }
    }
    function u() {
        var e = navigator.userAgent.toLowerCase();
        return -1 == e.search(/google/gi) && -1 == e.search(/\+http:\/\/yandex\.com\/bots/gi) && -1 == e.search(/\+http:\/\/www\.cloudflare\.com\/always-online/gi) && -1 == e.search(/linespider\//gi)
    }
    function g(e, t, n, o, r) {
        r && r.error && (r = r.error),
        r && r instanceof Error || (r = {}),
        r.stack = r.stack || "empty",
        r.message = "Bundle init error: " + e + " error.message: " + r.message,
        r.columnNumber = o,
        r.lineNumber = n,
        r.url = t,
        window.parent.__jivoOnError(r)
    }
    var f = "loader_loaded"
      , m = "no_widget_id_or_confighost"
      , v = "error_code_1015"
      , p = "widget_deleted";
    window.__jivoOnError = function(e) {
        if (u())
            try {
                var t = window.jivo_config && window.jivo_config.err_host ? "//" + window.jivo_config.err_host + "/widget" : "//err.jivosite.com/widget"
                  , n = {
                    widget: "true",
                    widget_version: window.jivo_version,
                    level: 2,
                    url: (o = window.location,
                    o.protocol + "//" + o.host + o.pathname),
                    lineNumber: e && e.lineNumber,
                    fileName: e && e.fileName,
                    column: e && e.columnNumber,
                    full_message: e && e.stack,
                    short_message: e && e.message,
                    shard: i()
                };
                window.navigator && window.navigator.sendBeacon && navigator.sendBeacon(r() + t, JSON.stringify(n))
            } catch (e) {}
        var o
    }
    ,
    function() {
        var l = .1;
        window.__hasStorage = !1;
        try {
            localStorage.setItem("testLocalStorage", "ok"),
            localStorage.removeItem("testLocalStorage"),
            window.__hasStorage = !0
        } catch (e) {}
        function h(l, h, w, _) {
            var b = l.console;
            if (b || (b = {
                log: function() {},
                error: function() {}
            }),
            function() {
                if (l.google && l.google.translate && 0 == l.location.href.search(/(http(s?)).+\.translate\.goog/gi))
                    return !1;
                return !!l.WebSocket
            }()) {
                if (void 0 === l.jivo_magic_var) {
                    l.jivo_magic_var = !0;
                    var y, S, j, C, I, E, L, T, N, O, B, A = {
                        hasStorage: l.__hasStorage,
                        jivoLoaderVersion: w,
                        loadScript: function(e, t) {
                            var n = t || h
                              , o = n.getElementsByTagName("script")[0]
                              , r = n.createElement("script");
                            we(r),
                            o.parentNode.insertBefore(r, o).src = e
                        },
                        currentLoaderVersionCache: _,
                        scriptSrc: null
                    }, k = navigator.userAgent.toLowerCase(), W = /iPhone|iPad|iPod|Android|Windows Phone/i.test(k), x = h.createElement("iframe"), M = h.createElement("div"), H = 0, R = 0, D = 0, U = [], J = !1, q = de(), P = JSON.parse('["AF","CG","CF","GW","ER","IR","IQ","KP","LR","LB","LY","ML","CU","PS","SO","SD","SY","ZW","YE"]') || null, z = JSON.parse('["127-129-12k-12i-12c-12h","12e-12i-12e-124-12c-12h","131-12e-12l-12m-124-12b-12c","124-12g-12o-129-12m-124-12g-12c-12h","127-124-12s-12c-12s","12g-124-12k-12c-12p-12n-124-12h-124","3n-12j-124-12d-12l","12g-129-12o-129-128-12k-12i-12h"]') || null, G = !1, V = !0;
                    Se("Initialization"),
                    l.__jivoBundleOnLoad = function(e) {
                        clearTimeout(I),
                        E = e;
                        var t = ((new Date).getTime() - L) / 1e3;
                        t > 6 && se("loadTime", t);
                        se("bundleLoaded", !0),
                        se("buildNumber", y.build_number),
                        Se("Bundle is loaded"),
                        function() {
                            C = h.body.lastChild,
                            M.style && (M.style.opacity = "0",
                            M.style.visibility = "hidden",
                            M.style.width = 0,
                            M.style.height = 0,
                            M.style.overflow = "hidden");
                            M.setAttribute("id", "jivo-iframe-container"),
                            M.appendChild(x),
                            C ? C.parentNode.insertBefore(M, C.nextSibling) : h.body.appendChild(M);
                            ae()
                        }()
                    }
                    ,
                    l.__jivoBundleInit = function(e) {
                        e.loaderContext = A,
                        function() {
                            E = null;
                            var e = function(e) {
                                if (e) {
                                    var t = e.querySelectorAll && e.querySelectorAll(".js-jivo-bundle");
                                    return t && t.length > 0 ? t : e.getElementsByClassName("js-jivo-bundle")
                                }
                            }(je());
                            if (!e)
                                throw b.error("Cannot get bundle script element"),
                                new Error("Cannot get bundle script element");
                            for (var t = 0; t < e.length; t++)
                                e[t].parentNode && e[t].parentNode.removeChild(e[t]);
                            e = null
                        }()
                    }
                    ,
                    l.jivo_init = function() {
                        if (V)
                            return;
                        H = 0;
                        var e = h.createEvent("Event");
                        e.initEvent("jBeforeunload", !0, !0),
                        l.dispatchEvent(e),
                        re()
                    }
                    ,
                    l.jivo_destroy = function() {
                        H = 0;
                        var e = h.createEvent("Event");
                        e.initEvent("jBeforeunload", !0, !0),
                        l.dispatchEvent(e),
                        delete l.jivo_magic_var,
                        M && M.parentNode && M.parentNode.removeChild(M)
                    }
                    ,
                    A.getHostURL = ye,
                    A.store = q,
                    A.setInStore = se;
                    var X, F = !1, Z = function(e) {
                        try {
                            e.blockedURI && -1 !== e.blockedURI.indexOf("jivosite") && (F = !0,
                            h.removeEventListener("securitypolicyviolation", Z))
                        } catch (e) {}
                    }
                    .bind(this);
                    try {
                        d(h, "securitypolicyviolation", Z)
                    } catch (e) {}
                    ge(),
                    !(!(X = N) || !/^\d+$/.test(X) && 10 != X.length) || (N = null,
                    T = null,
                    b.error("Widget id is not valid.")),
                    ee(f, 5),
                    function() {
                        (q = de()).geoWidgetInfo.widgetId && (N = q.geoWidgetInfo.widgetId,
                        q = de(),
                        T = q.configHost);
                        se("isNewCode", J),
                        A.store = q
                    }();
                    var Y = null
                      , $ = !1;
                    O && (B = O.nonce || O.getAttribute("nonce")) && (l.jivo_cspNonce = B),
                    N && T ? (Se("widgetId:", N, "configHost:", T),
                    K(ue())) : N && T || (ee(m, 5),
                    b.error("Failed to evaluate the widgetId or configHost"))
                }
            } else
                b.log("Not supported browser");
            function K(e, t) {
                if (U.push(e),
                ++D > 4) {
                    Se("Config load limit is exceeded"),
                    A.hasStorage && localStorage.removeItem("jv_loader_info_" + N);
                    var n = new Error("Config load limit is exceeded")
                      , o = "Config urls: " + U.join(";\r\n");
                    try {
                        n.stack = o
                    } catch (e) {
                        n = new Error("Config load limit is exceeded. " + o)
                    }
                    l.__jivoOnError(n)
                } else if (Se("Loading config from", e),
                q.deletedInfo.widgetId && q.deletedInfo.widgetId === N && q.deletedInfo.resolveTime && parseInt(q.deletedInfo.resolveTime) >= (new Date).getTime())
                    b.error("This widget is permanently removed");
                else {
                    var i = new XMLHttpRequest;
                    i.onreadystatechange = function() {
                        if (4 === i.readyState)
                            if (200 === i.status) {
                                var e = Le(_e(i));
                                e ? (Se("Config is loaded", e),
                                e.isDeleted ? ve() : t ? (e.chat_mode = t.chat_mode,
                                e.options = t.options,
                                e.botmode = t.botmode,
                                e.geoip = t.geoip,
                                e.maintenance = !!t.maintenance,
                                te(e, null)) : (e.disable_loader_void && (G = !0),
                                function(e, t) {
                                    var n = new XMLHttpRequest;
                                    function o() {
                                        return !1
                                    }
                                    n.onreadystatechange = function() {
                                        if (4 === n.readyState)
                                            if (200 === n.status) {
                                                var o = Le(_e(n));
                                                if (!o)
                                                    throw new Error("Load widget status error");
                                                var r = n.getResponseHeader("X-BotMode")
                                                  , i = n.getResponseHeader("X-GeoIP")
                                                  , a = o.agents && o.agents.length;
                                                Se("Status is loaded", o, r, i, a),
                                                e.lastStatus = o,
                                                e.botmode = "yes" === r ? "yes" : null,
                                                e.geoip = i || ";;;",
                                                e.chat_mode = a ? "online" : "offline",
                                                e.options = o.premium ? 888 : 0,
                                                o.bots && o.bots.length && (e.bots = o.bots),
                                                e.maintenance = !!o.maintenance,
                                                t(o.config_updated_ts)
                                            } else if (0 !== n.status)
                                                throw e.botmode = null,
                                                e.geoip = ";;;",
                                                e.chat_mode = "offline",
                                                e.options = 0,
                                                t(null),
                                                480 == n.status && Se("Site is under maintenance, try again later."),
                                                new Error("Load widget status error: " + n.status)
                                    }
                                    ;
                                    var i = "/configs/development/status.json"
                                      , a = o() ? i : r() + "//" + e.chat_host + "/widget/status/" + e.site_id + "/" + e.widget_id + "?rnd=" + Math.random();
                                    n.open("GET", a, !0),
                                    n.send(null)
                                }(e, (function(t) {
                                    te(e, t)
                                }
                                )))) : pe(!0)
                            } else
                                0 !== i.status && pe()
                    }
                    ,
                    i.open("GET", e, !0),
                    i.send(null)
                }
            }
            function Q(e) {
                var t = {
                    event: e,
                    widget_id: N,
                    t: (new Date).getTime(),
                    param1: "96.6.0",
                    shard: i()
                };
                if (u() && l.navigator && l.navigator.sendBeacon)
                    try {
                        var n = a()
                          , o = r();
                        o += n ? "//" + n + "/w" : "//telemetry.jivosite.com/w",
                        l.navigator.sendBeacon && navigator.sendBeacon(o, JSON.stringify(t))
                    } catch (e) {}
            }
            function ee(e, t) {
                Math.random() <= .01 * t && Q(e)
            }
            function te(e, t) {
                if (Se("checkConfig", e.config_updated_ts, t),
                e.isDeleted)
                    ve();
                else if (function() {
                    var e = navigator.userAgent.toLowerCase();
                    return -1 !== e.indexOf("msie") || -1 !== e.indexOf("trident")
                }())
                    Se("ie11 blocked");
                else {
                    if (t && e.config_updated_ts && e.config_updated_ts != t)
                        return Se("update configUpdatedTs in store", t),
                        se("configUpdatedTs", t),
                        K(ue(), e);
                    if (e.regions && !q.isChatStarted) {
                        var n = function(e) {
                            var t, n, o = e.regions, r = me(e.geoip);
                            if (o) {
                                for (var i = Object.keys(o), a = 0; a < i.length; a++)
                                    for (var d = o[i[a]], s = 0; s < d.length; s++)
                                        if (1 != d.length || "default" !== d[s]) {
                                            var l = me(d[s]);
                                            if (r.country === l.country) {
                                                if (r.region === l.region)
                                                    return fe(i[a], d[s], e.geoip);
                                                n || l.region || (n = fe(i[a], d[s], e.geoip))
                                            }
                                        } else
                                            t = i[a];
                                if (n)
                                    return n;
                                if (t)
                                    return fe(t, "default", e.geoip)
                            }
                        }(e);
                        if (n.widgetId !== N)
                            return Se("Wrong geo-widget widgetId", N),
                            se("geoWidgetInfo", n),
                            N = n.widgetId,
                            void K(ue())
                    }
                    if ((Y = e.ab_segment) && Y.name && Y.host && Y.staticHost && 1 !== e.site_id)
                        if (Se("AB-testing segmentation is enabled in config"),
                        $ = function(e, t) {
                            var n = q.abTesting
                              , o = !1;
                            o = n && n.name === e.name ? n.match : function(e, t) {
                                if (Se('Check for criteria match of test "' + e.name + '"'),
                                e.device) {
                                    if (!function(e) {
                                        if ("desktop" === e)
                                            return Ie() && !Ee();
                                        if ("mobile" === e)
                                            return Ee();
                                        if ("all" === e)
                                            return Ie() || Ee();
                                        return !1
                                    }(e.device))
                                        return Se('Segment "' + e.name + '" is NOT matched. Criteria: device'),
                                        !1
                                }
                                if (e.locale) {
                                    if (!(e.locale === t.locale))
                                        return Se('Segment "' + e.name + '" is NOT matched. Criteria: locale'),
                                        !1
                                }
                                if (e.percentage) {
                                    if (!(n = e.percentage,
                                    Math.random() <= .01 * n))
                                        return Se('Segment "' + e.name + '" is NOT matched. Criteria: percentage'),
                                        !1
                                }
                                var n;
                                return Se('Segment "' + e.name + '" is matched!'),
                                !0
                            }(e, t);
                            return se("abTesting", {
                                name: e.name,
                                match: o
                            }),
                            o
                        }(Y, e),
                        $) {
                            Se("Ab-testing segment match! Segment:", Y.name);
                            var o = "//" + Y.host;
                            Se('Setting new base_url. Was: "' + e.base_url + '". New: "' + o + '".'),
                            e.base_url = o
                        } else
                            Se("Ab-testing segment is NOT matched");
                    else
                        se("abTesting", null),
                        Se("AB-testing segmentation is NOT enabled in config"),
                        se("configHost", T);
                    !function(e) {
                        if (se("log", !!e.logs),
                        l.jivo_config = y = e,
                        function() {
                            if (y.host_blacklist)
                                for (var e = y.host_blacklist.split(","), t = 0; t < e.length; t++)
                                    if (l.location.host.indexOf(e[t].replace(" ", "")) >= 0)
                                        return !0;
                            return !1
                        }())
                            throw Se("Host is blacklisted", l.location.host),
                            new Error("Placing widget is forbidden on " + l.top.location.host);
                        if (t = y.geoip.split(";")[0],
                        P.indexOf(t) >= 0)
                            return b.log("[Jivo]: Service unavailable for country");
                        if (!e.disable_stop_words && function() {
                            var e = !1
                              , t = (d = z,
                            d.map((function(e) {
                                return e.split("-").map((function(e) {
                                    return String.fromCharCode(parseInt(e, 32) - 20)
                                }
                                )).join("")
                            }
                            )))
                              , n = h.querySelector('meta[name="description"]')
                              , o = h.querySelector('meta[name="keywords"]')
                              , r = h.title
                              , i = n && n.content ? n.content : ""
                              , a = o && o.content ? o.content : "";
                            var d;
                            (be(r, t) || be(i, t) || be(a, t)) && (e = !0);
                            return e
                        }())
                            return Q(v),
                            void Se("Init error, code 1015.");
                        if (W && y.disable_mobile)
                            return void Se("Mobile widget is disabled");
                        var t;
                        "complete" == h.readyState ? (Se("DOM Ready Complete."),
                        ne()) : q.bundleLoaded && q.buildNumber == y.build_number ? (Se("DOM Ready is not complete. Bundle loaded and BuildNumber is correct."),
                        "interactive" == h.readyState ? (Se("DOM Ready is interactive. Bundle loaded and BuildNumber is correct."),
                        ne()) : (Se("DOM Ready is not interactive. Bundle loaded and BuildNumber is correct. Add listener on DOMContentLoaded."),
                        d(l, "DOMContentLoaded", ne))) : (Se("DOM Ready is not complete. Bundle is not loaded. Add listener on window.onload"),
                        se("bundleLoaded", !1),
                        d(l, "load", ne))
                    }(e)
                }
            }
            function ne() {
                Se("Widget initialization"),
                function() {
                    Se("Iframe initialization"),
                    x.src = G ? "" : "javascript:void(0)",
                    x.role = "presentation",
                    x.allow = "autoplay",
                    x.title = "Jivochat",
                    x.setAttribute("name", "jivo_container"),
                    x.setAttribute("id", "jivo_container"),
                    x.setAttribute("frameborder", "no"),
                    B && x.setAttribute("nonce", B);
                    l.atob && "complete" !== h.readyState ? d(l, "load", re) : re();
                    d(l, "message", (function(e) {
                        if (e && e.data && "object" == typeof e.data) {
                            var t = e.data;
                            "in_node_webkit" == t.name && (l.jivo_cobrowse = {
                                source: e.source,
                                origin: e.origin
                            }),
                            "iframe_url_changed" != t.name && "iframe_url_changed" != t || ae()
                        } else
                            y && 1 === y.logs && b && b.log && b.log("Error receive postMessage, window message event is empty.")
                    }
                    ))
                }()
            }
            function oe() {
                var e = ye();
                Se("loadBundleAfterWait", e, A),
                c(oe),
                ie(e)
            }
            function re() {
                var e = ye();
                if (!A.store.isChatStarted && y.enable_bundle_wait) {
                    Se("addWaitActions");
                    try {
                        s(oe),
                        setTimeout((function() {
                            Se("5s load", A.store),
                            l.jivo_api || oe()
                        }
                        ), 5e3)
                    } catch (t) {
                        ie(e)
                    }
                } else
                    Se("startLoadBundle", e),
                    ie(e)
            }
            function ie(e) {
                Se("Insertion of bundle code from", e);
                var t = je()
                  , n = h.createElement("script")
                  , o = function(e) {
                    return e + "/js/bundle_" + y.locale + ".js?rand=" + y.build_number
                }(e);
                L = (new Date).getTime(),
                we(n),
                n.className = "js-jivo-bundle",
                n.src = r() + o,
                A.bundleSrc = o,
                n.onerror = function() {
                    Se("loadBundle errorBundle", e),
                    h.getElementById("jcont") && function(e, t, n) {
                        if (clearTimeout(I),
                        ++R >= 3) {
                            if (Se("Bundle load retries count is exceeded"),
                            F)
                                return void b.error("Widget not loaded due CSP security policy.");
                            var o = new Error("Bundle NOT loaded. Type: " + e + (t ? ". Host: " + t : "") + (n ? ". Status code: " + n : ""));
                            return void l.__jivoOnError(o)
                        }
                        re()
                    }("errorBundle", e)
                }
                ,
                t.appendChild(n),
                V = !1
            }
            function ae() {
                if (!(H++ > 3)) {
                    if (!E)
                        return H--,
                        re();
                    try {
                        j = x.contentWindow.document
                    } catch (e) {
                        S = h.domain,
                        x.src = G ? "" : "javascript:var d=document.open();d.domain='" + S + "';void(0);",
                        j = x.contentWindow.document
                    }
                    var e = '<meta name="google" content="notranslate"><meta http-equiv="X-UA-Compatible" content="IE=edge" />'
                      , t = "";
                    try {
                        t = "window.onerror = " + g.toString() + ";"
                    } catch (e) {}
                    var n = (y && !y.disable_error_reporting ? t : "") + E
                      , o = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
                    if (!j.head || !j.body || o && G) {
                        var r = '<body class="notranslate"></body>'
                          , i = '<script type="text/javascript"' + (B ? 'nonce="' + B + '"' : "") + ">" + n + "<\/script>"
                          , a = "<head>" + e + i + "</head>";
                        j.write("<!doctype HTML>" + a + r),
                        i = null,
                        r = null,
                        a = null
                    } else {
                        j.body.class = "notranslate",
                        j.head.innerHTML = e;
                        var d = h.createElement("script");
                        d.type = "text/javascript",
                        B && d.setAttribute("nonce", B),
                        d.innerHTML = n,
                        j.head.appendChild(d)
                    }
                    j.close(),
                    n = null
                }
            }
            function de() {
                var e = {
                    isChatStarted: null,
                    geoWidgetInfo: {
                        widgetId: null,
                        clientLocation: null,
                        region: null
                    },
                    configHost: null,
                    deletedInfo: {
                        widgetId: null,
                        resolveTime: null
                    },
                    abTesting: null,
                    buildNumber: null,
                    bundleLoaded: null,
                    isNewCode: null,
                    loadTime: null,
                    log: null,
                    configUpdatedTs: null
                };
                if (A.hasStorage && (localStorage.removeItem("jv_loader_info"),
                N)) {
                    var t = Le(localStorage.getItem("jv_loader_info_" + N));
                    t && le(t, e)
                }
                return e
            }
            function se(e, t) {
                if (q[e] = t,
                A.hasStorage && N) {
                    var n = {};
                    le(q, n),
                    localStorage.setItem("jv_loader_info_" + N, (o = n,
                    l.MooTools && void 0 === JSON.stringify ? JSON.encode(o) : JSON.stringify(o)))
                }
                var o
            }
            function le(e, t) {
                Object.keys(e).forEach((function(n) {
                    (function(e) {
                        if (ce(e))
                            return !0;
                        if ("object" == typeof e) {
                            for (var t = Object.keys(e), n = 0; n < t.length; n++)
                                if (!ce(e[t[n]]))
                                    return !1;
                            return !0
                        }
                    }
                    )(e[n]) || (t[n] = e[n])
                }
                ))
            }
            function ce(e) {
                return null === e && "object" == typeof e
            }
            function ue() {
                var e = "";
                return Se("getConfigUrl", q.configUpdatedTs),
                q.configUpdatedTs && (e = "?v=" + q.configUpdatedTs),
                r() + T + "/script/widget/config/" + N + e
            }
            function ge() {
                var r = function(e) {
                    if (e)
                        return e.src;
                    try {
                        throw new Error("Get script URL")
                    } catch (e) {
                        var r = e.stack;
                        if (r) {
                            var i = t(r)
                              , a = n(r)
                              , d = o(r);
                            return i ? i[0] : a ? a[0] : d ? d[0] : null
                        }
                    }
                }(O = e());
                if (A.scriptSrc = r,
                r && r.match(/&lt;/))
                    Se("Invalid codeHost", r);
                else {
                    var i, a = t(r), d = n(r), s = o(r);
                    T || (a ? (T = "//" + a[1],
                    J = !0) : d ? T = "//" + d[1] : s && (T = "//" + s[1])),
                    N || (d && d[2] ? (N = d[2],
                    J = !1) : s && s[2] ? (N = s[2],
                    J = !1) : (J = !0,
                    O && (N = O.getAttribute("jv-id") || O.getAttribute("data-jv-id")),
                    N || (i = r && r.match(/https?:\/\/\S+\/widget\/([A-Za-z0-9]+)/),
                    N = i ? i[1] : null))),
                    Se("getWidgetIdAndConfigHost", N, T)
                }
            }
            function fe(e, t, n) {
                return {
                    widgetId: e,
                    region: t,
                    clientLocation: n
                }
            }
            function me(e) {
                if ("string" == typeof e && "" !== e) {
                    var t = e.split(";");
                    return {
                        country: t[0],
                        region: t[1],
                        city: t[2]
                    }
                }
            }
            function ve() {
                Se("Widget was removed", N),
                se("configHost", null),
                q.geoWidgetInfo.widgetId || q.isChatStarted ? (se("geoWidgetInfo", fe(null, null, null)),
                se("isChatStarted", null),
                he()) : (se("deletedInfo", {
                    widgetId: N,
                    resolveTime: ((new Date).getTime() + 864e5).toString()
                }),
                b.error("Widget " + N + " is permanently removed. Host: " + T),
                Q(p))
            }
            function pe(e) {
                Se("Config loading error:", e ? "parse" : "request"),
                se("geoWidgetInfo", fe(null, null, null)),
                se("isChatStarted", null),
                se("configHost", null),
                e || he()
            }
            function he() {
                N = null,
                T = null,
                ge(),
                K(ue())
            }
            function we(e) {
                if (e)
                    return e.type = "text/javascript",
                    e.async = !0,
                    e.charset = "UTF-8",
                    B && e.setAttribute("nonce", B),
                    e
            }
            function _e(e) {
                return e.responseType && "text" !== e.responseType ? "document" === e.responseType ? e.responseXML : e.response : e.responseText
            }
            function be(e, t) {
                for (var n = !1, o = 0; o < t.length; o++) {
                    var r = t[o].toLowerCase()
                      , i = new RegExp("([, .]|^)" + r + "([, .]|$)","gi");
                    if (e.toLowerCase().search(i) > -1) {
                        n = !0;
                        break
                    }
                }
                return n
            }
            function ye() {
                return y.base_url
            }
            function Se() {
                if (q.log) {
                    var e = Array.prototype.slice.call(arguments || []);
                    e.unshift("Loader:"),
                    b.log.apply(b, e)
                }
            }
            function je() {
                var e = h.head || h.getElementsByTagName("head")[0];
                if (!e)
                    throw new Error("Cannot get document head element");
                return e
            }
            function Ce(e) {
                return -1 !== k.indexOf(e)
            }
            function Ie() {
                return Ce("chrome") && !Ce("opr/") && "Google Inc." === l.navigator.vendor
            }
            function Ee() {
                return !Ce("windows") && Ce("android")
            }
            function Le(e) {
                try {
                    return l.MooTools && void 0 === JSON.parse ? JSON.decode(e) : JSON.parse(e)
                } catch (e) {
                    return e.message = "Config parse error: " + N + "\n\n" + e.message,
                    l.__jivoOnError(e),
                    null
                }
            }
        }
        var w = h
          , _ = null;
        if (window.__hasStorage) {
            try {
                _ = JSON.parse(localStorage.getItem("__jivoLoader"))
            } catch (e) {
                jivoLog("Loader cache parse error.")
            }
            _ && _.version > l && (w = new Function("window","document","broswerCacheLoaderVersion","currentLoaderVersionCache","(" + _.code + ")(window, document, broswerCacheLoaderVersion, currentLoaderVersionCache)"))
        }
        try {
            w(window, document, l, _ ? _.version : l)
        } catch (e) {
            e.message = e.message ? "Loader error. " + e.message : "Loader error",
            window.__jivoOnError(e),
            delete window.jivo_magic_var,
            (w = h)(window, document, l, l)
        }
    }()
}();
