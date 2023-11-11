function t(t, e, r, n) {
    Object.defineProperty(t, e, { get: r, set: n, enumerable: !0, configurable: !0 });
}
var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
    r = {},
    n = {},
    i = e.parcelRequire7e83;
function o(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function a(t, e) {
    (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
}
/*!
 * GSAP 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ null == i &&
    (((i = function (t) {
        if (t in r) return r[t].exports;
        if (t in n) {
            var e = n[t];
            delete n[t];
            var i = { id: t, exports: {} };
            return (r[t] = i), e.call(i.exports, i, i.exports), i.exports;
        }
        var o = new Error("Cannot find module '" + t + "'");
        throw ((o.code = "MODULE_NOT_FOUND"), o);
    }).register = function (t, e) {
        n[t] = e;
    }),
    (e.parcelRequire7e83 = i)),
    i.register("7Vbeu", function (e, r) {
        var n, i;
        t(
            e.exports,
            "register",
            () => n,
            (t) => (n = t)
        ),
            t(
                e.exports,
                "resolve",
                () => i,
                (t) => (i = t)
            );
        var o = {};
        (n = function (t) {
            for (var e = Object.keys(t), r = 0; r < e.length; r++) o[e[r]] = t[e[r]];
        }),
            (i = function (t) {
                var e = o[t];
                if (null == e) throw new Error("Could not resolve bundle with id " + t);
                return e;
            });
    }),
    i("7Vbeu").register(
        JSON.parse(
            '{"elBHG":"index.79999630.js","49JBQ":"https://dynamicmedia.accenture.com/is/image/accenture/00_Prism.3b80abb4?$auto-png-alpha$","2JWI4":"https://dynamicmedia.accenture.com/is/image/accenture/01_Prism.5c64154a?$auto-png-alpha$","7W3Xs":"https://dynamicmedia.accenture.com/is/image/accenture/02_Prism.3e3022c7?$auto-png-alpha$","bZokj":"https://dynamicmedia.accenture.com/is/image/accenture/03_Prism.91519ce5?$auto-png-alpha$","f6DFD":"../../../_acnmedia/thought-leadership-assets/images/all-stories/04_Prism.e8713076.png","iNi4L":"../../../_acnmedia/thought-leadership-assets/images/all-stories/05_Prism.6e4f4e69.png"}'
        )
    );
var s,
    l,
    u,
    c,
    h,
    d,
    f,
    p,
    g,
    m,
    _,
    v,
    y,
    x,
    w,
    b,
    T,
    S,
    M,
    k,
    C,
    E,
    A,
    D,
    O,
    P,
    L,
    R,
    X = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
    F = { duration: 0.5, overwrite: !1, delay: 0 },
    Y = 2 * Math.PI,
    I = Y / 4,
    N = 0,
    B = Math.sqrt,
    z = Math.cos,
    H = Math.sin,
    q = function (t) {
        return "string" == typeof t;
    },
    U = function (t) {
        return "function" == typeof t;
    },
    W = function (t) {
        return "number" == typeof t;
    },
    V = function (t) {
        return void 0 === t;
    },
    $ = function (t) {
        return "object" == typeof t;
    },
    j = function (t) {
        return !1 !== t;
    },
    G = function () {
        return "undefined" != typeof window;
    },
    Z = function (t) {
        return U(t) || q(t);
    },
    Q = ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
    K = Array.isArray,
    J = /(?:-?\.?\d|\.)+/gi,
    tt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    et = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    rt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    nt = /[+-]=-?[.\d]+/,
    it = /[^,'"\[\]\s]+/gi,
    ot = /[\d.+\-=]+(?:e[-+]\d*)*/i,
    at = {},
    st = {},
    lt = function (t) {
        return (st = Rt(t, at)) && yr;
    },
    ut = function (t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
    },
    ct = function (t, e) {
        return !e && console.warn(t);
    },
    ht = function (t, e) {
        return (t && (at[t] = e) && st && (st[t] = e)) || at;
    },
    dt = function () {
        return 0;
    },
    ft = {},
    pt = [],
    gt = {},
    mt = {},
    _t = {},
    vt = 30,
    yt = [],
    xt = "",
    wt = function (t) {
        var e,
            r,
            n = t[0];
        if (($(n) || U(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
            for (r = yt.length; r-- && !yt[r].targetTest(n); );
            e = yt[r];
        }
        for (r = t.length; r--; ) (t[r] && (t[r]._gsap || (t[r]._gsap = new Ue(t[r], e)))) || t.splice(r, 1);
        return t;
    },
    bt = function (t) {
        return t._gsap || wt(ce(t))[0]._gsap;
    },
    Tt = function (t, e, r) {
        return (r = t[e]) && U(r) ? t[e]() : (V(r) && t.getAttribute && t.getAttribute(e)) || r;
    },
    St = function (t, e) {
        return (t = t.split(",")).forEach(e) || t;
    },
    Mt = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
    },
    kt = function (t) {
        return Math.round(1e7 * t) / 1e7 || 0;
    },
    Ct = function (t, e) {
        for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
        return n < r;
    },
    Et = function () {
        var t,
            e,
            r = pt.length,
            n = pt.slice(0);
        for (gt = {}, pt.length = 0, t = 0; t < r; t++) (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    },
    At = function (t, e, r, n) {
        pt.length && Et(), t.render(e, r, n), pt.length && Et();
    },
    Dt = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(it).length < 2 ? e : q(t) ? t.trim() : t;
    },
    Ot = function (t) {
        return t;
    },
    Pt = function (t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t;
    },
    Lt = function (t, e) {
        for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
    },
    Rt = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t;
    },
    Xt = function t(e, r) {
        for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = $(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
        return e;
    },
    Ft = function (t, e) {
        var r,
            n = {};
        for (r in t) r in e || (n[r] = t[r]);
        return n;
    },
    Yt = function (t) {
        var e = t.parent || l,
            r = t.keyframes ? Lt : Pt;
        if (j(t.inherit)) for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
        return t;
    },
    It = function (t, e, r, n) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var i = e._prev,
            o = e._next;
        i ? (i._next = o) : t[r] === e && (t[r] = o), o ? (o._prev = i) : t[n] === e && (t[n] = i), (e._next = e._prev = e.parent = null);
    },
    Nt = function (t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), (t._act = 0);
    },
    Bt = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
        return t;
    },
    zt = function (t) {
        for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
        return t;
    },
    Ht = function t(e) {
        return !e || (e._ts && t(e.parent));
    },
    qt = function (t) {
        return t._repeat ? Ut(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    Ut = function (t, e) {
        var r = Math.floor((t /= e));
        return t && r === t ? r - 1 : r;
    },
    Wt = function (t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
    },
    Vt = function (t) {
        return (t._end = kt(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)));
    },
    $t = function (t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && ((t._start = kt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), Vt(t), r._dirty || Bt(r, t)), t;
    },
    jt = function (t, e) {
        var r;
        if (((e._time || (e._initted && !e._dur)) && ((r = Wt(t.rawTime(), e)), (!e._dur || ae(0, e.totalDuration(), r) - e._tTime > 1e-8) && e.render(r, !0)), Bt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)) {
            if (t._dur < t.duration()) for (r = t; r._dp; ) r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
            t._zTime = -1e-8;
        }
    },
    Gt = function (t, e, r, n) {
        return (
            e.parent && Nt(e),
            (e._start = kt((W(r) ? r : r || t !== l ? ne(t, r, e) : t._time) + e._delay)),
            (e._end = kt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
            (function (t, e, r, n, i) {
                void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
                var o,
                    a = t[n];
                if (i) for (o = e[i]; a && a[i] > o; ) a = a._prev;
                a ? ((e._next = a._next), (a._next = e)) : ((e._next = t[r]), (t[r] = e)), e._next ? (e._next._prev = e) : (t[n] = e), (e._prev = a), (e.parent = e._dp = t);
            })(t, e, "_first", "_last", t._sort ? "_start" : 0),
            Jt(e) || (t._recent = e),
            n || jt(t, e),
            t
        );
    },
    Zt = function (t, e) {
        return (at.ScrollTrigger || ut("scrollTrigger", e)) && at.ScrollTrigger.create(e, t);
    },
    Qt = function (t, e, r, n) {
        return Qe(t, e), t._initted ? (!r && t._pt && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && f !== Oe.frame ? (pt.push(t), (t._lazy = [e, n]), 1) : void 0) : 1;
    },
    Kt = function t(e) {
        var r = e.parent;
        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r));
    },
    Jt = function (t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e;
    },
    te = function (t, e, r, n) {
        var i = t._repeat,
            o = kt(e) || 0,
            a = t._tTime / t._tDur;
        return a && !n && (t._time *= o / t._dur), (t._dur = o), (t._tDur = i ? (i < 0 ? 1e10 : kt(o * (i + 1) + t._rDelay * i)) : o), a && !n ? $t(t, (t._tTime = t._tDur * a)) : t.parent && Vt(t), r || Bt(t.parent, t), t;
    },
    ee = function (t) {
        return t instanceof Ve ? Bt(t) : te(t, t._dur);
    },
    re = { _start: 0, endTime: dt, totalDuration: dt },
    ne = function t(e, r, n) {
        var i,
            o,
            a,
            s = e.labels,
            l = e._recent || re,
            u = e.duration() >= 1e8 ? l.endTime(!1) : e._dur;
        return q(r) && (isNaN(r) || r in s)
            ? ((o = r.charAt(0)),
              (a = "%" === r.substr(-1)),
              (i = r.indexOf("=")),
              "<" === o || ">" === o
                  ? (i >= 0 && (r = r.replace(/=/, "")), ("<" === o ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (i < 0 ? l : n).totalDuration() / 100 : 1))
                  : i < 0
                  ? (r in s || (s[r] = u), s[r])
                  : ((o = parseFloat(r.charAt(i - 1) + r.substr(i + 1))), a && n && (o = (o / 100) * (K(n) ? n[0] : n).totalDuration()), i > 1 ? t(e, r.substr(0, i - 1), n) + o : u + o))
            : null == r
            ? u
            : +r;
    },
    ie = function (t, e, r) {
        var n,
            i,
            o = W(e[1]),
            a = (o ? 2 : 1) + (t < 2 ? 0 : 1),
            s = e[a];
        if ((o && (s.duration = e[1]), (s.parent = r), t)) {
            for (n = s, i = r; i && !("immediateRender" in n); ) (n = i.vars.defaults || {}), (i = j(i.vars.inherit) && i.parent);
            (s.immediateRender = j(n.immediateRender)), t < 2 ? (s.runBackwards = 1) : (s.startAt = e[a - 1]);
        }
        return new er(e[0], s, e[a + 1]);
    },
    oe = function (t, e) {
        return t || 0 === t ? e(t) : e;
    },
    ae = function (t, e, r) {
        return r < t ? t : r > e ? e : r;
    },
    se = function (t) {
        if ("string" != typeof t) return "";
        var e = ot.exec(t);
        return e ? t.substr(e.index + e[0].length) : "";
    },
    le = [].slice,
    ue = function (t, e) {
        return t && $(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && $(t[0]))) && !t.nodeType && t !== u;
    },
    ce = function (t, e, r) {
        return !q(t) || r || (!c && Pe())
            ? K(t)
                ? (function (t, e, r) {
                      return (
                          void 0 === r && (r = []),
                          t.forEach(function (t) {
                              var n;
                              return (q(t) && !e) || ue(t, 1) ? (n = r).push.apply(n, ce(t)) : r.push(t);
                          }) || r
                      );
                  })(t, r)
                : ue(t)
                ? le.call(t, 0)
                : t
                ? [t]
                : []
            : le.call((e || h).querySelectorAll(t), 0);
    },
    he = function (t) {
        return t.sort(function () {
            return 0.5 - Math.random();
        });
    },
    de = function (t) {
        if (U(t)) return t;
        var e = $(t) ? t : { each: t },
            r = Ne(e.ease),
            n = e.from || 0,
            i = parseFloat(e.base) || 0,
            o = {},
            a = n > 0 && n < 1,
            s = isNaN(n) || a,
            l = e.axis,
            u = n,
            c = n;
        return (
            q(n) ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0) : !a && s && ((u = n[0]), (c = n[1])),
            function (t, a, h) {
                var d,
                    f,
                    p,
                    g,
                    m,
                    _,
                    v,
                    y,
                    x,
                    w = (h || e).length,
                    b = o[w];
                if (!b) {
                    if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                        for (v = -1e8; v < (v = h[x++].getBoundingClientRect().left) && x < w; );
                        x--;
                    }
                    for (b = o[w] = [], d = s ? Math.min(x, w) * u - 0.5 : n % x, f = s ? (w * c) / x - 0.5 : (n / x) | 0, v = 0, y = 1e8, _ = 0; _ < w; _++)
                        (p = (_ % x) - d), (g = f - ((_ / x) | 0)), (b[_] = m = l ? Math.abs("y" === l ? g : p) : B(p * p + g * g)), m > v && (v = m), m < y && (y = m);
                    "random" === n && he(b),
                        (b.max = v - y),
                        (b.min = y),
                        (b.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (x > w ? w - 1 : l ? ("y" === l ? w / x : x) : Math.max(x, w / x)) || 0) * ("edges" === n ? -1 : 1)),
                        (b.b = w < 0 ? i - w : i),
                        (b.u = se(e.amount || e.each) || 0),
                        (r = r && w < 0 ? Ye(r) : r);
                }
                return (w = (b[t] - b.min) / b.max || 0), kt(b.b + (r ? r(w) : w) * b.v) + b.u;
            }
        );
    },
    fe = function (t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function (r) {
            var n = Math.round(parseFloat(r) / t) * t * e;
            return (n - (n % 1)) / e + (W(r) ? 0 : se(r));
        };
    },
    pe = function (t, e) {
        var r,
            n,
            i = K(t);
        return (
            !i && $(t) && ((r = i = t.radius || 1e8), t.values ? ((t = ce(t.values)), (n = !W(t[0])) && (r *= r)) : (t = fe(t.increment))),
            oe(
                e,
                i
                    ? U(t)
                        ? function (e) {
                              return (n = t(e)), Math.abs(n - e) <= r ? n : e;
                          }
                        : function (e) {
                              for (var i, o, a = parseFloat(n ? e.x : e), s = parseFloat(n ? e.y : 0), l = 1e8, u = 0, c = t.length; c--; )
                                  (i = n ? (i = t[c].x - a) * i + (o = t[c].y - s) * o : Math.abs(t[c] - a)) < l && ((l = i), (u = c));
                              return (u = !r || l <= r ? t[u] : e), n || u === e || W(e) ? u : u + se(e);
                          }
                    : fe(t)
            )
        );
    },
    ge = function (t, e, r, n) {
        return oe(K(t) ? !e : !0 === r ? ((r = 0), !1) : !n, function () {
            return K(t) ? t[~~(Math.random() * t.length)] : (n = (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) * r * n) / n;
        });
    },
    me = function (t, e, r) {
        return oe(r, function (r) {
            return t[~~e(r)];
        });
    },
    _e = function (t) {
        for (var e, r, n, i, o = 0, a = ""; ~(e = t.indexOf("random(", o)); )
            (n = t.indexOf(")", e)), (i = "[" === t.charAt(e + 7)), (r = t.substr(e + 7, n - e - 7).match(i ? it : J)), (a += t.substr(o, e - o) + ge(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)), (o = n + 1);
        return a + t.substr(o, t.length - o);
    },
    ve = function (t, e, r, n, i) {
        var o = e - t,
            a = n - r;
        return oe(i, function (e) {
            return r + (((e - t) / o) * a || 0);
        });
    },
    ye = function (t, e, r) {
        var n,
            i,
            o,
            a = t.labels,
            s = 1e8;
        for (n in a) (i = a[n] - e) < 0 == !!r && i && s > (i = Math.abs(i)) && ((o = n), (s = i));
        return o;
    },
    xe = function (t, e, r) {
        var n,
            i,
            o = t.vars,
            a = o[e];
        if (a) return (n = o[e + "Params"]), (i = o.callbackScope || t), r && pt.length && Et(), n ? a.apply(i, n) : a.call(i);
    },
    we = function (t) {
        return Nt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && xe(t, "onInterrupt"), t;
    },
    be = function (t) {
        var e = (t = (!t.name && t.default) || t).name,
            r = U(t),
            n =
                e && !r && t.init
                    ? function () {
                          this._props = [];
                      }
                    : t,
            i = { init: dt, render: cr, add: Ge, kill: dr, modifier: hr, rawVars: 0 },
            o = { targetTest: 0, get: 0, getSetter: ar, aliases: {}, register: 0 };
        if ((Pe(), t !== n)) {
            if (mt[e]) return;
            Pt(n, Pt(Ft(t, i), o)), Rt(n.prototype, Rt(i, Ft(t, o))), (mt[(n.prop = e)] = n), t.targetTest && (yt.push(n), (ft[e] = 1)), (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
        }
        ht(e, n), t.register && t.register(yr, n, gr);
    },
    Te = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0],
    },
    Se = function (t, e, r) {
        return (255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) + 0.5) | 0;
    },
    Me = function (t, e, r) {
        var n,
            i,
            o,
            a,
            s,
            l,
            u,
            c,
            h,
            d,
            f = t ? (W(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : Te.black;
        if (!f) {
            if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Te[t])) f = Te[t];
            else if ("#" === t.charAt(0)) {
                if ((t.length < 6 && ((n = t.charAt(1)), (i = t.charAt(2)), (o = t.charAt(3)), (t = "#" + n + n + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))), 9 === t.length))
                    return [(f = parseInt(t.substr(1, 6), 16)) >> 16, (f >> 8) & 255, 255 & f, parseInt(t.substr(7), 16) / 255];
                f = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & 255, 255 & t];
            } else if ("hsl" === t.substr(0, 3))
                if (((f = d = t.match(J)), e)) {
                    if (~t.indexOf("=")) return (f = t.match(tt)), r && f.length < 4 && (f[3] = 1), f;
                } else
                    (a = (+f[0] % 360) / 360),
                        (s = +f[1] / 100),
                        (n = 2 * (l = +f[2] / 100) - (i = l <= 0.5 ? l * (s + 1) : l + s - l * s)),
                        f.length > 3 && (f[3] *= 1),
                        (f[0] = Se(a + 1 / 3, n, i)),
                        (f[1] = Se(a, n, i)),
                        (f[2] = Se(a - 1 / 3, n, i));
            else f = t.match(J) || Te.transparent;
            f = f.map(Number);
        }
        return (
            e &&
                !d &&
                ((n = f[0] / 255),
                (i = f[1] / 255),
                (o = f[2] / 255),
                (l = ((u = Math.max(n, i, o)) + (c = Math.min(n, i, o))) / 2),
                u === c ? (a = s = 0) : ((h = u - c), (s = l > 0.5 ? h / (2 - u - c) : h / (u + c)), (a = u === n ? (i - o) / h + (i < o ? 6 : 0) : u === i ? (o - n) / h + 2 : (n - i) / h + 4), (a *= 60)),
                (f[0] = ~~(a + 0.5)),
                (f[1] = ~~(100 * s + 0.5)),
                (f[2] = ~~(100 * l + 0.5))),
            r && f.length < 4 && (f[3] = 1),
            f
        );
    },
    ke = function (t) {
        var e = [],
            r = [],
            n = -1;
        return (
            t.split(Ee).forEach(function (t) {
                var i = t.match(et) || [];
                e.push.apply(e, i), r.push((n += i.length + 1));
            }),
            (e.c = r),
            e
        );
    },
    Ce = function (t, e, r) {
        var n,
            i,
            o,
            a,
            s = "",
            l = (t + s).match(Ee),
            u = e ? "hsla(" : "rgba(",
            c = 0;
        if (!l) return t;
        if (
            ((l = l.map(function (t) {
                return (t = Me(t, e, 1)) && u + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
            })),
            r && ((o = ke(t)), (n = r.c).join(s) !== o.c.join(s)))
        )
            for (a = (i = t.replace(Ee, "1").split(et)).length - 1; c < a; c++) s += i[c] + (~n.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (o.length ? o : l.length ? l : r).shift());
        if (!i) for (a = (i = t.split(Ee)).length - 1; c < a; c++) s += i[c] + l[c];
        return s + i[a];
    },
    Ee = (function () {
        var t,
            e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in Te) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
    })(),
    Ae = /hsl[a]?\(/,
    De = function (t) {
        var e,
            r = t.join(" ");
        if (((Ee.lastIndex = 0), Ee.test(r))) return (e = Ae.test(r)), (t[1] = Ce(t[1], e)), (t[0] = Ce(t[0], e, ke(t[1]))), !0;
    },
    Oe =
        ((b = Date.now),
        (T = 500),
        (S = 33),
        (M = b()),
        (k = M),
        (E = C = 1e3 / 240),
        (D = function t(e) {
            var r,
                n,
                i,
                o,
                a = b() - k,
                s = !0 === e;
            if ((a > T && (M += a - S), ((r = (i = (k += a) - M) - E) > 0 || s) && ((o = ++y.frame), (x = i - 1e3 * y.time), (y.time = i /= 1e3), (E += r + (r >= C ? 4 : C - r)), (n = 1)), s || (m = _(t)), n))
                for (w = 0; w < A.length; w++) A[w](i, x, o, e);
        }),
        (y = {
            time: 0,
            frame: 0,
            tick: function () {
                D(!0);
            },
            deltaRatio: function (t) {
                return x / (1e3 / (t || 60));
            },
            wake: function () {
                d &&
                    (!c && G() && ((u = c = window), (h = u.document || {}), (at.gsap = yr), (u.gsapVersions || (u.gsapVersions = [])).push(yr.version), lt(st || u.GreenSockGlobals || (!u.gsap && u) || {}), (v = u.requestAnimationFrame)),
                    m,
                    (_ =
                        v ||
                        function (t) {
                            return setTimeout(t, (E - 1e3 * y.time + 1) | 0);
                        }),
                    (g = 1),
                    D(2));
            },
            sleep: function () {
                (v ? u.cancelAnimationFrame : clearTimeout)(m), (g = 0), (_ = dt);
            },
            lagSmoothing: function (t, e) {
                (T = t || 1 / 1e-8), (S = Math.min(e, T, 0));
            },
            fps: function (t) {
                (C = 1e3 / (t || 240)), (E = 1e3 * y.time + C);
            },
            add: function (t) {
                A.indexOf(t) < 0 && A.push(t), Pe();
            },
            remove: function (t) {
                var e;
                ~(e = A.indexOf(t)) && A.splice(e, 1) && w >= e && w--;
            },
            _listeners: (A = []),
        })),
    Pe = function () {
        return !g && Oe.wake();
    },
    Le = {},
    Re = /^[\d.\-M][\d.\-,\s]/,
    Xe = /["']/g,
    Fe = function (t) {
        for (var e, r, n, i = {}, o = t.substr(1, t.length - 3).split(":"), a = o[0], s = 1, l = o.length; s < l; s++)
            (r = o[s]), (e = s !== l - 1 ? r.lastIndexOf(",") : r.length), (n = r.substr(0, e)), (i[a] = isNaN(n) ? n.replace(Xe, "").trim() : +n), (a = r.substr(e + 1).trim());
        return i;
    },
    Ye = function (t) {
        return function (e) {
            return 1 - t(1 - e);
        };
    },
    Ie = function t(e, r) {
        for (var n, i = e._first; i; )
            i instanceof Ve ? t(i, r) : !i.vars.yoyoEase || (i._yoyo && i._repeat) || i._yoyo === r || (i.timeline ? t(i.timeline, r) : ((n = i._ease), (i._ease = i._yEase), (i._yEase = n), (i._yoyo = r))), (i = i._next);
    },
    Ne = function (t, e) {
        return (
            (t &&
                (U(t)
                    ? t
                    : Le[t] ||
                      (function (t) {
                          var e,
                              r,
                              n,
                              i,
                              o = (t + "").split("("),
                              a = Le[o[0]];
                          return a && o.length > 1 && a.config
                              ? a.config.apply(
                                    null,
                                    ~t.indexOf("{") ? [Fe(o[1])] : ((e = t), (r = e.indexOf("(") + 1), (n = e.indexOf(")")), (i = e.indexOf("(", r)), e.substring(r, ~i && i < n ? e.indexOf(")", n + 1) : n)).split(",").map(Dt)
                                )
                              : Le._CE && Re.test(t)
                              ? Le._CE("", t)
                              : a;
                      })(t))) ||
            e
        );
    },
    Be = function (t, e, r, n) {
        void 0 === r &&
            (r = function (t) {
                return 1 - e(1 - t);
            }),
            void 0 === n &&
                (n = function (t) {
                    return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                });
        var i,
            o = { easeIn: e, easeOut: r, easeInOut: n };
        return (
            St(t, function (t) {
                for (var e in ((Le[t] = at[t] = o), (Le[(i = t.toLowerCase())] = r), o)) Le[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Le[t + "." + e] = o[e];
            }),
            o
        );
    },
    ze = function (t) {
        return function (e) {
            return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
        };
    },
    He = function t(e, r, n) {
        var i = r >= 1 ? r : 1,
            o = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
            a = (o / Y) * (Math.asin(1 / i) || 0),
            s = function (t) {
                return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * o) + 1;
            },
            l =
                "out" === e
                    ? s
                    : "in" === e
                    ? function (t) {
                          return 1 - s(1 - t);
                      }
                    : ze(s);
        return (
            (o = Y / o),
            (l.config = function (r, n) {
                return t(e, r, n);
            }),
            l
        );
    },
    qe = function t(e, r) {
        void 0 === r && (r = 1.70158);
        var n = function (t) {
                return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
            },
            i =
                "out" === e
                    ? n
                    : "in" === e
                    ? function (t) {
                          return 1 - n(1 - t);
                      }
                    : ze(n);
        return (
            (i.config = function (r) {
                return t(e, r);
            }),
            i
        );
    };
St("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Be(
        t + ",Power" + (r - 1),
        e
            ? function (t) {
                  return Math.pow(t, r);
              }
            : function (t) {
                  return t;
              },
        function (t) {
            return 1 - Math.pow(1 - t, r);
        },
        function (t) {
            return t < 0.5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
        }
    );
}),
    (Le.Linear.easeNone = Le.none = Le.Linear.easeIn),
    Be("Elastic", He("in"), He("out"), He()),
    (O = 7.5625),
    (L = 1 / (P = 2.75)),
    Be(
        "Bounce",
        function (t) {
            return 1 - R(1 - t);
        },
        (R = function (t) {
            return t < L ? O * t * t : t < 0.7272727272727273 ? O * Math.pow(t - 1.5 / P, 2) + 0.75 : t < 0.9090909090909092 ? O * (t -= 2.25 / P) * t + 0.9375 : O * Math.pow(t - 2.625 / P, 2) + 0.984375;
        })
    ),
    Be("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Be("Circ", function (t) {
        return -(B(1 - t * t) - 1);
    }),
    Be("Sine", function (t) {
        return 1 === t ? 1 : 1 - z(t * I);
    }),
    Be("Back", qe("in"), qe("out"), qe()),
    (Le.SteppedEase = Le.steps = at.SteppedEase = {
        config: function (t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                n = t + (e ? 0 : 1),
                i = e ? 1 : 0;
            return function (t) {
                return (((n * ae(0, 0.99999999, t)) | 0) + i) * r;
            };
        },
    }),
    (F.ease = Le["quad.out"]),
    St("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
        return (xt += t + "," + t + "Params,");
    });
