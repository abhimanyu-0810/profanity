(function (n, t) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = n.document ? t(n, !0) : function (n) {
        if (!n.document)
            throw new Error("jQuery requires a window with a document");
        return t(n)
    }
        : t(n)
}
)(typeof window != "undefined" ? window : this, function (n, t) {
    function di(n) {
        var t = "length" in n && n.length
            , r = i.type(n);
        return r === "function" || i.isWindow(n) ? !1 : n.nodeType === 1 && t ? !0 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in n
    }
    function ki(n, t, r) {
        if (i.isFunction(t))
            return i.grep(n, function (n, i) {
                return !!t.call(n, i, n) !== r
            });
        if (t.nodeType)
            return i.grep(n, function (n) {
                return n === t !== r
            });
        if (typeof t == "string") {
            if (bo.test(t))
                return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function (n) {
            return i.inArray(n, t) >= 0 !== r
        })
    }
    function uu(n, t) {
        do
            n = n[t];
        while (n && n.nodeType !== 1);
        return n
    }
    function ve(n) {
        var t = wi[n] = {};
        return i.each(n.match(h) || [], function (n, i) {
            t[i] = !0
        }),
            t
    }
    function br() {
        u.addEventListener ? (u.removeEventListener("DOMContentLoaded", c, !1),
            n.removeEventListener("load", c, !1)) : (u.detachEvent("onreadystatechange", c),
                n.detachEvent("onload", c))
    }
    function c() {
        (u.addEventListener || event.type === "load" || u.readyState === "complete") && (br(),
            i.ready())
    }
    function rf(n, t, r) {
        if (r === undefined && n.nodeType === 1) {
            var u = "data-" + t.replace(lr, "-$1").toLowerCase();
            if (r = n.getAttribute(u),
                typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : eu.test(r) ? i.parseJSON(r) : r
                } catch (f) { }
                i.data(n, t, r)
            } else
                r = undefined
        }
        return r
    }
    function bi(n) {
        var t;
        for (t in n)
            if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON")
                return !1;
        return !0
    }
    function pf(n, t, r, u) {
        if (i.acceptData(n)) {
            var s, e, h = i.expando, c = n.nodeType, o = c ? i.cache : n, f = c ? n[h] : n[h] && h;
            if (f && o[f] && (u || o[f].data) || r !== undefined || typeof t != "string")
                return f || (f = c ? n[h] = v.pop() || i.guid++ : h),
                    o[f] || (o[f] = c ? {} : {
                        toJSON: i.noop
                    }),
                    (typeof t == "object" || typeof t == "function") && (u ? o[f] = i.extend(o[f], t) : o[f].data = i.extend(o[f].data, t)),
                    e = o[f],
                    u || (e.data || (e.data = {}),
                        e = e.data),
                    r !== undefined && (e[i.camelCase(t)] = r),
                    typeof t == "string" ? (s = e[t],
                        s == null && (s = e[i.camelCase(t)])) : s = e,
                    s
        }
    }
    function yf(n, t, u) {
        if (i.acceptData(n)) {
            var e, s, h = n.nodeType, f = h ? i.cache : n, o = h ? n[i.expando] : i.expando;
            if (f[o]) {
                if (t && (e = u ? f[o] : f[o].data,
                    e)) {
                    for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [t] : (t = i.camelCase(t),
                        t = t in e ? [t] : t.split(" ")),
                        s = t.length; s--;)
                        delete e[t[s]];
                    if (u ? !bi(e) : !i.isEmptyObject(e))
                        return
                }
                (u || (delete f[o].data,
                    bi(f[o]))) && (h ? i.cleanData([n], !0) : r.deleteExpando || f != f.window ? delete f[o] : f[o] = null)
            }
        }
    }
    function vt() {
        return !0
    }
    function ut() {
        return !1
    }
    function au() {
        try {
            return u.activeElement
        } catch (n) { }
    }
    function kr(n) {
        var i = fr.split("|")
            , t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length)
                t.createElement(i.pop());
        return t
    }
    function f(n, t) {
        var e, u, o = 0, r = typeof n.getElementsByTagName !== s ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll !== s ? n.querySelectorAll(t || "*") : undefined;
        if (!r)
            for (r = [],
                e = n.childNodes || n; (u = e[o]) != null; o++)
                !t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
        return t === undefined || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }
    function io(n) {
        gi.test(n.type) && (n.defaultChecked = n.checked)
    }
    function ef(n, t) {
        return i.nodeName(n, "table") && i.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }
    function of(n) {
        return n.type = (i.find.attr(n, "type") !== null) + "/" + n.type,
            n
    }
    function sf(n) {
        var t = de.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"),
            n
    }
    function hi(n, t) {
        for (var u, r = 0; (u = n[r]) != null; r++)
            i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }
    function hf(n, t) {
        if (t.nodeType === 1 && i.hasData(n)) {
            var u, f, o, s = i._data(n), r = i._data(t, s), e = s.events;
            if (e) {
                delete r.handle,
                    r.events = {};
                for (u in e)
                    for (f = 0,
                        o = e[u].length; f < o; f++)
                        i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }
    function uo(n, t) {
        var u, e, f;
        if (t.nodeType === 1) {
            if (u = t.nodeName.toLowerCase(),
                !r.noCloneEvent && t[i.expando]) {
                f = i._data(t);
                for (e in f.events)
                    i.removeEvent(t, e, f.handle);
                t.removeAttribute(i.expando)
            }
            u === "script" && t.text !== n.text ? (of(t).text = n.text,
                sf(t)) : u === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML),
                    r.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : u === "input" && gi.test(n.type) ? (t.defaultChecked = t.checked = n.checked,
                        t.value !== n.value && (t.value = n.value)) : u === "option" ? t.defaultSelected = t.selected = n.defaultSelected : (u === "input" || u === "textarea") && (t.defaultValue = n.defaultValue)
        }
    }
    function af(t, r) {
        var f, u = i(r.createElement(t)).appendTo(r.body), e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(u[0])) ? f.display : i.css(u[0], "display");
        return u.detach(),
            e
    }
    function at(n) {
        var r = u
            , t = pi[n];
        return t || (t = af(n, r),
            t !== "none" && t || (ft = (ft || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement),
                r = (ft[0].contentWindow || ft[0].contentDocument).document,
                r.write(),
                r.close(),
                t = af(n, r),
                ft.detach()),
            pi[n] = t),
            t
    }
    function hu(n, t) {
        return {
            get: function () {
                var i = n();
                if (i != null) {
                    if (i) {
                        delete this.get;
                        return
                    }
                    return (this.get = t).apply(this, arguments)
                }
            }
        }
    }
    function er(n, t) {
        if (t in n)
            return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = or.length; i--;)
            if (t = or[i] + r,
                t in n)
                return t;
        return u
    }
    function ur(n, t) {
        for (var f, r, o, e = [], u = 0, s = n.length; u < s; u++)
            (r = n[u],
                r.style) && (e[u] = i._data(r, "olddisplay"),
                    f = r.style.display,
                    t ? (e[u] || f !== "none" || (r.style.display = ""),
                        r.style.display === "" && ht(r) && (e[u] = i._data(r, "olddisplay", at(r.nodeName)))) : (o = ht(r),
                            (f && f !== "none" || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
        for (u = 0; u < s; u++)
            (r = n[u],
                r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[u] || "" : "none"));
        return n
    }
    function rr(n, t, i) {
        var r = so.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }
    function ir(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2)
            r === "margin" && (o += i.css(n, r + b[e], !0, f)),
                u ? (r === "content" && (o -= i.css(n, "padding" + b[e], !0, f)),
                    r !== "margin" && (o -= i.css(n, "border" + b[e] + "Width", !0, f))) : (o += i.css(n, "padding" + b[e], !0, f),
                        r !== "padding" && (o += i.css(n, "border" + b[e] + "Width", !0, f)));
        return o
    }
    function cr(n, t, u) {
        var o = !0
            , f = t === "width" ? n.offsetWidth : n.offsetHeight
            , e = d(n)
            , s = r.boxSizing && i.css(n, "boxSizing", !1, e) === "border-box";
        if (f <= 0 || f == null) {
            if (f = p(n, t, e),
                (f < 0 || f == null) && (f = n.style[t]),
                yt.test(f))
                return f;
            o = s && (r.boxSizingReliable() || f === n.style[t]),
                f = parseFloat(f) || 0
        }
        return f + ir(n, t, u || (s ? "border" : "content"), o, e) + "px"
    }
    function e(n, t, i, r, u) {
        return new e.prototype.init(n, t, i, r, u)
    }
    function dr() {
        return setTimeout(function () {
            it = undefined
        }),
            it = i.now()
    }
    function gt(n, t) {
        var r, i = {
            height: n
        }, u = 0;
        for (t = t ? 1 : 0; u < 4; u += 2 - t)
            r = b[u],
                i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n),
            i
    }
    function gr(n, t, i) {
        for (var u, f = (st[t] || []).concat(st["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n))
                return u
    }
    function vo(n, t, u) {
        var f, a, p, v, s, w, h, b, l = this, y = {}, o = n.style, c = n.nodeType && ht(n), e = i._data(n, "fxshow");
        u.queue || (s = i._queueHooks(n, "fx"),
            s.unqueued == null && (s.unqueued = 0,
                w = s.empty.fire,
                s.empty.fire = function () {
                    s.unqueued || w()
                }
            ),
            s.unqueued++,
            l.always(function () {
                l.always(function () {
                    s.unqueued--,
                        i.queue(n, "fx").length || s.empty.fire()
                })
            })),
            n.nodeType === 1 && ("height" in t || "width" in t) && (u.overflow = [o.overflow, o.overflowX, o.overflowY],
                h = i.css(n, "display"),
                b = h === "none" ? i._data(n, "olddisplay") || at(n.nodeName) : h,
                b === "inline" && i.css(n, "float") === "none" && (r.inlineBlockNeedsLayout && at(n.nodeName) !== "inline" ? o.zoom = 1 : o.display = "inline-block")),
            u.overflow && (o.overflow = "hidden",
                r.shrinkWrapBlocks() || l.always(function () {
                    o.overflow = u.overflow[0],
                        o.overflowX = u.overflow[1],
                        o.overflowY = u.overflow[2]
                }));
        for (f in t)
            if (a = t[f],
                lo.exec(a)) {
                if (delete t[f],
                    p = p || a === "toggle",
                    a === (c ? "hide" : "show"))
                    if (a === "show" && e && e[f] !== undefined)
                        c = !0;
                    else
                        continue;
                y[f] = e && e[f] || i.style(n, f)
            } else
                h = undefined;
        if (i.isEmptyObject(y))
            (h === "none" ? at(n.nodeName) : h) === "inline" && (o.display = h);
        else {
            e ? "hidden" in e && (c = e.hidden) : e = i._data(n, "fxshow", {}),
                p && (e.hidden = !c),
                c ? i(n).show() : l.done(function () {
                    i(n).hide()
                }),
                l.done(function () {
                    var t;
                    i._removeData(n, "fxshow");
                    for (t in y)
                        i.style(n, t, y[t])
                });
            for (f in y)
                v = gr(c ? e[f] : 0, f, l),
                    f in e || (e[f] = v.start,
                        c && (v.end = v.start,
                            v.start = f === "width" || f === "height" ? 1 : 0))
        }
    }
    function yo(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r),
                e = t[f],
                u = n[r],
                i.isArray(u) && (e = u[1],
                    u = n[r] = u[0]),
                r !== f && (n[f] = u,
                    delete n[r]),
                o = i.cssHooks[f],
                o && "expand" in o) {
                u = o.expand(u),
                    delete n[f];
                for (r in u)
                    r in n || (n[r] = u[r],
                        t[r] = e)
            } else
                t[f] = e
    }
    function iu(n, t, r) {
        var e, o, s = 0, l = wt.length, f = i.Deferred().always(function () {
            delete c.elem
        }), c = function () {
            if (o)
                return !1;
            for (var s = it || dr(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; r < e; r++)
                u.tweens[r].run(i);
            return f.notifyWith(n, [u, i, t]),
                i < 1 && e ? t : (f.resolveWith(n, [u]),
                    !1)
        }, u = f.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {}
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: it || dr(),
            duration: r.duration,
            tweens: [],
            createTween: function (t, r) {
                var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(f),
                    f
            },
            stop: function (t) {
                var i = 0
                    , r = t ? u.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; i < r; i++)
                    u.tweens[i].run(1);
                return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]),
                    this
            }
        }), h = u.props;
        for (yo(h, u.opts.specialEasing); s < l; s++)
            if (e = wt[s].call(u, n, h, u.opts),
                e)
                return e;
        return i.map(h, gr, u),
            i.isFunction(u.opts.start) && u.opts.start.call(n, u),
            i.fx.timer(i.extend(c, {
                elem: n,
                anim: u,
                queue: u.opts.queue
            })),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function nu(n) {
        return function (t, r) {
            typeof t != "string" && (r = t,
                t = "*");
            var u, f = 0, e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++])
                    u.charAt(0) === "+" ? (u = u.slice(1) || "*",
                        (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }
    function tu(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0,
                i.each(n[s] || [], function (n, i) {
                    var s = i(t, r, u);
                    if (typeof s != "string" || o || f[s]) {
                        if (o)
                            return !(h = s)
                    } else
                        return t.dataTypes.unshift(s),
                            e(s),
                            !1
                }),
                h
        }
        var f = {}
            , o = n === ci;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }
    function ai(n, t) {
        var u, r, f = i.ajaxSettings.flatOptions || {};
        for (r in t)
            t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u),
            n
    }
    function ne(n, t, i) {
        for (var o, e, u, f, s = n.contents, r = n.dataTypes; r[0] === "*";)
            r.shift(),
                e === undefined && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (f in s)
                if (s[f] && s[f].test(e)) {
                    r.unshift(f);
                    break
                }
        if (r[0] in i)
            u = r[0];
        else {
            for (f in i) {
                if (!r[0] || n.converters[f + " " + r[0]]) {
                    u = f;
                    break
                }
                o || (o = f)
            }
            u = u || o
        }
        if (u)
            return u !== r[0] && r.unshift(u),
                i[u]
    }
    function te(n, t, i, r) {
        var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters)
                o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t),
                !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
                e = u,
                u = c.shift(),
                u)
                if (u === "*")
                    u = e;
                else if (e !== "*" && e !== u) {
                    if (f = o[e + " " + u] || o["* " + u],
                        !f)
                        for (h in o)
                            if (s = h.split(" "),
                                s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]],
                                    f)) {
                                f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0],
                                    c.unshift(s[1]));
                                break
                            }
                    if (f !== !0)
                        if (f && n.throws)
                            t = f(t);
                        else
                            try {
                                t = f(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: f ? l : "No conversion from " + e + " to " + u
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function vi(n, t, r, u) {
        var f;
        if (i.isArray(t))
            i.each(t, function (t, i) {
                r || re.test(n) ? u(n, i) : vi(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
            });
        else if (r || i.type(t) !== "object")
            u(n, t);
        else
            for (f in t)
                vi(n + "[" + f + "]", t[f], r, u)
    }
    function bf() {
        try {
            return new n.XMLHttpRequest
        } catch (t) { }
    }
    function he() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) { }
    }
    function wu(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }
    var v = [], y = v.slice, bu = v.concat, tr = v.push, du = v.indexOf, dt = {}, ce = dt.toString, rt = dt.hasOwnProperty, r = {}, ff = "1.11.3", i = function (n, t) {
        return new i.fn.init(n, t)
    }, se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ee = /^-ms-/, le = /-([\da-z])/gi, df = function (n, t) {
        return t.toUpperCase()
    }, g, kf, wf, h, wi, ti, s, ar, eu, lr, ft, pi, ru, yr, hr, ni, fi, bt, ei, ui, cu, lf;
    i.fn = i.prototype = {
        jquery: ff,
        constructor: i,
        selector: "",
        length: 0,
        toArray: function () {
            return y.call(this)
        },
        get: function (n) {
            return n != null ? n < 0 ? this[n + this.length] : this[n] : y.call(this)
        },
        pushStack: function (n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this,
                t.context = this.context,
                t
        },
        each: function (n, t) {
            return i.each(this, n, t)
        },
        map: function (n) {
            return this.pushStack(i.map(this, function (t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function () {
            return this.pushStack(y.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (n) {
            var i = this.length
                , t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: tr,
        sort: v.sort,
        splice: v.splice
    },
        i.extend = i.fn.extend = function () {
            var r, e, t, f, o, s, n = arguments[0] || {}, u = 1, c = arguments.length, h = !1;
            for (typeof n == "boolean" && (h = n,
                n = arguments[u] || {},
                u++),
                typeof n == "object" || i.isFunction(n) || (n = {}),
                u === c && (n = this,
                    u--); u < c; u++)
                if ((o = arguments[u]) != null)
                    for (f in o)
                        (r = n[f],
                            t = o[f],
                            n !== t) && (h && t && (i.isPlainObject(t) || (e = i.isArray(t))) ? (e ? (e = !1,
                                s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {},
                                n[f] = i.extend(h, s, t)) : t !== undefined && (n[f] = t));
            return n
        }
        ,
        i.extend({
            expando: "jQuery" + (ff + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (n) {
                throw new Error(n);
            },
            noop: function () { },
            isFunction: function (n) {
                return i.type(n) === "function"
            },
            isArray: Array.isArray || function (n) {
                return i.type(n) === "array"
            }
            ,
            isWindow: function (n) {
                return n != null && n == n.window
            },
            isNumeric: function (n) {
                return !i.isArray(n) && n - parseFloat(n) + 1 >= 0
            },
            isEmptyObject: function (n) {
                var t;
                for (t in n)
                    return !1;
                return !0
            },
            isPlainObject: function (n) {
                var t;
                if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n))
                    return !1;
                try {
                    if (n.constructor && !rt.call(n, "constructor") && !rt.call(n.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (u) {
                    return !1
                }
                if (r.ownLast)
                    for (t in n)
                        return rt.call(n, t);
                for (t in n)
                    ;
                return t === undefined || rt.call(n, t)
            },
            type: function (n) {
                return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? dt[ce.call(n)] || "object" : typeof n
            },
            globalEval: function (t) {
                t && i.trim(t) && (n.execScript || function (t) {
                    n.eval.call(n, t)
                }
                )(t)
            },
            camelCase: function (n) {
                return n.replace(ee, "ms-").replace(le, df)
            },
            nodeName: function (n, t) {
                return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (n, t, i) {
                var u, r = 0, f = n.length, e = di(n);
                if (i) {
                    if (e) {
                        for (; r < f; r++)
                            if (u = t.apply(n[r], i),
                                u === !1)
                                break
                    } else
                        for (r in n)
                            if (u = t.apply(n[r], i),
                                u === !1)
                                break
                } else if (e) {
                    for (; r < f; r++)
                        if (u = t.call(n[r], r, n[r]),
                            u === !1)
                            break
                } else
                    for (r in n)
                        if (u = t.call(n[r], r, n[r]),
                            u === !1)
                            break;
                return n
            },
            trim: function (n) {
                return n == null ? "" : (n + "").replace(se, "")
            },
            makeArray: function (n, t) {
                var r = t || [];
                return n != null && (di(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : tr.call(r, n)),
                    r
            },
            inArray: function (n, t, i) {
                var r;
                if (t) {
                    if (du)
                        return du.call(t, n, i);
                    for (r = t.length,
                        i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                        if (i in t && t[i] === n)
                            return i
                }
                return -1
            },
            merge: function (n, t) {
                for (var r = +t.length, i = 0, u = n.length; i < r;)
                    n[u++] = t[i++];
                if (r !== r)
                    while (t[i] !== undefined)
                        n[u++] = t[i++];
                return n.length = u,
                    n
            },
            grep: function (n, t, i) {
                for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++)
                    u = !t(n[r], r),
                        u !== o && f.push(n[r]);
                return f
            },
            map: function (n, t, i) {
                var u, r = 0, e = n.length, o = di(n), f = [];
                if (o)
                    for (; r < e; r++)
                        u = t(n[r], r, i),
                            u != null && f.push(u);
                else
                    for (r in n)
                        u = t(n[r], r, i),
                            u != null && f.push(u);
                return bu.apply([], f)
            },
            guid: 1,
            proxy: function (n, t) {
                var u, r, f;
                return (typeof t == "string" && (f = n[t],
                    t = n,
                    n = f),
                    !i.isFunction(n)) ? undefined : (u = y.call(arguments, 2),
                        r = function () {
                            return n.apply(t || this, u.concat(y.call(arguments)))
                        }
                        ,
                        r.guid = n.guid = n.guid || i.guid++,
                        r)
            },
            now: function () {
                return +new Date
            },
            support: r
        }),
        i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (n, t) {
            dt["[object " + t + "]"] = t.toLowerCase()
        }),
        g = function (n) {
            function r(n, t, i, r) {
                var p, s, l, c, b, y, k, v, nt, g;
                if ((t ? t.ownerDocument || t : h) !== o && d(t),
                    t = t || o,
                    i = i || [],
                    c = t.nodeType,
                    typeof n != "string" || !n || c !== 1 && c !== 9 && c !== 11)
                    return i;
                if (!r && a) {
                    if (c !== 11 && (p = vr.exec(n)))
                        if (l = p[1]) {
                            if (c === 9)
                                if (s = t.getElementById(l),
                                    s && s.parentNode) {
                                    if (s.id === l)
                                        return i.push(s),
                                            i
                                } else
                                    return i;
                            else if (t.ownerDocument && (s = t.ownerDocument.getElementById(l)) && ot(t, s) && s.id === l)
                                return i.push(s),
                                    i
                        } else {
                            if (p[2])
                                return w.apply(i, t.getElementsByTagName(n)),
                                    i;
                            if ((l = p[3]) && u.getElementsByClassName)
                                return w.apply(i, t.getElementsByClassName(l)),
                                    i
                        }
                    if (u.qsa && (!e || !e.test(n))) {
                        if (v = k = f,
                            nt = t,
                            g = c !== 1 && n,
                            c === 1 && t.nodeName.toLowerCase() !== "object") {
                            for (y = et(n),
                                (k = t.getAttribute("id")) ? v = k.replace(lr, "\\$&") : t.setAttribute("id", v),
                                v = "[id='" + v + "'] ",
                                b = y.length; b--;)
                                y[b] = v + yt(y[b]);
                            nt = pt.test(n) && ri(t.parentNode) || t,
                                g = y.join(",")
                        }
                        if (g)
                            try {
                                return w.apply(i, nt.querySelectorAll(g)),
                                    i
                            } catch (tt) { } finally {
                                k || t.removeAttribute("id")
                            }
                    }
                }
                return li(n.replace(at, "$1"), t, i, r)
            }
            function bt() {
                function n(r, u) {
                    return i.push(r + " ") > t.cacheLength && delete n[i.shift()],
                        n[r + " "] = u
                }
                var i = [];
                return n
            }
            function s(n) {
                return n[f] = !0,
                    n
            }
            function l(n) {
                var t = o.createElement("div");
                try {
                    return !!n(t)
                } catch (i) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                        t = null
                }
            }
            function ti(n, i) {
                for (var u = n.split("|"), r = n.length; r--;)
                    t.attrHandle[u[r]] = i
            }
            function ei(n, t) {
                var i = t && n
                    , r = i && n.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || pi) - (~n.sourceIndex || pi);
                if (r)
                    return r;
                if (i)
                    while (i = i.nextSibling)
                        if (i === t)
                            return -1;
                return n ? 1 : -1
            }
            function rr(n) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return i === "input" && t.type === n
                }
            }
            function ir(n) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return (i === "input" || i === "button") && t.type === n
                }
            }
            function g(n) {
                return s(function (t) {
                    return t = +t,
                        s(function (i, r) {
                            for (var u, f = n([], i.length, t), e = f.length; e--;)
                                i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                        })
                })
            }
            function ri(n) {
                return n && typeof n.getElementsByTagName != "undefined" && n
            }
            function si() { }
            function yt(n) {
                for (var t = 0, r = n.length, i = ""; t < r; t++)
                    i += n[t].value;
                return i
            }
            function fi(n, t, i) {
                var r = t.dir
                    , u = i && r === "parentNode"
                    , e = di++;
                return t.first ? function (t, i, f) {
                    while (t = t[r])
                        if (t.nodeType === 1 || u)
                            return n(t, i, f)
                }
                    : function (t, i, o) {
                        var s, h, c = [v, e];
                        if (o) {
                            while (t = t[r])
                                if ((t.nodeType === 1 || u) && n(t, i, o))
                                    return !0
                        } else
                            while (t = t[r])
                                if (t.nodeType === 1 || u) {
                                    if (h = t[f] || (t[f] = {}),
                                        (s = h[r]) && s[0] === v && s[1] === e)
                                        return c[2] = s[2];
                                    if (h[r] = c,
                                        c[2] = n(t, i, o))
                                        return !0
                                }
                    }
            }
            function ii(n) {
                return n.length > 1 ? function (t, i, r) {
                    for (var u = n.length; u--;)
                        if (!n[u](t, i, r))
                            return !1;
                    return !0
                }
                    : n[0]
            }
            function gi(n, t, i) {
                for (var u = 0, f = t.length; u < f; u++)
                    r(n, t[u], i);
                return i
            }
            function lt(n, t, i, r, u) {
                for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)
                    (e = n[f]) && (!i || i(e, r, u)) && (o.push(e),
                        h && t.push(f));
                return o
            }
            function gt(n, t, i, r, u, e) {
                return r && !r[f] && (r = gt(r)),
                    u && !u[f] && (u = gt(u, e)),
                    s(function (f, e, o, s) {
                        var l, c, a, p = [], y = [], b = e.length, d = f || gi(t || "*", o.nodeType ? [o] : o, []), v = n && (f || !t) ? lt(d, p, n, o, s) : d, h = i ? u || (f ? n : b || r) ? [] : e : v;
                        if (i && i(v, h, o, s),
                            r)
                            for (l = lt(h, y),
                                r(l, [], o, s),
                                c = l.length; c--;)
                                (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                        if (f) {
                            if (u || n) {
                                if (u) {
                                    for (l = [],
                                        c = h.length; c--;)
                                        (a = h[c]) && l.push(v[c] = a);
                                    u(null, h = [], l, s)
                                }
                                for (c = h.length; c--;)
                                    (a = h[c]) && (l = u ? k(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                            }
                        } else
                            h = lt(h === e ? h.splice(b, h.length) : h),
                                u ? u(null, e, h, s) : w.apply(e, h)
                    })
            }
            function wt(n) {
                for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = fi(function (n) {
                    return n === o
                }, c, !0), a = fi(function (n) {
                    return k(o, n) > -1
                }, c, !0), e = [function (n, t, i) {
                    var r = !h && (i || t !== st) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                    return o = null,
                        r
                }
                ]; i < s; i++)
                    if (u = t.relative[n[i].type])
                        e = [fi(ii(e), u)];
                    else {
                        if (u = t.filter[n[i].type].apply(null, n[i].matches),
                            u[f]) {
                            for (r = ++i; r < s; r++)
                                if (t.relative[n[r].type])
                                    break;
                            return gt(i > 1 && ii(e), i > 1 && yt(n.slice(0, i - 1).concat({
                                value: n[i - 2].type === " " ? "*" : ""
                            })).replace(at, "$1"), u, i < r && wt(n.slice(i, r)), r < s && wt(n = n.slice(r)), r < s && yt(n))
                        }
                        e.push(u)
                    }
                return ii(e)
            }
            function fr(n, i) {
                var u = i.length > 0
                    , f = n.length > 0
                    , e = function (e, s, h, c, l) {
                        var y, d, b, k = 0, a = "0", g = e && [], p = [], nt = st, tt = e || f && t.find.TAG("*", l), it = v += nt == null ? 1 : Math.random() || .1, rt = tt.length;
                        for (l && (st = s !== o && s); a !== rt && (y = tt[a]) != null; a++) {
                            if (f && y) {
                                for (d = 0; b = n[d++];)
                                    if (b(y, s, h)) {
                                        c.push(y);
                                        break
                                    }
                                l && (v = it)
                            }
                            u && ((y = !b && y) && k--,
                                e && g.push(y))
                        }
                        if (k += a,
                            u && a !== k) {
                            for (d = 0; b = i[d++];)
                                b(g, p, s, h);
                            if (e) {
                                if (k > 0)
                                    while (a--)
                                        g[a] || p[a] || (p[a] = tr.call(c));
                                p = lt(p)
                            }
                            w.apply(c, p),
                                l && !e && p.length > 0 && k + i.length > 1 && r.uniqueSort(c)
                        }
                        return l && (v = it,
                            st = nt),
                            g
                    };
                return u ? s(e) : e
            }
            var ut, u, t, ht, ci, et, ui, li, st, b, it, d, o, c, a, e, nt, vt, ot, f = "sizzle" + 1 * new Date, h = n.document, v = 0, di = 0, ai = bt(), vi = bt(), yi = bt(), dt = function (n, t) {
                return n === t && (it = !0),
                    0
            }, pi = -2147483648, nr = {}.hasOwnProperty, tt = [], tr = tt.pop, ur = tt.push, w = tt.push, bi = tt.slice, k = function (n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t)
                        return i;
                return -1
            }, ni = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", i = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", hi = rt.replace("w", "w#"), wi = "\\[" + i + "*(" + rt + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + hi + "))|)" + i + "*\\]", kt = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + wi + ")*)|.*)\\)|)", er = new RegExp(i + "+", "g"), at = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"), or = new RegExp("^" + i + "*," + i + "*"), sr = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"), hr = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"), cr = new RegExp(kt), ar = new RegExp("^" + hi + "$"), ct = {
                ID: new RegExp("^#(" + rt + ")"),
                CLASS: new RegExp("^\\.(" + rt + ")"),
                TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + wi),
                PSEUDO: new RegExp("^" + kt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ni + ")$", "i"),
                needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
            }, ki = /^(?:input|select|textarea|button)$/i, yr = /^h\d$/i, ft = /^[^{]+\{\s*\[native \w/, vr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, pt = /[+~]/, lr = /'|\\/g, y = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"), p = function (n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            }, oi = function () {
                d()
            };
            try {
                w.apply(tt = bi.call(h.childNodes), h.childNodes),
                    tt[h.childNodes.length].nodeType
            } catch (pr) {
                w = {
                    apply: tt.length ? function (n, t) {
                        ur.apply(n, bi.call(t))
                    }
                        : function (n, t) {
                            for (var i = n.length, r = 0; n[i++] = t[r++];)
                                ;
                            n.length = i - 1
                        }
                }
            }
            u = r.support = {},
                ci = r.isXML = function (n) {
                    var t = n && (n.ownerDocument || n).documentElement;
                    return t ? t.nodeName !== "HTML" : !1
                }
                ,
                d = r.setDocument = function (n) {
                    var v, s, r = n ? n.ownerDocument || n : h;
                    return r === o || r.nodeType !== 9 || !r.documentElement ? o : (o = r,
                        c = r.documentElement,
                        s = r.defaultView,
                        s && s !== s.top && (s.addEventListener ? s.addEventListener("unload", oi, !1) : s.attachEvent && s.attachEvent("onunload", oi)),
                        a = !ci(r),
                        u.attributes = l(function (n) {
                            return n.className = "i",
                                !n.getAttribute("className")
                        }),
                        u.getElementsByTagName = l(function (n) {
                            return n.appendChild(r.createComment("")),
                                !n.getElementsByTagName("*").length
                        }),
                        u.getElementsByClassName = ft.test(r.getElementsByClassName),
                        u.getById = l(function (n) {
                            return c.appendChild(n).id = f,
                                !r.getElementsByName || !r.getElementsByName(f).length
                        }),
                        u.getById ? (t.find.ID = function (n, t) {
                            if (typeof t.getElementById != "undefined" && a) {
                                var i = t.getElementById(n);
                                return i && i.parentNode ? [i] : []
                            }
                        }
                            ,
                            t.filter.ID = function (n) {
                                var t = n.replace(y, p);
                                return function (n) {
                                    return n.getAttribute("id") === t
                                }
                            }
                        ) : (delete t.find.ID,
                            t.filter.ID = function (n) {
                                var t = n.replace(y, p);
                                return function (n) {
                                    var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                                    return i && i.value === t
                                }
                            }
                        ),
                        t.find.TAG = u.getElementsByTagName ? function (n, t) {
                            return typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName(n) : u.qsa ? t.querySelectorAll(n) : void 0
                        }
                            : function (n, t) {
                                var i, r = [], f = 0, u = t.getElementsByTagName(n);
                                if (n === "*") {
                                    while (i = u[f++])
                                        i.nodeType === 1 && r.push(i);
                                    return r
                                }
                                return u
                            }
                        ,
                        t.find.CLASS = u.getElementsByClassName && function (n, t) {
                            if (a)
                                return t.getElementsByClassName(n)
                        }
                        ,
                        nt = [],
                        e = [],
                        (u.qsa = ft.test(r.querySelectorAll)) && (l(function (n) {
                            c.appendChild(n).innerHTML = "<a id='" + f + "'></a><select id='" + f + "-\f]' msallowcapture=''><option selected=''></option></select>",
                                n.querySelectorAll("[msallowcapture^='']").length && e.push("[*^$]=" + i + "*(?:''|\"\")"),
                                n.querySelectorAll("[selected]").length || e.push("\\[" + i + "*(?:value|" + ni + ")"),
                                n.querySelectorAll("[id~=" + f + "-]").length || e.push("~="),
                                n.querySelectorAll(":checked").length || e.push(":checked"),
                                n.querySelectorAll("a#" + f + "+*").length || e.push(".#.+[+~]")
                        }),
                            l(function (n) {
                                var t = r.createElement("input");
                                t.setAttribute("type", "hidden"),
                                    n.appendChild(t).setAttribute("name", "D"),
                                    n.querySelectorAll("[name=d]").length && e.push("name" + i + "*[*^$|!~]?="),
                                    n.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled"),
                                    n.querySelectorAll("*,:x"),
                                    e.push(",.*:")
                            })),
                        (u.matchesSelector = ft.test(vt = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.oMatchesSelector || c.msMatchesSelector)) && l(function (n) {
                            u.disconnectedMatch = vt.call(n, "div"),
                                vt.call(n, "[s!='']:x"),
                                nt.push("!=", kt)
                        }),
                        e = e.length && new RegExp(e.join("|")),
                        nt = nt.length && new RegExp(nt.join("|")),
                        v = ft.test(c.compareDocumentPosition),
                        ot = v || ft.test(c.contains) ? function (n, t) {
                            var r = n.nodeType === 9 ? n.documentElement : n
                                , i = t && t.parentNode;
                            return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
                        }
                            : function (n, t) {
                                if (t)
                                    while (t = t.parentNode)
                                        if (t === n)
                                            return !0;
                                return !1
                            }
                        ,
                        dt = v ? function (n, t) {
                            if (n === t)
                                return it = !0,
                                    0;
                            var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                            return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1,
                                i & 1 || !u.sortDetached && t.compareDocumentPosition(n) === i) ? n === r || n.ownerDocument === h && ot(h, n) ? -1 : t === r || t.ownerDocument === h && ot(h, t) ? 1 : b ? k(b, n) - k(b, t) : 0 : i & 4 ? -1 : 1
                        }
                            : function (n, t) {
                                if (n === t)
                                    return it = !0,
                                        0;
                                var i, u = 0, o = n.parentNode, s = t.parentNode, f = [n], e = [t];
                                if (o && s) {
                                    if (o === s)
                                        return ei(n, t)
                                } else
                                    return n === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : b ? k(b, n) - k(b, t) : 0;
                                for (i = n; i = i.parentNode;)
                                    f.unshift(i);
                                for (i = t; i = i.parentNode;)
                                    e.unshift(i);
                                while (f[u] === e[u])
                                    u++;
                                return u ? ei(f[u], e[u]) : f[u] === h ? -1 : e[u] === h ? 1 : 0
                            }
                        ,
                        r)
                }
                ,
                r.matches = function (n, t) {
                    return r(n, null, null, t)
                }
                ,
                r.matchesSelector = function (n, t) {
                    if ((n.ownerDocument || n) !== o && d(n),
                        t = t.replace(hr, "='$1']"),
                        u.matchesSelector && a && (!nt || !nt.test(t)) && (!e || !e.test(t)))
                        try {
                            var i = vt.call(n, t);
                            if (i || u.disconnectedMatch || n.document && n.document.nodeType !== 11)
                                return i
                        } catch (f) { }
                    return r(t, o, null, [n]).length > 0
                }
                ,
                r.contains = function (n, t) {
                    return (n.ownerDocument || n) !== o && d(n),
                        ot(n, t)
                }
                ,
                r.attr = function (n, i) {
                    (n.ownerDocument || n) !== o && d(n);
                    var f = t.attrHandle[i.toLowerCase()]
                        , r = f && nr.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !a) : undefined;
                    return r !== undefined ? r : u.attributes || !a ? n.getAttribute(i) : (r = n.getAttributeNode(i)) && r.specified ? r.value : null
                }
                ,
                r.error = function (n) {
                    throw new Error("Syntax error, unrecognized expression: " + n);
                }
                ,
                r.uniqueSort = function (n) {
                    var r, f = [], t = 0, i = 0;
                    if (it = !u.detectDuplicates,
                        b = !u.sortStable && n.slice(0),
                        n.sort(dt),
                        it) {
                        while (r = n[i++])
                            r === n[i] && (t = f.push(i));
                        while (t--)
                            n.splice(f[t], 1)
                    }
                    return b = null,
                        n
                }
                ,
                ht = r.getText = function (n) {
                    var r, i = "", u = 0, t = n.nodeType;
                    if (t) {
                        if (t === 1 || t === 9 || t === 11) {
                            if (typeof n.textContent == "string")
                                return n.textContent;
                            for (n = n.firstChild; n; n = n.nextSibling)
                                i += ht(n)
                        } else if (t === 3 || t === 4)
                            return n.nodeValue
                    } else
                        while (r = n[u++])
                            i += ht(r);
                    return i
                }
                ,
                t = r.selectors = {
                    cacheLength: 50,
                    createPseudo: s,
                    match: ct,
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
                        ATTR: function (n) {
                            return n[1] = n[1].replace(y, p),
                                n[3] = (n[3] || n[4] || n[5] || "").replace(y, p),
                                n[2] === "~=" && (n[3] = " " + n[3] + " "),
                                n.slice(0, 4)
                        },
                        CHILD: function (n) {
                            return n[1] = n[1].toLowerCase(),
                                n[1].slice(0, 3) === "nth" ? (n[3] || r.error(n[0]),
                                    n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")),
                                    n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && r.error(n[0]),
                                n
                        },
                        PSEUDO: function (n) {
                            var i, t = !n[6] && n[2];
                            return ct.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && cr.test(t) && (i = et(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i),
                                n[2] = t.slice(0, i)),
                                n.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (n) {
                            var t = n.replace(y, p).toLowerCase();
                            return n === "*" ? function () {
                                return !0
                            }
                                : function (n) {
                                    return n.nodeName && n.nodeName.toLowerCase() === t
                                }
                        },
                        CLASS: function (n) {
                            var t = ai[n + " "];
                            return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && ai(n, function (n) {
                                return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute != "undefined" && n.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (n, t, i) {
                            return function (u) {
                                var f = r.attr(u, n);
                                return f == null ? t === "!=" : t ? (f += "",
                                    t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f.replace(er, " ") + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function (n, t, i, r, u) {
                            var s = n.slice(0, 3) !== "nth"
                                , o = n.slice(-4) !== "last"
                                , e = t === "of-type";
                            return r === 1 && u === 0 ? function (n) {
                                return !!n.parentNode
                            }
                                : function (t, i, h) {
                                    var a, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling", p = t.parentNode, g = e && t.nodeName.toLowerCase(), d = !h && !e;
                                    if (p) {
                                        if (s) {
                                            while (b) {
                                                for (c = t; c = c[b];)
                                                    if (e ? c.nodeName.toLowerCase() === g : c.nodeType === 1)
                                                        return !1;
                                                w = b = n === "only" && !w && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (w = [o ? p.firstChild : p.lastChild],
                                            o && d) {
                                            for (k = p[f] || (p[f] = {}),
                                                a = k[n] || [],
                                                y = a[0] === v && a[1],
                                                l = a[0] === v && a[2],
                                                c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
                                                if (c.nodeType === 1 && ++l && c === t) {
                                                    k[n] = [v, y, l];
                                                    break
                                                }
                                        } else if (d && (a = (t[f] || (t[f] = {}))[n]) && a[0] === v)
                                            l = a[1];
                                        else
                                            while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                                                if ((e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [v, l]),
                                                    c === t))
                                                    break;
                                        return l -= u,
                                            l === r || l % r == 0 && l / r >= 0
                                    }
                                }
                        },
                        PSEUDO: function (n, i) {
                            var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                            return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i],
                                t.setFilters.hasOwnProperty(n.toLowerCase()) ? s(function (n, t) {
                                    for (var r, f = u(n, i), e = f.length; e--;)
                                        r = k(n, f[e]),
                                            n[r] = !(t[r] = f[e])
                                }) : function (n) {
                                    return u(n, 0, e)
                                }
                            ) : u
                        }
                    },
                    pseudos: {
                        not: s(function (n) {
                            var t = []
                                , r = []
                                , i = ui(n.replace(at, "$1"));
                            return i[f] ? s(function (n, t, r, u) {
                                for (var e, o = i(n, null, u, []), f = n.length; f--;)
                                    (e = o[f]) && (n[f] = !(t[f] = e))
                            }) : function (n, u, f) {
                                return t[0] = n,
                                    i(t, null, f, r),
                                    t[0] = null,
                                    !r.pop()
                            }
                        }),
                        has: s(function (n) {
                            return function (t) {
                                return r(n, t).length > 0
                            }
                        }),
                        contains: s(function (n) {
                            return n = n.replace(y, p),
                                function (t) {
                                    return (t.textContent || t.innerText || ht(t)).indexOf(n) > -1
                                }
                        }),
                        lang: s(function (n) {
                            return ar.test(n || "") || r.error("unsupported lang: " + n),
                                n = n.replace(y, p).toLowerCase(),
                                function (t) {
                                    var i;
                                    do
                                        if (i = a ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                            return i = i.toLowerCase(),
                                                i === n || i.indexOf(n + "-") === 0;
                                    while ((t = t.parentNode) && t.nodeType === 1);
                                    return !1
                                }
                        }),
                        target: function (t) {
                            var i = n.location && n.location.hash;
                            return i && i.slice(1) === t.id
                        },
                        root: function (n) {
                            return n === c
                        },
                        focus: function (n) {
                            return n === o.activeElement && (!o.hasFocus || o.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                        },
                        enabled: function (n) {
                            return n.disabled === !1
                        },
                        disabled: function (n) {
                            return n.disabled === !0
                        },
                        checked: function (n) {
                            var t = n.nodeName.toLowerCase();
                            return t === "input" && !!n.checked || t === "option" && !!n.selected
                        },
                        selected: function (n) {
                            return n.parentNode && n.parentNode.selectedIndex,
                                n.selected === !0
                        },
                        empty: function (n) {
                            for (n = n.firstChild; n; n = n.nextSibling)
                                if (n.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function (n) {
                            return !t.pseudos.empty(n)
                        },
                        header: function (n) {
                            return yr.test(n.nodeName)
                        },
                        input: function (n) {
                            return ki.test(n.nodeName)
                        },
                        button: function (n) {
                            var t = n.nodeName.toLowerCase();
                            return t === "input" && n.type === "button" || t === "button"
                        },
                        text: function (n) {
                            var t;
                            return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text")
                        },
                        first: g(function () {
                            return [0]
                        }),
                        last: g(function (n, t) {
                            return [t - 1]
                        }),
                        eq: g(function (n, t, i) {
                            return [i < 0 ? i + t : i]
                        }),
                        even: g(function (n, t) {
                            for (var i = 0; i < t; i += 2)
                                n.push(i);
                            return n
                        }),
                        odd: g(function (n, t) {
                            for (var i = 1; i < t; i += 2)
                                n.push(i);
                            return n
                        }),
                        lt: g(function (n, t, i) {
                            for (var r = i < 0 ? i + t : i; --r >= 0;)
                                n.push(r);
                            return n
                        }),
                        gt: g(function (n, t, i) {
                            for (var r = i < 0 ? i + t : i; ++r < t;)
                                n.push(r);
                            return n
                        })
                    }
                },
                t.pseudos.nth = t.pseudos.eq;
            for (ut in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                t.pseudos[ut] = rr(ut);
            for (ut in {
                submit: !0,
                reset: !0
            })
                t.pseudos[ut] = ir(ut);
            return si.prototype = t.filters = t.pseudos,
                t.setFilters = new si,
                et = r.tokenize = function (n, i) {
                    var e, f, s, o, u, h, c, l = vi[n + " "];
                    if (l)
                        return i ? 0 : l.slice(0);
                    for (u = n,
                        h = [],
                        c = t.preFilter; u;) {
                        (!e || (f = or.exec(u))) && (f && (u = u.slice(f[0].length) || u),
                            h.push(s = [])),
                            e = !1,
                            (f = sr.exec(u)) && (e = f.shift(),
                                s.push({
                                    value: e,
                                    type: f[0].replace(at, " ")
                                }),
                                u = u.slice(e.length));
                        for (o in t.filter)
                            (f = ct[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(),
                                s.push({
                                    value: e,
                                    type: o,
                                    matches: f
                                }),
                                u = u.slice(e.length));
                        if (!e)
                            break
                    }
                    return i ? u.length : u ? r.error(n) : vi(n, h).slice(0)
                }
                ,
                ui = r.compile = function (n, t) {
                    var r, u = [], e = [], i = yi[n + " "];
                    if (!i) {
                        for (t || (t = et(n)),
                            r = t.length; r--;)
                            i = wt(t[r]),
                                i[f] ? u.push(i) : e.push(i);
                        i = yi(n, fr(e, u)),
                            i.selector = n
                    }
                    return i
                }
                ,
                li = r.select = function (n, i, r, f) {
                    var s, e, o, l, v, c = typeof n == "function" && n, h = !f && et(n = c.selector || n);
                    if (r = r || [],
                        h.length === 1) {
                        if (e = h[0] = h[0].slice(0),
                            e.length > 2 && (o = e[0]).type === "ID" && u.getById && i.nodeType === 9 && a && t.relative[e[1].type]) {
                            if (i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0],
                                i)
                                c && (i = i.parentNode);
                            else
                                return r;
                            n = n.slice(e.shift().value.length)
                        }
                        for (s = ct.needsContext.test(n) ? 0 : e.length; s--;) {
                            if (o = e[s],
                                t.relative[l = o.type])
                                break;
                            if ((v = t.find[l]) && (f = v(o.matches[0].replace(y, p), pt.test(e[0].type) && ri(i.parentNode) || i))) {
                                if (e.splice(s, 1),
                                    n = f.length && yt(e),
                                    !n)
                                    return w.apply(r, f),
                                        r;
                                break
                            }
                        }
                    }
                    return (c || ui(n, h))(f, i, !a, r, pt.test(n) && ri(i.parentNode) || i),
                        r
                }
                ,
                u.sortStable = f.split("").sort(dt).join("") === f,
                u.detectDuplicates = !!it,
                d(),
                u.sortDetached = l(function (n) {
                    return n.compareDocumentPosition(o.createElement("div")) & 1
                }),
                l(function (n) {
                    return n.innerHTML = "<a href='#'></a>",
                        n.firstChild.getAttribute("href") === "#"
                }) || ti("type|href|height|width", function (n, t, i) {
                    if (!i)
                        return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
                }),
                u.attributes && l(function (n) {
                    return n.innerHTML = "<input/>",
                        n.firstChild.setAttribute("value", ""),
                        n.firstChild.getAttribute("value") === ""
                }) || ti("value", function (n, t, i) {
                    if (!i && n.nodeName.toLowerCase() === "input")
                        return n.defaultValue
                }),
                l(function (n) {
                    return n.getAttribute("disabled") == null
                }) || ti(ni, function (n, t, i) {
                    var r;
                    if (!i)
                        return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
                }),
                r
        }(n),
        i.find = g,
        i.expr = g.selectors,
        i.expr[":"] = i.expr.pseudos,
        i.unique = g.uniqueSort,
        i.text = g.getText,
        i.isXMLDoc = g.isXML,
        i.contains = g.contains;
    var cf = i.expr.match.needsContext
        , ou = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
        , bo = /^.[^:#\[\.,]*$/;
    i.filter = function (n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"),
            t.length === 1 && u.nodeType === 1 ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function (n) {
                return n.nodeType === 1
            }))
    }
        ,
        i.fn.extend({
            find: function (n) {
                var t, r = [], u = this, f = u.length;
                if (typeof n != "string")
                    return this.pushStack(i(n).filter(function () {
                        for (t = 0; t < f; t++)
                            if (i.contains(u[t], this))
                                return !0
                    }));
                for (t = 0; t < f; t++)
                    i.find(n, u[t], r);
                return r = this.pushStack(f > 1 ? i.unique(r) : r),
                    r.selector = this.selector ? this.selector + " " + n : n,
                    r
            },
            filter: function (n) {
                return this.pushStack(ki(this, n || [], !1))
            },
            not: function (n) {
                return this.pushStack(ki(this, n || [], !0))
            },
            is: function (n) {
                return !!ki(this, typeof n == "string" && cf.test(n) ? i(n) : n || [], !1).length
            }
        });
    var et, u = n.document, wo = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, po = i.fn.init = function (n, t) {
        var r, f;
        if (!n)
            return this;
        if (typeof n == "string") {
            if (r = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : wo.exec(n),
                r && (r[1] || !t)) {
                if (r[1]) {
                    if (t = t instanceof i ? t[0] : t,
                        i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)),
                        ou.test(r[1]) && i.isPlainObject(t))
                        for (r in t)
                            i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                if (f = u.getElementById(r[2]),
                    f && f.parentNode) {
                    if (f.id !== r[2])
                        return et.find(n);
                    this.length = 1,
                        this[0] = f
                }
                return this.context = u,
                    this.selector = n,
                    this
            }
            return !t || t.jquery ? (t || et).find(n) : this.constructor(t).find(n)
        }
        return n.nodeType ? (this.context = this[0] = n,
            this.length = 1,
            this) : i.isFunction(n) ? typeof et.ready != "undefined" ? et.ready(n) : n(i) : (n.selector !== undefined && (this.selector = n.selector,
                this.context = n.context),
                i.makeArray(n, this))
    }
        ;
    po.prototype = i.fn,
        et = i(u),
        kf = /^(?:parents|prev(?:Until|All))/,
        wf = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        },
        i.extend({
            dir: function (n, t, r) {
                for (var f = [], u = n[t]; u && u.nodeType !== 9 && (r === undefined || u.nodeType !== 1 || !i(u).is(r));)
                    u.nodeType === 1 && f.push(u),
                        u = u[t];
                return f
            },
            sibling: function (n, t) {
                for (var i = []; n; n = n.nextSibling)
                    n.nodeType === 1 && n !== t && i.push(n);
                return i
            }
        }),
        i.fn.extend({
            has: function (n) {
                var t, r = i(n, this), u = r.length;
                return this.filter(function () {
                    for (t = 0; t < u; t++)
                        if (i.contains(this, r[t]))
                            return !0
                })
            },
            closest: function (n, t) {
                for (var r, f = 0, o = this.length, u = [], e = cf.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        }
                return this.pushStack(u.length > 1 ? i.unique(u) : u)
            },
            index: function (n) {
                return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (n, t) {
                return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
            },
            addBack: function (n) {
                return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
            }
        }),
        i.each({
            parent: function (n) {
                var t = n.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function (n) {
                return i.dir(n, "parentNode")
            },
            parentsUntil: function (n, t, r) {
                return i.dir(n, "parentNode", r)
            },
            next: function (n) {
                return uu(n, "nextSibling")
            },
            prev: function (n) {
                return uu(n, "previousSibling")
            },
            nextAll: function (n) {
                return i.dir(n, "nextSibling")
            },
            prevAll: function (n) {
                return i.dir(n, "previousSibling")
            },
            nextUntil: function (n, t, r) {
                return i.dir(n, "nextSibling", r)
            },
            prevUntil: function (n, t, r) {
                return i.dir(n, "previousSibling", r)
            },
            siblings: function (n) {
                return i.sibling((n.parentNode || {}).firstChild, n)
            },
            children: function (n) {
                return i.sibling(n.firstChild)
            },
            contents: function (n) {
                return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
            }
        }, function (n, t) {
            i.fn[n] = function (r, u) {
                var f = i.map(this, t, r);
                return n.slice(-5) !== "Until" && (u = r),
                    u && typeof u == "string" && (f = i.filter(u, f)),
                    this.length > 1 && (wf[n] || (f = i.unique(f)),
                        kf.test(n) && (f = f.reverse())),
                    this.pushStack(f)
            }
        }),
        h = /\S+/g,
        wi = {},
        i.Callbacks = function (n) {
            n = typeof n == "string" ? wi[n] || ve(n) : i.extend({}, n);
            var o, u, h, f, e, c, t = [], r = !n.once && [], l = function (i) {
                for (u = n.memory && i,
                    h = !0,
                    e = c || 0,
                    c = 0,
                    f = t.length,
                    o = !0; t && e < f; e++)
                    if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                        u = !1;
                        break
                    }
                o = !1,
                    t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
            }, s = {
                add: function () {
                    if (t) {
                        var r = t.length;
                        (function e(r) {
                            i.each(r, function (r, u) {
                                var f = i.type(u);
                                f === "function" ? n.unique && s.has(u) || t.push(u) : u && u.length && f !== "string" && e(u)
                            })
                        }
                        )(arguments),
                            o ? f = t.length : u && (c = r,
                                l(u))
                    }
                    return this
                },
                remove: function () {
                    return t && i.each(arguments, function (n, r) {
                        for (var u; (u = i.inArray(r, t, u)) > -1;)
                            t.splice(u, 1),
                                o && (u <= f && f--,
                                    u <= e && e--)
                    }),
                        this
                },
                has: function (n) {
                    return n ? i.inArray(n, t) > -1 : !!(t && t.length)
                },
                empty: function () {
                    return t = [],
                        f = 0,
                        this
                },
                disable: function () {
                    return t = r = u = undefined,
                        this
                },
                disabled: function () {
                    return !t
                },
                lock: function () {
                    return r = undefined,
                        u || s.disable(),
                        this
                },
                locked: function () {
                    return !r
                },
                fireWith: function (n, i) {
                    return t && (!h || r) && (i = i || [],
                        i = [n, i.slice ? i.slice() : i],
                        o ? r.push(i) : l(i)),
                        this
                },
                fire: function () {
                    return s.fireWith(this, arguments),
                        this
                },
                fired: function () {
                    return !!h
                }
            };
            return s
        }
        ,
        i.extend({
            Deferred: function (n) {
                var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]]
                    , f = "pending"
                    , r = {
                        state: function () {
                            return f
                        },
                        always: function () {
                            return t.done(arguments).fail(arguments),
                                this
                        },
                        then: function () {
                            var n = arguments;
                            return i.Deferred(function (f) {
                                i.each(u, function (u, e) {
                                    var o = i.isFunction(n[u]) && n[u];
                                    t[e[1]](function () {
                                        var n = o && o.apply(this, arguments);
                                        n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                    })
                                }),
                                    n = null
                            }).promise()
                        },
                        promise: function (n) {
                            return n != null ? i.extend(n, r) : r
                        }
                    }
                    , t = {};
                return r.pipe = r.then,
                    i.each(u, function (n, i) {
                        var e = i[2]
                            , o = i[3];
                        r[i[1]] = e.add,
                            o && e.add(function () {
                                f = o
                            }, u[n ^ 1][2].disable, u[2][2].lock),
                            t[i[0]] = function () {
                                return t[i[0] + "With"](this === t ? r : this, arguments),
                                    this
                            }
                            ,
                            t[i[0] + "With"] = e.fireWith
                    }),
                    r.promise(t),
                    n && n.call(t, t),
                    t
            },
            when: function (n) {
                var t = 0, u = y.call(arguments), r = u.length, e = r !== 1 || n && i.isFunction(n.promise) ? r : 0, f = e === 1 ? n : i.Deferred(), h = function (n, t, i) {
                    return function (r) {
                        t[n] = this,
                            i[n] = arguments.length > 1 ? y.call(arguments) : r,
                            i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                    }
                }, o, c, s;
                if (r > 1)
                    for (o = new Array(r),
                        c = new Array(r),
                        s = new Array(r); t < r; t++)
                        u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
                return e || f.resolveWith(s, u),
                    f.promise()
            }
        }),
        i.fn.ready = function (n) {
            return i.ready.promise().done(n),
                this
        }
        ,
        i.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (n) {
                n ? i.readyWait++ : i.ready(!0)
            },
            ready: function (n) {
                if (n === !0 ? !--i.readyWait : !i.isReady) {
                    if (!u.body)
                        return setTimeout(i.ready);
                    (i.isReady = !0,
                        n !== !0 && --i.readyWait > 0) || (ti.resolveWith(u, [i]),
                            i.fn.triggerHandler && (i(u).triggerHandler("ready"),
                                i(u).off("ready")))
                }
            }
        }),
        i.ready.promise = function (t) {
            if (!ti)
                if (ti = i.Deferred(),
                    u.readyState === "complete")
                    setTimeout(i.ready);
                else if (u.addEventListener)
                    u.addEventListener("DOMContentLoaded", c, !1),
                        n.addEventListener("load", c, !1);
                else {
                    u.attachEvent("onreadystatechange", c),
                        n.attachEvent("onload", c);
                    var r = !1;
                    try {
                        r = n.frameElement == null && u.documentElement
                    } catch (e) { }
                    r && r.doScroll && function f() {
                        if (!i.isReady) {
                            try {
                                r.doScroll("left")
                            } catch (n) {
                                return setTimeout(f, 50)
                            }
                            br(),
                                i.ready()
                        }
                    }()
                }
            return ti.promise(t)
        }
        ,
        s = typeof undefined;
    for (ar in i(r))
        break;
    r.ownLast = ar !== "0",
        r.inlineBlockNeedsLayout = !1,
        i(function () {
            var f, t, n, i;
            (n = u.getElementsByTagName("body")[0],
                n && n.style) && (t = u.createElement("div"),
                    i = u.createElement("div"),
                    i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    n.appendChild(i).appendChild(t),
                    typeof t.style.zoom !== s && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                        r.inlineBlockNeedsLayout = f = t.offsetWidth === 3,
                        f && (n.style.zoom = 1)),
                    n.removeChild(i))
        }),
        function () {
            var n = u.createElement("div");
            if (r.deleteExpando == null) {
                r.deleteExpando = !0;
                try {
                    delete n.test
                } catch (t) {
                    r.deleteExpando = !1
                }
            }
            n = null
        }(),
        i.acceptData = function (n) {
            var t = i.noData[(n.nodeName + " ").toLowerCase()]
                , r = +n.nodeType || 1;
            return r !== 1 && r !== 9 ? !1 : !t || t !== !0 && n.getAttribute("classid") === t
        }
        ,
        eu = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        lr = /([A-Z])/g,
        i.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (n) {
                return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando],
                    !!n && !bi(n)
            },
            data: function (n, t, i) {
                return pf(n, t, i)
            },
            removeData: function (n, t) {
                return yf(n, t)
            },
            _data: function (n, t, i) {
                return pf(n, t, i, !0)
            },
            _removeData: function (n, t) {
                return yf(n, t, !0)
            }
        }),
        i.fn.extend({
            data: function (n, t) {
                var f, u, e, r = this[0], o = r && r.attributes;
                if (n === undefined) {
                    if (this.length && (e = i.data(r),
                        r.nodeType === 1 && !i._data(r, "parsedAttrs"))) {
                        for (f = o.length; f--;)
                            o[f] && (u = o[f].name,
                                u.indexOf("data-") === 0 && (u = i.camelCase(u.slice(5)),
                                    rf(r, u, e[u])));
                        i._data(r, "parsedAttrs", !0)
                    }
                    return e
                }
                return typeof n == "object" ? this.each(function () {
                    i.data(this, n)
                }) : arguments.length > 1 ? this.each(function () {
                    i.data(this, n, t)
                }) : r ? rf(r, n, i.data(r, n)) : undefined
            },
            removeData: function (n) {
                return this.each(function () {
                    i.removeData(this, n)
                })
            }
        }),
        i.extend({
            queue: function (n, t, r) {
                var u;
                if (n)
                    return t = (t || "fx") + "queue",
                        u = i._data(n, t),
                        r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)),
                        u || []
            },
            dequeue: function (n, t) {
                t = t || "fx";
                var r = i.queue(n, t)
                    , e = r.length
                    , u = r.shift()
                    , f = i._queueHooks(n, t)
                    , o = function () {
                        i.dequeue(n, t)
                    };
                u === "inprogress" && (u = r.shift(),
                    e--),
                    u && (t === "fx" && r.unshift("inprogress"),
                        delete f.stop,
                        u.call(n, o, f)),
                    !e && f && f.empty.fire()
            },
            _queueHooks: function (n, t) {
                var r = t + "queueHooks";
                return i._data(n, r) || i._data(n, r, {
                    empty: i.Callbacks("once memory").add(function () {
                        i._removeData(n, t + "queue"),
                            i._removeData(n, r)
                    })
                })
            }
        }),
        i.fn.extend({
            queue: function (n, t) {
                var r = 2;
                return (typeof n != "string" && (t = n,
                    n = "fx",
                    r--),
                    arguments.length < r) ? i.queue(this[0], n) : t === undefined ? this : this.each(function () {
                        var r = i.queue(this, n, t);
                        i._queueHooks(this, n),
                            n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n)
                    })
            },
            dequeue: function (n) {
                return this.each(function () {
                    i.dequeue(this, n)
                })
            },
            clearQueue: function (n) {
                return this.queue(n || "fx", [])
            },
            promise: function (n, t) {
                var r, f = 1, e = i.Deferred(), u = this, o = this.length, s = function () {
                    --f || e.resolveWith(u, [u])
                };
                for (typeof n != "string" && (t = n,
                    n = undefined),
                    n = n || "fx"; o--;)
                    r = i._data(u[o], n + "queueHooks"),
                        r && r.empty && (f++,
                            r.empty.add(s));
                return s(),
                    e.promise(t)
            }
        });
    var lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , b = ["Top", "Right", "Bottom", "Left"]
        , ht = function (n, t) {
            return n = t || n,
                i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
        }
        , k = i.access = function (n, t, r, u, f, e, o) {
            var s = 0
                , c = n.length
                , h = r == null;
            if (i.type(r) === "object") {
                f = !0;
                for (s in r)
                    i.access(n, t, s, r[s], !0, e, o)
            } else if (u !== undefined && (f = !0,
                i.isFunction(u) || (o = !0),
                h && (o ? (t.call(n, u),
                    t = null) : (h = t,
                        t = function (n, t, r) {
                            return h.call(i(n), r)
                        }
                )),
                t))
                for (; s < c; s++)
                    t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
            return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
        }
        , gi = /^(?:checkbox|radio)$/i;
    (function () {
        var t = u.createElement("input")
            , n = u.createElement("div")
            , i = u.createDocumentFragment();
        if (n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            r.leadingWhitespace = n.firstChild.nodeType === 3,
            r.tbody = !n.getElementsByTagName("tbody").length,
            r.htmlSerialize = !!n.getElementsByTagName("link").length,
            r.html5Clone = u.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            t.type = "checkbox",
            t.checked = !0,
            i.appendChild(t),
            r.appendChecked = t.checked,
            n.innerHTML = "<textarea>x</textarea>",
            r.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue,
            i.appendChild(n),
            n.innerHTML = "<input type='radio' checked='checked' name='t'/>",
            r.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked,
            r.noCloneEvent = !0,
            n.attachEvent && (n.attachEvent("onclick", function () {
                r.noCloneEvent = !1
            }),
                n.cloneNode(!0).click()),
            r.deleteExpando == null) {
            r.deleteExpando = !0;
            try {
                delete n.test
            } catch (f) {
                r.deleteExpando = !1
            }
        }
    }
    )(),
        function () {
            var t, i, f = u.createElement("div");
            for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                i = "on" + t,
                    (r[t + "Bubbles"] = i in n) || (f.setAttribute(i, "t"),
                        r[t + "Bubbles"] = f.attributes[i].expando === !1);
            f = null
        }();
    var nr = /^(?:input|select|textarea)$/i
        , ro = /^key/
        , to = /^(?:mouse|pointer|contextmenu)|click/
        , uf = /^(?:focusinfocus|focusoutblur)$/
        , nf = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function (n, t, r, u, f) {
            var b, y, w, p, o, c, a, l, e, k, d, v = i._data(n);
            if (v) {
                for (r.handler && (p = r,
                    r = p.handler,
                    f = p.selector),
                    r.guid || (r.guid = i.guid++),
                    (y = v.events) || (y = v.events = {}),
                    (c = v.handle) || (c = v.handle = function (n) {
                        return typeof i !== s && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(c.elem, arguments) : undefined
                    }
                        ,
                        c.elem = n),
                    t = (t || "").match(h) || [""],
                    w = t.length; w--;)
                    (b = nf.exec(t[w]) || [],
                        e = d = b[1],
                        k = (b[2] || "").split(".").sort(),
                        e) && (o = i.event.special[e] || {},
                            e = (f ? o.delegateType : o.bindType) || e,
                            o = i.event.special[e] || {},
                            a = i.extend({
                                type: e,
                                origType: d,
                                data: u,
                                handler: r,
                                guid: r.guid,
                                selector: f,
                                needsContext: f && i.expr.match.needsContext.test(f),
                                namespace: k.join(".")
                            }, p),
                            (l = y[e]) || (l = y[e] = [],
                                l.delegateCount = 0,
                                o.setup && o.setup.call(n, u, k, c) !== !1 || (n.addEventListener ? n.addEventListener(e, c, !1) : n.attachEvent && n.attachEvent("on" + e, c))),
                            o.add && (o.add.call(n, a),
                                a.handler.guid || (a.handler.guid = r.guid)),
                            f ? l.splice(l.delegateCount++, 0, a) : l.push(a),
                            i.event.global[e] = !0);
                n = null
            }
        },
        remove: function (n, t, r, u, f) {
            var p, o, s, k, y, v, c, l, e, w, b, a = i.hasData(n) && i._data(n);
            if (a && (v = a.events)) {
                for (t = (t || "").match(h) || [""],
                    y = t.length; y--;) {
                    if (s = nf.exec(t[y]) || [],
                        e = b = s[1],
                        w = (s[2] || "").split(".").sort(),
                        !e) {
                        for (e in v)
                            i.event.remove(n, e + t[y], r, u, !0);
                        continue
                    }
                    for (c = i.event.special[e] || {},
                        e = (u ? c.delegateType : c.bindType) || e,
                        l = v[e] || [],
                        s = s[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        k = p = l.length; p--;)
                        o = l[p],
                            (f || b === o.origType) && (!r || r.guid === o.guid) && (!s || s.test(o.namespace)) && (!u || u === o.selector || u === "**" && o.selector) && (l.splice(p, 1),
                                o.selector && l.delegateCount--,
                                c.remove && c.remove.call(n, o));
                    k && !l.length && (c.teardown && c.teardown.call(n, w, a.handle) !== !1 || i.removeEvent(n, e, a.handle),
                        delete v[e])
                }
                i.isEmptyObject(v) && (delete a.handle,
                    i._removeData(n, "events"))
            }
        },
        trigger: function (t, r, f, e) {
            var l, a, o, p, c, h, w, y = [f || u], s = rt.call(t, "type") ? t.type : t, v = rt.call(t, "namespace") ? t.namespace.split(".") : [];
            if ((o = h = f = f || u,
                f.nodeType !== 3 && f.nodeType !== 8) && !uf.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (v = s.split("."),
                    s = v.shift(),
                    v.sort()),
                    a = s.indexOf(":") < 0 && "on" + s,
                    t = t[i.expando] ? t : new i.Event(s, typeof t == "object" && t),
                    t.isTrigger = e ? 2 : 3,
                    t.namespace = v.join("."),
                    t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    t.result = undefined,
                    t.target || (t.target = f),
                    r = r == null ? [t] : i.makeArray(r, [t]),
                    c = i.event.special[s] || {},
                    e || !c.trigger || c.trigger.apply(f, r) !== !1)) {
                if (!e && !c.noBubble && !i.isWindow(f)) {
                    for (p = c.delegateType || s,
                        uf.test(p + s) || (o = o.parentNode); o; o = o.parentNode)
                        y.push(o),
                            h = o;
                    h === (f.ownerDocument || u) && y.push(h.defaultView || h.parentWindow || n)
                }
                for (w = 0; (o = y[w++]) && !t.isPropagationStopped();)
                    t.type = w > 1 ? p : c.bindType || s,
                        l = (i._data(o, "events") || {})[t.type] && i._data(o, "handle"),
                        l && l.apply(o, r),
                        l = a && o[a],
                        l && l.apply && i.acceptData(o) && (t.result = l.apply(o, r),
                            t.result === !1 && t.preventDefault());
                if (t.type = s,
                    !e && !t.isDefaultPrevented() && (!c._default || c._default.apply(y.pop(), r) === !1) && i.acceptData(f) && a && f[s] && !i.isWindow(f)) {
                    h = f[a],
                        h && (f[a] = null),
                        i.event.triggered = s;
                    try {
                        f[s]()
                    } catch (b) { }
                    i.event.triggered = undefined,
                        h && (f[a] = h)
                }
                return t.result
            }
        },
        dispatch: function (n) {
            n = i.event.fix(n);
            var e, f, t, r, o, s = [], h = y.call(arguments), c = (i._data(this, "events") || {})[n.type] || [], u = i.event.special[n.type] || {};
            if (h[0] = n,
                n.delegateTarget = this,
                !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
                for (s = i.event.handlers.call(this, n, c),
                    e = 0; (r = s[e++]) && !n.isPropagationStopped();)
                    for (n.currentTarget = r.elem,
                        o = 0; (t = r.handlers[o++]) && !n.isImmediatePropagationStopped();)
                        (!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t,
                            n.data = t.data,
                            f = ((i.event.special[t.origType] || {}).handle || t.handler).apply(r.elem, h),
                            f !== undefined && (n.result = f) === !1 && (n.preventDefault(),
                                n.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, n),
                    n.result
            }
        },
        handlers: function (n, t) {
            var f, e, u, o, h = [], s = t.delegateCount, r = n.target;
            if (s && r.nodeType && (!n.button || n.type !== "click"))
                for (; r != this; r = r.parentNode || this)
                    if (r.nodeType === 1 && (r.disabled !== !0 || n.type !== "click")) {
                        for (u = [],
                            o = 0; o < s; o++)
                            e = t[o],
                                f = e.selector + " ",
                                u[f] === undefined && (u[f] = e.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length),
                                u[f] && u.push(e);
                        u.length && h.push({
                            elem: r,
                            handlers: u
                        })
                    }
            return s < t.length && h.push({
                elem: this,
                handlers: t.slice(s)
            }),
                h
        },
        fix: function (n) {
            if (n[i.expando])
                return n;
            var e, o, s, r = n.type, f = n, t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = to.test(r) ? this.mouseHooks : ro.test(r) ? this.keyHooks : {}),
                s = t.props ? this.props.concat(t.props) : this.props,
                n = new i.Event(f),
                e = s.length; e--;)
                o = s[e],
                    n[o] = f[o];
            return n.target || (n.target = f.srcElement || u),
                n.target.nodeType === 3 && (n.target = n.target.parentNode),
                n.metaKey = !!n.metaKey,
                t.filter ? t.filter(n, f) : n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode),
                    n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (n, t) {
                var i, e, r, f = t.button, o = t.fromElement;
                return n.pageX == null && t.clientX != null && (e = n.target.ownerDocument || u,
                    r = e.documentElement,
                    i = e.body,
                    n.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                    n.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                    !n.relatedTarget && o && (n.relatedTarget = o === n.target ? t.toElement : o),
                    n.which || f === undefined || (n.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0),
                    n
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== au() && this.focus)
                        try {
                            return this.focus(),
                                !1
                        } catch (n) { }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === au() && this.blur)
                        return this.blur(),
                            !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (i.nodeName(this, "input") && this.type === "checkbox" && this.click)
                        return this.click(),
                            !1
                },
                _default: function (n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (n) {
                    n.result !== undefined && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function (n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f),
                f.isDefaultPrevented() && r.preventDefault()
        }
    },
        i.removeEvent = u.removeEventListener ? function (n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i, !1)
        }
            : function (n, t, i) {
                var r = "on" + t;
                n.detachEvent && (typeof n[r] === s && (n[r] = null),
                    n.detachEvent(r, i))
            }
        ,
        i.Event = function (n, t) {
            if (!(this instanceof i.Event))
                return new i.Event(n, t);
            n && n.type ? (this.originalEvent = n,
                this.type = n.type,
                this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && n.returnValue === !1 ? vt : ut) : this.type = n,
                t && i.extend(this, t),
                this.timeStamp = n && n.timeStamp || i.now(),
                this[i.expando] = !0
        }
        ,
        i.Event.prototype = {
            isDefaultPrevented: ut,
            isPropagationStopped: ut,
            isImmediatePropagationStopped: ut,
            preventDefault: function () {
                var n = this.originalEvent;
                (this.isDefaultPrevented = vt,
                    n) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
            },
            stopPropagation: function () {
                var n = this.originalEvent;
                (this.isPropagationStopped = vt,
                    n) && (n.stopPropagation && n.stopPropagation(),
                        n.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var n = this.originalEvent;
                this.isImmediatePropagationStopped = vt,
                    n && n.stopImmediatePropagation && n.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (n, t) {
            i.event.special[n] = {
                delegateType: t,
                bindType: t,
                handle: function (n) {
                    var u, f = this, r = n.relatedTarget, e = n.handleObj;
                    return r && (r === f || i.contains(f, r)) || (n.type = e.origType,
                        u = e.handler.apply(this, arguments),
                        n.type = t),
                        u
                }
            }
        }),
        r.submitBubbles || (i.event.special.submit = {
            setup: function () {
                if (i.nodeName(this, "form"))
                    return !1;
                i.event.add(this, "click._submit keypress._submit", function (n) {
                    var r = n.target
                        , t = i.nodeName(r, "input") || i.nodeName(r, "button") ? r.form : undefined;
                    t && !i._data(t, "submitBubbles") && (i.event.add(t, "submit._submit", function (n) {
                        n._submit_bubble = !0
                    }),
                        i._data(t, "submitBubbles", !0))
                })
            },
            postDispatch: function (n) {
                n._submit_bubble && (delete n._submit_bubble,
                    this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
            },
            teardown: function () {
                if (i.nodeName(this, "form"))
                    return !1;
                i.event.remove(this, "._submit")
            }
        }),
        r.changeBubbles || (i.event.special.change = {
            setup: function () {
                if (nr.test(this.nodeName))
                    return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function (n) {
                        n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }),
                        i.event.add(this, "click._change", function (n) {
                            this._just_changed && !n.isTrigger && (this._just_changed = !1),
                                i.event.simulate("change", this, n, !0)
                        })),
                        !1;
                i.event.add(this, "beforeactivate._change", function (n) {
                    var t = n.target;
                    nr.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function (n) {
                        !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                    }),
                        i._data(t, "changeBubbles", !0))
                })
            },
            handle: function (n) {
                var t = n.target;
                if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox")
                    return n.handleObj.handler.apply(this, arguments)
            },
            teardown: function () {
                return i.event.remove(this, "._change"),
                    !nr.test(this.nodeName)
            }
        }),
        r.focusinBubbles || i.each({
            focus: "focusin",
            blur: "focusout"
        }, function (n, t) {
            var r = function (n) {
                i.event.simulate(t, n.target, i.event.fix(n), !0)
            };
            i.event.special[t] = {
                setup: function () {
                    var u = this.ownerDocument || this
                        , f = i._data(u, t);
                    f || u.addEventListener(n, r, !0),
                        i._data(u, t, (f || 0) + 1)
                },
                teardown: function () {
                    var u = this.ownerDocument || this
                        , f = i._data(u, t) - 1;
                    f ? i._data(u, t, f) : (u.removeEventListener(n, r, !0),
                        i._removeData(u, t))
                }
            }
        }),
        i.fn.extend({
            on: function (n, t, r, u, f) {
                var o, e;
                if (typeof n == "object") {
                    typeof t != "string" && (r = r || t,
                        t = undefined);
                    for (o in n)
                        this.on(o, t, r, n[o], f);
                    return this
                }
                if (r == null && u == null ? (u = t,
                    r = t = undefined) : u == null && (typeof t == "string" ? (u = r,
                        r = undefined) : (u = r,
                            r = t,
                            t = undefined)),
                    u === !1)
                    u = ut;
                else if (!u)
                    return this;
                return f === 1 && (e = u,
                    u = function (n) {
                        return i().off(n),
                            e.apply(this, arguments)
                    }
                    ,
                    u.guid = e.guid || (e.guid = i.guid++)),
                    this.each(function () {
                        i.event.add(this, n, u, r, t)
                    })
            },
            one: function (n, t, i, r) {
                return this.on(n, t, i, r, 1)
            },
            off: function (n, t, r) {
                var u, f;
                if (n && n.preventDefault && n.handleObj)
                    return u = n.handleObj,
                        i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler),
                        this;
                if (typeof n == "object") {
                    for (f in n)
                        this.off(f, t, n[f]);
                    return this
                }
                return (t === !1 || typeof t == "function") && (r = t,
                    t = undefined),
                    r === !1 && (r = ut),
                    this.each(function () {
                        i.event.remove(this, n, r, t)
                    })
            },
            trigger: function (n, t) {
                return this.each(function () {
                    i.event.trigger(n, t, this)
                })
            },
            triggerHandler: function (n, t) {
                var r = this[0];
                if (r)
                    return i.event.trigger(n, t, r, !0)
            }
        });
    var fr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
        , pe = / jQuery\d+="(?:null|\d+)"/g
        , lu = new RegExp("<(?:" + fr + ")[\\s/>]", "i")
        , yi = /^\s+/
        , vu = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
        , yu = /<([\w:]+)/
        , pu = /<tbody/i
        , we = /<|&#?\w+;/
        , be = /<(?:script|style|link)/i
        , ke = /checked\s*(?:[^=]|=\s*.checked.)/i
        , ku = /^$|\/(?:java|ecma)script/i
        , de = /^true\/(.*)/
        , ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        , o = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }
        , no = kr(u)
        , li = no.appendChild(u.createElement("div"));
    o.optgroup = o.option,
        o.tbody = o.tfoot = o.colgroup = o.caption = o.thead,
        o.th = o.td,
        i.extend({
            clone: function (n, t, u) {
                var e, c, s, o, h, l = i.contains(n.ownerDocument, n);
                if (r.html5Clone || i.isXMLDoc(n) || !lu.test("<" + n.nodeName + ">") ? s = n.cloneNode(!0) : (li.innerHTML = n.outerHTML,
                    li.removeChild(s = li.firstChild)),
                    (!r.noCloneEvent || !r.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                    for (e = f(s),
                        h = f(n),
                        o = 0; (c = h[o]) != null; ++o)
                        e[o] && uo(c, e[o]);
                if (t)
                    if (u)
                        for (h = h || f(n),
                            e = e || f(s),
                            o = 0; (c = h[o]) != null; o++)
                            hf(c, e[o]);
                    else
                        hf(n, s);
                return e = f(s, "script"),
                    e.length > 0 && hi(e, !l && f(n, "script")),
                    e = h = c = null,
                    s
            },
            buildFragment: function (n, t, u, e) {
                for (var c, s, b, h, p, w, a, k = n.length, v = kr(t), l = [], y = 0; y < k; y++)
                    if (s = n[y],
                        s || s === 0)
                        if (i.type(s) === "object")
                            i.merge(l, s.nodeType ? [s] : s);
                        else if (we.test(s)) {
                            for (h = h || v.appendChild(t.createElement("div")),
                                p = (yu.exec(s) || ["", ""])[1].toLowerCase(),
                                a = o[p] || o._default,
                                h.innerHTML = a[1] + s.replace(vu, "<$1></$2>") + a[2],
                                c = a[0]; c--;)
                                h = h.lastChild;
                            if (!r.leadingWhitespace && yi.test(s) && l.push(t.createTextNode(yi.exec(s)[0])),
                                !r.tbody)
                                for (s = p === "table" && !pu.test(s) ? h.firstChild : a[1] === "<table>" && !pu.test(s) ? h : 0,
                                    c = s && s.childNodes.length; c--;)
                                    i.nodeName(w = s.childNodes[c], "tbody") && !w.childNodes.length && s.removeChild(w);
                            for (i.merge(l, h.childNodes),
                                h.textContent = ""; h.firstChild;)
                                h.removeChild(h.firstChild);
                            h = v.lastChild
                        } else
                            l.push(t.createTextNode(s));
                for (h && v.removeChild(h),
                    r.appendChecked || i.grep(f(l, "input"), io),
                    y = 0; s = l[y++];)
                    if ((!e || i.inArray(s, e) === -1) && (b = i.contains(s.ownerDocument, s),
                        h = f(v.appendChild(s), "script"),
                        b && hi(h),
                        u))
                        for (c = 0; s = h[c++];)
                            ku.test(s.type || "") && u.push(s);
                return h = null,
                    v
            },
            cleanData: function (n, t) {
                for (var u, o, f, e, l = 0, h = i.expando, c = i.cache, a = r.deleteExpando, y = i.event.special; (u = n[l]) != null; l++)
                    if ((t || i.acceptData(u)) && (f = u[h],
                        e = f && c[f],
                        e)) {
                        if (e.events)
                            for (o in e.events)
                                y[o] ? i.event.remove(u, o) : i.removeEvent(u, o, e.handle);
                        c[f] && (delete c[f],
                            a ? delete u[h] : typeof u.removeAttribute !== s ? u.removeAttribute(h) : u[h] = null,
                            v.push(f))
                    }
            }
        }),
        i.fn.extend({
            text: function (n) {
                return k(this, function (n) {
                    return n === undefined ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
                }, null, n, arguments.length)
            },
            append: function () {
                return this.domManip(arguments, function (n) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = ef(this, n);
                        t.appendChild(n)
                    }
                })
            },
            prepend: function () {
                return this.domManip(arguments, function (n) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = ef(this, n);
                        t.insertBefore(n, t.firstChild)
                    }
                })
            },
            before: function () {
                return this.domManip(arguments, function (n) {
                    this.parentNode && this.parentNode.insertBefore(n, this)
                })
            },
            after: function () {
                return this.domManip(arguments, function (n) {
                    this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
                })
            },
            remove: function (n, t) {
                for (var r, e = n ? i.filter(n, this) : this, u = 0; (r = e[u]) != null; u++)
                    t || r.nodeType !== 1 || i.cleanData(f(r)),
                        r.parentNode && (t && i.contains(r.ownerDocument, r) && hi(f(r, "script")),
                            r.parentNode.removeChild(r));
                return this
            },
            empty: function () {
                for (var n, t = 0; (n = this[t]) != null; t++) {
                    for (n.nodeType === 1 && i.cleanData(f(n, !1)); n.firstChild;)
                        n.removeChild(n.firstChild);
                    n.options && i.nodeName(n, "select") && (n.options.length = 0)
                }
                return this
            },
            clone: function (n, t) {
                return n = n == null ? !1 : n,
                    t = t == null ? n : t,
                    this.map(function () {
                        return i.clone(this, n, t)
                    })
            },
            html: function (n) {
                return k(this, function (n) {
                    var t = this[0] || {}
                        , u = 0
                        , e = this.length;
                    if (n === undefined)
                        return t.nodeType === 1 ? t.innerHTML.replace(pe, "") : undefined;
                    if (typeof n == "string" && !be.test(n) && (r.htmlSerialize || !lu.test(n)) && (r.leadingWhitespace || !yi.test(n)) && !o[(yu.exec(n) || ["", ""])[1].toLowerCase()]) {
                        n = n.replace(vu, "<$1></$2>");
                        try {
                            for (; u < e; u++)
                                t = this[u] || {},
                                    t.nodeType === 1 && (i.cleanData(f(t, !1)),
                                        t.innerHTML = n);
                            t = 0
                        } catch (s) { }
                    }
                    t && this.empty().append(n)
                }, null, n, arguments.length)
            },
            replaceWith: function () {
                var n = arguments[0];
                return this.domManip(arguments, function (t) {
                    n = this.parentNode,
                        i.cleanData(f(this)),
                        n && n.replaceChild(t, this)
                }),
                    n && (n.length || n.nodeType) ? this : this.remove()
            },
            detach: function (n) {
                return this.remove(n, !0)
            },
            domManip: function (n, t) {
                n = bu.apply([], n);
                var h, u, c, o, v, s, e = 0, l = this.length, p = this, w = l - 1, a = n[0], y = i.isFunction(a);
                if (y || l > 1 && typeof a == "string" && !r.checkClone && ke.test(a))
                    return this.each(function (i) {
                        var r = p.eq(i);
                        y && (n[0] = a.call(this, i, r.html())),
                            r.domManip(n, t)
                    });
                if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, this),
                    h = s.firstChild,
                    s.childNodes.length === 1 && (s = h),
                    h)) {
                    for (o = i.map(f(s, "script"), of),
                        c = o.length; e < l; e++)
                        u = s,
                            e !== w && (u = i.clone(u, !0, !0),
                                c && i.merge(o, f(u, "script"))),
                            t.call(this[e], u, e);
                    if (c)
                        for (v = o[o.length - 1].ownerDocument,
                            i.map(o, sf),
                            e = 0; e < c; e++)
                            u = o[e],
                                ku.test(u.type || "") && !i._data(u, "globalEval") && i.contains(v, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval((u.text || u.textContent || u.innerHTML || "").replace(ge, "")));
                    s = h = null
                }
                return this
            }
        }),
        i.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (n, t) {
            i.fn[n] = function (n) {
                for (var u, r = 0, f = [], e = i(n), o = e.length - 1; r <= o; r++)
                    u = r === o ? this : this.clone(!0),
                        i(e[r])[t](u),
                        tr.apply(f, u.get());
                return this.pushStack(f)
            }
        }),
        pi = {},
        function () {
            var n;
            r.shrinkWrapBlocks = function () {
                if (n != null)
                    return n;
                n = !1;
                var t, i, r;
                if (i = u.getElementsByTagName("body")[0],
                    i && i.style)
                    return t = u.createElement("div"),
                        r = u.createElement("div"),
                        r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                        i.appendChild(r).appendChild(t),
                        typeof t.style.zoom !== s && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                            t.appendChild(u.createElement("div")).style.width = "5px",
                            n = t.offsetWidth !== 3),
                        i.removeChild(r),
                        n
            }
        }();
    var vf = /^margin/, yt = new RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"), d, p, fo = /^(top|right|bottom|left)$/;
    n.getComputedStyle ? (d = function (t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : n.getComputedStyle(t, null)
    }
        ,
        p = function (n, t, r) {
            var e, o, s, u, f = n.style;
            return r = r || d(n),
                u = r ? r.getPropertyValue(t) || r[t] : undefined,
                r && (u !== "" || i.contains(n.ownerDocument, n) || (u = i.style(n, t)),
                    yt.test(u) && vf.test(t) && (e = f.width,
                        o = f.minWidth,
                        s = f.maxWidth,
                        f.minWidth = f.maxWidth = f.width = u,
                        u = r.width,
                        f.width = e,
                        f.minWidth = o,
                        f.maxWidth = s)),
                u === undefined ? u : u + ""
        }
    ) : u.documentElement.currentStyle && (d = function (n) {
        return n.currentStyle
    }
        ,
        p = function (n, t, i) {
            var o, f, e, r, u = n.style;
            return i = i || d(n),
                r = i ? i[t] : undefined,
                r == null && u && u[t] && (r = u[t]),
                yt.test(r) && !fo.test(t) && (o = u.left,
                    f = n.runtimeStyle,
                    e = f && f.left,
                    e && (f.left = n.currentStyle.left),
                    u.left = t === "fontSize" ? "1em" : r,
                    r = u.pixelLeft + "px",
                    u.left = o,
                    e && (f.left = e)),
                r === undefined ? r : r + "" || "auto"
        }
    ),
        function () {
            function c() {
                var i, r, f, t;
                (r = u.getElementsByTagName("body")[0],
                    r && r.style) && (i = u.createElement("div"),
                        f = u.createElement("div"),
                        f.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                        r.appendChild(f).appendChild(i),
                        i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                        o = s = !1,
                        h = !0,
                        n.getComputedStyle && (o = (n.getComputedStyle(i, null) || {}).top !== "1%",
                            s = (n.getComputedStyle(i, null) || {
                                width: "4px"
                            }).width === "4px",
                            t = i.appendChild(u.createElement("div")),
                            t.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                            t.style.marginRight = t.style.width = "0",
                            i.style.width = "1px",
                            h = !parseFloat((n.getComputedStyle(t, null) || {}).marginRight),
                            i.removeChild(t)),
                        i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                        t = i.getElementsByTagName("td"),
                        t[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                        e = t[0].offsetHeight === 0,
                        e && (t[0].style.display = "",
                            t[1].style.display = "none",
                            e = t[0].offsetHeight === 0),
                        r.removeChild(f))
            }
            var f, t, l, o, s, e, h;
            (f = u.createElement("div"),
                f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                l = f.getElementsByTagName("a")[0],
                t = l && l.style,
                t) && (t.cssText = "float:left;opacity:.5",
                    r.opacity = t.opacity === "0.5",
                    r.cssFloat = !!t.cssFloat,
                    f.style.backgroundClip = "content-box",
                    f.cloneNode(!0).style.backgroundClip = "",
                    r.clearCloneStyle = f.style.backgroundClip === "content-box",
                    r.boxSizing = t.boxSizing === "" || t.MozBoxSizing === "" || t.WebkitBoxSizing === "",
                    i.extend(r, {
                        reliableHiddenOffsets: function () {
                            return e == null && c(),
                                e
                        },
                        boxSizingReliable: function () {
                            return s == null && c(),
                                s
                        },
                        pixelPosition: function () {
                            return o == null && c(),
                                o
                        },
                        reliableMarginRight: function () {
                            return h == null && c(),
                                h
                        }
                    }))
        }(),
        i.swap = function (n, t, i, r) {
            var f, u, e = {};
            for (u in t)
                e[u] = n.style[u],
                    n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t)
                n.style[u] = e[u];
            return f
        }
        ;
    var ii = /alpha\([^)]*\)/i
        , oo = /opacity\s*=\s*([^)]*)/
        , ns = /^(none|table(?!-c[ea]).+)/
        , so = new RegExp("^(" + lt + ")(.*)$", "i")
        , ho = new RegExp("^([+-])=(" + lt + ")", "i")
        , co = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
        , sr = {
            letterSpacing: "0",
            fontWeight: "400"
        }
        , or = ["Webkit", "O", "Moz", "ms"];
    i.extend({
        cssHooks: {
            opacity: {
                get: function (n, t) {
                    if (t) {
                        var i = p(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: r.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (n, t, u, f) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var o, h, e, s = i.camelCase(t), c = n.style;
                if (t = i.cssProps[s] || (i.cssProps[s] = er(c, s)),
                    e = i.cssHooks[t] || i.cssHooks[s],
                    u !== undefined) {
                    if (h = typeof u,
                        h === "string" && (o = ho.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)),
                            h = "number"),
                        u == null || u !== u)
                        return;
                    if (h !== "number" || i.cssNumber[s] || (u += "px"),
                        r.clearCloneStyle || u !== "" || t.indexOf("background") !== 0 || (c[t] = "inherit"),
                        !e || !("set" in e) || (u = e.set(n, u, f)) !== undefined)
                        try {
                            c[t] = u
                        } catch (l) { }
                } else
                    return e && "get" in e && (o = e.get(n, !1, f)) !== undefined ? o : c[t]
            }
        },
        css: function (n, t, r, u) {
            var s, f, e, o = i.camelCase(t);
            return (t = i.cssProps[o] || (i.cssProps[o] = er(n.style, o)),
                e = i.cssHooks[t] || i.cssHooks[o],
                e && "get" in e && (f = e.get(n, !0, r)),
                f === undefined && (f = p(n, t, u)),
                f === "normal" && t in sr && (f = sr[t]),
                r === "" || r) ? (s = parseFloat(f),
                    r === !0 || i.isNumeric(s) ? s || 0 : f) : f
        }
    }),
        i.each(["height", "width"], function (n, t) {
            i.cssHooks[t] = {
                get: function (n, r, u) {
                    if (r)
                        return ns.test(i.css(n, "display")) && n.offsetWidth === 0 ? i.swap(n, co, function () {
                            return cr(n, t, u)
                        }) : cr(n, t, u)
                },
                set: function (n, u, f) {
                    var e = f && d(n);
                    return rr(n, u, f ? ir(n, t, f, r.boxSizing && i.css(n, "boxSizing", !1, e) === "border-box", e) : 0)
                }
            }
        }),
        r.opacity || (i.cssHooks.opacity = {
            get: function (n, t) {
                return oo.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function (n, t) {
                var r = n.style
                    , u = n.currentStyle
                    , e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : ""
                    , f = u && u.filter || r.filter || "";
                (r.zoom = 1,
                    (t >= 1 || t === "") && i.trim(f.replace(ii, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"),
                        t === "" || u && !u.filter)) || (r.filter = ii.test(f) ? f.replace(ii, e) : f + " " + e)
            }
        }),
        i.cssHooks.marginRight = hu(r.reliableMarginRight, function (n, t) {
            if (t)
                return i.swap(n, {
                    display: "inline-block"
                }, p, [n, "marginRight"])
        }),
        i.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (n, t) {
            i.cssHooks[n + t] = {
                expand: function (i) {
                    for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++)
                        f[n + b[r] + t] = u[r] || u[r - 2] || u[0];
                    return f
                }
            },
                vf.test(n) || (i.cssHooks[n + t].set = rr)
        }),
        i.fn.extend({
            css: function (n, t) {
                return k(this, function (n, t, r) {
                    var f, e, o = {}, u = 0;
                    if (i.isArray(t)) {
                        for (f = d(n),
                            e = t.length; u < e; u++)
                            o[t[u]] = i.css(n, t[u], !1, f);
                        return o
                    }
                    return r !== undefined ? i.style(n, t, r) : i.css(n, t)
                }, n, t, arguments.length > 1)
            },
            show: function () {
                return ur(this, !0)
            },
            hide: function () {
                return ur(this)
            },
            toggle: function (n) {
                return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function () {
                    ht(this) ? i(this).show() : i(this).hide()
                })
            }
        }),
        i.Tween = e,
        e.prototype = {
            constructor: e,
            init: function (n, t, r, u, f, e) {
                this.elem = n,
                    this.prop = r,
                    this.easing = f || "swing",
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = u,
                    this.unit = e || (i.cssNumber[r] ? "" : "px")
            },
            cur: function () {
                var n = e.propHooks[this.prop];
                return n && n.get ? n.get(this) : e.propHooks._default.get(this)
            },
            run: function (n) {
                var t, r = e.propHooks[this.prop];
                return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    r && r.set ? r.set(this) : e.propHooks._default.set(this),
                    this
            }
        },
        e.prototype.init.prototype = e.prototype,
        e.propHooks = {
            _default: {
                get: function (n) {
                    var t;
                    return n.elem[n.prop] != null && (!n.elem.style || n.elem.style[n.prop] == null) ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""),
                        !t || t === "auto" ? 0 : t)
                },
                set: function (n) {
                    i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
                }
            }
        },
        e.propHooks.scrollTop = e.propHooks.scrollLeft = {
            set: function (n) {
                n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
            }
        },
        i.easing = {
            linear: function (n) {
                return n
            },
            swing: function (n) {
                return .5 - Math.cos(n * Math.PI) / 2
            }
        },
        i.fx = e.prototype.init,
        i.fx.step = {};
    var it, pt, lo = /^(?:toggle|show|hide)$/, pr = new RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"), ao = /queueHooks$/, wt = [vo], st = {
        "*": [function (n, t) {
            var f = this.createTween(n, t)
                , s = f.cur()
                , u = pr.exec(t)
                , e = u && u[3] || (i.cssNumber[n] ? "" : "px")
                , r = (i.cssNumber[n] || e !== "px" && +s) && pr.exec(i.css(f.elem, n))
                , o = 1
                , h = 20;
            if (r && r[3] !== e) {
                e = e || r[3],
                    u = u || [],
                    r = +s || 1;
                do
                    o = o || ".5",
                        r = r / o,
                        i.style(f.elem, n, r + e);
                while (o !== (o = f.cur() / s) && o !== 1 && --h)
            }
            return u && (r = f.start = +r || +s || 0,
                f.unit = e,
                f.end = u[1] ? r + (u[1] + 1) * u[2] : +u[2]),
                f
        }
        ]
    };
    i.Animation = i.extend(iu, {
        tweener: function (n, t) {
            i.isFunction(n) ? (t = n,
                n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; u < f; u++)
                r = n[u],
                    st[r] = st[r] || [],
                    st[r].unshift(t)
        },
        prefilter: function (n, t) {
            t ? wt.unshift(n) : wt.push(n)
        }
    }),
        i.speed = function (n, t, r) {
            var u = n && typeof n == "object" ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
                (u.queue == null || u.queue === !0) && (u.queue = "fx"),
                u.old = u.complete,
                u.complete = function () {
                    i.isFunction(u.old) && u.old.call(this),
                        u.queue && i.dequeue(this, u.queue)
                }
                ,
                u
        }
        ,
        i.fn.extend({
            fadeTo: function (n, t, i, r) {
                return this.filter(ht).css("opacity", 0).show().end().animate({
                    opacity: t
                }, n, i, r)
            },
            animate: function (n, t, r, u) {
                var o = i.isEmptyObject(n)
                    , e = i.speed(t, r, u)
                    , f = function () {
                        var t = iu(this, i.extend({}, n), e);
                        (o || i._data(this, "finish")) && t.stop(!0)
                    };
                return f.finish = f,
                    o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
            },
            stop: function (n, t, r) {
                var u = function (n) {
                    var t = n.stop;
                    delete n.stop,
                        t(r)
                };
                return typeof n != "string" && (r = t,
                    t = n,
                    n = undefined),
                    t && n !== !1 && this.queue(n || "fx", []),
                    this.each(function () {
                        var o = !0
                            , t = n != null && n + "queueHooks"
                            , e = i.timers
                            , f = i._data(this);
                        if (t)
                            f[t] && f[t].stop && u(f[t]);
                        else
                            for (t in f)
                                f[t] && f[t].stop && ao.test(t) && u(f[t]);
                        for (t = e.length; t--;)
                            e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(r),
                                o = !1,
                                e.splice(t, 1));
                        (o || !r) && i.dequeue(this, n)
                    })
            },
            finish: function (n) {
                return n !== !1 && (n = n || "fx"),
                    this.each(function () {
                        var t, f = i._data(this), r = f[n + "queue"], e = f[n + "queueHooks"], u = i.timers, o = r ? r.length : 0;
                        for (f.finish = !0,
                            i.queue(this, n, []),
                            e && e.stop && e.stop.call(this, !0),
                            t = u.length; t--;)
                            u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0),
                                u.splice(t, 1));
                        for (t = 0; t < o; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete f.finish
                    })
            }
        }),
        i.each(["toggle", "show", "hide"], function (n, t) {
            var r = i.fn[t];
            i.fn[t] = function (n, i, u) {
                return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(gt(t, !0), n, i, u)
            }
        }),
        i.each({
            slideDown: gt("show"),
            slideUp: gt("hide"),
            slideToggle: gt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (n, t) {
            i.fn[n] = function (n, i, r) {
                return this.animate(t, n, i, r)
            }
        }),
        i.timers = [],
        i.fx.tick = function () {
            var r, n = i.timers, t = 0;
            for (it = i.now(); t < n.length; t++)
                r = n[t],
                    r() || n[t] !== r || n.splice(t--, 1);
            n.length || i.fx.stop(),
                it = undefined
        }
        ,
        i.fx.timer = function (n) {
            i.timers.push(n),
                n() ? i.fx.start() : i.timers.pop()
        }
        ,
        i.fx.interval = 13,
        i.fx.start = function () {
            pt || (pt = setInterval(i.fx.tick, i.fx.interval))
        }
        ,
        i.fx.stop = function () {
            clearInterval(pt),
                pt = null
        }
        ,
        i.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        i.fn.delay = function (n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n,
                t = t || "fx",
                this.queue(t, function (t, i) {
                    var r = setTimeout(t, n);
                    i.stop = function () {
                        clearTimeout(r)
                    }
                })
        }
        ,
        function () {
            var n, t, f, i, e;
            t = u.createElement("div"),
                t.setAttribute("className", "t"),
                t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                i = t.getElementsByTagName("a")[0],
                f = u.createElement("select"),
                e = f.appendChild(u.createElement("option")),
                n = t.getElementsByTagName("input")[0],
                i.style.cssText = "top:1px",
                r.getSetAttribute = t.className !== "t",
                r.style = /top/.test(i.getAttribute("style")),
                r.hrefNormalized = i.getAttribute("href") === "/a",
                r.checkOn = !!n.value,
                r.optSelected = e.selected,
                r.enctype = !!u.createElement("form").enctype,
                f.disabled = !0,
                r.optDisabled = !e.disabled,
                n = u.createElement("input"),
                n.setAttribute("value", ""),
                r.input = n.getAttribute("value") === "",
                n.value = "t",
                n.setAttribute("type", "radio"),
                r.radioValue = n.value === "t"
        }(),
        ru = /\r/g,
        i.fn.extend({
            val: function (n) {
                var t, r, f, u = this[0];
                return arguments.length ? (f = i.isFunction(n),
                    this.each(function (r) {
                        var u;
                        this.nodeType === 1 && (u = f ? n.call(this, r, i(this).val()) : n,
                            u == null ? u = "" : typeof u == "number" ? u += "" : i.isArray(u) && (u = i.map(u, function (n) {
                                return n == null ? "" : n + ""
                            })),
                            t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()],
                            t && "set" in t && t.set(this, u, "value") !== undefined || (this.value = u))
                    })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()],
                        t && "get" in t && (r = t.get(u, "value")) !== undefined) ? r : (r = u.value,
                            typeof r == "string" ? r.replace(ru, "") : r == null ? "" : r) : void 0
            }
        }),
        i.extend({
            valHooks: {
                option: {
                    get: function (n) {
                        var t = i.find.attr(n, "value");
                        return t != null ? t : i.trim(i.text(n))
                    }
                },
                select: {
                    get: function (n) {
                        for (var o, t, s = n.options, u = n.selectedIndex, f = n.type === "select-one" || u < 0, h = f ? null : [], c = f ? u + 1 : s.length, e = u < 0 ? c : f ? u : 0; e < c; e++)
                            if (t = s[e],
                                (t.selected || e === u) && (r.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                                if (o = i(t).val(),
                                    f)
                                    return o;
                                h.push(o)
                            }
                        return h
                    },
                    set: function (n, t) {
                        for (var f, r, u = n.options, o = i.makeArray(t), e = u.length; e--;)
                            if (r = u[e],
                                i.inArray(i.valHooks.option.get(r), o) >= 0)
                                try {
                                    r.selected = f = !0
                                } catch (s) {
                                    r.scrollHeight
                                }
                            else
                                r.selected = !1;
                        return f || (n.selectedIndex = -1),
                            u
                    }
                }
            }
        }),
        i.each(["radio", "checkbox"], function () {
            i.valHooks[this] = {
                set: function (n, t) {
                    if (i.isArray(t))
                        return n.checked = i.inArray(i(n).val(), t) >= 0
                }
            },
                r.checkOn || (i.valHooks[this].get = function (n) {
                    return n.getAttribute("value") === null ? "on" : n.value
                }
                )
        });
    var tt, fu, a = i.expr.attrHandle, ri = /^(?:checked|selected)$/i, w = r.getSetAttribute, kt = r.input;
    i.fn.extend({
        attr: function (n, t) {
            return k(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function (n) {
            return this.each(function () {
                i.removeAttr(this, n)
            })
        }
    }),
        i.extend({
            attr: function (n, t, r) {
                var u, f, e = n.nodeType;
                if (n && e !== 3 && e !== 8 && e !== 2) {
                    if (typeof n.getAttribute === s)
                        return i.prop(n, t, r);
                    if (e === 1 && i.isXMLDoc(n) || (t = t.toLowerCase(),
                        u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? fu : tt)),
                        r !== undefined)
                        if (r === null)
                            i.removeAttr(n, t);
                        else
                            return u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : (n.setAttribute(t, r + ""),
                                r);
                    else
                        return u && "get" in u && (f = u.get(n, t)) !== null ? f : (f = i.find.attr(n, t),
                            f == null ? undefined : f)
                }
            },
            removeAttr: function (n, t) {
                var r, u, e = 0, f = t && t.match(h);
                if (f && n.nodeType === 1)
                    while (r = f[e++])
                        u = i.propFix[r] || r,
                            i.expr.match.bool.test(r) ? kt && w || !ri.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""),
                            n.removeAttribute(w ? r : u)
            },
            attrHooks: {
                type: {
                    set: function (n, t) {
                        if (!r.radioValue && t === "radio" && i.nodeName(n, "input")) {
                            var u = n.value;
                            return n.setAttribute("type", t),
                                u && (n.value = u),
                                t
                        }
                    }
                }
            }
        }),
        fu = {
            set: function (n, t, r) {
                return t === !1 ? i.removeAttr(n, r) : kt && w || !ri.test(r) ? n.setAttribute(!w && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0,
                    r
            }
        },
        i.each(i.expr.match.bool.source.match(/\w+/g), function (n, t) {
            var r = a[t] || i.find.attr;
            a[t] = kt && w || !ri.test(t) ? function (n, t, i) {
                var u, f;
                return i || (f = a[t],
                    a[t] = u,
                    u = r(n, t, i) != null ? t.toLowerCase() : null,
                    a[t] = f),
                    u
            }
                : function (n, t, r) {
                    if (!r)
                        return n[i.camelCase("default-" + t)] ? t.toLowerCase() : null
                }
        }),
        kt && w || (i.attrHooks.value = {
            set: function (n, t, r) {
                if (i.nodeName(n, "input"))
                    n.defaultValue = t;
                else
                    return tt && tt.set(n, t, r)
            }
        }),
        w || (tt = {
            set: function (n, t, i) {
                var r = n.getAttributeNode(i);
                return r || n.setAttributeNode(r = n.ownerDocument.createAttribute(i)),
                    r.value = t += "",
                    i === "value" || t === n.getAttribute(i) ? t : void 0
            }
        },
            a.id = a.name = a.coords = function (n, t, i) {
                var r;
                if (!i)
                    return (r = n.getAttributeNode(t)) && r.value !== "" ? r.value : null
            }
            ,
            i.valHooks.button = {
                get: function (n, t) {
                    var i = n.getAttributeNode(t);
                    if (i && i.specified)
                        return i.value
                },
                set: tt.set
            },
            i.attrHooks.contenteditable = {
                set: function (n, t, i) {
                    tt.set(n, t === "" ? !1 : t, i)
                }
            },
            i.each(["width", "height"], function (n, t) {
                i.attrHooks[t] = {
                    set: function (n, i) {
                        if (i === "")
                            return n.setAttribute(t, "auto"),
                                i
                    }
                }
            })),
        r.style || (i.attrHooks.style = {
            get: function (n) {
                return n.style.cssText || undefined
            },
            set: function (n, t) {
                return n.style.cssText = t + ""
            }
        }),
        yr = /^(?:input|select|textarea|button|object)$/i,
        hr = /^(?:a|area)$/i,
        i.fn.extend({
            prop: function (n, t) {
                return k(this, i.prop, n, t, arguments.length > 1)
            },
            removeProp: function (n) {
                return n = i.propFix[n] || n,
                    this.each(function () {
                        try {
                            this[n] = undefined,
                                delete this[n]
                        } catch (t) { }
                    })
            }
        }),
        i.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function (n, t, r) {
                var f, u, o, e = n.nodeType;
                if (n && e !== 3 && e !== 8 && e !== 2)
                    return o = e !== 1 || !i.isXMLDoc(n),
                        o && (t = i.propFix[t] || t,
                            u = i.propHooks[t]),
                        r !== undefined ? u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : n[t] = r : u && "get" in u && (f = u.get(n, t)) !== null ? f : n[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (n) {
                        var t = i.find.attr(n, "tabindex");
                        return t ? parseInt(t, 10) : yr.test(n.nodeName) || hr.test(n.nodeName) && n.href ? 0 : -1
                    }
                }
            }
        }),
        r.hrefNormalized || i.each(["href", "src"], function (n, t) {
            i.propHooks[t] = {
                get: function (n) {
                    return n.getAttribute(t, 4)
                }
            }
        }),
        r.optSelected || (i.propHooks.selected = {
            get: function (n) {
                var t = n.parentNode;
                return t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex),
                    null
            }
        }),
        i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            i.propFix[this.toLowerCase()] = this
        }),
        r.enctype || (i.propFix.enctype = "encoding"),
        ni = /[\t\r\n\f]/g,
        i.fn.extend({
            addClass: function (n) {
                var o, t, r, u, s, f, e = 0, c = this.length, l = typeof n == "string" && n;
                if (i.isFunction(n))
                    return this.each(function (t) {
                        i(this).addClass(n.call(this, t, this.className))
                    });
                if (l)
                    for (o = (n || "").match(h) || []; e < c; e++)
                        if (t = this[e],
                            r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(ni, " ") : " "),
                            r) {
                            for (s = 0; u = o[s++];)
                                r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                            f = i.trim(r),
                                t.className !== f && (t.className = f)
                        }
                return this
            },
            removeClass: function (n) {
                var o, t, r, u, s, f, e = 0, c = this.length, l = arguments.length === 0 || typeof n == "string" && n;
                if (i.isFunction(n))
                    return this.each(function (t) {
                        i(this).removeClass(n.call(this, t, this.className))
                    });
                if (l)
                    for (o = (n || "").match(h) || []; e < c; e++)
                        if (t = this[e],
                            r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(ni, " ") : ""),
                            r) {
                            for (s = 0; u = o[s++];)
                                while (r.indexOf(" " + u + " ") >= 0)
                                    r = r.replace(" " + u + " ", " ");
                            f = n ? i.trim(r) : "",
                                t.className !== f && (t.className = f)
                        }
                return this
            },
            toggleClass: function (n, t) {
                var r = typeof n;
                return typeof t == "boolean" && r === "string" ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function (r) {
                    i(this).toggleClass(n.call(this, r, this.className, t), t)
                }) : this.each(function () {
                    if (r === "string")
                        for (var t, f = 0, u = i(this), e = n.match(h) || []; t = e[f++];)
                            u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                    else
                        (r === s || r === "boolean") && (this.className && i._data(this, "__className__", this.className),
                            this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
                })
            },
            hasClass: function (n) {
                for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
                    if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(ni, " ").indexOf(i) >= 0)
                        return !0;
                return !1
            }
        }),
        i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (n, t) {
            i.fn[t] = function (n, i) {
                return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            }
        }),
        i.fn.extend({
            hover: function (n, t) {
                return this.mouseenter(n).mouseleave(t || n)
            },
            bind: function (n, t, i) {
                return this.on(n, null, t, i)
            },
            unbind: function (n, t) {
                return this.off(n, null, t)
            },
            delegate: function (n, t, i, r) {
                return this.on(t, n, i, r)
            },
            undelegate: function (n, t, i) {
                return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
            }
        });
    var oi = i.now()
        , si = /\?/
        , ko = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    i.parseJSON = function (t) {
        if (n.JSON && n.JSON.parse)
            return n.JSON.parse(t + "");
        var f, r = null, u = i.trim(t + "");
        return u && !i.trim(u.replace(ko, function (n, t, i, u) {
            return (f && t && (r = 0),
                r === 0) ? n : (f = i || t,
                    r += !u - !i,
                    "")
        })) ? Function("return " + u)() : i.error("Invalid JSON: " + t)
    }
        ,
        i.parseXML = function (t) {
            var r, u;
            if (!t || typeof t != "string")
                return null;
            try {
                n.DOMParser ? (u = new DOMParser,
                    r = u.parseFromString(t, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
                        r.async = "false",
                        r.loadXML(t))
            } catch (f) {
                r = undefined
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t),
                r
        }
        ;
    var nt, l, go = /#.*$/, gu = /([?&])_=[^&]*/, ye = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, eo = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ae = /^(?:GET|HEAD)$/, ie = /^\/\//, tf = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, su = {}, ci = {}, wr = "*/".concat("*");
    try {
        l = location.href
    } catch (ts) {
        l = u.createElement("a"),
            l.href = "",
            l = l.href
    }
    nt = tf.exec(l.toLowerCase()) || [],
        i.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: l,
                type: "GET",
                isLocal: eo.test(nt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": wr,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": i.parseJSON,
                    "text xml": i.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (n, t) {
                return t ? ai(ai(n, i.ajaxSettings), t) : ai(i.ajaxSettings, n)
            },
            ajaxPrefilter: nu(su),
            ajaxTransport: nu(ci),
            ajax: function (n, t) {
                function p(n, t, h, c) {
                    var a, it, nt, y, p, l = t;
                    e !== 2 && (e = 2,
                        g && clearTimeout(g),
                        s = undefined,
                        b = c || "",
                        u.readyState = n > 0 ? 4 : 0,
                        a = n >= 200 && n < 300 || n === 304,
                        h && (y = ne(r, u, h)),
                        y = te(r, y, u, a),
                        a ? (r.ifModified && (p = u.getResponseHeader("Last-Modified"),
                            p && (i.lastModified[f] = p),
                            p = u.getResponseHeader("etag"),
                            p && (i.etag[f] = p)),
                            n === 204 || r.type === "HEAD" ? l = "nocontent" : n === 304 ? l = "notmodified" : (l = y.state,
                                it = y.data,
                                nt = y.error,
                                a = !nt)) : (nt = l,
                                    (n || !l) && (l = "error",
                                        n < 0 && (n = 0))),
                        u.status = n,
                        u.statusText = (t || l) + "",
                        a ? d.resolveWith(o, [it, l, u]) : d.rejectWith(o, [u, l, nt]),
                        u.statusCode(w),
                        w = undefined,
                        v && k.trigger(a ? "ajaxSuccess" : "ajaxError", [u, r, a ? it : nt]),
                        tt.fireWith(o, [u, l]),
                        v && (k.trigger("ajaxComplete", [u, r]),
                            --i.active || i.event.trigger("ajaxStop")))
                }
                typeof n == "object" && (t = n,
                    n = undefined),
                    t = t || {};
                var a, c, f, b, g, v, s, y, r = i.ajaxSetup({}, t), o = r.context || r, k = r.context && (o.nodeType || o.jquery) ? i(o) : i.event, d = i.Deferred(), tt = i.Callbacks("once memory"), w = r.statusCode || {}, it = {}, rt = {}, e = 0, ut = "canceled", u = {
                    readyState: 0,
                    getResponseHeader: function (n) {
                        var t;
                        if (e === 2) {
                            if (!y)
                                for (y = {}; t = ye.exec(b);)
                                    y[t[1].toLowerCase()] = t[2];
                            t = y[n.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return e === 2 ? b : null
                    },
                    setRequestHeader: function (n, t) {
                        var i = n.toLowerCase();
                        return e || (n = rt[i] = rt[i] || n,
                            it[n] = t),
                            this
                    },
                    overrideMimeType: function (n) {
                        return e || (r.mimeType = n),
                            this
                    },
                    statusCode: function (n) {
                        var t;
                        if (n)
                            if (e < 2)
                                for (t in n)
                                    w[t] = [w[t], n[t]];
                            else
                                u.always(n[u.status]);
                        return this
                    },
                    abort: function (n) {
                        var t = n || ut;
                        return s && s.abort(t),
                            p(0, t),
                            this
                    }
                };
                if (d.promise(u).complete = tt.add,
                    u.success = u.done,
                    u.error = u.fail,
                    r.url = ((n || r.url || l) + "").replace(go, "").replace(ie, nt[1] + "//"),
                    r.type = t.method || t.type || r.method || r.type,
                    r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(h) || [""],
                    r.crossDomain == null && (a = tf.exec(r.url.toLowerCase()),
                        r.crossDomain = !!(a && (a[1] !== nt[1] || a[2] !== nt[2] || (a[3] || (a[1] === "http:" ? "80" : "443")) !== (nt[3] || (nt[1] === "http:" ? "80" : "443"))))),
                    r.data && r.processData && typeof r.data != "string" && (r.data = i.param(r.data, r.traditional)),
                    tu(su, r, t, u),
                    e === 2)
                    return u;
                v = i.event && r.global,
                    v && i.active++ == 0 && i.event.trigger("ajaxStart"),
                    r.type = r.type.toUpperCase(),
                    r.hasContent = !ae.test(r.type),
                    f = r.url,
                    r.hasContent || (r.data && (f = r.url += (si.test(f) ? "&" : "?") + r.data,
                        delete r.data),
                        r.cache === !1 && (r.url = gu.test(f) ? f.replace(gu, "$1_=" + oi++) : f + (si.test(f) ? "&" : "?") + "_=" + oi++)),
                    r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]),
                        i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f])),
                    (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType),
                    u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + (r.dataTypes[0] !== "*" ? ", " + wr + "; q=0.01" : "") : r.accepts["*"]);
                for (c in r.headers)
                    u.setRequestHeader(c, r.headers[c]);
                if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || e === 2))
                    return u.abort();
                ut = "abort";
                for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    u[c](r[c]);
                if (s = tu(ci, r, t, u),
                    s) {
                    u.readyState = 1,
                        v && k.trigger("ajaxSend", [u, r]),
                        r.async && r.timeout > 0 && (g = setTimeout(function () {
                            u.abort("timeout")
                        }, r.timeout));
                    try {
                        e = 1,
                            s.send(it, p)
                    } catch (ft) {
                        if (e < 2)
                            p(-1, ft);
                        else
                            throw ft;
                    }
                } else
                    p(-1, "No Transport");
                return u
            },
            getJSON: function (n, t, r) {
                return i.get(n, t, r, "json")
            },
            getScript: function (n, t) {
                return i.get(n, undefined, t, "script")
            }
        }),
        i.each(["get", "post"], function (n, t) {
            i[t] = function (n, r, u, f) {
                return i.isFunction(r) && (f = f || u,
                    u = r,
                    r = undefined),
                    i.ajax({
                        url: n,
                        type: t,
                        dataType: f,
                        data: r,
                        success: u
                    })
            }
        }),
        i._evalUrl = function (n) {
            return i.ajax({
                url: n,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        i.fn.extend({
            wrapAll: function (n) {
                if (i.isFunction(n))
                    return this.each(function (t) {
                        i(this).wrapAll(n.call(this, t))
                    });
                if (this[0]) {
                    var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                        t.map(function () {
                            for (var n = this; n.firstChild && n.firstChild.nodeType === 1;)
                                n = n.firstChild;
                            return n
                        }).append(this)
                }
                return this
            },
            wrapInner: function (n) {
                return i.isFunction(n) ? this.each(function (t) {
                    i(this).wrapInner(n.call(this, t))
                }) : this.each(function () {
                    var t = i(this)
                        , r = t.contents();
                    r.length ? r.wrapAll(n) : t.append(n)
                })
            },
            wrap: function (n) {
                var t = i.isFunction(n);
                return this.each(function (r) {
                    i(this).wrapAll(t ? n.call(this, r) : n)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        i.expr.filters.hidden = function (n) {
            return n.offsetWidth <= 0 && n.offsetHeight <= 0 || !r.reliableHiddenOffsets() && (n.style && n.style.display || i.css(n, "display")) === "none"
        }
        ,
        i.expr.filters.visible = function (n) {
            return !i.expr.filters.hidden(n)
        }
        ;
    var gf = /%20/g
        , re = /\[\]$/
        , vr = /\r?\n/g
        , ue = /^(?:submit|button|image|reset|file)$/i
        , fe = /^(?:input|select|textarea|keygen)/i;
    i.param = function (n, t) {
        var r, u = [], f = function (n, t) {
            t = i.isFunction(t) ? t() : t == null ? "" : t,
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        };
        if (t === undefined && (t = i.ajaxSettings && i.ajaxSettings.traditional),
            i.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function () {
                f(this.name, this.value)
            });
        else
            for (r in n)
                vi(r, n[r], t, f);
        return u.join("&").replace(gf, "+")
    }
        ,
        i.fn.extend({
            serialize: function () {
                return i.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var n = i.prop(this, "elements");
                    return n ? i.makeArray(n) : this
                }).filter(function () {
                    var n = this.type;
                    return this.name && !i(this).is(":disabled") && fe.test(this.nodeName) && !ue.test(n) && (this.checked || !gi.test(n))
                }).map(function (n, t) {
                    var r = i(this).val();
                    return r == null ? null : i.isArray(r) ? i.map(r, function (n) {
                        return {
                            name: t.name,
                            value: n.replace(vr, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: r.replace(vr, "\r\n")
                    }
                }).get()
            }
        }),
        i.ajaxSettings.xhr = n.ActiveXObject !== undefined ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && bf() || he()
        }
            : bf;
    var oe = 0
        , ct = {}
        , ot = i.ajaxSettings.xhr();
    return n.attachEvent && n.attachEvent("onunload", function () {
        for (var n in ct)
            ct[n](undefined, !0)
    }),
        r.cors = !!ot && "withCredentials" in ot,
        ot = r.ajax = !!ot,
        ot && i.ajaxTransport(function (n) {
            if (!n.crossDomain || r.cors) {
                var t;
                return {
                    send: function (r, u) {
                        var e, f = n.xhr(), o = ++oe;
                        if (f.open(n.type, n.url, n.async, n.username, n.password),
                            n.xhrFields)
                            for (e in n.xhrFields)
                                f[e] = n.xhrFields[e];
                        n.mimeType && f.overrideMimeType && f.overrideMimeType(n.mimeType),
                            n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        for (e in r)
                            r[e] !== undefined && f.setRequestHeader(e, r[e] + "");
                        f.send(n.hasContent && n.data || null),
                            t = function (r, e) {
                                var s, c, h;
                                if (t && (e || f.readyState === 4))
                                    if (delete ct[o],
                                        t = undefined,
                                        f.onreadystatechange = i.noop,
                                        e)
                                        f.readyState !== 4 && f.abort();
                                    else {
                                        h = {},
                                            s = f.status,
                                            typeof f.responseText == "string" && (h.text = f.responseText);
                                        try {
                                            c = f.statusText
                                        } catch (l) {
                                            c = ""
                                        }
                                        s || !n.isLocal || n.crossDomain ? s === 1223 && (s = 204) : s = h.text ? 200 : 404
                                    }
                                h && u(s, c, h, f.getAllResponseHeaders())
                            }
                            ,
                            n.async ? f.readyState === 4 ? setTimeout(t) : f.onreadystatechange = ct[o] = t : t()
                    },
                    abort: function () {
                        t && t(undefined, !0)
                    }
                }
            }
        }),
        i.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (n) {
                    return i.globalEval(n),
                        n
                }
            }
        }),
        i.ajaxPrefilter("script", function (n) {
            n.cache === undefined && (n.cache = !1),
                n.crossDomain && (n.type = "GET",
                    n.global = !1)
        }),
        i.ajaxTransport("script", function (n) {
            if (n.crossDomain) {
                var t, r = u.head || i("head")[0] || u.documentElement;
                return {
                    send: function (i, f) {
                        t = u.createElement("script"),
                            t.async = !0,
                            n.scriptCharset && (t.charset = n.scriptCharset),
                            t.src = n.url,
                            t.onload = t.onreadystatechange = function (n, i) {
                                (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                                    t.parentNode && t.parentNode.removeChild(t),
                                    t = null,
                                    i || f(200, "success"))
                            }
                            ,
                            r.insertBefore(t, r.firstChild)
                    },
                    abort: function () {
                        if (t)
                            t.onload(undefined, !0)
                    }
                }
            }
        }),
        fi = [],
        bt = /(=)\?(?=&|$)|\?\?/,
        i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var n = fi.pop() || i.expando + "_" + oi++;
                return this[n] = !0,
                    n
            }
        }),
        i.ajaxPrefilter("json jsonp", function (t, r, u) {
            var f, o, e, s = t.jsonp !== !1 && (bt.test(t.url) ? "url" : typeof t.data == "string" && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && bt.test(t.data) && "data");
            if (s || t.dataTypes[0] === "jsonp")
                return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                    s ? t[s] = t[s].replace(bt, "$1" + f) : t.jsonp !== !1 && (t.url += (si.test(t.url) ? "&" : "?") + t.jsonp + "=" + f),
                    t.converters["script json"] = function () {
                        return e || i.error(f + " was not called"),
                            e[0]
                    }
                    ,
                    t.dataTypes[0] = "json",
                    o = n[f],
                    n[f] = function () {
                        e = arguments
                    }
                    ,
                    u.always(function () {
                        n[f] = o,
                            t[f] && (t.jsonpCallback = r.jsonpCallback,
                                fi.push(f)),
                            e && i.isFunction(o) && o(e[0]),
                            e = o = undefined
                    }),
                    "script"
        }),
        i.parseHTML = function (n, t, r) {
            if (!n || typeof n != "string")
                return null;
            typeof t == "boolean" && (r = t,
                t = !1),
                t = t || u;
            var f = ou.exec(n)
                , e = !r && [];
            return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e),
                e && e.length && i(e).remove(),
                i.merge([], f.childNodes))
        }
        ,
        ei = i.fn.load,
        i.fn.load = function (n, t, r) {
            if (typeof n != "string" && ei)
                return ei.apply(this, arguments);
            var u, o, s, f = this, e = n.indexOf(" ");
            return e >= 0 && (u = i.trim(n.slice(e, n.length)),
                n = n.slice(0, e)),
                i.isFunction(t) ? (r = t,
                    t = undefined) : t && typeof t == "object" && (s = "POST"),
                f.length > 0 && i.ajax({
                    url: n,
                    type: s,
                    dataType: "html",
                    data: t
                }).done(function (n) {
                    o = arguments,
                        f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
                }).complete(r && function (n, t) {
                    f.each(r, o || [n.responseText, t, n])
                }
                ),
                this
        }
        ,
        i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (n, t) {
            i.fn[t] = function (n) {
                return this.on(t, n)
            }
        }),
        i.expr.filters.animated = function (n) {
            return i.grep(i.timers, function (t) {
                return n === t.elem
            }).length
        }
        ,
        ui = n.document.documentElement,
        i.offset = {
            setOffset: function (n, t, r) {
                var e, o, s, h, u, c, v, l = i.css(n, "position"), a = i(n), f = {};
                l === "static" && (n.style.position = "relative"),
                    u = a.offset(),
                    s = i.css(n, "top"),
                    c = i.css(n, "left"),
                    v = (l === "absolute" || l === "fixed") && i.inArray("auto", [s, c]) > -1,
                    v ? (e = a.position(),
                        h = e.top,
                        o = e.left) : (h = parseFloat(s) || 0,
                            o = parseFloat(c) || 0),
                    i.isFunction(t) && (t = t.call(n, r, u)),
                    t.top != null && (f.top = t.top - u.top + h),
                    t.left != null && (f.left = t.left - u.left + o),
                    "using" in t ? t.using.call(n, f) : a.css(f)
            }
        },
        i.fn.extend({
            offset: function (n) {
                if (arguments.length)
                    return n === undefined ? this : this.each(function (t) {
                        i.offset.setOffset(this, n, t)
                    });
                var t, f, u = {
                    top: 0,
                    left: 0
                }, r = this[0], e = r && r.ownerDocument;
                if (e)
                    return (t = e.documentElement,
                        !i.contains(t, r)) ? u : (typeof r.getBoundingClientRect !== s && (u = r.getBoundingClientRect()),
                            f = wu(e),
                        {
                            top: u.top + (f.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                            left: u.left + (f.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                        })
            },
            position: function () {
                if (this[0]) {
                    var n, r, t = {
                        top: 0,
                        left: 0
                    }, u = this[0];
                    return i.css(u, "position") === "fixed" ? r = u.getBoundingClientRect() : (n = this.offsetParent(),
                        r = this.offset(),
                        i.nodeName(n[0], "html") || (t = n.offset()),
                        t.top += i.css(n[0], "borderTopWidth", !0),
                        t.left += i.css(n[0], "borderLeftWidth", !0)),
                    {
                        top: r.top - t.top - i.css(u, "marginTop", !0),
                        left: r.left - t.left - i.css(u, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var n = this.offsetParent || ui; n && !i.nodeName(n, "html") && i.css(n, "position") === "static";)
                        n = n.offsetParent;
                    return n || ui
                })
            }
        }),
        i.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (n, t) {
            var r = /Y/.test(t);
            i.fn[n] = function (u) {
                return k(this, function (n, u, f) {
                    var e = wu(n);
                    if (f === undefined)
                        return e ? t in e ? e[t] : e.document.documentElement[u] : n[u];
                    e ? e.scrollTo(r ? i(e).scrollLeft() : f, r ? f : i(e).scrollTop()) : n[u] = f
                }, n, u, arguments.length, null)
            }
        }),
        i.each(["top", "left"], function (n, t) {
            i.cssHooks[t] = hu(r.pixelPosition, function (n, r) {
                if (r)
                    return r = p(n, t),
                        yt.test(r) ? i(n).position()[t] + "px" : r
            })
        }),
        i.each({
            Height: "height",
            Width: "width"
        }, function (n, t) {
            i.each({
                padding: "inner" + n,
                content: t,
                "": "outer" + n
            }, function (r, u) {
                i.fn[u] = function (u, f) {
                    var e = arguments.length && (r || typeof u != "boolean")
                        , o = r || (u === !0 || f === !0 ? "margin" : "border");
                    return k(this, function (t, r, u) {
                        var f;
                        return i.isWindow(t) ? t.document.documentElement["client" + n] : t.nodeType === 9 ? (f = t.documentElement,
                            Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : u === undefined ? i.css(t, r, o) : i.style(t, r, u, o)
                    }, t, e ? u : undefined, e, null)
                }
            })
        }),
        i.fn.size = function () {
            return this.length
        }
        ,
        i.fn.andSelf = i.fn.addBack,
        typeof define == "function" && define.amd && define("jquery", [], function () {
            return i
        }),
        cu = n.jQuery,
        lf = n.$,
        i.noConflict = function (t) {
            return n.$ === i && (n.$ = lf),
                t && n.jQuery === i && (n.jQuery = cu),
                i
        }
        ,
        typeof t === s && (n.jQuery = n.$ = i),
        i
});
var CryptoJS = CryptoJS || function (n, t) {
    var u = {}, f = u.lib = {}, o = function () { }, i = f.Base = {
        extend: function (n) {
            o.prototype = this;
            var t = new o;
            return n && t.mixIn(n),
                t.hasOwnProperty("init") || (t.init = function () {
                    t.$super.init.apply(this, arguments)
                }
                ),
                t.init.prototype = t,
                t.$super = this,
                t
        },
        create: function () {
            var n = this.extend();
            return n.init.apply(n, arguments),
                n
        },
        init: function () { },
        mixIn: function (n) {
            for (var t in n)
                n.hasOwnProperty(t) && (this[t] = n[t]);
            n.hasOwnProperty("toString") && (this.toString = n.toString)
        },
        clone: function () {
            return this.init.prototype.extend(this)
        }
    }, r = f.WordArray = i.extend({
        init: function (n, i) {
            n = this.words = n || [],
                this.sigBytes = i != t ? i : 4 * n.length
        },
        toString: function (n) {
            return (n || l).stringify(this)
        },
        concat: function (n) {
            var i = this.words, r = n.words, u = this.sigBytes, t;
            if (n = n.sigBytes,
                this.clamp(),
                u % 4)
                for (t = 0; t < n; t++)
                    i[u + t >>> 2] |= (r[t >>> 2] >>> 24 - 8 * (t % 4) & 255) << 24 - 8 * ((u + t) % 4);
            else if (65535 < r.length)
                for (t = 0; t < n; t += 4)
                    i[u + t >>> 2] = r[t >>> 2];
            else
                i.push.apply(i, r);
            return this.sigBytes += n,
                this
        },
        clamp: function () {
            var i = this.words
                , t = this.sigBytes;
            i[t >>> 2] &= 4294967295 << 32 - 8 * (t % 4),
                i.length = n.ceil(t / 4)
        },
        clone: function () {
            var n = i.clone.call(this);
            return n.words = this.words.slice(0),
                n
        },
        random: function (t) {
            for (var i = [], u = 0; u < t; u += 4)
                i.push(4294967296 * n.random() | 0);
            return new r.init(i, t)
        }
    }), e = u.enc = {}, l = e.Hex = {
        stringify: function (n) {
            var u = n.words, i, t, r;
            for (n = n.sigBytes,
                i = [],
                t = 0; t < n; t++)
                r = u[t >>> 2] >>> 24 - 8 * (t % 4) & 255,
                    i.push((r >>> 4).toString(16)),
                    i.push((r & 15).toString(16));
            return i.join("")
        },
        parse: function (n) {
            for (var i = n.length, u = [], t = 0; t < i; t += 2)
                u[t >>> 3] |= parseInt(n.substr(t, 2), 16) << 24 - 4 * (t % 8);
            return new r.init(u, i / 2)
        }
    }, s = e.Latin1 = {
        stringify: function (n) {
            var r = n.words, i, t;
            for (n = n.sigBytes,
                i = [],
                t = 0; t < n; t++)
                i.push(String.fromCharCode(r[t >>> 2] >>> 24 - 8 * (t % 4) & 255));
            return i.join("")
        },
        parse: function (n) {
            for (var i = n.length, u = [], t = 0; t < i; t++)
                u[t >>> 2] |= (n.charCodeAt(t) & 255) << 24 - 8 * (t % 4);
            return new r.init(u, i)
        }
    }, a = e.Utf8 = {
        stringify: function (n) {
            try {
                return decodeURIComponent(escape(s.stringify(n)))
            } catch (t) {
                throw Error("Malformed UTF-8 data");
            }
        },
        parse: function (n) {
            return s.parse(unescape(encodeURIComponent(n)))
        }
    }, h = f.BufferedBlockAlgorithm = i.extend({
        reset: function () {
            this._data = new r.init,
                this._nDataBytes = 0
        },
        _append: function (n) {
            "string" == typeof n && (n = a.parse(n)),
                this._data.concat(n),
                this._nDataBytes += n.sigBytes
        },
        _process: function (t) {
            var f = this._data, s = f.words, u = f.sigBytes, e = this.blockSize, o = u / (4 * e), o = t ? n.ceil(o) : n.max((o | 0) - this._minBufferSize, 0), i;
            if (t = o * e,
                u = n.min(4 * t, u),
                t) {
                for (i = 0; i < t; i += e)
                    this._doProcessBlock(s, i);
                i = s.splice(0, t),
                    f.sigBytes -= u
            }
            return new r.init(i, u)
        },
        clone: function () {
            var n = i.clone.call(this);
            return n._data = this._data.clone(),
                n
        },
        _minBufferSize: 0
    }), c;
    return f.Hasher = h.extend({
        cfg: i.extend(),
        init: function (n) {
            this.cfg = this.cfg.extend(n),
                this.reset()
        },
        reset: function () {
            h.reset.call(this),
                this._doReset()
        },
        update: function (n) {
            return this._append(n),
                this._process(),
                this
        },
        finalize: function (n) {
            return n && this._append(n),
                this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function (n) {
            return function (t, i) {
                return new n.init(i).finalize(t)
            }
        },
        _createHmacHelper: function (n) {
            return function (t, i) {
                return new c.HMAC.init(n, i).finalize(t)
            }
        }
    }),
        c = u.algo = {},
        u
}(Math);
(function () {
    var n = CryptoJS
        , t = n.lib.WordArray;
    n.enc.Base64 = {
        stringify: function (n) {
            var i = n.words, u = n.sigBytes, f = this._map, t, e, r;
            for (n.clamp(),
                n = [],
                t = 0; t < u; t += 3)
                for (e = (i[t >>> 2] >>> 24 - 8 * (t % 4) & 255) << 16 | (i[t + 1 >>> 2] >>> 24 - 8 * ((t + 1) % 4) & 255) << 8 | i[t + 2 >>> 2] >>> 24 - 8 * ((t + 2) % 4) & 255,
                    r = 0; 4 > r && t + .75 * r < u; r++)
                    n.push(f.charAt(e >>> 6 * (3 - r) & 63));
            if (i = f.charAt(64))
                for (; n.length % 4;)
                    n.push(i);
            return n.join("")
        },
        parse: function (n) {
            var e = n.length, f = this._map, i = f.charAt(64), o, s;
            i && (i = n.indexOf(i),
                -1 != i && (e = i));
            for (var i = [], u = 0, r = 0; r < e; r++)
                r % 4 && (o = f.indexOf(n.charAt(r - 1)) << 2 * (r % 4),
                    s = f.indexOf(n.charAt(r)) >>> 6 - 2 * (r % 4),
                    i[u >>> 2] |= (o | s) << 24 - 8 * (u % 4),
                    u++);
            return t.create(i, u)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
}
)(),
    function (n) {
        function i(n, t, i, r, u, f, e) {
            return n = n + (t & i | ~t & r) + u + e,
                (n << f | n >>> 32 - f) + t
        }
        function r(n, t, i, r, u, f, e) {
            return n = n + (t & r | i & ~r) + u + e,
                (n << f | n >>> 32 - f) + t
        }
        function u(n, t, i, r, u, f, e) {
            return n = n + (t ^ i ^ r) + u + e,
                (n << f | n >>> 32 - f) + t
        }
        function f(n, t, i, r, u, f, e) {
            return n = n + (i ^ (t | ~r)) + u + e,
                (n << f | n >>> 32 - f) + t
        }
        for (var o = CryptoJS, e = o.lib, c = e.WordArray, s = e.Hasher, e = o.algo, t = [], h = 0; 64 > h; h++)
            t[h] = 4294967296 * n.abs(n.sin(h + 1)) | 0;
        e = e.MD5 = s.extend({
            _doReset: function () {
                this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878])
            },
            _doProcessBlock: function (n, e) {
                for (var v, a, l = 0; 16 > l; l++)
                    v = e + l,
                        a = n[v],
                        n[v] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
                var l = this._hash.words
                    , v = n[e + 0]
                    , a = n[e + 1]
                    , ft = n[e + 2]
                    , y = n[e + 3]
                    , ut = n[e + 4]
                    , rt = n[e + 5]
                    , it = n[e + 6]
                    , tt = n[e + 7]
                    , et = n[e + 8]
                    , nt = n[e + 9]
                    , g = n[e + 10]
                    , d = n[e + 11]
                    , k = n[e + 12]
                    , b = n[e + 13]
                    , w = n[e + 14]
                    , p = n[e + 15]
                    , s = l[0]
                    , o = l[1]
                    , h = l[2]
                    , c = l[3]
                    , s = i(s, o, h, c, v, 7, t[0])
                    , c = i(c, s, o, h, a, 12, t[1])
                    , h = i(h, c, s, o, ft, 17, t[2])
                    , o = i(o, h, c, s, y, 22, t[3])
                    , s = i(s, o, h, c, ut, 7, t[4])
                    , c = i(c, s, o, h, rt, 12, t[5])
                    , h = i(h, c, s, o, it, 17, t[6])
                    , o = i(o, h, c, s, tt, 22, t[7])
                    , s = i(s, o, h, c, et, 7, t[8])
                    , c = i(c, s, o, h, nt, 12, t[9])
                    , h = i(h, c, s, o, g, 17, t[10])
                    , o = i(o, h, c, s, d, 22, t[11])
                    , s = i(s, o, h, c, k, 7, t[12])
                    , c = i(c, s, o, h, b, 12, t[13])
                    , h = i(h, c, s, o, w, 17, t[14])
                    , o = i(o, h, c, s, p, 22, t[15])
                    , s = r(s, o, h, c, a, 5, t[16])
                    , c = r(c, s, o, h, it, 9, t[17])
                    , h = r(h, c, s, o, d, 14, t[18])
                    , o = r(o, h, c, s, v, 20, t[19])
                    , s = r(s, o, h, c, rt, 5, t[20])
                    , c = r(c, s, o, h, g, 9, t[21])
                    , h = r(h, c, s, o, p, 14, t[22])
                    , o = r(o, h, c, s, ut, 20, t[23])
                    , s = r(s, o, h, c, nt, 5, t[24])
                    , c = r(c, s, o, h, w, 9, t[25])
                    , h = r(h, c, s, o, y, 14, t[26])
                    , o = r(o, h, c, s, et, 20, t[27])
                    , s = r(s, o, h, c, b, 5, t[28])
                    , c = r(c, s, o, h, ft, 9, t[29])
                    , h = r(h, c, s, o, tt, 14, t[30])
                    , o = r(o, h, c, s, k, 20, t[31])
                    , s = u(s, o, h, c, rt, 4, t[32])
                    , c = u(c, s, o, h, et, 11, t[33])
                    , h = u(h, c, s, o, d, 16, t[34])
                    , o = u(o, h, c, s, w, 23, t[35])
                    , s = u(s, o, h, c, a, 4, t[36])
                    , c = u(c, s, o, h, ut, 11, t[37])
                    , h = u(h, c, s, o, tt, 16, t[38])
                    , o = u(o, h, c, s, g, 23, t[39])
                    , s = u(s, o, h, c, b, 4, t[40])
                    , c = u(c, s, o, h, v, 11, t[41])
                    , h = u(h, c, s, o, y, 16, t[42])
                    , o = u(o, h, c, s, it, 23, t[43])
                    , s = u(s, o, h, c, nt, 4, t[44])
                    , c = u(c, s, o, h, k, 11, t[45])
                    , h = u(h, c, s, o, p, 16, t[46])
                    , o = u(o, h, c, s, ft, 23, t[47])
                    , s = f(s, o, h, c, v, 6, t[48])
                    , c = f(c, s, o, h, tt, 10, t[49])
                    , h = f(h, c, s, o, w, 15, t[50])
                    , o = f(o, h, c, s, rt, 21, t[51])
                    , s = f(s, o, h, c, k, 6, t[52])
                    , c = f(c, s, o, h, y, 10, t[53])
                    , h = f(h, c, s, o, g, 15, t[54])
                    , o = f(o, h, c, s, a, 21, t[55])
                    , s = f(s, o, h, c, et, 6, t[56])
                    , c = f(c, s, o, h, p, 10, t[57])
                    , h = f(h, c, s, o, it, 15, t[58])
                    , o = f(o, h, c, s, b, 21, t[59])
                    , s = f(s, o, h, c, ut, 6, t[60])
                    , c = f(c, s, o, h, d, 10, t[61])
                    , h = f(h, c, s, o, ft, 15, t[62])
                    , o = f(o, h, c, s, nt, 21, t[63]);
                l[0] = l[0] + s | 0,
                    l[1] = l[1] + o | 0,
                    l[2] = l[2] + h | 0,
                    l[3] = l[3] + c | 0
            },
            _doFinalize: function () {
                var u = this._data, r = u.words, t = 8 * this._nDataBytes, i = 8 * u.sigBytes, f;
                for (r[i >>> 5] |= 128 << 24 - i % 32,
                    f = n.floor(t / 4294967296),
                    r[(i + 64 >>> 9 << 4) + 15] = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360,
                    r[(i + 64 >>> 9 << 4) + 14] = (t << 8 | t >>> 24) & 16711935 | (t << 24 | t >>> 8) & 4278255360,
                    u.sigBytes = 4 * (r.length + 1),
                    this._process(),
                    u = this._hash,
                    r = u.words,
                    t = 0; 4 > t; t++)
                    i = r[t],
                        r[t] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360;
                return u
            },
            clone: function () {
                var n = s.clone.call(this);
                return n._hash = this._hash.clone(),
                    n
            }
        }),
            o.MD5 = s._createHelper(e),
            o.HmacMD5 = s._createHmacHelper(e)
    }(Math),
    function () {
        var t = CryptoJS
            , n = t.lib
            , i = n.Base
            , r = n.WordArray
            , n = t.algo
            , u = n.EvpKDF = i.extend({
                cfg: i.extend({
                    keySize: 4,
                    hasher: n.MD5,
                    iterations: 1
                }),
                init: function (n) {
                    this.cfg = this.cfg.extend(n)
                },
                compute: function (n, t) {
                    for (var i, o, f = this.cfg, u = f.hasher.create(), e = r.create(), h = e.words, s = f.keySize, f = f.iterations; h.length < s;) {
                        for (i && u.update(i),
                            i = u.update(n).finalize(t),
                            u.reset(),
                            o = 1; o < f; o++)
                            i = u.finalize(i),
                                u.reset();
                        e.concat(i)
                    }
                    return e.sigBytes = 4 * s,
                        e
                }
            });
        t.EvpKDF = function (n, t, i) {
            return u.create(i).compute(n, t)
        }
    }(),
    CryptoJS.lib.Cipher || function (n) {
        var i = CryptoJS
            , t = i.lib
            , f = t.Base
            , e = t.WordArray
            , c = t.BufferedBlockAlgorithm
            , l = i.enc.Base64
            , y = i.algo.EvpKDF
            , o = t.Cipher = c.extend({
                cfg: f.extend(),
                createEncryptor: function (n, t) {
                    return this.create(this._ENC_XFORM_MODE, n, t)
                },
                createDecryptor: function (n, t) {
                    return this.create(this._DEC_XFORM_MODE, n, t)
                },
                init: function (n, t, i) {
                    this.cfg = this.cfg.extend(i),
                        this._xformMode = n,
                        this._key = t,
                        this.reset()
                },
                reset: function () {
                    c.reset.call(this),
                        this._doReset()
                },
                process: function (n) {
                    return this._append(n),
                        this._process()
                },
                finalize: function (n) {
                    return n && this._append(n),
                        this._doFinalize()
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function (n) {
                    return {
                        encrypt: function (t, i, r) {
                            return ("string" == typeof i ? v : u).encrypt(n, t, i, r)
                        },
                        decrypt: function (t, i, r) {
                            return ("string" == typeof i ? v : u).decrypt(n, t, i, r)
                        }
                    }
                }
            });
        t.StreamCipher = o.extend({
            _doFinalize: function () {
                return this._process(!0)
            },
            blockSize: 1
        });
        var s = i.mode = {}
            , a = function (t, i, r) {
                var f = this._iv, u;
                for (f ? this._iv = n : f = this._prevBlock,
                    u = 0; u < r; u++)
                    t[i + u] ^= f[u]
            }
            , r = (t.BlockCipherMode = f.extend({
                createEncryptor: function (n, t) {
                    return this.Encryptor.create(n, t)
                },
                createDecryptor: function (n, t) {
                    return this.Decryptor.create(n, t)
                },
                init: function (n, t) {
                    this._cipher = n,
                        this._iv = t
                }
            })).extend();
        r.Encryptor = r.extend({
            processBlock: function (n, t) {
                var i = this._cipher
                    , r = i.blockSize;
                a.call(this, n, t, r),
                    i.encryptBlock(n, t),
                    this._prevBlock = n.slice(t, t + r)
            }
        }),
            r.Decryptor = r.extend({
                processBlock: function (n, t) {
                    var i = this._cipher
                        , r = i.blockSize
                        , u = n.slice(t, t + r);
                    i.decryptBlock(n, t),
                        a.call(this, n, t, r),
                        this._prevBlock = u
                }
            }),
            s = s.CBC = r,
            r = (i.pad = {}).Pkcs7 = {
                pad: function (n, t) {
                    for (var i = 4 * t, i = i - n.sigBytes % i, f = i << 24 | i << 16 | i << 8 | i, r = [], u = 0; u < i; u += 4)
                        r.push(f);
                    i = e.create(r, i),
                        n.concat(i)
                },
                unpad: function (n) {
                    n.sigBytes -= n.words[n.sigBytes - 1 >>> 2] & 255
                }
            },
            t.BlockCipher = o.extend({
                cfg: o.cfg.extend({
                    mode: s,
                    padding: r
                }),
                reset: function () {
                    var t;
                    o.reset.call(this);
                    var n = this.cfg
                        , i = n.iv
                        , n = n.mode;
                    this._xformMode == this._ENC_XFORM_MODE ? t = n.createEncryptor : (t = n.createDecryptor,
                        this._minBufferSize = 1),
                        this._mode = t.call(n, this, i && i.words)
                },
                _doProcessBlock: function (n, t) {
                    this._mode.processBlock(n, t)
                },
                _doFinalize: function () {
                    var t = this.cfg.padding, n;
                    return this._xformMode == this._ENC_XFORM_MODE ? (t.pad(this._data, this.blockSize),
                        n = this._process(!0)) : (n = this._process(!0),
                            t.unpad(n)),
                        n
                },
                blockSize: 4
            });
        var h = t.CipherParams = f.extend({
            init: function (n) {
                this.mixIn(n)
            },
            toString: function (n) {
                return (n || this.formatter).stringify(this)
            }
        })
            , s = (i.format = {}).OpenSSL = {
                stringify: function (n) {
                    var t = n.ciphertext;
                    return n = n.salt,
                        (n ? e.create([1398893684, 1701076831]).concat(n).concat(t) : t).toString(l)
                },
                parse: function (n) {
                    var t, i;
                    return n = l.parse(n),
                        t = n.words,
                        1398893684 == t[0] && 1701076831 == t[1] && (i = e.create(t.slice(2, 4)),
                            t.splice(0, 4),
                            n.sigBytes -= 16),
                        h.create({
                            ciphertext: n,
                            salt: i
                        })
                }
            }
            , u = t.SerializableCipher = f.extend({
                cfg: f.extend({
                    format: s
                }),
                encrypt: function (n, t, i, r) {
                    r = this.cfg.extend(r);
                    var u = n.createEncryptor(i, r);
                    return t = u.finalize(t),
                        u = u.cfg,
                        h.create({
                            ciphertext: t,
                            key: i,
                            iv: u.iv,
                            algorithm: n,
                            mode: u.mode,
                            padding: u.padding,
                            blockSize: n.blockSize,
                            formatter: r.format
                        })
                },
                decrypt: function (n, t, i, r) {
                    return r = this.cfg.extend(r),
                        t = this._parse(t, r.format),
                        n.createDecryptor(i, r).finalize(t.ciphertext)
                },
                _parse: function (n, t) {
                    return "string" == typeof n ? t.parse(n, this) : n
                }
            })
            , i = (i.kdf = {}).OpenSSL = {
                execute: function (n, t, i, r) {
                    return r || (r = e.random(8)),
                        n = y.create({
                            keySize: t + i
                        }).compute(n, r),
                        i = e.create(n.words.slice(t), 4 * i),
                        n.sigBytes = 4 * t,
                        h.create({
                            key: n,
                            iv: i,
                            salt: r
                        })
                }
            }
            , v = t.PasswordBasedCipher = u.extend({
                cfg: u.cfg.extend({
                    kdf: i
                }),
                encrypt: function (n, t, i, r) {
                    return r = this.cfg.extend(r),
                        i = r.kdf.execute(i, n.keySize, n.ivSize),
                        r.iv = i.iv,
                        n = u.encrypt.call(this, n, t, i.key, r),
                        n.mixIn(i),
                        n
                },
                decrypt: function (n, t, i, r) {
                    return r = this.cfg.extend(r),
                        t = this._parse(t, r.format),
                        i = r.kdf.execute(i, n.keySize, n.ivSize, t.salt),
                        r.iv = i.iv,
                        u.decrypt.call(this, n, t, i.key, r)
                }
            })
    }(),
    function () {
        for (var i, tt, s = CryptoJS, d = s.lib.BlockCipher, a = s.algo, t = [], k = [], b = [], w = [], p = [], y = [], l = [], v = [], c = [], h = [], u = [], e = 0; 256 > e; e++)
            u[e] = 128 > e ? e << 1 : e << 1 ^ 283;
        for (var r = 0, f = 0, e = 0; 256 > e; e++) {
            i = f ^ f << 1 ^ f << 2 ^ f << 3 ^ f << 4,
                i = i >>> 8 ^ i & 255 ^ 99,
                t[r] = i,
                k[i] = r;
            var o = u[r]
                , g = u[o]
                , nt = u[g]
                , n = 257 * u[i] ^ 16843008 * i;
            b[r] = n << 24 | n >>> 8,
                w[r] = n << 16 | n >>> 16,
                p[r] = n << 8 | n >>> 24,
                y[r] = n,
                n = 16843009 * nt ^ 65537 * g ^ 257 * o ^ 16843008 * r,
                l[i] = n << 24 | n >>> 8,
                v[i] = n << 16 | n >>> 16,
                c[i] = n << 8 | n >>> 24,
                h[i] = n,
                r ? (r = o ^ u[u[u[nt ^ o]]],
                    f ^= u[u[f]]) : r = f = 1
        }
        tt = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
            a = a.AES = d.extend({
                _doReset: function () {
                    for (var n, f = this._key, e = f.words, r = f.sigBytes / 4, f = 4 * ((this._nRounds = r + 6) + 1), u = this._keySchedule = [], i = 0; i < f; i++)
                        i < r ? u[i] = e[i] : (n = u[i - 1],
                            i % r ? 6 < r && 4 == i % r && (n = t[n >>> 24] << 24 | t[n >>> 16 & 255] << 16 | t[n >>> 8 & 255] << 8 | t[n & 255]) : (n = n << 8 | n >>> 24,
                                n = t[n >>> 24] << 24 | t[n >>> 16 & 255] << 16 | t[n >>> 8 & 255] << 8 | t[n & 255],
                                n ^= tt[i / r | 0] << 24),
                            u[i] = u[i - r] ^ n);
                    for (e = this._invKeySchedule = [],
                        r = 0; r < f; r++)
                        i = f - r,
                            n = r % 4 ? u[i] : u[i - 4],
                            e[r] = 4 > r || 4 >= i ? n : l[t[n >>> 24]] ^ v[t[n >>> 16 & 255]] ^ c[t[n >>> 8 & 255]] ^ h[t[n & 255]]
                },
                encryptBlock: function (n, i) {
                    this._doCryptBlock(n, i, this._keySchedule, b, w, p, y, t)
                },
                decryptBlock: function (n, t) {
                    var i = n[t + 1];
                    n[t + 1] = n[t + 3],
                        n[t + 3] = i,
                        this._doCryptBlock(n, t, this._invKeySchedule, l, v, c, h, k),
                        i = n[t + 1],
                        n[t + 1] = n[t + 3],
                        n[t + 3] = i
                },
                _doCryptBlock: function (n, t, i, r, u, f, e, o) {
                    for (var b = this._nRounds, h = n[t] ^ i[0], c = n[t + 1] ^ i[1], l = n[t + 2] ^ i[2], s = n[t + 3] ^ i[3], a = 4, w = 1; w < b; w++)
                        var v = r[h >>> 24] ^ u[c >>> 16 & 255] ^ f[l >>> 8 & 255] ^ e[s & 255] ^ i[a++]
                            , p = r[c >>> 24] ^ u[l >>> 16 & 255] ^ f[s >>> 8 & 255] ^ e[h & 255] ^ i[a++]
                            , y = r[l >>> 24] ^ u[s >>> 16 & 255] ^ f[h >>> 8 & 255] ^ e[c & 255] ^ i[a++]
                            , s = r[s >>> 24] ^ u[h >>> 16 & 255] ^ f[c >>> 8 & 255] ^ e[l & 255] ^ i[a++]
                            , h = v
                            , c = p
                            , l = y;
                    v = (o[h >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[s & 255]) ^ i[a++],
                        p = (o[c >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[s >>> 8 & 255] << 8 | o[h & 255]) ^ i[a++],
                        y = (o[l >>> 24] << 24 | o[s >>> 16 & 255] << 16 | o[h >>> 8 & 255] << 8 | o[c & 255]) ^ i[a++],
                        s = (o[s >>> 24] << 24 | o[h >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[l & 255]) ^ i[a++],
                        n[t] = v,
                        n[t + 1] = p,
                        n[t + 2] = y,
                        n[t + 3] = s
                },
                keySize: 8
            }),
            s.AES = d._createHelper(a)
    }()
encd = (dataToEnc) => {
    var _0x6afe = ["\x38\x30\x38\x30\x38\x30\x38\x30\x38\x30\x38\x30\x38\x30\x38\x30", "\x70\x61\x72\x73\x65", "\x55\x74\x66\x38", "\x65\x6E\x63", "\x43\x42\x43", "\x6D\x6F\x64\x65", "\x50\x6B\x63\x73\x37", "\x70\x61\x64", "\x65\x6E\x63\x72\x79\x70\x74", "\x41\x45\x53"];
    var key = CryptoJS[_0x6afe[3]][_0x6afe[2]][_0x6afe[1]](_0x6afe[0]);
    var iv = CryptoJS[_0x6afe[3]][_0x6afe[2]][_0x6afe[1]](_0x6afe[0]); var encryptedData = CryptoJS[_0x6afe[9]][_0x6afe[8]](CryptoJS[_0x6afe[3]][_0x6afe[2]][_0x6afe[1]](dataToEnc), key, { keySize: 128 / 8, iv: iv, mode: CryptoJS[_0x6afe[5]][_0x6afe[4]], padding: CryptoJS[_0x6afe[7]][_0x6afe[6]] });
    return encryptedData;
}