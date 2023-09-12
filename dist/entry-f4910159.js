import {
  cloneVNode as Wt,
  h as ve,
  Fragment as $e,
  inject as Se,
  provide as ae,
  ref as q,
  onMounted as tt,
  watchEffect as ke,
  computed as le,
  defineComponent as ue,
  onUnmounted as Qe,
  Teleport as Kt,
  reactive as ft,
  shallowRef as Gt,
  openBlock as W,
  createElementBlock as Z,
  createElementVNode as C,
  withDirectives as ce,
  vShow as pe,
  toDisplayString as ne,
  renderList as We,
  withModifiers as Te,
  unref as se,
  createCommentVNode as ye,
  createVNode as Q,
  TransitionGroup as Zt,
  withCtx as Le,
  normalizeClass as Pe,
  Transition as pt,
  nextTick as Ie,
  watch as qt,
  isProxy as Jt,
  createBlock as He,
  renderSlot as Xt,
  mergeProps as Qt,
  vModelText as er,
} from "vue";
function De(t, o, ...a) {
  if (t in o) {
    let l = o[t];
    return typeof l == "function" ? l(...a) : l;
  }
  let e = new Error(
    `Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      o,
    )
      .map((l) => `"${l}"`)
      .join(", ")}.`,
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(e, De), e);
}
var Ue = ((t) => (
    (t[(t.None = 0)] = "None"),
    (t[(t.RenderStrategy = 1)] = "RenderStrategy"),
    (t[(t.Static = 2)] = "Static"),
    t
  ))(Ue || {}),
  tr = ((t) => (
    (t[(t.Unmount = 0)] = "Unmount"), (t[(t.Hidden = 1)] = "Hidden"), t
  ))(tr || {});
function _e({
  visible: t = !0,
  features: o = 0,
  ourProps: a,
  theirProps: e,
  ...l
}) {
  var n;
  let y = mt(e, a),
    u = Object.assign(l, { props: y });
  if (t || (o & 2 && y.static)) return nt(u);
  if (o & 1) {
    let m = (n = y.unmount) == null || n ? 0 : 1;
    return De(m, {
      0() {
        return null;
      },
      1() {
        return nt({
          ...l,
          props: { ...y, hidden: !0, style: { display: "none" } },
        });
      },
    });
  }
  return nt(u);
}
function nt({ props: t, attrs: o, slots: a, slot: e, name: l }) {
  var n, y;
  let { as: u, ...m } = rr(t, ["unmount", "static"]),
    c = (n = a.default) == null ? void 0 : n.call(a, e),
    $ = {};
  if (e) {
    let w = !1,
      P = [];
    for (let [T, B] of Object.entries(e))
      typeof B == "boolean" && (w = !0), B === !0 && P.push(T);
    w && ($["data-headlessui-state"] = P.join(" "));
  }
  if (u === "template") {
    if (
      ((c = vt(c ?? [])),
      Object.keys(m).length > 0 || Object.keys(o).length > 0)
    ) {
      let [w, ...P] = c ?? [];
      if (!or(w) || P.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${l} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(m)
              .concat(Object.keys(o))
              .map((k) => k.trim())
              .filter((k, V, j) => j.indexOf(k) === V)
              .sort((k, V) => k.localeCompare(V))
              .map((k) => `  - ${k}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((k) => `  - ${k}`).join(`
`),
          ].join(`
`),
        );
      let T = mt((y = w.props) != null ? y : {}, m),
        B = Wt(w, T);
      for (let k in T)
        k.startsWith("on") && (B.props || (B.props = {}), (B.props[k] = T[k]));
      return B;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return ve(u, Object.assign({}, m, $), { default: () => c });
}
function vt(t) {
  return t.flatMap((o) => (o.type === $e ? vt(o.children) : [o]));
}
function mt(...t) {
  if (t.length === 0) return {};
  if (t.length === 1) return t[0];
  let o = {},
    a = {};
  for (let e of t)
    for (let l in e)
      l.startsWith("on") && typeof e[l] == "function"
        ? (a[l] != null || (a[l] = []), a[l].push(e[l]))
        : (o[l] = e[l]);
  if (o.disabled || o["aria-disabled"])
    return Object.assign(
      o,
      Object.fromEntries(Object.keys(a).map((e) => [e, void 0])),
    );
  for (let e in a)
    Object.assign(o, {
      [e](l, ...n) {
        let y = a[e];
        for (let u of y) {
          if (l instanceof Event && l.defaultPrevented) return;
          u(l, ...n);
        }
      },
    });
  return o;
}
function rr(t, o = []) {
  let a = Object.assign({}, t);
  for (let e of o) e in a && delete a[e];
  return a;
}
function or(t) {
  return t == null
    ? !1
    : typeof t.type == "string" ||
        typeof t.type == "object" ||
        typeof t.type == "function";
}
let ar = 0;
function nr() {
  return ++ar;
}
function Fe() {
  return nr();
}
var Ve = ((t) => (
  (t.Space = " "),
  (t.Enter = "Enter"),
  (t.Escape = "Escape"),
  (t.Backspace = "Backspace"),
  (t.Delete = "Delete"),
  (t.ArrowLeft = "ArrowLeft"),
  (t.ArrowUp = "ArrowUp"),
  (t.ArrowRight = "ArrowRight"),
  (t.ArrowDown = "ArrowDown"),
  (t.Home = "Home"),
  (t.End = "End"),
  (t.PageUp = "PageUp"),
  (t.PageDown = "PageDown"),
  (t.Tab = "Tab"),
  t
))(Ve || {});
function R(t) {
  var o;
  return t == null || t.value == null
    ? null
    : (o = t.value.$el) != null
    ? o
    : t.value;
}
let ht = Symbol("Context");
var Ce = ((t) => (
  (t[(t.Open = 1)] = "Open"),
  (t[(t.Closed = 2)] = "Closed"),
  (t[(t.Closing = 4)] = "Closing"),
  (t[(t.Opening = 8)] = "Opening"),
  t
))(Ce || {});
function yt() {
  return Se(ht, null);
}
function sr(t) {
  ae(ht, t);
}
function it(t, o) {
  if (t) return t;
  let a = o ?? "button";
  if (typeof a == "string" && a.toLowerCase() === "button") return "button";
}
function lr(t, o) {
  let a = q(it(t.value.type, t.value.as));
  return (
    tt(() => {
      a.value = it(t.value.type, t.value.as);
    }),
    ke(() => {
      var e;
      a.value ||
        (R(o) &&
          R(o) instanceof HTMLButtonElement &&
          !((e = R(o)) != null && e.hasAttribute("type")) &&
          (a.value = "button"));
    }),
    a
  );
}
var ur = Object.defineProperty,
  ir = (t, o, a) =>
    o in t
      ? ur(t, o, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[o] = a),
  dt = (t, o, a) => (ir(t, typeof o != "symbol" ? o + "" : o, a), a);
class dr {
  constructor() {
    dt(this, "current", this.detect()), dt(this, "currentId", 0);
  }
  set(o) {
    this.current !== o && ((this.currentId = 0), (this.current = o));
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
let rt = new dr();
function Oe(t) {
  if (rt.isServer) return null;
  if (t instanceof Node) return t.ownerDocument;
  if (t != null && t.hasOwnProperty("value")) {
    let o = R(t);
    if (o) return o.ownerDocument;
  }
  return document;
}
let st = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((t) => `${t}:not([tabindex='-1'])`)
  .join(",");
var je = ((t) => (
    (t[(t.First = 1)] = "First"),
    (t[(t.Previous = 2)] = "Previous"),
    (t[(t.Next = 4)] = "Next"),
    (t[(t.Last = 8)] = "Last"),
    (t[(t.WrapAround = 16)] = "WrapAround"),
    (t[(t.NoScroll = 32)] = "NoScroll"),
    t
  ))(je || {}),
  et = ((t) => (
    (t[(t.Error = 0)] = "Error"),
    (t[(t.Overflow = 1)] = "Overflow"),
    (t[(t.Success = 2)] = "Success"),
    (t[(t.Underflow = 3)] = "Underflow"),
    t
  ))(et || {}),
  cr = ((t) => (
    (t[(t.Previous = -1)] = "Previous"), (t[(t.Next = 1)] = "Next"), t
  ))(cr || {});
function ot(t = document.body) {
  return t == null
    ? []
    : Array.from(t.querySelectorAll(st)).sort((o, a) =>
        Math.sign(
          (o.tabIndex || Number.MAX_SAFE_INTEGER) -
            (a.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      );
}
var ut = ((t) => (
  (t[(t.Strict = 0)] = "Strict"), (t[(t.Loose = 1)] = "Loose"), t
))(ut || {});
function bt(t, o = 0) {
  var a;
  return t === ((a = Oe(t)) == null ? void 0 : a.body)
    ? !1
    : De(o, {
        0() {
          return t.matches(st);
        },
        1() {
          let e = t;
          for (; e !== null; ) {
            if (e.matches(st)) return !0;
            e = e.parentElement;
          }
          return !1;
        },
      });
}
var fr = ((t) => (
  (t[(t.Keyboard = 0)] = "Keyboard"), (t[(t.Mouse = 1)] = "Mouse"), t
))(fr || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (t) => {
      t.metaKey ||
        t.altKey ||
        t.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0,
  ),
  document.addEventListener(
    "click",
    (t) => {
      t.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : t.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0,
  ));
let pr = ["textarea", "input"].join(",");
function vr(t) {
  var o, a;
  return (a =
    (o = t == null ? void 0 : t.matches) == null ? void 0 : o.call(t, pr)) !=
    null
    ? a
    : !1;
}
function mr(t, o = (a) => a) {
  return t.slice().sort((a, e) => {
    let l = o(a),
      n = o(e);
    if (l === null || n === null) return 0;
    let y = l.compareDocumentPosition(n);
    return y & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : y & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function Ae(
  t,
  o,
  { sorted: a = !0, relativeTo: e = null, skipElements: l = [] } = {},
) {
  var n;
  let y =
      (n = Array.isArray(t)
        ? t.length > 0
          ? t[0].ownerDocument
          : document
        : t == null
        ? void 0
        : t.ownerDocument) != null
        ? n
        : document,
    u = Array.isArray(t) ? (a ? mr(t) : t) : ot(t);
  l.length > 0 && u.length > 1 && (u = u.filter((B) => !l.includes(B))),
    (e = e ?? y.activeElement);
  let m = (() => {
      if (o & 5) return 1;
      if (o & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      );
    })(),
    c = (() => {
      if (o & 1) return 0;
      if (o & 2) return Math.max(0, u.indexOf(e)) - 1;
      if (o & 4) return Math.max(0, u.indexOf(e)) + 1;
      if (o & 8) return u.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      );
    })(),
    $ = o & 32 ? { preventScroll: !0 } : {},
    w = 0,
    P = u.length,
    T;
  do {
    if (w >= P || w + P <= 0) return 0;
    let B = c + w;
    if (o & 16) B = (B + P) % P;
    else {
      if (B < 0) return 3;
      if (B >= P) return 1;
    }
    (T = u[B]), T == null || T.focus($), (w += m);
  } while (T !== y.activeElement);
  return o & 6 && vr(T) && T.select(), 2;
}
function Ke(t, o, a) {
  rt.isServer ||
    ke((e) => {
      document.addEventListener(t, o, a),
        e(() => document.removeEventListener(t, o, a));
    });
}
function gt(t, o, a) {
  rt.isServer ||
    ke((e) => {
      window.addEventListener(t, o, a),
        e(() => window.removeEventListener(t, o, a));
    });
}
function hr(t, o, a = le(() => !0)) {
  function e(n, y) {
    if (!a.value || n.defaultPrevented) return;
    let u = y(n);
    if (u === null || !u.getRootNode().contains(u)) return;
    let m = (function c($) {
      return typeof $ == "function"
        ? c($())
        : Array.isArray($) || $ instanceof Set
        ? $
        : [$];
    })(t);
    for (let c of m) {
      if (c === null) continue;
      let $ = c instanceof HTMLElement ? c : R(c);
      if (
        ($ != null && $.contains(u)) ||
        (n.composed && n.composedPath().includes($))
      )
        return;
    }
    return !bt(u, ut.Loose) && u.tabIndex !== -1 && n.preventDefault(), o(n, u);
  }
  let l = q(null);
  Ke(
    "pointerdown",
    (n) => {
      var y, u;
      a.value &&
        (l.value =
          ((u = (y = n.composedPath) == null ? void 0 : y.call(n)) == null
            ? void 0
            : u[0]) || n.target);
    },
    !0,
  ),
    Ke(
      "mousedown",
      (n) => {
        var y, u;
        a.value &&
          (l.value =
            ((u = (y = n.composedPath) == null ? void 0 : y.call(n)) == null
              ? void 0
              : u[0]) || n.target);
      },
      !0,
    ),
    Ke(
      "click",
      (n) => {
        l.value && (e(n, () => l.value), (l.value = null));
      },
      !0,
    ),
    Ke(
      "touchend",
      (n) => e(n, () => (n.target instanceof HTMLElement ? n.target : null)),
      !0,
    ),
    gt(
      "blur",
      (n) =>
        e(n, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null,
        ),
      !0,
    );
}
var Be = ((t) => (
  (t[(t.None = 1)] = "None"),
  (t[(t.Focusable = 2)] = "Focusable"),
  (t[(t.Hidden = 4)] = "Hidden"),
  t
))(Be || {});
let ze = ue({
  name: "Hidden",
  props: {
    as: { type: [Object, String], default: "div" },
    features: { type: Number, default: 1 },
  },
  setup(t, { slots: o, attrs: a }) {
    return () => {
      let { features: e, ...l } = t,
        n = {
          "aria-hidden": (e & 2) === 2 ? !0 : void 0,
          style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...((e & 4) === 4 && (e & 2) !== 2 && { display: "none" }),
          },
        };
      return _e({
        ourProps: n,
        theirProps: l,
        slot: {},
        attrs: a,
        slots: o,
        name: "Hidden",
      });
    };
  },
});
var Me = ((t) => (
  (t[(t.Forwards = 0)] = "Forwards"), (t[(t.Backwards = 1)] = "Backwards"), t
))(Me || {});
function xt() {
  let t = q(0);
  return (
    gt("keydown", (o) => {
      o.key === "Tab" && (t.value = o.shiftKey ? 1 : 0);
    }),
    t
  );
}
function yr(t, o, a, e) {
  rt.isServer ||
    ke((l) => {
      (t = t ?? window),
        t.addEventListener(o, a, e),
        l(() => t.removeEventListener(o, a, e));
    });
}
let wt = Symbol("ForcePortalRootContext");
function br() {
  return Se(wt, !1);
}
ue({
  name: "ForcePortalRoot",
  props: {
    as: { type: [Object, String], default: "template" },
    force: { type: Boolean, default: !1 },
  },
  setup(t, { slots: o, attrs: a }) {
    return (
      ae(wt, t.force),
      () => {
        let { force: e, ...l } = t;
        return _e({
          theirProps: l,
          ourProps: {},
          slot: {},
          slots: o,
          attrs: a,
          name: "ForcePortalRoot",
        });
      }
    );
  },
});
function gr(t) {
  let o = Oe(t);
  if (!o) {
    if (t === null) return null;
    throw new Error(
      `[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`,
    );
  }
  let a = o.getElementById("headlessui-portal-root");
  if (a) return a;
  let e = o.createElement("div");
  return e.setAttribute("id", "headlessui-portal-root"), o.body.appendChild(e);
}
ue({
  name: "Portal",
  props: { as: { type: [Object, String], default: "div" } },
  setup(t, { slots: o, attrs: a }) {
    let e = q(null),
      l = le(() => Oe(e)),
      n = br(),
      y = Se(kt, null),
      u = q(n === !0 || y == null ? gr(e.value) : y.resolveTarget());
    ke(() => {
      n || (y != null && (u.value = y.resolveTarget()));
    });
    let m = Se(lt, null);
    return (
      tt(() => {
        let c = R(e);
        c && m && Qe(m.register(c));
      }),
      Qe(() => {
        var c, $;
        let w =
          (c = l.value) == null
            ? void 0
            : c.getElementById("headlessui-portal-root");
        w &&
          u.value === w &&
          u.value.children.length <= 0 &&
          (($ = u.value.parentElement) == null || $.removeChild(u.value));
      }),
      () => {
        if (u.value === null) return null;
        let c = { ref: e, "data-headlessui-portal": "" };
        return ve(
          Kt,
          { to: u.value },
          _e({
            ourProps: c,
            theirProps: t,
            slot: {},
            attrs: a,
            slots: o,
            name: "Portal",
          }),
        );
      }
    );
  },
});
let lt = Symbol("PortalParentContext");
function xr() {
  let t = Se(lt, null),
    o = q([]);
  function a(n) {
    return o.value.push(n), t && t.register(n), () => e(n);
  }
  function e(n) {
    let y = o.value.indexOf(n);
    y !== -1 && o.value.splice(y, 1), t && t.unregister(n);
  }
  let l = { register: a, unregister: e, portals: o };
  return [
    o,
    ue({
      name: "PortalWrapper",
      setup(n, { slots: y }) {
        return (
          ae(lt, l),
          () => {
            var u;
            return (u = y.default) == null ? void 0 : u.call(y);
          }
        );
      },
    }),
  ];
}
let kt = Symbol("PortalGroupContext");
ue({
  name: "PortalGroup",
  props: {
    as: { type: [Object, String], default: "template" },
    target: { type: Object, default: null },
  },
  setup(t, { attrs: o, slots: a }) {
    let e = ft({
      resolveTarget() {
        return t.target;
      },
    });
    return (
      ae(kt, e),
      () => {
        let { target: l, ...n } = t;
        return _e({
          theirProps: n,
          ourProps: {},
          slot: {},
          attrs: o,
          slots: a,
          name: "PortalGroup",
        });
      }
    );
  },
});
function wr({
  defaultContainers: t = [],
  portals: o,
  mainTreeNodeRef: a,
} = {}) {
  let e = q(null),
    l = Oe(e);
  function n() {
    var y;
    let u = [];
    for (let m of t)
      m !== null &&
        (m instanceof HTMLElement
          ? u.push(m)
          : "value" in m && m.value instanceof HTMLElement && u.push(m.value));
    if (o != null && o.value) for (let m of o.value) u.push(m);
    for (let m of (y =
      l == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null
      ? y
      : [])
      m !== document.body &&
        m !== document.head &&
        m instanceof HTMLElement &&
        m.id !== "headlessui-portal-root" &&
        (m.contains(R(e)) || u.some((c) => m.contains(c)) || u.push(m));
    return u;
  }
  return {
    resolveContainers: n,
    contains(y) {
      return n().some((u) => u.contains(y));
    },
    mainTreeNodeRef: e,
    MainTreeNode() {
      return a != null ? null : ve(ze, { features: Be.Hidden, ref: e });
    },
  };
}
function kr() {
  let t = q(null);
  return {
    mainTreeNodeRef: t,
    MainTreeNode() {
      return ve(ze, { features: Be.Hidden, ref: t });
    },
  };
}
var $r = ((t) => (
  (t[(t.Open = 0)] = "Open"), (t[(t.Closed = 1)] = "Closed"), t
))($r || {});
let $t = Symbol("PopoverContext");
function at(t) {
  let o = Se($t, null);
  if (o === null) {
    let a = new Error(`<${t} /> is missing a parent <${Dt.name} /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(a, at), a);
  }
  return o;
}
let jt = Symbol("PopoverGroupContext");
function Mt() {
  return Se(jt, null);
}
let St = Symbol("PopoverPanelContext");
function jr() {
  return Se(St, null);
}
let Dt = ue({
    name: "Popover",
    inheritAttrs: !1,
    props: { as: { type: [Object, String], default: "div" } },
    setup(t, { slots: o, attrs: a, expose: e }) {
      var l;
      let n = q(null);
      e({ el: n, $el: n });
      let y = q(1),
        u = q(null),
        m = q(null),
        c = q(null),
        $ = q(null),
        w = le(() => Oe(n)),
        P = le(() => {
          var L, i;
          if (!R(u) || !R($)) return !1;
          for (let O of document.querySelectorAll("body > *"))
            if (
              Number(O == null ? void 0 : O.contains(R(u))) ^
              Number(O == null ? void 0 : O.contains(R($)))
            )
              return !0;
          let r = ot(),
            b = r.indexOf(R(u)),
            Y = (b + r.length - 1) % r.length,
            D = (b + 1) % r.length,
            z = r[Y],
            G = r[D];
          return (
            !((L = R($)) != null && L.contains(z)) &&
            !((i = R($)) != null && i.contains(G))
          );
        }),
        T = {
          popoverState: y,
          buttonId: q(null),
          panelId: q(null),
          panel: $,
          button: u,
          isPortalled: P,
          beforePanelSentinel: m,
          afterPanelSentinel: c,
          togglePopover() {
            y.value = De(y.value, { 0: 1, 1: 0 });
          },
          closePopover() {
            y.value !== 1 && (y.value = 1);
          },
          close(L) {
            T.closePopover();
            let i = (() =>
              L
                ? L instanceof HTMLElement
                  ? L
                  : L.value instanceof HTMLElement
                  ? R(L)
                  : R(T.button)
                : R(T.button))();
            i == null || i.focus();
          },
        };
      ae($t, T), sr(le(() => De(y.value, { 0: Ce.Open, 1: Ce.Closed })));
      let B = {
          buttonId: T.buttonId,
          panelId: T.panelId,
          close() {
            T.closePopover();
          },
        },
        k = Mt(),
        V = k == null ? void 0 : k.registerPopover,
        [j, S] = xr(),
        g = wr({
          mainTreeNodeRef: k == null ? void 0 : k.mainTreeNodeRef,
          portals: j,
          defaultContainers: [u, $],
        });
      function N() {
        var L, i, r, b;
        return (b = k == null ? void 0 : k.isFocusWithinPopoverGroup()) != null
          ? b
          : ((L = w.value) == null ? void 0 : L.activeElement) &&
              (((i = R(u)) == null
                ? void 0
                : i.contains(w.value.activeElement)) ||
                ((r = R($)) == null
                  ? void 0
                  : r.contains(w.value.activeElement)));
      }
      return (
        ke(() => (V == null ? void 0 : V(B))),
        yr(
          (l = w.value) == null ? void 0 : l.defaultView,
          "focus",
          (L) => {
            var i, r;
            L.target !== window &&
              L.target instanceof HTMLElement &&
              y.value === 0 &&
              (N() ||
                (u &&
                  $ &&
                  (g.contains(L.target) ||
                    ((i = R(T.beforePanelSentinel)) != null &&
                      i.contains(L.target)) ||
                    ((r = R(T.afterPanelSentinel)) != null &&
                      r.contains(L.target)) ||
                    T.closePopover())));
          },
          !0,
        ),
        hr(
          g.resolveContainers,
          (L, i) => {
            var r;
            T.closePopover(),
              bt(i, ut.Loose) ||
                (L.preventDefault(), (r = R(u)) == null || r.focus());
          },
          le(() => y.value === 0),
        ),
        () => {
          let L = { open: y.value === 0, close: T.close };
          return ve($e, [
            ve(S, {}, () =>
              _e({
                theirProps: { ...t, ...a },
                ourProps: { ref: n },
                slot: L,
                slots: o,
                attrs: a,
                name: "Popover",
              }),
            ),
            ve(g.MainTreeNode),
          ]);
        }
      );
    },
  }),
  Mr = ue({
    name: "PopoverButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-popover-button-${Fe()}` },
    },
    inheritAttrs: !1,
    setup(t, { attrs: o, slots: a, expose: e }) {
      let l = at("PopoverButton"),
        n = le(() => Oe(l.button));
      e({ el: l.button, $el: l.button }),
        tt(() => {
          l.buttonId.value = t.id;
        }),
        Qe(() => {
          l.buttonId.value = null;
        });
      let y = Mt(),
        u = y == null ? void 0 : y.closeOthers,
        m = jr(),
        c = le(() => (m === null ? !1 : m.value === l.panelId.value)),
        $ = q(null),
        w = `headlessui-focus-sentinel-${Fe()}`;
      c.value ||
        ke(() => {
          l.button.value = $.value;
        });
      let P = lr(
        le(() => ({ as: t.as, type: o.type })),
        $,
      );
      function T(g) {
        var N, L, i, r, b;
        if (c.value) {
          if (l.popoverState.value === 1) return;
          switch (g.key) {
            case Ve.Space:
            case Ve.Enter:
              g.preventDefault(),
                (L = (N = g.target).click) == null || L.call(N),
                l.closePopover(),
                (i = R(l.button)) == null || i.focus();
              break;
          }
        } else
          switch (g.key) {
            case Ve.Space:
            case Ve.Enter:
              g.preventDefault(),
                g.stopPropagation(),
                l.popoverState.value === 1 &&
                  (u == null || u(l.buttonId.value)),
                l.togglePopover();
              break;
            case Ve.Escape:
              if (l.popoverState.value !== 0)
                return u == null ? void 0 : u(l.buttonId.value);
              if (
                !R(l.button) ||
                ((r = n.value) != null &&
                  r.activeElement &&
                  !(
                    (b = R(l.button)) != null &&
                    b.contains(n.value.activeElement)
                  ))
              )
                return;
              g.preventDefault(), g.stopPropagation(), l.closePopover();
              break;
          }
      }
      function B(g) {
        c.value || (g.key === Ve.Space && g.preventDefault());
      }
      function k(g) {
        var N, L;
        t.disabled ||
          (c.value
            ? (l.closePopover(), (N = R(l.button)) == null || N.focus())
            : (g.preventDefault(),
              g.stopPropagation(),
              l.popoverState.value === 1 && (u == null || u(l.buttonId.value)),
              l.togglePopover(),
              (L = R(l.button)) == null || L.focus()));
      }
      function V(g) {
        g.preventDefault(), g.stopPropagation();
      }
      let j = xt();
      function S() {
        let g = R(l.panel);
        if (!g) return;
        function N() {
          De(j.value, {
            [Me.Forwards]: () => Ae(g, je.First),
            [Me.Backwards]: () => Ae(g, je.Last),
          }) === et.Error &&
            Ae(
              ot().filter((L) => L.dataset.headlessuiFocusGuard !== "true"),
              De(j.value, {
                [Me.Forwards]: je.Next,
                [Me.Backwards]: je.Previous,
              }),
              { relativeTo: R(l.button) },
            );
        }
        N();
      }
      return () => {
        let g = l.popoverState.value === 0,
          N = { open: g },
          { id: L, ...i } = t,
          r = c.value
            ? { ref: $, type: P.value, onKeydown: T, onClick: k }
            : {
                ref: $,
                id: L,
                type: P.value,
                "aria-expanded": l.popoverState.value === 0,
                "aria-controls": R(l.panel) ? l.panelId.value : void 0,
                disabled: t.disabled ? !0 : void 0,
                onKeydown: T,
                onKeyup: B,
                onClick: k,
                onMousedown: V,
              };
        return ve($e, [
          _e({
            ourProps: r,
            theirProps: { ...o, ...i },
            slot: N,
            attrs: o,
            slots: a,
            name: "PopoverButton",
          }),
          g &&
            !c.value &&
            l.isPortalled.value &&
            ve(ze, {
              id: w,
              features: Be.Focusable,
              "data-headlessui-focus-guard": !0,
              as: "button",
              type: "button",
              onFocus: S,
            }),
        ]);
      };
    },
  }),
  Sr = ue({
    name: "PopoverOverlay",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
    },
    setup(t, { attrs: o, slots: a }) {
      let e = at("PopoverOverlay"),
        l = `headlessui-popover-overlay-${Fe()}`,
        n = yt(),
        y = le(() =>
          n !== null
            ? (n.value & Ce.Open) === Ce.Open
            : e.popoverState.value === 0,
        );
      function u() {
        e.closePopover();
      }
      return () => {
        let m = { open: e.popoverState.value === 0 };
        return _e({
          ourProps: { id: l, "aria-hidden": !0, onClick: u },
          theirProps: t,
          slot: m,
          attrs: o,
          slots: a,
          features: Ue.RenderStrategy | Ue.Static,
          visible: y.value,
          name: "PopoverOverlay",
        });
      };
    },
  }),
  Dr = ue({
    name: "PopoverPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      focus: { type: Boolean, default: !1 },
      id: { type: String, default: () => `headlessui-popover-panel-${Fe()}` },
    },
    inheritAttrs: !1,
    setup(t, { attrs: o, slots: a, expose: e }) {
      let { focus: l } = t,
        n = at("PopoverPanel"),
        y = le(() => Oe(n.panel)),
        u = `headlessui-focus-sentinel-before-${Fe()}`,
        m = `headlessui-focus-sentinel-after-${Fe()}`;
      e({ el: n.panel, $el: n.panel }),
        tt(() => {
          n.panelId.value = t.id;
        }),
        Qe(() => {
          n.panelId.value = null;
        }),
        ae(St, n.panelId),
        ke(() => {
          var V, j;
          if (!l || n.popoverState.value !== 0 || !n.panel) return;
          let S = (V = y.value) == null ? void 0 : V.activeElement;
          ((j = R(n.panel)) != null && j.contains(S)) ||
            Ae(R(n.panel), je.First);
        });
      let c = yt(),
        $ = le(() =>
          c !== null
            ? (c.value & Ce.Open) === Ce.Open
            : n.popoverState.value === 0,
        );
      function w(V) {
        var j, S;
        switch (V.key) {
          case Ve.Escape:
            if (
              n.popoverState.value !== 0 ||
              !R(n.panel) ||
              (y.value &&
                !(
                  (j = R(n.panel)) != null && j.contains(y.value.activeElement)
                ))
            )
              return;
            V.preventDefault(),
              V.stopPropagation(),
              n.closePopover(),
              (S = R(n.button)) == null || S.focus();
            break;
        }
      }
      function P(V) {
        var j, S, g, N, L;
        let i = V.relatedTarget;
        i &&
          R(n.panel) &&
          (((j = R(n.panel)) != null && j.contains(i)) ||
            (n.closePopover(),
            (((g =
              (S = R(n.beforePanelSentinel)) == null ? void 0 : S.contains) !=
              null &&
              g.call(S, i)) ||
              ((L =
                (N = R(n.afterPanelSentinel)) == null ? void 0 : N.contains) !=
                null &&
                L.call(N, i))) &&
              i.focus({ preventScroll: !0 })));
      }
      let T = xt();
      function B() {
        let V = R(n.panel);
        if (!V) return;
        function j() {
          De(T.value, {
            [Me.Forwards]: () => {
              var S;
              Ae(V, je.First) === et.Error &&
                ((S = R(n.afterPanelSentinel)) == null || S.focus());
            },
            [Me.Backwards]: () => {
              var S;
              (S = R(n.button)) == null || S.focus({ preventScroll: !0 });
            },
          });
        }
        j();
      }
      function k() {
        let V = R(n.panel);
        if (!V) return;
        function j() {
          De(T.value, {
            [Me.Forwards]: () => {
              let S = R(n.button),
                g = R(n.panel);
              if (!S) return;
              let N = ot(),
                L = N.indexOf(S),
                i = N.slice(0, L + 1),
                r = [...N.slice(L + 1), ...i];
              for (let b of r.slice())
                if (
                  b.dataset.headlessuiFocusGuard === "true" ||
                  (g != null && g.contains(b))
                ) {
                  let Y = r.indexOf(b);
                  Y !== -1 && r.splice(Y, 1);
                }
              Ae(r, je.First, { sorted: !1 });
            },
            [Me.Backwards]: () => {
              var S;
              Ae(V, je.Previous) === et.Error &&
                ((S = R(n.button)) == null || S.focus());
            },
          });
        }
        j();
      }
      return () => {
        let V = { open: n.popoverState.value === 0, close: n.close },
          { id: j, focus: S, ...g } = t,
          N = {
            ref: n.panel,
            id: j,
            onKeydown: w,
            onFocusout: l && n.popoverState.value === 0 ? P : void 0,
            tabIndex: -1,
          };
        return _e({
          ourProps: N,
          theirProps: { ...o, ...g },
          attrs: o,
          slot: V,
          slots: {
            ...a,
            default: (...L) => {
              var i;
              return [
                ve($e, [
                  $.value &&
                    n.isPortalled.value &&
                    ve(ze, {
                      id: u,
                      ref: n.beforePanelSentinel,
                      features: Be.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: B,
                    }),
                  (i = a.default) == null ? void 0 : i.call(a, ...L),
                  $.value &&
                    n.isPortalled.value &&
                    ve(ze, {
                      id: m,
                      ref: n.afterPanelSentinel,
                      features: Be.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: k,
                    }),
                ]),
              ];
            },
          },
          features: Ue.RenderStrategy | Ue.Static,
          visible: $.value,
          name: "PopoverPanel",
        });
      };
    },
  });