var Ue = function (t, e) {
        (this.id = N++), (t._gsap = this), (this.target = t), (this.harness = e), (this.get = e ? e.get : Tt), (this.set = e ? e.getSetter : ar);
    },
    We = (function () {
        function t(t) {
            (this.vars = t),
                (this._delay = +t.delay || 0),
                (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                (this._ts = 1),
                te(this, +t.duration, 1, 1),
                (this.data = t.data),
                g || Oe.wake();
        }
        var e = t.prototype;
        return (
            (e.delay = function (t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
            }),
            (e.duration = function (t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
                return arguments.length ? ((this._dirty = 0), te(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
            }),
            (e.totalTime = function (t, e) {
                if ((Pe(), !arguments.length)) return this._tTime;
                var r = this._dp;
                if (r && r.smoothChildTiming && this._ts) {
                    for ($t(this, t), !r._dp || r.parent || jt(r, this); r && r.parent; ) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), (r = r.parent);
                    !this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && t < this._tDur) || (this._ts < 0 && t > 0) || (!this._tDur && !t)) && Gt(this._dp, this, this._start - this._delay);
                }
                return (this._tTime !== t || (!this._dur && !e) || (this._initted && 1e-8 === Math.abs(this._zTime)) || (!t && !this._initted && (this.add || this._ptLookup))) && (this._ts || (this._pTime = t), At(this, t, e)), this;
            }),
            (e.time = function (t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + qt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
            }),
            (e.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
            }),
            (e.progress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + qt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
            }),
            (e.iteration = function (t, e) {
                var r = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Ut(this._tTime, r) + 1 : 1;
            }),
            (e.timeScale = function (t) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var e = this.parent && this._ts ? Wt(this.parent._time, this) : this._tTime;
                return (this._rts = +t || 0), (this._ts = this._ps || -1e-8 === t ? 0 : this._rts), zt(this.totalTime(ae(-this._delay, this._tDur, e), !0)), Vt(this), this;
            }),
            (e.paused = function (t) {
                return arguments.length
                    ? (this._ps !== t &&
                          ((this._ps = t),
                          t
                              ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                              : (Pe(),
                                (this._ts = this._rts),
                                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))),
                      this)
                    : this._ps;
            }),
            (e.startTime = function (t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && Gt(e, this, t - this._delay), this;
                }
                return this._start;
            }),
            (e.endTime = function (t) {
                return this._start + (j(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
            }),
            (e.rawTime = function (t) {
                var e = this.parent || this._dp;
                return e ? (t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Wt(e.rawTime(t), this) : this._tTime) : this._tTime;
            }),
            (e.globalTime = function (t) {
                for (var e = this, r = arguments.length ? t : e.rawTime(); e; ) (r = e._start + r / (e._ts || 1)), (e = e._dp);
                return r;
            }),
            (e.repeat = function (t) {
                return arguments.length ? ((this._repeat = t === 1 / 0 ? -2 : t), ee(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
            }),
            (e.repeatDelay = function (t) {
                if (arguments.length) {
                    var e = this._time;
                    return (this._rDelay = t), ee(this), e ? this.time(e) : this;
                }
                return this._rDelay;
            }),
            (e.yoyo = function (t) {
                return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
                return this.totalTime(ne(this, t), j(e));
            }),
            (e.restart = function (t, e) {
                return this.play().totalTime(t ? -this._delay : 0, j(e));
            }),
            (e.play = function (t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
            }),
            (e.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
                return this.paused(!1);
            }),
            (e.reversed = function (t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0;
            }),
            (e.invalidate = function () {
                return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
            }),
            (e.isActive = function () {
                var t,
                    e = this.parent || this._dp,
                    r = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - 1e-8));
            }),
            (e.eventCallback = function (t, e, r) {
                var n = this.vars;
                return arguments.length > 1 ? (e ? ((n[t] = e), r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t];
            }),
            (e.then = function (t) {
                var e = this;
                return new Promise(function (r) {
                    var n = U(t) ? t : Ot,
                        i = function () {
                            var t = e.then;
                            (e.then = null), U(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), r(n), (e.then = t);
                        };
                    (e._initted && 1 === e.totalProgress() && e._ts >= 0) || (!e._tTime && e._ts < 0) ? i() : (e._prom = i);
                });
            }),
            (e.kill = function () {
                we(this);
            }),
            t
        );
    })();
