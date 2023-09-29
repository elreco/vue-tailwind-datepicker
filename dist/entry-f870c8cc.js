import { cloneVNode as Gt, h as me, Fragment as je, inject as De, provide as ne, ref as J, onMounted as rt, watchEffect as $e, computed as ue, defineComponent as ie, onUnmounted as et, Teleport as Zt, reactive as vt, shallowRef as qt, openBlock as W, createElementBlock as q, createElementVNode as E, withDirectives as pe, vShow as ve, toDisplayString as se, renderList as Ke, withModifiers as Ae, unref as le, createCommentVNode as ye, createVNode as ee, TransitionGroup as Jt, withCtx as Fe, normalizeClass as Oe, Transition as mt, nextTick as He, watch as Xt, isProxy as Qt, createBlock as Ue, renderSlot as dt, mergeProps as er, vModelText as tr } from "vue";
function _e(t, o, ...a) {
  if (t in o) {
    let l = o[t];
    return typeof l == "function" ? l(...a) : l;
  }
  let e = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(o).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(e, _e), e;
}
var ze = ((t) => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(ze || {}), rr = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(rr || {});
function Pe({ visible: t = !0, features: o = 0, ourProps: a, theirProps: e, ...l }) {
  var n;
  let y = yt(e, a), u = Object.assign(l, { props: y });
  if (t || o & 2 && y.static)
    return st(u);
  if (o & 1) {
    let m = (n = y.unmount) == null || n ? 0 : 1;
    return _e(m, { 0() {
      return null;
    }, 1() {
      return st({ ...l, props: { ...y, hidden: !0, style: { display: "none" } } });
    } });
  }
  return st(u);
}
function st({ props: t, attrs: o, slots: a, slot: e, name: l }) {
  var n, y;
  let { as: u, ...m } = or(t, ["unmount", "static"]), p = (n = a.default) == null ? void 0 : n.call(a, e), w = {};
  if (e) {
    let b = !1, P = [];
    for (let [T, I] of Object.entries(e))
      typeof I == "boolean" && (b = !0), I === !0 && P.push(T);
    b && (w["data-headlessui-state"] = P.join(" "));
  }
  if (u === "template") {
    if (p = ht(p ?? []), Object.keys(m).length > 0 || Object.keys(o).length > 0) {
      let [b, ...P] = p ?? [];
      if (!ar(b) || P.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(m).concat(Object.keys(o)).map((g) => g.trim()).filter((g, D, Y) => Y.indexOf(g) === D).sort((g, D) => g.localeCompare(D)).map((g) => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((g) => `  - ${g}`).join(`
`)].join(`
`));
      let T = yt((y = b.props) != null ? y : {}, m), I = Gt(b, T);
      for (let g in T)
        g.startsWith("on") && (I.props || (I.props = {}), I.props[g] = T[g]);
      return I;
    }
    return Array.isArray(p) && p.length === 1 ? p[0] : p;
  }
  return me(u, Object.assign({}, m, w), { default: () => p });
}
function ht(t) {
  return t.flatMap((o) => o.type === je ? ht(o.children) : [o]);
}
function yt(...t) {
  if (t.length === 0)
    return {};
  if (t.length === 1)
    return t[0];
  let o = {}, a = {};
  for (let e of t)
    for (let l in e)
      l.startsWith("on") && typeof e[l] == "function" ? (a[l] != null || (a[l] = []), a[l].push(e[l])) : o[l] = e[l];
  if (o.disabled || o["aria-disabled"])
    return Object.assign(o, Object.fromEntries(Object.keys(a).map((e) => [e, void 0])));
  for (let e in a)
    Object.assign(o, { [e](l, ...n) {
      let y = a[e];
      for (let u of y) {
        if (l instanceof Event && l.defaultPrevented)
          return;
        u(l, ...n);
      }
    } });
  return o;
}
function or(t, o = []) {
  let a = Object.assign({}, t);
  for (let e of o)
    e in a && delete a[e];
  return a;
}
function ar(t) {
  return t == null ? !1 : typeof t.type == "string" || typeof t.type == "object" || typeof t.type == "function";
}
let nr = 0;
function sr() {
  return ++nr;
}
function Be() {
  return sr();
}
var Ve = ((t) => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(Ve || {});
function H(t) {
  var o;
  return t == null || t.value == null ? null : (o = t.value.$el) != null ? o : t.value;
}
let bt = Symbol("Context");
var Ye = ((t) => (t[t.Open = 1] = "Open", t[t.Closed = 2] = "Closed", t[t.Closing = 4] = "Closing", t[t.Opening = 8] = "Opening", t))(Ye || {});
function gt() {
  return De(bt, null);
}
function lr(t) {
  ne(bt, t);
}
function ct(t, o) {
  if (t)
    return t;
  let a = o ?? "button";
  if (typeof a == "string" && a.toLowerCase() === "button")
    return "button";
}
function ur(t, o) {
  let a = J(ct(t.value.type, t.value.as));
  return rt(() => {
    a.value = ct(t.value.type, t.value.as);
  }), $e(() => {
    var e;
    a.value || H(o) && H(o) instanceof HTMLButtonElement && !((e = H(o)) != null && e.hasAttribute("type")) && (a.value = "button");
  }), a;
}
var ir = Object.defineProperty, dr = (t, o, a) => o in t ? ir(t, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[o] = a, ft = (t, o, a) => (dr(t, typeof o != "symbol" ? o + "" : o, a), a);
class cr {
  constructor() {
    ft(this, "current", this.detect()), ft(this, "currentId", 0);
  }
  set(o) {
    this.current !== o && (this.currentId = 0, this.current = o);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let ot = new cr();
function Te(t) {
  if (ot.isServer)
    return null;
  if (t instanceof Node)
    return t.ownerDocument;
  if (t != null && t.hasOwnProperty("value")) {
    let o = H(t);
    if (o)
      return o.ownerDocument;
  }
  return document;
}
let lt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((t) => `${t}:not([tabindex='-1'])`).join(",");
var Me = ((t) => (t[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t))(Me || {}), tt = ((t) => (t[t.Error = 0] = "Error", t[t.Overflow = 1] = "Overflow", t[t.Success = 2] = "Success", t[t.Underflow = 3] = "Underflow", t))(tt || {}), fr = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(fr || {});
function at(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(lt)).sort((o, a) => Math.sign((o.tabIndex || Number.MAX_SAFE_INTEGER) - (a.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var it = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(it || {});
function xt(t, o = 0) {
  var a;
  return t === ((a = Te(t)) == null ? void 0 : a.body) ? !1 : _e(o, { 0() {
    return t.matches(lt);
  }, 1() {
    let e = t;
    for (; e !== null; ) {
      if (e.matches(lt))
        return !0;
      e = e.parentElement;
    }
    return !1;
  } });
}
var pr = ((t) => (t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(pr || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (t) => {
  t.metaKey || t.altKey || t.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (t) => {
  t.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : t.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let vr = ["textarea", "input"].join(",");
function mr(t) {
  var o, a;
  return (a = (o = t == null ? void 0 : t.matches) == null ? void 0 : o.call(t, vr)) != null ? a : !1;
}
function hr(t, o = (a) => a) {
  return t.slice().sort((a, e) => {
    let l = o(a), n = o(e);
    if (l === null || n === null)
      return 0;
    let y = l.compareDocumentPosition(n);
    return y & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : y & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ce(t, o, { sorted: a = !0, relativeTo: e = null, skipElements: l = [] } = {}) {
  var n;
  let y = (n = Array.isArray(t) ? t.length > 0 ? t[0].ownerDocument : document : t == null ? void 0 : t.ownerDocument) != null ? n : document, u = Array.isArray(t) ? a ? hr(t) : t : at(t);
  l.length > 0 && u.length > 1 && (u = u.filter((I) => !l.includes(I))), e = e ?? y.activeElement;
  let m = (() => {
    if (o & 5)
      return 1;
    if (o & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = (() => {
    if (o & 1)
      return 0;
    if (o & 2)
      return Math.max(0, u.indexOf(e)) - 1;
    if (o & 4)
      return Math.max(0, u.indexOf(e)) + 1;
    if (o & 8)
      return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), w = o & 32 ? { preventScroll: !0 } : {}, b = 0, P = u.length, T;
  do {
    if (b >= P || b + P <= 0)
      return 0;
    let I = p + b;
    if (o & 16)
      I = (I + P) % P;
    else {
      if (I < 0)
        return 3;
      if (I >= P)
        return 1;
    }
    T = u[I], T == null || T.focus(w), b += m;
  } while (T !== y.activeElement);
  return o & 6 && mr(T) && T.select(), 2;
}
function Ge(t, o, a) {
  ot.isServer || $e((e) => {
    document.addEventListener(t, o, a), e(() => document.removeEventListener(t, o, a));
  });
}
function wt(t, o, a) {
  ot.isServer || $e((e) => {
    window.addEventListener(t, o, a), e(() => window.removeEventListener(t, o, a));
  });
}
function yr(t, o, a = ue(() => !0)) {
  function e(n, y) {
    if (!a.value || n.defaultPrevented)
      return;
    let u = y(n);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let m = function p(w) {
      return typeof w == "function" ? p(w()) : Array.isArray(w) || w instanceof Set ? w : [w];
    }(t);
    for (let p of m) {
      if (p === null)
        continue;
      let w = p instanceof HTMLElement ? p : H(p);
      if (w != null && w.contains(u) || n.composed && n.composedPath().includes(w))
        return;
    }
    return !xt(u, it.Loose) && u.tabIndex !== -1 && n.preventDefault(), o(n, u);
  }
  let l = J(null);
  Ge("pointerdown", (n) => {
    var y, u;
    a.value && (l.value = ((u = (y = n.composedPath) == null ? void 0 : y.call(n)) == null ? void 0 : u[0]) || n.target);
  }, !0), Ge("mousedown", (n) => {
    var y, u;
    a.value && (l.value = ((u = (y = n.composedPath) == null ? void 0 : y.call(n)) == null ? void 0 : u[0]) || n.target);
  }, !0), Ge("click", (n) => {
    l.value && (e(n, () => l.value), l.value = null);
  }, !0), Ge("touchend", (n) => e(n, () => n.target instanceof HTMLElement ? n.target : null), !0), wt("blur", (n) => e(n, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ne = ((t) => (t[t.None = 1] = "None", t[t.Focusable = 2] = "Focusable", t[t.Hidden = 4] = "Hidden", t))(Ne || {});
let We = ie({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t, { slots: o, attrs: a }) {
  return () => {
    let { features: e, ...l } = t, n = { "aria-hidden": (e & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
    return Pe({ ourProps: n, theirProps: l, slot: {}, attrs: a, slots: o, name: "Hidden" });
  };
} });
var Se = ((t) => (t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(Se || {});
function kt() {
  let t = J(0);
  return wt("keydown", (o) => {
    o.key === "Tab" && (t.value = o.shiftKey ? 1 : 0);
  }), t;
}
function br(t, o, a, e) {
  ot.isServer || $e((l) => {
    t = t ?? window, t.addEventListener(o, a, e), l(() => t.removeEventListener(o, a, e));
  });
}
let $t = Symbol("ForcePortalRootContext");
function gr() {
  return De($t, !1);
}
ie({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(t, { slots: o, attrs: a }) {
  return ne($t, t.force), () => {
    let { force: e, ...l } = t;
    return Pe({ theirProps: l, ourProps: {}, slot: {}, slots: o, attrs: a, name: "ForcePortalRoot" });
  };
} });
function xr(t) {
  let o = Te(t);
  if (!o) {
    if (t === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`);
  }
  let a = o.getElementById("headlessui-portal-root");
  if (a)
    return a;
  let e = o.createElement("div");
  return e.setAttribute("id", "headlessui-portal-root"), o.body.appendChild(e);
}
ie({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: o, attrs: a }) {
  let e = J(null), l = ue(() => Te(e)), n = gr(), y = De(jt, null), u = J(n === !0 || y == null ? xr(e.value) : y.resolveTarget());
  $e(() => {
    n || y != null && (u.value = y.resolveTarget());
  });
  let m = De(ut, null);
  return rt(() => {
    let p = H(e);
    p && m && et(m.register(p));
  }), et(() => {
    var p, w;
    let b = (p = l.value) == null ? void 0 : p.getElementById("headlessui-portal-root");
    b && u.value === b && u.value.children.length <= 0 && ((w = u.value.parentElement) == null || w.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let p = { ref: e, "data-headlessui-portal": "" };
    return me(Zt, { to: u.value }, Pe({ ourProps: p, theirProps: t, slot: {}, attrs: a, slots: o, name: "Portal" }));
  };
} });
let ut = Symbol("PortalParentContext");
function wr() {
  let t = De(ut, null), o = J([]);
  function a(n) {
    return o.value.push(n), t && t.register(n), () => e(n);
  }
  function e(n) {
    let y = o.value.indexOf(n);
    y !== -1 && o.value.splice(y, 1), t && t.unregister(n);
  }
  let l = { register: a, unregister: e, portals: o };
  return [o, ie({ name: "PortalWrapper", setup(n, { slots: y }) {
    return ne(ut, l), () => {
      var u;
      return (u = y.default) == null ? void 0 : u.call(y);
    };
  } })];
}
let jt = Symbol("PortalGroupContext");
ie({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(t, { attrs: o, slots: a }) {
  let e = vt({ resolveTarget() {
    return t.target;
  } });
  return ne(jt, e), () => {
    let { target: l, ...n } = t;
    return Pe({ theirProps: n, ourProps: {}, slot: {}, attrs: o, slots: a, name: "PortalGroup" });
  };
} });
function kr({ defaultContainers: t = [], portals: o, mainTreeNodeRef: a } = {}) {
  let e = J(null), l = Te(e);
  function n() {
    var y;
    let u = [];
    for (let m of t)
      m !== null && (m instanceof HTMLElement ? u.push(m) : "value" in m && m.value instanceof HTMLElement && u.push(m.value));
    if (o != null && o.value)
      for (let m of o.value)
        u.push(m);
    for (let m of (y = l == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? y : [])
      m !== document.body && m !== document.head && m instanceof HTMLElement && m.id !== "headlessui-portal-root" && (m.contains(H(e)) || u.some((p) => m.contains(p)) || u.push(m));
    return u;
  }
  return { resolveContainers: n, contains(y) {
    return n().some((u) => u.contains(y));
  }, mainTreeNodeRef: e, MainTreeNode() {
    return a != null ? null : me(We, { features: Ne.Hidden, ref: e });
  } };
}
function $r() {
  let t = J(null);
  return { mainTreeNodeRef: t, MainTreeNode() {
    return me(We, { features: Ne.Hidden, ref: t });
  } };
}
var jr = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(jr || {});
let Mt = Symbol("PopoverContext");
function nt(t) {
  let o = De(Mt, null);
  if (o === null) {
    let a = new Error(`<${t} /> is missing a parent <${Pt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, nt), a;
  }
  return o;
}
let St = Symbol("PopoverGroupContext");
function Dt() {
  return De(St, null);
}
let _t = Symbol("PopoverPanelContext");
function Mr() {
  return De(_t, null);
}
let Pt = ie({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: o, attrs: a, expose: e }) {
  var l;
  let n = J(null);
  e({ el: n, $el: n });
  let y = J(1), u = J(null), m = J(null), p = J(null), w = J(null), b = ue(() => Te(n)), P = ue(() => {
    var O, _;
    if (!H(u) || !H(w))
      return !1;
    for (let Z of document.querySelectorAll("body > *"))
      if (Number(Z == null ? void 0 : Z.contains(H(u))) ^ Number(Z == null ? void 0 : Z.contains(H(w))))
        return !0;
    let s = at(), r = s.indexOf(H(u)), R = (r + s.length - 1) % s.length, N = (r + 1) % s.length, j = s[R], K = s[N];
    return !((O = H(w)) != null && O.contains(j)) && !((_ = H(w)) != null && _.contains(K));
  }), T = { popoverState: y, buttonId: J(null), panelId: J(null), panel: w, button: u, isPortalled: P, beforePanelSentinel: m, afterPanelSentinel: p, togglePopover() {
    y.value = _e(y.value, { 0: 1, 1: 0 });
  }, closePopover() {
    y.value !== 1 && (y.value = 1);
  }, close(O) {
    T.closePopover();
    let _ = (() => O ? O instanceof HTMLElement ? O : O.value instanceof HTMLElement ? H(O) : H(T.button) : H(T.button))();
    _ == null || _.focus();
  } };
  ne(Mt, T), lr(ue(() => _e(y.value, { 0: Ye.Open, 1: Ye.Closed })));
  let I = { buttonId: T.buttonId, panelId: T.panelId, close() {
    T.closePopover();
  } }, g = Dt(), D = g == null ? void 0 : g.registerPopover, [Y, k] = wr(), x = kr({ mainTreeNodeRef: g == null ? void 0 : g.mainTreeNodeRef, portals: Y, defaultContainers: [u, w] });
  function V() {
    var O, _, s, r;
    return (r = g == null ? void 0 : g.isFocusWithinPopoverGroup()) != null ? r : ((O = b.value) == null ? void 0 : O.activeElement) && (((_ = H(u)) == null ? void 0 : _.contains(b.value.activeElement)) || ((s = H(w)) == null ? void 0 : s.contains(b.value.activeElement)));
  }
  return $e(() => D == null ? void 0 : D(I)), br((l = b.value) == null ? void 0 : l.defaultView, "focus", (O) => {
    var _, s;
    O.target !== window && O.target instanceof HTMLElement && y.value === 0 && (V() || u && w && (x.contains(O.target) || (_ = H(T.beforePanelSentinel)) != null && _.contains(O.target) || (s = H(T.afterPanelSentinel)) != null && s.contains(O.target) || T.closePopover()));
  }, !0), yr(x.resolveContainers, (O, _) => {
    var s;
    T.closePopover(), xt(_, it.Loose) || (O.preventDefault(), (s = H(u)) == null || s.focus());
  }, ue(() => y.value === 0)), () => {
    let O = { open: y.value === 0, close: T.close };
    return me(je, [me(k, {}, () => Pe({ theirProps: { ...t, ...a }, ourProps: { ref: n }, slot: O, slots: o, attrs: a, name: "Popover" })), me(x.MainTreeNode)]);
  };
} }), Sr = ie({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${Be()}` } }, inheritAttrs: !1, setup(t, { attrs: o, slots: a, expose: e }) {
  let l = nt("PopoverButton"), n = ue(() => Te(l.button));
  e({ el: l.button, $el: l.button }), rt(() => {
    l.buttonId.value = t.id;
  }), et(() => {
    l.buttonId.value = null;
  });
  let y = Dt(), u = y == null ? void 0 : y.closeOthers, m = Mr(), p = ue(() => m === null ? !1 : m.value === l.panelId.value), w = J(null), b = `headlessui-focus-sentinel-${Be()}`;
  p.value || $e(() => {
    l.button.value = w.value;
  });
  let P = ur(ue(() => ({ as: t.as, type: o.type })), w);
  function T(x) {
    var V, O, _, s, r;
    if (p.value) {
      if (l.popoverState.value === 1)
        return;
      switch (x.key) {
        case Ve.Space:
        case Ve.Enter:
          x.preventDefault(), (O = (V = x.target).click) == null || O.call(V), l.closePopover(), (_ = H(l.button)) == null || _.focus();
          break;
      }
    } else
      switch (x.key) {
        case Ve.Space:
        case Ve.Enter:
          x.preventDefault(), x.stopPropagation(), l.popoverState.value === 1 && (u == null || u(l.buttonId.value)), l.togglePopover();
          break;
        case Ve.Escape:
          if (l.popoverState.value !== 0)
            return u == null ? void 0 : u(l.buttonId.value);
          if (!H(l.button) || (s = n.value) != null && s.activeElement && !((r = H(l.button)) != null && r.contains(n.value.activeElement)))
            return;
          x.preventDefault(), x.stopPropagation(), l.closePopover();
          break;
      }
  }
  function I(x) {
    p.value || x.key === Ve.Space && x.preventDefault();
  }
  function g(x) {
    var V, O;
    t.disabled || (p.value ? (l.closePopover(), (V = H(l.button)) == null || V.focus()) : (x.preventDefault(), x.stopPropagation(), l.popoverState.value === 1 && (u == null || u(l.buttonId.value)), l.togglePopover(), (O = H(l.button)) == null || O.focus()));
  }
  function D(x) {
    x.preventDefault(), x.stopPropagation();
  }
  let Y = kt();
  function k() {
    let x = H(l.panel);
    if (!x)
      return;
    function V() {
      _e(Y.value, { [Se.Forwards]: () => Ce(x, Me.First), [Se.Backwards]: () => Ce(x, Me.Last) }) === tt.Error && Ce(at().filter((O) => O.dataset.headlessuiFocusGuard !== "true"), _e(Y.value, { [Se.Forwards]: Me.Next, [Se.Backwards]: Me.Previous }), { relativeTo: H(l.button) });
    }
    V();
  }
  return () => {
    let x = l.popoverState.value === 0, V = { open: x }, { id: O, ..._ } = t, s = p.value ? { ref: w, type: P.value, onKeydown: T, onClick: g } : { ref: w, id: O, type: P.value, "aria-expanded": l.popoverState.value === 0, "aria-controls": H(l.panel) ? l.panelId.value : void 0, disabled: t.disabled ? !0 : void 0, onKeydown: T, onKeyup: I, onClick: g, onMousedown: D };
    return me(je, [Pe({ ourProps: s, theirProps: { ...o, ..._ }, slot: V, attrs: o, slots: a, name: "PopoverButton" }), x && !p.value && l.isPortalled.value && me(We, { id: b, features: Ne.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: k })]);
  };
} }), Dr = ie({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(t, { attrs: o, slots: a }) {
  let e = nt("PopoverOverlay"), l = `headlessui-popover-overlay-${Be()}`, n = gt(), y = ue(() => n !== null ? (n.value & Ye.Open) === Ye.Open : e.popoverState.value === 0);
  function u() {
    e.closePopover();
  }
  return () => {
    let m = { open: e.popoverState.value === 0 };
    return Pe({ ourProps: { id: l, "aria-hidden": !0, onClick: u }, theirProps: t, slot: m, attrs: o, slots: a, features: ze.RenderStrategy | ze.Static, visible: y.value, name: "PopoverOverlay" });
  };
} }), _r = ie({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${Be()}` } }, inheritAttrs: !1, setup(t, { attrs: o, slots: a, expose: e }) {
  let { focus: l } = t, n = nt("PopoverPanel"), y = ue(() => Te(n.panel)), u = `headlessui-focus-sentinel-before-${Be()}`, m = `headlessui-focus-sentinel-after-${Be()}`;
  e({ el: n.panel, $el: n.panel }), rt(() => {
    n.panelId.value = t.id;
  }), et(() => {
    n.panelId.value = null;
  }), ne(_t, n.panelId), $e(() => {
    var D, Y;
    if (!l || n.popoverState.value !== 0 || !n.panel)
      return;
    let k = (D = y.value) == null ? void 0 : D.activeElement;
    (Y = H(n.panel)) != null && Y.contains(k) || Ce(H(n.panel), Me.First);
  });
  let p = gt(), w = ue(() => p !== null ? (p.value & Ye.Open) === Ye.Open : n.popoverState.value === 0);
  function b(D) {
    var Y, k;
    switch (D.key) {
      case Ve.Escape:
        if (n.popoverState.value !== 0 || !H(n.panel) || y.value && !((Y = H(n.panel)) != null && Y.contains(y.value.activeElement)))
          return;
        D.preventDefault(), D.stopPropagation(), n.closePopover(), (k = H(n.button)) == null || k.focus();
        break;
    }
  }
  function P(D) {
    var Y, k, x, V, O;
    let _ = D.relatedTarget;
    _ && H(n.panel) && ((Y = H(n.panel)) != null && Y.contains(_) || (n.closePopover(), ((x = (k = H(n.beforePanelSentinel)) == null ? void 0 : k.contains) != null && x.call(k, _) || (O = (V = H(n.afterPanelSentinel)) == null ? void 0 : V.contains) != null && O.call(V, _)) && _.focus({ preventScroll: !0 })));
  }
  let T = kt();
  function I() {
    let D = H(n.panel);
    if (!D)
      return;
    function Y() {
      _e(T.value, { [Se.Forwards]: () => {
        var k;
        Ce(D, Me.First) === tt.Error && ((k = H(n.afterPanelSentinel)) == null || k.focus());
      }, [Se.Backwards]: () => {
        var k;
        (k = H(n.button)) == null || k.focus({ preventScroll: !0 });
      } });
    }
    Y();
  }
  function g() {
    let D = H(n.panel);
    if (!D)
      return;
    function Y() {
      _e(T.value, { [Se.Forwards]: () => {
        let k = H(n.button), x = H(n.panel);
        if (!k)
          return;
        let V = at(), O = V.indexOf(k), _ = V.slice(0, O + 1), s = [...V.slice(O + 1), ..._];
        for (let r of s.slice())
          if (r.dataset.headlessuiFocusGuard === "true" || x != null && x.contains(r)) {
            let R = s.indexOf(r);
            R !== -1 && s.splice(R, 1);
          }
        Ce(s, Me.First, { sorted: !1 });
      }, [Se.Backwards]: () => {
        var k;
        Ce(D, Me.Previous) === tt.Error && ((k = H(n.button)) == null || k.focus());
      } });
    }
    Y();
  }
  return () => {
    let D = { open: n.popoverState.value === 0, close: n.close }, { id: Y, focus: k, ...x } = t, V = { ref: n.panel, id: Y, onKeydown: b, onFocusout: l && n.popoverState.value === 0 ? P : void 0, tabIndex: -1 };
    return Pe({ ourProps: V, theirProps: { ...o, ...x }, attrs: o, slot: D, slots: { ...a, default: (...O) => {
      var _;
      return [me(je, [w.value && n.isPortalled.value && me(We, { id: u, ref: n.beforePanelSentinel, features: Ne.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: I }), (_ = a.default) == null ? void 0 : _.call(a, ...O), w.value && n.isPortalled.value && me(We, { id: m, ref: n.afterPanelSentinel, features: Ne.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g })])];
    } }, features: ze.RenderStrategy | ze.Static, visible: w.value, name: "PopoverPanel" });
  };
} });
ie({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(t, { attrs: o, slots: a, expose: e }) {
  let l = J(null), n = qt([]), y = ue(() => Te(l)), u = $r();
  e({ el: l, $el: l });
  function m(P) {
    let T = n.value.indexOf(P);
    T !== -1 && n.value.splice(T, 1);
  }
  function p(P) {
    return n.value.push(P), () => {
      m(P);
    };
  }
  function w() {
    var P;
    let T = y.value;
    if (!T)
      return !1;
    let I = T.activeElement;
    return (P = H(l)) != null && P.contains(I) ? !0 : n.value.some((g) => {
      var D, Y;
      return ((D = T.getElementById(g.buttonId.value)) == null ? void 0 : D.contains(I)) || ((Y = T.getElementById(g.panelId.value)) == null ? void 0 : Y.contains(I));
    });
  }
  function b(P) {
    for (let T of n.value)
      T.buttonId.value !== P && T.close();
  }
  return ne(St, { registerPopover: p, unregisterPopover: m, isFocusWithinPopoverGroup: w, closeOthers: b, mainTreeNodeRef: u.mainTreeNodeRef }), () => me(je, [Pe({ ourProps: { ref: l }, theirProps: { ...t, ...o }, slot: {}, attrs: o, slots: a, name: "PopoverGroup" }), me(u.MainTreeNode)]);
} });
var Ee = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Le(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Vt = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ee, function() {
    var a = 1e3, e = 6e4, l = 36e5, n = "millisecond", y = "second", u = "minute", m = "hour", p = "day", w = "week", b = "month", P = "quarter", T = "year", I = "date", g = "Invalid Date", D = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, k = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(C) {
      var h = ["th", "st", "nd", "rd"], S = C % 100;
      return "[" + C + (h[(S - 20) % 10] || h[S] || h[0]) + "]";
    } }, x = function(C, h, S) {
      var A = String(C);
      return !A || A.length >= h ? C : "" + Array(h + 1 - A.length).join(S) + C;
    }, V = { s: x, z: function(C) {
      var h = -C.utcOffset(), S = Math.abs(h), A = Math.floor(S / 60), M = S % 60;
      return (h <= 0 ? "+" : "-") + x(A, 2, "0") + ":" + x(M, 2, "0");
    }, m: function C(h, S) {
      if (h.date() < S.date())
        return -C(S, h);
      var A = 12 * (S.year() - h.year()) + (S.month() - h.month()), M = h.clone().add(A, b), B = S - M < 0, F = h.clone().add(A + (B ? -1 : 1), b);
      return +(-(A + (S - M) / (B ? M - F : F - M)) || 0);
    }, a: function(C) {
      return C < 0 ? Math.ceil(C) || 0 : Math.floor(C);
    }, p: function(C) {
      return { M: b, y: T, w, d: p, D: I, h: m, m: u, s: y, ms: n, Q: P }[C] || String(C || "").toLowerCase().replace(/s$/, "");
    }, u: function(C) {
      return C === void 0;
    } }, O = "en", _ = {};
    _[O] = k;
    var s = "$isDayjsObject", r = function(C) {
      return C instanceof K || !(!C || !C[s]);
    }, R = function C(h, S, A) {
      var M;
      if (!h)
        return O;
      if (typeof h == "string") {
        var B = h.toLowerCase();
        _[B] && (M = B), S && (_[B] = S, M = B);
        var F = h.split("-");
        if (!M && F.length > 1)
          return C(F[0]);
      } else {
        var G = h.name;
        _[G] = h, M = G;
      }
      return !A && M && (O = M), M || !A && O;
    }, N = function(C, h) {
      if (r(C))
        return C.clone();
      var S = typeof h == "object" ? h : {};
      return S.date = C, S.args = arguments, new K(S);
    }, j = V;
    j.l = R, j.i = r, j.w = function(C, h) {
      return N(C, { locale: h.$L, utc: h.$u, x: h.$x, $offset: h.$offset });
    };
    var K = function() {
      function C(S) {
        this.$L = R(S.locale, null, !0), this.parse(S), this.$x = this.$x || S.x || {}, this[s] = !0;
      }
      var h = C.prototype;
      return h.parse = function(S) {
        this.$d = function(A) {
          var M = A.date, B = A.utc;
          if (M === null)
            return /* @__PURE__ */ new Date(NaN);
          if (j.u(M))
            return /* @__PURE__ */ new Date();
          if (M instanceof Date)
            return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var F = M.match(D);
            if (F) {
              var G = F[2] - 1 || 0, Q = (F[7] || "0").substring(0, 3);
              return B ? new Date(Date.UTC(F[1], G, F[3] || 1, F[4] || 0, F[5] || 0, F[6] || 0, Q)) : new Date(F[1], G, F[3] || 1, F[4] || 0, F[5] || 0, F[6] || 0, Q);
            }
          }
          return new Date(M);
        }(S), this.init();
      }, h.init = function() {
        var S = this.$d;
        this.$y = S.getFullYear(), this.$M = S.getMonth(), this.$D = S.getDate(), this.$W = S.getDay(), this.$H = S.getHours(), this.$m = S.getMinutes(), this.$s = S.getSeconds(), this.$ms = S.getMilliseconds();
      }, h.$utils = function() {
        return j;
      }, h.isValid = function() {
        return this.$d.toString() !== g;
      }, h.isSame = function(S, A) {
        var M = N(S);
        return this.startOf(A) <= M && M <= this.endOf(A);
      }, h.isAfter = function(S, A) {
        return N(S) < this.startOf(A);
      }, h.isBefore = function(S, A) {
        return this.endOf(A) < N(S);
      }, h.$g = function(S, A, M) {
        return j.u(S) ? this[A] : this.set(M, S);
      }, h.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, h.valueOf = function() {
        return this.$d.getTime();
      }, h.startOf = function(S, A) {
        var M = this, B = !!j.u(A) || A, F = j.p(S), G = function(he, oe) {
          var fe = j.w(M.$u ? Date.UTC(M.$y, oe, he) : new Date(M.$y, oe, he), M);
          return B ? fe : fe.endOf(p);
        }, Q = function(he, oe) {
          return j.w(M.toDate()[he].apply(M.toDate("s"), (B ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(oe)), M);
        }, te = this.$W, re = this.$M, de = this.$D, xe = "set" + (this.$u ? "UTC" : "");
        switch (F) {
          case T:
            return B ? G(1, 0) : G(31, 11);
          case b:
            return B ? G(1, re) : G(0, re + 1);
          case w:
            var ae = this.$locale().weekStart || 0, be = (te < ae ? te + 7 : te) - ae;
            return G(B ? de - be : de + (6 - be), re);
          case p:
          case I:
            return Q(xe + "Hours", 0);
          case m:
            return Q(xe + "Minutes", 1);
          case u:
            return Q(xe + "Seconds", 2);
          case y:
            return Q(xe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, h.endOf = function(S) {
        return this.startOf(S, !1);
      }, h.$set = function(S, A) {
        var M, B = j.p(S), F = "set" + (this.$u ? "UTC" : ""), G = (M = {}, M[p] = F + "Date", M[I] = F + "Date", M[b] = F + "Month", M[T] = F + "FullYear", M[m] = F + "Hours", M[u] = F + "Minutes", M[y] = F + "Seconds", M[n] = F + "Milliseconds", M)[B], Q = B === p ? this.$D + (A - this.$W) : A;
        if (B === b || B === T) {
          var te = this.clone().set(I, 1);
          te.$d[G](Q), te.init(), this.$d = te.set(I, Math.min(this.$D, te.daysInMonth())).$d;
        } else
          G && this.$d[G](Q);
        return this.init(), this;
      }, h.set = function(S, A) {
        return this.clone().$set(S, A);
      }, h.get = function(S) {
        return this[j.p(S)]();
      }, h.add = function(S, A) {
        var M, B = this;
        S = Number(S);
        var F = j.p(A), G = function(re) {
          var de = N(B);
          return j.w(de.date(de.date() + Math.round(re * S)), B);
        };
        if (F === b)
          return this.set(b, this.$M + S);
        if (F === T)
          return this.set(T, this.$y + S);
        if (F === p)
          return G(1);
        if (F === w)
          return G(7);
        var Q = (M = {}, M[u] = e, M[m] = l, M[y] = a, M)[F] || 1, te = this.$d.getTime() + S * Q;
        return j.w(te, this);
      }, h.subtract = function(S, A) {
        return this.add(-1 * S, A);
      }, h.format = function(S) {
        var A = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || g;
        var B = S || "YYYY-MM-DDTHH:mm:ssZ", F = j.z(this), G = this.$H, Q = this.$m, te = this.$M, re = M.weekdays, de = M.months, xe = M.meridiem, ae = function(oe, fe, ge, we) {
          return oe && (oe[fe] || oe(A, B)) || ge[fe].slice(0, we);
        }, be = function(oe) {
          return j.s(G % 12 || 12, oe, "0");
        }, he = xe || function(oe, fe, ge) {
          var we = oe < 12 ? "AM" : "PM";
          return ge ? we.toLowerCase() : we;
        };
        return B.replace(Y, function(oe, fe) {
          return fe || function(ge) {
            switch (ge) {
              case "YY":
                return String(A.$y).slice(-2);
              case "YYYY":
                return j.s(A.$y, 4, "0");
              case "M":
                return te + 1;
              case "MM":
                return j.s(te + 1, 2, "0");
              case "MMM":
                return ae(M.monthsShort, te, de, 3);
              case "MMMM":
                return ae(de, te);
              case "D":
                return A.$D;
              case "DD":
                return j.s(A.$D, 2, "0");
              case "d":
                return String(A.$W);
              case "dd":
                return ae(M.weekdaysMin, A.$W, re, 2);
              case "ddd":
                return ae(M.weekdaysShort, A.$W, re, 3);
              case "dddd":
                return re[A.$W];
              case "H":
                return String(G);
              case "HH":
                return j.s(G, 2, "0");
              case "h":
                return be(1);
              case "hh":
                return be(2);
              case "a":
                return he(G, Q, !0);
              case "A":
                return he(G, Q, !1);
              case "m":
                return String(Q);
              case "mm":
                return j.s(Q, 2, "0");
              case "s":
                return String(A.$s);
              case "ss":
                return j.s(A.$s, 2, "0");
              case "SSS":
                return j.s(A.$ms, 3, "0");
              case "Z":
                return F;
            }
            return null;
          }(oe) || F.replace(":", "");
        });
      }, h.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, h.diff = function(S, A, M) {
        var B, F = this, G = j.p(A), Q = N(S), te = (Q.utcOffset() - this.utcOffset()) * e, re = this - Q, de = function() {
          return j.m(F, Q);
        };
        switch (G) {
          case T:
            B = de() / 12;
            break;
          case b:
            B = de();
            break;
          case P:
            B = de() / 3;
            break;
          case w:
            B = (re - te) / 6048e5;
            break;
          case p:
            B = (re - te) / 864e5;
            break;
          case m:
            B = re / l;
            break;
          case u:
            B = re / e;
            break;
          case y:
            B = re / a;
            break;
          default:
            B = re;
        }
        return M ? B : j.a(B);
      }, h.daysInMonth = function() {
        return this.endOf(b).$D;
      }, h.$locale = function() {
        return _[this.$L];
      }, h.locale = function(S, A) {
        if (!S)
          return this.$L;
        var M = this.clone(), B = R(S, A, !0);
        return B && (M.$L = B), M;
      }, h.clone = function() {
        return j.w(this.$d, this);
      }, h.toDate = function() {
        return new Date(this.valueOf());
      }, h.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, h.toISOString = function() {
        return this.$d.toISOString();
      }, h.toString = function() {
        return this.$d.toUTCString();
      }, C;
    }(), Z = K.prototype;
    return N.prototype = Z, [["$ms", n], ["$s", y], ["$m", u], ["$H", m], ["$W", p], ["$M", b], ["$y", T], ["$D", I]].forEach(function(C) {
      Z[C[1]] = function(h) {
        return this.$g(h, C[0], C[1]);
      };
    }), N.extend = function(C, h) {
      return C.$i || (C(h, K, N), C.$i = !0), N;
    }, N.locale = R, N.isDayjs = r, N.unix = function(C) {
      return N(1e3 * C);
    }, N.en = _[O], N.Ls = _, N.p = {}, N;
  });
})(Vt);
var Pr = Vt.exports;
const d = /* @__PURE__ */ Le(Pr);
var Ot = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ee, function() {
    return function(a, e, l) {
      var n = e.prototype, y = function(b) {
        return b && (b.indexOf ? b : b.s);
      }, u = function(b, P, T, I, g) {
        var D = b.name ? b : b.$locale(), Y = y(D[P]), k = y(D[T]), x = Y || k.map(function(O) {
          return O.slice(0, I);
        });
        if (!g)
          return x;
        var V = D.weekStart;
        return x.map(function(O, _) {
          return x[(_ + (V || 0)) % 7];
        });
      }, m = function() {
        return l.Ls[l.locale()];
      }, p = function(b, P) {
        return b.formats[P] || function(T) {
          return T.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(I, g, D) {
            return g || D.slice(1);
          });
        }(b.formats[P.toUpperCase()]);
      }, w = function() {
        var b = this;
        return { months: function(P) {
          return P ? P.format("MMMM") : u(b, "months");
        }, monthsShort: function(P) {
          return P ? P.format("MMM") : u(b, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return b.$locale().weekStart || 0;
        }, weekdays: function(P) {
          return P ? P.format("dddd") : u(b, "weekdays");
        }, weekdaysMin: function(P) {
          return P ? P.format("dd") : u(b, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(P) {
          return P ? P.format("ddd") : u(b, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(P) {
          return p(b.$locale(), P);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      n.localeData = function() {
        return w.bind(this)();
      }, l.localeData = function() {
        var b = m();
        return { firstDayOfWeek: function() {
          return b.weekStart || 0;
        }, weekdays: function() {
          return l.weekdays();
        }, weekdaysShort: function() {
          return l.weekdaysShort();
        }, weekdaysMin: function() {
          return l.weekdaysMin();
        }, months: function() {
          return l.months();
        }, monthsShort: function() {
          return l.monthsShort();
        }, longDateFormat: function(P) {
          return p(b, P);
        }, meridiem: b.meridiem, ordinal: b.ordinal };
      }, l.months = function() {
        return u(m(), "months");
      }, l.monthsShort = function() {
        return u(m(), "monthsShort", "months", 3);
      }, l.weekdays = function(b) {
        return u(m(), "weekdays", null, null, b);
      }, l.weekdaysShort = function(b) {
        return u(m(), "weekdaysShort", "weekdays", 3, b);
      }, l.weekdaysMin = function(b) {
        return u(m(), "weekdaysMin", "weekdays", 2, b);
      };
    };
  });
})(Ot);
var Vr = Ot.exports;
const Or = /* @__PURE__ */ Le(Vr);
var Tt = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ee, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(e, l, n) {
      var y = l.prototype, u = y.format;
      n.en.formats = a, y.format = function(m) {
        m === void 0 && (m = "YYYY-MM-DDTHH:mm:ssZ");
        var p = this.$locale().formats, w = function(b, P) {
          return b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(T, I, g) {
            var D = g && g.toUpperCase();
            return I || P[g] || a[g] || P[D].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(Y, k, x) {
              return k || x.slice(1);
            });
          });
        }(m, p === void 0 ? {} : p);
        return u.call(this, w);
      };
    };
  });
})(Tt);
var Tr = Tt.exports;
const Ar = /* @__PURE__ */ Le(Tr);
var At = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ee, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, l = /\d\d/, n = /\d\d?/, y = /\d*[^-_:/,()\s\d]+/, u = {}, m = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, p = function(g) {
      return function(D) {
        this[g] = +D;
      };
    }, w = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(D) {
        if (!D || D === "Z")
          return 0;
        var Y = D.match(/([+-]|\d\d)/g), k = 60 * Y[1] + (+Y[2] || 0);
        return k === 0 ? 0 : Y[0] === "+" ? -k : k;
      }(g);
    }], b = function(g) {
      var D = u[g];
      return D && (D.indexOf ? D : D.s.concat(D.f));
    }, P = function(g, D) {
      var Y, k = u.meridiem;
      if (k) {
        for (var x = 1; x <= 24; x += 1)
          if (g.indexOf(k(x, 0, D)) > -1) {
            Y = x > 12;
            break;
          }
      } else
        Y = g === (D ? "pm" : "PM");
      return Y;
    }, T = { A: [y, function(g) {
      this.afternoon = P(g, !1);
    }], a: [y, function(g) {
      this.afternoon = P(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [l, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [n, p("seconds")], ss: [n, p("seconds")], m: [n, p("minutes")], mm: [n, p("minutes")], H: [n, p("hours")], h: [n, p("hours")], HH: [n, p("hours")], hh: [n, p("hours")], D: [n, p("day")], DD: [l, p("day")], Do: [y, function(g) {
      var D = u.ordinal, Y = g.match(/\d+/);
      if (this.day = Y[0], D)
        for (var k = 1; k <= 31; k += 1)
          D(k).replace(/\[|\]/g, "") === g && (this.day = k);
    }], M: [n, p("month")], MM: [l, p("month")], MMM: [y, function(g) {
      var D = b("months"), Y = (b("monthsShort") || D.map(function(k) {
        return k.slice(0, 3);
      })).indexOf(g) + 1;
      if (Y < 1)
        throw new Error();
      this.month = Y % 12 || Y;
    }], MMMM: [y, function(g) {
      var D = b("months").indexOf(g) + 1;
      if (D < 1)
        throw new Error();
      this.month = D % 12 || D;
    }], Y: [/[+-]?\d+/, p("year")], YY: [l, function(g) {
      this.year = m(g);
    }], YYYY: [/\d{4}/, p("year")], Z: w, ZZ: w };
    function I(g) {
      var D, Y;
      D = g, Y = u && u.formats;
      for (var k = (g = D.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(R, N, j) {
        var K = j && j.toUpperCase();
        return N || Y[j] || a[j] || Y[K].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(Z, C, h) {
          return C || h.slice(1);
        });
      })).match(e), x = k.length, V = 0; V < x; V += 1) {
        var O = k[V], _ = T[O], s = _ && _[0], r = _ && _[1];
        k[V] = r ? { regex: s, parser: r } : O.replace(/^\[|\]$/g, "");
      }
      return function(R) {
        for (var N = {}, j = 0, K = 0; j < x; j += 1) {
          var Z = k[j];
          if (typeof Z == "string")
            K += Z.length;
          else {
            var C = Z.regex, h = Z.parser, S = R.slice(K), A = C.exec(S)[0];
            h.call(N, A), R = R.replace(A, "");
          }
        }
        return function(M) {
          var B = M.afternoon;
          if (B !== void 0) {
            var F = M.hours;
            B ? F < 12 && (M.hours += 12) : F === 12 && (M.hours = 0), delete M.afternoon;
          }
        }(N), N;
      };
    }
    return function(g, D, Y) {
      Y.p.customParseFormat = !0, g && g.parseTwoDigitYear && (m = g.parseTwoDigitYear);
      var k = D.prototype, x = k.parse;
      k.parse = function(V) {
        var O = V.date, _ = V.utc, s = V.args;
        this.$u = _;
        var r = s[1];
        if (typeof r == "string") {
          var R = s[2] === !0, N = s[3] === !0, j = R || N, K = s[2];
          N && (K = s[2]), u = this.$locale(), !R && K && (u = Y.Ls[K]), this.$d = function(S, A, M) {
            try {
              if (["x", "X"].indexOf(A) > -1)
                return new Date((A === "X" ? 1e3 : 1) * S);
              var B = I(A)(S), F = B.year, G = B.month, Q = B.day, te = B.hours, re = B.minutes, de = B.seconds, xe = B.milliseconds, ae = B.zone, be = /* @__PURE__ */ new Date(), he = Q || (F || G ? 1 : be.getDate()), oe = F || be.getFullYear(), fe = 0;
              F && !G || (fe = G > 0 ? G - 1 : be.getMonth());
              var ge = te || 0, we = re || 0, Re = de || 0, Ie = xe || 0;
              return ae ? new Date(Date.UTC(oe, fe, he, ge, we, Re, Ie + 60 * ae.offset * 1e3)) : M ? new Date(Date.UTC(oe, fe, he, ge, we, Re, Ie)) : new Date(oe, fe, he, ge, we, Re, Ie);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(O, r, _), this.init(), K && K !== !0 && (this.$L = this.locale(K).$L), j && O != this.format(r) && (this.$d = /* @__PURE__ */ new Date("")), u = {};
        } else if (r instanceof Array)
          for (var Z = r.length, C = 1; C <= Z; C += 1) {
            s[1] = r[C - 1];
            var h = Y.apply(this, s);
            if (h.isValid()) {
              this.$d = h.$d, this.$L = h.$L, this.init();
              break;
            }
            C === Z && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          x.call(this, V);
      };
    };
  });
})(At);
var Cr = At.exports;
const Yr = /* @__PURE__ */ Le(Cr);
var Ct = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ee, function() {
    return function(a, e, l) {
      e.prototype.isToday = function() {
        var n = "YYYY-MM-DD", y = l();
        return this.format(n) === y.format(n);
      };
    };
  });
})(Ct);
var Er = Ct.exports;
const Lr = /* @__PURE__ */ Le(Er);
var Yt = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ee, function() {
    return function(a, e, l) {
      e.prototype.isBetween = function(n, y, u, m) {
        var p = l(n), w = l(y), b = (m = m || "()")[0] === "(", P = m[1] === ")";
        return (b ? this.isAfter(p, u) : !this.isBefore(p, u)) && (P ? this.isBefore(w, u) : !this.isAfter(w, u)) || (b ? this.isBefore(p, u) : !this.isAfter(p, u)) && (P ? this.isAfter(w, u) : !this.isBefore(w, u));
      };
    };
  });
})(Yt);
var Fr = Yt.exports;
const Br = /* @__PURE__ */ Le(Fr);
var Et = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ee, function() {
    var a, e, l = 1e3, n = 6e4, y = 36e5, u = 864e5, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, p = 31536e6, w = 2628e6, b = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, P = { years: p, months: w, days: u, hours: y, minutes: n, seconds: l, milliseconds: 1, weeks: 6048e5 }, T = function(_) {
      return _ instanceof V;
    }, I = function(_, s, r) {
      return new V(_, r, s.$l);
    }, g = function(_) {
      return e.p(_) + "s";
    }, D = function(_) {
      return _ < 0;
    }, Y = function(_) {
      return D(_) ? Math.ceil(_) : Math.floor(_);
    }, k = function(_) {
      return Math.abs(_);
    }, x = function(_, s) {
      return _ ? D(_) ? { negative: !0, format: "" + k(_) + s } : { negative: !1, format: "" + _ + s } : { negative: !1, format: "" };
    }, V = function() {
      function _(r, R, N) {
        var j = this;
        if (this.$d = {}, this.$l = N, r === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), R)
          return I(r * P[g(R)], this);
        if (typeof r == "number")
          return this.$ms = r, this.parseFromMilliseconds(), this;
        if (typeof r == "object")
          return Object.keys(r).forEach(function(C) {
            j.$d[g(C)] = r[C];
          }), this.calMilliseconds(), this;
        if (typeof r == "string") {
          var K = r.match(b);
          if (K) {
            var Z = K.slice(2).map(function(C) {
              return C != null ? Number(C) : 0;
            });
            return this.$d.years = Z[0], this.$d.months = Z[1], this.$d.weeks = Z[2], this.$d.days = Z[3], this.$d.hours = Z[4], this.$d.minutes = Z[5], this.$d.seconds = Z[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var s = _.prototype;
      return s.calMilliseconds = function() {
        var r = this;
        this.$ms = Object.keys(this.$d).reduce(function(R, N) {
          return R + (r.$d[N] || 0) * P[N];
        }, 0);
      }, s.parseFromMilliseconds = function() {
        var r = this.$ms;
        this.$d.years = Y(r / p), r %= p, this.$d.months = Y(r / w), r %= w, this.$d.days = Y(r / u), r %= u, this.$d.hours = Y(r / y), r %= y, this.$d.minutes = Y(r / n), r %= n, this.$d.seconds = Y(r / l), r %= l, this.$d.milliseconds = r;
      }, s.toISOString = function() {
        var r = x(this.$d.years, "Y"), R = x(this.$d.months, "M"), N = +this.$d.days || 0;
        this.$d.weeks && (N += 7 * this.$d.weeks);
        var j = x(N, "D"), K = x(this.$d.hours, "H"), Z = x(this.$d.minutes, "M"), C = this.$d.seconds || 0;
        this.$d.milliseconds && (C += this.$d.milliseconds / 1e3, C = Math.round(1e3 * C) / 1e3);
        var h = x(C, "S"), S = r.negative || R.negative || j.negative || K.negative || Z.negative || h.negative, A = K.format || Z.format || h.format ? "T" : "", M = (S ? "-" : "") + "P" + r.format + R.format + j.format + A + K.format + Z.format + h.format;
        return M === "P" || M === "-P" ? "P0D" : M;
      }, s.toJSON = function() {
        return this.toISOString();
      }, s.format = function(r) {
        var R = r || "YYYY-MM-DDTHH:mm:ss", N = { Y: this.$d.years, YY: e.s(this.$d.years, 2, "0"), YYYY: e.s(this.$d.years, 4, "0"), M: this.$d.months, MM: e.s(this.$d.months, 2, "0"), D: this.$d.days, DD: e.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: e.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: e.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: e.s(this.$d.seconds, 2, "0"), SSS: e.s(this.$d.milliseconds, 3, "0") };
        return R.replace(m, function(j, K) {
          return K || String(N[j]);
        });
      }, s.as = function(r) {
        return this.$ms / P[g(r)];
      }, s.get = function(r) {
        var R = this.$ms, N = g(r);
        return N === "milliseconds" ? R %= 1e3 : R = N === "weeks" ? Y(R / P[N]) : this.$d[N], R || 0;
      }, s.add = function(r, R, N) {
        var j;
        return j = R ? r * P[g(R)] : T(r) ? r.$ms : I(r, this).$ms, I(this.$ms + j * (N ? -1 : 1), this);
      }, s.subtract = function(r, R) {
        return this.add(r, R, !0);
      }, s.locale = function(r) {
        var R = this.clone();
        return R.$l = r, R;
      }, s.clone = function() {
        return I(this.$ms, this);
      }, s.humanize = function(r) {
        return a().add(this.$ms, "ms").locale(this.$l).fromNow(!r);
      }, s.valueOf = function() {
        return this.asMilliseconds();
      }, s.milliseconds = function() {
        return this.get("milliseconds");
      }, s.asMilliseconds = function() {
        return this.as("milliseconds");
      }, s.seconds = function() {
        return this.get("seconds");
      }, s.asSeconds = function() {
        return this.as("seconds");
      }, s.minutes = function() {
        return this.get("minutes");
      }, s.asMinutes = function() {
        return this.as("minutes");
      }, s.hours = function() {
        return this.get("hours");
      }, s.asHours = function() {
        return this.as("hours");
      }, s.days = function() {
        return this.get("days");
      }, s.asDays = function() {
        return this.as("days");
      }, s.weeks = function() {
        return this.get("weeks");
      }, s.asWeeks = function() {
        return this.as("weeks");
      }, s.months = function() {
        return this.get("months");
      }, s.asMonths = function() {
        return this.as("months");
      }, s.years = function() {
        return this.get("years");
      }, s.asYears = function() {
        return this.as("years");
      }, _;
    }(), O = function(_, s, r) {
      return _.add(s.years() * r, "y").add(s.months() * r, "M").add(s.days() * r, "d").add(s.hours() * r, "h").add(s.minutes() * r, "m").add(s.seconds() * r, "s").add(s.milliseconds() * r, "ms");
    };
    return function(_, s, r) {
      a = r, e = r().$utils(), r.duration = function(j, K) {
        var Z = r.locale();
        return I(j, { $l: Z }, K);
      }, r.isDuration = T;
      var R = s.prototype.add, N = s.prototype.subtract;
      s.prototype.add = function(j, K) {
        return T(j) ? O(this, j, 1) : R.bind(this)(j, K);
      }, s.prototype.subtract = function(j, K) {
        return T(j) ? O(this, j, -1) : N.bind(this)(j, K);
      };
    };
  });
})(Et);
var Nr = Et.exports;
const Rr = /* @__PURE__ */ Le(Nr), Ir = { class: "flex justify-between items-center px-2 py-1.5" }, Hr = { class: "flex-shrink-0" }, Ur = { class: "inline-flex rounded-full" }, zr = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Wr = ["d"], Kr = { class: "px-1.5 space-x-1.5 flex flex-1" }, Gr = { class: "flex-1 flex rounded-md" }, Zr = ["textContent"], qr = { class: "flex-1 flex rounded-md" }, Jr = ["textContent"], Xr = { class: "flex-shrink-0" }, Qr = { class: "inline-flex rounded-full" }, eo = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, to = ["d"], Ze = /* @__PURE__ */ ie({
  __name: "Header",
  props: {
    panel: {},
    calendar: {}
  },
  setup(t) {
    return (o, a) => (W(), q("div", Ir, [
      E("div", Hr, [
        pe(E("span", Ur, [
          E("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[0] || (a[0] = (e) => o.panel.calendar ? o.calendar.onPrevious() : o.calendar.onPreviousYear())
          }, [
            (W(), q("svg", zr, [
              E("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: o.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
              }, null, 8, Wr)
            ]))
          ])
        ], 512), [
          [ve, o.panel.calendar || o.panel.year]
        ])
      ]),
      E("div", Kr, [
        E("span", Gr, [
          E("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[1] || (a[1] = (e) => o.calendar.openMonth()),
            textContent: se(o.calendar.month)
          }, null, 8, Zr)
        ]),
        E("span", qr, [
          E("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[2] || (a[2] = (e) => o.calendar.openYear()),
            textContent: se(o.calendar.year)
          }, null, 8, Jr)
        ])
      ]),
      E("div", Xr, [
        pe(E("span", Qr, [
          E("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[3] || (a[3] = (e) => o.panel.calendar ? o.calendar.onNext() : o.calendar.onNextYear())
          }, [
            (W(), q("svg", eo, [
              E("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: o.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
              }, null, 8, to)
            ]))
          ])
        ], 512), [
          [ve, o.panel.calendar || o.panel.year]
        ])
      ])
    ]));
  }
});
function ke(t, o) {
  const a = De(t, o);
  if (!a)
    throw new Error(`Could not resolve ${t.description}`);
  return a;
}
const Lt = Symbol("isBetweenRange"), Ft = Symbol(
  "betweenRangeClasses"
), Bt = Symbol("datepickerClasses"), Nt = Symbol("atMouseOver"), Rt = Symbol("setToToday"), It = Symbol("setToYesterday"), Ht = Symbol("setToLastDay"), Ut = Symbol("setToThisMonth"), zt = Symbol("setToLastMonth"), Wt = Symbol("setToCustomShortcut"), ro = {
  key: 0,
  class: "relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/[.1] order-last sm:order-none dark:border-vtd-secondary-700/[1] sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0"
}, oo = {
  key: 0,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, ao = ["onClick", "textContent"], no = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, pt = /* @__PURE__ */ ie({
  __name: "Shortcut",
  props: {
    shortcuts: { type: [Boolean, Function] },
    close: { type: Function },
    asRange: { type: Boolean },
    asSingle: { type: Boolean },
    i18n: {}
  },
  setup(t) {
    const o = t, a = ke(Rt), e = ke(It), l = ke(Ht), n = ke(Ut), y = ke(zt), u = ke(Wt), m = ue(() => typeof o.shortcuts == "function" ? o.shortcuts() : !1);
    return (p, w) => o.asRange && o.asSingle || o.asRange && !o.asSingle ? (W(), q("div", ro, [
      m.value ? (W(), q("ol", oo, [
        (W(!0), q(je, null, Ke(m.value, (b, P) => (W(), q("li", { key: P }, [
          E("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: Ae((T) => le(u)(b, p.close), ["prevent"]),
            textContent: se(b.label)
          }, null, 8, ao)
        ]))), 128))
      ])) : (W(), q("ol", no, [
        E("li", null, [
          E("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[0] || (w[0] = Ae((b) => le(a)(p.close), ["prevent"]))
          }, se(o.i18n.today), 1)
        ]),
        E("li", null, [
          E("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[1] || (w[1] = Ae((b) => le(e)(p.close), ["prevent"]))
          }, se(o.i18n.yesterday), 1)
        ]),
        E("li", null, [
          E("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[2] || (w[2] = Ae((b) => le(l)(7, p.close), ["prevent"]))
          }, se(o.i18n.past(7)), 1)
        ]),
        E("li", null, [
          E("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[3] || (w[3] = Ae((b) => le(l)(30, p.close), ["prevent"]))
          }, se(o.i18n.past(30)), 1)
        ]),
        E("li", null, [
          E("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[4] || (w[4] = Ae((b) => le(n)(p.close), ["prevent"]))
          }, se(o.i18n.currentMonth), 1)
        ]),
        E("li", null, [
          E("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[5] || (w[5] = Ae((b) => le(y)(p.close), ["prevent"]))
          }, se(o.i18n.pastMonth), 1)
        ])
      ]))
    ])) : ye("", !0);
  }
}), so = { class: "grid grid-cols-7 gap-y-0.5 my-1" }, lo = ["data-tooltip"], uo = ["disabled", "data-date", "onClick", "onMouseenter", "onFocusin", "textContent"], qe = /* @__PURE__ */ ie({
  __name: "Calendar",
  props: {
    calendar: {},
    weeks: {},
    asRange: { type: Boolean }
  },
  emits: ["updateDate"],
  setup(t, { emit: o }) {
    const a = ke(Lt), e = ke(Ft), l = ke(Bt), n = ke(Nt);
    return (y, u) => (W(), q("div", so, [
      ee(Jt, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: Fe(() => [
          (W(!0), q(je, null, Ke(y.calendar.date(), (m, p) => (W(), q("div", {
            key: p,
            class: Oe(["relative", { "vtd-tooltip": y.asRange && m.duration() }]),
            "data-tooltip": `${m.duration()}`
          }, [
            ee(mt, {
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "enter-active-class": "transition-opacity ease-out duration-200",
              "leave-active-class": "transition-opacity ease-in duration-150",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: Fe(() => [
                le(a)(m) || m.hovered() ? (W(), q("span", {
                  key: 0,
                  class: Oe(["absolute bg-vtd-primary-100 bg-opacity-60 dark:bg-vtd-secondary-700 dark:bg-opacity-50", le(e)(m)])
                }, null, 2)) : ye("", !0)
              ]),
              _: 2
            }, 1024),
            E("button", {
              type: "button",
              class: Oe(["vtd-datepicker-date relative w-[2.7rem] h-[2.7rem] lg:w-10 lg:h-10 flex justify-center items-center text-xs 2xl:text-sm", [
                le(l)(m),
                y.asRange ? "transition-all" : "transition-colors"
              ]]),
              disabled: m.disabled || m.inRange(),
              "data-date": m.toDate(),
              onClick: (w) => o("updateDate", m),
              onMouseenter: (w) => le(n)(m),
              onFocusin: (w) => le(n)(m),
              textContent: se(m.date())
            }, null, 42, uo)
          ], 10, lo))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), io = { class: "flex flex-wrap" }, co = { class: "flex rounded-md mt-1.5" }, fo = ["onClick", "textContent"], Je = /* @__PURE__ */ ie({
  __name: "Year",
  props: {
    years: {}
  },
  emits: ["updateYear"],
  setup(t, { emit: o }) {
    return (a, e) => (W(), q("div", io, [
      (W(!0), q(je, null, Ke(a.years, (l, n) => (W(), q("div", {
        key: n,
        class: "w-1/2 px-0.5"
      }, [
        E("span", co, [
          E("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            onClick: (y) => o("updateYear", l),
            textContent: se(l)
          }, null, 8, fo)
        ])
      ]))), 128))
    ]));
  }
}), po = { class: "grid grid-cols-7 py-2 mt-0.5" }, vo = ["textContent"], Xe = /* @__PURE__ */ ie({
  __name: "Week",
  props: {
    weeks: {}
  },
  setup(t) {
    return (o, a) => (W(), q("div", po, [
      (W(!0), q(je, null, Ke(o.weeks, (e, l) => (W(), q("div", {
        key: l,
        class: "text-vtd-secondary-500 text-xs 2xl:text-sm tracking-wide font-medium text-center cursor-default dark:text-vtd-secondary-400"
      }, [
        E("span", {
          textContent: se(e)
        }, null, 8, vo)
      ]))), 128))
    ]));
  }
}), mo = { class: "flex flex-wrap mt-1.5" }, ho = { class: "flex rounded-md mt-1.5" }, yo = ["onClick", "textContent"], Qe = /* @__PURE__ */ ie({
  __name: "Month",
  props: {
    months: {}
  },
  emits: ["updateMonth"],
  setup(t, { emit: o }) {
    return (a, e) => (W(), q("div", mo, [
      (W(!0), q(je, null, Ke(a.months, (l, n) => (W(), q("div", {
        key: n,
        class: "w-1/2 px-0.5"
      }, [
        E("span", ho, [
          E("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            onClick: (y) => o("updateMonth", n),
            textContent: se(l)
          }, null, 8, yo)
        ])
      ]))), 128))
    ]));
  }
});
function bo() {
  const t = (u) => {
    const m = [], p = u.localeData().firstDayOfWeek();
    for (let w = 0; w <= u.date(0 - p).day(); w++)
      m.push(u.date(0).subtract(w, "day"));
    return m.sort((w, b) => w.date() - b.date());
  };
  return {
    usePreviousDate: t,
    useCurrentDate: (u) => Array.from(
      {
        length: u.daysInMonth()
      },
      (m, p) => u.date(p + 1)
    ),
    useNextDate: (u) => {
      const m = [];
      for (let p = 1; p <= 42 - (t(u).length + u.daysInMonth()); p++)
        m.push(u.date(p).month(u.month()).add(1, "month"));
      return m;
    },
    useDisableDate: (u, { disableDate: m }) => typeof m == "function" ? m(u.toDate()) : !1,
    useBetweenRange: (u, { previous: m, next: p }) => {
      const w = m.isAfter(p, "date") ? "(]" : "[)";
      return !!(u.isBetween(m, p, "date", w) && !u.off);
    },
    useToValueFromString: (u, { formatter: m }) => u.format(m.date),
    useToValueFromArray: ({ previous: u, next: m }, {
      formatter: p,
      separator: w
    }) => `${u.format(p.date)}${w}${m.format(
      p.date
    )}`
  };
}
function go() {
  return {
    useVisibleViewport: (o) => {
      if (o) {
        const { right: a } = o.getBoundingClientRect(), e = window.innerWidth || document.documentElement.clientWidth;
        return a > e;
      } else
        return null;
    }
  };
}
const xo = ["disabled", "placeholder"], wo = { class: "absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden" }, ko = ["disabled"], $o = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, jo = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, Mo = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, So = { class: "flex flex-wrap lg:flex-nowrap" }, Do = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, _o = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, Po = /* @__PURE__ */ E("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), Vo = [
  Po
], Oo = { class: "px-0.5 sm:px-2" }, To = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, Ao = { class: "px-0.5 sm:px-2" }, Co = { key: 0 }, Yo = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, Eo = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, Lo = ["disabled", "onClick", "textContent"], Fo = ["onClick", "textContent"], Bo = {
  key: 1,
  class: "sm:hidden"
}, No = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, Ro = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, Io = ["onClick", "textContent"], Ho = {
  key: 1,
  class: "flex"
}, Uo = { class: "bg-white rounded-lg shadow-sm border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]" }, zo = { class: "flex flex-wrap lg:flex-nowrap" }, Wo = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, Ko = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, Go = /* @__PURE__ */ E("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), Zo = [
  Go
], qo = { class: "px-0.5 sm:px-2" }, Jo = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, Xo = { class: "px-0.5 sm:px-2" }, Qo = { key: 0 }, ea = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, ta = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, ra = ["disabled", "textContent"], oa = /* @__PURE__ */ ie({
  __name: "VueTailwindDatePicker",
  props: {
    noInput: { type: Boolean },
    overlay: { type: Boolean },
    asSingle: { type: Boolean },
    useRange: { type: Boolean },
    placeholder: { default: "" },
    i18n: { default: "en" },
    inputClasses: { default: "" },
    disabled: { type: Boolean, default: !1 },
    disableInRange: { type: Boolean, default: !1 },
    disableDate: { type: [Boolean, Function], default: !1 },
    autoApply: { type: Boolean, default: !0 },
    shortcuts: { type: [Boolean, Function], default: !0 },
    separator: { default: " ~ " },
    formatter: { default: () => ({
      date: "YYYY-MM-DD HH:mm:ss",
      month: "MMM"
    }) },
    startFrom: { default: () => /* @__PURE__ */ new Date() },
    weekdaysSize: { default: "short" },
    options: { default: () => ({
      shortcuts: {
        today: "Today",
        yesterday: "Yesterday",
        past: (t) => `Last ${t} Days`,
        currentMonth: "This Month",
        pastMonth: "Last Month"
      },
      footer: {
        apply: "Apply",
        cancel: "Cancel"
      }
    }) },
    modelValue: { default: () => [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()] }
  },
  emits: [
    "update:modelValue",
    "selectMonth",
    "selectYear",
    "selectRightMonth",
    "selectRightYear",
    "clickPrev",
    "clickNext",
    "clickRightPrev",
    "clickRightNext"
  ],
  setup(t, { expose: o, emit: a }) {
    const e = t, {
      useCurrentDate: l,
      useDisableDate: n,
      useBetweenRange: y,
      useNextDate: u,
      usePreviousDate: m,
      useToValueFromArray: p,
      useToValueFromString: w
    } = bo(), { useVisibleViewport: b } = go(), P = Object.fromEntries(
      Object.entries(/* @__PURE__ */ Object.assign({ "./locale/af.js": () => import("./af-deda0f6b.js"), "./locale/am.js": () => import("./am-f9f64cdc.js"), "./locale/ar-dz.js": () => import("./ar-dz-4e6fd8f3.js"), "./locale/ar-iq.js": () => import("./ar-iq-e7eed358.js"), "./locale/ar-kw.js": () => import("./ar-kw-99cc685f.js"), "./locale/ar-ly.js": () => import("./ar-ly-ddbaa0f0.js"), "./locale/ar-ma.js": () => import("./ar-ma-397bb743.js"), "./locale/ar-sa.js": () => import("./ar-sa-cb05bd3f.js"), "./locale/ar-tn.js": () => import("./ar-tn-61bde3e2.js"), "./locale/ar.js": () => import("./ar-83069712.js"), "./locale/az.js": () => import("./az-264195b3.js"), "./locale/be.js": () => import("./be-e5e0bbd0.js"), "./locale/bg.js": () => import("./bg-e92244ee.js"), "./locale/bi.js": () => import("./bi-887c703e.js"), "./locale/bm.js": () => import("./bm-1e190825.js"), "./locale/bn-bd.js": () => import("./bn-bd-1257bfdf.js"), "./locale/bn.js": () => import("./bn-82e3735f.js"), "./locale/bo.js": () => import("./bo-a795088f.js"), "./locale/br.js": () => import("./br-108f714d.js"), "./locale/bs.js": () => import("./bs-aab56f6d.js"), "./locale/ca.js": () => import("./ca-c0f1367a.js"), "./locale/cs.js": () => import("./cs-3908b92d.js"), "./locale/cv.js": () => import("./cv-012a9b67.js"), "./locale/cy.js": () => import("./cy-245e6729.js"), "./locale/da.js": () => import("./da-eebd370e.js"), "./locale/de-at.js": () => import("./de-at-fa7f2a61.js"), "./locale/de-ch.js": () => import("./de-ch-15ef1359.js"), "./locale/de.js": () => import("./de-f5b8078a.js"), "./locale/dv.js": () => import("./dv-73348139.js"), "./locale/el.js": () => import("./el-e3edb831.js"), "./locale/en-au.js": () => import("./en-au-2e72e69e.js"), "./locale/en-ca.js": () => import("./en-ca-c9fecc9e.js"), "./locale/en-gb.js": () => import("./en-gb-aaa8e2f1.js"), "./locale/en-ie.js": () => import("./en-ie-e00ca5d2.js"), "./locale/en-il.js": () => import("./en-il-a122cefc.js"), "./locale/en-in.js": () => import("./en-in-cec956ea.js"), "./locale/en-nz.js": () => import("./en-nz-6a8416b1.js"), "./locale/en-sg.js": () => import("./en-sg-e325d3aa.js"), "./locale/en-tt.js": () => import("./en-tt-cf55d13e.js"), "./locale/en.js": () => import("./en-4402d6fc.js"), "./locale/eo.js": () => import("./eo-9cce2ec1.js"), "./locale/es-do.js": () => import("./es-do-4432bc6f.js"), "./locale/es-mx.js": () => import("./es-mx-102d0dd7.js"), "./locale/es-pr.js": () => import("./es-pr-ddd3dd06.js"), "./locale/es-us.js": () => import("./es-us-8989b486.js"), "./locale/es.js": () => import("./es-3d8408ab.js"), "./locale/et.js": () => import("./et-fa959d5d.js"), "./locale/eu.js": () => import("./eu-26475714.js"), "./locale/fa.js": () => import("./fa-d3dfa2f0.js"), "./locale/fi.js": () => import("./fi-a2bec19f.js"), "./locale/fo.js": () => import("./fo-89c746c0.js"), "./locale/fr-ca.js": () => import("./fr-ca-d15a7067.js"), "./locale/fr-ch.js": () => import("./fr-ch-353db55c.js"), "./locale/fr.js": () => import("./fr-c33745d0.js"), "./locale/fy.js": () => import("./fy-fa8afbab.js"), "./locale/ga.js": () => import("./ga-fa3068eb.js"), "./locale/gd.js": () => import("./gd-bceecfaa.js"), "./locale/gl.js": () => import("./gl-e13f8a78.js"), "./locale/gom-latn.js": () => import("./gom-latn-588d2410.js"), "./locale/gu.js": () => import("./gu-c9659740.js"), "./locale/he.js": () => import("./he-25bd71c8.js"), "./locale/hi.js": () => import("./hi-2a750d55.js"), "./locale/hr.js": () => import("./hr-55286f95.js"), "./locale/ht.js": () => import("./ht-0fff30cb.js"), "./locale/hu.js": () => import("./hu-e24a5713.js"), "./locale/hy-am.js": () => import("./hy-am-0baec264.js"), "./locale/id.js": () => import("./id-6e23c622.js"), "./locale/is.js": () => import("./is-2ed7f3c2.js"), "./locale/it-ch.js": () => import("./it-ch-87756310.js"), "./locale/it.js": () => import("./it-02567360.js"), "./locale/ja.js": () => import("./ja-86042c40.js"), "./locale/jv.js": () => import("./jv-ebf83caa.js"), "./locale/ka.js": () => import("./ka-4cc32e67.js"), "./locale/kk.js": () => import("./kk-d8492331.js"), "./locale/km.js": () => import("./km-5029428b.js"), "./locale/kn.js": () => import("./kn-15187daa.js"), "./locale/ko.js": () => import("./ko-1b325813.js"), "./locale/ku.js": () => import("./ku-b4d86c04.js"), "./locale/ky.js": () => import("./ky-dd3ebef6.js"), "./locale/lb.js": () => import("./lb-57963ddb.js"), "./locale/lo.js": () => import("./lo-0c52c233.js"), "./locale/lt.js": () => import("./lt-ba910b9f.js"), "./locale/lv.js": () => import("./lv-e61b6de0.js"), "./locale/me.js": () => import("./me-33bdb393.js"), "./locale/mi.js": () => import("./mi-21445caf.js"), "./locale/mk.js": () => import("./mk-fc2dddef.js"), "./locale/ml.js": () => import("./ml-b98ac380.js"), "./locale/mn.js": () => import("./mn-737e5345.js"), "./locale/mr.js": () => import("./mr-c81b8182.js"), "./locale/ms-my.js": () => import("./ms-my-f453d68c.js"), "./locale/ms.js": () => import("./ms-663a63b1.js"), "./locale/mt.js": () => import("./mt-ff3100d4.js"), "./locale/my.js": () => import("./my-da866a0c.js"), "./locale/nb.js": () => import("./nb-226cc274.js"), "./locale/ne.js": () => import("./ne-f561d0d5.js"), "./locale/nl-be.js": () => import("./nl-be-c67c2770.js"), "./locale/nl.js": () => import("./nl-ec6f6657.js"), "./locale/nn.js": () => import("./nn-a04eb9c7.js"), "./locale/oc-lnc.js": () => import("./oc-lnc-5e482550.js"), "./locale/pa-in.js": () => import("./pa-in-e9cec247.js"), "./locale/pl.js": () => import("./pl-a2d5736c.js"), "./locale/pt-br.js": () => import("./pt-br-06fca173.js"), "./locale/pt.js": () => import("./pt-216affd9.js"), "./locale/rn.js": () => import("./rn-332b49d0.js"), "./locale/ro.js": () => import("./ro-acbe4327.js"), "./locale/ru.js": () => import("./ru-bdf07522.js"), "./locale/rw.js": () => import("./rw-e5b3d343.js"), "./locale/sd.js": () => import("./sd-aac2259f.js"), "./locale/se.js": () => import("./se-92ef2b7c.js"), "./locale/si.js": () => import("./si-49f4e15c.js"), "./locale/sk.js": () => import("./sk-b45beba0.js"), "./locale/sl.js": () => import("./sl-88ad6921.js"), "./locale/sq.js": () => import("./sq-31c099e3.js"), "./locale/sr-cyrl.js": () => import("./sr-cyrl-64a5873f.js"), "./locale/sr.js": () => import("./sr-d82f771b.js"), "./locale/ss.js": () => import("./ss-5c0e202d.js"), "./locale/sv-fi.js": () => import("./sv-fi-156883c7.js"), "./locale/sv.js": () => import("./sv-f95bb6d6.js"), "./locale/sw.js": () => import("./sw-201922ad.js"), "./locale/ta.js": () => import("./ta-1880fd27.js"), "./locale/te.js": () => import("./te-8789db35.js"), "./locale/tet.js": () => import("./tet-cc054ff8.js"), "./locale/tg.js": () => import("./tg-3f6eabc6.js"), "./locale/th.js": () => import("./th-d1627a95.js"), "./locale/tk.js": () => import("./tk-8f6de6e7.js"), "./locale/tl-ph.js": () => import("./tl-ph-9bebbb8b.js"), "./locale/tlh.js": () => import("./tlh-bf5002c9.js"), "./locale/tr.js": () => import("./tr-14b2a2fc.js"), "./locale/tzl.js": () => import("./tzl-1c49b9a6.js"), "./locale/tzm-latn.js": () => import("./tzm-latn-3b905632.js"), "./locale/tzm.js": () => import("./tzm-acce8222.js"), "./locale/ug-cn.js": () => import("./ug-cn-46959117.js"), "./locale/uk.js": () => import("./uk-4f2d0a0c.js"), "./locale/ur.js": () => import("./ur-39bc503c.js"), "./locale/uz-latn.js": () => import("./uz-latn-089cc4d1.js"), "./locale/uz.js": () => import("./uz-d6bbc893.js"), "./locale/vi.js": () => import("./vi-e1a1f05d.js"), "./locale/x-pseudo.js": () => import("./x-pseudo-e4374767.js"), "./locale/yo.js": () => import("./yo-b3f8d225.js"), "./locale/zh-cn.js": () => import("./zh-cn-8bc843c7.js"), "./locale/zh-hk.js": () => import("./zh-hk-f0f4bee8.js"), "./locale/zh-tw.js": () => import("./zh-tw-e969ca7b.js"), "./locale/zh.js": () => import("./zh-39beb509.js") })).map(
        ([v, f]) => {
          var c;
          return [(c = v.match(/([\w-]*)\.js$/)) == null ? void 0 : c[1], f];
        }
      )
    );
    d.extend(Or), d.extend(Ar), d.extend(Yr), d.extend(Lr), d.extend(Br), d.extend(Rr);
    const T = J(null), I = J(null), g = J(null), D = J(""), Y = J(null), k = J(""), x = J([]), V = J([]), O = J(null), _ = J(null), s = vt({
      previous: {
        calendar: !0,
        month: !1,
        year: !1
      },
      next: {
        calendar: !0,
        month: !1,
        year: !1
      }
    }), r = J({
      previous: d(),
      next: d().add(1, "month"),
      year: {
        previous: d().year(),
        next: d().year()
      },
      weeks: e.weekdaysSize === "min" ? d.weekdaysMin() : d.weekdaysShort(),
      months: e.formatter.month === "MMM" ? d.monthsShort() : d.months()
    }), R = ue(() => r.value.weeks), N = ue(() => r.value.months), j = ue(() => {
      const { previous: v, next: f, year: c } = le(r);
      return {
        previous: {
          date: () => m(v).concat(l(v)).concat(u(v)).map((i) => (Object.assign(i, {
            today: i.isToday(),
            active: v.month() === i.month(),
            off: v.month() !== i.month(),
            sunday: i.day() === 0,
            disabled: n(i, e) && !S(i),
            inRange: () => {
              if (e.asSingle && !e.useRange)
                return v.month() !== i.month();
            },
            hovered: () => h() && x.value.length > 1 ? (i.isBetween(
              x.value[0],
              x.value[1],
              "date",
              "()"
            ) || i.isBetween(
              x.value[1],
              x.value[0],
              "date",
              "(]"
            )) && v.month() === i.month() : !1,
            duration: () => !1
          }), i)),
          month: v && v.format(e.formatter.month),
          year: v && v.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (i, $) => c.previous + $
          ),
          onPrevious: () => {
            r.value.previous = v.subtract(1, "month"), a("clickPrev", r.value.previous);
          },
          onNext: () => {
            r.value.previous = v.add(1, "month"), v.diff(f, "month") === -1 && (r.value.next = f.add(1, "month")), a("clickNext", r.value.previous);
          },
          onPreviousYear: () => {
            r.value.year.previous = r.value.year.previous - 12;
          },
          onNextYear: () => {
            r.value.year.previous = r.value.year.previous + 12;
          },
          openMonth: () => {
            s.previous.month = !s.previous.month, s.previous.year = !1, s.previous.calendar = !s.previous.month;
          },
          setMonth: (i) => {
            r.value.previous = v.month(i), s.previous.month = !s.previous.month, s.previous.year = !1, s.previous.calendar = !s.previous.month, a("selectMonth", r.value.previous), He(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.next = r.value.next.year();
            });
          },
          openYear: () => {
            s.previous.year = !s.previous.year, s.previous.month = !1, s.previous.calendar = !s.previous.year;
          },
          setYear: (i) => {
            r.value.previous = v.year(i), s.previous.year = !s.previous.year, s.previous.calendar = !s.previous.year, a("selectYear", r.value.previous), He(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            });
          }
        },
        next: {
          date: () => m(f).concat(l(f)).concat(u(f)).map((i) => (Object.assign(i, {
            today: i.isToday(),
            active: f.month() === i.month(),
            off: f.month() !== i.month(),
            sunday: i.day() === 0,
            disabled: n(i, e) && !S(i),
            inRange: () => {
              if (e.asSingle && !e.useRange)
                return f.month() !== i.month();
            },
            hovered: () => x.value.length > 1 ? (i.isBetween(
              x.value[0],
              x.value[1],
              "date",
              "()"
            ) || i.isBetween(
              x.value[1],
              x.value[0],
              "date",
              "(]"
            )) && f.month() === i.month() : !1,
            duration: () => !1
          }), i)),
          month: f && f.format(e.formatter.month),
          year: f && f.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (i, $) => c.next + $
          ),
          onPrevious: () => {
            r.value.next = f.subtract(1, "month"), f.diff(v, "month") === 1 && (r.value.previous = v.subtract(1, "month")), a("clickRightPrev", r.value.next);
          },
          onNext: () => {
            r.value.next = f.add(1, "month"), a("clickRightNext", r.value.next);
          },
          onPreviousYear: () => {
            r.value.year.next = r.value.year.next - 12;
          },
          onNextYear: () => {
            r.value.year.next = r.value.year.next + 12;
          },
          openMonth: () => {
            s.next.month = !s.next.month, s.next.year = !1, s.next.calendar = !s.next.month;
          },
          setMonth: (i) => {
            r.value.next = f.month(i), s.next.month = !s.next.month, s.next.year = !1, s.next.calendar = !s.next.month, a("selectRightMonth", r.value.next), He(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(
                1,
                "month"
              )), r.value.year.previous = r.value.previous.year();
            });
          },
          openYear: () => {
            s.next.year = !s.next.year, s.next.month = !1, s.next.calendar = !s.next.year;
          },
          setYear: (i) => {
            r.value.next = f.year(i), s.next.year = !s.next.year, s.next.month = !1, s.next.calendar = !s.next.year, a("selectRightYear", r.value.next), He(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(
                1,
                "month"
              )), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            });
          }
        }
      };
    }), K = J(!1);
    setTimeout(() => {
      K.value = !0;
    }, 250);
    function Z() {
      return d().localeData().firstDayOfWeek();
    }
    function C(v) {
      const f = [...v], c = f.shift();
      return [...f, c];
    }
    function h() {
      return !e.useRange && !e.asSingle ? !0 : !e.useRange && e.asSingle ? !1 : e.useRange && !e.asSingle ? !0 : !!(e.useRange && e.asSingle);
    }
    function S(v) {
      if (e.disableInRange || k.value === "")
        return !1;
      let f, c;
      if (Array.isArray(e.modelValue)) {
        const [i, $] = e.modelValue;
        f = i, c = $;
      } else if (typeof e.modelValue == "object") {
        if (e.modelValue) {
          const [i, $] = Object.values(e.modelValue);
          f = i, c = $;
        }
      } else {
        const [i, $] = e.modelValue.split(e.separator);
        f = i, c = $;
      }
      return v.isBetween(
        d(f, e.formatter.date, !0),
        d(c, e.formatter.date, !0),
        "date",
        "[]"
      );
    }
    function A() {
      O.value = null, _.value = null, x.value = [], Y.value = null;
    }
    function M() {
      if (k.value = "", Array.isArray(e.modelValue))
        a("update:modelValue", []);
      else if (typeof e.modelValue == "object") {
        const v = {}, [f, c] = Object.keys(e.modelValue);
        v[f] = "", v[c] = "", a("update:modelValue", v);
      } else
        a("update:modelValue", "");
      V.value = [], I.value && I.value.focus();
    }
    o({ clearPicker: M });
    function B() {
      if (h()) {
        const [v, f] = k.value.split(e.separator), [c, i] = [
          d(v, e.formatter.date, !0),
          d(f, e.formatter.date, !0)
        ];
        if (c.isValid() && i.isValid())
          if (F(c), F(i), Array.isArray(e.modelValue))
            a("update:modelValue", [v, f]);
          else if (typeof e.modelValue == "object") {
            const $ = {}, [L, z] = Object.keys(e.modelValue);
            $[L] = v, $[z] = f, a("update:modelValue", $);
          } else
            a(
              "update:modelValue",
              p(
                {
                  previous: c,
                  next: i
                },
                e
              )
            );
      } else {
        const v = d(k.value, e.formatter.date, !0);
        if (v.isValid())
          if (F(v), Array.isArray(e.modelValue))
            a("update:modelValue", [k.value]);
          else if (typeof e.modelValue == "object") {
            const f = {}, [c] = Object.keys(e.modelValue);
            f[c] = k.value, a("update:modelValue", f);
          } else
            a("update:modelValue", k.value);
      }
    }
    function F(v, f) {
      if (h())
        if (O.value)
          if (_.value = v, e.autoApply) {
            v.isBefore(O.value) ? k.value = p(
              {
                previous: v,
                next: O.value
              },
              e
            ) : k.value = p(
              {
                previous: O.value,
                next: v
              },
              e
            );
            const [c, i] = k.value.split(e.separator);
            if (Array.isArray(e.modelValue))
              a("update:modelValue", [
                d(c, e.formatter.date, !0).format(e.formatter.date),
                d(i, e.formatter.date, !0).format(e.formatter.date)
              ]);
            else if (typeof e.modelValue == "object") {
              const $ = {}, [L, z] = Object.keys(e.modelValue);
              $[L] = c, $[z] = i, a("update:modelValue", $);
            } else
              a(
                "update:modelValue",
                p(
                  {
                    previous: d(c, e.formatter.date, !0),
                    next: d(i, e.formatter.date, !0)
                  },
                  e
                )
              );
            f && f(), V.value = [], d(c, e.formatter.date, !0).isSame(
              d(i, e.formatter.date, !0),
              "month"
            ) || (r.value.previous = d(c, e.formatter.date, !0), r.value.next = d(i, e.formatter.date, !0)), A();
          } else {
            O.value.isAfter(v, "month") ? V.value = [v, O.value] : V.value = [O.value, v];
            const [c, i] = V.value;
            c.isSame(i, "month") || (r.value.previous = c, r.value.next = i), A();
          }
        else
          V.value = [], O.value = v, Y.value = v, x.value.push(v), V.value.push(v), r.value.previous = v, r.value.next.isSame(v, "month") && (r.value.previous = r.value.next, r.value.next = v.add(1, "month"));
      else if (e.autoApply) {
        if (k.value = w(v, e), Array.isArray(e.modelValue))
          a("update:modelValue", [k.value]);
        else if (typeof e.modelValue == "object") {
          const c = {}, [i] = Object.keys(e.modelValue);
          c[i] = k.value, a("update:modelValue", c);
        } else
          a("update:modelValue", k.value);
        f && f(), V.value = [], A();
      } else
        V.value = [v], A();
    }
    function G(v) {
      if (V.value.length < 1)
        return !1;
      let f;
      if (h()) {
        const [c, i] = V.value;
        i.isBefore(c) ? f = p(
          {
            previous: i,
            next: c
          },
          e
        ) : f = p(
          {
            previous: c,
            next: i
          },
          e
        );
      } else {
        const [c] = V.value;
        f = c;
      }
      if (h()) {
        const [c, i] = f.split(e.separator);
        if (Array.isArray(e.modelValue))
          a("update:modelValue", [
            d(c, e.formatter.date, !0).format(e.formatter.date),
            d(i, e.formatter.date, !0).format(e.formatter.date)
          ]);
        else if (typeof e.modelValue == "object") {
          const $ = {}, [L, z] = Object.keys(e.modelValue);
          $[L] = c, $[z] = i, a("update:modelValue", $);
        } else
          a(
            "update:modelValue",
            p(
              {
                previous: d(c, e.formatter.date, !0),
                next: d(i, e.formatter.date, !0)
              },
              e
            )
          );
        k.value = f;
      } else if (k.value = f.format(e.formatter.date), Array.isArray(e.modelValue))
        a("update:modelValue", [k.value]);
      else if (typeof e.modelValue == "object") {
        const c = {}, [i] = Object.keys(e.modelValue);
        c[i] = k.value, a("update:modelValue", c);
      } else
        a("update:modelValue", k.value);
      v && v();
    }
    function Q(v) {
      if (!h())
        return !1;
      if (O.value)
        x.value = [O.value, v];
      else
        return x.value = [], !1;
    }
    function te(v) {
      if (O.value && e.autoApply)
        return !1;
      let f, c;
      if (x.value.length > 1) {
        const [i, $] = x.value;
        f = d(i, e.formatter.date, !0), c = d($, e.formatter.date, !0);
      } else if (Array.isArray(e.modelValue))
        if (e.autoApply) {
          const [i, $] = e.modelValue;
          f = i && d(i, e.formatter.date, !0), c = $ && d($, e.formatter.date, !0);
        } else {
          const [i, $] = V.value;
          f = d(i, e.formatter.date, !0), c = d($, e.formatter.date, !0);
        }
      else if (typeof e.modelValue == "object")
        if (e.autoApply) {
          if (e.modelValue) {
            const [i, $] = Object.values(e.modelValue);
            f = i && d(i, e.formatter.date, !0), c = $ && d($, e.formatter.date, !0);
          }
        } else {
          const [i, $] = V.value;
          f = d(i, e.formatter.date, !0), c = d($, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        const [i, $] = e.modelValue ? e.modelValue.split(e.separator) : [null, null];
        f = i && d(i, e.formatter.date, !0), c = $ && d($, e.formatter.date, !0);
      } else {
        const [i, $] = V.value;
        f = d(i, e.formatter.date, !0), c = d($, e.formatter.date, !0);
      }
      return f && c ? y(v, {
        previous: f,
        next: c
      }) : !1;
    }
    function re(v) {
      const { today: f, active: c, off: i, disabled: $ } = v;
      let L, z, ce;
      if (h())
        if (Array.isArray(e.modelValue))
          if (Y.value) {
            const [U, X] = x.value;
            z = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [U, X] = e.modelValue;
            z = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
          } else {
            const [U, X] = V.value;
            z = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
          }
        else if (typeof e.modelValue == "object")
          if (Y.value) {
            const [U, X] = x.value;
            z = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [U, X] = e.modelValue ? Object.values(e.modelValue) : [null, null];
            z = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
          } else {
            const [U, X] = V.value;
            z = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
          }
        else if (Y.value) {
          const [U, X] = x.value;
          z = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [U, X] = e.modelValue ? e.modelValue.split(e.separator) : [null, null];
          z = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
        } else {
          const [U, X] = V.value;
          z = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
        }
      else if (Array.isArray(e.modelValue))
        if (e.autoApply) {
          if (e.modelValue.length > 0) {
            const [U] = e.modelValue;
            z = d(U, e.formatter.date, !0);
          }
        } else {
          const [U] = V.value;
          z = U && d(U, e.formatter.date, !0);
        }
      else if (typeof e.modelValue == "object")
        if (e.autoApply) {
          if (e.modelValue) {
            const [U] = Object.values(e.modelValue);
            z = d(U, e.formatter.date, !0);
          }
        } else {
          const [U] = V.value;
          z = U && d(U, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        if (e.modelValue) {
          const [U] = e.modelValue.split(e.separator);
          z = d(U, e.formatter.date, !0);
        }
      } else {
        const [U] = V.value;
        z = U && d(U, e.formatter.date, !0);
      }
      return c && (L = f ? "text-vtd-primary-500 font-semibold dark:text-vtd-primary-400 rounded-full focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50" : $ ? "text-vtd-secondary-600 font-normal disabled:text-vtd-secondary-500 disabled:cursor-not-allowed rounded-full" : v.isBetween(z, ce, "date", "()") ? "text-vtd-secondary-700 font-medium dark:text-vtd-secondary-100 rounded-full" : "text-vtd-secondary-600 font-medium dark:text-vtd-secondary-200 rounded-full"), i && (L = "text-vtd-secondary-400 font-light disabled:cursor-not-allowed"), z && ce && !i ? (v.isSame(z, "date") && (L = ce.isAfter(z, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed", z.isSame(ce, "date") && (L = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed")), v.isSame(ce, "date") && (L = ce.isAfter(z, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed", z.isSame(ce, "date") && (L = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"))) : z && v.isSame(z, "date") && !i && (L = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"), L;
    }
    function de(v) {
      let f, c, i;
      if (f = "", !h())
        return f;
      if (Array.isArray(e.modelValue))
        if (x.value.length > 1) {
          const [$, L] = x.value;
          c = $ && d($, e.formatter.date, !0), i = L && d(L, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [$, L] = e.modelValue;
          c = $ && d($, e.formatter.date, !0), i = L && d(L, e.formatter.date, !0);
        } else {
          const [$, L] = V.value;
          c = $ && d($, e.formatter.date, !0), i = L && d(L, e.formatter.date, !0);
        }
      else if (typeof e.modelValue == "object")
        if (x.value.length > 1) {
          const [$, L] = x.value;
          c = $ && d($, e.formatter.date, !0), i = L && d(L, e.formatter.date, !0);
        } else if (e.autoApply) {
          if (e.modelValue) {
            const [$, L] = Object.values(e.modelValue);
            c = $ && d($, e.formatter.date, !0), i = L && d(L, e.formatter.date, !0);
          }
        } else {
          const [$, L] = V.value;
          c = $ && d($, e.formatter.date, !0), i = L && d(L, e.formatter.date, !0);
        }
      else if (x.value.length > 1) {
        const [$, L] = x.value;
        c = $ && d($, e.formatter.date, !0), i = L && d(L, e.formatter.date, !0);
      } else if (e.autoApply) {
        const [$, L] = e.modelValue ? e.modelValue.split(e.separator) : [null, null];
        c = $ && d($, e.formatter.date, !0), i = L && d(L, e.formatter.date, !0);
      } else {
        const [$, L] = V.value;
        c = $ && d($, e.formatter.date, !0), i = L && d(L, e.formatter.date, !0);
      }
      return c && i && (v.isSame(c, "date") ? (i.isBefore(c) && (f += " rounded-r-full inset-0"), c.isBefore(i) && (f += " rounded-l-full inset-0")) : v.isSame(i, "date") ? (i.isBefore(c) && (f += " rounded-l-full inset-0"), c.isBefore(i) && (f += " rounded-r-full inset-0")) : f += " inset-0"), f;
    }
    function xe(v, f) {
      r.value.previous = d(v, e.formatter.date, !0), r.value.next = d(f, e.formatter.date, !0), (d.duration(r.value.next.diff(r.value.previous)).get("months") === 2 || d.duration(r.value.next.diff(r.value.previous)).get("months") === 1 && d.duration(r.value.next.diff(r.value.previous)).get("days") === 7) && (r.value.next = r.value.next.subtract(1, "month")), (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month"));
    }
    function ae(v, f) {
      if (h())
        if (e.autoApply) {
          if (Array.isArray(e.modelValue))
            a("update:modelValue", [v, f]);
          else if (typeof e.modelValue == "object") {
            const c = {}, [i, $] = Object.keys(e.modelValue);
            c[i] = v, c[$] = f, a("update:modelValue", c);
          } else
            a(
              "update:modelValue",
              p(
                {
                  previous: d(v, e.formatter.date, !0),
                  next: d(f, e.formatter.date, !0)
                },
                e
              )
            );
          k.value = `${v}${e.separator}${f}`;
        } else
          V.value = [
            d(v, e.formatter.date, !0),
            d(f, e.formatter.date, !0)
          ];
      else if (e.autoApply) {
        if (Array.isArray(e.modelValue))
          a("update:modelValue", [v]);
        else if (typeof e.modelValue == "object") {
          const c = {}, [i] = Object.keys(e.modelValue);
          c[i] = v, a("update:modelValue", c);
        } else
          a("update:modelValue", v);
        k.value = v;
      } else
        V.value = [
          d(v, e.formatter.date, !0),
          d(f, e.formatter.date, !0)
        ];
      xe(v, f);
    }
    function be(v) {
      const f = d().format(e.formatter.date), c = d().format(e.formatter.date);
      ae(f, c), v && v();
    }
    function he(v) {
      const f = d().subtract(1, "day").format(e.formatter.date), c = d().subtract(1, "day").format(e.formatter.date);
      ae(f, c), v && v();
    }
    function oe(v, f) {
      const c = d().subtract(v - 1, "day").format(e.formatter.date), i = d().format(e.formatter.date);
      ae(c, i), f && f();
    }
    function fe(v) {
      const f = d().date(1).format(e.formatter.date), c = d().date(d().daysInMonth()).format(e.formatter.date);
      ae(f, c), v && v();
    }
    function ge(v) {
      const f = d().date(1).subtract(1, "month").format(e.formatter.date), c = d().date(0).format(e.formatter.date);
      ae(f, c), v && v();
    }
    function we(v, f) {
      const [c, i] = v.atClick(), $ = d(c).format(e.formatter.date), L = d(i).format(e.formatter.date);
      ae($, L), f && f();
    }
    Xt(
      () => V.value,
      (v) => {
        v.length > 0 && (s.previous.calendar = !0, s.previous.month = !1, s.previous.year = !1, s.next.calendar = !0, s.next.month = !1, s.next.year = !1);
      }
    ), $e(() => {
      e.placeholder ? D.value = e.placeholder : h() ? D.value = `${e.formatter.date}${e.separator}${e.formatter.date}` : D.value = e.formatter.date;
    }), $e(() => {
      const v = e.i18n, f = e.modelValue;
      He(async () => {
        v in P && (await P[v](), d.locale(v));
        let c, i;
        if (h()) {
          if (Array.isArray(f)) {
            if (f.length > 0) {
              const [L, z] = f;
              c = d(L, e.formatter.date, !0), i = d(z, e.formatter.date, !0);
            }
          } else if (typeof f == "object") {
            if (!Qt(f))
              try {
                Object.keys(f);
              } catch {
                console.warn(
                  "[Vue Tailwind Datepicker]: It looks like you want to use Object as the argument %cv-model",
                  "font-style: italic; color: #42b883;",
                  ", but you pass it undefined or null."
                ), console.warn(
                  "[Vue Tailwind Datepicker]: We has replace with %c{ startDate: '', endDate: '' }",
                  "font-style: italic; color: #42b883;",
                  ", but you can replace manually."
                ), a("update:modelValue", {
                  startDate: "",
                  endDate: ""
                });
              }
            if (f) {
              const [L, z] = Object.values(f);
              c = L && d(L, e.formatter.date, !0), i = z && d(z, e.formatter.date, !0);
            }
          } else if (f) {
            const [L, z] = f.split(e.separator);
            c = d(L, e.formatter.date, !0), i = d(z, e.formatter.date, !0);
          }
          c && i ? (k.value = p(
            {
              previous: c,
              next: i
            },
            e
          ), i.isBefore(c, "month") ? (r.value.previous = i, r.value.next = c, r.value.year.previous = i.year(), r.value.year.next = c.year()) : i.isSame(c, "month") ? (r.value.previous = c, r.value.next = i.add(1, "month"), r.value.year.previous = c.year(), r.value.year.next = c.add(1, "year").year()) : (r.value.previous = c, r.value.next = i, r.value.year.previous = c.year(), r.value.year.next = i.year()), e.autoApply || (V.value = [c, i])) : (r.value.previous = d(e.startFrom), r.value.next = d(e.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
        } else {
          if (Array.isArray(f)) {
            if (f.length > 0) {
              const [L] = f;
              c = d(L, e.formatter.date, !0);
            }
          } else if (typeof f == "object") {
            if (f) {
              const [L] = Object.values(f);
              c = d(L, e.formatter.date, !0);
            }
          } else if (f.length) {
            const [L] = f.split(e.separator);
            c = d(L, e.formatter.date, !0);
          }
          c && c.isValid() ? (k.value = w(c, e), r.value.previous = c, r.value.next = c.add(1, "month"), r.value.year.previous = c.year(), r.value.year.next = c.add(1, "year").year(), e.autoApply || (V.value = [c])) : (r.value.previous = d(e.startFrom), r.value.next = d(e.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
        }
        const $ = e.weekdaysSize === "min" ? d.weekdaysMin() : d.weekdaysShort();
        r.value.weeks = Z() ? C($) : $, r.value.months = e.formatter.month === "MMM" ? d.monthsShort() : d.months();
      });
    });
    function Re(v) {
      return v && g.value === null && (g.value = b(T.value)), v && g.value ? "place-right" : "place-left";
    }
    function Ie(v) {
      return v && g.value === null && (g.value = b(T.value)), g.value ? "left-auto right-0" : "left-0 right-auto";
    }
    return ne(Lt, te), ne(Ft, de), ne(Bt, re), ne(Nt, Q), ne(Rt, be), ne(It, he), ne(Ht, oe), ne(Ut, fe), ne(zt, ge), ne(Wt, we), (v, f) => e.noInput ? K.value ? (W(), q("div", Ho, [
      E("div", Uo, [
        E("div", zo, [
          e.shortcuts ? (W(), Ue(pt, {
            key: 0,
            shortcuts: e.shortcuts,
            "as-range": h(),
            "as-single": e.asSingle,
            i18n: e.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : ye("", !0),
          E("div", Wo, [
            h() && !e.asSingle ? (W(), q("div", Ko, Zo)) : ye("", !0),
            E("div", {
              class: Oe(["relative w-full lg:w-80", {
                "mb-3 sm:mb-0 sm:mr-2 md:w-1/2": h() && !e.asSingle
              }])
            }, [
              ee(Ze, {
                panel: s.previous,
                calendar: j.value.previous
              }, null, 8, ["panel", "calendar"]),
              E("div", qo, [
                pe(ee(Qe, {
                  months: N.value,
                  onUpdateMonth: j.value.previous.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [ve, s.previous.month]
                ]),
                pe(ee(Je, {
                  years: j.value.previous.years(),
                  onUpdateYear: j.value.previous.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [ve, s.previous.year]
                ]),
                pe(E("div", null, [
                  ee(Xe, { weeks: R.value }, null, 8, ["weeks"]),
                  ee(qe, {
                    calendar: j.value.previous,
                    weeks: R.value,
                    "as-range": h(),
                    onUpdateDate: f[2] || (f[2] = (c) => F(c))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ve, s.previous.calendar]
                ])
              ])
            ], 2),
            h() && !e.asSingle ? (W(), q("div", Jo, [
              ee(Ze, {
                "as-prev-or-next": "",
                panel: s.next,
                calendar: j.value.next
              }, null, 8, ["panel", "calendar"]),
              E("div", Xo, [
                pe(ee(Qe, {
                  months: N.value,
                  onUpdateMonth: j.value.next.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [ve, s.next.month]
                ]),
                pe(ee(Je, {
                  "as-prev-or-next": "",
                  years: j.value.next.years(),
                  onUpdateYear: j.value.next.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [ve, s.next.year]
                ]),
                pe(E("div", null, [
                  ee(Xe, { weeks: R.value }, null, 8, ["weeks"]),
                  ee(qe, {
                    "as-prev-or-next": "",
                    calendar: j.value.next,
                    weeks: R.value,
                    "as-range": h(),
                    onUpdateDate: f[3] || (f[3] = (c) => F(c))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ve, s.next.calendar]
                ])
              ])
            ])) : ye("", !0)
          ])
        ]),
        e.autoApply ? ye("", !0) : (W(), q("div", Qo, [
          E("div", ea, [
            E("div", ta, [
              E("button", {
                type: "button",
                class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                disabled: e.asSingle ? V.value.length < 1 : V.value.length < 2,
                onClick: f[4] || (f[4] = (c) => G()),
                textContent: se(e.options.footer.apply)
              }, null, 8, ra)
            ])
          ])
        ]))
      ])
    ])) : ye("", !0) : (W(), Ue(le(Pt), {
      key: 0,
      id: "vtd",
      as: "div",
      class: "relative w-full"
    }, {
      default: Fe(({ open: c }) => [
        e.overlay && !e.disabled ? (W(), Ue(le(Dr), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : ye("", !0),
        ee(le(Sr), {
          as: "label",
          class: "relative block"
        }, {
          default: Fe(() => [
            dt(v.$slots, "default", {
              value: k.value,
              placeholder: D.value,
              clear: M
            }, () => [
              pe(E("input", er({
                ref_key: "VtdInputRef",
                ref: I
              }, v.$attrs, {
                "onUpdate:modelValue": f[0] || (f[0] = (i) => k.value = i),
                type: "text",
                class: ["relative block w-full", [
                  e.disabled ? "cursor-default opacity-50" : "opacity-100",
                  v.inputClasses || "pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20"
                ]],
                disabled: e.disabled,
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other",
                placeholder: D.value,
                onKeyup: B
              }), null, 16, xo), [
                [tr, k.value]
              ]),
              E("div", wo, [
                E("button", {
                  type: "button",
                  disabled: e.disabled,
                  class: Oe([
                    e.disabled ? "cursor-default opacity-50" : "opacity-100",
                    "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md"
                  ]),
                  onClick: f[1] || (f[1] = (i) => {
                    var $;
                    return e.disabled ? !1 : k.value ? M() : ($ = I.value) == null ? void 0 : $.focus();
                  })
                }, [
                  dt(v.$slots, "inputIcon", { value: k.value }, () => [
                    (W(), q("svg", $o, [
                      k.value ? (W(), q("path", jo)) : (W(), q("path", Mo))
                    ]))
                  ])
                ], 10, ko)
              ])
            ])
          ]),
          _: 3
        }),
        ee(mt, {
          "enter-from-class": "opacity-0 translate-y-3",
          "enter-to-class": "opacity-100 translate-y-0",
          "enter-active-class": "transform transition ease-out duration-200",
          "leave-active-class": "transform transition ease-in duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 translate-y-3"
        }, {
          default: Fe(() => [
            e.disabled ? ye("", !0) : (W(), Ue(le(_r), {
              key: 0,
              as: "div",
              class: "relative z-50"
            }, {
              default: Fe(({ close: i }) => [
                E("div", {
                  class: Oe(["absolute z-50 top-full sm:mt-2.5", Ie(c)])
                }, [
                  E("div", {
                    ref_key: "VtdRef",
                    ref: T,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm"
                  }, [
                    E("div", {
                      class: Oe(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]", Re(c)])
                    }, [
                      E("div", So, [
                        e.shortcuts ? (W(), Ue(pt, {
                          key: 0,
                          shortcuts: e.shortcuts,
                          "as-range": h(),
                          "as-single": e.asSingle,
                          i18n: e.options.shortcuts,
                          close: i
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : ye("", !0),
                        E("div", Do, [
                          h() && !e.asSingle ? (W(), q("div", _o, Vo)) : ye("", !0),
                          E("div", {
                            class: Oe(["relative", {
                              "mb-3 sm:mb-0 sm:mr-2 w-full md:w-1/2 lg:w-80": h() && !e.asSingle,
                              "w-full": !h() && e.asSingle
                            }])
                          }, [
                            ee(Ze, {
                              panel: s.previous,
                              calendar: j.value.previous
                            }, null, 8, ["panel", "calendar"]),
                            E("div", Oo, [
                              pe(ee(Qe, {
                                months: N.value,
                                onUpdateMonth: j.value.previous.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [ve, s.previous.month]
                              ]),
                              pe(ee(Je, {
                                years: j.value.previous.years(),
                                onUpdateYear: j.value.previous.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [ve, s.previous.year]
                              ]),
                              pe(E("div", null, [
                                ee(Xe, { weeks: R.value }, null, 8, ["weeks"]),
                                ee(qe, {
                                  calendar: j.value.previous,
                                  weeks: R.value,
                                  "as-range": h(),
                                  onUpdateDate: ($) => F($, i)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdateDate"])
                              ], 512), [
                                [ve, s.previous.calendar]
                              ])
                            ])
                          ], 2),
                          h() && !e.asSingle ? (W(), q("div", To, [
                            ee(Ze, {
                              "as-prev-or-next": "",
                              panel: s.next,
                              calendar: j.value.next
                            }, null, 8, ["panel", "calendar"]),
                            E("div", Ao, [
                              pe(ee(Qe, {
                                months: N.value,
                                onUpdateMonth: j.value.next.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [ve, s.next.month]
                              ]),
                              pe(ee(Je, {
                                "as-prev-or-next": "",
                                years: j.value.next.years(),
                                onUpdateYear: j.value.next.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [ve, s.next.year]
                              ]),
                              pe(E("div", null, [
                                ee(Xe, { weeks: R.value }, null, 8, ["weeks"]),
                                ee(qe, {
                                  "as-prev-or-next": "",
                                  calendar: j.value.next,
                                  weeks: R.value,
                                  "as-range": h(),
                                  onUpdateDate: ($) => F($, i)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdateDate"])
                              ], 512), [
                                [ve, s.next.calendar]
                              ])
                            ])
                          ])) : ye("", !0)
                        ])
                      ]),
                      e.autoApply ? (W(), q("div", Bo, [
                        E("div", No, [
                          E("div", Ro, [
                            E("button", {
                              type: "button",
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              onClick: ($) => i(),
                              textContent: se(e.options.footer.cancel)
                            }, null, 8, Io)
                          ])
                        ])
                      ])) : (W(), q("div", Co, [
                        E("div", Yo, [
                          E("div", Eo, [
                            E("button", {
                              type: "button",
                              class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                              disabled: e.asSingle ? V.value.length < 1 : V.value.length < 2,
                              onClick: ($) => G(i),
                              textContent: se(e.options.footer.apply)
                            }, null, 8, Lo),
                            E("button", {
                              type: "button",
                              class: "mt-3 away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              onClick: ($) => i(),
                              textContent: se(e.options.footer.cancel)
                            }, null, 8, Fo)
                          ])
                        ])
                      ]))
                    ], 2)
                  ], 512)
                ], 2)
              ]),
              _: 2
            }, 1024))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }));
  }
});
const Kt = /* @__PURE__ */ (() => {
  const t = oa;
  return t.install = (o) => {
    o.component("VueTailwindDatepicker", t);
  }, t;
})(), aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kt
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(aa).forEach(([t, o]) => {
  t !== "default" && (Kt[t] = o);
});
export {
  Kt as c,
  d
};
