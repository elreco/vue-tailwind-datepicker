import { cloneVNode as Kt, h as me, Fragment as je, inject as De, provide as ne, ref as J, onMounted as rt, watchEffect as $e, computed as ue, defineComponent as ie, onUnmounted as et, Teleport as Gt, reactive as pt, shallowRef as Zt, openBlock as z, createElementBlock as Z, createElementVNode as E, withDirectives as pe, vShow as ve, toDisplayString as se, renderList as Ke, withModifiers as Ae, unref as le, createCommentVNode as ye, createVNode as ee, TransitionGroup as qt, withCtx as Fe, normalizeClass as Oe, Transition as vt, nextTick as He, watch as Jt, isProxy as Xt, createBlock as Ue, renderSlot as Qt, mergeProps as er, vModelText as tr } from "vue";
function _e(t, o, ...a) {
  if (t in o) {
    let l = o[t];
    return typeof l == "function" ? l(...a) : l;
  }
  let e = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(o).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(e, _e), e;
}
var ze = ((t) => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(ze || {}), rr = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(rr || {});
function Ve({ visible: t = !0, features: o = 0, ourProps: a, theirProps: e, ...l }) {
  var n;
  let y = ht(e, a), u = Object.assign(l, { props: y });
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
  let { as: u, ...m } = or(t, ["unmount", "static"]), f = (n = a.default) == null ? void 0 : n.call(a, e), k = {};
  if (e) {
    let g = !1, V = [];
    for (let [T, R] of Object.entries(e))
      typeof R == "boolean" && (g = !0), R === !0 && V.push(T);
    g && (k["data-headlessui-state"] = V.join(" "));
  }
  if (u === "template") {
    if (f = mt(f ?? []), Object.keys(m).length > 0 || Object.keys(o).length > 0) {
      let [g, ...V] = f ?? [];
      if (!ar(g) || V.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(m).concat(Object.keys(o)).map((x) => x.trim()).filter((x, D, Y) => Y.indexOf(x) === D).sort((x, D) => x.localeCompare(D)).map((x) => `  - ${x}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((x) => `  - ${x}`).join(`
`)].join(`
`));
      let T = ht((y = g.props) != null ? y : {}, m), R = Kt(g, T);
      for (let x in T)
        x.startsWith("on") && (R.props || (R.props = {}), R.props[x] = T[x]);
      return R;
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f;
  }
  return me(u, Object.assign({}, m, k), { default: () => f });
}
function mt(t) {
  return t.flatMap((o) => o.type === je ? mt(o.children) : [o]);
}
function ht(...t) {
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
var Pe = ((t) => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(Pe || {});
function H(t) {
  var o;
  return t == null || t.value == null ? null : (o = t.value.$el) != null ? o : t.value;
}
let yt = Symbol("Context");
var Ye = ((t) => (t[t.Open = 1] = "Open", t[t.Closed = 2] = "Closed", t[t.Closing = 4] = "Closing", t[t.Opening = 8] = "Opening", t))(Ye || {});
function bt() {
  return De(yt, null);
}
function lr(t) {
  ne(yt, t);
}
function dt(t, o) {
  if (t)
    return t;
  let a = o ?? "button";
  if (typeof a == "string" && a.toLowerCase() === "button")
    return "button";
}
function ur(t, o) {
  let a = J(dt(t.value.type, t.value.as));
  return rt(() => {
    a.value = dt(t.value.type, t.value.as);
  }), $e(() => {
    var e;
    a.value || H(o) && H(o) instanceof HTMLButtonElement && !((e = H(o)) != null && e.hasAttribute("type")) && (a.value = "button");
  }), a;
}
var ir = Object.defineProperty, dr = (t, o, a) => o in t ? ir(t, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[o] = a, ct = (t, o, a) => (dr(t, typeof o != "symbol" ? o + "" : o, a), a);
class cr {
  constructor() {
    ct(this, "current", this.detect()), ct(this, "currentId", 0);
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
function gt(t, o = 0) {
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
  l.length > 0 && u.length > 1 && (u = u.filter((R) => !l.includes(R))), e = e ?? y.activeElement;
  let m = (() => {
    if (o & 5)
      return 1;
    if (o & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = (() => {
    if (o & 1)
      return 0;
    if (o & 2)
      return Math.max(0, u.indexOf(e)) - 1;
    if (o & 4)
      return Math.max(0, u.indexOf(e)) + 1;
    if (o & 8)
      return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), k = o & 32 ? { preventScroll: !0 } : {}, g = 0, V = u.length, T;
  do {
    if (g >= V || g + V <= 0)
      return 0;
    let R = f + g;
    if (o & 16)
      R = (R + V) % V;
    else {
      if (R < 0)
        return 3;
      if (R >= V)
        return 1;
    }
    T = u[R], T == null || T.focus(k), g += m;
  } while (T !== y.activeElement);
  return o & 6 && mr(T) && T.select(), 2;
}
function Ge(t, o, a) {
  ot.isServer || $e((e) => {
    document.addEventListener(t, o, a), e(() => document.removeEventListener(t, o, a));
  });
}
function xt(t, o, a) {
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
    let m = function f(k) {
      return typeof k == "function" ? f(k()) : Array.isArray(k) || k instanceof Set ? k : [k];
    }(t);
    for (let f of m) {
      if (f === null)
        continue;
      let k = f instanceof HTMLElement ? f : H(f);
      if (k != null && k.contains(u) || n.composed && n.composedPath().includes(k))
        return;
    }
    return !gt(u, it.Loose) && u.tabIndex !== -1 && n.preventDefault(), o(n, u);
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
  }, !0), Ge("touchend", (n) => e(n, () => n.target instanceof HTMLElement ? n.target : null), !0), xt("blur", (n) => e(n, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ne = ((t) => (t[t.None = 1] = "None", t[t.Focusable = 2] = "Focusable", t[t.Hidden = 4] = "Hidden", t))(Ne || {});
let We = ie({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t, { slots: o, attrs: a }) {
  return () => {
    let { features: e, ...l } = t, n = { "aria-hidden": (e & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
    return Ve({ ourProps: n, theirProps: l, slot: {}, attrs: a, slots: o, name: "Hidden" });
  };
} });
var Se = ((t) => (t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(Se || {});
function wt() {
  let t = J(0);
  return xt("keydown", (o) => {
    o.key === "Tab" && (t.value = o.shiftKey ? 1 : 0);
  }), t;
}
function br(t, o, a, e) {
  ot.isServer || $e((l) => {
    t = t ?? window, t.addEventListener(o, a, e), l(() => t.removeEventListener(o, a, e));
  });
}
let kt = Symbol("ForcePortalRootContext");
function gr() {
  return De(kt, !1);
}
ie({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(t, { slots: o, attrs: a }) {
  return ne(kt, t.force), () => {
    let { force: e, ...l } = t;
    return Ve({ theirProps: l, ourProps: {}, slot: {}, slots: o, attrs: a, name: "ForcePortalRoot" });
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
  let e = J(null), l = ue(() => Te(e)), n = gr(), y = De($t, null), u = J(n === !0 || y == null ? xr(e.value) : y.resolveTarget());
  $e(() => {
    n || y != null && (u.value = y.resolveTarget());
  });
  let m = De(ut, null);
  return rt(() => {
    let f = H(e);
    f && m && et(m.register(f));
  }), et(() => {
    var f, k;
    let g = (f = l.value) == null ? void 0 : f.getElementById("headlessui-portal-root");
    g && u.value === g && u.value.children.length <= 0 && ((k = u.value.parentElement) == null || k.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let f = { ref: e, "data-headlessui-portal": "" };
    return me(Gt, { to: u.value }, Ve({ ourProps: f, theirProps: t, slot: {}, attrs: a, slots: o, name: "Portal" }));
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
let $t = Symbol("PortalGroupContext");
ie({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(t, { attrs: o, slots: a }) {
  let e = pt({ resolveTarget() {
    return t.target;
  } });
  return ne($t, e), () => {
    let { target: l, ...n } = t;
    return Ve({ theirProps: n, ourProps: {}, slot: {}, attrs: o, slots: a, name: "PortalGroup" });
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
      m !== document.body && m !== document.head && m instanceof HTMLElement && m.id !== "headlessui-portal-root" && (m.contains(H(e)) || u.some((f) => m.contains(f)) || u.push(m));
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
let jt = Symbol("PopoverContext");
function nt(t) {
  let o = De(jt, null);
  if (o === null) {
    let a = new Error(`<${t} /> is missing a parent <${_t.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, nt), a;
  }
  return o;
}
let Mt = Symbol("PopoverGroupContext");
function St() {
  return De(Mt, null);
}
let Dt = Symbol("PopoverPanelContext");
function Mr() {
  return De(Dt, null);
}
let _t = ie({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: o, attrs: a, expose: e }) {
  var l;
  let n = J(null);
  e({ el: n, $el: n });
  let y = J(1), u = J(null), m = J(null), f = J(null), k = J(null), g = ue(() => Te(n)), V = ue(() => {
    var O, _;
    if (!H(u) || !H(k))
      return !1;
    for (let G of document.querySelectorAll("body > *"))
      if (Number(G == null ? void 0 : G.contains(H(u))) ^ Number(G == null ? void 0 : G.contains(H(k))))
        return !0;
    let s = at(), r = s.indexOf(H(u)), N = (r + s.length - 1) % s.length, B = (r + 1) % s.length, j = s[N], W = s[B];
    return !((O = H(k)) != null && O.contains(j)) && !((_ = H(k)) != null && _.contains(W));
  }), T = { popoverState: y, buttonId: J(null), panelId: J(null), panel: k, button: u, isPortalled: V, beforePanelSentinel: m, afterPanelSentinel: f, togglePopover() {
    y.value = _e(y.value, { 0: 1, 1: 0 });
  }, closePopover() {
    y.value !== 1 && (y.value = 1);
  }, close(O) {
    T.closePopover();
    let _ = (() => O ? O instanceof HTMLElement ? O : O.value instanceof HTMLElement ? H(O) : H(T.button) : H(T.button))();
    _ == null || _.focus();
  } };
  ne(jt, T), lr(ue(() => _e(y.value, { 0: Ye.Open, 1: Ye.Closed })));
  let R = { buttonId: T.buttonId, panelId: T.panelId, close() {
    T.closePopover();
  } }, x = St(), D = x == null ? void 0 : x.registerPopover, [Y, $] = wr(), w = kr({ mainTreeNodeRef: x == null ? void 0 : x.mainTreeNodeRef, portals: Y, defaultContainers: [u, k] });
  function P() {
    var O, _, s, r;
    return (r = x == null ? void 0 : x.isFocusWithinPopoverGroup()) != null ? r : ((O = g.value) == null ? void 0 : O.activeElement) && (((_ = H(u)) == null ? void 0 : _.contains(g.value.activeElement)) || ((s = H(k)) == null ? void 0 : s.contains(g.value.activeElement)));
  }
  return $e(() => D == null ? void 0 : D(R)), br((l = g.value) == null ? void 0 : l.defaultView, "focus", (O) => {
    var _, s;
    O.target !== window && O.target instanceof HTMLElement && y.value === 0 && (P() || u && k && (w.contains(O.target) || (_ = H(T.beforePanelSentinel)) != null && _.contains(O.target) || (s = H(T.afterPanelSentinel)) != null && s.contains(O.target) || T.closePopover()));
  }, !0), yr(w.resolveContainers, (O, _) => {
    var s;
    T.closePopover(), gt(_, it.Loose) || (O.preventDefault(), (s = H(u)) == null || s.focus());
  }, ue(() => y.value === 0)), () => {
    let O = { open: y.value === 0, close: T.close };
    return me(je, [me($, {}, () => Ve({ theirProps: { ...t, ...a }, ourProps: { ref: n }, slot: O, slots: o, attrs: a, name: "Popover" })), me(w.MainTreeNode)]);
  };
} }), Sr = ie({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${Be()}` } }, inheritAttrs: !1, setup(t, { attrs: o, slots: a, expose: e }) {
  let l = nt("PopoverButton"), n = ue(() => Te(l.button));
  e({ el: l.button, $el: l.button }), rt(() => {
    l.buttonId.value = t.id;
  }), et(() => {
    l.buttonId.value = null;
  });
  let y = St(), u = y == null ? void 0 : y.closeOthers, m = Mr(), f = ue(() => m === null ? !1 : m.value === l.panelId.value), k = J(null), g = `headlessui-focus-sentinel-${Be()}`;
  f.value || $e(() => {
    l.button.value = k.value;
  });
  let V = ur(ue(() => ({ as: t.as, type: o.type })), k);
  function T(w) {
    var P, O, _, s, r;
    if (f.value) {
      if (l.popoverState.value === 1)
        return;
      switch (w.key) {
        case Pe.Space:
        case Pe.Enter:
          w.preventDefault(), (O = (P = w.target).click) == null || O.call(P), l.closePopover(), (_ = H(l.button)) == null || _.focus();
          break;
      }
    } else
      switch (w.key) {
        case Pe.Space:
        case Pe.Enter:
          w.preventDefault(), w.stopPropagation(), l.popoverState.value === 1 && (u == null || u(l.buttonId.value)), l.togglePopover();
          break;
        case Pe.Escape:
          if (l.popoverState.value !== 0)
            return u == null ? void 0 : u(l.buttonId.value);
          if (!H(l.button) || (s = n.value) != null && s.activeElement && !((r = H(l.button)) != null && r.contains(n.value.activeElement)))
            return;
          w.preventDefault(), w.stopPropagation(), l.closePopover();
          break;
      }
  }
  function R(w) {
    f.value || w.key === Pe.Space && w.preventDefault();
  }
  function x(w) {
    var P, O;
    t.disabled || (f.value ? (l.closePopover(), (P = H(l.button)) == null || P.focus()) : (w.preventDefault(), w.stopPropagation(), l.popoverState.value === 1 && (u == null || u(l.buttonId.value)), l.togglePopover(), (O = H(l.button)) == null || O.focus()));
  }
  function D(w) {
    w.preventDefault(), w.stopPropagation();
  }
  let Y = wt();
  function $() {
    let w = H(l.panel);
    if (!w)
      return;
    function P() {
      _e(Y.value, { [Se.Forwards]: () => Ce(w, Me.First), [Se.Backwards]: () => Ce(w, Me.Last) }) === tt.Error && Ce(at().filter((O) => O.dataset.headlessuiFocusGuard !== "true"), _e(Y.value, { [Se.Forwards]: Me.Next, [Se.Backwards]: Me.Previous }), { relativeTo: H(l.button) });
    }
    P();
  }
  return () => {
    let w = l.popoverState.value === 0, P = { open: w }, { id: O, ..._ } = t, s = f.value ? { ref: k, type: V.value, onKeydown: T, onClick: x } : { ref: k, id: O, type: V.value, "aria-expanded": l.popoverState.value === 0, "aria-controls": H(l.panel) ? l.panelId.value : void 0, disabled: t.disabled ? !0 : void 0, onKeydown: T, onKeyup: R, onClick: x, onMousedown: D };
    return me(je, [Ve({ ourProps: s, theirProps: { ...o, ..._ }, slot: P, attrs: o, slots: a, name: "PopoverButton" }), w && !f.value && l.isPortalled.value && me(We, { id: g, features: Ne.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: $ })]);
  };
} }), Dr = ie({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(t, { attrs: o, slots: a }) {
  let e = nt("PopoverOverlay"), l = `headlessui-popover-overlay-${Be()}`, n = bt(), y = ue(() => n !== null ? (n.value & Ye.Open) === Ye.Open : e.popoverState.value === 0);
  function u() {
    e.closePopover();
  }
  return () => {
    let m = { open: e.popoverState.value === 0 };
    return Ve({ ourProps: { id: l, "aria-hidden": !0, onClick: u }, theirProps: t, slot: m, attrs: o, slots: a, features: ze.RenderStrategy | ze.Static, visible: y.value, name: "PopoverOverlay" });
  };
} }), _r = ie({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${Be()}` } }, inheritAttrs: !1, setup(t, { attrs: o, slots: a, expose: e }) {
  let { focus: l } = t, n = nt("PopoverPanel"), y = ue(() => Te(n.panel)), u = `headlessui-focus-sentinel-before-${Be()}`, m = `headlessui-focus-sentinel-after-${Be()}`;
  e({ el: n.panel, $el: n.panel }), rt(() => {
    n.panelId.value = t.id;
  }), et(() => {
    n.panelId.value = null;
  }), ne(Dt, n.panelId), $e(() => {
    var D, Y;
    if (!l || n.popoverState.value !== 0 || !n.panel)
      return;
    let $ = (D = y.value) == null ? void 0 : D.activeElement;
    (Y = H(n.panel)) != null && Y.contains($) || Ce(H(n.panel), Me.First);
  });
  let f = bt(), k = ue(() => f !== null ? (f.value & Ye.Open) === Ye.Open : n.popoverState.value === 0);
  function g(D) {
    var Y, $;
    switch (D.key) {
      case Pe.Escape:
        if (n.popoverState.value !== 0 || !H(n.panel) || y.value && !((Y = H(n.panel)) != null && Y.contains(y.value.activeElement)))
          return;
        D.preventDefault(), D.stopPropagation(), n.closePopover(), ($ = H(n.button)) == null || $.focus();
        break;
    }
  }
  function V(D) {
    var Y, $, w, P, O;
    let _ = D.relatedTarget;
    _ && H(n.panel) && ((Y = H(n.panel)) != null && Y.contains(_) || (n.closePopover(), ((w = ($ = H(n.beforePanelSentinel)) == null ? void 0 : $.contains) != null && w.call($, _) || (O = (P = H(n.afterPanelSentinel)) == null ? void 0 : P.contains) != null && O.call(P, _)) && _.focus({ preventScroll: !0 })));
  }
  let T = wt();
  function R() {
    let D = H(n.panel);
    if (!D)
      return;
    function Y() {
      _e(T.value, { [Se.Forwards]: () => {
        var $;
        Ce(D, Me.First) === tt.Error && (($ = H(n.afterPanelSentinel)) == null || $.focus());
      }, [Se.Backwards]: () => {
        var $;
        ($ = H(n.button)) == null || $.focus({ preventScroll: !0 });
      } });
    }
    Y();
  }
  function x() {
    let D = H(n.panel);
    if (!D)
      return;
    function Y() {
      _e(T.value, { [Se.Forwards]: () => {
        let $ = H(n.button), w = H(n.panel);
        if (!$)
          return;
        let P = at(), O = P.indexOf($), _ = P.slice(0, O + 1), s = [...P.slice(O + 1), ..._];
        for (let r of s.slice())
          if (r.dataset.headlessuiFocusGuard === "true" || w != null && w.contains(r)) {
            let N = s.indexOf(r);
            N !== -1 && s.splice(N, 1);
          }
        Ce(s, Me.First, { sorted: !1 });
      }, [Se.Backwards]: () => {
        var $;
        Ce(D, Me.Previous) === tt.Error && (($ = H(n.button)) == null || $.focus());
      } });
    }
    Y();
  }
  return () => {
    let D = { open: n.popoverState.value === 0, close: n.close }, { id: Y, focus: $, ...w } = t, P = { ref: n.panel, id: Y, onKeydown: g, onFocusout: l && n.popoverState.value === 0 ? V : void 0, tabIndex: -1 };
    return Ve({ ourProps: P, theirProps: { ...o, ...w }, attrs: o, slot: D, slots: { ...a, default: (...O) => {
      var _;
      return [me(je, [k.value && n.isPortalled.value && me(We, { id: u, ref: n.beforePanelSentinel, features: Ne.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: R }), (_ = a.default) == null ? void 0 : _.call(a, ...O), k.value && n.isPortalled.value && me(We, { id: m, ref: n.afterPanelSentinel, features: Ne.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: x })])];
    } }, features: ze.RenderStrategy | ze.Static, visible: k.value, name: "PopoverPanel" });
  };
} });
ie({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(t, { attrs: o, slots: a, expose: e }) {
  let l = J(null), n = Zt([]), y = ue(() => Te(l)), u = $r();
  e({ el: l, $el: l });
  function m(V) {
    let T = n.value.indexOf(V);
    T !== -1 && n.value.splice(T, 1);
  }
  function f(V) {
    return n.value.push(V), () => {
      m(V);
    };
  }
  function k() {
    var V;
    let T = y.value;
    if (!T)
      return !1;
    let R = T.activeElement;
    return (V = H(l)) != null && V.contains(R) ? !0 : n.value.some((x) => {
      var D, Y;
      return ((D = T.getElementById(x.buttonId.value)) == null ? void 0 : D.contains(R)) || ((Y = T.getElementById(x.panelId.value)) == null ? void 0 : Y.contains(R));
    });
  }
  function g(V) {
    for (let T of n.value)
      T.buttonId.value !== V && T.close();
  }
  return ne(Mt, { registerPopover: f, unregisterPopover: m, isFocusWithinPopoverGroup: k, closeOthers: g, mainTreeNodeRef: u.mainTreeNodeRef }), () => me(je, [Ve({ ourProps: { ref: l }, theirProps: { ...t, ...o }, slot: {}, attrs: o, slots: a, name: "PopoverGroup" }), me(u.MainTreeNode)]);
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
    var a = 1e3, e = 6e4, l = 36e5, n = "millisecond", y = "second", u = "minute", m = "hour", f = "day", k = "week", g = "month", V = "quarter", T = "year", R = "date", x = "Invalid Date", D = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(C) {
      var h = ["th", "st", "nd", "rd"], S = C % 100;
      return "[" + C + (h[(S - 20) % 10] || h[S] || h[0]) + "]";
    } }, w = function(C, h, S) {
      var A = String(C);
      return !A || A.length >= h ? C : "" + Array(h + 1 - A.length).join(S) + C;
    }, P = { s: w, z: function(C) {
      var h = -C.utcOffset(), S = Math.abs(h), A = Math.floor(S / 60), M = S % 60;
      return (h <= 0 ? "+" : "-") + w(A, 2, "0") + ":" + w(M, 2, "0");
    }, m: function C(h, S) {
      if (h.date() < S.date())
        return -C(S, h);
      var A = 12 * (S.year() - h.year()) + (S.month() - h.month()), M = h.clone().add(A, g), F = S - M < 0, L = h.clone().add(A + (F ? -1 : 1), g);
      return +(-(A + (S - M) / (F ? M - L : L - M)) || 0);
    }, a: function(C) {
      return C < 0 ? Math.ceil(C) || 0 : Math.floor(C);
    }, p: function(C) {
      return { M: g, y: T, w: k, d: f, D: R, h: m, m: u, s: y, ms: n, Q: V }[C] || String(C || "").toLowerCase().replace(/s$/, "");
    }, u: function(C) {
      return C === void 0;
    } }, O = "en", _ = {};
    _[O] = $;
    var s = "$isDayjsObject", r = function(C) {
      return C instanceof W || !(!C || !C[s]);
    }, N = function C(h, S, A) {
      var M;
      if (!h)
        return O;
      if (typeof h == "string") {
        var F = h.toLowerCase();
        _[F] && (M = F), S && (_[F] = S, M = F);
        var L = h.split("-");
        if (!M && L.length > 1)
          return C(L[0]);
      } else {
        var K = h.name;
        _[K] = h, M = K;
      }
      return !A && M && (O = M), M || !A && O;
    }, B = function(C, h) {
      if (r(C))
        return C.clone();
      var S = typeof h == "object" ? h : {};
      return S.date = C, S.args = arguments, new W(S);
    }, j = P;
    j.l = N, j.i = r, j.w = function(C, h) {
      return B(C, { locale: h.$L, utc: h.$u, x: h.$x, $offset: h.$offset });
    };
    var W = function() {
      function C(S) {
        this.$L = N(S.locale, null, !0), this.parse(S), this.$x = this.$x || S.x || {}, this[s] = !0;
      }
      var h = C.prototype;
      return h.parse = function(S) {
        this.$d = function(A) {
          var M = A.date, F = A.utc;
          if (M === null)
            return /* @__PURE__ */ new Date(NaN);
          if (j.u(M))
            return /* @__PURE__ */ new Date();
          if (M instanceof Date)
            return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var L = M.match(D);
            if (L) {
              var K = L[2] - 1 || 0, Q = (L[7] || "0").substring(0, 3);
              return F ? new Date(Date.UTC(L[1], K, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, Q)) : new Date(L[1], K, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, Q);
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
        return this.$d.toString() !== x;
      }, h.isSame = function(S, A) {
        var M = B(S);
        return this.startOf(A) <= M && M <= this.endOf(A);
      }, h.isAfter = function(S, A) {
        return B(S) < this.startOf(A);
      }, h.isBefore = function(S, A) {
        return this.endOf(A) < B(S);
      }, h.$g = function(S, A, M) {
        return j.u(S) ? this[A] : this.set(M, S);
      }, h.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, h.valueOf = function() {
        return this.$d.getTime();
      }, h.startOf = function(S, A) {
        var M = this, F = !!j.u(A) || A, L = j.p(S), K = function(he, oe) {
          var fe = j.w(M.$u ? Date.UTC(M.$y, oe, he) : new Date(M.$y, oe, he), M);
          return F ? fe : fe.endOf(f);
        }, Q = function(he, oe) {
          return j.w(M.toDate()[he].apply(M.toDate("s"), (F ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(oe)), M);
        }, te = this.$W, re = this.$M, de = this.$D, xe = "set" + (this.$u ? "UTC" : "");
        switch (L) {
          case T:
            return F ? K(1, 0) : K(31, 11);
          case g:
            return F ? K(1, re) : K(0, re + 1);
          case k:
            var ae = this.$locale().weekStart || 0, be = (te < ae ? te + 7 : te) - ae;
            return K(F ? de - be : de + (6 - be), re);
          case f:
          case R:
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
        var M, F = j.p(S), L = "set" + (this.$u ? "UTC" : ""), K = (M = {}, M[f] = L + "Date", M[R] = L + "Date", M[g] = L + "Month", M[T] = L + "FullYear", M[m] = L + "Hours", M[u] = L + "Minutes", M[y] = L + "Seconds", M[n] = L + "Milliseconds", M)[F], Q = F === f ? this.$D + (A - this.$W) : A;
        if (F === g || F === T) {
          var te = this.clone().set(R, 1);
          te.$d[K](Q), te.init(), this.$d = te.set(R, Math.min(this.$D, te.daysInMonth())).$d;
        } else
          K && this.$d[K](Q);
        return this.init(), this;
      }, h.set = function(S, A) {
        return this.clone().$set(S, A);
      }, h.get = function(S) {
        return this[j.p(S)]();
      }, h.add = function(S, A) {
        var M, F = this;
        S = Number(S);
        var L = j.p(A), K = function(re) {
          var de = B(F);
          return j.w(de.date(de.date() + Math.round(re * S)), F);
        };
        if (L === g)
          return this.set(g, this.$M + S);
        if (L === T)
          return this.set(T, this.$y + S);
        if (L === f)
          return K(1);
        if (L === k)
          return K(7);
        var Q = (M = {}, M[u] = e, M[m] = l, M[y] = a, M)[L] || 1, te = this.$d.getTime() + S * Q;
        return j.w(te, this);
      }, h.subtract = function(S, A) {
        return this.add(-1 * S, A);
      }, h.format = function(S) {
        var A = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || x;
        var F = S || "YYYY-MM-DDTHH:mm:ssZ", L = j.z(this), K = this.$H, Q = this.$m, te = this.$M, re = M.weekdays, de = M.months, xe = M.meridiem, ae = function(oe, fe, ge, we) {
          return oe && (oe[fe] || oe(A, F)) || ge[fe].slice(0, we);
        }, be = function(oe) {
          return j.s(K % 12 || 12, oe, "0");
        }, he = xe || function(oe, fe, ge) {
          var we = oe < 12 ? "AM" : "PM";
          return ge ? we.toLowerCase() : we;
        };
        return F.replace(Y, function(oe, fe) {
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
                return String(K);
              case "HH":
                return j.s(K, 2, "0");
              case "h":
                return be(1);
              case "hh":
                return be(2);
              case "a":
                return he(K, Q, !0);
              case "A":
                return he(K, Q, !1);
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
                return L;
            }
            return null;
          }(oe) || L.replace(":", "");
        });
      }, h.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, h.diff = function(S, A, M) {
        var F, L = this, K = j.p(A), Q = B(S), te = (Q.utcOffset() - this.utcOffset()) * e, re = this - Q, de = function() {
          return j.m(L, Q);
        };
        switch (K) {
          case T:
            F = de() / 12;
            break;
          case g:
            F = de();
            break;
          case V:
            F = de() / 3;
            break;
          case k:
            F = (re - te) / 6048e5;
            break;
          case f:
            F = (re - te) / 864e5;
            break;
          case m:
            F = re / l;
            break;
          case u:
            F = re / e;
            break;
          case y:
            F = re / a;
            break;
          default:
            F = re;
        }
        return M ? F : j.a(F);
      }, h.daysInMonth = function() {
        return this.endOf(g).$D;
      }, h.$locale = function() {
        return _[this.$L];
      }, h.locale = function(S, A) {
        if (!S)
          return this.$L;
        var M = this.clone(), F = N(S, A, !0);
        return F && (M.$L = F), M;
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
    }(), G = W.prototype;
    return B.prototype = G, [["$ms", n], ["$s", y], ["$m", u], ["$H", m], ["$W", f], ["$M", g], ["$y", T], ["$D", R]].forEach(function(C) {
      G[C[1]] = function(h) {
        return this.$g(h, C[0], C[1]);
      };
    }), B.extend = function(C, h) {
      return C.$i || (C(h, W, B), C.$i = !0), B;
    }, B.locale = N, B.isDayjs = r, B.unix = function(C) {
      return B(1e3 * C);
    }, B.en = _[O], B.Ls = _, B.p = {}, B;
  });
})(Vt);
var Vr = Vt.exports;
const d = /* @__PURE__ */ Le(Vr);
var Pt = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ee, function() {
    return function(a, e, l) {
      var n = e.prototype, y = function(g) {
        return g && (g.indexOf ? g : g.s);
      }, u = function(g, V, T, R, x) {
        var D = g.name ? g : g.$locale(), Y = y(D[V]), $ = y(D[T]), w = Y || $.map(function(O) {
          return O.slice(0, R);
        });
        if (!x)
          return w;
        var P = D.weekStart;
        return w.map(function(O, _) {
          return w[(_ + (P || 0)) % 7];
        });
      }, m = function() {
        return l.Ls[l.locale()];
      }, f = function(g, V) {
        return g.formats[V] || function(T) {
          return T.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(R, x, D) {
            return x || D.slice(1);
          });
        }(g.formats[V.toUpperCase()]);
      }, k = function() {
        var g = this;
        return { months: function(V) {
          return V ? V.format("MMMM") : u(g, "months");
        }, monthsShort: function(V) {
          return V ? V.format("MMM") : u(g, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return g.$locale().weekStart || 0;
        }, weekdays: function(V) {
          return V ? V.format("dddd") : u(g, "weekdays");
        }, weekdaysMin: function(V) {
          return V ? V.format("dd") : u(g, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(V) {
          return V ? V.format("ddd") : u(g, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(V) {
          return f(g.$locale(), V);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      n.localeData = function() {
        return k.bind(this)();
      }, l.localeData = function() {
        var g = m();
        return { firstDayOfWeek: function() {
          return g.weekStart || 0;
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
        }, longDateFormat: function(V) {
          return f(g, V);
        }, meridiem: g.meridiem, ordinal: g.ordinal };
      }, l.months = function() {
        return u(m(), "months");
      }, l.monthsShort = function() {
        return u(m(), "monthsShort", "months", 3);
      }, l.weekdays = function(g) {
        return u(m(), "weekdays", null, null, g);
      }, l.weekdaysShort = function(g) {
        return u(m(), "weekdaysShort", "weekdays", 3, g);
      }, l.weekdaysMin = function(g) {
        return u(m(), "weekdaysMin", "weekdays", 2, g);
      };
    };
  });
})(Pt);
var Pr = Pt.exports;
const Or = /* @__PURE__ */ Le(Pr);
var Ot = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ee, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(e, l, n) {
      var y = l.prototype, u = y.format;
      n.en.formats = a, y.format = function(m) {
        m === void 0 && (m = "YYYY-MM-DDTHH:mm:ssZ");
        var f = this.$locale().formats, k = function(g, V) {
          return g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(T, R, x) {
            var D = x && x.toUpperCase();
            return R || V[x] || a[x] || V[D].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(Y, $, w) {
              return $ || w.slice(1);
            });
          });
        }(m, f === void 0 ? {} : f);
        return u.call(this, k);
      };
    };
  });
})(Ot);
var Tr = Ot.exports;
const Ar = /* @__PURE__ */ Le(Tr);
var Tt = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ee, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, l = /\d\d/, n = /\d\d?/, y = /\d*[^-_:/,()\s\d]+/, u = {}, m = function(x) {
      return (x = +x) + (x > 68 ? 1900 : 2e3);
    }, f = function(x) {
      return function(D) {
        this[x] = +D;
      };
    }, k = [/[+-]\d\d:?(\d\d)?|Z/, function(x) {
      (this.zone || (this.zone = {})).offset = function(D) {
        if (!D || D === "Z")
          return 0;
        var Y = D.match(/([+-]|\d\d)/g), $ = 60 * Y[1] + (+Y[2] || 0);
        return $ === 0 ? 0 : Y[0] === "+" ? -$ : $;
      }(x);
    }], g = function(x) {
      var D = u[x];
      return D && (D.indexOf ? D : D.s.concat(D.f));
    }, V = function(x, D) {
      var Y, $ = u.meridiem;
      if ($) {
        for (var w = 1; w <= 24; w += 1)
          if (x.indexOf($(w, 0, D)) > -1) {
            Y = w > 12;
            break;
          }
      } else
        Y = x === (D ? "pm" : "PM");
      return Y;
    }, T = { A: [y, function(x) {
      this.afternoon = V(x, !1);
    }], a: [y, function(x) {
      this.afternoon = V(x, !0);
    }], S: [/\d/, function(x) {
      this.milliseconds = 100 * +x;
    }], SS: [l, function(x) {
      this.milliseconds = 10 * +x;
    }], SSS: [/\d{3}/, function(x) {
      this.milliseconds = +x;
    }], s: [n, f("seconds")], ss: [n, f("seconds")], m: [n, f("minutes")], mm: [n, f("minutes")], H: [n, f("hours")], h: [n, f("hours")], HH: [n, f("hours")], hh: [n, f("hours")], D: [n, f("day")], DD: [l, f("day")], Do: [y, function(x) {
      var D = u.ordinal, Y = x.match(/\d+/);
      if (this.day = Y[0], D)
        for (var $ = 1; $ <= 31; $ += 1)
          D($).replace(/\[|\]/g, "") === x && (this.day = $);
    }], M: [n, f("month")], MM: [l, f("month")], MMM: [y, function(x) {
      var D = g("months"), Y = (g("monthsShort") || D.map(function($) {
        return $.slice(0, 3);
      })).indexOf(x) + 1;
      if (Y < 1)
        throw new Error();
      this.month = Y % 12 || Y;
    }], MMMM: [y, function(x) {
      var D = g("months").indexOf(x) + 1;
      if (D < 1)
        throw new Error();
      this.month = D % 12 || D;
    }], Y: [/[+-]?\d+/, f("year")], YY: [l, function(x) {
      this.year = m(x);
    }], YYYY: [/\d{4}/, f("year")], Z: k, ZZ: k };
    function R(x) {
      var D, Y;
      D = x, Y = u && u.formats;
      for (var $ = (x = D.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(N, B, j) {
        var W = j && j.toUpperCase();
        return B || Y[j] || a[j] || Y[W].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(G, C, h) {
          return C || h.slice(1);
        });
      })).match(e), w = $.length, P = 0; P < w; P += 1) {
        var O = $[P], _ = T[O], s = _ && _[0], r = _ && _[1];
        $[P] = r ? { regex: s, parser: r } : O.replace(/^\[|\]$/g, "");
      }
      return function(N) {
        for (var B = {}, j = 0, W = 0; j < w; j += 1) {
          var G = $[j];
          if (typeof G == "string")
            W += G.length;
          else {
            var C = G.regex, h = G.parser, S = N.slice(W), A = C.exec(S)[0];
            h.call(B, A), N = N.replace(A, "");
          }
        }
        return function(M) {
          var F = M.afternoon;
          if (F !== void 0) {
            var L = M.hours;
            F ? L < 12 && (M.hours += 12) : L === 12 && (M.hours = 0), delete M.afternoon;
          }
        }(B), B;
      };
    }
    return function(x, D, Y) {
      Y.p.customParseFormat = !0, x && x.parseTwoDigitYear && (m = x.parseTwoDigitYear);
      var $ = D.prototype, w = $.parse;
      $.parse = function(P) {
        var O = P.date, _ = P.utc, s = P.args;
        this.$u = _;
        var r = s[1];
        if (typeof r == "string") {
          var N = s[2] === !0, B = s[3] === !0, j = N || B, W = s[2];
          B && (W = s[2]), u = this.$locale(), !N && W && (u = Y.Ls[W]), this.$d = function(S, A, M) {
            try {
              if (["x", "X"].indexOf(A) > -1)
                return new Date((A === "X" ? 1e3 : 1) * S);
              var F = R(A)(S), L = F.year, K = F.month, Q = F.day, te = F.hours, re = F.minutes, de = F.seconds, xe = F.milliseconds, ae = F.zone, be = /* @__PURE__ */ new Date(), he = Q || (L || K ? 1 : be.getDate()), oe = L || be.getFullYear(), fe = 0;
              L && !K || (fe = K > 0 ? K - 1 : be.getMonth());
              var ge = te || 0, we = re || 0, Re = de || 0, Ie = xe || 0;
              return ae ? new Date(Date.UTC(oe, fe, he, ge, we, Re, Ie + 60 * ae.offset * 1e3)) : M ? new Date(Date.UTC(oe, fe, he, ge, we, Re, Ie)) : new Date(oe, fe, he, ge, we, Re, Ie);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(O, r, _), this.init(), W && W !== !0 && (this.$L = this.locale(W).$L), j && O != this.format(r) && (this.$d = /* @__PURE__ */ new Date("")), u = {};
        } else if (r instanceof Array)
          for (var G = r.length, C = 1; C <= G; C += 1) {
            s[1] = r[C - 1];
            var h = Y.apply(this, s);
            if (h.isValid()) {
              this.$d = h.$d, this.$L = h.$L, this.init();
              break;
            }
            C === G && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          w.call(this, P);
      };
    };
  });
})(Tt);
var Cr = Tt.exports;
const Yr = /* @__PURE__ */ Le(Cr);
var At = { exports: {} };
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
})(At);
var Er = At.exports;
const Lr = /* @__PURE__ */ Le(Er);
var Ct = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ee, function() {
    return function(a, e, l) {
      e.prototype.isBetween = function(n, y, u, m) {
        var f = l(n), k = l(y), g = (m = m || "()")[0] === "(", V = m[1] === ")";
        return (g ? this.isAfter(f, u) : !this.isBefore(f, u)) && (V ? this.isBefore(k, u) : !this.isAfter(k, u)) || (g ? this.isBefore(f, u) : !this.isAfter(f, u)) && (V ? this.isAfter(k, u) : !this.isBefore(k, u));
      };
    };
  });
})(Ct);
var Fr = Ct.exports;
const Br = /* @__PURE__ */ Le(Fr);
var Yt = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ee, function() {
    var a, e, l = 1e3, n = 6e4, y = 36e5, u = 864e5, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, f = 31536e6, k = 2628e6, g = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, V = { years: f, months: k, days: u, hours: y, minutes: n, seconds: l, milliseconds: 1, weeks: 6048e5 }, T = function(_) {
      return _ instanceof P;
    }, R = function(_, s, r) {
      return new P(_, r, s.$l);
    }, x = function(_) {
      return e.p(_) + "s";
    }, D = function(_) {
      return _ < 0;
    }, Y = function(_) {
      return D(_) ? Math.ceil(_) : Math.floor(_);
    }, $ = function(_) {
      return Math.abs(_);
    }, w = function(_, s) {
      return _ ? D(_) ? { negative: !0, format: "" + $(_) + s } : { negative: !1, format: "" + _ + s } : { negative: !1, format: "" };
    }, P = function() {
      function _(r, N, B) {
        var j = this;
        if (this.$d = {}, this.$l = B, r === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), N)
          return R(r * V[x(N)], this);
        if (typeof r == "number")
          return this.$ms = r, this.parseFromMilliseconds(), this;
        if (typeof r == "object")
          return Object.keys(r).forEach(function(C) {
            j.$d[x(C)] = r[C];
          }), this.calMilliseconds(), this;
        if (typeof r == "string") {
          var W = r.match(g);
          if (W) {
            var G = W.slice(2).map(function(C) {
              return C != null ? Number(C) : 0;
            });
            return this.$d.years = G[0], this.$d.months = G[1], this.$d.weeks = G[2], this.$d.days = G[3], this.$d.hours = G[4], this.$d.minutes = G[5], this.$d.seconds = G[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var s = _.prototype;
      return s.calMilliseconds = function() {
        var r = this;
        this.$ms = Object.keys(this.$d).reduce(function(N, B) {
          return N + (r.$d[B] || 0) * V[B];
        }, 0);
      }, s.parseFromMilliseconds = function() {
        var r = this.$ms;
        this.$d.years = Y(r / f), r %= f, this.$d.months = Y(r / k), r %= k, this.$d.days = Y(r / u), r %= u, this.$d.hours = Y(r / y), r %= y, this.$d.minutes = Y(r / n), r %= n, this.$d.seconds = Y(r / l), r %= l, this.$d.milliseconds = r;
      }, s.toISOString = function() {
        var r = w(this.$d.years, "Y"), N = w(this.$d.months, "M"), B = +this.$d.days || 0;
        this.$d.weeks && (B += 7 * this.$d.weeks);
        var j = w(B, "D"), W = w(this.$d.hours, "H"), G = w(this.$d.minutes, "M"), C = this.$d.seconds || 0;
        this.$d.milliseconds && (C += this.$d.milliseconds / 1e3, C = Math.round(1e3 * C) / 1e3);
        var h = w(C, "S"), S = r.negative || N.negative || j.negative || W.negative || G.negative || h.negative, A = W.format || G.format || h.format ? "T" : "", M = (S ? "-" : "") + "P" + r.format + N.format + j.format + A + W.format + G.format + h.format;
        return M === "P" || M === "-P" ? "P0D" : M;
      }, s.toJSON = function() {
        return this.toISOString();
      }, s.format = function(r) {
        var N = r || "YYYY-MM-DDTHH:mm:ss", B = { Y: this.$d.years, YY: e.s(this.$d.years, 2, "0"), YYYY: e.s(this.$d.years, 4, "0"), M: this.$d.months, MM: e.s(this.$d.months, 2, "0"), D: this.$d.days, DD: e.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: e.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: e.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: e.s(this.$d.seconds, 2, "0"), SSS: e.s(this.$d.milliseconds, 3, "0") };
        return N.replace(m, function(j, W) {
          return W || String(B[j]);
        });
      }, s.as = function(r) {
        return this.$ms / V[x(r)];
      }, s.get = function(r) {
        var N = this.$ms, B = x(r);
        return B === "milliseconds" ? N %= 1e3 : N = B === "weeks" ? Y(N / V[B]) : this.$d[B], N || 0;
      }, s.add = function(r, N, B) {
        var j;
        return j = N ? r * V[x(N)] : T(r) ? r.$ms : R(r, this).$ms, R(this.$ms + j * (B ? -1 : 1), this);
      }, s.subtract = function(r, N) {
        return this.add(r, N, !0);
      }, s.locale = function(r) {
        var N = this.clone();
        return N.$l = r, N;
      }, s.clone = function() {
        return R(this.$ms, this);
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
      a = r, e = r().$utils(), r.duration = function(j, W) {
        var G = r.locale();
        return R(j, { $l: G }, W);
      }, r.isDuration = T;
      var N = s.prototype.add, B = s.prototype.subtract;
      s.prototype.add = function(j, W) {
        return T(j) ? O(this, j, 1) : N.bind(this)(j, W);
      }, s.prototype.subtract = function(j, W) {
        return T(j) ? O(this, j, -1) : B.bind(this)(j, W);
      };
    };
  });
})(Yt);
var Nr = Yt.exports;
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
    return (o, a) => (z(), Z("div", Ir, [
      E("div", Hr, [
        pe(E("span", Ur, [
          E("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[0] || (a[0] = (e) => o.panel.calendar ? o.calendar.onPrevious() : o.calendar.onPreviousYear())
          }, [
            (z(), Z("svg", zr, [
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
            (z(), Z("svg", eo, [
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
const Et = Symbol("isBetweenRange"), Lt = Symbol(
  "betweenRangeClasses"
), Ft = Symbol("datepickerClasses"), Bt = Symbol("atMouseOver"), Nt = Symbol("setToToday"), Rt = Symbol("setToYesterday"), It = Symbol("setToLastDay"), Ht = Symbol("setToThisMonth"), Ut = Symbol("setToLastMonth"), zt = Symbol("setToCustomShortcut"), ro = {
  key: 0,
  class: "relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/[.1] order-last sm:order-none dark:border-vtd-secondary-700/[1] sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0"
}, oo = {
  key: 0,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, ao = ["onClick", "textContent"], no = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, ft = /* @__PURE__ */ ie({
  __name: "Shortcut",
  props: {
    shortcuts: { type: [Boolean, Function] },
    close: { type: Function },
    asRange: { type: Boolean },
    asSingle: { type: Boolean },
    i18n: {}
  },
  setup(t) {
    const o = t, a = ke(Nt), e = ke(Rt), l = ke(It), n = ke(Ht), y = ke(Ut), u = ke(zt), m = ue(() => typeof o.shortcuts == "function" ? o.shortcuts() : !1);
    return (f, k) => o.asRange && o.asSingle || o.asRange && !o.asSingle ? (z(), Z("div", ro, [
      m.value ? (z(), Z("ol", oo, [
        (z(!0), Z(je, null, Ke(m.value, (g, V) => (z(), Z("li", { key: V }, [
          E("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: Ae((T) => le(u)(g, f.close), ["prevent"]),
            textContent: se(g.label)
          }, null, 8, ao)
        ]))), 128))
      ])) : (z(), Z("ol", no, [
        E("li", null, [
          E("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[0] || (k[0] = Ae((g) => le(a)(f.close), ["prevent"]))
          }, se(o.i18n.today), 1)
        ]),
        E("li", null, [
          E("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[1] || (k[1] = Ae((g) => le(e)(f.close), ["prevent"]))
          }, se(o.i18n.yesterday), 1)
        ]),
        E("li", null, [
          E("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[2] || (k[2] = Ae((g) => le(l)(7, f.close), ["prevent"]))
          }, se(o.i18n.past(7)), 1)
        ]),
        E("li", null, [
          E("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[3] || (k[3] = Ae((g) => le(l)(30, f.close), ["prevent"]))
          }, se(o.i18n.past(30)), 1)
        ]),
        E("li", null, [
          E("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[4] || (k[4] = Ae((g) => le(n)(f.close), ["prevent"]))
          }, se(o.i18n.currentMonth), 1)
        ]),
        E("li", null, [
          E("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[5] || (k[5] = Ae((g) => le(y)(f.close), ["prevent"]))
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
    const a = ke(Et), e = ke(Lt), l = ke(Ft), n = ke(Bt);
    return (y, u) => (z(), Z("div", so, [
      ee(qt, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: Fe(() => [
          (z(!0), Z(je, null, Ke(y.calendar.date(), (m, f) => (z(), Z("div", {
            key: f,
            class: Oe(["relative", { "vtd-tooltip": y.asRange && m.duration() }]),
            "data-tooltip": `${m.duration()}`
          }, [
            ee(vt, {
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "enter-active-class": "transition-opacity ease-out duration-200",
              "leave-active-class": "transition-opacity ease-in duration-150",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: Fe(() => [
                le(a)(m) || m.hovered() ? (z(), Z("span", {
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
              onClick: (k) => o("updateDate", m),
              onMouseenter: (k) => le(n)(m),
              onFocusin: (k) => le(n)(m),
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
    return (a, e) => (z(), Z("div", io, [
      (z(!0), Z(je, null, Ke(a.years, (l, n) => (z(), Z("div", {
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
    return (o, a) => (z(), Z("div", po, [
      (z(!0), Z(je, null, Ke(o.weeks, (e, l) => (z(), Z("div", {
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
    return (a, e) => (z(), Z("div", mo, [
      (z(!0), Z(je, null, Ke(a.months, (l, n) => (z(), Z("div", {
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
    const m = [], f = u.localeData().firstDayOfWeek();
    for (let k = 0; k <= u.date(0 - f).day(); k++)
      m.push(u.date(0).subtract(k, "day"));
    return m.sort((k, g) => k.date() - g.date());
  };
  return {
    usePreviousDate: t,
    useCurrentDate: (u) => Array.from(
      {
        length: u.daysInMonth()
      },
      (m, f) => u.date(f + 1)
    ),
    useNextDate: (u) => {
      const m = [];
      for (let f = 1; f <= 42 - (t(u).length + u.daysInMonth()); f++)
        m.push(u.date(f).month(u.month()).add(1, "month"));
      return m;
    },
    useDisableDate: (u, { disableDate: m }) => typeof m == "function" ? m(u.toDate()) : !1,
    useBetweenRange: (u, { previous: m, next: f }) => {
      const k = m.isAfter(f, "date") ? "(]" : "[)";
      return !!(u.isBetween(m, f, "date", k) && !u.off);
    },
    useToValueFromString: (u, { formatter: m }) => u.format(m.date),
    useToValueFromArray: ({ previous: u, next: m }, {
      formatter: f,
      separator: k
    }) => `${u.format(f.date)}${k}${m.format(
      f.date
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
}, Vo = /* @__PURE__ */ E("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), Po = [
  Vo
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
      useToValueFromArray: f,
      useToValueFromString: k
    } = bo(), { useVisibleViewport: g } = go(), V = Object.fromEntries(
      Object.entries(/* @__PURE__ */ Object.assign({ "./locale/af.js": () => import("./af-ffc77a85.js"), "./locale/am.js": () => import("./am-9242dcf9.js"), "./locale/ar-dz.js": () => import("./ar-dz-5e93178c.js"), "./locale/ar-iq.js": () => import("./ar-iq-6bc8ce12.js"), "./locale/ar-kw.js": () => import("./ar-kw-34d61c2d.js"), "./locale/ar-ly.js": () => import("./ar-ly-f2a5325e.js"), "./locale/ar-ma.js": () => import("./ar-ma-77b0d500.js"), "./locale/ar-sa.js": () => import("./ar-sa-2f97f1a0.js"), "./locale/ar-tn.js": () => import("./ar-tn-7454cff9.js"), "./locale/ar.js": () => import("./ar-04ee721a.js"), "./locale/az.js": () => import("./az-53837d3e.js"), "./locale/be.js": () => import("./be-2fea7357.js"), "./locale/bg.js": () => import("./bg-a20feaae.js"), "./locale/bi.js": () => import("./bi-f81b6f62.js"), "./locale/bm.js": () => import("./bm-6fcf4ce0.js"), "./locale/bn-bd.js": () => import("./bn-bd-11a13e2a.js"), "./locale/bn.js": () => import("./bn-ad1cb473.js"), "./locale/bo.js": () => import("./bo-76d9ca68.js"), "./locale/br.js": () => import("./br-38a44655.js"), "./locale/bs.js": () => import("./bs-7953b0df.js"), "./locale/ca.js": () => import("./ca-a42f815a.js"), "./locale/cs.js": () => import("./cs-1979ab85.js"), "./locale/cv.js": () => import("./cv-b4cca658.js"), "./locale/cy.js": () => import("./cy-8991c8b4.js"), "./locale/da.js": () => import("./da-472014b5.js"), "./locale/de-at.js": () => import("./de-at-b9a20e94.js"), "./locale/de-ch.js": () => import("./de-ch-acdbb214.js"), "./locale/de.js": () => import("./de-de4e0a84.js"), "./locale/dv.js": () => import("./dv-c17760d3.js"), "./locale/el.js": () => import("./el-babb7b80.js"), "./locale/en-au.js": () => import("./en-au-06ef4ab2.js"), "./locale/en-ca.js": () => import("./en-ca-db2af308.js"), "./locale/en-gb.js": () => import("./en-gb-8c116451.js"), "./locale/en-ie.js": () => import("./en-ie-d10cd4a9.js"), "./locale/en-il.js": () => import("./en-il-2c35ecd3.js"), "./locale/en-in.js": () => import("./en-in-677f41b2.js"), "./locale/en-nz.js": () => import("./en-nz-d8eb696d.js"), "./locale/en-sg.js": () => import("./en-sg-2e9321dd.js"), "./locale/en-tt.js": () => import("./en-tt-66cee840.js"), "./locale/en.js": () => import("./en-4402d6fc.js"), "./locale/eo.js": () => import("./eo-86f3655c.js"), "./locale/es-do.js": () => import("./es-do-7a990e24.js"), "./locale/es-mx.js": () => import("./es-mx-08d7a576.js"), "./locale/es-pr.js": () => import("./es-pr-dfa25d12.js"), "./locale/es-us.js": () => import("./es-us-15eeb0ab.js"), "./locale/es.js": () => import("./es-c66336a5.js"), "./locale/et.js": () => import("./et-479498c0.js"), "./locale/eu.js": () => import("./eu-e1547c53.js"), "./locale/fa.js": () => import("./fa-92bd46d4.js"), "./locale/fi.js": () => import("./fi-66e3e07d.js"), "./locale/fo.js": () => import("./fo-7ed92499.js"), "./locale/fr-ca.js": () => import("./fr-ca-efab5905.js"), "./locale/fr-ch.js": () => import("./fr-ch-f6d695d2.js"), "./locale/fr.js": () => import("./fr-f8000b18.js"), "./locale/fy.js": () => import("./fy-66be9a30.js"), "./locale/ga.js": () => import("./ga-5f01ab17.js"), "./locale/gd.js": () => import("./gd-fff2580d.js"), "./locale/gl.js": () => import("./gl-00724411.js"), "./locale/gom-latn.js": () => import("./gom-latn-66d04bb9.js"), "./locale/gu.js": () => import("./gu-efd97af3.js"), "./locale/he.js": () => import("./he-0365805d.js"), "./locale/hi.js": () => import("./hi-de1e3ae7.js"), "./locale/hr.js": () => import("./hr-0be1871a.js"), "./locale/ht.js": () => import("./ht-85050c7b.js"), "./locale/hu.js": () => import("./hu-f7515337.js"), "./locale/hy-am.js": () => import("./hy-am-d976aa54.js"), "./locale/id.js": () => import("./id-b15b4ef3.js"), "./locale/is.js": () => import("./is-3ae6145e.js"), "./locale/it-ch.js": () => import("./it-ch-69a36b1f.js"), "./locale/it.js": () => import("./it-021bbc1b.js"), "./locale/ja.js": () => import("./ja-78aa6ac4.js"), "./locale/jv.js": () => import("./jv-5cd9c86c.js"), "./locale/ka.js": () => import("./ka-2d0798a5.js"), "./locale/kk.js": () => import("./kk-177cc792.js"), "./locale/km.js": () => import("./km-190d8396.js"), "./locale/kn.js": () => import("./kn-fe4c1c03.js"), "./locale/ko.js": () => import("./ko-87f8d076.js"), "./locale/ku.js": () => import("./ku-6cb15a9f.js"), "./locale/ky.js": () => import("./ky-180a5941.js"), "./locale/lb.js": () => import("./lb-c4bb5f4f.js"), "./locale/lo.js": () => import("./lo-41ddbda8.js"), "./locale/lt.js": () => import("./lt-9c17a313.js"), "./locale/lv.js": () => import("./lv-5d198e92.js"), "./locale/me.js": () => import("./me-a14ae773.js"), "./locale/mi.js": () => import("./mi-415bfc52.js"), "./locale/mk.js": () => import("./mk-b120861b.js"), "./locale/ml.js": () => import("./ml-6673e8d2.js"), "./locale/mn.js": () => import("./mn-303d188f.js"), "./locale/mr.js": () => import("./mr-88549498.js"), "./locale/ms-my.js": () => import("./ms-my-6a53ce03.js"), "./locale/ms.js": () => import("./ms-a3d41819.js"), "./locale/mt.js": () => import("./mt-90cd47ff.js"), "./locale/my.js": () => import("./my-05b31de7.js"), "./locale/nb.js": () => import("./nb-1ead187f.js"), "./locale/ne.js": () => import("./ne-cb6233fd.js"), "./locale/nl-be.js": () => import("./nl-be-7ee4fd03.js"), "./locale/nl.js": () => import("./nl-be6141e9.js"), "./locale/nn.js": () => import("./nn-abe4edb0.js"), "./locale/oc-lnc.js": () => import("./oc-lnc-6bedfd4b.js"), "./locale/pa-in.js": () => import("./pa-in-7f6492c0.js"), "./locale/pl.js": () => import("./pl-35079a2a.js"), "./locale/pt-br.js": () => import("./pt-br-2f4d0e92.js"), "./locale/pt.js": () => import("./pt-effde1a6.js"), "./locale/rn.js": () => import("./rn-fb8fc1fe.js"), "./locale/ro.js": () => import("./ro-5898c47b.js"), "./locale/ru.js": () => import("./ru-6aff6d57.js"), "./locale/rw.js": () => import("./rw-efd26143.js"), "./locale/sd.js": () => import("./sd-b4090fc3.js"), "./locale/se.js": () => import("./se-ad08b04e.js"), "./locale/si.js": () => import("./si-a1960d16.js"), "./locale/sk.js": () => import("./sk-3b0a877a.js"), "./locale/sl.js": () => import("./sl-9d4f6f79.js"), "./locale/sq.js": () => import("./sq-83f1aafb.js"), "./locale/sr-cyrl.js": () => import("./sr-cyrl-1c075a85.js"), "./locale/sr.js": () => import("./sr-e2eb8ba3.js"), "./locale/ss.js": () => import("./ss-69e78e01.js"), "./locale/sv-fi.js": () => import("./sv-fi-f58e3744.js"), "./locale/sv.js": () => import("./sv-09dac45e.js"), "./locale/sw.js": () => import("./sw-7598a553.js"), "./locale/ta.js": () => import("./ta-6e657db0.js"), "./locale/te.js": () => import("./te-91ee7c00.js"), "./locale/tet.js": () => import("./tet-1228ddc2.js"), "./locale/tg.js": () => import("./tg-2d625f8e.js"), "./locale/th.js": () => import("./th-bc6884c8.js"), "./locale/tk.js": () => import("./tk-a9757d28.js"), "./locale/tl-ph.js": () => import("./tl-ph-7b3f1f44.js"), "./locale/tlh.js": () => import("./tlh-be04b559.js"), "./locale/tr.js": () => import("./tr-aea10940.js"), "./locale/tzl.js": () => import("./tzl-892cc712.js"), "./locale/tzm-latn.js": () => import("./tzm-latn-f618c9c1.js"), "./locale/tzm.js": () => import("./tzm-8ffeaa77.js"), "./locale/ug-cn.js": () => import("./ug-cn-2c8dd50b.js"), "./locale/uk.js": () => import("./uk-b4bdc650.js"), "./locale/ur.js": () => import("./ur-ad7dc57d.js"), "./locale/uz-latn.js": () => import("./uz-latn-cf01fda1.js"), "./locale/uz.js": () => import("./uz-cdf2a846.js"), "./locale/vi.js": () => import("./vi-efb435b9.js"), "./locale/x-pseudo.js": () => import("./x-pseudo-2def3026.js"), "./locale/yo.js": () => import("./yo-eaae9a8f.js"), "./locale/zh-cn.js": () => import("./zh-cn-b716ebdd.js"), "./locale/zh-hk.js": () => import("./zh-hk-81ffc3b0.js"), "./locale/zh-tw.js": () => import("./zh-tw-e2a24afb.js"), "./locale/zh.js": () => import("./zh-f02cae0b.js") })).map(
        ([p, i]) => {
          var v;
          return [(v = p.match(/([\w-]*)\.js$/)) == null ? void 0 : v[1], i];
        }
      )
    );
    d.extend(Or), d.extend(Ar), d.extend(Yr), d.extend(Lr), d.extend(Br), d.extend(Rr);
    const T = J(null), R = J(null), x = J(null), D = J(""), Y = J(null), $ = J(""), w = J([]), P = J([]), O = J(null), _ = J(null), s = pt({
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
    }), N = ue(() => r.value.weeks), B = ue(() => r.value.months), j = ue(() => {
      const { previous: p, next: i, year: v } = le(r);
      return {
        previous: {
          date: () => m(p).concat(l(p)).concat(u(p)).map((c) => (Object.assign(c, {
            today: c.isToday(),
            active: p.month() === c.month(),
            off: p.month() !== c.month(),
            sunday: c.day() === 0,
            disabled: n(c, e) && !S(c),
            inRange: () => {
              if (e.asSingle && !e.useRange)
                return p.month() !== c.month();
            },
            hovered: () => h() && w.value.length > 1 ? (c.isBetween(
              w.value[0],
              w.value[1],
              "date",
              "()"
            ) || c.isBetween(
              w.value[1],
              w.value[0],
              "date",
              "(]"
            )) && p.month() === c.month() : !1,
            duration: () => !1
          }), c)),
          month: p && p.format(e.formatter.month),
          year: p && p.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (c, b) => v.previous + b
          ),
          onPrevious: () => {
            r.value.previous = p.subtract(1, "month"), a("clickPrev", r.value.previous);
          },
          onNext: () => {
            r.value.previous = p.add(1, "month"), p.diff(i, "month") === -1 && (r.value.next = i.add(1, "month")), a("clickNext", r.value.previous);
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
          setMonth: (c) => {
            r.value.previous = p.month(c), s.previous.month = !s.previous.month, s.previous.year = !1, s.previous.calendar = !s.previous.month, a("selectMonth", r.value.previous), He(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.next = r.value.next.year();
            });
          },
          openYear: () => {
            s.previous.year = !s.previous.year, s.previous.month = !1, s.previous.calendar = !s.previous.year;
          },
          setYear: (c) => {
            r.value.previous = p.year(c), s.previous.year = !s.previous.year, s.previous.calendar = !s.previous.year, a("selectYear", r.value.previous), He(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            });
          }
        },
        next: {
          date: () => m(i).concat(l(i)).concat(u(i)).map((c) => (Object.assign(c, {
            today: c.isToday(),
            active: i.month() === c.month(),
            off: i.month() !== c.month(),
            sunday: c.day() === 0,
            disabled: n(c, e) && !S(c),
            inRange: () => {
              if (e.asSingle && !e.useRange)
                return i.month() !== c.month();
            },
            hovered: () => w.value.length > 1 ? (c.isBetween(
              w.value[0],
              w.value[1],
              "date",
              "()"
            ) || c.isBetween(
              w.value[1],
              w.value[0],
              "date",
              "(]"
            )) && i.month() === c.month() : !1,
            duration: () => !1
          }), c)),
          month: i && i.format(e.formatter.month),
          year: i && i.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (c, b) => v.next + b
          ),
          onPrevious: () => {
            r.value.next = i.subtract(1, "month"), i.diff(p, "month") === 1 && (r.value.previous = p.subtract(1, "month")), a("clickRightPrev", r.value.next);
          },
          onNext: () => {
            r.value.next = i.add(1, "month"), a("clickRightNext", r.value.next);
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
          setMonth: (c) => {
            r.value.next = i.month(c), s.next.month = !s.next.month, s.next.year = !1, s.next.calendar = !s.next.month, a("selectRightMonth", r.value.next), He(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(
                1,
                "month"
              )), r.value.year.previous = r.value.previous.year();
            });
          },
          openYear: () => {
            s.next.year = !s.next.year, s.next.month = !1, s.next.calendar = !s.next.year;
          },
          setYear: (c) => {
            r.value.next = i.year(c), s.next.year = !s.next.year, s.next.month = !1, s.next.calendar = !s.next.year, a("selectRightYear", r.value.next), He(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(
                1,
                "month"
              )), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            });
          }
        }
      };
    }), W = J(!1);
    setTimeout(() => {
      W.value = !0;
    }, 250);
    function G() {
      return d().localeData().firstDayOfWeek();
    }
    function C(p) {
      const i = [...p], v = i.shift();
      return [...i, v];
    }
    function h() {
      return !e.useRange && !e.asSingle ? !0 : !e.useRange && e.asSingle ? !1 : e.useRange && !e.asSingle ? !0 : !!(e.useRange && e.asSingle);
    }
    function S(p) {
      if (e.disableInRange || $.value === "")
        return !1;
      let i, v;
      if (Array.isArray(e.modelValue)) {
        const [c, b] = e.modelValue;
        i = c, v = b;
      } else if (typeof e.modelValue == "object") {
        if (e.modelValue) {
          const [c, b] = Object.values(e.modelValue);
          i = c, v = b;
        }
      } else {
        const [c, b] = e.modelValue.split(e.separator);
        i = c, v = b;
      }
      return p.isBetween(
        d(i, e.formatter.date, !0),
        d(v, e.formatter.date, !0),
        "date",
        "[]"
      );
    }
    function A() {
      O.value = null, _.value = null, w.value = [], Y.value = null;
    }
    function M() {
      if ($.value = "", Array.isArray(e.modelValue))
        a("update:modelValue", []);
      else if (typeof e.modelValue == "object") {
        const p = {}, [i, v] = Object.keys(e.modelValue);
        p[i] = "", p[v] = "", a("update:modelValue", p);
      } else
        a("update:modelValue", "");
      P.value = [], R.value && R.value.focus();
    }
    o({ clearPicker: M });
    function F() {
      if (h()) {
        const [p, i] = $.value.split(e.separator), [v, c] = [
          d(p, e.formatter.date, !0),
          d(i, e.formatter.date, !0)
        ];
        if (v.isValid() && c.isValid())
          if (L(v), L(c), Array.isArray(e.modelValue))
            a("update:modelValue", [p, i]);
          else if (typeof e.modelValue == "object") {
            const b = {}, [I, q] = Object.keys(e.modelValue);
            b[I] = p, b[q] = i, a("update:modelValue", b);
          } else
            a(
              "update:modelValue",
              f(
                {
                  previous: v,
                  next: c
                },
                e
              )
            );
      } else {
        const p = d($.value, e.formatter.date, !0);
        if (p.isValid())
          if (L(p), Array.isArray(e.modelValue))
            a("update:modelValue", [$.value]);
          else if (typeof e.modelValue == "object") {
            const i = {}, [v] = Object.keys(e.modelValue);
            i[v] = $.value, a("update:modelValue", i);
          } else
            a("update:modelValue", $.value);
      }
    }
    function L(p, i) {
      if (h())
        if (O.value)
          if (_.value = p, e.autoApply) {
            p.isBefore(O.value) ? $.value = f(
              {
                previous: p,
                next: O.value
              },
              e
            ) : $.value = f(
              {
                previous: O.value,
                next: p
              },
              e
            );
            const [v, c] = $.value.split(e.separator);
            if (Array.isArray(e.modelValue))
              a("update:modelValue", [
                d(v, e.formatter.date, !0).format(e.formatter.date),
                d(c, e.formatter.date, !0).format(e.formatter.date)
              ]);
            else if (typeof e.modelValue == "object") {
              const b = {}, [I, q] = Object.keys(e.modelValue);
              b[I] = v, b[q] = c, a("update:modelValue", b);
            } else
              a(
                "update:modelValue",
                f(
                  {
                    previous: d(v, e.formatter.date, !0),
                    next: d(c, e.formatter.date, !0)
                  },
                  e
                )
              );
            i && i(), P.value = [], d(v, e.formatter.date, !0).isSame(
              d(c, e.formatter.date, !0),
              "month"
            ) || (r.value.previous = d(v, e.formatter.date, !0), r.value.next = d(c, e.formatter.date, !0)), A();
          } else {
            O.value.isAfter(p, "month") ? P.value = [p, O.value] : P.value = [O.value, p];
            const [v, c] = P.value;
            v.isSame(c, "month") || (r.value.previous = v, r.value.next = c), A();
          }
        else
          P.value = [], O.value = p, Y.value = p, w.value.push(p), P.value.push(p), r.value.previous = p, r.value.next.isSame(p, "month") && (r.value.previous = r.value.next, r.value.next = p.add(1, "month"));
      else if (e.autoApply) {
        if ($.value = k(p, e), Array.isArray(e.modelValue))
          a("update:modelValue", [$.value]);
        else if (typeof e.modelValue == "object") {
          const v = {}, [c] = Object.keys(e.modelValue);
          v[c] = $.value, a("update:modelValue", v);
        } else
          a("update:modelValue", $.value);
        i && i(), P.value = [], A();
      } else
        P.value = [p], A();
    }
    function K(p) {
      if (P.value.length < 1)
        return !1;
      let i;
      if (h()) {
        const [v, c] = P.value;
        c.isBefore(v) ? i = f(
          {
            previous: c,
            next: v
          },
          e
        ) : i = f(
          {
            previous: v,
            next: c
          },
          e
        );
      } else {
        const [v] = P.value;
        i = v;
      }
      if (h()) {
        const [v, c] = i.split(e.separator);
        if (Array.isArray(e.modelValue))
          a("update:modelValue", [
            d(v, e.formatter.date, !0).format(e.formatter.date),
            d(c, e.formatter.date, !0).format(e.formatter.date)
          ]);
        else if (typeof e.modelValue == "object") {
          const b = {}, [I, q] = Object.keys(e.modelValue);
          b[I] = v, b[q] = c, a("update:modelValue", b);
        } else
          a(
            "update:modelValue",
            f(
              {
                previous: d(v, e.formatter.date, !0),
                next: d(c, e.formatter.date, !0)
              },
              e
            )
          );
        $.value = i;
      } else if ($.value = i.format(e.formatter.date), Array.isArray(e.modelValue))
        a("update:modelValue", [$.value]);
      else if (typeof e.modelValue == "object") {
        const v = {}, [c] = Object.keys(e.modelValue);
        v[c] = $.value, a("update:modelValue", v);
      } else
        a("update:modelValue", $.value);
      p && p();
    }
    function Q(p) {
      if (!h())
        return !1;
      if (O.value)
        w.value = [O.value, p];
      else
        return w.value = [], !1;
    }
    function te(p) {
      if (O.value && e.autoApply)
        return !1;
      let i, v;
      if (w.value.length > 1) {
        const [c, b] = w.value;
        i = d(c, e.formatter.date, !0), v = d(b, e.formatter.date, !0);
      } else if (Array.isArray(e.modelValue))
        if (e.autoApply) {
          const [c, b] = e.modelValue;
          i = c && d(c, e.formatter.date, !0), v = b && d(b, e.formatter.date, !0);
        } else {
          const [c, b] = P.value;
          i = d(c, e.formatter.date, !0), v = d(b, e.formatter.date, !0);
        }
      else if (typeof e.modelValue == "object")
        if (e.autoApply) {
          if (e.modelValue) {
            const [c, b] = Object.values(e.modelValue);
            i = c && d(c, e.formatter.date, !0), v = b && d(b, e.formatter.date, !0);
          }
        } else {
          const [c, b] = P.value;
          i = d(c, e.formatter.date, !0), v = d(b, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        const [c, b] = e.modelValue ? e.modelValue.split(e.separator) : [null, null];
        i = c && d(c, e.formatter.date, !0), v = b && d(b, e.formatter.date, !0);
      } else {
        const [c, b] = P.value;
        i = d(c, e.formatter.date, !0), v = d(b, e.formatter.date, !0);
      }
      return i && v ? y(p, {
        previous: i,
        next: v
      }) : !1;
    }
    function re(p) {
      const { today: i, active: v, off: c, disabled: b } = p;
      let I, q, ce;
      if (h())
        if (Array.isArray(e.modelValue))
          if (Y.value) {
            const [U, X] = w.value;
            q = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [U, X] = e.modelValue;
            q = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
          } else {
            const [U, X] = P.value;
            q = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
          }
        else if (typeof e.modelValue == "object")
          if (Y.value) {
            const [U, X] = w.value;
            q = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [U, X] = e.modelValue ? Object.values(e.modelValue) : [null, null];
            q = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
          } else {
            const [U, X] = P.value;
            q = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
          }
        else if (Y.value) {
          const [U, X] = w.value;
          q = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [U, X] = e.modelValue ? e.modelValue.split(e.separator) : [null, null];
          q = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
        } else {
          const [U, X] = P.value;
          q = U && d(U, e.formatter.date, !0), ce = X && d(X, e.formatter.date, !0);
        }
      else if (Array.isArray(e.modelValue))
        if (e.autoApply) {
          if (e.modelValue.length > 0) {
            const [U] = e.modelValue;
            q = d(U, e.formatter.date, !0);
          }
        } else {
          const [U] = P.value;
          q = U && d(U, e.formatter.date, !0);
        }
      else if (typeof e.modelValue == "object")
        if (e.autoApply) {
          if (e.modelValue) {
            const [U] = Object.values(e.modelValue);
            q = d(U, e.formatter.date, !0);
          }
        } else {
          const [U] = P.value;
          q = U && d(U, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        if (e.modelValue) {
          const [U] = e.modelValue.split(e.separator);
          q = d(U, e.formatter.date, !0);
        }
      } else {
        const [U] = P.value;
        q = U && d(U, e.formatter.date, !0);
      }
      return v && (I = i ? "text-vtd-primary-500 font-semibold dark:text-vtd-primary-400 rounded-full focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50" : b ? "text-vtd-secondary-600 font-normal disabled:text-vtd-secondary-500 disabled:cursor-not-allowed rounded-full" : p.isBetween(q, ce, "date", "()") ? "text-vtd-secondary-700 font-medium dark:text-vtd-secondary-100 rounded-full" : "text-vtd-secondary-600 font-medium dark:text-vtd-secondary-200 rounded-full"), c && (I = "text-vtd-secondary-400 font-light disabled:cursor-not-allowed"), q && ce && !c ? (p.isSame(q, "date") && (I = ce.isAfter(q, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed", q.isSame(ce, "date") && (I = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed")), p.isSame(ce, "date") && (I = ce.isAfter(q, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed", q.isSame(ce, "date") && (I = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"))) : q && p.isSame(q, "date") && !c && (I = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"), I;
    }
    function de(p) {
      let i, v, c;
      if (i = "", !h())
        return i;
      if (Array.isArray(e.modelValue))
        if (w.value.length > 1) {
          const [b, I] = w.value;
          v = b && d(b, e.formatter.date, !0), c = I && d(I, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [b, I] = e.modelValue;
          v = b && d(b, e.formatter.date, !0), c = I && d(I, e.formatter.date, !0);
        } else {
          const [b, I] = P.value;
          v = b && d(b, e.formatter.date, !0), c = I && d(I, e.formatter.date, !0);
        }
      else if (typeof e.modelValue == "object")
        if (w.value.length > 1) {
          const [b, I] = w.value;
          v = b && d(b, e.formatter.date, !0), c = I && d(I, e.formatter.date, !0);
        } else if (e.autoApply) {
          if (e.modelValue) {
            const [b, I] = Object.values(e.modelValue);
            v = b && d(b, e.formatter.date, !0), c = I && d(I, e.formatter.date, !0);
          }
        } else {
          const [b, I] = P.value;
          v = b && d(b, e.formatter.date, !0), c = I && d(I, e.formatter.date, !0);
        }
      else if (w.value.length > 1) {
        const [b, I] = w.value;
        v = b && d(b, e.formatter.date, !0), c = I && d(I, e.formatter.date, !0);
      } else if (e.autoApply) {
        const [b, I] = e.modelValue ? e.modelValue.split(e.separator) : [null, null];
        v = b && d(b, e.formatter.date, !0), c = I && d(I, e.formatter.date, !0);
      } else {
        const [b, I] = P.value;
        v = b && d(b, e.formatter.date, !0), c = I && d(I, e.formatter.date, !0);
      }
      return v && c && (p.isSame(v, "date") ? (c.isBefore(v) && (i += " rounded-r-full inset-0"), v.isBefore(c) && (i += " rounded-l-full inset-0")) : p.isSame(c, "date") ? (c.isBefore(v) && (i += " rounded-l-full inset-0"), v.isBefore(c) && (i += " rounded-r-full inset-0")) : i += " inset-0"), i;
    }
    function xe(p, i) {
      r.value.previous = d(p, e.formatter.date, !0), r.value.next = d(i, e.formatter.date, !0), (d.duration(r.value.next.diff(r.value.previous)).get("months") === 2 || d.duration(r.value.next.diff(r.value.previous)).get("months") === 1 && d.duration(r.value.next.diff(r.value.previous)).get("days") === 7) && (r.value.next = r.value.next.subtract(1, "month")), (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month"));
    }
    function ae(p, i) {
      if (h())
        if (e.autoApply) {
          if (Array.isArray(e.modelValue))
            a("update:modelValue", [p, i]);
          else if (typeof e.modelValue == "object") {
            const v = {}, [c, b] = Object.keys(e.modelValue);
            v[c] = p, v[b] = i, a("update:modelValue", v);
          } else
            a(
              "update:modelValue",
              f(
                {
                  previous: d(p, e.formatter.date, !0),
                  next: d(i, e.formatter.date, !0)
                },
                e
              )
            );
          $.value = `${p}${e.separator}${i}`;
        } else
          P.value = [
            d(p, e.formatter.date, !0),
            d(i, e.formatter.date, !0)
          ];
      else if (e.autoApply) {
        if (Array.isArray(e.modelValue))
          a("update:modelValue", [p]);
        else if (typeof e.modelValue == "object") {
          const v = {}, [c] = Object.keys(e.modelValue);
          v[c] = p, a("update:modelValue", v);
        } else
          a("update:modelValue", p);
        $.value = p;
      } else
        P.value = [
          d(p, e.formatter.date, !0),
          d(i, e.formatter.date, !0)
        ];
      xe(p, i);
    }
    function be(p) {
      const i = d().format(e.formatter.date), v = d().format(e.formatter.date);
      ae(i, v), p && p();
    }
    function he(p) {
      const i = d().subtract(1, "day").format(e.formatter.date), v = d().subtract(1, "day").format(e.formatter.date);
      ae(i, v), p && p();
    }
    function oe(p, i) {
      const v = d().subtract(p - 1, "day").format(e.formatter.date), c = d().format(e.formatter.date);
      ae(v, c), i && i();
    }
    function fe(p) {
      const i = d().date(1).format(e.formatter.date), v = d().date(d().daysInMonth()).format(e.formatter.date);
      ae(i, v), p && p();
    }
    function ge(p) {
      const i = d().date(1).subtract(1, "month").format(e.formatter.date), v = d().date(0).format(e.formatter.date);
      ae(i, v), p && p();
    }
    function we(p, i) {
      const [v, c] = p.atClick(), b = d(v).format(e.formatter.date), I = d(c).format(e.formatter.date);
      ae(b, I), i && i();
    }
    Jt(
      () => P.value,
      (p) => {
        p.length > 0 && (s.previous.calendar = !0, s.previous.month = !1, s.previous.year = !1, s.next.calendar = !0, s.next.month = !1, s.next.year = !1);
      }
    ), $e(() => {
      e.placeholder ? D.value = e.placeholder : h() ? D.value = `${e.formatter.date}${e.separator}${e.formatter.date}` : D.value = e.formatter.date;
    }), $e(() => {
      const p = e.i18n;
      He(async () => {
        if (p in V) {
          await V[p](), d.locale(p);
          let i, v;
          if (h()) {
            if (Array.isArray(e.modelValue)) {
              if (e.modelValue.length > 0) {
                const [b, I] = e.modelValue;
                i = d(b, e.formatter.date, !0), v = d(I, e.formatter.date, !0);
              }
            } else if (typeof e.modelValue == "object") {
              if (!Xt(e.modelValue))
                try {
                  Object.keys(e.modelValue);
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
              if (e.modelValue) {
                const [b, I] = Object.values(e.modelValue);
                i = b && d(b, e.formatter.date, !0), v = I && d(I, e.formatter.date, !0);
              }
            } else if (e.modelValue) {
              const [b, I] = e.modelValue.split(e.separator);
              i = d(b, e.formatter.date, !0), v = d(I, e.formatter.date, !0);
            }
            i && v ? ($.value = f(
              {
                previous: i,
                next: v
              },
              e
            ), v.isBefore(i, "month") ? (r.value.previous = v, r.value.next = i, r.value.year.previous = v.year(), r.value.year.next = i.year()) : v.isSame(i, "month") ? (r.value.previous = i, r.value.next = v.add(1, "month"), r.value.year.previous = i.year(), r.value.year.next = i.add(1, "year").year()) : (r.value.previous = i, r.value.next = v, r.value.year.previous = i.year(), r.value.year.next = v.year()), e.autoApply || (P.value = [i, v])) : (r.value.previous = d(e.startFrom), r.value.next = d(e.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
          } else {
            if (Array.isArray(e.modelValue)) {
              if (e.modelValue.length > 0) {
                const [b] = e.modelValue;
                i = d(b, e.formatter.date, !0);
              }
            } else if (typeof e.modelValue == "object") {
              if (e.modelValue) {
                const [b] = Object.values(e.modelValue);
                i = d(b, e.formatter.date, !0);
              }
            } else if (e.modelValue.length) {
              const [b] = e.modelValue.split(e.separator);
              i = d(b, e.formatter.date, !0);
            }
            i && i.isValid() ? ($.value = k(i, e), r.value.previous = i, r.value.next = i.add(1, "month"), r.value.year.previous = i.year(), r.value.year.next = i.add(1, "year").year(), e.autoApply || (P.value = [i])) : (r.value.previous = d(e.startFrom), r.value.next = d(e.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
          }
          const c = e.weekdaysSize === "min" ? d.weekdaysMin() : d.weekdaysShort();
          r.value.weeks = G() ? C(c) : c, r.value.months = e.formatter.month === "MMM" ? d.monthsShort() : d.months();
        }
      });
    });
    function Re(p) {
      return p && x.value === null && (x.value = g(T.value)), p && x.value ? "place-right" : "place-left";
    }
    function Ie(p) {
      return p && x.value === null && (x.value = g(T.value)), x.value ? "left-auto right-0" : "left-0 right-auto";
    }
    return ne(Et, te), ne(Lt, de), ne(Ft, re), ne(Bt, Q), ne(Nt, be), ne(Rt, he), ne(It, oe), ne(Ht, fe), ne(Ut, ge), ne(zt, we), (p, i) => e.noInput ? W.value ? (z(), Z("div", Ho, [
      E("div", Uo, [
        E("div", zo, [
          e.shortcuts ? (z(), Ue(ft, {
            key: 0,
            shortcuts: e.shortcuts,
            "as-range": h(),
            "as-single": e.asSingle,
            i18n: e.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : ye("", !0),
          E("div", Wo, [
            h() && !e.asSingle ? (z(), Z("div", Ko, Zo)) : ye("", !0),
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
                  months: B.value,
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
                  ee(Xe, { weeks: N.value }, null, 8, ["weeks"]),
                  ee(qe, {
                    calendar: j.value.previous,
                    weeks: N.value,
                    "as-range": h(),
                    onUpdateDate: i[2] || (i[2] = (v) => L(v))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ve, s.previous.calendar]
                ])
              ])
            ], 2),
            h() && !e.asSingle ? (z(), Z("div", Jo, [
              ee(Ze, {
                "as-prev-or-next": "",
                panel: s.next,
                calendar: j.value.next
              }, null, 8, ["panel", "calendar"]),
              E("div", Xo, [
                pe(ee(Qe, {
                  months: B.value,
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
                  ee(Xe, { weeks: N.value }, null, 8, ["weeks"]),
                  ee(qe, {
                    "as-prev-or-next": "",
                    calendar: j.value.next,
                    weeks: N.value,
                    "as-range": h(),
                    onUpdateDate: i[3] || (i[3] = (v) => L(v))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ve, s.next.calendar]
                ])
              ])
            ])) : ye("", !0)
          ])
        ]),
        e.autoApply ? ye("", !0) : (z(), Z("div", Qo, [
          E("div", ea, [
            E("div", ta, [
              E("button", {
                type: "button",
                class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                disabled: e.asSingle ? P.value.length < 1 : P.value.length < 2,
                onClick: i[4] || (i[4] = (v) => K()),
                textContent: se(e.options.footer.apply)
              }, null, 8, ra)
            ])
          ])
        ]))
      ])
    ])) : ye("", !0) : (z(), Ue(le(_t), {
      key: 0,
      id: "vtd",
      as: "div",
      class: "relative w-full"
    }, {
      default: Fe(({ open: v }) => [
        e.overlay && !e.disabled ? (z(), Ue(le(Dr), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : ye("", !0),
        ee(le(Sr), {
          as: "label",
          class: "relative block"
        }, {
          default: Fe(() => [
            Qt(p.$slots, "default", {
              value: $.value,
              placeholder: D.value,
              clear: M
            }, () => [
              pe(E("input", er({
                ref_key: "VtdInputRef",
                ref: R
              }, p.$attrs, {
                "onUpdate:modelValue": i[0] || (i[0] = (c) => $.value = c),
                type: "text",
                class: ["relative block w-full", [
                  e.disabled ? "cursor-default opacity-50" : "opacity-100",
                  p.inputClasses || "pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20"
                ]],
                disabled: e.disabled,
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other",
                placeholder: D.value,
                onKeyup: F
              }), null, 16, xo), [
                [tr, $.value]
              ]),
              E("div", wo, [
                E("button", {
                  type: "button",
                  disabled: e.disabled,
                  class: Oe([
                    e.disabled ? "cursor-default opacity-50" : "opacity-100",
                    "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md"
                  ]),
                  onClick: i[1] || (i[1] = (c) => {
                    var b;
                    return e.disabled ? !1 : $.value ? M() : (b = R.value) == null ? void 0 : b.focus();
                  })
                }, [
                  (z(), Z("svg", $o, [
                    $.value ? (z(), Z("path", jo)) : (z(), Z("path", Mo))
                  ]))
                ], 10, ko)
              ])
            ])
          ]),
          _: 3
        }),
        ee(vt, {
          "enter-from-class": "opacity-0 translate-y-3",
          "enter-to-class": "opacity-100 translate-y-0",
          "enter-active-class": "transform transition ease-out duration-200",
          "leave-active-class": "transform transition ease-in duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 translate-y-3"
        }, {
          default: Fe(() => [
            e.disabled ? ye("", !0) : (z(), Ue(le(_r), {
              key: 0,
              as: "div",
              class: "relative z-50"
            }, {
              default: Fe(({ close: c }) => [
                E("div", {
                  class: Oe(["absolute z-50 top-full sm:mt-2.5", Ie(v)])
                }, [
                  E("div", {
                    ref_key: "VtdRef",
                    ref: T,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm"
                  }, [
                    E("div", {
                      class: Oe(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]", Re(v)])
                    }, [
                      E("div", So, [
                        e.shortcuts ? (z(), Ue(ft, {
                          key: 0,
                          shortcuts: e.shortcuts,
                          "as-range": h(),
                          "as-single": e.asSingle,
                          i18n: e.options.shortcuts,
                          close: c
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : ye("", !0),
                        E("div", Do, [
                          h() && !e.asSingle ? (z(), Z("div", _o, Po)) : ye("", !0),
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
                                months: B.value,
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
                                ee(Xe, { weeks: N.value }, null, 8, ["weeks"]),
                                ee(qe, {
                                  calendar: j.value.previous,
                                  weeks: N.value,
                                  "as-range": h(),
                                  onUpdateDate: (b) => L(b, c)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdateDate"])
                              ], 512), [
                                [ve, s.previous.calendar]
                              ])
                            ])
                          ], 2),
                          h() && !e.asSingle ? (z(), Z("div", To, [
                            ee(Ze, {
                              "as-prev-or-next": "",
                              panel: s.next,
                              calendar: j.value.next
                            }, null, 8, ["panel", "calendar"]),
                            E("div", Ao, [
                              pe(ee(Qe, {
                                months: B.value,
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
                                ee(Xe, { weeks: N.value }, null, 8, ["weeks"]),
                                ee(qe, {
                                  "as-prev-or-next": "",
                                  calendar: j.value.next,
                                  weeks: N.value,
                                  "as-range": h(),
                                  onUpdateDate: (b) => L(b, c)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdateDate"])
                              ], 512), [
                                [ve, s.next.calendar]
                              ])
                            ])
                          ])) : ye("", !0)
                        ])
                      ]),
                      e.autoApply ? (z(), Z("div", Bo, [
                        E("div", No, [
                          E("div", Ro, [
                            E("button", {
                              type: "button",
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              onClick: (b) => c(),
                              textContent: se(e.options.footer.cancel)
                            }, null, 8, Io)
                          ])
                        ])
                      ])) : (z(), Z("div", Co, [
                        E("div", Yo, [
                          E("div", Eo, [
                            E("button", {
                              type: "button",
                              class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                              disabled: e.asSingle ? P.value.length < 1 : P.value.length < 2,
                              onClick: (b) => K(c),
                              textContent: se(e.options.footer.apply)
                            }, null, 8, Lo),
                            E("button", {
                              type: "button",
                              class: "mt-3 away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              onClick: (b) => c(),
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
const Wt = /* @__PURE__ */ (() => {
  const t = oa;
  return t.install = (o) => {
    o.component("VueTailwindDatepicker", t);
  }, t;
})(), aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wt
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(aa).forEach(([t, o]) => {
  t !== "default" && (Wt[t] = o);
});
export {
  Wt as c,
  d
};
