const __vite__mapDeps = (i,m=__vite__mapDeps,d=(m.f || (m.f = ["assets/Home-Cg04Ycm4.js", "assets/game-active-tNVZbVpQ.js", "assets/user-DU1T55YB.js", "assets/Home-D_jw99M8.css", "assets/Lucky-CoPSpeIZ.js", "assets/invite-avator-BHATtzBl.js", "assets/activity-BBGJy0S6.js", "assets/useModal-DBDLXLCq.js", "assets/Lucky-Def77pQl.css", "assets/Mine-n-SF9TZD.js", "assets/WalletHeader-G1UGiMdE.js", "assets/WalletHeader-DzndvQfW.css", "assets/Mine-DAldXme-.css", "assets/Earn-Bq-vJEcw.js", "assets/Earn-DOjvKepO.css", "assets/Game-D1IXve4P.js", "assets/Game-BlvBw7HJ.css"])))=>i.map(i=>d[i]);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        a(r);
    new MutationObserver(r=>{
        for (const o of r)
            if (o.type === "childList")
                for (const l of o.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && a(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(r) {
        const o = {};
        return r.integrity && (o.integrity = r.integrity),
        r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function a(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const o = n(r);
        fetch(r.href, o)
    }
}
)();
/**
* @vue/shared v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function Zs(e, t) {
    const n = new Set(e.split(","));
    return a=>n.has(a)
}
const qe = {}
  , fo = []
  , Yt = ()=>{}
  , Wv = ()=>!1
  , Bl = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , Qs = e=>e.startsWith("onUpdate:")
  , mt = Object.assign
  , ec = (e,t)=>{
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , jv = Object.prototype.hasOwnProperty
  , Ne = (e,t)=>jv.call(e, t)
  , pe = Array.isArray
  , ho = e=>Ro(e) === "[object Map]"
  , Fl = e=>Ro(e) === "[object Set]"
  , tu = e=>Ro(e) === "[object Date]"
  , zv = e=>Ro(e) === "[object RegExp]"
  , xe = e=>typeof e == "function"
  , Ye = e=>typeof e == "string"
  , _n = e=>typeof e == "symbol"
  , Ue = e=>e !== null && typeof e == "object"
  , Kd = e=>(Ue(e) || xe(e)) && xe(e.then) && xe(e.catch)
  , Xd = Object.prototype.toString
  , Ro = e=>Xd.call(e)
  , Yv = e=>Ro(e).slice(8, -1)
  , qd = e=>Ro(e) === "[object Object]"
  , tc = e=>Ye(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , ar = Zs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Vl = e=>{
    const t = Object.create(null);
    return n=>t[n] || (t[n] = e(n))
}
  , Gv = /-(\w)/g
  , ln = Vl(e=>e.replace(Gv, (t,n)=>n ? n.toUpperCase() : ""))
  , Kv = /\B([A-Z])/g
  , Wn = Vl(e=>e.replace(Kv, "-$1").toLowerCase())
  , Hl = Vl(e=>e.charAt(0).toUpperCase() + e.slice(1))
  , wi = Vl(e=>e ? `on${Hl(e)}` : "")
  , ma = (e,t)=>!Object.is(e, t)
  , mo = (e,...t)=>{
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
  , Jd = (e,t,n,a=!1)=>{
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: a,
        value: n
    })
}
  , ls = e=>{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Xv = e=>{
    const t = Ye(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let nu;
const Zd = ()=>nu || (nu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ul(e) {
    if (pe(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const a = e[n]
              , r = Ye(a) ? Qv(a) : Ul(a);
            if (r)
                for (const o in r)
                    t[o] = r[o]
        }
        return t
    } else if (Ye(e) || Ue(e))
        return e
}
const qv = /;(?![^(]*\))/g
  , Jv = /:([^]+)/
  , Zv = /\/\*[^]*?\*\//g;
function Qv(e) {
    const t = {};
    return e.replace(Zv, "").split(qv).forEach(n=>{
        if (n) {
            const a = n.split(Jv);
            a.length > 1 && (t[a[0].trim()] = a[1].trim())
        }
    }
    ),
    t
}
function eb(e) {
    let t = "";
    if (!e || Ye(e))
        return t;
    for (const n in e) {
        const a = e[n];
        if (Ye(a) || typeof a == "number") {
            const r = n.startsWith("--") ? n : Wn(n);
            t += `${r}:${a};`
        }
    }
    return t
}
function Wl(e) {
    let t = "";
    if (Ye(e))
        t = e;
    else if (pe(e))
        for (let n = 0; n < e.length; n++) {
            const a = Wl(e[n]);
            a && (t += a + " ")
        }
    else if (Ue(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const tb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , nb = Zs(tb);
function Qd(e) {
    return !!e || e === ""
}
function ab(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let a = 0; n && a < e.length; a++)
        n = jl(e[a], t[a]);
    return n
}
function jl(e, t) {
    if (e === t)
        return !0;
    let n = tu(e)
      , a = tu(t);
    if (n || a)
        return n && a ? e.getTime() === t.getTime() : !1;
    if (n = _n(e),
    a = _n(t),
    n || a)
        return e === t;
    if (n = pe(e),
    a = pe(t),
    n || a)
        return n && a ? ab(e, t) : !1;
    if (n = Ue(e),
    a = Ue(t),
    n || a) {
        if (!n || !a)
            return !1;
        const r = Object.keys(e).length
          , o = Object.keys(t).length;
        if (r !== o)
            return !1;
        for (const l in e) {
            const i = e.hasOwnProperty(l)
              , s = t.hasOwnProperty(l);
            if (i && !s || !i && s || !jl(e[l], t[l]))
                return !1
        }
    }
    return String(e) === String(t)
}
function eh(e, t) {
    return e.findIndex(n=>jl(n, t))
}
const th = e=>!!(e && e.__v_isRef === !0)
  , ul = e=>Ye(e) ? e : e == null ? "" : pe(e) || Ue(e) && (e.toString === Xd || !xe(e.toString)) ? th(e) ? ul(e.value) : JSON.stringify(e, nh, 2) : String(e)
  , nh = (e,t)=>th(t) ? nh(e, t.value) : ho(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n,[a,r],o)=>(n[Ci(a, o) + " =>"] = r,
    n), {})
} : Fl(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n=>Ci(n))
} : _n(t) ? Ci(t) : Ue(t) && !pe(t) && !qd(t) ? String(t) : t
  , Ci = (e,t="")=>{
    var n;
    return _n(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Nt;
class ah {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = Nt,
        !t && Nt && (this.index = (Nt.scopes || (Nt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = Nt;
            try {
                return Nt = this,
                t()
            } finally {
                Nt = n
            }
        }
    }
    on() {
        Nt = this
    }
    off() {
        Nt = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, a;
            for (n = 0,
            a = this.effects.length; n < a; n++)
                this.effects[n].stop();
            for (n = 0,
            a = this.cleanups.length; n < a; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                a = this.scopes.length; n < a; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r,
                r.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function nc(e) {
    return new ah(e)
}
function ob(e, t=Nt) {
    t && t.active && t.effects.push(e)
}
function oh() {
    return Nt
}
function rb(e) {
    Nt && Nt.cleanups.push(e)
}
let Na;
class ac {
    constructor(t, n, a, r) {
        this.fn = t,
        this.trigger = n,
        this.scheduler = a,
        this.active = !0,
        this.deps = [],
        this._dirtyLevel = 4,
        this._trackId = 0,
        this._runnings = 0,
        this._shouldSchedule = !1,
        this._depsLength = 0,
        ob(this, r)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1,
            va();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (lb(n.computed),
                this._dirtyLevel >= 4))
                    break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0),
            ba()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0,
        !this.active)
            return this.fn();
        let t = da
          , n = Na;
        try {
            return da = !0,
            Na = this,
            this._runnings++,
            au(this),
            this.fn()
        } finally {
            ou(this),
            this._runnings--,
            Na = n,
            da = t
        }
    }
    stop() {
        this.active && (au(this),
        ou(this),
        this.onStop && this.onStop(),
        this.active = !1)
    }
}
function lb(e) {
    return e.value
}
function au(e) {
    e._trackId++,
    e._depsLength = 0
}
function ou(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            rh(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function rh(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t),
    e.size === 0 && e.cleanup())
}
let da = !0
  , is = 0;
const lh = [];
function va() {
    lh.push(da),
    da = !1
}
function ba() {
    const e = lh.pop();
    da = e === void 0 ? !0 : e
}
function oc() {
    is++
}
function rc() {
    for (is--; !is && ss.length; )
        ss.shift()()
}
function ih(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const a = e.deps[e._depsLength];
        a !== t ? (a && rh(a, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const ss = [];
function sh(e, t, n) {
    oc();
    for (const a of e.keys()) {
        let r;
        a._dirtyLevel < t && (r ?? (r = e.get(a) === a._trackId)) && (a._shouldSchedule || (a._shouldSchedule = a._dirtyLevel === 0),
        a._dirtyLevel = t),
        a._shouldSchedule && (r ?? (r = e.get(a) === a._trackId)) && (a.trigger(),
        (!a._runnings || a.allowRecurse) && a._dirtyLevel !== 2 && (a._shouldSchedule = !1,
        a.scheduler && ss.push(a.scheduler)))
    }
    rc()
}
const ch = (e,t)=>{
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , pl = new WeakMap
  , Ma = Symbol("")
  , cs = Symbol("");
function Lt(e, t, n) {
    if (da && Na) {
        let a = pl.get(e);
        a || pl.set(e, a = new Map);
        let r = a.get(n);
        r || a.set(n, r = ch(()=>a.delete(n))),
        ih(Na, r)
    }
}
function Dn(e, t, n, a, r, o) {
    const l = pl.get(e);
    if (!l)
        return;
    let i = [];
    if (t === "clear")
        i = [...l.values()];
    else if (n === "length" && pe(e)) {
        const s = Number(a);
        l.forEach((c,u)=>{
            (u === "length" || !_n(u) && u >= s) && i.push(c)
        }
        )
    } else
        switch (n !== void 0 && i.push(l.get(n)),
        t) {
        case "add":
            pe(e) ? tc(n) && i.push(l.get("length")) : (i.push(l.get(Ma)),
            ho(e) && i.push(l.get(cs)));
            break;
        case "delete":
            pe(e) || (i.push(l.get(Ma)),
            ho(e) && i.push(l.get(cs)));
            break;
        case "set":
            ho(e) && i.push(l.get(Ma));
            break
        }
    oc();
    for (const s of i)
        s && sh(s, 4);
    rc()
}
function ib(e, t) {
    const n = pl.get(e);
    return n && n.get(t)
}
const sb = Zs("__proto__,__v_isRef,__isVue")
  , uh = new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !== "arguments" && e !== "caller").map(e=>Symbol[e]).filter(_n))
  , ru = cb();
function cb() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
        e[t] = function(...n) {
            const a = Be(this);
            for (let o = 0, l = this.length; o < l; o++)
                Lt(a, "get", o + "");
            const r = a[t](...n);
            return r === -1 || r === !1 ? a[t](...n.map(Be)) : r
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
        e[t] = function(...n) {
            va(),
            oc();
            const a = Be(this)[t].apply(this, n);
            return rc(),
            ba(),
            a
        }
    }
    ),
    e
}
function ub(e) {
    _n(e) || (e = String(e));
    const t = Be(this);
    return Lt(t, "has", e),
    t.hasOwnProperty(e)
}
class fh {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, a) {
        const r = this._isReadonly
          , o = this._isShallow;
        if (n === "__v_isReactive")
            return !r;
        if (n === "__v_isReadonly")
            return r;
        if (n === "__v_isShallow")
            return o;
        if (n === "__v_raw")
            return a === (r ? o ? Sb : gh : o ? mh : hh).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
        const l = pe(t);
        if (!r) {
            if (l && Ne(ru, n))
                return Reflect.get(ru, n, a);
            if (n === "hasOwnProperty")
                return ub
        }
        const i = Reflect.get(t, n, a);
        return (_n(n) ? uh.has(n) : sb(n)) || (r || Lt(t, "get", n),
        o) ? i : nt(i) ? l && tc(n) ? i : i.value : Ue(i) ? r ? bh(i) : Ge(i) : i
    }
}
class dh extends fh {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, a, r) {
        let o = t[n];
        if (!this._isShallow) {
            const s = Ha(o);
            if (!Co(a) && !Ha(a) && (o = Be(o),
            a = Be(a)),
            !pe(t) && nt(o) && !nt(a))
                return s ? !1 : (o.value = a,
                !0)
        }
        const l = pe(t) && tc(n) ? Number(n) < t.length : Ne(t, n)
          , i = Reflect.set(t, n, a, r);
        return t === Be(r) && (l ? ma(a, o) && Dn(t, "set", n, a) : Dn(t, "add", n, a)),
        i
    }
    deleteProperty(t, n) {
        const a = Ne(t, n);
        t[n];
        const r = Reflect.deleteProperty(t, n);
        return r && a && Dn(t, "delete", n, void 0),
        r
    }
    has(t, n) {
        const a = Reflect.has(t, n);
        return (!_n(n) || !uh.has(n)) && Lt(t, "has", n),
        a
    }
    ownKeys(t) {
        return Lt(t, "iterate", pe(t) ? "length" : Ma),
        Reflect.ownKeys(t)
    }
}
class fb extends fh {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const db = new dh
  , hb = new fb
  , mb = new dh(!0);
const lc = e=>e
  , zl = e=>Reflect.getPrototypeOf(e);
function Dr(e, t, n=!1, a=!1) {
    e = e.__v_raw;
    const r = Be(e)
      , o = Be(t);
    n || (ma(t, o) && Lt(r, "get", t),
    Lt(r, "get", o));
    const {has: l} = zl(r)
      , i = a ? lc : n ? uc : dr;
    if (l.call(r, t))
        return i(e.get(t));
    if (l.call(r, o))
        return i(e.get(o));
    e !== r && e.get(t)
}
function $r(e, t=!1) {
    const n = this.__v_raw
      , a = Be(n)
      , r = Be(e);
    return t || (ma(e, r) && Lt(a, "has", e),
    Lt(a, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
}
function Nr(e, t=!1) {
    return e = e.__v_raw,
    !t && Lt(Be(e), "iterate", Ma),
    Reflect.get(e, "size", e)
}
function lu(e, t=!1) {
    !t && !Co(e) && !Ha(e) && (e = Be(e));
    const n = Be(this);
    return zl(n).has.call(n, e) || (n.add(e),
    Dn(n, "add", e, e)),
    this
}
function iu(e, t, n=!1) {
    !n && !Co(t) && !Ha(t) && (t = Be(t));
    const a = Be(this)
      , {has: r, get: o} = zl(a);
    let l = r.call(a, e);
    l || (e = Be(e),
    l = r.call(a, e));
    const i = o.call(a, e);
    return a.set(e, t),
    l ? ma(t, i) && Dn(a, "set", e, t) : Dn(a, "add", e, t),
    this
}
function su(e) {
    const t = Be(this)
      , {has: n, get: a} = zl(t);
    let r = n.call(t, e);
    r || (e = Be(e),
    r = n.call(t, e)),
    a && a.call(t, e);
    const o = t.delete(e);
    return r && Dn(t, "delete", e, void 0),
    o
}
function cu() {
    const e = Be(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && Dn(e, "clear", void 0, void 0),
    n
}
function Mr(e, t) {
    return function(a, r) {
        const o = this
          , l = o.__v_raw
          , i = Be(l)
          , s = t ? lc : e ? uc : dr;
        return !e && Lt(i, "iterate", Ma),
        l.forEach((c,u)=>a.call(r, s(c), s(u), o))
    }
}
function Br(e, t, n) {
    return function(...a) {
        const r = this.__v_raw
          , o = Be(r)
          , l = ho(o)
          , i = e === "entries" || e === Symbol.iterator && l
          , s = e === "keys" && l
          , c = r[e](...a)
          , u = n ? lc : t ? uc : dr;
        return !t && Lt(o, "iterate", s ? cs : Ma),
        {
            next() {
                const {value: f, done: d} = c.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: i ? [u(f[0]), u(f[1])] : u(f),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Kn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function gb() {
    const e = {
        get(o) {
            return Dr(this, o)
        },
        get size() {
            return Nr(this)
        },
        has: $r,
        add: lu,
        set: iu,
        delete: su,
        clear: cu,
        forEach: Mr(!1, !1)
    }
      , t = {
        get(o) {
            return Dr(this, o, !1, !0)
        },
        get size() {
            return Nr(this)
        },
        has: $r,
        add(o) {
            return lu.call(this, o, !0)
        },
        set(o, l) {
            return iu.call(this, o, l, !0)
        },
        delete: su,
        clear: cu,
        forEach: Mr(!1, !0)
    }
      , n = {
        get(o) {
            return Dr(this, o, !0)
        },
        get size() {
            return Nr(this, !0)
        },
        has(o) {
            return $r.call(this, o, !0)
        },
        add: Kn("add"),
        set: Kn("set"),
        delete: Kn("delete"),
        clear: Kn("clear"),
        forEach: Mr(!0, !1)
    }
      , a = {
        get(o) {
            return Dr(this, o, !0, !0)
        },
        get size() {
            return Nr(this, !0)
        },
        has(o) {
            return $r.call(this, o, !0)
        },
        add: Kn("add"),
        set: Kn("set"),
        delete: Kn("delete"),
        clear: Kn("clear"),
        forEach: Mr(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o=>{
        e[o] = Br(o, !1, !1),
        n[o] = Br(o, !0, !1),
        t[o] = Br(o, !1, !0),
        a[o] = Br(o, !0, !0)
    }
    ),
    [e, n, t, a]
}
const [vb,bb,yb,pb] = gb();
function ic(e, t) {
    const n = t ? e ? pb : yb : e ? bb : vb;
    return (a,r,o)=>r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? a : Reflect.get(Ne(n, r) && r in a ? n : a, r, o)
}
const _b = {
    get: ic(!1, !1)
}
  , wb = {
    get: ic(!1, !0)
}
  , Cb = {
    get: ic(!0, !1)
};
const hh = new WeakMap
  , mh = new WeakMap
  , gh = new WeakMap
  , Sb = new WeakMap;
function Eb(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function Tb(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Eb(Yv(e))
}
function Ge(e) {
    return Ha(e) ? e : sc(e, !1, db, _b, hh)
}
function vh(e) {
    return sc(e, !1, mb, wb, mh)
}
function bh(e) {
    return sc(e, !0, hb, Cb, gh)
}
function sc(e, t, n, a, r) {
    if (!Ue(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = r.get(e);
    if (o)
        return o;
    const l = Tb(e);
    if (l === 0)
        return e;
    const i = new Proxy(e,l === 2 ? a : n);
    return r.set(e, i),
    i
}
function Ba(e) {
    return Ha(e) ? Ba(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Ha(e) {
    return !!(e && e.__v_isReadonly)
}
function Co(e) {
    return !!(e && e.__v_isShallow)
}
function yh(e) {
    return e ? !!e.__v_raw : !1
}
function Be(e) {
    const t = e && e.__v_raw;
    return t ? Be(t) : e
}
function cc(e) {
    return Object.isExtensible(e) && Jd(e, "__v_skip", !0),
    e
}
const dr = e=>Ue(e) ? Ge(e) : e
  , uc = e=>Ue(e) ? bh(e) : e;
class ph {
    constructor(t, n, a, r) {
        this.getter = t,
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new ac(()=>t(this._value),()=>fl(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !r,
        this.__v_isReadonly = a
    }
    get value() {
        const t = Be(this);
        return (!t._cacheable || t.effect.dirty) && ma(t._value, t._value = t.effect.run()) && fl(t, 4),
        _h(t),
        t.effect._dirtyLevel >= 2 && fl(t, 2),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}
function xb(e, t, n=!1) {
    let a, r;
    const o = xe(e);
    return o ? (a = e,
    r = Yt) : (a = e.get,
    r = e.set),
    new ph(a,r,o || !r,n)
}
function _h(e) {
    var t;
    da && Na && (e = Be(e),
    ih(Na, (t = e.dep) != null ? t : e.dep = ch(()=>e.dep = void 0, e instanceof ph ? e : void 0)))
}
function fl(e, t=4, n, a) {
    e = Be(e);
    const r = e.dep;
    r && sh(r, t)
}
function nt(e) {
    return !!(e && e.__v_isRef === !0)
}
function V(e) {
    return wh(e, !1)
}
function fc(e) {
    return wh(e, !0)
}
function wh(e, t) {
    return nt(e) ? e : new kb(e,t)
}
class kb {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : Be(t),
        this._value = n ? t : dr(t)
    }
    get value() {
        return _h(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || Co(t) || Ha(t);
        t = n ? t : Be(t),
        ma(t, this._rawValue) && (this._rawValue,
        this._rawValue = t,
        this._value = n ? t : dr(t),
        fl(this, 4))
    }
}
function Ft(e) {
    return nt(e) ? e.value : e
}
const Ib = {
    get: (e,t,n)=>Ft(Reflect.get(e, t, n)),
    set: (e,t,n,a)=>{
        const r = e[t];
        return nt(r) && !nt(n) ? (r.value = n,
        !0) : Reflect.set(e, t, n, a)
    }
};
function Ch(e) {
    return Ba(e) ? e : new Proxy(e,Ib)
}
function Ab(e) {
    const t = pe(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = Pb(e, n);
    return t
}
class Ob {
    constructor(t, n, a) {
        this._object = t,
        this._key = n,
        this._defaultValue = a,
        this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return ib(Be(this._object), this._key)
    }
}
function Pb(e, t, n) {
    const a = e[t];
    return nt(a) ? a : new Ob(e,t,n)
}
/**
* @vue/runtime-core v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ha(e, t, n, a) {
    try {
        return a ? e(...a) : e()
    } catch (r) {
        kr(r, t, n)
    }
}
function Gt(e, t, n, a) {
    if (xe(e)) {
        const r = ha(e, t, n, a);
        return r && Kd(r) && r.catch(o=>{
            kr(o, t, n)
        }
        ),
        r
    }
    if (pe(e)) {
        const r = [];
        for (let o = 0; o < e.length; o++)
            r.push(Gt(e[o], t, n, a));
        return r
    }
}
function kr(e, t, n, a=!0) {
    const r = t ? t.vnode : null;
    if (t) {
        let o = t.parent;
        const l = t.proxy
          , i = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; o; ) {
            const c = o.ec;
            if (c) {
                for (let u = 0; u < c.length; u++)
                    if (c[u](e, l, i) === !1)
                        return
            }
            o = o.parent
        }
        const s = t.appContext.config.errorHandler;
        if (s) {
            va(),
            ha(s, null, 10, [e, l, i]),
            ba();
            return
        }
    }
    Rb(e, n, r, a)
}
function Rb(e, t, n, a=!0) {
    console.error(e)
}
let hr = !1
  , us = !1;
const Ct = [];
let bn = 0;
const go = [];
let ra = null
  , Ra = 0;
const Sh = Promise.resolve();
let dc = null;
function Oe(e) {
    const t = dc || Sh;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function Lb(e) {
    let t = bn + 1
      , n = Ct.length;
    for (; t < n; ) {
        const a = t + n >>> 1
          , r = Ct[a]
          , o = mr(r);
        o < e || o === e && r.pre ? t = a + 1 : n = a
    }
    return t
}
function Yl(e) {
    (!Ct.length || !Ct.includes(e, hr && e.allowRecurse ? bn + 1 : bn)) && (e.id == null ? Ct.push(e) : Ct.splice(Lb(e.id), 0, e),
    Eh())
}
function Eh() {
    !hr && !us && (us = !0,
    dc = Sh.then(xh))
}
function Db(e) {
    const t = Ct.indexOf(e);
    t > bn && Ct.splice(t, 1)
}
function $b(e) {
    pe(e) ? go.push(...e) : (!ra || !ra.includes(e, e.allowRecurse ? Ra + 1 : Ra)) && go.push(e),
    Eh()
}
function uu(e, t, n=hr ? bn + 1 : 0) {
    for (; n < Ct.length; n++) {
        const a = Ct[n];
        if (a && a.pre) {
            if (e && a.id !== e.uid)
                continue;
            Ct.splice(n, 1),
            n--,
            a()
        }
    }
}
function Th(e) {
    if (go.length) {
        const t = [...new Set(go)].sort((n,a)=>mr(n) - mr(a));
        if (go.length = 0,
        ra) {
            ra.push(...t);
            return
        }
        for (ra = t,
        Ra = 0; Ra < ra.length; Ra++) {
            const n = ra[Ra];
            n.active !== !1 && n()
        }
        ra = null,
        Ra = 0
    }
}
const mr = e=>e.id == null ? 1 / 0 : e.id
  , Nb = (e,t)=>{
    const n = mr(e) - mr(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function xh(e) {
    us = !1,
    hr = !0,
    Ct.sort(Nb);
    try {
        for (bn = 0; bn < Ct.length; bn++) {
            const t = Ct[bn];
            t && t.active !== !1 && ha(t, t.i, t.i ? 15 : 14)
        }
    } finally {
        bn = 0,
        Ct.length = 0,
        Th(),
        hr = !1,
        dc = null,
        (Ct.length || go.length) && xh()
    }
}
let it = null
  , Gl = null;
function _l(e) {
    const t = it;
    return it = e,
    Gl = e && e.type.__scopeId || null,
    t
}
function Mb(e) {
    Gl = e
}
function Bb() {
    Gl = null
}
function Fb(e, t=it, n) {
    if (!t || e._n)
        return e;
    const a = (...r)=>{
        a._d && wu(-1);
        const o = _l(t);
        let l;
        try {
            l = e(...r)
        } finally {
            _l(o),
            a._d && wu(1)
        }
        return l
    }
    ;
    return a._n = !0,
    a._c = !0,
    a._d = !0,
    a
}
function st(e, t) {
    if (it === null)
        return e;
    const n = Jl(it)
      , a = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let[o,l,i,s=qe] = t[r];
        o && (xe(o) && (o = {
            mounted: o,
            updated: o
        }),
        o.deep && ca(l),
        a.push({
            dir: o,
            instance: n,
            value: l,
            oldValue: void 0,
            arg: i,
            modifiers: s
        }))
    }
    return e
}
function Ea(e, t, n, a) {
    const r = e.dirs
      , o = t && t.dirs;
    for (let l = 0; l < r.length; l++) {
        const i = r[l];
        o && (i.oldValue = o[l].value);
        let s = i.dir[a];
        s && (va(),
        Gt(s, n, 8, [e.el, i, e, t]),
        ba())
    }
}
const la = Symbol("_leaveCb")
  , Fr = Symbol("_enterCb");
function Vb() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Qe(()=>{
        e.isMounted = !0
    }
    ),
    cn(()=>{
        e.isUnmounting = !0
    }
    ),
    e
}
const Vt = [Function, Array]
  , kh = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Vt,
    onEnter: Vt,
    onAfterEnter: Vt,
    onEnterCancelled: Vt,
    onBeforeLeave: Vt,
    onLeave: Vt,
    onAfterLeave: Vt,
    onLeaveCancelled: Vt,
    onBeforeAppear: Vt,
    onAppear: Vt,
    onAfterAppear: Vt,
    onAppearCancelled: Vt
}
  , Ih = e=>{
    const t = e.subTree;
    return t.component ? Ih(t.component) : t
}
  , Hb = {
    name: "BaseTransition",
    props: kh,
    setup(e, {slots: t}) {
        const n = gt()
          , a = Vb();
        return ()=>{
            const r = t.default && Oh(t.default(), !0);
            if (!r || !r.length)
                return;
            let o = r[0];
            if (r.length > 1) {
                for (const d of r)
                    if (d.type !== St) {
                        o = d;
                        break
                    }
            }
            const l = Be(e)
              , {mode: i} = l;
            if (a.isLeaving)
                return Si(o);
            const s = fu(o);
            if (!s)
                return Si(o);
            let c = fs(s, l, a, n, d=>c = d);
            gr(s, c);
            const u = n.subTree
              , f = u && fu(u);
            if (f && f.type !== St && !ua(s, f) && Ih(n).type !== St) {
                const d = fs(f, l, a, n);
                if (gr(f, d),
                i === "out-in" && s.type !== St)
                    return a.isLeaving = !0,
                    d.afterLeave = ()=>{
                        a.isLeaving = !1,
                        n.update.active !== !1 && (n.effect.dirty = !0,
                        n.update())
                    }
                    ,
                    Si(o);
                i === "in-out" && s.type !== St && (d.delayLeave = (m,y,w)=>{
                    const p = Ah(a, f);
                    p[String(f.key)] = f,
                    m[la] = ()=>{
                        y(),
                        m[la] = void 0,
                        delete c.delayedLeave
                    }
                    ,
                    c.delayedLeave = w
                }
                )
            }
            return o
        }
    }
}
  , Ub = Hb;
function Ah(e, t) {
    const {leavingVNodes: n} = e;
    let a = n.get(t.type);
    return a || (a = Object.create(null),
    n.set(t.type, a)),
    a
}
function fs(e, t, n, a, r) {
    const {appear: o, mode: l, persisted: i=!1, onBeforeEnter: s, onEnter: c, onAfterEnter: u, onEnterCancelled: f, onBeforeLeave: d, onLeave: m, onAfterLeave: y, onLeaveCancelled: w, onBeforeAppear: p, onAppear: C, onAfterAppear: g, onAppearCancelled: v} = t
      , b = String(e.key)
      , _ = Ah(n, e)
      , S = (T,D)=>{
        T && Gt(T, a, 9, D)
    }
      , A = (T,D)=>{
        const k = D[1];
        S(T, D),
        pe(T) ? T.every(O=>O.length <= 1) && k() : T.length <= 1 && k()
    }
      , E = {
        mode: l,
        persisted: i,
        beforeEnter(T) {
            let D = s;
            if (!n.isMounted)
                if (o)
                    D = p || s;
                else
                    return;
            T[la] && T[la](!0);
            const k = _[b];
            k && ua(e, k) && k.el[la] && k.el[la](),
            S(D, [T])
        },
        enter(T) {
            let D = c
              , k = u
              , O = f;
            if (!n.isMounted)
                if (o)
                    D = C || c,
                    k = g || u,
                    O = v || f;
                else
                    return;
            let N = !1;
            const Z = T[Fr] = ce=>{
                N || (N = !0,
                ce ? S(O, [T]) : S(k, [T]),
                E.delayedLeave && E.delayedLeave(),
                T[Fr] = void 0)
            }
            ;
            D ? A(D, [T, Z]) : Z()
        },
        leave(T, D) {
            const k = String(e.key);
            if (T[Fr] && T[Fr](!0),
            n.isUnmounting)
                return D();
            S(d, [T]);
            let O = !1;
            const N = T[la] = Z=>{
                O || (O = !0,
                D(),
                Z ? S(w, [T]) : S(y, [T]),
                T[la] = void 0,
                _[k] === e && delete _[k])
            }
            ;
            _[k] = e,
            m ? A(m, [T, N]) : N()
        },
        clone(T) {
            const D = fs(T, t, n, a, r);
            return r && r(D),
            D
        }
    };
    return E
}
function Si(e) {
    if (Ir(e))
        return e = Bn(e),
        e.children = null,
        e
}
function fu(e) {
    if (!Ir(e))
        return e;
    const {shapeFlag: t, children: n} = e;
    if (n) {
        if (t & 16)
            return n[0];
        if (t & 32 && xe(n.default))
            return n.default()
    }
}
function gr(e, t) {
    e.shapeFlag & 6 && e.component ? gr(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Oh(e, t=!1, n) {
    let a = []
      , r = 0;
    for (let o = 0; o < e.length; o++) {
        let l = e[o];
        const i = n == null ? l.key : String(n) + String(l.key != null ? l.key : o);
        l.type === Je ? (l.patchFlag & 128 && r++,
        a = a.concat(Oh(l.children, t, i))) : (t || l.type !== St) && a.push(i != null ? Bn(l, {
            key: i
        }) : l)
    }
    if (r > 1)
        for (let o = 0; o < a.length; o++)
            a[o].patchFlag = -2;
    return a
}
/*! #__NO_SIDE_EFFECTS__ */
function K(e, t) {
    return xe(e) ? mt({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const vo = e=>!!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
function Ho(e) {
    xe(e) && (e = {
        loader: e
    });
    const {loader: t, loadingComponent: n, errorComponent: a, delay: r=200, timeout: o, suspensible: l=!0, onError: i} = e;
    let s = null, c, u = 0;
    const f = ()=>(u++,
    s = null,
    d())
      , d = ()=>{
        let m;
        return s || (m = s = t().catch(y=>{
            if (y = y instanceof Error ? y : new Error(String(y)),
            i)
                return new Promise((w,p)=>{
                    i(y, ()=>w(f()), ()=>p(y), u + 1)
                }
                );
            throw y
        }
        ).then(y=>m !== s && s ? s : (y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default),
        c = y,
        y)))
    }
    ;
    return K({
        name: "AsyncComponentWrapper",
        __asyncLoader: d,
        get __asyncResolved() {
            return c
        },
        setup() {
            const m = rt;
            if (c)
                return ()=>Ei(c, m);
            const y = g=>{
                s = null,
                kr(g, m, 13, !a)
            }
            ;
            if (l && m.suspense || Or)
                return d().then(g=>()=>Ei(g, m)).catch(g=>(y(g),
                ()=>a ? h(a, {
                    error: g
                }) : null));
            const w = V(!1)
              , p = V()
              , C = V(!!r);
            return r && setTimeout(()=>{
                C.value = !1
            }
            , r),
            o != null && setTimeout(()=>{
                if (!w.value && !p.value) {
                    const g = new Error(`Async component timed out after ${o}ms.`);
                    y(g),
                    p.value = g
                }
            }
            , o),
            d().then(()=>{
                w.value = !0,
                m.parent && Ir(m.parent.vnode) && (m.parent.effect.dirty = !0,
                Yl(m.parent.update))
            }
            ).catch(g=>{
                y(g),
                p.value = g
            }
            ),
            ()=>{
                if (w.value && c)
                    return Ei(c, m);
                if (p.value && a)
                    return h(a, {
                        error: p.value
                    });
                if (n && !C.value)
                    return h(n)
            }
        }
    })
}
function Ei(e, t) {
    const {ref: n, props: a, children: r, ce: o} = t.vnode
      , l = h(e, a, r);
    return l.ref = n,
    l.ce = o,
    delete t.vnode.ce,
    l
}
const Ir = e=>e.type.__isKeepAlive
  , Wb = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = gt()
          , a = n.ctx;
        if (!a.renderer)
            return ()=>{
                const g = t.default && t.default();
                return g && g.length === 1 ? g[0] : g
            }
            ;
        const r = new Map
          , o = new Set;
        let l = null;
        const i = n.suspense
          , {renderer: {p: s, m: c, um: u, o: {createElement: f}}} = a
          , d = f("div");
        a.activate = (g,v,b,_,S)=>{
            const A = g.component;
            c(g, v, b, 0, i),
            s(A.vnode, g, v, b, A, i, _, g.slotScopeIds, S),
            ut(()=>{
                A.isDeactivated = !1,
                A.a && mo(A.a);
                const E = g.props && g.props.onVnodeMounted;
                E && Wt(E, A.parent, g)
            }
            , i)
        }
        ,
        a.deactivate = g=>{
            const v = g.component;
            Cl(v.m),
            Cl(v.a),
            c(g, d, null, 1, i),
            ut(()=>{
                v.da && mo(v.da);
                const b = g.props && g.props.onVnodeUnmounted;
                b && Wt(b, v.parent, g),
                v.isDeactivated = !0
            }
            , i)
        }
        ;
        function m(g) {
            Ti(g),
            u(g, n, i, !0)
        }
        function y(g) {
            r.forEach((v,b)=>{
                const _ = _s(v.type);
                _ && (!g || !g(_)) && w(b)
            }
            )
        }
        function w(g) {
            const v = r.get(g);
            !l || !ua(v, l) ? m(v) : l && Ti(l),
            r.delete(g),
            o.delete(g)
        }
        se(()=>[e.include, e.exclude], ([g,v])=>{
            g && y(b=>tr(g, b)),
            v && y(b=>!tr(v, b))
        }
        , {
            flush: "post",
            deep: !0
        });
        let p = null;
        const C = ()=>{
            p != null && (ys(n.subTree.type) ? ut(()=>{
                r.set(p, Vr(n.subTree))
            }
            , n.subTree.suspense) : r.set(p, Vr(n.subTree)))
        }
        ;
        return Qe(C),
        mc(C),
        cn(()=>{
            r.forEach(g=>{
                const {subTree: v, suspense: b} = n
                  , _ = Vr(v);
                if (g.type === _.type && g.key === _.key) {
                    Ti(_);
                    const S = _.component.da;
                    S && ut(S, b);
                    return
                }
                m(g)
            }
            )
        }
        ),
        ()=>{
            if (p = null,
            !t.default)
                return null;
            const g = t.default()
              , v = g[0];
            if (g.length > 1)
                return l = null,
                g;
            if (!So(v) || !(v.shapeFlag & 4) && !(v.shapeFlag & 128))
                return l = null,
                v;
            let b = Vr(v);
            const _ = b.type
              , S = _s(vo(b) ? b.type.__asyncResolved || {} : _)
              , {include: A, exclude: E, max: T} = e;
            if (A && (!S || !tr(A, S)) || E && S && tr(E, S))
                return l = b,
                v;
            const D = b.key == null ? _ : b.key
              , k = r.get(D);
            return b.el && (b = Bn(b),
            v.shapeFlag & 128 && (v.ssContent = b)),
            p = D,
            k ? (b.el = k.el,
            b.component = k.component,
            b.transition && gr(b, b.transition),
            b.shapeFlag |= 512,
            o.delete(D),
            o.add(D)) : (o.add(D),
            T && o.size > parseInt(T, 10) && w(o.values().next().value)),
            b.shapeFlag |= 256,
            l = b,
            ys(v.type) ? v : b
        }
    }
}
  , NP = Wb;
function tr(e, t) {
    return pe(e) ? e.some(n=>tr(n, t)) : Ye(e) ? e.split(",").includes(t) : zv(e) ? e.test(t) : !1
}
function wn(e, t) {
    Ph(e, "a", t)
}
function Cn(e, t) {
    Ph(e, "da", t)
}
function Ph(e, t, n=rt) {
    const a = e.__wdc || (e.__wdc = ()=>{
        let r = n;
        for (; r; ) {
            if (r.isDeactivated)
                return;
            r = r.parent
        }
        return e()
    }
    );
    if (Kl(t, a, n),
    n) {
        let r = n.parent;
        for (; r && r.parent; )
            Ir(r.parent.vnode) && jb(a, t, n, r),
            r = r.parent
    }
}
function jb(e, t, n, a) {
    const r = Kl(t, e, a, !0);
    Wa(()=>{
        ec(a[t], r)
    }
    , n)
}
function Ti(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function Vr(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function Kl(e, t, n=rt, a=!1) {
    if (n) {
        const r = n[e] || (n[e] = [])
          , o = t.__weh || (t.__weh = (...l)=>{
            va();
            const i = Ar(n)
              , s = Gt(t, n, e, l);
            return i(),
            ba(),
            s
        }
        );
        return a ? r.unshift(o) : r.push(o),
        o
    }
}
const jn = e=>(t,n=rt)=>{
    (!Or || e === "sp") && Kl(e, (...a)=>t(...a), n)
}
  , hc = jn("bm")
  , Qe = jn("m")
  , Rh = jn("bu")
  , mc = jn("u")
  , cn = jn("bum")
  , Wa = jn("um")
  , zb = jn("sp")
  , Yb = jn("rtg")
  , Gb = jn("rtc");
function Kb(e, t=rt) {
    Kl("ec", e, t)
}
const gc = "components"
  , Xb = "directives";
function Lh(e, t) {
    return vc(gc, e, !0, t) || e
}
const Dh = Symbol.for("v-ndc");
function MP(e) {
    return Ye(e) ? vc(gc, e, !1) || e : e || Dh
}
function qb(e) {
    return vc(Xb, e)
}
function vc(e, t, n=!0, a=!1) {
    const r = it || rt;
    if (r) {
        const o = r.type;
        if (e === gc) {
            const i = _s(o, !1);
            if (i && (i === t || i === ln(t) || i === Hl(ln(t))))
                return o
        }
        const l = du(r[e] || o[e], t) || du(r.appContext[e], t);
        return !l && a ? o : l
    }
}
function du(e, t) {
    return e && (e[t] || e[ln(t)] || e[Hl(ln(t))])
}
function BP(e, t, n, a) {
    let r;
    const o = n;
    if (pe(e) || Ye(e)) {
        r = new Array(e.length);
        for (let l = 0, i = e.length; l < i; l++)
            r[l] = t(e[l], l, void 0, o)
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let l = 0; l < e; l++)
            r[l] = t(l + 1, l, void 0, o)
    } else if (Ue(e))
        if (e[Symbol.iterator])
            r = Array.from(e, (l,i)=>t(l, i, void 0, o));
        else {
            const l = Object.keys(e);
            r = new Array(l.length);
            for (let i = 0, s = l.length; i < s; i++) {
                const c = l[i];
                r[i] = t(e[c], c, i, o)
            }
        }
    else
        r = [];
    return r
}
function Jb(e, t, n={}, a, r) {
    if (it.isCE || it.parent && vo(it.parent) && it.parent.isCE)
        return h("slot", n, a && a());
    let o = e[t];
    o && o._c && (o._d = !1),
    jt();
    const l = o && $h(o(n))
      , i = br(Je, {
        key: (n.key || l && l.key || `_${t}`) + (!l && a ? "_fb" : "")
    }, l || (a ? a() : []), l && e._ === 1 ? 64 : -2);
    return !r && i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    i
}
function $h(e) {
    return e.some(t=>So(t) ? !(t.type === St || t.type === Je && !$h(t.children)) : !0) ? e : null
}
const ds = e=>e ? tm(e) ? Jl(e) : ds(e.parent) : null
  , or = mt(Object.create(null), {
    $: e=>e,
    $el: e=>e.vnode.el,
    $data: e=>e.data,
    $props: e=>e.props,
    $attrs: e=>e.attrs,
    $slots: e=>e.slots,
    $refs: e=>e.refs,
    $parent: e=>ds(e.parent),
    $root: e=>ds(e.root),
    $emit: e=>e.emit,
    $options: e=>bc(e),
    $forceUpdate: e=>e.f || (e.f = ()=>{
        e.effect.dirty = !0,
        Yl(e.update)
    }
    ),
    $nextTick: e=>e.n || (e.n = Oe.bind(e.proxy)),
    $watch: e=>Cy.bind(e)
})
  , xi = (e,t)=>e !== qe && !e.__isScriptSetup && Ne(e, t)
  , Zb = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: a, data: r, props: o, accessCache: l, type: i, appContext: s} = e;
        let c;
        if (t[0] !== "$") {
            const m = l[t];
            if (m !== void 0)
                switch (m) {
                case 1:
                    return a[t];
                case 2:
                    return r[t];
                case 4:
                    return n[t];
                case 3:
                    return o[t]
                }
            else {
                if (xi(a, t))
                    return l[t] = 1,
                    a[t];
                if (r !== qe && Ne(r, t))
                    return l[t] = 2,
                    r[t];
                if ((c = e.propsOptions[0]) && Ne(c, t))
                    return l[t] = 3,
                    o[t];
                if (n !== qe && Ne(n, t))
                    return l[t] = 4,
                    n[t];
                hs && (l[t] = 0)
            }
        }
        const u = or[t];
        let f, d;
        if (u)
            return t === "$attrs" && Lt(e.attrs, "get", ""),
            u(e);
        if ((f = i.__cssModules) && (f = f[t]))
            return f;
        if (n !== qe && Ne(n, t))
            return l[t] = 4,
            n[t];
        if (d = s.config.globalProperties,
        Ne(d, t))
            return d[t]
    },
    set({_: e}, t, n) {
        const {data: a, setupState: r, ctx: o} = e;
        return xi(r, t) ? (r[t] = n,
        !0) : a !== qe && Ne(a, t) ? (a[t] = n,
        !0) : Ne(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (o[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: a, appContext: r, propsOptions: o}}, l) {
        let i;
        return !!n[l] || e !== qe && Ne(e, l) || xi(t, l) || (i = o[0]) && Ne(i, l) || Ne(a, l) || Ne(or, l) || Ne(r.config.globalProperties, l)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : Ne(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function hu(e) {
    return pe(e) ? e.reduce((t,n)=>(t[n] = null,
    t), {}) : e
}
let hs = !0;
function Qb(e) {
    const t = bc(e)
      , n = e.proxy
      , a = e.ctx;
    hs = !1,
    t.beforeCreate && mu(t.beforeCreate, e, "bc");
    const {data: r, computed: o, methods: l, watch: i, provide: s, inject: c, created: u, beforeMount: f, mounted: d, beforeUpdate: m, updated: y, activated: w, deactivated: p, beforeDestroy: C, beforeUnmount: g, destroyed: v, unmounted: b, render: _, renderTracked: S, renderTriggered: A, errorCaptured: E, serverPrefetch: T, expose: D, inheritAttrs: k, components: O, directives: N, filters: Z} = t;
    if (c && ey(c, a, null),
    l)
        for (const ee in l) {
            const ue = l[ee];
            xe(ue) && (a[ee] = ue.bind(n))
        }
    if (r) {
        const ee = r.call(n, n);
        Ue(ee) && (e.data = Ge(ee))
    }
    if (hs = !0,
    o)
        for (const ee in o) {
            const ue = o[ee]
              , Te = xe(ue) ? ue.bind(n, n) : xe(ue.get) ? ue.get.bind(n, n) : Yt
              , Pe = !xe(ue) && xe(ue.set) ? ue.set.bind(n) : Yt
              , H = F({
                get: Te,
                set: Pe
            });
            Object.defineProperty(a, ee, {
                enumerable: !0,
                configurable: !0,
                get: ()=>H.value,
                set: J=>H.value = J
            })
        }
    if (i)
        for (const ee in i)
            Nh(i[ee], a, n, ee);
    if (s) {
        const ee = xe(s) ? s.call(n) : s;
        Reflect.ownKeys(ee).forEach(ue=>{
            $n(ue, ee[ue])
        }
        )
    }
    u && mu(u, e, "c");
    function j(ee, ue) {
        pe(ue) ? ue.forEach(Te=>ee(Te.bind(n))) : ue && ee(ue.bind(n))
    }
    if (j(hc, f),
    j(Qe, d),
    j(Rh, m),
    j(mc, y),
    j(wn, w),
    j(Cn, p),
    j(Kb, E),
    j(Gb, S),
    j(Yb, A),
    j(cn, g),
    j(Wa, b),
    j(zb, T),
    pe(D))
        if (D.length) {
            const ee = e.exposed || (e.exposed = {});
            D.forEach(ue=>{
                Object.defineProperty(ee, ue, {
                    get: ()=>n[ue],
                    set: Te=>n[ue] = Te
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    _ && e.render === Yt && (e.render = _),
    k != null && (e.inheritAttrs = k),
    O && (e.components = O),
    N && (e.directives = N)
}
function ey(e, t, n=Yt) {
    pe(e) && (e = ms(e));
    for (const a in e) {
        const r = e[a];
        let o;
        Ue(r) ? "default"in r ? o = bt(r.from || a, r.default, !0) : o = bt(r.from || a) : o = bt(r),
        nt(o) ? Object.defineProperty(t, a, {
            enumerable: !0,
            configurable: !0,
            get: ()=>o.value,
            set: l=>o.value = l
        }) : t[a] = o
    }
}
function mu(e, t, n) {
    Gt(pe(e) ? e.map(a=>a.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Nh(e, t, n, a) {
    const r = a.includes(".") ? Jh(n, a) : ()=>n[a];
    if (Ye(e)) {
        const o = t[e];
        xe(o) && se(r, o)
    } else if (xe(e))
        se(r, e.bind(n));
    else if (Ue(e))
        if (pe(e))
            e.forEach(o=>Nh(o, t, n, a));
        else {
            const o = xe(e.handler) ? e.handler.bind(n) : t[e.handler];
            xe(o) && se(r, o, e)
        }
}
function bc(e) {
    const t = e.type
      , {mixins: n, extends: a} = t
      , {mixins: r, optionsCache: o, config: {optionMergeStrategies: l}} = e.appContext
      , i = o.get(t);
    let s;
    return i ? s = i : !r.length && !n && !a ? s = t : (s = {},
    r.length && r.forEach(c=>wl(s, c, l, !0)),
    wl(s, t, l)),
    Ue(t) && o.set(t, s),
    s
}
function wl(e, t, n, a=!1) {
    const {mixins: r, extends: o} = t;
    o && wl(e, o, n, !0),
    r && r.forEach(l=>wl(e, l, n, !0));
    for (const l in t)
        if (!(a && l === "expose")) {
            const i = ty[l] || n && n[l];
            e[l] = i ? i(e[l], t[l]) : t[l]
        }
    return e
}
const ty = {
    data: gu,
    props: vu,
    emits: vu,
    methods: nr,
    computed: nr,
    beforeCreate: Ot,
    created: Ot,
    beforeMount: Ot,
    mounted: Ot,
    beforeUpdate: Ot,
    updated: Ot,
    beforeDestroy: Ot,
    beforeUnmount: Ot,
    destroyed: Ot,
    unmounted: Ot,
    activated: Ot,
    deactivated: Ot,
    errorCaptured: Ot,
    serverPrefetch: Ot,
    components: nr,
    directives: nr,
    watch: ay,
    provide: gu,
    inject: ny
};
function gu(e, t) {
    return t ? e ? function() {
        return mt(xe(e) ? e.call(this, this) : e, xe(t) ? t.call(this, this) : t)
    }
    : t : e
}
function ny(e, t) {
    return nr(ms(e), ms(t))
}
function ms(e) {
    if (pe(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function Ot(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function nr(e, t) {
    return e ? mt(Object.create(null), e, t) : t
}
function vu(e, t) {
    return e ? pe(e) && pe(t) ? [...new Set([...e, ...t])] : mt(Object.create(null), hu(e), hu(t ?? {})) : t
}
function ay(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = mt(Object.create(null), e);
    for (const a in t)
        n[a] = Ot(e[a], t[a]);
    return n
}
function Mh() {
    return {
        app: null,
        config: {
            isNativeTag: Wv,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let oy = 0;
function ry(e, t) {
    return function(a, r=null) {
        xe(a) || (a = mt({}, a)),
        r != null && !Ue(r) && (r = null);
        const o = Mh()
          , l = new WeakSet;
        let i = !1;
        const s = o.app = {
            _uid: oy++,
            _component: a,
            _props: r,
            _container: null,
            _context: o,
            _instance: null,
            version: Hy,
            get config() {
                return o.config
            },
            set config(c) {},
            use(c, ...u) {
                return l.has(c) || (c && xe(c.install) ? (l.add(c),
                c.install(s, ...u)) : xe(c) && (l.add(c),
                c(s, ...u))),
                s
            },
            mixin(c) {
                return o.mixins.includes(c) || o.mixins.push(c),
                s
            },
            component(c, u) {
                return u ? (o.components[c] = u,
                s) : o.components[c]
            },
            directive(c, u) {
                return u ? (o.directives[c] = u,
                s) : o.directives[c]
            },
            mount(c, u, f) {
                if (!i) {
                    const d = h(a, r);
                    return d.appContext = o,
                    f === !0 ? f = "svg" : f === !1 && (f = void 0),
                    u && t ? t(d, c) : e(d, c, f),
                    i = !0,
                    s._container = c,
                    c.__vue_app__ = s,
                    Jl(d.component)
                }
            },
            unmount() {
                i && (e(null, s._container),
                delete s._container.__vue_app__)
            },
            provide(c, u) {
                return o.provides[c] = u,
                s
            },
            runWithContext(c) {
                const u = bo;
                bo = s;
                try {
                    return c()
                } finally {
                    bo = u
                }
            }
        };
        return s
    }
}
let bo = null;
function $n(e, t) {
    if (rt) {
        let n = rt.provides;
        const a = rt.parent && rt.parent.provides;
        a === n && (n = rt.provides = Object.create(a)),
        n[e] = t
    }
}
function bt(e, t, n=!1) {
    const a = rt || it;
    if (a || bo) {
        const r = a ? a.parent == null ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : bo._context.provides;
        if (r && e in r)
            return r[e];
        if (arguments.length > 1)
            return n && xe(t) ? t.call(a && a.proxy) : t
    }
}
function ly() {
    return !!(rt || it || bo)
}
const Bh = {}
  , Fh = ()=>Object.create(Bh)
  , Vh = e=>Object.getPrototypeOf(e) === Bh;
function iy(e, t, n, a=!1) {
    const r = {}
      , o = Fh();
    e.propsDefaults = Object.create(null),
    Hh(e, t, r, o);
    for (const l in e.propsOptions[0])
        l in r || (r[l] = void 0);
    n ? e.props = a ? r : vh(r) : e.type.props ? e.props = r : e.props = o,
    e.attrs = o
}
function sy(e, t, n, a) {
    const {props: r, attrs: o, vnode: {patchFlag: l}} = e
      , i = Be(r)
      , [s] = e.propsOptions;
    let c = !1;
    if ((a || l > 0) && !(l & 16)) {
        if (l & 8) {
            const u = e.vnode.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                let d = u[f];
                if (Xl(e.emitsOptions, d))
                    continue;
                const m = t[d];
                if (s)
                    if (Ne(o, d))
                        m !== o[d] && (o[d] = m,
                        c = !0);
                    else {
                        const y = ln(d);
                        r[y] = gs(s, i, y, m, e, !1)
                    }
                else
                    m !== o[d] && (o[d] = m,
                    c = !0)
            }
        }
    } else {
        Hh(e, t, r, o) && (c = !0);
        let u;
        for (const f in i)
            (!t || !Ne(t, f) && ((u = Wn(f)) === f || !Ne(t, u))) && (s ? n && (n[f] !== void 0 || n[u] !== void 0) && (r[f] = gs(s, i, f, void 0, e, !0)) : delete r[f]);
        if (o !== i)
            for (const f in o)
                (!t || !Ne(t, f)) && (delete o[f],
                c = !0)
    }
    c && Dn(e.attrs, "set", "")
}
function Hh(e, t, n, a) {
    const [r,o] = e.propsOptions;
    let l = !1, i;
    if (t)
        for (let s in t) {
            if (ar(s))
                continue;
            const c = t[s];
            let u;
            r && Ne(r, u = ln(s)) ? !o || !o.includes(u) ? n[u] = c : (i || (i = {}))[u] = c : Xl(e.emitsOptions, s) || (!(s in a) || c !== a[s]) && (a[s] = c,
            l = !0)
        }
    if (o) {
        const s = Be(n)
          , c = i || qe;
        for (let u = 0; u < o.length; u++) {
            const f = o[u];
            n[f] = gs(r, s, f, c[f], e, !Ne(c, f))
        }
    }
    return l
}
function gs(e, t, n, a, r, o) {
    const l = e[n];
    if (l != null) {
        const i = Ne(l, "default");
        if (i && a === void 0) {
            const s = l.default;
            if (l.type !== Function && !l.skipFactory && xe(s)) {
                const {propsDefaults: c} = r;
                if (n in c)
                    a = c[n];
                else {
                    const u = Ar(r);
                    a = c[n] = s.call(null, t),
                    u()
                }
            } else
                a = s
        }
        l[0] && (o && !i ? a = !1 : l[1] && (a === "" || a === Wn(n)) && (a = !0))
    }
    return a
}
const cy = new WeakMap;
function Uh(e, t, n=!1) {
    const a = n ? cy : t.propsCache
      , r = a.get(e);
    if (r)
        return r;
    const o = e.props
      , l = {}
      , i = [];
    let s = !1;
    if (!xe(e)) {
        const u = f=>{
            s = !0;
            const [d,m] = Uh(f, t, !0);
            mt(l, d),
            m && i.push(...m)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    if (!o && !s)
        return Ue(e) && a.set(e, fo),
        fo;
    if (pe(o))
        for (let u = 0; u < o.length; u++) {
            const f = ln(o[u]);
            bu(f) && (l[f] = qe)
        }
    else if (o)
        for (const u in o) {
            const f = ln(u);
            if (bu(f)) {
                const d = o[u]
                  , m = l[f] = pe(d) || xe(d) ? {
                    type: d
                } : mt({}, d)
                  , y = m.type;
                let w = !1
                  , p = !0;
                if (pe(y))
                    for (let C = 0; C < y.length; ++C) {
                        const g = y[C]
                          , v = xe(g) && g.name;
                        if (v === "Boolean") {
                            w = !0;
                            break
                        } else
                            v === "String" && (p = !1)
                    }
                else
                    w = xe(y) && y.name === "Boolean";
                m[0] = w,
                m[1] = p,
                (w || Ne(m, "default")) && i.push(f)
            }
        }
    const c = [l, i];
    return Ue(e) && a.set(e, c),
    c
}
function bu(e) {
    return e[0] !== "$" && !ar(e)
}
const Wh = e=>e[0] === "_" || e === "$stable"
  , yc = e=>pe(e) ? e.map(vn) : [vn(e)]
  , uy = (e,t,n)=>{
    if (t._n)
        return t;
    const a = Fb((...r)=>yc(t(...r)), n);
    return a._c = !1,
    a
}
  , jh = (e,t,n)=>{
    const a = e._ctx;
    for (const r in e) {
        if (Wh(r))
            continue;
        const o = e[r];
        if (xe(o))
            t[r] = uy(r, o, a);
        else if (o != null) {
            const l = yc(o);
            t[r] = ()=>l
        }
    }
}
  , zh = (e,t)=>{
    const n = yc(t);
    e.slots.default = ()=>n
}
  , Yh = (e,t,n)=>{
    for (const a in t)
        (n || a !== "_") && (e[a] = t[a])
}
  , fy = (e,t,n)=>{
    const a = e.slots = Fh();
    if (e.vnode.shapeFlag & 32) {
        const r = t._;
        r ? (Yh(a, t, n),
        n && Jd(a, "_", r, !0)) : jh(t, a)
    } else
        t && zh(e, t)
}
  , dy = (e,t,n)=>{
    const {vnode: a, slots: r} = e;
    let o = !0
      , l = qe;
    if (a.shapeFlag & 32) {
        const i = t._;
        i ? n && i === 1 ? o = !1 : Yh(r, t, n) : (o = !t.$stable,
        jh(t, r)),
        l = t
    } else
        t && (zh(e, t),
        l = {
            default: 1
        });
    if (o)
        for (const i in r)
            !Wh(i) && l[i] == null && delete r[i]
}
;
function vs(e, t, n, a, r=!1) {
    if (pe(e)) {
        e.forEach((d,m)=>vs(d, t && (pe(t) ? t[m] : t), n, a, r));
        return
    }
    if (vo(a) && !r)
        return;
    const o = a.shapeFlag & 4 ? Jl(a.component) : a.el
      , l = r ? null : o
      , {i, r: s} = e
      , c = t && t.r
      , u = i.refs === qe ? i.refs = {} : i.refs
      , f = i.setupState;
    if (c != null && c !== s && (Ye(c) ? (u[c] = null,
    Ne(f, c) && (f[c] = null)) : nt(c) && (c.value = null)),
    xe(s))
        ha(s, i, 12, [l, u]);
    else {
        const d = Ye(s)
          , m = nt(s);
        if (d || m) {
            const y = ()=>{
                if (e.f) {
                    const w = d ? Ne(f, s) ? f[s] : u[s] : s.value;
                    r ? pe(w) && ec(w, o) : pe(w) ? w.includes(o) || w.push(o) : d ? (u[s] = [o],
                    Ne(f, s) && (f[s] = u[s])) : (s.value = [o],
                    e.k && (u[e.k] = s.value))
                } else
                    d ? (u[s] = l,
                    Ne(f, s) && (f[s] = l)) : m && (s.value = l,
                    e.k && (u[e.k] = l))
            }
            ;
            l ? (y.id = -1,
            ut(y, n)) : y()
        }
    }
}
const Gh = Symbol("_vte")
  , hy = e=>e.__isTeleport
  , rr = e=>e && (e.disabled || e.disabled === "")
  , yu = e=>typeof SVGElement < "u" && e instanceof SVGElement
  , pu = e=>typeof MathMLElement == "function" && e instanceof MathMLElement
  , bs = (e,t)=>{
    const n = e && e.to;
    return Ye(n) ? t ? t(n) : null : n
}
  , my = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, a, r, o, l, i, s, c) {
        const {mc: u, pc: f, pbc: d, o: {insert: m, querySelector: y, createText: w, createComment: p}} = c
          , C = rr(t.props);
        let {shapeFlag: g, children: v, dynamicChildren: b} = t;
        if (e == null) {
            const _ = t.el = w("")
              , S = t.anchor = w("");
            m(_, n, a),
            m(S, n, a);
            const A = t.target = bs(t.props, y)
              , E = Xh(A, t, w, m);
            A && (l === "svg" || yu(A) ? l = "svg" : (l === "mathml" || pu(A)) && (l = "mathml"));
            const T = (D,k)=>{
                g & 16 && u(v, D, k, r, o, l, i, s)
            }
            ;
            C ? T(n, S) : A && T(A, E)
        } else {
            t.el = e.el,
            t.targetStart = e.targetStart;
            const _ = t.anchor = e.anchor
              , S = t.target = e.target
              , A = t.targetAnchor = e.targetAnchor
              , E = rr(e.props)
              , T = E ? n : S
              , D = E ? _ : A;
            if (l === "svg" || yu(S) ? l = "svg" : (l === "mathml" || pu(S)) && (l = "mathml"),
            b ? (d(e.dynamicChildren, b, T, r, o, l, i),
            pc(e, t, !0)) : s || f(e, t, T, D, r, o, l, i, !1),
            C)
                E ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Hr(t, n, _, c, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const k = t.target = bs(t.props, y);
                k && Hr(t, k, null, c, 0)
            } else
                E && Hr(t, S, A, c, 1)
        }
        Kh(t)
    },
    remove(e, t, n, {um: a, o: {remove: r}}, o) {
        const {shapeFlag: l, children: i, anchor: s, targetStart: c, targetAnchor: u, target: f, props: d} = e;
        if (f && (r(c),
        r(u)),
        o && r(s),
        l & 16) {
            const m = o || !rr(d);
            for (let y = 0; y < i.length; y++) {
                const w = i[y];
                a(w, t, n, m, !!w.dynamicChildren)
            }
        }
    },
    move: Hr,
    hydrate: gy
};
function Hr(e, t, n, {o: {insert: a}, m: r}, o=2) {
    o === 0 && a(e.targetAnchor, t, n);
    const {el: l, anchor: i, shapeFlag: s, children: c, props: u} = e
      , f = o === 2;
    if (f && a(l, t, n),
    (!f || rr(u)) && s & 16)
        for (let d = 0; d < c.length; d++)
            r(c[d], t, n, 2);
    f && a(i, t, n)
}
function gy(e, t, n, a, r, o, {o: {nextSibling: l, parentNode: i, querySelector: s, insert: c, createText: u}}, f) {
    const d = t.target = bs(t.props, s);
    if (d) {
        const m = d._lpa || d.firstChild;
        if (t.shapeFlag & 16)
            if (rr(t.props))
                t.anchor = f(l(e), t, i(e), n, a, r, o),
                t.targetStart = m,
                t.targetAnchor = m && l(m);
            else {
                t.anchor = l(e);
                let y = m;
                for (; y; ) {
                    if (y && y.nodeType === 8) {
                        if (y.data === "teleport start anchor")
                            t.targetStart = y;
                        else if (y.data === "teleport anchor") {
                            t.targetAnchor = y,
                            d._lpa = t.targetAnchor && l(t.targetAnchor);
                            break
                        }
                    }
                    y = l(y)
                }
                t.targetAnchor || Xh(d, t, u, c),
                f(m && l(m), t, d, n, a, r, o)
            }
        Kh(t)
    }
    return t.anchor && l(t.anchor)
}
const ja = my;
function Kh(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor; )
            n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
            n = n.nextSibling;
        t.ut()
    }
}
function Xh(e, t, n, a) {
    const r = t.targetStart = n("")
      , o = t.targetAnchor = n("");
    return r[Gh] = o,
    e && (a(r, e),
    a(o, e)),
    o
}
const ut = Ay;
function vy(e) {
    return by(e)
}
function by(e, t) {
    const n = Zd();
    n.__VUE__ = !0;
    const {insert: a, remove: r, patchProp: o, createElement: l, createText: i, createComment: s, setText: c, setElementText: u, parentNode: f, nextSibling: d, setScopeId: m=Yt, insertStaticContent: y} = e
      , w = (R,x,M,Q=null,Y=null,le=null,de=void 0,I=null,P=!!x.dynamicChildren)=>{
        if (R === x)
            return;
        R && !ua(R, x) && (Q = L(R),
        J(R, Y, le, !0),
        R = null),
        x.patchFlag === -2 && (P = !1,
        x.dynamicChildren = null);
        const {type: $, ref: G, shapeFlag: fe} = x;
        switch ($) {
        case Do:
            p(R, x, M, Q);
            break;
        case St:
            C(R, x, M, Q);
            break;
        case dl:
            R == null && g(x, M, Q, de);
            break;
        case Je:
            O(R, x, M, Q, Y, le, de, I, P);
            break;
        default:
            fe & 1 ? _(R, x, M, Q, Y, le, de, I, P) : fe & 6 ? N(R, x, M, Q, Y, le, de, I, P) : (fe & 64 || fe & 128) && $.process(R, x, M, Q, Y, le, de, I, P, ne)
        }
        G != null && Y && vs(G, R && R.ref, le, x || R, !x)
    }
      , p = (R,x,M,Q)=>{
        if (R == null)
            a(x.el = i(x.children), M, Q);
        else {
            const Y = x.el = R.el;
            x.children !== R.children && c(Y, x.children)
        }
    }
      , C = (R,x,M,Q)=>{
        R == null ? a(x.el = s(x.children || ""), M, Q) : x.el = R.el
    }
      , g = (R,x,M,Q)=>{
        [R.el,R.anchor] = y(R.children, x, M, Q, R.el, R.anchor)
    }
      , v = ({el: R, anchor: x},M,Q)=>{
        let Y;
        for (; R && R !== x; )
            Y = d(R),
            a(R, M, Q),
            R = Y;
        a(x, M, Q)
    }
      , b = ({el: R, anchor: x})=>{
        let M;
        for (; R && R !== x; )
            M = d(R),
            r(R),
            R = M;
        r(x)
    }
      , _ = (R,x,M,Q,Y,le,de,I,P)=>{
        x.type === "svg" ? de = "svg" : x.type === "math" && (de = "mathml"),
        R == null ? S(x, M, Q, Y, le, de, I, P) : T(R, x, Y, le, de, I, P)
    }
      , S = (R,x,M,Q,Y,le,de,I)=>{
        let P, $;
        const {props: G, shapeFlag: fe, transition: ae, dirs: B} = R;
        if (P = R.el = l(R.type, le, G && G.is, G),
        fe & 8 ? u(P, R.children) : fe & 16 && E(R.children, P, null, Q, Y, ki(R, le), de, I),
        B && Ea(R, null, Q, "created"),
        A(P, R, R.scopeId, de, Q),
        G) {
            for (const we in G)
                we !== "value" && !ar(we) && o(P, we, null, G[we], le, Q);
            "value"in G && o(P, "value", null, G.value, le),
            ($ = G.onVnodeBeforeMount) && Wt($, Q, R)
        }
        B && Ea(R, null, Q, "beforeMount");
        const z = yy(Y, ae);
        z && ae.beforeEnter(P),
        a(P, x, M),
        (($ = G && G.onVnodeMounted) || z || B) && ut(()=>{
            $ && Wt($, Q, R),
            z && ae.enter(P),
            B && Ea(R, null, Q, "mounted")
        }
        , Y)
    }
      , A = (R,x,M,Q,Y)=>{
        if (M && m(R, M),
        Q)
            for (let le = 0; le < Q.length; le++)
                m(R, Q[le]);
        if (Y) {
            let le = Y.subTree;
            if (x === le) {
                const de = Y.vnode;
                A(R, de, de.scopeId, de.slotScopeIds, Y.parent)
            }
        }
    }
      , E = (R,x,M,Q,Y,le,de,I,P=0)=>{
        for (let $ = P; $ < R.length; $++) {
            const G = R[$] = I ? ia(R[$]) : vn(R[$]);
            w(null, G, x, M, Q, Y, le, de, I)
        }
    }
      , T = (R,x,M,Q,Y,le,de)=>{
        const I = x.el = R.el;
        let {patchFlag: P, dynamicChildren: $, dirs: G} = x;
        P |= R.patchFlag & 16;
        const fe = R.props || qe
          , ae = x.props || qe;
        let B;
        if (M && Ta(M, !1),
        (B = ae.onVnodeBeforeUpdate) && Wt(B, M, x, R),
        G && Ea(x, R, M, "beforeUpdate"),
        M && Ta(M, !0),
        (fe.innerHTML && ae.innerHTML == null || fe.textContent && ae.textContent == null) && u(I, ""),
        $ ? D(R.dynamicChildren, $, I, M, Q, ki(x, Y), le) : de || ue(R, x, I, null, M, Q, ki(x, Y), le, !1),
        P > 0) {
            if (P & 16)
                k(I, fe, ae, M, Y);
            else if (P & 2 && fe.class !== ae.class && o(I, "class", null, ae.class, Y),
            P & 4 && o(I, "style", fe.style, ae.style, Y),
            P & 8) {
                const z = x.dynamicProps;
                for (let we = 0; we < z.length; we++) {
                    const Ce = z[we]
                      , He = fe[Ce]
                      , wt = ae[Ce];
                    (wt !== He || Ce === "value") && o(I, Ce, He, wt, Y, M)
                }
            }
            P & 1 && R.children !== x.children && u(I, x.children)
        } else
            !de && $ == null && k(I, fe, ae, M, Y);
        ((B = ae.onVnodeUpdated) || G) && ut(()=>{
            B && Wt(B, M, x, R),
            G && Ea(x, R, M, "updated")
        }
        , Q)
    }
      , D = (R,x,M,Q,Y,le,de)=>{
        for (let I = 0; I < x.length; I++) {
            const P = R[I]
              , $ = x[I]
              , G = P.el && (P.type === Je || !ua(P, $) || P.shapeFlag & 70) ? f(P.el) : M;
            w(P, $, G, null, Q, Y, le, de, !0)
        }
    }
      , k = (R,x,M,Q,Y)=>{
        if (x !== M) {
            if (x !== qe)
                for (const le in x)
                    !ar(le) && !(le in M) && o(R, le, x[le], null, Y, Q);
            for (const le in M) {
                if (ar(le))
                    continue;
                const de = M[le]
                  , I = x[le];
                de !== I && le !== "value" && o(R, le, I, de, Y, Q)
            }
            "value"in M && o(R, "value", x.value, M.value, Y)
        }
    }
      , O = (R,x,M,Q,Y,le,de,I,P)=>{
        const $ = x.el = R ? R.el : i("")
          , G = x.anchor = R ? R.anchor : i("");
        let {patchFlag: fe, dynamicChildren: ae, slotScopeIds: B} = x;
        B && (I = I ? I.concat(B) : B),
        R == null ? (a($, M, Q),
        a(G, M, Q),
        E(x.children || [], M, G, Y, le, de, I, P)) : fe > 0 && fe & 64 && ae && R.dynamicChildren ? (D(R.dynamicChildren, ae, M, Y, le, de, I),
        (x.key != null || Y && x === Y.subTree) && pc(R, x, !0)) : ue(R, x, M, G, Y, le, de, I, P)
    }
      , N = (R,x,M,Q,Y,le,de,I,P)=>{
        x.slotScopeIds = I,
        R == null ? x.shapeFlag & 512 ? Y.ctx.activate(x, M, Q, de, P) : Z(x, M, Q, Y, le, de, P) : ce(R, x, P)
    }
      , Z = (R,x,M,Q,Y,le,de)=>{
        const I = R.component = $y(R, Q, Y);
        if (Ir(R) && (I.ctx.renderer = ne),
        Ny(I, !1, de),
        I.asyncDep) {
            if (Y && Y.registerDep(I, j, de),
            !R.el) {
                const P = I.subTree = h(St);
                C(null, P, x, M)
            }
        } else
            j(I, R, x, M, Y, le, de)
    }
      , ce = (R,x,M)=>{
        const Q = x.component = R.component;
        if (ky(R, x, M))
            if (Q.asyncDep && !Q.asyncResolved) {
                ee(Q, x, M);
                return
            } else
                Q.next = x,
                Db(Q.update),
                Q.effect.dirty = !0,
                Q.update();
        else
            x.el = R.el,
            Q.vnode = x
    }
      , j = (R,x,M,Q,Y,le,de)=>{
        const I = ()=>{
            if (R.isMounted) {
                let {next: G, bu: fe, u: ae, parent: B, vnode: z} = R;
                {
                    const Dt = qh(R);
                    if (Dt) {
                        G && (G.el = z.el,
                        ee(R, G, de)),
                        Dt.asyncDep.then(()=>{
                            R.isUnmounted || I()
                        }
                        );
                        return
                    }
                }
                let we = G, Ce;
                Ta(R, !1),
                G ? (G.el = z.el,
                ee(R, G, de)) : G = z,
                fe && mo(fe),
                (Ce = G.props && G.props.onVnodeBeforeUpdate) && Wt(Ce, B, G, z),
                Ta(R, !0);
                const He = Ii(R)
                  , wt = R.subTree;
                R.subTree = He,
                w(wt, He, f(wt.el), L(wt), R, Y, le),
                G.el = He.el,
                we === null && Iy(R, He.el),
                ae && ut(ae, Y),
                (Ce = G.props && G.props.onVnodeUpdated) && ut(()=>Wt(Ce, B, G, z), Y)
            } else {
                let G;
                const {el: fe, props: ae} = x
                  , {bm: B, m: z, parent: we} = R
                  , Ce = vo(x);
                if (Ta(R, !1),
                B && mo(B),
                !Ce && (G = ae && ae.onVnodeBeforeMount) && Wt(G, we, x),
                Ta(R, !0),
                fe && Se) {
                    const He = ()=>{
                        R.subTree = Ii(R),
                        Se(fe, R.subTree, R, Y, null)
                    }
                    ;
                    Ce ? x.type.__asyncLoader().then(()=>!R.isUnmounted && He()) : He()
                } else {
                    const He = R.subTree = Ii(R);
                    w(null, He, M, Q, R, Y, le),
                    x.el = He.el
                }
                if (z && ut(z, Y),
                !Ce && (G = ae && ae.onVnodeMounted)) {
                    const He = x;
                    ut(()=>Wt(G, we, He), Y)
                }
                (x.shapeFlag & 256 || we && vo(we.vnode) && we.vnode.shapeFlag & 256) && R.a && ut(R.a, Y),
                R.isMounted = !0,
                x = M = Q = null
            }
        }
          , P = R.effect = new ac(I,Yt,()=>Yl($),R.scope)
          , $ = R.update = ()=>{
            P.dirty && P.run()
        }
        ;
        $.i = R,
        $.id = R.uid,
        Ta(R, !0),
        $()
    }
      , ee = (R,x,M)=>{
        x.component = R;
        const Q = R.vnode.props;
        R.vnode = x,
        R.next = null,
        sy(R, x.props, Q, M),
        dy(R, x.children, M),
        va(),
        uu(R),
        ba()
    }
      , ue = (R,x,M,Q,Y,le,de,I,P=!1)=>{
        const $ = R && R.children
          , G = R ? R.shapeFlag : 0
          , fe = x.children
          , {patchFlag: ae, shapeFlag: B} = x;
        if (ae > 0) {
            if (ae & 128) {
                Pe($, fe, M, Q, Y, le, de, I, P);
                return
            } else if (ae & 256) {
                Te($, fe, M, Q, Y, le, de, I, P);
                return
            }
        }
        B & 8 ? (G & 16 && me($, Y, le),
        fe !== $ && u(M, fe)) : G & 16 ? B & 16 ? Pe($, fe, M, Q, Y, le, de, I, P) : me($, Y, le, !0) : (G & 8 && u(M, ""),
        B & 16 && E(fe, M, Q, Y, le, de, I, P))
    }
      , Te = (R,x,M,Q,Y,le,de,I,P)=>{
        R = R || fo,
        x = x || fo;
        const $ = R.length
          , G = x.length
          , fe = Math.min($, G);
        let ae;
        for (ae = 0; ae < fe; ae++) {
            const B = x[ae] = P ? ia(x[ae]) : vn(x[ae]);
            w(R[ae], B, M, null, Y, le, de, I, P)
        }
        $ > G ? me(R, Y, le, !0, !1, fe) : E(x, M, Q, Y, le, de, I, P, fe)
    }
      , Pe = (R,x,M,Q,Y,le,de,I,P)=>{
        let $ = 0;
        const G = x.length;
        let fe = R.length - 1
          , ae = G - 1;
        for (; $ <= fe && $ <= ae; ) {
            const B = R[$]
              , z = x[$] = P ? ia(x[$]) : vn(x[$]);
            if (ua(B, z))
                w(B, z, M, null, Y, le, de, I, P);
            else
                break;
            $++
        }
        for (; $ <= fe && $ <= ae; ) {
            const B = R[fe]
              , z = x[ae] = P ? ia(x[ae]) : vn(x[ae]);
            if (ua(B, z))
                w(B, z, M, null, Y, le, de, I, P);
            else
                break;
            fe--,
            ae--
        }
        if ($ > fe) {
            if ($ <= ae) {
                const B = ae + 1
                  , z = B < G ? x[B].el : Q;
                for (; $ <= ae; )
                    w(null, x[$] = P ? ia(x[$]) : vn(x[$]), M, z, Y, le, de, I, P),
                    $++
            }
        } else if ($ > ae)
            for (; $ <= fe; )
                J(R[$], Y, le, !0),
                $++;
        else {
            const B = $
              , z = $
              , we = new Map;
            for ($ = z; $ <= ae; $++) {
                const $t = x[$] = P ? ia(x[$]) : vn(x[$]);
                $t.key != null && we.set($t.key, $)
            }
            let Ce, He = 0;
            const wt = ae - z + 1;
            let Dt = !1
              , Lr = 0;
            const Ga = new Array(wt);
            for ($ = 0; $ < wt; $++)
                Ga[$] = 0;
            for ($ = B; $ <= fe; $++) {
                const $t = R[$];
                if (He >= wt) {
                    J($t, Y, le, !0);
                    continue
                }
                let hn;
                if ($t.key != null)
                    hn = we.get($t.key);
                else
                    for (Ce = z; Ce <= ae; Ce++)
                        if (Ga[Ce - z] === 0 && ua($t, x[Ce])) {
                            hn = Ce;
                            break
                        }
                hn === void 0 ? J($t, Y, le, !0) : (Ga[hn - z] = $ + 1,
                hn >= Lr ? Lr = hn : Dt = !0,
                w($t, x[hn], M, null, Y, le, de, I, P),
                He++)
            }
            const Qc = Dt ? py(Ga) : fo;
            for (Ce = Qc.length - 1,
            $ = wt - 1; $ >= 0; $--) {
                const $t = z + $
                  , hn = x[$t]
                  , eu = $t + 1 < G ? x[$t + 1].el : Q;
                Ga[$] === 0 ? w(null, hn, M, eu, Y, le, de, I, P) : Dt && (Ce < 0 || $ !== Qc[Ce] ? H(hn, M, eu, 2) : Ce--)
            }
        }
    }
      , H = (R,x,M,Q,Y=null)=>{
        const {el: le, type: de, transition: I, children: P, shapeFlag: $} = R;
        if ($ & 6) {
            H(R.component.subTree, x, M, Q);
            return
        }
        if ($ & 128) {
            R.suspense.move(x, M, Q);
            return
        }
        if ($ & 64) {
            de.move(R, x, M, ne);
            return
        }
        if (de === Je) {
            a(le, x, M);
            for (let fe = 0; fe < P.length; fe++)
                H(P[fe], x, M, Q);
            a(R.anchor, x, M);
            return
        }
        if (de === dl) {
            v(R, x, M);
            return
        }
        if (Q !== 2 && $ & 1 && I)
            if (Q === 0)
                I.beforeEnter(le),
                a(le, x, M),
                ut(()=>I.enter(le), Y);
            else {
                const {leave: fe, delayLeave: ae, afterLeave: B} = I
                  , z = ()=>a(le, x, M)
                  , we = ()=>{
                    fe(le, ()=>{
                        z(),
                        B && B()
                    }
                    )
                }
                ;
                ae ? ae(le, z, we) : we()
            }
        else
            a(le, x, M)
    }
      , J = (R,x,M,Q=!1,Y=!1)=>{
        const {type: le, props: de, ref: I, children: P, dynamicChildren: $, shapeFlag: G, patchFlag: fe, dirs: ae, cacheIndex: B} = R;
        if (fe === -2 && (Y = !1),
        I != null && vs(I, null, M, R, !0),
        B != null && (x.renderCache[B] = void 0),
        G & 256) {
            x.ctx.deactivate(R);
            return
        }
        const z = G & 1 && ae
          , we = !vo(R);
        let Ce;
        if (we && (Ce = de && de.onVnodeBeforeUnmount) && Wt(Ce, x, R),
        G & 6)
            ie(R.component, M, Q);
        else {
            if (G & 128) {
                R.suspense.unmount(M, Q);
                return
            }
            z && Ea(R, null, x, "beforeUnmount"),
            G & 64 ? R.type.remove(R, x, M, ne, Q) : $ && !$.hasOnce && (le !== Je || fe > 0 && fe & 64) ? me($, x, M, !1, !0) : (le === Je && fe & 384 || !Y && G & 16) && me(P, x, M),
            Q && he(R)
        }
        (we && (Ce = de && de.onVnodeUnmounted) || z) && ut(()=>{
            Ce && Wt(Ce, x, R),
            z && Ea(R, null, x, "unmounted")
        }
        , M)
    }
      , he = R=>{
        const {type: x, el: M, anchor: Q, transition: Y} = R;
        if (x === Je) {
            be(M, Q);
            return
        }
        if (x === dl) {
            b(R);
            return
        }
        const le = ()=>{
            r(M),
            Y && !Y.persisted && Y.afterLeave && Y.afterLeave()
        }
        ;
        if (R.shapeFlag & 1 && Y && !Y.persisted) {
            const {leave: de, delayLeave: I} = Y
              , P = ()=>de(M, le);
            I ? I(R.el, le, P) : P()
        } else
            le()
    }
      , be = (R,x)=>{
        let M;
        for (; R !== x; )
            M = d(R),
            r(R),
            R = M;
        r(x)
    }
      , ie = (R,x,M)=>{
        const {bum: Q, scope: Y, update: le, subTree: de, um: I, m: P, a: $} = R;
        Cl(P),
        Cl($),
        Q && mo(Q),
        Y.stop(),
        le && (le.active = !1,
        J(de, R, x, M)),
        I && ut(I, x),
        ut(()=>{
            R.isUnmounted = !0
        }
        , x),
        x && x.pendingBranch && !x.isUnmounted && R.asyncDep && !R.asyncResolved && R.suspenseId === x.pendingId && (x.deps--,
        x.deps === 0 && x.resolve())
    }
      , me = (R,x,M,Q=!1,Y=!1,le=0)=>{
        for (let de = le; de < R.length; de++)
            J(R[de], x, M, Q, Y)
    }
      , L = R=>{
        if (R.shapeFlag & 6)
            return L(R.component.subTree);
        if (R.shapeFlag & 128)
            return R.suspense.next();
        const x = d(R.anchor || R.el)
          , M = x && x[Gh];
        return M ? d(M) : x
    }
    ;
    let U = !1;
    const W = (R,x,M)=>{
        R == null ? x._vnode && J(x._vnode, null, null, !0) : w(x._vnode || null, R, x, null, null, null, M),
        U || (U = !0,
        uu(),
        Th(),
        U = !1),
        x._vnode = R
    }
      , ne = {
        p: w,
        um: J,
        m: H,
        r: he,
        mt: Z,
        mc: E,
        pc: ue,
        pbc: D,
        n: L,
        o: e
    };
    let ye, Se;
    return {
        render: W,
        hydrate: ye,
        createApp: ry(W, ye)
    }
}
function ki({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function Ta({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function yy(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function pc(e, t, n=!1) {
    const a = e.children
      , r = t.children;
    if (pe(a) && pe(r))
        for (let o = 0; o < a.length; o++) {
            const l = a[o];
            let i = r[o];
            i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[o] = ia(r[o]),
            i.el = l.el),
            !n && i.patchFlag !== -2 && pc(l, i)),
            i.type === Do && (i.el = l.el)
        }
}
function py(e) {
    const t = e.slice()
      , n = [0];
    let a, r, o, l, i;
    const s = e.length;
    for (a = 0; a < s; a++) {
        const c = e[a];
        if (c !== 0) {
            if (r = n[n.length - 1],
            e[r] < c) {
                t[a] = r,
                n.push(a);
                continue
            }
            for (o = 0,
            l = n.length - 1; o < l; )
                i = o + l >> 1,
                e[n[i]] < c ? o = i + 1 : l = i;
            c < e[n[o]] && (o > 0 && (t[a] = n[o - 1]),
            n[o] = a)
        }
    }
    for (o = n.length,
    l = n[o - 1]; o-- > 0; )
        n[o] = l,
        l = t[l];
    return n
}
function qh(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : qh(t)
}
function Cl(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].active = !1
}
const _y = Symbol.for("v-scx")
  , wy = ()=>bt(_y);
function Lo(e, t) {
    return _c(e, null, t)
}
const Ur = {};
function se(e, t, n) {
    return _c(e, t, n)
}
function _c(e, t, {immediate: n, deep: a, flush: r, once: o, onTrack: l, onTrigger: i}=qe) {
    if (t && o) {
        const S = t;
        t = (...A)=>{
            S(...A),
            _()
        }
    }
    const s = rt
      , c = S=>a === !0 ? S : ca(S, a === !1 ? 1 : void 0);
    let u, f = !1, d = !1;
    if (nt(e) ? (u = ()=>e.value,
    f = Co(e)) : Ba(e) ? (u = ()=>c(e),
    f = !0) : pe(e) ? (d = !0,
    f = e.some(S=>Ba(S) || Co(S)),
    u = ()=>e.map(S=>{
        if (nt(S))
            return S.value;
        if (Ba(S))
            return c(S);
        if (xe(S))
            return ha(S, s, 2)
    }
    )) : xe(e) ? t ? u = ()=>ha(e, s, 2) : u = ()=>(m && m(),
    Gt(e, s, 3, [y])) : u = Yt,
    t && a) {
        const S = u;
        u = ()=>ca(S())
    }
    let m, y = S=>{
        m = v.onStop = ()=>{
            ha(S, s, 4),
            m = v.onStop = void 0
        }
    }
    , w;
    if (Or)
        if (y = Yt,
        t ? n && Gt(t, s, 3, [u(), d ? [] : void 0, y]) : u(),
        r === "sync") {
            const S = wy();
            w = S.__watcherHandles || (S.__watcherHandles = [])
        } else
            return Yt;
    let p = d ? new Array(e.length).fill(Ur) : Ur;
    const C = ()=>{
        if (!(!v.active || !v.dirty))
            if (t) {
                const S = v.run();
                (a || f || (d ? S.some((A,E)=>ma(A, p[E])) : ma(S, p))) && (m && m(),
                Gt(t, s, 3, [S, p === Ur ? void 0 : d && p[0] === Ur ? [] : p, y]),
                p = S)
            } else
                v.run()
    }
    ;
    C.allowRecurse = !!t;
    let g;
    r === "sync" ? g = C : r === "post" ? g = ()=>ut(C, s && s.suspense) : (C.pre = !0,
    s && (C.id = s.uid),
    g = ()=>Yl(C));
    const v = new ac(u,Yt,g)
      , b = oh()
      , _ = ()=>{
        v.stop(),
        b && ec(b.effects, v)
    }
    ;
    return t ? n ? C() : p = v.run() : r === "post" ? ut(v.run.bind(v), s && s.suspense) : v.run(),
    w && w.push(_),
    _
}
function Cy(e, t, n) {
    const a = this.proxy
      , r = Ye(e) ? e.includes(".") ? Jh(a, e) : ()=>a[e] : e.bind(a, a);
    let o;
    xe(t) ? o = t : (o = t.handler,
    n = t);
    const l = Ar(this)
      , i = _c(r, o.bind(a), n);
    return l(),
    i
}
function Jh(e, t) {
    const n = t.split(".");
    return ()=>{
        let a = e;
        for (let r = 0; r < n.length && a; r++)
            a = a[n[r]];
        return a
    }
}
function ca(e, t=1 / 0, n) {
    if (t <= 0 || !Ue(e) || e.__v_skip || (n = n || new Set,
    n.has(e)))
        return e;
    if (n.add(e),
    t--,
    nt(e))
        ca(e.value, t, n);
    else if (pe(e))
        for (let a = 0; a < e.length; a++)
            ca(e[a], t, n);
    else if (Fl(e) || ho(e))
        e.forEach(a=>{
            ca(a, t, n)
        }
        );
    else if (qd(e)) {
        for (const a in e)
            ca(e[a], t, n);
        for (const a of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, a) && ca(e[a], t, n)
    }
    return e
}
const Sy = (e,t)=>t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ln(t)}Modifiers`] || e[`${Wn(t)}Modifiers`];
function Ey(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const a = e.vnode.props || qe;
    let r = n;
    const o = t.startsWith("update:")
      , l = o && Sy(a, t.slice(7));
    l && (l.trim && (r = n.map(u=>Ye(u) ? u.trim() : u)),
    l.number && (r = n.map(ls)));
    let i, s = a[i = wi(t)] || a[i = wi(ln(t))];
    !s && o && (s = a[i = wi(Wn(t))]),
    s && Gt(s, e, 6, r);
    const c = a[i + "Once"];
    if (c) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[i])
            return;
        e.emitted[i] = !0,
        Gt(c, e, 6, r)
    }
}
function Zh(e, t, n=!1) {
    const a = t.emitsCache
      , r = a.get(e);
    if (r !== void 0)
        return r;
    const o = e.emits;
    let l = {}
      , i = !1;
    if (!xe(e)) {
        const s = c=>{
            const u = Zh(c, t, !0);
            u && (i = !0,
            mt(l, u))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(s),
        e.extends && s(e.extends),
        e.mixins && e.mixins.forEach(s)
    }
    return !o && !i ? (Ue(e) && a.set(e, null),
    null) : (pe(o) ? o.forEach(s=>l[s] = null) : mt(l, o),
    Ue(e) && a.set(e, l),
    l)
}
function Xl(e, t) {
    return !e || !Bl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    Ne(e, t[0].toLowerCase() + t.slice(1)) || Ne(e, Wn(t)) || Ne(e, t))
}
function Ii(e) {
    const {type: t, vnode: n, proxy: a, withProxy: r, propsOptions: [o], slots: l, attrs: i, emit: s, render: c, renderCache: u, props: f, data: d, setupState: m, ctx: y, inheritAttrs: w} = e
      , p = _l(e);
    let C, g;
    try {
        if (n.shapeFlag & 4) {
            const b = r || a
              , _ = b;
            C = vn(c.call(_, b, u, f, m, d, y)),
            g = i
        } else {
            const b = t;
            C = vn(b.length > 1 ? b(f, {
                attrs: i,
                slots: l,
                emit: s
            }) : b(f, null)),
            g = t.props ? i : Ty(i)
        }
    } catch (b) {
        lr.length = 0,
        kr(b, e, 1),
        C = h(St)
    }
    let v = C;
    if (g && w !== !1) {
        const b = Object.keys(g)
          , {shapeFlag: _} = v;
        b.length && _ & 7 && (o && b.some(Qs) && (g = xy(g, o)),
        v = Bn(v, g, !1, !0))
    }
    return n.dirs && (v = Bn(v, null, !1, !0),
    v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs),
    n.transition && (v.transition = n.transition),
    C = v,
    _l(p),
    C
}
const Ty = e=>{
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Bl(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , xy = (e,t)=>{
    const n = {};
    for (const a in e)
        (!Qs(a) || !(a.slice(9)in t)) && (n[a] = e[a]);
    return n
}
;
function ky(e, t, n) {
    const {props: a, children: r, component: o} = e
      , {props: l, children: i, patchFlag: s} = t
      , c = o.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && s >= 0) {
        if (s & 1024)
            return !0;
        if (s & 16)
            return a ? _u(a, l, c) : !!l;
        if (s & 8) {
            const u = t.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                const d = u[f];
                if (l[d] !== a[d] && !Xl(c, d))
                    return !0
            }
        }
    } else
        return (r || i) && (!i || !i.$stable) ? !0 : a === l ? !1 : a ? l ? _u(a, l, c) : !0 : !!l;
    return !1
}
function _u(e, t, n) {
    const a = Object.keys(t);
    if (a.length !== Object.keys(e).length)
        return !0;
    for (let r = 0; r < a.length; r++) {
        const o = a[r];
        if (t[o] !== e[o] && !Xl(n, o))
            return !0
    }
    return !1
}
function Iy({vnode: e, parent: t}, n) {
    for (; t; ) {
        const a = t.subTree;
        if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el),
        a === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const ys = e=>e.__isSuspense;
function Ay(e, t) {
    t && t.pendingBranch ? pe(e) ? t.effects.push(...e) : t.effects.push(e) : $b(e)
}
const Je = Symbol.for("v-fgt")
  , Do = Symbol.for("v-txt")
  , St = Symbol.for("v-cmt")
  , dl = Symbol.for("v-stc")
  , lr = [];
let Bt = null;
function jt(e=!1) {
    lr.push(Bt = e ? null : [])
}
function Oy() {
    lr.pop(),
    Bt = lr[lr.length - 1] || null
}
let vr = 1;
function wu(e) {
    vr += e,
    e < 0 && Bt && (Bt.hasOnce = !0)
}
function Qh(e) {
    return e.dynamicChildren = vr > 0 ? Bt || fo : null,
    Oy(),
    vr > 0 && Bt && Bt.push(e),
    e
}
function La(e, t, n, a, r, o) {
    return Qh(Ln(e, t, n, a, r, o, !0))
}
function br(e, t, n, a, r) {
    return Qh(h(e, t, n, a, r, !0))
}
function So(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function ua(e, t) {
    return e.type === t.type && e.key === t.key
}
const em = ({key: e})=>e ?? null
  , hl = ({ref: e, ref_key: t, ref_for: n})=>(typeof e == "number" && (e = "" + e),
e != null ? Ye(e) || nt(e) || xe(e) ? {
    i: it,
    r: e,
    k: t,
    f: !!n
} : e : null);
function Ln(e, t=null, n=null, a=0, r=null, o=e === Je ? 0 : 1, l=!1, i=!1) {
    const s = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && em(t),
        ref: t && hl(t),
        scopeId: Gl,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: a,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: it
    };
    return i ? (wc(s, n),
    o & 128 && e.normalize(s)) : n && (s.shapeFlag |= Ye(n) ? 8 : 16),
    vr > 0 && !l && Bt && (s.patchFlag > 0 || o & 6) && s.patchFlag !== 32 && Bt.push(s),
    s
}
const h = Py;
function Py(e, t=null, n=null, a=0, r=null, o=!1) {
    if ((!e || e === Dh) && (e = St),
    So(e)) {
        const i = Bn(e, t, !0);
        return n && wc(i, n),
        vr > 0 && !o && Bt && (i.shapeFlag & 6 ? Bt[Bt.indexOf(e)] = i : Bt.push(i)),
        i.patchFlag = -2,
        i
    }
    if (Vy(e) && (e = e.__vccOpts),
    t) {
        t = Ry(t);
        let {class: i, style: s} = t;
        i && !Ye(i) && (t.class = Wl(i)),
        Ue(s) && (yh(s) && !pe(s) && (s = mt({}, s)),
        t.style = Ul(s))
    }
    const l = Ye(e) ? 1 : ys(e) ? 128 : hy(e) ? 64 : Ue(e) ? 4 : xe(e) ? 2 : 0;
    return Ln(e, t, n, a, r, l, o, !0)
}
function Ry(e) {
    return e ? yh(e) || Vh(e) ? mt({}, e) : e : null
}
function Bn(e, t, n=!1, a=!1) {
    const {props: r, ref: o, patchFlag: l, children: i, transition: s} = e
      , c = t ? Re(r || {}, t) : r
      , u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: c,
        key: c && em(c),
        ref: t && t.ref ? n && o ? pe(o) ? o.concat(hl(t)) : [o, hl(t)] : hl(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: i,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Je ? l === -1 ? 16 : l | 16 : l,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: s,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Bn(e.ssContent),
        ssFallback: e.ssFallback && Bn(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return s && a && gr(u, s.clone(u)),
    u
}
function ql(e=" ", t=0) {
    return h(Do, null, e, t)
}
function FP(e, t) {
    const n = h(dl, null, e);
    return n.staticCount = t,
    n
}
function Uo(e="", t=!1) {
    return t ? (jt(),
    br(St, null, e)) : h(St, null, e)
}
function vn(e) {
    return e == null || typeof e == "boolean" ? h(St) : pe(e) ? h(Je, null, e.slice()) : typeof e == "object" ? ia(e) : h(Do, null, String(e))
}
function ia(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bn(e)
}
function wc(e, t) {
    let n = 0;
    const {shapeFlag: a} = e;
    if (t == null)
        t = null;
    else if (pe(t))
        n = 16;
    else if (typeof t == "object")
        if (a & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1),
            wc(e, r()),
            r._c && (r._d = !0));
            return
        } else {
            n = 32;
            const r = t._;
            !r && !Vh(t) ? t._ctx = it : r === 3 && it && (it.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        xe(t) ? (t = {
            default: t,
            _ctx: it
        },
        n = 32) : (t = String(t),
        a & 64 ? (n = 16,
        t = [ql(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function Re(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const a = e[n];
        for (const r in a)
            if (r === "class")
                t.class !== a.class && (t.class = Wl([t.class, a.class]));
            else if (r === "style")
                t.style = Ul([t.style, a.style]);
            else if (Bl(r)) {
                const o = t[r]
                  , l = a[r];
                l && o !== l && !(pe(o) && o.includes(l)) && (t[r] = o ? [].concat(o, l) : l)
            } else
                r !== "" && (t[r] = a[r])
    }
    return t
}
function Wt(e, t, n, a=null) {
    Gt(e, t, 7, [n, a])
}
const Ly = Mh();
let Dy = 0;
function $y(e, t, n) {
    const a = e.type
      , r = (t ? t.appContext : e.appContext) || Ly
      , o = {
        uid: Dy++,
        vnode: e,
        type: a,
        parent: t,
        appContext: r,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new ah(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(r.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Uh(a, r),
        emitsOptions: Zh(a, r),
        emit: null,
        emitted: null,
        propsDefaults: qe,
        inheritAttrs: a.inheritAttrs,
        ctx: qe,
        data: qe,
        props: qe,
        attrs: qe,
        slots: qe,
        refs: qe,
        setupState: qe,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {
        _: o
    },
    o.root = t ? t.root : o,
    o.emit = Ey.bind(null, o),
    e.ce && e.ce(o),
    o
}
let rt = null;
const gt = ()=>rt || it;
let Sl, ps;
{
    const e = Zd()
      , t = (n,a)=>{
        let r;
        return (r = e[n]) || (r = e[n] = []),
        r.push(a),
        o=>{
            r.length > 1 ? r.forEach(l=>l(o)) : r[0](o)
        }
    }
    ;
    Sl = t("__VUE_INSTANCE_SETTERS__", n=>rt = n),
    ps = t("__VUE_SSR_SETTERS__", n=>Or = n)
}
const Ar = e=>{
    const t = rt;
    return Sl(e),
    e.scope.on(),
    ()=>{
        e.scope.off(),
        Sl(t)
    }
}
  , Cu = ()=>{
    rt && rt.scope.off(),
    Sl(null)
}
;
function tm(e) {
    return e.vnode.shapeFlag & 4
}
let Or = !1;
function Ny(e, t=!1, n=!1) {
    t && ps(t);
    const {props: a, children: r} = e.vnode
      , o = tm(e);
    iy(e, a, o, t),
    fy(e, r, n);
    const l = o ? My(e, t) : void 0;
    return t && ps(!1),
    l
}
function My(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,Zb);
    const {setup: a} = n;
    if (a) {
        const r = e.setupContext = a.length > 1 ? Fy(e) : null
          , o = Ar(e);
        va();
        const l = ha(a, e, 0, [e.props, r]);
        if (ba(),
        o(),
        Kd(l)) {
            if (l.then(Cu, Cu),
            t)
                return l.then(i=>{
                    Su(e, i, t)
                }
                ).catch(i=>{
                    kr(i, e, 0)
                }
                );
            e.asyncDep = l
        } else
            Su(e, l, t)
    } else
        nm(e, t)
}
function Su(e, t, n) {
    xe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ue(t) && (e.setupState = Ch(t)),
    nm(e, n)
}
let Eu;
function nm(e, t, n) {
    const a = e.type;
    if (!e.render) {
        if (!t && Eu && !a.render) {
            const r = a.template || bc(e).template;
            if (r) {
                const {isCustomElement: o, compilerOptions: l} = e.appContext.config
                  , {delimiters: i, compilerOptions: s} = a
                  , c = mt(mt({
                    isCustomElement: o,
                    delimiters: i
                }, l), s);
                a.render = Eu(r, c)
            }
        }
        e.render = a.render || Yt
    }
    {
        const r = Ar(e);
        va();
        try {
            Qb(e)
        } finally {
            ba(),
            r()
        }
    }
}
const By = {
    get(e, t) {
        return Lt(e, "get", ""),
        e[t]
    }
};
function Fy(e) {
    const t = n=>{
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,By),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function Jl(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ch(cc(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in or)
                return or[n](e)
        },
        has(t, n) {
            return n in t || n in or
        }
    })) : e.proxy
}
function _s(e, t=!0) {
    return xe(e) ? e.displayName || e.name : e.name || t && e.__name
}
function Vy(e) {
    return xe(e) && "__vccOpts"in e
}
const F = (e,t)=>xb(e, t, Or);
function Pr(e, t, n) {
    const a = arguments.length;
    return a === 2 ? Ue(t) && !pe(t) ? So(t) ? h(e, null, [t]) : h(e, t) : h(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && So(n) && (n = [n]),
    h(e, t, n))
}
const Hy = "3.4.35";
/**
* @vue/runtime-dom v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Uy = "http://www.w3.org/2000/svg"
  , Wy = "http://www.w3.org/1998/Math/MathML"
  , On = typeof document < "u" ? document : null
  , Tu = On && On.createElement("template")
  , jy = {
    insert: (e,t,n)=>{
        t.insertBefore(e, n || null)
    }
    ,
    remove: e=>{
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e,t,n,a)=>{
        const r = t === "svg" ? On.createElementNS(Uy, e) : t === "mathml" ? On.createElementNS(Wy, e) : n ? On.createElement(e, {
            is: n
        }) : On.createElement(e);
        return e === "select" && a && a.multiple != null && r.setAttribute("multiple", a.multiple),
        r
    }
    ,
    createText: e=>On.createTextNode(e),
    createComment: e=>On.createComment(e),
    setText: (e,t)=>{
        e.nodeValue = t
    }
    ,
    setElementText: (e,t)=>{
        e.textContent = t
    }
    ,
    parentNode: e=>e.parentNode,
    nextSibling: e=>e.nextSibling,
    querySelector: e=>On.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, a, r, o) {
        const l = n ? n.previousSibling : t.lastChild;
        if (r && (r === o || r.nextSibling))
            for (; t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling)); )
                ;
        else {
            Tu.innerHTML = a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e;
            const i = Tu.content;
            if (a === "svg" || a === "mathml") {
                const s = i.firstChild;
                for (; s.firstChild; )
                    i.appendChild(s.firstChild);
                i.removeChild(s)
            }
            t.insertBefore(i, n)
        }
        return [l ? l.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , Xn = "transition"
  , Wo = "animation"
  , yr = Symbol("_vtc")
  , $o = (e,{slots: t})=>Pr(Ub, zy(e), t);
$o.displayName = "Transition";
const am = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
$o.props = mt({}, kh, am);
const xa = (e,t=[])=>{
    pe(e) ? e.forEach(n=>n(...t)) : e && e(...t)
}
  , xu = e=>e ? pe(e) ? e.some(t=>t.length > 1) : e.length > 1 : !1;
function zy(e) {
    const t = {};
    for (const O in e)
        O in am || (t[O] = e[O]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: a, duration: r, enterFromClass: o=`${n}-enter-from`, enterActiveClass: l=`${n}-enter-active`, enterToClass: i=`${n}-enter-to`, appearFromClass: s=o, appearActiveClass: c=l, appearToClass: u=i, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: m=`${n}-leave-to`} = e
      , y = Yy(r)
      , w = y && y[0]
      , p = y && y[1]
      , {onBeforeEnter: C, onEnter: g, onEnterCancelled: v, onLeave: b, onLeaveCancelled: _, onBeforeAppear: S=C, onAppear: A=g, onAppearCancelled: E=v} = t
      , T = (O,N,Z)=>{
        ka(O, N ? u : i),
        ka(O, N ? c : l),
        Z && Z()
    }
      , D = (O,N)=>{
        O._isLeaving = !1,
        ka(O, f),
        ka(O, m),
        ka(O, d),
        N && N()
    }
      , k = O=>(N,Z)=>{
        const ce = O ? A : g
          , j = ()=>T(N, O, Z);
        xa(ce, [N, j]),
        ku(()=>{
            ka(N, O ? s : o),
            qn(N, O ? u : i),
            xu(ce) || Iu(N, a, w, j)
        }
        )
    }
    ;
    return mt(t, {
        onBeforeEnter(O) {
            xa(C, [O]),
            qn(O, o),
            qn(O, l)
        },
        onBeforeAppear(O) {
            xa(S, [O]),
            qn(O, s),
            qn(O, c)
        },
        onEnter: k(!1),
        onAppear: k(!0),
        onLeave(O, N) {
            O._isLeaving = !0;
            const Z = ()=>D(O, N);
            qn(O, f),
            qn(O, d),
            Xy(),
            ku(()=>{
                O._isLeaving && (ka(O, f),
                qn(O, m),
                xu(b) || Iu(O, a, p, Z))
            }
            ),
            xa(b, [O, Z])
        },
        onEnterCancelled(O) {
            T(O, !1),
            xa(v, [O])
        },
        onAppearCancelled(O) {
            T(O, !0),
            xa(E, [O])
        },
        onLeaveCancelled(O) {
            D(O),
            xa(_, [O])
        }
    })
}
function Yy(e) {
    if (e == null)
        return null;
    if (Ue(e))
        return [Ai(e.enter), Ai(e.leave)];
    {
        const t = Ai(e);
        return [t, t]
    }
}
function Ai(e) {
    return Xv(e)
}
function qn(e, t) {
    t.split(/\s+/).forEach(n=>n && e.classList.add(n)),
    (e[yr] || (e[yr] = new Set)).add(t)
}
function ka(e, t) {
    t.split(/\s+/).forEach(a=>a && e.classList.remove(a));
    const n = e[yr];
    n && (n.delete(t),
    n.size || (e[yr] = void 0))
}
function ku(e) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    )
}
let Gy = 0;
function Iu(e, t, n, a) {
    const r = e._endId = ++Gy
      , o = ()=>{
        r === e._endId && a()
    }
    ;
    if (n)
        return setTimeout(o, n);
    const {type: l, timeout: i, propCount: s} = Ky(e, t);
    if (!l)
        return a();
    const c = l + "end";
    let u = 0;
    const f = ()=>{
        e.removeEventListener(c, d),
        o()
    }
      , d = m=>{
        m.target === e && ++u >= s && f()
    }
    ;
    setTimeout(()=>{
        u < s && f()
    }
    , i + 1),
    e.addEventListener(c, d)
}
function Ky(e, t) {
    const n = window.getComputedStyle(e)
      , a = y=>(n[y] || "").split(", ")
      , r = a(`${Xn}Delay`)
      , o = a(`${Xn}Duration`)
      , l = Au(r, o)
      , i = a(`${Wo}Delay`)
      , s = a(`${Wo}Duration`)
      , c = Au(i, s);
    let u = null
      , f = 0
      , d = 0;
    t === Xn ? l > 0 && (u = Xn,
    f = l,
    d = o.length) : t === Wo ? c > 0 && (u = Wo,
    f = c,
    d = s.length) : (f = Math.max(l, c),
    u = f > 0 ? l > c ? Xn : Wo : null,
    d = u ? u === Xn ? o.length : s.length : 0);
    const m = u === Xn && /\b(transform|all)(,|$)/.test(a(`${Xn}Property`).toString());
    return {
        type: u,
        timeout: f,
        propCount: d,
        hasTransform: m
    }
}
function Au(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map((n,a)=>Ou(n) + Ou(e[a])))
}
function Ou(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function Xy() {
    return document.body.offsetHeight
}
function qy(e, t, n) {
    const a = e[yr];
    a && (t = (t ? [t, ...a] : [...a]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const El = Symbol("_vod")
  , om = Symbol("_vsh")
  , dt = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[El] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : jo(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: a}) {
        !t != !n && (a ? t ? (a.beforeEnter(e),
        jo(e, !0),
        a.enter(e)) : a.leave(e, ()=>{
            jo(e, !1)
        }
        ) : jo(e, t))
    },
    beforeUnmount(e, {value: t}) {
        jo(e, t)
    }
};
function jo(e, t) {
    e.style.display = t ? e[El] : "none",
    e[om] = !t
}
const Jy = Symbol("")
  , Zy = /(^|;)\s*display\s*:/;
function Qy(e, t, n) {
    const a = e.style
      , r = Ye(n);
    let o = !1;
    if (n && !r) {
        if (t)
            if (Ye(t))
                for (const l of t.split(";")) {
                    const i = l.slice(0, l.indexOf(":")).trim();
                    n[i] == null && ml(a, i, "")
                }
            else
                for (const l in t)
                    n[l] == null && ml(a, l, "");
        for (const l in n)
            l === "display" && (o = !0),
            ml(a, l, n[l])
    } else if (r) {
        if (t !== n) {
            const l = a[Jy];
            l && (n += ";" + l),
            a.cssText = n,
            o = Zy.test(n)
        }
    } else
        t && e.removeAttribute("style");
    El in e && (e[El] = o ? a.display : "",
    e[om] && (a.display = "none"))
}
const Pu = /\s*!important$/;
function ml(e, t, n) {
    if (pe(n))
        n.forEach(a=>ml(e, t, a));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const a = ep(e, t);
        Pu.test(n) ? e.setProperty(Wn(a), n.replace(Pu, ""), "important") : e[a] = n
    }
}
const Ru = ["Webkit", "Moz", "ms"]
  , Oi = {};
function ep(e, t) {
    const n = Oi[t];
    if (n)
        return n;
    let a = ln(t);
    if (a !== "filter" && a in e)
        return Oi[t] = a;
    a = Hl(a);
    for (let r = 0; r < Ru.length; r++) {
        const o = Ru[r] + a;
        if (o in e)
            return Oi[t] = o
    }
    return t
}
const Lu = "http://www.w3.org/1999/xlink";
function Du(e, t, n, a, r, o=nb(t)) {
    a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Lu, t.slice(6, t.length)) : e.setAttributeNS(Lu, t, n) : n == null || o && !Qd(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : _n(n) ? String(n) : n)
}
function tp(e, t, n, a) {
    if (t === "innerHTML" || t === "textContent") {
        if (n == null)
            return;
        e[t] = n;
        return
    }
    const r = e.tagName;
    if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
        const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value
          , i = n == null ? "" : String(n);
        (l !== i || !("_value"in e)) && (e.value = i),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let o = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean" ? n = Qd(n) : n == null && l === "string" ? (n = "",
        o = !0) : l === "number" && (n = 0,
        o = !0)
    }
    try {
        e[t] = n
    } catch {}
    o && e.removeAttribute(t)
}
function Da(e, t, n, a) {
    e.addEventListener(t, n, a)
}
function np(e, t, n, a) {
    e.removeEventListener(t, n, a)
}
const $u = Symbol("_vei");
function ap(e, t, n, a, r=null) {
    const o = e[$u] || (e[$u] = {})
      , l = o[t];
    if (a && l)
        l.value = a;
    else {
        const [i,s] = op(t);
        if (a) {
            const c = o[t] = ip(a, r);
            Da(e, i, c, s)
        } else
            l && (np(e, i, l, s),
            o[t] = void 0)
    }
}
const Nu = /(?:Once|Passive|Capture)$/;
function op(e) {
    let t;
    if (Nu.test(e)) {
        t = {};
        let a;
        for (; a = e.match(Nu); )
            e = e.slice(0, e.length - a[0].length),
            t[a[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Wn(e.slice(2)), t]
}
let Pi = 0;
const rp = Promise.resolve()
  , lp = ()=>Pi || (rp.then(()=>Pi = 0),
Pi = Date.now());
function ip(e, t) {
    const n = a=>{
        if (!a._vts)
            a._vts = Date.now();
        else if (a._vts <= n.attached)
            return;
        Gt(sp(a, n.value), t, 5, [a])
    }
    ;
    return n.value = e,
    n.attached = lp(),
    n
}
function sp(e, t) {
    if (pe(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = ()=>{
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(a=>r=>!r._stopped && a && a(r))
    } else
        return t
}
const Mu = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , cp = (e,t,n,a,r,o)=>{
    const l = r === "svg";
    t === "class" ? qy(e, a, l) : t === "style" ? Qy(e, n, a) : Bl(t) ? Qs(t) || ap(e, t, n, a, o) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : up(e, t, a, l)) ? (tp(e, t, a),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Du(e, t, a, l, o, t !== "value")) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a),
    Du(e, t, a, l))
}
;
function up(e, t, n, a) {
    if (a)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Mu(t) && xe(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const r = e.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
            return !1
    }
    return Mu(t) && Ye(n) ? !1 : t in e
}
const Tl = e=>{
    const t = e.props["onUpdate:modelValue"] || !1;
    return pe(t) ? n=>mo(t, n) : t
}
;
function fp(e) {
    e.target.composing = !0
}
function Bu(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const yo = Symbol("_assign")
  , VP = {
    created(e, {modifiers: {lazy: t, trim: n, number: a}}, r) {
        e[yo] = Tl(r);
        const o = a || r.props && r.props.type === "number";
        Da(e, t ? "change" : "input", l=>{
            if (l.target.composing)
                return;
            let i = e.value;
            n && (i = i.trim()),
            o && (i = ls(i)),
            e[yo](i)
        }
        ),
        n && Da(e, "change", ()=>{
            e.value = e.value.trim()
        }
        ),
        t || (Da(e, "compositionstart", fp),
        Da(e, "compositionend", Bu),
        Da(e, "change", Bu))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: a, trim: r, number: o}}, l) {
        if (e[yo] = Tl(l),
        e.composing)
            return;
        const i = (o || e.type === "number") && !/^0\d/.test(e.value) ? ls(e.value) : e.value
          , s = t ?? "";
        i !== s && (document.activeElement === e && e.type !== "range" && (a && t === n || r && e.value.trim() === s) || (e.value = s))
    }
}
  , HP = {
    deep: !0,
    created(e, t, n) {
        e[yo] = Tl(n),
        Da(e, "change", ()=>{
            const a = e._modelValue
              , r = dp(e)
              , o = e.checked
              , l = e[yo];
            if (pe(a)) {
                const i = eh(a, r)
                  , s = i !== -1;
                if (o && !s)
                    l(a.concat(r));
                else if (!o && s) {
                    const c = [...a];
                    c.splice(i, 1),
                    l(c)
                }
            } else if (Fl(a)) {
                const i = new Set(a);
                o ? i.add(r) : i.delete(r),
                l(i)
            } else
                l(rm(e, o))
        }
        )
    },
    mounted: Fu,
    beforeUpdate(e, t, n) {
        e[yo] = Tl(n),
        Fu(e, t, n)
    }
};
function Fu(e, {value: t, oldValue: n}, a) {
    e._modelValue = t,
    pe(t) ? e.checked = eh(t, a.props.value) > -1 : Fl(t) ? e.checked = t.has(a.props.value) : t !== n && (e.checked = jl(t, rm(e, !0)))
}
function dp(e) {
    return "_value"in e ? e._value : e.value
}
function rm(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const hp = ["ctrl", "shift", "alt", "meta"]
  , mp = {
    stop: e=>e.stopPropagation(),
    prevent: e=>e.preventDefault(),
    self: e=>e.target !== e.currentTarget,
    ctrl: e=>!e.ctrlKey,
    shift: e=>!e.shiftKey,
    alt: e=>!e.altKey,
    meta: e=>!e.metaKey,
    left: e=>"button"in e && e.button !== 0,
    middle: e=>"button"in e && e.button !== 1,
    right: e=>"button"in e && e.button !== 2,
    exact: (e,t)=>hp.some(n=>e[`${n}Key`] && !t.includes(n))
}
  , UP = (e,t)=>{
    const n = e._withMods || (e._withMods = {})
      , a = t.join(".");
    return n[a] || (n[a] = (r,...o)=>{
        for (let l = 0; l < t.length; l++) {
            const i = mp[t[l]];
            if (i && i(r, t))
                return
        }
        return e(r, ...o)
    }
    )
}
  , gp = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , vp = (e,t)=>{
    const n = e._withKeys || (e._withKeys = {})
      , a = t.join(".");
    return n[a] || (n[a] = r=>{
        if (!("key"in r))
            return;
        const o = Wn(r.key);
        if (t.some(l=>l === o || gp[l] === o))
            return e(r)
    }
    )
}
  , bp = mt({
    patchProp: cp
}, jy);
let Vu;
function lm() {
    return Vu || (Vu = vy(bp))
}
const yp = (...e)=>{
    lm().render(...e)
}
  , im = (...e)=>{
    const t = lm().createApp(...e)
      , {mount: n} = t;
    return t.mount = a=>{
        const r = _p(a);
        if (!r)
            return;
        const o = t._component;
        !xe(o) && !o.render && !o.template && (o.template = r.innerHTML),
        r.innerHTML = "";
        const l = n(r, !1, pp(r));
        return r instanceof Element && (r.removeAttribute("v-cloak"),
        r.setAttribute("data-v-app", "")),
        l
    }
    ,
    t
}
;
function pp(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function _p(e) {
    return Ye(e) ? document.querySelector(e) : e
}
var wp = !1;
/*!
 * pinia v2.2.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
let sm;
const Zl = e=>sm = e
  , cm = Symbol();
function ws(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var ir;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(ir || (ir = {}));
function Cp() {
    const e = nc(!0)
      , t = e.run(()=>V({}));
    let n = []
      , a = [];
    const r = cc({
        install(o) {
            Zl(r),
            r._a = o,
            o.provide(cm, r),
            o.config.globalProperties.$pinia = r,
            a.forEach(l=>n.push(l)),
            a = []
        },
        use(o) {
            return !this._a && !wp ? a.push(o) : n.push(o),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return r
}
const um = ()=>{}
;
function Hu(e, t, n, a=um) {
    e.push(t);
    const r = ()=>{
        const o = e.indexOf(t);
        o > -1 && (e.splice(o, 1),
        a())
    }
    ;
    return !n && oh() && rb(r),
    r
}
function Ka(e, ...t) {
    e.slice().forEach(n=>{
        n(...t)
    }
    )
}
const Sp = e=>e()
  , Uu = Symbol()
  , Ri = Symbol();
function Cs(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n,a)=>e.set(a, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const a = t[n]
          , r = e[n];
        ws(r) && ws(a) && e.hasOwnProperty(n) && !nt(a) && !Ba(a) ? e[n] = Cs(r, a) : e[n] = a
    }
    return e
}
const Ep = Symbol();
function Tp(e) {
    return !ws(e) || !e.hasOwnProperty(Ep)
}
const {assign: oa} = Object;
function xp(e) {
    return !!(nt(e) && e.effect)
}
function kp(e, t, n, a) {
    const {state: r, actions: o, getters: l} = t
      , i = n.state.value[e];
    let s;
    function c() {
        i || (n.state.value[e] = r ? r() : {});
        const u = Ab(n.state.value[e]);
        return oa(u, o, Object.keys(l || {}).reduce((f,d)=>(f[d] = cc(F(()=>{
            Zl(n);
            const m = n._s.get(e);
            return l[d].call(m, m)
        }
        )),
        f), {}))
    }
    return s = fm(e, c, t, n, a, !0),
    s
}
function fm(e, t, n={}, a, r, o) {
    let l;
    const i = oa({
        actions: {}
    }, n)
      , s = {
        deep: !0
    };
    let c, u, f = [], d = [], m;
    const y = a.state.value[e];
    !o && !y && (a.state.value[e] = {}),
    V({});
    let w;
    function p(E) {
        let T;
        c = u = !1,
        typeof E == "function" ? (E(a.state.value[e]),
        T = {
            type: ir.patchFunction,
            storeId: e,
            events: m
        }) : (Cs(a.state.value[e], E),
        T = {
            type: ir.patchObject,
            payload: E,
            storeId: e,
            events: m
        });
        const D = w = Symbol();
        Oe().then(()=>{
            w === D && (c = !0)
        }
        ),
        u = !0,
        Ka(f, T, a.state.value[e])
    }
    const C = o ? function() {
        const {state: T} = n
          , D = T ? T() : {};
        this.$patch(k=>{
            oa(k, D)
        }
        )
    }
    : um;
    function g() {
        l.stop(),
        f = [],
        d = [],
        a._s.delete(e)
    }
    const v = (E,T="")=>{
        if (Uu in E)
            return E[Ri] = T,
            E;
        const D = function() {
            Zl(a);
            const k = Array.from(arguments)
              , O = []
              , N = [];
            function Z(ee) {
                O.push(ee)
            }
            function ce(ee) {
                N.push(ee)
            }
            Ka(d, {
                args: k,
                name: D[Ri],
                store: _,
                after: Z,
                onError: ce
            });
            let j;
            try {
                j = E.apply(this && this.$id === e ? this : _, k)
            } catch (ee) {
                throw Ka(N, ee),
                ee
            }
            return j instanceof Promise ? j.then(ee=>(Ka(O, ee),
            ee)).catch(ee=>(Ka(N, ee),
            Promise.reject(ee))) : (Ka(O, j),
            j)
        };
        return D[Uu] = !0,
        D[Ri] = T,
        D
    }
      , b = {
        _p: a,
        $id: e,
        $onAction: Hu.bind(null, d),
        $patch: p,
        $reset: C,
        $subscribe(E, T={}) {
            const D = Hu(f, E, T.detached, ()=>k())
              , k = l.run(()=>se(()=>a.state.value[e], O=>{
                (T.flush === "sync" ? u : c) && E({
                    storeId: e,
                    type: ir.direct,
                    events: m
                }, O)
            }
            , oa({}, s, T)));
            return D
        },
        $dispose: g
    }
      , _ = Ge(b);
    a._s.set(e, _);
    const A = (a._a && a._a.runWithContext || Sp)(()=>a._e.run(()=>(l = nc()).run(()=>t({
        action: v
    }))));
    for (const E in A) {
        const T = A[E];
        if (nt(T) && !xp(T) || Ba(T))
            o || (y && Tp(T) && (nt(T) ? T.value = y[E] : Cs(T, y[E])),
            a.state.value[e][E] = T);
        else if (typeof T == "function") {
            const D = v(T, E);
            A[E] = D,
            i.actions[E] = T
        }
    }
    return oa(_, A),
    oa(Be(_), A),
    Object.defineProperty(_, "$state", {
        get: ()=>a.state.value[e],
        set: E=>{
            p(T=>{
                oa(T, E)
            }
            )
        }
    }),
    a._p.forEach(E=>{
        oa(_, l.run(()=>E({
            store: _,
            app: a._a,
            pinia: a,
            options: i
        })))
    }
    ),
    y && o && n.hydrate && n.hydrate(_.$state, y),
    c = !0,
    u = !0,
    _
}
function Ip(e, t, n) {
    let a, r;
    const o = typeof t == "function";
    typeof e == "string" ? (a = e,
    r = o ? n : t) : (r = e,
    a = e.id);
    function l(i, s) {
        const c = ly();
        return i = i || (c ? bt(cm, null) : null),
        i && Zl(i),
        i = sm,
        i._s.has(a) || (o ? fm(a, t, r, i) : kp(a, r, i)),
        i._s.get(a)
    }
    return l.$id = a,
    l
}
/*!
  * shared v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const xl = typeof window < "u"
  , ya = (e,t=!1)=>t ? Symbol.for(e) : Symbol(e)
  , Ap = (e,t,n)=>Op({
    l: e,
    k: t,
    s: n
})
  , Op = e=>JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , lt = e=>typeof e == "number" && isFinite(e)
  , Pp = e=>hm(e) === "[object Date]"
  , ga = e=>hm(e) === "[object RegExp]"
  , Ql = e=>ke(e) && Object.keys(e).length === 0
  , yt = Object.assign;
let Wu;
const Pn = ()=>Wu || (Wu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ju(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const Rp = Object.prototype.hasOwnProperty;
function kl(e, t) {
    return Rp.call(e, t)
}
const ze = Array.isArray
  , We = e=>typeof e == "function"
  , ve = e=>typeof e == "string"
  , Le = e=>typeof e == "boolean"
  , Ve = e=>e !== null && typeof e == "object"
  , Lp = e=>Ve(e) && We(e.then) && We(e.catch)
  , dm = Object.prototype.toString
  , hm = e=>dm.call(e)
  , ke = e=>{
    if (!Ve(e))
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object
}
  , Dp = e=>e == null ? "" : ze(e) || ke(e) && e.toString === dm ? JSON.stringify(e, null, 2) : String(e);
function $p(e, t="") {
    return e.reduce((n,a,r)=>r === 0 ? n + a : n + t + a, "")
}
function ei(e) {
    let t = e;
    return ()=>++t
}
function Np(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack))
}
const Wr = e=>!Ve(e) || ze(e);
function gl(e, t) {
    if (Wr(e) || Wr(t))
        throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length; ) {
        const {src: a, des: r} = n.pop();
        Object.keys(a).forEach(o=>{
            Wr(a[o]) || Wr(r[o]) ? r[o] = a[o] : n.push({
                src: a[o],
                des: r[o]
            })
        }
        )
    }
}
/*!
  * message-compiler v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Mp(e, t, n) {
    return {
        line: e,
        column: t,
        offset: n
    }
}
function Il(e, t, n) {
    return {
        start: e,
        end: t
    }
}
const Bp = /\{([0-9a-zA-Z]+)\}/g;
function mm(e, ...t) {
    return t.length === 1 && Fp(t[0]) && (t = t[0]),
    (!t || !t.hasOwnProperty) && (t = {}),
    e.replace(Bp, (n,a)=>t.hasOwnProperty(a) ? t[a] : "")
}
const gm = Object.assign
  , zu = e=>typeof e == "string"
  , Fp = e=>e !== null && typeof e == "object";
function vm(e, t="") {
    return e.reduce((n,a,r)=>r === 0 ? n + a : n + t + a, "")
}
const Cc = {
    USE_MODULO_SYNTAX: 1,
    __EXTEND_POINT__: 2
}
  , Vp = {
    [Cc.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Hp(e, t, ...n) {
    const a = mm(Vp[e], ...n || [])
      , r = {
        message: String(a),
        code: e
    };
    return t && (r.location = t),
    r
}
const Ee = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    UNHANDLED_CODEGEN_NODE_TYPE: 15,
    UNHANDLED_MINIFIER_NODE_TYPE: 16,
    __EXTEND_POINT__: 17
}
  , Up = {
    [Ee.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [Ee.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [Ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
    [Ee.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
    [Ee.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
    [Ee.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
    [Ee.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
    [Ee.EMPTY_PLACEHOLDER]: "Empty placeholder",
    [Ee.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
    [Ee.INVALID_LINKED_FORMAT]: "Invalid linked format",
    [Ee.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
    [Ee.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
    [Ee.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
    [Ee.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
    [Ee.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
    [Ee.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function No(e, t, n={}) {
    const {domain: a, messages: r, args: o} = n
      , l = mm((r || Up)[e] || "", ...o || [])
      , i = new SyntaxError(String(l));
    return i.code = e,
    t && (i.location = t),
    i.domain = a,
    i
}
function Wp(e) {
    throw e
}
const Sn = " "
  , jp = "\r"
  , Pt = `
`
  , zp = "\u2028"
  , Yp = "\u2029";
function Gp(e) {
    const t = e;
    let n = 0
      , a = 1
      , r = 1
      , o = 0;
    const l = A=>t[A] === jp && t[A + 1] === Pt
      , i = A=>t[A] === Pt
      , s = A=>t[A] === Yp
      , c = A=>t[A] === zp
      , u = A=>l(A) || i(A) || s(A) || c(A)
      , f = ()=>n
      , d = ()=>a
      , m = ()=>r
      , y = ()=>o
      , w = A=>l(A) || s(A) || c(A) ? Pt : t[A]
      , p = ()=>w(n)
      , C = ()=>w(n + o);
    function g() {
        return o = 0,
        u(n) && (a++,
        r = 0),
        l(n) && n++,
        n++,
        r++,
        t[n]
    }
    function v() {
        return l(n + o) && o++,
        o++,
        t[n + o]
    }
    function b() {
        n = 0,
        a = 1,
        r = 1,
        o = 0
    }
    function _(A=0) {
        o = A
    }
    function S() {
        const A = n + o;
        for (; A !== n; )
            g();
        o = 0
    }
    return {
        index: f,
        line: d,
        column: m,
        peekOffset: y,
        charAt: w,
        currentChar: p,
        currentPeek: C,
        next: g,
        peek: v,
        reset: b,
        resetPeek: _,
        skipToPeek: S
    }
}
const Jn = void 0
  , Kp = "."
  , Yu = "'"
  , Xp = "tokenizer";
function qp(e, t={}) {
    const n = t.location !== !1
      , a = Gp(e)
      , r = ()=>a.index()
      , o = ()=>Mp(a.line(), a.column(), a.index())
      , l = o()
      , i = r()
      , s = {
        currentType: 14,
        offset: i,
        startLoc: l,
        endLoc: l,
        lastType: 14,
        lastOffset: i,
        lastStartLoc: l,
        lastEndLoc: l,
        braceNest: 0,
        inLinked: !1,
        text: ""
    }
      , c = ()=>s
      , {onError: u} = t;
    function f(I, P, $, ...G) {
        const fe = c();
        if (P.column += $,
        P.offset += $,
        u) {
            const ae = n ? Il(fe.startLoc, P) : null
              , B = No(I, ae, {
                domain: Xp,
                args: G
            });
            u(B)
        }
    }
    function d(I, P, $) {
        I.endLoc = o(),
        I.currentType = P;
        const G = {
            type: P
        };
        return n && (G.loc = Il(I.startLoc, I.endLoc)),
        $ != null && (G.value = $),
        G
    }
    const m = I=>d(I, 14);
    function y(I, P) {
        return I.currentChar() === P ? (I.next(),
        P) : (f(Ee.EXPECTED_TOKEN, o(), 0, P),
        "")
    }
    function w(I) {
        let P = "";
        for (; I.currentPeek() === Sn || I.currentPeek() === Pt; )
            P += I.currentPeek(),
            I.peek();
        return P
    }
    function p(I) {
        const P = w(I);
        return I.skipToPeek(),
        P
    }
    function C(I) {
        if (I === Jn)
            return !1;
        const P = I.charCodeAt(0);
        return P >= 97 && P <= 122 || P >= 65 && P <= 90 || P === 95
    }
    function g(I) {
        if (I === Jn)
            return !1;
        const P = I.charCodeAt(0);
        return P >= 48 && P <= 57
    }
    function v(I, P) {
        const {currentType: $} = P;
        if ($ !== 2)
            return !1;
        w(I);
        const G = C(I.currentPeek());
        return I.resetPeek(),
        G
    }
    function b(I, P) {
        const {currentType: $} = P;
        if ($ !== 2)
            return !1;
        w(I);
        const G = I.currentPeek() === "-" ? I.peek() : I.currentPeek()
          , fe = g(G);
        return I.resetPeek(),
        fe
    }
    function _(I, P) {
        const {currentType: $} = P;
        if ($ !== 2)
            return !1;
        w(I);
        const G = I.currentPeek() === Yu;
        return I.resetPeek(),
        G
    }
    function S(I, P) {
        const {currentType: $} = P;
        if ($ !== 8)
            return !1;
        w(I);
        const G = I.currentPeek() === ".";
        return I.resetPeek(),
        G
    }
    function A(I, P) {
        const {currentType: $} = P;
        if ($ !== 9)
            return !1;
        w(I);
        const G = C(I.currentPeek());
        return I.resetPeek(),
        G
    }
    function E(I, P) {
        const {currentType: $} = P;
        if (!($ === 8 || $ === 12))
            return !1;
        w(I);
        const G = I.currentPeek() === ":";
        return I.resetPeek(),
        G
    }
    function T(I, P) {
        const {currentType: $} = P;
        if ($ !== 10)
            return !1;
        const G = ()=>{
            const ae = I.currentPeek();
            return ae === "{" ? C(I.peek()) : ae === "@" || ae === "%" || ae === "|" || ae === ":" || ae === "." || ae === Sn || !ae ? !1 : ae === Pt ? (I.peek(),
            G()) : O(I, !1)
        }
          , fe = G();
        return I.resetPeek(),
        fe
    }
    function D(I) {
        w(I);
        const P = I.currentPeek() === "|";
        return I.resetPeek(),
        P
    }
    function k(I) {
        const P = w(I)
          , $ = I.currentPeek() === "%" && I.peek() === "{";
        return I.resetPeek(),
        {
            isModulo: $,
            hasSpace: P.length > 0
        }
    }
    function O(I, P=!0) {
        const $ = (fe=!1,ae="",B=!1)=>{
            const z = I.currentPeek();
            return z === "{" ? ae === "%" ? !1 : fe : z === "@" || !z ? ae === "%" ? !0 : fe : z === "%" ? (I.peek(),
            $(fe, "%", !0)) : z === "|" ? ae === "%" || B ? !0 : !(ae === Sn || ae === Pt) : z === Sn ? (I.peek(),
            $(!0, Sn, B)) : z === Pt ? (I.peek(),
            $(!0, Pt, B)) : !0
        }
          , G = $();
        return P && I.resetPeek(),
        G
    }
    function N(I, P) {
        const $ = I.currentChar();
        return $ === Jn ? Jn : P($) ? (I.next(),
        $) : null
    }
    function Z(I) {
        const P = I.charCodeAt(0);
        return P >= 97 && P <= 122 || P >= 65 && P <= 90 || P >= 48 && P <= 57 || P === 95 || P === 36
    }
    function ce(I) {
        return N(I, Z)
    }
    function j(I) {
        const P = I.charCodeAt(0);
        return P >= 97 && P <= 122 || P >= 65 && P <= 90 || P >= 48 && P <= 57 || P === 95 || P === 36 || P === 45
    }
    function ee(I) {
        return N(I, j)
    }
    function ue(I) {
        const P = I.charCodeAt(0);
        return P >= 48 && P <= 57
    }
    function Te(I) {
        return N(I, ue)
    }
    function Pe(I) {
        const P = I.charCodeAt(0);
        return P >= 48 && P <= 57 || P >= 65 && P <= 70 || P >= 97 && P <= 102
    }
    function H(I) {
        return N(I, Pe)
    }
    function J(I) {
        let P = ""
          , $ = "";
        for (; P = Te(I); )
            $ += P;
        return $
    }
    function he(I) {
        p(I);
        const P = I.currentChar();
        return P !== "%" && f(Ee.EXPECTED_TOKEN, o(), 0, P),
        I.next(),
        "%"
    }
    function be(I) {
        let P = "";
        for (; ; ) {
            const $ = I.currentChar();
            if ($ === "{" || $ === "}" || $ === "@" || $ === "|" || !$)
                break;
            if ($ === "%")
                if (O(I))
                    P += $,
                    I.next();
                else
                    break;
            else if ($ === Sn || $ === Pt)
                if (O(I))
                    P += $,
                    I.next();
                else {
                    if (D(I))
                        break;
                    P += $,
                    I.next()
                }
            else
                P += $,
                I.next()
        }
        return P
    }
    function ie(I) {
        p(I);
        let P = ""
          , $ = "";
        for (; P = ee(I); )
            $ += P;
        return I.currentChar() === Jn && f(Ee.UNTERMINATED_CLOSING_BRACE, o(), 0),
        $
    }
    function me(I) {
        p(I);
        let P = "";
        return I.currentChar() === "-" ? (I.next(),
        P += `-${J(I)}`) : P += J(I),
        I.currentChar() === Jn && f(Ee.UNTERMINATED_CLOSING_BRACE, o(), 0),
        P
    }
    function L(I) {
        return I !== Yu && I !== Pt
    }
    function U(I) {
        p(I),
        y(I, "'");
        let P = ""
          , $ = "";
        for (; P = N(I, L); )
            P === "\\" ? $ += W(I) : $ += P;
        const G = I.currentChar();
        return G === Pt || G === Jn ? (f(Ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0),
        G === Pt && (I.next(),
        y(I, "'")),
        $) : (y(I, "'"),
        $)
    }
    function W(I) {
        const P = I.currentChar();
        switch (P) {
        case "\\":
        case "'":
            return I.next(),
            `\\${P}`;
        case "u":
            return ne(I, P, 4);
        case "U":
            return ne(I, P, 6);
        default:
            return f(Ee.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, P),
            ""
        }
    }
    function ne(I, P, $) {
        y(I, P);
        let G = "";
        for (let fe = 0; fe < $; fe++) {
            const ae = H(I);
            if (!ae) {
                f(Ee.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${P}${G}${I.currentChar()}`);
                break
            }
            G += ae
        }
        return `\\${P}${G}`
    }
    function ye(I) {
        return I !== "{" && I !== "}" && I !== Sn && I !== Pt
    }
    function Se(I) {
        p(I);
        let P = ""
          , $ = "";
        for (; P = N(I, ye); )
            $ += P;
        return $
    }
    function R(I) {
        let P = ""
          , $ = "";
        for (; P = ce(I); )
            $ += P;
        return $
    }
    function x(I) {
        const P = $=>{
            const G = I.currentChar();
            return G === "{" || G === "%" || G === "@" || G === "|" || G === "(" || G === ")" || !G || G === Sn ? $ : ($ += G,
            I.next(),
            P($))
        }
        ;
        return P("")
    }
    function M(I) {
        p(I);
        const P = y(I, "|");
        return p(I),
        P
    }
    function Q(I, P) {
        let $ = null;
        switch (I.currentChar()) {
        case "{":
            return P.braceNest >= 1 && f(Ee.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0),
            I.next(),
            $ = d(P, 2, "{"),
            p(I),
            P.braceNest++,
            $;
        case "}":
            return P.braceNest > 0 && P.currentType === 2 && f(Ee.EMPTY_PLACEHOLDER, o(), 0),
            I.next(),
            $ = d(P, 3, "}"),
            P.braceNest--,
            P.braceNest > 0 && p(I),
            P.inLinked && P.braceNest === 0 && (P.inLinked = !1),
            $;
        case "@":
            return P.braceNest > 0 && f(Ee.UNTERMINATED_CLOSING_BRACE, o(), 0),
            $ = Y(I, P) || m(P),
            P.braceNest = 0,
            $;
        default:
            {
                let fe = !0
                  , ae = !0
                  , B = !0;
                if (D(I))
                    return P.braceNest > 0 && f(Ee.UNTERMINATED_CLOSING_BRACE, o(), 0),
                    $ = d(P, 1, M(I)),
                    P.braceNest = 0,
                    P.inLinked = !1,
                    $;
                if (P.braceNest > 0 && (P.currentType === 5 || P.currentType === 6 || P.currentType === 7))
                    return f(Ee.UNTERMINATED_CLOSING_BRACE, o(), 0),
                    P.braceNest = 0,
                    le(I, P);
                if (fe = v(I, P))
                    return $ = d(P, 5, ie(I)),
                    p(I),
                    $;
                if (ae = b(I, P))
                    return $ = d(P, 6, me(I)),
                    p(I),
                    $;
                if (B = _(I, P))
                    return $ = d(P, 7, U(I)),
                    p(I),
                    $;
                if (!fe && !ae && !B)
                    return $ = d(P, 13, Se(I)),
                    f(Ee.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, $.value),
                    p(I),
                    $;
                break
            }
        }
        return $
    }
    function Y(I, P) {
        const {currentType: $} = P;
        let G = null;
        const fe = I.currentChar();
        switch (($ === 8 || $ === 9 || $ === 12 || $ === 10) && (fe === Pt || fe === Sn) && f(Ee.INVALID_LINKED_FORMAT, o(), 0),
        fe) {
        case "@":
            return I.next(),
            G = d(P, 8, "@"),
            P.inLinked = !0,
            G;
        case ".":
            return p(I),
            I.next(),
            d(P, 9, ".");
        case ":":
            return p(I),
            I.next(),
            d(P, 10, ":");
        default:
            return D(I) ? (G = d(P, 1, M(I)),
            P.braceNest = 0,
            P.inLinked = !1,
            G) : S(I, P) || E(I, P) ? (p(I),
            Y(I, P)) : A(I, P) ? (p(I),
            d(P, 12, R(I))) : T(I, P) ? (p(I),
            fe === "{" ? Q(I, P) || G : d(P, 11, x(I))) : ($ === 8 && f(Ee.INVALID_LINKED_FORMAT, o(), 0),
            P.braceNest = 0,
            P.inLinked = !1,
            le(I, P))
        }
    }
    function le(I, P) {
        let $ = {
            type: 14
        };
        if (P.braceNest > 0)
            return Q(I, P) || m(P);
        if (P.inLinked)
            return Y(I, P) || m(P);
        switch (I.currentChar()) {
        case "{":
            return Q(I, P) || m(P);
        case "}":
            return f(Ee.UNBALANCED_CLOSING_BRACE, o(), 0),
            I.next(),
            d(P, 3, "}");
        case "@":
            return Y(I, P) || m(P);
        default:
            {
                if (D(I))
                    return $ = d(P, 1, M(I)),
                    P.braceNest = 0,
                    P.inLinked = !1,
                    $;
                const {isModulo: fe, hasSpace: ae} = k(I);
                if (fe)
                    return ae ? d(P, 0, be(I)) : d(P, 4, he(I));
                if (O(I))
                    return d(P, 0, be(I));
                break
            }
        }
        return $
    }
    function de() {
        const {currentType: I, offset: P, startLoc: $, endLoc: G} = s;
        return s.lastType = I,
        s.lastOffset = P,
        s.lastStartLoc = $,
        s.lastEndLoc = G,
        s.offset = r(),
        s.startLoc = o(),
        a.currentChar() === Jn ? d(s, 14) : le(a, s)
    }
    return {
        nextToken: de,
        currentOffset: r,
        currentPosition: o,
        context: c
    }
}
const Jp = "parser"
  , Zp = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Qp(e, t, n) {
    switch (e) {
    case "\\\\":
        return "\\";
    case "\\'":
        return "'";
    default:
        {
            const a = parseInt(t || n, 16);
            return a <= 55295 || a >= 57344 ? String.fromCodePoint(a) : "�"
        }
    }
}
function e_(e={}) {
    const t = e.location !== !1
      , {onError: n, onWarn: a} = e;
    function r(v, b, _, S, ...A) {
        const E = v.currentPosition();
        if (E.offset += S,
        E.column += S,
        n) {
            const T = t ? Il(_, E) : null
              , D = No(b, T, {
                domain: Jp,
                args: A
            });
            n(D)
        }
    }
    function o(v, b, _, S, ...A) {
        const E = v.currentPosition();
        if (E.offset += S,
        E.column += S,
        a) {
            const T = t ? Il(_, E) : null;
            a(Hp(b, T, A))
        }
    }
    function l(v, b, _) {
        const S = {
            type: v
        };
        return t && (S.start = b,
        S.end = b,
        S.loc = {
            start: _,
            end: _
        }),
        S
    }
    function i(v, b, _, S) {
        t && (v.end = b,
        v.loc && (v.loc.end = _))
    }
    function s(v, b) {
        const _ = v.context()
          , S = l(3, _.offset, _.startLoc);
        return S.value = b,
        i(S, v.currentOffset(), v.currentPosition()),
        S
    }
    function c(v, b) {
        const _ = v.context()
          , {lastOffset: S, lastStartLoc: A} = _
          , E = l(5, S, A);
        return E.index = parseInt(b, 10),
        v.nextToken(),
        i(E, v.currentOffset(), v.currentPosition()),
        E
    }
    function u(v, b, _) {
        const S = v.context()
          , {lastOffset: A, lastStartLoc: E} = S
          , T = l(4, A, E);
        return T.key = b,
        _ === !0 && (T.modulo = !0),
        v.nextToken(),
        i(T, v.currentOffset(), v.currentPosition()),
        T
    }
    function f(v, b) {
        const _ = v.context()
          , {lastOffset: S, lastStartLoc: A} = _
          , E = l(9, S, A);
        return E.value = b.replace(Zp, Qp),
        v.nextToken(),
        i(E, v.currentOffset(), v.currentPosition()),
        E
    }
    function d(v) {
        const b = v.nextToken()
          , _ = v.context()
          , {lastOffset: S, lastStartLoc: A} = _
          , E = l(8, S, A);
        return b.type !== 12 ? (r(v, Ee.UNEXPECTED_EMPTY_LINKED_MODIFIER, _.lastStartLoc, 0),
        E.value = "",
        i(E, S, A),
        {
            nextConsumeToken: b,
            node: E
        }) : (b.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Zt(b)),
        E.value = b.value || "",
        i(E, v.currentOffset(), v.currentPosition()),
        {
            node: E
        })
    }
    function m(v, b) {
        const _ = v.context()
          , S = l(7, _.offset, _.startLoc);
        return S.value = b,
        i(S, v.currentOffset(), v.currentPosition()),
        S
    }
    function y(v) {
        const b = v.context()
          , _ = l(6, b.offset, b.startLoc);
        let S = v.nextToken();
        if (S.type === 9) {
            const A = d(v);
            _.modifier = A.node,
            S = A.nextConsumeToken || v.nextToken()
        }
        switch (S.type !== 10 && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Zt(S)),
        S = v.nextToken(),
        S.type === 2 && (S = v.nextToken()),
        S.type) {
        case 11:
            S.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Zt(S)),
            _.key = m(v, S.value || "");
            break;
        case 5:
            S.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Zt(S)),
            _.key = u(v, S.value || "");
            break;
        case 6:
            S.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Zt(S)),
            _.key = c(v, S.value || "");
            break;
        case 7:
            S.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Zt(S)),
            _.key = f(v, S.value || "");
            break;
        default:
            {
                r(v, Ee.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
                const A = v.context()
                  , E = l(7, A.offset, A.startLoc);
                return E.value = "",
                i(E, A.offset, A.startLoc),
                _.key = E,
                i(_, A.offset, A.startLoc),
                {
                    nextConsumeToken: S,
                    node: _
                }
            }
        }
        return i(_, v.currentOffset(), v.currentPosition()),
        {
            node: _
        }
    }
    function w(v) {
        const b = v.context()
          , _ = b.currentType === 1 ? v.currentOffset() : b.offset
          , S = b.currentType === 1 ? b.endLoc : b.startLoc
          , A = l(2, _, S);
        A.items = [];
        let E = null
          , T = null;
        do {
            const O = E || v.nextToken();
            switch (E = null,
            O.type) {
            case 0:
                O.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Zt(O)),
                A.items.push(s(v, O.value || ""));
                break;
            case 6:
                O.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Zt(O)),
                A.items.push(c(v, O.value || ""));
                break;
            case 4:
                T = !0;
                break;
            case 5:
                O.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Zt(O)),
                A.items.push(u(v, O.value || "", !!T)),
                T && (o(v, Cc.USE_MODULO_SYNTAX, b.lastStartLoc, 0, Zt(O)),
                T = null);
                break;
            case 7:
                O.value == null && r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Zt(O)),
                A.items.push(f(v, O.value || ""));
                break;
            case 8:
                {
                    const N = y(v);
                    A.items.push(N.node),
                    E = N.nextConsumeToken || null;
                    break
                }
            }
        } while (b.currentType !== 14 && b.currentType !== 1);
        const D = b.currentType === 1 ? b.lastOffset : v.currentOffset()
          , k = b.currentType === 1 ? b.lastEndLoc : v.currentPosition();
        return i(A, D, k),
        A
    }
    function p(v, b, _, S) {
        const A = v.context();
        let E = S.items.length === 0;
        const T = l(1, b, _);
        T.cases = [],
        T.cases.push(S);
        do {
            const D = w(v);
            E || (E = D.items.length === 0),
            T.cases.push(D)
        } while (A.currentType !== 14);
        return E && r(v, Ee.MUST_HAVE_MESSAGES_IN_PLURAL, _, 0),
        i(T, v.currentOffset(), v.currentPosition()),
        T
    }
    function C(v) {
        const b = v.context()
          , {offset: _, startLoc: S} = b
          , A = w(v);
        return b.currentType === 14 ? A : p(v, _, S, A)
    }
    function g(v) {
        const b = qp(v, gm({}, e))
          , _ = b.context()
          , S = l(0, _.offset, _.startLoc);
        return t && S.loc && (S.loc.source = v),
        S.body = C(b),
        e.onCacheKey && (S.cacheKey = e.onCacheKey(v)),
        _.currentType !== 14 && r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, v[_.offset] || ""),
        i(S, b.currentOffset(), b.currentPosition()),
        S
    }
    return {
        parse: g
    }
}
function Zt(e) {
    if (e.type === 14)
        return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}
function t_(e, t={}) {
    const n = {
        ast: e,
        helpers: new Set
    };
    return {
        context: ()=>n,
        helper: o=>(n.helpers.add(o),
        o)
    }
}
function Gu(e, t) {
    for (let n = 0; n < e.length; n++)
        Sc(e[n], t)
}
function Sc(e, t) {
    switch (e.type) {
    case 1:
        Gu(e.cases, t),
        t.helper("plural");
        break;
    case 2:
        Gu(e.items, t);
        break;
    case 6:
        {
            Sc(e.key, t),
            t.helper("linked"),
            t.helper("type");
            break
        }
    case 5:
        t.helper("interpolate"),
        t.helper("list");
        break;
    case 4:
        t.helper("interpolate"),
        t.helper("named");
        break
    }
}
function n_(e, t={}) {
    const n = t_(e);
    n.helper("normalize"),
    e.body && Sc(e.body, n);
    const a = n.context();
    e.helpers = Array.from(a.helpers)
}
function a_(e) {
    const t = e.body;
    return t.type === 2 ? Ku(t) : t.cases.forEach(n=>Ku(n)),
    e
}
function Ku(e) {
    if (e.items.length === 1) {
        const t = e.items[0];
        (t.type === 3 || t.type === 9) && (e.static = t.value,
        delete t.value)
    } else {
        const t = [];
        for (let n = 0; n < e.items.length; n++) {
            const a = e.items[n];
            if (!(a.type === 3 || a.type === 9) || a.value == null)
                break;
            t.push(a.value)
        }
        if (t.length === e.items.length) {
            e.static = vm(t);
            for (let n = 0; n < e.items.length; n++) {
                const a = e.items[n];
                (a.type === 3 || a.type === 9) && delete a.value
            }
        }
    }
}
const o_ = "minifier";
function io(e) {
    switch (e.t = e.type,
    e.type) {
    case 0:
        {
            const t = e;
            io(t.body),
            t.b = t.body,
            delete t.body;
            break
        }
    case 1:
        {
            const t = e
              , n = t.cases;
            for (let a = 0; a < n.length; a++)
                io(n[a]);
            t.c = n,
            delete t.cases;
            break
        }
    case 2:
        {
            const t = e
              , n = t.items;
            for (let a = 0; a < n.length; a++)
                io(n[a]);
            t.i = n,
            delete t.items,
            t.static && (t.s = t.static,
            delete t.static);
            break
        }
    case 3:
    case 9:
    case 8:
    case 7:
        {
            const t = e;
            t.value && (t.v = t.value,
            delete t.value);
            break
        }
    case 6:
        {
            const t = e;
            io(t.key),
            t.k = t.key,
            delete t.key,
            t.modifier && (io(t.modifier),
            t.m = t.modifier,
            delete t.modifier);
            break
        }
    case 5:
        {
            const t = e;
            t.i = t.index,
            delete t.index;
            break
        }
    case 4:
        {
            const t = e;
            t.k = t.key,
            delete t.key;
            break
        }
    default:
        throw No(Ee.UNHANDLED_MINIFIER_NODE_TYPE, null, {
            domain: o_,
            args: [e.type]
        })
    }
    delete e.type
}
const r_ = "parser";
function l_(e, t) {
    const {sourceMap: n, filename: a, breakLineCode: r, needIndent: o} = t
      , l = t.location !== !1
      , i = {
        filename: a,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: r,
        needIndent: o,
        indentLevel: 0
    };
    l && e.loc && (i.source = e.loc.source);
    const s = ()=>i;
    function c(p, C) {
        i.code += p
    }
    function u(p, C=!0) {
        const g = C ? r : "";
        c(o ? g + "  ".repeat(p) : g)
    }
    function f(p=!0) {
        const C = ++i.indentLevel;
        p && u(C)
    }
    function d(p=!0) {
        const C = --i.indentLevel;
        p && u(C)
    }
    function m() {
        u(i.indentLevel)
    }
    return {
        context: s,
        push: c,
        indent: f,
        deindent: d,
        newline: m,
        helper: p=>`_${p}`,
        needIndent: ()=>i.needIndent
    }
}
function i_(e, t) {
    const {helper: n} = e;
    e.push(`${n("linked")}(`),
    Eo(e, t.key),
    t.modifier ? (e.push(", "),
    Eo(e, t.modifier),
    e.push(", _type")) : e.push(", undefined, _type"),
    e.push(")")
}
function s_(e, t) {
    const {helper: n, needIndent: a} = e;
    e.push(`${n("normalize")}([`),
    e.indent(a());
    const r = t.items.length;
    for (let o = 0; o < r && (Eo(e, t.items[o]),
    o !== r - 1); o++)
        e.push(", ");
    e.deindent(a()),
    e.push("])")
}
function c_(e, t) {
    const {helper: n, needIndent: a} = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`),
        e.indent(a());
        const r = t.cases.length;
        for (let o = 0; o < r && (Eo(e, t.cases[o]),
        o !== r - 1); o++)
            e.push(", ");
        e.deindent(a()),
        e.push("])")
    }
}
function u_(e, t) {
    t.body ? Eo(e, t.body) : e.push("null")
}
function Eo(e, t) {
    const {helper: n} = e;
    switch (t.type) {
    case 0:
        u_(e, t);
        break;
    case 1:
        c_(e, t);
        break;
    case 2:
        s_(e, t);
        break;
    case 6:
        i_(e, t);
        break;
    case 8:
        e.push(JSON.stringify(t.value), t);
        break;
    case 7:
        e.push(JSON.stringify(t.value), t);
        break;
    case 5:
        e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
        break;
    case 4:
        e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
        break;
    case 9:
        e.push(JSON.stringify(t.value), t);
        break;
    case 3:
        e.push(JSON.stringify(t.value), t);
        break;
    default:
        throw No(Ee.UNHANDLED_CODEGEN_NODE_TYPE, null, {
            domain: r_,
            args: [t.type]
        })
    }
}
const f_ = (e,t={})=>{
    const n = zu(t.mode) ? t.mode : "normal"
      , a = zu(t.filename) ? t.filename : "message.intl"
      , r = !!t.sourceMap
      , o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`
      , l = t.needIndent ? t.needIndent : n !== "arrow"
      , i = e.helpers || []
      , s = l_(e, {
        mode: n,
        filename: a,
        sourceMap: r,
        breakLineCode: o,
        needIndent: l
    });
    s.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    s.indent(l),
    i.length > 0 && (s.push(`const { ${vm(i.map(f=>`${f}: _${f}`), ", ")} } = ctx`),
    s.newline()),
    s.push("return "),
    Eo(s, e),
    s.deindent(l),
    s.push("}"),
    delete e.helpers;
    const {code: c, map: u} = s.context();
    return {
        ast: e,
        code: c,
        map: u ? u.toJSON() : void 0
    }
}
;
function d_(e, t={}) {
    const n = gm({}, t)
      , a = !!n.jit
      , r = !!n.minify
      , o = n.optimize == null ? !0 : n.optimize
      , i = e_(n).parse(e);
    return a ? (o && a_(i),
    r && io(i),
    {
        ast: i,
        code: ""
    }) : (n_(i, n),
    f_(i, n))
}
/*!
  * core-base v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function h_() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Pn().__INTLIFY_PROD_DEVTOOLS__ = !1),
    typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Pn().__INTLIFY_JIT_COMPILATION__ = !1),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Pn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1)
}
const pa = [];
pa[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
pa[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
pa[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
pa[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
};
pa[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
pa[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
pa[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const m_ = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function g_(e) {
    return m_.test(e)
}
function v_(e) {
    const t = e.charCodeAt(0)
      , n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function b_(e) {
    if (e == null)
        return "o";
    switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
        return e;
    case 95:
    case 36:
    case 45:
        return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
        return "w"
    }
    return "i"
}
function y_(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : g_(t) ? v_(t) : "*" + t
}
function p_(e) {
    const t = [];
    let n = -1, a = 0, r = 0, o, l, i, s, c, u, f;
    const d = [];
    d[0] = ()=>{
        l === void 0 ? l = i : l += i
    }
    ,
    d[1] = ()=>{
        l !== void 0 && (t.push(l),
        l = void 0)
    }
    ,
    d[2] = ()=>{
        d[0](),
        r++
    }
    ,
    d[3] = ()=>{
        if (r > 0)
            r--,
            a = 4,
            d[0]();
        else {
            if (r = 0,
            l === void 0 || (l = y_(l),
            l === !1))
                return !1;
            d[1]()
        }
    }
    ;
    function m() {
        const y = e[n + 1];
        if (a === 5 && y === "'" || a === 6 && y === '"')
            return n++,
            i = "\\" + y,
            d[0](),
            !0
    }
    for (; a !== null; )
        if (n++,
        o = e[n],
        !(o === "\\" && m())) {
            if (s = b_(o),
            f = pa[a],
            c = f[s] || f.l || 8,
            c === 8 || (a = c[0],
            c[1] !== void 0 && (u = d[c[1]],
            u && (i = o,
            u() === !1))))
                return;
            if (a === 7)
                return t
        }
}
const Xu = new Map;
function __(e, t) {
    return Ve(e) ? e[t] : null
}
function w_(e, t) {
    if (!Ve(e))
        return null;
    let n = Xu.get(t);
    if (n || (n = p_(t),
    n && Xu.set(t, n)),
    !n)
        return null;
    const a = n.length;
    let r = e
      , o = 0;
    for (; o < a; ) {
        const l = r[n[o]];
        if (l === void 0 || We(r))
            return null;
        r = l,
        o++
    }
    return r
}
const C_ = e=>e
  , S_ = e=>""
  , E_ = "text"
  , T_ = e=>e.length === 0 ? "" : $p(e)
  , x_ = Dp;
function qu(e, t) {
    return e = Math.abs(e),
    t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
function k_(e) {
    const t = lt(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (lt(e.named.count) || lt(e.named.n)) ? lt(e.named.count) ? e.named.count : lt(e.named.n) ? e.named.n : t : t
}
function I_(e, t) {
    t.count || (t.count = e),
    t.n || (t.n = e)
}
function A_(e={}) {
    const t = e.locale
      , n = k_(e)
      , a = Ve(e.pluralRules) && ve(t) && We(e.pluralRules[t]) ? e.pluralRules[t] : qu
      , r = Ve(e.pluralRules) && ve(t) && We(e.pluralRules[t]) ? qu : void 0
      , o = C=>C[a(n, C.length, r)]
      , l = e.list || []
      , i = C=>l[C]
      , s = e.named || {};
    lt(e.pluralIndex) && I_(n, s);
    const c = C=>s[C];
    function u(C) {
        const g = We(e.messages) ? e.messages(C) : Ve(e.messages) ? e.messages[C] : !1;
        return g || (e.parent ? e.parent.message(C) : S_)
    }
    const f = C=>e.modifiers ? e.modifiers[C] : C_
      , d = ke(e.processor) && We(e.processor.normalize) ? e.processor.normalize : T_
      , m = ke(e.processor) && We(e.processor.interpolate) ? e.processor.interpolate : x_
      , y = ke(e.processor) && ve(e.processor.type) ? e.processor.type : E_
      , p = {
        list: i,
        named: c,
        plural: o,
        linked: (C,...g)=>{
            const [v,b] = g;
            let _ = "text"
              , S = "";
            g.length === 1 ? Ve(v) ? (S = v.modifier || S,
            _ = v.type || _) : ve(v) && (S = v || S) : g.length === 2 && (ve(v) && (S = v || S),
            ve(b) && (_ = b || _));
            const A = u(C)(p)
              , E = _ === "vnode" && ze(A) && S ? A[0] : A;
            return S ? f(S)(E, _) : E
        }
        ,
        message: u,
        type: y,
        interpolate: m,
        normalize: d,
        values: yt({}, l, s)
    };
    return p
}
let pr = null;
function O_(e) {
    pr = e
}
function P_(e, t, n) {
    pr && pr.emit("i18n:init", {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const R_ = L_("function:translate");
function L_(e) {
    return t=>pr && pr.emit(e, t)
}
const bm = Cc.__EXTEND_POINT__
  , Ia = ei(bm)
  , D_ = {
    NOT_FOUND_KEY: bm,
    FALLBACK_TO_TRANSLATE: Ia(),
    CANNOT_FORMAT_NUMBER: Ia(),
    FALLBACK_TO_NUMBER_FORMAT: Ia(),
    CANNOT_FORMAT_DATE: Ia(),
    FALLBACK_TO_DATE_FORMAT: Ia(),
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: Ia(),
    __EXTEND_POINT__: Ia()
}
  , ym = Ee.__EXTEND_POINT__
  , Aa = ei(ym)
  , an = {
    INVALID_ARGUMENT: ym,
    INVALID_DATE_ARGUMENT: Aa(),
    INVALID_ISO_DATE_ARGUMENT: Aa(),
    NOT_SUPPORT_NON_STRING_MESSAGE: Aa(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: Aa(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Aa(),
    NOT_SUPPORT_LOCALE_TYPE: Aa(),
    __EXTEND_POINT__: Aa()
};
function yn(e) {
    return No(e, null, void 0)
}
function Ec(e, t) {
    return t.locale != null ? Ju(t.locale) : Ju(e.locale)
}
let Li;
function Ju(e) {
    if (ve(e))
        return e;
    if (We(e)) {
        if (e.resolvedOnce && Li != null)
            return Li;
        if (e.constructor.name === "Function") {
            const t = e();
            if (Lp(t))
                throw yn(an.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return Li = t
        } else
            throw yn(an.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else
        throw yn(an.NOT_SUPPORT_LOCALE_TYPE)
}
function $_(e, t, n) {
    return [...new Set([n, ...ze(t) ? t : Ve(t) ? Object.keys(t) : ve(t) ? [t] : [n]])]
}
function pm(e, t, n) {
    const a = ve(n) ? n : To
      , r = e;
    r.__localeChainCache || (r.__localeChainCache = new Map);
    let o = r.__localeChainCache.get(a);
    if (!o) {
        o = [];
        let l = [n];
        for (; ze(l); )
            l = Zu(o, l, t);
        const i = ze(t) || !ke(t) ? t : t.default ? t.default : null;
        l = ve(i) ? [i] : i,
        ze(l) && Zu(o, l, !1),
        r.__localeChainCache.set(a, o)
    }
    return o
}
function Zu(e, t, n) {
    let a = !0;
    for (let r = 0; r < t.length && Le(a); r++) {
        const o = t[r];
        ve(o) && (a = N_(e, t[r], n))
    }
    return a
}
function N_(e, t, n) {
    let a;
    const r = t.split("-");
    do {
        const o = r.join("-");
        a = M_(e, o, n),
        r.splice(-1, 1)
    } while (r.length && a === !0);
    return a
}
function M_(e, t, n) {
    let a = !1;
    if (!e.includes(t) && (a = !0,
    t)) {
        a = t[t.length - 1] !== "!";
        const r = t.replace(/!/g, "");
        e.push(r),
        (ze(n) || ke(n)) && n[r] && (a = n[r])
    }
    return a
}
const B_ = "9.13.1"
  , ti = -1
  , To = "en-US"
  , Qu = ""
  , ef = e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function F_() {
    return {
        upper: (e,t)=>t === "text" && ve(e) ? e.toUpperCase() : t === "vnode" && Ve(e) && "__v_isVNode"in e ? e.children.toUpperCase() : e,
        lower: (e,t)=>t === "text" && ve(e) ? e.toLowerCase() : t === "vnode" && Ve(e) && "__v_isVNode"in e ? e.children.toLowerCase() : e,
        capitalize: (e,t)=>t === "text" && ve(e) ? ef(e) : t === "vnode" && Ve(e) && "__v_isVNode"in e ? ef(e.children) : e
    }
}
let _m;
function tf(e) {
    _m = e
}
let wm;
function V_(e) {
    wm = e
}
let Cm;
function H_(e) {
    Cm = e
}
let Sm = null;
const U_ = e=>{
    Sm = e
}
  , W_ = ()=>Sm;
let Em = null;
const nf = e=>{
    Em = e
}
  , j_ = ()=>Em;
let af = 0;
function z_(e={}) {
    const t = We(e.onWarn) ? e.onWarn : Np
      , n = ve(e.version) ? e.version : B_
      , a = ve(e.locale) || We(e.locale) ? e.locale : To
      , r = We(a) ? To : a
      , o = ze(e.fallbackLocale) || ke(e.fallbackLocale) || ve(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r
      , l = ke(e.messages) ? e.messages : {
        [r]: {}
    }
      , i = ke(e.datetimeFormats) ? e.datetimeFormats : {
        [r]: {}
    }
      , s = ke(e.numberFormats) ? e.numberFormats : {
        [r]: {}
    }
      , c = yt({}, e.modifiers || {}, F_())
      , u = e.pluralRules || {}
      , f = We(e.missing) ? e.missing : null
      , d = Le(e.missingWarn) || ga(e.missingWarn) ? e.missingWarn : !0
      , m = Le(e.fallbackWarn) || ga(e.fallbackWarn) ? e.fallbackWarn : !0
      , y = !!e.fallbackFormat
      , w = !!e.unresolving
      , p = We(e.postTranslation) ? e.postTranslation : null
      , C = ke(e.processor) ? e.processor : null
      , g = Le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , v = !!e.escapeParameter
      , b = We(e.messageCompiler) ? e.messageCompiler : _m
      , _ = We(e.messageResolver) ? e.messageResolver : wm || __
      , S = We(e.localeFallbacker) ? e.localeFallbacker : Cm || $_
      , A = Ve(e.fallbackContext) ? e.fallbackContext : void 0
      , E = e
      , T = Ve(E.__datetimeFormatters) ? E.__datetimeFormatters : new Map
      , D = Ve(E.__numberFormatters) ? E.__numberFormatters : new Map
      , k = Ve(E.__meta) ? E.__meta : {};
    af++;
    const O = {
        version: n,
        cid: af,
        locale: a,
        fallbackLocale: o,
        messages: l,
        modifiers: c,
        pluralRules: u,
        missing: f,
        missingWarn: d,
        fallbackWarn: m,
        fallbackFormat: y,
        unresolving: w,
        postTranslation: p,
        processor: C,
        warnHtmlMessage: g,
        escapeParameter: v,
        messageCompiler: b,
        messageResolver: _,
        localeFallbacker: S,
        fallbackContext: A,
        onWarn: t,
        __meta: k
    };
    return O.datetimeFormats = i,
    O.numberFormats = s,
    O.__datetimeFormatters = T,
    O.__numberFormatters = D,
    __INTLIFY_PROD_DEVTOOLS__ && P_(O, n, k),
    O
}
function Tc(e, t, n, a, r) {
    const {missing: o, onWarn: l} = e;
    if (o !== null) {
        const i = o(e, n, t, r);
        return ve(i) ? i : t
    } else
        return t
}
function zo(e, t, n) {
    const a = e;
    a.__localeChainCache = new Map,
    e.localeFallbacker(e, n, t)
}
function Y_(e, t) {
    return e === t ? !1 : e.split("-")[0] === t.split("-")[0]
}
function G_(e, t) {
    const n = t.indexOf(e);
    if (n === -1)
        return !1;
    for (let a = n + 1; a < t.length; a++)
        if (Y_(e, t[a]))
            return !0;
    return !1
}
function Di(e) {
    return n=>K_(n, e)
}
function K_(e, t) {
    const n = t.b || t.body;
    if ((n.t || n.type) === 1) {
        const a = n
          , r = a.c || a.cases;
        return e.plural(r.reduce((o,l)=>[...o, of(e, l)], []))
    } else
        return of(e, n)
}
function of(e, t) {
    const n = t.s || t.static;
    if (n)
        return e.type === "text" ? n : e.normalize([n]);
    {
        const a = (t.i || t.items).reduce((r,o)=>[...r, Ss(e, o)], []);
        return e.normalize(a)
    }
}
function Ss(e, t) {
    const n = t.t || t.type;
    switch (n) {
    case 3:
        {
            const a = t;
            return a.v || a.value
        }
    case 9:
        {
            const a = t;
            return a.v || a.value
        }
    case 4:
        {
            const a = t;
            return e.interpolate(e.named(a.k || a.key))
        }
    case 5:
        {
            const a = t;
            return e.interpolate(e.list(a.i != null ? a.i : a.index))
        }
    case 6:
        {
            const a = t
              , r = a.m || a.modifier;
            return e.linked(Ss(e, a.k || a.key), r ? Ss(e, r) : void 0, e.type)
        }
    case 7:
        {
            const a = t;
            return a.v || a.value
        }
    case 8:
        {
            const a = t;
            return a.v || a.value
        }
    default:
        throw new Error(`unhandled node type on format message part: ${n}`)
    }
}
const Tm = e=>e;
let co = Object.create(null);
const xo = e=>Ve(e) && (e.t === 0 || e.type === 0) && ("b"in e || "body"in e);
function xm(e, t={}) {
    let n = !1;
    const a = t.onError || Wp;
    return t.onError = r=>{
        n = !0,
        a(r)
    }
    ,
    {
        ...d_(e, t),
        detectError: n
    }
}
const X_ = (e,t)=>{
    if (!ve(e))
        throw yn(an.NOT_SUPPORT_NON_STRING_MESSAGE);
    {
        Le(t.warnHtmlMessage) && t.warnHtmlMessage;
        const a = (t.onCacheKey || Tm)(e)
          , r = co[a];
        if (r)
            return r;
        const {code: o, detectError: l} = xm(e, t)
          , i = new Function(`return ${o}`)();
        return l ? i : co[a] = i
    }
}
;
function q_(e, t) {
    if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && ve(e)) {
        Le(t.warnHtmlMessage) && t.warnHtmlMessage;
        const a = (t.onCacheKey || Tm)(e)
          , r = co[a];
        if (r)
            return r;
        const {ast: o, detectError: l} = xm(e, {
            ...t,
            location: !1,
            jit: !0
        })
          , i = Di(o);
        return l ? i : co[a] = i
    } else {
        const n = e.cacheKey;
        if (n) {
            const a = co[n];
            return a || (co[n] = Di(e))
        } else
            return Di(e)
    }
}
const rf = ()=>""
  , zt = e=>We(e);
function lf(e, ...t) {
    const {fallbackFormat: n, postTranslation: a, unresolving: r, messageCompiler: o, fallbackLocale: l, messages: i} = e
      , [s,c] = Es(...t)
      , u = Le(c.missingWarn) ? c.missingWarn : e.missingWarn
      , f = Le(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn
      , d = Le(c.escapeParameter) ? c.escapeParameter : e.escapeParameter
      , m = !!c.resolvedMessage
      , y = ve(c.default) || Le(c.default) ? Le(c.default) ? o ? s : ()=>s : c.default : n ? o ? s : ()=>s : ""
      , w = n || y !== ""
      , p = Ec(e, c);
    d && J_(c);
    let[C,g,v] = m ? [s, p, i[p] || {}] : km(e, s, p, l, f, u)
      , b = C
      , _ = s;
    if (!m && !(ve(b) || xo(b) || zt(b)) && w && (b = y,
    _ = b),
    !m && (!(ve(b) || xo(b) || zt(b)) || !ve(g)))
        return r ? ti : s;
    let S = !1;
    const A = ()=>{
        S = !0
    }
      , E = zt(b) ? b : Im(e, s, g, b, _, A);
    if (S)
        return b;
    const T = e0(e, g, v, c)
      , D = A_(T)
      , k = Z_(e, E, D)
      , O = a ? a(k, s) : k;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const N = {
            timestamp: Date.now(),
            key: ve(s) ? s : zt(b) ? b.key : "",
            locale: g || (zt(b) ? b.locale : ""),
            format: ve(b) ? b : zt(b) ? b.source : "",
            message: O
        };
        N.meta = yt({}, e.__meta, W_() || {}),
        R_(N)
    }
    return O
}
function J_(e) {
    ze(e.list) ? e.list = e.list.map(t=>ve(t) ? ju(t) : t) : Ve(e.named) && Object.keys(e.named).forEach(t=>{
        ve(e.named[t]) && (e.named[t] = ju(e.named[t]))
    }
    )
}
function km(e, t, n, a, r, o) {
    const {messages: l, onWarn: i, messageResolver: s, localeFallbacker: c} = e
      , u = c(e, a, n);
    let f = {}, d, m = null;
    const y = "translate";
    for (let w = 0; w < u.length && (d = u[w],
    f = l[d] || {},
    (m = s(f, t)) === null && (m = f[t]),
    !(ve(m) || xo(m) || zt(m))); w++)
        if (!G_(d, u)) {
            const p = Tc(e, t, d, o, y);
            p !== t && (m = p)
        }
    return [m, d, f]
}
function Im(e, t, n, a, r, o) {
    const {messageCompiler: l, warnHtmlMessage: i} = e;
    if (zt(a)) {
        const c = a;
        return c.locale = c.locale || n,
        c.key = c.key || t,
        c
    }
    if (l == null) {
        const c = ()=>a;
        return c.locale = n,
        c.key = t,
        c
    }
    const s = l(a, Q_(e, n, r, a, i, o));
    return s.locale = n,
    s.key = t,
    s.source = a,
    s
}
function Z_(e, t, n) {
    return t(n)
}
function Es(...e) {
    const [t,n,a] = e
      , r = {};
    if (!ve(t) && !lt(t) && !zt(t) && !xo(t))
        throw yn(an.INVALID_ARGUMENT);
    const o = lt(t) ? String(t) : (zt(t),
    t);
    return lt(n) ? r.plural = n : ve(n) ? r.default = n : ke(n) && !Ql(n) ? r.named = n : ze(n) && (r.list = n),
    lt(a) ? r.plural = a : ve(a) ? r.default = a : ke(a) && yt(r, a),
    [o, r]
}
function Q_(e, t, n, a, r, o) {
    return {
        locale: t,
        key: n,
        warnHtmlMessage: r,
        onError: l=>{
            throw o && o(l),
            l
        }
        ,
        onCacheKey: l=>Ap(t, n, l)
    }
}
function e0(e, t, n, a) {
    const {modifiers: r, pluralRules: o, messageResolver: l, fallbackLocale: i, fallbackWarn: s, missingWarn: c, fallbackContext: u} = e
      , d = {
        locale: t,
        modifiers: r,
        pluralRules: o,
        messages: m=>{
            let y = l(n, m);
            if (y == null && u) {
                const [,,w] = km(u, m, t, i, s, c);
                y = l(w, m)
            }
            if (ve(y) || xo(y)) {
                let w = !1;
                const C = Im(e, m, t, y, m, ()=>{
                    w = !0
                }
                );
                return w ? rf : C
            } else
                return zt(y) ? y : rf
        }
    };
    return e.processor && (d.processor = e.processor),
    a.list && (d.list = a.list),
    a.named && (d.named = a.named),
    lt(a.plural) && (d.pluralIndex = a.plural),
    d
}
function sf(e, ...t) {
    const {datetimeFormats: n, unresolving: a, fallbackLocale: r, onWarn: o, localeFallbacker: l} = e
      , {__datetimeFormatters: i} = e
      , [s,c,u,f] = Ts(...t)
      , d = Le(u.missingWarn) ? u.missingWarn : e.missingWarn;
    Le(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const m = !!u.part
      , y = Ec(e, u)
      , w = l(e, r, y);
    if (!ve(s) || s === "")
        return new Intl.DateTimeFormat(y,f).format(c);
    let p = {}, C, g = null;
    const v = "datetime format";
    for (let S = 0; S < w.length && (C = w[S],
    p = n[C] || {},
    g = p[s],
    !ke(g)); S++)
        Tc(e, s, C, d, v);
    if (!ke(g) || !ve(C))
        return a ? ti : s;
    let b = `${C}__${s}`;
    Ql(f) || (b = `${b}__${JSON.stringify(f)}`);
    let _ = i.get(b);
    return _ || (_ = new Intl.DateTimeFormat(C,yt({}, g, f)),
    i.set(b, _)),
    m ? _.formatToParts(c) : _.format(c)
}
const Am = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function Ts(...e) {
    const [t,n,a,r] = e
      , o = {};
    let l = {}, i;
    if (ve(t)) {
        const s = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!s)
            throw yn(an.INVALID_ISO_DATE_ARGUMENT);
        const c = s[3] ? s[3].trim().startsWith("T") ? `${s[1].trim()}${s[3].trim()}` : `${s[1].trim()}T${s[3].trim()}` : s[1].trim();
        i = new Date(c);
        try {
            i.toISOString()
        } catch {
            throw yn(an.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (Pp(t)) {
        if (isNaN(t.getTime()))
            throw yn(an.INVALID_DATE_ARGUMENT);
        i = t
    } else if (lt(t))
        i = t;
    else
        throw yn(an.INVALID_ARGUMENT);
    return ve(n) ? o.key = n : ke(n) && Object.keys(n).forEach(s=>{
        Am.includes(s) ? l[s] = n[s] : o[s] = n[s]
    }
    ),
    ve(a) ? o.locale = a : ke(a) && (l = a),
    ke(r) && (l = r),
    [o.key || "", i, o, l]
}
function cf(e, t, n) {
    const a = e;
    for (const r in n) {
        const o = `${t}__${r}`;
        a.__datetimeFormatters.has(o) && a.__datetimeFormatters.delete(o)
    }
}
function uf(e, ...t) {
    const {numberFormats: n, unresolving: a, fallbackLocale: r, onWarn: o, localeFallbacker: l} = e
      , {__numberFormatters: i} = e
      , [s,c,u,f] = xs(...t)
      , d = Le(u.missingWarn) ? u.missingWarn : e.missingWarn;
    Le(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const m = !!u.part
      , y = Ec(e, u)
      , w = l(e, r, y);
    if (!ve(s) || s === "")
        return new Intl.NumberFormat(y,f).format(c);
    let p = {}, C, g = null;
    const v = "number format";
    for (let S = 0; S < w.length && (C = w[S],
    p = n[C] || {},
    g = p[s],
    !ke(g)); S++)
        Tc(e, s, C, d, v);
    if (!ke(g) || !ve(C))
        return a ? ti : s;
    let b = `${C}__${s}`;
    Ql(f) || (b = `${b}__${JSON.stringify(f)}`);
    let _ = i.get(b);
    return _ || (_ = new Intl.NumberFormat(C,yt({}, g, f)),
    i.set(b, _)),
    m ? _.formatToParts(c) : _.format(c)
}
const Om = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function xs(...e) {
    const [t,n,a,r] = e
      , o = {};
    let l = {};
    if (!lt(t))
        throw yn(an.INVALID_ARGUMENT);
    const i = t;
    return ve(n) ? o.key = n : ke(n) && Object.keys(n).forEach(s=>{
        Om.includes(s) ? l[s] = n[s] : o[s] = n[s]
    }
    ),
    ve(a) ? o.locale = a : ke(a) && (l = a),
    ke(r) && (l = r),
    [o.key || "", i, o, l]
}
function ff(e, t, n) {
    const a = e;
    for (const r in n) {
        const o = `${t}__${r}`;
        a.__numberFormatters.has(o) && a.__numberFormatters.delete(o)
    }
}
h_();
/*!
  * vue-i18n v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const t0 = "9.13.1";
function n0() {
    typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Pn().__VUE_I18N_FULL_INSTALL__ = !0),
    typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Pn().__VUE_I18N_LEGACY_API__ = !0),
    typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Pn().__INTLIFY_JIT_COMPILATION__ = !1),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Pn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1),
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Pn().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const Pm = D_.__EXTEND_POINT__
  , En = ei(Pm);
En(),
En(),
En(),
En(),
En(),
En(),
En(),
En(),
En();
const Rm = an.__EXTEND_POINT__
  , Rt = ei(Rm)
  , ct = {
    UNEXPECTED_RETURN_TYPE: Rm,
    INVALID_ARGUMENT: Rt(),
    MUST_BE_CALL_SETUP_TOP: Rt(),
    NOT_INSTALLED: Rt(),
    NOT_AVAILABLE_IN_LEGACY_MODE: Rt(),
    REQUIRED_VALUE: Rt(),
    INVALID_VALUE: Rt(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Rt(),
    NOT_INSTALLED_WITH_PROVIDE: Rt(),
    UNEXPECTED_ERROR: Rt(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: Rt(),
    BRIDGE_SUPPORT_VUE_2_ONLY: Rt(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Rt(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Rt(),
    __EXTEND_POINT__: Rt()
};
function ht(e, ...t) {
    return No(e, null, void 0)
}
const ks = ya("__translateVNode")
  , Is = ya("__datetimeParts")
  , As = ya("__numberParts")
  , Lm = ya("__setPluralRules")
  , Dm = ya("__injectWithOption")
  , Os = ya("__dispose");
function _r(e) {
    if (!Ve(e))
        return e;
    for (const t in e)
        if (kl(e, t))
            if (!t.includes("."))
                Ve(e[t]) && _r(e[t]);
            else {
                const n = t.split(".")
                  , a = n.length - 1;
                let r = e
                  , o = !1;
                for (let l = 0; l < a; l++) {
                    if (n[l]in r || (r[n[l]] = {}),
                    !Ve(r[n[l]])) {
                        o = !0;
                        break
                    }
                    r = r[n[l]]
                }
                o || (r[n[a]] = e[t],
                delete e[t]),
                Ve(r[n[a]]) && _r(r[n[a]])
            }
    return e
}
function ni(e, t) {
    const {messages: n, __i18n: a, messageResolver: r, flatJson: o} = t
      , l = ke(n) ? n : ze(a) ? {} : {
        [e]: {}
    };
    if (ze(a) && a.forEach(i=>{
        if ("locale"in i && "resource"in i) {
            const {locale: s, resource: c} = i;
            s ? (l[s] = l[s] || {},
            gl(c, l[s])) : gl(c, l)
        } else
            ve(i) && gl(JSON.parse(i), l)
    }
    ),
    r == null && o)
        for (const i in l)
            kl(l, i) && _r(l[i]);
    return l
}
function $m(e) {
    return e.type
}
function Nm(e, t, n) {
    let a = Ve(t.messages) ? t.messages : {};
    "__i18nGlobal"in n && (a = ni(e.locale.value, {
        messages: a,
        __i18n: n.__i18nGlobal
    }));
    const r = Object.keys(a);
    r.length && r.forEach(o=>{
        e.mergeLocaleMessage(o, a[o])
    }
    );
    {
        if (Ve(t.datetimeFormats)) {
            const o = Object.keys(t.datetimeFormats);
            o.length && o.forEach(l=>{
                e.mergeDateTimeFormat(l, t.datetimeFormats[l])
            }
            )
        }
        if (Ve(t.numberFormats)) {
            const o = Object.keys(t.numberFormats);
            o.length && o.forEach(l=>{
                e.mergeNumberFormat(l, t.numberFormats[l])
            }
            )
        }
    }
}
function df(e) {
    return h(Do, null, e, 0)
}
const hf = "__INTLIFY_META__"
  , mf = ()=>[]
  , a0 = ()=>!1;
let gf = 0;
function vf(e) {
    return (t,n,a,r)=>e(n, a, gt() || void 0, r)
}
const o0 = ()=>{
    const e = gt();
    let t = null;
    return e && (t = $m(e)[hf]) ? {
        [hf]: t
    } : null
}
;
function xc(e={}, t) {
    const {__root: n, __injectWithOption: a} = e
      , r = n === void 0
      , o = e.flatJson
      , l = xl ? V : fc
      , i = !!e.translateExistCompatible;
    let s = Le(e.inheritLocale) ? e.inheritLocale : !0;
    const c = l(n && s ? n.locale.value : ve(e.locale) ? e.locale : To)
      , u = l(n && s ? n.fallbackLocale.value : ve(e.fallbackLocale) || ze(e.fallbackLocale) || ke(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value)
      , f = l(ni(c.value, e))
      , d = l(ke(e.datetimeFormats) ? e.datetimeFormats : {
        [c.value]: {}
    })
      , m = l(ke(e.numberFormats) ? e.numberFormats : {
        [c.value]: {}
    });
    let y = n ? n.missingWarn : Le(e.missingWarn) || ga(e.missingWarn) ? e.missingWarn : !0
      , w = n ? n.fallbackWarn : Le(e.fallbackWarn) || ga(e.fallbackWarn) ? e.fallbackWarn : !0
      , p = n ? n.fallbackRoot : Le(e.fallbackRoot) ? e.fallbackRoot : !0
      , C = !!e.fallbackFormat
      , g = We(e.missing) ? e.missing : null
      , v = We(e.missing) ? vf(e.missing) : null
      , b = We(e.postTranslation) ? e.postTranslation : null
      , _ = n ? n.warnHtmlMessage : Le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , S = !!e.escapeParameter;
    const A = n ? n.modifiers : ke(e.modifiers) ? e.modifiers : {};
    let E = e.pluralRules || n && n.pluralRules, T;
    T = (()=>{
        r && nf(null);
        const B = {
            version: t0,
            locale: c.value,
            fallbackLocale: u.value,
            messages: f.value,
            modifiers: A,
            pluralRules: E,
            missing: v === null ? void 0 : v,
            missingWarn: y,
            fallbackWarn: w,
            fallbackFormat: C,
            unresolving: !0,
            postTranslation: b === null ? void 0 : b,
            warnHtmlMessage: _,
            escapeParameter: S,
            messageResolver: e.messageResolver,
            messageCompiler: e.messageCompiler,
            __meta: {
                framework: "vue"
            }
        };
        B.datetimeFormats = d.value,
        B.numberFormats = m.value,
        B.__datetimeFormatters = ke(T) ? T.__datetimeFormatters : void 0,
        B.__numberFormatters = ke(T) ? T.__numberFormatters : void 0;
        const z = z_(B);
        return r && nf(z),
        z
    }
    )(),
    zo(T, c.value, u.value);
    function k() {
        return [c.value, u.value, f.value, d.value, m.value]
    }
    const O = F({
        get: ()=>c.value,
        set: B=>{
            c.value = B,
            T.locale = c.value
        }
    })
      , N = F({
        get: ()=>u.value,
        set: B=>{
            u.value = B,
            T.fallbackLocale = u.value,
            zo(T, c.value, B)
        }
    })
      , Z = F(()=>f.value)
      , ce = F(()=>d.value)
      , j = F(()=>m.value);
    function ee() {
        return We(b) ? b : null
    }
    function ue(B) {
        b = B,
        T.postTranslation = B
    }
    function Te() {
        return g
    }
    function Pe(B) {
        B !== null && (v = vf(B)),
        g = B,
        T.missing = v
    }
    const H = (B,z,we,Ce,He,wt)=>{
        k();
        let Dt;
        try {
            __INTLIFY_PROD_DEVTOOLS__,
            r || (T.fallbackContext = n ? j_() : void 0),
            Dt = B(T)
        } finally {
            __INTLIFY_PROD_DEVTOOLS__,
            r || (T.fallbackContext = void 0)
        }
        if (we !== "translate exists" && lt(Dt) && Dt === ti || we === "translate exists" && !Dt) {
            const [Lr,Ga] = z();
            return n && p ? Ce(n) : He(Lr)
        } else {
            if (wt(Dt))
                return Dt;
            throw ht(ct.UNEXPECTED_RETURN_TYPE)
        }
    }
    ;
    function J(...B) {
        return H(z=>Reflect.apply(lf, null, [z, ...B]), ()=>Es(...B), "translate", z=>Reflect.apply(z.t, z, [...B]), z=>z, z=>ve(z))
    }
    function he(...B) {
        const [z,we,Ce] = B;
        if (Ce && !Ve(Ce))
            throw ht(ct.INVALID_ARGUMENT);
        return J(z, we, yt({
            resolvedMessage: !0
        }, Ce || {}))
    }
    function be(...B) {
        return H(z=>Reflect.apply(sf, null, [z, ...B]), ()=>Ts(...B), "datetime format", z=>Reflect.apply(z.d, z, [...B]), ()=>Qu, z=>ve(z))
    }
    function ie(...B) {
        return H(z=>Reflect.apply(uf, null, [z, ...B]), ()=>xs(...B), "number format", z=>Reflect.apply(z.n, z, [...B]), ()=>Qu, z=>ve(z))
    }
    function me(B) {
        return B.map(z=>ve(z) || lt(z) || Le(z) ? df(String(z)) : z)
    }
    const U = {
        normalize: me,
        interpolate: B=>B,
        type: "vnode"
    };
    function W(...B) {
        return H(z=>{
            let we;
            const Ce = z;
            try {
                Ce.processor = U,
                we = Reflect.apply(lf, null, [Ce, ...B])
            } finally {
                Ce.processor = null
            }
            return we
        }
        , ()=>Es(...B), "translate", z=>z[ks](...B), z=>[df(z)], z=>ze(z))
    }
    function ne(...B) {
        return H(z=>Reflect.apply(uf, null, [z, ...B]), ()=>xs(...B), "number format", z=>z[As](...B), mf, z=>ve(z) || ze(z))
    }
    function ye(...B) {
        return H(z=>Reflect.apply(sf, null, [z, ...B]), ()=>Ts(...B), "datetime format", z=>z[Is](...B), mf, z=>ve(z) || ze(z))
    }
    function Se(B) {
        E = B,
        T.pluralRules = E
    }
    function R(B, z) {
        return H(()=>{
            if (!B)
                return !1;
            const we = ve(z) ? z : c.value
              , Ce = Q(we)
              , He = T.messageResolver(Ce, B);
            return i ? He != null : xo(He) || zt(He) || ve(He)
        }
        , ()=>[B], "translate exists", we=>Reflect.apply(we.te, we, [B, z]), a0, we=>Le(we))
    }
    function x(B) {
        let z = null;
        const we = pm(T, u.value, c.value);
        for (let Ce = 0; Ce < we.length; Ce++) {
            const He = f.value[we[Ce]] || {}
              , wt = T.messageResolver(He, B);
            if (wt != null) {
                z = wt;
                break
            }
        }
        return z
    }
    function M(B) {
        const z = x(B);
        return z ?? (n ? n.tm(B) || {} : {})
    }
    function Q(B) {
        return f.value[B] || {}
    }
    function Y(B, z) {
        if (o) {
            const we = {
                [B]: z
            };
            for (const Ce in we)
                kl(we, Ce) && _r(we[Ce]);
            z = we[B]
        }
        f.value[B] = z,
        T.messages = f.value
    }
    function le(B, z) {
        f.value[B] = f.value[B] || {};
        const we = {
            [B]: z
        };
        if (o)
            for (const Ce in we)
                kl(we, Ce) && _r(we[Ce]);
        z = we[B],
        gl(z, f.value[B]),
        T.messages = f.value
    }
    function de(B) {
        return d.value[B] || {}
    }
    function I(B, z) {
        d.value[B] = z,
        T.datetimeFormats = d.value,
        cf(T, B, z)
    }
    function P(B, z) {
        d.value[B] = yt(d.value[B] || {}, z),
        T.datetimeFormats = d.value,
        cf(T, B, z)
    }
    function $(B) {
        return m.value[B] || {}
    }
    function G(B, z) {
        m.value[B] = z,
        T.numberFormats = m.value,
        ff(T, B, z)
    }
    function fe(B, z) {
        m.value[B] = yt(m.value[B] || {}, z),
        T.numberFormats = m.value,
        ff(T, B, z)
    }
    gf++,
    n && xl && (se(n.locale, B=>{
        s && (c.value = B,
        T.locale = B,
        zo(T, c.value, u.value))
    }
    ),
    se(n.fallbackLocale, B=>{
        s && (u.value = B,
        T.fallbackLocale = B,
        zo(T, c.value, u.value))
    }
    ));
    const ae = {
        id: gf,
        locale: O,
        fallbackLocale: N,
        get inheritLocale() {
            return s
        },
        set inheritLocale(B) {
            s = B,
            B && n && (c.value = n.locale.value,
            u.value = n.fallbackLocale.value,
            zo(T, c.value, u.value))
        },
        get availableLocales() {
            return Object.keys(f.value).sort()
        },
        messages: Z,
        get modifiers() {
            return A
        },
        get pluralRules() {
            return E || {}
        },
        get isGlobal() {
            return r
        },
        get missingWarn() {
            return y
        },
        set missingWarn(B) {
            y = B,
            T.missingWarn = y
        },
        get fallbackWarn() {
            return w
        },
        set fallbackWarn(B) {
            w = B,
            T.fallbackWarn = w
        },
        get fallbackRoot() {
            return p
        },
        set fallbackRoot(B) {
            p = B
        },
        get fallbackFormat() {
            return C
        },
        set fallbackFormat(B) {
            C = B,
            T.fallbackFormat = C
        },
        get warnHtmlMessage() {
            return _
        },
        set warnHtmlMessage(B) {
            _ = B,
            T.warnHtmlMessage = B
        },
        get escapeParameter() {
            return S
        },
        set escapeParameter(B) {
            S = B,
            T.escapeParameter = B
        },
        t: J,
        getLocaleMessage: Q,
        setLocaleMessage: Y,
        mergeLocaleMessage: le,
        getPostTranslationHandler: ee,
        setPostTranslationHandler: ue,
        getMissingHandler: Te,
        setMissingHandler: Pe,
        [Lm]: Se
    };
    return ae.datetimeFormats = ce,
    ae.numberFormats = j,
    ae.rt = he,
    ae.te = R,
    ae.tm = M,
    ae.d = be,
    ae.n = ie,
    ae.getDateTimeFormat = de,
    ae.setDateTimeFormat = I,
    ae.mergeDateTimeFormat = P,
    ae.getNumberFormat = $,
    ae.setNumberFormat = G,
    ae.mergeNumberFormat = fe,
    ae[Dm] = a,
    ae[ks] = W,
    ae[Is] = ye,
    ae[As] = ne,
    ae
}
function r0(e) {
    const t = ve(e.locale) ? e.locale : To
      , n = ve(e.fallbackLocale) || ze(e.fallbackLocale) || ke(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t
      , a = We(e.missing) ? e.missing : void 0
      , r = Le(e.silentTranslationWarn) || ga(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0
      , o = Le(e.silentFallbackWarn) || ga(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0
      , l = Le(e.fallbackRoot) ? e.fallbackRoot : !0
      , i = !!e.formatFallbackMessages
      , s = ke(e.modifiers) ? e.modifiers : {}
      , c = e.pluralizationRules
      , u = We(e.postTranslation) ? e.postTranslation : void 0
      , f = ve(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0
      , d = !!e.escapeParameterHtml
      , m = Le(e.sync) ? e.sync : !0;
    let y = e.messages;
    if (ke(e.sharedMessages)) {
        const S = e.sharedMessages;
        y = Object.keys(S).reduce((E,T)=>{
            const D = E[T] || (E[T] = {});
            return yt(D, S[T]),
            E
        }
        , y || {})
    }
    const {__i18n: w, __root: p, __injectWithOption: C} = e
      , g = e.datetimeFormats
      , v = e.numberFormats
      , b = e.flatJson
      , _ = e.translateExistCompatible;
    return {
        locale: t,
        fallbackLocale: n,
        messages: y,
        flatJson: b,
        datetimeFormats: g,
        numberFormats: v,
        missing: a,
        missingWarn: r,
        fallbackWarn: o,
        fallbackRoot: l,
        fallbackFormat: i,
        modifiers: s,
        pluralRules: c,
        postTranslation: u,
        warnHtmlMessage: f,
        escapeParameter: d,
        messageResolver: e.messageResolver,
        inheritLocale: m,
        translateExistCompatible: _,
        __i18n: w,
        __root: p,
        __injectWithOption: C
    }
}
function Ps(e={}, t) {
    {
        const n = xc(r0(e))
          , {__extender: a} = e
          , r = {
            id: n.id,
            get locale() {
                return n.locale.value
            },
            set locale(o) {
                n.locale.value = o
            },
            get fallbackLocale() {
                return n.fallbackLocale.value
            },
            set fallbackLocale(o) {
                n.fallbackLocale.value = o
            },
            get messages() {
                return n.messages.value
            },
            get datetimeFormats() {
                return n.datetimeFormats.value
            },
            get numberFormats() {
                return n.numberFormats.value
            },
            get availableLocales() {
                return n.availableLocales
            },
            get formatter() {
                return {
                    interpolate() {
                        return []
                    }
                }
            },
            set formatter(o) {},
            get missing() {
                return n.getMissingHandler()
            },
            set missing(o) {
                n.setMissingHandler(o)
            },
            get silentTranslationWarn() {
                return Le(n.missingWarn) ? !n.missingWarn : n.missingWarn
            },
            set silentTranslationWarn(o) {
                n.missingWarn = Le(o) ? !o : o
            },
            get silentFallbackWarn() {
                return Le(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn
            },
            set silentFallbackWarn(o) {
                n.fallbackWarn = Le(o) ? !o : o
            },
            get modifiers() {
                return n.modifiers
            },
            get formatFallbackMessages() {
                return n.fallbackFormat
            },
            set formatFallbackMessages(o) {
                n.fallbackFormat = o
            },
            get postTranslation() {
                return n.getPostTranslationHandler()
            },
            set postTranslation(o) {
                n.setPostTranslationHandler(o)
            },
            get sync() {
                return n.inheritLocale
            },
            set sync(o) {
                n.inheritLocale = o
            },
            get warnHtmlInMessage() {
                return n.warnHtmlMessage ? "warn" : "off"
            },
            set warnHtmlInMessage(o) {
                n.warnHtmlMessage = o !== "off"
            },
            get escapeParameterHtml() {
                return n.escapeParameter
            },
            set escapeParameterHtml(o) {
                n.escapeParameter = o
            },
            get preserveDirectiveContent() {
                return !0
            },
            set preserveDirectiveContent(o) {},
            get pluralizationRules() {
                return n.pluralRules || {}
            },
            __composer: n,
            t(...o) {
                const [l,i,s] = o
                  , c = {};
                let u = null
                  , f = null;
                if (!ve(l))
                    throw ht(ct.INVALID_ARGUMENT);
                const d = l;
                return ve(i) ? c.locale = i : ze(i) ? u = i : ke(i) && (f = i),
                ze(s) ? u = s : ke(s) && (f = s),
                Reflect.apply(n.t, n, [d, u || f || {}, c])
            },
            rt(...o) {
                return Reflect.apply(n.rt, n, [...o])
            },
            tc(...o) {
                const [l,i,s] = o
                  , c = {
                    plural: 1
                };
                let u = null
                  , f = null;
                if (!ve(l))
                    throw ht(ct.INVALID_ARGUMENT);
                const d = l;
                return ve(i) ? c.locale = i : lt(i) ? c.plural = i : ze(i) ? u = i : ke(i) && (f = i),
                ve(s) ? c.locale = s : ze(s) ? u = s : ke(s) && (f = s),
                Reflect.apply(n.t, n, [d, u || f || {}, c])
            },
            te(o, l) {
                return n.te(o, l)
            },
            tm(o) {
                return n.tm(o)
            },
            getLocaleMessage(o) {
                return n.getLocaleMessage(o)
            },
            setLocaleMessage(o, l) {
                n.setLocaleMessage(o, l)
            },
            mergeLocaleMessage(o, l) {
                n.mergeLocaleMessage(o, l)
            },
            d(...o) {
                return Reflect.apply(n.d, n, [...o])
            },
            getDateTimeFormat(o) {
                return n.getDateTimeFormat(o)
            },
            setDateTimeFormat(o, l) {
                n.setDateTimeFormat(o, l)
            },
            mergeDateTimeFormat(o, l) {
                n.mergeDateTimeFormat(o, l)
            },
            n(...o) {
                return Reflect.apply(n.n, n, [...o])
            },
            getNumberFormat(o) {
                return n.getNumberFormat(o)
            },
            setNumberFormat(o, l) {
                n.setNumberFormat(o, l)
            },
            mergeNumberFormat(o, l) {
                n.mergeNumberFormat(o, l)
            },
            getChoiceIndex(o, l) {
                return -1
            }
        };
        return r.__extender = a,
        r
    }
}
const kc = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e=>e === "parent" || e === "global",
        default: "parent"
    },
    i18n: {
        type: Object
    }
};
function l0({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((a,r)=>[...a, ...r.type === Je ? r.children : [r]], []) : t.reduce((n,a)=>{
        const r = e[a];
        return r && (n[a] = r()),
        n
    }
    , {})
}
function Mm(e) {
    return Je
}
const i0 = K({
    name: "i18n-t",
    props: yt({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e=>lt(e) || !isNaN(e)
        }
    }, kc),
    setup(e, t) {
        const {slots: n, attrs: a} = t
          , r = e.i18n || Ic({
            useScope: e.scope,
            __useComponent: !0
        });
        return ()=>{
            const o = Object.keys(n).filter(f=>f !== "_")
              , l = {};
            e.locale && (l.locale = e.locale),
            e.plural !== void 0 && (l.plural = ve(e.plural) ? +e.plural : e.plural);
            const i = l0(t, o)
              , s = r[ks](e.keypath, i, l)
              , c = yt({}, a)
              , u = ve(e.tag) || Ve(e.tag) ? e.tag : Mm();
            return Pr(u, c, s)
        }
    }
})
  , Rs = i0
  , WP = Rs;
function s0(e) {
    return ze(e) && !ve(e[0])
}
function Bm(e, t, n, a) {
    const {slots: r, attrs: o} = t;
    return ()=>{
        const l = {
            part: !0
        };
        let i = {};
        e.locale && (l.locale = e.locale),
        ve(e.format) ? l.key = e.format : Ve(e.format) && (ve(e.format.key) && (l.key = e.format.key),
        i = Object.keys(e.format).reduce((d,m)=>n.includes(m) ? yt({}, d, {
            [m]: e.format[m]
        }) : d, {}));
        const s = a(e.value, l, i);
        let c = [l.key];
        ze(s) ? c = s.map((d,m)=>{
            const y = r[d.type]
              , w = y ? y({
                [d.type]: d.value,
                index: m,
                parts: s
            }) : [d.value];
            return s0(w) && (w[0].key = `${d.type}-${m}`),
            w
        }
        ) : ve(s) && (c = [s]);
        const u = yt({}, o)
          , f = ve(e.tag) || Ve(e.tag) ? e.tag : Mm();
        return Pr(f, u, c)
    }
}
const c0 = K({
    name: "i18n-n",
    props: yt({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, kc),
    setup(e, t) {
        const n = e.i18n || Ic({
            useScope: e.scope,
            __useComponent: !0
        });
        return Bm(e, t, Om, (...a)=>n[As](...a))
    }
})
  , bf = c0
  , u0 = K({
    name: "i18n-d",
    props: yt({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, kc),
    setup(e, t) {
        const n = e.i18n || Ic({
            useScope: e.scope,
            __useComponent: !0
        });
        return Bm(e, t, Am, (...a)=>n[Is](...a))
    }
})
  , yf = u0;
function f0(e, t) {
    const n = e;
    if (e.mode === "composition")
        return n.__getInstance(t) || e.global;
    {
        const a = n.__getInstance(t);
        return a != null ? a.__composer : e.global.__composer
    }
}
function d0(e) {
    const t = l=>{
        const {instance: i, modifiers: s, value: c} = l;
        if (!i || !i.$)
            throw ht(ct.UNEXPECTED_ERROR);
        const u = f0(e, i.$)
          , f = pf(c);
        return [Reflect.apply(u.t, u, [..._f(f)]), u]
    }
    ;
    return {
        created: (l,i)=>{
            const [s,c] = t(i);
            xl && e.global === c && (l.__i18nWatcher = se(c.locale, ()=>{
                i.instance && i.instance.$forceUpdate()
            }
            )),
            l.__composer = c,
            l.textContent = s
        }
        ,
        unmounted: l=>{
            xl && l.__i18nWatcher && (l.__i18nWatcher(),
            l.__i18nWatcher = void 0,
            delete l.__i18nWatcher),
            l.__composer && (l.__composer = void 0,
            delete l.__composer)
        }
        ,
        beforeUpdate: (l,{value: i})=>{
            if (l.__composer) {
                const s = l.__composer
                  , c = pf(i);
                l.textContent = Reflect.apply(s.t, s, [..._f(c)])
            }
        }
        ,
        getSSRProps: l=>{
            const [i] = t(l);
            return {
                textContent: i
            }
        }
    }
}
function pf(e) {
    if (ve(e))
        return {
            path: e
        };
    if (ke(e)) {
        if (!("path"in e))
            throw ht(ct.REQUIRED_VALUE, "path");
        return e
    } else
        throw ht(ct.INVALID_VALUE)
}
function _f(e) {
    const {path: t, locale: n, args: a, choice: r, plural: o} = e
      , l = {}
      , i = a || {};
    return ve(n) && (l.locale = n),
    lt(r) && (l.plural = r),
    lt(o) && (l.plural = o),
    [t, i, l]
}
function h0(e, t, ...n) {
    const a = ke(n[0]) ? n[0] : {}
      , r = !!a.useI18nComponentName;
    (Le(a.globalInstall) ? a.globalInstall : !0) && ([r ? "i18n" : Rs.name, "I18nT"].forEach(l=>e.component(l, Rs)),
    [bf.name, "I18nN"].forEach(l=>e.component(l, bf)),
    [yf.name, "I18nD"].forEach(l=>e.component(l, yf))),
    e.directive("t", d0(t))
}
function m0(e, t, n) {
    return {
        beforeCreate() {
            const a = gt();
            if (!a)
                throw ht(ct.UNEXPECTED_ERROR);
            const r = this.$options;
            if (r.i18n) {
                const o = r.i18n;
                if (r.__i18n && (o.__i18n = r.__i18n),
                o.__root = t,
                this === this.$root)
                    this.$i18n = wf(e, o);
                else {
                    o.__injectWithOption = !0,
                    o.__extender = n.__vueI18nExtend,
                    this.$i18n = Ps(o);
                    const l = this.$i18n;
                    l.__extender && (l.__disposer = l.__extender(this.$i18n))
                }
            } else if (r.__i18n)
                if (this === this.$root)
                    this.$i18n = wf(e, r);
                else {
                    this.$i18n = Ps({
                        __i18n: r.__i18n,
                        __injectWithOption: !0,
                        __extender: n.__vueI18nExtend,
                        __root: t
                    });
                    const o = this.$i18n;
                    o.__extender && (o.__disposer = o.__extender(this.$i18n))
                }
            else
                this.$i18n = e;
            r.__i18nGlobal && Nm(t, r, r),
            this.$t = (...o)=>this.$i18n.t(...o),
            this.$rt = (...o)=>this.$i18n.rt(...o),
            this.$tc = (...o)=>this.$i18n.tc(...o),
            this.$te = (o,l)=>this.$i18n.te(o, l),
            this.$d = (...o)=>this.$i18n.d(...o),
            this.$n = (...o)=>this.$i18n.n(...o),
            this.$tm = o=>this.$i18n.tm(o),
            n.__setInstance(a, this.$i18n)
        },
        mounted() {},
        unmounted() {
            const a = gt();
            if (!a)
                throw ht(ct.UNEXPECTED_ERROR);
            const r = this.$i18n;
            delete this.$t,
            delete this.$rt,
            delete this.$tc,
            delete this.$te,
            delete this.$d,
            delete this.$n,
            delete this.$tm,
            r.__disposer && (r.__disposer(),
            delete r.__disposer,
            delete r.__extender),
            n.__deleteInstance(a),
            delete this.$i18n
        }
    }
}
function wf(e, t) {
    e.locale = t.locale || e.locale,
    e.fallbackLocale = t.fallbackLocale || e.fallbackLocale,
    e.missing = t.missing || e.missing,
    e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn,
    e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn,
    e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages,
    e.postTranslation = t.postTranslation || e.postTranslation,
    e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage,
    e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml,
    e.sync = t.sync || e.sync,
    e.__composer[Lm](t.pluralizationRules || e.pluralizationRules);
    const n = ni(e.locale, {
        messages: t.messages,
        __i18n: t.__i18n
    });
    return Object.keys(n).forEach(a=>e.mergeLocaleMessage(a, n[a])),
    t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(a=>e.mergeDateTimeFormat(a, t.datetimeFormats[a])),
    t.numberFormats && Object.keys(t.numberFormats).forEach(a=>e.mergeNumberFormat(a, t.numberFormats[a])),
    e
}
const g0 = ya("global-vue-i18n");
function v0(e={}, t) {
    const n = __VUE_I18N_LEGACY_API__ && Le(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__
      , a = Le(e.globalInjection) ? e.globalInjection : !0
      , r = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0
      , o = new Map
      , [l,i] = b0(e, n)
      , s = ya("");
    function c(d) {
        return o.get(d) || null
    }
    function u(d, m) {
        o.set(d, m)
    }
    function f(d) {
        o.delete(d)
    }
    {
        const d = {
            get mode() {
                return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition"
            },
            get allowComposition() {
                return r
            },
            async install(m, ...y) {
                if (m.__VUE_I18N_SYMBOL__ = s,
                m.provide(m.__VUE_I18N_SYMBOL__, d),
                ke(y[0])) {
                    const C = y[0];
                    d.__composerExtend = C.__composerExtend,
                    d.__vueI18nExtend = C.__vueI18nExtend
                }
                let w = null;
                !n && a && (w = x0(m, d.global)),
                __VUE_I18N_FULL_INSTALL__ && h0(m, d, ...y),
                __VUE_I18N_LEGACY_API__ && n && m.mixin(m0(i, i.__composer, d));
                const p = m.unmount;
                m.unmount = ()=>{
                    w && w(),
                    d.dispose(),
                    p()
                }
            },
            get global() {
                return i
            },
            dispose() {
                l.stop()
            },
            __instances: o,
            __getInstance: c,
            __setInstance: u,
            __deleteInstance: f
        };
        return d
    }
}
function Ic(e={}) {
    const t = gt();
    if (t == null)
        throw ht(ct.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw ht(ct.NOT_INSTALLED);
    const n = y0(t)
      , a = _0(n)
      , r = $m(t)
      , o = p0(e, r);
    if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
        if (!n.allowComposition)
            throw ht(ct.NOT_AVAILABLE_IN_LEGACY_MODE);
        return E0(t, o, a, e)
    }
    if (o === "global")
        return Nm(a, e, r),
        a;
    if (o === "parent") {
        let s = w0(n, t, e.__useComponent);
        return s == null && (s = a),
        s
    }
    const l = n;
    let i = l.__getInstance(t);
    if (i == null) {
        const s = yt({}, e);
        "__i18n"in r && (s.__i18n = r.__i18n),
        a && (s.__root = a),
        i = xc(s),
        l.__composerExtend && (i[Os] = l.__composerExtend(i)),
        S0(l, t, i),
        l.__setInstance(t, i)
    }
    return i
}
function b0(e, t, n) {
    const a = nc();
    {
        const r = __VUE_I18N_LEGACY_API__ && t ? a.run(()=>Ps(e)) : a.run(()=>xc(e));
        if (r == null)
            throw ht(ct.UNEXPECTED_ERROR);
        return [a, r]
    }
}
function y0(e) {
    {
        const t = bt(e.isCE ? g0 : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw ht(e.isCE ? ct.NOT_INSTALLED_WITH_PROVIDE : ct.UNEXPECTED_ERROR);
        return t
    }
}
function p0(e, t) {
    return Ql(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}
function _0(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}
function w0(e, t, n=!1) {
    let a = null;
    const r = t.root;
    let o = C0(t, n);
    for (; o != null; ) {
        const l = e;
        if (e.mode === "composition")
            a = l.__getInstance(o);
        else if (__VUE_I18N_LEGACY_API__) {
            const i = l.__getInstance(o);
            i != null && (a = i.__composer,
            n && a && !a[Dm] && (a = null))
        }
        if (a != null || r === o)
            break;
        o = o.parent
    }
    return a
}
function C0(e, t=!1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}
function S0(e, t, n) {
    Qe(()=>{}
    , t),
    Wa(()=>{
        const a = n;
        e.__deleteInstance(t);
        const r = a[Os];
        r && (r(),
        delete a[Os])
    }
    , t)
}
function E0(e, t, n, a={}) {
    const r = t === "local"
      , o = fc(null);
    if (r && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
        throw ht(ct.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
    const l = Le(a.inheritLocale) ? a.inheritLocale : !ve(a.locale)
      , i = V(!r || l ? n.locale.value : ve(a.locale) ? a.locale : To)
      , s = V(!r || l ? n.fallbackLocale.value : ve(a.fallbackLocale) || ze(a.fallbackLocale) || ke(a.fallbackLocale) || a.fallbackLocale === !1 ? a.fallbackLocale : i.value)
      , c = V(ni(i.value, a))
      , u = V(ke(a.datetimeFormats) ? a.datetimeFormats : {
        [i.value]: {}
    })
      , f = V(ke(a.numberFormats) ? a.numberFormats : {
        [i.value]: {}
    })
      , d = r ? n.missingWarn : Le(a.missingWarn) || ga(a.missingWarn) ? a.missingWarn : !0
      , m = r ? n.fallbackWarn : Le(a.fallbackWarn) || ga(a.fallbackWarn) ? a.fallbackWarn : !0
      , y = r ? n.fallbackRoot : Le(a.fallbackRoot) ? a.fallbackRoot : !0
      , w = !!a.fallbackFormat
      , p = We(a.missing) ? a.missing : null
      , C = We(a.postTranslation) ? a.postTranslation : null
      , g = r ? n.warnHtmlMessage : Le(a.warnHtmlMessage) ? a.warnHtmlMessage : !0
      , v = !!a.escapeParameter
      , b = r ? n.modifiers : ke(a.modifiers) ? a.modifiers : {}
      , _ = a.pluralRules || r && n.pluralRules;
    function S() {
        return [i.value, s.value, c.value, u.value, f.value]
    }
    const A = F({
        get: ()=>o.value ? o.value.locale.value : i.value,
        set: x=>{
            o.value && (o.value.locale.value = x),
            i.value = x
        }
    })
      , E = F({
        get: ()=>o.value ? o.value.fallbackLocale.value : s.value,
        set: x=>{
            o.value && (o.value.fallbackLocale.value = x),
            s.value = x
        }
    })
      , T = F(()=>o.value ? o.value.messages.value : c.value)
      , D = F(()=>u.value)
      , k = F(()=>f.value);
    function O() {
        return o.value ? o.value.getPostTranslationHandler() : C
    }
    function N(x) {
        o.value && o.value.setPostTranslationHandler(x)
    }
    function Z() {
        return o.value ? o.value.getMissingHandler() : p
    }
    function ce(x) {
        o.value && o.value.setMissingHandler(x)
    }
    function j(x) {
        return S(),
        x()
    }
    function ee(...x) {
        return o.value ? j(()=>Reflect.apply(o.value.t, null, [...x])) : j(()=>"")
    }
    function ue(...x) {
        return o.value ? Reflect.apply(o.value.rt, null, [...x]) : ""
    }
    function Te(...x) {
        return o.value ? j(()=>Reflect.apply(o.value.d, null, [...x])) : j(()=>"")
    }
    function Pe(...x) {
        return o.value ? j(()=>Reflect.apply(o.value.n, null, [...x])) : j(()=>"")
    }
    function H(x) {
        return o.value ? o.value.tm(x) : {}
    }
    function J(x, M) {
        return o.value ? o.value.te(x, M) : !1
    }
    function he(x) {
        return o.value ? o.value.getLocaleMessage(x) : {}
    }
    function be(x, M) {
        o.value && (o.value.setLocaleMessage(x, M),
        c.value[x] = M)
    }
    function ie(x, M) {
        o.value && o.value.mergeLocaleMessage(x, M)
    }
    function me(x) {
        return o.value ? o.value.getDateTimeFormat(x) : {}
    }
    function L(x, M) {
        o.value && (o.value.setDateTimeFormat(x, M),
        u.value[x] = M)
    }
    function U(x, M) {
        o.value && o.value.mergeDateTimeFormat(x, M)
    }
    function W(x) {
        return o.value ? o.value.getNumberFormat(x) : {}
    }
    function ne(x, M) {
        o.value && (o.value.setNumberFormat(x, M),
        f.value[x] = M)
    }
    function ye(x, M) {
        o.value && o.value.mergeNumberFormat(x, M)
    }
    const Se = {
        get id() {
            return o.value ? o.value.id : -1
        },
        locale: A,
        fallbackLocale: E,
        messages: T,
        datetimeFormats: D,
        numberFormats: k,
        get inheritLocale() {
            return o.value ? o.value.inheritLocale : l
        },
        set inheritLocale(x) {
            o.value && (o.value.inheritLocale = x)
        },
        get availableLocales() {
            return o.value ? o.value.availableLocales : Object.keys(c.value)
        },
        get modifiers() {
            return o.value ? o.value.modifiers : b
        },
        get pluralRules() {
            return o.value ? o.value.pluralRules : _
        },
        get isGlobal() {
            return o.value ? o.value.isGlobal : !1
        },
        get missingWarn() {
            return o.value ? o.value.missingWarn : d
        },
        set missingWarn(x) {
            o.value && (o.value.missingWarn = x)
        },
        get fallbackWarn() {
            return o.value ? o.value.fallbackWarn : m
        },
        set fallbackWarn(x) {
            o.value && (o.value.missingWarn = x)
        },
        get fallbackRoot() {
            return o.value ? o.value.fallbackRoot : y
        },
        set fallbackRoot(x) {
            o.value && (o.value.fallbackRoot = x)
        },
        get fallbackFormat() {
            return o.value ? o.value.fallbackFormat : w
        },
        set fallbackFormat(x) {
            o.value && (o.value.fallbackFormat = x)
        },
        get warnHtmlMessage() {
            return o.value ? o.value.warnHtmlMessage : g
        },
        set warnHtmlMessage(x) {
            o.value && (o.value.warnHtmlMessage = x)
        },
        get escapeParameter() {
            return o.value ? o.value.escapeParameter : v
        },
        set escapeParameter(x) {
            o.value && (o.value.escapeParameter = x)
        },
        t: ee,
        getPostTranslationHandler: O,
        setPostTranslationHandler: N,
        getMissingHandler: Z,
        setMissingHandler: ce,
        rt: ue,
        d: Te,
        n: Pe,
        tm: H,
        te: J,
        getLocaleMessage: he,
        setLocaleMessage: be,
        mergeLocaleMessage: ie,
        getDateTimeFormat: me,
        setDateTimeFormat: L,
        mergeDateTimeFormat: U,
        getNumberFormat: W,
        setNumberFormat: ne,
        mergeNumberFormat: ye
    };
    function R(x) {
        x.locale.value = i.value,
        x.fallbackLocale.value = s.value,
        Object.keys(c.value).forEach(M=>{
            x.mergeLocaleMessage(M, c.value[M])
        }
        ),
        Object.keys(u.value).forEach(M=>{
            x.mergeDateTimeFormat(M, u.value[M])
        }
        ),
        Object.keys(f.value).forEach(M=>{
            x.mergeNumberFormat(M, f.value[M])
        }
        ),
        x.escapeParameter = v,
        x.fallbackFormat = w,
        x.fallbackRoot = y,
        x.fallbackWarn = m,
        x.missingWarn = d,
        x.warnHtmlMessage = g
    }
    return hc(()=>{
        if (e.proxy == null || e.proxy.$i18n == null)
            throw ht(ct.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
        const x = o.value = e.proxy.$i18n.__composer;
        t === "global" ? (i.value = x.locale.value,
        s.value = x.fallbackLocale.value,
        c.value = x.messages.value,
        u.value = x.datetimeFormats.value,
        f.value = x.numberFormats.value) : r && R(x)
    }
    ),
    Se
}
const T0 = ["locale", "fallbackLocale", "availableLocales"]
  , Cf = ["t", "rt", "d", "n", "tm", "te"];
function x0(e, t) {
    const n = Object.create(null);
    return T0.forEach(r=>{
        const o = Object.getOwnPropertyDescriptor(t, r);
        if (!o)
            throw ht(ct.UNEXPECTED_ERROR);
        const l = nt(o.value) ? {
            get() {
                return o.value.value
            },
            set(i) {
                o.value.value = i
            }
        } : {
            get() {
                return o.get && o.get()
            }
        };
        Object.defineProperty(n, r, l)
    }
    ),
    e.config.globalProperties.$i18n = n,
    Cf.forEach(r=>{
        const o = Object.getOwnPropertyDescriptor(t, r);
        if (!o || !o.value)
            throw ht(ct.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${r}`, o)
    }
    ),
    ()=>{
        delete e.config.globalProperties.$i18n,
        Cf.forEach(r=>{
            delete e.config.globalProperties[`$${r}`]
        }
        )
    }
}
n0();
__INTLIFY_JIT_COMPILATION__ ? tf(q_) : tf(X_);
V_(w_);
H_(pm);
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = Pn();
    e.__INTLIFY__ = !0,
    O_(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const k0 = {
    addSpin: "+1 spin",
    header: {
        cashOut: {
            title: "Cash Out",
            cashOut: "Cash Out",
            cashedOut: "To Be Cashed Out",
            withdrawal: "Success withdrawal",
            withdrawRecord: "Withdrawal Record",
            accountInfo: "Account Info",
            edit: "Edit",
            address: "Wallet Address",
            setAccountInfo: "Set Account Info",
            setAccountInfoTip: "Please set your account info, otherwise you will not be able to cash out",
            necessaryInfo: "Necessary for withdrawal",
            walletUsdt: "Wallet Address (USDT-TRC20)",
            walletUsdtInfo: "Enter Your Wallet Address Of USDT-TRC20",
            walletEmptyAlterInfo: "Please Complete The Wallet Address",
            walletUpdateInfo: "Account information has been updated",
            withDrawAccount: "Account"
        },
        withdrawRecord: {
            statusText: {
                underReview: "Under Review",
                success: "Success",
                failed: "Failed",
                reject: "Rejected"
            }
        },
        rank: {
            title: "Rank",
            withdrawRank: "Invite Rank"
        },
        invitation: {
            title: "Invitation",
            inviteHistory: "Invitation History",
            invited: "You have invited",
            friends: "friends",
            invitationTip: "If the person you invite doesn’t join our channel, you can’t get spins! (Recent 50 Invitations)",
            name: "Name",
            joinChannel: "Join Channel",
            yes: "Yes",
            no: "No",
            remind: "Remind"
        }
    },
    progress: {
        tip: "Almost {activityAmountTip} You can soon Cash Out!",
        exchangeRate: "2USDT (=2USD) !"
    },
    share: {
        inviteButton: "Invite for Spins!",
        link: "Share To",
        textCode: "I've won ${totalAmout}! Click URL To Help Me Get More! You Can Also Play & WIN 💰!"
    },
    popup: {
        nospin: {
            p: "0 Spin but Only <span>${left}</span> left!",
            sub: "Invite friends to get more spins!",
            button: "INVITE NOW!"
        },
        nospin2: {
            p: "Want to get more USDT?",
            sub: "Invite friends to get more spins!",
            button: "INVITE NOW!",
            secondaryButton: "Cash Out"
        },
        winning: {
            p: "{win} Can Be Cashed Out",
            button: "Cash Out"
        },
        findo: {
            sub: "💡 Must Join Our Channel Before Playing",
            button: "Join {'@'}{tgChannel}"
        },
        continue: {
            p: "Already joined the channel?",
            button: "Continue"
        },
        happy: {
            p: "Congratulations!",
            sub: "You Get <span>3</span> Spins",
            button: "GO TO SPIN!"
        },
        join: {
            p: "Join Channel & Get <span>3</span> Spins!",
            sub: "And {user} Get {count} Spin! 👍",
            button: "Join Channel & Get Spins"
        },
        check: {
            p: "Check your withdrawal account!",
            subAccount: "Withdrawal Amount: ${balance}",
            subFee: "Withdrawal Fee: 1U (1U will be deducted from the withdrawal amount.)",
            subAddress: "Withdrawal Address: {address}"
        },
        got: {
            p: "You got {got} !",
            sub: "Only {left} to cash out {target}!",
            button: "GO ON!"
        },
        double: {
            p: "Congratulations!",
            sub: "You Get <span>1</span> Chance to <br/> Double your next spin!",
            button: "Invite a friend to DOUBLE!"
        },
        withdrawn: {
            p: "You are withdrawing <span>${amount}</span>!",
            sub: "We will review it fast and it is expected to be credited in seconds.",
            button: "TELL FRIENDS!"
        },
        coinDeficiency: {
            p: "Coin Deficiency",
            sub: "You don't have enough LuckyCoin. Please earn more to play games.",
            button: "Go To Earn"
        }
    },
    common: {
        btnClose: "Close",
        btnSave: "Save",
        btnBack: "Back",
        btnConfirm: "Confirm",
        btnCancel: "Cancel",
        withdraw: "withdraw"
    },
    mine: {
        checkin: {
            title: "Daily Check-In",
            day: "Day",
            status: "Lucky day!",
            claim: "Claim",
            openIn: "Open in"
        },
        tasks: {
            title: "Complete Tasks for Coins"
        }
    },
    tab: {
        lucky: "Lucky",
        mine: "Mine",
        earn: "Earn",
        game: "Game"
    },
    earn: {
        learnMore: `LuckyCoin is the latest fast-growing Telegram Mini-Programme where you get LuckyCoin by inviting friends and completing tasks.
🥳 Users can join Telegram channels and chats,  sending invitations, play interesting games, and become one of our top agents.
😻 Enjoy a new journey! Good Luck, my friends!
<h2>How To Play LuckyCoin?</h2>🌟 Spin and Earn
Do you like lottery games? Luckycoin is a viral mini-game where you earn coins by spinning the wheel.
️🫂 Frens
Invite someone and get higher rewards. More friends, more Coins.
🎮 Multiple Gaming Tasks
Just join Channels and play games! All you need to do is to earn coins by having fun!
<h2>Why LuckyCoin?</h2>Why to mine LuckyCoin?  🚀
Relax.
Free.
More possibility.
Always wish you Good Luck.
<h2>How To Earn More & More?</h2>Mining with Fun:
🤩 Spin — increase your coins by simply spinning!
⚡️ Invite — more friends, more coins, more bonus!
🤖 LuckyBot — He sends free spins and earning opportunities to every Luckiers everyday, continuing working when you are busy or sleeping 🧳.
🗓 Daily Check-in — Don’t miss our Lucky Big Day! You can simply earn a lot 🚀! Remember to log in once a day, or the coins and bonuses will burn up the next day.
🎰 Games — Choose those you are interested in, Play & Earn!
🏆 Lucky Big Event — Join our Channel & get latest information. https://t.me/VIERAPACKS`
    },
    game: {
        title: "Lucky Game Center",
        allGames: "All Games"
    }
}
  , I0 = {
    addSpin: "+1 Спин",
    header: {
        cashOut: {
            title: "обналичить",
            cashOut: "обналичить",
            cashedOut: "Для обналичивания",
            withdrawal: "Успешное снятие",
            withdrawRecord: "Запись о снятых средствах",
            accountInfo: "Информация о счете",
            edit: "Редактировать",
            address: "Адрес кошелька",
            setAccountInfo: "Установите информацию об учетной записи",
            setAccountInfoTip: "Пожалуйста, введите информацию о вашем счете, иначе вы не сможете обналичить деньги",
            necessaryInfo: "Необходим для вывода средств",
            walletUsdt: "Адрес кошелька (USDT-TRC20)",
            walletUsdtInfo: "Введите адрес вашего кошелька USDT-TRC20",
            walletEmptyAlterInfo: "Пожалуйста, заполните адрес кошелька",
            walletUpdateInfo: "Информация о счете была обновлена",
            withDrawAccount: "Аккаунт"
        },
        withdrawRecord: {
            statusText: {
                underReview: "Под обзором",
                success: "Успех",
                failed: "Не удалось",
                reject: "Отклонено"
            }
        },
        rank: {
            title: "Ранг",
            withdrawRank: "рейтинг выдачи наличных"
        },
        invitation: {
            title: "приглашения",
            inviteHistory: "Запись приглашения",
            invited: "Вы пригласили",
            friends: "друзья",
            invitationTip: "Если приглашенный вами человек не присоединится к нашему каналу, вы не сможете получить спины! (Последние 50 приглашений)",
            name: "Имя",
            joinChannel: "Присоединяйтесь к каналу",
            yes: "Да",
            no: "Нет",
            remind: "Напомнить"
        }
    },
    progress: {
        tip: "Почти {activityAmountTip} Скоро вы сможете обналичить деньги!",
        exchangeRate: "2USDT (≈₽170) !"
    },
    share: {
        inviteButton: "Приглашение на спин!",
        link: "Поделиться",
        textCode: "Я выиграл ${totalAmout} доллар! Нажмите URL, чтобы помочь мне получить больше! Вы тоже можете играть и выигрывать!"
    },
    popup: {
        nospin: {
            p: "0 Спин, но остался только <span>${left}</span>!",
            sub: "Приглашайте друзей, чтобы получить больше спинов!",
            button: "ПРИГЛАСИТЬ СЕЙЧАС!"
        },
        nospin2: {
            p: "Хотите получить больше USDT?",
            sub: "Приглашайте друзей, чтобы получить еще больше спинов!",
            button: "ПРИГЛАСИТЬ СЕЙЧАС!",
            secondaryButton: "обналичить"
        },
        winning: {
            p: "{win} Можно обналичить",
            button: "обналичить"
        },
        findo: {
            sub: "💡 Перед игрой необходимо присоединиться к нашему каналу",
            button: "Присоединяйтесь к {'@'}{tgChannel}"
        },
        continue: {
            p: "Уже присоединились к каналу?",
            button: "Продолжить"
        },
        happy: {
            p: "Поздравляем!",
            sub: "Вы получаете <span>3</span> спина",
            button: "ПЕРЕЙТИ К РАЗДЕЛУ СПИН!"
        },
        join: {
            p: "Присоединяйтесь к каналу и получите <span>3</span> спина!",
            sub: "И {user} Получить {count} Вращать! 👍",
            button: "Присоединяйтесь к каналу и получайте спины"
        },
        check: {
            p: "Проверьте сумму вывода средств!",
            subAccount: "Сумма снятия: ${balance}",
            subFee: "Комиссия за снятие: 1U (1U будет вычтена из суммы снятия.)",
            subAddress: "Адрес кошелька для вывода средств: {address}"
        },
        got: {
            p: "У вас есть {got} !",
            sub: "Только {left} , чтобы обналичить {target}!",
            button: "ИДТИ ДАЛЬШЕ!"
        },
        double: {
            p: "Поздравляем!",
            sub: "Вы получаете <span>1</span> шанс <br/> удвоить свой следующий спин!",
            button: "Пригласите друга УДВОИТЬ!"
        },
        withdrawn: {
            p: "Вы снимаете <span>${amount}</span>!",
            sub: "Мы быстро рассмотрим его, и он будет зачислен в течение нескольких секунд.",
            button: "РАССКАЖИТЕ ДРУЗЬЯМ!"
        }
    },
    common: {
        btnClose: "Закрыть",
        btnSave: "сохранять",
        btnBack: "возвращаться",
        btnConfirm: "Подтвердите",
        btnCancel: "Отмена",
        withdraw: "вывести средства"
    }
}
  , A0 = v0({
    legacy: !1,
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en: {
            ...k0
        },
        ru: {
            ...I0
        }
    }
})
  , O0 = "/assets/loading-game-BUG9VLaB.png"
  , P0 = Ip("control", ()=>{
    const e = V(!1)
      , t = V(!1)
      , n = V(!1);
    return {
        showLoading: e,
        showInvitationDot: t,
        showCashOut: n
    }
}
)
  , Fm = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [a,r] of t)
        n[a] = r;
    return n
}
  , R0 = e=>(Mb("data-v-cd6f3a63"),
e = e(),
Bb(),
e)
  , L0 = {
    class: "loading"
}
  , D0 = R0(()=>Ln("div", {
    class: "inner"
}, [Ln("img", {
    src: O0,
    alt: ""
}), ql(), Ln("span", null, "Loading...")], -1))
  , $0 = [D0]
  , N0 = {
    __name: "Loading",
    setup(e) {
        const t = P0();
        return (n,a)=>st((jt(),
        La("div", L0, $0, 512)), [[dt, Ft(t).showLoading]])
    }
}
  , M0 = Fm(N0, [["__scopeId", "data-v-cd6f3a63"]])
  , B0 = {
    __name: "App",
    setup(e) {
        return (t,n)=>{
            const a = Lh("router-view");
            return jt(),
            La(Je, null, [h(a), h(M0)], 64)
        }
    }
}
  , F0 = {
    __name: "Hcontent",
    props: {
        render: Function
    },
    setup(e) {
        const t = e
          , n = K({
            name: "Custom",
            render() {
                return t.render()
            }
        });
        return (a,r)=>(jt(),
        br(Ft(n)))
    }
}
  , V0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAGFBMVEUAAAD///////////////////////////8jfp1fAAAAB3RSTlMAX8/fv1Ag8hlCDgAAAIFJREFUOMtjGAWkghRVGEtYDUVCvVwAwmAsL0GRMC8vhDDEy4ugQjB+uQBEQ3kpXBAqUAhXgKEFJo+hBSaNqQUii0ULVAOmFqgGTC1QDZhaEBoISyCMImQ5YeciPEgwSDADkbhgD4cIYGpRR0RtMYqEOzwxoMV5kiGMFeTGMApIBAAxhTK9g6+grAAAAABJRU5ErkJggg=="
  , H0 = K({
    name: "RModal",
    components: {
        Hcontent: F0
    },
    props: {
        isTeleport: {
            type: Boolean,
            default: !0
        },
        modelValue: {
            type: Boolean,
            default: !1,
            require: !0
        },
        imageTitle: {
            type: String,
            default: ""
        },
        content: {
            type: String,
            default: "",
            require: !0
        },
        close: {
            type: Boolean,
            default: ()=>!0
        },
        onPrimary: {
            type: Object,
            default: ()=>({
                text: {
                    type: String,
                    default: "Confirm"
                },
                callback: ()=>{}
            })
        },
        onSecondary: {
            type: Object,
            default: ()=>({
                text: {
                    type: String,
                    default: "Cancel"
                },
                callback: ()=>{}
            })
        }
    },
    emits: ["on-primary", "on-secondary", "update:modelValue"],
    setup(e, t) {
        let n = gt();
        return hc(()=>{
            n._hub = {
                "on-secondary": ()=>{}
                ,
                "on-primary": ()=>{}
            }
        }
        ),
        {
            handlePrimary: ()=>{
                n._hub["on-primary"]()
            }
            ,
            handleSecondary: ()=>{
                n._hub["on-secondary"]()
            }
            ,
            handleClose: ()=>{
                n._hub["on-close"]()
            }
        }
    }
})
  , U0 = {
    key: 0,
    class: "modal"
}
  , W0 = {
    class: "main"
}
  , j0 = ["src"]
  , z0 = {
    class: "w-full"
}
  , Y0 = {
    class: "groupBtn"
};
function G0(e, t, n, a, r, o) {
    const l = Lh("Hcontent");
    return jt(),
    br(ja, {
        to: "body",
        disabled: !e.isTeleport
    }, [e.modelValue ? (jt(),
    La("div", U0, [Ln("div", W0, [e.imageTitle ? (jt(),
    La("img", {
        key: 0,
        class: "icon",
        src: e.imageTitle,
        alt: ""
    }, null, 8, j0)) : Uo("", !0), Ln("div", z0, [typeof e.content == "function" ? (jt(),
    br(l, {
        key: 0,
        render: e.content
    }, null, 8, ["render"])) : Jb(e.$slots, "default", {
        key: 1
    }, ()=>[Ln("p", null, ul(e.content), 1)])]), Ln("div", Y0, [e.onPrimary ? (jt(),
    La("button", {
        key: 0,
        class: "action",
        onClick: t[0] || (t[0] = (...i)=>e.handlePrimary && e.handlePrimary(...i))
    }, ul(e.onPrimary.text), 1)) : Uo("", !0), e.onSecondary ? (jt(),
    La("button", {
        key: 1,
        class: "secondary",
        onClick: t[1] || (t[1] = (...i)=>e.handleSecondary && e.handleSecondary(...i))
    }, ul(e.onSecondary.text), 1)) : Uo("", !0)]), e.close ? (jt(),
    La("img", {
        key: 1,
        onClick: t[2] || (t[2] = (...i)=>e.handleClose && e.handleClose(...i)),
        class: "close",
        src: V0,
        alt: ""
    })) : Uo("", !0)])])) : Uo("", !0)], 8, ["disabled"])
}
const Al = Fm(H0, [["render", G0]]);
Al.install = (e,t)=>{
    e.component("RModal", Al),
    e.config.globalProperties.$modal = {
        show: Vm
    }
}
;
function Vm({imageTitle: e="", content: t="", close: n=!0, onPrimary: a, onSecondary: r}) {
    const o = document.createElement("div")
      , l = h(Al);
    yp(l, o);
    const i = l.component;
    document.body.appendChild(o);
    const {props: s, _hub: c} = i
      , u = ()=>{
        s.modelValue = !1,
        o.parentNode.removeChild(o)
    }
    ;
    Object.assign(c, {
        async "on-primary"() {
            if (a && a.callback) {
                const f = a.callback();
                if (f && f.then)
                    try {
                        await f,
                        u()
                    } catch (d) {
                        console.error(d)
                    }
                else
                    u()
            } else
                u()
        },
        "on-secondary"() {
            r && r.callback && r.callback(),
            u()
        },
        "on-close"() {
            u()
        }
    }),
    Object.assign(s, {
        isTeleport: !1,
        modelValue: !0,
        imageTitle: e,
        content: t,
        close: n,
        onPrimary: a,
        onSecondary: r
    })
}
const jP = {
    show: Vm
};
var uo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Hm(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function K0(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function a() {
            return this instanceof a ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(a) {
        var r = Object.getOwnPropertyDescriptor(e, a);
        Object.defineProperty(n, a, r.get ? r : {
            enumerable: !0,
            get: function() {
                return e[a]
            }
        })
    }),
    n
}
var Um = {
    exports: {}
};
function X0(e) {
    throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var $i = {
    exports: {}
};
const q0 = {}
  , J0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: q0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Z0 = K0(J0);
var Sf;
function Wm() {
    return Sf || (Sf = 1,
    function(e, t) {
        (function(n, a) {
            e.exports = a()
        }
        )(uo, function() {
            var n = n || function(a, r) {
                var o;
                if (typeof window < "u" && window.crypto && (o = window.crypto),
                typeof self < "u" && self.crypto && (o = self.crypto),
                typeof globalThis < "u" && globalThis.crypto && (o = globalThis.crypto),
                !o && typeof window < "u" && window.msCrypto && (o = window.msCrypto),
                !o && typeof uo < "u" && uo.crypto && (o = uo.crypto),
                !o && typeof X0 == "function")
                    try {
                        o = Z0
                    } catch {}
                var l = function() {
                    if (o) {
                        if (typeof o.getRandomValues == "function")
                            try {
                                return o.getRandomValues(new Uint32Array(1))[0]
                            } catch {}
                        if (typeof o.randomBytes == "function")
                            try {
                                return o.randomBytes(4).readInt32LE()
                            } catch {}
                    }
                    throw new Error("Native crypto module could not be used to get secure random number.")
                }
                  , i = Object.create || function() {
                    function g() {}
                    return function(v) {
                        var b;
                        return g.prototype = v,
                        b = new g,
                        g.prototype = null,
                        b
                    }
                }()
                  , s = {}
                  , c = s.lib = {}
                  , u = c.Base = function() {
                    return {
                        extend: function(g) {
                            var v = i(this);
                            return g && v.mixIn(g),
                            (!v.hasOwnProperty("init") || this.init === v.init) && (v.init = function() {
                                v.$super.init.apply(this, arguments)
                            }
                            ),
                            v.init.prototype = v,
                            v.$super = this,
                            v
                        },
                        create: function() {
                            var g = this.extend();
                            return g.init.apply(g, arguments),
                            g
                        },
                        init: function() {},
                        mixIn: function(g) {
                            for (var v in g)
                                g.hasOwnProperty(v) && (this[v] = g[v]);
                            g.hasOwnProperty("toString") && (this.toString = g.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    }
                }()
                  , f = c.WordArray = u.extend({
                    init: function(g, v) {
                        g = this.words = g || [],
                        v != r ? this.sigBytes = v : this.sigBytes = g.length * 4
                    },
                    toString: function(g) {
                        return (g || m).stringify(this)
                    },
                    concat: function(g) {
                        var v = this.words
                          , b = g.words
                          , _ = this.sigBytes
                          , S = g.sigBytes;
                        if (this.clamp(),
                        _ % 4)
                            for (var A = 0; A < S; A++) {
                                var E = b[A >>> 2] >>> 24 - A % 4 * 8 & 255;
                                v[_ + A >>> 2] |= E << 24 - (_ + A) % 4 * 8
                            }
                        else
                            for (var T = 0; T < S; T += 4)
                                v[_ + T >>> 2] = b[T >>> 2];
                        return this.sigBytes += S,
                        this
                    },
                    clamp: function() {
                        var g = this.words
                          , v = this.sigBytes;
                        g[v >>> 2] &= 4294967295 << 32 - v % 4 * 8,
                        g.length = a.ceil(v / 4)
                    },
                    clone: function() {
                        var g = u.clone.call(this);
                        return g.words = this.words.slice(0),
                        g
                    },
                    random: function(g) {
                        for (var v = [], b = 0; b < g; b += 4)
                            v.push(l());
                        return new f.init(v,g)
                    }
                })
                  , d = s.enc = {}
                  , m = d.Hex = {
                    stringify: function(g) {
                        for (var v = g.words, b = g.sigBytes, _ = [], S = 0; S < b; S++) {
                            var A = v[S >>> 2] >>> 24 - S % 4 * 8 & 255;
                            _.push((A >>> 4).toString(16)),
                            _.push((A & 15).toString(16))
                        }
                        return _.join("")
                    },
                    parse: function(g) {
                        for (var v = g.length, b = [], _ = 0; _ < v; _ += 2)
                            b[_ >>> 3] |= parseInt(g.substr(_, 2), 16) << 24 - _ % 8 * 4;
                        return new f.init(b,v / 2)
                    }
                }
                  , y = d.Latin1 = {
                    stringify: function(g) {
                        for (var v = g.words, b = g.sigBytes, _ = [], S = 0; S < b; S++) {
                            var A = v[S >>> 2] >>> 24 - S % 4 * 8 & 255;
                            _.push(String.fromCharCode(A))
                        }
                        return _.join("")
                    },
                    parse: function(g) {
                        for (var v = g.length, b = [], _ = 0; _ < v; _++)
                            b[_ >>> 2] |= (g.charCodeAt(_) & 255) << 24 - _ % 4 * 8;
                        return new f.init(b,v)
                    }
                }
                  , w = d.Utf8 = {
                    stringify: function(g) {
                        try {
                            return decodeURIComponent(escape(y.stringify(g)))
                        } catch {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(g) {
                        return y.parse(unescape(encodeURIComponent(g)))
                    }
                }
                  , p = c.BufferedBlockAlgorithm = u.extend({
                    reset: function() {
                        this._data = new f.init,
                        this._nDataBytes = 0
                    },
                    _append: function(g) {
                        typeof g == "string" && (g = w.parse(g)),
                        this._data.concat(g),
                        this._nDataBytes += g.sigBytes
                    },
                    _process: function(g) {
                        var v, b = this._data, _ = b.words, S = b.sigBytes, A = this.blockSize, E = A * 4, T = S / E;
                        g ? T = a.ceil(T) : T = a.max((T | 0) - this._minBufferSize, 0);
                        var D = T * A
                          , k = a.min(D * 4, S);
                        if (D) {
                            for (var O = 0; O < D; O += A)
                                this._doProcessBlock(_, O);
                            v = _.splice(0, D),
                            b.sigBytes -= k
                        }
                        return new f.init(v,k)
                    },
                    clone: function() {
                        var g = u.clone.call(this);
                        return g._data = this._data.clone(),
                        g
                    },
                    _minBufferSize: 0
                });
                c.Hasher = p.extend({
                    cfg: u.extend(),
                    init: function(g) {
                        this.cfg = this.cfg.extend(g),
                        this.reset()
                    },
                    reset: function() {
                        p.reset.call(this),
                        this._doReset()
                    },
                    update: function(g) {
                        return this._append(g),
                        this._process(),
                        this
                    },
                    finalize: function(g) {
                        g && this._append(g);
                        var v = this._doFinalize();
                        return v
                    },
                    blockSize: 16,
                    _createHelper: function(g) {
                        return function(v, b) {
                            return new g.init(b).finalize(v)
                        }
                    },
                    _createHmacHelper: function(g) {
                        return function(v, b) {
                            return new C.HMAC.init(g,b).finalize(v)
                        }
                    }
                });
                var C = s.algo = {};
                return s
            }(Math);
            return n
        })
    }($i)),
    $i.exports
}
(function(e, t) {
    (function(n, a) {
        e.exports = a(Wm())
    }
    )(uo, function(n) {
        return function() {
            var a = n
              , r = a.lib
              , o = r.WordArray
              , l = a.enc;
            l.Base64 = {
                stringify: function(s) {
                    var c = s.words
                      , u = s.sigBytes
                      , f = this._map;
                    s.clamp();
                    for (var d = [], m = 0; m < u; m += 3)
                        for (var y = c[m >>> 2] >>> 24 - m % 4 * 8 & 255, w = c[m + 1 >>> 2] >>> 24 - (m + 1) % 4 * 8 & 255, p = c[m + 2 >>> 2] >>> 24 - (m + 2) % 4 * 8 & 255, C = y << 16 | w << 8 | p, g = 0; g < 4 && m + g * .75 < u; g++)
                            d.push(f.charAt(C >>> 6 * (3 - g) & 63));
                    var v = f.charAt(64);
                    if (v)
                        for (; d.length % 4; )
                            d.push(v);
                    return d.join("")
                },
                parse: function(s) {
                    var c = s.length
                      , u = this._map
                      , f = this._reverseMap;
                    if (!f) {
                        f = this._reverseMap = [];
                        for (var d = 0; d < u.length; d++)
                            f[u.charCodeAt(d)] = d
                    }
                    var m = u.charAt(64);
                    if (m) {
                        var y = s.indexOf(m);
                        y !== -1 && (c = y)
                    }
                    return i(s, c, f)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
            function i(s, c, u) {
                for (var f = [], d = 0, m = 0; m < c; m++)
                    if (m % 4) {
                        var y = u[s.charCodeAt(m - 1)] << m % 4 * 2
                          , w = u[s.charCodeAt(m)] >>> 6 - m % 4 * 2
                          , p = y | w;
                        f[d >>> 2] |= p << 24 - d % 4 * 8,
                        d++
                    }
                return o.create(f, d)
            }
        }(),
        n.enc.Base64
    })
}
)(Um);
var Q0 = Um.exports;
const jm = Hm(Q0);
var zm = {
    exports: {}
};
(function(e, t) {
    (function(n, a) {
        e.exports = a(Wm())
    }
    )(uo, function(n) {
        return n.enc.Utf8
    })
}
)(zm);
var ew = zm.exports;
const Ym = Hm(ew);
function tw(e) {
    const t = jm.parse(e);
    return Ym.stringify(t)
}
function zP(e) {
    const t = Ym.parse(e);
    return jm.stringify(t)
}
var Ac = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_BASE_PATH: "/",
    VITE_TG_BOT_ID: "7280972930",
    VITE_TG_BOT_NAME: "Dragondemotapbot",
    VITE_TG_CHANNEL: "VIERAPACKS",
    VITE_TG_MINI_APP: "LuckyCoin"
};
let nw = "VIERAPACKS"
  , aw = "7294326052"
  , ow = "Dragondemotapbot"
  , rw = "LuckyCoin";
var Yd;
let lw = Ac.VITE_TG_USER_ID || ((Yd = Telegram.WebApp.initDataUnsafe.user) == null ? void 0 : Yd.id)
  , iw = Ac.VITE_INIT_DATA || Telegram.WebApp.initData
  , sw = Ac.VITE_HASH || Telegram.WebApp.initDataUnsafe.hash;
var Gd;
let cw = (Gd = Telegram.WebApp.initDataUnsafe.user) == null ? void 0 : Gd.language_code
  , {inviteUserId: uw} = fw();
function fw() {
    let e = ""
      , t = "";
    try {
        const n = new URLSearchParams(window.location.search);
        if (n) {
            const a = n.get("tgWebAppStartParam");
            if (a) {
                const r = tw(decodeURIComponent(a));
                if (r) {
                    const o = r.split("_");
                    o.length === 2 && (/^\d*$/.test(o[0]) && (e = o[0]),
                    /^\d+$/.test(o[1]) && (t = o[1]))
                }
            }
        }
    } catch (n) {
        console.log(n)
    }
    return {
        inviteUserId: e,
        tgBotId: t
    }
}
const YP = {
    tgChannel: nw,
    tgBotName: ow,
    tgMiniApp: rw,
    tgBotId: aw,
    tgUserId: lw,
    initData: iw,
    hash: sw,
    inviteUserId: uw,
    languageCode: cw
}
  , ai = window.Telegram.WebApp;
ai.ready();
ai.expand();
ai.enableClosingConfirmation();
ai.disableVerticalSwipes();
const dw = "modulepreload"
  , hw = function(e) {
    return "/" + e
}
  , Ef = {}
  , Yo = function(t, n, a) {
    let r = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const o = document.querySelector("meta[property=csp-nonce]")
          , l = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
        r = Promise.all(n.map(i=>{
            if (i = hw(i),
            i in Ef)
                return;
            Ef[i] = !0;
            const s = i.endsWith(".css")
              , c = s ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${i}"]${c}`))
                return;
            const u = document.createElement("link");
            if (u.rel = s ? "stylesheet" : dw,
            s || (u.as = "script",
            u.crossOrigin = ""),
            u.href = i,
            l && u.setAttribute("nonce", l),
            document.head.appendChild(u),
            s)
                return new Promise((f,d)=>{
                    u.addEventListener("load", f),
                    u.addEventListener("error", ()=>d(new Error(`Unable to preload CSS for ${i}`)))
                }
                )
        }
        ))
    }
    return r.then(()=>t()).catch(o=>{
        const l = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (l.payload = o,
        window.dispatchEvent(l),
        !l.defaultPrevented)
            throw o
    }
    )
};
/*!
  * vue-router v4.4.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const so = typeof document < "u";
function mw(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const Xe = Object.assign;
function Ni(e, t) {
    const n = {};
    for (const a in t) {
        const r = t[a];
        n[a] = sn(r) ? r.map(e) : e(r)
    }
    return n
}
const sr = ()=>{}
  , sn = Array.isArray
  , Gm = /#/g
  , gw = /&/g
  , vw = /\//g
  , bw = /=/g
  , yw = /\?/g
  , Km = /\+/g
  , pw = /%5B/g
  , _w = /%5D/g
  , Xm = /%5E/g
  , ww = /%60/g
  , qm = /%7B/g
  , Cw = /%7C/g
  , Jm = /%7D/g
  , Sw = /%20/g;
function Oc(e) {
    return encodeURI("" + e).replace(Cw, "|").replace(pw, "[").replace(_w, "]")
}
function Ew(e) {
    return Oc(e).replace(qm, "{").replace(Jm, "}").replace(Xm, "^")
}
function Ls(e) {
    return Oc(e).replace(Km, "%2B").replace(Sw, "+").replace(Gm, "%23").replace(gw, "%26").replace(ww, "`").replace(qm, "{").replace(Jm, "}").replace(Xm, "^")
}
function Tw(e) {
    return Ls(e).replace(bw, "%3D")
}
function xw(e) {
    return Oc(e).replace(Gm, "%23").replace(yw, "%3F")
}
function kw(e) {
    return e == null ? "" : xw(e).replace(vw, "%2F")
}
function wr(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const Iw = /\/$/
  , Aw = e=>e.replace(Iw, "");
function Mi(e, t, n="/") {
    let a, r = {}, o = "", l = "";
    const i = t.indexOf("#");
    let s = t.indexOf("?");
    return i < s && i >= 0 && (s = -1),
    s > -1 && (a = t.slice(0, s),
    o = t.slice(s + 1, i > -1 ? i : t.length),
    r = e(o)),
    i > -1 && (a = a || t.slice(0, i),
    l = t.slice(i, t.length)),
    a = Lw(a ?? t, n),
    {
        fullPath: a + (o && "?") + o + l,
        path: a,
        query: r,
        hash: wr(l)
    }
}
function Ow(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function Pw(e, t, n) {
    const a = t.matched.length - 1
      , r = n.matched.length - 1;
    return a > -1 && a === r && ko(t.matched[a], n.matched[r]) && Zm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function ko(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function Zm(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!Rw(e[n], t[n]))
            return !1;
    return !0
}
function Rw(e, t) {
    return sn(e) ? Tf(e, t) : sn(t) ? Tf(t, e) : e === t
}
function Tf(e, t) {
    return sn(t) ? e.length === t.length && e.every((n,a)=>n === t[a]) : e.length === 1 && e[0] === t
}
function Lw(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , a = e.split("/")
      , r = a[a.length - 1];
    (r === ".." || r === ".") && a.push("");
    let o = n.length - 1, l, i;
    for (l = 0; l < a.length; l++)
        if (i = a[l],
        i !== ".")
            if (i === "..")
                o > 1 && o--;
            else
                break;
    return n.slice(0, o).join("/") + "/" + a.slice(l).join("/")
}
const Zn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var Cr;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(Cr || (Cr = {}));
var Ol;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(Ol || (Ol = {}));
const Bi = "";
function Dw(e) {
    if (!e)
        if (so) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    Aw(e)
}
const $w = /^[^#]+#/;
function Nw(e, t) {
    return e.replace($w, "#") + t
}
function Mw(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , a = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: a.left - n.left - (t.left || 0),
        top: a.top - n.top - (t.top || 0)
    }
}
const Bw = ()=>({
    left: window.scrollX,
    top: window.scrollY
});
function Fw(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , a = typeof n == "string" && n.startsWith("#")
          , r = typeof n == "string" ? a ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!r)
            return;
        t = Mw(r, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function xf(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Ds = new Map;
function Vw(e, t) {
    Ds.set(e, t)
}
function Hw(e) {
    const t = Ds.get(e);
    return Ds.delete(e),
    t
}
function Uw(e="") {
    let t = []
      , n = [Bi]
      , a = 0;
    e = Dw(e);
    function r(i) {
        a++,
        a !== n.length && n.splice(a),
        n.push(i)
    }
    function o(i, s, {direction: c, delta: u}) {
        const f = {
            direction: c,
            delta: u,
            type: Cr.pop
        };
        for (const d of t)
            d(i, s, f)
    }
    const l = {
        location: Bi,
        state: {},
        base: e,
        createHref: Nw.bind(null, e),
        replace(i) {
            n.splice(a--, 1),
            r(i)
        },
        push(i, s) {
            r(i)
        },
        listen(i) {
            return t.push(i),
            ()=>{
                const s = t.indexOf(i);
                s > -1 && t.splice(s, 1)
            }
        },
        destroy() {
            t = [],
            n = [Bi],
            a = 0
        },
        go(i, s=!0) {
            const c = this.location
              , u = i < 0 ? Ol.back : Ol.forward;
            a = Math.max(0, Math.min(a + i, n.length - 1)),
            s && o(this.location, c, {
                direction: u,
                delta: i
            })
        }
    };
    return Object.defineProperty(l, "location", {
        enumerable: !0,
        get: ()=>n[a]
    }),
    l
}
function Ww(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function Qm(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const eg = Symbol("");
var kf;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(kf || (kf = {}));
function Io(e, t) {
    return Xe(new Error, {
        type: e,
        [eg]: !0
    }, t)
}
function Tn(e, t) {
    return e instanceof Error && eg in e && (t == null || !!(e.type & t))
}
const If = "[^/]+?"
  , jw = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , zw = /[.+*?^${}()[\]/\\]/g;
function Yw(e, t) {
    const n = Xe({}, jw, t)
      , a = [];
    let r = n.start ? "^" : "";
    const o = [];
    for (const c of e) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (r += "/");
        for (let f = 0; f < c.length; f++) {
            const d = c[f];
            let m = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0)
                f || (r += "/"),
                r += d.value.replace(zw, "\\$&"),
                m += 40;
            else if (d.type === 1) {
                const {value: y, repeatable: w, optional: p, regexp: C} = d;
                o.push({
                    name: y,
                    repeatable: w,
                    optional: p
                });
                const g = C || If;
                if (g !== If) {
                    m += 10;
                    try {
                        new RegExp(`(${g})`)
                    } catch (b) {
                        throw new Error(`Invalid custom RegExp for param "${y}" (${g}): ` + b.message)
                    }
                }
                let v = w ? `((?:${g})(?:/(?:${g}))*)` : `(${g})`;
                f || (v = p && c.length < 2 ? `(?:/${v})` : "/" + v),
                p && (v += "?"),
                r += v,
                m += 20,
                p && (m += -8),
                w && (m += -20),
                g === ".*" && (m += -50)
            }
            u.push(m)
        }
        a.push(u)
    }
    if (n.strict && n.end) {
        const c = a.length - 1;
        a[c][a[c].length - 1] += .7000000000000001
    }
    n.strict || (r += "/?"),
    n.end ? r += "$" : n.strict && (r += "(?:/|$)");
    const l = new RegExp(r,n.sensitive ? "" : "i");
    function i(c) {
        const u = c.match(l)
          , f = {};
        if (!u)
            return null;
        for (let d = 1; d < u.length; d++) {
            const m = u[d] || ""
              , y = o[d - 1];
            f[y.name] = m && y.repeatable ? m.split("/") : m
        }
        return f
    }
    function s(c) {
        let u = ""
          , f = !1;
        for (const d of e) {
            (!f || !u.endsWith("/")) && (u += "/"),
            f = !1;
            for (const m of d)
                if (m.type === 0)
                    u += m.value;
                else if (m.type === 1) {
                    const {value: y, repeatable: w, optional: p} = m
                      , C = y in c ? c[y] : "";
                    if (sn(C) && !w)
                        throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);
                    const g = sn(C) ? C.join("/") : C;
                    if (!g)
                        if (p)
                            d.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${y}"`);
                    u += g
                }
        }
        return u || "/"
    }
    return {
        re: l,
        score: a,
        keys: o,
        parse: i,
        stringify: s
    }
}
function Gw(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const a = t[n] - e[n];
        if (a)
            return a;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function tg(e, t) {
    let n = 0;
    const a = e.score
      , r = t.score;
    for (; n < a.length && n < r.length; ) {
        const o = Gw(a[n], r[n]);
        if (o)
            return o;
        n++
    }
    if (Math.abs(r.length - a.length) === 1) {
        if (Af(a))
            return 1;
        if (Af(r))
            return -1
    }
    return r.length - a.length
}
function Af(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const Kw = {
    type: 0,
    value: ""
}
  , Xw = /[a-zA-Z0-9_]/;
function qw(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[Kw]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(m) {
        throw new Error(`ERR (${n})/"${c}": ${m}`)
    }
    let n = 0
      , a = n;
    const r = [];
    let o;
    function l() {
        o && r.push(o),
        o = []
    }
    let i = 0, s, c = "", u = "";
    function f() {
        c && (n === 0 ? o.push({
            type: 0,
            value: c
        }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (s === "*" || s === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
        o.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: s === "*" || s === "+",
            optional: s === "*" || s === "?"
        })) : t("Invalid state to consume buffer"),
        c = "")
    }
    function d() {
        c += s
    }
    for (; i < e.length; ) {
        if (s = e[i++],
        s === "\\" && n !== 2) {
            a = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            s === "/" ? (c && f(),
            l()) : s === ":" ? (f(),
            n = 1) : d();
            break;
        case 4:
            d(),
            n = a;
            break;
        case 1:
            s === "(" ? n = 2 : Xw.test(s) ? d() : (f(),
            n = 0,
            s !== "*" && s !== "?" && s !== "+" && i--);
            break;
        case 2:
            s === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + s : n = 3 : u += s;
            break;
        case 3:
            f(),
            n = 0,
            s !== "*" && s !== "?" && s !== "+" && i--,
            u = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${c}"`),
    f(),
    l(),
    r
}
function Jw(e, t, n) {
    const a = Yw(qw(e.path), n)
      , r = Xe(a, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r),
    r
}
function Zw(e, t) {
    const n = []
      , a = new Map;
    t = Rf({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function r(f) {
        return a.get(f)
    }
    function o(f, d, m) {
        const y = !m
          , w = Qw(f);
        w.aliasOf = m && m.record;
        const p = Rf(t, f)
          , C = [w];
        if ("alias"in f) {
            const b = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const _ of b)
                C.push(Xe({}, w, {
                    components: m ? m.record.components : w.components,
                    path: _,
                    aliasOf: m ? m.record : w
                }))
        }
        let g, v;
        for (const b of C) {
            const {path: _} = b;
            if (d && _[0] !== "/") {
                const S = d.record.path
                  , A = S[S.length - 1] === "/" ? "" : "/";
                b.path = d.record.path + (_ && A + _)
            }
            if (g = Jw(b, d, p),
            m ? m.alias.push(g) : (v = v || g,
            v !== g && v.alias.push(g),
            y && f.name && !Pf(g) && l(f.name)),
            ng(g) && s(g),
            w.children) {
                const S = w.children;
                for (let A = 0; A < S.length; A++)
                    o(S[A], g, m && m.children[A])
            }
            m = m || g
        }
        return v ? ()=>{
            l(v)
        }
        : sr
    }
    function l(f) {
        if (Qm(f)) {
            const d = a.get(f);
            d && (a.delete(f),
            n.splice(n.indexOf(d), 1),
            d.children.forEach(l),
            d.alias.forEach(l))
        } else {
            const d = n.indexOf(f);
            d > -1 && (n.splice(d, 1),
            f.record.name && a.delete(f.record.name),
            f.children.forEach(l),
            f.alias.forEach(l))
        }
    }
    function i() {
        return n
    }
    function s(f) {
        const d = nC(f, n);
        n.splice(d, 0, f),
        f.record.name && !Pf(f) && a.set(f.record.name, f)
    }
    function c(f, d) {
        let m, y = {}, w, p;
        if ("name"in f && f.name) {
            if (m = a.get(f.name),
            !m)
                throw Io(1, {
                    location: f
                });
            p = m.record.name,
            y = Xe(Of(d.params, m.keys.filter(v=>!v.optional).concat(m.parent ? m.parent.keys.filter(v=>v.optional) : []).map(v=>v.name)), f.params && Of(f.params, m.keys.map(v=>v.name))),
            w = m.stringify(y)
        } else if (f.path != null)
            w = f.path,
            m = n.find(v=>v.re.test(w)),
            m && (y = m.parse(w),
            p = m.record.name);
        else {
            if (m = d.name ? a.get(d.name) : n.find(v=>v.re.test(d.path)),
            !m)
                throw Io(1, {
                    location: f,
                    currentLocation: d
                });
            p = m.record.name,
            y = Xe({}, d.params, f.params),
            w = m.stringify(y)
        }
        const C = [];
        let g = m;
        for (; g; )
            C.unshift(g.record),
            g = g.parent;
        return {
            name: p,
            path: w,
            params: y,
            matched: C,
            meta: tC(C)
        }
    }
    e.forEach(f=>o(f));
    function u() {
        n.length = 0,
        a.clear()
    }
    return {
        addRoute: o,
        resolve: c,
        removeRoute: l,
        clearRoutes: u,
        getRoutes: i,
        getRecordMatcher: r
    }
}
function Of(e, t) {
    const n = {};
    for (const a of t)
        a in e && (n[a] = e[a]);
    return n
}
function Qw(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: eC(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}
function eC(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const a in e.components)
            t[a] = typeof n == "object" ? n[a] : n;
    return t
}
function Pf(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function tC(e) {
    return e.reduce((t,n)=>Xe(t, n.meta), {})
}
function Rf(e, t) {
    const n = {};
    for (const a in e)
        n[a] = a in t ? t[a] : e[a];
    return n
}
function nC(e, t) {
    let n = 0
      , a = t.length;
    for (; n !== a; ) {
        const o = n + a >> 1;
        tg(e, t[o]) < 0 ? a = o : n = o + 1
    }
    const r = aC(e);
    return r && (a = t.lastIndexOf(r, a - 1)),
    a
}
function aC(e) {
    let t = e;
    for (; t = t.parent; )
        if (ng(t) && tg(e, t) === 0)
            return t
}
function ng({record: e}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}
function oC(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const a = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let r = 0; r < a.length; ++r) {
        const o = a[r].replace(Km, " ")
          , l = o.indexOf("=")
          , i = wr(l < 0 ? o : o.slice(0, l))
          , s = l < 0 ? null : wr(o.slice(l + 1));
        if (i in t) {
            let c = t[i];
            sn(c) || (c = t[i] = [c]),
            c.push(s)
        } else
            t[i] = s
    }
    return t
}
function Lf(e) {
    let t = "";
    for (let n in e) {
        const a = e[n];
        if (n = Tw(n),
        a == null) {
            a !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (sn(a) ? a.map(o=>o && Ls(o)) : [a && Ls(a)]).forEach(o=>{
            o !== void 0 && (t += (t.length ? "&" : "") + n,
            o != null && (t += "=" + o))
        }
        )
    }
    return t
}
function rC(e) {
    const t = {};
    for (const n in e) {
        const a = e[n];
        a !== void 0 && (t[n] = sn(a) ? a.map(r=>r == null ? null : "" + r) : a == null ? a : "" + a)
    }
    return t
}
const lC = Symbol("")
  , Df = Symbol("")
  , oi = Symbol("")
  , ag = Symbol("")
  , $s = Symbol("");
function Go() {
    let e = [];
    function t(a) {
        return e.push(a),
        ()=>{
            const r = e.indexOf(a);
            r > -1 && e.splice(r, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: ()=>e.slice(),
        reset: n
    }
}
function sa(e, t, n, a, r, o=l=>l()) {
    const l = a && (a.enterCallbacks[r] = a.enterCallbacks[r] || []);
    return ()=>new Promise((i,s)=>{
        const c = d=>{
            d === !1 ? s(Io(4, {
                from: n,
                to: t
            })) : d instanceof Error ? s(d) : Ww(d) ? s(Io(2, {
                from: t,
                to: d
            })) : (l && a.enterCallbacks[r] === l && typeof d == "function" && l.push(d),
            i())
        }
          , u = o(()=>e.call(a && a.instances[r], t, n, c));
        let f = Promise.resolve(u);
        e.length < 3 && (f = f.then(c)),
        f.catch(d=>s(d))
    }
    )
}
function Fi(e, t, n, a, r=o=>o()) {
    const o = [];
    for (const l of e)
        for (const i in l.components) {
            let s = l.components[i];
            if (!(t !== "beforeRouteEnter" && !l.instances[i]))
                if (iC(s)) {
                    const u = (s.__vccOpts || s)[t];
                    u && o.push(sa(u, n, a, l, i, r))
                } else {
                    let c = s();
                    o.push(()=>c.then(u=>{
                        if (!u)
                            return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${l.path}"`));
                        const f = mw(u) ? u.default : u;
                        l.components[i] = f;
                        const m = (f.__vccOpts || f)[t];
                        return m && sa(m, n, a, l, i, r)()
                    }
                    ))
                }
        }
    return o
}
function iC(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function $f(e) {
    const t = bt(oi)
      , n = bt(ag)
      , a = F(()=>{
        const s = Ft(e.to);
        return t.resolve(s)
    }
    )
      , r = F(()=>{
        const {matched: s} = a.value
          , {length: c} = s
          , u = s[c - 1]
          , f = n.matched;
        if (!u || !f.length)
            return -1;
        const d = f.findIndex(ko.bind(null, u));
        if (d > -1)
            return d;
        const m = Nf(s[c - 2]);
        return c > 1 && Nf(u) === m && f[f.length - 1].path !== m ? f.findIndex(ko.bind(null, s[c - 2])) : d
    }
    )
      , o = F(()=>r.value > -1 && fC(n.params, a.value.params))
      , l = F(()=>r.value > -1 && r.value === n.matched.length - 1 && Zm(n.params, a.value.params));
    function i(s={}) {
        return uC(s) ? t[Ft(e.replace) ? "replace" : "push"](Ft(e.to)).catch(sr) : Promise.resolve()
    }
    return {
        route: a,
        href: F(()=>a.value.href),
        isActive: o,
        isExactActive: l,
        navigate: i
    }
}
const sC = K({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: $f,
    setup(e, {slots: t}) {
        const n = Ge($f(e))
          , {options: a} = bt(oi)
          , r = F(()=>({
            [Mf(e.activeClass, a.linkActiveClass, "router-link-active")]: n.isActive,
            [Mf(e.exactActiveClass, a.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return ()=>{
            const o = t.default && t.default(n);
            return e.custom ? o : Pr("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value
            }, o)
        }
    }
})
  , cC = sC;
function uC(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function fC(e, t) {
    for (const n in t) {
        const a = t[n]
          , r = e[n];
        if (typeof a == "string") {
            if (a !== r)
                return !1
        } else if (!sn(r) || r.length !== a.length || a.some((o,l)=>o !== r[l]))
            return !1
    }
    return !0
}
function Nf(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Mf = (e,t,n)=>e ?? t ?? n
  , dC = K({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const a = bt($s)
          , r = F(()=>e.route || a.value)
          , o = bt(Df, 0)
          , l = F(()=>{
            let c = Ft(o);
            const {matched: u} = r.value;
            let f;
            for (; (f = u[c]) && !f.components; )
                c++;
            return c
        }
        )
          , i = F(()=>r.value.matched[l.value]);
        $n(Df, F(()=>l.value + 1)),
        $n(lC, i),
        $n($s, r);
        const s = V();
        return se(()=>[s.value, i.value, e.name], ([c,u,f],[d,m,y])=>{
            u && (u.instances[f] = c,
            m && m !== u && c && c === d && (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
            u.updateGuards.size || (u.updateGuards = m.updateGuards))),
            c && u && (!m || !ko(u, m) || !d) && (u.enterCallbacks[f] || []).forEach(w=>w(c))
        }
        , {
            flush: "post"
        }),
        ()=>{
            const c = r.value
              , u = e.name
              , f = i.value
              , d = f && f.components[u];
            if (!d)
                return Bf(n.default, {
                    Component: d,
                    route: c
                });
            const m = f.props[u]
              , y = m ? m === !0 ? c.params : typeof m == "function" ? m(c) : m : null
              , p = Pr(d, Xe({}, y, t, {
                onVnodeUnmounted: C=>{
                    C.component.isUnmounted && (f.instances[u] = null)
                }
                ,
                ref: s
            }));
            return Bf(n.default, {
                Component: p,
                route: c
            }) || p
        }
    }
});
function Bf(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const hC = dC;
function mC(e) {
    const t = Zw(e.routes, e)
      , n = e.parseQuery || oC
      , a = e.stringifyQuery || Lf
      , r = e.history
      , o = Go()
      , l = Go()
      , i = Go()
      , s = fc(Zn);
    let c = Zn;
    so && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const u = Ni.bind(null, L=>"" + L)
      , f = Ni.bind(null, kw)
      , d = Ni.bind(null, wr);
    function m(L, U) {
        let W, ne;
        return Qm(L) ? (W = t.getRecordMatcher(L),
        ne = U) : ne = L,
        t.addRoute(ne, W)
    }
    function y(L) {
        const U = t.getRecordMatcher(L);
        U && t.removeRoute(U)
    }
    function w() {
        return t.getRoutes().map(L=>L.record)
    }
    function p(L) {
        return !!t.getRecordMatcher(L)
    }
    function C(L, U) {
        if (U = Xe({}, U || s.value),
        typeof L == "string") {
            const x = Mi(n, L, U.path)
              , M = t.resolve({
                path: x.path
            }, U)
              , Q = r.createHref(x.fullPath);
            return Xe(x, M, {
                params: d(M.params),
                hash: wr(x.hash),
                redirectedFrom: void 0,
                href: Q
            })
        }
        let W;
        if (L.path != null)
            W = Xe({}, L, {
                path: Mi(n, L.path, U.path).path
            });
        else {
            const x = Xe({}, L.params);
            for (const M in x)
                x[M] == null && delete x[M];
            W = Xe({}, L, {
                params: f(x)
            }),
            U.params = f(U.params)
        }
        const ne = t.resolve(W, U)
          , ye = L.hash || "";
        ne.params = u(d(ne.params));
        const Se = Ow(a, Xe({}, L, {
            hash: Ew(ye),
            path: ne.path
        }))
          , R = r.createHref(Se);
        return Xe({
            fullPath: Se,
            hash: ye,
            query: a === Lf ? rC(L.query) : L.query || {}
        }, ne, {
            redirectedFrom: void 0,
            href: R
        })
    }
    function g(L) {
        return typeof L == "string" ? Mi(n, L, s.value.path) : Xe({}, L)
    }
    function v(L, U) {
        if (c !== L)
            return Io(8, {
                from: U,
                to: L
            })
    }
    function b(L) {
        return A(L)
    }
    function _(L) {
        return b(Xe(g(L), {
            replace: !0
        }))
    }
    function S(L) {
        const U = L.matched[L.matched.length - 1];
        if (U && U.redirect) {
            const {redirect: W} = U;
            let ne = typeof W == "function" ? W(L) : W;
            return typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = g(ne) : {
                path: ne
            },
            ne.params = {}),
            Xe({
                query: L.query,
                hash: L.hash,
                params: ne.path != null ? {} : L.params
            }, ne)
        }
    }
    function A(L, U) {
        const W = c = C(L)
          , ne = s.value
          , ye = L.state
          , Se = L.force
          , R = L.replace === !0
          , x = S(W);
        if (x)
            return A(Xe(g(x), {
                state: typeof x == "object" ? Xe({}, ye, x.state) : ye,
                force: Se,
                replace: R
            }), U || W);
        const M = W;
        M.redirectedFrom = U;
        let Q;
        return !Se && Pw(a, ne, W) && (Q = Io(16, {
            to: M,
            from: ne
        }),
        H(ne, ne, !0, !1)),
        (Q ? Promise.resolve(Q) : D(M, ne)).catch(Y=>Tn(Y) ? Tn(Y, 2) ? Y : Pe(Y) : ue(Y, M, ne)).then(Y=>{
            if (Y) {
                if (Tn(Y, 2))
                    return A(Xe({
                        replace: R
                    }, g(Y.to), {
                        state: typeof Y.to == "object" ? Xe({}, ye, Y.to.state) : ye,
                        force: Se
                    }), U || M)
            } else
                Y = O(M, ne, !0, R, ye);
            return k(M, ne, Y),
            Y
        }
        )
    }
    function E(L, U) {
        const W = v(L, U);
        return W ? Promise.reject(W) : Promise.resolve()
    }
    function T(L) {
        const U = be.values().next().value;
        return U && typeof U.runWithContext == "function" ? U.runWithContext(L) : L()
    }
    function D(L, U) {
        let W;
        const [ne,ye,Se] = gC(L, U);
        W = Fi(ne.reverse(), "beforeRouteLeave", L, U);
        for (const x of ne)
            x.leaveGuards.forEach(M=>{
                W.push(sa(M, L, U))
            }
            );
        const R = E.bind(null, L, U);
        return W.push(R),
        me(W).then(()=>{
            W = [];
            for (const x of o.list())
                W.push(sa(x, L, U));
            return W.push(R),
            me(W)
        }
        ).then(()=>{
            W = Fi(ye, "beforeRouteUpdate", L, U);
            for (const x of ye)
                x.updateGuards.forEach(M=>{
                    W.push(sa(M, L, U))
                }
                );
            return W.push(R),
            me(W)
        }
        ).then(()=>{
            W = [];
            for (const x of Se)
                if (x.beforeEnter)
                    if (sn(x.beforeEnter))
                        for (const M of x.beforeEnter)
                            W.push(sa(M, L, U));
                    else
                        W.push(sa(x.beforeEnter, L, U));
            return W.push(R),
            me(W)
        }
        ).then(()=>(L.matched.forEach(x=>x.enterCallbacks = {}),
        W = Fi(Se, "beforeRouteEnter", L, U, T),
        W.push(R),
        me(W))).then(()=>{
            W = [];
            for (const x of l.list())
                W.push(sa(x, L, U));
            return W.push(R),
            me(W)
        }
        ).catch(x=>Tn(x, 8) ? x : Promise.reject(x))
    }
    function k(L, U, W) {
        i.list().forEach(ne=>T(()=>ne(L, U, W)))
    }
    function O(L, U, W, ne, ye) {
        const Se = v(L, U);
        if (Se)
            return Se;
        const R = U === Zn
          , x = so ? history.state : {};
        W && (ne || R ? r.replace(L.fullPath, Xe({
            scroll: R && x && x.scroll
        }, ye)) : r.push(L.fullPath, ye)),
        s.value = L,
        H(L, U, W, R),
        Pe()
    }
    let N;
    function Z() {
        N || (N = r.listen((L,U,W)=>{
            if (!ie.listening)
                return;
            const ne = C(L)
              , ye = S(ne);
            if (ye) {
                A(Xe(ye, {
                    replace: !0
                }), ne).catch(sr);
                return
            }
            c = ne;
            const Se = s.value;
            so && Vw(xf(Se.fullPath, W.delta), Bw()),
            D(ne, Se).catch(R=>Tn(R, 12) ? R : Tn(R, 2) ? (A(R.to, ne).then(x=>{
                Tn(x, 20) && !W.delta && W.type === Cr.pop && r.go(-1, !1)
            }
            ).catch(sr),
            Promise.reject()) : (W.delta && r.go(-W.delta, !1),
            ue(R, ne, Se))).then(R=>{
                R = R || O(ne, Se, !1),
                R && (W.delta && !Tn(R, 8) ? r.go(-W.delta, !1) : W.type === Cr.pop && Tn(R, 20) && r.go(-1, !1)),
                k(ne, Se, R)
            }
            ).catch(sr)
        }
        ))
    }
    let ce = Go(), j = Go(), ee;
    function ue(L, U, W) {
        Pe(L);
        const ne = j.list();
        return ne.length ? ne.forEach(ye=>ye(L, U, W)) : console.error(L),
        Promise.reject(L)
    }
    function Te() {
        return ee && s.value !== Zn ? Promise.resolve() : new Promise((L,U)=>{
            ce.add([L, U])
        }
        )
    }
    function Pe(L) {
        return ee || (ee = !L,
        Z(),
        ce.list().forEach(([U,W])=>L ? W(L) : U()),
        ce.reset()),
        L
    }
    function H(L, U, W, ne) {
        const {scrollBehavior: ye} = e;
        if (!so || !ye)
            return Promise.resolve();
        const Se = !W && Hw(xf(L.fullPath, 0)) || (ne || !W) && history.state && history.state.scroll || null;
        return Oe().then(()=>ye(L, U, Se)).then(R=>R && Fw(R)).catch(R=>ue(R, L, U))
    }
    const J = L=>r.go(L);
    let he;
    const be = new Set
      , ie = {
        currentRoute: s,
        listening: !0,
        addRoute: m,
        removeRoute: y,
        clearRoutes: t.clearRoutes,
        hasRoute: p,
        getRoutes: w,
        resolve: C,
        options: e,
        push: b,
        replace: _,
        go: J,
        back: ()=>J(-1),
        forward: ()=>J(1),
        beforeEach: o.add,
        beforeResolve: l.add,
        afterEach: i.add,
        onError: j.add,
        isReady: Te,
        install(L) {
            const U = this;
            L.component("RouterLink", cC),
            L.component("RouterView", hC),
            L.config.globalProperties.$router = U,
            Object.defineProperty(L.config.globalProperties, "$route", {
                enumerable: !0,
                get: ()=>Ft(s)
            }),
            so && !he && s.value === Zn && (he = !0,
            b(r.location).catch(ye=>{}
            ));
            const W = {};
            for (const ye in Zn)
                Object.defineProperty(W, ye, {
                    get: ()=>s.value[ye],
                    enumerable: !0
                });
            L.provide(oi, U),
            L.provide(ag, vh(W)),
            L.provide($s, s);
            const ne = L.unmount;
            be.add(L),
            L.unmount = function() {
                be.delete(L),
                be.size < 1 && (c = Zn,
                N && N(),
                N = null,
                s.value = Zn,
                he = !1,
                ee = !1),
                ne()
            }
        }
    };
    function me(L) {
        return L.reduce((U,W)=>U.then(()=>T(W)), Promise.resolve())
    }
    return ie
}
function gC(e, t) {
    const n = []
      , a = []
      , r = []
      , o = Math.max(t.matched.length, e.matched.length);
    for (let l = 0; l < o; l++) {
        const i = t.matched[l];
        i && (e.matched.find(c=>ko(c, i)) ? a.push(i) : n.push(i));
        const s = e.matched[l];
        s && (t.matched.find(c=>ko(c, s)) || r.push(s))
    }
    return [n, a, r]
}
function GP() {
    return bt(oi)
}
const vC = [{
    path: "/home",
    component: Ho(()=>Yo(()=>import("./Home-Cg04Ycm4.js"), __vite__mapDeps([0, 1, 2, 3]))),
    children: [{
        path: "index",
        component: Ho(()=>Yo(()=>import("./Lucky-CoPSpeIZ.js"), __vite__mapDeps([4, 5, 6, 2, 1, 7, 8])))
    }, {
        path: "mine",
        component: Ho(()=>Yo(()=>import("./Mine-n-SF9TZD.js"), __vite__mapDeps([9, 10, 2, 6, 11, 5, 12])))
    }, {
        path: "earn",
        component: Ho(()=>Yo(()=>import("./Earn-Bq-vJEcw.js"), __vite__mapDeps([13, 10, 2, 6, 11, 7, 14])))
    }, {
        path: "game",
        component: Ho(()=>Yo(()=>import("./Game-D1IXve4P.js"), __vite__mapDeps([15, 10, 2, 6, 11, 7, 16])))
    }]
}, {
    path: "/",
    redirect: "/home"
}]
  , bC = mC({
    history: Uw(),
    routes: vC
});
function Ns() {}
const _e = Object.assign
  , Xt = typeof window < "u"
  , Fn = e=>e !== null && typeof e == "object"
  , $e = e=>e != null
  , Ao = e=>typeof e == "function"
  , Pc = e=>Fn(e) && Ao(e.then) && Ao(e.catch)
  , Sr = e=>Object.prototype.toString.call(e) === "[object Date]" && !Number.isNaN(e.getTime());
function og(e) {
    return e = e.replace(/[^-|\d]/g, ""),
    /^((\+86)|(86))?(1)\d{10}$/.test(e) || /^0[0-9-]{10,13}$/.test(e)
}
const rg = e=>typeof e == "number" || /^\d+(\.\d+)?$/.test(e)
  , yC = ()=>Xt ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
function Ff(e, t) {
    const n = t.split(".");
    let a = e;
    return n.forEach(r=>{
        var o;
        a = Fn(a) && (o = a[r]) != null ? o : ""
    }
    ),
    a
}
function Me(e, t, n) {
    return t.reduce((a,r)=>((!n || e[r] !== void 0) && (a[r] = e[r]),
    a), {})
}
const pn = (e,t)=>JSON.stringify(e) === JSON.stringify(t)
  , Pl = e=>Array.isArray(e) ? e : [e]
  , pC = e=>e.reduce((t,n)=>t.concat(n), [])
  , Ze = null
  , te = [Number, String]
  , X = {
    type: Boolean,
    default: !0
}
  , ft = e=>({
    type: e,
    required: !0
})
  , Ke = ()=>({
    type: Array,
    default: ()=>[]
})
  , at = e=>({
    type: Number,
    default: e
})
  , ge = e=>({
    type: te,
    default: e
})
  , re = e=>({
    type: String,
    default: e
});
var _a = typeof window < "u";
function Et(e) {
    return _a ? requestAnimationFrame(e) : -1
}
function ri(e) {
    _a && cancelAnimationFrame(e)
}
function fa(e) {
    Et(()=>Et(e))
}
var _C = e=>e === window
  , Vf = (e,t)=>({
    top: 0,
    left: 0,
    right: e,
    bottom: t,
    width: e,
    height: t
})
  , Fe = e=>{
    const t = Ft(e);
    if (_C(t)) {
        const n = t.innerWidth
          , a = t.innerHeight;
        return Vf(n, a)
    }
    return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : Vf(0, 0)
}
;
function wC(e=!1) {
    const t = V(e);
    return [t, (a=!t.value)=>{
        t.value = a
    }
    ]
}
function _t(e) {
    const t = bt(e, null);
    if (t) {
        const n = gt()
          , {link: a, unlink: r, internalChildren: o} = t;
        a(n),
        Wa(()=>r(n));
        const l = F(()=>o.indexOf(n));
        return {
            parent: t,
            index: l
        }
    }
    return {
        parent: null,
        index: V(-1)
    }
}
function CC(e) {
    const t = []
      , n = a=>{
        Array.isArray(a) && a.forEach(r=>{
            var o;
            So(r) && (t.push(r),
            (o = r.component) != null && o.subTree && (t.push(r.component.subTree),
            n(r.component.subTree.children)),
            r.children && n(r.children))
        }
        )
    }
    ;
    return n(e),
    t
}
var Hf = (e,t)=>{
    const n = e.indexOf(t);
    return n === -1 ? e.findIndex(a=>t.key !== void 0 && t.key !== null && a.type === t.type && a.key === t.key) : n
}
;
function SC(e, t, n) {
    const a = CC(e.subTree.children);
    n.sort((o,l)=>Hf(a, o.vnode) - Hf(a, l.vnode));
    const r = n.map(o=>o.proxy);
    t.sort((o,l)=>{
        const i = r.indexOf(o)
          , s = r.indexOf(l);
        return i - s
    }
    )
}
function xt(e) {
    const t = Ge([])
      , n = Ge([])
      , a = gt();
    return {
        children: t,
        linkChildren: o=>{
            $n(e, Object.assign({
                link: s=>{
                    s.proxy && (n.push(s),
                    t.push(s.proxy),
                    SC(a, t, n))
                }
                ,
                unlink: s=>{
                    const c = n.indexOf(s);
                    t.splice(c, 1),
                    n.splice(c, 1)
                }
                ,
                children: t,
                internalChildren: n
            }, o))
        }
    }
}
var Ms = 1e3
  , Bs = 60 * Ms
  , Fs = 60 * Bs
  , Uf = 24 * Fs;
function EC(e) {
    const t = Math.floor(e / Uf)
      , n = Math.floor(e % Uf / Fs)
      , a = Math.floor(e % Fs / Bs)
      , r = Math.floor(e % Bs / Ms)
      , o = Math.floor(e % Ms);
    return {
        total: e,
        days: t,
        hours: n,
        minutes: a,
        seconds: r,
        milliseconds: o
    }
}
function TC(e, t) {
    return Math.floor(e / 1e3) === Math.floor(t / 1e3)
}
function xC(e) {
    let t, n, a, r;
    const o = V(e.time)
      , l = F(()=>EC(o.value))
      , i = ()=>{
        a = !1,
        ri(t)
    }
      , s = ()=>Math.max(n - Date.now(), 0)
      , c = w=>{
        var p, C;
        o.value = w,
        (p = e.onChange) == null || p.call(e, l.value),
        w === 0 && (i(),
        (C = e.onFinish) == null || C.call(e))
    }
      , u = ()=>{
        t = Et(()=>{
            a && (c(s()),
            o.value > 0 && u())
        }
        )
    }
      , f = ()=>{
        t = Et(()=>{
            if (a) {
                const w = s();
                (!TC(w, o.value) || w === 0) && c(w),
                o.value > 0 && f()
            }
        }
        )
    }
      , d = ()=>{
        _a && (e.millisecond ? u() : f())
    }
      , m = ()=>{
        a || (n = Date.now() + o.value,
        a = !0,
        d())
    }
      , y = (w=e.time)=>{
        i(),
        o.value = w
    }
    ;
    return cn(i),
    wn(()=>{
        r && (a = !0,
        r = !1,
        d())
    }
    ),
    Cn(()=>{
        a && (i(),
        r = !0)
    }
    ),
    {
        start: m,
        pause: i,
        reset: y,
        current: l
    }
}
function Mo(e) {
    let t;
    Qe(()=>{
        e(),
        Oe(()=>{
            t = !0
        }
        )
    }
    ),
    wn(()=>{
        t && e()
    }
    )
}
function tt(e, t, n={}) {
    if (!_a)
        return;
    const {target: a=window, passive: r=!1, capture: o=!1} = n;
    let l = !1, i;
    const s = f=>{
        if (l)
            return;
        const d = Ft(f);
        d && !i && (d.addEventListener(e, t, {
            capture: o,
            passive: r
        }),
        i = !0)
    }
      , c = f=>{
        if (l)
            return;
        const d = Ft(f);
        d && i && (d.removeEventListener(e, t, o),
        i = !1)
    }
    ;
    Wa(()=>c(a)),
    Cn(()=>c(a)),
    Mo(()=>s(a));
    let u;
    return nt(a) && (u = se(a, (f,d)=>{
        c(d),
        s(f)
    }
    )),
    ()=>{
        u == null || u(),
        c(a),
        l = !0
    }
}
function li(e, t, n={}) {
    if (!_a)
        return;
    const {eventName: a="click"} = n;
    tt(a, o=>{
        (Array.isArray(e) ? e : [e]).every(s=>{
            const c = Ft(s);
            return c && !c.contains(o.target)
        }
        ) && t(o)
    }
    , {
        target: document
    })
}
var jr, Vi;
function kC() {
    if (!jr && (jr = V(0),
    Vi = V(0),
    _a)) {
        const e = ()=>{
            jr.value = window.innerWidth,
            Vi.value = window.innerHeight
        }
        ;
        e(),
        window.addEventListener("resize", e, {
            passive: !0
        }),
        window.addEventListener("orientationchange", e, {
            passive: !0
        })
    }
    return {
        width: jr,
        height: Vi
    }
}
var IC = /scroll|auto|overlay/i
  , lg = _a ? window : void 0;
function AC(e) {
    return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1
}
function Rc(e, t=lg) {
    let n = e;
    for (; n && n !== t && AC(n); ) {
        const {overflowY: a} = window.getComputedStyle(n);
        if (IC.test(a))
            return n;
        n = n.parentNode
    }
    return t
}
function Bo(e, t=lg) {
    const n = V();
    return Qe(()=>{
        e.value && (n.value = Rc(e.value, t))
    }
    ),
    n
}
var zr;
function OC() {
    if (!zr && (zr = V("visible"),
    _a)) {
        const e = ()=>{
            zr.value = document.hidden ? "hidden" : "visible"
        }
        ;
        e(),
        window.addEventListener("visibilitychange", e)
    }
    return zr
}
var ig = Symbol("van-field");
function wa(e) {
    const t = bt(ig, null);
    t && !t.customValue.value && (t.customValue.value = e,
    se(e, ()=>{
        t.resetValidation(),
        t.validateWithTrigger("onChange")
    }
    ))
}
function Vn(e) {
    const t = "scrollTop"in e ? e.scrollTop : e.pageYOffset;
    return Math.max(t, 0)
}
function Rl(e, t) {
    "scrollTop"in e ? e.scrollTop = t : e.scrollTo(e.scrollX, t)
}
function Fa() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}
function Er(e) {
    Rl(window, e),
    Rl(document.body, e)
}
function Wf(e, t) {
    if (e === window)
        return 0;
    const n = t ? Vn(t) : Fa();
    return Fe(e).top + n
}
const PC = yC();
function sg() {
    PC && Er(Fa())
}
const Lc = e=>e.stopPropagation();
function je(e, t) {
    (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(),
    t && Lc(e)
}
function Ua(e) {
    const t = Ft(e);
    if (!t)
        return !1;
    const n = window.getComputedStyle(t)
      , a = n.display === "none"
      , r = t.offsetParent === null && n.position !== "fixed";
    return a || r
}
const {width: on, height: Kt} = kC();
function RC(e) {
    const t = window.getComputedStyle(e);
    return t.transform !== "none" || t.perspective !== "none" || ["transform", "perspective", "filter"].some(n=>(t.willChange || "").includes(n))
}
function LC(e) {
    let t = e.parentElement;
    for (; t; ) {
        if (t && t.tagName !== "HTML" && t.tagName !== "BODY" && RC(t))
            return t;
        t = t.parentElement
    }
    return null
}
function Ae(e) {
    if ($e(e))
        return rg(e) ? `${e}px` : String(e)
}
function zn(e) {
    if ($e(e)) {
        if (Array.isArray(e))
            return {
                width: Ae(e[0]),
                height: Ae(e[1])
            };
        const t = Ae(e);
        return {
            width: t,
            height: t
        }
    }
}
function Yn(e) {
    const t = {};
    return e !== void 0 && (t.zIndex = +e),
    t
}
let Hi;
function DC() {
    if (!Hi) {
        const e = document.documentElement
          , t = e.style.fontSize || window.getComputedStyle(e).fontSize;
        Hi = parseFloat(t)
    }
    return Hi
}
function $C(e) {
    return e = e.replace(/rem/g, ""),
    +e * DC()
}
function NC(e) {
    return e = e.replace(/vw/g, ""),
    +e * on.value / 100
}
function MC(e) {
    return e = e.replace(/vh/g, ""),
    +e * Kt.value / 100
}
function Dc(e) {
    if (typeof e == "number")
        return e;
    if (Xt) {
        if (e.includes("rem"))
            return $C(e);
        if (e.includes("vw"))
            return NC(e);
        if (e.includes("vh"))
            return MC(e)
    }
    return parseFloat(e)
}
const BC = /-(\w)/g
  , cg = e=>e.replace(BC, (t,n)=>n.toUpperCase())
  , FC = e=>e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
function nn(e, t=2) {
    let n = e + "";
    for (; n.length < t; )
        n = "0" + n;
    return n
}
const vt = (e,t,n)=>Math.min(Math.max(e, t), n);
function jf(e, t, n) {
    const a = e.indexOf(t);
    return a === -1 ? e : t === "-" && a !== 0 ? e.slice(0, a) : e.slice(0, a + 1) + e.slice(a).replace(n, "")
}
function Vs(e, t=!0, n=!0) {
    t ? e = jf(e, ".", /\./g) : e = e.split(".")[0],
    n ? e = jf(e, "-", /-/g) : e = e.replace(/-/, "");
    const a = t ? /[^-0-9.]/g : /[^-0-9]/g;
    return e.replace(a, "")
}
function ug(e, t) {
    return Math.round((e + t) * 1e10) / 1e10
}
const {hasOwnProperty: VC} = Object.prototype;
function HC(e, t, n) {
    const a = t[n];
    $e(a) && (!VC.call(e, n) || !Fn(a) ? e[n] = a : e[n] = fg(Object(e[n]), a))
}
function fg(e, t) {
    return Object.keys(t).forEach(n=>{
        HC(e, t, n)
    }
    ),
    e
}
var UC = {
    name: "姓名",
    tel: "电话",
    save: "保存",
    clear: "清空",
    cancel: "取消",
    confirm: "确认",
    delete: "删除",
    loading: "加载中...",
    noCoupon: "暂无优惠券",
    nameEmpty: "请填写姓名",
    addContact: "添加联系人",
    telInvalid: "请填写正确的电话",
    vanCalendar: {
        end: "结束",
        start: "开始",
        title: "日期选择",
        weekdays: ["日", "一", "二", "三", "四", "五", "六"],
        monthTitle: (e,t)=>`${e}年${t}月`,
        rangePrompt: e=>`最多选择 ${e} 天`
    },
    vanCascader: {
        select: "请选择"
    },
    vanPagination: {
        prev: "上一页",
        next: "下一页"
    },
    vanPullRefresh: {
        pulling: "下拉即可刷新...",
        loosing: "释放即可刷新..."
    },
    vanSubmitBar: {
        label: "合计:"
    },
    vanCoupon: {
        unlimited: "无门槛",
        discount: e=>`${e}折`,
        condition: e=>`满${e}元可用`
    },
    vanCouponCell: {
        title: "优惠券",
        count: e=>`${e}张可用`
    },
    vanCouponList: {
        exchange: "兑换",
        close: "不使用",
        enable: "可用",
        disabled: "不可用",
        placeholder: "输入优惠码"
    },
    vanAddressEdit: {
        area: "地区",
        areaEmpty: "请选择地区",
        addressEmpty: "请填写详细地址",
        addressDetail: "详细地址",
        defaultAddress: "设为默认收货地址"
    },
    vanAddressList: {
        add: "新增地址"
    }
};
const zf = V("zh-CN")
  , Yf = Ge({
    "zh-CN": UC
})
  , dg = {
    messages() {
        return Yf[zf.value]
    },
    use(e, t) {
        zf.value = e,
        this.add({
            [e]: t
        })
    },
    add(e={}) {
        fg(Yf, e)
    }
};
var WC = dg;
function jC(e) {
    const t = cg(e) + ".";
    return (n,...a)=>{
        const r = WC.messages()
          , o = Ff(r, t + n) || Ff(r, n);
        return Ao(o) ? o(...a) : o
    }
}
function Hs(e, t) {
    return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce((n,a)=>n + Hs(e, a), "") : Object.keys(t).reduce((n,a)=>n + (t[a] ? Hs(e, a) : ""), "") : ""
}
function zC(e) {
    return (t,n)=>(t && typeof t != "string" && (n = t,
    t = ""),
    t = t ? `${e}__${t}` : e,
    `${t}${Hs(t, n)}`)
}
function q(e) {
    const t = `van-${e}`;
    return [t, zC(t), jC(t)]
}
const Gn = "van-hairline"
  , hg = `${Gn}--top`
  , mg = `${Gn}--left`
  , YC = `${Gn}--right`
  , $c = `${Gn}--bottom`
  , cr = `${Gn}--surround`
  , ii = `${Gn}--top-bottom`
  , GC = `${Gn}-unset--top-bottom`
  , Tt = "van-haptics-feedback"
  , gg = Symbol("van-form")
  , vg = 500
  , Gf = 5;
function Ca(e, {args: t=[], done: n, canceled: a, error: r}) {
    if (e) {
        const o = e.apply(null, t);
        Pc(o) ? o.then(l=>{
            l ? n() : a && a()
        }
        ).catch(r || Ns) : o ? n() : a && a()
    } else
        n()
}
function oe(e) {
    return e.install = t=>{
        const {name: n} = e;
        n && (t.component(n, e),
        t.component(cg(`-${n}`), e))
    }
    ,
    e
}
function Ll(e, t) {
    return e.reduce((n,a)=>Math.abs(n - t) < Math.abs(a - t) ? n : a)
}
const bg = Symbol();
function si(e) {
    const t = bt(bg, null);
    t && se(t, n=>{
        n && e()
    }
    )
}
const yg = (e,t)=>{
    const n = V()
      , a = ()=>{
        n.value = Fe(e).height
    }
    ;
    return Qe(()=>{
        if (Oe(a),
        t)
            for (let r = 1; r <= 3; r++)
                setTimeout(a, 100 * r)
    }
    ),
    si(()=>Oe(a)),
    se([on, Kt], a),
    n
}
;
function ci(e, t) {
    const n = yg(e, !0);
    return a=>h("div", {
        class: t("placeholder"),
        style: {
            height: n.value ? `${n.value}px` : void 0
        }
    }, [a()])
}
const [pg,Kf] = q("action-bar")
  , Nc = Symbol(pg)
  , KC = {
    placeholder: Boolean,
    safeAreaInsetBottom: X
};
var XC = K({
    name: pg,
    props: KC,
    setup(e, {slots: t}) {
        const n = V()
          , a = ci(n, Kf)
          , {linkChildren: r} = xt(Nc);
        r();
        const o = ()=>{
            var l;
            return h("div", {
                ref: n,
                class: [Kf(), {
                    "van-safe-area-bottom": e.safeAreaInsetBottom
                }]
            }, [(l = t.default) == null ? void 0 : l.call(t)])
        }
        ;
        return ()=>e.placeholder ? a(o) : o()
    }
});
const _g = oe(XC);
function De(e) {
    const t = gt();
    t && _e(t.proxy, e)
}
const Sa = {
    to: [String, Object],
    url: String,
    replace: Boolean
};
function wg({to: e, url: t, replace: n, $router: a}) {
    e && a ? a[n ? "replace" : "push"](e) : t && (n ? location.replace(t) : location.href = t)
}
function za() {
    const e = gt().proxy;
    return ()=>wg(e)
}
const [qC,Xf] = q("badge")
  , JC = {
    dot: Boolean,
    max: te,
    tag: re("div"),
    color: String,
    offset: Array,
    content: te,
    showZero: X,
    position: re("top-right")
};
var ZC = K({
    name: qC,
    props: JC,
    setup(e, {slots: t}) {
        const n = ()=>{
            if (t.content)
                return !0;
            const {content: i, showZero: s} = e;
            return $e(i) && i !== "" && (s || i !== 0 && i !== "0")
        }
          , a = ()=>{
            const {dot: i, max: s, content: c} = e;
            if (!i && n())
                return t.content ? t.content() : $e(s) && rg(c) && +c > +s ? `${s}+` : c
        }
          , r = i=>i.startsWith("-") ? i.replace("-", "") : `-${i}`
          , o = F(()=>{
            const i = {
                background: e.color
            };
            if (e.offset) {
                const [s,c] = e.offset
                  , {position: u} = e
                  , [f,d] = u.split("-");
                t.default ? (typeof c == "number" ? i[f] = Ae(f === "top" ? c : -c) : i[f] = f === "top" ? Ae(c) : r(c),
                typeof s == "number" ? i[d] = Ae(d === "left" ? s : -s) : i[d] = d === "left" ? Ae(s) : r(s)) : (i.marginTop = Ae(c),
                i.marginLeft = Ae(s))
            }
            return i
        }
        )
          , l = ()=>{
            if (n() || e.dot)
                return h("div", {
                    class: Xf([e.position, {
                        dot: e.dot,
                        fixed: !!t.default
                    }]),
                    style: o.value
                }, [a()])
        }
        ;
        return ()=>{
            if (t.default) {
                const {tag: i} = e;
                return h(i, {
                    class: Xf("wrapper")
                }, {
                    default: ()=>[t.default(), l()]
                })
            }
            return l()
        }
    }
});
const Ya = oe(ZC);
let Cg = 2e3;
const QC = ()=>++Cg
  , eS = e=>{
    Cg = e
}
  , [Sg,tS] = q("config-provider")
  , Eg = Symbol(Sg)
  , nS = {
    tag: re("div"),
    theme: re("light"),
    zIndex: Number,
    themeVars: Object,
    themeVarsDark: Object,
    themeVarsLight: Object,
    themeVarsScope: re("local"),
    iconPrefix: String
};
function aS(e) {
    return e.replace(/([a-zA-Z])(\d)/g, "$1-$2")
}
function oS(e) {
    const t = {};
    return Object.keys(e).forEach(n=>{
        const a = aS(FC(n));
        t[`--van-${a}`] = e[n]
    }
    ),
    t
}
function Yr(e={}, t={}) {
    Object.keys(e).forEach(n=>{
        e[n] !== t[n] && document.documentElement.style.setProperty(n, e[n])
    }
    ),
    Object.keys(t).forEach(n=>{
        e[n] || document.documentElement.style.removeProperty(n)
    }
    )
}
var rS = K({
    name: Sg,
    props: nS,
    setup(e, {slots: t}) {
        const n = F(()=>oS(_e({}, e.themeVars, e.theme === "dark" ? e.themeVarsDark : e.themeVarsLight)));
        if (Xt) {
            const a = ()=>{
                document.documentElement.classList.add(`van-theme-${e.theme}`)
            }
              , r = (o=e.theme)=>{
                document.documentElement.classList.remove(`van-theme-${o}`)
            }
            ;
            se(()=>e.theme, (o,l)=>{
                l && r(l),
                a()
            }
            , {
                immediate: !0
            }),
            wn(a),
            Cn(r),
            cn(r),
            se(n, (o,l)=>{
                e.themeVarsScope === "global" && Yr(o, l)
            }
            ),
            se(()=>e.themeVarsScope, (o,l)=>{
                l === "global" && Yr({}, n.value),
                o === "global" && Yr(n.value, {})
            }
            ),
            e.themeVarsScope === "global" && Yr(n.value, {})
        }
        return $n(Eg, e),
        Lo(()=>{
            e.zIndex !== void 0 && eS(e.zIndex)
        }
        ),
        ()=>h(e.tag, {
            class: tS(),
            style: e.themeVarsScope === "local" ? n.value : void 0
        }, {
            default: ()=>{
                var a;
                return [(a = t.default) == null ? void 0 : a.call(t)]
            }
        })
    }
});
const [lS,qf] = q("icon")
  , iS = e=>e == null ? void 0 : e.includes("/")
  , sS = {
    dot: Boolean,
    tag: re("i"),
    name: String,
    size: te,
    badge: te,
    color: String,
    badgeProps: Object,
    classPrefix: String
};
var cS = K({
    name: lS,
    props: sS,
    setup(e, {slots: t}) {
        const n = bt(Eg, null)
          , a = F(()=>e.classPrefix || (n == null ? void 0 : n.iconPrefix) || qf());
        return ()=>{
            const {tag: r, dot: o, name: l, size: i, badge: s, color: c} = e
              , u = iS(l);
            return h(Ya, Re({
                dot: o,
                tag: r,
                class: [a.value, u ? "" : `${a.value}-${l}`],
                style: {
                    color: c,
                    fontSize: Ae(i)
                },
                content: s
            }, e.badgeProps), {
                default: ()=>{
                    var f;
                    return [(f = t.default) == null ? void 0 : f.call(t), u && h("img", {
                        class: qf("image"),
                        src: l
                    }, null)]
                }
            })
        }
    }
});
const Ie = oe(cS);
var uS = Ie;
const [fS,ur] = q("loading")
  , dS = Array(12).fill(null).map((e,t)=>h("i", {
    class: ur("line", String(t + 1))
}, null))
  , hS = h("svg", {
    class: ur("circular"),
    viewBox: "25 25 50 50"
}, [h("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
}, null)])
  , mS = {
    size: te,
    type: re("circular"),
    color: String,
    vertical: Boolean,
    textSize: te,
    textColor: String
};
var gS = K({
    name: fS,
    props: mS,
    setup(e, {slots: t}) {
        const n = F(()=>_e({
            color: e.color
        }, zn(e.size)))
          , a = ()=>{
            const o = e.type === "spinner" ? dS : hS;
            return h("span", {
                class: ur("spinner", e.type),
                style: n.value
            }, [t.icon ? t.icon() : o])
        }
          , r = ()=>{
            var o;
            if (t.default)
                return h("span", {
                    class: ur("text"),
                    style: {
                        fontSize: Ae(e.textSize),
                        color: (o = e.textColor) != null ? o : e.color
                    }
                }, [t.default()])
        }
        ;
        return ()=>{
            const {type: o, vertical: l} = e;
            return h("div", {
                class: ur([o, {
                    vertical: l
                }]),
                "aria-live": "polite",
                "aria-busy": !0
            }, [a(), r()])
        }
    }
});
const un = oe(gS)
  , [vS,Xa] = q("button")
  , bS = _e({}, Sa, {
    tag: re("button"),
    text: String,
    icon: String,
    type: re("default"),
    size: re("normal"),
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    nativeType: re("button"),
    loadingSize: te,
    loadingText: String,
    loadingType: String,
    iconPosition: re("left")
});
var yS = K({
    name: vS,
    props: bS,
    emits: ["click"],
    setup(e, {emit: t, slots: n}) {
        const a = za()
          , r = ()=>n.loading ? n.loading() : h(un, {
            size: e.loadingSize,
            type: e.loadingType,
            class: Xa("loading")
        }, null)
          , o = ()=>{
            if (e.loading)
                return r();
            if (n.icon)
                return h("div", {
                    class: Xa("icon")
                }, [n.icon()]);
            if (e.icon)
                return h(Ie, {
                    name: e.icon,
                    class: Xa("icon"),
                    classPrefix: e.iconPrefix
                }, null)
        }
          , l = ()=>{
            let c;
            if (e.loading ? c = e.loadingText : c = n.default ? n.default() : e.text,
            c)
                return h("span", {
                    class: Xa("text")
                }, [c])
        }
          , i = ()=>{
            const {color: c, plain: u} = e;
            if (c) {
                const f = {
                    color: u ? c : "white"
                };
                return u || (f.background = c),
                c.includes("gradient") ? f.border = 0 : f.borderColor = c,
                f
            }
        }
          , s = c=>{
            e.loading ? je(c) : e.disabled || (t("click", c),
            a())
        }
        ;
        return ()=>{
            const {tag: c, type: u, size: f, block: d, round: m, plain: y, square: w, loading: p, disabled: C, hairline: g, nativeType: v, iconPosition: b} = e
              , _ = [Xa([u, f, {
                plain: y,
                block: d,
                round: m,
                square: w,
                loading: p,
                disabled: C,
                hairline: g
            }]), {
                [cr]: g
            }];
            return h(c, {
                type: v,
                class: _,
                style: i(),
                disabled: C,
                onClick: s
            }, {
                default: ()=>[h("div", {
                    class: Xa("content")
                }, [b === "left" && o(), l(), b === "right" && o()])]
            })
        }
    }
});
const pt = oe(yS)
  , [pS,_S] = q("action-bar-button")
  , wS = _e({}, Sa, {
    type: String,
    text: String,
    icon: String,
    color: String,
    loading: Boolean,
    disabled: Boolean
});
var CS = K({
    name: pS,
    props: wS,
    setup(e, {slots: t}) {
        const n = za()
          , {parent: a, index: r} = _t(Nc)
          , o = F(()=>{
            if (a) {
                const i = a.children[r.value - 1];
                return !(i && "isButton"in i)
            }
        }
        )
          , l = F(()=>{
            if (a) {
                const i = a.children[r.value + 1];
                return !(i && "isButton"in i)
            }
        }
        );
        return De({
            isButton: !0
        }),
        ()=>{
            const {type: i, icon: s, text: c, color: u, loading: f, disabled: d} = e;
            return h(pt, {
                class: _S([i, {
                    last: l.value,
                    first: o.value
                }]),
                size: "large",
                type: i,
                icon: s,
                color: u,
                loading: f,
                disabled: d,
                onClick: n
            }, {
                default: ()=>[t.default ? t.default() : c]
            })
        }
    }
});
const Us = oe(CS)
  , [SS,Ui] = q("action-bar-icon")
  , ES = _e({}, Sa, {
    dot: Boolean,
    text: String,
    icon: String,
    color: String,
    badge: te,
    iconClass: Ze,
    badgeProps: Object,
    iconPrefix: String
});
var TS = K({
    name: SS,
    props: ES,
    setup(e, {slots: t}) {
        const n = za();
        _t(Nc);
        const a = ()=>{
            const {dot: r, badge: o, icon: l, color: i, iconClass: s, badgeProps: c, iconPrefix: u} = e;
            return t.icon ? h(Ya, Re({
                dot: r,
                class: Ui("icon"),
                content: o
            }, c), {
                default: t.icon
            }) : h(Ie, {
                tag: "div",
                dot: r,
                name: l,
                badge: o,
                color: i,
                class: [Ui("icon"), s],
                badgeProps: c,
                classPrefix: u
            }, null)
        }
        ;
        return ()=>h("div", {
            role: "button",
            class: Ui(),
            tabindex: 0,
            onClick: n
        }, [a(), t.default ? t.default() : e.text])
    }
});
const xS = oe(TS)
  , Fo = {
    show: Boolean,
    zIndex: te,
    overlay: X,
    duration: te,
    teleport: [String, Object],
    lockScroll: X,
    lazyRender: X,
    beforeClose: Function,
    overlayStyle: Object,
    overlayClass: Ze,
    transitionAppear: Boolean,
    closeOnClickOverlay: X
}
  , Mc = Object.keys(Fo);
function kS(e, t) {
    return e > t ? "horizontal" : t > e ? "vertical" : ""
}
function qt() {
    const e = V(0)
      , t = V(0)
      , n = V(0)
      , a = V(0)
      , r = V(0)
      , o = V(0)
      , l = V("")
      , i = V(!0)
      , s = ()=>l.value === "vertical"
      , c = ()=>l.value === "horizontal"
      , u = ()=>{
        n.value = 0,
        a.value = 0,
        r.value = 0,
        o.value = 0,
        l.value = "",
        i.value = !0
    }
    ;
    return {
        move: m=>{
            const y = m.touches[0];
            n.value = (y.clientX < 0 ? 0 : y.clientX) - e.value,
            a.value = y.clientY - t.value,
            r.value = Math.abs(n.value),
            o.value = Math.abs(a.value);
            const w = 10;
            (!l.value || r.value < w && o.value < w) && (l.value = kS(r.value, o.value)),
            i.value && (r.value > Gf || o.value > Gf) && (i.value = !1)
        }
        ,
        start: m=>{
            u(),
            e.value = m.touches[0].clientX,
            t.value = m.touches[0].clientY
        }
        ,
        reset: u,
        startX: e,
        startY: t,
        deltaX: n,
        deltaY: a,
        offsetX: r,
        offsetY: o,
        direction: l,
        isVertical: s,
        isHorizontal: c,
        isTap: i
    }
}
let Ko = 0;
const Jf = "van-overflow-hidden";
function Tg(e, t) {
    const n = qt()
      , a = "01"
      , r = "10"
      , o = u=>{
        n.move(u);
        const f = n.deltaY.value > 0 ? r : a
          , d = Rc(u.target, e.value)
          , {scrollHeight: m, offsetHeight: y, scrollTop: w} = d;
        let p = "11";
        w === 0 ? p = y >= m ? "00" : "01" : w + y >= m && (p = "10"),
        p !== "11" && n.isVertical() && !(parseInt(p, 2) & parseInt(f, 2)) && je(u, !0)
    }
      , l = ()=>{
        document.addEventListener("touchstart", n.start),
        document.addEventListener("touchmove", o, {
            passive: !1
        }),
        Ko || document.body.classList.add(Jf),
        Ko++
    }
      , i = ()=>{
        Ko && (document.removeEventListener("touchstart", n.start),
        document.removeEventListener("touchmove", o),
        Ko--,
        Ko || document.body.classList.remove(Jf))
    }
      , s = ()=>t() && l()
      , c = ()=>t() && i();
    Mo(s),
    Cn(c),
    cn(c),
    se(t, u=>{
        u ? l() : i()
    }
    )
}
function Bc(e) {
    const t = V(!1);
    return se(e, n=>{
        n && (t.value = n)
    }
    , {
        immediate: !0
    }),
    n=>()=>t.value ? n() : null
}
const Dl = ()=>{
    var e;
    const {scopeId: t} = ((e = gt()) == null ? void 0 : e.vnode) || {};
    return t ? {
        [t]: ""
    } : null
}
  , [IS,AS] = q("overlay")
  , OS = {
    show: Boolean,
    zIndex: te,
    duration: te,
    className: Ze,
    lockScroll: X,
    lazyRender: X,
    customStyle: Object
};
var PS = K({
    name: IS,
    props: OS,
    setup(e, {slots: t}) {
        const n = V()
          , a = Bc(()=>e.show || !e.lazyRender)
          , r = l=>{
            e.lockScroll && je(l, !0)
        }
          , o = a(()=>{
            var l;
            const i = _e(Yn(e.zIndex), e.customStyle);
            return $e(e.duration) && (i.animationDuration = `${e.duration}s`),
            st(h("div", {
                ref: n,
                style: i,
                class: [AS(), e.className]
            }, [(l = t.default) == null ? void 0 : l.call(t)]), [[dt, e.show]])
        }
        );
        return tt("touchmove", r, {
            target: n
        }),
        ()=>h($o, {
            name: "van-fade",
            appear: !0
        }, {
            default: o
        })
    }
});
const xg = oe(PS)
  , RS = _e({}, Fo, {
    round: Boolean,
    position: re("center"),
    closeIcon: re("cross"),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: re("top-right"),
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean
})
  , [LS,Zf] = q("popup");
var DS = K({
    name: LS,
    inheritAttrs: !1,
    props: RS,
    emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
    setup(e, {emit: t, attrs: n, slots: a}) {
        let r, o;
        const l = V()
          , i = V()
          , s = Bc(()=>e.show || !e.lazyRender)
          , c = F(()=>{
            const S = {
                zIndex: l.value
            };
            if ($e(e.duration)) {
                const A = e.position === "center" ? "animationDuration" : "transitionDuration";
                S[A] = `${e.duration}s`
            }
            return S
        }
        )
          , u = ()=>{
            r || (r = !0,
            l.value = e.zIndex !== void 0 ? +e.zIndex : QC(),
            t("open"))
        }
          , f = ()=>{
            r && Ca(e.beforeClose, {
                done() {
                    r = !1,
                    t("close"),
                    t("update:show", !1)
                }
            })
        }
          , d = S=>{
            t("clickOverlay", S),
            e.closeOnClickOverlay && f()
        }
          , m = ()=>{
            if (e.overlay)
                return h(xg, Re({
                    show: e.show,
                    class: e.overlayClass,
                    zIndex: l.value,
                    duration: e.duration,
                    customStyle: e.overlayStyle,
                    role: e.closeOnClickOverlay ? "button" : void 0,
                    tabindex: e.closeOnClickOverlay ? 0 : void 0
                }, Dl(), {
                    onClick: d
                }), {
                    default: a["overlay-content"]
                })
        }
          , y = S=>{
            t("clickCloseIcon", S),
            f()
        }
          , w = ()=>{
            if (e.closeable)
                return h(Ie, {
                    role: "button",
                    tabindex: 0,
                    name: e.closeIcon,
                    class: [Zf("close-icon", e.closeIconPosition), Tt],
                    classPrefix: e.iconPrefix,
                    onClick: y
                }, null)
        }
        ;
        let p;
        const C = ()=>{
            p && clearTimeout(p),
            p = setTimeout(()=>{
                t("opened")
            }
            )
        }
          , g = ()=>t("closed")
          , v = S=>t("keydown", S)
          , b = s(()=>{
            var S;
            const {round: A, position: E, safeAreaInsetTop: T, safeAreaInsetBottom: D} = e;
            return st(h("div", Re({
                ref: i,
                style: c.value,
                role: "dialog",
                tabindex: 0,
                class: [Zf({
                    round: A,
                    [E]: E
                }), {
                    "van-safe-area-top": T,
                    "van-safe-area-bottom": D
                }],
                onKeydown: v
            }, n, Dl()), [(S = a.default) == null ? void 0 : S.call(a), w()]), [[dt, e.show]])
        }
        )
          , _ = ()=>{
            const {position: S, transition: A, transitionAppear: E} = e
              , T = S === "center" ? "van-fade" : `van-popup-slide-${S}`;
            return h($o, {
                name: A || T,
                appear: E,
                onAfterEnter: C,
                onAfterLeave: g
            }, {
                default: b
            })
        }
        ;
        return se(()=>e.show, S=>{
            S && !r && (u(),
            n.tabindex === 0 && Oe(()=>{
                var A;
                (A = i.value) == null || A.focus()
            }
            )),
            !S && r && (r = !1,
            t("close"))
        }
        ),
        De({
            popupRef: i
        }),
        Tg(i, ()=>e.show && e.lockScroll),
        tt("popstate", ()=>{
            e.closeOnPopstate && (f(),
            o = !1)
        }
        ),
        Qe(()=>{
            e.show && u()
        }
        ),
        wn(()=>{
            o && (t("update:show", !0),
            o = !1)
        }
        ),
        Cn(()=>{
            e.show && e.teleport && (f(),
            o = !0)
        }
        ),
        $n(bg, ()=>e.show),
        ()=>e.teleport ? h(ja, {
            to: e.teleport
        }, {
            default: ()=>[m(), _()]
        }) : h(Je, null, [m(), _()])
    }
});
const fn = oe(DS)
  , [$S,Ht] = q("action-sheet")
  , NS = _e({}, Fo, {
    title: String,
    round: X,
    actions: Ke(),
    closeIcon: re("cross"),
    closeable: X,
    cancelText: String,
    description: String,
    closeOnPopstate: X,
    closeOnClickAction: Boolean,
    safeAreaInsetBottom: X
})
  , MS = [...Mc, "round", "closeOnPopstate", "safeAreaInsetBottom"];
var BS = K({
    name: $S,
    props: NS,
    emits: ["select", "cancel", "update:show"],
    setup(e, {slots: t, emit: n}) {
        const a = f=>n("update:show", f)
          , r = ()=>{
            a(!1),
            n("cancel")
        }
          , o = ()=>{
            if (e.title)
                return h("div", {
                    class: Ht("header")
                }, [e.title, e.closeable && h(Ie, {
                    name: e.closeIcon,
                    class: [Ht("close"), Tt],
                    onClick: r
                }, null)])
        }
          , l = ()=>{
            if (t.cancel || e.cancelText)
                return [h("div", {
                    class: Ht("gap")
                }, null), h("button", {
                    type: "button",
                    class: Ht("cancel"),
                    onClick: r
                }, [t.cancel ? t.cancel() : e.cancelText])]
        }
          , i = f=>{
            if (f.icon)
                return h(Ie, {
                    class: Ht("item-icon"),
                    name: f.icon
                }, null)
        }
          , s = (f,d)=>f.loading ? h(un, {
            class: Ht("loading-icon")
        }, null) : t.action ? t.action({
            action: f,
            index: d
        }) : [h("span", {
            class: Ht("name")
        }, [f.name]), f.subname && h("div", {
            class: Ht("subname")
        }, [f.subname])]
          , c = (f,d)=>{
            const {color: m, loading: y, callback: w, disabled: p, className: C} = f
              , g = ()=>{
                p || y || (w && w(f),
                e.closeOnClickAction && a(!1),
                Oe(()=>n("select", f, d)))
            }
            ;
            return h("button", {
                type: "button",
                style: {
                    color: m
                },
                class: [Ht("item", {
                    loading: y,
                    disabled: p
                }), C],
                onClick: g
            }, [i(f), s(f, d)])
        }
          , u = ()=>{
            if (e.description || t.description) {
                const f = t.description ? t.description() : e.description;
                return h("div", {
                    class: Ht("description")
                }, [f])
            }
        }
        ;
        return ()=>h(fn, Re({
            class: Ht(),
            position: "bottom",
            "onUpdate:show": a
        }, Me(e, MS)), {
            default: ()=>{
                var f;
                return [o(), u(), h("div", {
                    class: Ht("content")
                }, [e.actions.map(c), (f = t.default) == null ? void 0 : f.call(t)]), l()]
            }
        })
    }
});
const FS = oe(BS)
  , [VS,Rn,Qf] = q("picker")
  , kg = e=>e.find(t=>!t.disabled) || e[0];
function HS(e, t) {
    const n = e[0];
    if (n) {
        if (Array.isArray(n))
            return "multiple";
        if (t.children in n)
            return "cascade"
    }
    return "default"
}
function vl(e, t) {
    t = vt(t, 0, e.length);
    for (let n = t; n < e.length; n++)
        if (!e[n].disabled)
            return n;
    for (let n = t - 1; n >= 0; n--)
        if (!e[n].disabled)
            return n;
    return 0
}
const ed = (e,t,n)=>t !== void 0 && !!e.find(a=>a[n.value] === t);
function Ws(e, t, n) {
    const a = e.findIndex(o=>o[n.value] === t)
      , r = vl(e, a);
    return e[r]
}
function US(e, t, n) {
    const a = [];
    let r = {
        [t.children]: e
    }
      , o = 0;
    for (; r && r[t.children]; ) {
        const l = r[t.children]
          , i = n.value[o];
        if (r = $e(i) ? Ws(l, i, t) : void 0,
        !r && l.length) {
            const s = kg(l)[t.value];
            r = Ws(l, s, t)
        }
        o++,
        a.push(l)
    }
    return a
}
function WS(e) {
    const {transform: t} = window.getComputedStyle(e)
      , n = t.slice(7, t.length - 1).split(", ")[5];
    return Number(n)
}
function jS(e) {
    return _e({
        text: "text",
        value: "value",
        children: "children"
    }, e)
}
const td = 200
  , nd = 300
  , zS = 15
  , [Ig,Wi] = q("picker-column")
  , Ag = Symbol(Ig);
var YS = K({
    name: Ig,
    props: {
        value: te,
        fields: ft(Object),
        options: Ke(),
        readonly: Boolean,
        allowHtml: Boolean,
        optionHeight: ft(Number),
        swipeDuration: ft(te),
        visibleOptionNum: ft(te)
    },
    emits: ["change", "clickOption", "scrollInto"],
    setup(e, {emit: t, slots: n}) {
        let a, r, o, l, i;
        const s = V()
          , c = V()
          , u = V(0)
          , f = V(0)
          , d = qt()
          , m = ()=>e.options.length
          , y = ()=>e.optionHeight * (+e.visibleOptionNum - 1) / 2
          , w = D=>{
            let k = vl(e.options, D);
            const O = -k * e.optionHeight
              , N = ()=>{
                k > m() - 1 && (k = vl(e.options, D));
                const Z = e.options[k][e.fields.value];
                Z !== e.value && t("change", Z)
            }
            ;
            a && O !== u.value ? i = N : N(),
            u.value = O
        }
          , p = ()=>e.readonly || !e.options.length
          , C = D=>{
            a || p() || (i = null,
            f.value = td,
            w(D),
            t("clickOption", e.options[D]))
        }
          , g = D=>vt(Math.round(-D / e.optionHeight), 0, m() - 1)
          , v = F(()=>g(u.value))
          , b = (D,k)=>{
            const O = Math.abs(D / k);
            D = u.value + O / .003 * (D < 0 ? -1 : 1);
            const N = g(D);
            f.value = +e.swipeDuration,
            w(N)
        }
          , _ = ()=>{
            a = !1,
            f.value = 0,
            i && (i(),
            i = null)
        }
          , S = D=>{
            if (!p()) {
                if (d.start(D),
                a) {
                    const k = WS(c.value);
                    u.value = Math.min(0, k - y())
                }
                f.value = 0,
                r = u.value,
                o = Date.now(),
                l = r,
                i = null
            }
        }
          , A = D=>{
            if (p())
                return;
            d.move(D),
            d.isVertical() && (a = !0,
            je(D, !0));
            const k = vt(r + d.deltaY.value, -(m() * e.optionHeight), e.optionHeight)
              , O = g(k);
            O !== v.value && t("scrollInto", e.options[O]),
            u.value = k;
            const N = Date.now();
            N - o > nd && (o = N,
            l = k)
        }
          , E = ()=>{
            if (p())
                return;
            const D = u.value - l
              , k = Date.now() - o;
            if (k < nd && Math.abs(D) > zS) {
                b(D, k);
                return
            }
            const N = g(u.value);
            f.value = td,
            w(N),
            setTimeout(()=>{
                a = !1
            }
            , 0)
        }
          , T = ()=>{
            const D = {
                height: `${e.optionHeight}px`
            };
            return e.options.map((k,O)=>{
                const N = k[e.fields.text]
                  , {disabled: Z} = k
                  , ce = k[e.fields.value]
                  , j = {
                    role: "button",
                    style: D,
                    tabindex: Z ? -1 : 0,
                    class: [Wi("item", {
                        disabled: Z,
                        selected: ce === e.value
                    }), k.className],
                    onClick: ()=>C(O)
                }
                  , ee = {
                    class: "van-ellipsis",
                    [e.allowHtml ? "innerHTML" : "textContent"]: N
                };
                return h("li", j, [n.option ? n.option(k, O) : h("div", ee, null)])
            }
            )
        }
        ;
        return _t(Ag),
        De({
            stopMomentum: _
        }),
        Lo(()=>{
            const D = a ? Math.floor(-u.value / e.optionHeight) : e.options.findIndex(N=>N[e.fields.value] === e.value)
              , k = vl(e.options, D)
              , O = -k * e.optionHeight;
            a && k < D && _(),
            u.value = O
        }
        ),
        tt("touchmove", A, {
            target: s
        }),
        ()=>h("div", {
            ref: s,
            class: Wi(),
            onTouchstartPassive: S,
            onTouchend: E,
            onTouchcancel: E
        }, [h("ul", {
            ref: c,
            style: {
                transform: `translate3d(0, ${u.value + y()}px, 0)`,
                transitionDuration: `${f.value}ms`,
                transitionProperty: f.value ? "all" : "none"
            },
            class: Wi("wrapper"),
            onTransitionend: _
        }, [T()])])
    }
});
const [GS] = q("picker-toolbar")
  , ui = {
    title: String,
    cancelButtonText: String,
    confirmButtonText: String
}
  , Og = ["cancel", "confirm", "title", "toolbar"]
  , KS = Object.keys(ui);
var Pg = K({
    name: GS,
    props: ui,
    emits: ["confirm", "cancel"],
    setup(e, {emit: t, slots: n}) {
        const a = ()=>{
            if (n.title)
                return n.title();
            if (e.title)
                return h("div", {
                    class: [Rn("title"), "van-ellipsis"]
                }, [e.title])
        }
          , r = ()=>t("cancel")
          , o = ()=>t("confirm")
          , l = ()=>{
            var s;
            const c = (s = e.cancelButtonText) != null ? s : Qf("cancel");
            if (!(!n.cancel && !c))
                return h("button", {
                    type: "button",
                    class: [Rn("cancel"), Tt],
                    onClick: r
                }, [n.cancel ? n.cancel() : c])
        }
          , i = ()=>{
            var s;
            const c = (s = e.confirmButtonText) != null ? s : Qf("confirm");
            if (!(!n.confirm && !c))
                return h("button", {
                    type: "button",
                    class: [Rn("confirm"), Tt],
                    onClick: o
                }, [n.confirm ? n.confirm() : c])
        }
        ;
        return ()=>h("div", {
            class: Rn("toolbar")
        }, [n.toolbar ? n.toolbar() : [l(), a(), i()]])
    }
});
const Fc = (e,t)=>{
    const n = V(e());
    return se(e, a=>{
        a !== n.value && (n.value = a)
    }
    ),
    se(n, a=>{
        a !== e() && t(a)
    }
    ),
    n
}
;
function XS(e, t, n) {
    let a, r = 0;
    const o = e.scrollLeft
      , l = n === 0 ? 1 : Math.round(n * 1e3 / 16);
    let i = o;
    function s() {
        ri(a)
    }
    function c() {
        i += (t - o) / l,
        e.scrollLeft = i,
        ++r < l && (a = Et(c))
    }
    return c(),
    s
}
function qS(e, t, n, a) {
    let r, o = Vn(e);
    const l = o < t
      , i = n === 0 ? 1 : Math.round(n * 1e3 / 16)
      , s = (t - o) / i;
    function c() {
        ri(r)
    }
    function u() {
        o += s,
        (l && o > t || !l && o < t) && (o = t),
        Rl(e, o),
        l && o < t || !l && o > t ? r = Et(u) : a && (r = Et(a))
    }
    return u(),
    c
}
let JS = 0;
function Vo() {
    const e = gt()
      , {name: t="unknown"} = (e == null ? void 0 : e.type) || {};
    return `${t}-${++JS}`
}
function Rr() {
    const e = V([])
      , t = [];
    return Rh(()=>{
        e.value = []
    }
    ),
    [e, a=>(t[a] || (t[a] = r=>{
        e.value[a] = r
    }
    ),
    t[a])]
}
function Rg(e, t) {
    if (!Xt || !window.IntersectionObserver)
        return;
    const n = new IntersectionObserver(o=>{
        t(o[0].intersectionRatio > 0)
    }
    ,{
        root: document.body
    })
      , a = ()=>{
        e.value && n.observe(e.value)
    }
      , r = ()=>{
        e.value && n.unobserve(e.value)
    }
    ;
    Cn(r),
    cn(r),
    Mo(a)
}
const [ZS,QS] = q("sticky")
  , eE = {
    zIndex: te,
    position: re("top"),
    container: Object,
    offsetTop: ge(0),
    offsetBottom: ge(0)
};
var tE = K({
    name: ZS,
    props: eE,
    emits: ["scroll", "change"],
    setup(e, {emit: t, slots: n}) {
        const a = V()
          , r = Bo(a)
          , o = Ge({
            fixed: !1,
            width: 0,
            height: 0,
            transform: 0
        })
          , l = V(!1)
          , i = F(()=>Dc(e.position === "top" ? e.offsetTop : e.offsetBottom))
          , s = F(()=>{
            if (l.value)
                return;
            const {fixed: d, height: m, width: y} = o;
            if (d)
                return {
                    width: `${y}px`,
                    height: `${m}px`
                }
        }
        )
          , c = F(()=>{
            if (!o.fixed || l.value)
                return;
            const d = _e(Yn(e.zIndex), {
                width: `${o.width}px`,
                height: `${o.height}px`,
                [e.position]: `${i.value}px`
            });
            return o.transform && (d.transform = `translate3d(0, ${o.transform}px, 0)`),
            d
        }
        )
          , u = d=>t("scroll", {
            scrollTop: d,
            isFixed: o.fixed
        })
          , f = ()=>{
            if (!a.value || Ua(a))
                return;
            const {container: d, position: m} = e
              , y = Fe(a)
              , w = Vn(window);
            if (o.width = y.width,
            o.height = y.height,
            m === "top")
                if (d) {
                    const p = Fe(d)
                      , C = p.bottom - i.value - o.height;
                    o.fixed = i.value > y.top && p.bottom > 0,
                    o.transform = C < 0 ? C : 0
                } else
                    o.fixed = i.value > y.top;
            else {
                const {clientHeight: p} = document.documentElement;
                if (d) {
                    const C = Fe(d)
                      , g = p - C.top - i.value - o.height;
                    o.fixed = p - i.value < y.bottom && p > C.top,
                    o.transform = g < 0 ? -g : 0
                } else
                    o.fixed = p - i.value < y.bottom
            }
            u(w)
        }
        ;
        return se(()=>o.fixed, d=>t("change", d)),
        tt("scroll", f, {
            target: r,
            passive: !0
        }),
        Rg(a, f),
        se([on, Kt], ()=>{
            !a.value || Ua(a) || !o.fixed || (l.value = !0,
            Oe(()=>{
                const d = Fe(a);
                o.width = d.width,
                o.height = d.height,
                l.value = !1
            }
            ))
        }
        ),
        ()=>{
            var d;
            return h("div", {
                ref: a,
                style: s.value
            }, [h("div", {
                class: QS({
                    fixed: o.fixed && !l.value
                }),
                style: c.value
            }, [(d = n.default) == null ? void 0 : d.call(n)])])
        }
    }
});
const Lg = oe(tE)
  , [Dg,Gr] = q("swipe")
  , nE = {
    loop: X,
    width: te,
    height: te,
    vertical: Boolean,
    autoplay: ge(0),
    duration: ge(500),
    touchable: X,
    lazyRender: Boolean,
    initialSwipe: ge(0),
    indicatorColor: String,
    showIndicators: X,
    stopPropagation: X
}
  , $g = Symbol(Dg);
var aE = K({
    name: Dg,
    props: nE,
    emits: ["change", "dragStart", "dragEnd"],
    setup(e, {emit: t, slots: n}) {
        const a = V()
          , r = V()
          , o = Ge({
            rect: null,
            width: 0,
            height: 0,
            offset: 0,
            active: 0,
            swiping: !1
        });
        let l = !1;
        const i = qt()
          , {children: s, linkChildren: c} = xt($g)
          , u = F(()=>s.length)
          , f = F(()=>o[e.vertical ? "height" : "width"])
          , d = F(()=>e.vertical ? i.deltaY.value : i.deltaX.value)
          , m = F(()=>o.rect ? (e.vertical ? o.rect.height : o.rect.width) - f.value * u.value : 0)
          , y = F(()=>f.value ? Math.ceil(Math.abs(m.value) / f.value) : u.value)
          , w = F(()=>u.value * f.value)
          , p = F(()=>(o.active + u.value) % u.value)
          , C = F(()=>{
            const H = e.vertical ? "vertical" : "horizontal";
            return i.direction.value === H
        }
        )
          , g = F(()=>{
            const H = {
                transitionDuration: `${o.swiping ? 0 : e.duration}ms`,
                transform: `translate${e.vertical ? "Y" : "X"}(${+o.offset.toFixed(2)}px)`
            };
            if (f.value) {
                const J = e.vertical ? "height" : "width"
                  , he = e.vertical ? "width" : "height";
                H[J] = `${w.value}px`,
                H[he] = e[he] ? `${e[he]}px` : ""
            }
            return H
        }
        )
          , v = H=>{
            const {active: J} = o;
            return H ? e.loop ? vt(J + H, -1, u.value) : vt(J + H, 0, y.value) : J
        }
          , b = (H,J=0)=>{
            let he = H * f.value;
            e.loop || (he = Math.min(he, -m.value));
            let be = J - he;
            return e.loop || (be = vt(be, m.value, 0)),
            be
        }
          , _ = ({pace: H=0, offset: J=0, emitChange: he})=>{
            if (u.value <= 1)
                return;
            const {active: be} = o
              , ie = v(H)
              , me = b(ie, J);
            if (e.loop) {
                if (s[0] && me !== m.value) {
                    const L = me < m.value;
                    s[0].setOffset(L ? w.value : 0)
                }
                if (s[u.value - 1] && me !== 0) {
                    const L = me > 0;
                    s[u.value - 1].setOffset(L ? -w.value : 0)
                }
            }
            o.active = ie,
            o.offset = me,
            he && ie !== be && t("change", p.value)
        }
          , S = ()=>{
            o.swiping = !0,
            o.active <= -1 ? _({
                pace: u.value
            }) : o.active >= u.value && _({
                pace: -u.value
            })
        }
          , A = ()=>{
            S(),
            i.reset(),
            fa(()=>{
                o.swiping = !1,
                _({
                    pace: -1,
                    emitChange: !0
                })
            }
            )
        }
          , E = ()=>{
            S(),
            i.reset(),
            fa(()=>{
                o.swiping = !1,
                _({
                    pace: 1,
                    emitChange: !0
                })
            }
            )
        }
        ;
        let T;
        const D = ()=>clearTimeout(T)
          , k = ()=>{
            D(),
            +e.autoplay > 0 && u.value > 1 && (T = setTimeout(()=>{
                E(),
                k()
            }
            , +e.autoplay))
        }
          , O = (H=+e.initialSwipe)=>{
            if (!a.value)
                return;
            const J = ()=>{
                var he, be;
                if (!Ua(a)) {
                    const ie = {
                        width: a.value.offsetWidth,
                        height: a.value.offsetHeight
                    };
                    o.rect = ie,
                    o.width = +((he = e.width) != null ? he : ie.width),
                    o.height = +((be = e.height) != null ? be : ie.height)
                }
                u.value && (H = Math.min(u.value - 1, H),
                H === -1 && (H = u.value - 1)),
                o.active = H,
                o.swiping = !0,
                o.offset = b(H),
                s.forEach(ie=>{
                    ie.setOffset(0)
                }
                ),
                k()
            }
            ;
            Ua(a) ? Oe().then(J) : J()
        }
          , N = ()=>O(o.active);
        let Z;
        const ce = H=>{
            !e.touchable || H.touches.length > 1 || (i.start(H),
            l = !1,
            Z = Date.now(),
            D(),
            S())
        }
          , j = H=>{
            e.touchable && o.swiping && (i.move(H),
            C.value && (!e.loop && (o.active === 0 && d.value > 0 || o.active === u.value - 1 && d.value < 0) || (je(H, e.stopPropagation),
            _({
                offset: d.value
            }),
            l || (t("dragStart", {
                index: p.value
            }),
            l = !0))))
        }
          , ee = ()=>{
            if (!e.touchable || !o.swiping)
                return;
            const H = Date.now() - Z
              , J = d.value / H;
            if ((Math.abs(J) > .25 || Math.abs(d.value) > f.value / 2) && C.value) {
                const be = e.vertical ? i.offsetY.value : i.offsetX.value;
                let ie = 0;
                e.loop ? ie = be > 0 ? d.value > 0 ? -1 : 1 : 0 : ie = -Math[d.value > 0 ? "ceil" : "floor"](d.value / f.value),
                _({
                    pace: ie,
                    emitChange: !0
                })
            } else
                d.value && _({
                    pace: 0
                });
            l = !1,
            o.swiping = !1,
            t("dragEnd", {
                index: p.value
            }),
            k()
        }
          , ue = (H,J={})=>{
            S(),
            i.reset(),
            fa(()=>{
                let he;
                e.loop && H === u.value ? he = o.active === 0 ? 0 : H : he = H % u.value,
                J.immediate ? fa(()=>{
                    o.swiping = !1
                }
                ) : o.swiping = !1,
                _({
                    pace: he - o.active,
                    emitChange: !0
                })
            }
            )
        }
          , Te = (H,J)=>{
            const he = J === p.value
              , be = he ? {
                backgroundColor: e.indicatorColor
            } : void 0;
            return h("i", {
                style: be,
                class: Gr("indicator", {
                    active: he
                })
            }, null)
        }
          , Pe = ()=>{
            if (n.indicator)
                return n.indicator({
                    active: p.value,
                    total: u.value
                });
            if (e.showIndicators && u.value > 1)
                return h("div", {
                    class: Gr("indicators", {
                        vertical: e.vertical
                    })
                }, [Array(u.value).fill("").map(Te)])
        }
        ;
        return De({
            prev: A,
            next: E,
            state: o,
            resize: N,
            swipeTo: ue
        }),
        c({
            size: f,
            props: e,
            count: u,
            activeIndicator: p
        }),
        se(()=>e.initialSwipe, H=>O(+H)),
        se(u, ()=>O(o.active)),
        se(()=>e.autoplay, k),
        se([on, Kt, ()=>e.width, ()=>e.height], N),
        se(OC(), H=>{
            H === "visible" ? k() : D()
        }
        ),
        Qe(O),
        wn(()=>O(o.active)),
        si(()=>O(o.active)),
        Cn(D),
        cn(D),
        tt("touchmove", j, {
            target: r
        }),
        ()=>{
            var H;
            return h("div", {
                ref: a,
                class: Gr()
            }, [h("div", {
                ref: r,
                style: g.value,
                class: Gr("track", {
                    vertical: e.vertical
                }),
                onTouchstartPassive: ce,
                onTouchend: ee,
                onTouchcancel: ee
            }, [(H = n.default) == null ? void 0 : H.call(n)]), Pe()])
        }
    }
});
const fi = oe(aE)
  , [oE,ad] = q("tabs");
var rE = K({
    name: oE,
    props: {
        count: ft(Number),
        inited: Boolean,
        animated: Boolean,
        duration: ft(te),
        swipeable: Boolean,
        lazyRender: Boolean,
        currentIndex: ft(Number)
    },
    emits: ["change"],
    setup(e, {emit: t, slots: n}) {
        const a = V()
          , r = i=>t("change", i)
          , o = ()=>{
            var i;
            const s = (i = n.default) == null ? void 0 : i.call(n);
            return e.animated || e.swipeable ? h(fi, {
                ref: a,
                loop: !1,
                class: ad("track"),
                duration: +e.duration * 1e3,
                touchable: e.swipeable,
                lazyRender: e.lazyRender,
                showIndicators: !1,
                onChange: r
            }, {
                default: ()=>[s]
            }) : s
        }
          , l = i=>{
            const s = a.value;
            s && s.state.active !== i && s.swipeTo(i, {
                immediate: !e.inited
            })
        }
        ;
        return se(()=>e.currentIndex, l),
        Qe(()=>{
            l(e.currentIndex)
        }
        ),
        De({
            swipeRef: a
        }),
        ()=>h("div", {
            class: ad("content", {
                animated: e.animated || e.swipeable
            })
        }, [o()])
    }
});
const [Ng,Kr] = q("tabs")
  , lE = {
    type: re("line"),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: ge(0),
    duration: ge(.3),
    animated: Boolean,
    ellipsis: X,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: ge(0),
    background: String,
    lazyRender: X,
    showHeader: X,
    lineWidth: te,
    lineHeight: te,
    beforeChange: Function,
    swipeThreshold: ge(5),
    titleActiveColor: String,
    titleInactiveColor: String
}
  , Mg = Symbol(Ng);
var iE = K({
    name: Ng,
    props: lE,
    emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
    setup(e, {emit: t, slots: n}) {
        let a, r, o, l, i;
        const s = V()
          , c = V()
          , u = V()
          , f = V()
          , d = Vo()
          , m = Bo(s)
          , [y,w] = Rr()
          , {children: p, linkChildren: C} = xt(Mg)
          , g = Ge({
            inited: !1,
            position: "",
            lineStyle: {},
            currentIndex: -1
        })
          , v = F(()=>p.length > +e.swipeThreshold || !e.ellipsis || e.shrink)
          , b = F(()=>({
            borderColor: e.color,
            background: e.background
        }))
          , _ = (ie,me)=>{
            var L;
            return (L = ie.name) != null ? L : me
        }
          , S = F(()=>{
            const ie = p[g.currentIndex];
            if (ie)
                return _(ie, g.currentIndex)
        }
        )
          , A = F(()=>Dc(e.offsetTop))
          , E = F(()=>e.sticky ? A.value + a : 0)
          , T = ie=>{
            const me = c.value
              , L = y.value;
            if (!v.value || !me || !L || !L[g.currentIndex])
                return;
            const U = L[g.currentIndex].$el
              , W = U.offsetLeft - (me.offsetWidth - U.offsetWidth) / 2;
            l && l(),
            l = XS(me, W, ie ? 0 : +e.duration)
        }
          , D = ()=>{
            const ie = g.inited;
            Oe(()=>{
                const me = y.value;
                if (!me || !me[g.currentIndex] || e.type !== "line" || Ua(s.value))
                    return;
                const L = me[g.currentIndex].$el
                  , {lineWidth: U, lineHeight: W} = e
                  , ne = L.offsetLeft + L.offsetWidth / 2
                  , ye = {
                    width: Ae(U),
                    backgroundColor: e.color,
                    transform: `translateX(${ne}px) translateX(-50%)`
                };
                if (ie && (ye.transitionDuration = `${e.duration}s`),
                $e(W)) {
                    const Se = Ae(W);
                    ye.height = Se,
                    ye.borderRadius = Se
                }
                g.lineStyle = ye
            }
            )
        }
          , k = ie=>{
            const me = ie < g.currentIndex ? -1 : 1;
            for (; ie >= 0 && ie < p.length; ) {
                if (!p[ie].disabled)
                    return ie;
                ie += me
            }
        }
          , O = (ie,me)=>{
            const L = k(ie);
            if (!$e(L))
                return;
            const U = p[L]
              , W = _(U, L)
              , ne = g.currentIndex !== null;
            g.currentIndex !== L && (g.currentIndex = L,
            me || T(),
            D()),
            W !== e.active && (t("update:active", W),
            ne && t("change", W, U.title)),
            o && !e.scrollspy && Er(Math.ceil(Wf(s.value) - A.value))
        }
          , N = (ie,me)=>{
            const L = p.find((W,ne)=>_(W, ne) === ie)
              , U = L ? p.indexOf(L) : 0;
            O(U, me)
        }
          , Z = (ie=!1)=>{
            if (e.scrollspy) {
                const me = p[g.currentIndex].$el;
                if (me && m.value) {
                    const L = Wf(me, m.value) - E.value;
                    r = !0,
                    i && i(),
                    i = qS(m.value, L, ie ? 0 : +e.duration, ()=>{
                        r = !1
                    }
                    )
                }
            }
        }
          , ce = (ie,me,L)=>{
            const {title: U, disabled: W} = p[me]
              , ne = _(p[me], me);
            W || (Ca(e.beforeChange, {
                args: [ne],
                done: ()=>{
                    O(me),
                    Z()
                }
            }),
            wg(ie)),
            t("clickTab", {
                name: ne,
                title: U,
                event: L,
                disabled: W
            })
        }
          , j = ie=>{
            o = ie.isFixed,
            t("scroll", ie)
        }
          , ee = ie=>{
            Oe(()=>{
                N(ie),
                Z(!0)
            }
            )
        }
          , ue = ()=>{
            for (let ie = 0; ie < p.length; ie++) {
                const {top: me} = Fe(p[ie].$el);
                if (me > E.value)
                    return ie === 0 ? 0 : ie - 1
            }
            return p.length - 1
        }
          , Te = ()=>{
            if (e.scrollspy && !r) {
                const ie = ue();
                O(ie)
            }
        }
          , Pe = ()=>{
            if (e.type === "line" && p.length)
                return h("div", {
                    class: Kr("line"),
                    style: g.lineStyle
                }, null)
        }
          , H = ()=>{
            var ie, me, L;
            const {type: U, border: W, sticky: ne} = e
              , ye = [h("div", {
                ref: ne ? void 0 : u,
                class: [Kr("wrap"), {
                    [ii]: U === "line" && W
                }]
            }, [h("div", {
                ref: c,
                role: "tablist",
                class: Kr("nav", [U, {
                    shrink: e.shrink,
                    complete: v.value
                }]),
                style: b.value,
                "aria-orientation": "horizontal"
            }, [(ie = n["nav-left"]) == null ? void 0 : ie.call(n), p.map(Se=>Se.renderTitle(ce)), Pe(), (me = n["nav-right"]) == null ? void 0 : me.call(n)])]), (L = n["nav-bottom"]) == null ? void 0 : L.call(n)];
            return ne ? h("div", {
                ref: u
            }, [ye]) : ye
        }
          , J = ()=>{
            D(),
            Oe(()=>{
                var ie, me;
                T(!0),
                (me = (ie = f.value) == null ? void 0 : ie.swipeRef.value) == null || me.resize()
            }
            )
        }
        ;
        se(()=>[e.color, e.duration, e.lineWidth, e.lineHeight], D),
        se(on, J),
        se(()=>e.active, ie=>{
            ie !== S.value && N(ie)
        }
        ),
        se(()=>p.length, ()=>{
            g.inited && (N(e.active),
            D(),
            Oe(()=>{
                T(!0)
            }
            ))
        }
        );
        const he = ()=>{
            N(e.active, !0),
            Oe(()=>{
                g.inited = !0,
                u.value && (a = Fe(u.value).height),
                T(!0)
            }
            )
        }
          , be = (ie,me)=>t("rendered", ie, me);
        return De({
            resize: J,
            scrollTo: ee
        }),
        wn(D),
        si(D),
        Mo(he),
        Rg(s, D),
        tt("scroll", Te, {
            target: m,
            passive: !0
        }),
        C({
            id: d,
            props: e,
            setLine: D,
            scrollable: v,
            onRendered: be,
            currentName: S,
            setTitleRefs: w,
            scrollIntoView: T
        }),
        ()=>h("div", {
            ref: s,
            class: Kr([e.type])
        }, [e.showHeader ? e.sticky ? h(Lg, {
            container: s.value,
            offsetTop: A.value,
            onScroll: j
        }, {
            default: ()=>[H()]
        }) : H() : null, h(rE, {
            ref: f,
            count: p.length,
            inited: g.inited,
            animated: e.animated,
            duration: e.duration,
            swipeable: e.swipeable,
            lazyRender: e.lazyRender,
            currentIndex: g.currentIndex,
            onChange: O
        }, {
            default: ()=>{
                var ie;
                return [(ie = n.default) == null ? void 0 : ie.call(n)]
            }
        })])
    }
});
const Bg = Symbol()
  , sE = ()=>bt(Bg, null)
  , [cE,od] = q("tab")
  , uE = K({
    name: cE,
    props: {
        id: String,
        dot: Boolean,
        type: String,
        color: String,
        title: String,
        badge: te,
        shrink: Boolean,
        isActive: Boolean,
        disabled: Boolean,
        controls: String,
        scrollable: Boolean,
        activeColor: String,
        inactiveColor: String,
        showZeroBadge: X
    },
    setup(e, {slots: t}) {
        const n = F(()=>{
            const r = {}
              , {type: o, color: l, disabled: i, isActive: s, activeColor: c, inactiveColor: u} = e;
            l && o === "card" && (r.borderColor = l,
            i || (s ? r.backgroundColor = l : r.color = l));
            const d = s ? c : u;
            return d && (r.color = d),
            r
        }
        )
          , a = ()=>{
            const r = h("span", {
                class: od("text", {
                    ellipsis: !e.scrollable
                })
            }, [t.title ? t.title() : e.title]);
            return e.dot || $e(e.badge) && e.badge !== "" ? h(Ya, {
                dot: e.dot,
                content: e.badge,
                showZero: e.showZeroBadge
            }, {
                default: ()=>[r]
            }) : r
        }
        ;
        return ()=>h("div", {
            id: e.id,
            role: "tab",
            class: [od([e.type, {
                grow: e.scrollable && !e.shrink,
                shrink: e.shrink,
                active: e.isActive,
                disabled: e.disabled
            }])],
            style: n.value,
            tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
            "aria-selected": e.isActive,
            "aria-disabled": e.disabled || void 0,
            "aria-controls": e.controls
        }, [a()])
    }
})
  , [fE,dE] = q("swipe-item");
var hE = K({
    name: fE,
    setup(e, {slots: t}) {
        let n;
        const a = Ge({
            offset: 0,
            inited: !1,
            mounted: !1
        })
          , {parent: r, index: o} = _t($g);
        if (!r)
            return;
        const l = F(()=>{
            const c = {}
              , {vertical: u} = r.props;
            return r.size.value && (c[u ? "height" : "width"] = `${r.size.value}px`),
            a.offset && (c.transform = `translate${u ? "Y" : "X"}(${a.offset}px)`),
            c
        }
        )
          , i = F(()=>{
            const {loop: c, lazyRender: u} = r.props;
            if (!u || n)
                return !0;
            if (!a.mounted)
                return !1;
            const f = r.activeIndicator.value
              , d = r.count.value - 1
              , m = f === 0 && c ? d : f - 1
              , y = f === d && c ? 0 : f + 1;
            return n = o.value === f || o.value === m || o.value === y,
            n
        }
        )
          , s = c=>{
            a.offset = c
        }
        ;
        return Qe(()=>{
            Oe(()=>{
                a.mounted = !0
            }
            )
        }
        ),
        De({
            setOffset: s
        }),
        ()=>{
            var c;
            return h("div", {
                class: dE(),
                style: l.value
            }, [i.value ? (c = t.default) == null ? void 0 : c.call(t) : null])
        }
    }
});
const di = oe(hE)
  , [mE,ji] = q("tab")
  , gE = _e({}, Sa, {
    dot: Boolean,
    name: te,
    badge: te,
    title: String,
    disabled: Boolean,
    titleClass: Ze,
    titleStyle: [String, Object],
    showZeroBadge: X
});
var vE = K({
    name: mE,
    props: gE,
    setup(e, {slots: t}) {
        const n = Vo()
          , a = V(!1)
          , r = gt()
          , {parent: o, index: l} = _t(Mg);
        if (!o)
            return;
        const i = ()=>{
            var y;
            return (y = e.name) != null ? y : l.value
        }
          , s = ()=>{
            a.value = !0,
            o.props.lazyRender && Oe(()=>{
                o.onRendered(i(), e.title)
            }
            )
        }
          , c = F(()=>{
            const y = i() === o.currentName.value;
            return y && !a.value && s(),
            y
        }
        )
          , u = V("")
          , f = V("");
        Lo(()=>{
            const {titleClass: y, titleStyle: w} = e;
            u.value = y ? Wl(y) : "",
            f.value = w && typeof w != "string" ? eb(Ul(w)) : w
        }
        );
        const d = y=>h(uE, Re({
            key: n,
            id: `${o.id}-${l.value}`,
            ref: o.setTitleRefs(l.value),
            style: f.value,
            class: u.value,
            isActive: c.value,
            controls: n,
            scrollable: o.scrollable.value,
            activeColor: o.props.titleActiveColor,
            inactiveColor: o.props.titleInactiveColor,
            onClick: w=>y(r.proxy, l.value, w)
        }, Me(o.props, ["type", "color", "shrink"]), Me(e, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
            title: t.title
        })
          , m = V(!c.value);
        return se(c, y=>{
            y ? m.value = !1 : fa(()=>{
                m.value = !0
            }
            )
        }
        ),
        se(()=>e.title, ()=>{
            o.setLine(),
            o.scrollIntoView()
        }
        ),
        $n(Bg, c),
        De({
            id: n,
            renderTitle: d
        }),
        ()=>{
            var y;
            const w = `${o.id}-${l.value}`
              , {animated: p, swipeable: C, scrollspy: g, lazyRender: v} = o.props;
            if (!t.default && !p)
                return;
            const b = g || c.value;
            if (p || C)
                return h(di, {
                    id: n,
                    role: "tabpanel",
                    class: ji("panel-wrapper", {
                        inactive: m.value
                    }),
                    tabindex: c.value ? 0 : -1,
                    "aria-hidden": !c.value,
                    "aria-labelledby": w
                }, {
                    default: ()=>{
                        var A;
                        return [h("div", {
                            class: ji("panel")
                        }, [(A = t.default) == null ? void 0 : A.call(t)])]
                    }
                });
            const S = a.value || g || !v ? (y = t.default) == null ? void 0 : y.call(t) : null;
            return st(h("div", {
                id: n,
                role: "tabpanel",
                class: ji("panel"),
                tabindex: b ? 0 : -1,
                "aria-labelledby": w
            }, [S]), [[dt, b]])
        }
    }
});
const Tr = oe(vE)
  , hi = oe(iE)
  , [Fg,zi] = q("picker-group")
  , Vg = Symbol(Fg)
  , bE = _e({
    tabs: Ke(),
    activeTab: ge(0),
    nextStepText: String,
    showToolbar: X
}, ui);
var yE = K({
    name: Fg,
    props: bE,
    emits: ["confirm", "cancel", "update:activeTab"],
    setup(e, {emit: t, slots: n}) {
        const a = Fc(()=>e.activeTab, c=>t("update:activeTab", c))
          , {children: r, linkChildren: o} = xt(Vg);
        o();
        const l = ()=>+a.value < e.tabs.length - 1 && e.nextStepText
          , i = ()=>{
            l() ? a.value = +a.value + 1 : t("confirm", r.map(c=>c.confirm()))
        }
          , s = ()=>t("cancel");
        return ()=>{
            var c, u;
            let f = (u = (c = n.default) == null ? void 0 : c.call(n)) == null ? void 0 : u.filter(m=>m.type !== St).map(m=>m.type === Je ? m.children : m);
            f && (f = pC(f));
            const d = l() ? e.nextStepText : e.confirmButtonText;
            return h("div", {
                class: zi()
            }, [e.showToolbar ? h(Pg, {
                title: e.title,
                cancelButtonText: e.cancelButtonText,
                confirmButtonText: d,
                onConfirm: i,
                onCancel: s
            }, Me(n, Og)) : null, h(hi, {
                active: a.value,
                "onUpdate:active": m=>a.value = m,
                class: zi("tabs"),
                shrink: !0,
                animated: !0,
                lazyRender: !1
            }, {
                default: ()=>[e.tabs.map((m,y)=>h(Tr, {
                    title: m,
                    titleClass: zi("tab-title")
                }, {
                    default: ()=>[f == null ? void 0 : f[y]]
                }))]
            })])
        }
    }
});
const mi = _e({
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: ge(44),
    showToolbar: X,
    swipeDuration: ge(1e3),
    visibleOptionNum: ge(6)
}, ui)
  , pE = _e({}, mi, {
    columns: Ke(),
    modelValue: Ke(),
    toolbarPosition: re("top"),
    columnsFieldNames: Object
});
var _E = K({
    name: VS,
    props: pE,
    emits: ["confirm", "cancel", "change", "scrollInto", "clickOption", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const a = V()
          , r = V(e.modelValue.slice(0))
          , {parent: o} = _t(Vg)
          , {children: l, linkChildren: i} = xt(Ag);
        i();
        const s = F(()=>jS(e.columnsFieldNames))
          , c = F(()=>Dc(e.optionHeight))
          , u = F(()=>HS(e.columns, s.value))
          , f = F(()=>{
            const {columns: k} = e;
            switch (u.value) {
            case "multiple":
                return k;
            case "cascade":
                return US(k, s.value, r);
            default:
                return [k]
            }
        }
        )
          , d = F(()=>f.value.some(k=>k.length))
          , m = F(()=>f.value.map((k,O)=>Ws(k, r.value[O], s.value)))
          , y = F(()=>f.value.map((k,O)=>k.findIndex(N=>N[s.value.value] === r.value[O])))
          , w = (k,O)=>{
            if (r.value[k] !== O) {
                const N = r.value.slice(0);
                N[k] = O,
                r.value = N
            }
        }
          , p = ()=>({
            selectedValues: r.value.slice(0),
            selectedOptions: m.value,
            selectedIndexes: y.value
        })
          , C = (k,O)=>{
            w(O, k),
            u.value === "cascade" && r.value.forEach((N,Z)=>{
                const ce = f.value[Z];
                ed(ce, N, s.value) || w(Z, ce.length ? ce[0][s.value.value] : void 0)
            }
            ),
            Oe(()=>{
                t("change", _e({
                    columnIndex: O
                }, p()))
            }
            )
        }
          , g = (k,O)=>{
            const N = {
                columnIndex: O,
                currentOption: k
            };
            t("clickOption", _e(p(), N)),
            t("scrollInto", N)
        }
          , v = ()=>{
            l.forEach(O=>O.stopMomentum());
            const k = p();
            return Oe(()=>{
                t("confirm", k)
            }
            ),
            k
        }
          , b = ()=>t("cancel", p())
          , _ = ()=>f.value.map((k,O)=>h(YS, {
            value: r.value[O],
            fields: s.value,
            options: k,
            readonly: e.readonly,
            allowHtml: e.allowHtml,
            optionHeight: c.value,
            swipeDuration: e.swipeDuration,
            visibleOptionNum: e.visibleOptionNum,
            onChange: N=>C(N, O),
            onClickOption: N=>g(N, O),
            onScrollInto: N=>{
                t("scrollInto", {
                    currentOption: N,
                    columnIndex: O
                })
            }
        }, {
            option: n.option
        }))
          , S = k=>{
            if (d.value) {
                const O = {
                    height: `${c.value}px`
                }
                  , N = {
                    backgroundSize: `100% ${(k - c.value) / 2}px`
                };
                return [h("div", {
                    class: Rn("mask"),
                    style: N
                }, null), h("div", {
                    class: [GC, Rn("frame")],
                    style: O
                }, null)]
            }
        }
          , A = ()=>{
            const k = c.value * +e.visibleOptionNum
              , O = {
                height: `${k}px`
            };
            return h("div", {
                ref: a,
                class: Rn("columns"),
                style: O
            }, [_(), S(k)])
        }
          , E = ()=>{
            if (e.showToolbar && !o)
                return h(Pg, Re(Me(e, KS), {
                    onConfirm: v,
                    onCancel: b
                }), Me(n, Og))
        }
        ;
        se(f, k=>{
            k.forEach((O,N)=>{
                O.length && !ed(O, r.value[N], s.value) && w(N, kg(O)[s.value.value])
            }
            )
        }
        , {
            immediate: !0
        });
        let T;
        return se(()=>e.modelValue, k=>{
            !pn(k, r.value) && !pn(k, T) && (r.value = k.slice(0),
            T = k.slice(0))
        }
        , {
            deep: !0
        }),
        se(r, k=>{
            pn(k, e.modelValue) || (T = k.slice(0),
            t("update:modelValue", T))
        }
        , {
            immediate: !0
        }),
        tt("touchmove", je, {
            target: a
        }),
        De({
            confirm: v,
            getSelectedOptions: ()=>m.value
        }),
        ()=>{
            var k, O;
            return h("div", {
                class: Rn()
            }, [e.toolbarPosition === "top" ? E() : null, e.loading ? h(un, {
                class: Rn("loading")
            }, null) : null, (k = n["columns-top"]) == null ? void 0 : k.call(n), A(), (O = n["columns-bottom"]) == null ? void 0 : O.call(n), e.toolbarPosition === "bottom" ? E() : null])
        }
    }
});
const po = "000000"
  , wE = ["title", "cancel", "confirm", "toolbar", "columns-top", "columns-bottom"]
  , Hg = ["title", "loading", "readonly", "optionHeight", "swipeDuration", "visibleOptionNum", "cancelButtonText", "confirmButtonText"]
  , Qn = (e="",t=po,n=void 0)=>({
    text: e,
    value: t,
    children: n
});
function CE({areaList: e, columnsNum: t, columnsPlaceholder: n}) {
    const {city_list: a={}, county_list: r={}, province_list: o={}} = e
      , l = +t > 1
      , i = +t > 2
      , s = ()=>{
        if (l)
            return n.length > 1 ? [Qn(n[1], po, i ? [] : void 0)] : []
    }
      , c = new Map;
    Object.keys(o).forEach(d=>{
        c.set(d.slice(0, 2), Qn(o[d], d, s()))
    }
    );
    const u = new Map;
    if (l) {
        const d = ()=>{
            if (i)
                return n.length > 2 ? [Qn(n[2])] : []
        }
        ;
        Object.keys(a).forEach(m=>{
            const y = Qn(a[m], m, d());
            u.set(m.slice(0, 4), y);
            const w = c.get(m.slice(0, 2));
            w && w.children.push(y)
        }
        )
    }
    i && Object.keys(r).forEach(d=>{
        const m = u.get(d.slice(0, 4));
        m && m.children.push(Qn(r[d], d))
    }
    );
    const f = Array.from(c.values());
    if (n.length) {
        const d = i ? [Qn(n[2])] : void 0
          , m = l ? [Qn(n[1], po, d)] : void 0;
        f.unshift(Qn(n[0], po, m))
    }
    return f
}
const gi = oe(_E)
  , [SE,EE] = q("area")
  , TE = _e({}, Me(mi, Hg), {
    modelValue: String,
    columnsNum: ge(3),
    columnsPlaceholder: Ke(),
    areaList: {
        type: Object,
        default: ()=>({})
    }
});
var xE = K({
    name: SE,
    props: TE,
    emits: ["change", "confirm", "cancel", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const a = V([])
          , r = V()
          , o = F(()=>CE(e))
          , l = (...c)=>t("change", ...c)
          , i = (...c)=>t("cancel", ...c)
          , s = (...c)=>t("confirm", ...c);
        return se(a, c=>{
            const u = c.length ? c[c.length - 1] : "";
            u && u !== e.modelValue && t("update:modelValue", u)
        }
        , {
            deep: !0
        }),
        se(()=>e.modelValue, c=>{
            if (c) {
                const u = a.value.length ? a.value[a.value.length - 1] : "";
                c !== u && (a.value = [`${c.slice(0, 2)}0000`, `${c.slice(0, 4)}00`, c].slice(0, +e.columnsNum))
            } else
                a.value = []
        }
        , {
            immediate: !0
        }),
        De({
            confirm: ()=>{
                var c;
                return (c = r.value) == null ? void 0 : c.confirm()
            }
            ,
            getSelectedOptions: ()=>{
                var c;
                return ((c = r.value) == null ? void 0 : c.getSelectedOptions()) || []
            }
        }),
        ()=>h(gi, Re({
            ref: r,
            modelValue: a.value,
            "onUpdate:modelValue": c=>a.value = c,
            class: EE(),
            columns: o.value,
            onChange: l,
            onCancel: i,
            onConfirm: s
        }, Me(e, Hg)), Me(n, wE))
    }
});
const Ug = oe(xE)
  , [kE,qa] = q("cell")
  , vi = {
    tag: re("div"),
    icon: String,
    size: String,
    title: te,
    value: te,
    label: te,
    center: Boolean,
    isLink: Boolean,
    border: X,
    iconPrefix: String,
    valueClass: Ze,
    labelClass: Ze,
    titleClass: Ze,
    titleStyle: null,
    arrowDirection: String,
    required: {
        type: [Boolean, String],
        default: null
    },
    clickable: {
        type: Boolean,
        default: null
    }
}
  , IE = _e({}, vi, Sa);
var AE = K({
    name: kE,
    props: IE,
    setup(e, {slots: t}) {
        const n = za()
          , a = ()=>{
            if (t.label || $e(e.label))
                return h("div", {
                    class: [qa("label"), e.labelClass]
                }, [t.label ? t.label() : e.label])
        }
          , r = ()=>{
            var s;
            if (t.title || $e(e.title)) {
                const c = (s = t.title) == null ? void 0 : s.call(t);
                return Array.isArray(c) && c.length === 0 ? void 0 : h("div", {
                    class: [qa("title"), e.titleClass],
                    style: e.titleStyle
                }, [c || h("span", null, [e.title]), a()])
            }
        }
          , o = ()=>{
            const s = t.value || t.default;
            if (s || $e(e.value))
                return h("div", {
                    class: [qa("value"), e.valueClass]
                }, [s ? s() : h("span", null, [e.value])])
        }
          , l = ()=>{
            if (t.icon)
                return t.icon();
            if (e.icon)
                return h(Ie, {
                    name: e.icon,
                    class: qa("left-icon"),
                    classPrefix: e.iconPrefix
                }, null)
        }
          , i = ()=>{
            if (t["right-icon"])
                return t["right-icon"]();
            if (e.isLink) {
                const s = e.arrowDirection && e.arrowDirection !== "right" ? `arrow-${e.arrowDirection}` : "arrow";
                return h(Ie, {
                    name: s,
                    class: qa("right-icon")
                }, null)
            }
        }
        ;
        return ()=>{
            var s;
            const {tag: c, size: u, center: f, border: d, isLink: m, required: y} = e
              , w = (s = e.clickable) != null ? s : m
              , p = {
                center: f,
                required: !!y,
                clickable: w,
                borderless: !d
            };
            return u && (p[u] = !!u),
            h(c, {
                class: qa(p),
                role: w ? "button" : void 0,
                tabindex: w ? 0 : void 0,
                onClick: n
            }, {
                default: ()=>{
                    var C;
                    return [l(), r(), o(), i(), (C = t.extra) == null ? void 0 : C.call(t)]
                }
            })
        }
    }
});
const Jt = oe(AE)
  , [OE,PE] = q("form")
  , RE = {
    colon: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    required: [Boolean, String],
    showError: Boolean,
    labelWidth: te,
    labelAlign: String,
    inputAlign: String,
    scrollToError: Boolean,
    scrollToErrorPosition: String,
    validateFirst: Boolean,
    submitOnEnter: X,
    showErrorMessage: X,
    errorMessageAlign: String,
    validateTrigger: {
        type: [String, Array],
        default: "onBlur"
    }
};
var LE = K({
    name: OE,
    props: RE,
    emits: ["submit", "failed"],
    setup(e, {emit: t, slots: n}) {
        const {children: a, linkChildren: r} = xt(gg)
          , o = p=>p ? a.filter(C=>p.includes(C.name)) : a
          , l = p=>new Promise((C,g)=>{
            const v = [];
            o(p).reduce((_,S)=>_.then(()=>{
                if (!v.length)
                    return S.validate().then(A=>{
                        A && v.push(A)
                    }
                    )
            }
            ), Promise.resolve()).then(()=>{
                v.length ? g(v) : C()
            }
            )
        }
        )
          , i = p=>new Promise((C,g)=>{
            const v = o(p);
            Promise.all(v.map(b=>b.validate())).then(b=>{
                b = b.filter(Boolean),
                b.length ? g(b) : C()
            }
            )
        }
        )
          , s = p=>{
            const C = a.find(g=>g.name === p);
            return C ? new Promise((g,v)=>{
                C.validate().then(b=>{
                    b ? v(b) : g()
                }
                )
            }
            ) : Promise.reject()
        }
          , c = p=>typeof p == "string" ? s(p) : e.validateFirst ? l(p) : i(p)
          , u = p=>{
            typeof p == "string" && (p = [p]),
            o(p).forEach(g=>{
                g.resetValidation()
            }
            )
        }
          , f = ()=>a.reduce((p,C)=>(p[C.name] = C.getValidationStatus(),
        p), {})
          , d = (p,C)=>{
            a.some(g=>g.name === p ? (g.$el.scrollIntoView(C),
            !0) : !1)
        }
          , m = ()=>a.reduce((p,C)=>(C.name !== void 0 && (p[C.name] = C.formValue.value),
        p), {})
          , y = ()=>{
            const p = m();
            c().then(()=>t("submit", p)).catch(C=>{
                t("failed", {
                    values: p,
                    errors: C
                });
                const {scrollToError: g, scrollToErrorPosition: v} = e;
                g && C[0].name && d(C[0].name, v ? {
                    block: v
                } : void 0)
            }
            )
        }
          , w = p=>{
            je(p),
            y()
        }
        ;
        return r({
            props: e
        }),
        De({
            submit: y,
            validate: c,
            getValues: m,
            scrollToField: d,
            resetValidation: u,
            getValidationStatus: f
        }),
        ()=>{
            var p;
            return h("form", {
                class: PE(),
                onSubmit: w
            }, [(p = n.default) == null ? void 0 : p.call(n)])
        }
    }
});
const Vc = oe(LE);
function Wg(e) {
    return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e
}
function DE(e, t) {
    if (Wg(e)) {
        if (t.required)
            return !1;
        if (t.validateEmpty === !1)
            return !0
    }
    return !(t.pattern && !t.pattern.test(String(e)))
}
function $E(e, t) {
    return new Promise(n=>{
        const a = t.validator(e, t);
        if (Pc(a)) {
            a.then(n);
            return
        }
        n(a)
    }
    )
}
function rd(e, t) {
    const {message: n} = t;
    return Ao(n) ? n(e, t) : n || ""
}
function NE({target: e}) {
    e.composing = !0
}
function ld({target: e}) {
    e.composing && (e.composing = !1,
    e.dispatchEvent(new Event("input")))
}
function ME(e, t) {
    const n = Fa();
    e.style.height = "auto";
    let a = e.scrollHeight;
    if (Fn(t)) {
        const {maxHeight: r, minHeight: o} = t;
        r !== void 0 && (a = Math.min(a, r)),
        o !== void 0 && (a = Math.max(a, o))
    }
    a && (e.style.height = `${a}px`,
    Er(n))
}
function BE(e) {
    return e === "number" ? {
        type: "text",
        inputmode: "decimal"
    } : e === "digit" ? {
        type: "tel",
        inputmode: "numeric"
    } : {
        type: e
    }
}
function xn(e) {
    return [...e].length
}
function Yi(e, t) {
    return [...e].slice(0, t).join("")
}
const [FE,Ut] = q("field")
  , Hc = {
    id: String,
    name: String,
    leftIcon: String,
    rightIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    maxlength: te,
    formatter: Function,
    clearIcon: re("clear"),
    modelValue: ge(""),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: re("focus"),
    formatTrigger: re("onChange"),
    spellcheck: {
        type: Boolean,
        default: null
    },
    error: {
        type: Boolean,
        default: null
    },
    disabled: {
        type: Boolean,
        default: null
    },
    readonly: {
        type: Boolean,
        default: null
    }
}
  , VE = _e({}, vi, Hc, {
    rows: te,
    type: re("text"),
    rules: Array,
    autosize: [Boolean, Object],
    labelWidth: te,
    labelClass: Ze,
    labelAlign: String,
    showWordLimit: Boolean,
    errorMessageAlign: String,
    colon: {
        type: Boolean,
        default: null
    }
});
var HE = K({
    name: FE,
    props: VE,
    emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const a = Vo()
          , r = Ge({
            status: "unvalidated",
            focused: !1,
            validateMessage: ""
        })
          , o = V()
          , l = V()
          , i = V()
          , {parent: s} = _t(gg)
          , c = ()=>{
            var L;
            return String((L = e.modelValue) != null ? L : "")
        }
          , u = L=>{
            if ($e(e[L]))
                return e[L];
            if (s && $e(s.props[L]))
                return s.props[L]
        }
          , f = F(()=>{
            const L = u("readonly");
            if (e.clearable && !L) {
                const U = c() !== ""
                  , W = e.clearTrigger === "always" || e.clearTrigger === "focus" && r.focused;
                return U && W
            }
            return !1
        }
        )
          , d = F(()=>i.value && n.input ? i.value() : e.modelValue)
          , m = F(()=>{
            var L;
            const U = u("required");
            return U === "auto" ? (L = e.rules) == null ? void 0 : L.some(W=>W.required) : U
        }
        )
          , y = L=>L.reduce((U,W)=>U.then(()=>{
            if (r.status === "failed")
                return;
            let {value: ne} = d;
            if (W.formatter && (ne = W.formatter(ne, W)),
            !DE(ne, W)) {
                r.status = "failed",
                r.validateMessage = rd(ne, W);
                return
            }
            if (W.validator)
                return Wg(ne) && W.validateEmpty === !1 ? void 0 : $E(ne, W).then(ye=>{
                    ye && typeof ye == "string" ? (r.status = "failed",
                    r.validateMessage = ye) : ye === !1 && (r.status = "failed",
                    r.validateMessage = rd(ne, W))
                }
                )
        }
        ), Promise.resolve())
          , w = ()=>{
            r.status = "unvalidated",
            r.validateMessage = ""
        }
          , p = ()=>t("endValidate", {
            status: r.status,
            message: r.validateMessage
        })
          , C = (L=e.rules)=>new Promise(U=>{
            w(),
            L ? (t("startValidate"),
            y(L).then(()=>{
                r.status === "failed" ? (U({
                    name: e.name,
                    message: r.validateMessage
                }),
                p()) : (r.status = "passed",
                U(),
                p())
            }
            )) : U()
        }
        )
          , g = L=>{
            if (s && e.rules) {
                const {validateTrigger: U} = s.props
                  , W = Pl(U).includes(L)
                  , ne = e.rules.filter(ye=>ye.trigger ? Pl(ye.trigger).includes(L) : W);
                ne.length && C(ne)
            }
        }
          , v = L=>{
            var U;
            const {maxlength: W} = e;
            if ($e(W) && xn(L) > +W) {
                const ne = c();
                if (ne && xn(ne) === +W)
                    return ne;
                const ye = (U = o.value) == null ? void 0 : U.selectionEnd;
                if (r.focused && ye) {
                    const Se = [...L]
                      , R = Se.length - +W;
                    return Se.splice(ye - R, R),
                    Se.join("")
                }
                return Yi(L, +W)
            }
            return L
        }
          , b = (L,U="onChange")=>{
            const W = L;
            L = v(L);
            const ne = xn(W) - xn(L);
            if (e.type === "number" || e.type === "digit") {
                const Se = e.type === "number";
                L = Vs(L, Se, Se)
            }
            let ye = 0;
            if (e.formatter && U === e.formatTrigger) {
                const {formatter: Se, maxlength: R} = e;
                if (L = Se(L),
                $e(R) && xn(L) > +R && (L = Yi(L, +R)),
                o.value && r.focused) {
                    const {selectionEnd: x} = o.value
                      , M = Yi(W, x);
                    ye = xn(Se(M)) - xn(M)
                }
            }
            if (o.value && o.value.value !== L)
                if (r.focused) {
                    let {selectionStart: Se, selectionEnd: R} = o.value;
                    if (o.value.value = L,
                    $e(Se) && $e(R)) {
                        const x = xn(L);
                        ne ? (Se -= ne,
                        R -= ne) : ye && (Se += ye,
                        R += ye),
                        o.value.setSelectionRange(Math.min(Se, x), Math.min(R, x))
                    }
                } else
                    o.value.value = L;
            L !== e.modelValue && t("update:modelValue", L)
        }
          , _ = L=>{
            L.target.composing || b(L.target.value)
        }
          , S = ()=>{
            var L;
            return (L = o.value) == null ? void 0 : L.blur()
        }
          , A = ()=>{
            var L;
            return (L = o.value) == null ? void 0 : L.focus()
        }
          , E = ()=>{
            const L = o.value;
            e.type === "textarea" && e.autosize && L && ME(L, e.autosize)
        }
          , T = L=>{
            r.focused = !0,
            t("focus", L),
            Oe(E),
            u("readonly") && S()
        }
          , D = L=>{
            r.focused = !1,
            b(c(), "onBlur"),
            t("blur", L),
            !u("readonly") && (g("onBlur"),
            Oe(E),
            sg())
        }
          , k = L=>t("clickInput", L)
          , O = L=>t("clickLeftIcon", L)
          , N = L=>t("clickRightIcon", L)
          , Z = L=>{
            je(L),
            t("update:modelValue", ""),
            t("clear", L)
        }
          , ce = F(()=>{
            if (typeof e.error == "boolean")
                return e.error;
            if (s && s.props.showError && r.status === "failed")
                return !0
        }
        )
          , j = F(()=>{
            const L = u("labelWidth")
              , U = u("labelAlign");
            if (L && U !== "top")
                return {
                    width: Ae(L)
                }
        }
        )
          , ee = L=>{
            L.keyCode === 13 && (!(s && s.props.submitOnEnter) && e.type !== "textarea" && je(L),
            e.type === "search" && S()),
            t("keypress", L)
        }
          , ue = ()=>e.id || `${a}-input`
          , Te = ()=>r.status
          , Pe = ()=>{
            const L = Ut("control", [u("inputAlign"), {
                error: ce.value,
                custom: !!n.input,
                "min-height": e.type === "textarea" && !e.autosize
            }]);
            if (n.input)
                return h("div", {
                    class: L,
                    onClick: k
                }, [n.input()]);
            const U = {
                id: ue(),
                ref: o,
                name: e.name,
                rows: e.rows !== void 0 ? +e.rows : void 0,
                class: L,
                disabled: u("disabled"),
                readonly: u("readonly"),
                autofocus: e.autofocus,
                placeholder: e.placeholder,
                autocomplete: e.autocomplete,
                autocapitalize: e.autocapitalize,
                autocorrect: e.autocorrect,
                enterkeyhint: e.enterkeyhint,
                spellcheck: e.spellcheck,
                "aria-labelledby": e.label ? `${a}-label` : void 0,
                onBlur: D,
                onFocus: T,
                onInput: _,
                onClick: k,
                onChange: ld,
                onKeypress: ee,
                onCompositionend: ld,
                onCompositionstart: NE
            };
            return e.type === "textarea" ? h("textarea", U, null) : h("input", Re(BE(e.type), U), null)
        }
          , H = ()=>{
            const L = n["left-icon"];
            if (e.leftIcon || L)
                return h("div", {
                    class: Ut("left-icon"),
                    onClick: O
                }, [L ? L() : h(Ie, {
                    name: e.leftIcon,
                    classPrefix: e.iconPrefix
                }, null)])
        }
          , J = ()=>{
            const L = n["right-icon"];
            if (e.rightIcon || L)
                return h("div", {
                    class: Ut("right-icon"),
                    onClick: N
                }, [L ? L() : h(Ie, {
                    name: e.rightIcon,
                    classPrefix: e.iconPrefix
                }, null)])
        }
          , he = ()=>{
            if (e.showWordLimit && e.maxlength) {
                const L = xn(c());
                return h("div", {
                    class: Ut("word-limit")
                }, [h("span", {
                    class: Ut("word-num")
                }, [L]), ql("/"), e.maxlength])
            }
        }
          , be = ()=>{
            if (s && s.props.showErrorMessage === !1)
                return;
            const L = e.errorMessage || r.validateMessage;
            if (L) {
                const U = n["error-message"]
                  , W = u("errorMessageAlign");
                return h("div", {
                    class: Ut("error-message", W)
                }, [U ? U({
                    message: L
                }) : L])
            }
        }
          , ie = ()=>{
            const L = u("labelWidth")
              , U = u("labelAlign")
              , W = u("colon") ? ":" : "";
            if (n.label)
                return [n.label(), W];
            if (e.label)
                return h("label", {
                    id: `${a}-label`,
                    for: n.input ? void 0 : ue(),
                    onClick: ne=>{
                        je(ne),
                        A()
                    }
                    ,
                    style: U === "top" && L ? {
                        width: Ae(L)
                    } : void 0
                }, [e.label + W])
        }
          , me = ()=>[h("div", {
            class: Ut("body")
        }, [Pe(), f.value && h(Ie, {
            ref: l,
            name: e.clearIcon,
            class: Ut("clear")
        }, null), J(), n.button && h("div", {
            class: Ut("button")
        }, [n.button()])]), he(), be()];
        return De({
            blur: S,
            focus: A,
            validate: C,
            formValue: d,
            resetValidation: w,
            getValidationStatus: Te
        }),
        $n(ig, {
            customValue: i,
            resetValidation: w,
            validateWithTrigger: g
        }),
        se(()=>e.modelValue, ()=>{
            b(c()),
            w(),
            g("onChange"),
            Oe(E)
        }
        ),
        Qe(()=>{
            b(c(), e.formatTrigger),
            Oe(E)
        }
        ),
        tt("touchstart", Z, {
            target: F(()=>{
                var L;
                return (L = l.value) == null ? void 0 : L.$el
            }
            )
        }),
        ()=>{
            const L = u("disabled")
              , U = u("labelAlign")
              , W = H()
              , ne = ()=>{
                const ye = ie();
                return U === "top" ? [W, ye].filter(Boolean) : ye || []
            }
            ;
            return h(Jt, {
                size: e.size,
                class: Ut({
                    error: ce.value,
                    disabled: L,
                    [`label-${U}`]: U
                }),
                center: e.center,
                border: e.border,
                isLink: e.isLink,
                clickable: e.clickable,
                titleStyle: j.value,
                valueClass: Ut("value"),
                titleClass: [Ut("label", [U, {
                    required: m.value
                }]), e.labelClass],
                arrowDirection: e.arrowDirection
            }, {
                icon: W && U !== "top" ? ()=>W : null,
                title: ne,
                value: me,
                extra: n.extra
            })
        }
    }
});
const Nn = oe(HE);
let Xo = 0;
function UE(e) {
    e ? (Xo || document.body.classList.add("van-toast--unclickable"),
    Xo++) : Xo && (Xo--,
    Xo || document.body.classList.remove("van-toast--unclickable"))
}
const [WE,Ja] = q("toast")
  , jE = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay", "zIndex"]
  , zE = {
    icon: String,
    show: Boolean,
    type: re("text"),
    overlay: Boolean,
    message: te,
    iconSize: te,
    duration: at(2e3),
    position: re("middle"),
    teleport: [String, Object],
    wordBreak: String,
    className: Ze,
    iconPrefix: String,
    transition: re("van-fade"),
    loadingType: String,
    forbidClick: Boolean,
    overlayClass: Ze,
    overlayStyle: Object,
    closeOnClick: Boolean,
    closeOnClickOverlay: Boolean,
    zIndex: te
};
var jg = K({
    name: WE,
    props: zE,
    emits: ["update:show"],
    setup(e, {emit: t, slots: n}) {
        let a, r = !1;
        const o = ()=>{
            const f = e.show && e.forbidClick;
            r !== f && (r = f,
            UE(r))
        }
          , l = f=>t("update:show", f)
          , i = ()=>{
            e.closeOnClick && l(!1)
        }
          , s = ()=>clearTimeout(a)
          , c = ()=>{
            const {icon: f, type: d, iconSize: m, iconPrefix: y, loadingType: w} = e;
            if (f || d === "success" || d === "fail")
                return h(Ie, {
                    name: f || d,
                    size: m,
                    class: Ja("icon"),
                    classPrefix: y
                }, null);
            if (d === "loading")
                return h(un, {
                    class: Ja("loading"),
                    size: m,
                    type: w
                }, null)
        }
          , u = ()=>{
            const {type: f, message: d} = e;
            if (n.message)
                return h("div", {
                    class: Ja("text")
                }, [n.message()]);
            if ($e(d) && d !== "")
                return f === "html" ? h("div", {
                    key: 0,
                    class: Ja("text"),
                    innerHTML: String(d)
                }, null) : h("div", {
                    class: Ja("text")
                }, [d])
        }
        ;
        return se(()=>[e.show, e.forbidClick], o),
        se(()=>[e.show, e.type, e.message, e.duration], ()=>{
            s(),
            e.show && e.duration > 0 && (a = setTimeout(()=>{
                l(!1)
            }
            , e.duration))
        }
        ),
        Qe(o),
        Wa(o),
        ()=>h(fn, Re({
            class: [Ja([e.position, e.wordBreak === "normal" ? "break-normal" : e.wordBreak, {
                [e.type]: !e.icon
            }]), e.className],
            lockScroll: !1,
            onClick: i,
            onClosed: s,
            "onUpdate:show": l
        }, Me(e, jE)), {
            default: ()=>[c(), u()]
        })
    }
});
function zg() {
    const e = Ge({
        show: !1
    })
      , t = r=>{
        e.show = r
    }
      , n = r=>{
        _e(e, r, {
            transitionAppear: !0
        }),
        t(!0)
    }
      , a = ()=>t(!1);
    return De({
        open: n,
        close: a,
        toggle: t
    }),
    {
        open: n,
        close: a,
        state: e,
        toggle: t
    }
}
function Yg(e) {
    const t = im(e)
      , n = document.createElement("div");
    return document.body.appendChild(n),
    {
        instance: t.mount(n),
        unmount() {
            t.unmount(),
            document.body.removeChild(n)
        }
    }
}
const YE = {
    icon: "",
    type: "text",
    message: "",
    className: "",
    overlay: !1,
    onClose: void 0,
    onOpened: void 0,
    duration: 2e3,
    teleport: "body",
    iconSize: void 0,
    iconPrefix: void 0,
    position: "middle",
    transition: "van-fade",
    forbidClick: !1,
    loadingType: void 0,
    overlayClass: "",
    overlayStyle: void 0,
    closeOnClick: !1,
    closeOnClickOverlay: !1
};
let Xr = []
  , GE = !1
  , id = _e({}, YE);
const KE = new Map;
function XE(e) {
    return Fn(e) ? e : {
        message: e
    }
}
function qE() {
    const {instance: e, unmount: t} = Yg({
        setup() {
            const n = V("")
              , {open: a, state: r, close: o, toggle: l} = zg()
              , i = ()=>{}
              , s = ()=>h(jg, Re(r, {
                onClosed: i,
                "onUpdate:show": l
            }), null);
            return se(n, c=>{
                r.message = c
            }
            ),
            gt().render = s,
            {
                open: a,
                close: o,
                message: n
            }
        }
    });
    return e
}
function JE() {
    if (!Xr.length || GE) {
        const e = qE();
        Xr.push(e)
    }
    return Xr[Xr.length - 1]
}
function js(e={}) {
    if (!Xt)
        return {};
    const t = JE()
      , n = XE(e);
    return t.open(_e({}, id, KE.get(n.type || id.type), n)),
    t
}
const Gg = oe(jg)
  , [ZE,Gi] = q("switch")
  , QE = {
    size: te,
    loading: Boolean,
    disabled: Boolean,
    modelValue: Ze,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
        type: Ze,
        default: !0
    },
    inactiveValue: {
        type: Ze,
        default: !1
    }
};
var eT = K({
    name: ZE,
    props: QE,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const a = ()=>e.modelValue === e.activeValue
          , r = ()=>{
            if (!e.disabled && !e.loading) {
                const l = a() ? e.inactiveValue : e.activeValue;
                t("update:modelValue", l),
                t("change", l)
            }
        }
          , o = ()=>{
            if (e.loading) {
                const l = a() ? e.activeColor : e.inactiveColor;
                return h(un, {
                    class: Gi("loading"),
                    color: l
                }, null)
            }
            if (n.node)
                return n.node()
        }
        ;
        return wa(()=>e.modelValue),
        ()=>{
            var l;
            const {size: i, loading: s, disabled: c, activeColor: u, inactiveColor: f} = e
              , d = a()
              , m = {
                fontSize: Ae(i),
                backgroundColor: d ? u : f
            };
            return h("div", {
                role: "switch",
                class: Gi({
                    on: d,
                    loading: s,
                    disabled: c
                }),
                style: m,
                tabindex: c ? void 0 : 0,
                "aria-checked": d,
                onClick: r
            }, [h("div", {
                class: Gi("node")
            }, [o()]), (l = n.background) == null ? void 0 : l.call(n)])
        }
    }
});
const Uc = oe(eT)
  , [tT,sd] = q("address-edit-detail")
  , cd = q("address-edit")[2];
var nT = K({
    name: tT,
    props: {
        show: Boolean,
        rows: te,
        value: String,
        rules: Array,
        focused: Boolean,
        maxlength: te,
        searchResult: Array,
        showSearchResult: Boolean
    },
    emits: ["blur", "focus", "input", "selectSearch"],
    setup(e, {emit: t}) {
        const n = V()
          , a = ()=>e.focused && e.searchResult && e.showSearchResult
          , r = c=>{
            t("selectSearch", c),
            t("input", `${c.address || ""} ${c.name || ""}`.trim())
        }
          , o = ()=>{
            if (!a())
                return;
            const {searchResult: c} = e;
            return c.map(u=>h(Jt, {
                clickable: !0,
                key: (u.name || "") + (u.address || ""),
                icon: "location-o",
                title: u.name,
                label: u.address,
                class: sd("search-item"),
                border: !1,
                onClick: ()=>r(u)
            }, null))
        }
          , l = c=>t("blur", c)
          , i = c=>t("focus", c)
          , s = c=>t("input", c);
        return ()=>{
            if (e.show)
                return h(Je, null, [h(Nn, {
                    autosize: !0,
                    clearable: !0,
                    ref: n,
                    class: sd(),
                    rows: e.rows,
                    type: "textarea",
                    rules: e.rules,
                    label: cd("addressDetail"),
                    border: !a(),
                    maxlength: e.maxlength,
                    modelValue: e.value,
                    placeholder: cd("addressDetail"),
                    onBlur: l,
                    onFocus: i,
                    "onUpdate:modelValue": s
                }, null), o()])
        }
    }
});
const [aT,Za,It] = q("address-edit")
  , Kg = {
    name: "",
    tel: "",
    city: "",
    county: "",
    country: "",
    province: "",
    areaCode: "",
    isDefault: !1,
    addressDetail: ""
}
  , oT = {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showArea: X,
    showDetail: X,
    showDelete: Boolean,
    disableArea: Boolean,
    searchResult: Array,
    telMaxlength: te,
    showSetDefault: Boolean,
    saveButtonText: String,
    areaPlaceholder: String,
    deleteButtonText: String,
    showSearchResult: Boolean,
    detailRows: ge(1),
    detailMaxlength: ge(200),
    areaColumnsPlaceholder: Ke(),
    addressInfo: {
        type: Object,
        default: ()=>_e({}, Kg)
    },
    telValidator: {
        type: Function,
        default: og
    }
};
var rT = K({
    name: aT,
    props: oT,
    emits: ["save", "focus", "change", "delete", "clickArea", "changeArea", "changeDetail", "selectSearch", "changeDefault"],
    setup(e, {emit: t, slots: n}) {
        const a = V()
          , r = Ge({})
          , o = V(!1)
          , l = V(!1)
          , i = F(()=>Fn(e.areaList) && Object.keys(e.areaList).length)
          , s = F(()=>{
            const {province: S, city: A, county: E, areaCode: T} = r;
            if (T) {
                const D = [S, A, E];
                return S && S === A && D.splice(1, 1),
                D.filter(Boolean).join("/")
            }
            return ""
        }
        )
          , c = F(()=>{
            var S;
            return ((S = e.searchResult) == null ? void 0 : S.length) && l.value
        }
        )
          , u = S=>{
            l.value = S === "addressDetail",
            t("focus", S)
        }
          , f = (S,A)=>{
            t("change", {
                key: S,
                value: A
            })
        }
          , d = F(()=>{
            const {validator: S, telValidator: A} = e
              , E = (T,D)=>({
                validator: k=>{
                    if (S) {
                        const O = S(T, k);
                        if (O)
                            return O
                    }
                    return k ? !0 : D
                }
            });
            return {
                name: [E("name", It("nameEmpty"))],
                tel: [E("tel", It("telInvalid")), {
                    validator: A,
                    message: It("telInvalid")
                }],
                areaCode: [E("areaCode", It("areaEmpty"))],
                addressDetail: [E("addressDetail", It("addressEmpty"))]
            }
        }
        )
          , m = ()=>t("save", r)
          , y = S=>{
            r.addressDetail = S,
            t("changeDetail", S)
        }
          , w = S=>{
            r.province = S[0].text,
            r.city = S[1].text,
            r.county = S[2].text
        }
          , p = ({selectedValues: S, selectedOptions: A})=>{
            S.some(E=>E === po) ? js(It("areaEmpty")) : (o.value = !1,
            w(A),
            t("changeArea", A))
        }
          , C = ()=>t("delete", r)
          , g = S=>{
            r.areaCode = S || ""
        }
          , v = ()=>{
            setTimeout(()=>{
                l.value = !1
            }
            )
        }
          , b = S=>{
            r.addressDetail = S
        }
          , _ = ()=>{
            if (e.showSetDefault) {
                const S = {
                    "right-icon": ()=>h(Uc, {
                        modelValue: r.isDefault,
                        "onUpdate:modelValue": A=>r.isDefault = A,
                        onChange: A=>t("changeDefault", A)
                    }, null)
                };
                return st(h(Jt, {
                    center: !0,
                    border: !1,
                    title: It("defaultAddress"),
                    class: Za("default")
                }, S), [[dt, !c.value]])
            }
        }
        ;
        return De({
            setAreaCode: g,
            setAddressDetail: b
        }),
        se(()=>e.addressInfo, S=>{
            _e(r, Kg, S),
            Oe(()=>{
                var A;
                const E = (A = a.value) == null ? void 0 : A.getSelectedOptions();
                E && E.every(T=>T && T.value !== po) && w(E)
            }
            )
        }
        , {
            deep: !0,
            immediate: !0
        }),
        ()=>{
            const {disableArea: S} = e;
            return h(Vc, {
                class: Za(),
                onSubmit: m
            }, {
                default: ()=>{
                    var A;
                    return [h("div", {
                        class: Za("fields")
                    }, [h(Nn, {
                        modelValue: r.name,
                        "onUpdate:modelValue": [E=>r.name = E, E=>f("name", E)],
                        clearable: !0,
                        label: It("name"),
                        rules: d.value.name,
                        placeholder: It("name"),
                        onFocus: ()=>u("name")
                    }, null), h(Nn, {
                        modelValue: r.tel,
                        "onUpdate:modelValue": [E=>r.tel = E, E=>f("tel", E)],
                        clearable: !0,
                        type: "tel",
                        label: It("tel"),
                        rules: d.value.tel,
                        maxlength: e.telMaxlength,
                        placeholder: It("tel"),
                        onFocus: ()=>u("tel")
                    }, null), st(h(Nn, {
                        readonly: !0,
                        label: It("area"),
                        "is-link": !S,
                        modelValue: s.value,
                        rules: e.showArea ? d.value.areaCode : void 0,
                        placeholder: e.areaPlaceholder || It("area"),
                        onFocus: ()=>u("areaCode"),
                        onClick: ()=>{
                            t("clickArea"),
                            o.value = !S
                        }
                    }, null), [[dt, e.showArea]]), h(nT, {
                        show: e.showDetail,
                        rows: e.detailRows,
                        rules: d.value.addressDetail,
                        value: r.addressDetail,
                        focused: l.value,
                        maxlength: e.detailMaxlength,
                        searchResult: e.searchResult,
                        showSearchResult: e.showSearchResult,
                        onBlur: v,
                        onFocus: ()=>u("addressDetail"),
                        onInput: y,
                        onSelectSearch: E=>t("selectSearch", E)
                    }, null), (A = n.default) == null ? void 0 : A.call(n)]), _(), st(h("div", {
                        class: Za("buttons")
                    }, [h(pt, {
                        block: !0,
                        round: !0,
                        type: "primary",
                        text: e.saveButtonText || It("save"),
                        class: Za("button"),
                        loading: e.isSaving,
                        nativeType: "submit"
                    }, null), e.showDelete && h(pt, {
                        block: !0,
                        round: !0,
                        class: Za("button"),
                        loading: e.isDeleting,
                        text: e.deleteButtonText || It("delete"),
                        onClick: C
                    }, null)]), [[dt, !c.value]]), h(fn, {
                        show: o.value,
                        "onUpdate:show": E=>o.value = E,
                        round: !0,
                        teleport: "body",
                        position: "bottom",
                        lazyRender: !1
                    }, {
                        default: ()=>[h(Ug, {
                            modelValue: r.areaCode,
                            "onUpdate:modelValue": E=>r.areaCode = E,
                            ref: a,
                            loading: !i.value,
                            areaList: e.areaList,
                            columnsPlaceholder: e.areaColumnsPlaceholder,
                            onConfirm: p,
                            onCancel: ()=>{
                                o.value = !1
                            }
                        }, null)]
                    })]
                }
            })
        }
    }
});
const lT = oe(rT)
  , [Xg,iT] = q("radio-group")
  , sT = {
    shape: String,
    disabled: Boolean,
    iconSize: te,
    direction: String,
    modelValue: Ze,
    checkedColor: String
}
  , qg = Symbol(Xg);
var cT = K({
    name: Xg,
    props: sT,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {linkChildren: a} = xt(qg)
          , r = o=>t("update:modelValue", o);
        return se(()=>e.modelValue, o=>t("change", o)),
        a({
            props: e,
            updateValue: r
        }),
        wa(()=>e.modelValue),
        ()=>{
            var o;
            return h("div", {
                class: iT([e.direction]),
                role: "radiogroup"
            }, [(o = n.default) == null ? void 0 : o.call(n)])
        }
    }
});
const Wc = oe(cT)
  , [Jg,uT] = q("checkbox-group")
  , fT = {
    max: te,
    shape: re("round"),
    disabled: Boolean,
    iconSize: te,
    direction: String,
    modelValue: Ke(),
    checkedColor: String
}
  , Zg = Symbol(Jg);
var dT = K({
    name: Jg,
    props: fT,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {children: a, linkChildren: r} = xt(Zg)
          , o = i=>t("update:modelValue", i)
          , l = (i={})=>{
            typeof i == "boolean" && (i = {
                checked: i
            });
            const {checked: s, skipDisabled: c} = i
              , f = a.filter(d=>d.props.bindGroup ? d.props.disabled && c ? d.checked.value : s ?? !d.checked.value : !1).map(d=>d.name);
            o(f)
        }
        ;
        return se(()=>e.modelValue, i=>t("change", i)),
        De({
            toggleAll: l
        }),
        wa(()=>e.modelValue),
        r({
            props: e,
            updateValue: o
        }),
        ()=>{
            var i;
            return h("div", {
                class: uT([e.direction])
            }, [(i = n.default) == null ? void 0 : i.call(n)])
        }
    }
});
const Qg = oe(dT)
  , [hT,ud] = q("tag")
  , mT = {
    size: String,
    mark: Boolean,
    show: X,
    type: re("default"),
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean
};
var gT = K({
    name: hT,
    props: mT,
    emits: ["close"],
    setup(e, {slots: t, emit: n}) {
        const a = l=>{
            l.stopPropagation(),
            n("close", l)
        }
          , r = ()=>e.plain ? {
            color: e.textColor || e.color,
            borderColor: e.color
        } : {
            color: e.textColor,
            background: e.color
        }
          , o = ()=>{
            var l;
            const {type: i, mark: s, plain: c, round: u, size: f, closeable: d} = e
              , m = {
                mark: s,
                plain: c,
                round: u
            };
            f && (m[f] = f);
            const y = d && h(Ie, {
                name: "cross",
                class: [ud("close"), Tt],
                onClick: a
            }, null);
            return h("span", {
                style: r(),
                class: ud([m, i])
            }, [(l = t.default) == null ? void 0 : l.call(t), y])
        }
        ;
        return ()=>h($o, {
            name: e.closeable ? "van-fade" : void 0
        }, {
            default: ()=>[e.show ? o() : null]
        })
    }
});
const bi = oe(gT)
  , jc = {
    name: Ze,
    disabled: Boolean,
    iconSize: te,
    modelValue: Ze,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean
};
var ev = K({
    props: _e({}, jc, {
        bem: ft(Function),
        role: String,
        shape: String,
        parent: Object,
        checked: Boolean,
        bindGroup: X,
        indeterminate: {
            type: Boolean,
            default: null
        }
    }),
    emits: ["click", "toggle"],
    setup(e, {emit: t, slots: n}) {
        const a = V()
          , r = d=>{
            if (e.parent && e.bindGroup)
                return e.parent.props[d]
        }
          , o = F(()=>{
            if (e.parent && e.bindGroup) {
                const d = r("disabled") || e.disabled;
                if (e.role === "checkbox") {
                    const m = r("modelValue").length
                      , y = r("max")
                      , w = y && m >= +y;
                    return d || w && !e.checked
                }
                return d
            }
            return e.disabled
        }
        )
          , l = F(()=>r("direction"))
          , i = F(()=>{
            const d = e.checkedColor || r("checkedColor");
            if (d && e.checked && !o.value)
                return {
                    borderColor: d,
                    backgroundColor: d
                }
        }
        )
          , s = F(()=>e.shape || r("shape") || "round")
          , c = d=>{
            const {target: m} = d
              , y = a.value
              , w = y === m || (y == null ? void 0 : y.contains(m));
            !o.value && (w || !e.labelDisabled) && t("toggle"),
            t("click", d)
        }
          , u = ()=>{
            var d, m;
            const {bem: y, checked: w, indeterminate: p} = e
              , C = e.iconSize || r("iconSize");
            return h("div", {
                ref: a,
                class: y("icon", [s.value, {
                    disabled: o.value,
                    checked: w,
                    indeterminate: p
                }]),
                style: s.value !== "dot" ? {
                    fontSize: Ae(C)
                } : {
                    width: Ae(C),
                    height: Ae(C),
                    borderColor: (d = i.value) == null ? void 0 : d.borderColor
                }
            }, [n.icon ? n.icon({
                checked: w,
                disabled: o.value
            }) : s.value !== "dot" ? h(Ie, {
                name: p ? "minus" : "success",
                style: i.value
            }, null) : h("div", {
                class: y("icon--dot__icon"),
                style: {
                    backgroundColor: (m = i.value) == null ? void 0 : m.backgroundColor
                }
            }, null)])
        }
          , f = ()=>{
            const {checked: d} = e;
            if (n.default)
                return h("span", {
                    class: e.bem("label", [e.labelPosition, {
                        disabled: o.value
                    }])
                }, [n.default({
                    checked: d,
                    disabled: o.value
                })])
        }
        ;
        return ()=>{
            const d = e.labelPosition === "left" ? [f(), u()] : [u(), f()];
            return h("div", {
                role: e.role,
                class: e.bem([{
                    disabled: o.value,
                    "label-disabled": e.labelDisabled
                }, l.value]),
                tabindex: o.value ? void 0 : 0,
                "aria-checked": e.checked,
                onClick: c
            }, [d])
        }
    }
});
const vT = _e({}, jc, {
    shape: String
})
  , [bT,yT] = q("radio");
var pT = K({
    name: bT,
    props: vT,
    emits: ["update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {parent: a} = _t(qg)
          , r = ()=>(a ? a.props.modelValue : e.modelValue) === e.name
          , o = ()=>{
            a ? a.updateValue(e.name) : t("update:modelValue", e.name)
        }
        ;
        return ()=>h(ev, Re({
            bem: yT,
            role: "radio",
            parent: a,
            checked: r(),
            onToggle: o
        }, e), Me(n, ["default", "icon"]))
    }
});
const zc = oe(pT)
  , [_T,wT] = q("checkbox")
  , CT = _e({}, jc, {
    shape: String,
    bindGroup: X,
    indeterminate: {
        type: Boolean,
        default: null
    }
});
var ST = K({
    name: _T,
    props: CT,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {parent: a} = _t(Zg)
          , r = i=>{
            const {name: s} = e
              , {max: c, modelValue: u} = a.props
              , f = u.slice();
            if (i)
                !(c && f.length >= +c) && !f.includes(s) && (f.push(s),
                e.bindGroup && a.updateValue(f));
            else {
                const d = f.indexOf(s);
                d !== -1 && (f.splice(d, 1),
                e.bindGroup && a.updateValue(f))
            }
        }
          , o = F(()=>a && e.bindGroup ? a.props.modelValue.indexOf(e.name) !== -1 : !!e.modelValue)
          , l = (i=!o.value)=>{
            a && e.bindGroup ? r(i) : t("update:modelValue", i),
            e.indeterminate !== null && t("change", i)
        }
        ;
        return se(()=>e.modelValue, i=>{
            e.indeterminate === null && t("change", i)
        }
        ),
        De({
            toggle: l,
            props: e,
            checked: o
        }),
        wa(()=>e.modelValue),
        ()=>h(ev, Re({
            bem: wT,
            role: "checkbox",
            parent: a,
            checked: o.value,
            onToggle: l
        }, e), Me(n, ["default", "icon"]))
    }
});
const Yc = oe(ST)
  , [ET,Qa] = q("address-item");
var TT = K({
    name: ET,
    props: {
        address: ft(Object),
        disabled: Boolean,
        switchable: Boolean,
        singleChoice: Boolean,
        defaultTagText: String,
        rightIcon: re("edit")
    },
    emits: ["edit", "click", "select"],
    setup(e, {slots: t, emit: n}) {
        const a = i=>{
            e.switchable && n("select"),
            n("click", i)
        }
          , r = ()=>h(Ie, {
            name: e.rightIcon,
            class: Qa("edit"),
            onClick: i=>{
                i.stopPropagation(),
                n("edit"),
                n("click", i)
            }
        }, null)
          , o = ()=>{
            if (t.tag)
                return t.tag(e.address);
            if (e.address.isDefault && e.defaultTagText)
                return h(bi, {
                    type: "primary",
                    round: !0,
                    class: Qa("tag")
                }, {
                    default: ()=>[e.defaultTagText]
                })
        }
          , l = ()=>{
            const {address: i, disabled: s, switchable: c, singleChoice: u} = e
              , f = [h("div", {
                class: Qa("name")
            }, [`${i.name} ${i.tel}`, o()]), h("div", {
                class: Qa("address")
            }, [i.address])];
            return c && !s ? u ? h(zc, {
                name: i.id,
                iconSize: 18
            }, {
                default: ()=>[f]
            }) : h(Yc, {
                name: i.id,
                iconSize: 18
            }, {
                default: ()=>[f]
            }) : f
        }
        ;
        return ()=>{
            var i;
            const {disabled: s} = e;
            return h("div", {
                class: Qa({
                    disabled: s
                }),
                onClick: a
            }, [h(Jt, {
                border: !1,
                titleClass: Qa("title")
            }, {
                title: l,
                "right-icon": r
            }), (i = t.bottom) == null ? void 0 : i.call(t, _e({}, e.address, {
                disabled: s
            }))])
        }
    }
});
const [xT,qr,kT] = q("address-list")
  , IT = {
    list: Ke(),
    modelValue: [...te, Array],
    switchable: X,
    disabledText: String,
    disabledList: Ke(),
    showAddButton: X,
    addButtonText: String,
    defaultTagText: String,
    rightIcon: re("edit")
};
var AT = K({
    name: xT,
    props: IT,
    emits: ["add", "edit", "select", "clickItem", "editDisabled", "selectDisabled", "update:modelValue"],
    setup(e, {slots: t, emit: n}) {
        const a = F(()=>!Array.isArray(e.modelValue))
          , r = (i,s,c)=>{
            const u = ()=>n(c ? "editDisabled" : "edit", i, s)
              , f = m=>n("clickItem", i, s, {
                event: m
            })
              , d = ()=>{
                if (n(c ? "selectDisabled" : "select", i, s),
                !c)
                    if (a.value)
                        n("update:modelValue", i.id);
                    else {
                        const m = e.modelValue;
                        m.includes(i.id) ? n("update:modelValue", m.filter(y=>y !== i.id)) : n("update:modelValue", [...m, i.id])
                    }
            }
            ;
            return h(TT, {
                key: i.id,
                address: i,
                disabled: c,
                switchable: e.switchable,
                singleChoice: a.value,
                defaultTagText: e.defaultTagText,
                rightIcon: e.rightIcon,
                onEdit: u,
                onClick: f,
                onSelect: d
            }, {
                bottom: t["item-bottom"],
                tag: t.tag
            })
        }
          , o = (i,s)=>{
            if (i)
                return i.map((c,u)=>r(c, u, s))
        }
          , l = ()=>e.showAddButton ? h("div", {
            class: [qr("bottom"), "van-safe-area-bottom"]
        }, [h(pt, {
            round: !0,
            block: !0,
            type: "primary",
            text: e.addButtonText || kT("add"),
            class: qr("add"),
            onClick: ()=>n("add")
        }, null)]) : void 0;
        return ()=>{
            var i, s;
            const c = o(e.list)
              , u = o(e.disabledList, !0)
              , f = e.disabledText && h("div", {
                class: qr("disabled-text")
            }, [e.disabledText]);
            return h("div", {
                class: qr()
            }, [(i = t.top) == null ? void 0 : i.call(t), !a.value && Array.isArray(e.modelValue) ? h(Qg, {
                modelValue: e.modelValue
            }, {
                default: ()=>[c]
            }) : h(Wc, {
                modelValue: e.modelValue
            }, {
                default: ()=>[c]
            }), f, u, (s = t.default) == null ? void 0 : s.call(t), l()])
        }
    }
});
const OT = oe(AT);
function PT(e, t) {
    let n = null
      , a = 0;
    return function(...r) {
        if (n)
            return;
        const o = Date.now() - a
          , l = ()=>{
            a = Date.now(),
            n = !1,
            e.apply(this, r)
        }
        ;
        o >= t ? l() : n = setTimeout(l, t)
    }
}
const [RT,Ki] = q("back-top")
  , LT = {
    right: te,
    bottom: te,
    zIndex: te,
    target: [String, Object],
    offset: ge(200),
    immediate: Boolean,
    teleport: {
        type: [String, Object],
        default: "body"
    }
};
var DT = K({
    name: RT,
    inheritAttrs: !1,
    props: LT,
    emits: ["click"],
    setup(e, {emit: t, slots: n, attrs: a}) {
        let r = !1;
        const o = V(!1)
          , l = V()
          , i = V()
          , s = F(()=>_e(Yn(e.zIndex), {
            right: Ae(e.right),
            bottom: Ae(e.bottom)
        }))
          , c = m=>{
            var y;
            t("click", m),
            (y = i.value) == null || y.scrollTo({
                top: 0,
                behavior: e.immediate ? "auto" : "smooth"
            })
        }
          , u = ()=>{
            o.value = i.value ? Vn(i.value) >= +e.offset : !1
        }
          , f = ()=>{
            const {target: m} = e;
            if (typeof m == "string") {
                const y = document.querySelector(m);
                if (y)
                    return y
            } else
                return m
        }
          , d = ()=>{
            Xt && Oe(()=>{
                i.value = e.target ? f() : Rc(l.value),
                u()
            }
            )
        }
        ;
        return tt("scroll", PT(u, 100), {
            target: i
        }),
        Qe(d),
        wn(()=>{
            r && (o.value = !0,
            r = !1)
        }
        ),
        Cn(()=>{
            o.value && e.teleport && (o.value = !1,
            r = !0)
        }
        ),
        se(()=>e.target, d),
        ()=>{
            const m = h("div", Re({
                ref: e.teleport ? void 0 : l,
                class: Ki({
                    active: o.value
                }),
                style: s.value,
                onClick: c
            }, a), [n.default ? n.default() : h(Ie, {
                name: "back-top",
                class: Ki("icon")
            }, null)]);
            return e.teleport ? [h("div", {
                ref: l,
                class: Ki("placeholder")
            }, null), h(ja, {
                to: e.teleport
            }, {
                default: ()=>[m]
            })] : m
        }
    }
});
const $T = oe(DT);
var NT = (e,t,n)=>new Promise((a,r)=>{
    var o = s=>{
        try {
            i(n.next(s))
        } catch (c) {
            r(c)
        }
    }
      , l = s=>{
        try {
            i(n.throw(s))
        } catch (c) {
            r(c)
        }
    }
      , i = s=>s.done ? a(s.value) : Promise.resolve(s.value).then(o, l);
    i((n = n.apply(e, t)).next())
}
);
const MT = {
    top: ge(10),
    rows: ge(4),
    duration: ge(4e3),
    autoPlay: X,
    delay: at(300),
    modelValue: Ke()
}
  , [BT,fd] = q("barrage");
var FT = K({
    name: BT,
    props: MT,
    emits: ["update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const a = V()
          , r = fd("item")
          , o = V(0)
          , l = []
          , i = (w,p=e.delay)=>{
            const C = document.createElement("span");
            return C.className = r,
            C.innerText = String(w),
            C.style.animationDuration = `${e.duration}ms`,
            C.style.animationDelay = `${p}ms`,
            C.style.animationName = "van-barrage",
            C.style.animationTimingFunction = "linear",
            C
        }
          , s = V(!0)
          , c = V(e.autoPlay)
          , u = ({id: w, text: p},C)=>{
            var g;
            const v = i(p, s.value ? C * e.delay : void 0);
            !e.autoPlay && c.value === !1 && (v.style.animationPlayState = "paused"),
            (g = a.value) == null || g.append(v),
            o.value++;
            const b = (o.value - 1) % +e.rows * v.offsetHeight + +e.top;
            v.style.top = `${b}px`,
            v.dataset.id = String(w),
            l.push(v),
            v.addEventListener("animationend", ()=>{
                t("update:modelValue", [...e.modelValue].filter(_=>String(_.id) !== v.dataset.id))
            }
            )
        }
          , f = (w,p)=>{
            const C = new Map(p.map(g=>[g.id, g]));
            w.forEach((g,v)=>{
                C.has(g.id) ? C.delete(g.id) : u(g, v)
            }
            ),
            C.forEach(g=>{
                const v = l.findIndex(b=>b.dataset.id === String(g.id));
                v > -1 && (l[v].remove(),
                l.splice(v, 1))
            }
            ),
            s.value = !1
        }
        ;
        se(()=>e.modelValue.slice(), (w,p)=>f(w ?? [], p ?? []), {
            deep: !0
        });
        const d = V({});
        return Qe(()=>NT(this, null, function*() {
            var w;
            d.value["--move-distance"] = `-${(w = a.value) == null ? void 0 : w.offsetWidth}px`,
            yield Oe(),
            f(e.modelValue, [])
        })),
        De({
            play: ()=>{
                c.value = !0,
                l.forEach(w=>{
                    w.style.animationPlayState = "running"
                }
                )
            }
            ,
            pause: ()=>{
                c.value = !1,
                l.forEach(w=>{
                    w.style.animationPlayState = "paused"
                }
                )
            }
        }),
        ()=>{
            var w;
            return h("div", {
                class: fd(),
                ref: a,
                style: d.value
            }, [(w = n.default) == null ? void 0 : w.call(n)])
        }
    }
});
const VT = oe(FT)
  , [HT,et,Mn] = q("calendar")
  , UT = e=>Mn("monthTitle", e.getFullYear(), e.getMonth() + 1);
function $a(e, t) {
    const n = e.getFullYear()
      , a = t.getFullYear();
    if (n === a) {
        const r = e.getMonth()
          , o = t.getMonth();
        return r === o ? 0 : r > o ? 1 : -1
    }
    return n > a ? 1 : -1
}
function Mt(e, t) {
    const n = $a(e, t);
    if (n === 0) {
        const a = e.getDate()
          , r = t.getDate();
        return a === r ? 0 : a > r ? 1 : -1
    }
    return n
}
const Oo = e=>new Date(e)
  , dd = e=>Array.isArray(e) ? e.map(Oo) : Oo(e);
function Gc(e, t) {
    const n = Oo(e);
    return n.setDate(n.getDate() + t),
    n
}
function Kc(e, t) {
    const n = Oo(e);
    return n.setMonth(n.getMonth() + t),
    n.getDate() !== e.getDate() && n.setDate(0),
    n
}
function tv(e, t) {
    const n = Oo(e);
    return n.setFullYear(n.getFullYear() + t),
    n.getDate() !== e.getDate() && n.setDate(0),
    n
}
const zs = e=>Gc(e, -1)
  , Ys = e=>Gc(e, 1)
  , hd = e=>Kc(e, -1)
  , md = e=>Kc(e, 1)
  , gd = e=>tv(e, -1)
  , vd = e=>tv(e, 1)
  , Jr = ()=>{
    const e = new Date;
    return e.setHours(0, 0, 0, 0),
    e
}
;
function WT(e) {
    const t = e[0].getTime();
    return (e[1].getTime() - t) / (1e3 * 60 * 60 * 24) + 1
}
const nv = _e({}, mi, {
    modelValue: Ke(),
    filter: Function,
    formatter: {
        type: Function,
        default: (e,t)=>t
    }
})
  , av = Object.keys(mi);
function jT(e, t) {
    if (e < 0)
        return [];
    const n = Array(e);
    let a = -1;
    for (; ++a < e; )
        n[a] = t(a);
    return n
}
const ov = (e,t)=>32 - new Date(e,t - 1,32).getDate()
  , _o = (e,t,n,a,r,o)=>{
    const l = jT(t - e + 1, i=>{
        const s = nn(e + i);
        return a(n, {
            text: s,
            value: s
        })
    }
    );
    return r ? r(n, l, o) : l
}
  , rv = (e,t)=>e.map((n,a)=>{
    const r = t[a];
    if (r.length) {
        const o = +r[0].value
          , l = +r[r.length - 1].value;
        return nn(vt(+n, o, l))
    }
    return n
}
)
  , [zT] = q("calendar-day");
var YT = K({
    name: zT,
    props: {
        item: ft(Object),
        color: String,
        index: Number,
        offset: at(0),
        rowHeight: String
    },
    emits: ["click", "clickDisabledDate"],
    setup(e, {emit: t, slots: n}) {
        const a = F(()=>{
            var s;
            const {item: c, index: u, color: f, offset: d, rowHeight: m} = e
              , y = {
                height: m
            };
            if (c.type === "placeholder")
                return y.width = "100%",
                y;
            if (u === 0 && (y.marginLeft = `${100 * d / 7}%`),
            f)
                switch (c.type) {
                case "end":
                case "start":
                case "start-end":
                case "multiple-middle":
                case "multiple-selected":
                    y.background = f;
                    break;
                case "middle":
                    y.color = f;
                    break
                }
            return d + (((s = c.date) == null ? void 0 : s.getDate()) || 1) > 28 && (y.marginBottom = 0),
            y
        }
        )
          , r = ()=>{
            e.item.type !== "disabled" ? t("click", e.item) : t("clickDisabledDate", e.item)
        }
          , o = ()=>{
            const {topInfo: s} = e.item;
            if (s || n["top-info"])
                return h("div", {
                    class: et("top-info")
                }, [n["top-info"] ? n["top-info"](e.item) : s])
        }
          , l = ()=>{
            const {bottomInfo: s} = e.item;
            if (s || n["bottom-info"])
                return h("div", {
                    class: et("bottom-info")
                }, [n["bottom-info"] ? n["bottom-info"](e.item) : s])
        }
          , i = ()=>{
            const {item: s, color: c, rowHeight: u} = e
              , {type: f, text: d} = s
              , m = [o(), d, l()];
            return f === "selected" ? h("div", {
                class: et("selected-day"),
                style: {
                    width: u,
                    height: u,
                    background: c
                }
            }, [m]) : m
        }
        ;
        return ()=>{
            const {type: s, className: c} = e.item;
            return s === "placeholder" ? h("div", {
                class: et("day"),
                style: a.value
            }, null) : h("div", {
                role: "gridcell",
                style: a.value,
                class: [et("day", s), c],
                tabindex: s === "disabled" ? void 0 : -1,
                onClick: r
            }, [i()])
        }
    }
});
const [GT] = q("calendar-month")
  , KT = {
    date: ft(Date),
    type: String,
    color: String,
    minDate: Date,
    maxDate: Date,
    showMark: Boolean,
    rowHeight: te,
    formatter: Function,
    lazyRender: Boolean,
    currentDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: Boolean,
    showMonthTitle: Boolean,
    firstDayOfWeek: Number
};
var XT = K({
    name: GT,
    props: KT,
    emits: ["click", "clickDisabledDate"],
    setup(e, {emit: t, slots: n}) {
        const [a,r] = wC()
          , o = V()
          , l = V()
          , i = yg(l)
          , s = F(()=>UT(e.date))
          , c = F(()=>Ae(e.rowHeight))
          , u = F(()=>{
            const D = e.date.getDate()
              , O = (e.date.getDay() - D % 7 + 8) % 7;
            return e.firstDayOfWeek ? (O + 7 - e.firstDayOfWeek) % 7 : O
        }
        )
          , f = F(()=>ov(e.date.getFullYear(), e.date.getMonth() + 1))
          , d = F(()=>a.value || !e.lazyRender)
          , m = ()=>s.value
          , y = D=>{
            const k = O=>e.currentDate.some(N=>Mt(N, O) === 0);
            if (k(D)) {
                const O = zs(D)
                  , N = Ys(D)
                  , Z = k(O)
                  , ce = k(N);
                return Z && ce ? "multiple-middle" : Z ? "end" : ce ? "start" : "multiple-selected"
            }
            return ""
        }
          , w = D=>{
            const [k,O] = e.currentDate;
            if (!k)
                return "";
            const N = Mt(D, k);
            if (!O)
                return N === 0 ? "start" : "";
            const Z = Mt(D, O);
            return e.allowSameDay && N === 0 && Z === 0 ? "start-end" : N === 0 ? "start" : Z === 0 ? "end" : N > 0 && Z < 0 ? "middle" : ""
        }
          , p = D=>{
            const {type: k, minDate: O, maxDate: N, currentDate: Z} = e;
            if (O && Mt(D, O) < 0 || N && Mt(D, N) > 0)
                return "disabled";
            if (Z === null)
                return "";
            if (Array.isArray(Z)) {
                if (k === "multiple")
                    return y(D);
                if (k === "range")
                    return w(D)
            } else if (k === "single")
                return Mt(D, Z) === 0 ? "selected" : "";
            return ""
        }
          , C = D=>{
            if (e.type === "range") {
                if (D === "start" || D === "end")
                    return Mn(D);
                if (D === "start-end")
                    return `${Mn("start")}/${Mn("end")}`
            }
        }
          , g = ()=>{
            if (e.showMonthTitle)
                return h("div", {
                    class: et("month-title")
                }, [n["month-title"] ? n["month-title"]({
                    date: e.date,
                    text: s.value
                }) : s.value])
        }
          , v = ()=>{
            if (e.showMark && d.value)
                return h("div", {
                    class: et("month-mark")
                }, [e.date.getMonth() + 1])
        }
          , b = F(()=>{
            const D = Math.ceil((f.value + u.value) / 7);
            return Array(D).fill({
                type: "placeholder"
            })
        }
        )
          , _ = F(()=>{
            const D = []
              , k = e.date.getFullYear()
              , O = e.date.getMonth();
            for (let N = 1; N <= f.value; N++) {
                const Z = new Date(k,O,N)
                  , ce = p(Z);
                let j = {
                    date: Z,
                    type: ce,
                    text: N,
                    bottomInfo: C(ce)
                };
                e.formatter && (j = e.formatter(j)),
                D.push(j)
            }
            return D
        }
        )
          , S = F(()=>_.value.filter(D=>D.type === "disabled"))
          , A = (D,k)=>{
            if (o.value) {
                const O = Fe(o.value)
                  , N = b.value.length
                  , ce = (Math.ceil((k.getDate() + u.value) / 7) - 1) * O.height / N;
                Rl(D, O.top + ce + D.scrollTop - Fe(D).top)
            }
        }
          , E = (D,k)=>h(YT, {
            item: D,
            index: k,
            color: e.color,
            offset: u.value,
            rowHeight: c.value,
            onClick: O=>t("click", O),
            onClickDisabledDate: O=>t("clickDisabledDate", O)
        }, Me(n, ["top-info", "bottom-info"]))
          , T = ()=>h("div", {
            ref: o,
            role: "grid",
            class: et("days")
        }, [v(), (d.value ? _ : b).value.map(E)]);
        return De({
            getTitle: m,
            getHeight: ()=>i.value,
            setVisible: r,
            scrollToDate: A,
            disabledDays: S
        }),
        ()=>h("div", {
            class: et("month"),
            ref: l
        }, [g(), T()])
    }
});
const [qT] = q("calendar-header");
var JT = K({
    name: qT,
    props: {
        date: Date,
        minDate: Date,
        maxDate: Date,
        title: String,
        subtitle: String,
        showTitle: Boolean,
        showSubtitle: Boolean,
        firstDayOfWeek: Number,
        switchMode: re("none")
    },
    emits: ["clickSubtitle", "panelChange"],
    setup(e, {slots: t, emit: n}) {
        const a = F(()=>e.date && e.minDate && $a(hd(e.date), e.minDate) < 0)
          , r = F(()=>e.date && e.minDate && $a(gd(e.date), e.minDate) < 0)
          , o = F(()=>e.date && e.maxDate && $a(md(e.date), e.maxDate) > 0)
          , l = F(()=>e.date && e.maxDate && $a(vd(e.date), e.maxDate) > 0)
          , i = ()=>{
            if (e.showTitle) {
                const m = e.title || Mn("title")
                  , y = t.title ? t.title() : m;
                return h("div", {
                    class: et("header-title")
                }, [y])
            }
        }
          , s = m=>n("clickSubtitle", m)
          , c = m=>n("panelChange", m)
          , u = m=>{
            const y = e.switchMode === "year-month"
              , w = t[m ? "next-month" : "prev-month"]
              , p = t[m ? "next-year" : "prev-year"]
              , C = m ? o.value : a.value
              , g = m ? l.value : r.value
              , v = m ? "arrow" : "arrow-left"
              , b = m ? "arrow-double-right" : "arrow-double-left"
              , _ = ()=>c((m ? md : hd)(e.date))
              , S = ()=>c((m ? vd : gd)(e.date))
              , A = h("view", {
                class: et("header-action", {
                    disabled: C
                }),
                onClick: C ? void 0 : _
            }, [w ? w({
                disabled: C
            }) : h(Ie, {
                class: {
                    [Tt]: !C
                },
                name: v
            }, null)])
              , E = y && h("view", {
                class: et("header-action", {
                    disabled: g
                }),
                onClick: g ? void 0 : S
            }, [p ? p({
                disabled: g
            }) : h(Ie, {
                class: {
                    [Tt]: !g
                },
                name: b
            }, null)]);
            return m ? [A, E] : [E, A]
        }
          , f = ()=>{
            if (e.showSubtitle) {
                const m = t.subtitle ? t.subtitle({
                    date: e.date,
                    text: e.subtitle
                }) : e.subtitle
                  , y = e.switchMode !== "none";
                return h("div", {
                    class: et("header-subtitle", {
                        "with-swicth": y
                    }),
                    onClick: s
                }, [y ? [u(), h("div", {
                    class: et("header-subtitle-text")
                }, [m]), u(!0)] : m])
            }
        }
          , d = ()=>{
            const {firstDayOfWeek: m} = e
              , y = Mn("weekdays")
              , w = [...y.slice(m, 7), ...y.slice(0, m)];
            return h("div", {
                class: et("weekdays")
            }, [w.map(p=>h("span", {
                class: et("weekday")
            }, [p]))])
        }
        ;
        return ()=>h("div", {
            class: et("header")
        }, [i(), f(), d()])
    }
});
const ZT = {
    show: Boolean,
    type: re("single"),
    switchMode: re("none"),
    title: String,
    color: String,
    round: X,
    readonly: Boolean,
    poppable: X,
    maxRange: ge(null),
    position: re("bottom"),
    teleport: [String, Object],
    showMark: X,
    showTitle: X,
    formatter: Function,
    rowHeight: te,
    confirmText: String,
    rangePrompt: String,
    lazyRender: X,
    showConfirm: X,
    defaultDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: X,
    closeOnPopstate: X,
    showRangePrompt: X,
    confirmDisabledText: String,
    closeOnClickOverlay: X,
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: X,
    minDate: {
        type: Date,
        validator: Sr
    },
    maxDate: {
        type: Date,
        validator: Sr
    },
    firstDayOfWeek: {
        type: te,
        default: 0,
        validator: e=>e >= 0 && e <= 6
    }
};
var QT = K({
    name: HT,
    props: ZT,
    emits: ["select", "confirm", "unselect", "monthShow", "overRange", "update:show", "clickSubtitle", "clickDisabledDate", "panelChange"],
    setup(e, {emit: t, slots: n}) {
        const a = F(()=>e.switchMode !== "none")
          , r = F(()=>!e.minDate && !a.value ? Jr() : e.minDate)
          , o = F(()=>!e.maxDate && !a.value ? Kc(Jr(), 6) : e.maxDate)
          , l = (H,J=r.value,he=o.value)=>J && Mt(H, J) === -1 ? J : he && Mt(H, he) === 1 ? he : H
          , i = (H=e.defaultDate)=>{
            const {type: J, allowSameDay: he} = e;
            if (H === null)
                return H;
            const be = Jr();
            if (J === "range") {
                Array.isArray(H) || (H = []);
                const ie = r.value
                  , me = o.value
                  , L = l(H[0] || be, ie, me ? he ? me : zs(me) : void 0)
                  , U = l(H[1] || (he ? be : Ys(be)), ie ? he ? ie : Ys(ie) : void 0);
                return [L, U]
            }
            return J === "multiple" ? Array.isArray(H) ? H.map(ie=>l(ie)) : [l(be)] : ((!H || Array.isArray(H)) && (H = be),
            l(H))
        }
          , s = ()=>{
            const H = Array.isArray(f.value) ? f.value[0] : f.value;
            return H || l(Jr())
        }
        ;
        let c;
        const u = V()
          , f = V(i())
          , d = V(s())
          , m = V()
          , [y,w] = Rr()
          , p = F(()=>e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)
          , C = F(()=>{
            const H = [];
            if (!r.value || !o.value)
                return H;
            const J = new Date(r.value);
            J.setDate(1);
            do
                H.push(new Date(J)),
                J.setMonth(J.getMonth() + 1);
            while ($a(J, o.value) !== 1);
            return H
        }
        )
          , g = F(()=>{
            if (f.value) {
                if (e.type === "range")
                    return !f.value[0] || !f.value[1];
                if (e.type === "multiple")
                    return !f.value.length
            }
            return !f.value
        }
        )
          , v = ()=>f.value
          , b = ()=>{
            const H = Vn(u.value)
              , J = H + c
              , he = C.value.map((U,W)=>y.value[W].getHeight())
              , be = he.reduce((U,W)=>U + W, 0);
            if (J > be && H > 0)
                return;
            let ie = 0, me;
            const L = [-1, -1];
            for (let U = 0; U < C.value.length; U++) {
                const W = y.value[U];
                ie <= J && ie + he[U] >= H && (L[1] = U,
                me || (me = W,
                L[0] = U),
                y.value[U].showed || (y.value[U].showed = !0,
                t("monthShow", {
                    date: W.date,
                    title: W.getTitle()
                }))),
                ie += he[U]
            }
            C.value.forEach((U,W)=>{
                const ne = W >= L[0] - 1 && W <= L[1] + 1;
                y.value[W].setVisible(ne)
            }
            ),
            me && (m.value = me)
        }
          , _ = H=>{
            a.value ? d.value = H : Et(()=>{
                C.value.some((J,he)=>$a(J, H) === 0 ? (u.value && y.value[he].scrollToDate(u.value, H),
                !0) : !1),
                b()
            }
            )
        }
          , S = ()=>{
            if (!(e.poppable && !e.show))
                if (f.value) {
                    const H = e.type === "single" ? f.value : f.value[0];
                    Sr(H) && _(H)
                } else
                    a.value || Et(b)
        }
          , A = ()=>{
            e.poppable && !e.show || (a.value || Et(()=>{
                c = Math.floor(Fe(u).height)
            }
            ),
            S())
        }
          , E = (H=i())=>{
            f.value = H,
            S()
        }
          , T = H=>{
            const {maxRange: J, rangePrompt: he, showRangePrompt: be} = e;
            return J && WT(H) > +J ? (be && js(he || Mn("rangePrompt", J)),
            t("overRange"),
            !1) : !0
        }
          , D = H=>{
            d.value = H,
            t("panelChange", {
                date: H
            })
        }
          , k = ()=>{
            var H;
            return t("confirm", (H = f.value) != null ? H : dd(f.value))
        }
          , O = (H,J)=>{
            const he = be=>{
                f.value = be,
                t("select", dd(be))
            }
            ;
            if (J && e.type === "range" && !T(H)) {
                he([H[0], Gc(H[0], +e.maxRange - 1)]);
                return
            }
            he(H),
            J && !e.showConfirm && k()
        }
          , N = (H,J,he)=>{
            var be;
            return (be = H.find(ie=>Mt(J, ie.date) === -1 && Mt(ie.date, he) === -1)) == null ? void 0 : be.date
        }
          , Z = F(()=>y.value.reduce((H,J)=>{
            var he, be;
            return H.push(...(be = (he = J.disabledDays) == null ? void 0 : he.value) != null ? be : []),
            H
        }
        , []))
          , ce = H=>{
            if (e.readonly || !H.date)
                return;
            const {date: J} = H
              , {type: he} = e;
            if (he === "range") {
                if (!f.value) {
                    O([J]);
                    return
                }
                const [be,ie] = f.value;
                if (be && !ie) {
                    const me = Mt(J, be);
                    if (me === 1) {
                        const L = N(Z.value, be, J);
                        if (L) {
                            const U = zs(L);
                            Mt(be, U) === -1 ? O([be, U]) : O([J])
                        } else
                            O([be, J], !0)
                    } else
                        me === -1 ? O([J]) : e.allowSameDay && O([J, J], !0)
                } else
                    O([J])
            } else if (he === "multiple") {
                if (!f.value) {
                    O([J]);
                    return
                }
                const be = f.value
                  , ie = be.findIndex(me=>Mt(me, J) === 0);
                if (ie !== -1) {
                    const [me] = be.splice(ie, 1);
                    t("unselect", Oo(me))
                } else
                    e.maxRange && be.length >= +e.maxRange ? js(e.rangePrompt || Mn("rangePrompt", e.maxRange)) : O([...be, J])
            } else
                O(J, !0)
        }
          , j = H=>t("update:show", H)
          , ee = (H,J)=>{
            const he = J !== 0 || !e.showSubtitle;
            return h(XT, Re({
                ref: a.value ? m : w(J),
                date: H,
                currentDate: f.value,
                showMonthTitle: he,
                firstDayOfWeek: p.value,
                lazyRender: a.value ? !1 : e.lazyRender,
                maxDate: o.value,
                minDate: r.value
            }, Me(e, ["type", "color", "showMark", "formatter", "rowHeight", "showSubtitle", "allowSameDay"]), {
                onClick: ce,
                onClickDisabledDate: be=>t("clickDisabledDate", be)
            }), Me(n, ["top-info", "bottom-info", "month-title"]))
        }
          , ue = ()=>{
            if (n.footer)
                return n.footer();
            if (e.showConfirm) {
                const H = n["confirm-text"]
                  , J = g.value
                  , he = J ? e.confirmDisabledText : e.confirmText;
                return h(pt, {
                    round: !0,
                    block: !0,
                    type: "primary",
                    color: e.color,
                    class: et("confirm"),
                    disabled: J,
                    nativeType: "button",
                    onClick: k
                }, {
                    default: ()=>[H ? H({
                        disabled: J
                    }) : he || Mn("confirm")]
                })
            }
        }
          , Te = ()=>h("div", {
            class: [et("footer"), {
                "van-safe-area-bottom": e.safeAreaInsetBottom
            }]
        }, [ue()])
          , Pe = ()=>{
            var H, J;
            return h("div", {
                class: et()
            }, [h(JT, {
                date: (H = m.value) == null ? void 0 : H.date,
                maxDate: o.value,
                minDate: r.value,
                title: e.title,
                subtitle: (J = m.value) == null ? void 0 : J.getTitle(),
                showTitle: e.showTitle,
                showSubtitle: e.showSubtitle,
                switchMode: e.switchMode,
                firstDayOfWeek: p.value,
                onClickSubtitle: he=>t("clickSubtitle", he),
                onPanelChange: D
            }, Me(n, ["title", "subtitle", "prev-month", "prev-year", "next-month", "next-year"])), h("div", {
                ref: u,
                class: et("body"),
                onScroll: a.value ? void 0 : b
            }, [a.value ? ee(d.value, 0) : C.value.map(ee)]), Te()])
        }
        ;
        return se(()=>e.show, A),
        se(()=>[e.type, e.minDate, e.maxDate, e.switchMode], ()=>E(i(f.value))),
        se(()=>e.defaultDate, (H=null)=>{
            f.value = H,
            S()
        }
        ),
        De({
            reset: E,
            scrollToDate: _,
            getSelectedDate: v
        }),
        Mo(A),
        ()=>e.poppable ? h(fn, {
            show: e.show,
            class: et("popup"),
            round: e.round,
            position: e.position,
            closeable: e.showTitle || e.showSubtitle,
            teleport: e.teleport,
            closeOnPopstate: e.closeOnPopstate,
            safeAreaInsetTop: e.safeAreaInsetTop,
            closeOnClickOverlay: e.closeOnClickOverlay,
            "onUpdate:show": j
        }, {
            default: Pe
        }) : Pe()
    }
});
const ex = oe(QT)
  , [tx,eo] = q("image")
  , nx = {
    src: String,
    alt: String,
    fit: String,
    position: String,
    round: Boolean,
    block: Boolean,
    width: te,
    height: te,
    radius: te,
    lazyLoad: Boolean,
    iconSize: te,
    showError: X,
    errorIcon: re("photo-fail"),
    iconPrefix: String,
    showLoading: X,
    loadingIcon: re("photo"),
    crossorigin: String,
    referrerpolicy: String
};
var ax = K({
    name: tx,
    props: nx,
    emits: ["load", "error"],
    setup(e, {emit: t, slots: n}) {
        const a = V(!1)
          , r = V(!0)
          , o = V()
          , {$Lazyload: l} = gt().proxy
          , i = F(()=>{
            const p = {
                width: Ae(e.width),
                height: Ae(e.height)
            };
            return $e(e.radius) && (p.overflow = "hidden",
            p.borderRadius = Ae(e.radius)),
            p
        }
        );
        se(()=>e.src, ()=>{
            a.value = !1,
            r.value = !0
        }
        );
        const s = p=>{
            r.value && (r.value = !1,
            t("load", p))
        }
          , c = ()=>{
            const p = new Event("load");
            Object.defineProperty(p, "target", {
                value: o.value,
                enumerable: !0
            }),
            s(p)
        }
          , u = p=>{
            a.value = !0,
            r.value = !1,
            t("error", p)
        }
          , f = (p,C,g)=>g ? g() : h(Ie, {
            name: p,
            size: e.iconSize,
            class: C,
            classPrefix: e.iconPrefix
        }, null)
          , d = ()=>{
            if (r.value && e.showLoading)
                return h("div", {
                    class: eo("loading")
                }, [f(e.loadingIcon, eo("loading-icon"), n.loading)]);
            if (a.value && e.showError)
                return h("div", {
                    class: eo("error")
                }, [f(e.errorIcon, eo("error-icon"), n.error)])
        }
          , m = ()=>{
            if (a.value || !e.src)
                return;
            const p = {
                alt: e.alt,
                class: eo("img"),
                style: {
                    objectFit: e.fit,
                    objectPosition: e.position
                },
                crossorigin: e.crossorigin,
                referrerpolicy: e.referrerpolicy
            };
            return e.lazyLoad ? st(h("img", Re({
                ref: o
            }, p), null), [[qb("lazy"), e.src]]) : h("img", Re({
                ref: o,
                src: e.src,
                onLoad: s,
                onError: u
            }, p), null)
        }
          , y = ({el: p})=>{
            const C = ()=>{
                p === o.value && r.value && c()
            }
            ;
            o.value ? C() : Oe(C)
        }
          , w = ({el: p})=>{
            p === o.value && !a.value && u()
        }
        ;
        return l && Xt && (l.$on("loaded", y),
        l.$on("error", w),
        cn(()=>{
            l.$off("loaded", y),
            l.$off("error", w)
        }
        )),
        Qe(()=>{
            Oe(()=>{
                var p;
                (p = o.value) != null && p.complete && !e.lazyLoad && c()
            }
            )
        }
        ),
        ()=>{
            var p;
            return h("div", {
                class: eo({
                    round: e.round,
                    block: e.block
                }),
                style: i.value
            }, [m(), d(), (p = n.default) == null ? void 0 : p.call(n)])
        }
    }
});
const yi = oe(ax)
  , [ox,At] = q("card")
  , rx = {
    tag: String,
    num: te,
    desc: String,
    thumb: String,
    title: String,
    price: te,
    centered: Boolean,
    lazyLoad: Boolean,
    currency: re("¥"),
    thumbLink: String,
    originPrice: te
};
var lx = K({
    name: ox,
    props: rx,
    emits: ["clickThumb"],
    setup(e, {slots: t, emit: n}) {
        const a = ()=>{
            if (t.title)
                return t.title();
            if (e.title)
                return h("div", {
                    class: [At("title"), "van-multi-ellipsis--l2"]
                }, [e.title])
        }
          , r = ()=>{
            if (t.tag || e.tag)
                return h("div", {
                    class: At("tag")
                }, [t.tag ? t.tag() : h(bi, {
                    mark: !0,
                    type: "primary"
                }, {
                    default: ()=>[e.tag]
                })])
        }
          , o = ()=>t.thumb ? t.thumb() : h(yi, {
            src: e.thumb,
            fit: "cover",
            width: "100%",
            height: "100%",
            lazyLoad: e.lazyLoad
        }, null)
          , l = ()=>{
            if (t.thumb || e.thumb)
                return h("a", {
                    href: e.thumbLink,
                    class: At("thumb"),
                    onClick: c=>n("clickThumb", c)
                }, [o(), r()])
        }
          , i = ()=>{
            if (t.desc)
                return t.desc();
            if (e.desc)
                return h("div", {
                    class: [At("desc"), "van-ellipsis"]
                }, [e.desc])
        }
          , s = ()=>{
            const c = e.price.toString().split(".");
            return h("div", null, [h("span", {
                class: At("price-currency")
            }, [e.currency]), h("span", {
                class: At("price-integer")
            }, [c[0]]), c.length > 1 && h(Je, null, [ql("."), h("span", {
                class: At("price-decimal")
            }, [c[1]])])])
        }
        ;
        return ()=>{
            var c, u, f;
            const d = t.num || $e(e.num)
              , m = t.price || $e(e.price)
              , y = t["origin-price"] || $e(e.originPrice)
              , w = d || m || y || t.bottom
              , p = m && h("div", {
                class: At("price")
            }, [t.price ? t.price() : s()])
              , C = y && h("div", {
                class: At("origin-price")
            }, [t["origin-price"] ? t["origin-price"]() : `${e.currency} ${e.originPrice}`])
              , g = d && h("div", {
                class: At("num")
            }, [t.num ? t.num() : `x${e.num}`])
              , v = t.footer && h("div", {
                class: At("footer")
            }, [t.footer()])
              , b = w && h("div", {
                class: At("bottom")
            }, [(c = t["price-top"]) == null ? void 0 : c.call(t), p, C, g, (u = t.bottom) == null ? void 0 : u.call(t)]);
            return h("div", {
                class: At()
            }, [h("div", {
                class: At("header")
            }, [l(), h("div", {
                class: At("content", {
                    centered: e.centered
                })
            }, [h("div", null, [a(), i(), (f = t.tags) == null ? void 0 : f.call(t)]), b])]), v])
        }
    }
});
const ix = oe(lx)
  , [sx,kn,cx] = q("cascader")
  , ux = {
    title: String,
    options: Ke(),
    closeable: X,
    swipeable: X,
    closeIcon: re("cross"),
    showHeader: X,
    modelValue: te,
    fieldNames: Object,
    placeholder: String,
    activeColor: String
};
var fx = K({
    name: sx,
    props: ux,
    emits: ["close", "change", "finish", "clickTab", "update:modelValue"],
    setup(e, {slots: t, emit: n}) {
        const a = V([])
          , r = V(0)
          , [o,l] = Rr()
          , {text: i, value: s, children: c} = _e({
            text: "text",
            value: "value",
            children: "children"
        }, e.fieldNames)
          , u = (_,S)=>{
            for (const A of _) {
                if (A[s] === S)
                    return [A];
                if (A[c]) {
                    const E = u(A[c], S);
                    if (E)
                        return [A, ...E]
                }
            }
        }
          , f = ()=>{
            const {options: _, modelValue: S} = e;
            if (S !== void 0) {
                const A = u(_, S);
                if (A) {
                    let E = _;
                    a.value = A.map(T=>{
                        const D = {
                            options: E,
                            selected: T
                        }
                          , k = E.find(O=>O[s] === T[s]);
                        return k && (E = k[c]),
                        D
                    }
                    ),
                    E && a.value.push({
                        options: E,
                        selected: null
                    }),
                    Oe(()=>{
                        r.value = a.value.length - 1
                    }
                    );
                    return
                }
            }
            a.value = [{
                options: _,
                selected: null
            }]
        }
          , d = (_,S)=>{
            if (_.disabled)
                return;
            if (a.value[S].selected = _,
            a.value.length > S + 1 && (a.value = a.value.slice(0, S + 1)),
            _[c]) {
                const T = {
                    options: _[c],
                    selected: null
                };
                a.value[S + 1] ? a.value[S + 1] = T : a.value.push(T),
                Oe(()=>{
                    r.value++
                }
                )
            }
            const A = a.value.map(T=>T.selected).filter(Boolean);
            n("update:modelValue", _[s]);
            const E = {
                value: _[s],
                tabIndex: S,
                selectedOptions: A
            };
            n("change", E),
            _[c] || n("finish", E)
        }
          , m = ()=>n("close")
          , y = ({name: _, title: S})=>n("clickTab", _, S)
          , w = ()=>e.showHeader ? h("div", {
            class: kn("header")
        }, [h("h2", {
            class: kn("title")
        }, [t.title ? t.title() : e.title]), e.closeable ? h(Ie, {
            name: e.closeIcon,
            class: [kn("close-icon"), Tt],
            onClick: m
        }, null) : null]) : null
          , p = (_,S,A)=>{
            const {disabled: E} = _
              , T = !!(S && _[s] === S[s])
              , D = _.color || (T ? e.activeColor : void 0)
              , k = t.option ? t.option({
                option: _,
                selected: T
            }) : h("span", null, [_[i]]);
            return h("li", {
                ref: T ? l(A) : void 0,
                role: "menuitemradio",
                class: [kn("option", {
                    selected: T,
                    disabled: E
                }), _.className],
                style: {
                    color: D
                },
                tabindex: E ? void 0 : T ? 0 : -1,
                "aria-checked": T,
                "aria-disabled": E || void 0,
                onClick: ()=>d(_, A)
            }, [k, T ? h(Ie, {
                name: "success",
                class: kn("selected-icon")
            }, null) : null])
        }
          , C = (_,S,A)=>h("ul", {
            role: "menu",
            class: kn("options")
        }, [_.map(E=>p(E, S, A))])
          , g = (_,S)=>{
            const {options: A, selected: E} = _
              , T = e.placeholder || cx("select")
              , D = E ? E[i] : T;
            return h(Tr, {
                title: D,
                titleClass: kn("tab", {
                    unselected: !E
                })
            }, {
                default: ()=>{
                    var k, O;
                    return [(k = t["options-top"]) == null ? void 0 : k.call(t, {
                        tabIndex: S
                    }), C(A, E, S), (O = t["options-bottom"]) == null ? void 0 : O.call(t, {
                        tabIndex: S
                    })]
                }
            })
        }
          , v = ()=>h(hi, {
            active: r.value,
            "onUpdate:active": _=>r.value = _,
            shrink: !0,
            animated: !0,
            class: kn("tabs"),
            color: e.activeColor,
            swipeable: e.swipeable,
            onClickTab: y
        }, {
            default: ()=>[a.value.map(g)]
        })
          , b = _=>{
            const S = _.parentElement;
            S && (S.scrollTop = _.offsetTop - (S.offsetHeight - _.offsetHeight) / 2)
        }
        ;
        return f(),
        se(r, _=>{
            const S = o.value[_];
            S && b(S)
        }
        ),
        se(()=>e.options, f, {
            deep: !0
        }),
        se(()=>e.modelValue, _=>{
            _ !== void 0 && a.value.map(A=>{
                var E;
                return (E = A.selected) == null ? void 0 : E[s]
            }
            ).includes(_) || f()
        }
        ),
        ()=>h("div", {
            class: kn()
        }, [w(), v()])
    }
});
const dx = oe(fx)
  , [hx,bd] = q("cell-group")
  , mx = {
    title: String,
    inset: Boolean,
    border: X
};
var gx = K({
    name: hx,
    inheritAttrs: !1,
    props: mx,
    setup(e, {slots: t, attrs: n}) {
        const a = ()=>{
            var o;
            return h("div", Re({
                class: [bd({
                    inset: e.inset
                }), {
                    [ii]: e.border && !e.inset
                }]
            }, n, Dl()), [(o = t.default) == null ? void 0 : o.call(t)])
        }
          , r = ()=>h("div", {
            class: bd("title", {
                inset: e.inset
            })
        }, [t.title ? t.title() : e.title]);
        return ()=>e.title || t.title ? h(Je, null, [r(), a()]) : a()
    }
});
const lv = oe(gx)
  , [vx,Zr] = q("circle");
let bx = 0;
const yd = e=>Math.min(Math.max(+e, 0), 100);
function yx(e, t) {
    const n = e ? 1 : 0;
    return `M ${t / 2} ${t / 2} m 0, -500 a 500, 500 0 1, ${n} 0, 1000 a 500, 500 0 1, ${n} 0, -1000`
}
const px = {
    text: String,
    size: te,
    fill: re("none"),
    rate: ge(100),
    speed: ge(0),
    color: [String, Object],
    clockwise: X,
    layerColor: String,
    currentRate: at(0),
    strokeWidth: ge(40),
    strokeLinecap: String,
    startPosition: re("top")
};
var _x = K({
    name: vx,
    props: px,
    emits: ["update:currentRate"],
    setup(e, {emit: t, slots: n}) {
        const a = `van-circle-${bx++}`
          , r = F(()=>+e.strokeWidth + 1e3)
          , o = F(()=>yx(e.clockwise, r.value))
          , l = F(()=>{
            const d = {
                top: 0,
                right: 90,
                bottom: 180,
                left: 270
            }[e.startPosition];
            if (d)
                return {
                    transform: `rotate(${d}deg)`
                }
        }
        );
        se(()=>e.rate, f=>{
            let d;
            const m = Date.now()
              , y = e.currentRate
              , w = yd(f)
              , p = Math.abs((y - w) * 1e3 / +e.speed)
              , C = ()=>{
                const g = Date.now()
                  , b = Math.min((g - m) / p, 1) * (w - y) + y;
                t("update:currentRate", yd(parseFloat(b.toFixed(1)))),
                (w > y ? b < w : b > w) && (d = Et(C))
            }
            ;
            e.speed ? (d && ri(d),
            d = Et(C)) : t("update:currentRate", w)
        }
        , {
            immediate: !0
        });
        const i = ()=>{
            const {strokeWidth: d, currentRate: m, strokeLinecap: y} = e
              , w = 3140 * m / 100
              , p = Fn(e.color) ? `url(#${a})` : e.color
              , C = {
                stroke: p,
                strokeWidth: `${+d + 1}px`,
                strokeLinecap: y,
                strokeDasharray: `${w}px 3140px`
            };
            return h("path", {
                d: o.value,
                style: C,
                class: Zr("hover"),
                stroke: p
            }, null)
        }
          , s = ()=>{
            const f = {
                fill: e.fill,
                stroke: e.layerColor,
                strokeWidth: `${e.strokeWidth}px`
            };
            return h("path", {
                class: Zr("layer"),
                style: f,
                d: o.value
            }, null)
        }
          , c = ()=>{
            const {color: f} = e;
            if (!Fn(f))
                return;
            const d = Object.keys(f).sort((m,y)=>parseFloat(m) - parseFloat(y)).map((m,y)=>h("stop", {
                key: y,
                offset: m,
                "stop-color": f[m]
            }, null));
            return h("defs", null, [h("linearGradient", {
                id: a,
                x1: "100%",
                y1: "0%",
                x2: "0%",
                y2: "0%"
            }, [d])])
        }
          , u = ()=>{
            if (n.default)
                return n.default();
            if (e.text)
                return h("div", {
                    class: Zr("text")
                }, [e.text])
        }
        ;
        return ()=>h("div", {
            class: Zr(),
            style: zn(e.size)
        }, [h("svg", {
            viewBox: `0 0 ${r.value} ${r.value}`,
            style: l.value
        }, [c(), s(), i()]), u()])
    }
});
const wx = oe(_x)
  , [iv,Cx] = q("row")
  , sv = Symbol(iv)
  , Sx = {
    tag: re("div"),
    wrap: X,
    align: String,
    gutter: {
        type: [String, Number, Array],
        default: 0
    },
    justify: String
};
var Ex = K({
    name: iv,
    props: Sx,
    setup(e, {slots: t}) {
        const {children: n, linkChildren: a} = xt(sv)
          , r = F(()=>{
            const i = [[]];
            let s = 0;
            return n.forEach((c,u)=>{
                s += Number(c.span),
                s > 24 ? (i.push([u]),
                s -= 24) : i[i.length - 1].push(u)
            }
            ),
            i
        }
        )
          , o = F(()=>{
            let i = 0;
            Array.isArray(e.gutter) ? i = Number(e.gutter[0]) || 0 : i = Number(e.gutter);
            const s = [];
            return i && r.value.forEach(c=>{
                const u = i * (c.length - 1) / c.length;
                c.forEach((f,d)=>{
                    if (d === 0)
                        s.push({
                            right: u
                        });
                    else {
                        const m = i - s[f - 1].right
                          , y = u - m;
                        s.push({
                            left: m,
                            right: y
                        })
                    }
                }
                )
            }
            ),
            s
        }
        )
          , l = F(()=>{
            const {gutter: i} = e
              , s = [];
            if (Array.isArray(i) && i.length > 1) {
                const c = Number(i[1]) || 0;
                if (c <= 0)
                    return s;
                r.value.forEach((u,f)=>{
                    f !== r.value.length - 1 && u.forEach(()=>{
                        s.push({
                            bottom: c
                        })
                    }
                    )
                }
                )
            }
            return s
        }
        );
        return a({
            spaces: o,
            verticalSpaces: l
        }),
        ()=>{
            const {tag: i, wrap: s, align: c, justify: u} = e;
            return h(i, {
                class: Cx({
                    [`align-${c}`]: c,
                    [`justify-${u}`]: u,
                    nowrap: !s
                })
            }, {
                default: ()=>{
                    var f;
                    return [(f = t.default) == null ? void 0 : f.call(t)]
                }
            })
        }
    }
});
const [Tx,xx] = q("col")
  , kx = {
    tag: re("div"),
    span: ge(0),
    offset: te
};
var Ix = K({
    name: Tx,
    props: kx,
    setup(e, {slots: t}) {
        const {parent: n, index: a} = _t(sv)
          , r = F(()=>{
            if (!n)
                return;
            const {spaces: o, verticalSpaces: l} = n;
            let i = {};
            if (o && o.value && o.value[a.value]) {
                const {left: c, right: u} = o.value[a.value];
                i = {
                    paddingLeft: c ? `${c}px` : null,
                    paddingRight: u ? `${u}px` : null
                }
            }
            const {bottom: s} = l.value[a.value] || {};
            return _e(i, {
                marginBottom: s ? `${s}px` : null
            })
        }
        );
        return ()=>{
            const {tag: o, span: l, offset: i} = e;
            return h(o, {
                style: r.value,
                class: xx({
                    [l]: l,
                    [`offset-${i}`]: i
                })
            }, {
                default: ()=>{
                    var s;
                    return [(s = t.default) == null ? void 0 : s.call(t)]
                }
            })
        }
    }
});
const Ax = oe(Ix)
  , [cv,Ox] = q("collapse")
  , uv = Symbol(cv)
  , Px = {
    border: X,
    accordion: Boolean,
    modelValue: {
        type: [String, Number, Array],
        default: ""
    }
};
var Rx = K({
    name: cv,
    props: Px,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {linkChildren: a, children: r} = xt(uv)
          , o = c=>{
            t("change", c),
            t("update:modelValue", c)
        }
          , l = (c,u)=>{
            const {accordion: f, modelValue: d} = e;
            o(f ? c === d ? "" : c : u ? d.concat(c) : d.filter(m=>m !== c))
        }
          , i = (c={})=>{
            if (e.accordion)
                return;
            typeof c == "boolean" && (c = {
                expanded: c
            });
            const {expanded: u, skipDisabled: f} = c
              , m = r.filter(y=>y.disabled && f ? y.expanded.value : u ?? !y.expanded.value).map(y=>y.itemName.value);
            o(m)
        }
          , s = c=>{
            const {accordion: u, modelValue: f} = e;
            return u ? f === c : f.includes(c)
        }
        ;
        return De({
            toggleAll: i
        }),
        a({
            toggle: l,
            isExpanded: s
        }),
        ()=>{
            var c;
            return h("div", {
                class: [Ox(), {
                    [ii]: e.border
                }]
            }, [(c = n.default) == null ? void 0 : c.call(n)])
        }
    }
});
const Lx = oe(Rx)
  , [Dx,Qr] = q("collapse-item")
  , $x = ["icon", "title", "value", "label", "right-icon"]
  , Nx = _e({}, vi, {
    name: te,
    isLink: X,
    disabled: Boolean,
    readonly: Boolean,
    lazyRender: X
});
var Mx = K({
    name: Dx,
    props: Nx,
    setup(e, {slots: t}) {
        const n = V()
          , a = V()
          , {parent: r, index: o} = _t(uv);
        if (!r)
            return;
        const l = F(()=>{
            var w;
            return (w = e.name) != null ? w : o.value
        }
        )
          , i = F(()=>r.isExpanded(l.value))
          , s = V(i.value)
          , c = Bc(()=>s.value || !e.lazyRender)
          , u = ()=>{
            i.value ? n.value && (n.value.style.height = "") : s.value = !1
        }
        ;
        se(i, (w,p)=>{
            if (p === null)
                return;
            w && (s.value = !0),
            (w ? Oe : Et)(()=>{
                if (!a.value || !n.value)
                    return;
                const {offsetHeight: g} = a.value;
                if (g) {
                    const v = `${g}px`;
                    n.value.style.height = w ? "0" : v,
                    fa(()=>{
                        n.value && (n.value.style.height = w ? v : "0")
                    }
                    )
                } else
                    u()
            }
            )
        }
        );
        const f = (w=!i.value)=>{
            r.toggle(l.value, w)
        }
          , d = ()=>{
            !e.disabled && !e.readonly && f()
        }
          , m = ()=>{
            const {border: w, disabled: p, readonly: C} = e
              , g = Me(e, Object.keys(vi));
            return C && (g.isLink = !1),
            (p || C) && (g.clickable = !1),
            h(Jt, Re({
                role: "button",
                class: Qr("title", {
                    disabled: p,
                    expanded: i.value,
                    borderless: !w
                }),
                "aria-expanded": String(i.value),
                onClick: d
            }, g), Me(t, $x))
        }
          , y = c(()=>{
            var w;
            return st(h("div", {
                ref: n,
                class: Qr("wrapper"),
                onTransitionend: u
            }, [h("div", {
                ref: a,
                class: Qr("content")
            }, [(w = t.default) == null ? void 0 : w.call(t)])]), [[dt, s.value]])
        }
        );
        return De({
            toggle: f,
            expanded: i,
            itemName: l
        }),
        ()=>h("div", {
            class: [Qr({
                border: o.value && e.border
            })]
        }, [m(), y()])
    }
});
const Bx = oe(Mx)
  , Fx = oe(rS)
  , [Vx,pd,Xi] = q("contact-card")
  , Hx = {
    tel: String,
    name: String,
    type: re("add"),
    addText: String,
    editable: X
};
var Ux = K({
    name: Vx,
    props: Hx,
    emits: ["click"],
    setup(e, {emit: t}) {
        const n = r=>{
            e.editable && t("click", r)
        }
          , a = ()=>e.type === "add" ? e.addText || Xi("addContact") : [h("div", null, [`${Xi("name")}：${e.name}`]), h("div", null, [`${Xi("tel")}：${e.tel}`])];
        return ()=>h(Jt, {
            center: !0,
            icon: e.type === "edit" ? "contact" : "add-square",
            class: pd([e.type]),
            border: !1,
            isLink: e.editable,
            titleClass: pd("title"),
            onClick: n
        }, {
            title: a
        })
    }
});
const Wx = oe(Ux)
  , [jx,to,ea] = q("contact-edit")
  , Gs = {
    tel: "",
    name: ""
}
  , zx = {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    showSetDefault: Boolean,
    setDefaultLabel: String,
    contactInfo: {
        type: Object,
        default: ()=>_e({}, Gs)
    },
    telValidator: {
        type: Function,
        default: og
    }
};
var Yx = K({
    name: jx,
    props: zx,
    emits: ["save", "delete", "changeDefault"],
    setup(e, {emit: t}) {
        const n = Ge(_e({}, Gs, e.contactInfo))
          , a = ()=>{
            e.isSaving || t("save", n)
        }
          , r = ()=>t("delete", n)
          , o = ()=>h("div", {
            class: to("buttons")
        }, [h(pt, {
            block: !0,
            round: !0,
            type: "primary",
            text: ea("save"),
            class: to("button"),
            loading: e.isSaving,
            nativeType: "submit"
        }, null), e.isEdit && h(pt, {
            block: !0,
            round: !0,
            text: ea("delete"),
            class: to("button"),
            loading: e.isDeleting,
            onClick: r
        }, null)])
          , l = ()=>h(Uc, {
            modelValue: n.isDefault,
            "onUpdate:modelValue": s=>n.isDefault = s,
            onChange: s=>t("changeDefault", s)
        }, null)
          , i = ()=>{
            if (e.showSetDefault)
                return h(Jt, {
                    title: e.setDefaultLabel,
                    class: to("switch-cell"),
                    border: !1
                }, {
                    "right-icon": l
                })
        }
        ;
        return se(()=>e.contactInfo, s=>_e(n, Gs, s)),
        ()=>h(Vc, {
            class: to(),
            onSubmit: a
        }, {
            default: ()=>[h("div", {
                class: to("fields")
            }, [h(Nn, {
                modelValue: n.name,
                "onUpdate:modelValue": s=>n.name = s,
                clearable: !0,
                label: ea("name"),
                rules: [{
                    required: !0,
                    message: ea("nameEmpty")
                }],
                maxlength: "30",
                placeholder: ea("name")
            }, null), h(Nn, {
                modelValue: n.tel,
                "onUpdate:modelValue": s=>n.tel = s,
                clearable: !0,
                type: "tel",
                label: ea("tel"),
                rules: [{
                    validator: e.telValidator,
                    message: ea("telInvalid")
                }],
                placeholder: ea("tel")
            }, null)]), i(), o()]
        })
    }
});
const Gx = oe(Yx)
  , [Kx,In,Xx] = q("contact-list")
  , qx = {
    list: Array,
    addText: String,
    modelValue: Ze,
    defaultTagText: String
};
var Jx = K({
    name: Kx,
    props: qx,
    emits: ["add", "edit", "select", "update:modelValue"],
    setup(e, {emit: t}) {
        const n = (a,r)=>{
            const o = ()=>{
                t("update:modelValue", a.id),
                t("select", a, r)
            }
              , l = ()=>h(zc, {
                class: In("radio"),
                name: a.id,
                iconSize: 18
            }, null)
              , i = ()=>h(Ie, {
                name: "edit",
                class: In("edit"),
                onClick: c=>{
                    c.stopPropagation(),
                    t("edit", a, r)
                }
            }, null)
              , s = ()=>{
                const c = [`${a.name}，${a.tel}`];
                return a.isDefault && e.defaultTagText && c.push(h(bi, {
                    type: "primary",
                    round: !0,
                    class: In("item-tag")
                }, {
                    default: ()=>[e.defaultTagText]
                })),
                c
            }
            ;
            return h(Jt, {
                key: a.id,
                isLink: !0,
                center: !0,
                class: In("item"),
                titleClass: In("item-title"),
                onClick: o
            }, {
                icon: i,
                title: s,
                "right-icon": l
            })
        }
        ;
        return ()=>h("div", {
            class: In()
        }, [h(Wc, {
            modelValue: e.modelValue,
            class: In("group")
        }, {
            default: ()=>[e.list && e.list.map(n)]
        }), h("div", {
            class: [In("bottom"), "van-safe-area-bottom"]
        }, [h(pt, {
            round: !0,
            block: !0,
            type: "primary",
            class: In("add"),
            text: e.addText || Xx("addContact"),
            onClick: ()=>t("add")
        }, null)])])
    }
});
const Zx = oe(Jx);
function Qx(e, t) {
    const {days: n} = t;
    let {hours: a, minutes: r, seconds: o, milliseconds: l} = t;
    if (e.includes("DD") ? e = e.replace("DD", nn(n)) : a += n * 24,
    e.includes("HH") ? e = e.replace("HH", nn(a)) : r += a * 60,
    e.includes("mm") ? e = e.replace("mm", nn(r)) : o += r * 60,
    e.includes("ss") ? e = e.replace("ss", nn(o)) : l += o * 1e3,
    e.includes("S")) {
        const i = nn(l, 3);
        e.includes("SSS") ? e = e.replace("SSS", i) : e.includes("SS") ? e = e.replace("SS", i.slice(0, 2)) : e = e.replace("S", i.charAt(0))
    }
    return e
}
const [e1,t1] = q("count-down")
  , n1 = {
    time: ge(0),
    format: re("HH:mm:ss"),
    autoStart: X,
    millisecond: Boolean
};
var a1 = K({
    name: e1,
    props: n1,
    emits: ["change", "finish"],
    setup(e, {emit: t, slots: n}) {
        const {start: a, pause: r, reset: o, current: l} = xC({
            time: +e.time,
            millisecond: e.millisecond,
            onChange: c=>t("change", c),
            onFinish: ()=>t("finish")
        })
          , i = F(()=>Qx(e.format, l.value))
          , s = ()=>{
            o(+e.time),
            e.autoStart && a()
        }
        ;
        return se(()=>e.time, s, {
            immediate: !0
        }),
        De({
            start: a,
            pause: r,
            reset: s
        }),
        ()=>h("div", {
            role: "timer",
            class: t1()
        }, [n.default ? n.default(l.value) : i.value])
    }
});
const o1 = oe(a1);
function _d(e) {
    const t = new Date(e * 1e3);
    return `${t.getFullYear()}.${nn(t.getMonth() + 1)}.${nn(t.getDate())}`
}
const r1 = e=>(e / 10).toFixed(e % 10 === 0 ? 0 : 1)
  , wd = e=>(e / 100).toFixed(e % 100 === 0 ? 0 : e % 10 === 0 ? 1 : 2)
  , [l1,mn,qi] = q("coupon");
var i1 = K({
    name: l1,
    props: {
        chosen: Boolean,
        coupon: ft(Object),
        disabled: Boolean,
        currency: re("¥")
    },
    setup(e) {
        const t = F(()=>{
            const {startAt: r, endAt: o} = e.coupon;
            return `${_d(r)} - ${_d(o)}`
        }
        )
          , n = F(()=>{
            const {coupon: r, currency: o} = e;
            if (r.valueDesc)
                return [r.valueDesc, h("span", null, [r.unitDesc || ""])];
            if (r.denominations) {
                const l = wd(r.denominations);
                return [h("span", null, [o]), ` ${l}`]
            }
            return r.discount ? qi("discount", r1(r.discount)) : ""
        }
        )
          , a = F(()=>{
            const r = wd(e.coupon.originCondition || 0);
            return r === "0" ? qi("unlimited") : qi("condition", r)
        }
        );
        return ()=>{
            const {chosen: r, coupon: o, disabled: l} = e
              , i = l && o.reason || o.description;
            return h("div", {
                class: mn({
                    disabled: l
                })
            }, [h("div", {
                class: mn("content")
            }, [h("div", {
                class: mn("head")
            }, [h("h2", {
                class: mn("amount")
            }, [n.value]), h("p", {
                class: mn("condition")
            }, [o.condition || a.value])]), h("div", {
                class: mn("body")
            }, [h("p", {
                class: mn("name")
            }, [o.name]), h("p", {
                class: mn("valid")
            }, [t.value]), !l && h(Yc, {
                class: mn("corner"),
                modelValue: r
            }, null)])]), i && h("p", {
                class: mn("description")
            }, [i])])
        }
    }
});
const Ks = oe(i1)
  , [s1,Cd,Xs] = q("coupon-cell")
  , c1 = {
    title: String,
    border: X,
    editable: X,
    coupons: Ke(),
    currency: re("¥"),
    chosenCoupon: {
        type: [Number, Array],
        default: -1
    }
}
  , u1 = e=>{
    const {value: t, denominations: n} = e;
    return $e(t) ? t : $e(n) ? n : 0
}
;
function f1({coupons: e, chosenCoupon: t, currency: n}) {
    let a = 0
      , r = !1;
    return (Array.isArray(t) ? t : [t]).forEach(o=>{
        const l = e[+o];
        l && (r = !0,
        a += u1(l))
    }
    ),
    r ? `-${n} ${(a / 100).toFixed(2)}` : e.length === 0 ? Xs("noCoupon") : Xs("count", e.length)
}
var d1 = K({
    name: s1,
    props: c1,
    setup(e) {
        return ()=>{
            const t = Array.isArray(e.chosenCoupon) ? e.chosenCoupon.length : e.coupons[+e.chosenCoupon];
            return h(Jt, {
                class: Cd(),
                value: f1(e),
                title: e.title || Xs("title"),
                border: e.border,
                isLink: e.editable,
                valueClass: Cd("value", {
                    selected: t
                })
            }, null)
        }
    }
});
const h1 = oe(d1)
  , [m1,el] = q("empty")
  , g1 = {
    image: re("default"),
    imageSize: [Number, String, Array],
    description: String
};
var v1 = K({
    name: m1,
    props: g1,
    setup(e, {slots: t}) {
        const n = ()=>{
            const C = t.description ? t.description() : e.description;
            if (C)
                return h("p", {
                    class: el("description")
                }, [C])
        }
          , a = ()=>{
            if (t.default)
                return h("div", {
                    class: el("bottom")
                }, [t.default()])
        }
          , r = Vo()
          , o = C=>`${r}-${C}`
          , l = C=>`url(#${o(C)})`
          , i = (C,g,v)=>h("stop", {
            "stop-color": C,
            offset: `${g}%`,
            "stop-opacity": v
        }, null)
          , s = (C,g)=>[i(C, 0), i(g, 100)]
          , c = C=>[h("defs", null, [h("radialGradient", {
            id: o(C),
            cx: "50%",
            cy: "54%",
            fx: "50%",
            fy: "54%",
            r: "297%",
            gradientTransform: "matrix(-.16 0 0 -.33 .58 .72)"
        }, [i("#EBEDF0", 0), i("#F2F3F5", 100, .3)])]), h("ellipse", {
            fill: l(C),
            opacity: ".8",
            cx: "80",
            cy: "140",
            rx: "46",
            ry: "8"
        }, null)]
          , u = ()=>[h("defs", null, [h("linearGradient", {
            id: o("a"),
            x1: "64%",
            y1: "100%",
            x2: "64%"
        }, [i("#FFF", 0, .5), i("#F2F3F5", 100)])]), h("g", {
            opacity: ".8"
        }, [h("path", {
            d: "M36 131V53H16v20H2v58h34z",
            fill: l("a")
        }, null), h("path", {
            d: "M123 15h22v14h9v77h-31V15z",
            fill: l("a")
        }, null)])]
          , f = ()=>[h("defs", null, [h("linearGradient", {
            id: o("b"),
            x1: "64%",
            y1: "97%",
            x2: "64%",
            y2: "0%"
        }, [i("#F2F3F5", 0, .3), i("#F2F3F5", 100)])]), h("g", {
            opacity: ".8"
        }, [h("path", {
            d: "M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z",
            fill: l("b")
        }, null), h("path", {
            d: "M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z",
            fill: l("b")
        }, null)])]
          , d = ()=>h("svg", {
            viewBox: "0 0 160 160"
        }, [h("defs", null, [h("linearGradient", {
            id: o(1),
            x1: "64%",
            y1: "100%",
            x2: "64%"
        }, [i("#FFF", 0, .5), i("#F2F3F5", 100)]), h("linearGradient", {
            id: o(2),
            x1: "50%",
            x2: "50%",
            y2: "84%"
        }, [i("#EBEDF0", 0), i("#DCDEE0", 100, 0)]), h("linearGradient", {
            id: o(3),
            x1: "100%",
            x2: "100%",
            y2: "100%"
        }, [s("#EAEDF0", "#DCDEE0")]), h("radialGradient", {
            id: o(4),
            cx: "50%",
            cy: "0%",
            fx: "50%",
            fy: "0%",
            r: "100%",
            gradientTransform: "matrix(0 1 -.54 0 .5 -.5)"
        }, [i("#EBEDF0", 0), i("#FFF", 100, 0)])]), h("g", {
            fill: "none"
        }, [u(), h("path", {
            fill: l(4),
            d: "M0 139h160v21H0z"
        }, null), h("path", {
            d: "M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",
            fill: l(2)
        }, null), h("g", {
            opacity: ".6",
            "stroke-linecap": "round",
            "stroke-width": "7"
        }, [h("path", {
            d: "M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13",
            stroke: l(3)
        }, null), h("path", {
            d: "M53 36a34 34 0 0 0 0 48",
            stroke: l(3)
        }, null), h("path", {
            d: "M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13",
            stroke: l(3)
        }, null), h("path", {
            d: "M106 84a34 34 0 0 0 0-48",
            stroke: l(3)
        }, null)]), h("g", {
            transform: "translate(31 105)"
        }, [h("rect", {
            fill: "#EBEDF0",
            width: "98",
            height: "34",
            rx: "2"
        }, null), h("rect", {
            fill: "#FFF",
            x: "9",
            y: "8",
            width: "80",
            height: "18",
            rx: "1.1"
        }, null), h("rect", {
            fill: "#EBEDF0",
            x: "15",
            y: "12",
            width: "18",
            height: "6",
            rx: "1.1"
        }, null)])])])
          , m = ()=>h("svg", {
            viewBox: "0 0 160 160"
        }, [h("defs", null, [h("linearGradient", {
            x1: "50%",
            x2: "50%",
            y2: "100%",
            id: o(5)
        }, [s("#F2F3F5", "#DCDEE0")]), h("linearGradient", {
            x1: "95%",
            y1: "48%",
            x2: "5.5%",
            y2: "51%",
            id: o(6)
        }, [s("#EAEDF1", "#DCDEE0")]), h("linearGradient", {
            y1: "45%",
            x2: "100%",
            y2: "54%",
            id: o(7)
        }, [s("#EAEDF1", "#DCDEE0")])]), u(), f(), h("g", {
            transform: "translate(36 50)",
            fill: "none"
        }, [h("g", {
            transform: "translate(8)"
        }, [h("rect", {
            fill: "#EBEDF0",
            opacity: ".6",
            x: "38",
            y: "13",
            width: "36",
            height: "53",
            rx: "2"
        }, null), h("rect", {
            fill: l(5),
            width: "64",
            height: "66",
            rx: "2"
        }, null), h("rect", {
            fill: "#FFF",
            x: "6",
            y: "6",
            width: "52",
            height: "55",
            rx: "1"
        }, null), h("g", {
            transform: "translate(15 17)",
            fill: l(6)
        }, [h("rect", {
            width: "34",
            height: "6",
            rx: "1"
        }, null), h("path", {
            d: "M0 14h34v6H0z"
        }, null), h("rect", {
            y: "28",
            width: "34",
            height: "6",
            rx: "1"
        }, null)])]), h("rect", {
            fill: l(7),
            y: "61",
            width: "88",
            height: "28",
            rx: "1"
        }, null), h("rect", {
            fill: "#F7F8FA",
            x: "29",
            y: "72",
            width: "30",
            height: "6",
            rx: "1"
        }, null)])])
          , y = ()=>h("svg", {
            viewBox: "0 0 160 160"
        }, [h("defs", null, [h("linearGradient", {
            x1: "50%",
            x2: "50%",
            y2: "100%",
            id: o(8)
        }, [s("#EAEDF1", "#DCDEE0")])]), u(), f(), c("c"), h("path", {
            d: "m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z",
            fill: l(8)
        }, null)])
          , w = ()=>h("svg", {
            viewBox: "0 0 160 160"
        }, [h("defs", null, [h("linearGradient", {
            x1: "50%",
            y1: "100%",
            x2: "50%",
            id: o(9)
        }, [s("#EEE", "#D8D8D8")]), h("linearGradient", {
            x1: "100%",
            y1: "50%",
            y2: "50%",
            id: o(10)
        }, [s("#F2F3F5", "#DCDEE0")]), h("linearGradient", {
            x1: "50%",
            x2: "50%",
            y2: "100%",
            id: o(11)
        }, [s("#F2F3F5", "#DCDEE0")]), h("linearGradient", {
            x1: "50%",
            x2: "50%",
            y2: "100%",
            id: o(12)
        }, [s("#FFF", "#F7F8FA")])]), u(), f(), c("d"), h("g", {
            transform: "rotate(-45 113 -4)",
            fill: "none"
        }, [h("rect", {
            fill: l(9),
            x: "24",
            y: "52.8",
            width: "5.8",
            height: "19",
            rx: "1"
        }, null), h("rect", {
            fill: l(10),
            x: "22.1",
            y: "67.3",
            width: "9.9",
            height: "28",
            rx: "1"
        }, null), h("circle", {
            stroke: l(11),
            "stroke-width": "8",
            cx: "27",
            cy: "27",
            r: "27"
        }, null), h("circle", {
            fill: l(12),
            cx: "27",
            cy: "27",
            r: "16"
        }, null), h("path", {
            d: "M37 7c-8 0-15 5-16 12",
            stroke: l(11),
            "stroke-width": "3",
            opacity: ".5",
            "stroke-linecap": "round",
            transform: "rotate(45 29 13)"
        }, null)])])
          , p = ()=>{
            var C;
            if (t.image)
                return t.image();
            const g = {
                error: y,
                search: w,
                network: d,
                default: m
            };
            return ((C = g[e.image]) == null ? void 0 : C.call(g)) || h("img", {
                src: e.image
            }, null)
        }
        ;
        return ()=>h("div", {
            class: el()
        }, [h("div", {
            class: el("image"),
            style: zn(e.imageSize)
        }, [p()]), n(), a()])
    }
});
const fv = oe(v1)
  , [b1,gn,no] = q("coupon-list")
  , y1 = {
    code: re(""),
    coupons: Ke(),
    currency: re("¥"),
    showCount: X,
    emptyImage: String,
    enabledTitle: String,
    disabledTitle: String,
    disabledCoupons: Ke(),
    showExchangeBar: X,
    showCloseButton: X,
    closeButtonText: String,
    inputPlaceholder: String,
    exchangeMinLength: at(1),
    exchangeButtonText: String,
    displayedCouponIndex: at(-1),
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    chosenCoupon: {
        type: [Number, Array],
        default: -1
    }
};
var p1 = K({
    name: b1,
    props: y1,
    emits: ["change", "exchange", "update:code"],
    setup(e, {emit: t, slots: n}) {
        const [a,r] = Rr()
          , o = V()
          , l = V()
          , i = V(0)
          , s = V(0)
          , c = V(e.code)
          , u = F(()=>!e.exchangeButtonLoading && (e.exchangeButtonDisabled || !c.value || c.value.length < e.exchangeMinLength))
          , f = ()=>{
            const v = Fe(o).height
              , b = Fe(l).height + 44;
            s.value = (v > b ? v : Kt.value) - b
        }
          , d = ()=>{
            t("exchange", c.value),
            e.code || (c.value = "")
        }
          , m = g=>{
            Oe(()=>{
                var v;
                return (v = a.value[g]) == null ? void 0 : v.scrollIntoView()
            }
            )
        }
          , y = ()=>h(fv, {
            image: e.emptyImage
        }, {
            default: ()=>[h("p", {
                class: gn("empty-tip")
            }, [no("noCoupon")])]
        })
          , w = ()=>{
            if (e.showExchangeBar)
                return h("div", {
                    ref: l,
                    class: gn("exchange-bar")
                }, [h(Nn, {
                    modelValue: c.value,
                    "onUpdate:modelValue": g=>c.value = g,
                    clearable: !0,
                    border: !1,
                    class: gn("field"),
                    placeholder: e.inputPlaceholder || no("placeholder"),
                    maxlength: "20"
                }, null), h(pt, {
                    plain: !0,
                    type: "primary",
                    class: gn("exchange"),
                    text: e.exchangeButtonText || no("exchange"),
                    loading: e.exchangeButtonLoading,
                    disabled: u.value,
                    onClick: d
                }, null)])
        }
          , p = ()=>{
            const {coupons: g, chosenCoupon: v} = e
              , b = e.showCount ? ` (${g.length})` : ""
              , _ = (e.enabledTitle || no("enable")) + b
              , S = (A=[],E=0)=>A.includes(E) ? A.filter(T=>T !== E) : [...A, E];
            return h(Tr, {
                title: _
            }, {
                default: ()=>{
                    var A;
                    return [h("div", {
                        class: gn("list", {
                            "with-bottom": e.showCloseButton
                        }),
                        style: {
                            height: `${s.value}px`
                        }
                    }, [g.map((E,T)=>h(Ks, {
                        key: E.id,
                        ref: r(T),
                        coupon: E,
                        chosen: Array.isArray(v) ? v.includes(T) : T === v,
                        currency: e.currency,
                        onClick: ()=>t("change", Array.isArray(v) ? S(v, T) : T)
                    }, null)), !g.length && y(), (A = n["list-footer"]) == null ? void 0 : A.call(n)])]
                }
            })
        }
          , C = ()=>{
            const {disabledCoupons: g} = e
              , v = e.showCount ? ` (${g.length})` : ""
              , b = (e.disabledTitle || no("disabled")) + v;
            return h(Tr, {
                title: b
            }, {
                default: ()=>{
                    var _;
                    return [h("div", {
                        class: gn("list", {
                            "with-bottom": e.showCloseButton
                        }),
                        style: {
                            height: `${s.value}px`
                        }
                    }, [g.map(S=>h(Ks, {
                        disabled: !0,
                        key: S.id,
                        coupon: S,
                        currency: e.currency
                    }, null)), !g.length && y(), (_ = n["disabled-list-footer"]) == null ? void 0 : _.call(n)])]
                }
            })
        }
        ;
        return se(()=>e.code, g=>{
            c.value = g
        }
        ),
        se(Kt, f),
        se(c, g=>t("update:code", g)),
        se(()=>e.displayedCouponIndex, m),
        Qe(()=>{
            f(),
            m(e.displayedCouponIndex)
        }
        ),
        ()=>h("div", {
            ref: o,
            class: gn()
        }, [w(), h(hi, {
            active: i.value,
            "onUpdate:active": g=>i.value = g,
            class: gn("tab")
        }, {
            default: ()=>[p(), C()]
        }), h("div", {
            class: gn("bottom")
        }, [n["list-button"] ? n["list-button"]() : st(h(pt, {
            round: !0,
            block: !0,
            type: "primary",
            class: gn("close"),
            text: e.closeButtonText || no("close"),
            onClick: ()=>t("change", Array.isArray(e.chosenCoupon) ? [] : -1)
        }, null), [[dt, e.showCloseButton]])])])
    }
});
const _1 = oe(p1)
  , Sd = new Date().getFullYear()
  , [w1] = q("date-picker")
  , C1 = _e({}, nv, {
    columnsType: {
        type: Array,
        default: ()=>["year", "month", "day"]
    },
    minDate: {
        type: Date,
        default: ()=>new Date(Sd - 10,0,1),
        validator: Sr
    },
    maxDate: {
        type: Date,
        default: ()=>new Date(Sd + 10,11,31),
        validator: Sr
    }
});
var S1 = K({
    name: w1,
    props: C1,
    emits: ["confirm", "cancel", "change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const a = V(e.modelValue)
          , r = V(!1)
          , o = V()
          , l = ()=>{
            const b = e.minDate.getFullYear()
              , _ = e.maxDate.getFullYear();
            return _o(b, _, "year", e.formatter, e.filter)
        }
          , i = b=>b === e.minDate.getFullYear()
          , s = b=>b === e.maxDate.getFullYear()
          , c = b=>b === e.minDate.getMonth() + 1
          , u = b=>b === e.maxDate.getMonth() + 1
          , f = b=>{
            const {minDate: _, columnsType: S} = e
              , A = S.indexOf(b)
              , E = r.value ? e.modelValue[A] : a.value[A];
            if (E)
                return +E;
            switch (b) {
            case "year":
                return _.getFullYear();
            case "month":
                return _.getMonth() + 1;
            case "day":
                return _.getDate()
            }
        }
          , d = ()=>{
            const b = f("year")
              , _ = i(b) ? e.minDate.getMonth() + 1 : 1
              , S = s(b) ? e.maxDate.getMonth() + 1 : 12;
            return _o(_, S, "month", e.formatter, e.filter)
        }
          , m = ()=>{
            const b = f("year")
              , _ = f("month")
              , S = i(b) && c(_) ? e.minDate.getDate() : 1
              , A = s(b) && u(_) ? e.maxDate.getDate() : ov(b, _);
            return _o(S, A, "day", e.formatter, e.filter)
        }
          , y = ()=>{
            var b;
            return (b = o.value) == null ? void 0 : b.confirm()
        }
          , w = ()=>a.value
          , p = F(()=>e.columnsType.map(b=>{
            switch (b) {
            case "year":
                return l();
            case "month":
                return d();
            case "day":
                return m();
            default:
                return []
            }
        }
        ));
        se(a, b=>{
            pn(b, e.modelValue) || t("update:modelValue", b)
        }
        ),
        se(()=>e.modelValue, (b,_)=>{
            r.value = pn(_, a.value),
            b = rv(b, p.value),
            pn(b, a.value) || (a.value = b),
            r.value = !1
        }
        , {
            immediate: !0
        });
        const C = (...b)=>t("change", ...b)
          , g = (...b)=>t("cancel", ...b)
          , v = (...b)=>t("confirm", ...b);
        return De({
            confirm: y,
            getSelectedDate: w
        }),
        ()=>h(gi, Re({
            ref: o,
            modelValue: a.value,
            "onUpdate:modelValue": b=>a.value = b,
            columns: p.value,
            onChange: C,
            onCancel: g,
            onConfirm: v
        }, Me(e, av)), n)
    }
});
const E1 = oe(S1)
  , [T1,Qt,tl] = q("dialog")
  , x1 = _e({}, Fo, {
    title: String,
    theme: String,
    width: te,
    message: [String, Function],
    callback: Function,
    allowHtml: Boolean,
    className: Ze,
    transition: re("van-dialog-bounce"),
    messageAlign: String,
    closeOnPopstate: X,
    showCancelButton: Boolean,
    cancelButtonText: String,
    cancelButtonColor: String,
    cancelButtonDisabled: Boolean,
    confirmButtonText: String,
    confirmButtonColor: String,
    confirmButtonDisabled: Boolean,
    showConfirmButton: X,
    closeOnClickOverlay: Boolean
})
  , k1 = [...Mc, "transition", "closeOnPopstate"];
var I1 = K({
    name: T1,
    props: x1,
    emits: ["confirm", "cancel", "keydown", "update:show"],
    setup(e, {emit: t, slots: n}) {
        const a = V()
          , r = Ge({
            confirm: !1,
            cancel: !1
        })
          , o = C=>t("update:show", C)
          , l = C=>{
            var g;
            o(!1),
            (g = e.callback) == null || g.call(e, C)
        }
          , i = C=>()=>{
            e.show && (t(C),
            e.beforeClose ? (r[C] = !0,
            Ca(e.beforeClose, {
                args: [C],
                done() {
                    l(C),
                    r[C] = !1
                },
                canceled() {
                    r[C] = !1
                }
            })) : l(C))
        }
          , s = i("cancel")
          , c = i("confirm")
          , u = vp(C=>{
            var g, v;
            if (C.target !== ((v = (g = a.value) == null ? void 0 : g.popupRef) == null ? void 0 : v.value))
                return;
            ({
                Enter: e.showConfirmButton ? c : Ns,
                Escape: e.showCancelButton ? s : Ns
            })[C.key](),
            t("keydown", C)
        }
        , ["enter", "esc"])
          , f = ()=>{
            const C = n.title ? n.title() : e.title;
            if (C)
                return h("div", {
                    class: Qt("header", {
                        isolated: !e.message && !n.default
                    })
                }, [C])
        }
          , d = C=>{
            const {message: g, allowHtml: v, messageAlign: b} = e
              , _ = Qt("message", {
                "has-title": C,
                [b]: b
            })
              , S = Ao(g) ? g() : g;
            return v && typeof S == "string" ? h("div", {
                class: _,
                innerHTML: S
            }, null) : h("div", {
                class: _
            }, [S])
        }
          , m = ()=>{
            if (n.default)
                return h("div", {
                    class: Qt("content")
                }, [n.default()]);
            const {title: C, message: g, allowHtml: v} = e;
            if (g) {
                const b = !!(C || n.title);
                return h("div", {
                    key: v ? 1 : 0,
                    class: Qt("content", {
                        isolated: !b
                    })
                }, [d(b)])
            }
        }
          , y = ()=>h("div", {
            class: [hg, Qt("footer")]
        }, [e.showCancelButton && h(pt, {
            size: "large",
            text: e.cancelButtonText || tl("cancel"),
            class: Qt("cancel"),
            style: {
                color: e.cancelButtonColor
            },
            loading: r.cancel,
            disabled: e.cancelButtonDisabled,
            onClick: s
        }, null), e.showConfirmButton && h(pt, {
            size: "large",
            text: e.confirmButtonText || tl("confirm"),
            class: [Qt("confirm"), {
                [mg]: e.showCancelButton
            }],
            style: {
                color: e.confirmButtonColor
            },
            loading: r.confirm,
            disabled: e.confirmButtonDisabled,
            onClick: c
        }, null)])
          , w = ()=>h(_g, {
            class: Qt("footer")
        }, {
            default: ()=>[e.showCancelButton && h(Us, {
                type: "warning",
                text: e.cancelButtonText || tl("cancel"),
                class: Qt("cancel"),
                color: e.cancelButtonColor,
                loading: r.cancel,
                disabled: e.cancelButtonDisabled,
                onClick: s
            }, null), e.showConfirmButton && h(Us, {
                type: "danger",
                text: e.confirmButtonText || tl("confirm"),
                class: Qt("confirm"),
                color: e.confirmButtonColor,
                loading: r.confirm,
                disabled: e.confirmButtonDisabled,
                onClick: c
            }, null)]
        })
          , p = ()=>n.footer ? n.footer() : e.theme === "round-button" ? w() : y();
        return ()=>{
            const {width: C, title: g, theme: v, message: b, className: _} = e;
            return h(fn, Re({
                ref: a,
                role: "dialog",
                class: [Qt([v]), _],
                style: {
                    width: Ae(C)
                },
                tabindex: 0,
                "aria-labelledby": g || b,
                onKeydown: u,
                "onUpdate:show": o
            }, Me(e, k1)), {
                default: ()=>[f(), m(), p()]
            })
        }
    }
});
const A1 = oe(I1)
  , [O1,P1] = q("divider")
  , R1 = {
    dashed: Boolean,
    hairline: X,
    vertical: Boolean,
    contentPosition: re("center")
};
var L1 = K({
    name: O1,
    props: R1,
    setup(e, {slots: t}) {
        return ()=>{
            var n;
            return h("div", {
                role: "separator",
                class: P1({
                    dashed: e.dashed,
                    hairline: e.hairline,
                    vertical: e.vertical,
                    [`content-${e.contentPosition}`]: !!t.default && !e.vertical
                })
            }, [!e.vertical && ((n = t.default) == null ? void 0 : n.call(t))])
        }
    }
});
const D1 = oe(L1)
  , [dv,nl] = q("dropdown-menu")
  , $1 = {
    overlay: X,
    zIndex: te,
    duration: ge(.2),
    direction: re("down"),
    activeColor: String,
    autoLocate: Boolean,
    closeOnClickOutside: X,
    closeOnClickOverlay: X,
    swipeThreshold: te
}
  , hv = Symbol(dv);
var N1 = K({
    name: dv,
    props: $1,
    setup(e, {slots: t}) {
        const n = Vo()
          , a = V()
          , r = V()
          , o = V(0)
          , {children: l, linkChildren: i} = xt(hv)
          , s = Bo(a)
          , c = F(()=>l.some(g=>g.state.showWrapper))
          , u = F(()=>e.swipeThreshold && l.length > +e.swipeThreshold)
          , f = F(()=>{
            if (c.value && $e(e.zIndex))
                return {
                    zIndex: +e.zIndex + 1
                }
        }
        )
          , d = ()=>{
            l.forEach(g=>{
                g.toggle(!1)
            }
            )
        }
          , m = ()=>{
            e.closeOnClickOutside && d()
        }
          , y = ()=>{
            if (r.value) {
                const g = Fe(r);
                e.direction === "down" ? o.value = g.bottom : o.value = Kt.value - g.top
            }
        }
          , w = ()=>{
            c.value && y()
        }
          , p = g=>{
            l.forEach((v,b)=>{
                b === g ? v.toggle() : v.state.showPopup && v.toggle(!1, {
                    immediate: !0
                })
            }
            )
        }
          , C = (g,v)=>{
            const {showPopup: b} = g.state
              , {disabled: _, titleClass: S} = g;
            return h("div", {
                id: `${n}-${v}`,
                role: "button",
                tabindex: _ ? void 0 : 0,
                class: [nl("item", {
                    disabled: _,
                    grow: u.value
                }), {
                    [Tt]: !_
                }],
                onClick: ()=>{
                    _ || p(v)
                }
            }, [h("span", {
                class: [nl("title", {
                    down: b === (e.direction === "down"),
                    active: b
                }), S],
                style: {
                    color: b ? e.activeColor : ""
                }
            }, [h("div", {
                class: "van-ellipsis"
            }, [g.renderTitle()])])])
        }
        ;
        return De({
            close: d
        }),
        i({
            id: n,
            props: e,
            offset: o,
            updateOffset: y
        }),
        li(a, m),
        tt("scroll", w, {
            target: s,
            passive: !0
        }),
        ()=>{
            var g;
            return h("div", {
                ref: a,
                class: nl()
            }, [h("div", {
                ref: r,
                style: f.value,
                class: nl("bar", {
                    opened: c.value,
                    scrollable: u.value
                })
            }, [l.map(C)]), (g = t.default) == null ? void 0 : g.call(t)])
        }
    }
});
const [M1,al] = q("dropdown-item")
  , B1 = {
    title: String,
    options: Ke(),
    disabled: Boolean,
    teleport: [String, Object],
    lazyRender: X,
    modelValue: Ze,
    titleClass: Ze
};
var F1 = K({
    name: M1,
    inheritAttrs: !1,
    props: B1,
    emits: ["open", "opened", "close", "closed", "change", "update:modelValue"],
    setup(e, {emit: t, slots: n, attrs: a}) {
        const r = Ge({
            showPopup: !1,
            transition: !0,
            showWrapper: !1
        })
          , o = V()
          , {parent: l, index: i} = _t(hv);
        if (!l)
            return;
        const s = g=>()=>t(g)
          , c = s("open")
          , u = s("close")
          , f = s("opened")
          , d = ()=>{
            r.showWrapper = !1,
            t("closed")
        }
          , m = g=>{
            e.teleport && g.stopPropagation()
        }
          , y = (g=!r.showPopup,v={})=>{
            g !== r.showPopup && (r.showPopup = g,
            r.transition = !v.immediate,
            g && (l.updateOffset(),
            r.showWrapper = !0))
        }
          , w = ()=>{
            if (n.title)
                return n.title();
            if (e.title)
                return e.title;
            const g = e.options.find(v=>v.value === e.modelValue);
            return g ? g.text : ""
        }
          , p = g=>{
            const {activeColor: v} = l.props
              , {disabled: b} = g
              , _ = g.value === e.modelValue
              , S = ()=>{
                b || (r.showPopup = !1,
                g.value !== e.modelValue && (t("update:modelValue", g.value),
                t("change", g.value)))
            }
              , A = ()=>{
                if (_)
                    return h(Ie, {
                        class: al("icon"),
                        color: b ? void 0 : v,
                        name: "success"
                    }, null)
            }
            ;
            return h(Jt, {
                role: "menuitem",
                key: String(g.value),
                icon: g.icon,
                title: g.text,
                class: al("option", {
                    active: _,
                    disabled: b
                }),
                style: {
                    color: _ ? v : ""
                },
                tabindex: _ ? 0 : -1,
                clickable: !b,
                onClick: S
            }, {
                value: A
            })
        }
          , C = ()=>{
            const {offset: g} = l
              , {autoLocate: v, zIndex: b, overlay: _, duration: S, direction: A, closeOnClickOverlay: E} = l.props
              , T = Yn(b);
            let D = g.value;
            if (v && o.value) {
                const k = LC(o.value);
                k && (D -= Fe(k).top)
            }
            return A === "down" ? T.top = `${D}px` : T.bottom = `${D}px`,
            st(h("div", Re({
                ref: o,
                style: T,
                class: al([A]),
                onClick: m
            }, a), [h(fn, {
                show: r.showPopup,
                "onUpdate:show": k=>r.showPopup = k,
                role: "menu",
                class: al("content"),
                overlay: _,
                position: A === "down" ? "top" : "bottom",
                duration: r.transition ? S : 0,
                lazyRender: e.lazyRender,
                overlayStyle: {
                    position: "absolute"
                },
                "aria-labelledby": `${l.id}-${i.value}`,
                closeOnClickOverlay: E,
                onOpen: c,
                onClose: u,
                onOpened: f,
                onClosed: d
            }, {
                default: ()=>{
                    var k;
                    return [e.options.map(p), (k = n.default) == null ? void 0 : k.call(n)]
                }
            })]), [[dt, r.showWrapper]])
        }
        ;
        return De({
            state: r,
            toggle: y,
            renderTitle: w
        }),
        ()=>e.teleport ? h(ja, {
            to: e.teleport
        }, {
            default: ()=>[C()]
        }) : C()
    }
});
const V1 = oe(F1)
  , H1 = oe(N1)
  , U1 = {
    gap: at(24),
    icon: String,
    axis: re("y"),
    magnetic: String,
    offset: {
        type: Object,
        default: ()=>({
            x: -1,
            y: -1
        })
    },
    teleport: {
        type: [String, Object],
        default: "body"
    }
}
  , [W1,Ed] = q("floating-bubble");
var j1 = K({
    name: W1,
    inheritAttrs: !1,
    props: U1,
    emits: ["click", "update:offset", "offsetChange"],
    setup(e, {slots: t, emit: n, attrs: a}) {
        const r = V()
          , o = V({
            x: 0,
            y: 0,
            width: 0,
            height: 0
        })
          , l = F(()=>({
            top: e.gap,
            right: on.value - o.value.width - e.gap,
            bottom: Kt.value - o.value.height - e.gap,
            left: e.gap
        }))
          , i = V(!1);
        let s = !1;
        const c = F(()=>{
            const v = {}
              , b = Ae(o.value.x)
              , _ = Ae(o.value.y);
            return v.transform = `translate3d(${b}, ${_}, 0)`,
            (i.value || !s) && (v.transition = "none"),
            v
        }
        )
          , u = ()=>{
            if (!g.value)
                return;
            const {width: v, height: b} = Fe(r.value)
              , {offset: _} = e;
            o.value = {
                x: _.x > -1 ? _.x : on.value - v - e.gap,
                y: _.y > -1 ? _.y : Kt.value - b - e.gap,
                width: v,
                height: b
            }
        }
          , f = qt();
        let d = 0
          , m = 0;
        const y = v=>{
            f.start(v),
            i.value = !0,
            d = o.value.x,
            m = o.value.y
        }
        ;
        tt("touchmove", v=>{
            if (v.preventDefault(),
            f.move(v),
            e.axis !== "lock" && !f.isTap.value) {
                if (e.axis === "x" || e.axis === "xy") {
                    let _ = d + f.deltaX.value;
                    _ < l.value.left && (_ = l.value.left),
                    _ > l.value.right && (_ = l.value.right),
                    o.value.x = _
                }
                if (e.axis === "y" || e.axis === "xy") {
                    let _ = m + f.deltaY.value;
                    _ < l.value.top && (_ = l.value.top),
                    _ > l.value.bottom && (_ = l.value.bottom),
                    o.value.y = _
                }
                const b = Me(o.value, ["x", "y"]);
                n("update:offset", b)
            }
        }
        , {
            target: r
        });
        const p = ()=>{
            i.value = !1,
            Oe(()=>{
                if (e.magnetic === "x") {
                    const v = Ll([l.value.left, l.value.right], o.value.x);
                    o.value.x = v
                }
                if (e.magnetic === "y") {
                    const v = Ll([l.value.top, l.value.bottom], o.value.y);
                    o.value.y = v
                }
                if (!f.isTap.value) {
                    const v = Me(o.value, ["x", "y"]);
                    n("update:offset", v),
                    (d !== v.x || m !== v.y) && n("offsetChange", v)
                }
            }
            )
        }
          , C = v=>{
            f.isTap.value ? n("click", v) : v.stopPropagation()
        }
        ;
        Qe(()=>{
            u(),
            Oe(()=>{
                s = !0
            }
            )
        }
        ),
        se([on, Kt, ()=>e.gap, ()=>e.offset], u, {
            deep: !0
        });
        const g = V(!0);
        return wn(()=>{
            g.value = !0
        }
        ),
        Cn(()=>{
            e.teleport && (g.value = !1)
        }
        ),
        ()=>{
            const v = st(h("div", Re({
                class: Ed(),
                ref: r,
                onTouchstartPassive: y,
                onTouchend: p,
                onTouchcancel: p,
                onClickCapture: C,
                style: c.value
            }, a), [t.default ? t.default() : h(uS, {
                name: e.icon,
                class: Ed("icon")
            }, null)]), [[dt, g.value]]);
            return e.teleport ? h(ja, {
                to: e.teleport
            }, {
                default: ()=>[v]
            }) : v
        }
    }
});
const z1 = oe(j1)
  , Y1 = {
    height: ge(0),
    anchors: Ke(),
    duration: ge(.3),
    contentDraggable: X,
    lockScroll: Boolean,
    safeAreaInsetBottom: X
}
  , [G1,ol] = q("floating-panel");
var K1 = K({
    name: G1,
    props: Y1,
    emits: ["heightChange", "update:height"],
    setup(e, {emit: t, slots: n}) {
        const r = V()
          , o = V()
          , l = Fc(()=>+e.height, v=>t("update:height", v))
          , i = F(()=>{
            var v, b;
            return {
                min: (v = e.anchors[0]) != null ? v : 100,
                max: (b = e.anchors[e.anchors.length - 1]) != null ? b : Math.round(Kt.value * .6)
            }
        }
        )
          , s = F(()=>e.anchors.length >= 2 ? e.anchors : [i.value.min, i.value.max])
          , c = V(!1)
          , u = F(()=>({
            height: Ae(i.value.max),
            transform: `translateY(calc(100% + ${Ae(-l.value)}))`,
            transition: c.value ? "none" : `transform ${e.duration}s cubic-bezier(0.18, 0.89, 0.32, 1.28)`
        }))
          , f = v=>{
            const b = Math.abs(v)
              , {min: _, max: S} = i.value;
            return b > S ? -(S + (b - S) * .2) : b < _ ? -(_ - (_ - b) * .2) : v
        }
        ;
        let d, m = -1;
        const y = qt()
          , w = v=>{
            y.start(v),
            c.value = !0,
            d = -l.value,
            m = -1
        }
          , p = v=>{
            var b;
            y.move(v);
            const _ = v.target;
            if (o.value === _ || (b = o.value) != null && b.contains(_)) {
                const {scrollTop: A} = o.value;
                if (m = Math.max(m, A),
                !e.contentDraggable)
                    return;
                if (-d < i.value.max)
                    je(v, !0);
                else if (!(A <= 0 && y.deltaY.value > 0) || m > 0)
                    return
            }
            const S = y.deltaY.value + d;
            l.value = -f(S)
        }
          , C = ()=>{
            m = -1,
            c.value = !1,
            l.value = Ll(s.value, l.value),
            l.value !== -d && t("heightChange", {
                height: l.value
            })
        }
        ;
        se(i, ()=>{
            l.value = Ll(s.value, l.value)
        }
        , {
            immediate: !0
        }),
        Tg(r, ()=>e.lockScroll || c.value),
        tt("touchmove", p, {
            target: r
        });
        const g = ()=>n.header ? n.header() : h("div", {
            class: ol("header")
        }, [h("div", {
            class: ol("header-bar")
        }, null)]);
        return ()=>{
            var v;
            return h("div", {
                class: [ol(), {
                    "van-safe-area-bottom": e.safeAreaInsetBottom
                }],
                ref: r,
                style: u.value,
                onTouchstartPassive: w,
                onTouchend: C,
                onTouchcancel: C
            }, [g(), h("div", {
                class: ol("content"),
                ref: o
            }, [(v = n.default) == null ? void 0 : v.call(n)])])
        }
    }
});
const X1 = oe(K1)
  , [mv,q1] = q("grid")
  , J1 = {
    square: Boolean,
    center: X,
    border: X,
    gutter: te,
    reverse: Boolean,
    iconSize: te,
    direction: String,
    clickable: Boolean,
    columnNum: ge(4)
}
  , gv = Symbol(mv);
var Z1 = K({
    name: mv,
    props: J1,
    setup(e, {slots: t}) {
        const {linkChildren: n} = xt(gv);
        return n({
            props: e
        }),
        ()=>{
            var a;
            return h("div", {
                style: {
                    paddingLeft: Ae(e.gutter)
                },
                class: [q1(), {
                    [hg]: e.border && !e.gutter
                }]
            }, [(a = t.default) == null ? void 0 : a.call(t)])
        }
    }
});
const Q1 = oe(Z1)
  , [ek,rl] = q("grid-item")
  , tk = _e({}, Sa, {
    dot: Boolean,
    text: String,
    icon: String,
    badge: te,
    iconColor: String,
    iconPrefix: String,
    badgeProps: Object
});
var nk = K({
    name: ek,
    props: tk,
    setup(e, {slots: t}) {
        const {parent: n, index: a} = _t(gv)
          , r = za();
        if (!n)
            return;
        const o = F(()=>{
            const {square: u, gutter: f, columnNum: d} = n.props
              , m = `${100 / +d}%`
              , y = {
                flexBasis: m
            };
            if (u)
                y.paddingTop = m;
            else if (f) {
                const w = Ae(f);
                y.paddingRight = w,
                a.value >= +d && (y.marginTop = w)
            }
            return y
        }
        )
          , l = F(()=>{
            const {square: u, gutter: f} = n.props;
            if (u && f) {
                const d = Ae(f);
                return {
                    right: d,
                    bottom: d,
                    height: "auto"
                }
            }
        }
        )
          , i = ()=>{
            if (t.icon)
                return h(Ya, Re({
                    dot: e.dot,
                    content: e.badge
                }, e.badgeProps), {
                    default: t.icon
                });
            if (e.icon)
                return h(Ie, {
                    dot: e.dot,
                    name: e.icon,
                    size: n.props.iconSize,
                    badge: e.badge,
                    class: rl("icon"),
                    color: e.iconColor,
                    badgeProps: e.badgeProps,
                    classPrefix: e.iconPrefix
                }, null)
        }
          , s = ()=>{
            if (t.text)
                return t.text();
            if (e.text)
                return h("span", {
                    class: rl("text")
                }, [e.text])
        }
          , c = ()=>t.default ? t.default() : [i(), s()];
        return ()=>{
            const {center: u, border: f, square: d, gutter: m, reverse: y, direction: w, clickable: p} = n.props
              , C = [rl("content", [w, {
                center: u,
                square: d,
                reverse: y,
                clickable: p,
                surround: f && m
            }]), {
                [Gn]: f
            }];
            return h("div", {
                class: [rl({
                    square: d
                })],
                style: o.value
            }, [h("div", {
                role: p ? "button" : void 0,
                class: C,
                style: l.value,
                tabindex: p ? 0 : void 0,
                onClick: r
            }, [c()])])
        }
    }
});
const ak = oe(nk)
  , [ok,Td] = q("highlight")
  , rk = {
    autoEscape: X,
    caseSensitive: Boolean,
    highlightClass: String,
    highlightTag: re("span"),
    keywords: ft([String, Array]),
    sourceString: re(""),
    tag: re("div"),
    unhighlightClass: String,
    unhighlightTag: re("span")
};
var lk = K({
    name: ok,
    props: rk,
    setup(e) {
        const t = F(()=>{
            const {autoEscape: a, caseSensitive: r, keywords: o, sourceString: l} = e
              , i = r ? "g" : "gi";
            let c = (Array.isArray(o) ? o : [o]).filter(f=>f).reduce((f,d)=>{
                a && (d = d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
                const m = new RegExp(d,i);
                let y;
                for (; y = m.exec(l); ) {
                    const w = y.index
                      , p = m.lastIndex;
                    if (w >= p) {
                        m.lastIndex++;
                        continue
                    }
                    f.push({
                        start: w,
                        end: p,
                        highlight: !0
                    })
                }
                return f
            }
            , []);
            c = c.sort((f,d)=>f.start - d.start).reduce((f,d)=>{
                const m = f[f.length - 1];
                if (!m || d.start > m.end) {
                    const y = m ? m.end : 0
                      , w = d.start;
                    y !== w && f.push({
                        start: y,
                        end: w,
                        highlight: !1
                    }),
                    f.push(d)
                } else
                    m.end = Math.max(m.end, d.end);
                return f
            }
            , []);
            const u = c[c.length - 1];
            return u || c.push({
                start: 0,
                end: l.length,
                highlight: !1
            }),
            u && u.end < l.length && c.push({
                start: u.end,
                end: l.length,
                highlight: !1
            }),
            c
        }
        )
          , n = ()=>{
            const {sourceString: a, highlightClass: r, unhighlightClass: o, highlightTag: l, unhighlightTag: i} = e;
            return t.value.map(s=>{
                const {start: c, end: u, highlight: f} = s
                  , d = a.slice(c, u);
                return f ? h(l, {
                    class: [Td("tag"), r]
                }, {
                    default: ()=>[d]
                }) : h(i, {
                    class: o
                }, {
                    default: ()=>[d]
                })
            }
            )
        }
        ;
        return ()=>{
            const {tag: a} = e;
            return h(a, {
                class: Td()
            }, {
                default: ()=>[n()]
            })
        }
    }
});
const ik = oe(lk)
  , xd = e=>Math.sqrt((e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2)
  , sk = e=>({
    x: (e[0].clientX + e[1].clientX) / 2,
    y: (e[0].clientY + e[1].clientY) / 2
})
  , Ji = q("image-preview")[1]
  , kd = 2.6
  , ck = {
    src: String,
    show: Boolean,
    active: Number,
    minZoom: ft(te),
    maxZoom: ft(te),
    rootWidth: ft(Number),
    rootHeight: ft(Number),
    disableZoom: Boolean,
    doubleScale: Boolean,
    closeOnClickImage: Boolean,
    closeOnClickOverlay: Boolean,
    vertical: Boolean
};
var uk = K({
    props: ck,
    emits: ["scale", "close", "longPress"],
    setup(e, {emit: t, slots: n}) {
        const a = Ge({
            scale: 1,
            moveX: 0,
            moveY: 0,
            moving: !1,
            zooming: !1,
            initializing: !1,
            imageRatio: 0
        })
          , r = qt()
          , o = V()
          , l = V()
          , i = V(!1)
          , s = V(!1);
        let c = 0;
        const u = F(()=>{
            const {scale: j, moveX: ee, moveY: ue, moving: Te, zooming: Pe, initializing: H} = a
              , J = {
                transitionDuration: Pe || Te || H ? "0s" : ".3s"
            };
            return (j !== 1 || s.value) && (J.transform = `matrix(${j}, 0, 0, ${j}, ${ee}, ${ue})`),
            J
        }
        )
          , f = F(()=>{
            if (a.imageRatio) {
                const {rootWidth: j, rootHeight: ee} = e
                  , ue = i.value ? ee / a.imageRatio : j;
                return Math.max(0, (a.scale * ue - j) / 2)
            }
            return 0
        }
        )
          , d = F(()=>{
            if (a.imageRatio) {
                const {rootWidth: j, rootHeight: ee} = e
                  , ue = i.value ? ee : j * a.imageRatio;
                return Math.max(0, (a.scale * ue - ee) / 2)
            }
            return 0
        }
        )
          , m = (j,ee)=>{
            var ue;
            if (j = vt(j, +e.minZoom, +e.maxZoom + 1),
            j !== a.scale) {
                const Te = j / a.scale;
                if (a.scale = j,
                ee) {
                    const Pe = Fe((ue = o.value) == null ? void 0 : ue.$el)
                      , H = {
                        x: Pe.width * .5,
                        y: Pe.height * .5
                    }
                      , J = a.moveX - (ee.x - Pe.left - H.x) * (Te - 1)
                      , he = a.moveY - (ee.y - Pe.top - H.y) * (Te - 1);
                    a.moveX = vt(J, -f.value, f.value),
                    a.moveY = vt(he, -d.value, d.value)
                } else
                    a.moveX = 0,
                    a.moveY = s.value ? c : 0;
                t("scale", {
                    scale: j,
                    index: e.active
                })
            }
        }
          , y = ()=>{
            m(1)
        }
          , w = ()=>{
            const j = a.scale > 1 ? 1 : 2;
            m(j, j === 2 || s.value ? {
                x: r.startX.value,
                y: r.startY.value
            } : void 0)
        }
        ;
        let p, C, g, v, b, _, S, A, E = !1;
        const T = j=>{
            const {touches: ee} = j;
            if (p = ee.length,
            p === 2 && e.disableZoom)
                return;
            const {offsetX: ue} = r;
            r.start(j),
            C = a.moveX,
            g = a.moveY,
            A = Date.now(),
            E = !1,
            a.moving = p === 1 && (a.scale !== 1 || s.value),
            a.zooming = p === 2 && !ue.value,
            a.zooming && (v = a.scale,
            b = xd(ee))
        }
          , D = j=>{
            const {touches: ee} = j;
            if (r.move(j),
            a.moving) {
                const {deltaX: ue, deltaY: Te} = r
                  , Pe = ue.value + C
                  , H = Te.value + g;
                if ((e.vertical ? r.isVertical() && Math.abs(H) > d.value : r.isHorizontal() && Math.abs(Pe) > f.value) && !E) {
                    a.moving = !1;
                    return
                }
                E = !0,
                je(j, !0),
                a.moveX = vt(Pe, -f.value, f.value),
                a.moveY = vt(H, -d.value, d.value)
            }
            if (a.zooming && (je(j, !0),
            ee.length === 2)) {
                const ue = xd(ee)
                  , Te = v * ue / b;
                _ = sk(ee),
                m(Te, _)
            }
        }
          , k = j=>{
            var ee;
            const ue = (ee = l.value) == null ? void 0 : ee.$el;
            if (!ue)
                return;
            const Te = ue.firstElementChild
              , Pe = j.target === ue
              , H = Te == null ? void 0 : Te.contains(j.target);
            !e.closeOnClickImage && H || !e.closeOnClickOverlay && Pe || t("close")
        }
          , O = j=>{
            if (p > 1)
                return;
            const ee = Date.now() - A
              , ue = 250;
            r.isTap.value && (ee < ue ? e.doubleScale ? S ? (clearTimeout(S),
            S = null,
            w()) : S = setTimeout(()=>{
                k(j),
                S = null
            }
            , ue) : k(j) : ee > vg && t("longPress"))
        }
          , N = j=>{
            let ee = !1;
            if ((a.moving || a.zooming) && (ee = !0,
            a.moving && C === a.moveX && g === a.moveY && (ee = !1),
            !j.touches.length)) {
                a.zooming && (a.moveX = vt(a.moveX, -f.value, f.value),
                a.moveY = vt(a.moveY, -d.value, d.value),
                a.zooming = !1),
                a.moving = !1,
                C = 0,
                g = 0,
                v = 1,
                a.scale < 1 && y();
                const ue = +e.maxZoom;
                a.scale > ue && m(ue, _)
            }
            je(j, ee),
            O(j),
            r.reset()
        }
          , Z = ()=>{
            const {rootWidth: j, rootHeight: ee} = e
              , ue = ee / j
              , {imageRatio: Te} = a;
            i.value = a.imageRatio > ue && Te < kd,
            s.value = a.imageRatio > ue && Te >= kd,
            s.value && (c = (Te * j - ee) / 2,
            a.moveY = c,
            a.initializing = !0,
            Et(()=>{
                a.initializing = !1
            }
            )),
            y()
        }
          , ce = j=>{
            const {naturalWidth: ee, naturalHeight: ue} = j.target;
            a.imageRatio = ue / ee,
            Z()
        }
        ;
        return se(()=>e.active, y),
        se(()=>e.show, j=>{
            j || y()
        }
        ),
        se(()=>[e.rootWidth, e.rootHeight], Z),
        tt("touchmove", D, {
            target: F(()=>{
                var j;
                return (j = l.value) == null ? void 0 : j.$el
            }
            )
        }),
        De({
            resetScale: y
        }),
        ()=>{
            const j = {
                loading: ()=>h(un, {
                    type: "spinner"
                }, null)
            };
            return h(di, {
                ref: l,
                class: Ji("swipe-item"),
                onTouchstartPassive: T,
                onTouchend: N,
                onTouchcancel: N
            }, {
                default: ()=>[n.image ? h("div", {
                    class: Ji("image-wrap")
                }, [n.image({
                    src: e.src,
                    onLoad: ce,
                    style: u.value
                })]) : h(yi, {
                    ref: o,
                    src: e.src,
                    fit: "contain",
                    class: Ji("image", {
                        vertical: i.value
                    }),
                    style: u.value,
                    onLoad: ce
                }, j)]
            })
        }
    }
});
const [fk,ao] = q("image-preview")
  , dk = ["show", "teleport", "transition", "overlayStyle", "closeOnPopstate"]
  , hk = {
    show: Boolean,
    loop: X,
    images: Ke(),
    minZoom: ge(1 / 3),
    maxZoom: ge(3),
    overlay: X,
    vertical: Boolean,
    closeable: Boolean,
    showIndex: X,
    className: Ze,
    closeIcon: re("clear"),
    transition: String,
    beforeClose: Function,
    doubleScale: X,
    overlayClass: Ze,
    overlayStyle: Object,
    swipeDuration: ge(300),
    startPosition: ge(0),
    showIndicators: Boolean,
    closeOnPopstate: X,
    closeOnClickImage: X,
    closeOnClickOverlay: X,
    closeIconPosition: re("top-right"),
    teleport: [String, Object]
};
var vv = K({
    name: fk,
    props: hk,
    emits: ["scale", "close", "closed", "change", "longPress", "update:show"],
    setup(e, {emit: t, slots: n}) {
        const a = V()
          , r = V()
          , o = Ge({
            active: 0,
            rootWidth: 0,
            rootHeight: 0,
            disableZoom: !1
        })
          , l = ()=>{
            if (a.value) {
                const v = Fe(a.value.$el);
                o.rootWidth = v.width,
                o.rootHeight = v.height,
                a.value.resize()
            }
        }
          , i = v=>t("scale", v)
          , s = v=>t("update:show", v)
          , c = ()=>{
            Ca(e.beforeClose, {
                args: [o.active],
                done: ()=>s(!1)
            })
        }
          , u = v=>{
            v !== o.active && (o.active = v,
            t("change", v))
        }
          , f = ()=>{
            if (e.showIndex)
                return h("div", {
                    class: ao("index")
                }, [n.index ? n.index({
                    index: o.active
                }) : `${o.active + 1} / ${e.images.length}`])
        }
          , d = ()=>{
            if (n.cover)
                return h("div", {
                    class: ao("cover")
                }, [n.cover()])
        }
          , m = ()=>{
            o.disableZoom = !0
        }
          , y = ()=>{
            o.disableZoom = !1
        }
          , w = ()=>h(fi, {
            ref: a,
            lazyRender: !0,
            loop: e.loop,
            class: ao("swipe"),
            vertical: e.vertical,
            duration: e.swipeDuration,
            initialSwipe: e.startPosition,
            showIndicators: e.showIndicators,
            indicatorColor: "white",
            onChange: u,
            onDragEnd: y,
            onDragStart: m
        }, {
            default: ()=>[e.images.map((v,b)=>h(uk, {
                ref: _=>{
                    b === o.active && (r.value = _)
                }
                ,
                src: v,
                show: e.show,
                active: o.active,
                maxZoom: e.maxZoom,
                minZoom: e.minZoom,
                rootWidth: o.rootWidth,
                rootHeight: o.rootHeight,
                disableZoom: o.disableZoom,
                doubleScale: e.doubleScale,
                closeOnClickImage: e.closeOnClickImage,
                closeOnClickOverlay: e.closeOnClickOverlay,
                vertical: e.vertical,
                onScale: i,
                onClose: c,
                onLongPress: ()=>t("longPress", {
                    index: b
                })
            }, {
                image: n.image
            }))]
        })
          , p = ()=>{
            if (e.closeable)
                return h(Ie, {
                    role: "button",
                    name: e.closeIcon,
                    class: [ao("close-icon", e.closeIconPosition), Tt],
                    onClick: c
                }, null)
        }
          , C = ()=>t("closed")
          , g = (v,b)=>{
            var _;
            return (_ = a.value) == null ? void 0 : _.swipeTo(v, b)
        }
        ;
        return De({
            resetScale: ()=>{
                var v;
                (v = r.value) == null || v.resetScale()
            }
            ,
            swipeTo: g
        }),
        Qe(l),
        se([on, Kt], l),
        se(()=>e.startPosition, v=>u(+v)),
        se(()=>e.show, v=>{
            const {images: b, startPosition: _} = e;
            v ? (u(+_),
            Oe(()=>{
                l(),
                g(+_, {
                    immediate: !0
                })
            }
            )) : t("close", {
                index: o.active,
                url: b[o.active]
            })
        }
        ),
        ()=>h(fn, Re({
            class: [ao(), e.className],
            overlayClass: [ao("overlay"), e.overlayClass],
            onClosed: C,
            "onUpdate:show": s
        }, Me(e, dk)), {
            default: ()=>[p(), w(), f(), d()]
        })
    }
});
let bl;
const mk = {
    loop: !0,
    images: [],
    maxZoom: 3,
    minZoom: 1 / 3,
    onScale: void 0,
    onClose: void 0,
    onChange: void 0,
    vertical: !1,
    teleport: "body",
    className: "",
    showIndex: !0,
    closeable: !1,
    closeIcon: "clear",
    transition: void 0,
    beforeClose: void 0,
    doubleScale: !0,
    overlayStyle: void 0,
    overlayClass: void 0,
    startPosition: 0,
    swipeDuration: 300,
    showIndicators: !1,
    closeOnPopstate: !0,
    closeOnClickOverlay: !0,
    closeIconPosition: "top-right"
};
function gk() {
    ({instance: bl} = Yg({
        setup() {
            const {state: e, toggle: t} = zg()
              , n = ()=>{
                e.images = []
            }
            ;
            return ()=>h(vv, Re(e, {
                onClosed: n,
                "onUpdate:show": t
            }), null)
        }
    }))
}
const vk = (e,t=0)=>{
    if (Xt)
        return bl || gk(),
        e = Array.isArray(e) ? {
            images: e,
            startPosition: t
        } : e,
        bl.open(_e({}, mk, e)),
        bl
}
  , bk = oe(vv);
function yk() {
    return Array(26).fill("").map((n,a)=>String.fromCharCode(65 + a))
}
const [bv,Zi] = q("index-bar")
  , pk = {
    sticky: X,
    zIndex: te,
    teleport: [String, Object],
    highlightColor: String,
    stickyOffsetTop: at(0),
    indexList: {
        type: Array,
        default: yk
    }
}
  , yv = Symbol(bv);
var _k = K({
    name: bv,
    props: pk,
    emits: ["select", "change"],
    setup(e, {emit: t, slots: n}) {
        const a = V()
          , r = V()
          , o = V("")
          , l = qt()
          , i = Bo(a)
          , {children: s, linkChildren: c} = xt(yv);
        let u;
        c({
            props: e
        });
        const f = F(()=>{
            if ($e(e.zIndex))
                return {
                    zIndex: +e.zIndex + 1
                }
        }
        )
          , d = F(()=>{
            if (e.highlightColor)
                return {
                    color: e.highlightColor
                }
        }
        )
          , m = (E,T)=>{
            for (let D = s.length - 1; D >= 0; D--) {
                const k = D > 0 ? T[D - 1].height : 0
                  , O = e.sticky ? k + e.stickyOffsetTop : 0;
                if (E + O >= T[D].top)
                    return D
            }
            return -1
        }
          , y = E=>s.find(T=>String(T.index) === E)
          , w = ()=>{
            if (Ua(a))
                return;
            const {sticky: E, indexList: T} = e
              , D = Vn(i.value)
              , k = Fe(i)
              , O = s.map(Z=>Z.getRect(i.value, k));
            let N = -1;
            if (u) {
                const Z = y(u);
                if (Z) {
                    const ce = Z.getRect(i.value, k);
                    e.sticky && e.stickyOffsetTop ? N = m(ce.top - e.stickyOffsetTop, O) : N = m(ce.top, O)
                }
            } else
                N = m(D, O);
            o.value = T[N],
            E && s.forEach((Z,ce)=>{
                const {state: j, $el: ee} = Z;
                if (ce === N || ce === N - 1) {
                    const ue = ee.getBoundingClientRect();
                    j.left = ue.left,
                    j.width = ue.width
                } else
                    j.left = null,
                    j.width = null;
                if (ce === N)
                    j.active = !0,
                    j.top = Math.max(e.stickyOffsetTop, O[ce].top - D) + k.top;
                else if (ce === N - 1 && u === "") {
                    const ue = O[N].top - D;
                    j.active = ue > 0,
                    j.top = ue + k.top - O[ce].height
                } else
                    j.active = !1
            }
            ),
            u = ""
        }
          , p = ()=>{
            Oe(w)
        }
        ;
        tt("scroll", w, {
            target: i,
            passive: !0
        }),
        Qe(p),
        se(()=>e.indexList, p),
        se(o, E=>{
            E && t("change", E)
        }
        );
        const C = ()=>e.indexList.map(E=>{
            const T = E === o.value;
            return h("span", {
                class: Zi("index", {
                    active: T
                }),
                style: T ? d.value : void 0,
                "data-index": E
            }, [E])
        }
        )
          , g = E=>{
            u = String(E);
            const T = y(u);
            if (T) {
                const D = Vn(i.value)
                  , k = Fe(i)
                  , {offsetHeight: O} = document.documentElement;
                if (T.$el.scrollIntoView(),
                D === O - k.height) {
                    w();
                    return
                }
                e.sticky && e.stickyOffsetTop && (Fa() === O - k.height ? Er(Fa()) : Er(Fa() - e.stickyOffsetTop)),
                t("select", T.index)
            }
        }
          , v = E=>{
            const {index: T} = E.dataset;
            T && g(T)
        }
          , b = E=>{
            v(E.target)
        }
        ;
        let _;
        const S = E=>{
            if (l.move(E),
            l.isVertical()) {
                je(E);
                const {clientX: T, clientY: D} = E.touches[0]
                  , k = document.elementFromPoint(T, D);
                if (k) {
                    const {index: O} = k.dataset;
                    O && _ !== O && (_ = O,
                    v(k))
                }
            }
        }
          , A = ()=>h("div", {
            ref: r,
            class: Zi("sidebar"),
            style: f.value,
            onClick: b,
            onTouchstartPassive: l.start
        }, [C()]);
        return De({
            scrollTo: g
        }),
        tt("touchmove", S, {
            target: r
        }),
        ()=>{
            var E;
            return h("div", {
                ref: a,
                class: Zi()
            }, [e.teleport ? h(ja, {
                to: e.teleport
            }, {
                default: ()=>[A()]
            }) : A(), (E = n.default) == null ? void 0 : E.call(n)])
        }
    }
});
const [wk,Ck] = q("index-anchor")
  , Sk = {
    index: te
};
var Ek = K({
    name: wk,
    props: Sk,
    setup(e, {slots: t}) {
        const n = Ge({
            top: 0,
            left: null,
            rect: {
                top: 0,
                height: 0
            },
            width: null,
            active: !1
        })
          , a = V()
          , {parent: r} = _t(yv);
        if (!r)
            return;
        const o = ()=>n.active && r.props.sticky
          , l = F(()=>{
            const {zIndex: s, highlightColor: c} = r.props;
            if (o())
                return _e(Yn(s), {
                    left: n.left ? `${n.left}px` : void 0,
                    width: n.width ? `${n.width}px` : void 0,
                    transform: n.top ? `translate3d(0, ${n.top}px, 0)` : void 0,
                    color: c
                })
        }
        );
        return De({
            state: n,
            getRect: (s,c)=>{
                const u = Fe(a);
                return n.rect.height = u.height,
                s === window || s === document.body ? n.rect.top = u.top + Fa() : n.rect.top = u.top + Vn(s) - c.top,
                n.rect
            }
        }),
        ()=>{
            const s = o();
            return h("div", {
                ref: a,
                style: {
                    height: s ? `${n.rect.height}px` : void 0
                }
            }, [h("div", {
                style: l.value,
                class: [Ck({
                    sticky: s
                }), {
                    [$c]: s
                }]
            }, [t.default ? t.default() : e.index])])
        }
    }
});
const Tk = oe(Ek)
  , xk = oe(_k)
  , [kk,oo,Ik] = q("list")
  , Ak = {
    error: Boolean,
    offset: ge(300),
    loading: Boolean,
    disabled: Boolean,
    finished: Boolean,
    scroller: Object,
    errorText: String,
    direction: re("down"),
    loadingText: String,
    finishedText: String,
    immediateCheck: X
};
var Ok = K({
    name: kk,
    props: Ak,
    emits: ["load", "update:error", "update:loading"],
    setup(e, {emit: t, slots: n}) {
        const a = V(e.loading)
          , r = V()
          , o = V()
          , l = sE()
          , i = Bo(r)
          , s = F(()=>e.scroller || i.value)
          , c = ()=>{
            Oe(()=>{
                if (a.value || e.finished || e.disabled || e.error || (l == null ? void 0 : l.value) === !1)
                    return;
                const {direction: y} = e
                  , w = +e.offset
                  , p = Fe(s);
                if (!p.height || Ua(r))
                    return;
                let C = !1;
                const g = Fe(o);
                y === "up" ? C = p.top - g.top <= w : C = g.bottom - p.bottom <= w,
                C && (a.value = !0,
                t("update:loading", !0),
                t("load"))
            }
            )
        }
          , u = ()=>{
            if (e.finished) {
                const y = n.finished ? n.finished() : e.finishedText;
                if (y)
                    return h("div", {
                        class: oo("finished-text")
                    }, [y])
            }
        }
          , f = ()=>{
            t("update:error", !1),
            c()
        }
          , d = ()=>{
            if (e.error) {
                const y = n.error ? n.error() : e.errorText;
                if (y)
                    return h("div", {
                        role: "button",
                        class: oo("error-text"),
                        tabindex: 0,
                        onClick: f
                    }, [y])
            }
        }
          , m = ()=>{
            if (a.value && !e.finished && !e.disabled)
                return h("div", {
                    class: oo("loading")
                }, [n.loading ? n.loading() : h(un, {
                    class: oo("loading-icon")
                }, {
                    default: ()=>[e.loadingText || Ik("loading")]
                })])
        }
        ;
        return se(()=>[e.loading, e.finished, e.error], c),
        l && se(l, y=>{
            y && c()
        }
        ),
        mc(()=>{
            a.value = e.loading
        }
        ),
        Qe(()=>{
            e.immediateCheck && c()
        }
        ),
        De({
            check: c
        }),
        tt("scroll", c, {
            target: s,
            passive: !0
        }),
        ()=>{
            var y;
            const w = (y = n.default) == null ? void 0 : y.call(n)
              , p = h("div", {
                ref: o,
                class: oo("placeholder")
            }, null);
            return h("div", {
                ref: r,
                role: "feed",
                class: oo(),
                "aria-busy": a.value
            }, [e.direction === "down" ? w : p, m(), u(), d(), e.direction === "up" ? w : p])
        }
    }
});
const Pk = oe(Ok)
  , [Rk,An] = q("nav-bar")
  , Lk = {
    title: String,
    fixed: Boolean,
    zIndex: te,
    border: X,
    leftText: String,
    rightText: String,
    leftDisabled: Boolean,
    rightDisabled: Boolean,
    leftArrow: Boolean,
    placeholder: Boolean,
    safeAreaInsetTop: Boolean,
    clickable: X
};
var Dk = K({
    name: Rk,
    props: Lk,
    emits: ["clickLeft", "clickRight"],
    setup(e, {emit: t, slots: n}) {
        const a = V()
          , r = ci(a, An)
          , o = u=>{
            e.leftDisabled || t("clickLeft", u)
        }
          , l = u=>{
            e.rightDisabled || t("clickRight", u)
        }
          , i = ()=>n.left ? n.left() : [e.leftArrow && h(Ie, {
            class: An("arrow"),
            name: "arrow-left"
        }, null), e.leftText && h("span", {
            class: An("text")
        }, [e.leftText])]
          , s = ()=>n.right ? n.right() : h("span", {
            class: An("text")
        }, [e.rightText])
          , c = ()=>{
            const {title: u, fixed: f, border: d, zIndex: m} = e
              , y = Yn(m)
              , w = e.leftArrow || e.leftText || n.left
              , p = e.rightText || n.right;
            return h("div", {
                ref: a,
                style: y,
                class: [An({
                    fixed: f
                }), {
                    [$c]: d,
                    "van-safe-area-top": e.safeAreaInsetTop
                }]
            }, [h("div", {
                class: An("content")
            }, [w && h("div", {
                class: [An("left", {
                    disabled: e.leftDisabled
                }), e.clickable && !e.leftDisabled ? Tt : ""],
                onClick: o
            }, [i()]), h("div", {
                class: [An("title"), "van-ellipsis"]
            }, [n.title ? n.title() : u]), p && h("div", {
                class: [An("right", {
                    disabled: e.rightDisabled
                }), e.clickable && !e.rightDisabled ? Tt : ""],
                onClick: l
            }, [s()])])])
        }
        ;
        return ()=>e.fixed && e.placeholder ? r(c) : c()
    }
});
const $k = oe(Dk)
  , [Nk,qo] = q("notice-bar")
  , Mk = {
    text: String,
    mode: String,
    color: String,
    delay: ge(1),
    speed: ge(60),
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    scrollable: {
        type: Boolean,
        default: null
    }
};
var Bk = K({
    name: Nk,
    props: Mk,
    emits: ["close", "replay"],
    setup(e, {emit: t, slots: n}) {
        let a = 0, r = 0, o;
        const l = V()
          , i = V()
          , s = Ge({
            show: !0,
            offset: 0,
            duration: 0
        })
          , c = ()=>{
            if (n["left-icon"])
                return n["left-icon"]();
            if (e.leftIcon)
                return h(Ie, {
                    class: qo("left-icon"),
                    name: e.leftIcon
                }, null)
        }
          , u = ()=>{
            if (e.mode === "closeable")
                return "cross";
            if (e.mode === "link")
                return "arrow"
        }
          , f = p=>{
            e.mode === "closeable" && (s.show = !1,
            t("close", p))
        }
          , d = ()=>{
            if (n["right-icon"])
                return n["right-icon"]();
            const p = u();
            if (p)
                return h(Ie, {
                    name: p,
                    class: qo("right-icon"),
                    onClick: f
                }, null)
        }
          , m = ()=>{
            s.offset = a,
            s.duration = 0,
            Et(()=>{
                fa(()=>{
                    s.offset = -r,
                    s.duration = (r + a) / +e.speed,
                    t("replay")
                }
                )
            }
            )
        }
          , y = ()=>{
            const p = e.scrollable === !1 && !e.wrapable
              , C = {
                transform: s.offset ? `translateX(${s.offset}px)` : "",
                transitionDuration: `${s.duration}s`
            };
            return h("div", {
                ref: l,
                role: "marquee",
                class: qo("wrap")
            }, [h("div", {
                ref: i,
                style: C,
                class: [qo("content"), {
                    "van-ellipsis": p
                }],
                onTransitionend: m
            }, [n.default ? n.default() : e.text])])
        }
          , w = ()=>{
            const {delay: p, speed: C, scrollable: g} = e
              , v = $e(p) ? +p * 1e3 : 0;
            a = 0,
            r = 0,
            s.offset = 0,
            s.duration = 0,
            clearTimeout(o),
            o = setTimeout(()=>{
                if (!l.value || !i.value || g === !1)
                    return;
                const b = Fe(l).width
                  , _ = Fe(i).width;
                (g || _ > b) && fa(()=>{
                    a = b,
                    r = _,
                    s.offset = -r,
                    s.duration = r / +C
                }
                )
            }
            , v)
        }
        ;
        return si(w),
        Mo(w),
        tt("pageshow", w),
        De({
            reset: w
        }),
        se(()=>[e.text, e.scrollable], w),
        ()=>{
            const {color: p, wrapable: C, background: g} = e;
            return st(h("div", {
                role: "alert",
                class: qo({
                    wrapable: C
                }),
                style: {
                    color: p,
                    background: g
                }
            }, [c(), y(), d()]), [[dt, s.show]])
        }
    }
});
const Fk = oe(Bk)
  , [Vk,Hk] = q("notify")
  , Uk = ["lockScroll", "position", "show", "teleport", "zIndex"]
  , Wk = _e({}, Fo, {
    type: re("danger"),
    color: String,
    message: te,
    position: re("top"),
    className: Ze,
    background: String,
    lockScroll: Boolean
});
var jk = K({
    name: Vk,
    props: Wk,
    emits: ["update:show"],
    setup(e, {emit: t, slots: n}) {
        const a = r=>t("update:show", r);
        return ()=>h(fn, Re({
            class: [Hk([e.type]), e.className],
            style: {
                color: e.color,
                background: e.background
            },
            overlay: !1,
            duration: .2,
            "onUpdate:show": a
        }, Me(e, Uk)), {
            default: ()=>[n.default ? n.default() : e.message]
        })
    }
});
const zk = oe(jk)
  , [Yk,fr] = q("key")
  , Gk = h("svg", {
    class: fr("collapse-icon"),
    viewBox: "0 0 30 24"
}, [h("path", {
    d: "M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",
    fill: "currentColor"
}, null)])
  , Kk = h("svg", {
    class: fr("delete-icon"),
    viewBox: "0 0 32 22"
}, [h("path", {
    d: "M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",
    fill: "currentColor"
}, null)]);
var Qi = K({
    name: Yk,
    props: {
        type: String,
        text: te,
        color: String,
        wider: Boolean,
        large: Boolean,
        loading: Boolean
    },
    emits: ["press"],
    setup(e, {emit: t, slots: n}) {
        const a = V(!1)
          , r = qt()
          , o = c=>{
            r.start(c),
            a.value = !0
        }
          , l = c=>{
            r.move(c),
            r.direction.value && (a.value = !1)
        }
          , i = c=>{
            a.value && (n.default || je(c),
            a.value = !1,
            t("press", e.text, e.type))
        }
          , s = ()=>{
            if (e.loading)
                return h(un, {
                    class: fr("loading-icon")
                }, null);
            const c = n.default ? n.default() : e.text;
            switch (e.type) {
            case "delete":
                return c || Kk;
            case "extra":
                return c || Gk;
            default:
                return c
            }
        }
        ;
        return ()=>h("div", {
            class: fr("wrapper", {
                wider: e.wider
            }),
            onTouchstartPassive: o,
            onTouchmovePassive: l,
            onTouchend: i,
            onTouchcancel: i
        }, [h("div", {
            role: "button",
            tabindex: 0,
            class: fr([e.color, {
                large: e.large,
                active: a.value,
                delete: e.type === "delete"
            }])
        }, [s()])])
    }
});
const [Xk,ta] = q("number-keyboard")
  , qk = {
    show: Boolean,
    title: String,
    theme: re("default"),
    zIndex: te,
    teleport: [String, Object],
    maxlength: ge(1 / 0),
    modelValue: re(""),
    transition: X,
    blurOnClose: X,
    showDeleteKey: X,
    randomKeyOrder: Boolean,
    closeButtonText: String,
    deleteButtonText: String,
    closeButtonLoading: Boolean,
    hideOnClickOutside: X,
    safeAreaInsetBottom: X,
    extraKey: {
        type: [String, Array],
        default: ""
    }
};
function Jk(e) {
    for (let t = e.length - 1; t > 0; t--) {
        const n = Math.floor(Math.random() * (t + 1))
          , a = e[t];
        e[t] = e[n],
        e[n] = a
    }
    return e
}
var Zk = K({
    name: Xk,
    inheritAttrs: !1,
    props: qk,
    emits: ["show", "hide", "blur", "input", "close", "delete", "update:modelValue"],
    setup(e, {emit: t, slots: n, attrs: a}) {
        const r = V()
          , o = ()=>{
            const p = Array(9).fill("").map((C,g)=>({
                text: g + 1
            }));
            return e.randomKeyOrder && Jk(p),
            p
        }
          , l = ()=>[...o(), {
            text: e.extraKey,
            type: "extra"
        }, {
            text: 0
        }, {
            text: e.showDeleteKey ? e.deleteButtonText : "",
            type: e.showDeleteKey ? "delete" : ""
        }]
          , i = ()=>{
            const p = o()
              , {extraKey: C} = e
              , g = Array.isArray(C) ? C : [C];
            return g.length === 1 ? p.push({
                text: 0,
                wider: !0
            }, {
                text: g[0],
                type: "extra"
            }) : g.length === 2 && p.push({
                text: g[0],
                type: "extra"
            }, {
                text: 0
            }, {
                text: g[1],
                type: "extra"
            }),
            p
        }
          , s = F(()=>e.theme === "custom" ? i() : l())
          , c = ()=>{
            e.show && t("blur")
        }
          , u = ()=>{
            t("close"),
            e.blurOnClose && c()
        }
          , f = ()=>t(e.show ? "show" : "hide")
          , d = (p,C)=>{
            if (p === "") {
                C === "extra" && c();
                return
            }
            const g = e.modelValue;
            C === "delete" ? (t("delete"),
            t("update:modelValue", g.slice(0, g.length - 1))) : C === "close" ? u() : g.length < +e.maxlength && (t("input", p),
            t("update:modelValue", g + p))
        }
          , m = ()=>{
            const {title: p, theme: C, closeButtonText: g} = e
              , v = n["title-left"]
              , b = g && C === "default";
            if (p || b || v)
                return h("div", {
                    class: ta("header")
                }, [v && h("span", {
                    class: ta("title-left")
                }, [v()]), p && h("h2", {
                    class: ta("title")
                }, [p]), b && h("button", {
                    type: "button",
                    class: [ta("close"), Tt],
                    onClick: u
                }, [g])])
        }
          , y = ()=>s.value.map(p=>{
            const C = {};
            return p.type === "delete" && (C.default = n.delete),
            p.type === "extra" && (C.default = n["extra-key"]),
            h(Qi, {
                key: p.text,
                text: p.text,
                type: p.type,
                wider: p.wider,
                color: p.color,
                onPress: d
            }, C)
        }
        )
          , w = ()=>{
            if (e.theme === "custom")
                return h("div", {
                    class: ta("sidebar")
                }, [e.showDeleteKey && h(Qi, {
                    large: !0,
                    text: e.deleteButtonText,
                    type: "delete",
                    onPress: d
                }, {
                    default: n.delete
                }), h(Qi, {
                    large: !0,
                    text: e.closeButtonText,
                    type: "close",
                    color: "blue",
                    loading: e.closeButtonLoading,
                    onPress: d
                }, null)])
        }
        ;
        return se(()=>e.show, p=>{
            e.transition || t(p ? "show" : "hide")
        }
        ),
        e.hideOnClickOutside && li(r, c, {
            eventName: "touchstart"
        }),
        ()=>{
            const p = m()
              , C = h($o, {
                name: e.transition ? "van-slide-up" : ""
            }, {
                default: ()=>[st(h("div", Re({
                    ref: r,
                    style: Yn(e.zIndex),
                    class: ta({
                        unfit: !e.safeAreaInsetBottom,
                        "with-title": !!p
                    }),
                    onAnimationend: f,
                    onTouchstartPassive: Lc
                }, a), [p, h("div", {
                    class: ta("body")
                }, [h("div", {
                    class: ta("keys")
                }, [y()]), w()])]), [[dt, e.show]])]
            });
            return e.teleport ? h(ja, {
                to: e.teleport
            }, {
                default: ()=>[C]
            }) : C
        }
    }
});
const Qk = oe(Zk)
  , [eI,ro,Id] = q("pagination")
  , es = (e,t,n)=>({
    number: e,
    text: t,
    active: n
})
  , tI = {
    mode: re("multi"),
    prevText: String,
    nextText: String,
    pageCount: ge(0),
    modelValue: at(0),
    totalItems: ge(0),
    showPageSize: ge(5),
    itemsPerPage: ge(10),
    forceEllipses: Boolean,
    showPrevButton: X,
    showNextButton: X
};
var nI = K({
    name: eI,
    props: tI,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const a = F(()=>{
            const {pageCount: u, totalItems: f, itemsPerPage: d} = e
              , m = +u || Math.ceil(+f / +d);
            return Math.max(1, m)
        }
        )
          , r = F(()=>{
            const u = []
              , f = a.value
              , d = +e.showPageSize
              , {modelValue: m, forceEllipses: y} = e;
            let w = 1
              , p = f;
            const C = d < f;
            C && (w = Math.max(m - Math.floor(d / 2), 1),
            p = w + d - 1,
            p > f && (p = f,
            w = p - d + 1));
            for (let g = w; g <= p; g++) {
                const v = es(g, g, g === m);
                u.push(v)
            }
            if (C && d > 0 && y) {
                if (w > 1) {
                    const g = es(w - 1, "...");
                    u.unshift(g)
                }
                if (p < f) {
                    const g = es(p + 1, "...");
                    u.push(g)
                }
            }
            return u
        }
        )
          , o = (u,f)=>{
            u = vt(u, 1, a.value),
            e.modelValue !== u && (t("update:modelValue", u),
            f && t("change", u))
        }
        ;
        Lo(()=>o(e.modelValue));
        const l = ()=>h("li", {
            class: ro("page-desc")
        }, [n.pageDesc ? n.pageDesc() : `${e.modelValue}/${a.value}`])
          , i = ()=>{
            const {mode: u, modelValue: f, showPrevButton: d} = e;
            if (!d)
                return;
            const m = n["prev-text"]
              , y = f === 1;
            return h("li", {
                class: [ro("item", {
                    disabled: y,
                    border: u === "simple",
                    prev: !0
                }), cr]
            }, [h("button", {
                type: "button",
                disabled: y,
                onClick: ()=>o(f - 1, !0)
            }, [m ? m() : e.prevText || Id("prev")])])
        }
          , s = ()=>{
            const {mode: u, modelValue: f, showNextButton: d} = e;
            if (!d)
                return;
            const m = n["next-text"]
              , y = f === a.value;
            return h("li", {
                class: [ro("item", {
                    disabled: y,
                    border: u === "simple",
                    next: !0
                }), cr]
            }, [h("button", {
                type: "button",
                disabled: y,
                onClick: ()=>o(f + 1, !0)
            }, [m ? m() : e.nextText || Id("next")])])
        }
          , c = ()=>r.value.map(u=>h("li", {
            class: [ro("item", {
                active: u.active,
                page: !0
            }), cr]
        }, [h("button", {
            type: "button",
            "aria-current": u.active || void 0,
            onClick: ()=>o(u.number, !0)
        }, [n.page ? n.page(u) : u.text])]));
        return ()=>h("nav", {
            role: "navigation",
            class: ro()
        }, [h("ul", {
            class: ro("items")
        }, [i(), e.mode === "simple" ? l() : c(), s()])])
    }
});
const aI = oe(nI)
  , [oI,Jo] = q("password-input")
  , rI = {
    info: String,
    mask: X,
    value: re(""),
    gutter: te,
    length: ge(6),
    focused: Boolean,
    errorInfo: String
};
var lI = K({
    name: oI,
    props: rI,
    emits: ["focus"],
    setup(e, {emit: t}) {
        const n = r=>{
            r.stopPropagation(),
            t("focus", r)
        }
          , a = ()=>{
            const r = []
              , {mask: o, value: l, gutter: i, focused: s} = e
              , c = +e.length;
            for (let u = 0; u < c; u++) {
                const f = l[u]
                  , d = u !== 0 && !i
                  , m = s && u === l.length;
                let y;
                u !== 0 && i && (y = {
                    marginLeft: Ae(i)
                }),
                r.push(h("li", {
                    class: [{
                        [mg]: d
                    }, Jo("item", {
                        focus: m
                    })],
                    style: y
                }, [o ? h("i", {
                    style: {
                        visibility: f ? "visible" : "hidden"
                    }
                }, null) : f, m && h("div", {
                    class: Jo("cursor")
                }, null)]))
            }
            return r
        }
        ;
        return ()=>{
            const r = e.errorInfo || e.info;
            return h("div", {
                class: Jo()
            }, [h("ul", {
                class: [Jo("security"), {
                    [cr]: !e.gutter
                }],
                onTouchstartPassive: n
            }, [a()]), r && h("div", {
                class: Jo(e.errorInfo ? "error-info" : "info")
            }, [r])])
        }
    }
});
const iI = oe(lI)
  , sI = oe(yE);
function dn(e) {
    if (e == null)
        return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}
function Xc(e) {
    var t = dn(e).Element;
    return e instanceof t || e instanceof Element
}
function rn(e) {
    var t = dn(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}
function pv(e) {
    if (typeof ShadowRoot > "u")
        return !1;
    var t = dn(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}
var Po = Math.round;
function qs() {
    var e = navigator.userAgentData;
    return e != null && e.brands ? e.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}
function cI() {
    return !/^((?!chrome|android).)*safari/i.test(qs())
}
function $l(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    var a = e.getBoundingClientRect()
      , r = 1
      , o = 1;
    t && rn(e) && (r = e.offsetWidth > 0 && Po(a.width) / e.offsetWidth || 1,
    o = e.offsetHeight > 0 && Po(a.height) / e.offsetHeight || 1);
    var l = Xc(e) ? dn(e) : window
      , i = l.visualViewport
      , s = !cI() && n
      , c = (a.left + (s && i ? i.offsetLeft : 0)) / r
      , u = (a.top + (s && i ? i.offsetTop : 0)) / o
      , f = a.width / r
      , d = a.height / o;
    return {
        width: f,
        height: d,
        top: u,
        right: c + f,
        bottom: u + d,
        left: c,
        x: c,
        y: u
    }
}
function _v(e) {
    var t = dn(e)
      , n = t.pageXOffset
      , a = t.pageYOffset;
    return {
        scrollLeft: n,
        scrollTop: a
    }
}
function uI(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}
function fI(e) {
    return e === dn(e) || !rn(e) ? _v(e) : uI(e)
}
function Hn(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}
function pi(e) {
    return ((Xc(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function dI(e) {
    return $l(pi(e)).left + _v(e).scrollLeft
}
function Un(e) {
    return dn(e).getComputedStyle(e)
}
function qc(e) {
    var t = Un(e)
      , n = t.overflow
      , a = t.overflowX
      , r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + a)
}
function hI(e) {
    var t = e.getBoundingClientRect()
      , n = Po(t.width) / e.offsetWidth || 1
      , a = Po(t.height) / e.offsetHeight || 1;
    return n !== 1 || a !== 1
}
function mI(e, t, n) {
    n === void 0 && (n = !1);
    var a = rn(t)
      , r = rn(t) && hI(t)
      , o = pi(t)
      , l = $l(e, r, n)
      , i = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , s = {
        x: 0,
        y: 0
    };
    return (a || !a && !n) && ((Hn(t) !== "body" || qc(o)) && (i = fI(t)),
    rn(t) ? (s = $l(t, !0),
    s.x += t.clientLeft,
    s.y += t.clientTop) : o && (s.x = dI(o))),
    {
        x: l.left + i.scrollLeft - s.x,
        y: l.top + i.scrollTop - s.y,
        width: l.width,
        height: l.height
    }
}
function gI(e) {
    var t = $l(e)
      , n = e.offsetWidth
      , a = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - a) <= 1 && (a = t.height),
    {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: a
    }
}
function Jc(e) {
    return Hn(e) === "html" ? e : e.assignedSlot || e.parentNode || (pv(e) ? e.host : null) || pi(e)
}
function wv(e) {
    return ["html", "body", "#document"].indexOf(Hn(e)) >= 0 ? e.ownerDocument.body : rn(e) && qc(e) ? e : wv(Jc(e))
}
function yl(e, t) {
    var n;
    t === void 0 && (t = []);
    var a = wv(e)
      , r = a === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , o = dn(a)
      , l = r ? [o].concat(o.visualViewport || [], qc(a) ? a : []) : a
      , i = t.concat(l);
    return r ? i : i.concat(yl(Jc(l)))
}
function vI(e) {
    return ["table", "td", "th"].indexOf(Hn(e)) >= 0
}
function Ad(e) {
    return !rn(e) || Un(e).position === "fixed" ? null : e.offsetParent
}
function bI(e) {
    var t = /firefox/i.test(qs())
      , n = /Trident/i.test(qs());
    if (n && rn(e)) {
        var a = Un(e);
        if (a.position === "fixed")
            return null
    }
    var r = Jc(e);
    for (pv(r) && (r = r.host); rn(r) && ["html", "body"].indexOf(Hn(r)) < 0; ) {
        var o = Un(r);
        if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
            return r;
        r = r.parentNode
    }
    return null
}
function Cv(e) {
    for (var t = dn(e), n = Ad(e); n && vI(n) && Un(n).position === "static"; )
        n = Ad(n);
    return n && (Hn(n) === "html" || Hn(n) === "body" && Un(n).position === "static") ? t : n || bI(e) || t
}
var wo = "top"
  , Nl = "bottom"
  , xr = "right"
  , Va = "left"
  , Sv = "auto"
  , yI = [wo, Nl, xr, Va]
  , Ev = "start"
  , Ml = "end"
  , pI = [].concat(yI, [Sv]).reduce(function(e, t) {
    return e.concat([t, t + "-" + Ev, t + "-" + Ml])
}, [])
  , _I = "beforeRead"
  , wI = "read"
  , CI = "afterRead"
  , SI = "beforeMain"
  , EI = "main"
  , TI = "afterMain"
  , xI = "beforeWrite"
  , kI = "write"
  , II = "afterWrite"
  , Js = [_I, wI, CI, SI, EI, TI, xI, kI, II];
function AI(e) {
    var t = new Map
      , n = new Set
      , a = [];
    e.forEach(function(o) {
        t.set(o.name, o)
    });
    function r(o) {
        n.add(o.name);
        var l = [].concat(o.requires || [], o.requiresIfExists || []);
        l.forEach(function(i) {
            if (!n.has(i)) {
                var s = t.get(i);
                s && r(s)
            }
        }),
        a.push(o)
    }
    return e.forEach(function(o) {
        n.has(o.name) || r(o)
    }),
    a
}
function OI(e) {
    var t = AI(e);
    return Js.reduce(function(n, a) {
        return n.concat(t.filter(function(r) {
            return r.phase === a
        }))
    }, [])
}
function PI(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(n) {
            Promise.resolve().then(function() {
                t = void 0,
                n(e())
            })
        }
        )),
        t
    }
}
function na(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
        n[a - 1] = arguments[a];
    return [].concat(n).reduce(function(r, o) {
        return r.replace(/%s/, o)
    }, e)
}
var Oa = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s'
  , RI = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available'
  , Od = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function LI(e) {
    e.forEach(function(t) {
        [].concat(Object.keys(t), Od).filter(function(n, a, r) {
            return r.indexOf(n) === a
        }).forEach(function(n) {
            switch (n) {
            case "name":
                typeof t.name != "string" && console.error(na(Oa, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
                break;
            case "enabled":
                typeof t.enabled != "boolean" && console.error(na(Oa, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
                break;
            case "phase":
                Js.indexOf(t.phase) < 0 && console.error(na(Oa, t.name, '"phase"', "either " + Js.join(", "), '"' + String(t.phase) + '"'));
                break;
            case "fn":
                typeof t.fn != "function" && console.error(na(Oa, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
                break;
            case "effect":
                t.effect != null && typeof t.effect != "function" && console.error(na(Oa, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
                break;
            case "requires":
                t.requires != null && !Array.isArray(t.requires) && console.error(na(Oa, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
                break;
            case "requiresIfExists":
                Array.isArray(t.requiresIfExists) || console.error(na(Oa, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
                break;
            case "options":
            case "data":
                break;
            default:
                console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Od.map(function(a) {
                    return '"' + a + '"'
                }).join(", ") + '; but "' + n + '" was provided.')
            }
            t.requires && t.requires.forEach(function(a) {
                e.find(function(r) {
                    return r.name === a
                }) == null && console.error(na(RI, String(t.name), a, a))
            })
        })
    })
}
function DI(e, t) {
    var n = new Set;
    return e.filter(function(a) {
        var r = t(a);
        if (!n.has(r))
            return n.add(r),
            !0
    })
}
function _i(e) {
    return e.split("-")[0]
}
function $I(e) {
    var t = e.reduce(function(n, a) {
        var r = n[a.name];
        return n[a.name] = r ? Object.assign({}, r, a, {
            options: Object.assign({}, r.options, a.options),
            data: Object.assign({}, r.data, a.data)
        }) : a,
        n
    }, {});
    return Object.keys(t).map(function(n) {
        return t[n]
    })
}
function Tv(e) {
    return e.split("-")[1]
}
function NI(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}
function MI(e) {
    var t = e.reference, n = e.element, a = e.placement, r = a ? _i(a) : null, o = a ? Tv(a) : null, l = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, s;
    switch (r) {
    case wo:
        s = {
            x: l,
            y: t.y - n.height
        };
        break;
    case Nl:
        s = {
            x: l,
            y: t.y + t.height
        };
        break;
    case xr:
        s = {
            x: t.x + t.width,
            y: i
        };
        break;
    case Va:
        s = {
            x: t.x - n.width,
            y: i
        };
        break;
    default:
        s = {
            x: t.x,
            y: t.y
        }
    }
    var c = r ? NI(r) : null;
    if (c != null) {
        var u = c === "y" ? "height" : "width";
        switch (o) {
        case Ev:
            s[c] = s[c] - (t[u] / 2 - n[u] / 2);
            break;
        case Ml:
            s[c] = s[c] + (t[u] / 2 - n[u] / 2);
            break
        }
    }
    return s
}
var Pd = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element."
  , BI = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash."
  , Rd = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function Ld() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return !t.some(function(a) {
        return !(a && typeof a.getBoundingClientRect == "function")
    })
}
function FI(e) {
    e === void 0 && (e = {});
    var t = e
      , n = t.defaultModifiers
      , a = n === void 0 ? [] : n
      , r = t.defaultOptions
      , o = r === void 0 ? Rd : r;
    return function(i, s, c) {
        c === void 0 && (c = o);
        var u = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, Rd, o),
            modifiersData: {},
            elements: {
                reference: i,
                popper: s
            },
            attributes: {},
            styles: {}
        }
          , f = []
          , d = !1
          , m = {
            state: u,
            setOptions: function(C) {
                var g = typeof C == "function" ? C(u.options) : C;
                w(),
                u.options = Object.assign({}, o, u.options, g),
                u.scrollParents = {
                    reference: Xc(i) ? yl(i) : i.contextElement ? yl(i.contextElement) : [],
                    popper: yl(s)
                };
                var v = OI($I([].concat(a, u.options.modifiers)));
                u.orderedModifiers = v.filter(function(k) {
                    return k.enabled
                });
                {
                    var b = DI([].concat(v, u.options.modifiers), function(k) {
                        var O = k.name;
                        return O
                    });
                    if (LI(b),
                    _i(u.options.placement) === Sv) {
                        var _ = u.orderedModifiers.find(function(k) {
                            var O = k.name;
                            return O === "flip"
                        });
                        _ || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "))
                    }
                    var S = Un(s)
                      , A = S.marginTop
                      , E = S.marginRight
                      , T = S.marginBottom
                      , D = S.marginLeft;
                    [A, E, T, D].some(function(k) {
                        return parseFloat(k)
                    }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "))
                }
                return y(),
                m.update()
            },
            forceUpdate: function() {
                if (!d) {
                    var C = u.elements
                      , g = C.reference
                      , v = C.popper;
                    if (!Ld(g, v)) {
                        console.error(Pd);
                        return
                    }
                    u.rects = {
                        reference: mI(g, Cv(v), u.options.strategy === "fixed"),
                        popper: gI(v)
                    },
                    u.reset = !1,
                    u.placement = u.options.placement,
                    u.orderedModifiers.forEach(function(k) {
                        return u.modifiersData[k.name] = Object.assign({}, k.data)
                    });
                    for (var b = 0, _ = 0; _ < u.orderedModifiers.length; _++) {
                        if (b += 1,
                        b > 100) {
                            console.error(BI);
                            break
                        }
                        if (u.reset === !0) {
                            u.reset = !1,
                            _ = -1;
                            continue
                        }
                        var S = u.orderedModifiers[_]
                          , A = S.fn
                          , E = S.options
                          , T = E === void 0 ? {} : E
                          , D = S.name;
                        typeof A == "function" && (u = A({
                            state: u,
                            options: T,
                            name: D,
                            instance: m
                        }) || u)
                    }
                }
            },
            update: PI(function() {
                return new Promise(function(p) {
                    m.forceUpdate(),
                    p(u)
                }
                )
            }),
            destroy: function() {
                w(),
                d = !0
            }
        };
        if (!Ld(i, s))
            return console.error(Pd),
            m;
        m.setOptions(c).then(function(p) {
            !d && c.onFirstUpdate && c.onFirstUpdate(p)
        });
        function y() {
            u.orderedModifiers.forEach(function(p) {
                var C = p.name
                  , g = p.options
                  , v = g === void 0 ? {} : g
                  , b = p.effect;
                if (typeof b == "function") {
                    var _ = b({
                        state: u,
                        name: C,
                        instance: m,
                        options: v
                    })
                      , S = function() {};
                    f.push(_ || S)
                }
            })
        }
        function w() {
            f.forEach(function(p) {
                return p()
            }),
            f = []
        }
        return m
    }
}
var ll = {
    passive: !0
};
function VI(e) {
    var t = e.state
      , n = e.instance
      , a = e.options
      , r = a.scroll
      , o = r === void 0 ? !0 : r
      , l = a.resize
      , i = l === void 0 ? !0 : l
      , s = dn(t.elements.popper)
      , c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return o && c.forEach(function(u) {
        u.addEventListener("scroll", n.update, ll)
    }),
    i && s.addEventListener("resize", n.update, ll),
    function() {
        o && c.forEach(function(u) {
            u.removeEventListener("scroll", n.update, ll)
        }),
        i && s.removeEventListener("resize", n.update, ll)
    }
}
var HI = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: VI,
    data: {}
};
function UI(e) {
    var t = e.state
      , n = e.name;
    t.modifiersData[n] = MI({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
var WI = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: UI,
    data: {}
}
  , jI = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};
function zI(e) {
    var t = e.x
      , n = e.y
      , a = window
      , r = a.devicePixelRatio || 1;
    return {
        x: Po(t * r) / r || 0,
        y: Po(n * r) / r || 0
    }
}
function Dd(e) {
    var t, n = e.popper, a = e.popperRect, r = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, f = e.isFixed, d = l.x, m = d === void 0 ? 0 : d, y = l.y, w = y === void 0 ? 0 : y, p = typeof u == "function" ? u({
        x: m,
        y: w
    }) : {
        x: m,
        y: w
    };
    m = p.x,
    w = p.y;
    var C = l.hasOwnProperty("x")
      , g = l.hasOwnProperty("y")
      , v = Va
      , b = wo
      , _ = window;
    if (c) {
        var S = Cv(n)
          , A = "clientHeight"
          , E = "clientWidth";
        if (S === dn(n) && (S = pi(n),
        Un(S).position !== "static" && i === "absolute" && (A = "scrollHeight",
        E = "scrollWidth")),
        S = S,
        r === wo || (r === Va || r === xr) && o === Ml) {
            b = Nl;
            var T = f && S === _ && _.visualViewport ? _.visualViewport.height : S[A];
            w -= T - a.height,
            w *= s ? 1 : -1
        }
        if (r === Va || (r === wo || r === Nl) && o === Ml) {
            v = xr;
            var D = f && S === _ && _.visualViewport ? _.visualViewport.width : S[E];
            m -= D - a.width,
            m *= s ? 1 : -1
        }
    }
    var k = Object.assign({
        position: i
    }, c && jI)
      , O = u === !0 ? zI({
        x: m,
        y: w
    }) : {
        x: m,
        y: w
    };
    if (m = O.x,
    w = O.y,
    s) {
        var N;
        return Object.assign({}, k, (N = {},
        N[b] = g ? "0" : "",
        N[v] = C ? "0" : "",
        N.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + w + "px)" : "translate3d(" + m + "px, " + w + "px, 0)",
        N))
    }
    return Object.assign({}, k, (t = {},
    t[b] = g ? w + "px" : "",
    t[v] = C ? m + "px" : "",
    t.transform = "",
    t))
}
function YI(e) {
    var t = e.state
      , n = e.options
      , a = n.gpuAcceleration
      , r = a === void 0 ? !0 : a
      , o = n.adaptive
      , l = o === void 0 ? !0 : o
      , i = n.roundOffsets
      , s = i === void 0 ? !0 : i;
    {
        var c = Un(t.elements.popper).transitionProperty || "";
        l && ["transform", "top", "right", "bottom", "left"].some(function(f) {
            return c.indexOf(f) >= 0
        }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "))
    }
    var u = {
        placement: _i(t.placement),
        variation: Tv(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: r,
        isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Dd(Object.assign({}, u, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: l,
        roundOffsets: s
    })))),
    t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Dd(Object.assign({}, u, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: s
    })))),
    t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
var GI = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: YI,
    data: {}
};
function KI(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
        var a = t.styles[n] || {}
          , r = t.attributes[n] || {}
          , o = t.elements[n];
        !rn(o) || !Hn(o) || (Object.assign(o.style, a),
        Object.keys(r).forEach(function(l) {
            var i = r[l];
            i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i)
        }))
    })
}
function XI(e) {
    var t = e.state
      , n = {
        popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    return Object.assign(t.elements.popper.style, n.popper),
    t.styles = n,
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function() {
        Object.keys(t.elements).forEach(function(a) {
            var r = t.elements[a]
              , o = t.attributes[a] || {}
              , l = Object.keys(t.styles.hasOwnProperty(a) ? t.styles[a] : n[a])
              , i = l.reduce(function(s, c) {
                return s[c] = "",
                s
            }, {});
            !rn(r) || !Hn(r) || (Object.assign(r.style, i),
            Object.keys(o).forEach(function(s) {
                r.removeAttribute(s)
            }))
        })
    }
}
var qI = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: KI,
    effect: XI,
    requires: ["computeStyles"]
}
  , JI = [HI, WI, GI, qI]
  , ZI = FI({
    defaultModifiers: JI
});
function QI(e, t, n) {
    var a = _i(e)
      , r = [Va, wo].indexOf(a) >= 0 ? -1 : 1
      , o = typeof n == "function" ? n(Object.assign({}, t, {
        placement: e
    })) : n
      , l = o[0]
      , i = o[1];
    return l = l || 0,
    i = (i || 0) * r,
    [Va, xr].indexOf(a) >= 0 ? {
        x: i,
        y: l
    } : {
        x: l,
        y: i
    }
}
function eA(e) {
    var t = e.state
      , n = e.options
      , a = e.name
      , r = n.offset
      , o = r === void 0 ? [0, 0] : r
      , l = pI.reduce(function(u, f) {
        return u[f] = QI(f, t.rects, o),
        u
    }, {})
      , i = l[t.placement]
      , s = i.x
      , c = i.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s,
    t.modifiersData.popperOffsets.y += c),
    t.modifiersData[a] = l
}
var tA = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: eA
};
const [nA,Pa] = q("popover")
  , aA = ["overlay", "duration", "teleport", "overlayStyle", "overlayClass", "closeOnClickOverlay"]
  , oA = {
    show: Boolean,
    theme: re("light"),
    overlay: Boolean,
    actions: Ke(),
    actionsDirection: re("vertical"),
    trigger: re("click"),
    duration: te,
    showArrow: X,
    placement: re("bottom"),
    iconPrefix: String,
    overlayClass: Ze,
    overlayStyle: Object,
    closeOnClickAction: X,
    closeOnClickOverlay: X,
    closeOnClickOutside: X,
    offset: {
        type: Array,
        default: ()=>[0, 8]
    },
    teleport: {
        type: [String, Object],
        default: "body"
    }
};
var rA = K({
    name: nA,
    props: oA,
    emits: ["select", "touchstart", "update:show"],
    setup(e, {emit: t, slots: n, attrs: a}) {
        let r;
        const o = V()
          , l = V()
          , i = V()
          , s = Fc(()=>e.show, g=>t("update:show", g))
          , c = ()=>({
            placement: e.placement,
            modifiers: [{
                name: "computeStyles",
                options: {
                    adaptive: !1,
                    gpuAcceleration: !1
                }
            }, _e({}, tA, {
                options: {
                    offset: e.offset
                }
            })]
        })
          , u = ()=>l.value && i.value ? ZI(l.value, i.value.popupRef.value, c()) : null
          , f = ()=>{
            Oe(()=>{
                s.value && (r ? r.setOptions(c()) : (r = u(),
                Xt && (window.addEventListener("animationend", f),
                window.addEventListener("transitionend", f))))
            }
            )
        }
          , d = g=>{
            s.value = g
        }
          , m = ()=>{
            e.trigger === "click" && (s.value = !s.value)
        }
          , y = (g,v)=>{
            g.disabled || (t("select", g, v),
            e.closeOnClickAction && (s.value = !1))
        }
          , w = ()=>{
            s.value && e.closeOnClickOutside && (!e.overlay || e.closeOnClickOverlay) && (s.value = !1)
        }
          , p = (g,v)=>n.action ? n.action({
            action: g,
            index: v
        }) : [g.icon && h(Ie, {
            name: g.icon,
            classPrefix: e.iconPrefix,
            class: Pa("action-icon")
        }, null), h("div", {
            class: [Pa("action-text"), {
                [$c]: e.actionsDirection === "vertical"
            }]
        }, [g.text])]
          , C = (g,v)=>{
            const {icon: b, color: _, disabled: S, className: A} = g;
            return h("div", {
                role: "menuitem",
                class: [Pa("action", {
                    disabled: S,
                    "with-icon": b
                }), {
                    [YC]: e.actionsDirection === "horizontal"
                }, A],
                style: {
                    color: _
                },
                tabindex: S ? void 0 : 0,
                "aria-disabled": S || void 0,
                onClick: ()=>y(g, v)
            }, [p(g, v)])
        }
        ;
        return Qe(()=>{
            f(),
            Lo(()=>{
                var g;
                o.value = (g = i.value) == null ? void 0 : g.popupRef.value
            }
            )
        }
        ),
        cn(()=>{
            r && (Xt && (window.removeEventListener("animationend", f),
            window.removeEventListener("transitionend", f)),
            r.destroy(),
            r = null)
        }
        ),
        se(()=>[s.value, e.offset, e.placement], f),
        li([l, o], w, {
            eventName: "touchstart"
        }),
        ()=>{
            var g;
            return h(Je, null, [h("span", {
                ref: l,
                class: Pa("wrapper"),
                onClick: m
            }, [(g = n.reference) == null ? void 0 : g.call(n)]), h(fn, Re({
                ref: i,
                show: s.value,
                class: Pa([e.theme]),
                position: "",
                transition: "van-popover-zoom",
                lockScroll: !1,
                "onUpdate:show": d
            }, a, Dl(), Me(e, aA)), {
                default: ()=>[e.showArrow && h("div", {
                    class: Pa("arrow")
                }, null), h("div", {
                    role: "menu",
                    class: Pa("content", e.actionsDirection)
                }, [n.default ? n.default() : e.actions.map(C)])]
            })])
        }
    }
});
const lA = oe(rA)
  , [iA,ts] = q("progress")
  , sA = {
    color: String,
    inactive: Boolean,
    pivotText: String,
    textColor: String,
    showPivot: X,
    pivotColor: String,
    trackColor: String,
    strokeWidth: te,
    percentage: {
        type: te,
        default: 0,
        validator: e=>+e >= 0 && +e <= 100
    }
};
var cA = K({
    name: iA,
    props: sA,
    setup(e) {
        const t = F(()=>e.inactive ? void 0 : e.color)
          , n = ()=>{
            const {textColor: a, pivotText: r, pivotColor: o, percentage: l} = e
              , i = r ?? `${l}%`;
            if (e.showPivot && i) {
                const s = {
                    color: a,
                    left: `${+l}%`,
                    transform: `translate(-${+l}%,-50%)`,
                    background: o || t.value
                };
                return h("span", {
                    style: s,
                    class: ts("pivot", {
                        inactive: e.inactive
                    })
                }, [i])
            }
        }
        ;
        return ()=>{
            const {trackColor: a, percentage: r, strokeWidth: o} = e
              , l = {
                background: a,
                height: Ae(o)
            }
              , i = {
                width: `${r}%`,
                background: t.value
            };
            return h("div", {
                class: ts(),
                style: l
            }, [h("span", {
                class: ts("portion", {
                    inactive: e.inactive
                }),
                style: i
            }, null), n()])
        }
    }
});
const uA = oe(cA)
  , [fA,Zo,dA] = q("pull-refresh")
  , xv = 50
  , hA = ["pulling", "loosing", "success"]
  , mA = {
    disabled: Boolean,
    modelValue: Boolean,
    headHeight: ge(xv),
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    pullDistance: te,
    successDuration: ge(500),
    animationDuration: ge(300)
};
var gA = K({
    name: fA,
    props: mA,
    emits: ["change", "refresh", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        let a;
        const r = V()
          , o = V()
          , l = Bo(r)
          , i = Ge({
            status: "normal",
            distance: 0,
            duration: 0
        })
          , s = qt()
          , c = ()=>{
            if (e.headHeight !== xv)
                return {
                    height: `${e.headHeight}px`
                }
        }
          , u = ()=>i.status !== "loading" && i.status !== "success" && !e.disabled
          , f = b=>{
            const _ = +(e.pullDistance || e.headHeight);
            return b > _ && (b < _ * 2 ? b = _ + (b - _) / 2 : b = _ * 1.5 + (b - _ * 2) / 4),
            Math.round(b)
        }
          , d = (b,_)=>{
            const S = +(e.pullDistance || e.headHeight);
            i.distance = b,
            _ ? i.status = "loading" : b === 0 ? i.status = "normal" : b < S ? i.status = "pulling" : i.status = "loosing",
            t("change", {
                status: i.status,
                distance: b
            })
        }
          , m = ()=>{
            const {status: b} = i;
            return b === "normal" ? "" : e[`${b}Text`] || dA(b)
        }
          , y = ()=>{
            const {status: b, distance: _} = i;
            if (n[b])
                return n[b]({
                    distance: _
                });
            const S = [];
            return hA.includes(b) && S.push(h("div", {
                class: Zo("text")
            }, [m()])),
            b === "loading" && S.push(h(un, {
                class: Zo("loading")
            }, {
                default: m
            })),
            S
        }
          , w = ()=>{
            i.status = "success",
            setTimeout(()=>{
                d(0)
            }
            , +e.successDuration)
        }
          , p = b=>{
            a = Vn(l.value) === 0,
            a && (i.duration = 0,
            s.start(b))
        }
          , C = b=>{
            u() && p(b)
        }
          , g = b=>{
            if (u()) {
                a || p(b);
                const {deltaY: _} = s;
                s.move(b),
                a && _.value >= 0 && s.isVertical() && (je(b),
                d(f(_.value)))
            }
        }
          , v = ()=>{
            a && s.deltaY.value && u() && (i.duration = +e.animationDuration,
            i.status === "loosing" ? (d(+e.headHeight, !0),
            t("update:modelValue", !0),
            Oe(()=>t("refresh"))) : d(0))
        }
        ;
        return se(()=>e.modelValue, b=>{
            i.duration = +e.animationDuration,
            b ? d(+e.headHeight, !0) : n.success || e.successText ? w() : d(0, !1)
        }
        ),
        tt("touchmove", g, {
            target: o
        }),
        ()=>{
            var b;
            const _ = {
                transitionDuration: `${i.duration}ms`,
                transform: i.distance ? `translate3d(0,${i.distance}px, 0)` : ""
            };
            return h("div", {
                ref: r,
                class: Zo()
            }, [h("div", {
                ref: o,
                class: Zo("track"),
                style: _,
                onTouchstartPassive: C,
                onTouchend: v,
                onTouchcancel: v
            }, [h("div", {
                class: Zo("head"),
                style: c()
            }, [y()]), (b = n.default) == null ? void 0 : b.call(n)])])
        }
    }
});
const vA = oe(gA)
  , [bA,il] = q("rate");
function yA(e, t, n, a) {
    return e >= t ? {
        status: "full",
        value: 1
    } : e + .5 >= t && n && !a ? {
        status: "half",
        value: .5
    } : e + 1 >= t && n && a ? {
        status: "half",
        value: Math.round((e - t + 1) * 1e10) / 1e10
    } : {
        status: "void",
        value: 0
    }
}
const pA = {
    size: te,
    icon: re("star"),
    color: String,
    count: ge(5),
    gutter: te,
    clearable: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    voidIcon: re("star-o"),
    allowHalf: Boolean,
    voidColor: String,
    touchable: X,
    iconPrefix: String,
    modelValue: at(0),
    disabledColor: String
};
var _A = K({
    name: bA,
    props: pA,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t}) {
        const n = qt()
          , [a,r] = Rr()
          , o = V()
          , l = F(()=>e.readonly || e.disabled)
          , i = F(()=>l.value || !e.touchable)
          , s = F(()=>Array(+e.count).fill("").map((v,b)=>yA(e.modelValue, b + 1, e.allowHalf, e.readonly)));
        let c, u, f = Number.MAX_SAFE_INTEGER, d = Number.MIN_SAFE_INTEGER;
        const m = ()=>{
            u = Fe(o);
            const v = a.value.map(Fe);
            c = [],
            v.forEach((b,_)=>{
                f = Math.min(b.top, f),
                d = Math.max(b.top, d),
                e.allowHalf ? c.push({
                    score: _ + .5,
                    left: b.left,
                    top: b.top,
                    height: b.height
                }, {
                    score: _ + 1,
                    left: b.left + b.width / 2,
                    top: b.top,
                    height: b.height
                }) : c.push({
                    score: _ + 1,
                    left: b.left,
                    top: b.top,
                    height: b.height
                })
            }
            )
        }
          , y = (v,b)=>{
            for (let _ = c.length - 1; _ > 0; _--)
                if (b >= u.top && b <= u.bottom) {
                    if (v > c[_].left && b >= c[_].top && b <= c[_].top + c[_].height)
                        return c[_].score
                } else {
                    const S = b < u.top ? f : d;
                    if (v > c[_].left && c[_].top === S)
                        return c[_].score
                }
            return e.allowHalf ? .5 : 1
        }
          , w = v=>{
            l.value || v === e.modelValue || (t("update:modelValue", v),
            t("change", v))
        }
          , p = v=>{
            i.value || (n.start(v),
            m())
        }
          , C = v=>{
            if (!i.value && (n.move(v),
            n.isHorizontal() && !n.isTap.value)) {
                const {clientX: b, clientY: _} = v.touches[0];
                je(v),
                w(y(b, _))
            }
        }
          , g = (v,b)=>{
            const {icon: _, size: S, color: A, count: E, gutter: T, voidIcon: D, disabled: k, voidColor: O, allowHalf: N, iconPrefix: Z, disabledColor: ce} = e
              , j = b + 1
              , ee = v.status === "full"
              , ue = v.status === "void"
              , Te = N && v.value > 0 && v.value < 1;
            let Pe;
            T && j !== +E && (Pe = {
                paddingRight: Ae(T)
            });
            const H = J=>{
                m();
                let he = N ? y(J.clientX, J.clientY) : j;
                e.clearable && n.isTap.value && he === e.modelValue && (he = 0),
                w(he)
            }
            ;
            return h("div", {
                key: b,
                ref: r(b),
                role: "radio",
                style: Pe,
                class: il("item"),
                tabindex: k ? void 0 : 0,
                "aria-setsize": E,
                "aria-posinset": j,
                "aria-checked": !ue,
                onClick: H
            }, [h(Ie, {
                size: S,
                name: ee ? _ : D,
                class: il("icon", {
                    disabled: k,
                    full: ee
                }),
                color: k ? ce : ee ? A : O,
                classPrefix: Z
            }, null), Te && h(Ie, {
                size: S,
                style: {
                    width: v.value + "em"
                },
                name: ue ? D : _,
                class: il("icon", ["half", {
                    disabled: k,
                    full: !ue
                }]),
                color: k ? ce : ue ? O : A,
                classPrefix: Z
            }, null)])
        }
        ;
        return wa(()=>e.modelValue),
        tt("touchmove", C, {
            target: o
        }),
        ()=>h("div", {
            ref: o,
            role: "radiogroup",
            class: il({
                readonly: e.readonly,
                disabled: e.disabled
            }),
            tabindex: e.disabled ? void 0 : 0,
            "aria-disabled": e.disabled,
            "aria-readonly": e.readonly,
            onTouchstartPassive: p
        }, [s.value.map(g)])
    }
});
const wA = oe(_A)
  , CA = {
    figureArr: Ke(),
    delay: Number,
    duration: at(2),
    isStart: Boolean,
    direction: re("down"),
    height: at(40)
}
  , [SA,ns] = q("rolling-text-item");
var EA = K({
    name: SA,
    props: CA,
    setup(e) {
        const t = F(()=>e.direction === "down" ? e.figureArr.slice().reverse() : e.figureArr)
          , n = F(()=>`-${e.height * (e.figureArr.length - 1)}px`)
          , a = F(()=>({
            lineHeight: Ae(e.height)
        }))
          , r = F(()=>({
            height: Ae(e.height),
            "--van-translate": n.value,
            "--van-duration": e.duration + "s",
            "--van-delay": e.delay + "s"
        }));
        return ()=>h("div", {
            class: ns([e.direction]),
            style: r.value
        }, [h("div", {
            class: ns("box", {
                animate: e.isStart
            })
        }, [Array.isArray(t.value) && t.value.map(o=>h("div", {
            class: ns("item"),
            style: a.value
        }, [o]))])])
    }
});
const [TA,xA] = q("rolling-text")
  , kA = {
    startNum: at(0),
    targetNum: Number,
    textList: Ke(),
    duration: at(2),
    autoStart: X,
    direction: re("down"),
    stopOrder: re("ltr"),
    height: at(40)
}
  , IA = 2;
var AA = K({
    name: TA,
    props: kA,
    setup(e) {
        const t = F(()=>Array.isArray(e.textList) && e.textList.length)
          , n = F(()=>t.value ? e.textList[0].length : `${Math.max(e.startNum, e.targetNum)}`.length)
          , a = f=>{
            const d = [];
            for (let m = 0; m < e.textList.length; m++)
                d.push(e.textList[m][f]);
            return d
        }
          , r = F(()=>t.value ? new Array(n.value).fill("") : nn(e.targetNum, n.value).split(""))
          , o = F(()=>nn(e.startNum, n.value).split(""))
          , l = f=>{
            const d = +o.value[f]
              , m = +r.value[f]
              , y = [];
            for (let w = d; w <= 9; w++)
                y.push(w);
            for (let w = 0; w <= IA; w++)
                for (let p = 0; p <= 9; p++)
                    y.push(p);
            for (let w = 0; w <= m; w++)
                y.push(w);
            return y
        }
          , i = (f,d)=>e.stopOrder === "ltr" ? .2 * f : .2 * (d - 1 - f)
          , s = V(e.autoStart)
          , c = ()=>{
            s.value = !0
        }
          , u = ()=>{
            s.value = !1,
            e.autoStart && Et(()=>c())
        }
        ;
        return se(()=>e.autoStart, f=>{
            f && c()
        }
        ),
        De({
            start: c,
            reset: u
        }),
        ()=>h("div", {
            class: xA()
        }, [r.value.map((f,d)=>h(EA, {
            figureArr: t.value ? a(d) : l(d),
            duration: e.duration,
            direction: e.direction,
            isStart: s.value,
            height: e.height,
            delay: i(d, n.value)
        }, null))])
    }
});
const OA = oe(AA)
  , PA = oe(Ex)
  , [RA,Qo,LA] = q("search")
  , DA = _e({}, Hc, {
    label: String,
    shape: re("square"),
    leftIcon: re("search"),
    clearable: X,
    actionText: String,
    background: String,
    showAction: Boolean
});
var $A = K({
    name: RA,
    props: DA,
    emits: ["blur", "focus", "clear", "search", "cancel", "clickInput", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
    setup(e, {emit: t, slots: n, attrs: a}) {
        const r = Vo()
          , o = V()
          , l = ()=>{
            n.action || (t("update:modelValue", ""),
            t("cancel"))
        }
          , i = _=>{
            _.keyCode === 13 && (je(_),
            t("search", e.modelValue))
        }
          , s = ()=>e.id || `${r}-input`
          , c = ()=>{
            if (n.label || e.label)
                return h("label", {
                    class: Qo("label"),
                    for: s()
                }, [n.label ? n.label() : e.label])
        }
          , u = ()=>{
            if (e.showAction) {
                const _ = e.actionText || LA("cancel");
                return h("div", {
                    class: Qo("action"),
                    role: "button",
                    tabindex: 0,
                    onClick: l
                }, [n.action ? n.action() : _])
            }
        }
          , f = ()=>{
            var _;
            return (_ = o.value) == null ? void 0 : _.blur()
        }
          , d = ()=>{
            var _;
            return (_ = o.value) == null ? void 0 : _.focus()
        }
          , m = _=>t("blur", _)
          , y = _=>t("focus", _)
          , w = _=>t("clear", _)
          , p = _=>t("clickInput", _)
          , C = _=>t("clickLeftIcon", _)
          , g = _=>t("clickRightIcon", _)
          , v = Object.keys(Hc)
          , b = ()=>{
            const _ = _e({}, a, Me(e, v), {
                id: s()
            })
              , S = A=>t("update:modelValue", A);
            return h(Nn, Re({
                ref: o,
                type: "search",
                class: Qo("field", {
                    "with-message": _.errorMessage
                }),
                border: !1,
                onBlur: m,
                onFocus: y,
                onClear: w,
                onKeypress: i,
                onClickInput: p,
                onClickLeftIcon: C,
                onClickRightIcon: g,
                "onUpdate:modelValue": S
            }, _), Me(n, ["left-icon", "right-icon"]))
        }
        ;
        return De({
            focus: d,
            blur: f
        }),
        ()=>{
            var _;
            return h("div", {
                class: Qo({
                    "show-action": e.showAction
                }),
                style: {
                    background: e.background
                }
            }, [(_ = n.left) == null ? void 0 : _.call(n), h("div", {
                class: Qo("content", e.shape)
            }, [c(), b()]), u()])
        }
    }
});
const NA = oe($A)
  , MA = e=>e == null ? void 0 : e.includes("/")
  , BA = [...Mc, "round", "closeOnPopstate", "safeAreaInsetBottom"]
  , FA = {
    qq: "qq",
    link: "link-o",
    weibo: "weibo",
    qrcode: "qr",
    poster: "photo-o",
    wechat: "wechat",
    "weapp-qrcode": "miniprogram-o",
    "wechat-moments": "wechat-moments"
}
  , [VA,en,HA] = q("share-sheet")
  , UA = _e({}, Fo, {
    title: String,
    round: X,
    options: Ke(),
    cancelText: String,
    description: String,
    closeOnPopstate: X,
    safeAreaInsetBottom: X
});
var WA = K({
    name: VA,
    props: UA,
    emits: ["cancel", "select", "update:show"],
    setup(e, {emit: t, slots: n}) {
        const a = d=>t("update:show", d)
          , r = ()=>{
            a(!1),
            t("cancel")
        }
          , o = (d,m)=>t("select", d, m)
          , l = ()=>{
            const d = n.title ? n.title() : e.title
              , m = n.description ? n.description() : e.description;
            if (d || m)
                return h("div", {
                    class: en("header")
                }, [d && h("h2", {
                    class: en("title")
                }, [d]), m && h("span", {
                    class: en("description")
                }, [m])])
        }
          , i = d=>MA(d) ? h("img", {
            src: d,
            class: en("image-icon")
        }, null) : h("div", {
            class: en("icon", [d])
        }, [h(Ie, {
            name: FA[d] || d
        }, null)])
          , s = (d,m)=>{
            const {name: y, icon: w, className: p, description: C} = d;
            return h("div", {
                role: "button",
                tabindex: 0,
                class: [en("option"), p, Tt],
                onClick: ()=>o(d, m)
            }, [i(w), y && h("span", {
                class: en("name")
            }, [y]), C && h("span", {
                class: en("option-description")
            }, [C])])
        }
          , c = (d,m)=>h("div", {
            class: en("options", {
                border: m
            })
        }, [d.map(s)])
          , u = ()=>{
            const {options: d} = e;
            return Array.isArray(d[0]) ? d.map((m,y)=>c(m, y !== 0)) : c(d)
        }
          , f = ()=>{
            var d;
            const m = (d = e.cancelText) != null ? d : HA("cancel");
            if (n.cancel || m)
                return h("button", {
                    type: "button",
                    class: en("cancel"),
                    onClick: r
                }, [n.cancel ? n.cancel() : m])
        }
        ;
        return ()=>h(fn, Re({
            class: en(),
            position: "bottom",
            "onUpdate:show": a
        }, Me(e, BA)), {
            default: ()=>[l(), u(), f()]
        })
    }
});
const jA = oe(WA)
  , [kv,zA] = q("sidebar")
  , Iv = Symbol(kv)
  , YA = {
    modelValue: ge(0)
};
var GA = K({
    name: kv,
    props: YA,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {linkChildren: a} = xt(Iv)
          , r = ()=>+e.modelValue;
        return a({
            getActive: r,
            setActive: l=>{
                l !== r() && (t("update:modelValue", l),
                t("change", l))
            }
        }),
        ()=>{
            var l;
            return h("div", {
                role: "tablist",
                class: zA()
            }, [(l = n.default) == null ? void 0 : l.call(n)])
        }
    }
});
const Av = oe(GA)
  , [KA,$d] = q("sidebar-item")
  , XA = _e({}, Sa, {
    dot: Boolean,
    title: String,
    badge: te,
    disabled: Boolean,
    badgeProps: Object
});
var qA = K({
    name: KA,
    props: XA,
    emits: ["click"],
    setup(e, {emit: t, slots: n}) {
        const a = za()
          , {parent: r, index: o} = _t(Iv);
        if (!r)
            return;
        const l = ()=>{
            e.disabled || (t("click", o.value),
            r.setActive(o.value),
            a())
        }
        ;
        return ()=>{
            const {dot: i, badge: s, title: c, disabled: u} = e
              , f = o.value === r.getActive();
            return h("div", {
                role: "tab",
                class: $d({
                    select: f,
                    disabled: u
                }),
                tabindex: u ? void 0 : 0,
                "aria-selected": f,
                onClick: l
            }, [h(Ya, Re({
                dot: i,
                class: $d("text"),
                content: s
            }, e.badgeProps), {
                default: ()=>[n.title ? n.title() : c]
            })])
        }
    }
});
const Ov = oe(qA)
  , [JA,as,Nd] = q("signature")
  , ZA = {
    tips: String,
    type: re("png"),
    penColor: re("#000"),
    lineWidth: at(3),
    clearButtonText: String,
    backgroundColor: re(""),
    confirmButtonText: String
}
  , QA = ()=>{
    var e;
    const t = document.createElement("canvas");
    return !!((e = t.getContext) != null && e.call(t, "2d"))
}
;
var eO = K({
    name: JA,
    props: ZA,
    emits: ["submit", "clear", "start", "end", "signing"],
    setup(e, {emit: t}) {
        const n = V()
          , a = V()
          , r = F(()=>n.value ? n.value.getContext("2d") : null)
          , o = Xt ? QA() : !0;
        let l = 0, i = 0, s;
        const c = ()=>{
            if (!r.value)
                return !1;
            r.value.beginPath(),
            r.value.lineWidth = e.lineWidth,
            r.value.strokeStyle = e.penColor,
            s = Fe(n),
            t("start")
        }
          , u = g=>{
            if (!r.value)
                return !1;
            je(g);
            const v = g.touches[0]
              , b = v.clientX - ((s == null ? void 0 : s.left) || 0)
              , _ = v.clientY - ((s == null ? void 0 : s.top) || 0);
            r.value.lineCap = "round",
            r.value.lineJoin = "round",
            r.value.lineTo(b, _),
            r.value.stroke(),
            t("signing", g)
        }
          , f = g=>{
            je(g),
            t("end")
        }
          , d = g=>{
            const v = document.createElement("canvas");
            if (v.width = g.width,
            v.height = g.height,
            e.backgroundColor) {
                const b = v.getContext("2d");
                m(b)
            }
            return g.toDataURL() === v.toDataURL()
        }
          , m = g=>{
            g && e.backgroundColor && (g.fillStyle = e.backgroundColor,
            g.fillRect(0, 0, l, i))
        }
          , y = ()=>{
            var g, v;
            const b = n.value;
            if (!b)
                return;
            const S = d(b) ? "" : ((v = (g = {
                jpg: ()=>b.toDataURL("image/jpeg", .8),
                jpeg: ()=>b.toDataURL("image/jpeg", .8)
            })[e.type]) == null ? void 0 : v.call(g)) || b.toDataURL(`image/${e.type}`);
            t("submit", {
                image: S,
                canvas: b
            })
        }
          , w = ()=>{
            r.value && (r.value.clearRect(0, 0, l, i),
            r.value.closePath(),
            m(r.value)),
            t("clear")
        }
          , p = ()=>{
            var g, v, b;
            if (o && n.value) {
                const _ = n.value
                  , S = Xt ? window.devicePixelRatio : 1;
                l = _.width = (((g = a.value) == null ? void 0 : g.offsetWidth) || 0) * S,
                i = _.height = (((v = a.value) == null ? void 0 : v.offsetHeight) || 0) * S,
                (b = r.value) == null || b.scale(S, S),
                m(r.value)
            }
        }
          , C = ()=>{
            if (r.value) {
                const g = r.value.getImageData(0, 0, l, i);
                p(),
                r.value.putImageData(g, 0, 0)
            }
        }
        ;
        return se(on, C),
        Qe(p),
        De({
            resize: C,
            clear: w,
            submit: y
        }),
        ()=>h("div", {
            class: as()
        }, [h("div", {
            class: as("content"),
            ref: a
        }, [o ? h("canvas", {
            ref: n,
            onTouchstartPassive: c,
            onTouchmove: u,
            onTouchend: f
        }, null) : h("p", null, [e.tips])]), h("div", {
            class: as("footer")
        }, [h(pt, {
            size: "small",
            onClick: w
        }, {
            default: ()=>[e.clearButtonText || Nd("clear")]
        }), h(pt, {
            type: "primary",
            size: "small",
            onClick: y
        }, {
            default: ()=>[e.confirmButtonText || Nd("confirm")]
        })])])
    }
});
const tO = oe(eO)
  , [nO,aO] = q("skeleton-title")
  , oO = {
    round: Boolean,
    titleWidth: te
};
var rO = K({
    name: nO,
    props: oO,
    setup(e) {
        return ()=>h("h3", {
            class: aO([{
                round: e.round
            }]),
            style: {
                width: Ae(e.titleWidth)
            }
        }, null)
    }
});
const Pv = oe(rO);
var lO = Pv;
const [iO,sO] = q("skeleton-avatar")
  , cO = {
    avatarSize: te,
    avatarShape: re("round")
};
var uO = K({
    name: iO,
    props: cO,
    setup(e) {
        return ()=>h("div", {
            class: sO([e.avatarShape]),
            style: zn(e.avatarSize)
        }, null)
    }
});
const Rv = oe(uO);
var fO = Rv;
const Zc = "100%"
  , dO = {
    round: Boolean,
    rowWidth: {
        type: te,
        default: Zc
    }
}
  , [hO,mO] = q("skeleton-paragraph");
var gO = K({
    name: hO,
    props: dO,
    setup(e) {
        return ()=>h("div", {
            class: mO([{
                round: e.round
            }]),
            style: {
                width: e.rowWidth
            }
        }, null)
    }
});
const Lv = oe(gO);
var vO = Lv;
const [bO,Md] = q("skeleton")
  , yO = "60%"
  , pO = {
    row: ge(0),
    round: Boolean,
    title: Boolean,
    titleWidth: te,
    avatar: Boolean,
    avatarSize: te,
    avatarShape: re("round"),
    loading: X,
    animate: X,
    rowWidth: {
        type: [Number, String, Array],
        default: Zc
    }
};
var _O = K({
    name: bO,
    inheritAttrs: !1,
    props: pO,
    setup(e, {slots: t, attrs: n}) {
        const a = ()=>{
            if (e.avatar)
                return h(fO, {
                    avatarShape: e.avatarShape,
                    avatarSize: e.avatarSize
                }, null)
        }
          , r = ()=>{
            if (e.title)
                return h(lO, {
                    round: e.round,
                    titleWidth: e.titleWidth
                }, null)
        }
          , o = s=>{
            const {rowWidth: c} = e;
            return c === Zc && s === +e.row - 1 ? yO : Array.isArray(c) ? c[s] : c
        }
          , l = ()=>Array(+e.row).fill("").map((s,c)=>h(vO, {
            key: c,
            round: e.round,
            rowWidth: Ae(o(c))
        }, null))
          , i = ()=>t.template ? t.template() : h(Je, null, [a(), h("div", {
            class: Md("content")
        }, [r(), l()])]);
        return ()=>{
            var s;
            return e.loading ? h("div", Re({
                class: Md({
                    animate: e.animate,
                    round: e.round
                })
            }, n), [i()]) : (s = t.default) == null ? void 0 : s.call(t)
        }
    }
});
const wO = oe(_O)
  , [CO,Bd] = q("skeleton-image")
  , SO = {
    imageSize: te,
    imageShape: re("square")
};
var EO = K({
    name: CO,
    props: SO,
    setup(e) {
        return ()=>h("div", {
            class: Bd([e.imageShape]),
            style: zn(e.imageSize)
        }, [h(Ie, {
            name: "photo",
            class: Bd("icon")
        }, null)])
    }
});
const TO = oe(EO)
  , [xO,er] = q("slider")
  , kO = {
    min: ge(0),
    max: ge(100),
    step: ge(1),
    range: Boolean,
    reverse: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    vertical: Boolean,
    barHeight: te,
    buttonSize: te,
    activeColor: String,
    inactiveColor: String,
    modelValue: {
        type: [Number, Array],
        default: 0
    }
};
var IO = K({
    name: xO,
    props: kO,
    emits: ["change", "dragEnd", "dragStart", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        let a, r, o;
        const l = V()
          , i = [V(), V()]
          , s = V()
          , c = qt()
          , u = F(()=>Number(e.max) - Number(e.min))
          , f = F(()=>{
            const k = e.vertical ? "width" : "height";
            return {
                background: e.inactiveColor,
                [k]: Ae(e.barHeight)
            }
        }
        )
          , d = k=>e.range && Array.isArray(k)
          , m = ()=>{
            const {modelValue: k, min: O} = e;
            return d(k) ? `${(k[1] - k[0]) * 100 / u.value}%` : `${(k - Number(O)) * 100 / u.value}%`
        }
          , y = ()=>{
            const {modelValue: k, min: O} = e;
            return d(k) ? `${(k[0] - Number(O)) * 100 / u.value}%` : "0%"
        }
          , w = F(()=>{
            const O = {
                [e.vertical ? "height" : "width"]: m(),
                background: e.activeColor
            };
            s.value && (O.transition = "none");
            const N = ()=>e.vertical ? e.reverse ? "bottom" : "top" : e.reverse ? "right" : "left";
            return O[N()] = y(),
            O
        }
        )
          , p = k=>{
            const O = +e.min
              , N = +e.max
              , Z = +e.step;
            k = vt(k, O, N);
            const ce = Math.round((k - O) / Z) * Z;
            return ug(O, ce)
        }
          , C = ()=>{
            const k = e.modelValue;
            d(k) ? o = k.map(p) : o = p(k)
        }
          , g = k=>{
            var O, N;
            const Z = (O = k[0]) != null ? O : Number(e.min)
              , ce = (N = k[1]) != null ? N : Number(e.max);
            return Z > ce ? [ce, Z] : [Z, ce]
        }
          , v = (k,O)=>{
            d(k) ? k = g(k).map(p) : k = p(k),
            pn(k, e.modelValue) || t("update:modelValue", k),
            O && !pn(k, o) && t("change", k)
        }
          , b = k=>{
            if (k.stopPropagation(),
            e.disabled || e.readonly)
                return;
            C();
            const {min: O, reverse: N, vertical: Z, modelValue: ce} = e
              , j = Fe(l)
              , ee = ()=>Z ? N ? j.bottom - k.clientY : k.clientY - j.top : N ? j.right - k.clientX : k.clientX - j.left
              , ue = Z ? j.height : j.width
              , Te = Number(O) + ee() / ue * u.value;
            if (d(ce)) {
                const [Pe,H] = ce
                  , J = (Pe + H) / 2;
                Te <= J ? v([Te, H], !0) : v([Pe, Te], !0)
            } else
                v(Te, !0)
        }
          , _ = k=>{
            e.disabled || e.readonly || (c.start(k),
            r = e.modelValue,
            C(),
            s.value = "start")
        }
          , S = k=>{
            if (e.disabled || e.readonly)
                return;
            s.value === "start" && t("dragStart", k),
            je(k, !0),
            c.move(k),
            s.value = "dragging";
            const O = Fe(l)
              , N = e.vertical ? c.deltaY.value : c.deltaX.value
              , Z = e.vertical ? O.height : O.width;
            let ce = N / Z * u.value;
            if (e.reverse && (ce = -ce),
            d(o)) {
                const j = e.reverse ? 1 - a : a;
                r[j] = o[j] + ce
            } else
                r = o + ce;
            v(r)
        }
          , A = k=>{
            e.disabled || e.readonly || (s.value === "dragging" && (v(r, !0),
            t("dragEnd", k)),
            s.value = "")
        }
          , E = k=>typeof k == "number" ? er("button-wrapper", ["left", "right"][k]) : er("button-wrapper", e.reverse ? "left" : "right")
          , T = (k,O)=>{
            const N = s.value === "dragging";
            if (typeof O == "number") {
                const Z = n[O === 0 ? "left-button" : "right-button"];
                let ce;
                if (N && Array.isArray(r) && (ce = r[0] > r[1] ? a ^ 1 : a),
                Z)
                    return Z({
                        value: k,
                        dragging: N,
                        dragIndex: ce
                    })
            }
            return n.button ? n.button({
                value: k,
                dragging: N
            }) : h("div", {
                class: er("button"),
                style: zn(e.buttonSize)
            }, null)
        }
          , D = k=>{
            const O = typeof k == "number" ? e.modelValue[k] : e.modelValue;
            return h("div", {
                ref: i[k ?? 0],
                role: "slider",
                class: E(k),
                tabindex: e.disabled ? void 0 : 0,
                "aria-valuemin": e.min,
                "aria-valuenow": O,
                "aria-valuemax": e.max,
                "aria-disabled": e.disabled || void 0,
                "aria-readonly": e.readonly || void 0,
                "aria-orientation": e.vertical ? "vertical" : "horizontal",
                onTouchstartPassive: N=>{
                    typeof k == "number" && (a = k),
                    _(N)
                }
                ,
                onTouchend: A,
                onTouchcancel: A,
                onClick: Lc
            }, [T(O, k)])
        }
        ;
        return v(e.modelValue),
        wa(()=>e.modelValue),
        i.forEach(k=>{
            tt("touchmove", S, {
                target: k
            })
        }
        ),
        ()=>h("div", {
            ref: l,
            style: f.value,
            class: er({
                vertical: e.vertical,
                disabled: e.disabled
            }),
            onClick: b
        }, [h("div", {
            class: er("bar"),
            style: w.value
        }, [e.range ? [D(0), D(1)] : D()])])
    }
});
const AO = oe(IO)
  , [Fd,OO] = q("space")
  , PO = {
    align: String,
    direction: {
        type: String,
        default: "horizontal"
    },
    size: {
        type: [Number, String, Array],
        default: 8
    },
    wrap: Boolean,
    fill: Boolean
};
function Dv(e=[]) {
    const t = [];
    return e.forEach(n=>{
        Array.isArray(n) ? t.push(...n) : n.type === Je ? t.push(...Dv(n.children)) : t.push(n)
    }
    ),
    t.filter(n=>{
        var a;
        return !(n && (n.type === St || n.type === Je && ((a = n.children) == null ? void 0 : a.length) === 0 || n.type === Do && n.children.trim() === ""))
    }
    )
}
var RO = K({
    name: Fd,
    props: PO,
    setup(e, {slots: t}) {
        const n = F(()=>{
            var o;
            return (o = e.align) != null ? o : e.direction === "horizontal" ? "center" : ""
        }
        )
          , a = o=>typeof o == "number" ? o + "px" : o
          , r = o=>{
            const l = {}
              , i = `${a(Array.isArray(e.size) ? e.size[0] : e.size)}`
              , s = `${a(Array.isArray(e.size) ? e.size[1] : e.size)}`;
            return o ? e.wrap ? {
                marginBottom: s
            } : {} : (e.direction === "horizontal" && (l.marginRight = i),
            (e.direction === "vertical" || e.wrap) && (l.marginBottom = s),
            l)
        }
        ;
        return ()=>{
            var o;
            const l = Dv((o = t.default) == null ? void 0 : o.call(t));
            return h("div", {
                class: [OO({
                    [e.direction]: e.direction,
                    [`align-${n.value}`]: n.value,
                    wrap: e.wrap,
                    fill: e.fill
                })]
            }, [l.map((i,s)=>h("div", {
                key: `item-${s}`,
                class: `${Fd}-item`,
                style: r(s === l.length - 1)
            }, [i]))])
        }
    }
});
const LO = oe(RO)
  , [$v,Vd] = q("steps")
  , DO = {
    active: ge(0),
    direction: re("horizontal"),
    activeIcon: re("checked"),
    iconPrefix: String,
    finishIcon: String,
    activeColor: String,
    inactiveIcon: String,
    inactiveColor: String
}
  , Nv = Symbol($v);
var $O = K({
    name: $v,
    props: DO,
    emits: ["clickStep"],
    setup(e, {emit: t, slots: n}) {
        const {linkChildren: a} = xt(Nv);
        return a({
            props: e,
            onClickStep: o=>t("clickStep", o)
        }),
        ()=>{
            var o;
            return h("div", {
                class: Vd([e.direction])
            }, [h("div", {
                class: Vd("items")
            }, [(o = n.default) == null ? void 0 : o.call(n)])])
        }
    }
});
const [NO,aa] = q("step");
var MO = K({
    name: NO,
    setup(e, {slots: t}) {
        const {parent: n, index: a} = _t(Nv);
        if (!n)
            return;
        const r = n.props
          , o = ()=>{
            const f = +r.active;
            return a.value < f ? "finish" : a.value === f ? "process" : "waiting"
        }
          , l = ()=>o() === "process"
          , i = F(()=>({
            background: o() === "finish" ? r.activeColor : r.inactiveColor
        }))
          , s = F(()=>{
            if (l())
                return {
                    color: r.activeColor
                };
            if (o() === "waiting")
                return {
                    color: r.inactiveColor
                }
        }
        )
          , c = ()=>n.onClickStep(a.value)
          , u = ()=>{
            const {iconPrefix: f, finishIcon: d, activeIcon: m, activeColor: y, inactiveIcon: w} = r;
            return l() ? t["active-icon"] ? t["active-icon"]() : h(Ie, {
                class: aa("icon", "active"),
                name: m,
                color: y,
                classPrefix: f
            }, null) : o() === "finish" && (d || t["finish-icon"]) ? t["finish-icon"] ? t["finish-icon"]() : h(Ie, {
                class: aa("icon", "finish"),
                name: d,
                color: y,
                classPrefix: f
            }, null) : t["inactive-icon"] ? t["inactive-icon"]() : w ? h(Ie, {
                class: aa("icon"),
                name: w,
                classPrefix: f
            }, null) : h("i", {
                class: aa("circle"),
                style: i.value
            }, null)
        }
        ;
        return ()=>{
            var f;
            const d = o();
            return h("div", {
                class: [Gn, aa([r.direction, {
                    [d]: d
                }])]
            }, [h("div", {
                class: aa("title", {
                    active: l()
                }),
                style: s.value,
                onClick: c
            }, [(f = t.default) == null ? void 0 : f.call(t)]), h("div", {
                class: aa("circle-container"),
                onClick: c
            }, [u()]), h("div", {
                class: aa("line"),
                style: i.value
            }, null)])
        }
    }
});
const BO = oe(MO)
  , [FO,sl] = q("stepper")
  , VO = 200
  , cl = (e,t)=>String(e) === String(t)
  , HO = {
    min: ge(1),
    max: ge(1 / 0),
    name: ge(""),
    step: ge(1),
    theme: String,
    integer: Boolean,
    disabled: Boolean,
    showPlus: X,
    showMinus: X,
    showInput: X,
    longPress: X,
    autoFixed: X,
    allowEmpty: Boolean,
    modelValue: te,
    inputWidth: te,
    buttonSize: te,
    placeholder: String,
    disablePlus: Boolean,
    disableMinus: Boolean,
    disableInput: Boolean,
    beforeChange: Function,
    defaultValue: ge(1),
    decimalLength: te
};
var UO = K({
    name: FO,
    props: HO,
    emits: ["plus", "blur", "minus", "focus", "change", "overlimit", "update:modelValue"],
    setup(e, {emit: t}) {
        const n = (E,T=!0)=>{
            const {min: D, max: k, allowEmpty: O, decimalLength: N} = e;
            return O && E === "" || (E = Vs(String(E), !e.integer),
            E = E === "" ? 0 : +E,
            E = Number.isNaN(E) ? +D : E,
            E = T ? Math.max(Math.min(+k, E), +D) : E,
            $e(N) && (E = E.toFixed(+N))),
            E
        }
          , a = ()=>{
            var E;
            const T = (E = e.modelValue) != null ? E : e.defaultValue
              , D = n(T);
            return cl(D, e.modelValue) || t("update:modelValue", D),
            D
        }
        ;
        let r;
        const o = V()
          , l = V(a())
          , i = F(()=>e.disabled || e.disableMinus || +l.value <= +e.min)
          , s = F(()=>e.disabled || e.disablePlus || +l.value >= +e.max)
          , c = F(()=>({
            width: Ae(e.inputWidth),
            height: Ae(e.buttonSize)
        }))
          , u = F(()=>zn(e.buttonSize))
          , f = ()=>{
            const E = n(l.value);
            cl(E, l.value) || (l.value = E)
        }
          , d = E=>{
            e.beforeChange ? Ca(e.beforeChange, {
                args: [E],
                done() {
                    l.value = E
                }
            }) : l.value = E
        }
          , m = ()=>{
            if (r === "plus" && s.value || r === "minus" && i.value) {
                t("overlimit", r);
                return
            }
            const E = r === "minus" ? -e.step : +e.step
              , T = n(ug(+l.value, E));
            d(T),
            t(r)
        }
          , y = E=>{
            const T = E.target
              , {value: D} = T
              , {decimalLength: k} = e;
            let O = Vs(String(D), !e.integer);
            if ($e(k) && O.includes(".")) {
                const Z = O.split(".");
                O = `${Z[0]}.${Z[1].slice(0, +k)}`
            }
            e.beforeChange ? T.value = String(l.value) : cl(D, O) || (T.value = O);
            const N = O === String(+O);
            d(N ? +O : O)
        }
          , w = E=>{
            var T;
            e.disableInput ? (T = o.value) == null || T.blur() : t("focus", E)
        }
          , p = E=>{
            const T = E.target
              , D = n(T.value, e.autoFixed);
            T.value = String(D),
            l.value = D,
            Oe(()=>{
                t("blur", E),
                sg()
            }
            )
        }
        ;
        let C, g;
        const v = ()=>{
            g = setTimeout(()=>{
                m(),
                v()
            }
            , VO)
        }
          , b = ()=>{
            e.longPress && (C = !1,
            clearTimeout(g),
            g = setTimeout(()=>{
                C = !0,
                m(),
                v()
            }
            , vg))
        }
          , _ = E=>{
            e.longPress && (clearTimeout(g),
            C && je(E))
        }
          , S = E=>{
            e.disableInput && je(E)
        }
          , A = E=>({
            onClick: T=>{
                je(T),
                r = E,
                m()
            }
            ,
            onTouchstartPassive: ()=>{
                r = E,
                b()
            }
            ,
            onTouchend: _,
            onTouchcancel: _
        });
        return se(()=>[e.max, e.min, e.integer, e.decimalLength], f),
        se(()=>e.modelValue, E=>{
            cl(E, l.value) || (l.value = n(E))
        }
        ),
        se(l, E=>{
            t("update:modelValue", E),
            t("change", E, {
                name: e.name
            })
        }
        ),
        wa(()=>e.modelValue),
        ()=>h("div", {
            role: "group",
            class: sl([e.theme])
        }, [st(h("button", Re({
            type: "button",
            style: u.value,
            class: [sl("minus", {
                disabled: i.value
            }), {
                [Tt]: !i.value
            }],
            "aria-disabled": i.value || void 0
        }, A("minus")), null), [[dt, e.showMinus]]), st(h("input", {
            ref: o,
            type: e.integer ? "tel" : "text",
            role: "spinbutton",
            class: sl("input"),
            value: l.value,
            style: c.value,
            disabled: e.disabled,
            readonly: e.disableInput,
            inputmode: e.integer ? "numeric" : "decimal",
            placeholder: e.placeholder,
            autocomplete: "off",
            "aria-valuemax": e.max,
            "aria-valuemin": e.min,
            "aria-valuenow": l.value,
            onBlur: p,
            onInput: y,
            onFocus: w,
            onMousedown: S
        }, null), [[dt, e.showInput]]), st(h("button", Re({
            type: "button",
            style: u.value,
            class: [sl("plus", {
                disabled: s.value
            }), {
                [Tt]: !s.value
            }],
            "aria-disabled": s.value || void 0
        }, A("plus")), null), [[dt, e.showPlus]])])
    }
});
const WO = oe(UO)
  , jO = oe($O)
  , [zO,tn,YO] = q("submit-bar")
  , GO = {
    tip: String,
    label: String,
    price: Number,
    tipIcon: String,
    loading: Boolean,
    currency: re("¥"),
    disabled: Boolean,
    textAlign: String,
    buttonText: String,
    buttonType: re("danger"),
    buttonColor: String,
    suffixLabel: String,
    placeholder: Boolean,
    decimalLength: ge(2),
    safeAreaInsetBottom: X
};
var KO = K({
    name: zO,
    props: GO,
    emits: ["submit"],
    setup(e, {emit: t, slots: n}) {
        const a = V()
          , r = ci(a, tn)
          , o = ()=>{
            const {price: u, label: f, currency: d, textAlign: m, suffixLabel: y, decimalLength: w} = e;
            if (typeof u == "number") {
                const p = (u / 100).toFixed(+w).split(".")
                  , C = w ? `.${p[1]}` : "";
                return h("div", {
                    class: tn("text"),
                    style: {
                        textAlign: m
                    }
                }, [h("span", null, [f || YO("label")]), h("span", {
                    class: tn("price")
                }, [d, h("span", {
                    class: tn("price-integer")
                }, [p[0]]), C]), y && h("span", {
                    class: tn("suffix-label")
                }, [y])])
            }
        }
          , l = ()=>{
            var u;
            const {tip: f, tipIcon: d} = e;
            if (n.tip || f)
                return h("div", {
                    class: tn("tip")
                }, [d && h(Ie, {
                    class: tn("tip-icon"),
                    name: d
                }, null), f && h("span", {
                    class: tn("tip-text")
                }, [f]), (u = n.tip) == null ? void 0 : u.call(n)])
        }
          , i = ()=>t("submit")
          , s = ()=>n.button ? n.button() : h(pt, {
            round: !0,
            type: e.buttonType,
            text: e.buttonText,
            class: tn("button", e.buttonType),
            color: e.buttonColor,
            loading: e.loading,
            disabled: e.disabled,
            onClick: i
        }, null)
          , c = ()=>{
            var u, f;
            return h("div", {
                ref: a,
                class: [tn(), {
                    "van-safe-area-bottom": e.safeAreaInsetBottom
                }]
            }, [(u = n.top) == null ? void 0 : u.call(n), l(), h("div", {
                class: tn("bar")
            }, [(f = n.default) == null ? void 0 : f.call(n), o(), s()])])
        }
        ;
        return ()=>e.placeholder ? r(c) : c()
    }
});
const XO = oe(KO)
  , [qO,os] = q("swipe-cell")
  , JO = {
    name: ge(""),
    disabled: Boolean,
    leftWidth: te,
    rightWidth: te,
    beforeClose: Function,
    stopPropagation: Boolean
};
var ZO = K({
    name: qO,
    props: JO,
    emits: ["open", "close", "click"],
    setup(e, {emit: t, slots: n}) {
        let a, r, o, l;
        const i = V()
          , s = V()
          , c = V()
          , u = Ge({
            offset: 0,
            dragging: !1
        })
          , f = qt()
          , d = E=>E.value ? Fe(E).width : 0
          , m = F(()=>$e(e.leftWidth) ? +e.leftWidth : d(s))
          , y = F(()=>$e(e.rightWidth) ? +e.rightWidth : d(c))
          , w = E=>{
            u.offset = E === "left" ? m.value : -y.value,
            a || (a = !0,
            t("open", {
                name: e.name,
                position: E
            }))
        }
          , p = E=>{
            u.offset = 0,
            a && (a = !1,
            t("close", {
                name: e.name,
                position: E
            }))
        }
          , C = E=>{
            const T = Math.abs(u.offset)
              , D = .15
              , k = a ? 1 - D : D
              , O = E === "left" ? m.value : y.value;
            O && T > O * k ? w(E) : p(E)
        }
          , g = E=>{
            e.disabled || (o = u.offset,
            f.start(E))
        }
          , v = E=>{
            if (e.disabled)
                return;
            const {deltaX: T} = f;
            f.move(E),
            f.isHorizontal() && (r = !0,
            u.dragging = !0,
            (!a || T.value * o < 0) && je(E, e.stopPropagation),
            u.offset = vt(T.value + o, -y.value, m.value))
        }
          , b = ()=>{
            u.dragging && (u.dragging = !1,
            C(u.offset > 0 ? "left" : "right"),
            setTimeout(()=>{
                r = !1
            }
            , 0))
        }
          , _ = (E="outside",T)=>{
            l || (t("click", E),
            a && !r && (l = !0,
            Ca(e.beforeClose, {
                args: [{
                    event: T,
                    name: e.name,
                    position: E
                }],
                done: ()=>{
                    l = !1,
                    p(E)
                }
                ,
                canceled: ()=>l = !1,
                error: ()=>l = !1
            })))
        }
          , S = (E,T)=>D=>{
            T && D.stopPropagation(),
            !r && _(E, D)
        }
          , A = (E,T)=>{
            const D = n[E];
            if (D)
                return h("div", {
                    ref: T,
                    class: os(E),
                    onClick: S(E, !0)
                }, [D()])
        }
        ;
        return De({
            open: w,
            close: p
        }),
        li(i, E=>_("outside", E), {
            eventName: "touchstart"
        }),
        tt("touchmove", v, {
            target: i
        }),
        ()=>{
            var E;
            const T = {
                transform: `translate3d(${u.offset}px, 0, 0)`,
                transitionDuration: u.dragging ? "0s" : ".6s"
            };
            return h("div", {
                ref: i,
                class: os(),
                onClick: S("cell", r),
                onTouchstartPassive: g,
                onTouchend: b,
                onTouchcancel: b
            }, [h("div", {
                class: os("wrapper"),
                style: T
            }, [A("left", s), (E = n.default) == null ? void 0 : E.call(n), A("right", c)])])
        }
    }
});
const QO = oe(ZO)
  , [Mv,Hd] = q("tabbar")
  , eP = {
    route: Boolean,
    fixed: X,
    border: X,
    zIndex: te,
    placeholder: Boolean,
    activeColor: String,
    beforeChange: Function,
    inactiveColor: String,
    modelValue: ge(0),
    safeAreaInsetBottom: {
        type: Boolean,
        default: null
    }
}
  , Bv = Symbol(Mv);
var tP = K({
    name: Mv,
    props: eP,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const a = V()
          , {linkChildren: r} = xt(Bv)
          , o = ci(a, Hd)
          , l = ()=>{
            var c;
            return (c = e.safeAreaInsetBottom) != null ? c : e.fixed
        }
          , i = ()=>{
            var c;
            const {fixed: u, zIndex: f, border: d} = e;
            return h("div", {
                ref: a,
                role: "tablist",
                style: Yn(f),
                class: [Hd({
                    fixed: u
                }), {
                    [ii]: d,
                    "van-safe-area-bottom": l()
                }]
            }, [(c = n.default) == null ? void 0 : c.call(n)])
        }
        ;
        return r({
            props: e,
            setActive: (c,u)=>{
                Ca(e.beforeChange, {
                    args: [c],
                    done() {
                        t("update:modelValue", c),
                        t("change", c),
                        u()
                    }
                })
            }
        }),
        ()=>e.fixed && e.placeholder ? o(i) : i()
    }
});
const Fv = oe(tP)
  , [nP,rs] = q("tabbar-item")
  , aP = _e({}, Sa, {
    dot: Boolean,
    icon: String,
    name: te,
    badge: te,
    badgeProps: Object,
    iconPrefix: String
});
var oP = K({
    name: nP,
    props: aP,
    emits: ["click"],
    setup(e, {emit: t, slots: n}) {
        const a = za()
          , r = gt().proxy
          , {parent: o, index: l} = _t(Bv);
        if (!o)
            return;
        const i = F(()=>{
            var u;
            const {route: f, modelValue: d} = o.props;
            if (f && "$route"in r) {
                const {$route: m} = r
                  , {to: y} = e
                  , w = Fn(y) ? y : {
                    path: y
                };
                return !!m.matched.find(p=>{
                    const C = "path"in w && w.path === p.path
                      , g = "name"in w && w.name === p.name;
                    return C || g
                }
                )
            }
            return ((u = e.name) != null ? u : l.value) === d
        }
        )
          , s = u=>{
            var f;
            i.value || o.setActive((f = e.name) != null ? f : l.value, a),
            t("click", u)
        }
          , c = ()=>{
            if (n.icon)
                return n.icon({
                    active: i.value
                });
            if (e.icon)
                return h(Ie, {
                    name: e.icon,
                    classPrefix: e.iconPrefix
                }, null)
        }
        ;
        return ()=>{
            var u;
            const {dot: f, badge: d} = e
              , {activeColor: m, inactiveColor: y} = o.props
              , w = i.value ? m : y;
            return h("div", {
                role: "tab",
                class: rs({
                    active: i.value
                }),
                style: {
                    color: w
                },
                tabindex: 0,
                "aria-selected": i.value,
                onClick: s
            }, [h(Ya, Re({
                dot: f,
                class: rs("icon"),
                content: d
            }, e.badgeProps), {
                default: c
            }), h("div", {
                class: rs("text")
            }, [(u = n.default) == null ? void 0 : u.call(n, {
                active: i.value
            })])])
        }
    }
});
const Vv = oe(oP)
  , [rP,Ud] = q("text-ellipsis")
  , lP = {
    rows: ge(1),
    dots: re("..."),
    content: re(""),
    expandText: re(""),
    collapseText: re(""),
    position: re("end")
};
var iP = K({
    name: rP,
    props: lP,
    emits: ["clickAction"],
    setup(e, {emit: t, slots: n}) {
        const a = V(e.content)
          , r = V(!1)
          , o = V(!1)
          , l = V()
          , i = V();
        let s = !1;
        const c = F(()=>r.value ? e.collapseText : e.expandText)
          , u = C=>{
            if (!C)
                return 0;
            const g = C.match(/^\d*(\.\d*)?/);
            return g ? Number(g[0]) : 0
        }
          , f = ()=>{
            if (!l.value || !l.value.isConnected)
                return;
            const C = window.getComputedStyle(l.value)
              , g = document.createElement("div");
            return Array.prototype.slice.apply(C).forEach(b=>{
                g.style.setProperty(b, C.getPropertyValue(b))
            }
            ),
            g.style.position = "fixed",
            g.style.zIndex = "-9999",
            g.style.top = "-9999px",
            g.style.height = "auto",
            g.style.minHeight = "auto",
            g.style.maxHeight = "auto",
            g.innerText = e.content,
            document.body.appendChild(g),
            g
        }
          , d = (C,g)=>{
            var v, b;
            const {content: _, position: S, dots: A} = e
              , E = _.length
              , T = 0 + E >> 1
              , D = n.action ? (b = (v = i.value) == null ? void 0 : v.outerHTML) != null ? b : "" : e.expandText
              , k = ()=>{
                const N = (Z,ce)=>{
                    if (ce - Z <= 1)
                        return S === "end" ? _.slice(0, Z) + A : A + _.slice(ce, E);
                    const j = Math.round((Z + ce) / 2);
                    return S === "end" ? C.innerText = _.slice(0, j) + A : C.innerText = A + _.slice(j, E),
                    C.innerHTML += D,
                    C.offsetHeight > g ? S === "end" ? N(Z, j) : N(j, ce) : S === "end" ? N(j, ce) : N(Z, j)
                }
                ;
                return N(0, E)
            }
              , O = (N,Z)=>{
                if (N[1] - N[0] <= 1 && Z[1] - Z[0] <= 1)
                    return _.slice(0, N[0]) + A + _.slice(Z[1], E);
                const ce = Math.floor((N[0] + N[1]) / 2)
                  , j = Math.ceil((Z[0] + Z[1]) / 2);
                return C.innerText = e.content.slice(0, ce) + e.dots + e.content.slice(j, E),
                C.innerHTML += D,
                C.offsetHeight >= g ? O([N[0], ce], [j, Z[1]]) : O([ce, N[1]], [Z[0], j])
            }
            ;
            return e.position === "middle" ? O([0, T], [T, E]) : k()
        }
          , m = ()=>{
            const C = f();
            if (!C) {
                s = !0;
                return
            }
            const {paddingBottom: g, paddingTop: v, lineHeight: b} = C.style
              , _ = Math.ceil((Number(e.rows) + .5) * u(b) + u(v) + u(g));
            _ < C.offsetHeight ? (o.value = !0,
            a.value = d(C, _)) : (o.value = !1,
            a.value = e.content),
            document.body.removeChild(C)
        }
          , y = (C=!r.value)=>{
            r.value = C
        }
          , w = C=>{
            y(),
            t("clickAction", C)
        }
          , p = ()=>{
            const C = n.action ? n.action({
                expanded: r.value
            }) : c.value;
            return h("span", {
                ref: i,
                class: Ud("action"),
                onClick: w
            }, [C])
        }
        ;
        return Qe(()=>{
            m(),
            n.action && Oe(m)
        }
        ),
        wn(()=>{
            s && (s = !1,
            m())
        }
        ),
        se([on, ()=>[e.content, e.rows, e.position]], m),
        De({
            toggle: y
        }),
        ()=>h("div", {
            ref: l,
            class: Ud()
        }, [r.value ? e.content : a.value, o.value ? p() : null])
    }
});
const sP = oe(iP)
  , [cP] = q("time-picker")
  , Wd = e=>/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(e)
  , uP = ["hour", "minute", "second"]
  , fP = _e({}, nv, {
    minHour: ge(0),
    maxHour: ge(23),
    minMinute: ge(0),
    maxMinute: ge(59),
    minSecond: ge(0),
    maxSecond: ge(59),
    minTime: {
        type: String,
        validator: Wd
    },
    maxTime: {
        type: String,
        validator: Wd
    },
    columnsType: {
        type: Array,
        default: ()=>["hour", "minute"]
    },
    filter: Function
});
var dP = K({
    name: cP,
    props: fP,
    emits: ["confirm", "cancel", "change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const a = V(e.modelValue)
          , r = V()
          , o = d=>{
            const m = d.split(":");
            return uP.map((y,w)=>e.columnsType.includes(y) ? m[w] : "00")
        }
          , l = ()=>{
            var d;
            return (d = r.value) == null ? void 0 : d.confirm()
        }
          , i = ()=>a.value
          , s = F(()=>{
            let {minHour: d, maxHour: m, minMinute: y, maxMinute: w, minSecond: p, maxSecond: C} = e;
            if (e.minTime || e.maxTime) {
                const g = {
                    hour: 0,
                    minute: 0,
                    second: 0
                };
                e.columnsType.forEach((_,S)=>{
                    var A;
                    g[_] = (A = a.value[S]) != null ? A : 0
                }
                );
                const {hour: v, minute: b} = g;
                if (e.minTime) {
                    const [_,S,A] = o(e.minTime);
                    d = _,
                    y = +v <= +d ? S : "00",
                    p = +v <= +d && +b <= +y ? A : "00"
                }
                if (e.maxTime) {
                    const [_,S,A] = o(e.maxTime);
                    m = _,
                    w = +v >= +m ? S : "59",
                    C = +v >= +m && +b >= +w ? A : "59"
                }
            }
            return e.columnsType.map(g=>{
                const {filter: v, formatter: b} = e;
                switch (g) {
                case "hour":
                    return _o(+d, +m, g, b, v, a.value);
                case "minute":
                    return _o(+y, +w, g, b, v, a.value);
                case "second":
                    return _o(+p, +C, g, b, v, a.value);
                default:
                    return []
                }
            }
            )
        }
        );
        se(a, d=>{
            pn(d, e.modelValue) || t("update:modelValue", d)
        }
        ),
        se(()=>e.modelValue, d=>{
            d = rv(d, s.value),
            pn(d, a.value) || (a.value = d)
        }
        , {
            immediate: !0
        });
        const c = (...d)=>t("change", ...d)
          , u = (...d)=>t("cancel", ...d)
          , f = (...d)=>t("confirm", ...d);
        return De({
            confirm: l,
            getSelectedTime: i
        }),
        ()=>h(gi, Re({
            ref: r,
            modelValue: a.value,
            "onUpdate:modelValue": d=>a.value = d,
            columns: s.value,
            onChange: c,
            onCancel: u,
            onConfirm: f
        }, Me(e, av)), n)
    }
});
const hP = oe(dP)
  , [mP,lo] = q("tree-select")
  , gP = {
    max: ge(1 / 0),
    items: Ke(),
    height: ge(300),
    selectedIcon: re("success"),
    mainActiveIndex: ge(0),
    activeId: {
        type: [Number, String, Array],
        default: 0
    }
};
var vP = K({
    name: mP,
    props: gP,
    emits: ["clickNav", "clickItem", "update:activeId", "update:mainActiveIndex"],
    setup(e, {emit: t, slots: n}) {
        const a = c=>Array.isArray(e.activeId) ? e.activeId.includes(c) : e.activeId === c
          , r = c=>{
            const u = ()=>{
                if (c.disabled)
                    return;
                let f;
                if (Array.isArray(e.activeId)) {
                    f = e.activeId.slice();
                    const d = f.indexOf(c.id);
                    d !== -1 ? f.splice(d, 1) : f.length < +e.max && f.push(c.id)
                } else
                    f = c.id;
                t("update:activeId", f),
                t("clickItem", c)
            }
            ;
            return h("div", {
                key: c.id,
                class: ["van-ellipsis", lo("item", {
                    active: a(c.id),
                    disabled: c.disabled
                })],
                onClick: u
            }, [c.text, a(c.id) && h(Ie, {
                name: e.selectedIcon,
                class: lo("selected")
            }, null)])
        }
          , o = c=>{
            t("update:mainActiveIndex", c)
        }
          , l = c=>t("clickNav", c)
          , i = ()=>{
            const c = e.items.map(u=>h(Ov, {
                dot: u.dot,
                badge: u.badge,
                class: [lo("nav-item"), u.className],
                disabled: u.disabled,
                onClick: l
            }, {
                title: ()=>n["nav-text"] ? n["nav-text"](u) : u.text
            }));
            return h(Av, {
                class: lo("nav"),
                modelValue: e.mainActiveIndex,
                onChange: o
            }, {
                default: ()=>[c]
            })
        }
          , s = ()=>{
            if (n.content)
                return n.content();
            const c = e.items[+e.mainActiveIndex] || {};
            if (c.children)
                return c.children.map(r)
        }
        ;
        return ()=>h("div", {
            class: lo(),
            style: {
                height: Ae(e.height)
            }
        }, [i(), h("div", {
            class: lo("content")
        }, [s()])])
    }
});
const bP = oe(vP)
  , [yP,ot,pP] = q("uploader");
function jd(e, t) {
    return new Promise(n=>{
        if (t === "file") {
            n();
            return
        }
        const a = new FileReader;
        a.onload = r=>{
            n(r.target.result)
        }
        ,
        t === "dataUrl" ? a.readAsDataURL(e) : t === "text" && a.readAsText(e)
    }
    )
}
function Hv(e, t) {
    return Pl(e).some(n=>n.file ? Ao(t) ? t(n.file) : n.file.size > +t : !1)
}
function _P(e, t) {
    const n = []
      , a = [];
    return e.forEach(r=>{
        Hv(r, t) ? a.push(r) : n.push(r)
    }
    ),
    {
        valid: n,
        invalid: a
    }
}
const wP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i
  , CP = e=>wP.test(e);
function Uv(e) {
    return e.isImage ? !0 : e.file && e.file.type ? e.file.type.indexOf("image") === 0 : e.url ? CP(e.url) : typeof e.content == "string" ? e.content.indexOf("data:image") === 0 : !1
}
var SP = K({
    props: {
        name: te,
        item: ft(Object),
        index: Number,
        imageFit: String,
        lazyLoad: Boolean,
        deletable: Boolean,
        reupload: Boolean,
        previewSize: [Number, String, Array],
        beforeDelete: Function
    },
    emits: ["delete", "preview", "reupload"],
    setup(e, {emit: t, slots: n}) {
        const a = ()=>{
            const {status: u, message: f} = e.item;
            if (u === "uploading" || u === "failed") {
                const d = u === "failed" ? h(Ie, {
                    name: "close",
                    class: ot("mask-icon")
                }, null) : h(un, {
                    class: ot("loading")
                }, null)
                  , m = $e(f) && f !== "";
                return h("div", {
                    class: ot("mask")
                }, [d, m && h("div", {
                    class: ot("mask-message")
                }, [f])])
            }
        }
          , r = u=>{
            const {name: f, item: d, index: m, beforeDelete: y} = e;
            u.stopPropagation(),
            Ca(y, {
                args: [d, {
                    name: f,
                    index: m
                }],
                done: ()=>t("delete")
            })
        }
          , o = ()=>t("preview")
          , l = ()=>t("reupload")
          , i = ()=>{
            if (e.deletable && e.item.status !== "uploading") {
                const u = n["preview-delete"];
                return h("div", {
                    role: "button",
                    class: ot("preview-delete", {
                        shadow: !u
                    }),
                    tabindex: 0,
                    "aria-label": pP("delete"),
                    onClick: r
                }, [u ? u() : h(Ie, {
                    name: "cross",
                    class: ot("preview-delete-icon")
                }, null)])
            }
        }
          , s = ()=>{
            if (n["preview-cover"]) {
                const {index: u, item: f} = e;
                return h("div", {
                    class: ot("preview-cover")
                }, [n["preview-cover"](_e({
                    index: u
                }, f))])
            }
        }
          , c = ()=>{
            const {item: u, lazyLoad: f, imageFit: d, previewSize: m, reupload: y} = e;
            return Uv(u) ? h(yi, {
                fit: d,
                src: u.objectUrl || u.content || u.url,
                class: ot("preview-image"),
                width: Array.isArray(m) ? m[0] : m,
                height: Array.isArray(m) ? m[1] : m,
                lazyLoad: f,
                onClick: y ? l : o
            }, {
                default: s
            }) : h("div", {
                class: ot("file"),
                style: zn(e.previewSize)
            }, [h(Ie, {
                class: ot("file-icon"),
                name: "description"
            }, null), h("div", {
                class: [ot("file-name"), "van-ellipsis"]
            }, [u.file ? u.file.name : u.url]), s()])
        }
        ;
        return ()=>h("div", {
            class: ot("preview")
        }, [c(), a(), i()])
    }
});
const EP = {
    name: ge(""),
    accept: re("image/*"),
    capture: String,
    multiple: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    lazyLoad: Boolean,
    maxCount: ge(1 / 0),
    imageFit: re("cover"),
    resultType: re("dataUrl"),
    uploadIcon: re("photograph"),
    uploadText: String,
    deletable: X,
    reupload: Boolean,
    afterRead: Function,
    showUpload: X,
    modelValue: Ke(),
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String, Array],
    previewImage: X,
    previewOptions: Object,
    previewFullImage: X,
    maxSize: {
        type: [Number, String, Function],
        default: 1 / 0
    }
};
var TP = K({
    name: yP,
    props: EP,
    emits: ["delete", "oversize", "clickUpload", "closePreview", "clickPreview", "clickReupload", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const a = V()
          , r = []
          , o = V(-1)
          , l = V(!1)
          , i = (E=e.modelValue.length)=>({
            name: e.name,
            index: E
        })
          , s = ()=>{
            a.value && (a.value.value = "")
        }
          , c = E=>{
            if (s(),
            Hv(E, e.maxSize))
                if (Array.isArray(E)) {
                    const T = _P(E, e.maxSize);
                    if (E = T.valid,
                    t("oversize", T.invalid, i()),
                    !E.length)
                        return
                } else {
                    t("oversize", E, i());
                    return
                }
            if (E = Ge(E),
            o.value > -1) {
                const T = [...e.modelValue];
                T.splice(o.value, 1, E),
                t("update:modelValue", T),
                o.value = -1
            } else
                t("update:modelValue", [...e.modelValue, ...Pl(E)]);
            e.afterRead && e.afterRead(E, i())
        }
          , u = E=>{
            const {maxCount: T, modelValue: D, resultType: k} = e;
            if (Array.isArray(E)) {
                const O = +T - D.length;
                E.length > O && (E = E.slice(0, O)),
                Promise.all(E.map(N=>jd(N, k))).then(N=>{
                    const Z = E.map((ce,j)=>{
                        const ee = {
                            file: ce,
                            status: "",
                            message: "",
                            objectUrl: URL.createObjectURL(ce)
                        };
                        return N[j] && (ee.content = N[j]),
                        ee
                    }
                    );
                    c(Z)
                }
                )
            } else
                jd(E, k).then(O=>{
                    const N = {
                        file: E,
                        status: "",
                        message: "",
                        objectUrl: URL.createObjectURL(E)
                    };
                    O && (N.content = O),
                    c(N)
                }
                )
        }
          , f = E=>{
            const {files: T} = E.target;
            if (e.disabled || !T || !T.length)
                return;
            const D = T.length === 1 ? T[0] : [].slice.call(T);
            if (e.beforeRead) {
                const k = e.beforeRead(D, i());
                if (!k) {
                    s();
                    return
                }
                if (Pc(k)) {
                    k.then(O=>{
                        u(O || D)
                    }
                    ).catch(s);
                    return
                }
            }
            u(D)
        }
        ;
        let d;
        const m = ()=>t("closePreview")
          , y = E=>{
            if (e.previewFullImage) {
                const T = e.modelValue.filter(Uv)
                  , D = T.map(k=>(k.objectUrl && !k.url && k.status !== "failed" && (k.url = k.objectUrl,
                r.push(k.url)),
                k.url)).filter(Boolean);
                d = vk(_e({
                    images: D,
                    startPosition: T.indexOf(E),
                    onClose: m
                }, e.previewOptions))
            }
        }
          , w = ()=>{
            d && d.close()
        }
          , p = (E,T)=>{
            const D = e.modelValue.slice(0);
            D.splice(T, 1),
            t("update:modelValue", D),
            t("delete", E, i(T))
        }
          , C = E=>{
            l.value = !0,
            o.value = E,
            Oe(()=>A())
        }
          , g = ()=>{
            l.value || (o.value = -1),
            l.value = !1
        }
          , v = (E,T)=>{
            const D = ["imageFit", "deletable", "reupload", "previewSize", "beforeDelete"]
              , k = _e(Me(e, D), Me(E, D, !0));
            return h(SP, Re({
                item: E,
                index: T,
                onClick: ()=>t(e.reupload ? "clickReupload" : "clickPreview", E, i(T)),
                onDelete: ()=>p(E, T),
                onPreview: ()=>y(E),
                onReupload: ()=>C(T)
            }, Me(e, ["name", "lazyLoad"]), k), Me(n, ["preview-cover", "preview-delete"]))
        }
          , b = ()=>{
            if (e.previewImage)
                return e.modelValue.map(v)
        }
          , _ = E=>t("clickUpload", E)
          , S = ()=>{
            const E = e.modelValue.length < +e.maxCount
              , T = e.readonly ? null : h("input", {
                ref: a,
                type: "file",
                class: ot("input"),
                accept: e.accept,
                capture: e.capture,
                multiple: e.multiple && o.value === -1,
                disabled: e.disabled,
                onChange: f,
                onClick: g
            }, null);
            return n.default ? st(h("div", {
                class: ot("input-wrapper"),
                onClick: _
            }, [n.default(), T]), [[dt, E]]) : st(h("div", {
                class: ot("upload", {
                    readonly: e.readonly
                }),
                style: zn(e.previewSize),
                onClick: _
            }, [h(Ie, {
                name: e.uploadIcon,
                class: ot("upload-icon")
            }, null), e.uploadText && h("span", {
                class: ot("upload-text")
            }, [e.uploadText]), T]), [[dt, e.showUpload && E]])
        }
          , A = ()=>{
            a.value && !e.disabled && a.value.click()
        }
        ;
        return cn(()=>{
            r.forEach(E=>URL.revokeObjectURL(E))
        }
        ),
        De({
            chooseFile: A,
            reuploadFile: C,
            closeImagePreview: w
        }),
        wa(()=>e.modelValue),
        ()=>h("div", {
            class: ot()
        }, [h("div", {
            class: ot("wrapper", {
                disabled: e.disabled
            })
        }, [b(), S()])])
    }
});
const xP = oe(TP)
  , [kP,zd] = q("watermark")
  , IP = {
    gapX: at(0),
    gapY: at(0),
    image: String,
    width: at(100),
    height: at(100),
    rotate: ge(-22),
    zIndex: te,
    content: String,
    opacity: te,
    fullPage: X,
    textColor: re("#dcdee0")
};
var AP = K({
    name: kP,
    props: IP,
    setup(e, {slots: t}) {
        const n = V()
          , a = V("")
          , r = V("")
          , o = ()=>{
            const s = {
                transformOrigin: "center",
                transform: `rotate(${e.rotate}deg)`
            }
              , c = ()=>e.image && !t.content ? h("image", {
                href: r.value,
                "xlink:href": r.value,
                x: "0",
                y: "0",
                width: e.width,
                height: e.height,
                style: s
            }, null) : h("foreignObject", {
                x: "0",
                y: "0",
                width: e.width,
                height: e.height
            }, [h("div", {
                xmlns: "http://www.w3.org/1999/xhtml",
                style: s
            }, [t.content ? t.content() : h("span", {
                style: {
                    color: e.textColor
                }
            }, [e.content])])])
              , u = e.width + e.gapX
              , f = e.height + e.gapY;
            return h("svg", {
                viewBox: `0 0 ${u} ${f}`,
                width: u,
                height: f,
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                style: {
                    padding: `0 ${e.gapX}px ${e.gapY}px 0`,
                    opacity: e.opacity
                }
            }, [c()])
        }
          , l = s=>{
            const c = document.createElement("canvas")
              , u = new Image;
            u.crossOrigin = "anonymous",
            u.referrerPolicy = "no-referrer",
            u.onload = ()=>{
                c.width = u.naturalWidth,
                c.height = u.naturalHeight;
                const f = c.getContext("2d");
                f == null || f.drawImage(u, 0, 0),
                r.value = c.toDataURL()
            }
            ,
            u.src = s
        }
          , i = s=>{
            const c = new Blob([s],{
                type: "image/svg+xml"
            });
            return URL.createObjectURL(c)
        }
        ;
        return Lo(()=>{
            e.image && l(e.image)
        }
        ),
        se(()=>[r.value, e.content, e.textColor, e.height, e.width, e.rotate, e.gapX, e.gapY], ()=>{
            Oe(()=>{
                n.value && (a.value && URL.revokeObjectURL(a.value),
                a.value = i(n.value.innerHTML))
            }
            )
        }
        , {
            immediate: !0
        }),
        Wa(()=>{
            a.value && URL.revokeObjectURL(a.value)
        }
        ),
        ()=>{
            const s = _e({
                backgroundImage: `url(${a.value})`
            }, Yn(e.zIndex));
            return h("div", {
                class: zd({
                    full: e.fullPage
                }),
                style: s
            }, [h("div", {
                class: zd("wrapper"),
                ref: n
            }, [o()])])
        }
    }
});
const OP = oe(AP)
  , PP = "4.9.4";
function RP(e) {
    [_g, Us, xS, FS, lT, OT, Ug, $T, Ya, VT, pt, ex, ix, dx, Jt, lv, Yc, Qg, wx, Ax, Lx, Bx, Fx, Wx, Gx, Zx, o1, Ks, h1, _1, E1, A1, D1, V1, H1, fv, Nn, z1, X1, Vc, Q1, ak, ik, Ie, yi, bk, Tk, xk, Pk, un, dg, $k, Fk, zk, Qk, xg, aI, iI, gi, sI, lA, fn, uA, vA, zc, Wc, wA, OA, PA, NA, jA, Av, Ov, tO, wO, Rv, TO, Lv, Pv, AO, LO, BO, WO, jO, Lg, XO, fi, QO, di, Uc, Tr, Fv, Vv, hi, bi, sP, hP, Gg, bP, xP, OP].forEach(n=>{
        n.install ? e.use(n) : n.name && e.component(n.name, n)
    }
    )
}
var LP = {
    install: RP,
    version: PP
};
const DP = {
    mounted(e, t) {
        const n = ()=>{
            e.src = t.value
        }
          , a = {
            root: null,
            threshold: .1
        };
        new IntersectionObserver((o,l)=>{
            o.forEach(i=>{
                i.isIntersecting && (n(),
                l.unobserve(e))
            }
            )
        }
        ,a).observe(e)
    }
}
  , kt = im(B0)
  , $P = Cp();
kt.use($P);
kt.use(A0);
kt.use(Al);
kt.use(bC);
kt.use(pt);
kt.use(Ie);
kt.use(lv);
kt.use(Jt);
kt.use(Fv);
kt.use(Vv);
kt.use(fi);
kt.use(di);
kt.use(Gg);
kt.use(LP);
kt.directive("lazy-load", DP);
kt.mount("#app");
export {jP as $, A0 as A, P0 as B, Pr as C, Ic as D, BP as E, Je as F, HP as G, bC as H, WP as I, Wl as J, NP as K, VP as L, FP as M, Jb as N, zP as O, Cn as P, qb as Q, gt as R, Ip as S, Fm as _, Lh as a, h as b, br as c, La as d, Uo as e, ql as f, UP as g, GP as h, nt as i, Qe as j, Yo as k, Ln as l, YP as m, MP as n, jt as o, Mb as p, Bb as q, V as r, F as s, ul as t, Ft as u, se as v, Fb as w, st as x, dt as y, Ul as z};