Pt(We.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: !1, _rts: 1 });
var Ve = (function (t) {
    function e(e, r) {
        var n;
        return (
            void 0 === e && (e = {}),
            ((n = t.call(this, e) || this).labels = {}),
            (n.smoothChildTiming = !!e.smoothChildTiming),
            (n.autoRemoveChildren = !!e.autoRemoveChildren),
            (n._sort = j(e.sortChildren)),
            l && Gt(e.parent || l, o(n), r),
            e.reversed && n.reverse(),
            e.paused && n.paused(!0),
            e.scrollTrigger && Zt(o(n), e.scrollTrigger),
            n
        );
    }
    a(e, t);
    var r = e.prototype;
    return (
        (r.to = function (t, e, r) {
            return ie(0, arguments, this), this;
        }),
        (r.from = function (t, e, r) {
            return ie(1, arguments, this), this;
        }),
        (r.fromTo = function (t, e, r, n) {
            return ie(2, arguments, this), this;
        }),
        (r.set = function (t, e, r) {
            return (e.duration = 0), (e.parent = this), Yt(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new er(t, e, ne(this, r), 1), this;
        }),
        (r.call = function (t, e, r) {
            return Gt(this, er.delayedCall(0, t, e), r);
        }),
        (r.staggerTo = function (t, e, r, n, i, o, a) {
            return (r.duration = e), (r.stagger = r.stagger || n), (r.onComplete = o), (r.onCompleteParams = a), (r.parent = this), new er(t, r, ne(this, i)), this;
        }),
        (r.staggerFrom = function (t, e, r, n, i, o, a) {
            return (r.runBackwards = 1), (Yt(r).immediateRender = j(r.immediateRender)), this.staggerTo(t, e, r, n, i, o, a);
        }),
        (r.staggerFromTo = function (t, e, r, n, i, o, a, s) {
            return (n.startAt = r), (Yt(n).immediateRender = j(n.immediateRender)), this.staggerTo(t, e, n, i, o, a, s);
        }),
        (r.render = function (t, e, r) {
            var n,
                i,
                o,
                a,
                s,
                u,
                c,
                h,
                d,
                f,
                p,
                g,
                m = this._time,
                _ = this._dirty ? this.totalDuration() : this._tDur,
                v = this._dur,
                y = t <= 0 ? 0 : kt(t),
                x = this._zTime < 0 != t < 0 && (this._initted || !v);
            if ((this !== l && y > _ && t >= 0 && (y = _), y !== this._tTime || r || x)) {
                if ((m !== this._time && v && ((y += this._time - m), (t += this._time - m)), (n = y), (d = this._start), (u = !(h = this._ts)), x && (v || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat)) {
                    if (((p = this._yoyo), (s = v + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * s + t, e, r);
                    if (
                        ((n = kt(y % s)),
                        y === _ ? ((a = this._repeat), (n = v)) : ((a = ~~(y / s)) && a === y / s && ((n = v), a--), n > v && (n = v)),
                        (f = Ut(this._tTime, s)),
                        !m && this._tTime && f !== a && (f = a),
                        p && 1 & a && ((n = v - n), (g = 1)),
                        a !== f && !this._lock)
                    ) {
                        var w = p && 1 & f,
                            b = w === (p && 1 & a);
                        if (
                            (a < f && (w = !w),
                            (m = w ? 0 : v),
                            (this._lock = 1),
                            (this.render(m || (g ? 0 : kt(a * s)), e, !v)._lock = 0),
                            (this._tTime = y),
                            !e && this.parent && xe(this, "onRepeat"),
                            this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1),
                            (m && m !== this._time) || u !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
                        )
                            return this;
                        if (((v = this._dur), (_ = this._tDur), b && ((this._lock = 2), (m = w ? v : -1e-4), this.render(m, !0), this.vars.repeatRefresh && !g && this.invalidate()), (this._lock = 0), !this._ts && !u)) return this;
                        Ie(this, g);
                    }
                }
                if (
                    (this._hasPause &&
                        !this._forcing &&
                        this._lock < 2 &&
                        ((c = (function (t, e, r) {
                            var n;
                            if (r > e)
                                for (n = t._first; n && n._start <= r; ) {
                                    if (!n._dur && "isPause" === n.data && n._start > e) return n;
                                    n = n._next;
                                }
                            else
                                for (n = t._last; n && n._start >= r; ) {
                                    if (!n._dur && "isPause" === n.data && n._start < e) return n;
                                    n = n._prev;
                                }
                        })(this, kt(m), kt(n))),
                        c && (y -= n - (n = c._start))),
                    (this._tTime = y),
                    (this._time = n),
                    (this._act = !h),
                    this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t), (m = 0)),
                    !m && n && !e && (xe(this, "onStart"), this._tTime !== y))
                )
                    return this;
                if (n >= m && t >= 0)
                    for (i = this._first; i; ) {
                        if (((o = i._next), (i._act || n >= i._start) && i._ts && c !== i)) {
                            if (i.parent !== this) return this.render(t, e, r);
                            if ((i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || (!this._ts && !u))) {
                                (c = 0), o && (y += this._zTime = -1e-8);
                                break;
                            }
                        }
                        i = o;
                    }
                else {
                    i = this._last;
                    for (var T = t < 0 ? t : n; i; ) {
                        if (((o = i._prev), (i._act || T <= i._end) && i._ts && c !== i)) {
                            if (i.parent !== this) return this.render(t, e, r);
                            if ((i.render(i._ts > 0 ? (T - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (T - i._start) * i._ts, e, r), n !== this._time || (!this._ts && !u))) {
                                (c = 0), o && (y += this._zTime = T ? -1e-8 : 1e-8);
                                break;
                            }
                        }
                        i = o;
                    }
                }
                if (c && !e && (this.pause(), (c.render(n >= m ? 0 : -1e-8)._zTime = n >= m ? 1 : -1), this._ts)) return (this._start = d), Vt(this), this.render(t, e, r);
                this._onUpdate && !e && xe(this, "onUpdate", !0),
                    ((y === _ && _ >= this.totalDuration()) || (!y && m)) &&
                        ((d !== this._start && Math.abs(h) === Math.abs(this._ts)) ||
                            this._lock ||
                            ((t || !v) && ((y === _ && this._ts > 0) || (!y && this._ts < 0)) && Nt(this, 1),
                            e || (t < 0 && !m) || (!y && !m && _) || (xe(this, y === _ && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < _ && this.timeScale() > 0) && this._prom())));
            }
            return this;
        }),
        (r.add = function (t, e) {
            var r = this;
            if ((W(e) || (e = ne(this, e, t)), !(t instanceof We))) {
                if (K(t))
                    return (
                        t.forEach(function (t) {
                            return r.add(t, e);
                        }),
                        this
                    );
                if (q(t)) return this.addLabel(t, e);
                if (!U(t)) return this;
                t = er.delayedCall(0, t);
            }
            return this !== t ? Gt(this, t, e) : this;
        }),
        (r.getChildren = function (t, e, r, n) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -1e8);
            for (var i = [], o = this._first; o; ) o._start >= n && (o instanceof er ? e && i.push(o) : (r && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, r)))), (o = o._next);
            return i;
        }),
        (r.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; ) if (e[r].vars.id === t) return e[r];
        }),
        (r.remove = function (t) {
            return q(t) ? this.removeLabel(t) : U(t) ? this.killTweensOf(t) : (It(this, t), t === this._recent && (this._recent = this._last), Bt(this));
        }),
        (r.totalTime = function (e, r) {
            return arguments.length
                ? ((this._forcing = 1), !this._dp && this._ts && (this._start = kt(Oe.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), (this._forcing = 0), this)
                : this._tTime;
        }),
        (r.addLabel = function (t, e) {
            return (this.labels[t] = ne(this, e)), this;
        }),
        (r.removeLabel = function (t) {
            return delete this.labels[t], this;
        }),
        (r.addPause = function (t, e, r) {
            var n = er.delayedCall(0, e || dt, r);
            return (n.data = "isPause"), (this._hasPause = 1), Gt(this, n, ne(this, t));
        }),
        (r.removePause = function (t) {
            var e = this._first;
            for (t = ne(this, t); e; ) e._start === t && "isPause" === e.data && Nt(e), (e = e._next);
        }),
        (r.killTweensOf = function (t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--; ) $e !== n[i] && n[i].kill(t, e);
            return this;
        }),
        (r.getTweensOf = function (t, e) {
            for (var r, n = [], i = ce(t), o = this._first, a = W(e); o; )
                o instanceof er
                    ? Ct(o._targets, i) && (a ? (!$e || (o._initted && o._ts)) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && n.push(o)
                    : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r),
                    (o = o._next);
            return n;
        }),
        (r.tweenTo = function (t, e) {
            e = e || {};
            var r,
                n = this,
                i = ne(n, t),
                o = e,
                a = o.startAt,
                s = o.onStart,
                l = o.onStartParams,
                u = o.immediateRender,
                c = er.to(
                    n,
                    Pt(
                        {
                            ease: e.ease || "none",
                            lazy: !1,
                            immediateRender: !1,
                            time: i,
                            overwrite: "auto",
                            duration: e.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale()) || 1e-8,
                            onStart: function () {
                                if ((n.pause(), !r)) {
                                    var t = e.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale());
                                    c._dur !== t && te(c, t, 0, 1).render(c._time, !0, !0), (r = 1);
                                }
                                s && s.apply(c, l || []);
                            },
                        },
                        e
                    )
                );
            return u ? c.render(0) : c;
        }),
        (r.tweenFromTo = function (t, e, r) {
            return this.tweenTo(e, Pt({ startAt: { time: ne(this, t) } }, r));
        }),
        (r.recent = function () {
            return this._recent;
        }),
        (r.nextLabel = function (t) {
            return void 0 === t && (t = this._time), ye(this, ne(this, t));
        }),
        (r.previousLabel = function (t) {
            return void 0 === t && (t = this._time), ye(this, ne(this, t), 1);
        }),
        (r.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8);
        }),
        (r.shiftChildren = function (t, e, r) {
            void 0 === r && (r = 0);
            for (var n, i = this._first, o = this.labels; i; ) i._start >= r && ((i._start += t), (i._end += t)), (i = i._next);
            if (e) for (n in o) o[n] >= r && (o[n] += t);
            return Bt(this);
        }),
        (r.invalidate = function () {
            var e = this._first;
            for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
            return t.prototype.invalidate.call(this);
        }),
        (r.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; ) (e = r._next), this.remove(r), (r = e);
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Bt(this);
        }),
        (r.totalDuration = function (t) {
            var e,
                r,
                n,
                i = 0,
                o = this,
                a = o._last,
                s = 1e8;
            if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
            if (o._dirty) {
                for (n = o.parent; a; )
                    (e = a._prev),
                        a._dirty && a.totalDuration(),
                        (r = a._start) > s && o._sort && a._ts && !o._lock ? ((o._lock = 1), (Gt(o, a, r - a._delay, 1)._lock = 0)) : (s = r),
                        r < 0 && a._ts && ((i -= r), ((!n && !o._dp) || (n && n.smoothChildTiming)) && ((o._start += r / o._ts), (o._time -= r), (o._tTime -= r)), o.shiftChildren(-r, !1, -1 / 0), (s = 0)),
                        a._end > i && a._ts && (i = a._end),
                        (a = e);
                te(o, o === l && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
            }
            return o._tDur;
        }),
        (e.updateRoot = function (t) {
            if ((l._ts && (At(l, Wt(t, l)), (f = Oe.frame)), Oe.frame >= vt)) {
                vt += X.autoSleep || 120;
                var e = l._first;
                if ((!e || !e._ts) && X.autoSleep && Oe._listeners.length < 2) {
                    for (; e && !e._ts; ) e = e._next;
                    e;
                }
            }
        }),
        e
    );
})(We);
Pt(Ve.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var $e,
    je = function (t, e, r, n, i, o, a) {
        var s,
            l,
            u,
            c,
            h,
            d,
            f,
            p,
            g = new gr(this._pt, t, e, 0, 1, ur, null, i),
            m = 0,
            _ = 0;
        for (g.b = r, g.e = n, r += "", (f = ~(n += "").indexOf("random(")) && (n = _e(n)), o && (o((p = [r, n]), t, e), (r = p[0]), (n = p[1])), l = r.match(rt) || []; (s = rt.exec(n)); )
            (c = s[0]),
                (h = n.substring(m, s.index)),
                u ? (u = (u + 1) % 5) : "rgba(" === h.substr(-5) && (u = 1),
                c !== l[_++] &&
                    ((d = parseFloat(l[_ - 1]) || 0),
                    (g._pt = { _next: g._pt, p: h || 1 === _ ? h : ",", s: d, c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - d, m: u && u < 4 ? Math.round : 0 }),
                    (m = rt.lastIndex));
        return (g.c = m < n.length ? n.substring(m, n.length) : ""), (g.fp = a), (nt.test(n) || f) && (g.e = 0), (this._pt = g), g;
    },
    Ge = function (t, e, r, n, i, o, a, s, l) {
        U(n) && (n = n(i || 0, t, o));
        var u,
            c = t[e],
            h = "get" !== r ? r : U(c) ? (l ? t[e.indexOf("set") || !U(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]()) : c,
            d = U(c) ? (l ? ir : nr) : rr;
        if ((q(n) && (~n.indexOf("random(") && (n = _e(n)), "=" === n.charAt(1) && ((u = parseFloat(h) + parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) + (se(h) || 0)) || 0 === u) && (n = u)), h !== n))
            return isNaN(h * n) || "" === n
                ? (!c && !(e in t) && ut(e, n), je.call(this, t, e, h, n, d, s || X.stringFilter, l))
                : ((u = new gr(this._pt, t, e, +h || 0, n - (h || 0), "boolean" == typeof c ? lr : sr, 0, d)), l && (u.fp = l), a && u.modifier(a, this, t), (this._pt = u));
    },
    Ze = function (t, e, r, n, i, o) {
        var a, s, l, u;
        if (
            mt[t] &&
            !1 !==
                (a = new mt[t]()).init(
                    i,
                    a.rawVars
                        ? e[t]
                        : (function (t, e, r, n, i) {
                              if ((U(t) && (t = Ke(t, i, e, r, n)), !$(t) || (t.style && t.nodeType) || K(t) || Q(t))) return q(t) ? Ke(t, i, e, r, n) : t;
                              var o,
                                  a = {};
                              for (o in t) a[o] = Ke(t[o], i, e, r, n);
                              return a;
                          })(e[t], n, i, o, r),
                    r,
                    n,
                    o
                ) &&
            ((r._pt = s = new gr(r._pt, i, t, 0, 1, a.render, a, 0, a.priority)), r !== p)
        )
            for (l = r._ptLookup[r._targets.indexOf(i)], u = a._props.length; u--; ) l[a._props[u]] = s;
        return a;
    },
    Qe = function t(e, r) {
        var n,
            i,
            o,
            a,
            u,
            c,
            h,
            d,
            f,
            p,
            g,
            m,
            _,
            v = e.vars,
            y = v.ease,
            x = v.startAt,
            w = v.immediateRender,
            b = v.lazy,
            T = v.onUpdate,
            S = v.onUpdateParams,
            M = v.callbackScope,
            k = v.runBackwards,
            C = v.yoyoEase,
            E = v.keyframes,
            A = v.autoRevert,
            D = e._dur,
            O = e._startAt,
            P = e._targets,
            L = e.parent,
            R = L && "nested" === L.data ? L.parent._targets : P,
            X = "auto" === e._overwrite && !s,
            Y = e.timeline;
        if (
            (Y && (!E || !y) && (y = "none"),
            (e._ease = Ne(y, F.ease)),
            (e._yEase = C ? Ye(Ne(!0 === C ? y : C, F.ease)) : 0),
            C && e._yoyo && !e._repeat && ((C = e._yEase), (e._yEase = e._ease), (e._ease = C)),
            (e._from = !Y && !!v.runBackwards),
            !Y)
        ) {
            if (((m = (d = P[0] ? bt(P[0]).harness : 0) && v[d.prop]), (n = Ft(v, ft)), O && O.render(-1, !0).kill(), x))
                if (
                    (Nt((e._startAt = er.set(P, Pt({ data: "isStart", overwrite: !1, parent: L, immediateRender: !0, lazy: j(b), startAt: null, delay: 0, onUpdate: T, onUpdateParams: S, callbackScope: M, stagger: 0 }, x)))),
                    r < 0 && !w && !A && e._startAt.render(-1, !0),
                    w)
                ) {
                    if ((r > 0 && !A && (e._startAt = 0), D && r <= 0)) return void (r && (e._zTime = r));
                } else !1 === A && (e._startAt = 0);
            else if (k && D)
                if (O) !A && (e._startAt = 0);
                else if (
                    (r && (w = !1),
                    (o = Pt({ overwrite: !1, data: "isFromStart", lazy: w && j(b), immediateRender: w, stagger: 0, parent: L }, n)),
                    m && (o[d.prop] = m),
                    Nt((e._startAt = er.set(P, o))),
                    r < 0 && e._startAt.render(-1, !0),
                    w)
                ) {
                    if (!r) return;
                } else t(e._startAt, 1e-8);
            for (e._pt = 0, b = (D && j(b)) || (b && !D), i = 0; i < P.length; i++) {
                if (
                    ((h = (u = P[i])._gsap || wt(P)[i]._gsap),
                    (e._ptLookup[i] = p = {}),
                    gt[h.id] && pt.length && Et(),
                    (g = R === P ? i : R.indexOf(u)),
                    d &&
                        !1 !== (f = new d()).init(u, m || n, e, g, R) &&
                        ((e._pt = a = new gr(e._pt, u, f.name, 0, 1, f.render, f, 0, f.priority)),
                        f._props.forEach(function (t) {
                            p[t] = a;
                        }),
                        f.priority && (c = 1)),
                    !d || m)
                )
                    for (o in n) mt[o] && (f = Ze(o, n, e, g, u, R)) ? f.priority && (c = 1) : (p[o] = a = Ge.call(e, u, o, "get", n[o], g, R, 0, v.stringFilter));
                e._op && e._op[i] && e.kill(u, e._op[i]), X && e._pt && (($e = e), l.killTweensOf(u, p, e.globalTime(r)), (_ = !e.parent), ($e = 0)), e._pt && b && (gt[h.id] = 1);
            }
            c && pr(e), e._onInit && e._onInit(e);
        }
        (e._onUpdate = T), (e._initted = (!e._op || e._pt) && !_);
    },
    Ke = function (t, e, r, n, i) {
        return U(t) ? t.call(e, r, n, i) : q(t) && ~t.indexOf("random(") ? _e(t) : t;
    },
    Je = xt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    tr = (Je + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
    er = (function (t) {
        function e(e, r, n, i) {
            var a;
            "number" == typeof r && ((n.duration = r), (r = n), (n = null));
            var u,
                c,
                h,
                d,
                f,
                p,
                g,
                m,
                _ = (a = t.call(this, i ? r : Yt(r)) || this).vars,
                v = _.duration,
                y = _.delay,
                x = _.immediateRender,
                w = _.stagger,
                b = _.overwrite,
                T = _.keyframes,
                S = _.defaults,
                M = _.scrollTrigger,
                k = _.yoyoEase,
                C = r.parent || l,
                E = (K(e) || Q(e) ? W(e[0]) : "length" in r) ? [e] : ce(e);
            if (((a._targets = E.length ? wt(E) : ct("GSAP target " + e + " not found. https://greensock.com", !X.nullTargetWarn) || []), (a._ptLookup = []), (a._overwrite = b), T || w || Z(v) || Z(y))) {
                if (((r = a.vars), (u = a.timeline = new Ve({ data: "nested", defaults: S || {} })).kill(), (u.parent = u._dp = o(a)), (u._start = 0), T))
                    Yt(Pt(u.vars.defaults, { ease: "none" })),
                        w
                            ? E.forEach(function (t, e) {
                                  return T.forEach(function (r, n) {
                                      return u.to(t, r, n ? ">" : e * w);
                                  });
                              })
                            : T.forEach(function (t) {
                                  return u.to(E, t, ">");
                              });
                else {
                    if (((d = E.length), (g = w ? de(w) : dt), $(w))) for (f in w) ~Je.indexOf(f) && (m || (m = {}), (m[f] = w[f]));
                    for (c = 0; c < d; c++) {
                        for (f in ((h = {}), r)) tr.indexOf(f) < 0 && (h[f] = r[f]);
                        (h.stagger = 0),
                            k && (h.yoyoEase = k),
                            m && Rt(h, m),
                            (p = E[c]),
                            (h.duration = +Ke(v, o(a), c, p, E)),
                            (h.delay = (+Ke(y, o(a), c, p, E) || 0) - a._delay),
                            !w && 1 === d && h.delay && ((a._delay = y = h.delay), (a._start += y), (h.delay = 0)),
                            u.to(p, h, g(c, p, E));
                    }
                    u.duration() ? (v = y = 0) : (a.timeline = 0);
                }
                v || a.duration((v = u.duration()));
            } else a.timeline = 0;
            return (
                !0 !== b || s || (($e = o(a)), l.killTweensOf(E), ($e = 0)),
                Gt(C, o(a), n),
                r.reversed && a.reverse(),
                r.paused && a.paused(!0),
                (x || (!v && !T && a._start === kt(C._time) && j(x) && Ht(o(a)) && "nested" !== C.data)) && ((a._tTime = -1e-8), a.render(Math.max(0, -y))),
                M && Zt(o(a), M),
                a
            );
        }
        a(e, t);
        var r = e.prototype;
        return (
            (r.render = function (t, e, r) {
                var n,
                    i,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    h,
                    d = this._time,
                    f = this._tDur,
                    p = this._dur,
                    g = t > f - 1e-8 && t >= 0 ? f : t < 1e-8 ? 0 : t;
                if (p) {
                    if (g !== this._tTime || !t || r || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 != t < 0)) {
                        if (((n = g), (c = this.timeline), this._repeat)) {
                            if (((a = p + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * a + t, e, r);
                            if (
                                ((n = kt(g % a)),
                                g === f ? ((o = this._repeat), (n = p)) : ((o = ~~(g / a)) && o === g / a && ((n = p), o--), n > p && (n = p)),
                                (l = this._yoyo && 1 & o) && ((h = this._yEase), (n = p - n)),
                                (s = Ut(this._tTime, a)),
                                n === d && !r && this._initted)
                            )
                                return this;
                            o !== s && (c && this._yEase && Ie(c, l), !this.vars.repeatRefresh || l || this._lock || ((this._lock = r = 1), (this.render(kt(a * o), !0).invalidate()._lock = 0)));
                        }
                        if (!this._initted) {
                            if (Qt(this, t < 0 ? t : n, r, e)) return (this._tTime = 0), this;
                            if (p !== this._dur) return this.render(t, e, r);
                        }
                        if (
                            ((this._tTime = g),
                            (this._time = n),
                            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                            (this.ratio = u = (h || this._ease)(n / p)),
                            this._from && (this.ratio = u = 1 - u),
                            n && !d && !e && (xe(this, "onStart"), this._tTime !== g))
                        )
                            return this;
                        for (i = this._pt; i; ) i.r(u, i.d), (i = i._next);
                        (c && c.render(t < 0 ? t : !n && l ? -1e-8 : c._dur * u, e, r)) || (this._startAt && (this._zTime = t)),
                            this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), xe(this, "onUpdate")),
                            this._repeat && o !== s && this.vars.onRepeat && !e && this.parent && xe(this, "onRepeat"),
                            (g !== this._tDur && g) ||
                                this._tTime !== g ||
                                (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                                (t || !p) && ((g === this._tDur && this._ts > 0) || (!g && this._ts < 0)) && Nt(this, 1),
                                e || (t < 0 && !d) || (!g && !d) || (xe(this, g === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < f && this.timeScale() > 0) && this._prom()));
                    }
                } else
                    !(function (t, e, r, n) {
                        var i,
                            o,
                            a,
                            s = t.ratio,
                            l = e < 0 || (!e && ((!t._start && Kt(t) && (t._initted || !Jt(t))) || ((t._ts < 0 || t._dp._ts < 0) && !Jt(t)))) ? 0 : 1,
                            u = t._rDelay,
                            c = 0;
                        if (
                            (u && t._repeat && ((c = ae(0, t._tDur, e)), (o = Ut(c, u)), (a = Ut(t._tTime, u)), t._yoyo && 1 & o && (l = 1 - l), o !== a && ((s = 1 - l), t.vars.repeatRefresh && t._initted && t.invalidate())),
                            l !== s || n || 1e-8 === t._zTime || (!e && t._zTime))
                        ) {
                            if (!t._initted && Qt(t, e, n, r)) return;
                            for (a = t._zTime, t._zTime = e || (r ? 1e-8 : 0), r || (r = e && !a), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = c, i = t._pt; i; ) i.r(l, i.d), (i = i._next);
                            t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                                t._onUpdate && !r && xe(t, "onUpdate"),
                                c && t._repeat && !r && t.parent && xe(t, "onRepeat"),
                                (e >= t._tDur || e < 0) && t.ratio === l && (l && Nt(t, 1), r || (xe(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
                        } else t._zTime || (t._zTime = e);
                    })(this, t, e, r);
                return this;
            }),
            (r.targets = function () {
                return this._targets;
            }),
            (r.invalidate = function () {
                return (this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this);
            }),
            (r.kill = function (t, e) {
                if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e)))) return (this._lazy = this._pt = 0), this.parent ? we(this) : this;
                if (this.timeline) {
                    var r = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, $e && !0 !== $e.vars.overwrite)._first || we(this), this.parent && r !== this.timeline.totalDuration() && te(this, (this._dur * this.timeline._tDur) / r, 0, 1), this;
                }
                var n,
                    i,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c = this._targets,
                    h = t ? ce(t) : c,
                    d = this._ptLookup,
                    f = this._pt;
                if (
                    (!e || "all" === e) &&
                    (function (t, e) {
                        for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r]; );
                        return r < 0;
                    })(c, h)
                )
                    return "all" === e && (this._pt = 0), we(this);
                for (
                    n = this._op = this._op || [],
                        "all" !== e &&
                            (q(e) &&
                                ((s = {}),
                                St(e, function (t) {
                                    return (s[t] = 1);
                                }),
                                (e = s)),
                            (e = (function (t, e) {
                                var r,
                                    n,
                                    i,
                                    o,
                                    a = t[0] ? bt(t[0]).harness : 0,
                                    s = a && a.aliases;
                                if (!s) return e;
                                for (n in ((r = Rt({}, e)), s)) if ((n in r)) for (i = (o = s[n].split(",")).length; i--; ) r[o[i]] = r[n];
                                return r;
                            })(c, e))),
                        u = c.length;
                    u--;

                )
                    if (~h.indexOf(c[u]))
                        for (s in ((i = d[u]), "all" === e ? ((n[u] = e), (a = i), (o = {})) : ((o = n[u] = n[u] || {}), (a = e)), a))
                            (l = i && i[s]) && (("kill" in l.d && !0 !== l.d.kill(s)) || It(this, l, "_pt"), delete i[s]), "all" !== o && (o[s] = 1);
                return this._initted && !this._pt && f && we(this), this;
            }),
            (e.to = function (t, r) {
                return new e(t, r, arguments[2]);
            }),
            (e.from = function (t, e) {
                return ie(1, arguments);
            }),
            (e.delayedCall = function (t, r, n, i) {
                return new e(r, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: r, onReverseComplete: r, onCompleteParams: n, onReverseCompleteParams: n, callbackScope: i });
            }),
            (e.fromTo = function (t, e, r) {
                return ie(2, arguments);
            }),
            (e.set = function (t, r) {
                return (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r);
            }),
            (e.killTweensOf = function (t, e, r) {
                return l.killTweensOf(t, e, r);
            }),
            e
        );
    })(We);
Pt(er.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    St("staggerTo,staggerFrom,staggerFromTo", function (t) {
        er[t] = function () {
            var e = new Ve(),
                r = le.call(arguments, 0);
            return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r);
        };
    });
var rr = function (t, e, r) {
        return (t[e] = r);
    },
    nr = function (t, e, r) {
        return t[e](r);
    },
    ir = function (t, e, r, n) {
        return t[e](n.fp, r);
    },
    or = function (t, e, r) {
        return t.setAttribute(e, r);
    },
    ar = function (t, e) {
        return U(t[e]) ? nr : V(t[e]) && t.setAttribute ? or : rr;
    },
    sr = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    lr = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    ur = function (t, e) {
        var r = e._pt,
            n = "";
        if (!t && e.b) n = e.b;
        else if (1 === t && e.e) n = e.e;
        else {
            for (; r; ) (n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n), (r = r._next);
            n += e.c;
        }
        e.set(e.t, e.p, n, e);
    },
    cr = function (t, e) {
        for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    hr = function (t, e, r, n) {
        for (var i, o = this._pt; o; ) (i = o._next), o.p === n && o.modifier(t, e, r), (o = i);
    },
    dr = function (t) {
        for (var e, r, n = this._pt; n; ) (r = n._next), (n.p === t && !n.op) || n.op === t ? It(this, n, "_pt") : n.dep || (e = 1), (n = r);
        return !e;
    },
    fr = function (t, e, r, n) {
        n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
    },
    pr = function (t) {
        for (var e, r, n, i, o = t._pt; o; ) {
            for (e = o._next, r = n; r && r.pr > o.pr; ) r = r._next;
            (o._prev = r ? r._prev : i) ? (o._prev._next = o) : (n = o), (o._next = r) ? (r._prev = o) : (i = o), (o = e);
        }
        t._pt = n;
    },
    gr = (function () {
        function t(t, e, r, n, i, o, a, s, l) {
            (this.t = e), (this.s = n), (this.c = i), (this.p = r), (this.r = o || sr), (this.d = a || this), (this.set = s || rr), (this.pr = l || 0), (this._next = t), t && (t._prev = this);
        }
        return (
            (t.prototype.modifier = function (t, e, r) {
                (this.mSet = this.mSet || this.set), (this.set = fr), (this.m = t), (this.mt = r), (this.tween = e);
            }),
            t
        );
    })();
St(
    xt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
        return (ft[t] = 1);
    }
),
    (at.TweenMax = at.TweenLite = er),
    (at.TimelineLite = at.TimelineMax = Ve),
    (l = new Ve({ sortChildren: !1, defaults: F, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 })),
    (X.stringFilter = De);
var mr = {
    registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        e.forEach(function (t) {
            return be(t);
        });
    },
    timeline: function (t) {
        return new Ve(t);
    },
    getTweensOf: function (t, e) {
        return l.getTweensOf(t, e);
    },
    getProperty: function (t, e, r, n) {
        q(t) && (t = ce(t)[0]);
        var i = bt(t || {}).get,
            o = r ? Ot : Dt;
        return (
            "native" === r && (r = ""),
            t
                ? e
                    ? o(((mt[e] && mt[e].get) || i)(t, e, r, n))
                    : function (e, r, n) {
                          return o(((mt[e] && mt[e].get) || i)(t, e, r, n));
                      }
                : t
        );
    },
    quickSetter: function (t, e, r) {
        if ((t = ce(t)).length > 1) {
            var n = t.map(function (t) {
                    return yr.quickSetter(t, e, r);
                }),
                i = n.length;
            return function (t) {
                for (var e = i; e--; ) n[e](t);
            };
        }
        t = t[0] || {};
        var o = mt[e],
            a = bt(t),
            s = (a.harness && (a.harness.aliases || {})[e]) || e,
            l = o
                ? function (e) {
                      var n = new o();
                      (p._pt = 0), n.init(t, r ? e + r : e, p, 0, [t]), n.render(1, n), p._pt && cr(1, p);
                  }
                : a.set(t, s);
        return o
            ? l
            : function (e) {
                  return l(t, s, r ? e + r : e, a, 1);
              };
    },
    isTweening: function (t) {
        return l.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
        return t && t.ease && (t.ease = Ne(t.ease, F.ease)), Xt(F, t || {});
    },
    config: function (t) {
        return Xt(X, t || {});
    },
    registerEffect: function (t) {
        var e = t.name,
            r = t.effect,
            n = t.plugins,
            i = t.defaults,
            o = t.extendTimeline;
        (n || "").split(",").forEach(function (t) {
            return t && !mt[t] && !at[t] && ct(e + " effect requires " + t + " plugin.");
        }),
            (_t[e] = function (t, e, n) {
                return r(ce(t), Pt(e || {}, i), n);
            }),
            o &&
                (Ve.prototype[e] = function (t, r, n) {
                    return this.add(_t[e](t, $(r) ? r : (n = r) && {}, this), n);
                });
    },
    registerEase: function (t, e) {
        Le[t] = Ne(e);
    },
    parseEase: function (t, e) {
        return arguments.length ? Ne(t, e) : Le;
    },
    getById: function (t) {
        return l.getById(t);
    },
    exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var r,
            n,
            i = new Ve(t);
        for (i.smoothChildTiming = j(t.smoothChildTiming), l.remove(i), i._dp = 0, i._time = i._tTime = l._time, r = l._first; r; )
            (n = r._next), (!e && !r._dur && r instanceof er && r.vars.onComplete === r._targets[0]) || Gt(i, r, r._start - r._delay), (r = n);
        return Gt(l, i, 0), i;
    },
    utils: {
        wrap: function t(e, r, n) {
            var i = r - e;
            return K(e)
                ? me(e, t(0, e.length), r)
                : oe(n, function (t) {
                      return ((i + ((t - e) % i)) % i) + e;
                  });
        },
        wrapYoyo: function t(e, r, n) {
            var i = r - e,
                o = 2 * i;
            return K(e)
                ? me(e, t(0, e.length - 1), r)
                : oe(n, function (t) {
                      return e + ((t = (o + ((t - e) % o)) % o || 0) > i ? o - t : t);
                  });
        },
        distribute: de,
        random: ge,
        snap: pe,
        normalize: function (t, e, r) {
            return ve(t, e, 0, 1, r);
        },
        getUnit: se,
        clamp: function (t, e, r) {
            return oe(r, function (r) {
                return ae(t, e, r);
            });
        },
        splitColor: Me,
        toArray: ce,
        selector: function (t) {
            return (
                (t = ce(t)[0] || ct("Invalid scope") || {}),
                function (e) {
                    var r = t.current || t.nativeElement || t;
                    return ce(e, r.querySelectorAll ? r : r === t ? ct("Invalid scope") || h.createElement("div") : t);
                }
            );
        },
        mapRange: ve,
        pipe: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            return function (t) {
                return e.reduce(function (t, e) {
                    return e(t);
                }, t);
            };
        },
        unitize: function (t, e) {
            return function (r) {
                return t(parseFloat(r)) + (e || se(r));
            };
        },
        interpolate: function t(e, r, n, i) {
            var o = isNaN(e + r)
                ? 0
                : function (t) {
                      return (1 - t) * e + t * r;
                  };
            if (!o) {
                var a,
                    s,
                    l,
                    u,
                    c,
                    h = q(e),
                    d = {};
                if ((!0 === n && (i = 1) && (n = null), h)) (e = { p: e }), (r = { p: r });
                else if (K(e) && !K(r)) {
                    for (l = [], u = e.length, c = u - 2, s = 1; s < u; s++) l.push(t(e[s - 1], e[s]));
                    u--,
                        (o = function (t) {
                            t *= u;
                            var e = Math.min(c, ~~t);
                            return l[e](t - e);
                        }),
                        (n = r);
                } else i || (e = Rt(K(e) ? [] : {}, e));
                if (!l) {
                    for (a in r) Ge.call(d, e, a, "get", r[a]);
                    o = function (t) {
                        return cr(t, d) || (h ? e.p : e);
                    };
                }
            }
            return oe(n, o);
        },
        shuffle: he,
    },
    install: lt,
    effects: _t,
    ticker: Oe,
    updateRoot: Ve.updateRoot,
    plugins: mt,
    globalTimeline: l,
    core: {
        PropTween: gr,
        globals: ht,
        Tween: er,
        Timeline: Ve,
        Animation: We,
        getCache: bt,
        _removeLinkedListItem: It,
        suppressOverwrites: function (t) {
            return (s = t);
        },
    },
};
St("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (mr[t] = er[t]);
}),
    Oe.add(Ve.updateRoot),
    (p = mr.to({}, { duration: 0 }));
