import { cloneVNode as Zt, h as me, Fragment as we, inject as De, provide as ne, ref as J, onMounted as tt, watchEffect as je, computed as le, defineComponent as ue, onUnmounted as Qe, Teleport as qt, reactive as vt, shallowRef as Jt, openBlock as z, createElementBlock as Z, createElementVNode as A, withDirectives as pe, vShow as ve, toDisplayString as ae, renderList as We, withModifiers as Ce, unref as se, createCommentVNode as ye, createVNode as ee, TransitionGroup as Xt, withCtx as Fe, normalizeClass as Ve, Transition as mt, nextTick as Ie, watch as Qt, isProxy as er, createBlock as He, renderSlot as it, mergeProps as tr, vModelText as rr } from "vue";
function _e(t, o, ...a) {
  if (t in o) {
    let s = o[t];
    return typeof s == "function" ? s(...a) : s;
  }
  let e = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(o).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(e, _e), e;
}
var Ue = ((t) => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(Ue || {}), or = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(or || {});
function Oe({ visible: t = !0, features: o = 0, ourProps: a, theirProps: e, ...s }) {
  var n;
  let h = yt(e, a), l = Object.assign(s, { props: h });
  if (t || o & 2 && h.static)
    return nt(l);
  if (o & 1) {
    let m = (n = h.unmount) == null || n ? 0 : 1;
    return _e(m, { 0() {
      return null;
    }, 1() {
      return nt({ ...s, props: { ...h, hidden: !0, style: { display: "none" } } });
    } });
  }
  return nt(l);
}
function nt({ props: t, attrs: o, slots: a, slot: e, name: s }) {
  var n, h;
  let { as: l, ...m } = ar(t, ["unmount", "static"]), p = (n = a.default) == null ? void 0 : n.call(a, e), w = {};
  if (e) {
    let g = !1, O = [];
    for (let [V, B] of Object.entries(e))
      typeof B == "boolean" && (g = !0), B === !0 && O.push(V);
    g && (w["data-headlessui-state"] = O.join(" "));
  }
  if (l === "template") {
    if (p = ht(p ?? []), Object.keys(m).length > 0 || Object.keys(o).length > 0) {
      let [g, ...O] = p ?? [];
      if (!nr(g) || O.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${s} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(m).concat(Object.keys(o)).map((x) => x.trim()).filter((x, P, k) => k.indexOf(x) === P).sort((x, P) => x.localeCompare(P)).map((x) => `  - ${x}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((x) => `  - ${x}`).join(`
`)].join(`
`));
      let V = yt((h = g.props) != null ? h : {}, m), B = Zt(g, V);
      for (let x in V)
        x.startsWith("on") && (B.props || (B.props = {}), B.props[x] = V[x]);
      return B;
    }
    return Array.isArray(p) && p.length === 1 ? p[0] : p;
  }
  return me(l, Object.assign({}, m, w), { default: () => p });
}
function ht(t) {
  return t.flatMap((o) => o.type === we ? ht(o.children) : [o]);
}
function yt(...t) {
  if (t.length === 0)
    return {};
  if (t.length === 1)
    return t[0];
  let o = {}, a = {};
  for (let e of t)
    for (let s in e)
      s.startsWith("on") && typeof e[s] == "function" ? (a[s] != null || (a[s] = []), a[s].push(e[s])) : o[s] = e[s];
  if (o.disabled || o["aria-disabled"])
    return Object.assign(o, Object.fromEntries(Object.keys(a).map((e) => [e, void 0])));
  for (let e in a)
    Object.assign(o, { [e](s, ...n) {
      let h = a[e];
      for (let l of h) {
        if (s instanceof Event && s.defaultPrevented)
          return;
        l(s, ...n);
      }
    } });
  return o;
}
function ar(t, o = []) {
  let a = Object.assign({}, t);
  for (let e of o)
    e in a && delete a[e];
  return a;
}
function nr(t) {
  return t == null ? !1 : typeof t.type == "string" || typeof t.type == "object" || typeof t.type == "function";
}
let sr = 0;
function lr() {
  return ++sr;
}
function Be() {
  return lr();
}
var Pe = ((t) => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(Pe || {});
function H(t) {
  var o;
  return t == null || t.value == null ? null : (o = t.value.$el) != null ? o : t.value;
}
let bt = Symbol("Context");
var Le = ((t) => (t[t.Open = 1] = "Open", t[t.Closed = 2] = "Closed", t[t.Closing = 4] = "Closing", t[t.Opening = 8] = "Opening", t))(Le || {});
function gt() {
  return De(bt, null);
}
function ur(t) {
  ne(bt, t);
}
function dt(t, o) {
  if (t)
    return t;
  let a = o ?? "button";
  if (typeof a == "string" && a.toLowerCase() === "button")
    return "button";
}
function ir(t, o) {
  let a = J(dt(t.value.type, t.value.as));
  return tt(() => {
    a.value = dt(t.value.type, t.value.as);
  }), je(() => {
    var e;
    a.value || H(o) && H(o) instanceof HTMLButtonElement && !((e = H(o)) != null && e.hasAttribute("type")) && (a.value = "button");
  }), a;
}
var dr = Object.defineProperty, cr = (t, o, a) => o in t ? dr(t, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[o] = a, ct = (t, o, a) => (cr(t, typeof o != "symbol" ? o + "" : o, a), a);
class fr {
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
let rt = new fr();
function Te(t) {
  if (rt.isServer)
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
let st = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((t) => `${t}:not([tabindex='-1'])`).join(",");
var Me = ((t) => (t[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t))(Me || {}), et = ((t) => (t[t.Error = 0] = "Error", t[t.Overflow = 1] = "Overflow", t[t.Success = 2] = "Success", t[t.Underflow = 3] = "Underflow", t))(et || {}), pr = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(pr || {});
function ot(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(st)).sort((o, a) => Math.sign((o.tabIndex || Number.MAX_SAFE_INTEGER) - (a.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var ut = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(ut || {});
function xt(t, o = 0) {
  var a;
  return t === ((a = Te(t)) == null ? void 0 : a.body) ? !1 : _e(o, { 0() {
    return t.matches(st);
  }, 1() {
    let e = t;
    for (; e !== null; ) {
      if (e.matches(st))
        return !0;
      e = e.parentElement;
    }
    return !1;
  } });
}
var vr = ((t) => (t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(vr || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (t) => {
  t.metaKey || t.altKey || t.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (t) => {
  t.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : t.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let mr = ["textarea", "input"].join(",");
function hr(t) {
  var o, a;
  return (a = (o = t == null ? void 0 : t.matches) == null ? void 0 : o.call(t, mr)) != null ? a : !1;
}
function yr(t, o = (a) => a) {
  return t.slice().sort((a, e) => {
    let s = o(a), n = o(e);
    if (s === null || n === null)
      return 0;
    let h = s.compareDocumentPosition(n);
    return h & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : h & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ee(t, o, { sorted: a = !0, relativeTo: e = null, skipElements: s = [] } = {}) {
  var n;
  let h = (n = Array.isArray(t) ? t.length > 0 ? t[0].ownerDocument : document : t == null ? void 0 : t.ownerDocument) != null ? n : document, l = Array.isArray(t) ? a ? yr(t) : t : ot(t);
  s.length > 0 && l.length > 1 && (l = l.filter((B) => !s.includes(B))), e = e ?? h.activeElement;
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
      return Math.max(0, l.indexOf(e)) - 1;
    if (o & 4)
      return Math.max(0, l.indexOf(e)) + 1;
    if (o & 8)
      return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), w = o & 32 ? { preventScroll: !0 } : {}, g = 0, O = l.length, V;
  do {
    if (g >= O || g + O <= 0)
      return 0;
    let B = p + g;
    if (o & 16)
      B = (B + O) % O;
    else {
      if (B < 0)
        return 3;
      if (B >= O)
        return 1;
    }
    V = l[B], V == null || V.focus(w), g += m;
  } while (V !== h.activeElement);
  return o & 6 && hr(V) && V.select(), 2;
}
function Ke(t, o, a) {
  rt.isServer || je((e) => {
    document.addEventListener(t, o, a), e(() => document.removeEventListener(t, o, a));
  });
}
function wt(t, o, a) {
  rt.isServer || je((e) => {
    window.addEventListener(t, o, a), e(() => window.removeEventListener(t, o, a));
  });
}
function br(t, o, a = le(() => !0)) {
  function e(n, h) {
    if (!a.value || n.defaultPrevented)
      return;
    let l = h(n);
    if (l === null || !l.getRootNode().contains(l))
      return;
    let m = function p(w) {
      return typeof w == "function" ? p(w()) : Array.isArray(w) || w instanceof Set ? w : [w];
    }(t);
    for (let p of m) {
      if (p === null)
        continue;
      let w = p instanceof HTMLElement ? p : H(p);
      if (w != null && w.contains(l) || n.composed && n.composedPath().includes(w))
        return;
    }
    return !xt(l, ut.Loose) && l.tabIndex !== -1 && n.preventDefault(), o(n, l);
  }
  let s = J(null);
  Ke("pointerdown", (n) => {
    var h, l;
    a.value && (s.value = ((l = (h = n.composedPath) == null ? void 0 : h.call(n)) == null ? void 0 : l[0]) || n.target);
  }, !0), Ke("mousedown", (n) => {
    var h, l;
    a.value && (s.value = ((l = (h = n.composedPath) == null ? void 0 : h.call(n)) == null ? void 0 : l[0]) || n.target);
  }, !0), Ke("click", (n) => {
    s.value && (e(n, () => s.value), s.value = null);
  }, !0), Ke("touchend", (n) => e(n, () => n.target instanceof HTMLElement ? n.target : null), !0), wt("blur", (n) => e(n, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ne = ((t) => (t[t.None = 1] = "None", t[t.Focusable = 2] = "Focusable", t[t.Hidden = 4] = "Hidden", t))(Ne || {});
let ze = ue({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t, { slots: o, attrs: a }) {
  return () => {
    let { features: e, ...s } = t, n = { "aria-hidden": (e & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
    return Oe({ ourProps: n, theirProps: s, slot: {}, attrs: a, slots: o, name: "Hidden" });
  };
} });
var Se = ((t) => (t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(Se || {});
function kt() {
  let t = J(0);
  return wt("keydown", (o) => {
    o.key === "Tab" && (t.value = o.shiftKey ? 1 : 0);
  }), t;
}
function gr(t, o, a, e) {
  rt.isServer || je((s) => {
    t = t ?? window, t.addEventListener(o, a, e), s(() => t.removeEventListener(o, a, e));
  });
}
let $t = Symbol("ForcePortalRootContext");
function xr() {
  return De($t, !1);
}
ue({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(t, { slots: o, attrs: a }) {
  return ne($t, t.force), () => {
    let { force: e, ...s } = t;
    return Oe({ theirProps: s, ourProps: {}, slot: {}, slots: o, attrs: a, name: "ForcePortalRoot" });
  };
} });
function wr(t) {
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
ue({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: o, attrs: a }) {
  let e = J(null), s = le(() => Te(e)), n = xr(), h = De(jt, null), l = J(n === !0 || h == null ? wr(e.value) : h.resolveTarget());
  je(() => {
    n || h != null && (l.value = h.resolveTarget());
  });
  let m = De(lt, null);
  return tt(() => {
    let p = H(e);
    p && m && Qe(m.register(p));
  }), Qe(() => {
    var p, w;
    let g = (p = s.value) == null ? void 0 : p.getElementById("headlessui-portal-root");
    g && l.value === g && l.value.children.length <= 0 && ((w = l.value.parentElement) == null || w.removeChild(l.value));
  }), () => {
    if (l.value === null)
      return null;
    let p = { ref: e, "data-headlessui-portal": "" };
    return me(qt, { to: l.value }, Oe({ ourProps: p, theirProps: t, slot: {}, attrs: a, slots: o, name: "Portal" }));
  };
} });
let lt = Symbol("PortalParentContext");
function kr() {
  let t = De(lt, null), o = J([]);
  function a(n) {
    return o.value.push(n), t && t.register(n), () => e(n);
  }
  function e(n) {
    let h = o.value.indexOf(n);
    h !== -1 && o.value.splice(h, 1), t && t.unregister(n);
  }
  let s = { register: a, unregister: e, portals: o };
  return [o, ue({ name: "PortalWrapper", setup(n, { slots: h }) {
    return ne(lt, s), () => {
      var l;
      return (l = h.default) == null ? void 0 : l.call(h);
    };
  } })];
}
let jt = Symbol("PortalGroupContext");
ue({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(t, { attrs: o, slots: a }) {
  let e = vt({ resolveTarget() {
    return t.target;
  } });
  return ne(jt, e), () => {
    let { target: s, ...n } = t;
    return Oe({ theirProps: n, ourProps: {}, slot: {}, attrs: o, slots: a, name: "PortalGroup" });
  };
} });
function $r({ defaultContainers: t = [], portals: o, mainTreeNodeRef: a } = {}) {
  let e = J(null), s = Te(e);
  function n() {
    var h;
    let l = [];
    for (let m of t)
      m !== null && (m instanceof HTMLElement ? l.push(m) : "value" in m && m.value instanceof HTMLElement && l.push(m.value));
    if (o != null && o.value)
      for (let m of o.value)
        l.push(m);
    for (let m of (h = s == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null ? h : [])
      m !== document.body && m !== document.head && m instanceof HTMLElement && m.id !== "headlessui-portal-root" && (m.contains(H(e)) || l.some((p) => m.contains(p)) || l.push(m));
    return l;
  }
  return { resolveContainers: n, contains(h) {
    return n().some((l) => l.contains(h));
  }, mainTreeNodeRef: e, MainTreeNode() {
    return a != null ? null : me(ze, { features: Ne.Hidden, ref: e });
  } };
}
function jr() {
  let t = J(null);
  return { mainTreeNodeRef: t, MainTreeNode() {
    return me(ze, { features: Ne.Hidden, ref: t });
  } };
}
var Mr = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(Mr || {});
let Mt = Symbol("PopoverContext");
function at(t) {
  let o = De(Mt, null);
  if (o === null) {
    let a = new Error(`<${t} /> is missing a parent <${Ot.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, at), a;
  }
  return o;
}
let St = Symbol("PopoverGroupContext");
function Dt() {
  return De(St, null);
}
let _t = Symbol("PopoverPanelContext");
function Sr() {
  return De(_t, null);
}
let Ot = ue({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: o, attrs: a, expose: e }) {
  var s;
  let n = J(null);
  e({ el: n, $el: n });
  let h = J(1), l = J(null), m = J(null), p = J(null), w = J(null), g = le(() => Te(n)), O = le(() => {
    var L, i;
    if (!H(l) || !H(w))
      return !1;
    for (let q of document.querySelectorAll("body > *"))
      if (Number(q == null ? void 0 : q.contains(H(l))) ^ Number(q == null ? void 0 : q.contains(H(w))))
        return !0;
    let r = ot(), b = r.indexOf(H(l)), I = (b + r.length - 1) % r.length, T = (b + 1) % r.length, C = r[I], K = r[T];
    return !((L = H(w)) != null && L.contains(C)) && !((i = H(w)) != null && i.contains(K));
  }), V = { popoverState: h, buttonId: J(null), panelId: J(null), panel: w, button: l, isPortalled: O, beforePanelSentinel: m, afterPanelSentinel: p, togglePopover() {
    h.value = _e(h.value, { 0: 1, 1: 0 });
  }, closePopover() {
    h.value !== 1 && (h.value = 1);
  }, close(L) {
    V.closePopover();
    let i = (() => L ? L instanceof HTMLElement ? L : L.value instanceof HTMLElement ? H(L) : H(V.button) : H(V.button))();
    i == null || i.focus();
  } };
  ne(Mt, V), ur(le(() => _e(h.value, { 0: Le.Open, 1: Le.Closed })));
  let B = { buttonId: V.buttonId, panelId: V.panelId, close() {
    V.closePopover();
  } }, x = Dt(), P = x == null ? void 0 : x.registerPopover, [k, S] = kr(), y = $r({ mainTreeNodeRef: x == null ? void 0 : x.mainTreeNodeRef, portals: k, defaultContainers: [l, w] });
  function N() {
    var L, i, r, b;
    return (b = x == null ? void 0 : x.isFocusWithinPopoverGroup()) != null ? b : ((L = g.value) == null ? void 0 : L.activeElement) && (((i = H(l)) == null ? void 0 : i.contains(g.value.activeElement)) || ((r = H(w)) == null ? void 0 : r.contains(g.value.activeElement)));
  }
  return je(() => P == null ? void 0 : P(B)), gr((s = g.value) == null ? void 0 : s.defaultView, "focus", (L) => {
    var i, r;
    L.target !== window && L.target instanceof HTMLElement && h.value === 0 && (N() || l && w && (y.contains(L.target) || (i = H(V.beforePanelSentinel)) != null && i.contains(L.target) || (r = H(V.afterPanelSentinel)) != null && r.contains(L.target) || V.closePopover()));
  }, !0), br(y.resolveContainers, (L, i) => {
    var r;
    V.closePopover(), xt(i, ut.Loose) || (L.preventDefault(), (r = H(l)) == null || r.focus());
  }, le(() => h.value === 0)), () => {
    let L = { open: h.value === 0, close: V.close };
    return me(we, [me(S, {}, () => Oe({ theirProps: { ...t, ...a }, ourProps: { ref: n }, slot: L, slots: o, attrs: a, name: "Popover" })), me(y.MainTreeNode)]);
  };
} }), Dr = ue({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${Be()}` } }, inheritAttrs: !1, setup(t, { attrs: o, slots: a, expose: e }) {
  let s = at("PopoverButton"), n = le(() => Te(s.button));
  e({ el: s.button, $el: s.button }), tt(() => {
    s.buttonId.value = t.id;
  }), Qe(() => {
    s.buttonId.value = null;
  });
  let h = Dt(), l = h == null ? void 0 : h.closeOthers, m = Sr(), p = le(() => m === null ? !1 : m.value === s.panelId.value), w = J(null), g = `headlessui-focus-sentinel-${Be()}`;
  p.value || je(() => {
    s.button.value = w.value;
  });
  let O = ir(le(() => ({ as: t.as, type: o.type })), w);
  function V(y) {
    var N, L, i, r, b;
    if (p.value) {
      if (s.popoverState.value === 1)
        return;
      switch (y.key) {
        case Pe.Space:
        case Pe.Enter:
          y.preventDefault(), (L = (N = y.target).click) == null || L.call(N), s.closePopover(), (i = H(s.button)) == null || i.focus();
          break;
      }
    } else
      switch (y.key) {
        case Pe.Space:
        case Pe.Enter:
          y.preventDefault(), y.stopPropagation(), s.popoverState.value === 1 && (l == null || l(s.buttonId.value)), s.togglePopover();
          break;
        case Pe.Escape:
          if (s.popoverState.value !== 0)
            return l == null ? void 0 : l(s.buttonId.value);
          if (!H(s.button) || (r = n.value) != null && r.activeElement && !((b = H(s.button)) != null && b.contains(n.value.activeElement)))
            return;
          y.preventDefault(), y.stopPropagation(), s.closePopover();
          break;
      }
  }
  function B(y) {
    p.value || y.key === Pe.Space && y.preventDefault();
  }
  function x(y) {
    var N, L;
    t.disabled || (p.value ? (s.closePopover(), (N = H(s.button)) == null || N.focus()) : (y.preventDefault(), y.stopPropagation(), s.popoverState.value === 1 && (l == null || l(s.buttonId.value)), s.togglePopover(), (L = H(s.button)) == null || L.focus()));
  }
  function P(y) {
    y.preventDefault(), y.stopPropagation();
  }
  let k = kt();
  function S() {
    let y = H(s.panel);
    if (!y)
      return;
    function N() {
      _e(k.value, { [Se.Forwards]: () => Ee(y, Me.First), [Se.Backwards]: () => Ee(y, Me.Last) }) === et.Error && Ee(ot().filter((L) => L.dataset.headlessuiFocusGuard !== "true"), _e(k.value, { [Se.Forwards]: Me.Next, [Se.Backwards]: Me.Previous }), { relativeTo: H(s.button) });
    }
    N();
  }
  return () => {
    let y = s.popoverState.value === 0, N = { open: y }, { id: L, ...i } = t, r = p.value ? { ref: w, type: O.value, onKeydown: V, onClick: x } : { ref: w, id: L, type: O.value, "aria-expanded": s.popoverState.value === 0, "aria-controls": H(s.panel) ? s.panelId.value : void 0, disabled: t.disabled ? !0 : void 0, onKeydown: V, onKeyup: B, onClick: x, onMousedown: P };
    return me(we, [Oe({ ourProps: r, theirProps: { ...o, ...i }, slot: N, attrs: o, slots: a, name: "PopoverButton" }), y && !p.value && s.isPortalled.value && me(ze, { id: g, features: Ne.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: S })]);
  };
} }), _r = ue({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(t, { attrs: o, slots: a }) {
  let e = at("PopoverOverlay"), s = `headlessui-popover-overlay-${Be()}`, n = gt(), h = le(() => n !== null ? (n.value & Le.Open) === Le.Open : e.popoverState.value === 0);
  function l() {
    e.closePopover();
  }
  return () => {
    let m = { open: e.popoverState.value === 0 };
    return Oe({ ourProps: { id: s, "aria-hidden": !0, onClick: l }, theirProps: t, slot: m, attrs: o, slots: a, features: Ue.RenderStrategy | Ue.Static, visible: h.value, name: "PopoverOverlay" });
  };
} }), Or = ue({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${Be()}` } }, inheritAttrs: !1, setup(t, { attrs: o, slots: a, expose: e }) {
  let { focus: s } = t, n = at("PopoverPanel"), h = le(() => Te(n.panel)), l = `headlessui-focus-sentinel-before-${Be()}`, m = `headlessui-focus-sentinel-after-${Be()}`;
  e({ el: n.panel, $el: n.panel }), tt(() => {
    n.panelId.value = t.id;
  }), Qe(() => {
    n.panelId.value = null;
  }), ne(_t, n.panelId), je(() => {
    var P, k;
    if (!s || n.popoverState.value !== 0 || !n.panel)
      return;
    let S = (P = h.value) == null ? void 0 : P.activeElement;
    (k = H(n.panel)) != null && k.contains(S) || Ee(H(n.panel), Me.First);
  });
  let p = gt(), w = le(() => p !== null ? (p.value & Le.Open) === Le.Open : n.popoverState.value === 0);
  function g(P) {
    var k, S;
    switch (P.key) {
      case Pe.Escape:
        if (n.popoverState.value !== 0 || !H(n.panel) || h.value && !((k = H(n.panel)) != null && k.contains(h.value.activeElement)))
          return;
        P.preventDefault(), P.stopPropagation(), n.closePopover(), (S = H(n.button)) == null || S.focus();
        break;
    }
  }
  function O(P) {
    var k, S, y, N, L;
    let i = P.relatedTarget;
    i && H(n.panel) && ((k = H(n.panel)) != null && k.contains(i) || (n.closePopover(), ((y = (S = H(n.beforePanelSentinel)) == null ? void 0 : S.contains) != null && y.call(S, i) || (L = (N = H(n.afterPanelSentinel)) == null ? void 0 : N.contains) != null && L.call(N, i)) && i.focus({ preventScroll: !0 })));
  }
  let V = kt();
  function B() {
    let P = H(n.panel);
    if (!P)
      return;
    function k() {
      _e(V.value, { [Se.Forwards]: () => {
        var S;
        Ee(P, Me.First) === et.Error && ((S = H(n.afterPanelSentinel)) == null || S.focus());
      }, [Se.Backwards]: () => {
        var S;
        (S = H(n.button)) == null || S.focus({ preventScroll: !0 });
      } });
    }
    k();
  }
  function x() {
    let P = H(n.panel);
    if (!P)
      return;
    function k() {
      _e(V.value, { [Se.Forwards]: () => {
        let S = H(n.button), y = H(n.panel);
        if (!S)
          return;
        let N = ot(), L = N.indexOf(S), i = N.slice(0, L + 1), r = [...N.slice(L + 1), ...i];
        for (let b of r.slice())
          if (b.dataset.headlessuiFocusGuard === "true" || y != null && y.contains(b)) {
            let I = r.indexOf(b);
            I !== -1 && r.splice(I, 1);
          }
        Ee(r, Me.First, { sorted: !1 });
      }, [Se.Backwards]: () => {
        var S;
        Ee(P, Me.Previous) === et.Error && ((S = H(n.button)) == null || S.focus());
      } });
    }
    k();
  }
  return () => {
    let P = { open: n.popoverState.value === 0, close: n.close }, { id: k, focus: S, ...y } = t, N = { ref: n.panel, id: k, onKeydown: g, onFocusout: s && n.popoverState.value === 0 ? O : void 0, tabIndex: -1 };
    return Oe({ ourProps: N, theirProps: { ...o, ...y }, attrs: o, slot: P, slots: { ...a, default: (...L) => {
      var i;
      return [me(we, [w.value && n.isPortalled.value && me(ze, { id: l, ref: n.beforePanelSentinel, features: Ne.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: B }), (i = a.default) == null ? void 0 : i.call(a, ...L), w.value && n.isPortalled.value && me(ze, { id: m, ref: n.afterPanelSentinel, features: Ne.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: x })])];
    } }, features: Ue.RenderStrategy | Ue.Static, visible: w.value, name: "PopoverPanel" });
  };
} });
ue({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(t, { attrs: o, slots: a, expose: e }) {
  let s = J(null), n = Jt([]), h = le(() => Te(s)), l = jr();
  e({ el: s, $el: s });
  function m(O) {
    let V = n.value.indexOf(O);
    V !== -1 && n.value.splice(V, 1);
  }
  function p(O) {
    return n.value.push(O), () => {
      m(O);
    };
  }
  function w() {
    var O;
    let V = h.value;
    if (!V)
      return !1;
    let B = V.activeElement;
    return (O = H(s)) != null && O.contains(B) ? !0 : n.value.some((x) => {
      var P, k;
      return ((P = V.getElementById(x.buttonId.value)) == null ? void 0 : P.contains(B)) || ((k = V.getElementById(x.panelId.value)) == null ? void 0 : k.contains(B));
    });
  }
  function g(O) {
    for (let V of n.value)
      V.buttonId.value !== O && V.close();
  }
  return ne(St, { registerPopover: p, unregisterPopover: m, isFocusWithinPopoverGroup: w, closeOthers: g, mainTreeNodeRef: l.mainTreeNodeRef }), () => me(we, [Oe({ ourProps: { ref: s }, theirProps: { ...t, ...o }, slot: {}, attrs: o, slots: a, name: "PopoverGroup" }), me(l.MainTreeNode)]);
} });
var Ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ye(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Pt = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ae, function() {
    var a = 1e3, e = 6e4, s = 36e5, n = "millisecond", h = "second", l = "minute", m = "hour", p = "day", w = "week", g = "month", O = "quarter", V = "year", B = "date", x = "Invalid Date", P = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, k = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, S = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function($) {
      var _ = ["th", "st", "nd", "rd"], M = $ % 100;
      return "[" + $ + (_[(M - 20) % 10] || _[M] || _[0]) + "]";
    } }, y = function($, _, M) {
      var Y = String($);
      return !Y || Y.length >= _ ? $ : "" + Array(_ + 1 - Y.length).join(M) + $;
    }, N = { s: y, z: function($) {
      var _ = -$.utcOffset(), M = Math.abs(_), Y = Math.floor(M / 60), D = M % 60;
      return (_ <= 0 ? "+" : "-") + y(Y, 2, "0") + ":" + y(D, 2, "0");
    }, m: function $(_, M) {
      if (_.date() < M.date())
        return -$(M, _);
      var Y = 12 * (M.year() - _.year()) + (M.month() - _.month()), D = _.clone().add(Y, g), E = M - D < 0, R = _.clone().add(Y + (E ? -1 : 1), g);
      return +(-(Y + (M - D) / (E ? D - R : R - D)) || 0);
    }, a: function($) {
      return $ < 0 ? Math.ceil($) || 0 : Math.floor($);
    }, p: function($) {
      return { M: g, y: V, w, d: p, D: B, h: m, m: l, s: h, ms: n, Q: O }[$] || String($ || "").toLowerCase().replace(/s$/, "");
    }, u: function($) {
      return $ === void 0;
    } }, L = "en", i = {};
    i[L] = S;
    var r = "$isDayjsObject", b = function($) {
      return $ instanceof K || !(!$ || !$[r]);
    }, I = function $(_, M, Y) {
      var D;
      if (!_)
        return L;
      if (typeof _ == "string") {
        var E = _.toLowerCase();
        i[E] && (D = E), M && (i[E] = M, D = E);
        var R = _.split("-");
        if (!D && R.length > 1)
          return $(R[0]);
      } else {
        var G = _.name;
        i[G] = _, D = G;
      }
      return !Y && D && (L = D), D || !Y && L;
    }, T = function($, _) {
      if (b($))
        return $.clone();
      var M = typeof _ == "object" ? _ : {};
      return M.date = $, M.args = arguments, new K(M);
    }, C = N;
    C.l = I, C.i = b, C.w = function($, _) {
      return T($, { locale: _.$L, utc: _.$u, x: _.$x, $offset: _.$offset });
    };
    var K = function() {
      function $(M) {
        this.$L = I(M.locale, null, !0), this.parse(M), this.$x = this.$x || M.x || {}, this[r] = !0;
      }
      var _ = $.prototype;
      return _.parse = function(M) {
        this.$d = function(Y) {
          var D = Y.date, E = Y.utc;
          if (D === null)
            return /* @__PURE__ */ new Date(NaN);
          if (C.u(D))
            return /* @__PURE__ */ new Date();
          if (D instanceof Date)
            return new Date(D);
          if (typeof D == "string" && !/Z$/i.test(D)) {
            var R = D.match(P);
            if (R) {
              var G = R[2] - 1 || 0, Q = (R[7] || "0").substring(0, 3);
              return E ? new Date(Date.UTC(R[1], G, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, Q)) : new Date(R[1], G, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, Q);
            }
          }
          return new Date(D);
        }(M), this.init();
      }, _.init = function() {
        var M = this.$d;
        this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
      }, _.$utils = function() {
        return C;
      }, _.isValid = function() {
        return this.$d.toString() !== x;
      }, _.isSame = function(M, Y) {
        var D = T(M);
        return this.startOf(Y) <= D && D <= this.endOf(Y);
      }, _.isAfter = function(M, Y) {
        return T(M) < this.startOf(Y);
      }, _.isBefore = function(M, Y) {
        return this.endOf(Y) < T(M);
      }, _.$g = function(M, Y, D) {
        return C.u(M) ? this[Y] : this.set(D, M);
      }, _.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, _.valueOf = function() {
        return this.$d.getTime();
      }, _.startOf = function(M, Y) {
        var D = this, E = !!C.u(Y) || Y, R = C.p(M), G = function(he, oe) {
          var fe = C.w(D.$u ? Date.UTC(D.$y, oe, he) : new Date(D.$y, oe, he), D);
          return E ? fe : fe.endOf(p);
        }, Q = function(he, oe) {
          return C.w(D.toDate()[he].apply(D.toDate("s"), (E ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(oe)), D);
        }, te = this.$W, re = this.$M, ie = this.$D, ce = "set" + (this.$u ? "UTC" : "");
        switch (R) {
          case V:
            return E ? G(1, 0) : G(31, 11);
          case g:
            return E ? G(1, re) : G(0, re + 1);
          case w:
            var be = this.$locale().weekStart || 0, ge = (te < be ? te + 7 : te) - be;
            return G(E ? ie - ge : ie + (6 - ge), re);
          case p:
          case B:
            return Q(ce + "Hours", 0);
          case m:
            return Q(ce + "Minutes", 1);
          case l:
            return Q(ce + "Seconds", 2);
          case h:
            return Q(ce + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, _.endOf = function(M) {
        return this.startOf(M, !1);
      }, _.$set = function(M, Y) {
        var D, E = C.p(M), R = "set" + (this.$u ? "UTC" : ""), G = (D = {}, D[p] = R + "Date", D[B] = R + "Date", D[g] = R + "Month", D[V] = R + "FullYear", D[m] = R + "Hours", D[l] = R + "Minutes", D[h] = R + "Seconds", D[n] = R + "Milliseconds", D)[E], Q = E === p ? this.$D + (Y - this.$W) : Y;
        if (E === g || E === V) {
          var te = this.clone().set(B, 1);
          te.$d[G](Q), te.init(), this.$d = te.set(B, Math.min(this.$D, te.daysInMonth())).$d;
        } else
          G && this.$d[G](Q);
        return this.init(), this;
      }, _.set = function(M, Y) {
        return this.clone().$set(M, Y);
      }, _.get = function(M) {
        return this[C.p(M)]();
      }, _.add = function(M, Y) {
        var D, E = this;
        M = Number(M);
        var R = C.p(Y), G = function(re) {
          var ie = T(E);
          return C.w(ie.date(ie.date() + Math.round(re * M)), E);
        };
        if (R === g)
          return this.set(g, this.$M + M);
        if (R === V)
          return this.set(V, this.$y + M);
        if (R === p)
          return G(1);
        if (R === w)
          return G(7);
        var Q = (D = {}, D[l] = e, D[m] = s, D[h] = a, D)[R] || 1, te = this.$d.getTime() + M * Q;
        return C.w(te, this);
      }, _.subtract = function(M, Y) {
        return this.add(-1 * M, Y);
      }, _.format = function(M) {
        var Y = this, D = this.$locale();
        if (!this.isValid())
          return D.invalidDate || x;
        var E = M || "YYYY-MM-DDTHH:mm:ssZ", R = C.z(this), G = this.$H, Q = this.$m, te = this.$M, re = D.weekdays, ie = D.months, ce = D.meridiem, be = function(oe, fe, xe, ke) {
          return oe && (oe[fe] || oe(Y, E)) || xe[fe].slice(0, ke);
        }, ge = function(oe) {
          return C.s(G % 12 || 12, oe, "0");
        }, he = ce || function(oe, fe, xe) {
          var ke = oe < 12 ? "AM" : "PM";
          return xe ? ke.toLowerCase() : ke;
        };
        return E.replace(k, function(oe, fe) {
          return fe || function(xe) {
            switch (xe) {
              case "YY":
                return String(Y.$y).slice(-2);
              case "YYYY":
                return C.s(Y.$y, 4, "0");
              case "M":
                return te + 1;
              case "MM":
                return C.s(te + 1, 2, "0");
              case "MMM":
                return be(D.monthsShort, te, ie, 3);
              case "MMMM":
                return be(ie, te);
              case "D":
                return Y.$D;
              case "DD":
                return C.s(Y.$D, 2, "0");
              case "d":
                return String(Y.$W);
              case "dd":
                return be(D.weekdaysMin, Y.$W, re, 2);
              case "ddd":
                return be(D.weekdaysShort, Y.$W, re, 3);
              case "dddd":
                return re[Y.$W];
              case "H":
                return String(G);
              case "HH":
                return C.s(G, 2, "0");
              case "h":
                return ge(1);
              case "hh":
                return ge(2);
              case "a":
                return he(G, Q, !0);
              case "A":
                return he(G, Q, !1);
              case "m":
                return String(Q);
              case "mm":
                return C.s(Q, 2, "0");
              case "s":
                return String(Y.$s);
              case "ss":
                return C.s(Y.$s, 2, "0");
              case "SSS":
                return C.s(Y.$ms, 3, "0");
              case "Z":
                return R;
            }
            return null;
          }(oe) || R.replace(":", "");
        });
      }, _.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, _.diff = function(M, Y, D) {
        var E, R = this, G = C.p(Y), Q = T(M), te = (Q.utcOffset() - this.utcOffset()) * e, re = this - Q, ie = function() {
          return C.m(R, Q);
        };
        switch (G) {
          case V:
            E = ie() / 12;
            break;
          case g:
            E = ie();
            break;
          case O:
            E = ie() / 3;
            break;
          case w:
            E = (re - te) / 6048e5;
            break;
          case p:
            E = (re - te) / 864e5;
            break;
          case m:
            E = re / s;
            break;
          case l:
            E = re / e;
            break;
          case h:
            E = re / a;
            break;
          default:
            E = re;
        }
        return D ? E : C.a(E);
      }, _.daysInMonth = function() {
        return this.endOf(g).$D;
      }, _.$locale = function() {
        return i[this.$L];
      }, _.locale = function(M, Y) {
        if (!M)
          return this.$L;
        var D = this.clone(), E = I(M, Y, !0);
        return E && (D.$L = E), D;
      }, _.clone = function() {
        return C.w(this.$d, this);
      }, _.toDate = function() {
        return new Date(this.valueOf());
      }, _.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, _.toISOString = function() {
        return this.$d.toISOString();
      }, _.toString = function() {
        return this.$d.toUTCString();
      }, $;
    }(), q = K.prototype;
    return T.prototype = q, [["$ms", n], ["$s", h], ["$m", l], ["$H", m], ["$W", p], ["$M", g], ["$y", V], ["$D", B]].forEach(function($) {
      q[$[1]] = function(_) {
        return this.$g(_, $[0], $[1]);
      };
    }), T.extend = function($, _) {
      return $.$i || ($(_, K, T), $.$i = !0), T;
    }, T.locale = I, T.isDayjs = b, T.unix = function($) {
      return T(1e3 * $);
    }, T.en = i[L], T.Ls = i, T.p = {}, T;
  });
})(Pt);
var Pr = Pt.exports;
const d = /* @__PURE__ */ Ye(Pr);
var Vt = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ae, function() {
    return function(a, e, s) {
      var n = e.prototype, h = function(g) {
        return g && (g.indexOf ? g : g.s);
      }, l = function(g, O, V, B, x) {
        var P = g.name ? g : g.$locale(), k = h(P[O]), S = h(P[V]), y = k || S.map(function(L) {
          return L.slice(0, B);
        });
        if (!x)
          return y;
        var N = P.weekStart;
        return y.map(function(L, i) {
          return y[(i + (N || 0)) % 7];
        });
      }, m = function() {
        return s.Ls[s.locale()];
      }, p = function(g, O) {
        return g.formats[O] || function(V) {
          return V.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(B, x, P) {
            return x || P.slice(1);
          });
        }(g.formats[O.toUpperCase()]);
      }, w = function() {
        var g = this;
        return { months: function(O) {
          return O ? O.format("MMMM") : l(g, "months");
        }, monthsShort: function(O) {
          return O ? O.format("MMM") : l(g, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return g.$locale().weekStart || 0;
        }, weekdays: function(O) {
          return O ? O.format("dddd") : l(g, "weekdays");
        }, weekdaysMin: function(O) {
          return O ? O.format("dd") : l(g, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(O) {
          return O ? O.format("ddd") : l(g, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(O) {
          return p(g.$locale(), O);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      n.localeData = function() {
        return w.bind(this)();
      }, s.localeData = function() {
        var g = m();
        return { firstDayOfWeek: function() {
          return g.weekStart || 0;
        }, weekdays: function() {
          return s.weekdays();
        }, weekdaysShort: function() {
          return s.weekdaysShort();
        }, weekdaysMin: function() {
          return s.weekdaysMin();
        }, months: function() {
          return s.months();
        }, monthsShort: function() {
          return s.monthsShort();
        }, longDateFormat: function(O) {
          return p(g, O);
        }, meridiem: g.meridiem, ordinal: g.ordinal };
      }, s.months = function() {
        return l(m(), "months");
      }, s.monthsShort = function() {
        return l(m(), "monthsShort", "months", 3);
      }, s.weekdays = function(g) {
        return l(m(), "weekdays", null, null, g);
      }, s.weekdaysShort = function(g) {
        return l(m(), "weekdaysShort", "weekdays", 3, g);
      }, s.weekdaysMin = function(g) {
        return l(m(), "weekdaysMin", "weekdays", 2, g);
      };
    };
  });
})(Vt);
var Vr = Vt.exports;
const Tr = /* @__PURE__ */ Ye(Vr);
var Tt = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ae, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(e, s, n) {
      var h = s.prototype, l = h.format;
      n.en.formats = a, h.format = function(m) {
        m === void 0 && (m = "YYYY-MM-DDTHH:mm:ssZ");
        var p = this.$locale().formats, w = function(g, O) {
          return g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(V, B, x) {
            var P = x && x.toUpperCase();
            return B || O[x] || a[x] || O[P].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, S, y) {
              return S || y.slice(1);
            });
          });
        }(m, p === void 0 ? {} : p);
        return l.call(this, w);
      };
    };
  });
})(Tt);
var Ar = Tt.exports;
const Yr = /* @__PURE__ */ Ye(Ar);
var At = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ae, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, n = /\d\d?/, h = /\d*[^-_:/,()\s\d]+/, l = {}, m = function(x) {
      return (x = +x) + (x > 68 ? 1900 : 2e3);
    }, p = function(x) {
      return function(P) {
        this[x] = +P;
      };
    }, w = [/[+-]\d\d:?(\d\d)?|Z/, function(x) {
      (this.zone || (this.zone = {})).offset = function(P) {
        if (!P || P === "Z")
          return 0;
        var k = P.match(/([+-]|\d\d)/g), S = 60 * k[1] + (+k[2] || 0);
        return S === 0 ? 0 : k[0] === "+" ? -S : S;
      }(x);
    }], g = function(x) {
      var P = l[x];
      return P && (P.indexOf ? P : P.s.concat(P.f));
    }, O = function(x, P) {
      var k, S = l.meridiem;
      if (S) {
        for (var y = 1; y <= 24; y += 1)
          if (x.indexOf(S(y, 0, P)) > -1) {
            k = y > 12;
            break;
          }
      } else
        k = x === (P ? "pm" : "PM");
      return k;
    }, V = { A: [h, function(x) {
      this.afternoon = O(x, !1);
    }], a: [h, function(x) {
      this.afternoon = O(x, !0);
    }], S: [/\d/, function(x) {
      this.milliseconds = 100 * +x;
    }], SS: [s, function(x) {
      this.milliseconds = 10 * +x;
    }], SSS: [/\d{3}/, function(x) {
      this.milliseconds = +x;
    }], s: [n, p("seconds")], ss: [n, p("seconds")], m: [n, p("minutes")], mm: [n, p("minutes")], H: [n, p("hours")], h: [n, p("hours")], HH: [n, p("hours")], hh: [n, p("hours")], D: [n, p("day")], DD: [s, p("day")], Do: [h, function(x) {
      var P = l.ordinal, k = x.match(/\d+/);
      if (this.day = k[0], P)
        for (var S = 1; S <= 31; S += 1)
          P(S).replace(/\[|\]/g, "") === x && (this.day = S);
    }], M: [n, p("month")], MM: [s, p("month")], MMM: [h, function(x) {
      var P = g("months"), k = (g("monthsShort") || P.map(function(S) {
        return S.slice(0, 3);
      })).indexOf(x) + 1;
      if (k < 1)
        throw new Error();
      this.month = k % 12 || k;
    }], MMMM: [h, function(x) {
      var P = g("months").indexOf(x) + 1;
      if (P < 1)
        throw new Error();
      this.month = P % 12 || P;
    }], Y: [/[+-]?\d+/, p("year")], YY: [s, function(x) {
      this.year = m(x);
    }], YYYY: [/\d{4}/, p("year")], Z: w, ZZ: w };
    function B(x) {
      var P, k;
      P = x, k = l && l.formats;
      for (var S = (x = P.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(I, T, C) {
        var K = C && C.toUpperCase();
        return T || k[C] || a[C] || k[K].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(q, $, _) {
          return $ || _.slice(1);
        });
      })).match(e), y = S.length, N = 0; N < y; N += 1) {
        var L = S[N], i = V[L], r = i && i[0], b = i && i[1];
        S[N] = b ? { regex: r, parser: b } : L.replace(/^\[|\]$/g, "");
      }
      return function(I) {
        for (var T = {}, C = 0, K = 0; C < y; C += 1) {
          var q = S[C];
          if (typeof q == "string")
            K += q.length;
          else {
            var $ = q.regex, _ = q.parser, M = I.slice(K), Y = $.exec(M)[0];
            _.call(T, Y), I = I.replace(Y, "");
          }
        }
        return function(D) {
          var E = D.afternoon;
          if (E !== void 0) {
            var R = D.hours;
            E ? R < 12 && (D.hours += 12) : R === 12 && (D.hours = 0), delete D.afternoon;
          }
        }(T), T;
      };
    }
    return function(x, P, k) {
      k.p.customParseFormat = !0, x && x.parseTwoDigitYear && (m = x.parseTwoDigitYear);
      var S = P.prototype, y = S.parse;
      S.parse = function(N) {
        var L = N.date, i = N.utc, r = N.args;
        this.$u = i;
        var b = r[1];
        if (typeof b == "string") {
          var I = r[2] === !0, T = r[3] === !0, C = I || T, K = r[2];
          T && (K = r[2]), l = this.$locale(), !I && K && (l = k.Ls[K]), this.$d = function(M, Y, D) {
            try {
              if (["x", "X"].indexOf(Y) > -1)
                return new Date((Y === "X" ? 1e3 : 1) * M);
              var E = B(Y)(M), R = E.year, G = E.month, Q = E.day, te = E.hours, re = E.minutes, ie = E.seconds, ce = E.milliseconds, be = E.zone, ge = /* @__PURE__ */ new Date(), he = Q || (R || G ? 1 : ge.getDate()), oe = R || ge.getFullYear(), fe = 0;
              R && !G || (fe = G > 0 ? G - 1 : ge.getMonth());
              var xe = te || 0, ke = re || 0, Re = ie || 0, v = ce || 0;
              return be ? new Date(Date.UTC(oe, fe, he, xe, ke, Re, v + 60 * be.offset * 1e3)) : D ? new Date(Date.UTC(oe, fe, he, xe, ke, Re, v)) : new Date(oe, fe, he, xe, ke, Re, v);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(L, b, i), this.init(), K && K !== !0 && (this.$L = this.locale(K).$L), C && L != this.format(b) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (b instanceof Array)
          for (var q = b.length, $ = 1; $ <= q; $ += 1) {
            r[1] = b[$ - 1];
            var _ = k.apply(this, r);
            if (_.isValid()) {
              this.$d = _.$d, this.$L = _.$L, this.init();
              break;
            }
            $ === q && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          y.call(this, N);
      };
    };
  });
})(At);
var Cr = At.exports;
const Er = /* @__PURE__ */ Ye(Cr);
var Yt = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ae, function() {
    return function(a, e, s) {
      e.prototype.isToday = function() {
        var n = "YYYY-MM-DD", h = s();
        return this.format(n) === h.format(n);
      };
    };
  });
})(Yt);
var Lr = Yt.exports;
const Fr = /* @__PURE__ */ Ye(Lr);
var Ct = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ae, function() {
    return function(a, e, s) {
      e.prototype.isBetween = function(n, h, l, m) {
        var p = s(n), w = s(h), g = (m = m || "()")[0] === "(", O = m[1] === ")";
        return (g ? this.isAfter(p, l) : !this.isBefore(p, l)) && (O ? this.isBefore(w, l) : !this.isAfter(w, l)) || (g ? this.isBefore(p, l) : !this.isAfter(p, l)) && (O ? this.isAfter(w, l) : !this.isBefore(w, l));
      };
    };
  });
})(Ct);
var Br = Ct.exports;
const Nr = /* @__PURE__ */ Ye(Br);
var Et = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ae, function() {
    var a, e, s = 1e3, n = 6e4, h = 36e5, l = 864e5, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, p = 31536e6, w = 2628e6, g = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, O = { years: p, months: w, days: l, hours: h, minutes: n, seconds: s, milliseconds: 1, weeks: 6048e5 }, V = function(i) {
      return i instanceof N;
    }, B = function(i, r, b) {
      return new N(i, b, r.$l);
    }, x = function(i) {
      return e.p(i) + "s";
    }, P = function(i) {
      return i < 0;
    }, k = function(i) {
      return P(i) ? Math.ceil(i) : Math.floor(i);
    }, S = function(i) {
      return Math.abs(i);
    }, y = function(i, r) {
      return i ? P(i) ? { negative: !0, format: "" + S(i) + r } : { negative: !1, format: "" + i + r } : { negative: !1, format: "" };
    }, N = function() {
      function i(b, I, T) {
        var C = this;
        if (this.$d = {}, this.$l = T, b === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), I)
          return B(b * O[x(I)], this);
        if (typeof b == "number")
          return this.$ms = b, this.parseFromMilliseconds(), this;
        if (typeof b == "object")
          return Object.keys(b).forEach(function($) {
            C.$d[x($)] = b[$];
          }), this.calMilliseconds(), this;
        if (typeof b == "string") {
          var K = b.match(g);
          if (K) {
            var q = K.slice(2).map(function($) {
              return $ != null ? Number($) : 0;
            });
            return this.$d.years = q[0], this.$d.months = q[1], this.$d.weeks = q[2], this.$d.days = q[3], this.$d.hours = q[4], this.$d.minutes = q[5], this.$d.seconds = q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var r = i.prototype;
      return r.calMilliseconds = function() {
        var b = this;
        this.$ms = Object.keys(this.$d).reduce(function(I, T) {
          return I + (b.$d[T] || 0) * O[T];
        }, 0);
      }, r.parseFromMilliseconds = function() {
        var b = this.$ms;
        this.$d.years = k(b / p), b %= p, this.$d.months = k(b / w), b %= w, this.$d.days = k(b / l), b %= l, this.$d.hours = k(b / h), b %= h, this.$d.minutes = k(b / n), b %= n, this.$d.seconds = k(b / s), b %= s, this.$d.milliseconds = b;
      }, r.toISOString = function() {
        var b = y(this.$d.years, "Y"), I = y(this.$d.months, "M"), T = +this.$d.days || 0;
        this.$d.weeks && (T += 7 * this.$d.weeks);
        var C = y(T, "D"), K = y(this.$d.hours, "H"), q = y(this.$d.minutes, "M"), $ = this.$d.seconds || 0;
        this.$d.milliseconds && ($ += this.$d.milliseconds / 1e3, $ = Math.round(1e3 * $) / 1e3);
        var _ = y($, "S"), M = b.negative || I.negative || C.negative || K.negative || q.negative || _.negative, Y = K.format || q.format || _.format ? "T" : "", D = (M ? "-" : "") + "P" + b.format + I.format + C.format + Y + K.format + q.format + _.format;
        return D === "P" || D === "-P" ? "P0D" : D;
      }, r.toJSON = function() {
        return this.toISOString();
      }, r.format = function(b) {
        var I = b || "YYYY-MM-DDTHH:mm:ss", T = { Y: this.$d.years, YY: e.s(this.$d.years, 2, "0"), YYYY: e.s(this.$d.years, 4, "0"), M: this.$d.months, MM: e.s(this.$d.months, 2, "0"), D: this.$d.days, DD: e.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: e.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: e.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: e.s(this.$d.seconds, 2, "0"), SSS: e.s(this.$d.milliseconds, 3, "0") };
        return I.replace(m, function(C, K) {
          return K || String(T[C]);
        });
      }, r.as = function(b) {
        return this.$ms / O[x(b)];
      }, r.get = function(b) {
        var I = this.$ms, T = x(b);
        return T === "milliseconds" ? I %= 1e3 : I = T === "weeks" ? k(I / O[T]) : this.$d[T], I || 0;
      }, r.add = function(b, I, T) {
        var C;
        return C = I ? b * O[x(I)] : V(b) ? b.$ms : B(b, this).$ms, B(this.$ms + C * (T ? -1 : 1), this);
      }, r.subtract = function(b, I) {
        return this.add(b, I, !0);
      }, r.locale = function(b) {
        var I = this.clone();
        return I.$l = b, I;
      }, r.clone = function() {
        return B(this.$ms, this);
      }, r.humanize = function(b) {
        return a().add(this.$ms, "ms").locale(this.$l).fromNow(!b);
      }, r.valueOf = function() {
        return this.asMilliseconds();
      }, r.milliseconds = function() {
        return this.get("milliseconds");
      }, r.asMilliseconds = function() {
        return this.as("milliseconds");
      }, r.seconds = function() {
        return this.get("seconds");
      }, r.asSeconds = function() {
        return this.as("seconds");
      }, r.minutes = function() {
        return this.get("minutes");
      }, r.asMinutes = function() {
        return this.as("minutes");
      }, r.hours = function() {
        return this.get("hours");
      }, r.asHours = function() {
        return this.as("hours");
      }, r.days = function() {
        return this.get("days");
      }, r.asDays = function() {
        return this.as("days");
      }, r.weeks = function() {
        return this.get("weeks");
      }, r.asWeeks = function() {
        return this.as("weeks");
      }, r.months = function() {
        return this.get("months");
      }, r.asMonths = function() {
        return this.as("months");
      }, r.years = function() {
        return this.get("years");
      }, r.asYears = function() {
        return this.as("years");
      }, i;
    }(), L = function(i, r, b) {
      return i.add(r.years() * b, "y").add(r.months() * b, "M").add(r.days() * b, "d").add(r.hours() * b, "h").add(r.minutes() * b, "m").add(r.seconds() * b, "s").add(r.milliseconds() * b, "ms");
    };
    return function(i, r, b) {
      a = b, e = b().$utils(), b.duration = function(C, K) {
        var q = b.locale();
        return B(C, { $l: q }, K);
      }, b.isDuration = V;
      var I = r.prototype.add, T = r.prototype.subtract;
      r.prototype.add = function(C, K) {
        return V(C) ? L(this, C, 1) : I.bind(this)(C, K);
      }, r.prototype.subtract = function(C, K) {
        return V(C) ? L(this, C, -1) : T.bind(this)(C, K);
      };
    };
  });
})(Et);
var Rr = Et.exports;
const Ir = /* @__PURE__ */ Ye(Rr);
var Lt = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ae, function() {
    var a = "week", e = "year";
    return function(s, n, h) {
      var l = n.prototype;
      l.week = function(m) {
        if (m === void 0 && (m = null), m !== null)
          return this.add(7 * (m - this.week()), "day");
        var p = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var w = h(this).startOf(e).add(1, e).date(p), g = h(this).endOf(a);
          if (w.isBefore(g))
            return 1;
        }
        var O = h(this).startOf(e).date(p).startOf(a).subtract(1, "millisecond"), V = this.diff(O, a, !0);
        return V < 0 ? h(this).startOf("week").week() : Math.ceil(V);
      }, l.weeks = function(m) {
        return m === void 0 && (m = null), this.week(m);
      };
    };
  });
})(Lt);
var Hr = Lt.exports;
const Ur = /* @__PURE__ */ Ye(Hr);
function $e(t, o) {
  const a = De(t, o);
  if (!a)
    throw new Error(`Could not resolve ${t.description}`);
  return a;
}
const ft = Object.fromEntries(
  Object.entries(/* @__PURE__ */ Object.assign({ "./locale/af.js": () => import("./af-02fa8f9d.js"), "./locale/am.js": () => import("./am-27393c46.js"), "./locale/ar-dz.js": () => import("./ar-dz-b1f1efab.js"), "./locale/ar-iq.js": () => import("./ar-iq-c75d700c.js"), "./locale/ar-kw.js": () => import("./ar-kw-15e1b527.js"), "./locale/ar-ly.js": () => import("./ar-ly-450dd6b6.js"), "./locale/ar-ma.js": () => import("./ar-ma-a46b37d4.js"), "./locale/ar-sa.js": () => import("./ar-sa-10765352.js"), "./locale/ar-tn.js": () => import("./ar-tn-39177be0.js"), "./locale/ar.js": () => import("./ar-e8ee36e6.js"), "./locale/az.js": () => import("./az-c9f2c16d.js"), "./locale/be.js": () => import("./be-bfe150e5.js"), "./locale/bg.js": () => import("./bg-32df4eb5.js"), "./locale/bi.js": () => import("./bi-699b7ca0.js"), "./locale/bm.js": () => import("./bm-918ee56a.js"), "./locale/bn-bd.js": () => import("./bn-bd-a410dc43.js"), "./locale/bn.js": () => import("./bn-48b5d68b.js"), "./locale/bo.js": () => import("./bo-bbaf5ca7.js"), "./locale/br.js": () => import("./br-93f0077c.js"), "./locale/bs.js": () => import("./bs-2e4776e4.js"), "./locale/ca.js": () => import("./ca-c5cf4b66.js"), "./locale/cs.js": () => import("./cs-cd112646.js"), "./locale/cv.js": () => import("./cv-e8e38e0d.js"), "./locale/cy.js": () => import("./cy-31cba7ad.js"), "./locale/da.js": () => import("./da-65907c9c.js"), "./locale/de-at.js": () => import("./de-at-23db0002.js"), "./locale/de-ch.js": () => import("./de-ch-e25f6367.js"), "./locale/de.js": () => import("./de-5098fdef.js"), "./locale/dv.js": () => import("./dv-65e5aba2.js"), "./locale/el.js": () => import("./el-5a7bf813.js"), "./locale/en-au.js": () => import("./en-au-49216699.js"), "./locale/en-ca.js": () => import("./en-ca-b26773fa.js"), "./locale/en-gb.js": () => import("./en-gb-5e72befa.js"), "./locale/en-ie.js": () => import("./en-ie-7078ae32.js"), "./locale/en-il.js": () => import("./en-il-98752072.js"), "./locale/en-in.js": () => import("./en-in-a46e7af9.js"), "./locale/en-nz.js": () => import("./en-nz-0ba07944.js"), "./locale/en-sg.js": () => import("./en-sg-38d3bb2e.js"), "./locale/en-tt.js": () => import("./en-tt-ffcb6a6b.js"), "./locale/en.js": () => import("./en-4402d6fc.js"), "./locale/eo.js": () => import("./eo-88fabe1e.js"), "./locale/es-do.js": () => import("./es-do-87819225.js"), "./locale/es-mx.js": () => import("./es-mx-2c869e17.js"), "./locale/es-pr.js": () => import("./es-pr-a26a14dd.js"), "./locale/es-us.js": () => import("./es-us-331d8222.js"), "./locale/es.js": () => import("./es-feece263.js"), "./locale/et.js": () => import("./et-d23e7261.js"), "./locale/eu.js": () => import("./eu-380df99c.js"), "./locale/fa.js": () => import("./fa-b610505f.js"), "./locale/fi.js": () => import("./fi-3cc21945.js"), "./locale/fo.js": () => import("./fo-3b8023fe.js"), "./locale/fr-ca.js": () => import("./fr-ca-ff6a4f8b.js"), "./locale/fr-ch.js": () => import("./fr-ch-92268328.js"), "./locale/fr.js": () => import("./fr-40518da4.js"), "./locale/fy.js": () => import("./fy-361ad49e.js"), "./locale/ga.js": () => import("./ga-519a8e72.js"), "./locale/gd.js": () => import("./gd-26c83050.js"), "./locale/gl.js": () => import("./gl-65041ad5.js"), "./locale/gom-latn.js": () => import("./gom-latn-e9938c45.js"), "./locale/gu.js": () => import("./gu-efa6d9e1.js"), "./locale/he.js": () => import("./he-b78b26e0.js"), "./locale/hi.js": () => import("./hi-2cbc1627.js"), "./locale/hr.js": () => import("./hr-f6156238.js"), "./locale/ht.js": () => import("./ht-38005251.js"), "./locale/hu.js": () => import("./hu-ac9cbdcf.js"), "./locale/hy-am.js": () => import("./hy-am-8dab098b.js"), "./locale/id.js": () => import("./id-0c629df1.js"), "./locale/is.js": () => import("./is-eaa7bac7.js"), "./locale/it-ch.js": () => import("./it-ch-aa2948f8.js"), "./locale/it.js": () => import("./it-0564c3b3.js"), "./locale/ja.js": () => import("./ja-535140c8.js"), "./locale/jv.js": () => import("./jv-3f46b8e5.js"), "./locale/ka.js": () => import("./ka-46193dc3.js"), "./locale/kk.js": () => import("./kk-a81539a4.js"), "./locale/km.js": () => import("./km-4611a383.js"), "./locale/kn.js": () => import("./kn-df74d568.js"), "./locale/ko.js": () => import("./ko-c5e44d0b.js"), "./locale/ku.js": () => import("./ku-0102e5f4.js"), "./locale/ky.js": () => import("./ky-b17c873e.js"), "./locale/lb.js": () => import("./lb-ffea2b3b.js"), "./locale/lo.js": () => import("./lo-7879a6f3.js"), "./locale/lt.js": () => import("./lt-6972ef65.js"), "./locale/lv.js": () => import("./lv-42333dcb.js"), "./locale/me.js": () => import("./me-a6d6a8b3.js"), "./locale/mi.js": () => import("./mi-73530079.js"), "./locale/mk.js": () => import("./mk-9d5d2706.js"), "./locale/ml.js": () => import("./ml-033d6470.js"), "./locale/mn.js": () => import("./mn-366c0159.js"), "./locale/mr.js": () => import("./mr-ea838099.js"), "./locale/ms-my.js": () => import("./ms-my-bca12643.js"), "./locale/ms.js": () => import("./ms-b302d09b.js"), "./locale/mt.js": () => import("./mt-505e640c.js"), "./locale/my.js": () => import("./my-fe1c5ba5.js"), "./locale/nb.js": () => import("./nb-9c51b2e5.js"), "./locale/ne.js": () => import("./ne-a4d1cfde.js"), "./locale/nl-be.js": () => import("./nl-be-cfbebe18.js"), "./locale/nl.js": () => import("./nl-741a608a.js"), "./locale/nn.js": () => import("./nn-63ab0b5c.js"), "./locale/oc-lnc.js": () => import("./oc-lnc-fefd5dc2.js"), "./locale/pa-in.js": () => import("./pa-in-fd856c0f.js"), "./locale/pl.js": () => import("./pl-b934ca56.js"), "./locale/pt-br.js": () => import("./pt-br-69eff377.js"), "./locale/pt.js": () => import("./pt-4a9ccd73.js"), "./locale/rn.js": () => import("./rn-d45a14ba.js"), "./locale/ro.js": () => import("./ro-761a005e.js"), "./locale/ru.js": () => import("./ru-f24be6ec.js"), "./locale/rw.js": () => import("./rw-de6c242a.js"), "./locale/sd.js": () => import("./sd-12a5817f.js"), "./locale/se.js": () => import("./se-76779333.js"), "./locale/si.js": () => import("./si-7ebff6af.js"), "./locale/sk.js": () => import("./sk-a71a41f6.js"), "./locale/sl.js": () => import("./sl-d676f743.js"), "./locale/sq.js": () => import("./sq-2e3e2b5d.js"), "./locale/sr-cyrl.js": () => import("./sr-cyrl-c3e7c82a.js"), "./locale/sr.js": () => import("./sr-128e65ff.js"), "./locale/ss.js": () => import("./ss-5d4d88da.js"), "./locale/sv-fi.js": () => import("./sv-fi-e638cc07.js"), "./locale/sv.js": () => import("./sv-d65a9ef7.js"), "./locale/sw.js": () => import("./sw-132fc9c2.js"), "./locale/ta.js": () => import("./ta-201325a8.js"), "./locale/te.js": () => import("./te-2c455f7f.js"), "./locale/tet.js": () => import("./tet-c0976da8.js"), "./locale/tg.js": () => import("./tg-35a0b3a4.js"), "./locale/th.js": () => import("./th-47d91211.js"), "./locale/tk.js": () => import("./tk-0dde380d.js"), "./locale/tl-ph.js": () => import("./tl-ph-d3d4c3c0.js"), "./locale/tlh.js": () => import("./tlh-e1a93d7c.js"), "./locale/tr.js": () => import("./tr-18e46597.js"), "./locale/tzl.js": () => import("./tzl-9d0e6399.js"), "./locale/tzm-latn.js": () => import("./tzm-latn-c6bbc760.js"), "./locale/tzm.js": () => import("./tzm-871f218f.js"), "./locale/ug-cn.js": () => import("./ug-cn-55414932.js"), "./locale/uk.js": () => import("./uk-fa9b3534.js"), "./locale/ur.js": () => import("./ur-30835063.js"), "./locale/uz-latn.js": () => import("./uz-latn-9e21d995.js"), "./locale/uz.js": () => import("./uz-8db186a9.js"), "./locale/vi.js": () => import("./vi-9ebd6c36.js"), "./locale/x-pseudo.js": () => import("./x-pseudo-44db4675.js"), "./locale/yo.js": () => import("./yo-5a826d8d.js"), "./locale/zh-cn.js": () => import("./zh-cn-d5a0bee3.js"), "./locale/zh-hk.js": () => import("./zh-hk-0954a608.js"), "./locale/zh-tw.js": () => import("./zh-tw-9f2761a6.js"), "./locale/zh.js": () => import("./zh-2e139021.js") })).map(
    ([t, o]) => {
      var a;
      return [(a = t.match(/([\w-]*)\.js$/)) == null ? void 0 : a[1], o];
    }
  )
), zr = { class: "flex justify-between items-center px-2 py-1.5" }, Wr = { class: "flex-shrink-0" }, Kr = { class: "inline-flex rounded-full" }, Gr = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Zr = ["d"], qr = { class: "px-1.5 space-x-1.5 flex flex-1" }, Jr = { class: "flex-1 flex rounded-md" }, Xr = ["textContent"], Qr = { class: "flex-1 flex rounded-md" }, eo = ["textContent"], to = { class: "flex-shrink-0" }, ro = { class: "inline-flex rounded-full" }, oo = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, ao = ["d"], Ge = /* @__PURE__ */ ue({
  __name: "Header",
  props: {
    panel: {},
    calendar: {}
  },
  setup(t) {
    return (o, a) => (z(), Z("div", zr, [
      A("div", Wr, [
        pe(A("span", Kr, [
          A("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[0] || (a[0] = (e) => o.panel.calendar ? o.calendar.onPrevious() : o.calendar.onPreviousYear())
          }, [
            (z(), Z("svg", Gr, [
              A("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: o.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
              }, null, 8, Zr)
            ]))
          ])
        ], 512), [
          [ve, o.panel.calendar || o.panel.year]
        ])
      ]),
      A("div", qr, [
        A("span", Jr, [
          A("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[1] || (a[1] = (e) => o.calendar.openMonth()),
            textContent: ae(o.calendar.month)
          }, null, 8, Xr)
        ]),
        A("span", Qr, [
          A("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[2] || (a[2] = (e) => o.calendar.openYear()),
            textContent: ae(o.calendar.year)
          }, null, 8, eo)
        ])
      ]),
      A("div", to, [
        pe(A("span", ro, [
          A("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[3] || (a[3] = (e) => o.panel.calendar ? o.calendar.onNext() : o.calendar.onNextYear())
          }, [
            (z(), Z("svg", oo, [
              A("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: o.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
              }, null, 8, ao)
            ]))
          ])
        ], 512), [
          [ve, o.panel.calendar || o.panel.year]
        ])
      ])
    ]));
  }
}), Ft = Symbol("isBetweenRange"), Bt = Symbol(
  "betweenRangeClasses"
), Nt = Symbol("datepickerClasses"), Rt = Symbol("atMouseOver"), It = Symbol("setToToday"), Ht = Symbol("setToYesterday"), Ut = Symbol("setToLastDay"), zt = Symbol("setToThisMonth"), Wt = Symbol("setToLastMonth"), Kt = Symbol("setToCustomShortcut"), no = {
  key: 0,
  class: "relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/[.1] order-last sm:order-none dark:border-vtd-secondary-700/[1] sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0"
}, so = {
  key: 0,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, lo = ["onClick", "textContent"], uo = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, pt = /* @__PURE__ */ ue({
  __name: "Shortcut",
  props: {
    shortcuts: { type: [Boolean, Function] },
    close: { type: Function },
    asRange: { type: Boolean },
    asSingle: { type: Boolean },
    i18n: {}
  },
  setup(t) {
    const o = t, a = $e(It), e = $e(Ht), s = $e(Ut), n = $e(zt), h = $e(Wt), l = $e(Kt), m = le(() => typeof o.shortcuts == "function" ? o.shortcuts() : !1);
    return (p, w) => o.asRange && o.asSingle || o.asRange && !o.asSingle ? (z(), Z("div", no, [
      m.value ? (z(), Z("ol", so, [
        (z(!0), Z(we, null, We(m.value, (g, O) => (z(), Z("li", { key: O }, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: Ce((V) => se(l)(g, p.close), ["prevent"]),
            textContent: ae(g.label)
          }, null, 8, lo)
        ]))), 128))
      ])) : (z(), Z("ol", uo, [
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[0] || (w[0] = Ce((g) => se(a)(p.close), ["prevent"]))
          }, ae(o.i18n.today), 1)
        ]),
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[1] || (w[1] = Ce((g) => se(e)(p.close), ["prevent"]))
          }, ae(o.i18n.yesterday), 1)
        ]),
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[2] || (w[2] = Ce((g) => se(s)(7, p.close), ["prevent"]))
          }, ae(o.i18n.past(7)), 1)
        ]),
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[3] || (w[3] = Ce((g) => se(s)(30, p.close), ["prevent"]))
          }, ae(o.i18n.past(30)), 1)
        ]),
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[4] || (w[4] = Ce((g) => se(n)(p.close), ["prevent"]))
          }, ae(o.i18n.currentMonth), 1)
        ]),
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[5] || (w[5] = Ce((g) => se(h)(p.close), ["prevent"]))
          }, ae(o.i18n.pastMonth), 1)
        ])
      ]))
    ])) : ye("", !0);
  }
}), io = { class: "grid grid-cols-7 gap-y-0.5 my-1" }, co = {
  key: 0,
  class: "col-span-7 border-b relative dark:border-vtd-secondary-600"
}, fo = { class: "absolute -left-2 top-1/2 -translate-y-2/4 bg-white dark:bg-vtd-secondary-800 text-[8px] pr-2 text-vtd-secondary-400" }, po = ["data-tooltip"], vo = ["disabled", "data-date", "onClick", "onMouseenter", "onFocusin", "textContent"], Ze = /* @__PURE__ */ ue({
  __name: "Calendar",
  props: {
    calendar: {},
    weeks: {},
    weekNumber: { type: Boolean },
    asRange: { type: Boolean }
  },
  emits: ["updateDate"],
  setup(t, { emit: o }) {
    const a = $e(Ft), e = $e(Bt), s = $e(Nt), n = $e(Rt);
    return (h, l) => (z(), Z("div", io, [
      ee(Xt, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: Fe(() => [
          (z(!0), Z(we, null, We(h.calendar.date(), (m, p) => (z(), Z(we, { key: p }, [
            p % 7 === 0 && h.weekNumber ? (z(), Z("div", co, [
              A("span", fo, ae(m.week()), 1)
            ])) : ye("", !0),
            A("div", {
              class: Ve(["relative", { "vtd-tooltip": h.asRange && m.duration() }]),
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
                  se(a)(m) || m.hovered() ? (z(), Z("span", {
                    key: 0,
                    class: Ve(["absolute bg-vtd-primary-100 bg-opacity-60 dark:bg-vtd-secondary-700 dark:bg-opacity-50", se(e)(m)])
                  }, null, 2)) : ye("", !0)
                ]),
                _: 2
              }, 1024),
              A("button", {
                type: "button",
                class: Ve(["vtd-datepicker-date relative w-[2.7rem] h-[2.7rem] lg:w-10 lg:h-10 flex justify-center items-center text-xs 2xl:text-sm", [
                  se(s)(m),
                  h.asRange ? "transition-all" : "transition-colors"
                ]]),
                disabled: m.disabled || m.inRange(),
                "data-date": m.toDate(),
                onClick: (w) => o("updateDate", m),
                onMouseenter: (w) => se(n)(m),
                onFocusin: (w) => se(n)(m),
                textContent: ae(m.date())
              }, null, 42, vo)
            ], 10, po)
          ], 64))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), mo = { class: "flex flex-wrap" }, ho = { class: "flex rounded-md mt-1.5" }, yo = ["onClick", "textContent"], qe = /* @__PURE__ */ ue({
  __name: "Year",
  props: {
    years: {}
  },
  emits: ["updateYear"],
  setup(t, { emit: o }) {
    return (a, e) => (z(), Z("div", mo, [
      (z(!0), Z(we, null, We(a.years, (s, n) => (z(), Z("div", {
        key: n,
        class: "w-1/2 px-0.5"
      }, [
        A("span", ho, [
          A("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            onClick: (h) => o("updateYear", s),
            textContent: ae(s)
          }, null, 8, yo)
        ])
      ]))), 128))
    ]));
  }
}), bo = { class: "grid grid-cols-7 py-2 mt-0.5" }, go = ["textContent"], Je = /* @__PURE__ */ ue({
  __name: "Week",
  props: {
    weeks: {}
  },
  setup(t) {
    return (o, a) => (z(), Z("div", bo, [
      (z(!0), Z(we, null, We(o.weeks, (e, s) => (z(), Z("div", {
        key: s,
        class: "text-vtd-secondary-500 text-xs 2xl:text-sm tracking-wide font-medium text-center cursor-default dark:text-vtd-secondary-400"
      }, [
        A("span", {
          textContent: ae(e)
        }, null, 8, go)
      ]))), 128))
    ]));
  }
}), xo = { class: "flex flex-wrap mt-1.5" }, wo = { class: "flex rounded-md mt-1.5" }, ko = ["onClick", "textContent"], Xe = /* @__PURE__ */ ue({
  __name: "Month",
  props: {
    months: {}
  },
  emits: ["updateMonth"],
  setup(t, { emit: o }) {
    return (a, e) => (z(), Z("div", xo, [
      (z(!0), Z(we, null, We(a.months, (s, n) => (z(), Z("div", {
        key: n,
        class: "w-1/2 px-0.5"
      }, [
        A("span", wo, [
          A("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            onClick: (h) => o("updateMonth", n),
            textContent: ae(s)
          }, null, 8, ko)
        ])
      ]))), 128))
    ]));
  }
});
function $o() {
  const t = (l) => {
    const m = [], p = l.localeData().firstDayOfWeek();
    for (let w = 0; w <= l.date(0 - p).day(); w++)
      m.push(l.date(0).subtract(w, "day"));
    return m.sort((w, g) => w.date() - g.date());
  };
  return {
    usePreviousDate: t,
    useCurrentDate: (l) => Array.from(
      {
        length: l.daysInMonth()
      },
      (m, p) => l.date(p + 1)
    ),
    useNextDate: (l) => {
      const m = [];
      for (let p = 1; p <= 42 - (t(l).length + l.daysInMonth()); p++)
        m.push(l.date(p).month(l.month()).add(1, "month"));
      return m;
    },
    useDisableDate: (l, { disableDate: m }) => typeof m == "function" ? m(l.toDate()) : !1,
    useBetweenRange: (l, { previous: m, next: p }) => {
      const w = m.isAfter(p, "date") ? "(]" : "[)";
      return !!(l.isBetween(m, p, "date", w) && !l.off);
    },
    useToValueFromString: (l, { formatter: m }) => l.format(m.date),
    useToValueFromArray: ({ previous: l, next: m }, {
      formatter: p,
      separator: w
    }) => `${l.format(p.date)}${w}${m.format(
      p.date
    )}`
  };
}
function jo() {
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
const Mo = ["disabled", "placeholder"], So = { class: "absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden" }, Do = ["disabled"], _o = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Oo = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, Po = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, Vo = { class: "flex flex-wrap lg:flex-nowrap" }, To = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, Ao = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, Yo = /* @__PURE__ */ A("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), Co = [
  Yo
], Eo = { class: "px-0.5 sm:px-2" }, Lo = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, Fo = { class: "px-0.5 sm:px-2" }, Bo = { key: 0 }, No = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, Ro = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, Io = ["disabled", "onClick", "textContent"], Ho = ["onClick", "textContent"], Uo = {
  key: 1,
  class: "sm:hidden"
}, zo = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, Wo = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, Ko = ["onClick", "textContent"], Go = {
  key: 1,
  class: "flex"
}, Zo = { class: "bg-white rounded-lg shadow-sm border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]" }, qo = { class: "flex flex-wrap lg:flex-nowrap" }, Jo = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, Xo = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, Qo = /* @__PURE__ */ A("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), ea = [
  Qo
], ta = { class: "px-0.5 sm:px-2" }, ra = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, oa = { class: "px-0.5 sm:px-2" }, aa = { key: 0 }, na = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, sa = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, la = ["disabled", "textContent"], ua = /* @__PURE__ */ ue({
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
    weekNumber: { type: Boolean, default: !1 },
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
      useCurrentDate: s,
      useDisableDate: n,
      useBetweenRange: h,
      useNextDate: l,
      usePreviousDate: m,
      useToValueFromArray: p,
      useToValueFromString: w
    } = $o(), { useVisibleViewport: g } = jo();
    d.extend(Tr), d.extend(Yr), d.extend(Er), d.extend(Fr), d.extend(Nr), d.extend(Ir), d.extend(Ur);
    const O = J(null), V = J(null), B = J(null), x = J(""), P = J(null), k = J(""), S = J([]), y = J([]), N = J(null), L = J(null), i = vt({
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
    }), b = le(() => r.value.weeks), I = le(() => r.value.months), T = le(() => {
      const { previous: v, next: f, year: c } = se(r);
      return {
        previous: {
          date: () => m(v).concat(s(v)).concat(l(v)).map((u) => (Object.assign(u, {
            today: u.isToday(),
            active: v.month() === u.month(),
            off: v.month() !== u.month(),
            sunday: u.day() === 0,
            disabled: n(u, e) && !_(u),
            inRange: () => {
              if (e.asSingle && !e.useRange)
                return v.month() !== u.month();
            },
            hovered: () => $() && S.value.length > 1 ? (u.isBetween(
              S.value[0],
              S.value[1],
              "date",
              "()"
            ) || u.isBetween(
              S.value[1],
              S.value[0],
              "date",
              "(]"
            )) && v.month() === u.month() : !1,
            duration: () => !1
          }), u)),
          month: v && v.format(e.formatter.month),
          year: v && v.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (u, j) => c.previous + j
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
            i.previous.month = !i.previous.month, i.previous.year = !1, i.previous.calendar = !i.previous.month;
          },
          setMonth: (u) => {
            r.value.previous = v.month(u), i.previous.month = !i.previous.month, i.previous.year = !1, i.previous.calendar = !i.previous.month, a("selectMonth", r.value.previous), Ie(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.next = r.value.next.year();
            });
          },
          openYear: () => {
            i.previous.year = !i.previous.year, i.previous.month = !1, i.previous.calendar = !i.previous.year;
          },
          setYear: (u) => {
            r.value.previous = v.year(u), i.previous.year = !i.previous.year, i.previous.calendar = !i.previous.year, a("selectYear", r.value.previous), Ie(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            });
          }
        },
        next: {
          date: () => m(f).concat(s(f)).concat(l(f)).map((u) => (Object.assign(u, {
            today: u.isToday(),
            active: f.month() === u.month(),
            off: f.month() !== u.month(),
            sunday: u.day() === 0,
            disabled: n(u, e) && !_(u),
            inRange: () => {
              if (e.asSingle && !e.useRange)
                return f.month() !== u.month();
            },
            hovered: () => S.value.length > 1 ? (u.isBetween(
              S.value[0],
              S.value[1],
              "date",
              "()"
            ) || u.isBetween(
              S.value[1],
              S.value[0],
              "date",
              "(]"
            )) && f.month() === u.month() : !1,
            duration: () => !1
          }), u)),
          month: f && f.format(e.formatter.month),
          year: f && f.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (u, j) => c.next + j
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
            i.next.month = !i.next.month, i.next.year = !1, i.next.calendar = !i.next.month;
          },
          setMonth: (u) => {
            r.value.next = f.month(u), i.next.month = !i.next.month, i.next.year = !1, i.next.calendar = !i.next.month, a("selectRightMonth", r.value.next), Ie(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(
                1,
                "month"
              )), r.value.year.previous = r.value.previous.year();
            });
          },
          openYear: () => {
            i.next.year = !i.next.year, i.next.month = !1, i.next.calendar = !i.next.year;
          },
          setYear: (u) => {
            r.value.next = f.year(u), i.next.year = !i.next.year, i.next.month = !1, i.next.calendar = !i.next.year, a("selectRightYear", r.value.next), Ie(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(
                1,
                "month"
              )), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            });
          }
        }
      };
    }), C = J(!1);
    setTimeout(() => {
      C.value = !0;
    }, 250);
    function K() {
      return d().localeData().firstDayOfWeek();
    }
    function q(v) {
      const f = [...v], c = f.shift();
      return [...f, c];
    }
    function $() {
      return !e.useRange && !e.asSingle ? !0 : !e.useRange && e.asSingle ? !1 : e.useRange && !e.asSingle ? !0 : !!(e.useRange && e.asSingle);
    }
    function _(v) {
      if (e.disableInRange || k.value === "")
        return !1;
      let f, c;
      if (Array.isArray(e.modelValue)) {
        const [u, j] = e.modelValue;
        f = u, c = j;
      } else if (typeof e.modelValue == "object") {
        if (e.modelValue) {
          const [u, j] = Object.values(e.modelValue);
          f = u, c = j;
        }
      } else {
        const [u, j] = e.modelValue.split(e.separator);
        f = u, c = j;
      }
      return v.isBetween(
        d(f, e.formatter.date, !0),
        d(c, e.formatter.date, !0),
        "date",
        "[]"
      );
    }
    function M() {
      N.value = null, L.value = null, S.value = [], P.value = null;
    }
    function Y() {
      if (k.value = "", Array.isArray(e.modelValue))
        a("update:modelValue", []);
      else if (typeof e.modelValue == "object") {
        const v = {}, [f, c] = Object.keys(e.modelValue);
        v[f] = "", v[c] = "", a("update:modelValue", v);
      } else
        a("update:modelValue", "");
      y.value = [], V.value && V.value.focus();
    }
    o({ clearPicker: Y });
    function D() {
      if ($()) {
        const [v, f] = k.value.split(e.separator), [c, u] = [
          d(v, e.formatter.date, !0),
          d(f, e.formatter.date, !0)
        ];
        if (c.isValid() && u.isValid())
          if (E(c), E(u), Array.isArray(e.modelValue))
            a("update:modelValue", [v, f]);
          else if (typeof e.modelValue == "object") {
            const j = {}, [F, W] = Object.keys(e.modelValue);
            j[F] = v, j[W] = f, a("update:modelValue", j);
          } else
            a(
              "update:modelValue",
              p(
                {
                  previous: c,
                  next: u
                },
                e
              )
            );
      } else {
        const v = d(k.value, e.formatter.date, !0);
        if (v.isValid())
          if (E(v), Array.isArray(e.modelValue))
            a("update:modelValue", [k.value]);
          else if (typeof e.modelValue == "object") {
            const f = {}, [c] = Object.keys(e.modelValue);
            f[c] = k.value, a("update:modelValue", f);
          } else
            a("update:modelValue", k.value);
      }
    }
    function E(v, f) {
      if ($())
        if (N.value)
          if (L.value = v, e.autoApply) {
            v.isBefore(N.value) ? k.value = p(
              {
                previous: v,
                next: N.value
              },
              e
            ) : k.value = p(
              {
                previous: N.value,
                next: v
              },
              e
            );
            const [c, u] = k.value.split(e.separator);
            if (Array.isArray(e.modelValue))
              a("update:modelValue", [
                d(c, e.formatter.date, !0).format(e.formatter.date),
                d(u, e.formatter.date, !0).format(e.formatter.date)
              ]);
            else if (typeof e.modelValue == "object") {
              const j = {}, [F, W] = Object.keys(e.modelValue);
              j[F] = c, j[W] = u, a("update:modelValue", j);
            } else
              a(
                "update:modelValue",
                p(
                  {
                    previous: d(c, e.formatter.date, !0),
                    next: d(u, e.formatter.date, !0)
                  },
                  e
                )
              );
            f && f(), y.value = [], d(c, e.formatter.date, !0).isSame(
              d(u, e.formatter.date, !0),
              "month"
            ) || (r.value.previous = d(c, e.formatter.date, !0), r.value.next = d(u, e.formatter.date, !0)), M();
          } else {
            N.value.isAfter(v, "month") ? y.value = [v, N.value] : y.value = [N.value, v];
            const [c, u] = y.value;
            c.isSame(u, "month") || (r.value.previous = c, r.value.next = u), M();
          }
        else
          y.value = [], N.value = v, P.value = v, S.value.push(v), y.value.push(v), r.value.previous = v, r.value.next.isSame(v, "month") && (r.value.previous = r.value.next, r.value.next = v.add(1, "month"));
      else if (e.autoApply) {
        if (k.value = w(v, e), Array.isArray(e.modelValue))
          a("update:modelValue", [k.value]);
        else if (typeof e.modelValue == "object") {
          const c = {}, [u] = Object.keys(e.modelValue);
          c[u] = k.value, a("update:modelValue", c);
        } else
          a("update:modelValue", k.value);
        f && f(), y.value = [], M();
      } else
        y.value = [v], M();
    }
    function R(v) {
      if (y.value.length < 1)
        return !1;
      let f;
      if ($()) {
        const [c, u] = y.value;
        u.isBefore(c) ? f = p(
          {
            previous: u,
            next: c
          },
          e
        ) : f = p(
          {
            previous: c,
            next: u
          },
          e
        );
      } else {
        const [c] = y.value;
        f = c;
      }
      if ($()) {
        const [c, u] = f.split(e.separator);
        if (Array.isArray(e.modelValue))
          a("update:modelValue", [
            d(c, e.formatter.date, !0).format(e.formatter.date),
            d(u, e.formatter.date, !0).format(e.formatter.date)
          ]);
        else if (typeof e.modelValue == "object") {
          const j = {}, [F, W] = Object.keys(e.modelValue);
          j[F] = c, j[W] = u, a("update:modelValue", j);
        } else
          a(
            "update:modelValue",
            p(
              {
                previous: d(c, e.formatter.date, !0),
                next: d(u, e.formatter.date, !0)
              },
              e
            )
          );
        k.value = f;
      } else if (k.value = f.format(e.formatter.date), Array.isArray(e.modelValue))
        a("update:modelValue", [k.value]);
      else if (typeof e.modelValue == "object") {
        const c = {}, [u] = Object.keys(e.modelValue);
        c[u] = k.value, a("update:modelValue", c);
      } else
        a("update:modelValue", k.value);
      v && v();
    }
    function G(v) {
      if (!$())
        return !1;
      if (N.value)
        S.value = [N.value, v];
      else
        return S.value = [], !1;
    }
    function Q(v) {
      if (N.value && e.autoApply)
        return !1;
      let f, c;
      if (S.value.length > 1) {
        const [u, j] = S.value;
        f = d(u, e.formatter.date, !0), c = d(j, e.formatter.date, !0);
      } else if (Array.isArray(e.modelValue))
        if (e.autoApply) {
          const [u, j] = e.modelValue;
          f = u && d(u, e.formatter.date, !0), c = j && d(j, e.formatter.date, !0);
        } else {
          const [u, j] = y.value;
          f = d(u, e.formatter.date, !0), c = d(j, e.formatter.date, !0);
        }
      else if (typeof e.modelValue == "object")
        if (e.autoApply) {
          if (e.modelValue) {
            const [u, j] = Object.values(e.modelValue);
            f = u && d(u, e.formatter.date, !0), c = j && d(j, e.formatter.date, !0);
          }
        } else {
          const [u, j] = y.value;
          f = d(u, e.formatter.date, !0), c = d(j, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        const [u, j] = e.modelValue ? e.modelValue.split(e.separator) : [null, null];
        f = u && d(u, e.formatter.date, !0), c = j && d(j, e.formatter.date, !0);
      } else {
        const [u, j] = y.value;
        f = d(u, e.formatter.date, !0), c = d(j, e.formatter.date, !0);
      }
      return f && c ? h(v, {
        previous: f,
        next: c
      }) : !1;
    }
    function te(v) {
      const { today: f, active: c, off: u, disabled: j } = v;
      let F, W, de;
      if ($())
        if (Array.isArray(e.modelValue))
          if (P.value) {
            const [U, X] = S.value;
            W = U && d(U, e.formatter.date, !0), de = X && d(X, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [U, X] = e.modelValue;
            W = U && d(U, e.formatter.date, !0), de = X && d(X, e.formatter.date, !0);
          } else {
            const [U, X] = y.value;
            W = U && d(U, e.formatter.date, !0), de = X && d(X, e.formatter.date, !0);
          }
        else if (typeof e.modelValue == "object")
          if (P.value) {
            const [U, X] = S.value;
            W = U && d(U, e.formatter.date, !0), de = X && d(X, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [U, X] = e.modelValue ? Object.values(e.modelValue) : [null, null];
            W = U && d(U, e.formatter.date, !0), de = X && d(X, e.formatter.date, !0);
          } else {
            const [U, X] = y.value;
            W = U && d(U, e.formatter.date, !0), de = X && d(X, e.formatter.date, !0);
          }
        else if (P.value) {
          const [U, X] = S.value;
          W = U && d(U, e.formatter.date, !0), de = X && d(X, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [U, X] = e.modelValue ? e.modelValue.split(e.separator) : [null, null];
          W = U && d(U, e.formatter.date, !0), de = X && d(X, e.formatter.date, !0);
        } else {
          const [U, X] = y.value;
          W = U && d(U, e.formatter.date, !0), de = X && d(X, e.formatter.date, !0);
        }
      else if (Array.isArray(e.modelValue))
        if (e.autoApply) {
          if (e.modelValue.length > 0) {
            const [U] = e.modelValue;
            W = d(U, e.formatter.date, !0);
          }
        } else {
          const [U] = y.value;
          W = U && d(U, e.formatter.date, !0);
        }
      else if (typeof e.modelValue == "object")
        if (e.autoApply) {
          if (e.modelValue) {
            const [U] = Object.values(e.modelValue);
            W = d(U, e.formatter.date, !0);
          }
        } else {
          const [U] = y.value;
          W = U && d(U, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        if (e.modelValue) {
          const [U] = e.modelValue.split(e.separator);
          W = d(U, e.formatter.date, !0);
        }
      } else {
        const [U] = y.value;
        W = U && d(U, e.formatter.date, !0);
      }
      return c && (F = f ? "text-vtd-primary-500 font-semibold dark:text-vtd-primary-400 rounded-full focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50" : j ? "text-vtd-secondary-600 font-normal disabled:text-vtd-secondary-500 disabled:cursor-not-allowed rounded-full" : v.isBetween(W, de, "date", "()") ? "text-vtd-secondary-700 font-medium dark:text-vtd-secondary-100 rounded-full" : "text-vtd-secondary-600 font-medium dark:text-vtd-secondary-200 rounded-full"), u && (F = "text-vtd-secondary-400 font-light disabled:cursor-not-allowed"), W && de && !u ? (v.isSame(W, "date") && (F = de.isAfter(W, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed", W.isSame(de, "date") && (F = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed")), v.isSame(de, "date") && (F = de.isAfter(W, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed", W.isSame(de, "date") && (F = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"))) : W && v.isSame(W, "date") && !u && (F = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"), F;
    }
    function re(v) {
      let f, c, u;
      if (f = "", !$())
        return f;
      if (Array.isArray(e.modelValue))
        if (S.value.length > 1) {
          const [j, F] = S.value;
          c = j && d(j, e.formatter.date, !0), u = F && d(F, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [j, F] = e.modelValue;
          c = j && d(j, e.formatter.date, !0), u = F && d(F, e.formatter.date, !0);
        } else {
          const [j, F] = y.value;
          c = j && d(j, e.formatter.date, !0), u = F && d(F, e.formatter.date, !0);
        }
      else if (typeof e.modelValue == "object")
        if (S.value.length > 1) {
          const [j, F] = S.value;
          c = j && d(j, e.formatter.date, !0), u = F && d(F, e.formatter.date, !0);
        } else if (e.autoApply) {
          if (e.modelValue) {
            const [j, F] = Object.values(e.modelValue);
            c = j && d(j, e.formatter.date, !0), u = F && d(F, e.formatter.date, !0);
          }
        } else {
          const [j, F] = y.value;
          c = j && d(j, e.formatter.date, !0), u = F && d(F, e.formatter.date, !0);
        }
      else if (S.value.length > 1) {
        const [j, F] = S.value;
        c = j && d(j, e.formatter.date, !0), u = F && d(F, e.formatter.date, !0);
      } else if (e.autoApply) {
        const [j, F] = e.modelValue ? e.modelValue.split(e.separator) : [null, null];
        c = j && d(j, e.formatter.date, !0), u = F && d(F, e.formatter.date, !0);
      } else {
        const [j, F] = y.value;
        c = j && d(j, e.formatter.date, !0), u = F && d(F, e.formatter.date, !0);
      }
      return c && u && (v.isSame(c, "date") ? (u.isBefore(c) && (f += " rounded-r-full inset-0"), c.isBefore(u) && (f += " rounded-l-full inset-0")) : v.isSame(u, "date") ? (u.isBefore(c) && (f += " rounded-l-full inset-0"), c.isBefore(u) && (f += " rounded-r-full inset-0")) : f += " inset-0"), f;
    }
    function ie(v, f) {
      r.value.previous = d(v, e.formatter.date, !0), r.value.next = d(f, e.formatter.date, !0), (d.duration(r.value.next.diff(r.value.previous)).get("months") === 2 || d.duration(r.value.next.diff(r.value.previous)).get("months") === 1 && d.duration(r.value.next.diff(r.value.previous)).get("days") === 7) && (r.value.next = r.value.next.subtract(1, "month")), (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month"));
    }
    function ce(v, f) {
      if ($())
        if (e.autoApply) {
          if (Array.isArray(e.modelValue))
            a("update:modelValue", [v, f]);
          else if (typeof e.modelValue == "object") {
            const c = {}, [u, j] = Object.keys(e.modelValue);
            c[u] = v, c[j] = f, a("update:modelValue", c);
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
          y.value = [
            d(v, e.formatter.date, !0),
            d(f, e.formatter.date, !0)
          ];
      else if (e.autoApply) {
        if (Array.isArray(e.modelValue))
          a("update:modelValue", [v]);
        else if (typeof e.modelValue == "object") {
          const c = {}, [u] = Object.keys(e.modelValue);
          c[u] = v, a("update:modelValue", c);
        } else
          a("update:modelValue", v);
        k.value = v;
      } else
        y.value = [
          d(v, e.formatter.date, !0),
          d(f, e.formatter.date, !0)
        ];
      ie(v, f);
    }
    function be(v) {
      const f = d().format(e.formatter.date), c = d().format(e.formatter.date);
      ce(f, c), v && v();
    }
    function ge(v) {
      const f = d().subtract(1, "day").format(e.formatter.date), c = d().subtract(1, "day").format(e.formatter.date);
      ce(f, c), v && v();
    }
    function he(v, f) {
      const c = d().subtract(v - 1, "day").format(e.formatter.date), u = d().format(e.formatter.date);
      ce(c, u), f && f();
    }
    function oe(v) {
      const f = d().date(1).format(e.formatter.date), c = d().date(d().daysInMonth()).format(e.formatter.date);
      ce(f, c), v && v();
    }
    function fe(v) {
      const f = d().date(1).subtract(1, "month").format(e.formatter.date), c = d().date(0).format(e.formatter.date);
      ce(f, c), v && v();
    }
    function xe(v, f) {
      const [c, u] = v.atClick(), j = d(c).format(e.formatter.date), F = d(u).format(e.formatter.date);
      ce(j, F), f && f();
    }
    Qt(
      () => y.value,
      (v) => {
        v.length > 0 && (i.previous.calendar = !0, i.previous.month = !1, i.previous.year = !1, i.next.calendar = !0, i.next.month = !1, i.next.year = !1);
      }
    ), je(() => {
      e.placeholder ? x.value = e.placeholder : $() ? x.value = `${e.formatter.date}${e.separator}${e.formatter.date}` : x.value = e.formatter.date;
    }), je(() => {
      const v = e.i18n, f = e.modelValue;
      Ie(async () => {
        v in ft && (await ft[v](), d.locale(v));
        let c, u;
        if ($()) {
          if (Array.isArray(f)) {
            if (f.length > 0) {
              const [F, W] = f;
              c = d(F, e.formatter.date, !0), u = d(W, e.formatter.date, !0);
            }
          } else if (typeof f == "object") {
            if (!er(f))
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
              const [F, W] = Object.values(f);
              c = F && d(F, e.formatter.date, !0), u = W && d(W, e.formatter.date, !0);
            }
          } else if (f) {
            const [F, W] = f.split(e.separator);
            c = d(F, e.formatter.date, !0), u = d(W, e.formatter.date, !0);
          }
          c && u ? (k.value = p(
            {
              previous: c,
              next: u
            },
            e
          ), u.isBefore(c, "month") ? (r.value.previous = u, r.value.next = c, r.value.year.previous = u.year(), r.value.year.next = c.year()) : u.isSame(c, "month") ? (r.value.previous = c, r.value.next = u.add(1, "month"), r.value.year.previous = c.year(), r.value.year.next = c.add(1, "year").year()) : (r.value.previous = c, r.value.next = u, r.value.year.previous = c.year(), r.value.year.next = u.year()), e.autoApply || (y.value = [c, u])) : (r.value.previous = d(e.startFrom), r.value.next = d(e.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
        } else {
          if (Array.isArray(f)) {
            if (f.length > 0) {
              const [F] = f;
              c = d(F, e.formatter.date, !0);
            }
          } else if (typeof f == "object") {
            if (f) {
              const [F] = Object.values(f);
              c = d(F, e.formatter.date, !0);
            }
          } else if (f.length) {
            const [F] = f.split(e.separator);
            c = d(F, e.formatter.date, !0);
          }
          c && c.isValid() ? (k.value = w(c, e), r.value.previous = c, r.value.next = c.add(1, "month"), r.value.year.previous = c.year(), r.value.year.next = c.add(1, "year").year(), e.autoApply || (y.value = [c])) : (r.value.previous = d(e.startFrom), r.value.next = d(e.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
        }
        const j = e.weekdaysSize === "min" ? d.weekdaysMin() : d.weekdaysShort();
        r.value.weeks = K() ? q(j) : j, r.value.months = e.formatter.month === "MMM" ? d.monthsShort() : d.months();
      });
    });
    function ke(v) {
      return v && B.value === null && (B.value = g(O.value)), v && B.value ? "place-right" : "place-left";
    }
    function Re(v) {
      return v && B.value === null && (B.value = g(O.value)), B.value ? "left-auto right-0" : "left-0 right-auto";
    }
    return ne(Ft, Q), ne(Bt, re), ne(Nt, te), ne(Rt, G), ne(It, be), ne(Ht, ge), ne(Ut, he), ne(zt, oe), ne(Wt, fe), ne(Kt, xe), (v, f) => e.noInput ? C.value ? (z(), Z("div", Go, [
      A("div", Zo, [
        A("div", qo, [
          e.shortcuts ? (z(), He(pt, {
            key: 0,
            shortcuts: e.shortcuts,
            "as-range": $(),
            "as-single": e.asSingle,
            i18n: e.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : ye("", !0),
          A("div", Jo, [
            $() && !e.asSingle ? (z(), Z("div", Xo, ea)) : ye("", !0),
            A("div", {
              class: Ve(["relative w-full lg:w-80", {
                "mb-3 sm:mb-0 sm:mr-2 md:w-1/2": $() && !e.asSingle
              }])
            }, [
              ee(Ge, {
                panel: i.previous,
                calendar: T.value.previous
              }, null, 8, ["panel", "calendar"]),
              A("div", ta, [
                pe(ee(Xe, {
                  months: I.value,
                  onUpdateMonth: T.value.previous.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [ve, i.previous.month]
                ]),
                pe(ee(qe, {
                  years: T.value.previous.years(),
                  onUpdateYear: T.value.previous.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [ve, i.previous.year]
                ]),
                pe(A("div", null, [
                  ee(Je, { weeks: b.value }, null, 8, ["weeks"]),
                  ee(Ze, {
                    calendar: T.value.previous,
                    weeks: b.value,
                    "as-range": $(),
                    "week-number": v.weekNumber,
                    onUpdateDate: f[2] || (f[2] = (c) => E(c))
                  }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
                ], 512), [
                  [ve, i.previous.calendar]
                ])
              ])
            ], 2),
            $() && !e.asSingle ? (z(), Z("div", ra, [
              ee(Ge, {
                "as-prev-or-next": "",
                panel: i.next,
                calendar: T.value.next
              }, null, 8, ["panel", "calendar"]),
              A("div", oa, [
                pe(ee(Xe, {
                  months: I.value,
                  onUpdateMonth: T.value.next.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [ve, i.next.month]
                ]),
                pe(ee(qe, {
                  "as-prev-or-next": "",
                  years: T.value.next.years(),
                  onUpdateYear: T.value.next.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [ve, i.next.year]
                ]),
                pe(A("div", null, [
                  ee(Je, { weeks: b.value }, null, 8, ["weeks"]),
                  ee(Ze, {
                    "as-prev-or-next": "",
                    calendar: T.value.next,
                    weeks: b.value,
                    "as-range": $(),
                    "week-number": v.weekNumber,
                    onUpdateDate: f[3] || (f[3] = (c) => E(c))
                  }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
                ], 512), [
                  [ve, i.next.calendar]
                ])
              ])
            ])) : ye("", !0)
          ])
        ]),
        e.autoApply ? ye("", !0) : (z(), Z("div", aa, [
          A("div", na, [
            A("div", sa, [
              A("button", {
                type: "button",
                class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                disabled: e.asSingle ? y.value.length < 1 : y.value.length < 2,
                onClick: f[4] || (f[4] = (c) => R()),
                textContent: ae(e.options.footer.apply)
              }, null, 8, la)
            ])
          ])
        ]))
      ])
    ])) : ye("", !0) : (z(), He(se(Ot), {
      key: 0,
      id: "vtd",
      as: "div",
      class: "relative w-full"
    }, {
      default: Fe(({ open: c }) => [
        e.overlay && !e.disabled ? (z(), He(se(_r), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : ye("", !0),
        ee(se(Dr), {
          as: "label",
          class: "relative block"
        }, {
          default: Fe(() => [
            it(v.$slots, "default", {
              value: k.value,
              placeholder: x.value,
              clear: Y
            }, () => [
              pe(A("input", tr({
                ref_key: "VtdInputRef",
                ref: V
              }, v.$attrs, {
                "onUpdate:modelValue": f[0] || (f[0] = (u) => k.value = u),
                type: "text",
                class: ["relative block w-full", [
                  e.disabled ? "cursor-default opacity-50" : "opacity-100",
                  v.inputClasses || "pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20"
                ]],
                disabled: e.disabled,
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other",
                placeholder: x.value,
                onKeyup: D
              }), null, 16, Mo), [
                [rr, k.value]
              ]),
              A("div", So, [
                A("button", {
                  type: "button",
                  disabled: e.disabled,
                  class: Ve([
                    e.disabled ? "cursor-default opacity-50" : "opacity-100",
                    "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md"
                  ]),
                  onClick: f[1] || (f[1] = (u) => {
                    var j;
                    return e.disabled ? !1 : k.value ? Y() : (j = V.value) == null ? void 0 : j.focus();
                  })
                }, [
                  it(v.$slots, "inputIcon", { value: k.value }, () => [
                    (z(), Z("svg", _o, [
                      k.value ? (z(), Z("path", Oo)) : (z(), Z("path", Po))
                    ]))
                  ])
                ], 10, Do)
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
            e.disabled ? ye("", !0) : (z(), He(se(Or), {
              key: 0,
              as: "div",
              class: "relative z-50"
            }, {
              default: Fe(({ close: u }) => [
                A("div", {
                  class: Ve(["absolute z-50 top-full sm:mt-2.5", Re(c)])
                }, [
                  A("div", {
                    ref_key: "VtdRef",
                    ref: O,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm"
                  }, [
                    A("div", {
                      class: Ve(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]", ke(c)])
                    }, [
                      A("div", Vo, [
                        e.shortcuts ? (z(), He(pt, {
                          key: 0,
                          shortcuts: e.shortcuts,
                          "as-range": $(),
                          "as-single": e.asSingle,
                          i18n: e.options.shortcuts,
                          close: u
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : ye("", !0),
                        A("div", To, [
                          $() && !e.asSingle ? (z(), Z("div", Ao, Co)) : ye("", !0),
                          A("div", {
                            class: Ve(["relative", {
                              "mb-3 sm:mb-0 sm:mr-2 w-full md:w-1/2 lg:w-80": $() && !e.asSingle,
                              "w-full": !$() && e.asSingle
                            }])
                          }, [
                            ee(Ge, {
                              panel: i.previous,
                              calendar: T.value.previous
                            }, null, 8, ["panel", "calendar"]),
                            A("div", Eo, [
                              pe(ee(Xe, {
                                months: I.value,
                                onUpdateMonth: T.value.previous.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [ve, i.previous.month]
                              ]),
                              pe(ee(qe, {
                                years: T.value.previous.years(),
                                onUpdateYear: T.value.previous.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [ve, i.previous.year]
                              ]),
                              pe(A("div", null, [
                                ee(Je, { weeks: b.value }, null, 8, ["weeks"]),
                                ee(Ze, {
                                  calendar: T.value.previous,
                                  weeks: b.value,
                                  "as-range": $(),
                                  "week-number": v.weekNumber,
                                  onUpdateDate: (j) => E(j, u)
                                }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                              ], 512), [
                                [ve, i.previous.calendar]
                              ])
                            ])
                          ], 2),
                          $() && !e.asSingle ? (z(), Z("div", Lo, [
                            ee(Ge, {
                              "as-prev-or-next": "",
                              panel: i.next,
                              calendar: T.value.next
                            }, null, 8, ["panel", "calendar"]),
                            A("div", Fo, [
                              pe(ee(Xe, {
                                months: I.value,
                                onUpdateMonth: T.value.next.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [ve, i.next.month]
                              ]),
                              pe(ee(qe, {
                                "as-prev-or-next": "",
                                years: T.value.next.years(),
                                onUpdateYear: T.value.next.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [ve, i.next.year]
                              ]),
                              pe(A("div", null, [
                                ee(Je, { weeks: b.value }, null, 8, ["weeks"]),
                                ee(Ze, {
                                  "as-prev-or-next": "",
                                  calendar: T.value.next,
                                  weeks: b.value,
                                  "as-range": $(),
                                  "week-number": v.weekNumber,
                                  onUpdateDate: (j) => E(j, u)
                                }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                              ], 512), [
                                [ve, i.next.calendar]
                              ])
                            ])
                          ])) : ye("", !0)
                        ])
                      ]),
                      e.autoApply ? (z(), Z("div", Uo, [
                        A("div", zo, [
                          A("div", Wo, [
                            A("button", {
                              type: "button",
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              onClick: (j) => u(),
                              textContent: ae(e.options.footer.cancel)
                            }, null, 8, Ko)
                          ])
                        ])
                      ])) : (z(), Z("div", Bo, [
                        A("div", No, [
                          A("div", Ro, [
                            A("button", {
                              type: "button",
                              class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                              disabled: e.asSingle ? y.value.length < 1 : y.value.length < 2,
                              onClick: (j) => R(u),
                              textContent: ae(e.options.footer.apply)
                            }, null, 8, Io),
                            A("button", {
                              type: "button",
                              class: "mt-3 away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              onClick: (j) => u(),
                              textContent: ae(e.options.footer.cancel)
                            }, null, 8, Ho)
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
const Gt = /* @__PURE__ */ (() => {
  const t = ua;
  return t.install = (o) => {
    o.component("VueTailwindDatepicker", t);
  }, t;
})(), ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gt
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(ia).forEach(([t, o]) => {
  t !== "default" && (Gt[t] = o);
});
export {
  Gt as c,
  d
};
