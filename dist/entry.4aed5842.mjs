import { openBlock as W, createElementBlock as J, createElementVNode as P, withDirectives as le, vShow as ue, toDisplayString as se, Fragment as je, renderList as Re, inject as ce, createVNode as te, TransitionGroup as Dt, withCtx as _e, normalizeClass as we, Transition as st, unref as H, createCommentVNode as ve, withModifiers as Me, cloneVNode as Ot, h as Pe, provide as de, ref as re, onMounted as _t, watchEffect as ge, computed as fe, defineComponent as Ye, reactive as Vt, nextTick as Ee, watch as Pt, isProxy as Ct, createBlock as Fe, renderSlot as Yt, mergeProps as Tt, vModelText as At } from "vue";
const Lt = { class: "flex justify-between items-center px-2 py-1.5" }, Bt = { class: "flex-shrink-0" }, Et = { class: "inline-flex rounded-full" }, Ft = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Nt = ["d"], Ht = { class: "px-1.5 space-x-1.5 flex flex-1" }, Rt = { class: "flex-1 flex rounded-md" }, It = ["textContent"], Ut = { class: "flex-1 flex rounded-md" }, zt = ["textContent"], Wt = { class: "flex-shrink-0" }, Zt = { class: "inline-flex rounded-full" }, Gt = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Kt = ["d"], Ue = {
  __name: "Header",
  props: {
    asPrevOrNext: Boolean,
    panel: Object,
    calendar: Object
  },
  setup(t) {
    return (i, n) => (W(), J("div", Lt, [
      P("div", Bt, [
        le(P("span", Et, [
          P("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: n[0] || (n[0] = (e) => t.panel.calendar ? t.calendar.onPrevious() : t.calendar.onPreviousYear())
          }, [
            (W(), J("svg", Ft, [
              P("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: t.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
              }, null, 8, Nt)
            ]))
          ])
        ], 512), [
          [ue, t.panel.calendar || t.panel.year]
        ])
      ]),
      P("div", Ht, [
        P("span", Rt, [
          P("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            textContent: se(t.calendar.month),
            onClick: n[1] || (n[1] = (e) => t.calendar.openMonth())
          }, null, 8, It)
        ]),
        P("span", Ut, [
          P("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            textContent: se(t.calendar.year),
            onClick: n[2] || (n[2] = (e) => t.calendar.openYear())
          }, null, 8, zt)
        ])
      ]),
      P("div", Wt, [
        le(P("span", Zt, [
          P("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: n[3] || (n[3] = (e) => t.panel.calendar ? t.calendar.onNext() : t.calendar.onNextYear())
          }, [
            (W(), J("svg", Gt, [
              P("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: t.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
              }, null, 8, Kt)
            ]))
          ])
        ], 512), [
          [ue, t.panel.calendar || t.panel.year]
        ])
      ])
    ]));
  }
}, Jt = { class: "flex flex-wrap mt-1.5" }, qt = { class: "flex rounded-md mt-1.5" }, Xt = ["textContent", "onClick"], ze = {
  __name: "Month",
  props: {
    months: Array
  },
  emits: ["update:month"],
  setup(t, { emit: i }) {
    return (n, e) => (W(), J("div", Jt, [
      (W(!0), J(je, null, Re(t.months, (s, u) => (W(), J("div", {
        key: u,
        class: "w-1/2 px-0.5"
      }, [
        P("span", qt, [
          P("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            textContent: se(s),
            onClick: (V) => i("update:month", u)
          }, null, 8, Xt)
        ])
      ]))), 128))
    ]));
  }
}, Qt = { class: "grid grid-cols-7 py-2 mt-0.5" }, er = ["textContent"], We = {
  __name: "Week",
  props: {
    weeks: Array
  },
  setup(t) {
    return (i, n) => (W(), J("div", Qt, [
      (W(!0), J(je, null, Re(t.weeks, (e, s) => (W(), J("div", {
        key: s,
        class: "text-vtd-secondary-500 text-xs 2xl:text-sm tracking-wide font-medium text-center cursor-default dark:text-vtd-secondary-400"
      }, [
        P("span", {
          textContent: se(e)
        }, null, 8, er)
      ]))), 128))
    ]));
  }
}, tr = { class: "flex flex-wrap" }, rr = { class: "flex rounded-md mt-1.5" }, or = ["textContent", "onClick"], Ze = {
  __name: "Year",
  props: {
    asPrevOrNext: Boolean,
    years: Array
  },
  emits: ["update:year"],
  setup(t, { emit: i }) {
    return (n, e) => (W(), J("div", tr, [
      (W(!0), J(je, null, Re(t.years, (s, u) => (W(), J("div", {
        key: u,
        class: "w-1/2 px-0.5"
      }, [
        P("span", rr, [
          P("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            textContent: se(s),
            onClick: (V) => i("update:year", s, t.asPrevOrNext)
          }, null, 8, or)
        ])
      ]))), 128))
    ]));
  }
}, ar = { class: "grid grid-cols-7 gap-y-0.5 my-1" }, nr = ["data-tooltip"], sr = ["disabled", "onClick", "onMouseenter", "onFocusin", "textContent", "data-date"], Ge = {
  __name: "Calendar",
  props: {
    asPrevOrNext: Boolean,
    calendar: Object,
    weeks: Array,
    asRange: Boolean
  },
  emits: ["update:date"],
  setup(t, { emit: i }) {
    const n = ce("isBetweenRange"), e = ce("betweenRangeClasses"), s = ce("datepickerClasses"), u = ce("atMouseOver");
    return (V, c) => (W(), J("div", ar, [
      te(Dt, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: _e(() => [
          (W(!0), J(je, null, Re(t.calendar.date(), (v, h) => (W(), J("div", {
            key: h,
            class: we(["relative", { "vtd-tooltip": t.asRange && v.duration() }]),
            "data-tooltip": `${v.duration()}`
          }, [
            te(st, {
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "enter-active-class": "transition-opacity ease-out duration-200",
              "leave-active-class": "transition-opacity ease-in duration-150",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: _e(() => [
                H(n)(v) || v.hovered() ? (W(), J("span", {
                  key: 0,
                  class: we(["absolute bg-vtd-primary-100 bg-opacity-60 dark:bg-vtd-secondary-700 dark:bg-opacity-50", H(e)(v)])
                }, null, 2)) : ve("", !0)
              ]),
              _: 2
            }, 1024),
            P("button", {
              type: "button",
              class: we(["vtd-datepicker-date relative w-[2.7rem] h-[2.7rem] lg:w-10 lg:h-10 flex justify-center items-center text-xs 2xl:text-sm", [H(s)(v), t.asRange ? "transition-all" : "transition-colors"]]),
              disabled: v.disabled || v.inRange(),
              onClick: (w) => i("update:date", v, t.asPrevOrNext),
              onMouseenter: (w) => H(u)(v),
              onFocusin: (w) => H(u)(v),
              textContent: se(v.date()),
              "data-date": v.toDate()
            }, null, 42, sr)
          ], 10, nr))), 128))
        ]),
        _: 1
      })
    ]));
  }
}, lr = {
  key: 0,
  class: "relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/[.1] order-last sm:order-none dark:border-vtd-secondary-700/[1] sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0"
}, ir = {
  key: 0,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, ur = ["onClick", "textContent"], dr = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, at = {
  __name: "Shortcut",
  props: {
    shortcuts: [Boolean, Function],
    close: Function,
    asRange: Boolean,
    asSingle: Boolean,
    i18n: Object
  },
  setup(t) {
    const i = t, n = ce("setToToday"), e = ce("setToYesterday"), s = ce("setToLastDay"), u = ce("setToThisMonth"), V = ce("setToLastMonth"), c = ce("setToCustomShortcut"), v = () => typeof i.shortcuts == "function" ? i.shortcuts() : !1;
    return (h, w) => i.asRange && i.asSingle || i.asRange && !i.asSingle ? (W(), J("div", lr, [
      v() ? (W(), J("ol", ir, [
        (W(!0), J(je, null, Re(v(), (b, k) => (W(), J("li", { key: k }, [
          P("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: Me((F) => H(c)(b, t.close), ["prevent"]),
            textContent: se(b.label)
          }, null, 8, ur)
        ]))), 128))
      ])) : (W(), J("ol", dr, [
        P("li", null, [
          P("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[0] || (w[0] = Me((b) => H(n)(t.close), ["prevent"]))
          }, se(i.i18n.today), 1)
        ]),
        P("li", null, [
          P("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[1] || (w[1] = Me((b) => H(e)(t.close), ["prevent"]))
          }, se(i.i18n.yesterday), 1)
        ]),
        P("li", null, [
          P("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[2] || (w[2] = Me((b) => H(s)(7, t.close), ["prevent"]))
          }, se(i.i18n.past(7)), 1)
        ]),
        P("li", null, [
          P("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[3] || (w[3] = Me((b) => H(s)(30, t.close), ["prevent"]))
          }, se(i.i18n.past(30)), 1)
        ]),
        P("li", null, [
          P("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[4] || (w[4] = Me((b) => H(u)(t.close), ["prevent"]))
          }, se(i.i18n.currentMonth), 1)
        ]),
        P("li", null, [
          P("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[5] || (w[5] = Me((b) => H(V)(t.close), ["prevent"]))
          }, se(i.i18n.pastMonth), 1)
        ])
      ]))
    ])) : ve("", !0);
  }
};
function $e(t, i, ...n) {
  if (t in i) {
    let s = i[t];
    return typeof s == "function" ? s(...n) : s;
  }
  let e = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(i).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(e, $e), e;
}
var Ne = ((t) => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(Ne || {}), cr = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(cr || {});
function Te({ visible: t = !0, features: i = 0, ourProps: n, theirProps: e, ...s }) {
  var u;
  let V = fr(e, n), c = Object.assign(s, { props: V });
  if (t || i & 2 && V.static)
    return Xe(c);
  if (i & 1) {
    let v = (u = V.unmount) == null || u ? 0 : 1;
    return $e(v, { [0]() {
      return null;
    }, [1]() {
      return Xe({ ...s, props: { ...V, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Xe(c);
}
function Xe({ props: t, attrs: i, slots: n, slot: e, name: s }) {
  var u;
  let { as: V, ...c } = it(t, ["unmount", "static"]), v = (u = n.default) == null ? void 0 : u.call(n, e), h = {};
  if (e) {
    let w = !1, b = [];
    for (let [k, F] of Object.entries(e))
      typeof F == "boolean" && (w = !0), F === !0 && b.push(k);
    w && (h["data-headlessui-state"] = b.join(" "));
  }
  if (V === "template") {
    if (v = lt(v), Object.keys(c).length > 0 || Object.keys(i).length > 0) {
      let [w, ...b] = v != null ? v : [];
      if (!pr(w) || b.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${s} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(i)).sort((k, F) => k.localeCompare(F)).map((k) => `  - ${k}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((k) => `  - ${k}`).join(`
`)].join(`
`));
      return Ot(w, Object.assign({}, c, h));
    }
    return Array.isArray(v) && v.length === 1 ? v[0] : v;
  }
  return Pe(V, Object.assign({}, c, h), v);
}
function lt(t) {
  return t.flatMap((i) => i.type === je ? lt(i.children) : [i]);
}
function fr(...t) {
  if (t.length === 0)
    return {};
  if (t.length === 1)
    return t[0];
  let i = {}, n = {};
  for (let e of t)
    for (let s in e)
      s.startsWith("on") && typeof e[s] == "function" ? (n[s] != null || (n[s] = []), n[s].push(e[s])) : i[s] = e[s];
  if (i.disabled || i["aria-disabled"])
    return Object.assign(i, Object.fromEntries(Object.keys(n).map((e) => [e, void 0])));
  for (let e in n)
    Object.assign(i, { [e](s, ...u) {
      let V = n[e];
      for (let c of V) {
        if (s instanceof Event && s.defaultPrevented)
          return;
        c(s, ...u);
      }
    } });
  return i;
}
function it(t, i = []) {
  let n = Object.assign({}, t);
  for (let e of i)
    e in n && delete n[e];
  return n;
}
function pr(t) {
  return t == null ? !1 : typeof t.type == "string" || typeof t.type == "object" || typeof t.type == "function";
}
let mr = 0;
function vr() {
  return ++mr;
}
function Ce() {
  return vr();
}
var ke = ((t) => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(ke || {});
function U(t) {
  var i;
  return t == null || t.value == null ? null : (i = t.value.$el) != null ? i : t.value;
}
let ut = Symbol("Context");
var He = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(He || {});
function dt() {
  return ce(ut, null);
}
function hr(t) {
  de(ut, t);
}
function nt(t, i) {
  if (t)
    return t;
  let n = i != null ? i : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function yr(t, i) {
  let n = re(nt(t.value.type, t.value.as));
  return _t(() => {
    n.value = nt(t.value.type, t.value.as);
  }), ge(() => {
    var e;
    n.value || !U(i) || U(i) instanceof HTMLButtonElement && !((e = U(i)) != null && e.hasAttribute("type")) && (n.value = "button");
  }), n;
}
const Je = typeof window > "u" || typeof document > "u";
function Ie(t) {
  if (Je)
    return null;
  if (t instanceof Node)
    return t.ownerDocument;
  if (t != null && t.hasOwnProperty("value")) {
    let i = U(t);
    if (i)
      return i.ownerDocument;
  }
  return document;
}
let et = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((t) => `${t}:not([tabindex='-1'])`).join(",");
var Se = ((t) => (t[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t))(Se || {}), br = ((t) => (t[t.Error = 0] = "Error", t[t.Overflow = 1] = "Overflow", t[t.Success = 2] = "Success", t[t.Underflow = 3] = "Underflow", t))(br || {}), xr = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(xr || {});
function ct(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(et));
}
var rt = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(rt || {});
function ft(t, i = 0) {
  var n;
  return t === ((n = Ie(t)) == null ? void 0 : n.body) ? !1 : $e(i, { [0]() {
    return t.matches(et);
  }, [1]() {
    let e = t;
    for (; e !== null; ) {
      if (e.matches(et))
        return !0;
      e = e.parentElement;
    }
    return !1;
  } });
}
let gr = ["textarea", "input"].join(",");
function kr(t) {
  var i, n;
  return (n = (i = t == null ? void 0 : t.matches) == null ? void 0 : i.call(t, gr)) != null ? n : !1;
}
function wr(t, i = (n) => n) {
  return t.slice().sort((n, e) => {
    let s = i(n), u = i(e);
    if (s === null || u === null)
      return 0;
    let V = s.compareDocumentPosition(u);
    return V & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : V & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ve(t, i, n = !0, e = null) {
  var s;
  let u = (s = Array.isArray(t) ? t.length > 0 ? t[0].ownerDocument : document : t == null ? void 0 : t.ownerDocument) != null ? s : document, V = Array.isArray(t) ? n ? wr(t) : t : ct(t);
  e = e != null ? e : u.activeElement;
  let c = (() => {
    if (i & 5)
      return 1;
    if (i & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), v = (() => {
    if (i & 1)
      return 0;
    if (i & 2)
      return Math.max(0, V.indexOf(e)) - 1;
    if (i & 4)
      return Math.max(0, V.indexOf(e)) + 1;
    if (i & 8)
      return V.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), h = i & 32 ? { preventScroll: !0 } : {}, w = 0, b = V.length, k;
  do {
    if (w >= b || w + b <= 0)
      return 0;
    let F = v + w;
    if (i & 16)
      F = (F + b) % b;
    else {
      if (F < 0)
        return 3;
      if (F >= b)
        return 1;
    }
    k = V[F], k == null || k.focus(h), w += c;
  } while (k !== u.activeElement);
  return i & 6 && kr(k) && k.select(), k.hasAttribute("tabindex") || k.setAttribute("tabindex", "0"), 2;
}
function Qe(t, i, n) {
  Je || ge((e) => {
    document.addEventListener(t, i, n), e(() => document.removeEventListener(t, i, n));
  });
}
function $r(t, i, n = fe(() => !0)) {
  function e(u, V) {
    if (!n.value || u.defaultPrevented)
      return;
    let c = V(u);
    if (c === null || !c.ownerDocument.documentElement.contains(c))
      return;
    let v = function h(w) {
      return typeof w == "function" ? h(w()) : Array.isArray(w) || w instanceof Set ? w : [w];
    }(t);
    for (let h of v) {
      if (h === null)
        continue;
      let w = h instanceof HTMLElement ? h : U(h);
      if (w != null && w.contains(c))
        return;
    }
    return !ft(c, rt.Loose) && c.tabIndex !== -1 && u.preventDefault(), i(u, c);
  }
  let s = re(null);
  Qe("mousedown", (u) => {
    n.value && (s.value = u.target);
  }, !0), Qe("click", (u) => {
    !s.value || (e(u, () => s.value), s.value = null);
  }, !0), Qe("blur", (u) => e(u, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ke = ((t) => (t[t.None = 1] = "None", t[t.Focusable = 2] = "Focusable", t[t.Hidden = 4] = "Hidden", t))(Ke || {});
let tt = Ye({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t, { slots: i, attrs: n }) {
  return () => {
    let { features: e, ...s } = t, u = { "aria-hidden": (e & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
    return Te({ ourProps: u, theirProps: s, slot: {}, attrs: n, slots: i, name: "Hidden" });
  };
} });
function jr(t, i, n) {
  Je || ge((e) => {
    window.addEventListener(t, i, n), e(() => window.removeEventListener(t, i, n));
  });
}
var De = ((t) => (t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(De || {});
function pt() {
  let t = re(0);
  return jr("keydown", (i) => {
    i.key === "Tab" && (t.value = i.shiftKey ? 1 : 0);
  }), t;
}
function Mr(t, i, n, e) {
  Je || ge((s) => {
    t = t != null ? t : window, t.addEventListener(i, n, e), s(() => t.removeEventListener(i, n, e));
  });
}
var Sr = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(Sr || {});
let mt = Symbol("PopoverContext");
function qe(t) {
  let i = ce(mt, null);
  if (i === null) {
    let n = new Error(`<${t} /> is missing a parent <${bt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, qe), n;
  }
  return i;
}
let vt = Symbol("PopoverGroupContext");
function ht() {
  return ce(vt, null);
}
let yt = Symbol("PopoverPanelContext");
function Dr() {
  return ce(yt, null);
}
let bt = Ye({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: i, attrs: n, expose: e }) {
  var s;
  let u = `headlessui-popover-button-${Ce()}`, V = `headlessui-popover-panel-${Ce()}`, c = re(null);
  e({ el: c, $el: c });
  let v = re(1), h = re(null), w = re(null), b = re(null), k = re(null), F = fe(() => Ie(c)), G = fe(() => {
    if (!U(h) || !U(k))
      return !1;
    for (let C of document.querySelectorAll("body > *"))
      if (Number(C == null ? void 0 : C.contains(U(h))) ^ Number(C == null ? void 0 : C.contains(U(k))))
        return !0;
    return !1;
  }), M = { popoverState: v, buttonId: u, panelId: V, panel: k, button: h, isPortalled: G, beforePanelSentinel: w, afterPanelSentinel: b, togglePopover() {
    v.value = $e(v.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    v.value !== 1 && (v.value = 1);
  }, close(C) {
    M.closePopover();
    let Y = (() => C ? C instanceof HTMLElement ? C : C.value instanceof HTMLElement ? U(C) : U(M.button) : U(M.button))();
    Y == null || Y.focus();
  } };
  de(mt, M), hr(fe(() => $e(v.value, { [0]: He.Open, [1]: He.Closed })));
  let _ = { buttonId: u, panelId: V, close() {
    M.closePopover();
  } }, f = ht(), $ = f == null ? void 0 : f.registerPopover;
  function D() {
    var C, Y, a, r;
    return (r = f == null ? void 0 : f.isFocusWithinPopoverGroup()) != null ? r : ((C = F.value) == null ? void 0 : C.activeElement) && (((Y = U(h)) == null ? void 0 : Y.contains(F.value.activeElement)) || ((a = U(k)) == null ? void 0 : a.contains(F.value.activeElement)));
  }
  return ge(() => $ == null ? void 0 : $(_)), Mr((s = F.value) == null ? void 0 : s.defaultView, "focus", (C) => {
    var Y, a;
    v.value === 0 && (D() || !h || !k || (Y = U(M.beforePanelSentinel)) != null && Y.contains(C.target) || (a = U(M.afterPanelSentinel)) != null && a.contains(C.target) || M.closePopover());
  }, !0), $r([h, k], (C, Y) => {
    var a;
    M.closePopover(), ft(Y, rt.Loose) || (C.preventDefault(), (a = U(h)) == null || a.focus());
  }, fe(() => v.value === 0)), () => {
    let C = { open: v.value === 0, close: M.close };
    return Te({ theirProps: t, ourProps: { ref: c }, slot: C, slots: i, attrs: n, name: "Popover" });
  };
} }), Or = Ye({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(t, { attrs: i, slots: n, expose: e }) {
  let s = qe("PopoverButton"), u = fe(() => Ie(s.button));
  e({ el: s.button, $el: s.button });
  let V = ht(), c = V == null ? void 0 : V.closeOthers, v = Dr(), h = v === null ? !1 : v === s.panelId, w = re(null), b = `headlessui-focus-sentinel-${Ce()}`;
  h || ge(() => {
    s.button.value = w.value;
  });
  let k = yr(fe(() => ({ as: t.as, type: i.type })), w);
  function F(f) {
    var $, D, C, Y, a;
    if (h) {
      if (s.popoverState.value === 1)
        return;
      switch (f.key) {
        case ke.Space:
        case ke.Enter:
          f.preventDefault(), (D = ($ = f.target).click) == null || D.call($), s.closePopover(), (C = U(s.button)) == null || C.focus();
          break;
      }
    } else
      switch (f.key) {
        case ke.Space:
        case ke.Enter:
          f.preventDefault(), f.stopPropagation(), s.popoverState.value === 1 && (c == null || c(s.buttonId)), s.togglePopover();
          break;
        case ke.Escape:
          if (s.popoverState.value !== 0)
            return c == null ? void 0 : c(s.buttonId);
          if (!U(s.button) || ((Y = u.value) == null ? void 0 : Y.activeElement) && !((a = U(s.button)) != null && a.contains(u.value.activeElement)))
            return;
          f.preventDefault(), f.stopPropagation(), s.closePopover();
          break;
      }
  }
  function G(f) {
    h || f.key === ke.Space && f.preventDefault();
  }
  function M(f) {
    var $, D;
    t.disabled || (h ? (s.closePopover(), ($ = U(s.button)) == null || $.focus()) : (f.preventDefault(), f.stopPropagation(), s.popoverState.value === 1 && (c == null || c(s.buttonId)), s.togglePopover(), (D = U(s.button)) == null || D.focus()));
  }
  function _(f) {
    f.preventDefault(), f.stopPropagation();
  }
  return () => {
    let f = s.popoverState.value === 0, $ = { open: f }, D = h ? { ref: w, type: k.value, onKeydown: F, onClick: M } : { ref: w, id: s.buttonId, type: k.value, "aria-expanded": t.disabled ? void 0 : s.popoverState.value === 0, "aria-controls": U(s.panel) ? s.panelId : void 0, disabled: t.disabled ? !0 : void 0, onKeydown: F, onKeyup: G, onClick: M, onMousedown: _ }, C = pt();
    function Y() {
      let a = U(s.panel);
      if (!a)
        return;
      function r() {
        $e(C.value, { [De.Forwards]: () => Ve(a, Se.First), [De.Backwards]: () => Ve(a, Se.Last) });
      }
      r();
    }
    return Pe(je, [Te({ ourProps: D, theirProps: { ...i, ...t }, slot: $, attrs: i, slots: n, name: "PopoverButton" }), f && !h && s.isPortalled.value && Pe(tt, { id: b, features: Ke.Focusable, as: "button", type: "button", onFocus: Y })]);
  };
} }), _r = Ye({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(t, { attrs: i, slots: n }) {
  let e = qe("PopoverOverlay"), s = `headlessui-popover-overlay-${Ce()}`, u = dt(), V = fe(() => u !== null ? u.value === He.Open : e.popoverState.value === 0);
  function c() {
    e.closePopover();
  }
  return () => {
    let v = { open: e.popoverState.value === 0 };
    return Te({ ourProps: { id: s, "aria-hidden": !0, onClick: c }, theirProps: t, slot: v, attrs: i, slots: n, features: Ne.RenderStrategy | Ne.Static, visible: V.value, name: "PopoverOverlay" });
  };
} }), Vr = Ye({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 } }, inheritAttrs: !1, setup(t, { attrs: i, slots: n, expose: e }) {
  let { focus: s } = t, u = qe("PopoverPanel"), V = fe(() => Ie(u.panel)), c = `headlessui-focus-sentinel-before-${Ce()}`, v = `headlessui-focus-sentinel-after-${Ce()}`;
  e({ el: u.panel, $el: u.panel }), de(yt, u.panelId), ge(() => {
    var _, f;
    if (!s || u.popoverState.value !== 0 || !u.panel)
      return;
    let $ = (_ = V.value) == null ? void 0 : _.activeElement;
    (f = U(u.panel)) != null && f.contains($) || Ve(U(u.panel), Se.First);
  });
  let h = dt(), w = fe(() => h !== null ? h.value === He.Open : u.popoverState.value === 0);
  function b(_) {
    var f, $;
    switch (_.key) {
      case ke.Escape:
        if (u.popoverState.value !== 0 || !U(u.panel) || V.value && !((f = U(u.panel)) != null && f.contains(V.value.activeElement)))
          return;
        _.preventDefault(), _.stopPropagation(), u.closePopover(), ($ = U(u.button)) == null || $.focus();
        break;
    }
  }
  function k(_) {
    var f, $, D, C, Y;
    let a = _.relatedTarget;
    !a || !U(u.panel) || (f = U(u.panel)) != null && f.contains(a) || (u.closePopover(), (((D = ($ = U(u.beforePanelSentinel)) == null ? void 0 : $.contains) == null ? void 0 : D.call($, a)) || ((Y = (C = U(u.afterPanelSentinel)) == null ? void 0 : C.contains) == null ? void 0 : Y.call(C, a))) && a.focus({ preventScroll: !0 }));
  }
  let F = pt();
  function G() {
    let _ = U(u.panel);
    if (!_)
      return;
    function f() {
      $e(F.value, { [De.Forwards]: () => {
        Ve(_, Se.Next);
      }, [De.Backwards]: () => {
        var $;
        ($ = U(u.button)) == null || $.focus({ preventScroll: !0 });
      } });
    }
    f();
  }
  function M() {
    let _ = U(u.panel);
    if (!_)
      return;
    function f() {
      $e(F.value, { [De.Forwards]: () => {
        var $, D;
        let C = U(u.button), Y = U(u.panel);
        if (!C)
          return;
        let a = ct(), r = a.indexOf(C), N = a.slice(0, r + 1), L = [...a.slice(r + 1), ...N];
        for (let j of L.slice())
          if (((D = ($ = j == null ? void 0 : j.id) == null ? void 0 : $.startsWith) == null ? void 0 : D.call($, "headlessui-focus-sentinel-")) || (Y == null ? void 0 : Y.contains(j))) {
            let Z = L.indexOf(j);
            Z !== -1 && L.splice(Z, 1);
          }
        Ve(L, Se.First, !1);
      }, [De.Backwards]: () => Ve(_, Se.Previous) });
    }
    f();
  }
  return () => {
    let _ = { open: u.popoverState.value === 0, close: u.close }, f = { ref: u.panel, id: u.panelId, onKeydown: b, onFocusout: s && u.popoverState.value === 0 ? k : void 0, tabIndex: -1 };
    return Te({ ourProps: f, theirProps: { ...i, ...it(t, ["focus"]) }, attrs: i, slot: _, slots: { ...n, default: (...$) => {
      var D;
      return [Pe(je, [w.value && u.isPortalled.value && Pe(tt, { id: c, ref: u.beforePanelSentinel, features: Ke.Focusable, as: "button", type: "button", onFocus: G }), (D = n.default) == null ? void 0 : D.call(n, ...$), w.value && u.isPortalled.value && Pe(tt, { id: v, ref: u.afterPanelSentinel, features: Ke.Focusable, as: "button", type: "button", onFocus: M })])];
    } }, features: Ne.RenderStrategy | Ne.Static, visible: w.value, name: "PopoverPanel" });
  };
} });
Ye({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(t, { attrs: i, slots: n, expose: e }) {
  let s = re(null), u = re([]), V = fe(() => Ie(s));
  e({ el: s, $el: s });
  function c(b) {
    let k = u.value.indexOf(b);
    k !== -1 && u.value.splice(k, 1);
  }
  function v(b) {
    return u.value.push(b), () => {
      c(b);
    };
  }
  function h() {
    var b;
    let k = V.value;
    if (!k)
      return !1;
    let F = k.activeElement;
    return (b = U(s)) != null && b.contains(F) ? !0 : u.value.some((G) => {
      var M, _;
      return ((M = k.getElementById(G.buttonId)) == null ? void 0 : M.contains(F)) || ((_ = k.getElementById(G.panelId)) == null ? void 0 : _.contains(F));
    });
  }
  function w(b) {
    for (let k of u.value)
      k.buttonId !== b && k.close();
  }
  return de(vt, { registerPopover: v, unregisterPopover: c, isFocusWithinPopoverGroup: h, closeOthers: w }), () => Te({ ourProps: { ref: s }, theirProps: t, slot: {}, attrs: i, slots: n, name: "PopoverGroup" });
} });
var Oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xt = { exports: {} };
(function(t, i) {
  (function(n, e) {
    t.exports = e();
  })(Oe, function() {
    var n = 1e3, e = 6e4, s = 36e5, u = "millisecond", V = "second", c = "minute", v = "hour", h = "day", w = "week", b = "month", k = "quarter", F = "year", G = "date", M = "Invalid Date", _ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
      var x = ["th", "st", "nd", "rd"], y = T % 100;
      return "[" + T + (x[(y - 20) % 10] || x[y] || x[0]) + "]";
    } }, D = function(T, x, y) {
      var O = String(T);
      return !O || O.length >= x ? T : "" + Array(x + 1 - O.length).join(y) + T;
    }, C = { s: D, z: function(T) {
      var x = -T.utcOffset(), y = Math.abs(x), O = Math.floor(y / 60), S = y % 60;
      return (x <= 0 ? "+" : "-") + D(O, 2, "0") + ":" + D(S, 2, "0");
    }, m: function T(x, y) {
      if (x.date() < y.date())
        return -T(y, x);
      var O = 12 * (y.year() - x.year()) + (y.month() - x.month()), S = x.clone().add(O, b), B = y - S < 0, A = x.clone().add(O + (B ? -1 : 1), b);
      return +(-(O + (y - S) / (B ? S - A : A - S)) || 0);
    }, a: function(T) {
      return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
    }, p: function(T) {
      return { M: b, y: F, w, d: h, D: G, h: v, m: c, s: V, ms: u, Q: k }[T] || String(T || "").toLowerCase().replace(/s$/, "");
    }, u: function(T) {
      return T === void 0;
    } }, Y = "en", a = {};
    a[Y] = $;
    var r = function(T) {
      return T instanceof Z;
    }, N = function T(x, y, O) {
      var S;
      if (!x)
        return Y;
      if (typeof x == "string") {
        var B = x.toLowerCase();
        a[B] && (S = B), y && (a[B] = y, S = B);
        var A = x.split("-");
        if (!S && A.length > 1)
          return T(A[0]);
      } else {
        var z = x.name;
        a[z] = x, S = z;
      }
      return !O && S && (Y = S), S || !O && Y;
    }, L = function(T, x) {
      if (r(T))
        return T.clone();
      var y = typeof x == "object" ? x : {};
      return y.date = T, y.args = arguments, new Z(y);
    }, j = C;
    j.l = N, j.i = r, j.w = function(T, x) {
      return L(T, { locale: x.$L, utc: x.$u, x: x.$x, $offset: x.$offset });
    };
    var Z = function() {
      function T(y) {
        this.$L = N(y.locale, null, !0), this.parse(y);
      }
      var x = T.prototype;
      return x.parse = function(y) {
        this.$d = function(O) {
          var S = O.date, B = O.utc;
          if (S === null)
            return new Date(NaN);
          if (j.u(S))
            return new Date();
          if (S instanceof Date)
            return new Date(S);
          if (typeof S == "string" && !/Z$/i.test(S)) {
            var A = S.match(_);
            if (A) {
              var z = A[2] - 1 || 0, K = (A[7] || "0").substring(0, 3);
              return B ? new Date(Date.UTC(A[1], z, A[3] || 1, A[4] || 0, A[5] || 0, A[6] || 0, K)) : new Date(A[1], z, A[3] || 1, A[4] || 0, A[5] || 0, A[6] || 0, K);
            }
          }
          return new Date(S);
        }(y), this.$x = y.x || {}, this.init();
      }, x.init = function() {
        var y = this.$d;
        this.$y = y.getFullYear(), this.$M = y.getMonth(), this.$D = y.getDate(), this.$W = y.getDay(), this.$H = y.getHours(), this.$m = y.getMinutes(), this.$s = y.getSeconds(), this.$ms = y.getMilliseconds();
      }, x.$utils = function() {
        return j;
      }, x.isValid = function() {
        return this.$d.toString() !== M;
      }, x.isSame = function(y, O) {
        var S = L(y);
        return this.startOf(O) <= S && S <= this.endOf(O);
      }, x.isAfter = function(y, O) {
        return L(y) < this.startOf(O);
      }, x.isBefore = function(y, O) {
        return this.endOf(O) < L(y);
      }, x.$g = function(y, O, S) {
        return j.u(y) ? this[O] : this.set(S, y);
      }, x.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, x.valueOf = function() {
        return this.$d.getTime();
      }, x.startOf = function(y, O) {
        var S = this, B = !!j.u(O) || O, A = j.p(y), z = function(ne, ae) {
          var ie = j.w(S.$u ? Date.UTC(S.$y, ae, ne) : new Date(S.$y, ae, ne), S);
          return B ? ie : ie.endOf(h);
        }, K = function(ne, ae) {
          return j.w(S.toDate()[ne].apply(S.toDate("s"), (B ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ae)), S);
        }, X = this.$W, oe = this.$M, me = this.$D, pe = "set" + (this.$u ? "UTC" : "");
        switch (A) {
          case F:
            return B ? z(1, 0) : z(31, 11);
          case b:
            return B ? z(1, oe) : z(0, oe + 1);
          case w:
            var xe = this.$locale().weekStart || 0, he = (X < xe ? X + 7 : X) - xe;
            return z(B ? me - he : me + (6 - he), oe);
          case h:
          case G:
            return K(pe + "Hours", 0);
          case v:
            return K(pe + "Minutes", 1);
          case c:
            return K(pe + "Seconds", 2);
          case V:
            return K(pe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, x.endOf = function(y) {
        return this.startOf(y, !1);
      }, x.$set = function(y, O) {
        var S, B = j.p(y), A = "set" + (this.$u ? "UTC" : ""), z = (S = {}, S[h] = A + "Date", S[G] = A + "Date", S[b] = A + "Month", S[F] = A + "FullYear", S[v] = A + "Hours", S[c] = A + "Minutes", S[V] = A + "Seconds", S[u] = A + "Milliseconds", S)[B], K = B === h ? this.$D + (O - this.$W) : O;
        if (B === b || B === F) {
          var X = this.clone().set(G, 1);
          X.$d[z](K), X.init(), this.$d = X.set(G, Math.min(this.$D, X.daysInMonth())).$d;
        } else
          z && this.$d[z](K);
        return this.init(), this;
      }, x.set = function(y, O) {
        return this.clone().$set(y, O);
      }, x.get = function(y) {
        return this[j.p(y)]();
      }, x.add = function(y, O) {
        var S, B = this;
        y = Number(y);
        var A = j.p(O), z = function(oe) {
          var me = L(B);
          return j.w(me.date(me.date() + Math.round(oe * y)), B);
        };
        if (A === b)
          return this.set(b, this.$M + y);
        if (A === F)
          return this.set(F, this.$y + y);
        if (A === h)
          return z(1);
        if (A === w)
          return z(7);
        var K = (S = {}, S[c] = e, S[v] = s, S[V] = n, S)[A] || 1, X = this.$d.getTime() + y * K;
        return j.w(X, this);
      }, x.subtract = function(y, O) {
        return this.add(-1 * y, O);
      }, x.format = function(y) {
        var O = this, S = this.$locale();
        if (!this.isValid())
          return S.invalidDate || M;
        var B = y || "YYYY-MM-DDTHH:mm:ssZ", A = j.z(this), z = this.$H, K = this.$m, X = this.$M, oe = S.weekdays, me = S.months, pe = function(ae, ie, ye, be) {
          return ae && (ae[ie] || ae(O, B)) || ye[ie].slice(0, be);
        }, xe = function(ae) {
          return j.s(z % 12 || 12, ae, "0");
        }, he = S.meridiem || function(ae, ie, ye) {
          var be = ae < 12 ? "AM" : "PM";
          return ye ? be.toLowerCase() : be;
        }, ne = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: X + 1, MM: j.s(X + 1, 2, "0"), MMM: pe(S.monthsShort, X, me, 3), MMMM: pe(me, X), D: this.$D, DD: j.s(this.$D, 2, "0"), d: String(this.$W), dd: pe(S.weekdaysMin, this.$W, oe, 2), ddd: pe(S.weekdaysShort, this.$W, oe, 3), dddd: oe[this.$W], H: String(z), HH: j.s(z, 2, "0"), h: xe(1), hh: xe(2), a: he(z, K, !0), A: he(z, K, !1), m: String(K), mm: j.s(K, 2, "0"), s: String(this.$s), ss: j.s(this.$s, 2, "0"), SSS: j.s(this.$ms, 3, "0"), Z: A };
        return B.replace(f, function(ae, ie) {
          return ie || ne[ae] || A.replace(":", "");
        });
      }, x.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, x.diff = function(y, O, S) {
        var B, A = j.p(O), z = L(y), K = (z.utcOffset() - this.utcOffset()) * e, X = this - z, oe = j.m(this, z);
        return oe = (B = {}, B[F] = oe / 12, B[b] = oe, B[k] = oe / 3, B[w] = (X - K) / 6048e5, B[h] = (X - K) / 864e5, B[v] = X / s, B[c] = X / e, B[V] = X / n, B)[A] || X, S ? oe : j.a(oe);
      }, x.daysInMonth = function() {
        return this.endOf(b).$D;
      }, x.$locale = function() {
        return a[this.$L];
      }, x.locale = function(y, O) {
        if (!y)
          return this.$L;
        var S = this.clone(), B = N(y, O, !0);
        return B && (S.$L = B), S;
      }, x.clone = function() {
        return j.w(this.$d, this);
      }, x.toDate = function() {
        return new Date(this.valueOf());
      }, x.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, x.toISOString = function() {
        return this.$d.toISOString();
      }, x.toString = function() {
        return this.$d.toUTCString();
      }, T;
    }(), q = Z.prototype;
    return L.prototype = q, [["$ms", u], ["$s", V], ["$m", c], ["$H", v], ["$W", h], ["$M", b], ["$y", F], ["$D", G]].forEach(function(T) {
      q[T[1]] = function(x) {
        return this.$g(x, T[0], T[1]);
      };
    }), L.extend = function(T, x) {
      return T.$i || (T(x, Z, L), T.$i = !0), L;
    }, L.locale = N, L.isDayjs = r, L.unix = function(T) {
      return L(1e3 * T);
    }, L.en = a[Y], L.Ls = a, L.p = {}, L;
  });
})(xt);
const l = xt.exports;
var gt = { exports: {} };
(function(t, i) {
  (function(n, e) {
    t.exports = e();
  })(Oe, function() {
    return function(n, e, s) {
      var u = e.prototype, V = function(b) {
        return b && (b.indexOf ? b : b.s);
      }, c = function(b, k, F, G, M) {
        var _ = b.name ? b : b.$locale(), f = V(_[k]), $ = V(_[F]), D = f || $.map(function(Y) {
          return Y.slice(0, G);
        });
        if (!M)
          return D;
        var C = _.weekStart;
        return D.map(function(Y, a) {
          return D[(a + (C || 0)) % 7];
        });
      }, v = function() {
        return s.Ls[s.locale()];
      }, h = function(b, k) {
        return b.formats[k] || function(F) {
          return F.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(G, M, _) {
            return M || _.slice(1);
          });
        }(b.formats[k.toUpperCase()]);
      }, w = function() {
        var b = this;
        return { months: function(k) {
          return k ? k.format("MMMM") : c(b, "months");
        }, monthsShort: function(k) {
          return k ? k.format("MMM") : c(b, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return b.$locale().weekStart || 0;
        }, weekdays: function(k) {
          return k ? k.format("dddd") : c(b, "weekdays");
        }, weekdaysMin: function(k) {
          return k ? k.format("dd") : c(b, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(k) {
          return k ? k.format("ddd") : c(b, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(k) {
          return h(b.$locale(), k);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      u.localeData = function() {
        return w.bind(this)();
      }, s.localeData = function() {
        var b = v();
        return { firstDayOfWeek: function() {
          return b.weekStart || 0;
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
        }, longDateFormat: function(k) {
          return h(b, k);
        }, meridiem: b.meridiem, ordinal: b.ordinal };
      }, s.months = function() {
        return c(v(), "months");
      }, s.monthsShort = function() {
        return c(v(), "monthsShort", "months", 3);
      }, s.weekdays = function(b) {
        return c(v(), "weekdays", null, null, b);
      }, s.weekdaysShort = function(b) {
        return c(v(), "weekdaysShort", "weekdays", 3, b);
      }, s.weekdaysMin = function(b) {
        return c(v(), "weekdaysMin", "weekdays", 2, b);
      };
    };
  });
})(gt);
const Pr = gt.exports;
var kt = { exports: {} };
(function(t, i) {
  (function(n, e) {
    t.exports = e();
  })(Oe, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(e, s, u) {
      var V = s.prototype, c = V.format;
      u.en.formats = n, V.format = function(v) {
        v === void 0 && (v = "YYYY-MM-DDTHH:mm:ssZ");
        var h = this.$locale().formats, w = function(b, k) {
          return b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(F, G, M) {
            var _ = M && M.toUpperCase();
            return G || k[M] || n[M] || k[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(f, $, D) {
              return $ || D.slice(1);
            });
          });
        }(v, h === void 0 ? {} : h);
        return c.call(this, w);
      };
    };
  });
})(kt);
const Cr = kt.exports;
var wt = { exports: {} };
(function(t, i) {
  (function(n, e) {
    t.exports = e();
  })(Oe, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, u = /\d\d?/, V = /\d*[^-_:/,()\s\d]+/, c = {}, v = function(M) {
      return (M = +M) + (M > 68 ? 1900 : 2e3);
    }, h = function(M) {
      return function(_) {
        this[M] = +_;
      };
    }, w = [/[+-]\d\d:?(\d\d)?|Z/, function(M) {
      (this.zone || (this.zone = {})).offset = function(_) {
        if (!_ || _ === "Z")
          return 0;
        var f = _.match(/([+-]|\d\d)/g), $ = 60 * f[1] + (+f[2] || 0);
        return $ === 0 ? 0 : f[0] === "+" ? -$ : $;
      }(M);
    }], b = function(M) {
      var _ = c[M];
      return _ && (_.indexOf ? _ : _.s.concat(_.f));
    }, k = function(M, _) {
      var f, $ = c.meridiem;
      if ($) {
        for (var D = 1; D <= 24; D += 1)
          if (M.indexOf($(D, 0, _)) > -1) {
            f = D > 12;
            break;
          }
      } else
        f = M === (_ ? "pm" : "PM");
      return f;
    }, F = { A: [V, function(M) {
      this.afternoon = k(M, !1);
    }], a: [V, function(M) {
      this.afternoon = k(M, !0);
    }], S: [/\d/, function(M) {
      this.milliseconds = 100 * +M;
    }], SS: [s, function(M) {
      this.milliseconds = 10 * +M;
    }], SSS: [/\d{3}/, function(M) {
      this.milliseconds = +M;
    }], s: [u, h("seconds")], ss: [u, h("seconds")], m: [u, h("minutes")], mm: [u, h("minutes")], H: [u, h("hours")], h: [u, h("hours")], HH: [u, h("hours")], hh: [u, h("hours")], D: [u, h("day")], DD: [s, h("day")], Do: [V, function(M) {
      var _ = c.ordinal, f = M.match(/\d+/);
      if (this.day = f[0], _)
        for (var $ = 1; $ <= 31; $ += 1)
          _($).replace(/\[|\]/g, "") === M && (this.day = $);
    }], M: [u, h("month")], MM: [s, h("month")], MMM: [V, function(M) {
      var _ = b("months"), f = (b("monthsShort") || _.map(function($) {
        return $.slice(0, 3);
      })).indexOf(M) + 1;
      if (f < 1)
        throw new Error();
      this.month = f % 12 || f;
    }], MMMM: [V, function(M) {
      var _ = b("months").indexOf(M) + 1;
      if (_ < 1)
        throw new Error();
      this.month = _ % 12 || _;
    }], Y: [/[+-]?\d+/, h("year")], YY: [s, function(M) {
      this.year = v(M);
    }], YYYY: [/\d{4}/, h("year")], Z: w, ZZ: w };
    function G(M) {
      var _, f;
      _ = M, f = c && c.formats;
      for (var $ = (M = _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, j, Z) {
        var q = Z && Z.toUpperCase();
        return j || f[Z] || n[Z] || f[q].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(T, x, y) {
          return x || y.slice(1);
        });
      })).match(e), D = $.length, C = 0; C < D; C += 1) {
        var Y = $[C], a = F[Y], r = a && a[0], N = a && a[1];
        $[C] = N ? { regex: r, parser: N } : Y.replace(/^\[|\]$/g, "");
      }
      return function(L) {
        for (var j = {}, Z = 0, q = 0; Z < D; Z += 1) {
          var T = $[Z];
          if (typeof T == "string")
            q += T.length;
          else {
            var x = T.regex, y = T.parser, O = L.slice(q), S = x.exec(O)[0];
            y.call(j, S), L = L.replace(S, "");
          }
        }
        return function(B) {
          var A = B.afternoon;
          if (A !== void 0) {
            var z = B.hours;
            A ? z < 12 && (B.hours += 12) : z === 12 && (B.hours = 0), delete B.afternoon;
          }
        }(j), j;
      };
    }
    return function(M, _, f) {
      f.p.customParseFormat = !0, M && M.parseTwoDigitYear && (v = M.parseTwoDigitYear);
      var $ = _.prototype, D = $.parse;
      $.parse = function(C) {
        var Y = C.date, a = C.utc, r = C.args;
        this.$u = a;
        var N = r[1];
        if (typeof N == "string") {
          var L = r[2] === !0, j = r[3] === !0, Z = L || j, q = r[2];
          j && (q = r[2]), c = this.$locale(), !L && q && (c = f.Ls[q]), this.$d = function(O, S, B) {
            try {
              if (["x", "X"].indexOf(S) > -1)
                return new Date((S === "X" ? 1e3 : 1) * O);
              var A = G(S)(O), z = A.year, K = A.month, X = A.day, oe = A.hours, me = A.minutes, pe = A.seconds, xe = A.milliseconds, he = A.zone, ne = new Date(), ae = X || (z || K ? 1 : ne.getDate()), ie = z || ne.getFullYear(), ye = 0;
              z && !K || (ye = K > 0 ? K - 1 : ne.getMonth());
              var be = oe || 0, Ae = me || 0, Le = pe || 0, Be = xe || 0;
              return he ? new Date(Date.UTC(ie, ye, ae, be, Ae, Le, Be + 60 * he.offset * 1e3)) : B ? new Date(Date.UTC(ie, ye, ae, be, Ae, Le, Be)) : new Date(ie, ye, ae, be, Ae, Le, Be);
            } catch {
              return new Date("");
            }
          }(Y, N, a), this.init(), q && q !== !0 && (this.$L = this.locale(q).$L), Z && Y != this.format(N) && (this.$d = new Date("")), c = {};
        } else if (N instanceof Array)
          for (var T = N.length, x = 1; x <= T; x += 1) {
            r[1] = N[x - 1];
            var y = f.apply(this, r);
            if (y.isValid()) {
              this.$d = y.$d, this.$L = y.$L, this.init();
              break;
            }
            x === T && (this.$d = new Date(""));
          }
        else
          D.call(this, C);
      };
    };
  });
})(wt);
const Yr = wt.exports;
var $t = { exports: {} };
(function(t, i) {
  (function(n, e) {
    t.exports = e();
  })(Oe, function() {
    return function(n, e, s) {
      e.prototype.isToday = function() {
        var u = "YYYY-MM-DD", V = s();
        return this.format(u) === V.format(u);
      };
    };
  });
})($t);
const Tr = $t.exports;
var jt = { exports: {} };
(function(t, i) {
  (function(n, e) {
    t.exports = e();
  })(Oe, function() {
    return function(n, e, s) {
      e.prototype.isBetween = function(u, V, c, v) {
        var h = s(u), w = s(V), b = (v = v || "()")[0] === "(", k = v[1] === ")";
        return (b ? this.isAfter(h, c) : !this.isBefore(h, c)) && (k ? this.isBefore(w, c) : !this.isAfter(w, c)) || (b ? this.isBefore(h, c) : !this.isAfter(h, c)) && (k ? this.isAfter(w, c) : !this.isBefore(w, c));
      };
    };
  });
})(jt);
const Ar = jt.exports;
var Mt = { exports: {} };
(function(t, i) {
  (function(n, e) {
    t.exports = e();
  })(Oe, function() {
    var n, e, s = 1e3, u = 6e4, V = 36e5, c = 864e5, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, h = 31536e6, w = 2592e6, b = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, k = { years: h, months: w, days: c, hours: V, minutes: u, seconds: s, milliseconds: 1, weeks: 6048e5 }, F = function(Y) {
      return Y instanceof C;
    }, G = function(Y, a, r) {
      return new C(Y, r, a.$l);
    }, M = function(Y) {
      return e.p(Y) + "s";
    }, _ = function(Y) {
      return Y < 0;
    }, f = function(Y) {
      return _(Y) ? Math.ceil(Y) : Math.floor(Y);
    }, $ = function(Y) {
      return Math.abs(Y);
    }, D = function(Y, a) {
      return Y ? _(Y) ? { negative: !0, format: "" + $(Y) + a } : { negative: !1, format: "" + Y + a } : { negative: !1, format: "" };
    }, C = function() {
      function Y(r, N, L) {
        var j = this;
        if (this.$d = {}, this.$l = L, r === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), N)
          return G(r * k[M(N)], this);
        if (typeof r == "number")
          return this.$ms = r, this.parseFromMilliseconds(), this;
        if (typeof r == "object")
          return Object.keys(r).forEach(function(T) {
            j.$d[M(T)] = r[T];
          }), this.calMilliseconds(), this;
        if (typeof r == "string") {
          var Z = r.match(b);
          if (Z) {
            var q = Z.slice(2).map(function(T) {
              return T != null ? Number(T) : 0;
            });
            return this.$d.years = q[0], this.$d.months = q[1], this.$d.weeks = q[2], this.$d.days = q[3], this.$d.hours = q[4], this.$d.minutes = q[5], this.$d.seconds = q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var a = Y.prototype;
      return a.calMilliseconds = function() {
        var r = this;
        this.$ms = Object.keys(this.$d).reduce(function(N, L) {
          return N + (r.$d[L] || 0) * k[L];
        }, 0);
      }, a.parseFromMilliseconds = function() {
        var r = this.$ms;
        this.$d.years = f(r / h), r %= h, this.$d.months = f(r / w), r %= w, this.$d.days = f(r / c), r %= c, this.$d.hours = f(r / V), r %= V, this.$d.minutes = f(r / u), r %= u, this.$d.seconds = f(r / s), r %= s, this.$d.milliseconds = r;
      }, a.toISOString = function() {
        var r = D(this.$d.years, "Y"), N = D(this.$d.months, "M"), L = +this.$d.days || 0;
        this.$d.weeks && (L += 7 * this.$d.weeks);
        var j = D(L, "D"), Z = D(this.$d.hours, "H"), q = D(this.$d.minutes, "M"), T = this.$d.seconds || 0;
        this.$d.milliseconds && (T += this.$d.milliseconds / 1e3);
        var x = D(T, "S"), y = r.negative || N.negative || j.negative || Z.negative || q.negative || x.negative, O = Z.format || q.format || x.format ? "T" : "", S = (y ? "-" : "") + "P" + r.format + N.format + j.format + O + Z.format + q.format + x.format;
        return S === "P" || S === "-P" ? "P0D" : S;
      }, a.toJSON = function() {
        return this.toISOString();
      }, a.format = function(r) {
        var N = r || "YYYY-MM-DDTHH:mm:ss", L = { Y: this.$d.years, YY: e.s(this.$d.years, 2, "0"), YYYY: e.s(this.$d.years, 4, "0"), M: this.$d.months, MM: e.s(this.$d.months, 2, "0"), D: this.$d.days, DD: e.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: e.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: e.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: e.s(this.$d.seconds, 2, "0"), SSS: e.s(this.$d.milliseconds, 3, "0") };
        return N.replace(v, function(j, Z) {
          return Z || String(L[j]);
        });
      }, a.as = function(r) {
        return this.$ms / k[M(r)];
      }, a.get = function(r) {
        var N = this.$ms, L = M(r);
        return L === "milliseconds" ? N %= 1e3 : N = L === "weeks" ? f(N / k[L]) : this.$d[L], N === 0 ? 0 : N;
      }, a.add = function(r, N, L) {
        var j;
        return j = N ? r * k[M(N)] : F(r) ? r.$ms : G(r, this).$ms, G(this.$ms + j * (L ? -1 : 1), this);
      }, a.subtract = function(r, N) {
        return this.add(r, N, !0);
      }, a.locale = function(r) {
        var N = this.clone();
        return N.$l = r, N;
      }, a.clone = function() {
        return G(this.$ms, this);
      }, a.humanize = function(r) {
        return n().add(this.$ms, "ms").locale(this.$l).fromNow(!r);
      }, a.milliseconds = function() {
        return this.get("milliseconds");
      }, a.asMilliseconds = function() {
        return this.as("milliseconds");
      }, a.seconds = function() {
        return this.get("seconds");
      }, a.asSeconds = function() {
        return this.as("seconds");
      }, a.minutes = function() {
        return this.get("minutes");
      }, a.asMinutes = function() {
        return this.as("minutes");
      }, a.hours = function() {
        return this.get("hours");
      }, a.asHours = function() {
        return this.as("hours");
      }, a.days = function() {
        return this.get("days");
      }, a.asDays = function() {
        return this.as("days");
      }, a.weeks = function() {
        return this.get("weeks");
      }, a.asWeeks = function() {
        return this.as("weeks");
      }, a.months = function() {
        return this.get("months");
      }, a.asMonths = function() {
        return this.as("months");
      }, a.years = function() {
        return this.get("years");
      }, a.asYears = function() {
        return this.as("years");
      }, Y;
    }();
    return function(Y, a, r) {
      n = r, e = r().$utils(), r.duration = function(j, Z) {
        var q = r.locale();
        return G(j, { $l: q }, Z);
      }, r.isDuration = F;
      var N = a.prototype.add, L = a.prototype.subtract;
      a.prototype.add = function(j, Z) {
        return F(j) && (j = j.asMilliseconds()), N.bind(this)(j, Z);
      }, a.prototype.subtract = function(j, Z) {
        return F(j) && (j = j.asMilliseconds()), L.bind(this)(j, Z);
      };
    };
  });
})(Mt);
const Lr = Mt.exports;
function Br() {
  const t = (c) => {
    const v = [], h = c.localeData().firstDayOfWeek();
    for (let w = 0; w <= c.date(0 - h).day(); w++)
      v.push(c.date(0).subtract(w, "day"));
    return v.sort((w, b) => w.date() - b.date());
  };
  return {
    usePreviousDate: t,
    useCurrentDate: (c) => Array.from(
      {
        length: c.daysInMonth()
      },
      (v, h) => c.date(h + 1)
    ),
    useNextDate: (c) => {
      const v = [];
      for (let h = 1; h <= 42 - (t(c).length + c.daysInMonth()); h++)
        v.push(c.date(h).month(c.month()).add(1, "month"));
      return v;
    },
    useDisableDate: (c, { disableDate: v }) => typeof v == "function" ? v(c.toDate()) : !1,
    useBetweenRange: (c, { previous: v, next: h }) => {
      let w;
      return v.isAfter(h, "date") ? w = "(]" : w = "[)", !!(c.isBetween(v, h, "date", w) && !c.off);
    },
    useToValueFromString: (c, { formatter: v }) => c.format(v.date),
    useToValueFromArray: ({ previous: c, next: v }, { formatter: h, separator: w }) => `${c.format(h.date)}${w}${v.format(h.date)}`
  };
}
function Er() {
  return {
    useVisibleViewport: (i) => {
      if (i) {
        const { right: n } = i.getBoundingClientRect(), e = window.innerWidth || document.documentElement.clientWidth;
        return n > e;
      } else
        return null;
    }
  };
}
const Fr = ["disabled", "placeholder"], Nr = { class: "absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden" }, Hr = ["disabled"], Rr = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Ir = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, Ur = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, zr = { class: "flex flex-wrap lg:flex-nowrap" }, Wr = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, Zr = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, Gr = /* @__PURE__ */ P("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), Kr = [
  Gr
], Jr = { class: "px-0.5 sm:px-2" }, qr = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, Xr = { class: "px-0.5 sm:px-2" }, Qr = { key: 0 }, eo = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, to = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, ro = ["disabled", "onClick", "textContent"], oo = ["onClick", "textContent"], ao = {
  key: 1,
  class: "sm:hidden"
}, no = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, so = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, lo = ["onClick", "textContent"], io = {
  key: 1,
  class: "flex"
}, uo = { class: "bg-white rounded-lg shadow-sm border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]" }, co = { class: "flex flex-wrap lg:flex-nowrap" }, fo = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, po = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, mo = /* @__PURE__ */ P("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), vo = [
  mo
], ho = { class: "px-0.5 sm:px-2" }, yo = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, bo = { class: "px-0.5 sm:px-2" }, xo = { key: 0 }, go = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, ko = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, wo = ["disabled", "textContent"], $o = {
  __name: "VueTailwindDatePicker",
  props: {
    noInput: Boolean,
    overlay: Boolean,
    asSingle: Boolean,
    useRange: Boolean,
    placeholder: {
      type: [Boolean, String],
      default: !1
    },
    i18n: {
      type: String,
      default: "en"
    },
    inputClasses: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    disableInRange: {
      type: Boolean,
      default: !0
    },
    disableDate: {
      type: [Boolean, Array, Function],
      default: !1
    },
    autoApply: {
      type: Boolean,
      default: !0
    },
    shortcuts: {
      type: [Boolean, Function],
      default: !0
    },
    separator: {
      type: String,
      default: " ~ "
    },
    formatter: {
      type: Object,
      default: () => ({
        date: "YYYY-MM-DD HH:mm:ss",
        month: "MMM"
      })
    },
    modelValue: {
      type: [Array, Object, String],
      default: () => []
    },
    startFrom: {
      type: [Object, String],
      default: () => new Date()
    },
    weekdaysSize: {
      type: String,
      default: "short"
    },
    options: {
      type: Object,
      default: () => ({
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
      })
    }
  },
  emits: [
    "update:modelValue",
    "select:month",
    "select:year",
    "select:right:month",
    "select:right:year",
    "click:prev",
    "click:next",
    "click:right:prev",
    "click:right:next"
  ],
  setup(t, { expose: i, emit: n }) {
    const e = t, {
      useCurrentDate: s,
      useDisableDate: u,
      useBetweenRange: V,
      useNextDate: c,
      usePreviousDate: v,
      useToValueFromArray: h,
      useToValueFromString: w
    } = Br(), { useVisibleViewport: b } = Er();
    l.extend(Pr), l.extend(Cr), l.extend(Yr), l.extend(Tr), l.extend(Ar), l.extend(Lr);
    const k = re(null), F = re(null), G = re(null), M = re(""), _ = re(null), f = re(""), $ = re([]), D = re([]), C = re(null), Y = re(null), a = Vt({
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
    }), r = re({
      previous: l(),
      next: l().add(1, "month"),
      year: {
        previous: l().year(),
        next: l().year()
      },
      weeks: e.weekdaysSize === "min" ? l.weekdaysMin() : l.weekdaysShort(),
      months: e.formatter.month === "MMM" ? l.monthsShort() : l.months()
    }), N = fe(() => r.value.weeks), L = fe(() => r.value.months), j = fe(() => {
      const { previous: d, next: p, year: g } = H(r);
      return {
        previous: {
          date: () => v(d).concat(s(d)).concat(c(d)).map((o) => (o.today = o.isToday(), o.active = d.month() === o.month(), o.off = d.month() !== o.month(), o.sunday = o.day() === 0, o.disabled = u(o, e) && !S(o), o.inRange = () => {
            if (e.asSingle && !e.useRange)
              return d.month() !== o.month();
          }, o.hovered = () => O() && $.value.length > 1 ? (o.isBetween($.value[0], $.value[1], "date", "()") || o.isBetween($.value[1], $.value[0], "date", "(]")) && d.month() === o.month() : !1, o.duration = () => !1, o)),
          month: d && d.format(e.formatter.month),
          year: d && d.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (o, m) => g.previous + m
          ),
          onPrevious: () => {
            r.value.previous = d.subtract(1, "month"), n("click:prev", r.value.previous);
          },
          onNext: () => {
            r.value.previous = d.add(1, "month"), d.diff(p, "month") === -1 && (r.value.next = p.add(1, "month")), n("click:next", r.value.previous);
          },
          onPreviousYear: () => {
            r.value.year.previous = r.value.year.previous - 12;
          },
          onNextYear: () => {
            r.value.year.previous = r.value.year.previous + 12;
          },
          openMonth: () => {
            a.previous.month = !a.previous.month, a.previous.year = !1, a.previous.calendar = !a.previous.month;
          },
          setMount: (o) => {
            r.value.previous = d.month(o), a.previous.month = !a.previous.month, a.previous.year = !1, a.previous.calendar = !a.previous.month, n("select:month", r.value.previous), Ee(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.next = r.value.next.year();
            });
          },
          openYear: () => {
            a.previous.year = !a.previous.year, a.previous.month = !1, a.previous.calendar = !a.previous.year;
          },
          setYear: (o, m) => {
            m || (r.value.previous = d.year(o), a.previous.year = !a.previous.year, a.previous.calendar = !a.previous.year, n("select:year", r.value.previous), Ee(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            }));
          }
        },
        next: {
          date: () => v(p).concat(s(p)).concat(c(p)).map((o) => (o.today = o.isToday(), o.active = p.month() === o.month(), o.off = p.month() !== o.month(), o.sunday = o.day() === 0, o.disabled = u(o, e) && !S(o), o.inRange = () => {
            if (e.asSingle && !e.useRange)
              return p.month() !== o.month();
          }, o.hovered = () => $.value.length > 1 ? (o.isBetween($.value[0], $.value[1], "date", "()") || o.isBetween($.value[1], $.value[0], "date", "(]")) && p.month() === o.month() : !1, o.duration = () => !1, o)),
          month: p && p.format(e.formatter.month),
          year: p && p.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (o, m) => g.next + m
          ),
          onPrevious: () => {
            r.value.next = p.subtract(1, "month"), p.diff(d, "month") === 1 && (r.value.previous = d.subtract(1, "month")), n("click:right:prev", r.value.next);
          },
          onNext: () => {
            r.value.next = p.add(1, "month"), n("click:right:next", r.value.next);
          },
          onPreviousYear: () => {
            r.value.year.next = r.value.year.next - 12;
          },
          onNextYear: () => {
            r.value.year.next = r.value.year.next + 12;
          },
          openMonth: () => {
            a.next.month = !a.next.month, a.next.year = !1, a.next.calendar = !a.next.month;
          },
          setMount: (o) => {
            r.value.next = p.month(o), a.next.month = !a.next.month, a.next.year = !1, a.next.calendar = !a.next.month, n("select:right:month", r.value.next), Ee(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(1, "month")), r.value.year.previous = r.value.previous.year();
            });
          },
          openYear: () => {
            a.next.year = !a.next.year, a.next.month = !1, a.next.calendar = !a.next.year;
          },
          setYear: (o, m) => {
            m && (r.value.next = p.year(o), a.next.year = !a.next.year, a.next.month = !1, a.next.calendar = !a.next.year, n("select:right:year", r.value.next), Ee(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            }));
          }
        }
      };
    }), Z = re(!1);
    setTimeout(() => {
      Z.value = !0;
    }, 250);
    const q = () => l().localeData().firstDayOfWeek(), T = (d) => {
      const p = [...d], g = p.shift();
      return [...p, g];
    }, x = () => Array.isArray(e.modelValue), y = () => typeof e.modelValue == "object", O = () => !e.useRange && !e.asSingle ? !0 : !e.useRange && e.asSingle ? !1 : e.useRange && !e.asSingle ? !0 : !!(e.useRange && e.asSingle), S = (d) => {
      if (e.disableInRange || f.value === "")
        return !1;
      let p, g;
      if (x()) {
        const [o, m] = e.modelValue;
        p = o, g = m;
      } else if (y()) {
        if (e.modelValue) {
          const [o, m] = Object.values(e.modelValue);
          p = o, g = m;
        }
      } else {
        const [o, m] = e.modelValue.split(e.separator);
        p = o, g = m;
      }
      return d.isBetween(l(p, e.formatter.date, !0), l(g, e.formatter.date, !0), "date", "[]");
    }, B = () => {
      C.value = null, Y.value = null, $.value = [], _.value = null;
    }, A = () => {
      if (f.value = "", x())
        n("update:modelValue", []);
      else if (y()) {
        const d = {}, [p, g] = Object.keys(e.modelValue);
        d[p] = "", d[g] = "", n("update:modelValue", d);
      } else
        n("update:modelValue", "");
      D.value = [], F.value && F.value.focus();
    };
    i({ clearPicker: A });
    const z = () => {
      if (O()) {
        const [d, p] = f.value.split(e.separator), [g, o] = [l(d, e.formatter.date, !0), l(p, e.formatter.date, !0)];
        if (g.isValid() && o.isValid())
          if (K(g), K(o), x())
            n("update:modelValue", [d, p]);
          else if (y()) {
            const m = {}, [E, R] = Object.keys(e.modelValue);
            m[E] = d, m[R] = p, n("update:modelValue", m);
          } else
            n(
              "update:modelValue",
              h(
                {
                  previous: g,
                  next: o
                },
                e
              )
            );
      } else {
        const d = l(f.value, e.formatter.date, !0);
        if (d.isValid())
          if (K(d), x())
            n("update:modelValue", [f.value]);
          else if (y()) {
            const p = {}, [g] = Object.keys(e.modelValue);
            p[g] = f.value, n("update:modelValue", p);
          } else
            n("update:modelValue", f.value);
      }
    }, K = (d, p, g) => {
      if (O())
        if (C.value)
          if (Y.value = d, e.autoApply) {
            d.isBefore(C.value) ? f.value = h(
              {
                previous: d,
                next: C.value
              },
              e
            ) : f.value = h(
              {
                previous: C.value,
                next: d
              },
              e
            );
            const [o, m] = f.value.split(e.separator);
            if (x())
              n("update:modelValue", [
                l(o, e.formatter.date, !0).format(e.formatter.date),
                l(m, e.formatter.date, !0).format(e.formatter.date)
              ]);
            else if (y()) {
              const E = {}, [R, ee] = Object.keys(e.modelValue);
              E[R] = o, E[ee] = m, n("update:modelValue", E);
            } else
              n(
                "update:modelValue",
                h(
                  {
                    previous: l(o, e.formatter.date, !0),
                    next: l(m, e.formatter.date, !0)
                  },
                  e
                )
              );
            g && g(), D.value = [], l(o, e.formatter.date, !0).isSame(l(m, e.formatter.date, !0), "month") || (r.value.previous = l(o, e.formatter.date, !0), r.value.next = l(m, e.formatter.date, !0)), B();
          } else {
            C.value.isAfter(d, "month") ? D.value = [d, C.value] : D.value = [C.value, d];
            const [o, m] = D.value;
            o.isSame(m, "month") || (r.value.previous = o, r.value.next = m), B();
          }
        else
          D.value = [], C.value = d, _.value = d, $.value.push(d), D.value.push(d), p ? (r.value.next = d, r.value.previous.isSame(d, "month") && (r.value.next = d.add(1, "month"))) : (r.value.previous = d, r.value.next.isSame(d, "month") && (r.value.previous = r.value.next, r.value.next = d.add(1, "month")));
      else if (e.autoApply) {
        if (f.value = w(d, e), x())
          n("update:modelValue", [f.value]);
        else if (y()) {
          const o = {}, [m] = Object.keys(e.modelValue);
          o[m] = f.value, n("update:modelValue", o);
        } else
          n("update:modelValue", f.value);
        g && g(), D.value = [], B();
      } else
        D.value = [d], B();
    }, X = (d) => {
      if (D.value.length < 1)
        return !1;
      let p;
      if (O()) {
        const [g, o] = D.value;
        o.isBefore(g) ? p = h(
          {
            previous: o,
            next: g
          },
          e
        ) : p = h(
          {
            previous: g,
            next: o
          },
          e
        );
      } else {
        const [g] = D.value;
        p = g;
      }
      if (O()) {
        const [g, o] = p.split(e.separator);
        if (x())
          n("update:modelValue", [
            l(g, e.formatter.date, !0).format(e.formatter.date),
            l(o, e.formatter.date, !0).format(e.formatter.date)
          ]);
        else if (y()) {
          const m = {}, [E, R] = Object.keys(e.modelValue);
          m[E] = g, m[R] = o, n("update:modelValue", m);
        } else
          n(
            "update:modelValue",
            h(
              {
                previous: l(g, e.formatter.date, !0),
                next: l(o, e.formatter.date, !0)
              },
              e
            )
          );
        f.value = p;
      } else if (f.value = p.format(e.formatter.date), x())
        n("update:modelValue", [f.value]);
      else if (y()) {
        const g = {}, [o] = Object.keys(e.modelValue);
        g[o] = f.value, n("update:modelValue", g);
      } else
        n("update:modelValue", f.value);
      d && d();
    }, oe = (d) => {
      if (!O())
        return !1;
      if (C.value)
        $.value = [C.value, d];
      else
        return $.value = [], !1;
    }, me = (d) => {
      if (C.value && e.autoApply)
        return !1;
      let p, g;
      if ($.value.length > 1) {
        const [o, m] = $.value;
        p = l(o, e.formatter.date, !0), g = l(m, e.formatter.date, !0);
      } else if (x())
        if (e.autoApply) {
          const [o, m] = e.modelValue;
          p = o && l(o, e.formatter.date, !0), g = m && l(m, e.formatter.date, !0);
        } else {
          const [o, m] = D.value;
          p = l(o, e.formatter.date, !0), g = l(m, e.formatter.date, !0);
        }
      else if (y())
        if (e.autoApply) {
          if (e.modelValue) {
            const [o, m] = Object.values(e.modelValue);
            p = o && l(o, e.formatter.date, !0), g = m && l(m, e.formatter.date, !0);
          }
        } else {
          const [o, m] = D.value;
          p = l(o, e.formatter.date, !0), g = l(m, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        const [o, m] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
        p = o && l(o, e.formatter.date, !0), g = m && l(m, e.formatter.date, !0);
      } else {
        const [o, m] = D.value;
        p = l(o, e.formatter.date, !0), g = l(m, e.formatter.date, !0);
      }
      return p && g ? V(d, {
        previous: p,
        next: g
      }) : !1;
    }, pe = (d) => {
      const { today: p, active: g, off: o, disabled: m } = d;
      let E, R, ee;
      if (O())
        if (x())
          if (_.value) {
            const [I, Q] = $.value;
            R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [I, Q] = e.modelValue;
            R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
          } else {
            const [I, Q] = D.value;
            R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
          }
        else if (y())
          if (_.value) {
            const [I, Q] = $.value;
            R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [I, Q] = e.modelValue ? Object.values(e.modelValue) : [!1, !1];
            R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
          } else {
            const [I, Q] = D.value;
            R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
          }
        else if (_.value) {
          const [I, Q] = $.value;
          R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [I, Q] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
          R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
        } else {
          const [I, Q] = D.value;
          R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
        }
      else if (x())
        if (e.autoApply) {
          if (e.modelValue.length > 0) {
            const [I] = e.modelValue;
            R = l(I, e.formatter.date, !0);
          }
        } else {
          const [I] = D.value;
          R = I && l(I, e.formatter.date, !0);
        }
      else if (y())
        if (e.autoApply) {
          if (e.modelValue) {
            const [I] = Object.values(e.modelValue);
            R = l(I, e.formatter.date, !0);
          }
        } else {
          const [I] = D.value;
          R = I && l(I, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        if (e.modelValue) {
          const [I] = e.modelValue.split(e.separator);
          R = l(I, e.formatter.date, !0);
        }
      } else {
        const [I] = D.value;
        R = I && l(I, e.formatter.date, !0);
      }
      return g && (E = p ? "text-vtd-primary-500 font-semibold dark:text-vtd-primary-400 rounded-full focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50" : m ? "text-vtd-secondary-600 font-normal disabled:text-vtd-secondary-500 disabled:cursor-not-allowed rounded-full" : d.isBetween(R, ee, "date", "()") ? "text-vtd-secondary-700 font-medium dark:text-vtd-secondary-100 rounded-full" : "text-vtd-secondary-600 font-medium dark:text-vtd-secondary-200 rounded-full"), o && (E = "text-vtd-secondary-400 font-light disabled:cursor-not-allowed"), R && ee && !o ? (d.isSame(R, "date") && (E = ee.isAfter(R, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed", R.isSame(ee, "date") && (E = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed")), d.isSame(ee, "date") && (E = ee.isAfter(R, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed", R.isSame(ee, "date") && (E = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"))) : R && d.isSame(R, "date") && !o && (E = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"), E;
    }, xe = (d) => {
      let p, g, o;
      if (p = "", !O())
        return p;
      if (x())
        if ($.value.length > 1) {
          const [m, E] = $.value;
          g = m && l(m, e.formatter.date, !0), o = E && l(E, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [m, E] = e.modelValue;
          g = m && l(m, e.formatter.date, !0), o = E && l(E, e.formatter.date, !0);
        } else {
          const [m, E] = D.value;
          g = m && l(m, e.formatter.date, !0), o = E && l(E, e.formatter.date, !0);
        }
      else if (y())
        if ($.value.length > 1) {
          const [m, E] = $.value;
          g = m && l(m, e.formatter.date, !0), o = E && l(E, e.formatter.date, !0);
        } else if (e.autoApply) {
          if (e.modelValue) {
            const [m, E] = Object.values(e.modelValue);
            g = m && l(m, e.formatter.date, !0), o = E && l(E, e.formatter.date, !0);
          }
        } else {
          const [m, E] = D.value;
          g = m && l(m, e.formatter.date, !0), o = E && l(E, e.formatter.date, !0);
        }
      else if ($.value.length > 1) {
        const [m, E] = $.value;
        g = m && l(m, e.formatter.date, !0), o = E && l(E, e.formatter.date, !0);
      } else if (e.autoApply) {
        const [m, E] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
        g = m && l(m, e.formatter.date, !0), o = E && l(E, e.formatter.date, !0);
      } else {
        const [m, E] = D.value;
        g = m && l(m, e.formatter.date, !0), o = E && l(E, e.formatter.date, !0);
      }
      return g && o && (d.isSame(g, "date") ? (o.isBefore(g) && (p += " rounded-r-full inset-0"), g.isBefore(o) && (p += " rounded-l-full inset-0")) : d.isSame(o, "date") ? (o.isBefore(g) && (p += " rounded-l-full inset-0"), g.isBefore(o) && (p += " rounded-r-full inset-0")) : p += " inset-0"), p;
    }, he = (d, p) => {
      r.value.previous = l(d, e.formatter.date, !0), r.value.next = l(p, e.formatter.date, !0), (l.duration(r.value.next.diff(r.value.previous)).$d.months === 2 || l.duration(r.value.next.diff(r.value.previous)).$d.months === 1 && l.duration(r.value.next.diff(r.value.previous)).$d.days === 7) && (r.value.next = r.value.next.subtract(1, "month")), (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month"));
    }, ne = (d, p) => {
      if (O())
        if (e.autoApply) {
          if (x())
            n("update:modelValue", [d, p]);
          else if (y()) {
            const g = {}, [o, m] = Object.keys(e.modelValue);
            g[o] = d, g[m] = p, n("update:modelValue", g);
          } else
            n(
              "update:modelValue",
              h(
                {
                  previous: l(d, e.formatter.date, !0),
                  next: l(p, e.formatter.date, !0)
                },
                e
              )
            );
          f.value = `${d}${e.separator}${p}`;
        } else
          D.value = [l(d, e.formatter.date, !0), l(p, e.formatter.date, !0)];
      else if (e.autoApply) {
        if (x())
          n("update:modelValue", [d]);
        else if (y()) {
          const g = {}, [o] = Object.keys(e.modelValue);
          g[o] = d, n("update:modelValue", g);
        } else
          n("update:modelValue", d);
        f.value = d;
      } else
        D.value = [l(d, e.formatter.date, !0), l(p, e.formatter.date, !0)];
      he(d, p);
    }, ae = (d) => {
      const p = l().format(e.formatter.date), g = l().format(e.formatter.date);
      ne(p, g), d && d();
    }, ie = (d) => {
      const p = l().subtract(1, "day").format(e.formatter.date), g = l().subtract(1, "day").format(e.formatter.date);
      ne(p, g), d && d();
    }, ye = (d, p) => {
      const g = l().subtract(d - 1, "day").format(e.formatter.date), o = l().format(e.formatter.date);
      ne(g, o), p && p();
    }, be = (d) => {
      const p = l().date(1).format(e.formatter.date), g = l().date(l().daysInMonth()).format(e.formatter.date);
      ne(p, g), d && d();
    }, Ae = (d) => {
      const p = l().date(1).subtract(1, "month").format(e.formatter.date), g = l().date(0).format(e.formatter.date);
      ne(p, g), d && d();
    }, Le = (d, p) => {
      let g, o;
      const [m, E] = d.atClick();
      g = l(m).format(e.formatter.date), o = l(E).format(e.formatter.date), ne(g, o), p && p();
    };
    Pt(
      () => D.value,
      (d) => {
        d.length > 0 && (a.previous.calendar = !0, a.previous.month = !1, a.previous.year = !1, a.next.calendar = !0, a.next.month = !1, a.next.year = !1);
      }
    ), ge(() => {
      e.placeholder ? M.value = e.placeholder : O() ? M.value = `${e.formatter.date}${e.separator}${e.formatter.date}` : M.value = e.formatter.date;
    }), ge(() => {
      const d = e.i18n;
      Ee(() => {
        const p = /* @__PURE__ */ Object.assign({ "./locale/af.js": () => import("./af.78b9c933.mjs"), "./locale/am.js": () => import("./am.1d8f1477.mjs"), "./locale/ar-dz.js": () => import("./ar-dz.42346512.mjs"), "./locale/ar-iq.js": () => import("./ar-iq.457ddb59.mjs"), "./locale/ar-kw.js": () => import("./ar-kw.1cf9cf9c.mjs"), "./locale/ar-ly.js": () => import("./ar-ly.3d4ab74a.mjs"), "./locale/ar-ma.js": () => import("./ar-ma.2649ce4c.mjs"), "./locale/ar-sa.js": () => import("./ar-sa.3924e169.mjs"), "./locale/ar-tn.js": () => import("./ar-tn.6d7d9860.mjs"), "./locale/ar.js": () => import("./ar.a8232bae.mjs"), "./locale/az.js": () => import("./az.7d7f4a08.mjs"), "./locale/be.js": () => import("./be.36888435.mjs"), "./locale/bg.js": () => import("./bg.9f42555f.mjs"), "./locale/bi.js": () => import("./bi.eb4985db.mjs"), "./locale/bm.js": () => import("./bm.fc6c02b0.mjs"), "./locale/bn-bd.js": () => import("./bn-bd.54903b23.mjs"), "./locale/bn.js": () => import("./bn.5ccaeabb.mjs"), "./locale/bo.js": () => import("./bo.f62543f4.mjs"), "./locale/br.js": () => import("./br.d8150366.mjs"), "./locale/bs.js": () => import("./bs.36836819.mjs"), "./locale/ca.js": () => import("./ca.072fd974.mjs"), "./locale/cs.js": () => import("./cs.c487664b.mjs"), "./locale/cv.js": () => import("./cv.dd61033c.mjs"), "./locale/cy.js": () => import("./cy.961b82f0.mjs"), "./locale/da.js": () => import("./da.5f65840b.mjs"), "./locale/de-at.js": () => import("./de-at.d2039119.mjs"), "./locale/de-ch.js": () => import("./de-ch.c2c590f0.mjs"), "./locale/de.js": () => import("./de.e59fd8ef.mjs"), "./locale/dv.js": () => import("./dv.7bde5145.mjs"), "./locale/el.js": () => import("./el.5081a6aa.mjs"), "./locale/en-au.js": () => import("./en-au.ad1bb4e7.mjs"), "./locale/en-ca.js": () => import("./en-ca.21ddbca0.mjs"), "./locale/en-gb.js": () => import("./en-gb.08a92534.mjs"), "./locale/en-ie.js": () => import("./en-ie.5fdaa7a9.mjs"), "./locale/en-il.js": () => import("./en-il.0ed4a502.mjs"), "./locale/en-in.js": () => import("./en-in.c9d56fc3.mjs"), "./locale/en-nz.js": () => import("./en-nz.11b9f1e2.mjs"), "./locale/en-sg.js": () => import("./en-sg.db434006.mjs"), "./locale/en-tt.js": () => import("./en-tt.1955abe1.mjs"), "./locale/en.js": () => import("./en.c289298e.mjs"), "./locale/eo.js": () => import("./eo.9dd27be9.mjs"), "./locale/es-do.js": () => import("./es-do.0d938f68.mjs"), "./locale/es-mx.js": () => import("./es-mx.d46c7f89.mjs"), "./locale/es-pr.js": () => import("./es-pr.7ba6c2af.mjs"), "./locale/es-us.js": () => import("./es-us.76724c6d.mjs"), "./locale/es.js": () => import("./es.df7fd3d9.mjs"), "./locale/et.js": () => import("./et.777d6fee.mjs"), "./locale/eu.js": () => import("./eu.ace54020.mjs"), "./locale/fa.js": () => import("./fa.fd258ea1.mjs"), "./locale/fi.js": () => import("./fi.0f01b077.mjs"), "./locale/fo.js": () => import("./fo.c7a2f5b1.mjs"), "./locale/fr-ca.js": () => import("./fr-ca.563e4fce.mjs"), "./locale/fr-ch.js": () => import("./fr-ch.b03dbf82.mjs"), "./locale/fr.js": () => import("./fr.04ee9d68.mjs"), "./locale/fy.js": () => import("./fy.28222af1.mjs"), "./locale/ga.js": () => import("./ga.7661ff1f.mjs"), "./locale/gd.js": () => import("./gd.140449ba.mjs"), "./locale/gl.js": () => import("./gl.25bd5a97.mjs"), "./locale/gom-latn.js": () => import("./gom-latn.3ee46935.mjs"), "./locale/gu.js": () => import("./gu.024a987c.mjs"), "./locale/he.js": () => import("./he.5d94292f.mjs"), "./locale/hi.js": () => import("./hi.9036dcd4.mjs"), "./locale/hr.js": () => import("./hr.5062be1d.mjs"), "./locale/ht.js": () => import("./ht.69059849.mjs"), "./locale/hu.js": () => import("./hu.33a15367.mjs"), "./locale/hy-am.js": () => import("./hy-am.79001de4.mjs"), "./locale/id.js": () => import("./id.66cfe616.mjs"), "./locale/is.js": () => import("./is.c7a21122.mjs"), "./locale/it-ch.js": () => import("./it-ch.3b126b32.mjs"), "./locale/it.js": () => import("./it.c151e274.mjs"), "./locale/ja.js": () => import("./ja.c78cf541.mjs"), "./locale/jv.js": () => import("./jv.a747a1a3.mjs"), "./locale/ka.js": () => import("./ka.41d428db.mjs"), "./locale/kk.js": () => import("./kk.3b7b4220.mjs"), "./locale/km.js": () => import("./km.c842e4e6.mjs"), "./locale/kn.js": () => import("./kn.ee6d6468.mjs"), "./locale/ko.js": () => import("./ko.0d60f7bc.mjs"), "./locale/ku.js": () => import("./ku.9f8e49b8.mjs"), "./locale/ky.js": () => import("./ky.93291eaa.mjs"), "./locale/lb.js": () => import("./lb.d1834c83.mjs"), "./locale/lo.js": () => import("./lo.31c82cd3.mjs"), "./locale/lt.js": () => import("./lt.5798cdca.mjs"), "./locale/lv.js": () => import("./lv.7222c068.mjs"), "./locale/me.js": () => import("./me.5ebeffe5.mjs"), "./locale/mi.js": () => import("./mi.1c2375d0.mjs"), "./locale/mk.js": () => import("./mk.3746980f.mjs"), "./locale/ml.js": () => import("./ml.09f4db49.mjs"), "./locale/mn.js": () => import("./mn.3937f421.mjs"), "./locale/mr.js": () => import("./mr.764d0b33.mjs"), "./locale/ms-my.js": () => import("./ms-my.70947be7.mjs"), "./locale/ms.js": () => import("./ms.62cce7b5.mjs"), "./locale/mt.js": () => import("./mt.628e2b0e.mjs"), "./locale/my.js": () => import("./my.b8e9dc5f.mjs"), "./locale/nb.js": () => import("./nb.959a2d1a.mjs"), "./locale/ne.js": () => import("./ne.bc92b43e.mjs"), "./locale/nl-be.js": () => import("./nl-be.67b82913.mjs"), "./locale/nl.js": () => import("./nl.c9873428.mjs"), "./locale/nn.js": () => import("./nn.4610d068.mjs"), "./locale/oc-lnc.js": () => import("./oc-lnc.8945d1ce.mjs"), "./locale/pa-in.js": () => import("./pa-in.52b608bf.mjs"), "./locale/pl.js": () => import("./pl.4c1086f0.mjs"), "./locale/pt-br.js": () => import("./pt-br.6b29a398.mjs"), "./locale/pt.js": () => import("./pt.08903cb0.mjs"), "./locale/rn.js": () => import("./rn.b311783d.mjs"), "./locale/ro.js": () => import("./ro.5ebccc9f.mjs"), "./locale/ru.js": () => import("./ru.d91e83d3.mjs"), "./locale/rw.js": () => import("./rw.a9406a95.mjs"), "./locale/sd.js": () => import("./sd.f2aeb928.mjs"), "./locale/se.js": () => import("./se.32bf71de.mjs"), "./locale/si.js": () => import("./si.c99551c6.mjs"), "./locale/sk.js": () => import("./sk.de35eedb.mjs"), "./locale/sl.js": () => import("./sl.22c4ba87.mjs"), "./locale/sq.js": () => import("./sq.b30cbaca.mjs"), "./locale/sr-cyrl.js": () => import("./sr-cyrl.0fd1daac.mjs"), "./locale/sr.js": () => import("./sr.2707a1bd.mjs"), "./locale/ss.js": () => import("./ss.9ac39d7a.mjs"), "./locale/sv-fi.js": () => import("./sv-fi.6bac7f9a.mjs"), "./locale/sv.js": () => import("./sv.caf7bb40.mjs"), "./locale/sw.js": () => import("./sw.59b71c0d.mjs"), "./locale/ta.js": () => import("./ta.4227d78a.mjs"), "./locale/te.js": () => import("./te.176edbc1.mjs"), "./locale/tet.js": () => import("./tet.caf866ff.mjs"), "./locale/tg.js": () => import("./tg.a99bbdc2.mjs"), "./locale/th.js": () => import("./th.8c157ad1.mjs"), "./locale/tk.js": () => import("./tk.882ec3cc.mjs"), "./locale/tl-ph.js": () => import("./tl-ph.1f9806a1.mjs"), "./locale/tlh.js": () => import("./tlh.52616aff.mjs"), "./locale/tr.js": () => import("./tr.5000c4a3.mjs"), "./locale/tzl.js": () => import("./tzl.4084c20a.mjs"), "./locale/tzm-latn.js": () => import("./tzm-latn.6fc428fb.mjs"), "./locale/tzm.js": () => import("./tzm.277f8193.mjs"), "./locale/ug-cn.js": () => import("./ug-cn.17ee2d0d.mjs"), "./locale/uk.js": () => import("./uk.78979c97.mjs"), "./locale/ur.js": () => import("./ur.002c5392.mjs"), "./locale/uz-latn.js": () => import("./uz-latn.7fa3ceb8.mjs"), "./locale/uz.js": () => import("./uz.12fffa69.mjs"), "./locale/vi.js": () => import("./vi.b41f7d47.mjs"), "./locale/x-pseudo.js": () => import("./x-pseudo.2a72f78d.mjs"), "./locale/yo.js": () => import("./yo.13a0bc5a.mjs"), "./locale/zh-cn.js": () => import("./zh-cn.41c9e979.mjs"), "./locale/zh-hk.js": () => import("./zh-hk.f63ec35c.mjs"), "./locale/zh-tw.js": () => import("./zh-tw.5843df61.mjs"), "./locale/zh.js": () => import("./zh.3d7de479.mjs") });
        for (const g in p)
          p[g]().then(() => {
            l.locale(d);
            let o, m;
            if (O()) {
              if (x()) {
                if (e.modelValue.length > 0) {
                  const [R, ee] = e.modelValue;
                  o = l(R, e.formatter.date, !0), m = l(ee, e.formatter.date, !0);
                }
              } else if (y()) {
                if (!Ct(e.modelValue))
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
                    ), n("update:modelValue", {
                      startDate: "",
                      endDate: ""
                    });
                  }
                if (e.modelValue) {
                  const [R, ee] = Object.values(e.modelValue);
                  o = R && l(R, e.formatter.date, !0), m = ee && l(ee, e.formatter.date, !0);
                }
              } else if (e.modelValue) {
                const [R, ee] = e.modelValue.split(e.separator);
                o = l(R, e.formatter.date, !0), m = l(ee, e.formatter.date, !0);
              }
              o && m ? (f.value = h(
                {
                  previous: o,
                  next: m
                },
                e
              ), m.isBefore(o, "month") ? (r.value.previous = m, r.value.next = o, r.value.year.previous = m.year(), r.value.year.next = o.year()) : m.isSame(o, "month") ? (r.value.previous = o, r.value.next = m.add(1, "month"), r.value.year.previous = o.year(), r.value.year.next = o.add(1, "year").year()) : (r.value.previous = o, r.value.next = m, r.value.year.previous = o.year(), r.value.year.next = m.year()), e.autoApply || (D.value = [o, m])) : (r.value.previous = l(e.startFrom), r.value.next = l(e.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
            } else {
              if (x()) {
                if (e.modelValue.length > 0) {
                  const [R] = e.modelValue;
                  o = l(R, e.formatter.date, !0);
                }
              } else if (y()) {
                if (e.modelValue) {
                  const [R] = Object.values(e.modelValue);
                  o = l(R, e.formatter.date, !0);
                }
              } else if (e.modelValue.length) {
                const [R] = e.modelValue.split(e.separator);
                o = l(R, e.formatter.date, !0);
              }
              o && o.isValid() ? (f.value = w(o, e), r.value.previous = o, r.value.next = o.add(1, "month"), r.value.year.previous = o.year(), r.value.year.next = o.add(1, "year").year(), e.autoApply || (D.value = [o])) : (r.value.previous = l(e.startFrom), r.value.next = l(e.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
            }
            const E = e.weekdaysSize === "min" ? l.weekdaysMin() : l.weekdaysShort();
            r.value.weeks = q() ? T(E) : E, r.value.months = e.formatter.month === "MMM" ? l.monthsShort() : l.months();
          }).catch((o) => {
            console.warn(o.message);
          });
      });
    });
    const Be = (d) => (d && G.value === null && (G.value = b(k.value)), d && G.value ? "place-right" : "place-left"), ot = (d) => (d && G.value === null && (G.value = b(k.value)), G.value ? "left-auto right-0" : "left-0 right-auto");
    return de("isBetweenRange", me), de("betweenRangeClasses", xe), de("datepickerClasses", pe), de("atMouseOver", oe), de("setToToday", ae), de("setToYesterday", ie), de("setToLastDay", ye), de("setToThisMonth", be), de("setToLastMonth", Ae), de("setToCustomShortcut", Le), (d, p) => e.noInput ? Z.value ? (W(), J("div", io, [
      P("div", uo, [
        P("div", co, [
          e.shortcuts ? (W(), Fe(at, {
            key: 0,
            shortcuts: e.shortcuts,
            "as-range": O(),
            "as-single": e.asSingle,
            i18n: e.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : ve("", !0),
          P("div", fo, [
            O() && !e.asSingle ? (W(), J("div", po, vo)) : ve("", !0),
            P("div", {
              class: we(["relative w-full lg:w-80", {
                "mb-3 sm:mb-0 sm:mr-2 md:w-1/2": O() && !e.asSingle
              }])
            }, [
              te(Ue, {
                panel: a.previous,
                calendar: H(j).previous
              }, null, 8, ["panel", "calendar"]),
              P("div", ho, [
                le(te(ze, {
                  months: H(L),
                  "onUpdate:month": H(j).previous.setMount
                }, null, 8, ["months", "onUpdate:month"]), [
                  [ue, a.previous.month]
                ]),
                le(te(Ze, {
                  years: H(j).previous.years(),
                  "onUpdate:year": H(j).previous.setYear
                }, null, 8, ["years", "onUpdate:year"]), [
                  [ue, a.previous.year]
                ]),
                le(P("div", null, [
                  te(We, { weeks: H(N) }, null, 8, ["weeks"]),
                  te(Ge, {
                    calendar: H(j).previous,
                    weeks: H(N),
                    "as-range": O(),
                    "onUpdate:date": p[2] || (p[2] = (g, o) => K(g, o))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ue, a.previous.calendar]
                ])
              ])
            ], 2),
            O() && !e.asSingle ? (W(), J("div", yo, [
              te(Ue, {
                "as-prev-or-next": "",
                panel: a.next,
                calendar: H(j).next
              }, null, 8, ["panel", "calendar"]),
              P("div", bo, [
                le(te(ze, {
                  months: H(L),
                  "onUpdate:month": H(j).next.setMount
                }, null, 8, ["months", "onUpdate:month"]), [
                  [ue, a.next.month]
                ]),
                le(te(Ze, {
                  "as-prev-or-next": "",
                  years: H(j).next.years(),
                  "onUpdate:year": H(j).next.setYear
                }, null, 8, ["years", "onUpdate:year"]), [
                  [ue, a.next.year]
                ]),
                le(P("div", null, [
                  te(We, { weeks: H(N) }, null, 8, ["weeks"]),
                  te(Ge, {
                    "as-prev-or-next": "",
                    calendar: H(j).next,
                    weeks: H(N),
                    "as-range": O(),
                    "onUpdate:date": p[3] || (p[3] = (g, o) => K(g, o))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ue, a.next.calendar]
                ])
              ])
            ])) : ve("", !0)
          ])
        ]),
        e.autoApply ? ve("", !0) : (W(), J("div", xo, [
          P("div", go, [
            P("div", ko, [
              P("button", {
                type: "button",
                class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                disabled: e.asSingle ? D.value.length < 1 : D.value.length < 2,
                onClick: p[4] || (p[4] = (g) => X()),
                textContent: se(e.options.footer.apply)
              }, null, 8, wo)
            ])
          ])
        ]))
      ])
    ])) : ve("", !0) : (W(), Fe(H(bt), {
      key: 0,
      as: "div",
      id: "vtd",
      class: "relative w-full"
    }, {
      default: _e(({ open: g }) => [
        e.overlay && !e.disabled ? (W(), Fe(H(_r), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : ve("", !0),
        te(H(Or), {
          as: "label",
          class: "relative block"
        }, {
          default: _e(() => [
            Yt(d.$slots, "default", {
              value: f.value,
              placeholder: M.value,
              clear: A
            }, () => [
              le(P("input", Tt({
                ref_key: "VtdInputRef",
                ref: F,
                type: "text",
                class: ["relative block w-full", [
                  e.disabled ? "cursor-default opacity-50" : "opacity-100",
                  t.inputClasses || "pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20"
                ]],
                disabled: e.disabled,
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other"
              }, d.$attrs, {
                "onUpdate:modelValue": p[0] || (p[0] = (o) => f.value = o),
                placeholder: M.value,
                onKeyup: z
              }), null, 16, Fr), [
                [At, f.value]
              ]),
              P("div", Nr, [
                P("button", {
                  type: "button",
                  disabled: e.disabled,
                  class: we([e.disabled ? "cursor-default opacity-50" : "opacity-100", "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md"]),
                  onClick: p[1] || (p[1] = (o) => e.disabled ? !1 : f.value ? A() : d.$refs.VtdInputRef.focus())
                }, [
                  (W(), J("svg", Rr, [
                    f.value ? (W(), J("path", Ir)) : (W(), J("path", Ur))
                  ]))
                ], 10, Hr)
              ])
            ])
          ]),
          _: 3
        }),
        te(st, {
          "enter-from-class": "opacity-0 translate-y-3",
          "enter-to-class": "opacity-100 translate-y-0",
          "enter-active-class": "transform transition ease-out duration-200",
          "leave-active-class": "transform transition ease-in duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 translate-y-3"
        }, {
          default: _e(() => [
            e.disabled ? ve("", !0) : (W(), Fe(H(Vr), {
              key: 0,
              as: "div",
              class: "relative z-50"
            }, {
              default: _e(({ close: o }) => [
                P("div", {
                  class: we(["absolute z-50 top-full sm:mt-2.5", ot(g)])
                }, [
                  P("div", {
                    ref_key: "VtdRef",
                    ref: k,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm"
                  }, [
                    P("div", {
                      class: we(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]", Be(g)])
                    }, [
                      P("div", zr, [
                        e.shortcuts ? (W(), Fe(at, {
                          key: 0,
                          shortcuts: e.shortcuts,
                          "as-range": O(),
                          "as-single": e.asSingle,
                          i18n: e.options.shortcuts,
                          close: o
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : ve("", !0),
                        P("div", Wr, [
                          O() && !e.asSingle ? (W(), J("div", Zr, Kr)) : ve("", !0),
                          P("div", {
                            class: we(["relative", {
                              "mb-3 sm:mb-0 sm:mr-2 w-full md:w-1/2 lg:w-80": O() && !e.asSingle,
                              "w-full": !O() && e.asSingle
                            }])
                          }, [
                            te(Ue, {
                              panel: a.previous,
                              calendar: H(j).previous
                            }, null, 8, ["panel", "calendar"]),
                            P("div", Jr, [
                              le(te(ze, {
                                months: H(L),
                                "onUpdate:month": H(j).previous.setMount
                              }, null, 8, ["months", "onUpdate:month"]), [
                                [ue, a.previous.month]
                              ]),
                              le(te(Ze, {
                                years: H(j).previous.years(),
                                "onUpdate:year": H(j).previous.setYear
                              }, null, 8, ["years", "onUpdate:year"]), [
                                [ue, a.previous.year]
                              ]),
                              le(P("div", null, [
                                te(We, { weeks: H(N) }, null, 8, ["weeks"]),
                                te(Ge, {
                                  calendar: H(j).previous,
                                  weeks: H(N),
                                  "as-range": O(),
                                  "onUpdate:date": (m, E) => K(m, E, o)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ue, a.previous.calendar]
                              ])
                            ])
                          ], 2),
                          O() && !e.asSingle ? (W(), J("div", qr, [
                            te(Ue, {
                              "as-prev-or-next": "",
                              panel: a.next,
                              calendar: H(j).next
                            }, null, 8, ["panel", "calendar"]),
                            P("div", Xr, [
                              le(te(ze, {
                                months: H(L),
                                "onUpdate:month": H(j).next.setMount
                              }, null, 8, ["months", "onUpdate:month"]), [
                                [ue, a.next.month]
                              ]),
                              le(te(Ze, {
                                "as-prev-or-next": "",
                                years: H(j).next.years(),
                                "onUpdate:year": H(j).next.setYear
                              }, null, 8, ["years", "onUpdate:year"]), [
                                [ue, a.next.year]
                              ]),
                              le(P("div", null, [
                                te(We, { weeks: H(N) }, null, 8, ["weeks"]),
                                te(Ge, {
                                  "as-prev-or-next": "",
                                  calendar: H(j).next,
                                  weeks: H(N),
                                  "as-range": O(),
                                  "onUpdate:date": (m, E) => K(m, E, o)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ue, a.next.calendar]
                              ])
                            ])
                          ])) : ve("", !0)
                        ])
                      ]),
                      e.autoApply ? (W(), J("div", ao, [
                        P("div", no, [
                          P("div", so, [
                            P("button", {
                              type: "button",
                              onClick: (m) => o(),
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              textContent: se(e.options.footer.cancel)
                            }, null, 8, lo)
                          ])
                        ])
                      ])) : (W(), J("div", Qr, [
                        P("div", eo, [
                          P("div", to, [
                            P("button", {
                              type: "button",
                              class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                              disabled: e.asSingle ? D.value.length < 1 : D.value.length < 2,
                              onClick: (m) => X(o),
                              textContent: se(e.options.footer.apply)
                            }, null, 8, ro),
                            P("button", {
                              type: "button",
                              onClick: (m) => o(),
                              class: "mt-3 away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              textContent: se(e.options.footer.cancel)
                            }, null, 8, oo)
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
}, St = /* @__PURE__ */ (() => {
  const t = $o;
  return t.install = (i) => {
    i.component("VueTailwindDatepicker", t);
  }, t;
})(), jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: St
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(jo).forEach(([t, i]) => {
  t !== "default" && (St[t] = i);
});
export {
  St as c,
  l as d
};
