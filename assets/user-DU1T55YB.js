import {B as h, S as T, r as a} from "./index-DPkatYq2.js";
function u(t, e=3e3) {
    const n = document.createElement("div");
    n.textContent = t,
    n.classList.add("tipBox"),
    document.body.appendChild(n),
    setTimeout(()=>{
        n.style.opacity = "0",
        setTimeout(()=>{
            n.remove()
        }
        , 1e3)
    }
    , e)
}
var _ = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_BASE_PATH: "/",
    VITE_TG_BOT_ID: "7280972930",
    VITE_TG_BOT_NAME: "Dragondemotapbot",
    VITE_TG_CHANNEL: "VIERAPACKS",
    VITE_TG_MINI_APP: "VIERASPIN"
};
const l = _.VITE_PROXY_API || window.location.origin;
async function m(t, e={}) {
    const n = l + t
      , o = f(t, e)
      , s = await fetch(n, o);
    return await g(s)
}
async function w(t, e={}) {
    const n = A()
      , o = l + t
      , s = {
        ...e.headers,
        "x-session-token": n.loginSessionToken
    }
      , r = f(t, {
        ...e,
        headers: s
    })
      , c = await fetch(o, r);
    return await y(c)
}
async function C(t, e={}) {
    const n = l + t
      , o = f(t, e)
      , s = await fetch(n, o);
    return await y(s)
}
async function I(t, e={}) {
    const n = h();
    try {
        return n.showLoading = !0,
        await w(t, e)
    } finally {
        n.showLoading = !1
    }
}
async function v(t, e={}) {
    const n = h();
    try {
        return n.showLoading = !0,
        await m(t, e)
    } finally {
        n.showLoading = !1
    }
}
function f(t, e) {
    const n = {
        ...e.headers,
        "Content-Type": "application/json"
    };
    let o = e.body;
    return o = JSON.stringify(S(o)),
    {
        method: "POST",
        ...e,
        headers: n,
        body: o
    }
}
async function g(t) {
    if (t.ok) {
        const e = await t.json();
        if (e.code === 200 | e.code === 0)
            return e;
        if (e.code === 10024)
            return e;
        throw u(e.message),
        new Error(e.code)
    } else {
        const e = await t.json();
        throw u(e.message),
        new Error(e == null ? void 0 : e.message)
    }
}
async function y(t) {
    if (t.ok) {
        const e = await t.json();
        if (e.Code === 0)
            return e;
        throw u(e.Message),
        new Error(e.Code)
    } else {
        const e = await t.json();
        throw u(e.message),
        new Error(e == null ? void 0 : e.message)
    }
}
function S(t) {
    const e = {};
    return t && Object.entries(t).forEach(n=>{
        const [o,s] = n;
        let r = s;
        typeof s == "string" && (r = s.trim()),
        typeof r < "u" && r !== null && (Array.isArray(r) && r.length === 0 || (e[o] = r))
    }
    ),
    e
}
const A = T("user", ()=>{
    const t = a("")
      , e = a(0)
      , n = a(0)
      , o = a(0)
      , s = a(null)
      , r = a("")
      , c = a(0)
      , d = a("");
    function p() {
        w("/api/v2/activity/GetUserInfo").then(({Data: i})=>{
            n.value = i.Balance,
            o.value = i.WithdrawnAmount,
            e.value = i.Spins,
            t.value = i.WalletAddr,
            c.value = i.GoldCoinBalance,
            d.value = i.GoldCoinToUSD
        }
        )
    }
    return {
        ifsc: t,
        leftSpins: e,
        balance: n,
        withdrawnAmount: o,
        inChannel: s,
        loginSessionToken: r,
        goldCoinBalance: c,
        goldCoinToUSD: d,
        syncFromServer: p
    }
}
);
export {w as a, I as b, v as c, m as d, C as f, u as t, A as u};