ue({
  name: "PopoverGroup",
  inheritAttrs: !1,
  props: { as: { type: [Object, String], default: "div" } },
  setup(t, { attrs: o, slots: a, expose: e }) {
    let l = q(null),
      n = Gt([]),
      y = le(() => Oe(l)),
      u = kr();
    e({ el: l, $el: l });
    function m(P) {
      let T = n.value.indexOf(P);
      T !== -1 && n.value.splice(T, 1);
    }
    function c(P) {
      return (
        n.value.push(P),
        () => {
          m(P);
        }
      );
    }
    function $() {
      var P;
      let T = y.value;
      if (!T) return !1;
      let B = T.activeElement;
      return (P = R(l)) != null && P.contains(B)
        ? !0
        : n.value.some((k) => {
            var V, j;
            return (
              ((V = T.getElementById(k.buttonId.value)) == null
                ? void 0
                : V.contains(B)) ||
              ((j = T.getElementById(k.panelId.value)) == null
                ? void 0
                : j.contains(B))
            );
          });
    }
    function w(P) {
      for (let T of n.value) T.buttonId.value !== P && T.close();
    }
    return (
      ae(jt, {
        registerPopover: c,
        unregisterPopover: m,
        isFocusWithinPopoverGroup: $,
        closeOthers: w,
        mainTreeNodeRef: u.mainTreeNodeRef,
      }),
      () =>
        ve($e, [
          _e({
            ourProps: { ref: l },
            theirProps: { ...t, ...o },
            slot: {},
            attrs: o,
            slots: a,
            name: "PopoverGroup",
          }),
          ve(u.MainTreeNode),
        ])
    );
  },
});
var Ye =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Ee(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var _t = { exports: {} };
(function (t, o) {
  (function (a, e) {
    t.exports = e();
  })(Ye, function () {
    var a = 1e3,
      e = 6e4,
      l = 36e5,
      n = "millisecond",
      y = "second",
      u = "minute",
      m = "hour",
      c = "day",
      $ = "week",
      w = "month",
      P = "quarter",
      T = "year",
      B = "date",
      k = "Invalid Date",
      V =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      j =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      S = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_",
          ),
        ordinal: function (O) {
          var p = ["th", "st", "nd", "rd"],
            M = O % 100;
          return "[" + O + (p[(M - 20) % 10] || p[M] || p[0]) + "]";
        },
      },
      g = function (O, p, M) {
        var A = String(O);
        return !A || A.length >= p
          ? O
          : "" + Array(p + 1 - A.length).join(M) + O;
      },
      N = {
        s: g,
        z: function (O) {
          var p = -O.utcOffset(),
            M = Math.abs(p),
            A = Math.floor(M / 60),
            _ = M % 60;
          return (p <= 0 ? "+" : "-") + g(A, 2, "0") + ":" + g(_, 2, "0");
        },
        m: function O(p, M) {
          if (p.date() < M.date()) return -O(M, p);
          var A = 12 * (M.year() - p.year()) + (M.month() - p.month()),
            _ = p.clone().add(A, w),
            F = M - _ < 0,
            E = p.clone().add(A + (F ? -1 : 1), w);
          return +(-(A + (M - _) / (F ? _ - E : E - _)) || 0);
        },
        a: function (O) {
          return O < 0 ? Math.ceil(O) || 0 : Math.floor(O);
        },
        p: function (O) {
          return (
            { M: w, y: T, w: $, d: c, D: B, h: m, m: u, s: y, ms: n, Q: P }[
              O
            ] ||
            String(O || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (O) {
          return O === void 0;
        },
      },
      L = "en",
      i = {};
    i[L] = S;
    var r = function (O) {
        return O instanceof z;
      },
      b = function O(p, M, A) {
        var _;
        if (!p) return L;
        if (typeof p == "string") {
          var F = p.toLowerCase();
          i[F] && (_ = F), M && ((i[F] = M), (_ = F));
          var E = p.split("-");
          if (!_ && E.length > 1) return O(E[0]);
        } else {
          var K = p.name;
          (i[K] = p), (_ = K);
        }
        return !A && _ && (L = _), _ || (!A && L);
      },
      Y = function (O, p) {
        if (r(O)) return O.clone();
        var M = typeof p == "object" ? p : {};
        return (M.date = O), (M.args = arguments), new z(M);
      },
      D = N;
    (D.l = b),
      (D.i = r),
      (D.w = function (O, p) {
        return Y(O, { locale: p.$L, utc: p.$u, x: p.$x, $offset: p.$offset });
      });
    var z = (function () {
        function O(M) {
          (this.$L = b(M.locale, null, !0)), this.parse(M);
        }
        var p = O.prototype;
        return (
          (p.parse = function (M) {
            (this.$d = (function (A) {
              var _ = A.date,
                F = A.utc;
              if (_ === null) return /* @__PURE__ */ new Date(NaN);
              if (D.u(_)) return /* @__PURE__ */ new Date();
              if (_ instanceof Date) return new Date(_);
              if (typeof _ == "string" && !/Z$/i.test(_)) {
                var E = _.match(V);
                if (E) {
                  var K = E[2] - 1 || 0,
                    J = (E[7] || "0").substring(0, 3);
                  return F
                    ? new Date(
                        Date.UTC(
                          E[1],
                          K,
                          E[3] || 1,
                          E[4] || 0,
                          E[5] || 0,
                          E[6] || 0,
                          J,
                        ),
                      )
                    : new Date(
                        E[1],
                        K,
                        E[3] || 1,
                        E[4] || 0,
                        E[5] || 0,
                        E[6] || 0,
                        J,
                      );
                }
              }
              return new Date(_);
            })(M)),
              (this.$x = M.x || {}),
              this.init();
          }),
          (p.init = function () {
            var M = this.$d;
            (this.$y = M.getFullYear()),
              (this.$M = M.getMonth()),
              (this.$D = M.getDate()),
              (this.$W = M.getDay()),
              (this.$H = M.getHours()),
              (this.$m = M.getMinutes()),
              (this.$s = M.getSeconds()),
              (this.$ms = M.getMilliseconds());
          }),
          (p.$utils = function () {
            return D;
          }),
          (p.isValid = function () {
            return this.$d.toString() !== k;
          }),
          (p.isSame = function (M, A) {
            var _ = Y(M);
            return this.startOf(A) <= _ && _ <= this.endOf(A);
          }),
          (p.isAfter = function (M, A) {
            return Y(M) < this.startOf(A);
          }),
          (p.isBefore = function (M, A) {
            return this.endOf(A) < Y(M);
          }),
          (p.$g = function (M, A, _) {
            return D.u(M) ? this[A] : this.set(_, M);
          }),
          (p.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (p.valueOf = function () {
            return this.$d.getTime();
          }),
          (p.startOf = function (M, A) {
            var _ = this,
              F = !!D.u(A) || A,
              E = D.p(M),
              K = function (me, oe) {
                var fe = D.w(
                  _.$u ? Date.UTC(_.$y, oe, me) : new Date(_.$y, oe, me),
                  _,
                );
                return F ? fe : fe.endOf(c);
              },
              J = function (me, oe) {
                return D.w(
                  _.toDate()[me].apply(
                    _.toDate("s"),
                    (F ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(oe),
                  ),
                  _,
                );
              },
              te = this.$W,
              re = this.$M,
              ie = this.$D,
              be = "set" + (this.$u ? "UTC" : "");
            switch (E) {
              case T:
                return F ? K(1, 0) : K(31, 11);
              case w:
                return F ? K(1, re) : K(0, re + 1);
              case $:
                var de = this.$locale().weekStart || 0,
                  ge = (te < de ? te + 7 : te) - de;
                return K(F ? ie - ge : ie + (6 - ge), re);
              case c:
              case B:
                return J(be + "Hours", 0);
              case m:
                return J(be + "Minutes", 1);
              case u:
                return J(be + "Seconds", 2);
              case y:
                return J(be + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (p.endOf = function (M) {
            return this.startOf(M, !1);
          }),
          (p.$set = function (M, A) {
            var _,
              F = D.p(M),
              E = "set" + (this.$u ? "UTC" : ""),
              K = ((_ = {}),
              (_[c] = E + "Date"),
              (_[B] = E + "Date"),
              (_[w] = E + "Month"),
              (_[T] = E + "FullYear"),
              (_[m] = E + "Hours"),
              (_[u] = E + "Minutes"),
              (_[y] = E + "Seconds"),
              (_[n] = E + "Milliseconds"),
              _)[F],
              J = F === c ? this.$D + (A - this.$W) : A;
            if (F === w || F === T) {
              var te = this.clone().set(B, 1);
              te.$d[K](J),
                te.init(),
                (this.$d = te.set(B, Math.min(this.$D, te.daysInMonth())).$d);
            } else K && this.$d[K](J);
            return this.init(), this;
          }),
          (p.set = function (M, A) {
            return this.clone().$set(M, A);
          }),
          (p.get = function (M) {
            return this[D.p(M)]();
          }),
          (p.add = function (M, A) {
            var _,
              F = this;
            M = Number(M);
            var E = D.p(A),
              K = function (re) {
                var ie = Y(F);
                return D.w(ie.date(ie.date() + Math.round(re * M)), F);
              };
            if (E === w) return this.set(w, this.$M + M);
            if (E === T) return this.set(T, this.$y + M);
            if (E === c) return K(1);
            if (E === $) return K(7);
            var J = ((_ = {}), (_[u] = e), (_[m] = l), (_[y] = a), _)[E] || 1,
              te = this.$d.getTime() + M * J;
            return D.w(te, this);
          }),
          (p.subtract = function (M, A) {
            return this.add(-1 * M, A);
          }),
          (p.format = function (M) {
            var A = this,
              _ = this.$locale();
            if (!this.isValid()) return _.invalidDate || k;
            var F = M || "YYYY-MM-DDTHH:mm:ssZ",
              E = D.z(this),
              K = this.$H,
              J = this.$m,
              te = this.$M,
              re = _.weekdays,
              ie = _.months,
              be = _.meridiem,
              de = function (oe, fe, he, xe) {
                return (oe && (oe[fe] || oe(A, F))) || he[fe].slice(0, xe);
              },
              ge = function (oe) {
                return D.s(K % 12 || 12, oe, "0");
              },
              me =
                be ||
                function (oe, fe, he) {
                  var xe = oe < 12 ? "AM" : "PM";
                  return he ? xe.toLowerCase() : xe;
                };
            return F.replace(j, function (oe, fe) {
              return (
                fe ||
                (function (he) {
                  switch (he) {
                    case "YY":
                      return String(A.$y).slice(-2);
                    case "YYYY":
                      return D.s(A.$y, 4, "0");
                    case "M":
                      return te + 1;
                    case "MM":
                      return D.s(te + 1, 2, "0");
                    case "MMM":
                      return de(_.monthsShort, te, ie, 3);
                    case "MMMM":
                      return de(ie, te);
                    case "D":
                      return A.$D;
                    case "DD":
                      return D.s(A.$D, 2, "0");
                    case "d":
                      return String(A.$W);
                    case "dd":
                      return de(_.weekdaysMin, A.$W, re, 2);
                    case "ddd":
                      return de(_.weekdaysShort, A.$W, re, 3);
                    case "dddd":
                      return re[A.$W];
                    case "H":
                      return String(K);
                    case "HH":
                      return D.s(K, 2, "0");
                    case "h":
                      return ge(1);
                    case "hh":
                      return ge(2);
                    case "a":
                      return me(K, J, !0);
                    case "A":
                      return me(K, J, !1);
                    case "m":
                      return String(J);
                    case "mm":
                      return D.s(J, 2, "0");
                    case "s":
                      return String(A.$s);
                    case "ss":
                      return D.s(A.$s, 2, "0");
                    case "SSS":
                      return D.s(A.$ms, 3, "0");
                    case "Z":
                      return E;
                  }
                  return null;
                })(oe) ||
                E.replace(":", "")
              );
            });
          }),
          (p.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (p.diff = function (M, A, _) {
            var F,
              E = this,
              K = D.p(A),
              J = Y(M),
              te = (J.utcOffset() - this.utcOffset()) * e,
              re = this - J,
              ie = function () {
                return D.m(E, J);
              };
            switch (K) {
              case T:
                F = ie() / 12;
                break;
              case w:
                F = ie();
                break;
              case P:
                F = ie() / 3;
                break;
              case $:
                F = (re - te) / 6048e5;
                break;
              case c:
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
            return _ ? F : D.a(F);
          }),
          (p.daysInMonth = function () {
            return this.endOf(w).$D;
          }),
          (p.$locale = function () {
            return i[this.$L];
          }),
          (p.locale = function (M, A) {
            if (!M) return this.$L;
            var _ = this.clone(),
              F = b(M, A, !0);
            return F && (_.$L = F), _;
          }),
          (p.clone = function () {
            return D.w(this.$d, this);
          }),
          (p.toDate = function () {
            return new Date(this.valueOf());
          }),
          (p.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (p.toISOString = function () {
            return this.$d.toISOString();
          }),
          (p.toString = function () {
            return this.$d.toUTCString();
          }),
          O
        );
      })(),
      G = z.prototype;
    return (
      (Y.prototype = G),
      [
        ["$ms", n],
        ["$s", y],
        ["$m", u],
        ["$H", m],
        ["$W", c],
        ["$M", w],
        ["$y", T],
        ["$D", B],
      ].forEach(function (O) {
        G[O[1]] = function (p) {
          return this.$g(p, O[0], O[1]);
        };
      }),
      (Y.extend = function (O, p) {
        return O.$i || (O(p, z, Y), (O.$i = !0)), Y;
      }),
      (Y.locale = b),
      (Y.isDayjs = r),
      (Y.unix = function (O) {
        return Y(1e3 * O);
      }),
      (Y.en = i[L]),
      (Y.Ls = i),
      (Y.p = {}),
      Y
    );
  });
})(_t);
var _r = _t.exports;
const d = /* @__PURE__ */ Ee(_r);
var Vt = { exports: {} };
(function (t, o) {
  (function (a, e) {
    t.exports = e();
  })(Ye, function () {
    return function (a, e, l) {
      var n = e.prototype,
        y = function (w) {
          return w && (w.indexOf ? w : w.s);
        },
        u = function (w, P, T, B, k) {
          var V = w.name ? w : w.$locale(),
            j = y(V[P]),
            S = y(V[T]),
            g =
              j ||
              S.map(function (L) {
                return L.slice(0, B);
              });
          if (!k) return g;
          var N = V.weekStart;
          return g.map(function (L, i) {
            return g[(i + (N || 0)) % 7];
          });
        },
        m = function () {
          return l.Ls[l.locale()];
        },
        c = function (w, P) {
          return (
            w.formats[P] ||
            (function (T) {
              return T.replace(
                /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                function (B, k, V) {
                  return k || V.slice(1);
                },
              );
            })(w.formats[P.toUpperCase()])
          );
        },
        $ = function () {
          var w = this;
          return {
            months: function (P) {
              return P ? P.format("MMMM") : u(w, "months");
            },
            monthsShort: function (P) {
              return P ? P.format("MMM") : u(w, "monthsShort", "months", 3);
            },
            firstDayOfWeek: function () {
              return w.$locale().weekStart || 0;
            },
            weekdays: function (P) {
              return P ? P.format("dddd") : u(w, "weekdays");
            },
            weekdaysMin: function (P) {
              return P ? P.format("dd") : u(w, "weekdaysMin", "weekdays", 2);
            },
            weekdaysShort: function (P) {
              return P ? P.format("ddd") : u(w, "weekdaysShort", "weekdays", 3);
            },
            longDateFormat: function (P) {
              return c(w.$locale(), P);
            },
            meridiem: this.$locale().meridiem,
            ordinal: this.$locale().ordinal,
          };
        };
      (n.localeData = function () {
        return $.bind(this)();
      }),
        (l.localeData = function () {
          var w = m();
          return {
            firstDayOfWeek: function () {
              return w.weekStart || 0;
            },
            weekdays: function () {
              return l.weekdays();
            },
            weekdaysShort: function () {
              return l.weekdaysShort();
            },
            weekdaysMin: function () {
              return l.weekdaysMin();
            },
            months: function () {
              return l.months();
            },
            monthsShort: function () {
              return l.monthsShort();
            },
            longDateFormat: function (P) {
              return c(w, P);
            },
            meridiem: w.meridiem,
            ordinal: w.ordinal,
          };
        }),
        (l.months = function () {
          return u(m(), "months");
        }),
        (l.monthsShort = function () {
          return u(m(), "monthsShort", "months", 3);
        }),
        (l.weekdays = function (w) {
          return u(m(), "weekdays", null, null, w);
        }),
        (l.weekdaysShort = function (w) {
          return u(m(), "weekdaysShort", "weekdays", 3, w);
        }),
        (l.weekdaysMin = function (w) {
          return u(m(), "weekdaysMin", "weekdays", 2, w);
        });
    };
  });
})(Vt);
var Vr = Vt.exports;
const Pr = /* @__PURE__ */ Ee(Vr);
var Pt = { exports: {} };
(function (t, o) {
  (function (a, e) {
    t.exports = e();
  })(Ye, function () {
    var a = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A",
    };
    return function (e, l, n) {
      var y = l.prototype,
        u = y.format;
      (n.en.formats = a),
        (y.format = function (m) {
          m === void 0 && (m = "YYYY-MM-DDTHH:mm:ssZ");
          var c = this.$locale().formats,
            $ = (function (w, P) {
              return w.replace(
                /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                function (T, B, k) {
                  var V = k && k.toUpperCase();
                  return (
                    B ||
                    P[k] ||
                    a[k] ||
                    P[V].replace(
                      /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                      function (j, S, g) {
                        return S || g.slice(1);
                      },
                    )
                  );
                },
              );
            })(m, c === void 0 ? {} : c);
          return u.call(this, $);
        });
    };
  });
})(Pt);
var Or = Pt.exports;
const Tr = /* @__PURE__ */ Ee(Or);
var Ot = { exports: {} };
(function (t, o) {
  (function (a, e) {
    t.exports = e();
  })(Ye, function () {
    var a = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
      },
      e =
        /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
      l = /\d\d/,
      n = /\d\d?/,
      y = /\d*[^-_:/,()\s\d]+/,
      u = {},
      m = function (k) {
        return (k = +k) + (k > 68 ? 1900 : 2e3);
      },
      c = function (k) {
        return function (V) {
          this[k] = +V;
        };
      },
      $ = [
        /[+-]\d\d:?(\d\d)?|Z/,
        function (k) {
          (this.zone || (this.zone = {})).offset = (function (V) {
            if (!V || V === "Z") return 0;
            var j = V.match(/([+-]|\d\d)/g),
              S = 60 * j[1] + (+j[2] || 0);
            return S === 0 ? 0 : j[0] === "+" ? -S : S;
          })(k);
        },
      ],
      w = function (k) {
        var V = u[k];
        return V && (V.indexOf ? V : V.s.concat(V.f));
      },
      P = function (k, V) {
        var j,
          S = u.meridiem;
        if (S) {
          for (var g = 1; g <= 24; g += 1)
            if (k.indexOf(S(g, 0, V)) > -1) {
              j = g > 12;
              break;
            }
        } else j = k === (V ? "pm" : "PM");
        return j;
      },
      T = {
        A: [
          y,
          function (k) {
            this.afternoon = P(k, !1);
          },
        ],
        a: [
          y,
          function (k) {
            this.afternoon = P(k, !0);
          },
        ],
        S: [
          /\d/,
          function (k) {
            this.milliseconds = 100 * +k;
          },
        ],
        SS: [
          l,
          function (k) {
            this.milliseconds = 10 * +k;
          },
        ],
        SSS: [
          /\d{3}/,
          function (k) {
            this.milliseconds = +k;
          },
        ],
        s: [n, c("seconds")],
        ss: [n, c("seconds")],
        m: [n, c("minutes")],
        mm: [n, c("minutes")],
        H: [n, c("hours")],
        h: [n, c("hours")],
        HH: [n, c("hours")],
        hh: [n, c("hours")],
        D: [n, c("day")],
        DD: [l, c("day")],
        Do: [
          y,
          function (k) {
            var V = u.ordinal,
              j = k.match(/\d+/);
            if (((this.day = j[0]), V))
              for (var S = 1; S <= 31; S += 1)
                V(S).replace(/\[|\]/g, "") === k && (this.day = S);
          },
        ],
        M: [n, c("month")],
        MM: [l, c("month")],
        MMM: [
          y,
          function (k) {
            var V = w("months"),
              j =
                (
                  w("monthsShort") ||
                  V.map(function (S) {
                    return S.slice(0, 3);
                  })
                ).indexOf(k) + 1;
            if (j < 1) throw new Error();
            this.month = j % 12 || j;
          },
        ],
        MMMM: [
          y,
          function (k) {
            var V = w("months").indexOf(k) + 1;
            if (V < 1) throw new Error();
            this.month = V % 12 || V;
          },
        ],
        Y: [/[+-]?\d+/, c("year")],
        YY: [
          l,
          function (k) {
            this.year = m(k);
          },
        ],
        YYYY: [/\d{4}/, c("year")],
        Z: $,
        ZZ: $,
      };
    function B(k) {
      var V, j;
      (V = k), (j = u && u.formats);
      for (
        var S = (k = V.replace(
            /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
            function (Y, D, z) {
              var G = z && z.toUpperCase();
              return (
                D ||
                j[z] ||
                a[z] ||
                j[G].replace(
                  /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                  function (O, p, M) {
                    return p || M.slice(1);
                  },
                )
              );
            },
          )).match(e),
          g = S.length,
          N = 0;
        N < g;
        N += 1
      ) {
        var L = S[N],
          i = T[L],
          r = i && i[0],
          b = i && i[1];
        S[N] = b ? { regex: r, parser: b } : L.replace(/^\[|\]$/g, "");
      }
      return function (Y) {
        for (var D = {}, z = 0, G = 0; z < g; z += 1) {
          var O = S[z];
          if (typeof O == "string") G += O.length;
          else {
            var p = O.regex,
              M = O.parser,
              A = Y.slice(G),
              _ = p.exec(A)[0];
            M.call(D, _), (Y = Y.replace(_, ""));
          }
        }
        return (
          (function (F) {
            var E = F.afternoon;
            if (E !== void 0) {
              var K = F.hours;
              E ? K < 12 && (F.hours += 12) : K === 12 && (F.hours = 0),
                delete F.afternoon;
            }
          })(D),
          D
        );
      };
    }
    return function (k, V, j) {
      (j.p.customParseFormat = !0),
        k && k.parseTwoDigitYear && (m = k.parseTwoDigitYear);
      var S = V.prototype,
        g = S.parse;
      S.parse = function (N) {
        var L = N.date,
          i = N.utc,
          r = N.args;
        this.$u = i;
        var b = r[1];
        if (typeof b == "string") {
          var Y = r[2] === !0,
            D = r[3] === !0,
            z = Y || D,
            G = r[2];
          D && (G = r[2]),
            (u = this.$locale()),
            !Y && G && (u = j.Ls[G]),
            (this.$d = (function (A, _, F) {
              try {
                if (["x", "X"].indexOf(_) > -1)
                  return new Date((_ === "X" ? 1e3 : 1) * A);
                var E = B(_)(A),
                  K = E.year,
                  J = E.month,
                  te = E.day,
                  re = E.hours,
                  ie = E.minutes,
                  be = E.seconds,
                  de = E.milliseconds,
                  ge = E.zone,
                  me = /* @__PURE__ */ new Date(),
                  oe = te || (K || J ? 1 : me.getDate()),
                  fe = K || me.getFullYear(),
                  he = 0;
                (K && !J) || (he = J > 0 ? J - 1 : me.getMonth());
                var xe = re || 0,
                  Ne = ie || 0,
                  Re = be || 0,
                  f = de || 0;
                return ge
                  ? new Date(
                      Date.UTC(
                        fe,
                        he,
                        oe,
                        xe,
                        Ne,
                        Re,
                        f + 60 * ge.offset * 1e3,
                      ),
                    )
                  : F
                  ? new Date(Date.UTC(fe, he, oe, xe, Ne, Re, f))
                  : new Date(fe, he, oe, xe, Ne, Re, f);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(L, b, i)),
            this.init(),
            G && G !== !0 && (this.$L = this.locale(G).$L),
            z &&
              L != this.format(b) &&
              (this.$d = /* @__PURE__ */ new Date("")),
            (u = {});
        } else if (b instanceof Array)
          for (var O = b.length, p = 1; p <= O; p += 1) {
            r[1] = b[p - 1];
            var M = j.apply(this, r);
            if (M.isValid()) {
              (this.$d = M.$d), (this.$L = M.$L), this.init();
              break;
            }
            p === O && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else g.call(this, N);
      };
    };
  });
})(Ot);
var Ar = Ot.exports;
const Cr = /* @__PURE__ */ Ee(Ar);
var Tt = { exports: {} };
(function (t, o) {
  (function (a, e) {
    t.exports = e();
  })(Ye, function () {
    return function (a, e, l) {
      e.prototype.isToday = function () {
        var n = "YYYY-MM-DD",
          y = l();
        return this.format(n) === y.format(n);
      };
    };
  });
})(Tt);
var Yr = Tt.exports;
const Er = /* @__PURE__ */ Ee(Yr);
var At = { exports: {} };
(function (t, o) {
  (function (a, e) {
    t.exports = e();
  })(Ye, function () {
    return function (a, e, l) {
      e.prototype.isBetween = function (n, y, u, m) {
        var c = l(n),
          $ = l(y),
          w = (m = m || "()")[0] === "(",
          P = m[1] === ")";
        return (
          ((w ? this.isAfter(c, u) : !this.isBefore(c, u)) &&
            (P ? this.isBefore($, u) : !this.isAfter($, u))) ||
          ((w ? this.isBefore(c, u) : !this.isAfter(c, u)) &&
            (P ? this.isAfter($, u) : !this.isBefore($, u)))
        );
      };
    };
  });
})(At);
var Lr = At.exports;
const Fr = /* @__PURE__ */ Ee(Lr);
var Ct = { exports: {} };
(function (t, o) {
  (function (a, e) {
    t.exports = e();
  })(Ye, function () {
    var a,
      e,
      l = 1e3,
      n = 6e4,
      y = 36e5,
      u = 864e5,
      m =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      c = 31536e6,
      $ = 2592e6,
      w =
        /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
      P = {
        years: c,
        months: $,
        days: u,
        hours: y,
        minutes: n,
        seconds: l,
        milliseconds: 1,
        weeks: 6048e5,
      },
      T = function (i) {
        return i instanceof N;
      },
      B = function (i, r, b) {
        return new N(i, b, r.$l);
      },
      k = function (i) {
        return e.p(i) + "s";
      },
      V = function (i) {
        return i < 0;
      },
      j = function (i) {
        return V(i) ? Math.ceil(i) : Math.floor(i);
      },
      S = function (i) {
        return Math.abs(i);
      },
      g = function (i, r) {
        return i
          ? V(i)
            ? { negative: !0, format: "" + S(i) + r }
            : { negative: !1, format: "" + i + r }
          : { negative: !1, format: "" };
      },
      N = (function () {
        function i(b, Y, D) {
          var z = this;
          if (
            ((this.$d = {}),
            (this.$l = D),
            b === void 0 && ((this.$ms = 0), this.parseFromMilliseconds()),
            Y)
          )
            return B(b * P[k(Y)], this);
          if (typeof b == "number")
            return (this.$ms = b), this.parseFromMilliseconds(), this;
          if (typeof b == "object")
            return (
              Object.keys(b).forEach(function (p) {
                z.$d[k(p)] = b[p];
              }),
              this.calMilliseconds(),
              this
            );
          if (typeof b == "string") {
            var G = b.match(w);
            if (G) {
              var O = G.slice(2).map(function (p) {
                return p != null ? Number(p) : 0;
              });
              return (
                (this.$d.years = O[0]),
                (this.$d.months = O[1]),
                (this.$d.weeks = O[2]),
                (this.$d.days = O[3]),
                (this.$d.hours = O[4]),
                (this.$d.minutes = O[5]),
                (this.$d.seconds = O[6]),
                this.calMilliseconds(),
                this
              );
            }
          }
          return this;
        }
        var r = i.prototype;
        return (
          (r.calMilliseconds = function () {
            var b = this;
            this.$ms = Object.keys(this.$d).reduce(function (Y, D) {
              return Y + (b.$d[D] || 0) * P[D];
            }, 0);
          }),
          (r.parseFromMilliseconds = function () {
            var b = this.$ms;
            (this.$d.years = j(b / c)),
              (b %= c),
              (this.$d.months = j(b / $)),
              (b %= $),
              (this.$d.days = j(b / u)),
              (b %= u),
              (this.$d.hours = j(b / y)),
              (b %= y),
              (this.$d.minutes = j(b / n)),
              (b %= n),
              (this.$d.seconds = j(b / l)),
              (b %= l),
              (this.$d.milliseconds = b);
          }),
          (r.toISOString = function () {
            var b = g(this.$d.years, "Y"),
              Y = g(this.$d.months, "M"),
              D = +this.$d.days || 0;
            this.$d.weeks && (D += 7 * this.$d.weeks);
            var z = g(D, "D"),
              G = g(this.$d.hours, "H"),
              O = g(this.$d.minutes, "M"),
              p = this.$d.seconds || 0;
            this.$d.milliseconds && (p += this.$d.milliseconds / 1e3);
            var M = g(p, "S"),
              A =
                b.negative ||
                Y.negative ||
                z.negative ||
                G.negative ||
                O.negative ||
                M.negative,
              _ = G.format || O.format || M.format ? "T" : "",
              F =
                (A ? "-" : "") +
                "P" +
                b.format +
                Y.format +
                z.format +
                _ +
                G.format +
                O.format +
                M.format;
            return F === "P" || F === "-P" ? "P0D" : F;
          }),
          (r.toJSON = function () {
            return this.toISOString();
          }),
          (r.format = function (b) {
            var Y = b || "YYYY-MM-DDTHH:mm:ss",
              D = {
                Y: this.$d.years,
                YY: e.s(this.$d.years, 2, "0"),
                YYYY: e.s(this.$d.years, 4, "0"),
                M: this.$d.months,
                MM: e.s(this.$d.months, 2, "0"),
                D: this.$d.days,
                DD: e.s(this.$d.days, 2, "0"),
                H: this.$d.hours,
                HH: e.s(this.$d.hours, 2, "0"),
                m: this.$d.minutes,
                mm: e.s(this.$d.minutes, 2, "0"),
                s: this.$d.seconds,
                ss: e.s(this.$d.seconds, 2, "0"),
                SSS: e.s(this.$d.milliseconds, 3, "0"),
              };
            return Y.replace(m, function (z, G) {
              return G || String(D[z]);
            });
          }),
          (r.as = function (b) {
            return this.$ms / P[k(b)];
          }),
          (r.get = function (b) {
            var Y = this.$ms,
              D = k(b);
            return (
              D === "milliseconds"
                ? (Y %= 1e3)
                : (Y = D === "weeks" ? j(Y / P[D]) : this.$d[D]),
              Y === 0 ? 0 : Y
            );
          }),
          (r.add = function (b, Y, D) {
            var z;
            return (
              (z = Y ? b * P[k(Y)] : T(b) ? b.$ms : B(b, this).$ms),
              B(this.$ms + z * (D ? -1 : 1), this)
            );
          }),
          (r.subtract = function (b, Y) {
            return this.add(b, Y, !0);
          }),
          (r.locale = function (b) {
            var Y = this.clone();
            return (Y.$l = b), Y;
          }),
          (r.clone = function () {
            return B(this.$ms, this);
          }),
          (r.humanize = function (b) {
            return a().add(this.$ms, "ms").locale(this.$l).fromNow(!b);
          }),
          (r.valueOf = function () {
            return this.asMilliseconds();
          }),
          (r.milliseconds = function () {
            return this.get("milliseconds");
          }),
          (r.asMilliseconds = function () {
            return this.as("milliseconds");
          }),
          (r.seconds = function () {
            return this.get("seconds");
          }),
          (r.asSeconds = function () {
            return this.as("seconds");
          }),
          (r.minutes = function () {
            return this.get("minutes");
          }),
          (r.asMinutes = function () {
            return this.as("minutes");
          }),
          (r.hours = function () {
            return this.get("hours");
          }),
          (r.asHours = function () {
            return this.as("hours");
          }),
          (r.days = function () {
            return this.get("days");
          }),
          (r.asDays = function () {
            return this.as("days");
          }),
          (r.weeks = function () {
            return this.get("weeks");
          }),
          (r.asWeeks = function () {
            return this.as("weeks");
          }),
          (r.months = function () {
            return this.get("months");
          }),
          (r.asMonths = function () {
            return this.as("months");
          }),
          (r.years = function () {
            return this.get("years");
          }),
          (r.asYears = function () {
            return this.as("years");
          }),
          i
        );
      })(),
      L = function (i, r, b) {
        return i
          .add(r.years() * b, "y")
          .add(r.months() * b, "M")
          .add(r.days() * b, "d")
          .add(r.hours() * b, "h")
          .add(r.minutes() * b, "m")
          .add(r.seconds() * b, "s")
          .add(r.milliseconds() * b, "ms");
      };
    return function (i, r, b) {
      (a = b),
        (e = b().$utils()),
        (b.duration = function (z, G) {
          var O = b.locale();
          return B(z, { $l: O }, G);
        }),
        (b.isDuration = T);
      var Y = r.prototype.add,
        D = r.prototype.subtract;
      (r.prototype.add = function (z, G) {
        return T(z) ? L(this, z, 1) : Y.bind(this)(z, G);
      }),
        (r.prototype.subtract = function (z, G) {
          return T(z) ? L(this, z, -1) : D.bind(this)(z, G);
        });
    };
  });
})(Ct);
var Br = Ct.exports;
const Nr = /* @__PURE__ */ Ee(Br),
  Rr = { class: "flex justify-between items-center px-2 py-1.5" },
  Ir = { class: "flex-shrink-0" },
  Hr = { class: "inline-flex rounded-full" },
  Ur = {
    class: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  },
  zr = ["d"],
  Wr = { class: "px-1.5 space-x-1.5 flex flex-1" },
  Kr = { class: "flex-1 flex rounded-md" },
  Gr = ["textContent"],
  Zr = { class: "flex-1 flex rounded-md" },
  qr = ["textContent"],
  Jr = { class: "flex-shrink-0" },
  Xr = { class: "inline-flex rounded-full" },
  Qr = {
    class: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  },
  eo = ["d"],
  Ge = /* @__PURE__ */ ue({
    __name: "Header",
    props: {
      panel: {},
      calendar: {},
    },
    setup(t) {
      return (o, a) => (
        W(),
        Z("div", Rr, [
          C("div", Ir, [
            ce(
              C(
                "span",
                Hr,
                [
                  C(
                    "button",
                    {
                      type: "button",
                      class:
                        "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
                      onClick:
                        a[0] ||
                        (a[0] = (e) =>
                          o.panel.calendar
                            ? o.calendar.onPrevious()
                            : o.calendar.onPreviousYear()),
                    },
                    [
                      (W(),
                      Z("svg", Ur, [
                        C(
                          "path",
                          {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.5",
                            d: o.panel.calendar
                              ? "M15 19l-7-7 7-7"
                              : "M11 19l-7-7 7-7m8 14l-7-7 7-7",
                          },
                          null,
                          8,
                          zr,
                        ),
                      ])),
                    ],
                  ),
                ],
                512,
              ),
              [[pe, o.panel.calendar || o.panel.year]],
            ),
          ]),
          C("div", Wr, [
            C("span", Kr, [
              C(
                "button",
                {
                  type: "button",
                  class:
                    "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
                  onClick: a[1] || (a[1] = (e) => o.calendar.openMonth()),
                  textContent: ne(o.calendar.month),
                },
                null,
                8,
                Gr,
              ),
            ]),
            C("span", Zr, [
              C(
                "button",
                {
                  type: "button",
                  class:
                    "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
                  onClick: a[2] || (a[2] = (e) => o.calendar.openYear()),
                  textContent: ne(o.calendar.year),
                },
                null,
                8,
                qr,
              ),
            ]),
          ]),
          C("div", Jr, [
            ce(
              C(
                "span",
                Xr,
                [
                  C(
                    "button",
                    {
                      type: "button",
                      class:
                        "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
                      onClick:
                        a[3] ||
                        (a[3] = (e) =>
                          o.panel.calendar
                            ? o.calendar.onNext()
                            : o.calendar.onNextYear()),
                    },
                    [
                      (W(),
                      Z("svg", Qr, [
                        C(
                          "path",
                          {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.5",
                            d: o.panel.calendar
                              ? "M9 5l7 7-7 7"
                              : "M13 5l7 7-7 7M5 5l7 7-7 7",
                          },
                          null,
                          8,
                          eo,
                        ),
                      ])),
                    ],
                  ),
                ],
                512,
              ),
              [[pe, o.panel.calendar || o.panel.year]],
            ),
          ]),
        ])
      );
    },
  });
function we(t, o) {
  const a = Se(t, o);
  if (!a) throw new Error(`Could not resolve ${t.description}`);
  return a;
}
const Yt = Symbol("isBetweenRange"),
  Et = Symbol("betweenRangeClasses"),
  Lt = Symbol("datepickerClasses"),
  Ft = Symbol("atMouseOver"),
  Bt = Symbol("setToToday"),
  Nt = Symbol("setToYesterday"),
  Rt = Symbol("setToLastDay"),
  It = Symbol("setToThisMonth"),
  Ht = Symbol("setToLastMonth"),
  Ut = Symbol("setToCustomShortcut"),
  to = {
    key: 0,
    class:
      "relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/[.1] order-last sm:order-none dark:border-vtd-secondary-700/[1] sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0",
  },
  ro = {
    key: 0,
    class:
      "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0",
  },
  oo = ["onClick", "textContent"],
  ao = {
    key: 1,
    class:
      "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0",
  },
  ct = /* @__PURE__ */ ue({
    __name: "Shortcut",
    props: {
      shortcuts: { type: [Boolean, Function] },
      close: { type: Function },
      asRange: { type: Boolean },
      asSingle: { type: Boolean },
      i18n: {},
    },
    setup(t) {
      const o = t,
        a = we(Bt),
        e = we(Nt),
        l = we(Rt),
        n = we(It),
        y = we(Ht),
        u = we(Ut),
        m = le(() => (typeof o.shortcuts == "function" ? o.shortcuts() : !1));
      return (c, $) =>
        (o.asRange && o.asSingle) || (o.asRange && !o.asSingle)
          ? (W(),
            Z("div", to, [
              m.value
                ? (W(),
                  Z("ol", ro, [
                    (W(!0),
                    Z(
                      $e,
                      null,
                      We(
                        m.value,
                        (w, P) => (
                          W(),
                          Z("li", { key: P }, [
                            C(
                              "a",
                              {
                                href: "#",
                                class:
                                  "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
                                onClick: Te(
                                  (T) => se(u)(w, c.close),
                                  ["prevent"],
                                ),
                                textContent: ne(w.label),
                              },
                              null,
                              8,
                              oo,
                            ),
                          ])
                        ),
                      ),
                      128,
                    )),
                  ]))
                : (W(),
                  Z("ol", ao, [
                    C("li", null, [
                      C(
                        "a",
                        {
                          href: "#",
                          class:
                            "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
                          onClick:
                            $[0] ||
                            ($[0] = Te((w) => se(a)(c.close), ["prevent"])),
                        },
                        ne(o.i18n.today),
                        1,
                      ),
                    ]),
                    C("li", null, [
                      C(
                        "a",
                        {
                          href: "#",
                          class:
                            "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
                          onClick:
                            $[1] ||
                            ($[1] = Te((w) => se(e)(c.close), ["prevent"])),
                        },
                        ne(o.i18n.yesterday),
                        1,
                      ),
                    ]),
                    C("li", null, [
                      C(
                        "a",
                        {
                          href: "#",
                          class:
                            "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
                          onClick:
                            $[2] ||
                            ($[2] = Te((w) => se(l)(7, c.close), ["prevent"])),
                        },
                        ne(o.i18n.past(7)),
                        1,
                      ),
                    ]),
                    C("li", null, [
                      C(
                        "a",
                        {
                          href: "#",
                          class:
                            "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
                          onClick:
                            $[3] ||
                            ($[3] = Te((w) => se(l)(30, c.close), ["prevent"])),
                        },
                        ne(o.i18n.past(30)),
                        1,
                      ),
                    ]),
                    C("li", null, [
                      C(
                        "a",
                        {
                          href: "#",
                          class:
                            "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
                          onClick:
                            $[4] ||
                            ($[4] = Te((w) => se(n)(c.close), ["prevent"])),
                        },
                        ne(o.i18n.currentMonth),
                        1,
                      ),
                    ]),
                    C("li", null, [
                      C(
                        "a",
                        {
                          href: "#",
                          class:
                            "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
                          onClick:
                            $[5] ||
                            ($[5] = Te((w) => se(y)(c.close), ["prevent"])),
                        },
                        ne(o.i18n.pastMonth),
                        1,
                      ),
                    ]),
                  ])),
            ]))
          : ye("", !0);
    },
  }),
  no = { class: "grid grid-cols-7 gap-y-0.5 my-1" },
  so = ["data-tooltip"],
  lo = [
    "disabled",
    "data-date",
    "onClick",
    "onMouseenter",
    "onFocusin",
    "textContent",
  ],
  Ze = /* @__PURE__ */ ue({
    __name: "Calendar",
    props: {
      calendar: {},
      weeks: {},
      asRange: { type: Boolean },
    },
    emits: ["updateDate"],
    setup(t, { emit: o }) {
      const a = we(Yt),
        e = we(Et),
        l = we(Lt),
        n = we(Ft);
      return (y, u) => (
        W(),
        Z("div", no, [
          Q(
            Zt,
            {
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "enter-active-class": "transition-opacity ease-out duration-300",
              "leave-active-class": "transition-opacity ease-in duration-200",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0",
            },
            {
              default: Le(() => [
                (W(!0),
                Z(
                  $e,
                  null,
                  We(
                    y.calendar.date(),
                    (m, c) => (
                      W(),
                      Z(
                        "div",
                        {
                          key: c,
                          class: Pe([
                            "relative",
                            { "vtd-tooltip": y.asRange && m.duration() },
                          ]),
                          "data-tooltip": `${m.duration()}`,
                        },
                        [
                          Q(
                            pt,
                            {
                              "enter-from-class": "opacity-0",
                              "enter-to-class": "opacity-100",
                              "enter-active-class":
                                "transition-opacity ease-out duration-200",
                              "leave-active-class":
                                "transition-opacity ease-in duration-150",
                              "leave-from-class": "opacity-100",
                              "leave-to-class": "opacity-0",
                            },
                            {
                              default: Le(() => [
                                se(a)(m) || m.hovered()
                                  ? (W(),
                                    Z(
                                      "span",
                                      {
                                        key: 0,
                                        class: Pe([
                                          "absolute bg-vtd-primary-100 bg-opacity-60 dark:bg-vtd-secondary-700 dark:bg-opacity-50",
                                          se(e)(m),
                                        ]),
                                      },
                                      null,
                                      2,
                                    ))
                                  : ye("", !0),
                              ]),
                              _: 2,
                            },
                            1024,
                          ),
                          C(
                            "button",
                            {
                              type: "button",
                              class: Pe([
                                "vtd-datepicker-date relative w-[2.7rem] h-[2.7rem] lg:w-10 lg:h-10 flex justify-center items-center text-xs 2xl:text-sm",
                                [
                                  se(l)(m),
                                  y.asRange
                                    ? "transition-all"
                                    : "transition-colors",
                                ],
                              ]),
                              disabled: m.disabled || m.inRange(),
                              "data-date": m.toDate(),
                              onClick: ($) => o("updateDate", m),
                              onMouseenter: ($) => se(n)(m),
                              onFocusin: ($) => se(n)(m),
                              textContent: ne(m.date()),
                            },
                            null,
                            42,
                            lo,
                          ),
                        ],
                        10,
                        so,
                      )
                    ),
                  ),
                  128,
                )),
              ]),
              _: 1,
            },
          ),
        ])
      );
    },
  }),
  uo = { class: "flex flex-wrap" },
  io = { class: "flex rounded-md mt-1.5" },
  co = ["onClick", "textContent"],
  qe = /* @__PURE__ */ ue({
    __name: "Year",
    props: {
      years: {},
    },
    emits: ["updateYear"],
    setup(t, { emit: o }) {
      return (a, e) => (
        W(),
        Z("div", uo, [
          (W(!0),
          Z(
            $e,
            null,
            We(
              a.years,
              (l, n) => (
                W(),
                Z(
                  "div",
                  {
                    key: n,
                    class: "w-1/2 px-0.5",
                  },
                  [
                    C("span", io, [
                      C(
                        "button",
                        {
                          type: "button",
                          class:
                            "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
                          onClick: (y) => o("updateYear", l),
                          textContent: ne(l),
                        },
                        null,
                        8,
                        co,
                      ),
                    ]),
                  ],
                )
              ),
            ),
            128,
          )),
        ])
      );
    },
  }),
  fo = { class: "grid grid-cols-7 py-2 mt-0.5" },
  po = ["textContent"],
  Je = /* @__PURE__ */ ue({
    __name: "Week",
    props: {
      weeks: {},
    },
    setup(t) {
      return (o, a) => (
        W(),
        Z("div", fo, [
          (W(!0),
          Z(
            $e,
            null,
            We(
              o.weeks,
              (e, l) => (
                W(),
                Z(
                  "div",
                  {
                    key: l,
                    class:
                      "text-vtd-secondary-500 text-xs 2xl:text-sm tracking-wide font-medium text-center cursor-default dark:text-vtd-secondary-400",
                  },
                  [
                    C(
                      "span",
                      {
                        textContent: ne(e),
                      },
                      null,
                      8,
                      po,
                    ),
                  ],
                )
              ),
            ),
            128,
          )),
        ])
      );
    },
  }),
  vo = { class: "flex flex-wrap mt-1.5" },
  mo = { class: "flex rounded-md mt-1.5" },
  ho = ["onClick", "textContent"],
  Xe = /* @__PURE__ */ ue({
    __name: "Month",
    props: {
      months: {},
    },
    emits: ["updateMonth"],
    setup(t, { emit: o }) {
      return (a, e) => (
        W(),
        Z("div", vo, [
          (W(!0),
          Z(
            $e,
            null,
            We(
              a.months,
              (l, n) => (
                W(),
                Z(
                  "div",
                  {
                    key: n,
                    class: "w-1/2 px-0.5",
                  },
                  [
                    C("span", mo, [
                      C(
                        "button",
                        {
                          type: "button",
                          class:
                            "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
                          onClick: (y) => o("updateMonth", n),
                          textContent: ne(l),
                        },
                        null,
                        8,
                        ho,
                      ),
                    ]),
                  ],
                )
              ),
            ),
            128,
          )),
        ])
      );
    },
  });
function yo() {
  const t = (u) => {
    const m = [],
      c = u.localeData().firstDayOfWeek();
    for (let $ = 0; $ <= u.date(0 - c).day(); $++)
      m.push(u.date(0).subtract($, "day"));
    return m.sort(($, w) => $.date() - w.date());
  };
  return {
    usePreviousDate: t,
    useCurrentDate: (u) =>
      Array.from(
        {
          length: u.daysInMonth(),
        },
        (m, c) => u.date(c + 1),
      ),
    useNextDate: (u) => {
      const m = [];
      for (let c = 1; c <= 42 - (t(u).length + u.daysInMonth()); c++)
        m.push(u.date(c).month(u.month()).add(1, "month"));
      return m;
    },
    useDisableDate: (u, { disableDate: m }) =>
      typeof m == "function" ? m(u.toDate()) : !1,
    useBetweenRange: (u, { previous: m, next: c }) => {
      const $ = m.isAfter(c, "date") ? "(]" : "[)";
      return !!(u.isBetween(m, c, "date", $) && !u.off);
    },
    useToValueFromString: (u, { formatter: m }) => u.format(m.date),
    useToValueFromArray: (
      { previous: u, next: m },
      { formatter: c, separator: $ },
    ) => `${u.format(c.date)}${$}${m.format(c.date)}`,
  };
}
function bo() {
  return {
    useVisibleViewport: (o) => {
      if (o) {
        const { right: a } = o.getBoundingClientRect(),
          e = window.innerWidth || document.documentElement.clientWidth;
        return a > e;
      } else return null;
    },
  };
}
const go = ["disabled", "placeholder"],
  xo = {
    class:
      "absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden",
  },
  wo = ["disabled"],
  ko = {
    class: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  },
  $o = {
    key: 0,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5",
    d: "M6 18L18 6M6 6l12 12",
  },
  jo = {
    key: 1,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5",
    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  Mo = { class: "flex flex-wrap lg:flex-nowrap" },
  So = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" },
  Do = {
    key: 0,
    class: "hidden h-full absolute inset-0 sm:flex justify-center items-center",
  },
  _o = /* @__PURE__ */ C(
    "div",
    {
      class:
        "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]",
    },
    null,
    -1,
  ),
  Vo = [_o],
  Po = { class: "px-0.5 sm:px-2" },
  Oo = {
    key: 1,
    class:
      "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2",
  },
  To = { class: "px-0.5 sm:px-2" },
  Ao = { key: 0 },
  Co = {
    class:
      "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]",
  },
  Yo = { class: "mt-1.5 sm:flex sm:flex-row-reverse" },
  Eo = ["disabled", "onClick", "textContent"],
  Lo = ["onClick", "textContent"],
  Fo = {
    key: 1,
    class: "sm:hidden",
  },
  Bo = {
    class:
      "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]",
  },
  No = { class: "mt-1.5 sm:flex sm:flex-row-reverse" },
  Ro = ["onClick", "textContent"],
  Io = {
    key: 1,
    class: "flex",
  },
  Ho = {
    class:
      "bg-white rounded-lg shadow-sm border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]",
  },
  Uo = { class: "flex flex-wrap lg:flex-nowrap" },
  zo = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" },
  Wo = {
    key: 0,
    class: "hidden h-full absolute inset-0 sm:flex justify-center items-center",
  },
  Ko = /* @__PURE__ */ C(
    "div",
    {
      class:
        "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]",
    },
    null,
    -1,
  ),
  Go = [Ko],
  Zo = { class: "px-0.5 sm:px-2" },
  qo = {
    key: 1,
    class:
      "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2",
  },
  Jo = { class: "px-0.5 sm:px-2" },
  Xo = { key: 0 },
  Qo = {
    class:
      "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]",
  },
  ea = { class: "mt-1.5 sm:flex sm:flex-row-reverse" },
  ta = ["disabled", "textContent"],
  ra = /* @__PURE__ */ ue({
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
      formatter: {
        default: () => ({
          date: "YYYY-MM-DD HH:mm:ss",
          month: "MMM",
        }),
      },
      startFrom: { default: () => /* @__PURE__ */ new Date() },
      weekdaysSize: { default: "short" },
      options: {
        default: () => ({
          shortcuts: {
            today: "Today",
            yesterday: "Yesterday",
            past: (t) => `Last ${t} Days`,
            currentMonth: "This Month",
            pastMonth: "Last Month",
          },
          footer: {
            apply: "Apply",
            cancel: "Cancel",
          },
        }),
      },
      modelValue: {
        default: () => [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()],
      },
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
      "clickRightNext",
    ],
    setup(t, { expose: o, emit: a }) {
      const e = t,
        {
          useCurrentDate: l,
          useDisableDate: n,
          useBetweenRange: y,
          useNextDate: u,
          usePreviousDate: m,
          useToValueFromArray: c,
          useToValueFromString: $,
        } = yo(),
        { useVisibleViewport: w } = bo();
      d.extend(Pr),
        d.extend(Tr),
        d.extend(Cr),
        d.extend(Er),
        d.extend(Fr),
        d.extend(Nr);
      const P = q(null),
        T = q(null),
        B = q(null),
        k = q(""),
        V = q(null),
        j = q(""),
        S = q([]),
        g = q([]),
        N = q(null),
        L = q(null),
        i = ft({
          previous: {
            calendar: !0,
            month: !1,
            year: !1,
          },
          next: {
            calendar: !0,
            month: !1,
            year: !1,
          },
        }),
        r = q({
          previous: d(),
          next: d().add(1, "month"),
          year: {
            previous: d().year(),
            next: d().year(),
          },
          weeks: e.weekdaysSize === "min" ? d.weekdaysMin() : d.weekdaysShort(),
          months: e.formatter.month === "MMM" ? d.monthsShort() : d.months(),
        }),
        b = le(() => r.value.weeks),
        Y = le(() => r.value.months),
        D = le(() => {
          const { previous: f, next: v, year: h } = se(r);
          return {
            previous: {
              date: () =>
                m(f)
                  .concat(l(f))
                  .concat(u(f))
                  .map(
                    (s) => (
                      Object.assign(s, {
                        today: s.isToday(),
                        active: f.month() === s.month(),
                        off: f.month() !== s.month(),
                        sunday: s.day() === 0,
                        disabled: n(s, e) && !M(s),
                        inRange: () => {
                          if (e.asSingle && !e.useRange)
                            return f.month() !== s.month();
                        },
                        hovered: () =>
                          p() && S.value.length > 1
                            ? (s.isBetween(
                                S.value[0],
                                S.value[1],
                                "date",
                                "()",
                              ) ||
                                s.isBetween(
                                  S.value[1],
                                  S.value[0],
                                  "date",
                                  "(]",
                                )) &&
                              f.month() === s.month()
                            : !1,
                        duration: () => !1,
                      }),
                      s
                    ),
                  ),
              month: f && f.format(e.formatter.month),
              year: f && f.year(),
              years: () =>
                Array.from(
                  {
                    length: 12,
                  },
                  (s, x) => h.previous + x,
                ),
              onPrevious: () => {
                (r.value.previous = f.subtract(1, "month")),
                  a("clickPrev", r.value.previous);
              },
              onNext: () => {
                (r.value.previous = f.add(1, "month")),
                  f.diff(v, "month") === -1 &&
                    (r.value.next = v.add(1, "month")),
                  a("clickNext", r.value.previous);
              },
              onPreviousYear: () => {
                r.value.year.previous = r.value.year.previous - 12;
              },
              onNextYear: () => {
                r.value.year.previous = r.value.year.previous + 12;
              },
              openMonth: () => {
                (i.previous.month = !i.previous.month),
                  (i.previous.year = !1),
                  (i.previous.calendar = !i.previous.month);
              },
              setMonth: (s) => {
                (r.value.previous = f.month(s)),
                  (i.previous.month = !i.previous.month),
                  (i.previous.year = !1),
                  (i.previous.calendar = !i.previous.month),
                  a("selectMonth", r.value.previous),
                  Ie(() => {
                    (r.value.next.isSame(r.value.previous, "month") ||
                      r.value.next.isBefore(r.value.previous)) &&
                      (r.value.next = r.value.previous.add(1, "month")),
                      (r.value.year.next = r.value.next.year());
                  });
              },
              openYear: () => {
                (i.previous.year = !i.previous.year),
                  (i.previous.month = !1),
                  (i.previous.calendar = !i.previous.year);
              },
              setYear: (s) => {
                (r.value.previous = f.year(s)),
                  (i.previous.year = !i.previous.year),
                  (i.previous.calendar = !i.previous.year),
                  a("selectYear", r.value.previous),
                  Ie(() => {
                    (r.value.next.isSame(r.value.previous, "month") ||
                      r.value.next.isBefore(r.value.previous)) &&
                      (r.value.next = r.value.previous.add(1, "month")),
                      (r.value.year.previous = r.value.previous.year()),
                      (r.value.year.next = r.value.next.year());
                  });
              },
            },
            next: {
              date: () =>
                m(v)
                  .concat(l(v))
                  .concat(u(v))
                  .map(
                    (s) => (
                      Object.assign(s, {
                        today: s.isToday(),
                        active: v.month() === s.month(),
                        off: v.month() !== s.month(),
                        sunday: s.day() === 0,
                        disabled: n(s, e) && !M(s),
                        inRange: () => {
                          if (e.asSingle && !e.useRange)
                            return v.month() !== s.month();
                        },
                        hovered: () =>
                          S.value.length > 1
                            ? (s.isBetween(
                                S.value[0],
                                S.value[1],
                                "date",
                                "()",
                              ) ||
                                s.isBetween(
                                  S.value[1],
                                  S.value[0],
                                  "date",
                                  "(]",
                                )) &&
                              v.month() === s.month()
                            : !1,
                        duration: () => !1,
                      }),
                      s
                    ),
                  ),
              month: v && v.format(e.formatter.month),
              year: v && v.year(),
              years: () =>
                Array.from(
                  {
                    length: 12,
                  },
                  (s, x) => h.next + x,
                ),
              onPrevious: () => {
                (r.value.next = v.subtract(1, "month")),
                  v.diff(f, "month") === 1 &&
                    (r.value.previous = f.subtract(1, "month")),
                  a("clickRightPrev", r.value.next);
              },
              onNext: () => {
                (r.value.next = v.add(1, "month")),
                  a("clickRightNext", r.value.next);
              },
              onPreviousYear: () => {
                r.value.year.next = r.value.year.next - 12;
              },
              onNextYear: () => {
                r.value.year.next = r.value.year.next + 12;
              },
              openMonth: () => {
                (i.next.month = !i.next.month),
                  (i.next.year = !1),
                  (i.next.calendar = !i.next.month);
              },
              setMonth: (s) => {
                (r.value.next = v.month(s)),
                  (i.next.month = !i.next.month),
                  (i.next.year = !1),
                  (i.next.calendar = !i.next.month),
                  a("selectRightMonth", r.value.next),
                  Ie(() => {
                    (r.value.previous.isSame(r.value.next, "month") ||
                      r.value.previous.isAfter(r.value.next)) &&
                      (r.value.previous = r.value.next.subtract(1, "month")),
                      (r.value.year.previous = r.value.previous.year());
                  });
              },
              openYear: () => {
                (i.next.year = !i.next.year),
                  (i.next.month = !1),
                  (i.next.calendar = !i.next.year);
              },
              setYear: (s) => {
                (r.value.next = v.year(s)),
                  (i.next.year = !i.next.year),
                  (i.next.month = !1),
                  (i.next.calendar = !i.next.year),
                  a("selectRightYear", r.value.next),
                  Ie(() => {
                    (r.value.previous.isSame(r.value.next, "month") ||
                      r.value.previous.isAfter(r.value.next)) &&
                      (r.value.previous = r.value.next.subtract(1, "month")),
                      (r.value.year.previous = r.value.previous.year()),
                      (r.value.year.next = r.value.next.year());
                  });
              },
            },
          };
        }),
        z = q(!1);
      setTimeout(() => {
        z.value = !0;
      }, 250);
      function G() {
        return d().localeData().firstDayOfWeek();
      }
      function O(f) {
        const v = [...f],
          h = v.shift();
        return [...v, h];
      }
      function p() {
        return !e.useRange && !e.asSingle
          ? !0
          : !e.useRange && e.asSingle
          ? !1
          : e.useRange && !e.asSingle
          ? !0
          : !!(e.useRange && e.asSingle);
      }
      function M(f) {
        if (e.disableInRange || j.value === "") return !1;
        let v, h;
        if (Array.isArray(e.modelValue)) {
          const [s, x] = e.modelValue;
          (v = s), (h = x);
        } else if (typeof e.modelValue == "object") {
          if (e.modelValue) {
            const [s, x] = Object.values(e.modelValue);
            (v = s), (h = x);
          }
        } else {
          const [s, x] = e.modelValue.split(e.separator);
          (v = s), (h = x);
        }
        return f.isBetween(
          d(v, e.formatter.date, !0),
          d(h, e.formatter.date, !0),
          "date",
          "[]",
        );
      }
      function A() {
        (N.value = null), (L.value = null), (S.value = []), (V.value = null);
      }
      function _() {
        if (((j.value = ""), Array.isArray(e.modelValue)))
          a("update:modelValue", []);
        else if (typeof e.modelValue == "object") {
          const f = {},
            [v, h] = Object.keys(e.modelValue);
          (f[v] = ""), (f[h] = ""), a("update:modelValue", f);
        } else a("update:modelValue", "");
        (g.value = []), T.value && T.value.focus();
      }
      o({ clearPicker: _ });
      function F() {
        if (p()) {
          const [f, v] = j.value.split(e.separator),
            [h, s] = [d(f, e.formatter.date, !0), d(v, e.formatter.date, !0)];
          if (h.isValid() && s.isValid())
            if ((E(h), E(s), Array.isArray(e.modelValue)))
              a("update:modelValue", [f, v]);
            else if (typeof e.modelValue == "object") {
              const x = {},
                [I, H] = Object.keys(e.modelValue);
              (x[I] = f), (x[H] = v), a("update:modelValue", x);
            } else
              a(
                "update:modelValue",
                c(
                  {
                    previous: h,
                    next: s,
                  },
                  e,
                ),
              );
        } else {
          const f = d(j.value, e.formatter.date, !0);
          if (f.isValid())
            if ((E(f), Array.isArray(e.modelValue)))
              a("update:modelValue", [j.value]);
            else if (typeof e.modelValue == "object") {
              const v = {},
                [h] = Object.keys(e.modelValue);
              (v[h] = j.value), a("update:modelValue", v);
            } else a("update:modelValue", j.value);
        }
      }
      function E(f, v) {
        if (p())
          if (N.value)
            if (((L.value = f), e.autoApply)) {
              f.isBefore(N.value)
                ? (j.value = c(
                    {
                      previous: f,
                      next: N.value,
                    },
                    e,
                  ))
                : (j.value = c(
                    {
                      previous: N.value,
                      next: f,
                    },
                    e,
                  ));
              const [h, s] = j.value.split(e.separator);
              if (Array.isArray(e.modelValue))
                a("update:modelValue", [
                  d(h, e.formatter.date, !0).format(e.formatter.date),
                  d(s, e.formatter.date, !0).format(e.formatter.date),
                ]);
              else if (typeof e.modelValue == "object") {
                const x = {},
                  [I, H] = Object.keys(e.modelValue);
                (x[I] = h), (x[H] = s), a("update:modelValue", x);
              } else
                a(
                  "update:modelValue",
                  c(
                    {
                      previous: d(h, e.formatter.date, !0),
                      next: d(s, e.formatter.date, !0),
                    },
                    e,
                  ),
                );
              v && v(),
                (g.value = []),
                d(h, e.formatter.date, !0).isSame(
                  d(s, e.formatter.date, !0),
                  "month",
                ) ||
                  ((r.value.previous = d(h, e.formatter.date, !0)),
                  (r.value.next = d(s, e.formatter.date, !0))),
                A();
            } else {
              N.value.isAfter(f, "month")
                ? (g.value = [f, N.value])
                : (g.value = [N.value, f]);
              const [h, s] = g.value;
              h.isSame(s, "month") ||
                ((r.value.previous = h), (r.value.next = s)),
                A();
            }
          else
            (g.value = []),
              (N.value = f),
              (V.value = f),
              S.value.push(f),
              g.value.push(f),
              (r.value.previous = f),
              r.value.next.isSame(f, "month") &&
                ((r.value.previous = r.value.next),
                (r.value.next = f.add(1, "month")));
        else if (e.autoApply) {
          if (((j.value = $(f, e)), Array.isArray(e.modelValue)))
            a("update:modelValue", [j.value]);
          else if (typeof e.modelValue == "object") {
            const h = {},
              [s] = Object.keys(e.modelValue);
            (h[s] = j.value), a("update:modelValue", h);
          } else a("update:modelValue", j.value);
          v && v(), (g.value = []), A();
        } else (g.value = [f]), A();
      }
      function K(f) {
        if (g.value.length < 1) return !1;
        let v;
        if (p()) {
          const [h, s] = g.value;
          s.isBefore(h)
            ? (v = c(
                {
                  previous: s,
                  next: h,
                },
                e,
              ))
            : (v = c(
                {
                  previous: h,
                  next: s,
                },
                e,
              ));
        } else {
          const [h] = g.value;
          v = h;
        }
        if (p()) {
          const [h, s] = v.split(e.separator);
          if (Array.isArray(e.modelValue))
            a("update:modelValue", [
              d(h, e.formatter.date, !0).format(e.formatter.date),
              d(s, e.formatter.date, !0).format(e.formatter.date),
            ]);
          else if (typeof e.modelValue == "object") {
            const x = {},
              [I, H] = Object.keys(e.modelValue);
            (x[I] = h), (x[H] = s), a("update:modelValue", x);
          } else
            a(
              "update:modelValue",
              c(
                {
                  previous: d(h, e.formatter.date, !0),
                  next: d(s, e.formatter.date, !0),
                },
                e,
              ),
            );
          j.value = v;
        } else if (
          ((j.value = v.format(e.formatter.date)), Array.isArray(e.modelValue))
        )
          a("update:modelValue", [j.value]);
        else if (typeof e.modelValue == "object") {
          const h = {},
            [s] = Object.keys(e.modelValue);
          (h[s] = j.value), a("update:modelValue", h);
        } else a("update:modelValue", j.value);
        f && f();
      }
      function J(f) {
        if (!p()) return !1;
        if (N.value) S.value = [N.value, f];
        else return (S.value = []), !1;
      }
      function te(f) {
        if (N.value && e.autoApply) return !1;
        let v, h;
        if (S.value.length > 1) {
          const [s, x] = S.value;
          (v = d(s, e.formatter.date, !0)), (h = d(x, e.formatter.date, !0));
        } else if (Array.isArray(e.modelValue))
          if (e.autoApply) {
            const [s, x] = e.modelValue;
            (v = s && d(s, e.formatter.date, !0)),
              (h = x && d(x, e.formatter.date, !0));
          } else {
            const [s, x] = g.value;
            (v = d(s, e.formatter.date, !0)), (h = d(x, e.formatter.date, !0));
          }
        else if (typeof e.modelValue == "object")
          if (e.autoApply) {
            if (e.modelValue) {
              const [s, x] = Object.values(e.modelValue);
              (v = s && d(s, e.formatter.date, !0)),
                (h = x && d(x, e.formatter.date, !0));
            }
          } else {
            const [s, x] = g.value;
            (v = d(s, e.formatter.date, !0)), (h = d(x, e.formatter.date, !0));
          }
        else if (e.autoApply) {
          const [s, x] = e.modelValue
            ? e.modelValue.split(e.separator)
            : [null, null];
          (v = s && d(s, e.formatter.date, !0)),
            (h = x && d(x, e.formatter.date, !0));
        } else {
          const [s, x] = g.value;
          (v = d(s, e.formatter.date, !0)), (h = d(x, e.formatter.date, !0));
        }
        return v && h
          ? y(f, {
              previous: v,
              next: h,
            })
          : !1;
      }
      function re(f) {
        const { today: v, active: h, off: s, disabled: x } = f;
        let I, H, ee;
        if (p())
          if (Array.isArray(e.modelValue))
            if (V.value) {
              const [U, X] = S.value;
              (H = U && d(U, e.formatter.date, !0)),
                (ee = X && d(X, e.formatter.date, !0));
            } else if (e.autoApply) {
              const [U, X] = e.modelValue;
              (H = U && d(U, e.formatter.date, !0)),
                (ee = X && d(X, e.formatter.date, !0));
            } else {
              const [U, X] = g.value;
              (H = U && d(U, e.formatter.date, !0)),
                (ee = X && d(X, e.formatter.date, !0));
            }
          else if (typeof e.modelValue == "object")
            if (V.value) {
              const [U, X] = S.value;
              (H = U && d(U, e.formatter.date, !0)),
                (ee = X && d(X, e.formatter.date, !0));
            } else if (e.autoApply) {
              const [U, X] = e.modelValue
                ? Object.values(e.modelValue)
                : [null, null];
              (H = U && d(U, e.formatter.date, !0)),
                (ee = X && d(X, e.formatter.date, !0));
            } else {
              const [U, X] = g.value;
              (H = U && d(U, e.formatter.date, !0)),
                (ee = X && d(X, e.formatter.date, !0));
            }
          else if (V.value) {
            const [U, X] = S.value;
            (H = U && d(U, e.formatter.date, !0)),
              (ee = X && d(X, e.formatter.date, !0));
          } else if (e.autoApply) {
            const [U, X] = e.modelValue
              ? e.modelValue.split(e.separator)
              : [null, null];
            (H = U && d(U, e.formatter.date, !0)),
              (ee = X && d(X, e.formatter.date, !0));
          } else {
            const [U, X] = g.value;
            (H = U && d(U, e.formatter.date, !0)),
              (ee = X && d(X, e.formatter.date, !0));
          }
        else if (Array.isArray(e.modelValue))
          if (e.autoApply) {
            if (e.modelValue.length > 0) {
              const [U] = e.modelValue;
              H = d(U, e.formatter.date, !0);
            }
          } else {
            const [U] = g.value;
            H = U && d(U, e.formatter.date, !0);
          }
        else if (typeof e.modelValue == "object")
          if (e.autoApply) {
            if (e.modelValue) {
              const [U] = Object.values(e.modelValue);
              H = d(U, e.formatter.date, !0);
            }
          } else {
            const [U] = g.value;
            H = U && d(U, e.formatter.date, !0);
          }
        else if (e.autoApply) {
          if (e.modelValue) {
            const [U] = e.modelValue.split(e.separator);
            H = d(U, e.formatter.date, !0);
          }
        } else {
          const [U] = g.value;
          H = U && d(U, e.formatter.date, !0);
        }
        return (
          h &&
            (I = v
              ? "text-vtd-primary-500 font-semibold dark:text-vtd-primary-400 rounded-full focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50"
              : x
              ? "text-vtd-secondary-600 font-normal disabled:text-vtd-secondary-500 disabled:cursor-not-allowed rounded-full"
              : f.isBetween(H, ee, "date", "()")
              ? "text-vtd-secondary-700 font-medium dark:text-vtd-secondary-100 rounded-full"
              : "text-vtd-secondary-600 font-medium dark:text-vtd-secondary-200 rounded-full"),
          s &&
            (I =
              "text-vtd-secondary-400 font-light disabled:cursor-not-allowed"),
          H && ee && !s
            ? (f.isSame(H, "date") &&
                ((I = ee.isAfter(H, "date")
                  ? "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed"
                  : "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed"),
                H.isSame(ee, "date") &&
                  (I =
                    "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed")),
              f.isSame(ee, "date") &&
                ((I = ee.isAfter(H, "date")
                  ? "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed"
                  : "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed"),
                H.isSame(ee, "date") &&
                  (I =
                    "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed")))
            : H &&
              f.isSame(H, "date") &&
              !s &&
              (I =
                "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"),
          I
        );
      }
      function ie(f) {
        let v, h, s;
        if (((v = ""), !p())) return v;
        if (Array.isArray(e.modelValue))
          if (S.value.length > 1) {
            const [x, I] = S.value;
            (h = x && d(x, e.formatter.date, !0)),
              (s = I && d(I, e.formatter.date, !0));
          } else if (e.autoApply) {
            const [x, I] = e.modelValue;
            (h = x && d(x, e.formatter.date, !0)),
              (s = I && d(I, e.formatter.date, !0));
          } else {
            const [x, I] = g.value;
            (h = x && d(x, e.formatter.date, !0)),
              (s = I && d(I, e.formatter.date, !0));
          }
        else if (typeof e.modelValue == "object")
          if (S.value.length > 1) {
            const [x, I] = S.value;
            (h = x && d(x, e.formatter.date, !0)),
              (s = I && d(I, e.formatter.date, !0));
          } else if (e.autoApply) {
            if (e.modelValue) {
              const [x, I] = Object.values(e.modelValue);
              (h = x && d(x, e.formatter.date, !0)),
                (s = I && d(I, e.formatter.date, !0));
            }
          } else {
            const [x, I] = g.value;
            (h = x && d(x, e.formatter.date, !0)),
              (s = I && d(I, e.formatter.date, !0));
          }
        else if (S.value.length > 1) {
          const [x, I] = S.value;
          (h = x && d(x, e.formatter.date, !0)),
            (s = I && d(I, e.formatter.date, !0));
        } else if (e.autoApply) {
          const [x, I] = e.modelValue
            ? e.modelValue.split(e.separator)
            : [null, null];
          (h = x && d(x, e.formatter.date, !0)),
            (s = I && d(I, e.formatter.date, !0));
        } else {
          const [x, I] = g.value;
          (h = x && d(x, e.formatter.date, !0)),
            (s = I && d(I, e.formatter.date, !0));
        }
        return (
          h &&
            s &&
            (f.isSame(h, "date")
              ? (s.isBefore(h) && (v += " rounded-r-full inset-0"),
                h.isBefore(s) && (v += " rounded-l-full inset-0"))
              : f.isSame(s, "date")
              ? (s.isBefore(h) && (v += " rounded-l-full inset-0"),
                h.isBefore(s) && (v += " rounded-r-full inset-0"))
              : (v += " inset-0")),
          v
        );
      }
      function be(f, v) {
        (r.value.previous = d(f, e.formatter.date, !0)),
          (r.value.next = d(v, e.formatter.date, !0)),
          (d.duration(r.value.next.diff(r.value.previous)).get("months") ===
            2 ||
            (d.duration(r.value.next.diff(r.value.previous)).get("months") ===
              1 &&
              d.duration(r.value.next.diff(r.value.previous)).get("days") ===
                7)) &&
            (r.value.next = r.value.next.subtract(1, "month")),
          (r.value.next.isSame(r.value.previous, "month") ||
            r.value.next.isBefore(r.value.previous)) &&
            (r.value.next = r.value.previous.add(1, "month"));
      }
      function de(f, v) {
        if (p())
          if (e.autoApply) {
            if (Array.isArray(e.modelValue)) a("update:modelValue", [f, v]);
            else if (typeof e.modelValue == "object") {
              const h = {},
                [s, x] = Object.keys(e.modelValue);
              (h[s] = f), (h[x] = v), a("update:modelValue", h);
            } else
              a(
                "update:modelValue",
                c(
                  {
                    previous: d(f, e.formatter.date, !0),
                    next: d(v, e.formatter.date, !0),
                  },
                  e,
                ),
              );
            j.value = `${f}${e.separator}${v}`;
          } else
            g.value = [d(f, e.formatter.date, !0), d(v, e.formatter.date, !0)];
        else if (e.autoApply) {
          if (Array.isArray(e.modelValue)) a("update:modelValue", [f]);
          else if (typeof e.modelValue == "object") {
            const h = {},
              [s] = Object.keys(e.modelValue);
            (h[s] = f), a("update:modelValue", h);
          } else a("update:modelValue", f);
          j.value = f;
        } else
          g.value = [d(f, e.formatter.date, !0), d(v, e.formatter.date, !0)];
        be(f, v);
      }
      function ge(f) {
        const v = d().format(e.formatter.date),
          h = d().format(e.formatter.date);
        de(v, h), f && f();
      }
      function me(f) {
        const v = d().subtract(1, "day").format(e.formatter.date),
          h = d().subtract(1, "day").format(e.formatter.date);
        de(v, h), f && f();
      }
      function oe(f, v) {
        const h = d()
            .subtract(f - 1, "day")
            .format(e.formatter.date),
          s = d().format(e.formatter.date);
        de(h, s), v && v();
      }
      function fe(f) {
        const v = d().date(1).format(e.formatter.date),
          h = d().date(d().daysInMonth()).format(e.formatter.date);
        de(v, h), f && f();
      }
      function he(f) {
        const v = d().date(1).subtract(1, "month").format(e.formatter.date),
          h = d().date(0).format(e.formatter.date);
        de(v, h), f && f();
      }
      function xe(f, v) {
        const [h, s] = f.atClick(),
          x = d(h).format(e.formatter.date),
          I = d(s).format(e.formatter.date);
        de(x, I), v && v();
      }
      qt(
        () => g.value,
        (f) => {
          f.length > 0 &&
            ((i.previous.calendar = !0),
            (i.previous.month = !1),
            (i.previous.year = !1),
            (i.next.calendar = !0),
            (i.next.month = !1),
            (i.next.year = !1));
        },
      ),
        ke(() => {
          e.placeholder
            ? (k.value = e.placeholder)
            : p()
            ? (k.value = `${e.formatter.date}${e.separator}${e.formatter.date}`)
            : (k.value = e.formatter.date);
        }),
        ke(() => {
          const f = e.i18n;
          Ie(() => {
            const v = /* @__PURE__ */ Object.assign({
              "./locale/af.js": () => import("./af-94bf1d03.js"),
              "./locale/am.js": () => import("./am-caa13f5c.js"),
              "./locale/ar-dz.js": () => import("./ar-dz-aa9e9955.js"),
              "./locale/ar-iq.js": () => import("./ar-iq-a6bc461d.js"),
              "./locale/ar-kw.js": () => import("./ar-kw-e0709e38.js"),
              "./locale/ar-ly.js": () => import("./ar-ly-7f1d567c.js"),
              "./locale/ar-ma.js": () => import("./ar-ma-3196bd2d.js"),
              "./locale/ar-sa.js": () => import("./ar-sa-bf40a4dd.js"),
              "./locale/ar-tn.js": () => import("./ar-tn-30f6bfa0.js"),
              "./locale/ar.js": () => import("./ar-c0d5ad97.js"),
              "./locale/az.js": () => import("./az-dd398583.js"),
              "./locale/be.js": () => import("./be-90d7113d.js"),
              "./locale/bg.js": () => import("./bg-4d932efe.js"),
              "./locale/bi.js": () => import("./bi-79aab1b7.js"),
              "./locale/bm.js": () => import("./bm-03647159.js"),
              "./locale/bn-bd.js": () => import("./bn-bd-7e3248a9.js"),
              "./locale/bn.js": () => import("./bn-f2c7b0cc.js"),
              "./locale/bo.js": () => import("./bo-3b299745.js"),
              "./locale/br.js": () => import("./br-5dbf1b68.js"),
              "./locale/bs.js": () => import("./bs-50bdd304.js"),
              "./locale/ca.js": () => import("./ca-bf52f5d9.js"),
              "./locale/cs.js": () => import("./cs-b5809bf3.js"),
              "./locale/cv.js": () => import("./cv-646316a8.js"),
              "./locale/cy.js": () => import("./cy-b2e50273.js"),
              "./locale/da.js": () => import("./da-763d090c.js"),
              "./locale/de-at.js": () => import("./de-at-0c591abe.js"),
              "./locale/de-ch.js": () => import("./de-ch-ef043eb9.js"),
              "./locale/de.js": () => import("./de-b2c5bc76.js"),
              "./locale/dv.js": () => import("./dv-0669910f.js"),
              "./locale/el.js": () => import("./el-2999d737.js"),
              "./locale/en-au.js": () => import("./en-au-c33a59f7.js"),
              "./locale/en-ca.js": () => import("./en-ca-90b479a3.js"),
              "./locale/en-gb.js": () => import("./en-gb-daa423de.js"),
              "./locale/en-ie.js": () => import("./en-ie-1c5d3b07.js"),
              "./locale/en-il.js": () => import("./en-il-4b56f5a9.js"),
              "./locale/en-in.js": () => import("./en-in-3539fc37.js"),
              "./locale/en-nz.js": () => import("./en-nz-2ecf2cd5.js"),
              "./locale/en-sg.js": () => import("./en-sg-4ab4114b.js"),
              "./locale/en-tt.js": () => import("./en-tt-364a88bd.js"),
              "./locale/en.js": () => import("./en-4402d6fc.js"),
              "./locale/eo.js": () => import("./eo-6ab7a7ef.js"),
              "./locale/es-do.js": () => import("./es-do-0373b0a7.js"),
              "./locale/es-mx.js": () => import("./es-mx-bfa7fb81.js"),
              "./locale/es-pr.js": () => import("./es-pr-865b60a2.js"),
              "./locale/es-us.js": () => import("./es-us-a49bb1f1.js"),
              "./locale/es.js": () => import("./es-fd778483.js"),
              "./locale/et.js": () => import("./et-ecf6fcae.js"),
              "./locale/eu.js": () => import("./eu-73338f21.js"),
              "./locale/fa.js": () => import("./fa-f62e8aa3.js"),
              "./locale/fi.js": () => import("./fi-b3e5392d.js"),
              "./locale/fo.js": () => import("./fo-10979eaf.js"),
              "./locale/fr-ca.js": () => import("./fr-ca-54d2bae4.js"),
              "./locale/fr-ch.js": () => import("./fr-ch-a3538131.js"),
              "./locale/fr.js": () => import("./fr-10fc6c22.js"),
              "./locale/fy.js": () => import("./fy-37b748ea.js"),
              "./locale/ga.js": () => import("./ga-f3fc101e.js"),
              "./locale/gd.js": () => import("./gd-c5329eb5.js"),
              "./locale/gl.js": () => import("./gl-79a675b7.js"),
              "./locale/gom-latn.js": () => import("./gom-latn-6cc4a7b7.js"),
              "./locale/gu.js": () => import("./gu-2a2c2326.js"),
              "./locale/he.js": () => import("./he-7f82e129.js"),
              "./locale/hi.js": () => import("./hi-dd882441.js"),
              "./locale/hr.js": () => import("./hr-cdf42d7d.js"),
              "./locale/ht.js": () => import("./ht-55dade7a.js"),
              "./locale/hu.js": () => import("./hu-121176f2.js"),
              "./locale/hy-am.js": () => import("./hy-am-fb65f5a4.js"),
              "./locale/id.js": () => import("./id-af8d4666.js"),
              "./locale/is.js": () => import("./is-bef2492e.js"),
              "./locale/it-ch.js": () => import("./it-ch-957ff653.js"),
              "./locale/it.js": () => import("./it-f42b94d5.js"),
              "./locale/ja.js": () => import("./ja-9fada083.js"),
              "./locale/jv.js": () => import("./jv-a80b934f.js"),
              "./locale/ka.js": () => import("./ka-208174fc.js"),
              "./locale/kk.js": () => import("./kk-ec200413.js"),
              "./locale/km.js": () => import("./km-fbf8243b.js"),
              "./locale/kn.js": () => import("./kn-6f24a27c.js"),
              "./locale/ko.js": () => import("./ko-2d8fb5bb.js"),
              "./locale/ku.js": () => import("./ku-2a4fd3cd.js"),
              "./locale/ky.js": () => import("./ky-973d621d.js"),
              "./locale/lb.js": () => import("./lb-0ea1dc24.js"),
              "./locale/lo.js": () => import("./lo-4d2b0a5b.js"),
              "./locale/lt.js": () => import("./lt-25a97bce.js"),
              "./locale/lv.js": () => import("./lv-2cc59c89.js"),
              "./locale/me.js": () => import("./me-097a7a40.js"),
              "./locale/mi.js": () => import("./mi-23ddb44c.js"),
              "./locale/mk.js": () => import("./mk-a1ff30d4.js"),
              "./locale/ml.js": () => import("./ml-2b734988.js"),
              "./locale/mn.js": () => import("./mn-d78f0d9a.js"),
              "./locale/mr.js": () => import("./mr-8bc773c6.js"),
              "./locale/ms-my.js": () => import("./ms-my-9f08f2fd.js"),
              "./locale/ms.js": () => import("./ms-c388491a.js"),
              "./locale/mt.js": () => import("./mt-b468e52c.js"),
              "./locale/my.js": () => import("./my-e4423b9b.js"),
              "./locale/nb.js": () => import("./nb-efa3cb18.js"),
              "./locale/ne.js": () => import("./ne-35999881.js"),
              "./locale/nl-be.js": () => import("./nl-be-549b6aab.js"),
              "./locale/nl.js": () => import("./nl-33890ee5.js"),
              "./locale/nn.js": () => import("./nn-0eb03723.js"),
              "./locale/oc-lnc.js": () => import("./oc-lnc-086ce107.js"),
              "./locale/pa-in.js": () => import("./pa-in-cb3f818a.js"),
              "./locale/pl.js": () => import("./pl-0cdfbf51.js"),
              "./locale/pt-br.js": () => import("./pt-br-65ebcda8.js"),
              "./locale/pt.js": () => import("./pt-b9ee14f8.js"),
              "./locale/rn.js": () => import("./rn-419d78a8.js"),
              "./locale/ro.js": () => import("./ro-d8ccd494.js"),
              "./locale/ru.js": () => import("./ru-105a05d7.js"),
              "./locale/rw.js": () => import("./rw-486fb6e1.js"),
              "./locale/sd.js": () => import("./sd-2f84b2a2.js"),
              "./locale/se.js": () => import("./se-121f5df1.js"),
              "./locale/si.js": () => import("./si-ed3a76b1.js"),
              "./locale/sk.js": () => import("./sk-e11e1f22.js"),
              "./locale/sl.js": () => import("./sl-6613a861.js"),
              "./locale/sq.js": () => import("./sq-3695c739.js"),
              "./locale/sr-cyrl.js": () => import("./sr-cyrl-16f86484.js"),
              "./locale/sr.js": () => import("./sr-2de4ee56.js"),
              "./locale/ss.js": () => import("./ss-ca6c380e.js"),
              "./locale/sv-fi.js": () => import("./sv-fi-e9b12831.js"),
              "./locale/sv.js": () => import("./sv-b69b3ec3.js"),
              "./locale/sw.js": () => import("./sw-54657bd3.js"),
              "./locale/ta.js": () => import("./ta-3bf0e85d.js"),
              "./locale/te.js": () => import("./te-578e99eb.js"),
              "./locale/tet.js": () => import("./tet-8c592910.js"),
              "./locale/tg.js": () => import("./tg-aa411b82.js"),
              "./locale/th.js": () => import("./th-acbf1f60.js"),
              "./locale/tk.js": () => import("./tk-8631abbc.js"),
              "./locale/tl-ph.js": () => import("./tl-ph-e6920adb.js"),
              "./locale/tlh.js": () => import("./tlh-2f3f68a2.js"),
              "./locale/tr.js": () => import("./tr-a0277950.js"),
              "./locale/tzl.js": () => import("./tzl-477af0a6.js"),
              "./locale/tzm-latn.js": () => import("./tzm-latn-f9da2f06.js"),
              "./locale/tzm.js": () => import("./tzm-eac6b9ed.js"),
              "./locale/ug-cn.js": () => import("./ug-cn-05fd77bb.js"),
              "./locale/uk.js": () => import("./uk-50111f43.js"),
              "./locale/ur.js": () => import("./ur-35acbfc8.js"),
              "./locale/uz-latn.js": () => import("./uz-latn-3a1bee7c.js"),
              "./locale/uz.js": () => import("./uz-dc51d0d0.js"),
              "./locale/vi.js": () => import("./vi-8a2137e6.js"),
              "./locale/x-pseudo.js": () => import("./x-pseudo-9b6941e9.js"),
              "./locale/yo.js": () => import("./yo-d60bf9b4.js"),
              "./locale/zh-cn.js": () => import("./zh-cn-188b6826.js"),
              "./locale/zh-hk.js": () => import("./zh-hk-7c47bc48.js"),
              "./locale/zh-tw.js": () => import("./zh-tw-efeb1de3.js"),
              "./locale/zh.js": () => import("./zh-8a26a57d.js"),
            });
            for (const h in v)
              v[h]()
                .then(() => {
                  d.locale(f);
                  let s, x;
                  if (p()) {
                    if (Array.isArray(e.modelValue)) {
                      if (e.modelValue.length > 0) {
                        const [H, ee] = e.modelValue;
                        (s = d(H, e.formatter.date, !0)),
                          (x = d(ee, e.formatter.date, !0));
                      }
                    } else if (typeof e.modelValue == "object") {
                      if (!Jt(e.modelValue))
                        try {
                          Object.keys(e.modelValue);
                        } catch {
                          console.warn(
                            "[Vue Tailwind Datepicker]: It looks like you want to use Object as the argument %cv-model",
                            "font-style: italic; color: #42b883;",
                            ", but you pass it undefined or null.",
                          ),
                            console.warn(
                              "[Vue Tailwind Datepicker]: We has replace with %c{ startDate: '', endDate: '' }",
                              "font-style: italic; color: #42b883;",
                              ", but you can replace manually.",
                            ),
                            a("update:modelValue", {
                              startDate: "",
                              endDate: "",
                            });
                        }
                      if (e.modelValue) {
                        const [H, ee] = Object.values(e.modelValue);
                        (s = H && d(H, e.formatter.date, !0)),
                          (x = ee && d(ee, e.formatter.date, !0));
                      }
                    } else if (e.modelValue) {
                      const [H, ee] = e.modelValue.split(e.separator);
                      (s = d(H, e.formatter.date, !0)),
                        (x = d(ee, e.formatter.date, !0));
                    }
                    s && x
                      ? ((j.value = c(
                          {
                            previous: s,
                            next: x,
                          },
                          e,
                        )),
                        x.isBefore(s, "month")
                          ? ((r.value.previous = x),
                            (r.value.next = s),
                            (r.value.year.previous = x.year()),
                            (r.value.year.next = s.year()))
                          : x.isSame(s, "month")
                          ? ((r.value.previous = s),
                            (r.value.next = x.add(1, "month")),
                            (r.value.year.previous = s.year()),
                            (r.value.year.next = s.add(1, "year").year()))
                          : ((r.value.previous = s),
                            (r.value.next = x),
                            (r.value.year.previous = s.year()),
                            (r.value.year.next = x.year())),
                        e.autoApply || (g.value = [s, x]))
                      : ((r.value.previous = d(e.startFrom)),
                        (r.value.next = d(e.startFrom).add(1, "month")),
                        (r.value.year.previous = r.value.previous.year()),
                        (r.value.year.next = r.value.next.year()));
                  } else {
                    if (Array.isArray(e.modelValue)) {
                      if (e.modelValue.length > 0) {
                        const [H] = e.modelValue;
                        s = d(H, e.formatter.date, !0);
                      }
                    } else if (typeof e.modelValue == "object") {
                      if (e.modelValue) {
                        const [H] = Object.values(e.modelValue);
                        s = d(H, e.formatter.date, !0);
                      }
                    } else if (e.modelValue.length) {
                      const [H] = e.modelValue.split(e.separator);
                      s = d(H, e.formatter.date, !0);
                    }
                    s && s.isValid()
                      ? ((j.value = $(s, e)),
                        (r.value.previous = s),
                        (r.value.next = s.add(1, "month")),
                        (r.value.year.previous = s.year()),
                        (r.value.year.next = s.add(1, "year").year()),
                        e.autoApply || (g.value = [s]))
                      : ((r.value.previous = d(e.startFrom)),
                        (r.value.next = d(e.startFrom).add(1, "month")),
                        (r.value.year.previous = r.value.previous.year()),
                        (r.value.year.next = r.value.next.year()));
                  }
                  const I =
                    e.weekdaysSize === "min"
                      ? d.weekdaysMin()
                      : d.weekdaysShort();
                  (r.value.weeks = G() ? O(I) : I),
                    (r.value.months =
                      e.formatter.month === "MMM"
                        ? d.monthsShort()
                        : d.months());
                })
                .catch((s) => {
                  console.warn(s.message);
                });
          });
        });
      function Ne(f) {
        return (
          f && B.value === null && (B.value = w(P.value)),
          f && B.value ? "place-right" : "place-left"
        );
      }
      function Re(f) {
        return (
          f && B.value === null && (B.value = w(P.value)),
          B.value ? "left-auto right-0" : "left-0 right-auto"
        );
      }
      return (
        ae(Yt, te),
        ae(Et, ie),
        ae(Lt, re),
        ae(Ft, J),
        ae(Bt, ge),
        ae(Nt, me),
        ae(Rt, oe),
        ae(It, fe),
        ae(Ht, he),
        ae(Ut, xe),
        (f, v) =>
          e.noInput
            ? z.value
              ? (W(),
                Z("div", Io, [
                  C("div", Ho, [
                    C("div", Uo, [
                      e.shortcuts
                        ? (W(),
                          He(
                            ct,
                            {
                              key: 0,
                              shortcuts: e.shortcuts,
                              "as-range": p(),
                              "as-single": e.asSingle,
                              i18n: e.options.shortcuts,
                            },
                            null,
                            8,
                            ["shortcuts", "as-range", "as-single", "i18n"],
                          ))
                        : ye("", !0),
                      C("div", zo, [
                        p() && !e.asSingle
                          ? (W(), Z("div", Wo, Go))
                          : ye("", !0),
                        C(
                          "div",
                          {
                            class: Pe([
                              "relative w-full lg:w-80",
                              {
                                "mb-3 sm:mb-0 sm:mr-2 md:w-1/2":
                                  p() && !e.asSingle,
                              },
                            ]),
                          },
                          [
                            Q(
                              Ge,
                              {
                                panel: i.previous,
                                calendar: D.value.previous,
                              },
                              null,
                              8,
                              ["panel", "calendar"],
                            ),
                            C("div", Zo, [
                              ce(
                                Q(
                                  Xe,
                                  {
                                    months: Y.value,
                                    onUpdateMonth: D.value.previous.setMonth,
                                  },
                                  null,
                                  8,
                                  ["months", "onUpdateMonth"],
                                ),
                                [[pe, i.previous.month]],
                              ),
                              ce(
                                Q(
                                  qe,
                                  {
                                    years: D.value.previous.years(),
                                    onUpdateYear: D.value.previous.setYear,
                                  },
                                  null,
                                  8,
                                  ["years", "onUpdateYear"],
                                ),
                                [[pe, i.previous.year]],
                              ),
                              ce(
                                C(
                                  "div",
                                  null,
                                  [
                                    Q(Je, { weeks: b.value }, null, 8, [
                                      "weeks",
                                    ]),
                                    Q(
                                      Ze,
                                      {
                                        calendar: D.value.previous,
                                        weeks: b.value,
                                        "as-range": p(),
                                        onUpdateDate:
                                          v[2] || (v[2] = (h) => E(h)),
                                      },
                                      null,
                                      8,
                                      ["calendar", "weeks", "as-range"],
                                    ),
                                  ],
                                  512,
                                ),
                                [[pe, i.previous.calendar]],
                              ),
                            ]),
                          ],
                          2,
                        ),
                        p() && !e.asSingle
                          ? (W(),
                            Z("div", qo, [
                              Q(
                                Ge,
                                {
                                  "as-prev-or-next": "",
                                  panel: i.next,
                                  calendar: D.value.next,
                                },
                                null,
                                8,
                                ["panel", "calendar"],
                              ),
                              C("div", Jo, [
                                ce(
                                  Q(
                                    Xe,
                                    {
                                      months: Y.value,
                                      onUpdateMonth: D.value.next.setMonth,
                                    },
                                    null,
                                    8,
                                    ["months", "onUpdateMonth"],
                                  ),
                                  [[pe, i.next.month]],
                                ),
                                ce(
                                  Q(
                                    qe,
                                    {
                                      "as-prev-or-next": "",
                                      years: D.value.next.years(),
                                      onUpdateYear: D.value.next.setYear,
                                    },
                                    null,
                                    8,
                                    ["years", "onUpdateYear"],
                                  ),
                                  [[pe, i.next.year]],
                                ),
                                ce(
                                  C(
                                    "div",
                                    null,
                                    [
                                      Q(Je, { weeks: b.value }, null, 8, [
                                        "weeks",
                                      ]),
                                      Q(
                                        Ze,
                                        {
                                          "as-prev-or-next": "",
                                          calendar: D.value.next,
                                          weeks: b.value,
                                          "as-range": p(),
                                          onUpdateDate:
                                            v[3] || (v[3] = (h) => E(h)),
                                        },
                                        null,
                                        8,
                                        ["calendar", "weeks", "as-range"],
                                      ),
                                    ],
                                    512,
                                  ),
                                  [[pe, i.next.calendar]],
                                ),
                              ]),
                            ]))
                          : ye("", !0),
                      ]),
                    ]),
                    e.autoApply
                      ? ye("", !0)
                      : (W(),
                        Z("div", Xo, [
                          C("div", Qo, [
                            C("div", ea, [
                              C(
                                "button",
                                {
                                  type: "button",
                                  class:
                                    "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                                  disabled: e.asSingle
                                    ? g.value.length < 1
                                    : g.value.length < 2,
                                  onClick: v[4] || (v[4] = (h) => K()),
                                  textContent: ne(e.options.footer.apply),
                                },
                                null,
                                8,
                                ta,
                              ),
                            ]),
                          ]),
                        ])),
                  ]),
                ]))
              : ye("", !0)
            : (W(),
              He(
                se(Dt),
                {
                  key: 0,
                  id: "vtd",
                  as: "div",
                  class: "relative w-full",
                },
                {
                  default: Le(({ open: h }) => [
                    e.overlay && !e.disabled
                      ? (W(),
                        He(se(Sr), {
                          key: 0,
                          class: "fixed inset-0 bg-black opacity-30",
                        }))
                      : ye("", !0),
                    Q(
                      se(Mr),
                      {
                        as: "label",
                        class: "relative block",
                      },
                      {
                        default: Le(() => [
                          Xt(
                            f.$slots,
                            "default",
                            {
                              value: j.value,
                              placeholder: k.value,
                              clear: _,
                            },
                            () => [
                              ce(
                                C(
                                  "input",
                                  Qt(
                                    {
                                      ref_key: "VtdInputRef",
                                      ref: T,
                                    },
                                    f.$attrs,
                                    {
                                      "onUpdate:modelValue":
                                        v[0] || (v[0] = (s) => (j.value = s)),
                                      type: "text",
                                      class: [
                                        "relative block w-full",
                                        [
                                          e.disabled
                                            ? "cursor-default opacity-50"
                                            : "opacity-100",
                                          f.inputClasses ||
                                            "pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20",
                                        ],
                                      ],
                                      disabled: e.disabled,
                                      autocomplete: "off",
                                      "data-lpignore": "true",
                                      "data-form-type": "other",
                                      placeholder: k.value,
                                      onKeyup: F,
                                    },
                                  ),
                                  null,
                                  16,
                                  go,
                                ),
                                [[er, j.value]],
                              ),
                              C("div", xo, [
                                C(
                                  "button",
                                  {
                                    type: "button",
                                    disabled: e.disabled,
                                    class: Pe([
                                      e.disabled
                                        ? "cursor-default opacity-50"
                                        : "opacity-100",
                                      "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md",
                                    ]),
                                    onClick:
                                      v[1] ||
                                      (v[1] = (s) => {
                                        var x;
                                        return e.disabled
                                          ? !1
                                          : j.value
                                          ? _()
                                          : (x = T.value) == null
                                          ? void 0
                                          : x.focus();
                                      }),
                                  },
                                  [
                                    (W(),
                                    Z("svg", ko, [
                                      j.value
                                        ? (W(), Z("path", $o))
                                        : (W(), Z("path", jo)),
                                    ])),
                                  ],
                                  10,
                                  wo,
                                ),
                              ]),
                            ],
                          ),
                        ]),
                        _: 3,
                      },
                    ),
                    Q(
                      pt,
                      {
                        "enter-from-class": "opacity-0 translate-y-3",
                        "enter-to-class": "opacity-100 translate-y-0",
                        "enter-active-class":
                          "transform transition ease-out duration-200",
                        "leave-active-class":
                          "transform transition ease-in duration-150",
                        "leave-from-class": "opacity-100 translate-y-0",
                        "leave-to-class": "opacity-0 translate-y-3",
                      },
                      {
                        default: Le(() => [
                          e.disabled
                            ? ye("", !0)
                            : (W(),
                              He(
                                se(Dr),
                                {
                                  key: 0,
                                  as: "div",
                                  class: "relative z-50",
                                },
                                {
                                  default: Le(({ close: s }) => [
                                    C(
                                      "div",
                                      {
                                        class: Pe([
                                          "absolute z-50 top-full sm:mt-2.5",
                                          Re(h),
                                        ]),
                                      },
                                      [
                                        C(
                                          "div",
                                          {
                                            ref_key: "VtdRef",
                                            ref: P,
                                            class:
                                              "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm",
                                          },
                                          [
                                            C(
                                              "div",
                                              {
                                                class: Pe([
                                                  "vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]",
                                                  Ne(h),
                                                ]),
                                              },
                                              [
                                                C("div", Mo, [
                                                  e.shortcuts
                                                    ? (W(),
                                                      He(
                                                        ct,
                                                        {
                                                          key: 0,
                                                          shortcuts:
                                                            e.shortcuts,
                                                          "as-range": p(),
                                                          "as-single":
                                                            e.asSingle,
                                                          i18n: e.options
                                                            .shortcuts,
                                                          close: s,
                                                        },
                                                        null,
                                                        8,
                                                        [
                                                          "shortcuts",
                                                          "as-range",
                                                          "as-single",
                                                          "i18n",
                                                          "close",
                                                        ],
                                                      ))
                                                    : ye("", !0),
                                                  C("div", So, [
                                                    p() && !e.asSingle
                                                      ? (W(), Z("div", Do, Vo))
                                                      : ye("", !0),
                                                    C(
                                                      "div",
                                                      {
                                                        class: Pe([
                                                          "relative",
                                                          {
                                                            "mb-3 sm:mb-0 sm:mr-2 w-full md:w-1/2 lg:w-80":
                                                              p() &&
                                                              !e.asSingle,
                                                            "w-full":
                                                              !p() &&
                                                              e.asSingle,
                                                          },
                                                        ]),
                                                      },
                                                      [
                                                        Q(
                                                          Ge,
                                                          {
                                                            panel: i.previous,
                                                            calendar:
                                                              D.value.previous,
                                                          },
                                                          null,
                                                          8,
                                                          ["panel", "calendar"],
                                                        ),
                                                        C("div", Po, [
                                                          ce(
                                                            Q(
                                                              Xe,
                                                              {
                                                                months: Y.value,
                                                                onUpdateMonth:
                                                                  D.value
                                                                    .previous
                                                                    .setMonth,
                                                              },
                                                              null,
                                                              8,
                                                              [
                                                                "months",
                                                                "onUpdateMonth",
                                                              ],
                                                            ),
                                                            [
                                                              [
                                                                pe,
                                                                i.previous
                                                                  .month,
                                                              ],
                                                            ],
                                                          ),
                                                          ce(
                                                            Q(
                                                              qe,
                                                              {
                                                                years:
                                                                  D.value.previous.years(),
                                                                onUpdateYear:
                                                                  D.value
                                                                    .previous
                                                                    .setYear,
                                                              },
                                                              null,
                                                              8,
                                                              [
                                                                "years",
                                                                "onUpdateYear",
                                                              ],
                                                            ),
                                                            [
                                                              [
                                                                pe,
                                                                i.previous.year,
                                                              ],
                                                            ],
                                                          ),
                                                          ce(
                                                            C(
                                                              "div",
                                                              null,
                                                              [
                                                                Q(
                                                                  Je,
                                                                  {
                                                                    weeks:
                                                                      b.value,
                                                                  },
                                                                  null,
                                                                  8,
                                                                  ["weeks"],
                                                                ),
                                                                Q(
                                                                  Ze,
                                                                  {
                                                                    calendar:
                                                                      D.value
                                                                        .previous,
                                                                    weeks:
                                                                      b.value,
                                                                    "as-range":
                                                                      p(),
                                                                    onUpdateDate:
                                                                      (x) =>
                                                                        E(x, s),
                                                                  },
                                                                  null,
                                                                  8,
                                                                  [
                                                                    "calendar",
                                                                    "weeks",
                                                                    "as-range",
                                                                    "onUpdateDate",
                                                                  ],
                                                                ),
                                                              ],
                                                              512,
                                                            ),
                                                            [
                                                              [
                                                                pe,
                                                                i.previous
                                                                  .calendar,
                                                              ],
                                                            ],
                                                          ),
                                                        ]),
                                                      ],
                                                      2,
                                                    ),
                                                    p() && !e.asSingle
                                                      ? (W(),
                                                        Z("div", Oo, [
                                                          Q(
                                                            Ge,
                                                            {
                                                              "as-prev-or-next":
                                                                "",
                                                              panel: i.next,
                                                              calendar:
                                                                D.value.next,
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              "panel",
                                                              "calendar",
                                                            ],
                                                          ),
                                                          C("div", To, [
                                                            ce(
                                                              Q(
                                                                Xe,
                                                                {
                                                                  months:
                                                                    Y.value,
                                                                  onUpdateMonth:
                                                                    D.value.next
                                                                      .setMonth,
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "months",
                                                                  "onUpdateMonth",
                                                                ],
                                                              ),
                                                              [
                                                                [
                                                                  pe,
                                                                  i.next.month,
                                                                ],
                                                              ],
                                                            ),
                                                            ce(
                                                              Q(
                                                                qe,
                                                                {
                                                                  "as-prev-or-next":
                                                                    "",
                                                                  years:
                                                                    D.value.next.years(),
                                                                  onUpdateYear:
                                                                    D.value.next
                                                                      .setYear,
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "years",
                                                                  "onUpdateYear",
                                                                ],
                                                              ),
                                                              [
                                                                [
                                                                  pe,
                                                                  i.next.year,
                                                                ],
                                                              ],
                                                            ),
                                                            ce(
                                                              C(
                                                                "div",
                                                                null,
                                                                [
                                                                  Q(
                                                                    Je,
                                                                    {
                                                                      weeks:
                                                                        b.value,
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ["weeks"],
                                                                  ),
                                                                  Q(
                                                                    Ze,
                                                                    {
                                                                      "as-prev-or-next":
                                                                        "",
                                                                      calendar:
                                                                        D.value
                                                                          .next,
                                                                      weeks:
                                                                        b.value,
                                                                      "as-range":
                                                                        p(),
                                                                      onUpdateDate:
                                                                        (x) =>
                                                                          E(
                                                                            x,
                                                                            s,
                                                                          ),
                                                                    },
                                                                    null,
                                                                    8,
                                                                    [
                                                                      "calendar",
                                                                      "weeks",
                                                                      "as-range",
                                                                      "onUpdateDate",
                                                                    ],
                                                                  ),
                                                                ],
                                                                512,
                                                              ),
                                                              [
                                                                [
                                                                  pe,
                                                                  i.next
                                                                    .calendar,
                                                                ],
                                                              ],
                                                            ),
                                                          ]),
                                                        ]))
                                                      : ye("", !0),
                                                  ]),
                                                ]),
                                                e.autoApply
                                                  ? (W(),
                                                    Z("div", Fo, [
                                                      C("div", Bo, [
                                                        C("div", No, [
                                                          C(
                                                            "button",
                                                            {
                                                              type: "button",
                                                              class:
                                                                "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                                                              onClick: (x) =>
                                                                s(),
                                                              textContent: ne(
                                                                e.options.footer
                                                                  .cancel,
                                                              ),
                                                            },
                                                            null,
                                                            8,
                                                            Ro,
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]))
                                                  : (W(),
                                                    Z("div", Ao, [
                                                      C("div", Co, [
                                                        C("div", Yo, [
                                                          C(
                                                            "button",
                                                            {
                                                              type: "button",
                                                              class:
                                                                "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                                                              disabled:
                                                                e.asSingle
                                                                  ? g.value
                                                                      .length <
                                                                    1
                                                                  : g.value
                                                                      .length <
                                                                    2,
                                                              onClick: (x) =>
                                                                K(s),
                                                              textContent: ne(
                                                                e.options.footer
                                                                  .apply,
                                                              ),
                                                            },
                                                            null,
                                                            8,
                                                            Eo,
                                                          ),
                                                          C(
                                                            "button",
                                                            {
                                                              type: "button",
                                                              class:
                                                                "mt-3 away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                                                              onClick: (x) =>
                                                                s(),
                                                              textContent: ne(
                                                                e.options.footer
                                                                  .cancel,
                                                              ),
                                                            },
                                                            null,
                                                            8,
                                                            Lo,
                                                          ),
                                                        ]),
                                                      ]),
                                                    ])),
                                              ],
                                              2,
                                            ),
                                          ],
                                          512,
                                        ),
                                      ],
                                      2,
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1024,
                              )),
                        ]),
                        _: 2,
                      },
                      1024,
                    ),
                  ]),
                  _: 3,
                },
              ))
      );
    },
  });
const zt = /* @__PURE__ */ (() => {
    const t = ra;
    return (
      (t.install = (o) => {
        o.component("VueTailwindDatepicker", t);
      }),
      t
    );
  })(),
  oa = /* @__PURE__ */ Object.freeze(
    /* @__PURE__ */ Object.defineProperty(
      {
        __proto__: null,
        default: zt,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
Object.entries(oa).forEach(([t, o]) => {
  t !== "default" && (zt[t] = o);
});
export { zt as c, d };