var _r = function (t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; ) r = r._next;
        return r;
    },
    vr = function (t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function (t, r, n) {
                n._onInit = function (t) {
                    var n, i;
                    if (
                        (q(r) &&
                            ((n = {}),
                            St(r, function (t) {
                                return (n[t] = 1);
                            }),
                            (r = n)),
                        e)
                    ) {
                        for (i in ((n = {}), r)) n[i] = e(r[i]);
                        r = n;
                    }
                    !(function (t, e) {
                        var r,
                            n,
                            i,
                            o = t._targets;
                        for (r in e) for (n = o.length; n--; ) (i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = _r(i, r)), i && i.modifier && i.modifier(e[r], t, o[n], r));
                    })(t, r);
                };
            },
        };
    },
    yr =
        mr.registerPlugin(
            {
                name: "attr",
                init: function (t, e, r, n, i) {
                    var o, a;
                    for (o in e) (a = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], n, i, 0, 0, o)) && (a.op = o), this._props.push(o);
                },
            },
            {
                name: "endArray",
                init: function (t, e) {
                    for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
                },
            },
            vr("roundProps", fe),
            vr("modifiers"),
            vr("snap", pe)
        ) || mr;
(er.version = Ve.version = yr.version = "3.8.0"), (d = 1), G() && Pe();
Le.Power0, Le.Power1, Le.Power2, Le.Power3, Le.Power4, Le.Linear, Le.Quad, Le.Cubic, Le.Quart, Le.Quint, Le.Strong, Le.Elastic, Le.Back, Le.SteppedEase, Le.Bounce, Le.Sine, Le.Expo, Le.Circ;
var xr,
    wr,
    br,
    Tr,
    Sr,
    Mr,
    kr,
    Cr = {},
    Er = 180 / Math.PI,
    Ar = Math.PI / 180,
    Dr = Math.atan2,
    Or = /([A-Z])/g,
    Pr = /(?:left|right|width|margin|padding|x)/i,
    Lr = /[\s,\(]\S/,
    Rr = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
    Xr = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    Fr = function (t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    Yr = function (t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
    },
    Ir = function (t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    Nr = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    Br = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    },
    zr = function (t, e, r) {
        return (t.style[e] = r);
    },
    Hr = function (t, e, r) {
        return t.style.setProperty(e, r);
    },
    qr = function (t, e, r) {
        return (t._gsap[e] = r);
    },
    Ur = function (t, e, r) {
        return (t._gsap.scaleX = t._gsap.scaleY = r);
    },
    Wr = function (t, e, r, n, i) {
        var o = t._gsap;
        (o.scaleX = o.scaleY = r), o.renderTransform(i, o);
    },
    Vr = function (t, e, r, n, i) {
        var o = t._gsap;
        (o[e] = r), o.renderTransform(i, o);
    },
    $r = "transform",
    jr = $r + "Origin",
    Gr = function (t, e) {
        var r = wr.createElementNS ? wr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : wr.createElement(t);
        return r.style ? r : wr.createElement(t);
    },
    Zr = function t(e, r, n) {
        var i = getComputedStyle(e);
        return i[r] || i.getPropertyValue(r.replace(Or, "-$1").toLowerCase()) || i.getPropertyValue(r) || (!n && t(e, Kr(r) || r, 1)) || "";
    },
    Qr = "O,Moz,ms,Ms,Webkit".split(","),
    Kr = function (t, e, r) {
        var n = (e || Sr).style,
            i = 5;
        if (t in n && !r) return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(Qr[i] + t in n); );
        return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Qr[i] : "") + t;
    },
    Jr = function () {
        "undefined" != typeof window &&
            window.document &&
            ((xr = window),
            (wr = xr.document),
            (br = wr.documentElement),
            (Sr = Gr("div") || { style: {} }),
            Gr("div"),
            ($r = Kr($r)),
            (jr = $r + "Origin"),
            (Sr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
            (kr = !!Kr("perspective")),
            (Tr = 1));
    },
    tn = function t(e) {
        var r,
            n = Gr("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            o = this.nextSibling,
            a = this.style.cssText;
        if ((br.appendChild(n), n.appendChild(this), (this.style.display = "block"), e))
            try {
                (r = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
            } catch (t) {}
        else this._gsapBBox && (r = this._gsapBBox());
        return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), br.removeChild(n), (this.style.cssText = a), r;
    },
    en = function (t, e) {
        for (var r = e.length; r--; ) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    },
    rn = function (t) {
        var e;
        try {
            e = t.getBBox();
        } catch (r) {
            e = tn.call(t, !0);
        }
        return (e && (e.width || e.height)) || t.getBBox === tn || (e = tn.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +en(t, ["x", "cx", "x1"]) || 0, y: +en(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
    },
    nn = function (t) {
        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !rn(t));
    },
    on = function (t, e) {
        if (e) {
            var r = t.style;
            e in Cr && e !== jr && (e = $r), r.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), r.removeProperty(e.replace(Or, "-$1").toLowerCase())) : r.removeAttribute(e);
        }
    },
    an = function (t, e, r, n, i, o) {
        var a = new gr(t._pt, e, r, 0, 1, o ? Br : Nr);
        return (t._pt = a), (a.b = n), (a.e = i), t._props.push(r), a;
    },
    sn = { deg: 1, rad: 1, turn: 1 },
    ln = function t(e, r, n, i) {
        var o,
            a,
            s,
            l,
            u = parseFloat(n) || 0,
            c = (n + "").trim().substr((u + "").length) || "px",
            h = Sr.style,
            d = Pr.test(r),
            f = "svg" === e.tagName.toLowerCase(),
            p = (f ? "client" : "offset") + (d ? "Width" : "Height"),
            g = 100,
            m = "px" === i,
            _ = "%" === i;
        return i === c || !u || sn[i] || sn[c]
            ? u
            : ("px" !== c && !m && (u = t(e, r, n, "px")),
              (l = e.getCTM && nn(e)),
              (!_ && "%" !== c) || (!Cr[r] && !~r.indexOf("adius"))
                  ? ((h[d ? "width" : "height"] = g + (m ? c : i)),
                    (a = ~r.indexOf("adius") || ("em" === i && e.appendChild && !f) ? e : e.parentNode),
                    l && (a = (e.ownerSVGElement || {}).parentNode),
                    (a && a !== wr && a.appendChild) || (a = wr.body),
                    (s = a._gsap) && _ && s.width && d && s.time === Oe.time
                        ? Mt((u / s.width) * g)
                        : ((_ || "%" === c) && (h.position = Zr(e, "position")),
                          a === e && (h.position = "static"),
                          a.appendChild(Sr),
                          (o = Sr[p]),
                          a.removeChild(Sr),
                          (h.position = "absolute"),
                          d && _ && (((s = bt(a)).time = Oe.time), (s.width = a[p])),
                          Mt(m ? (o * u) / g : o && u ? (g / o) * u : 0)))
                  : ((o = l ? e.getBBox()[d ? "width" : "height"] : e[p]), Mt(_ ? (u / o) * g : (u / 100) * o)));
    },
    un = function (t, e, r, n) {
        var i;
        return (
            Tr || Jr(),
            e in Rr && "transform" !== e && ~(e = Rr[e]).indexOf(",") && (e = e.split(",")[0]),
            Cr[e] && "transform" !== e
                ? ((i = xn(t, n)), (i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : wn(Zr(t, jr)) + " " + i.zOrigin + "px"))
                : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = (fn[e] && fn[e](t, e, r)) || Zr(t, e) || Tt(t, e) || ("opacity" === e ? 1 : 0)),
            r && !~(i + "").trim().indexOf(" ") ? ln(t, e, i, r) + r : i
        );
    },
    cn = function (t, e, r, n) {
        if (!r || "none" === r) {
            var i = Kr(e, t, 1),
                o = i && Zr(t, i, 1);
            o && o !== r ? ((e = i), (r = o)) : "borderColor" === e && (r = Zr(t, "borderTopColor"));
        }
        var a,
            s,
            l,
            u,
            c,
            h,
            d,
            f,
            p,
            g,
            m,
            _,
            v = new gr(this._pt, t.style, e, 0, 1, ur),
            y = 0,
            x = 0;
        if (((v.b = r), (v.e = n), (r += ""), "auto" === (n += "") && ((t.style[e] = n), (n = Zr(t, e) || n), (t.style[e] = r)), De((a = [r, n])), (n = a[1]), (l = (r = a[0]).match(et) || []), (n.match(et) || []).length)) {
            for (; (s = et.exec(n)); )
                (d = s[0]),
                    (p = n.substring(y, s.index)),
                    c ? (c = (c + 1) % 5) : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) || (c = 1),
                    d !== (h = l[x++] || "") &&
                        ((u = parseFloat(h) || 0),
                        (m = h.substr((u + "").length)),
                        (_ = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)),
                        (f = parseFloat(d)),
                        (g = d.substr((f + "").length)),
                        (y = et.lastIndex - g.length),
                        g || ((g = g || X.units[e] || m), y === n.length && ((n += g), (v.e += g))),
                        m !== g && (u = ln(t, e, h, g) || 0),
                        (v._pt = { _next: v._pt, p: p || 1 === x ? p : ",", s: u, c: _ ? _ * f : f - u, m: (c && c < 4) || "zIndex" === e ? Math.round : 0 }));
            v.c = y < n.length ? n.substring(y, n.length) : "";
        } else v.r = "display" === e && "none" === n ? Br : Nr;
        return nt.test(n) && (v.e = 0), (this._pt = v), v;
    },
    hn = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
    dn = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r,
                n,
                i,
                o = e.t,
                a = o.style,
                s = e.u,
                l = o._gsap;
            if ("all" === s || !0 === s) (a.cssText = ""), (n = 1);
            else for (i = (s = s.split(",")).length; --i > -1; ) (r = s[i]), Cr[r] && ((n = 1), (r = "transformOrigin" === r ? jr : $r)), on(o, r);
            n && (on(o, $r), l && (l.svg && o.removeAttribute("transform"), xn(o, 1), (l.uncache = 1)));
        }
    },
    fn = {
        clearProps: function (t, e, r, n, i) {
            if ("isFromStart" !== i.data) {
                var o = (t._pt = new gr(t._pt, e, r, 0, 0, dn));
                return (o.u = n), (o.pr = -10), (o.tween = i), t._props.push(r), 1;
            }
        },
    },
    pn = [1, 0, 0, 1, 0, 0],
    gn = {},
    mn = function (t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    },
    _n = function (t) {
        var e = Zr(t, $r);
        return mn(e) ? pn : e.substr(7).match(tt).map(Mt);
    },
    vn = function (t, e) {
        var r,
            n,
            i,
            o,
            a = t._gsap || bt(t),
            s = t.style,
            l = _n(t);
        return a.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" === (l = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",")
                ? pn
                : l
            : (l !== pn ||
                  t.offsetParent ||
                  t === br ||
                  a.svg ||
                  ((i = s.display),
                  (s.display = "block"),
                  ((r = t.parentNode) && t.offsetParent) || ((o = 1), (n = t.nextSibling), br.appendChild(t)),
                  (l = _n(t)),
                  i ? (s.display = i) : on(t, "display"),
                  o && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : br.removeChild(t))),
              e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
    },
    yn = function (t, e, r, n, i, o) {
        var a,
            s,
            l,
            u = t._gsap,
            c = i || vn(t, !0),
            h = u.xOrigin || 0,
            d = u.yOrigin || 0,
            f = u.xOffset || 0,
            p = u.yOffset || 0,
            g = c[0],
            m = c[1],
            _ = c[2],
            v = c[3],
            y = c[4],
            x = c[5],
            w = e.split(" "),
            b = parseFloat(w[0]) || 0,
            T = parseFloat(w[1]) || 0;
        r
            ? c !== pn && (s = g * v - m * _) && ((l = b * (-m / s) + T * (g / s) - (g * x - m * y) / s), (b = b * (v / s) + T * (-_ / s) + (_ * x - v * y) / s), (T = l))
            : ((b = (a = rn(t)).x + (~w[0].indexOf("%") ? (b / 100) * a.width : b)), (T = a.y + (~(w[1] || w[0]).indexOf("%") ? (T / 100) * a.height : T))),
            n || (!1 !== n && u.smooth) ? ((y = b - h), (x = T - d), (u.xOffset = f + (y * g + x * _) - y), (u.yOffset = p + (y * m + x * v) - x)) : (u.xOffset = u.yOffset = 0),
            (u.xOrigin = b),
            (u.yOrigin = T),
            (u.smooth = !!n),
            (u.origin = e),
            (u.originIsAbsolute = !!r),
            (t.style[jr] = "0px 0px"),
            o && (an(o, u, "xOrigin", h, b), an(o, u, "yOrigin", d, T), an(o, u, "xOffset", f, u.xOffset), an(o, u, "yOffset", p, u.yOffset)),
            t.setAttribute("data-svg-origin", b + " " + T);
    },
    xn = function (t, e) {
        var r = t._gsap || new Ue(t);
        if ("x" in r && !e && !r.uncache) return r;
        var n,
            i,
            o,
            a,
            s,
            l,
            u,
            c,
            h,
            d,
            f,
            p,
            g,
            m,
            _,
            v,
            y,
            x,
            w,
            b,
            T,
            S,
            M,
            k,
            C,
            E,
            A,
            D,
            O,
            P,
            L,
            R,
            F = t.style,
            Y = r.scaleX < 0,
            I = "px",
            N = "deg",
            B = Zr(t, jr) || "0";
        return (
            (n = i = o = l = u = c = h = d = f = 0),
            (a = s = 1),
            (r.svg = !(!t.getCTM || !nn(t))),
            (m = vn(t, r.svg)),
            r.svg && ((k = (!r.uncache || "0px 0px" === B) && !e && t.getAttribute("data-svg-origin")), yn(t, k || B, !!k || r.originIsAbsolute, !1 !== r.smooth, m)),
            (p = r.xOrigin || 0),
            (g = r.yOrigin || 0),
            m !== pn &&
                ((x = m[0]),
                (w = m[1]),
                (b = m[2]),
                (T = m[3]),
                (n = S = m[4]),
                (i = M = m[5]),
                6 === m.length
                    ? ((a = Math.sqrt(x * x + w * w)),
                      (s = Math.sqrt(T * T + b * b)),
                      (l = x || w ? Dr(w, x) * Er : 0),
                      (h = b || T ? Dr(b, T) * Er + l : 0) && (s *= Math.abs(Math.cos(h * Ar))),
                      r.svg && ((n -= p - (p * x + g * b)), (i -= g - (p * w + g * T))))
                    : ((R = m[6]),
                      (P = m[7]),
                      (A = m[8]),
                      (D = m[9]),
                      (O = m[10]),
                      (L = m[11]),
                      (n = m[12]),
                      (i = m[13]),
                      (o = m[14]),
                      (u = (_ = Dr(R, O)) * Er),
                      _ && ((k = S * (v = Math.cos(-_)) + A * (y = Math.sin(-_))), (C = M * v + D * y), (E = R * v + O * y), (A = S * -y + A * v), (D = M * -y + D * v), (O = R * -y + O * v), (L = P * -y + L * v), (S = k), (M = C), (R = E)),
                      (c = (_ = Dr(-b, O)) * Er),
                      _ && ((v = Math.cos(-_)), (L = T * (y = Math.sin(-_)) + L * v), (x = k = x * v - A * y), (w = C = w * v - D * y), (b = E = b * v - O * y)),
                      (l = (_ = Dr(w, x)) * Er),
                      _ && ((k = x * (v = Math.cos(_)) + w * (y = Math.sin(_))), (C = S * v + M * y), (w = w * v - x * y), (M = M * v - S * y), (x = k), (S = C)),
                      u && Math.abs(u) + Math.abs(l) > 359.9 && ((u = l = 0), (c = 180 - c)),
                      (a = Mt(Math.sqrt(x * x + w * w + b * b))),
                      (s = Mt(Math.sqrt(M * M + R * R))),
                      (_ = Dr(S, M)),
                      (h = Math.abs(_) > 2e-4 ? _ * Er : 0),
                      (f = L ? 1 / (L < 0 ? -L : L) : 0)),
                r.svg && ((k = t.getAttribute("transform")), (r.forceCSS = t.setAttribute("transform", "") || !mn(Zr(t, $r))), k && t.setAttribute("transform", k))),
            Math.abs(h) > 90 && Math.abs(h) < 270 && (Y ? ((a *= -1), (h += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180)) : ((s *= -1), (h += h <= 0 ? 180 : -180))),
            (r.x = n - ((r.xPercent = n && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? (t.offsetWidth * r.xPercent) / 100 : 0) + I),
            (r.y = i - ((r.yPercent = i && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? (t.offsetHeight * r.yPercent) / 100 : 0) + I),
            (r.z = o + I),
            (r.scaleX = Mt(a)),
            (r.scaleY = Mt(s)),
            (r.rotation = Mt(l) + N),
            (r.rotationX = Mt(u) + N),
            (r.rotationY = Mt(c) + N),
            (r.skewX = h + N),
            (r.skewY = d + N),
            (r.transformPerspective = f + I),
            (r.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (F[jr] = wn(B)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = X.force3D),
            (r.renderTransform = r.svg ? Mn : kr ? Sn : Tn),
            (r.uncache = 0),
            r
        );
    },
    wn = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
    },
    bn = function (t, e, r) {
        var n = se(e);
        return Mt(parseFloat(e) + parseFloat(ln(t, "x", r + "px", n))) + n;
    },
    Tn = function (t, e) {
        (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), Sn(t, e);
    },
    Sn = function (t, e) {
        var r = e || this,
            n = r.xPercent,
            i = r.yPercent,
            o = r.x,
            a = r.y,
            s = r.z,
            l = r.rotation,
            u = r.rotationY,
            c = r.rotationX,
            h = r.skewX,
            d = r.skewY,
            f = r.scaleX,
            p = r.scaleY,
            g = r.transformPerspective,
            m = r.force3D,
            _ = r.target,
            v = r.zOrigin,
            y = "",
            x = ("auto" === m && t && 1 !== t) || !0 === m;
        if (v && ("0deg" !== c || "0deg" !== u)) {
            var w,
                b = parseFloat(u) * Ar,
                T = Math.sin(b),
                S = Math.cos(b);
            (b = parseFloat(c) * Ar), (w = Math.cos(b)), (o = bn(_, o, T * w * -v)), (a = bn(_, a, -Math.sin(b) * -v)), (s = bn(_, s, S * w * -v + v));
        }
        "0px" !== g && (y += "perspective(" + g + ") "),
            (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
            (x || "0px" !== o || "0px" !== a || "0px" !== s) && (y += "0px" !== s || x ? "translate3d(" + o + ", " + a + ", " + s + ") " : "translate(" + o + ", " + a + ") "),
            "0deg" !== l && (y += "rotate(" + l + ") "),
            "0deg" !== u && (y += "rotateY(" + u + ") "),
            "0deg" !== c && (y += "rotateX(" + c + ") "),
            ("0deg" === h && "0deg" === d) || (y += "skew(" + h + ", " + d + ") "),
            (1 === f && 1 === p) || (y += "scale(" + f + ", " + p + ") "),
            (_.style[$r] = y || "translate(0, 0)");
    },
    Mn = function (t, e) {
        var r,
            n,
            i,
            o,
            a,
            s = e || this,
            l = s.xPercent,
            u = s.yPercent,
            c = s.x,
            h = s.y,
            d = s.rotation,
            f = s.skewX,
            p = s.skewY,
            g = s.scaleX,
            m = s.scaleY,
            _ = s.target,
            v = s.xOrigin,
            y = s.yOrigin,
            x = s.xOffset,
            w = s.yOffset,
            b = s.forceCSS,
            T = parseFloat(c),
            S = parseFloat(h);
        (d = parseFloat(d)),
            (f = parseFloat(f)),
            (p = parseFloat(p)) && ((f += p = parseFloat(p)), (d += p)),
            d || f
                ? ((d *= Ar),
                  (f *= Ar),
                  (r = Math.cos(d) * g),
                  (n = Math.sin(d) * g),
                  (i = Math.sin(d - f) * -m),
                  (o = Math.cos(d - f) * m),
                  f && ((p *= Ar), (a = Math.tan(f - p)), (i *= a = Math.sqrt(1 + a * a)), (o *= a), p && ((a = Math.tan(p)), (r *= a = Math.sqrt(1 + a * a)), (n *= a))),
                  (r = Mt(r)),
                  (n = Mt(n)),
                  (i = Mt(i)),
                  (o = Mt(o)))
                : ((r = g), (o = m), (n = i = 0)),
            ((T && !~(c + "").indexOf("px")) || (S && !~(h + "").indexOf("px"))) && ((T = ln(_, "x", c, "px")), (S = ln(_, "y", h, "px"))),
            (v || y || x || w) && ((T = Mt(T + v - (v * r + y * i) + x)), (S = Mt(S + y - (v * n + y * o) + w))),
            (l || u) && ((a = _.getBBox()), (T = Mt(T + (l / 100) * a.width)), (S = Mt(S + (u / 100) * a.height))),
            (a = "matrix(" + r + "," + n + "," + i + "," + o + "," + T + "," + S + ")"),
            _.setAttribute("transform", a),
            b && (_.style[$r] = a);
    },
    kn = function (t, e, r, n, i, o) {
        var a,
            s,
            l = 360,
            u = q(i),
            c = parseFloat(i) * (u && ~i.indexOf("rad") ? Er : 1),
            h = o ? c * o : c - n,
            d = n + h + "deg";
        return (
            u && ("short" === (a = i.split("_")[1]) && (h %= l) !== h % 180 && (h += h < 0 ? l : -360), "cw" === a && h < 0 ? (h = ((h + 36e9) % l) - ~~(h / l) * l) : "ccw" === a && h > 0 && (h = ((h - 36e9) % l) - ~~(h / l) * l)),
            (t._pt = s = new gr(t._pt, e, r, n, h, Fr)),
            (s.e = d),
            (s.u = "deg"),
            t._props.push(r),
            s
        );
    },
    Cn = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t;
    },
    En = function (t, e, r) {
        var n,
            i,
            o,
            a,
            s,
            l,
            u,
            c = Cn({}, r._gsap),
            h = r.style;
        for (i in (c.svg
            ? ((o = r.getAttribute("transform")), r.setAttribute("transform", ""), (h[$r] = e), (n = xn(r, 1)), on(r, $r), r.setAttribute("transform", o))
            : ((o = getComputedStyle(r)[$r]), (h[$r] = e), (n = xn(r, 1)), (h[$r] = o)),
        Cr))
            (o = c[i]) !== (a = n[i]) &&
                "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
                ((s = se(o) !== (u = se(a)) ? ln(r, i, o, u) : parseFloat(o)), (l = parseFloat(a)), (t._pt = new gr(t._pt, n, i, s, l - s, Xr)), (t._pt.u = u || 0), t._props.push(i));
        Cn(n, c);
    };
St("padding,margin,Width,Radius", function (t, e) {
    var r = "Top",
        n = "Right",
        i = "Bottom",
        o = "Left",
        a = (e < 3 ? [r, n, i, o] : [r + o, r + n, i + n, i + o]).map(function (r) {
            return e < 2 ? t + r : "border" + r + t;
        });
    fn[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
        var o, s;
        if (arguments.length < 4)
            return (
                (o = a.map(function (e) {
                    return un(t, e, r);
                })),
                5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s
            );
        (o = (n + "").split(" ")),
            (s = {}),
            a.forEach(function (t, e) {
                return (s[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
            }),
            t.init(e, s, i);
    };
});
var An,
    Dn,
    On,
    Pn = {
        name: "css",
        register: Jr,
        targetTest: function (t) {
            return t.style && t.nodeType;
        },
        init: function (t, e, r, n, i) {
            var o,
                a,
                s,
                l,
                u,
                c,
                h,
                d,
                f,
                p,
                g,
                m,
                _,
                v,
                y,
                x,
                w,
                b,
                T,
                S = this._props,
                M = t.style,
                k = r.vars.startAt;
            for (h in (Tr || Jr(), e))
                if ("autoRound" !== h && ((a = e[h]), !mt[h] || !Ze(h, e, r, n, t, i)))
                    if (((u = typeof a), (c = fn[h]), "function" === u && (u = typeof (a = a.call(r, n, t, i))), "string" === u && ~a.indexOf("random(") && (a = _e(a)), c)) c(this, t, h, a, r) && (y = 1);
                    else if ("--" === h.substr(0, 2))
                        (o = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
                            (a += ""),
                            (Ee.lastIndex = 0),
                            Ee.test(o) || ((d = se(o)), (f = se(a))),
                            f ? d !== f && (o = ln(t, h, o, f) + f) : d && (a += d),
                            this.add(M, "setProperty", o, a, n, i, 0, 0, h),
                            S.push(h);
                    else if ("undefined" !== u) {
                        if (
                            (k && h in k
                                ? ((o = "function" == typeof k[h] ? k[h].call(r, n, t, i) : k[h]), h in X.units && !se(o) && (o += X.units[h]), q(o) && ~o.indexOf("random(") && (o = _e(o)), "=" === (o + "").charAt(1) && (o = un(t, h)))
                                : (o = un(t, h)),
                            (l = parseFloat(o)),
                            (p = "string" === u && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)),
                            (s = parseFloat(a)),
                            h in Rr &&
                                ("autoAlpha" === h && (1 === l && "hidden" === un(t, "visibility") && s && (l = 0), an(this, M, "visibility", l ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)),
                                "scale" !== h && "transform" !== h && ~(h = Rr[h]).indexOf(",") && (h = h.split(",")[0])),
                            (g = h in Cr))
                        )
                            if (
                                (m ||
                                    (((_ = t._gsap).renderTransform && !e.parseTransform) || xn(t, e.parseTransform),
                                    (v = !1 !== e.smoothOrigin && _.smooth),
                                    ((m = this._pt = new gr(this._pt, M, $r, 0, 1, _.renderTransform, _, 0, -1)).dep = 1)),
                                "scale" === h)
                            )
                                (this._pt = new gr(this._pt, _, "scaleY", _.scaleY, (p ? p * s : s - _.scaleY) || 0)), S.push("scaleY", h), (h += "X");
                            else {
                                if ("transformOrigin" === h) {
                                    (w = void 0),
                                        (b = void 0),
                                        (T = void 0),
                                        (w = (x = a).split(" ")),
                                        (b = w[0]),
                                        (T = w[1] || "50%"),
                                        ("top" !== b && "bottom" !== b && "left" !== T && "right" !== T) || ((x = b), (b = T), (T = x)),
                                        (w[0] = hn[b] || b),
                                        (w[1] = hn[T] || T),
                                        (a = w.join(" ")),
                                        _.svg ? yn(t, a, 0, v, 0, this) : ((f = parseFloat(a.split(" ")[2]) || 0) !== _.zOrigin && an(this, _, "zOrigin", _.zOrigin, f), an(this, M, h, wn(o), wn(a)));
                                    continue;
                                }
                                if ("svgOrigin" === h) {
                                    yn(t, a, 1, v, 0, this);
                                    continue;
                                }
                                if (h in gn) {
                                    kn(this, _, h, l, a, p);
                                    continue;
                                }
                                if ("smoothOrigin" === h) {
                                    an(this, _, "smooth", _.smooth, a);
                                    continue;
                                }
                                if ("force3D" === h) {
                                    _[h] = a;
                                    continue;
                                }
                                if ("transform" === h) {
                                    En(this, a, t);
                                    continue;
                                }
                            }
                        else h in M || (h = Kr(h) || h);
                        if (g || ((s || 0 === s) && (l || 0 === l) && !Lr.test(a) && h in M))
                            s || (s = 0),
                                (d = (o + "").substr((l + "").length)) !== (f = se(a) || (h in X.units ? X.units[h] : d)) && (l = ln(t, h, o, f)),
                                (this._pt = new gr(this._pt, g ? _ : M, h, l, p ? p * s : s - l, g || ("px" !== f && "zIndex" !== h) || !1 === e.autoRound ? Xr : Ir)),
                                (this._pt.u = f || 0),
                                d !== f && "%" !== f && ((this._pt.b = o), (this._pt.r = Yr));
                        else if (h in M) cn.call(this, t, h, o, a);
                        else {
                            if (!(h in t)) {
                                ut(h, a);
                                continue;
                            }
                            this.add(t, h, o || t[h], a, n, i);
                        }
                        S.push(h);
                    }
            y && pr(this);
        },
        get: un,
        aliases: Rr,
        getSetter: function (t, e, r) {
            var n = Rr[e];
            return (
                n && n.indexOf(",") < 0 && (e = n),
                e in Cr && e !== jr && (t._gsap.x || un(t, "x")) ? (r && Mr === r ? ("scale" === e ? Ur : qr) : ((Mr = r || {}), "scale" === e ? Wr : Vr)) : t.style && !V(t.style[e]) ? zr : ~e.indexOf("-") ? Hr : ar(t, e)
            );
        },
        core: { _removeProperty: on, _getMatrix: vn },
    };
(yr.utils.checkPrefix = Kr),
    (On = St((An = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Dn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
        Cr[t] = 1;
    })),
    St(Dn, function (t) {
        (X.units[t] = "deg"), (gn[t] = 1);
    }),
    (Rr[On[13]] = An + "," + Dn),
    St("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
        var e = t.split(":");
        Rr[e[1]] = On[e[0]];
    }),
    St("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
        X.units[t] = "px";
    }),
    yr.registerPlugin(Pn);
var Ln,
    Rn,
    Xn,
    Fn,
    Yn,
    In,
    Nn,
    Bn,
    zn,
    Hn = yr.registerPlugin(Pn) || yr,
    qn = (Hn.core.Tween, "transform"),
    Un = qn + "Origin",
    Wn = function (t) {
        var e = t.ownerDocument || t;
        !(qn in t.style) && "msTransform" in t.style && (Un = (qn = "msTransform") + "Origin");
        for (; e.parentNode && (e = e.parentNode); );
        if (((Rn = window), (Nn = new Jn()), e)) {
            (Ln = e), (Xn = e.documentElement), (Fn = e.body), ((Bn = Ln.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none");
            var r = e.createElement("div"),
                n = e.createElement("div");
            Fn.appendChild(r), r.appendChild(n), (r.style.position = "static"), (r.style[qn] = "translate3d(0,0,1px)"), (zn = n.offsetParent !== r), Fn.removeChild(r);
        }
        return e;
    },
    Vn = [],
    $n = [],
    jn = function (t) {
        return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null);
    },
    Gn = function t(e) {
        return "fixed" === Rn.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0);
    },
    Zn = function t(e, r) {
        if (e.parentNode && (Ln || Wn(e))) {
            var n = jn(e),
                i = n ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                o = n ? (r ? "rect" : "g") : "div",
                a = 2 !== r ? 0 : 100,
                s = 3 === r ? 100 : 0,
                l = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                u = Ln.createElementNS ? Ln.createElementNS(i.replace(/^https/, "http"), o) : Ln.createElement(o);
            return (
                r &&
                    (n
                        ? (In || (In = t(e)), u.setAttribute("width", 0.01), u.setAttribute("height", 0.01), u.setAttribute("transform", "translate(" + a + "," + s + ")"), In.appendChild(u))
                        : (Yn || ((Yn = t(e)).style.cssText = l), (u.style.cssText = l + "width:0.1px;height:0.1px;top:" + s + "px;left:" + a + "px"), Yn.appendChild(u))),
                u
            );
        }
        throw "Need document and parent.";
    },
    Qn = function (t, e) {
        var r,
            n,
            i,
            o,
            a,
            s,
            l = jn(t),
            u = t === l,
            c = l ? Vn : $n,
            h = t.parentNode;
        if (t === Rn) return t;
        if ((c.length || c.push(Zn(t, 1), Zn(t, 2), Zn(t, 3)), (r = l ? In : Yn), l))
            u
                ? ((i = (function (t) {
                      var e,
                          r = t.getCTM();
                      return (
                          r || ((e = t.style[qn]), (t.style[qn] = "none"), t.appendChild(Bn), (r = Bn.getCTM()), t.removeChild(Bn), e ? (t.style[qn] = e) : t.style.removeProperty(qn.replace(/([A-Z])/g, "-$1").toLowerCase())),
                          r || Nn.clone()
                      );
                  })(t)),
                  (o = -i.e / i.a),
                  (a = -i.f / i.d),
                  (n = Nn))
                : ((i = t.getBBox()),
                  (n = (n = t.transform ? t.transform.baseVal : {}).numberOfItems
                      ? n.numberOfItems > 1
                          ? (function (t) {
                                for (var e = new Jn(), r = 0; r < t.numberOfItems; r++) e.multiply(t.getItem(r).matrix);
                                return e;
                            })(n)
                          : n.getItem(0).matrix
                      : Nn),
                  (o = n.a * i.x + n.c * i.y),
                  (a = n.b * i.x + n.d * i.y)),
                e && "g" === t.tagName.toLowerCase() && (o = a = 0),
                (u ? l : h).appendChild(r),
                r.setAttribute("transform", "matrix(" + n.a + "," + n.b + "," + n.c + "," + n.d + "," + (n.e + o) + "," + (n.f + a) + ")");
        else {
            if (((o = a = 0), zn)) for (n = t.offsetParent, i = t; i && (i = i.parentNode) && i !== n && i.parentNode; ) (Rn.getComputedStyle(i)[qn] + "").length > 4 && ((o = i.offsetLeft), (a = i.offsetTop), (i = 0));
            if ("absolute" !== (s = Rn.getComputedStyle(t)).position && "fixed" !== s.position) for (n = t.offsetParent; h && h !== n; ) (o += h.scrollLeft || 0), (a += h.scrollTop || 0), (h = h.parentNode);
            ((i = r.style).top = t.offsetTop - a + "px"), (i.left = t.offsetLeft - o + "px"), (i[qn] = s[qn]), (i[Un] = s[Un]), (i.position = "fixed" === s.position ? "fixed" : "absolute"), t.parentNode.appendChild(r);
        }
        return r;
    },
    Kn = function (t, e, r, n, i, o, a) {
        return (t.a = e), (t.b = r), (t.c = n), (t.d = i), (t.e = o), (t.f = a), t;
    },
    Jn = (function () {
        function t(t, e, r, n, i, o) {
            void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 1), void 0 === i && (i = 0), void 0 === o && (o = 0), Kn(this, t, e, r, n, i, o);
        }
        var e = t.prototype;
        return (
            (e.inverse = function () {
                var t = this.a,
                    e = this.b,
                    r = this.c,
                    n = this.d,
                    i = this.e,
                    o = this.f,
                    a = t * n - e * r || 1e-10;
                return Kn(this, n / a, -e / a, -r / a, t / a, (r * o - n * i) / a, -(t * o - e * i) / a);
            }),
            (e.multiply = function (t) {
                var e = this.a,
                    r = this.b,
                    n = this.c,
                    i = this.d,
                    o = this.e,
                    a = this.f,
                    s = t.a,
                    l = t.c,
                    u = t.b,
                    c = t.d,
                    h = t.e,
                    d = t.f;
                return Kn(this, s * e + u * n, s * r + u * i, l * e + c * n, l * r + c * i, o + h * e + d * n, a + h * r + d * i);
            }),
            (e.clone = function () {
                return new t(this.a, this.b, this.c, this.d, this.e, this.f);
            }),
            (e.equals = function (t) {
                var e = this.a,
                    r = this.b,
                    n = this.c,
                    i = this.d,
                    o = this.e,
                    a = this.f;
                return e === t.a && r === t.b && n === t.c && i === t.d && o === t.e && a === t.f;
            }),
            (e.apply = function (t, e) {
                void 0 === e && (e = {});
                var r = t.x,
                    n = t.y,
                    i = this.a,
                    o = this.b,
                    a = this.c,
                    s = this.d,
                    l = this.e,
                    u = this.f;
                return (e.x = r * i + n * a + l || 0), (e.y = r * o + n * s + u || 0), e;
            }),
            t
        );
    })();
/*!
 * matrix 3.8.0
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ function ti(t, e, r, n) {
    if (!t || !t.parentNode || (Ln || Wn(t)).documentElement === t) return new Jn();
    var i = (function (t) {
            for (var e, r; t && t !== Fn; )
                (r = t._gsap) && r.uncache && r.get(t, "x"), r && !r.scaleX && !r.scaleY && r.renderTransform && ((r.scaleX = r.scaleY = 1e-4), r.renderTransform(1, r), e ? e.push(r) : (e = [r])), (t = t.parentNode);
            return e;
        })(t),
        o = jn(t) ? Vn : $n,
        a = Qn(t, r),
        s = o[0].getBoundingClientRect(),
        l = o[1].getBoundingClientRect(),
        u = o[2].getBoundingClientRect(),
        c = a.parentNode,
        h = !n && Gn(t),
        d = new Jn(
            (l.left - s.left) / 100,
            (l.top - s.top) / 100,
            (u.left - s.left) / 100,
            (u.top - s.top) / 100,
            s.left + (h ? 0 : Rn.pageXOffset || Ln.scrollLeft || Xn.scrollLeft || Fn.scrollLeft || 0),
            s.top + (h ? 0 : Rn.pageYOffset || Ln.scrollTop || Xn.scrollTop || Fn.scrollTop || 0)
        );
    if ((c.removeChild(a), i)) for (s = i.length; s--; ) ((l = i[s]).scaleX = l.scaleY = 0), l.renderTransform(1, l);
    return e ? d.inverse() : d;
}
var ei,
    ri,
    ni,
    ii,
    oi,
    ai,
    si,
    li,
    ui,
    ci,
    hi,
    di,
    fi,
    pi,
    gi,
    mi,
    _i,
    vi,
    yi,
    xi,
    wi,
    bi = function () {
        return "undefined" != typeof window;
    },
    Ti = function () {
        return ei || (bi() && (ei = window.gsap) && ei.registerPlugin && ei);
    },
    Si = function (t) {
        return "function" == typeof t;
    },
    Mi = function (t) {
        return "object" == typeof t;
    },
    ki = function (t) {
        return void 0 === t;
    },
    Ci = function () {
        return !1;
    },
    Ei = "transform",
    Ai = "transformOrigin",
    Di = function (t) {
        return Math.round(1e4 * t) / 1e4;
    },
    Oi = Array.isArray,
    Pi = function (t, e) {
        var r = ni.createElementNS ? ni.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ni.createElement(t);
        return r.style ? r : ni.createElement(t);
    },
    Li = 180 / Math.PI,
    Ri = new Jn(),
    Xi =
        Date.now ||
        function () {
            return new Date().getTime();
        },
    Fi = [],
    Yi = {},
    Ii = 0,
    Ni = /^(?:a|input|textarea|button|select)$/i,
    Bi = 0,
    zi = {},
    Hi = {},
    qi = function (t, e) {
        var r,
            n = {};
        for (r in t) n[r] = e ? t[r] * e : t[r];
        return n;
    },
    Ui = function t(e, r) {
        for (var n, i = e.length; i--; ) r ? (e[i].style.touchAction = r) : e[i].style.removeProperty("touch-action"), (n = e[i].children) && n.length && t(n, r);
    },
    Wi = function () {
        return Fi.forEach(function (t) {
            return t();
        });
    },
    Vi = function () {
        return !Fi.length && ei.ticker.remove(Wi);
    },
    $i = function (t) {
        for (var e = Fi.length; e--; ) Fi[e] === t && Fi.splice(e, 1);
        ei.to(Vi, { overwrite: !0, delay: 15, duration: 0, onComplete: Vi, data: "_draggable" });
    },
    ji = function (t, e, r, n) {
        if (t.addEventListener) {
            var i = fi[e];
            (n = n || (hi ? { passive: !1 } : null)), t.addEventListener(i || e, r, n), i && e !== i && t.addEventListener(e, r, n);
        }
    },
    Gi = function (t, e, r) {
        if (t.removeEventListener) {
            var n = fi[e];
            t.removeEventListener(n || e, r), n && e !== n && t.removeEventListener(e, r);
        }
    },
    Zi = function (t) {
        t.preventDefault && t.preventDefault(), t.preventManipulation && t.preventManipulation();
    },
    Qi = function t(e) {
        (gi = e.touches && pi < e.touches.length), Gi(e.target, "touchend", t);
    },
    Ki = function (t) {
        (gi = t.touches && pi < t.touches.length), ji(t.target, "touchend", Qi);
    },
    Ji = function (t) {
        return ri.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0;
    },
    to = function (t) {
        return ri.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0;
    },
    eo = function t(e, r) {
        ji(e, "scroll", r), no(e.parentNode) || t(e.parentNode, r);
    },
    ro = function t(e, r) {
        Gi(e, "scroll", r), no(e.parentNode) || t(e.parentNode, r);
    },
    no = function (t) {
        return !(t && t !== ii && 9 !== t.nodeType && t !== ni.body && t !== ri && t.nodeType && t.parentNode);
    },
    io = function (t, e) {
        var r = "x" === e ? "Width" : "Height",
            n = "scroll" + r,
            i = "client" + r;
        return Math.max(0, no(t) ? Math.max(ii[n], oi[n]) - (ri["inner" + r] || ii[i] || oi[i]) : t[n] - t[i]);
    },
    oo = function t(e, r) {
        var n = io(e, "x"),
            i = io(e, "y");
        no(e) ? (e = Hi) : t(e.parentNode, r), (e._gsMaxScrollX = n), (e._gsMaxScrollY = i), r || ((e._gsScrollX = e.scrollLeft || 0), (e._gsScrollY = e.scrollTop || 0));
    },
    ao = function (t, e, r) {
        var n = t.style;
        n && (ki(n[e]) && (e = ui(e, t) || e), null == r ? n.removeProperty && n.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : (n[e] = r));
    },
    so = function (t) {
        return ri.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t);
    },
    lo = {},
    uo = function (t) {
        if (t === ri)
            return (
                (lo.left = lo.top = 0),
                (lo.width = lo.right = ii.clientWidth || t.innerWidth || oi.clientWidth || 0),
                (lo.height = lo.bottom = (t.innerHeight || 0) - 20 < ii.clientHeight ? ii.clientHeight : t.innerHeight || oi.clientHeight || 0),
                lo
            );
        var e = t.ownerDocument || ni,
            r = ki(t.pageX) ? (t.nodeType || ki(t.left) || ki(t.top) ? ci(t)[0].getBoundingClientRect() : t) : { left: t.pageX - to(e), top: t.pageY - Ji(e), right: t.pageX - to(e) + 1, bottom: t.pageY - Ji(e) + 1 };
        return (
            ki(r.right) && !ki(r.width)
                ? ((r.right = r.left + r.width), (r.bottom = r.top + r.height))
                : ki(r.width) && (r = { width: r.right - r.left, height: r.bottom - r.top, right: r.right, left: r.left, bottom: r.bottom, top: r.top }),
            r
        );
    },
    co = function (t, e, r) {
        var n,
            i = t.vars,
            o = i[r],
            a = t._listeners[e];
        return Si(o) && (n = o.apply(i.callbackScope || t, i[r + "Params"] || [t.pointerEvent])), a && !1 === t.dispatchEvent(e) && (n = !1), n;
    },
    ho = function (t, e) {
        var r,
            n,
            i,
            o = ci(t)[0];
        return o.nodeType || o === ri
            ? po(o, e)
            : ki(t.left)
            ? { left: (n = t.min || t.minX || t.minRotation || 0), top: (r = t.min || t.minY || 0), width: (t.max || t.maxX || t.maxRotation || 0) - n, height: (t.max || t.maxY || 0) - r }
            : ((i = { x: 0, y: 0 }), { left: t.left - i.x, top: t.top - i.y, width: t.width, height: t.height });
    },
    fo = {},
    po = function (t, e) {
        e = ci(e)[0];
        var r,
            n,
            i,
            o,
            a,
            s,
            l,
            u,
            c,
            h,
            d,
            f,
            p,
            g,
            m = t.getBBox && t.ownerSVGElement,
            _ = t.ownerDocument || ni;
        if (t === ri)
            (i = Ji(_)),
                (n = (r = to(_)) + (_.documentElement.clientWidth || t.innerWidth || _.body.clientWidth || 0)),
                (o = i + ((t.innerHeight || 0) - 20 < _.documentElement.clientHeight ? _.documentElement.clientHeight : t.innerHeight || _.body.clientHeight || 0));
        else {
            if (e === ri || ki(e)) return t.getBoundingClientRect();
            (r = i = 0),
                m
                    ? ((d = (h = t.getBBox()).width), (f = h.height))
                    : (t.viewBox && (h = t.viewBox.baseVal) && ((r = h.x || 0), (i = h.y || 0), (d = h.width), (f = h.height)),
                      d ||
                          ((h = "border-box" === (p = so(t)).boxSizing),
                          (d = (parseFloat(p.width) || t.clientWidth || 0) + (h ? 0 : parseFloat(p.borderLeftWidth) + parseFloat(p.borderRightWidth))),
                          (f = (parseFloat(p.height) || t.clientHeight || 0) + (h ? 0 : parseFloat(p.borderTopWidth) + parseFloat(p.borderBottomWidth))))),
                (n = d),
                (o = f);
        }
        return t === e
            ? { left: r, top: i, width: n - r, height: o - i }
            : ((s = (a = ti(e, !0).multiply(ti(t))).apply({ x: r, y: i })),
              (l = a.apply({ x: n, y: i })),
              (u = a.apply({ x: n, y: o })),
              (c = a.apply({ x: r, y: o })),
              (r = Math.min(s.x, l.x, u.x, c.x)),
              (i = Math.min(s.y, l.y, u.y, c.y)),
              { left: r + ((g = e.parentNode || {}).scrollLeft || 0), top: i + (g.scrollTop || 0), width: Math.max(s.x, l.x, u.x, c.x) - r, height: Math.max(s.y, l.y, u.y, c.y) - i });
    },
    go = function (t, e, r, n, i, o) {
        var a,
            s,
            l,
            u = {};
        if (e)
            if (1 !== i && e instanceof Array) {
                if (((u.end = a = []), (l = e.length), Mi(e[0]))) for (s = 0; s < l; s++) a[s] = qi(e[s], i);
                else for (s = 0; s < l; s++) a[s] = e[s] * i;
                (r += 1.1), (n -= 1.1);
            } else
                Si(e)
                    ? (u.end = function (r) {
                          var n,
                              o,
                              a = e.call(t, r);
                          if (1 !== i)
                              if (Mi(a)) {
                                  for (o in ((n = {}), a)) n[o] = a[o] * i;
                                  a = n;
                              } else a *= i;
                          return a;
                      })
                    : (u.end = e);
        return (r || 0 === r) && (u.max = r), (n || 0 === n) && (u.min = n), o && (u.velocity = 0), u;
    },
    mo = function t(e) {
        var r;
        return (
            !(!e || !e.getAttribute || e === oi) && (!("true" !== (r = e.getAttribute("data-clickable")) && ("false" === r || (!e.onclick && !Ni.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable")))) || t(e.parentNode))
        );
    },
    _o = function (t, e) {
        for (var r, n = t.length; n--; ) ((r = t[n]).ondragstart = r.onselectstart = e ? null : Ci), ei.set(r, { lazy: !0, userSelect: e ? "text" : "none" });
    },
    vo = function t(e) {
        return "fixed" === so(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0);
    },
    yo = function (t, e) {
        (t = ei.utils.toArray(t)[0]), (e = e || {});
        var r,
            n,
            i,
            o,
            a,
            s,
            l = document.createElement("div"),
            u = l.style,
            c = t.firstChild,
            h = 0,
            d = 0,
            f = t.scrollTop,
            p = t.scrollLeft,
            g = t.scrollWidth,
            m = t.scrollHeight,
            _ = 0,
            v = 0,
            y = 0;
        xi && !1 !== e.force3D ? ((a = "translate3d("), (s = "px,0px)")) : Ei && ((a = "translate("), (s = "px)")),
            (this.scrollTop = function (t, e) {
                if (!arguments.length) return -this.top();
                this.top(-t, e);
            }),
            (this.scrollLeft = function (t, e) {
                if (!arguments.length) return -this.left();
                this.left(-t, e);
            }),
            (this.left = function (r, n) {
                if (!arguments.length) return -(t.scrollLeft + d);
                var i = t.scrollLeft - p,
                    o = d;
                if ((i > 2 || i < -2) && !n) return (p = t.scrollLeft), ei.killTweensOf(this, { left: 1, scrollLeft: 1 }), this.left(-p), void (e.onKill && e.onKill());
                (r = -r) < 0 ? ((d = (r - 0.5) | 0), (r = 0)) : r > v ? ((d = (r - v) | 0), (r = v)) : (d = 0),
                    (d || o) && (this._skip || (u[Ei] = a + -d + "px," + -h + s), d + _ >= 0 && (u.paddingRight = d + _ + "px")),
                    (t.scrollLeft = 0 | r),
                    (p = t.scrollLeft);
            }),
            (this.top = function (r, n) {
                if (!arguments.length) return -(t.scrollTop + h);
                var i = t.scrollTop - f,
                    o = h;
                if ((i > 2 || i < -2) && !n) return (f = t.scrollTop), ei.killTweensOf(this, { top: 1, scrollTop: 1 }), this.top(-f), void (e.onKill && e.onKill());
                (r = -r) < 0 ? ((h = (r - 0.5) | 0), (r = 0)) : r > y ? ((h = (r - y) | 0), (r = y)) : (h = 0), (h || o) && (this._skip || (u[Ei] = a + -d + "px," + -h + s)), (t.scrollTop = 0 | r), (f = t.scrollTop);
            }),
            (this.maxScrollTop = function () {
                return y;
            }),
            (this.maxScrollLeft = function () {
                return v;
            }),
            (this.disable = function () {
                for (c = l.firstChild; c; ) (o = c.nextSibling), t.appendChild(c), (c = o);
                t === l.parentNode && t.removeChild(l);
            }),
            (this.enable = function () {
                if ((c = t.firstChild) !== l) {
                    for (; c; ) (o = c.nextSibling), l.appendChild(c), (c = o);
                    t.appendChild(l), this.calibrate();
                }
            }),
            (this.calibrate = function (e) {
                var o,
                    a,
                    s,
                    c = t.clientWidth === r;
                (f = t.scrollTop),
                    (p = t.scrollLeft),
                    (c && t.clientHeight === n && l.offsetHeight === i && g === t.scrollWidth && m === t.scrollHeight && !e) ||
                        ((h || d) && ((a = this.left()), (s = this.top()), this.left(-t.scrollLeft), this.top(-t.scrollTop)),
                        (o = so(t)),
                        (c && !e) || ((u.display = "block"), (u.width = "auto"), (u.paddingRight = "0px"), (_ = Math.max(0, t.scrollWidth - t.clientWidth)) && (_ += parseFloat(o.paddingLeft) + (wi ? parseFloat(o.paddingRight) : 0))),
                        (u.display = "inline-block"),
                        (u.position = "relative"),
                        (u.overflow = "visible"),
                        (u.verticalAlign = "top"),
                        (u.boxSizing = "content-box"),
                        (u.width = "100%"),
                        (u.paddingRight = _ + "px"),
                        wi && (u.paddingBottom = o.paddingBottom),
                        (r = t.clientWidth),
                        (n = t.clientHeight),
                        (g = t.scrollWidth),
                        (m = t.scrollHeight),
                        (v = t.scrollWidth - r),
                        (y = t.scrollHeight - n),
                        (i = l.offsetHeight),
                        (u.display = "block"),
                        (a || s) && (this.left(a), this.top(s)));
            }),
            (this.content = l),
            (this.element = t),
            (this._skip = !1),
            this.enable();
    },
    xo = function (t) {
        if (bi() && document.body) {
            var e = window && window.navigator;
            (ri = window),
                (ni = document),
                (ii = ni.documentElement),
                (oi = ni.body),
                (ai = Pi("div")),
                (yi = !!window.PointerEvent),
                ((si = Pi("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
                (vi = "grab" === si.style.cursor ? "grab" : "move"),
                (mi = e && -1 !== e.userAgent.toLowerCase().indexOf("android")),
                (di = ("ontouchstart" in ii && "orientation" in ri) || (e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0))),
                (n = Pi("div")),
                (i = Pi("div")),
                (o = i.style),
                (a = oi),
                (o.display = "inline-block"),
                (o.position = "relative"),
                (n.style.cssText = i.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
                n.appendChild(i),
                a.appendChild(n),
                (r = i.offsetHeight + 18 > n.scrollHeight),
                a.removeChild(n),
                (wi = r),
                (fi = (function (t) {
                    for (
                        var e = t.split(","),
                            r = (("onpointerdown" in ai) ? "pointerdown,pointermove,pointerup,pointercancel" : ("onmspointerdown" in ai) ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(","),
                            n = {},
                            i = 4;
                        --i > -1;

                    )
                        (n[e[i]] = r[i]), (n[r[i]] = e[i]);
                    try {
                        ii.addEventListener(
                            "test",
                            null,
                            Object.defineProperty({}, "passive", {
                                get: function () {
                                    hi = 1;
                                },
                            })
                        );
                    } catch (t) {}
                    return n;
                })("touchstart,touchmove,touchend,touchcancel")),
                ji(ni, "touchcancel", Ci),
                ji(ri, "touchmove", Ci),
                oi && oi.addEventListener("touchstart", Ci),
                ji(ni, "contextmenu", function () {
                    for (var t in Yi) Yi[t].isPressed && Yi[t].endDrag();
                }),
                (ei = li = Ti());
        }
        var r, n, i, o, a;
        ei ? ((_i = ei.plugins.inertia), (ui = ei.utils.checkPrefix), (Ei = ui(Ei)), (Ai = ui(Ai)), (ci = ei.utils.toArray), (xi = !!ui("perspective"))) : t && console.warn("Please gsap.registerPlugin(Draggable)");
    },
    wo = (function (t) {
        var e, r;
        function n(e, r) {
            var i;
            (i = t.call(this) || this),
                li || xo(1),
                (e = ci(e)[0]),
                _i || (_i = ei.plugins.inertia),
                (i.vars = r = qi(r || {})),
                (i.target = e),
                (i.x = i.y = i.rotation = 0),
                (i.dragResistance = parseFloat(r.dragResistance) || 0),
                (i.edgeResistance = isNaN(r.edgeResistance) ? 1 : parseFloat(r.edgeResistance) || 0),
                (i.lockAxis = r.lockAxis),
                (i.autoScroll = r.autoScroll || 0),
                (i.lockedAxis = null),
                (i.allowEventDefault = !!r.allowEventDefault),
                ei.getProperty(e, "x");
            var o,
                a,
                s,
                l,
                u,
                c,
                h,
                d,
                f,
                p,
                g,
                m,
                _,
                v,
                y,
                x,
                w,
                b,
                T,
                S,
                M,
                k,
                C,
                E,
                A,
                D,
                O,
                P,
                L,
                R,
                X,
                F,
                Y = (r.type || "x,y").toLowerCase(),
                I = ~Y.indexOf("x") || ~Y.indexOf("y"),
                N = -1 !== Y.indexOf("rotation"),
                B = N ? "rotation" : I ? "x" : "left",
                z = I ? "y" : "top",
                H = !(!~Y.indexOf("x") && !~Y.indexOf("left") && "scroll" !== Y),
                q = !(!~Y.indexOf("y") && !~Y.indexOf("top") && "scroll" !== Y),
                U = r.minimumMovement || 2,
                W = (function (t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                })(i),
                V = ci(r.trigger || r.handle || e),
                $ = {},
                j = 0,
                G = !1,
                Z = r.autoScrollMarginTop || 40,
                Q = r.autoScrollMarginRight || 40,
                K = r.autoScrollMarginBottom || 40,
                J = r.autoScrollMarginLeft || 40,
                tt = r.clickableTest || mo,
                et = 0,
                rt = e._gsap || ei.core.getCache(e),
                nt = vo(e),
                it = function (t, r) {
                    return parseFloat(rt.get(e, t, r));
                },
                ot = e.ownerDocument || ni,
                at = function (t) {
                    return Zi(t), t.stopImmediatePropagation && t.stopImmediatePropagation(), !1;
                },
                st = function t(r) {
                    if (W.autoScroll && W.isDragging && (G || w)) {
                        var n,
                            i,
                            o,
                            s,
                            l,
                            u,
                            c,
                            h,
                            f = e,
                            p = 15 * W.autoScroll;
                        for (
                            G = !1,
                                Hi.scrollTop = null != ri.pageYOffset ? ri.pageYOffset : null != ot.documentElement.scrollTop ? ot.documentElement.scrollTop : ot.body.scrollTop,
                                Hi.scrollLeft = null != ri.pageXOffset ? ri.pageXOffset : null != ot.documentElement.scrollLeft ? ot.documentElement.scrollLeft : ot.body.scrollLeft,
                                s = W.pointerX - Hi.scrollLeft,
                                l = W.pointerY - Hi.scrollTop;
                            f && !i;

                        )
                            (n = (i = no(f.parentNode)) ? Hi : f.parentNode),
                                (o = i ? { bottom: Math.max(ii.clientHeight, ri.innerHeight || 0), right: Math.max(ii.clientWidth, ri.innerWidth || 0), left: 0, top: 0 } : n.getBoundingClientRect()),
                                (u = c = 0),
                                q &&
                                    ((h = n._gsMaxScrollY - n.scrollTop) < 0
                                        ? (c = h)
                                        : l > o.bottom - K && h
                                        ? ((G = !0), (c = Math.min(h, (p * (1 - Math.max(0, o.bottom - l) / K)) | 0)))
                                        : l < o.top + Z && n.scrollTop && ((G = !0), (c = -Math.min(n.scrollTop, (p * (1 - Math.max(0, l - o.top) / Z)) | 0))),
                                    c && (n.scrollTop += c)),
                                H &&
                                    ((h = n._gsMaxScrollX - n.scrollLeft) < 0
                                        ? (u = h)
                                        : s > o.right - Q && h
                                        ? ((G = !0), (u = Math.min(h, (p * (1 - Math.max(0, o.right - s) / Q)) | 0)))
                                        : s < o.left + J && n.scrollLeft && ((G = !0), (u = -Math.min(n.scrollLeft, (p * (1 - Math.max(0, s - o.left) / J)) | 0))),
                                    u && (n.scrollLeft += u)),
                                i && (u || c) && (ri.scrollTo(n.scrollLeft, n.scrollTop), xt(W.pointerX + u, W.pointerY + c)),
                                (f = n);
                    }
                    if (w) {
                        var g = W.x,
                            m = W.y;
                        N
                            ? ((W.deltaX = g - parseFloat(rt.rotation)), (W.rotation = g), (rt.rotation = g + "deg"), rt.renderTransform(1, rt))
                            : a
                            ? (q && ((W.deltaY = m - a.top()), a.top(m)), H && ((W.deltaX = g - a.left()), a.left(g)))
                            : I
                            ? (q && ((W.deltaY = m - parseFloat(rt.y)), (rt.y = m + "px")), H && ((W.deltaX = g - parseFloat(rt.x)), (rt.x = g + "px")), rt.renderTransform(1, rt))
                            : (q && ((W.deltaY = m - parseFloat(e.style.top || 0)), (e.style.top = m + "px")), H && ((W.deltaX = g - parseFloat(e.style.left || 0)), (e.style.left = g + "px"))),
                            !d || r || P || ((P = !0), !1 === co(W, "drag", "onDrag") && (H && (W.x -= W.deltaX), q && (W.y -= W.deltaY), t(!0)), (P = !1));
                    }
                    w = !1;
                },
                lt = function (t, r) {
                    var n,
                        i,
                        o = W.x,
                        s = W.y;
                    e._gsap || (rt = ei.core.getCache(e)),
                        rt.uncache && ei.getProperty(e, "x"),
                        I
                            ? ((W.x = parseFloat(rt.x)), (W.y = parseFloat(rt.y)))
                            : N
                            ? (W.x = W.rotation = parseFloat(rt.rotation))
                            : a
                            ? ((W.y = a.top()), (W.x = a.left()))
                            : ((W.y = parseFloat(e.style.top || ((i = so(e)) && i.top)) || 0), (W.x = parseFloat(e.style.left || (i || {}).left) || 0)),
                        (T || S || M) &&
                            !r &&
                            (W.isDragging || W.isThrowing) &&
                            (M && ((zi.x = W.x), (zi.y = W.y), (n = M(zi)).x !== W.x && ((W.x = n.x), (w = !0)), n.y !== W.y && ((W.y = n.y), (w = !0))),
                            T && (n = T(W.x)) !== W.x && ((W.x = n), N && (W.rotation = n), (w = !0)),
                            S && ((n = S(W.y)) !== W.y && (W.y = n), (w = !0))),
                        w && st(!0),
                        t || ((W.deltaX = W.x - o), (W.deltaY = W.y - s), co(W, "throwupdate", "onThrowUpdate"));
                },
                ut = function (t, e, r, n) {
                    return (
                        null == e && (e = -1e20),
                        null == r && (r = 1e20),
                        Si(t)
                            ? function (i) {
                                  var o = W.isPressed ? 1 - W.edgeResistance : 1;
                                  return t.call(W, i > r ? r + (i - r) * o : i < e ? e + (i - e) * o : i) * n;
                              }
                            : Oi(t)
                            ? function (n) {
                                  for (var i, o, a = t.length, s = 0, l = 1e20; --a > -1; ) (o = (i = t[a]) - n) < 0 && (o = -o), o < l && i >= e && i <= r && ((s = a), (l = o));
                                  return t[s];
                              }
                            : isNaN(t)
                            ? function (t) {
                                  return t;
                              }
                            : function () {
                                  return t * n;
                              }
                    );
                },
                ct = function () {
                    var t, n, i, o;
                    (h = !1),
                        a
                            ? (a.calibrate(), (W.minX = g = -a.maxScrollLeft()), (W.minY = _ = -a.maxScrollTop()), (W.maxX = p = W.maxY = m = 0), (h = !0))
                            : r.bounds &&
                              ((t = ho(r.bounds, e.parentNode)),
                              N
                                  ? ((W.minX = g = t.left), (W.maxX = p = t.left + t.width), (W.minY = _ = W.maxY = m = 0))
                                  : ki(r.bounds.maxX) && ki(r.bounds.maxY)
                                  ? ((n = ho(e, e.parentNode)),
                                    (W.minX = g = Math.round(it(B, "px") + t.left - n.left - 0.5)),
                                    (W.minY = _ = Math.round(it(z, "px") + t.top - n.top - 0.5)),
                                    (W.maxX = p = Math.round(g + (t.width - n.width))),
                                    (W.maxY = m = Math.round(_ + (t.height - n.height))))
                                  : ((t = r.bounds), (W.minX = g = t.minX), (W.minY = _ = t.minY), (W.maxX = p = t.maxX), (W.maxY = m = t.maxY)),
                              g > p && ((W.minX = p), (W.maxX = p = g), (g = W.minX)),
                              _ > m && ((W.minY = m), (W.maxY = m = _), (_ = W.minY)),
                              N && ((W.minRotation = g), (W.maxRotation = p)),
                              (h = !0)),
                        r.liveSnap &&
                            ((i = !0 === r.liveSnap ? r.snap || {} : r.liveSnap),
                            (o = Oi(i) || Si(i)),
                            N
                                ? ((T = ut(o ? i : i.rotation, g, p, 1)), (S = null))
                                : i.points
                                ? (M = (function (t, e, r, n, i, o, a) {
                                      return (
                                          (o = o && o < 1e20 ? o * o : 1e20),
                                          Si(t)
                                              ? function (s) {
                                                    var l,
                                                        u,
                                                        c,
                                                        h = W.isPressed ? 1 - W.edgeResistance : 1,
                                                        d = s.x,
                                                        f = s.y;
                                                    return (
                                                        (s.x = d = d > r ? r + (d - r) * h : d < e ? e + (d - e) * h : d),
                                                        (s.y = f = f > i ? i + (f - i) * h : f < n ? n + (f - n) * h : f),
                                                        (l = t.call(W, s)) !== s && ((s.x = l.x), (s.y = l.y)),
                                                        1 !== a && ((s.x *= a), (s.y *= a)),
                                                        o < 1e20 && (u = s.x - d) * u + (c = s.y - f) * c > o && ((s.x = d), (s.y = f)),
                                                        s
                                                    );
                                                }
                                              : Oi(t)
                                              ? function (e) {
                                                    for (var r, n, i, a, s = t.length, l = 0, u = 1e20; --s > -1; ) (a = (r = (i = t[s]).x - e.x) * r + (n = i.y - e.y) * n) < u && ((l = s), (u = a));
                                                    return u <= o ? t[l] : e;
                                                }
                                              : function (t) {
                                                    return t;
                                                }
                                      );
                                  })(o ? i : i.points, g, p, _, m, i.radius, a ? -1 : 1))
                                : (H && (T = ut(o ? i : i.x || i.left || i.scrollLeft, g, p, a ? -1 : 1)), q && (S = ut(o ? i : i.y || i.top || i.scrollTop, _, m, a ? -1 : 1))));
                },
                ht = function () {
                    (W.isThrowing = !1), co(W, "throwcomplete", "onThrowComplete");
                },
                dt = function () {
                    W.isThrowing = !1;
                },
                ft = function (t, n) {
                    var i, o, s, l;
                    t && _i
                        ? (!0 === t &&
                              ((i = r.snap || r.liveSnap || {}),
                              (o = Oi(i) || Si(i)),
                              (t = { resistance: (r.throwResistance || r.resistance || 1e3) / (N ? 10 : 1) }),
                              N
                                  ? (t.rotation = go(W, o ? i : i.rotation, p, g, 1, n))
                                  : (H && (t[B] = go(W, o ? i : i.points || i.x || i.left, p, g, a ? -1 : 1, n || "x" === W.lockedAxis)),
                                    q && (t[z] = go(W, o ? i : i.points || i.y || i.top, m, _, a ? -1 : 1, n || "y" === W.lockedAxis)),
                                    (i.points || (Oi(i) && Mi(i[0]))) && ((t.linkedProps = B + "," + z), (t.radius = i.radius)))),
                          (W.isThrowing = !0),
                          (l = isNaN(r.overshootTolerance) ? (1 === r.edgeResistance ? 0 : 1 - W.edgeResistance + 0.2) : r.overshootTolerance),
                          t.duration ||
                              (t.duration = { max: Math.max(r.minDuration || 0, "maxDuration" in r ? r.maxDuration : 2), min: isNaN(r.minDuration) ? (0 === l || (Mi(t) && t.resistance > 1e3) ? 0 : 0.5) : r.minDuration, overshoot: l }),
                          (W.tween = s = ei.to(a || e, {
                              inertia: t,
                              data: "_draggable",
                              onComplete: ht,
                              onInterrupt: dt,
                              onUpdate: r.fastMode ? co : lt,
                              onUpdateParams: r.fastMode ? [W, "onthrowupdate", "onThrowUpdate"] : i && i.radius ? [!1, !0] : [],
                          })),
                          r.fastMode || (a && (a._skip = !0), s.render(1e9, !0, !0), lt(!0, !0), (W.endX = W.x), (W.endY = W.y), N && (W.endRotation = W.x), s.play(0), lt(!0, !0), a && (a._skip = !1)))
                        : h && W.applyBounds();
                },
                pt = function (t) {
                    var r,
                        n = E;
                    (E = ti(e.parentNode, !0)), t && W.isPressed && !E.equals(n || new Jn()) && ((r = n.inverse().apply({ x: s, y: l })), E.apply(r, r), (s = r.x), (l = r.y)), E.equals(Ri) && (E = null);
                },
                gt = function () {
                    var t,
                        r,
                        n,
                        i = 1 - W.edgeResistance,
                        o = nt ? to(ot) : 0,
                        d = nt ? Ji(ot) : 0;
                    pt(!1),
                        (fo.x = W.pointerX - o),
                        (fo.y = W.pointerY - d),
                        E && E.apply(fo, fo),
                        (s = fo.x),
                        (l = fo.y),
                        w && (xt(W.pointerX, W.pointerY), st(!0)),
                        (F = ti(e)),
                        a
                            ? (ct(), (c = a.top()), (u = a.left()))
                            : (mt() ? (lt(!0, !0), ct()) : W.applyBounds(),
                              N
                                  ? ((t = e.ownerSVGElement ? [rt.xOrigin - e.getBBox().x, rt.yOrigin - e.getBBox().y] : (so(e)[Ai] || "0 0").split(" ")),
                                    (x = W.rotationOrigin = ti(e).apply({ x: parseFloat(t[0]) || 0, y: parseFloat(t[1]) || 0 })),
                                    lt(!0, !0),
                                    (r = W.pointerX - x.x - o),
                                    (n = x.y - W.pointerY + d),
                                    (u = W.x),
                                    (c = W.y = Math.atan2(n, r) * Li))
                                  : ((c = it(z, "px")), (u = it(B, "px")))),
                        h && i && (u > p ? (u = p + (u - p) / i) : u < g && (u = g - (g - u) / i), N || (c > m ? (c = m + (c - m) / i) : c < _ && (c = _ - (_ - c) / i))),
                        (W.startX = u = Di(u)),
                        (W.startY = c = Di(c));
                },
                mt = function () {
                    return W.tween && W.tween.isActive();
                },
                _t = function () {
                    !si.parentNode || mt() || W.isDragging || si.parentNode.removeChild(si);
                },
                vt = function (t, i) {
                    var u;
                    if (!o || W.isPressed || !t || (!(("mousedown" !== t.type && "pointerdown" !== t.type) || i) && Xi() - et < 30 && fi[W.pointerEvent.type])) X && t && o && Zi(t);
                    else {
                        if (
                            ((A = mt()),
                            (W.pointerEvent = t),
                            fi[t.type]
                                ? ((C = ~t.type.indexOf("touch") ? t.currentTarget || t.target : ot), ji(C, "touchend", wt), ji(C, "touchmove", yt), ji(C, "touchcancel", wt), ji(ot, "touchstart", Ki))
                                : ((C = null), ji(ot, "mousemove", yt)),
                            (O = null),
                            (yi && C) || (ji(ot, "mouseup", wt), t && t.target && ji(t.target, "mouseup", wt)),
                            (k = tt.call(W, t.target) && !1 === r.dragClickables && !i))
                        )
                            return ji(t.target, "change", wt), co(W, "pressInit", "onPressInit"), co(W, "press", "onPress"), _o(V, !0), void (X = !1);
                        var c;
                        if (
                            ((D = !(!C || H === q || !1 === W.vars.allowNativeTouchScrolling || (W.vars.allowContextMenu && t && (t.ctrlKey || t.which > 2))) && (H ? "y" : "x")),
                            (X = !D && !W.allowEventDefault) && (Zi(t), ji(ri, "touchforcechange", Zi)),
                            t.changedTouches ? ((t = v = t.changedTouches[0]), (y = t.identifier)) : t.pointerId ? (y = t.pointerId) : (v = y = null),
                            pi++,
                            (c = st),
                            Fi.push(c),
                            1 === Fi.length && ei.ticker.add(Wi),
                            (l = W.pointerY = t.pageY),
                            (s = W.pointerX = t.pageX),
                            co(W, "pressInit", "onPressInit"),
                            (D || W.autoScroll) && oo(e.parentNode),
                            !e.parentNode || !W.autoScroll || a || N || !e.parentNode._gsMaxScrollX || si.parentNode || e.getBBox || ((si.style.width = e.parentNode.scrollWidth + "px"), e.parentNode.appendChild(si)),
                            gt(),
                            W.tween && W.tween.kill(),
                            (W.isThrowing = !1),
                            ei.killTweensOf(a || e, $, !0),
                            a && ei.killTweensOf(e, { scrollTo: 1 }, !0),
                            (W.tween = W.lockedAxis = null),
                            (r.zIndexBoost || (!N && !a && !1 !== r.zIndexBoost)) && (e.style.zIndex = n.zIndex++),
                            (W.isPressed = !0),
                            (d = !(!r.onDrag && !W._listeners.drag)),
                            (f = !(!r.onMove && !W._listeners.move)),
                            !1 !== r.cursor || r.activeCursor)
                        )
                            for (u = V.length; --u > -1; ) ei.set(V[u], { cursor: r.activeCursor || r.cursor || ("grab" === vi ? "grabbing" : vi) });
                        co(W, "press", "onPress");
                    }
                },
                yt = function (t) {
                    var r,
                        n,
                        i,
                        a,
                        u,
                        c,
                        h = t;
                    if (o && !gi && W.isPressed && t) {
                        if (((W.pointerEvent = t), (r = t.changedTouches))) {
                            if ((t = r[0]) !== v && t.identifier !== y) {
                                for (a = r.length; --a > -1 && (t = r[a]).identifier !== y && t.target !== e; );
                                if (a < 0) return;
                            }
                        } else if (t.pointerId && y && t.pointerId !== y) return;
                        C &&
                        D &&
                        !O &&
                        ((fo.x = t.pageX - (nt ? to(ot) : 0)),
                        (fo.y = t.pageY - (nt ? Ji(ot) : 0)),
                        E && E.apply(fo, fo),
                        (n = fo.x),
                        (i = fo.y),
                        (((u = Math.abs(n - s)) !== (c = Math.abs(i - l)) && (u > U || c > U)) || (mi && D === O)) &&
                            ((O = u > c && H ? "x" : "y"),
                            D && O !== D && ji(ri, "touchforcechange", Zi),
                            !1 !== W.vars.lockAxisOnTouchScroll && H && q && ((W.lockedAxis = "x" === O ? "y" : "x"), Si(W.vars.onLockAxis) && W.vars.onLockAxis.call(W, h)),
                            mi && D === O))
                            ? wt(h)
                            : (W.allowEventDefault || (D && (!O || D === O)) || !1 === h.cancelable ? X && (X = !1) : (Zi(h), (X = !0)), W.autoScroll && (G = !0), xt(t.pageX, t.pageY, f));
                    } else X && t && o && Zi(t);
                },
                xt = function (t, e, r) {
                    var n,
                        i,
                        o,
                        a,
                        d,
                        f,
                        v = 1 - W.dragResistance,
                        y = 1 - W.edgeResistance,
                        b = W.pointerX,
                        k = W.pointerY,
                        C = c,
                        A = W.x,
                        D = W.y,
                        O = W.endX,
                        P = W.endY,
                        L = W.endRotation,
                        R = w;
                    (W.pointerX = t),
                        (W.pointerY = e),
                        nt && ((t -= to(ot)), (e -= Ji(ot))),
                        N
                            ? ((a = Math.atan2(x.y - e, t - x.x) * Li), (d = W.y - a) > 180 ? ((c -= 360), (W.y = a)) : d < -180 && ((c += 360), (W.y = a)), W.x !== u || Math.abs(c - a) > U ? ((W.y = a), (o = u + (c - a) * v)) : (o = u))
                            : (E && ((f = t * E.a + e * E.c + E.e), (e = t * E.b + e * E.d + E.f), (t = f)),
                              (i = e - l) < U && i > -U && (i = 0),
                              (n = t - s) < U && n > -U && (n = 0),
                              (W.lockAxis || W.lockedAxis) &&
                                  (n || i) &&
                                  ((f = W.lockedAxis) || ((W.lockedAxis = f = H && Math.abs(n) > Math.abs(i) ? "y" : q ? "x" : null), f && Si(W.vars.onLockAxis) && W.vars.onLockAxis.call(W, W.pointerEvent)),
                                  "y" === f ? (i = 0) : "x" === f && (n = 0)),
                              (o = Di(u + n * v)),
                              (a = Di(c + i * v))),
                        (T || S || M) && (W.x !== o || (W.y !== a && !N)) && (M && ((zi.x = o), (zi.y = a), (f = M(zi)), (o = Di(f.x)), (a = Di(f.y))), T && (o = Di(T(o))), S && (a = Di(S(a)))),
                        h && (o > p ? (o = p + Math.round((o - p) * y)) : o < g && (o = g + Math.round((o - g) * y)), N || (a > m ? (a = Math.round(m + (a - m) * y)) : a < _ && (a = Math.round(_ + (a - _) * y)))),
                        (W.x !== o || (W.y !== a && !N)) &&
                            (N ? ((W.endRotation = W.x = W.endX = o), (w = !0)) : (q && ((W.y = W.endY = a), (w = !0)), H && ((W.x = W.endX = o), (w = !0))),
                            r && !1 === co(W, "move", "onMove")
                                ? ((W.pointerX = b), (W.pointerY = k), (c = C), (W.x = A), (W.y = D), (W.endX = O), (W.endY = P), (W.endRotation = L), (w = R))
                                : !W.isDragging && W.isPressed && ((W.isDragging = !0), co(W, "dragstart", "onDragStart")));
                },
                wt = function t(n, i) {
                    if (
                        o &&
                        W.isPressed &&
                        (!n ||
                            null == y ||
                            i ||
                            !(
                                (n.pointerId && n.pointerId !== y && n.target !== e) ||
                                (n.changedTouches &&
                                    !(function (t, e) {
                                        for (var r = t.length; r--; ) if (t[r].identifier === e) return !0;
                                    })(n.changedTouches, y))
                            ))
                    ) {
                        W.isPressed = !1;
                        var a,
                            s,
                            l,
                            u,
                            c,
                            h = n,
                            d = W.isDragging,
                            f = W.vars.allowContextMenu && n && (n.ctrlKey || n.which > 2),
                            p = ei.delayedCall(0.001, _t);
                        if (
                            (C ? (Gi(C, "touchend", t), Gi(C, "touchmove", yt), Gi(C, "touchcancel", t), Gi(ot, "touchstart", Ki)) : Gi(ot, "mousemove", yt),
                            Gi(ri, "touchforcechange", Zi),
                            (yi && C) || (Gi(ot, "mouseup", t), n && n.target && Gi(n.target, "mouseup", t)),
                            (w = !1),
                            d && ((j = Bi = Xi()), (W.isDragging = !1)),
                            k && !f)
                        )
                            return n && (Gi(n.target, "change", t), (W.pointerEvent = h)), _o(V, !1), co(W, "release", "onRelease"), co(W, "click", "onClick"), void (k = !1);
                        for ($i(st), s = V.length; --s > -1; ) ao(V[s], "cursor", r.cursor || (!1 !== r.cursor ? vi : null));
                        if ((pi--, n)) {
                            if ((a = n.changedTouches) && (n = a[0]) !== v && n.identifier !== y) {
                                for (s = a.length; --s > -1 && (n = a[s]).identifier !== y && n.target !== e; );
                                if (s < 0) return;
                            }
                            (W.pointerEvent = h), (W.pointerX = n.pageX), (W.pointerY = n.pageY);
                        }
                        return (
                            f && h
                                ? (Zi(h), (X = !0), co(W, "release", "onRelease"))
                                : h && !d
                                ? ((X = !1),
                                  A && (r.snap || r.bounds) && ft(r.inertia || r.throwProps),
                                  co(W, "release", "onRelease"),
                                  (mi && "touchmove" === h.type) ||
                                      -1 !== h.type.indexOf("cancel") ||
                                      (co(W, "click", "onClick"),
                                      Xi() - et < 300 && co(W, "doubleclick", "onDoubleClick"),
                                      (u = h.target || e),
                                      (et = Xi()),
                                      (c = function () {
                                          et === L ||
                                              !W.enabled() ||
                                              W.isPressed ||
                                              h.defaultPrevented ||
                                              (u.click
                                                  ? u.click()
                                                  : ot.createEvent &&
                                                    ((l = ot.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, ri, 1, W.pointerEvent.screenX, W.pointerEvent.screenY, W.pointerX, W.pointerY, !1, !1, !1, !1, 0, null),
                                                    u.dispatchEvent(l)));
                                      }),
                                      mi || h.defaultPrevented || ei.delayedCall(0.05, c)))
                                : (ft(r.inertia || r.throwProps),
                                  W.allowEventDefault || !h || (!1 === r.dragClickables && tt.call(W, h.target)) || !d || (D && (!O || D !== O)) || !1 === h.cancelable ? (X = !1) : ((X = !0), Zi(h)),
                                  co(W, "release", "onRelease")),
                            mt() && p.duration(W.tween.duration()),
                            d && co(W, "dragend", "onDragEnd"),
                            !0
                        );
                    }
                    X && n && o && Zi(n);
                },
                bt = function (t) {
                    if (t && W.isDragging && !a) {
                        var r = t.target || e.parentNode,
                            n = r.scrollLeft - r._gsScrollX,
                            i = r.scrollTop - r._gsScrollY;
                        (n || i) && (E ? ((s -= n * E.a + i * E.c), (l -= i * E.d + n * E.b)) : ((s -= n), (l -= i)), (r._gsScrollX += n), (r._gsScrollY += i), xt(W.pointerX, W.pointerY));
                    }
                },
                Tt = function (t) {
                    var e = Xi(),
                        r = e - et < 100,
                        n = e - j < 50,
                        i = r && L === et,
                        o = W.pointerEvent && W.pointerEvent.defaultPrevented,
                        a = r && R === et,
                        s = t.isTrusted || (null == t.isTrusted && r && i);
                    if (((i || (n && !1 !== W.vars.suppressClickOnDrag)) && t.stopImmediatePropagation && t.stopImmediatePropagation(), r && (!W.pointerEvent || !W.pointerEvent.defaultPrevented) && (!i || (s && !a))))
                        return s && i && (R = et), void (L = et);
                    (W.isPressed || n || r) && ((s && t.detail && r && !o) || Zi(t)), r || n || (t && t.target && (W.pointerEvent = t), co(W, "click", "onClick"));
                },
                St = function (t) {
                    return E ? { x: t.x * E.a + t.y * E.c + E.e, y: t.x * E.b + t.y * E.d + E.f } : { x: t.x, y: t.y };
                };
            return (
                (b = n.get(e)) && b.kill(),
                (i.startDrag = function (t, r) {
                    var n, i, o, a;
                    vt(t || W.pointerEvent, !0),
                        r &&
                            !W.hitTest(t || W.pointerEvent) &&
                            ((n = uo(t || W.pointerEvent)), (i = uo(e)), (o = St({ x: n.left + n.width / 2, y: n.top + n.height / 2 })), (a = St({ x: i.left + i.width / 2, y: i.top + i.height / 2 })), (s -= o.x - a.x), (l -= o.y - a.y)),
                        W.isDragging || ((W.isDragging = !0), co(W, "dragstart", "onDragStart"));
                }),
                (i.drag = yt),
                (i.endDrag = function (t) {
                    return wt(t || W.pointerEvent, !0);
                }),
                (i.timeSinceDrag = function () {
                    return W.isDragging ? 0 : (Xi() - j) / 1e3;
                }),
                (i.timeSinceClick = function () {
                    return (Xi() - et) / 1e3;
                }),
                (i.hitTest = function (t, e) {
                    return n.hitTest(W.target, t, e);
                }),
                (i.getDirection = function (t, r) {
                    var n,
                        i,
                        o,
                        a,
                        s,
                        l,
                        h = "velocity" === t && _i ? t : Mi(t) && !N ? "element" : "start";
                    return (
                        "element" === h && ((s = uo(W.target)), (l = uo(t))),
                        (n = "start" === h ? W.x - u : "velocity" === h ? _i.getVelocity(e, B) : s.left + s.width / 2 - (l.left + l.width / 2)),
                        N
                            ? n < 0
                                ? "counter-clockwise"
                                : "clockwise"
                            : ((r = r || 2),
                              (i = "start" === h ? W.y - c : "velocity" === h ? _i.getVelocity(e, z) : s.top + s.height / 2 - (l.top + l.height / 2)),
                              (a = (o = Math.abs(n / i)) < 1 / r ? "" : n < 0 ? "left" : "right"),
                              o < r && ("" !== a && (a += "-"), (a += i < 0 ? "up" : "down")),
                              a)
                    );
                }),
                (i.applyBounds = function (t, n) {
                    var i, o, a, s, l, u;
                    if (t && r.bounds !== t) return (r.bounds = t), W.update(!0, n);
                    if ((lt(!0), ct(), h && !mt())) {
                        if (
                            ((i = W.x),
                            (o = W.y),
                            i > p ? (i = p) : i < g && (i = g),
                            o > m ? (o = m) : o < _ && (o = _),
                            (W.x !== i || W.y !== o) && ((a = !0), (W.x = W.endX = i), N ? (W.endRotation = i) : (W.y = W.endY = o), (w = !0), st(!0), W.autoScroll && !W.isDragging))
                        )
                            for (
                                oo(e.parentNode),
                                    s = e,
                                    Hi.scrollTop = null != ri.pageYOffset ? ri.pageYOffset : null != ot.documentElement.scrollTop ? ot.documentElement.scrollTop : ot.body.scrollTop,
                                    Hi.scrollLeft = null != ri.pageXOffset ? ri.pageXOffset : null != ot.documentElement.scrollLeft ? ot.documentElement.scrollLeft : ot.body.scrollLeft;
                                s && !u;

                            )
                                (l = (u = no(s.parentNode)) ? Hi : s.parentNode), q && l.scrollTop > l._gsMaxScrollY && (l.scrollTop = l._gsMaxScrollY), H && l.scrollLeft > l._gsMaxScrollX && (l.scrollLeft = l._gsMaxScrollX), (s = l);
                        W.isThrowing && (a || W.endX > p || W.endX < g || W.endY > m || W.endY < _) && ft(r.inertia || r.throwProps, a);
                    }
                    return W;
                }),
                (i.update = function (t, r, n) {
                    if (r && W.isPressed) {
                        var i = ti(e),
                            o = F.apply({ x: W.x - u, y: W.y - c }),
                            a = ti(e.parentNode, !0);
                        a.apply({ x: i.e - o.x, y: i.f - o.y }, o), (W.x -= o.x - a.e), (W.y -= o.y - a.f), st(!0), gt();
                    }
                    var s = W.x,
                        l = W.y;
                    return (
                        pt(!r),
                        t ? W.applyBounds() : (w && n && st(!0), lt(!0)),
                        r && (xt(W.pointerX, W.pointerY), w && st(!0)),
                        W.isPressed && !r && ((H && Math.abs(s - W.x) > 0.01) || (q && Math.abs(l - W.y) > 0.01 && !N)) && gt(),
                        W.autoScroll && (oo(e.parentNode, W.isDragging), (G = W.isDragging), st(!0), ro(e, bt), eo(e, bt)),
                        W
                    );
                }),
                (i.enable = function (t) {
                    var n,
                        i,
                        s,
                        l = { lazy: !0 };
                    if ((!1 !== r.cursor && (l.cursor = r.cursor || vi), ei.utils.checkPrefix("touchCallout") && (l.touchCallout = "none"), "soft" !== t)) {
                        for (
                            Ui(V, H === q ? "none" : (r.allowNativeTouchScrolling && (e.scrollHeight === e.clientHeight) == (e.scrollWidth === e.clientHeight)) || r.allowEventDefault ? "manipulation" : H ? "pan-y" : "pan-x"), i = V.length;
                            --i > -1;

                        )
                            (s = V[i]),
                                yi || ji(s, "mousedown", vt),
                                ji(s, "touchstart", vt),
                                ji(s, "click", Tt, !0),
                                ei.set(s, l),
                                s.getBBox && s.ownerSVGElement && ei.set(s.ownerSVGElement, { touchAction: H === q ? "none" : r.allowNativeTouchScrolling || r.allowEventDefault ? "manipulation" : H ? "pan-y" : "pan-x" }),
                                r.allowContextMenu || ji(s, "contextmenu", at);
                        _o(V, !1);
                    }
                    return (
                        eo(e, bt),
                        (o = !0),
                        _i && "soft" !== t && _i.track(a || e, I ? "x,y" : N ? "rotation" : "top,left"),
                        (e._gsDragID = n = "d" + Ii++),
                        (Yi[n] = W),
                        a && (a.enable(), (a.element._gsDragID = n)),
                        (r.bounds || N) && gt(),
                        r.bounds && W.applyBounds(),
                        W
                    );
                }),
                (i.disable = function (t) {
                    for (var r, n = W.isDragging, i = V.length; --i > -1; ) ao(V[i], "cursor", null);
                    if ("soft" !== t) {
                        for (Ui(V, null), i = V.length; --i > -1; ) (r = V[i]), ao(r, "touchCallout", null), Gi(r, "mousedown", vt), Gi(r, "touchstart", vt), Gi(r, "click", Tt), Gi(r, "contextmenu", at);
                        _o(V, !0), C && (Gi(C, "touchcancel", wt), Gi(C, "touchend", wt), Gi(C, "touchmove", yt)), Gi(ot, "mouseup", wt), Gi(ot, "mousemove", yt);
                    }
                    return ro(e, bt), (o = !1), _i && "soft" !== t && _i.untrack(a || e, I ? "x,y" : N ? "rotation" : "top,left"), a && a.disable(), $i(st), (W.isDragging = W.isPressed = k = !1), n && co(W, "dragend", "onDragEnd"), W;
                }),
                (i.enabled = function (t, e) {
                    return arguments.length ? (t ? W.enable(e) : W.disable(e)) : o;
                }),
                (i.kill = function () {
                    return (W.isThrowing = !1), W.tween && W.tween.kill(), W.disable(), ei.set(V, { clearProps: "userSelect" }), delete Yi[e._gsDragID], W;
                }),
                ~Y.indexOf("scroll") &&
                    ((a = i.scrollProxy = new yo(
                        e,
                        (function (t, e) {
                            for (var r in e) r in t || (t[r] = e[r]);
                            return t;
                        })(
                            {
                                onKill: function () {
                                    W.isPressed && wt(null);
                                },
                            },
                            r
                        )
                    )),
                    (e.style.overflowY = q && !di ? "auto" : "hidden"),
                    (e.style.overflowX = H && !di ? "auto" : "hidden"),
                    (e = a.content)),
                N ? ($.rotation = 1) : (H && ($[B] = 1), q && ($[z] = 1)),
                (rt.force3D = !("force3D" in r) || r.force3D),
                i.enable(),
                i
            );
        }
        return (
            (r = t),
            ((e = n).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r),
            (n.register = function (t) {
                (ei = t), xo();
            }),
            (n.create = function (t, e) {
                return (
                    li || xo(!0),
                    ci(t).map(function (t) {
                        return new n(t, e);
                    })
                );
            }),
            (n.get = function (t) {
                return Yi[(ci(t)[0] || {})._gsDragID];
            }),
            (n.timeSinceDrag = function () {
                return (Xi() - Bi) / 1e3;
            }),
            (n.hitTest = function (t, e, r) {
                if (t === e) return !1;
                var n,
                    i,
                    o,
                    a = uo(t),
                    s = uo(e),
                    l = a.top,
                    u = a.left,
                    c = a.right,
                    h = a.bottom,
                    d = a.width,
                    f = a.height,
                    p = s.left > c || s.right < u || s.top > h || s.bottom < l;
                return p || !r
                    ? !p
                    : ((o = -1 !== (r + "").indexOf("%")),
                      (r = parseFloat(r) || 0),
                      ((n = { left: Math.max(u, s.left), top: Math.max(l, s.top) }).width = Math.min(c, s.right) - n.left),
                      (n.height = Math.min(h, s.bottom) - n.top),
                      !(n.width < 0 || n.height < 0) && (o ? ((r *= 0.01), (i = n.width * n.height) >= d * f * r || i >= s.width * s.height * r) : n.width > r && n.height > r));
            }),
            n
        );
    })(
        (function () {
            function t(t) {
                (this._listeners = {}), (this.target = t || this);
            }
            var e = t.prototype;
            return (
                (e.addEventListener = function (t, e) {
                    var r = this._listeners[t] || (this._listeners[t] = []);
                    ~r.indexOf(e) || r.push(e);
                }),
                (e.removeEventListener = function (t, e) {
                    var r = this._listeners[t],
                        n = (r && r.indexOf(e)) || -1;
                    n > -1 && r.splice(n, 1);
                }),
                (e.dispatchEvent = function (t) {
                    var e,
                        r = this;
                    return (
                        (this._listeners[t] || []).forEach(function (n) {
                            return !1 === n.call(r, { type: t, target: r.target }) && (e = !1);
                        }),
                        e
                    );
                }),
                t
            );
        })()
    );
!(function (t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
})(wo.prototype, { pointerX: 0, pointerY: 0, startX: 0, startY: 0, deltaX: 0, deltaY: 0, isDragging: !1, isPressed: !1 }),
    (wo.zIndex = 1e3),
    (wo.version = "3.8.0"),
    Ti() && ei.registerPlugin(wo),
    i.register("04ZSm", function (t, e) {
        t.exports = i("45FFh").getBundleURL("elBHG") + i("7Vbeu").resolve("49JBQ");
    }),
    i.register("45FFh", function (e, r) {
        var n;
        t(
            e.exports,
            "getBundleURL",
            () => n,
            (t) => (n = t)
        );
        var i = {};
        function o(t) {
            return ("" + t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, "$1") + "/";
        }
        n = function (t) {
            var e = i[t];
            return (
                e ||
                    ((e = (function () {
                        try {
                            throw new Error();
                        } catch (e) {
                            var t = ("" + e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
                            if (t) return o(t[2]);
                        }
                        return "/";
                    })()),
                    (i[t] = e)),
                e
            );
        };
    }),
    i.register("9P3I9", function (t, e) {
        t.exports = i("45FFh").getBundleURL("elBHG") + i("7Vbeu").resolve("2JWI4");
    }),
    i.register("d5U4q", function (t, e) {
        t.exports = i("45FFh").getBundleURL("elBHG") + i("7Vbeu").resolve("7W3Xs");
    }),
    i.register("h04uL", function (t, e) {
        t.exports = i("45FFh").getBundleURL("elBHG") + i("7Vbeu").resolve("bZokj");
    }),
    i.register("iRpfr", function (t, e) {
        t.exports = i("45FFh").getBundleURL("elBHG") + i("7Vbeu").resolve("f6DFD");
    }),
    i.register("ffE27", function (t, e) {
        t.exports = i("45FFh").getBundleURL("elBHG") + i("7Vbeu").resolve("iNi4L");
    });
var bo = [
        {
          title: "Change from Every Angle",
          eyebrow: void 0,
          description: "See how we embrace change to create value from our clients, our people and our community.",
          ctaLabel: "See All Stories",
          url: "https://www.accenture.com/us-en/case-studies/about/stories-of-change",
        },
        {
          title: "Henkel",
          eyebrow: "Change from Every Angle",
          description: "See how Accenture is helping Henkel foster growth through the growth of their people.",
          url: "https://www.accenture.com/us-en/case-studies/about/stories-of-change?story=accenture-henkel",
          ctaLabel: "See how",
          imageSrc: i("04ZSm"),
        },
        // {
        //   title: "The Felix Project",
        //   eyebrow: "Change from Every Angle",
        //   description: "See how Accenture is helping The Felix Project end the hunger crisis by redistributing surplus food.",
        //   url: "https://www.accenture.com/us-en/case-studies/about/stories-of-change?story=accenture-felix",
        //   ctaLabel: "See how",
        //   imageSrc: i("9P3I9"),
        // },
        {
          title: "Climeworks",
          eyebrow: "Change from Every Angle",
          description: "See how Accenture is helping Climeworks accelerate their ambition and change the course of climate change.",
          url: "https://www.accenture.com/us-en/case-studies/about/stories-of-change?story=accenture-climeworks",
          ctaLabel: "See how",
          imageSrc: i("d5U4q"),
        },
        {
          title: "Canada Mortgage and Housing Corporation",
          eyebrow: "Change from Every Angle",
          description: "See every side of how, together, we are helping CMHC achieve their goal of affordable housing for everyone in Canada.",
          url: "https://www.accenture.com/us-en/case-studies/about/stories-of-change?story=canada-mortgage-and-housing-corporation",
          ctaLabel: "See how",
          imageSrc: i("h04uL"),
        }
    ],
    To = { DURATION: 0.8 };
var So = (t) => {
    let e = [];
    switch (t) {
        case 0:
        case 1:
            e = [{ x: 20, y: 20, scale: 0.8, opacity: 1 }];
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
            e = [
                { x: 0, y: 15, scale: 0.658, opacity: 1, mobile: { x: 1, scale: 0.6 } },
                { x: 64.9, y: 38.2, scale: 0.377, opacity: 0.75 },
                { x: 55, y: 12, scale: 0.232, opacity: 0.75 },
                { x: 48.8, y: 69, scale: 0.272, opacity: 0.6 },
            ];
    }
    return e;
};
let Mo = [];
const { DURATION: ko } = To;
let Co, Eo, Ao, Do, Oo;
const Po = (t) => {
        const e = Hn.timeline();
        return (
            e.to("next" === t ? Eo : Ao, {
                xPercent: (t, e, r) => {
                    const { originalX: n, originalY: i, originalScale: o } = e.dataset;
                    return 3 * parseInt(n, 10);
                },
                yPercent: (t, e, r) => {
                    const { originalX: n, originalY: i, originalScale: o } = e.dataset;
                    return 3 * parseInt(i, 10);
                },
                scale: (t, e, r) => {
                    const { originalScale: n } = e.dataset;
                    return 0.5 * parseInt(n, 10);
                },
                opacity: 0,
                duration: ko,
            }),
            e
        );
    },
    Lo = ({ prismSpace: t, index: e }) => {
        if (0 === e) {
            const t = (() => {
                const t = Hn.timeline();
                return (
                    t.to(Co, {
                        xPercent: (t, e, r) => {
                            const { originalX: n } = e.dataset;
                            return n;
                        },
                        yPercent: (t, e, r) => {
                            const { originalY: n } = e.dataset;
                            return n;
                        },
                        scale: (t, e, r) => {
                            const { originalScale: n } = e.dataset;
                            return n;
                        },
                        opacity: (t, e, r) => {
                            const { originalOpacity: n } = e.dataset;
                            return n;
                        },
                        duration: ko,
                    }),
                    { advance: t, retreat: Do }
                );
            })();
            return t;
        }
        const r = t.querySelector(`:nth-child(${e})`),
            { originalX: n, originalY: i, originalScale: o } = r.dataset,
            a = Hn.timeline();
        a.to(r, { xPercent: 0, yPercent: 0, scale: 1, opacity: 1, duration: ko });
        const s = Hn.timeline();
        return s.to(r, { xPercent: 3 * parseInt(n, 10), yPercent: 3 * parseInt(i, 10), scale: 0.5 * parseInt(o, 10), opacity: 0, duration: ko }), { advance: a, retreat: s };
    },
    Ro = (t) => Mo[t],
    Xo = (t) => ("next" === t ? Do : Oo);
var Fo = function (t) {
    const e = t.length;
    return t
        .map((t, r) => {
            const { title: n, eyebrow: i, description: o, ctaLabel: a, url: s, imageSrc: l } = t;
            return `\n      <div class="slide"\n        data-slide-index="${r}"\n        role="group"\n        aria-roledescription="slide"\n        aria-label="${
                r + 1
            } of ${e}"\n        aria-hidden="true">\n        <div class="slide-text">\n          ${
                i ? `<p class="slide-eyebrow">${i}</p>` : ""
            }\n          <h3 class="slide-title module-title">${n}</h3>\n          <p class="slide-description">${o}</p>\n          <a href="${s}"\n            data-analytics-link-name="See how" data-analytics-content-type="engagement" data-linktype="engagement"\n            target="_self" data-linkcomponentname="inline link">\n            <div class="cta-more slide-cta">\n              <div class="cta-more-box">\n                <div class="cta-more-arrow">\n                  <svg height="20" viewBox="0 0 30 13" fill="none" class="img-arrow-right">\n                    <path fill="#000000"\n                      d="M29.7204 7.07638C30.0456 6.75118 30.0456 6.22392 29.7204 5.89871L24.4208 0.599184C24.0956 0.273979 23.5684 0.273979 23.2432 0.599184C22.918 0.924389 22.918 1.45165 23.2432 1.77686L27.9539 6.48755L23.2432 11.1982C22.918 11.5234 22.918 12.0507 23.2432 12.3759C23.5684 12.7011 24.0956 12.7011 24.4208 12.3759L29.7204 7.07638ZM0.818359 7.32029L29.1315 7.32029L29.1315 5.65481L0.818359 5.65481L0.818359 7.32029Z">\n                    </path>\n                  </svg>\n                </div>\n              </div>\n              <div class="cta-more-label">${a}</div>\n            </div>\n          </a>\n        </div>\n        <div class="slide-prism-space">\n                  </div>\n      </div>\n      `;
        })
        .join("");
};
var Yo = { activeSlideIndex: 0, isTweening: !1 };
const { DURATION: Io } = To;
var No = ({ activeItems: t }) => {
    const e = document.querySelectorAll("#stories-hub-slider .slide"),
        r = document.querySelectorAll("#stories-hub-slider .slide:not(:nth-child(1)) .slide-text");
    return t.map((t, n) => {
        const i = e[n],
            o = [...e];
        o.splice(n, 1);
        const a = i.querySelector(".slide-text"),
            s = Ro(n),
            l = Hn.timeline({
                paused: !0,
                onStart: () => {
                    o.forEach((t) => {
                        t.classList.add("slide-hidden"), t.setAttribute("aria-hidden", "true");
                    }),
                        i.classList.remove("slide-hidden"),
                        i.setAttribute("aria-hidden", "false");
                },
                onComplete: () => {
                    (Yo.isTweening = !1),
                        o.forEach((t) => {
                            t.classList.add("slide-hidden"), t.setAttribute("aria-hidden", "true");
                        }),
                        i.classList.remove("slide-hidden"),
                        i.setAttribute("aria-hidden", "false");
                },
            });
        l.fromTo(a, { opacity: 0, y: "30%" }, { opacity: 1, y: "0%", ease: "power1.out", duration: Io * (2 / 3), delay: Io * (1 / 3) }),
            0 === n && l.to(r, { y: "-30%", opacity: 0, ease: "power1.out", duration: Io / 2 }),
            l.add(s.advance, 0);
        const u = Hn.timeline({
            paused: !0,
            onStart: () => {
                i.classList.add("slide-hidden"), i.setAttribute("aria-hidden", "true");
            },
            onComplete: () => {
                i.classList.add("slide-hidden"), i.setAttribute("aria-hidden", "true");
            },
        });
        return u.to(a, { y: "-30%", opacity: 0, ease: "power1.out", duration: Io / 2 }), 0 !== n && u.add(s.retreat, 0), { advance: l, retreat: u, prism: s };
    });
};
Hn.registerPlugin(wo);
const Bo = document.querySelector("#stories-hub-slider"),
    zo = new URLSearchParams(window.location.search),
    Ho = parseInt(zo.get("numberOfItems") || bo.length, 10),
    qo = bo.slice(0, Ho);
let Uo = [],
    Wo = qo.length;
const Vo = (t) => {
        const e = Uo[0].retreat,
            r = "next" === t ? "prev" : "next";
        e.remove(Xo(r)), e.add(Xo(t), 0);
    },
    $o = ({ prismSpace: t, slidesWrapper: e }) => {
        const r = e.getBoundingClientRect().width,
            n = r / Wo;
        new wo(document.createElement("div"), {
            type: "x",
            minimumMovement: 6,
            trigger: t,
            bounds: { minX: -r, maxX: n },
            edgeResistance: 0.9,
            dragResistance: 0.5,
            onDragStart: function (t) {
                const { x: e, startX: r, y: n, startY: i } = this;
                Math.abs(e - r), Math.abs(n - i);
            },
            onDragEnd: function () {
                const { activeSlideIndex: t } = Yo,
                    { x: e, startX: r, y: n, startY: i } = this,
                    o = e - r;
                if (0 === o) return;
                const a = o < 0 ? "next" : "prev";
                let s = "next" === a ? t + 1 : t - 1;
                s < 0 && (s = Wo - 1), s > Wo - 1 && (s = 0), 0 === t && Vo(a), 0 === s && Uo[t].retreat.add(Ro(t).retreat, 0), Uo[t].retreat.invalidate().play(), Uo[s].advance.invalidate().play(), (Yo.activeSlideIndex = s), jo();
            },
            onDrag: function () {
                const { isTweening: t, activeSlideIndex: e } = Yo;
                if (t) return;
                const { x: r, startX: i, y: o, startY: a } = this,
                    s = r - i,
                    l = o - a;
                if (Math.abs(l) >= Math.abs(s)) return;
                const u = Math.abs(s / n),
                    c = s < 0 ? "next" : "prev";
                let h = "next" === c ? e + 1 : e - 1;
                h < 0 && (h = Wo - 1), h > Wo - 1 && (h = 0), 0 === e && Vo(c), 0 === h && Uo[e].retreat.remove(Ro(e).retreat), Uo[e].retreat.pause().progress(u), Uo[h].advance.invalidate().pause().progress(u);
            },
        });
    },
    jo = () => {
        Bo.querySelector(".slider-pagination").innerHTML = `${Yo.activeSlideIndex + 1} / ${qo.length}`;
    },
    Go = document.querySelector("#stories-hub-slider .slider-button-prev"),
    Zo = document.querySelector("#stories-hub-slider .slider-button-next");
Go.addEventListener("click", () => {
    const { isTweening: t, activeSlideIndex: e } = Yo;
    if (!t) {
        let t = e - 1;
        t < 0 && (t = qo.length - 1), 0 === e && Vo("prev"), (Yo.isTweening = !0), Uo[e].retreat.invalidate().restart(), Uo[t].advance.invalidate().restart(!0), (Yo.activeSlideIndex = t), jo();
    }
}),
    Zo.addEventListener("click", () => {
        const { isTweening: t, activeSlideIndex: e } = Yo;
        if (t) return;
        let r = e + 1;
        r > qo.length - 1 && (r = 0), 0 === e && Vo("next"), (Yo.isTweening = !0), Uo[e].retreat.invalidate().restart(), Uo[r].advance.invalidate().restart(!0), (Yo.activeSlideIndex = r), jo();
    }),
    Bo.querySelectorAll('div[role="button"]').forEach((t) => {
        t.addEventListener("keydown", function (t) {
            const e = void 0 !== t.key ? t.key : t.keyCode;
            ("Enter" === e || 13 === e || ["Spacebar", " "].indexOf(e) >= 0 || 32 === e) && (t.preventDefault(), this.click());
        });
    });
const Qo = () => {
    const t = Bo.querySelector("#stories-hub-prism-space");
    (({ prismSpace: t, numItems: e }) => {
        (Co = t.querySelectorAll(".slide-prism")), (Eo = t.querySelectorAll(".slide-prism:not(:nth-child(1))")), (Ao = t.querySelectorAll(".slide-prism:not(:last-child)")), (Do = Po("next")), (Oo = Po("prev"));
        for (let r = 0; r < e; r++) Mo[r] = Lo({ prismSpace: t, index: r });
    })({ prismSpace: t, numItems: Wo });
    const e = Bo.querySelector(".slides-wrapper");
    let r = 0;
    e.querySelectorAll(".slide-text").forEach((t) => {
        const { height: e } = t.getBoundingClientRect();
        e > r && (r = e);
    }),
        (e.style.height = r + 30 + "px"),
        (e.style.width = 100 * Wo + "%"),
        (Uo = No({ activeItems: qo })),
        Vo("next"),
        Uo[0].advance.play(),
        jo(),
        $o({ prismSpace: t, slidesWrapper: e }),
        (window.slideTimelines = Uo);
};
(() => {
    Bo.querySelector("#stories-hub-prism-space").innerHTML = ((t) => {
        const e = t.slice(1),
            r = So(e.length),
            n = window.innerWidth <= 600;
        return e
            .map((t, e) => {
                const { imageSrc: i } = t;
                let o = r[e];
                var Ni = i.split("all-stories/Javascript/")[1];
                return o
                    ? (n && (o = { ...o, ...o.mobile }),
                      `\n    <div class="slide-prism"\n      style="transform: translate3d(${o.x}%, ${o.y}%, 0), scale(${o.scale}); opacity(${o.opacity})"\n      data-original-x="${o.x}"\n      data-original-y="${o.y}"\n      data-original-scale="${o.scale}"\n      data-original-opacity="${o.opacity}"\n    >\n      <img src="${Ni}" alt="" />\n    </div>\n    `)
                    : "";
            })
            .join("");
    })(qo);
    (Bo.querySelector(".slides-wrapper").innerHTML = Fo(qo)), requestAnimationFrame(Qo);
})();