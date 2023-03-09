import { openBlock as Z, createElementBlock as J, createElementVNode as P, withDirectives as lt, vShow as ut, toDisplayString as st, Fragment as $t, renderList as Ht, inject as ct, createVNode as et, TransitionGroup as De, withCtx as _t, normalizeClass as Mt, Transition as se, unref as H, createCommentVNode as mt, withModifiers as jt, cloneVNode as Oe, h as Pt, provide as dt, ref as rt, onMounted as _e, watchEffect as bt, computed as ft, defineComponent as Yt, reactive as Ve, nextTick as Et, watch as Pe, isProxy as Ce, createBlock as It, renderSlot as Ye, mergeProps as Te, vModelText as Ae } from "vue";
const Le = { class: "tw-flex tw-justify-between tw-items-center tw-px-2 tw-py-1.5" }, Be = { class: "tw-flex-shrink-0" }, Ee = { class: "tw-inline-flex tw-rounded-full" }, Fe = {
  class: "tw-w-5 tw-h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Ne = ["d"], He = { class: "tw-px-1.5 tw-space-x-1.5 tw-flex tw-flex-1" }, Re = { class: "tw-flex-1 tw-flex tw-rounded-md" }, Ie = ["textContent"], Ue = { class: "tw-flex-1 tw-flex tw-rounded-md" }, ze = ["textContent"], We = { class: "tw-flex-shrink-0" }, Ze = { class: "tw-inline-flex tw-rounded-full" }, Ge = {
  class: "tw-w-5 tw-h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Ke = ["d"], Ut = {
  __name: "Header",
  props: {
    asPrevOrNext: Boolean,
    panel: Object,
    calendar: Object
  },
  setup(e) {
    return (i, n) => (Z(), J("div", Le, [
      P("div", Be, [
        lt(P("span", Ee, [
          P("button", {
            type: "button",
            class: "tw-p-1.5 tw-rounded-full tw-bg-white tw-text-vtd-secondary-600 tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none dark:tw-bg-vtd-secondary-800 dark:tw-text-vtd-secondary-300 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-secondary-300 dark:focus:tw-bg-vtd-secondary-600 dark:focus:tw-text-vtd-secondary-100 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-25 dark:focus:tw-bg-opacity-50",
            onClick: n[0] || (n[0] = (t) => e.panel.calendar ? e.calendar.onPrevious() : e.calendar.onPreviousYear())
          }, [
            (Z(), J("svg", Fe, [
              P("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: e.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
              }, null, 8, Ne)
            ]))
          ])
        ], 512), [
          [ut, e.panel.calendar || e.panel.year]
        ])
      ]),
      P("div", He, [
        P("span", Re, [
          P("button", {
            type: "button",
            class: "tw-px-3 tw-py-1.5 tw-block tw-w-full tw-leading-relaxed tw-rounded-md tw-bg-white tw-text-xs 2xl:tw-text-sm tw-tracking-wide tw-text-vtd-secondary-600 tw-font-semibold sm:tw-font-medium tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none tw-uppercase dark:tw-bg-vtd-secondary-800 dark:tw-text-vtd-secondary-300 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-secondary-300 dark:focus:tw-bg-vtd-secondary-600 dark:focus:tw-text-vtd-secondary-100 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-25 dark:focus:tw-bg-opacity-50",
            textContent: st(e.calendar.month),
            onClick: n[1] || (n[1] = (t) => e.calendar.openMonth())
          }, null, 8, Ie)
        ]),
        P("span", Ue, [
          P("button", {
            type: "button",
            class: "tw-px-3 tw-py-1.5 tw-block tw-w-full tw-leading-relaxed tw-rounded-md tw-bg-white tw-text-xs 2xl:tw-text-sm tw-tracking-wide tw-text-vtd-secondary-600 tw-font-semibold sm:tw-font-medium tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none tw-uppercase dark:tw-bg-vtd-secondary-800 dark:tw-text-vtd-secondary-300 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-secondary-300 dark:focus:tw-bg-vtd-secondary-600 dark:focus:tw-text-vtd-secondary-100 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-25 dark:focus:tw-bg-opacity-50",
            textContent: st(e.calendar.year),
            onClick: n[2] || (n[2] = (t) => e.calendar.openYear())
          }, null, 8, ze)
        ])
      ]),
      P("div", We, [
        lt(P("span", Ze, [
          P("button", {
            type: "button",
            class: "tw-p-1.5 tw-rounded-full tw-bg-white tw-text-vtd-secondary-600 tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none dark:tw-bg-vtd-secondary-800 dark:tw-text-vtd-secondary-300 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-secondary-300 dark:focus:tw-bg-vtd-secondary-600 dark:focus:tw-text-vtd-secondary-100 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-25 dark:focus:tw-bg-opacity-50",
            onClick: n[3] || (n[3] = (t) => e.panel.calendar ? e.calendar.onNext() : e.calendar.onNextYear())
          }, [
            (Z(), J("svg", Ge, [
              P("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: e.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
              }, null, 8, Ke)
            ]))
          ])
        ], 512), [
          [ut, e.panel.calendar || e.panel.year]
        ])
      ])
    ]));
  }
}, Je = { class: "tw-flex tw-flex-wrap tw-mt-1.5" }, qe = { class: "tw-flex tw-rounded-md tw-mt-1.5" }, Xe = ["textContent", "onClick"], zt = {
  __name: "Month",
  props: {
    months: Array
  },
  emits: ["update:month"],
  setup(e, { emit: i }) {
    return (n, t) => (Z(), J("div", Je, [
      (Z(!0), J($t, null, Ht(e.months, (s, u) => (Z(), J("div", {
        key: u,
        class: "tw-w-1/2 tw-px-0.5"
      }, [
        P("span", qe, [
          P("button", {
            type: "button",
            class: "tw-px-3 tw-py-2 tw-block tw-w-full tw-leading-6 tw-rounded-md tw-bg-white tw-text-xs 2xl:tw-text-sm tw-tracking-wide tw-text-vtd-secondary-600 tw-font-medium tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none tw-uppercase dark:tw-bg-vtd-secondary-800 dark:hover:tw-bg-vtd-secondary-700 dark:tw-text-vtd-secondary-300 dark:hover:tw-text-vtd-secondary-100 dark:focus:tw-bg-vtd-secondary-700",
            textContent: st(s),
            onClick: (V) => i("update:month", u)
          }, null, 8, Xe)
        ])
      ]))), 128))
    ]));
  }
}, Qe = { class: "tw-grid tw-grid-cols-7 tw-py-2 tw-mt-0.5" }, tr = ["textContent"], Wt = {
  __name: "Week",
  props: {
    weeks: Array
  },
  setup(e) {
    return (i, n) => (Z(), J("div", Qe, [
      (Z(!0), J($t, null, Ht(e.weeks, (t, s) => (Z(), J("div", {
        key: s,
        class: "tw-text-vtd-secondary-500 tw-text-xs 2xl:tw-text-sm tw-tracking-wide tw-font-medium tw-text-center tw-cursor-default dark:tw-text-vtd-secondary-400"
      }, [
        P("span", {
          textContent: st(t)
        }, null, 8, tr)
      ]))), 128))
    ]));
  }
}, er = { class: "tw-flex tw-flex-wrap" }, rr = { class: "tw-flex tw-rounded-md tw-mt-1.5" }, or = ["textContent", "onClick"], Zt = {
  __name: "Year",
  props: {
    asPrevOrNext: Boolean,
    years: Array
  },
  emits: ["update:year"],
  setup(e, { emit: i }) {
    return (n, t) => (Z(), J("div", er, [
      (Z(!0), J($t, null, Ht(e.years, (s, u) => (Z(), J("div", {
        key: u,
        class: "tw-w-1/2 tw-px-0.5"
      }, [
        P("span", rr, [
          P("button", {
            type: "button",
            class: "tw-px-3 tw-py-2 tw-block tw-w-full tw-leading-6 tw-rounded-md tw-bg-white tw-text-xs 2xl:tw-text-sm tw-tracking-wide tw-text-vtd-secondary-600 tw-font-medium tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none tw-uppercase dark:tw-bg-vtd-secondary-800 dark:hover:tw-bg-vtd-secondary-700 dark:tw-text-vtd-secondary-300 dark:hover:tw-text-vtd-secondary-100 dark:focus:tw-bg-vtd-secondary-700",
            textContent: st(s),
            onClick: (V) => i("update:year", s, e.asPrevOrNext)
          }, null, 8, or)
        ])
      ]))), 128))
    ]));
  }
}, ar = { class: "tw-grid tw-grid-cols-7 tw-gap-y-0.5 tw-my-1" }, nr = ["data-tooltip"], sr = ["disabled", "onClick", "onMouseenter", "onFocusin", "textContent", "data-date"], Gt = {
  __name: "Calendar",
  props: {
    asPrevOrNext: Boolean,
    calendar: Object,
    weeks: Array,
    asRange: Boolean
  },
  emits: ["update:date"],
  setup(e, { emit: i }) {
    const n = ct("isBetweenRange"), t = ct("betweenRangeClasses"), s = ct("datepickerClasses"), u = ct("atMouseOver");
    return (V, c) => (Z(), J("div", ar, [
      et(De, {
        "enter-from-class": "tw-opacity-0",
        "enter-to-class": "tw-opacity-100",
        "enter-active-class": "tw-transition-opacity tw-ease-out tw-duration-300",
        "leave-active-class": "tw-transition-opacity tw-ease-in tw-duration-200",
        "leave-from-class": "tw-opacity-100",
        "leave-to-class": "tw-opacity-0"
      }, {
        default: _t(() => [
          (Z(!0), J($t, null, Ht(e.calendar.date(), (m, v) => (Z(), J("div", {
            key: v,
            class: Mt(["tw-relative", { "vtd-tooltip": e.asRange && m.duration() }]),
            "data-tooltip": `${m.duration()}`
          }, [
            et(se, {
              "enter-from-class": "tw-opacity-0",
              "enter-to-class": "tw-opacity-100",
              "enter-active-class": "tw-transition-opacity tw-ease-out tw-duration-200",
              "leave-active-class": "tw-transition-opacity tw-ease-in tw-duration-150",
              "leave-from-class": "tw-opacity-100",
              "leave-to-class": "tw-opacity-0"
            }, {
              default: _t(() => [
                H(n)(m) || m.hovered() ? (Z(), J("span", {
                  key: 0,
                  class: Mt(["tw-absolute tw-bg-vtd-primary-100 tw-bg-opacity-60 dark:tw-bg-vtd-secondary-700 dark:tw-bg-opacity-50", H(t)(m)])
                }, null, 2)) : mt("", !0)
              ]),
              _: 2
            }, 1024),
            P("button", {
              type: "button",
              class: Mt(["vtd-datepicker-date tw-relative tw-w-[2.7rem] tw-h-[2.7rem] lg:tw-w-10 lg:tw-h-10 tw-flex tw-justify-center tw-items-center tw-text-xs 2xl:tw-text-sm", [H(s)(m), e.asRange ? "tw-transition-all" : "tw-transition-colors"]]),
              disabled: m.disabled || m.inRange(),
              onClick: (k) => i("update:date", m, e.asPrevOrNext),
              onMouseenter: (k) => H(u)(m),
              onFocusin: (k) => H(u)(m),
              textContent: st(m.date()),
              "data-date": m.toDate()
            }, null, 42, sr)
          ], 10, nr))), 128))
        ]),
        _: 1
      })
    ]));
  }
}, lr = {
  key: 0,
  class: "tw-relative tw-w-full tw-border-t tw-border-b-0 sm:tw-border-t-0 sm:tw-border-b lg:tw-border-b-0 lg:tw-border-r tw-border-black/[.1] tw-order-last sm:tw-order-none dark:tw-border-vtd-secondary-700/[1] sm:tw-mt-1 lg:tw-mr-1 sm:tw-mb-1 lg:tw-mb-0 sm:tw-mx-1 lg:tw-mx-0"
}, ir = {
  key: 0,
  class: "tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 tw-gap-1 lg:tw-block tw-w-full tw-pr-5 sm:tw-pr-6 tw-mt-1.5 sm:tw-mt-0 sm:tw-mb-1.5 lg:tw-mb-0"
}, ur = ["onClick", "textContent"], dr = {
  key: 1,
  class: "tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 tw-gap-1 lg:tw-block tw-w-full tw-pr-5 sm:tw-pr-6 tw-mt-1.5 sm:tw-mt-0 sm:tw-mb-1.5 lg:tw-mb-0"
}, ae = {
  __name: "Shortcut",
  props: {
    shortcuts: [Boolean, Function],
    close: Function,
    asRange: Boolean,
    asSingle: Boolean,
    i18n: Object
  },
  setup(e) {
    const i = e, n = ct("setToToday"), t = ct("setToYesterday"), s = ct("setToLastDay"), u = ct("setToThisMonth"), V = ct("setToLastMonth"), c = ct("setToCustomShortcut"), m = () => typeof i.shortcuts == "function" ? i.shortcuts() : !1;
    return (v, k) => i.asRange && i.asSingle || i.asRange && !i.asSingle ? (Z(), J("div", lr, [
      m() ? (Z(), J("ol", ir, [
        (Z(!0), J($t, null, Ht(m(), (y, g) => (Z(), J("li", { key: g }, [
          P("a", {
            href: "#",
            class: "vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300",
            onClick: jt((F) => H(c)(y, e.close), ["prevent"]),
            textContent: st(y.label)
          }, null, 8, ur)
        ]))), 128))
      ])) : (Z(), J("ol", dr, [
        P("li", null, [
          P("a", {
            href: "#",
            class: "vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300",
            onClick: k[0] || (k[0] = jt((y) => H(n)(e.close), ["prevent"]))
          }, st(i.i18n.today), 1)
        ]),
        P("li", null, [
          P("a", {
            href: "#",
            class: "vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300",
            onClick: k[1] || (k[1] = jt((y) => H(t)(e.close), ["prevent"]))
          }, st(i.i18n.yesterday), 1)
        ]),
        P("li", null, [
          P("a", {
            href: "#",
            class: "vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300",
            onClick: k[2] || (k[2] = jt((y) => H(s)(7, e.close), ["prevent"]))
          }, st(i.i18n.past(7)), 1)
        ]),
        P("li", null, [
          P("a", {
            href: "#",
            class: "vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300",
            onClick: k[3] || (k[3] = jt((y) => H(s)(30, e.close), ["prevent"]))
          }, st(i.i18n.past(30)), 1)
        ]),
        P("li", null, [
          P("a", {
            href: "#",
            class: "vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300",
            onClick: k[4] || (k[4] = jt((y) => H(u)(e.close), ["prevent"]))
          }, st(i.i18n.currentMonth), 1)
        ]),
        P("li", null, [
          P("a", {
            href: "#",
            class: "vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300",
            onClick: k[5] || (k[5] = jt((y) => H(V)(e.close), ["prevent"]))
          }, st(i.i18n.pastMonth), 1)
        ])
      ]))
    ])) : mt("", !0);
  }
};
function kt(e, i, ...n) {
  if (e in i) {
    let s = i[e];
    return typeof s == "function" ? s(...n) : s;
  }
  let t = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(i).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t, kt), t;
}
var Ft = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ft || {}), cr = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(cr || {});
function Tt({ visible: e = !0, features: i = 0, ourProps: n, theirProps: t, ...s }) {
  var u;
  let V = fr(t, n), c = Object.assign(s, { props: V });
  if (e || i & 2 && V.static)
    return Xt(c);
  if (i & 1) {
    let m = (u = V.unmount) == null || u ? 0 : 1;
    return kt(m, { [0]() {
      return null;
    }, [1]() {
      return Xt({ ...s, props: { ...V, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Xt(c);
}
function Xt({ props: e, attrs: i, slots: n, slot: t, name: s }) {
  var u;
  let { as: V, ...c } = ie(e, ["unmount", "static"]), m = (u = n.default) == null ? void 0 : u.call(n, t), v = {};
  if (t) {
    let k = !1, y = [];
    for (let [g, F] of Object.entries(t))
      typeof F == "boolean" && (k = !0), F === !0 && y.push(g);
    k && (v["data-headlessui-state"] = y.join(" "));
  }
  if (V === "template") {
    if (m = le(m), Object.keys(c).length > 0 || Object.keys(i).length > 0) {
      let [k, ...y] = m != null ? m : [];
      if (!wr(k) || y.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${s} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(i)).sort((g, F) => g.localeCompare(F)).map((g) => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((g) => `  - ${g}`).join(`
`)].join(`
`));
      return Oe(k, Object.assign({}, c, v));
    }
    return Array.isArray(m) && m.length === 1 ? m[0] : m;
  }
  return Pt(V, Object.assign({}, c, v), m);
}
function le(e) {
  return e.flatMap((i) => i.type === $t ? le(i.children) : [i]);
}
function fr(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let i = {}, n = {};
  for (let t of e)
    for (let s in t)
      s.startsWith("on") && typeof t[s] == "function" ? (n[s] != null || (n[s] = []), n[s].push(t[s])) : i[s] = t[s];
  if (i.disabled || i["aria-disabled"])
    return Object.assign(i, Object.fromEntries(Object.keys(n).map((t) => [t, void 0])));
  for (let t in n)
    Object.assign(i, { [t](s, ...u) {
      let V = n[t];
      for (let c of V) {
        if (s instanceof Event && s.defaultPrevented)
          return;
        c(s, ...u);
      }
    } });
  return i;
}
function ie(e, i = []) {
  let n = Object.assign({}, e);
  for (let t of i)
    t in n && delete n[t];
  return n;
}
function wr(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let pr = 0;
function mr() {
  return ++pr;
}
function Ct() {
  return mr();
}
var gt = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(gt || {});
function U(e) {
  var i;
  return e == null || e.value == null ? null : (i = e.value.$el) != null ? i : e.value;
}
let ue = Symbol("Context");
var Nt = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Nt || {});
function de() {
  return ct(ue, null);
}
function vr(e) {
  dt(ue, e);
}
function ne(e, i) {
  if (e)
    return e;
  let n = i != null ? i : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function hr(e, i) {
  let n = rt(ne(e.value.type, e.value.as));
  return _e(() => {
    n.value = ne(e.value.type, e.value.as);
  }), bt(() => {
    var t;
    n.value || !U(i) || U(i) instanceof HTMLButtonElement && !((t = U(i)) != null && t.hasAttribute("type")) && (n.value = "button");
  }), n;
}
const Jt = typeof window > "u" || typeof document > "u";
function Rt(e) {
  if (Jt)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let i = U(e);
    if (i)
      return i.ownerDocument;
  }
  return document;
}
let te = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var St = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(St || {}), yr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(yr || {}), xr = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(xr || {});
function ce(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(te));
}
var re = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(re || {});
function fe(e, i = 0) {
  var n;
  return e === ((n = Rt(e)) == null ? void 0 : n.body) ? !1 : kt(i, { [0]() {
    return e.matches(te);
  }, [1]() {
    let t = e;
    for (; t !== null; ) {
      if (t.matches(te))
        return !0;
      t = t.parentElement;
    }
    return !1;
  } });
}
let br = ["textarea", "input"].join(",");
function gr(e) {
  var i, n;
  return (n = (i = e == null ? void 0 : e.matches) == null ? void 0 : i.call(e, br)) != null ? n : !1;
}
function kr(e, i = (n) => n) {
  return e.slice().sort((n, t) => {
    let s = i(n), u = i(t);
    if (s === null || u === null)
      return 0;
    let V = s.compareDocumentPosition(u);
    return V & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : V & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Vt(e, i, n = !0, t = null) {
  var s;
  let u = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, V = Array.isArray(e) ? n ? kr(e) : e : ce(e);
  t = t != null ? t : u.activeElement;
  let c = (() => {
    if (i & 5)
      return 1;
    if (i & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), m = (() => {
    if (i & 1)
      return 0;
    if (i & 2)
      return Math.max(0, V.indexOf(t)) - 1;
    if (i & 4)
      return Math.max(0, V.indexOf(t)) + 1;
    if (i & 8)
      return V.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), v = i & 32 ? { preventScroll: !0 } : {}, k = 0, y = V.length, g;
  do {
    if (k >= y || k + y <= 0)
      return 0;
    let F = m + k;
    if (i & 16)
      F = (F + y) % y;
    else {
      if (F < 0)
        return 3;
      if (F >= y)
        return 1;
    }
    g = V[F], g == null || g.focus(v), k += c;
  } while (g !== u.activeElement);
  return i & 6 && gr(g) && g.select(), g.hasAttribute("tabindex") || g.setAttribute("tabindex", "0"), 2;
}
function Qt(e, i, n) {
  Jt || bt((t) => {
    document.addEventListener(e, i, n), t(() => document.removeEventListener(e, i, n));
  });
}
function $r(e, i, n = ft(() => !0)) {
  function t(u, V) {
    if (!n.value || u.defaultPrevented)
      return;
    let c = V(u);
    if (c === null || !c.ownerDocument.documentElement.contains(c))
      return;
    let m = function v(k) {
      return typeof k == "function" ? v(k()) : Array.isArray(k) || k instanceof Set ? k : [k];
    }(e);
    for (let v of m) {
      if (v === null)
        continue;
      let k = v instanceof HTMLElement ? v : U(v);
      if (k != null && k.contains(c))
        return;
    }
    return !fe(c, re.Loose) && c.tabIndex !== -1 && u.preventDefault(), i(u, c);
  }
  let s = rt(null);
  Qt("mousedown", (u) => {
    n.value && (s.value = u.target);
  }, !0), Qt("click", (u) => {
    !s.value || (t(u, () => s.value), s.value = null);
  }, !0), Qt("blur", (u) => t(u, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Kt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Kt || {});
let ee = Yt({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: i, attrs: n }) {
  return () => {
    let { features: t, ...s } = e, u = { "aria-hidden": (t & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(t & 4) === 4 && (t & 2) !== 2 && { display: "none" } } };
    return Tt({ ourProps: u, theirProps: s, slot: {}, attrs: n, slots: i, name: "Hidden" });
  };
} });
function jr(e, i, n) {
  Jt || bt((t) => {
    window.addEventListener(e, i, n), t(() => window.removeEventListener(e, i, n));
  });
}
var Dt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Dt || {});
function we() {
  let e = rt(0);
  return jr("keydown", (i) => {
    i.key === "Tab" && (e.value = i.shiftKey ? 1 : 0);
  }), e;
}
function Mr(e, i, n, t) {
  Jt || bt((s) => {
    e = e != null ? e : window, e.addEventListener(i, n, t), s(() => e.removeEventListener(i, n, t));
  });
}
var Sr = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Sr || {});
let pe = Symbol("PopoverContext");
function qt(e) {
  let i = ct(pe, null);
  if (i === null) {
    let n = new Error(`<${e} /> is missing a parent <${ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, qt), n;
  }
  return i;
}
let me = Symbol("PopoverGroupContext");
function ve() {
  return ct(me, null);
}
let he = Symbol("PopoverPanelContext");
function Dr() {
  return ct(he, null);
}
let ye = Yt({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: i, attrs: n, expose: t }) {
  var s;
  let u = `headlessui-popover-button-${Ct()}`, V = `headlessui-popover-panel-${Ct()}`, c = rt(null);
  t({ el: c, $el: c });
  let m = rt(1), v = rt(null), k = rt(null), y = rt(null), g = rt(null), F = ft(() => Rt(c)), G = ft(() => {
    if (!U(v) || !U(g))
      return !1;
    for (let C of document.querySelectorAll("body > *"))
      if (Number(C == null ? void 0 : C.contains(U(v))) ^ Number(C == null ? void 0 : C.contains(U(g))))
        return !0;
    return !1;
  }), M = { popoverState: m, buttonId: u, panelId: V, panel: g, button: v, isPortalled: G, beforePanelSentinel: k, afterPanelSentinel: y, togglePopover() {
    m.value = kt(m.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    m.value !== 1 && (m.value = 1);
  }, close(C) {
    M.closePopover();
    let Y = (() => C ? C instanceof HTMLElement ? C : C.value instanceof HTMLElement ? U(C) : U(M.button) : U(M.button))();
    Y == null || Y.focus();
  } };
  dt(pe, M), vr(ft(() => kt(m.value, { [0]: Nt.Open, [1]: Nt.Closed })));
  let _ = { buttonId: u, panelId: V, close() {
    M.closePopover();
  } }, f = ve(), $ = f == null ? void 0 : f.registerPopover;
  function D() {
    var C, Y, a, r;
    return (r = f == null ? void 0 : f.isFocusWithinPopoverGroup()) != null ? r : ((C = F.value) == null ? void 0 : C.activeElement) && (((Y = U(v)) == null ? void 0 : Y.contains(F.value.activeElement)) || ((a = U(g)) == null ? void 0 : a.contains(F.value.activeElement)));
  }
  return bt(() => $ == null ? void 0 : $(_)), Mr((s = F.value) == null ? void 0 : s.defaultView, "focus", (C) => {
    var Y, a;
    m.value === 0 && (D() || !v || !g || (Y = U(M.beforePanelSentinel)) != null && Y.contains(C.target) || (a = U(M.afterPanelSentinel)) != null && a.contains(C.target) || M.closePopover());
  }, !0), $r([v, g], (C, Y) => {
    var a;
    M.closePopover(), fe(Y, re.Loose) || (C.preventDefault(), (a = U(v)) == null || a.focus());
  }, ft(() => m.value === 0)), () => {
    let C = { open: m.value === 0, close: M.close };
    return Tt({ theirProps: e, ourProps: { ref: c }, slot: C, slots: i, attrs: n, name: "Popover" });
  };
} }), Or = Yt({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { attrs: i, slots: n, expose: t }) {
  let s = qt("PopoverButton"), u = ft(() => Rt(s.button));
  t({ el: s.button, $el: s.button });
  let V = ve(), c = V == null ? void 0 : V.closeOthers, m = Dr(), v = m === null ? !1 : m === s.panelId, k = rt(null), y = `headlessui-focus-sentinel-${Ct()}`;
  v || bt(() => {
    s.button.value = k.value;
  });
  let g = hr(ft(() => ({ as: e.as, type: i.type })), k);
  function F(f) {
    var $, D, C, Y, a;
    if (v) {
      if (s.popoverState.value === 1)
        return;
      switch (f.key) {
        case gt.Space:
        case gt.Enter:
          f.preventDefault(), (D = ($ = f.target).click) == null || D.call($), s.closePopover(), (C = U(s.button)) == null || C.focus();
          break;
      }
    } else
      switch (f.key) {
        case gt.Space:
        case gt.Enter:
          f.preventDefault(), f.stopPropagation(), s.popoverState.value === 1 && (c == null || c(s.buttonId)), s.togglePopover();
          break;
        case gt.Escape:
          if (s.popoverState.value !== 0)
            return c == null ? void 0 : c(s.buttonId);
          if (!U(s.button) || ((Y = u.value) == null ? void 0 : Y.activeElement) && !((a = U(s.button)) != null && a.contains(u.value.activeElement)))
            return;
          f.preventDefault(), f.stopPropagation(), s.closePopover();
          break;
      }
  }
  function G(f) {
    v || f.key === gt.Space && f.preventDefault();
  }
  function M(f) {
    var $, D;
    e.disabled || (v ? (s.closePopover(), ($ = U(s.button)) == null || $.focus()) : (f.preventDefault(), f.stopPropagation(), s.popoverState.value === 1 && (c == null || c(s.buttonId)), s.togglePopover(), (D = U(s.button)) == null || D.focus()));
  }
  function _(f) {
    f.preventDefault(), f.stopPropagation();
  }
  return () => {
    let f = s.popoverState.value === 0, $ = { open: f }, D = v ? { ref: k, type: g.value, onKeydown: F, onClick: M } : { ref: k, id: s.buttonId, type: g.value, "aria-expanded": e.disabled ? void 0 : s.popoverState.value === 0, "aria-controls": U(s.panel) ? s.panelId : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: F, onKeyup: G, onClick: M, onMousedown: _ }, C = we();
    function Y() {
      let a = U(s.panel);
      if (!a)
        return;
      function r() {
        kt(C.value, { [Dt.Forwards]: () => Vt(a, St.First), [Dt.Backwards]: () => Vt(a, St.Last) });
      }
      r();
    }
    return Pt($t, [Tt({ ourProps: D, theirProps: { ...i, ...e }, slot: $, attrs: i, slots: n, name: "PopoverButton" }), f && !v && s.isPortalled.value && Pt(ee, { id: y, features: Kt.Focusable, as: "button", type: "button", onFocus: Y })]);
  };
} }), _r = Yt({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: i, slots: n }) {
  let t = qt("PopoverOverlay"), s = `headlessui-popover-overlay-${Ct()}`, u = de(), V = ft(() => u !== null ? u.value === Nt.Open : t.popoverState.value === 0);
  function c() {
    t.closePopover();
  }
  return () => {
    let m = { open: t.popoverState.value === 0 };
    return Tt({ ourProps: { id: s, "aria-hidden": !0, onClick: c }, theirProps: e, slot: m, attrs: i, slots: n, features: Ft.RenderStrategy | Ft.Static, visible: V.value, name: "PopoverOverlay" });
  };
} }), Vr = Yt({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 } }, inheritAttrs: !1, setup(e, { attrs: i, slots: n, expose: t }) {
  let { focus: s } = e, u = qt("PopoverPanel"), V = ft(() => Rt(u.panel)), c = `headlessui-focus-sentinel-before-${Ct()}`, m = `headlessui-focus-sentinel-after-${Ct()}`;
  t({ el: u.panel, $el: u.panel }), dt(he, u.panelId), bt(() => {
    var _, f;
    if (!s || u.popoverState.value !== 0 || !u.panel)
      return;
    let $ = (_ = V.value) == null ? void 0 : _.activeElement;
    (f = U(u.panel)) != null && f.contains($) || Vt(U(u.panel), St.First);
  });
  let v = de(), k = ft(() => v !== null ? v.value === Nt.Open : u.popoverState.value === 0);
  function y(_) {
    var f, $;
    switch (_.key) {
      case gt.Escape:
        if (u.popoverState.value !== 0 || !U(u.panel) || V.value && !((f = U(u.panel)) != null && f.contains(V.value.activeElement)))
          return;
        _.preventDefault(), _.stopPropagation(), u.closePopover(), ($ = U(u.button)) == null || $.focus();
        break;
    }
  }
  function g(_) {
    var f, $, D, C, Y;
    let a = _.relatedTarget;
    !a || !U(u.panel) || (f = U(u.panel)) != null && f.contains(a) || (u.closePopover(), (((D = ($ = U(u.beforePanelSentinel)) == null ? void 0 : $.contains) == null ? void 0 : D.call($, a)) || ((Y = (C = U(u.afterPanelSentinel)) == null ? void 0 : C.contains) == null ? void 0 : Y.call(C, a))) && a.focus({ preventScroll: !0 }));
  }
  let F = we();
  function G() {
    let _ = U(u.panel);
    if (!_)
      return;
    function f() {
      kt(F.value, { [Dt.Forwards]: () => {
        Vt(_, St.Next);
      }, [Dt.Backwards]: () => {
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
      kt(F.value, { [Dt.Forwards]: () => {
        var $, D;
        let C = U(u.button), Y = U(u.panel);
        if (!C)
          return;
        let a = ce(), r = a.indexOf(C), N = a.slice(0, r + 1), L = [...a.slice(r + 1), ...N];
        for (let j of L.slice())
          if (((D = ($ = j == null ? void 0 : j.id) == null ? void 0 : $.startsWith) == null ? void 0 : D.call($, "headlessui-focus-sentinel-")) || (Y == null ? void 0 : Y.contains(j))) {
            let W = L.indexOf(j);
            W !== -1 && L.splice(W, 1);
          }
        Vt(L, St.First, !1);
      }, [Dt.Backwards]: () => Vt(_, St.Previous) });
    }
    f();
  }
  return () => {
    let _ = { open: u.popoverState.value === 0, close: u.close }, f = { ref: u.panel, id: u.panelId, onKeydown: y, onFocusout: s && u.popoverState.value === 0 ? g : void 0, tabIndex: -1 };
    return Tt({ ourProps: f, theirProps: { ...i, ...ie(e, ["focus"]) }, attrs: i, slot: _, slots: { ...n, default: (...$) => {
      var D;
      return [Pt($t, [k.value && u.isPortalled.value && Pt(ee, { id: c, ref: u.beforePanelSentinel, features: Kt.Focusable, as: "button", type: "button", onFocus: G }), (D = n.default) == null ? void 0 : D.call(n, ...$), k.value && u.isPortalled.value && Pt(ee, { id: m, ref: u.afterPanelSentinel, features: Kt.Focusable, as: "button", type: "button", onFocus: M })])];
    } }, features: Ft.RenderStrategy | Ft.Static, visible: k.value, name: "PopoverPanel" });
  };
} });
Yt({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: i, slots: n, expose: t }) {
  let s = rt(null), u = rt([]), V = ft(() => Rt(s));
  t({ el: s, $el: s });
  function c(y) {
    let g = u.value.indexOf(y);
    g !== -1 && u.value.splice(g, 1);
  }
  function m(y) {
    return u.value.push(y), () => {
      c(y);
    };
  }
  function v() {
    var y;
    let g = V.value;
    if (!g)
      return !1;
    let F = g.activeElement;
    return (y = U(s)) != null && y.contains(F) ? !0 : u.value.some((G) => {
      var M, _;
      return ((M = g.getElementById(G.buttonId)) == null ? void 0 : M.contains(F)) || ((_ = g.getElementById(G.panelId)) == null ? void 0 : _.contains(F));
    });
  }
  function k(y) {
    for (let g of u.value)
      g.buttonId !== y && g.close();
  }
  return dt(me, { registerPopover: m, unregisterPopover: c, isFocusWithinPopoverGroup: v, closeOthers: k }), () => Tt({ ourProps: { ref: s }, theirProps: e, slot: {}, attrs: i, slots: n, name: "PopoverGroup" });
} });
var Ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xe = { exports: {} };
(function(e, i) {
  (function(n, t) {
    e.exports = t();
  })(Ot, function() {
    var n = 1e3, t = 6e4, s = 36e5, u = "millisecond", V = "second", c = "minute", m = "hour", v = "day", k = "week", y = "month", g = "quarter", F = "year", G = "date", M = "Invalid Date", _ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
      var x = ["th", "st", "nd", "rd"], h = T % 100;
      return "[" + T + (x[(h - 20) % 10] || x[h] || x[0]) + "]";
    } }, D = function(T, x, h) {
      var O = String(T);
      return !O || O.length >= x ? T : "" + Array(x + 1 - O.length).join(h) + T;
    }, C = { s: D, z: function(T) {
      var x = -T.utcOffset(), h = Math.abs(x), O = Math.floor(h / 60), S = h % 60;
      return (x <= 0 ? "+" : "-") + D(O, 2, "0") + ":" + D(S, 2, "0");
    }, m: function T(x, h) {
      if (x.date() < h.date())
        return -T(h, x);
      var O = 12 * (h.year() - x.year()) + (h.month() - x.month()), S = x.clone().add(O, y), B = h - S < 0, A = x.clone().add(O + (B ? -1 : 1), y);
      return +(-(O + (h - S) / (B ? S - A : A - S)) || 0);
    }, a: function(T) {
      return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
    }, p: function(T) {
      return { M: y, y: F, w: k, d: v, D: G, h: m, m: c, s: V, ms: u, Q: g }[T] || String(T || "").toLowerCase().replace(/s$/, "");
    }, u: function(T) {
      return T === void 0;
    } }, Y = "en", a = {};
    a[Y] = $;
    var r = function(T) {
      return T instanceof W;
    }, N = function T(x, h, O) {
      var S;
      if (!x)
        return Y;
      if (typeof x == "string") {
        var B = x.toLowerCase();
        a[B] && (S = B), h && (a[B] = h, S = B);
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
      var h = typeof x == "object" ? x : {};
      return h.date = T, h.args = arguments, new W(h);
    }, j = C;
    j.l = N, j.i = r, j.w = function(T, x) {
      return L(T, { locale: x.$L, utc: x.$u, x: x.$x, $offset: x.$offset });
    };
    var W = function() {
      function T(h) {
        this.$L = N(h.locale, null, !0), this.parse(h);
      }
      var x = T.prototype;
      return x.parse = function(h) {
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
        }(h), this.$x = h.x || {}, this.init();
      }, x.init = function() {
        var h = this.$d;
        this.$y = h.getFullYear(), this.$M = h.getMonth(), this.$D = h.getDate(), this.$W = h.getDay(), this.$H = h.getHours(), this.$m = h.getMinutes(), this.$s = h.getSeconds(), this.$ms = h.getMilliseconds();
      }, x.$utils = function() {
        return j;
      }, x.isValid = function() {
        return this.$d.toString() !== M;
      }, x.isSame = function(h, O) {
        var S = L(h);
        return this.startOf(O) <= S && S <= this.endOf(O);
      }, x.isAfter = function(h, O) {
        return L(h) < this.startOf(O);
      }, x.isBefore = function(h, O) {
        return this.endOf(O) < L(h);
      }, x.$g = function(h, O, S) {
        return j.u(h) ? this[O] : this.set(S, h);
      }, x.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, x.valueOf = function() {
        return this.$d.getTime();
      }, x.startOf = function(h, O) {
        var S = this, B = !!j.u(O) || O, A = j.p(h), z = function(nt, at) {
          var it = j.w(S.$u ? Date.UTC(S.$y, at, nt) : new Date(S.$y, at, nt), S);
          return B ? it : it.endOf(v);
        }, K = function(nt, at) {
          return j.w(S.toDate()[nt].apply(S.toDate("s"), (B ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(at)), S);
        }, X = this.$W, ot = this.$M, pt = this.$D, wt = "set" + (this.$u ? "UTC" : "");
        switch (A) {
          case F:
            return B ? z(1, 0) : z(31, 11);
          case y:
            return B ? z(1, ot) : z(0, ot + 1);
          case k:
            var xt = this.$locale().weekStart || 0, vt = (X < xt ? X + 7 : X) - xt;
            return z(B ? pt - vt : pt + (6 - vt), ot);
          case v:
          case G:
            return K(wt + "Hours", 0);
          case m:
            return K(wt + "Minutes", 1);
          case c:
            return K(wt + "Seconds", 2);
          case V:
            return K(wt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, x.endOf = function(h) {
        return this.startOf(h, !1);
      }, x.$set = function(h, O) {
        var S, B = j.p(h), A = "set" + (this.$u ? "UTC" : ""), z = (S = {}, S[v] = A + "Date", S[G] = A + "Date", S[y] = A + "Month", S[F] = A + "FullYear", S[m] = A + "Hours", S[c] = A + "Minutes", S[V] = A + "Seconds", S[u] = A + "Milliseconds", S)[B], K = B === v ? this.$D + (O - this.$W) : O;
        if (B === y || B === F) {
          var X = this.clone().set(G, 1);
          X.$d[z](K), X.init(), this.$d = X.set(G, Math.min(this.$D, X.daysInMonth())).$d;
        } else
          z && this.$d[z](K);
        return this.init(), this;
      }, x.set = function(h, O) {
        return this.clone().$set(h, O);
      }, x.get = function(h) {
        return this[j.p(h)]();
      }, x.add = function(h, O) {
        var S, B = this;
        h = Number(h);
        var A = j.p(O), z = function(ot) {
          var pt = L(B);
          return j.w(pt.date(pt.date() + Math.round(ot * h)), B);
        };
        if (A === y)
          return this.set(y, this.$M + h);
        if (A === F)
          return this.set(F, this.$y + h);
        if (A === v)
          return z(1);
        if (A === k)
          return z(7);
        var K = (S = {}, S[c] = t, S[m] = s, S[V] = n, S)[A] || 1, X = this.$d.getTime() + h * K;
        return j.w(X, this);
      }, x.subtract = function(h, O) {
        return this.add(-1 * h, O);
      }, x.format = function(h) {
        var O = this, S = this.$locale();
        if (!this.isValid())
          return S.invalidDate || M;
        var B = h || "YYYY-MM-DDTHH:mm:ssZ", A = j.z(this), z = this.$H, K = this.$m, X = this.$M, ot = S.weekdays, pt = S.months, wt = function(at, it, ht, yt) {
          return at && (at[it] || at(O, B)) || ht[it].slice(0, yt);
        }, xt = function(at) {
          return j.s(z % 12 || 12, at, "0");
        }, vt = S.meridiem || function(at, it, ht) {
          var yt = at < 12 ? "AM" : "PM";
          return ht ? yt.toLowerCase() : yt;
        }, nt = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: X + 1, MM: j.s(X + 1, 2, "0"), MMM: wt(S.monthsShort, X, pt, 3), MMMM: wt(pt, X), D: this.$D, DD: j.s(this.$D, 2, "0"), d: String(this.$W), dd: wt(S.weekdaysMin, this.$W, ot, 2), ddd: wt(S.weekdaysShort, this.$W, ot, 3), dddd: ot[this.$W], H: String(z), HH: j.s(z, 2, "0"), h: xt(1), hh: xt(2), a: vt(z, K, !0), A: vt(z, K, !1), m: String(K), mm: j.s(K, 2, "0"), s: String(this.$s), ss: j.s(this.$s, 2, "0"), SSS: j.s(this.$ms, 3, "0"), Z: A };
        return B.replace(f, function(at, it) {
          return it || nt[at] || A.replace(":", "");
        });
      }, x.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, x.diff = function(h, O, S) {
        var B, A = j.p(O), z = L(h), K = (z.utcOffset() - this.utcOffset()) * t, X = this - z, ot = j.m(this, z);
        return ot = (B = {}, B[F] = ot / 12, B[y] = ot, B[g] = ot / 3, B[k] = (X - K) / 6048e5, B[v] = (X - K) / 864e5, B[m] = X / s, B[c] = X / t, B[V] = X / n, B)[A] || X, S ? ot : j.a(ot);
      }, x.daysInMonth = function() {
        return this.endOf(y).$D;
      }, x.$locale = function() {
        return a[this.$L];
      }, x.locale = function(h, O) {
        if (!h)
          return this.$L;
        var S = this.clone(), B = N(h, O, !0);
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
    }(), q = W.prototype;
    return L.prototype = q, [["$ms", u], ["$s", V], ["$m", c], ["$H", m], ["$W", v], ["$M", y], ["$y", F], ["$D", G]].forEach(function(T) {
      q[T[1]] = function(x) {
        return this.$g(x, T[0], T[1]);
      };
    }), L.extend = function(T, x) {
      return T.$i || (T(x, W, L), T.$i = !0), L;
    }, L.locale = N, L.isDayjs = r, L.unix = function(T) {
      return L(1e3 * T);
    }, L.en = a[Y], L.Ls = a, L.p = {}, L;
  });
})(xe);
const l = xe.exports;
var be = { exports: {} };
(function(e, i) {
  (function(n, t) {
    e.exports = t();
  })(Ot, function() {
    return function(n, t, s) {
      var u = t.prototype, V = function(y) {
        return y && (y.indexOf ? y : y.s);
      }, c = function(y, g, F, G, M) {
        var _ = y.name ? y : y.$locale(), f = V(_[g]), $ = V(_[F]), D = f || $.map(function(Y) {
          return Y.slice(0, G);
        });
        if (!M)
          return D;
        var C = _.weekStart;
        return D.map(function(Y, a) {
          return D[(a + (C || 0)) % 7];
        });
      }, m = function() {
        return s.Ls[s.locale()];
      }, v = function(y, g) {
        return y.formats[g] || function(F) {
          return F.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(G, M, _) {
            return M || _.slice(1);
          });
        }(y.formats[g.toUpperCase()]);
      }, k = function() {
        var y = this;
        return { months: function(g) {
          return g ? g.format("MMMM") : c(y, "months");
        }, monthsShort: function(g) {
          return g ? g.format("MMM") : c(y, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return y.$locale().weekStart || 0;
        }, weekdays: function(g) {
          return g ? g.format("dddd") : c(y, "weekdays");
        }, weekdaysMin: function(g) {
          return g ? g.format("dd") : c(y, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(g) {
          return g ? g.format("ddd") : c(y, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(g) {
          return v(y.$locale(), g);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      u.localeData = function() {
        return k.bind(this)();
      }, s.localeData = function() {
        var y = m();
        return { firstDayOfWeek: function() {
          return y.weekStart || 0;
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
        }, longDateFormat: function(g) {
          return v(y, g);
        }, meridiem: y.meridiem, ordinal: y.ordinal };
      }, s.months = function() {
        return c(m(), "months");
      }, s.monthsShort = function() {
        return c(m(), "monthsShort", "months", 3);
      }, s.weekdays = function(y) {
        return c(m(), "weekdays", null, null, y);
      }, s.weekdaysShort = function(y) {
        return c(m(), "weekdaysShort", "weekdays", 3, y);
      }, s.weekdaysMin = function(y) {
        return c(m(), "weekdaysMin", "weekdays", 2, y);
      };
    };
  });
})(be);
const Pr = be.exports;
var ge = { exports: {} };
(function(e, i) {
  (function(n, t) {
    e.exports = t();
  })(Ot, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, s, u) {
      var V = s.prototype, c = V.format;
      u.en.formats = n, V.format = function(m) {
        m === void 0 && (m = "YYYY-MM-DDTHH:mm:ssZ");
        var v = this.$locale().formats, k = function(y, g) {
          return y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(F, G, M) {
            var _ = M && M.toUpperCase();
            return G || g[M] || n[M] || g[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(f, $, D) {
              return $ || D.slice(1);
            });
          });
        }(m, v === void 0 ? {} : v);
        return c.call(this, k);
      };
    };
  });
})(ge);
const Cr = ge.exports;
var ke = { exports: {} };
(function(e, i) {
  (function(n, t) {
    e.exports = t();
  })(Ot, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, u = /\d\d?/, V = /\d*[^-_:/,()\s\d]+/, c = {}, m = function(M) {
      return (M = +M) + (M > 68 ? 1900 : 2e3);
    }, v = function(M) {
      return function(_) {
        this[M] = +_;
      };
    }, k = [/[+-]\d\d:?(\d\d)?|Z/, function(M) {
      (this.zone || (this.zone = {})).offset = function(_) {
        if (!_ || _ === "Z")
          return 0;
        var f = _.match(/([+-]|\d\d)/g), $ = 60 * f[1] + (+f[2] || 0);
        return $ === 0 ? 0 : f[0] === "+" ? -$ : $;
      }(M);
    }], y = function(M) {
      var _ = c[M];
      return _ && (_.indexOf ? _ : _.s.concat(_.f));
    }, g = function(M, _) {
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
      this.afternoon = g(M, !1);
    }], a: [V, function(M) {
      this.afternoon = g(M, !0);
    }], S: [/\d/, function(M) {
      this.milliseconds = 100 * +M;
    }], SS: [s, function(M) {
      this.milliseconds = 10 * +M;
    }], SSS: [/\d{3}/, function(M) {
      this.milliseconds = +M;
    }], s: [u, v("seconds")], ss: [u, v("seconds")], m: [u, v("minutes")], mm: [u, v("minutes")], H: [u, v("hours")], h: [u, v("hours")], HH: [u, v("hours")], hh: [u, v("hours")], D: [u, v("day")], DD: [s, v("day")], Do: [V, function(M) {
      var _ = c.ordinal, f = M.match(/\d+/);
      if (this.day = f[0], _)
        for (var $ = 1; $ <= 31; $ += 1)
          _($).replace(/\[|\]/g, "") === M && (this.day = $);
    }], M: [u, v("month")], MM: [s, v("month")], MMM: [V, function(M) {
      var _ = y("months"), f = (y("monthsShort") || _.map(function($) {
        return $.slice(0, 3);
      })).indexOf(M) + 1;
      if (f < 1)
        throw new Error();
      this.month = f % 12 || f;
    }], MMMM: [V, function(M) {
      var _ = y("months").indexOf(M) + 1;
      if (_ < 1)
        throw new Error();
      this.month = _ % 12 || _;
    }], Y: [/[+-]?\d+/, v("year")], YY: [s, function(M) {
      this.year = m(M);
    }], YYYY: [/\d{4}/, v("year")], Z: k, ZZ: k };
    function G(M) {
      var _, f;
      _ = M, f = c && c.formats;
      for (var $ = (M = _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, j, W) {
        var q = W && W.toUpperCase();
        return j || f[W] || n[W] || f[q].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(T, x, h) {
          return x || h.slice(1);
        });
      })).match(t), D = $.length, C = 0; C < D; C += 1) {
        var Y = $[C], a = F[Y], r = a && a[0], N = a && a[1];
        $[C] = N ? { regex: r, parser: N } : Y.replace(/^\[|\]$/g, "");
      }
      return function(L) {
        for (var j = {}, W = 0, q = 0; W < D; W += 1) {
          var T = $[W];
          if (typeof T == "string")
            q += T.length;
          else {
            var x = T.regex, h = T.parser, O = L.slice(q), S = x.exec(O)[0];
            h.call(j, S), L = L.replace(S, "");
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
      f.p.customParseFormat = !0, M && M.parseTwoDigitYear && (m = M.parseTwoDigitYear);
      var $ = _.prototype, D = $.parse;
      $.parse = function(C) {
        var Y = C.date, a = C.utc, r = C.args;
        this.$u = a;
        var N = r[1];
        if (typeof N == "string") {
          var L = r[2] === !0, j = r[3] === !0, W = L || j, q = r[2];
          j && (q = r[2]), c = this.$locale(), !L && q && (c = f.Ls[q]), this.$d = function(O, S, B) {
            try {
              if (["x", "X"].indexOf(S) > -1)
                return new Date((S === "X" ? 1e3 : 1) * O);
              var A = G(S)(O), z = A.year, K = A.month, X = A.day, ot = A.hours, pt = A.minutes, wt = A.seconds, xt = A.milliseconds, vt = A.zone, nt = new Date(), at = X || (z || K ? 1 : nt.getDate()), it = z || nt.getFullYear(), ht = 0;
              z && !K || (ht = K > 0 ? K - 1 : nt.getMonth());
              var yt = ot || 0, At = pt || 0, Lt = wt || 0, Bt = xt || 0;
              return vt ? new Date(Date.UTC(it, ht, at, yt, At, Lt, Bt + 60 * vt.offset * 1e3)) : B ? new Date(Date.UTC(it, ht, at, yt, At, Lt, Bt)) : new Date(it, ht, at, yt, At, Lt, Bt);
            } catch {
              return new Date("");
            }
          }(Y, N, a), this.init(), q && q !== !0 && (this.$L = this.locale(q).$L), W && Y != this.format(N) && (this.$d = new Date("")), c = {};
        } else if (N instanceof Array)
          for (var T = N.length, x = 1; x <= T; x += 1) {
            r[1] = N[x - 1];
            var h = f.apply(this, r);
            if (h.isValid()) {
              this.$d = h.$d, this.$L = h.$L, this.init();
              break;
            }
            x === T && (this.$d = new Date(""));
          }
        else
          D.call(this, C);
      };
    };
  });
})(ke);
const Yr = ke.exports;
var $e = { exports: {} };
(function(e, i) {
  (function(n, t) {
    e.exports = t();
  })(Ot, function() {
    return function(n, t, s) {
      t.prototype.isToday = function() {
        var u = "YYYY-MM-DD", V = s();
        return this.format(u) === V.format(u);
      };
    };
  });
})($e);
const Tr = $e.exports;
var je = { exports: {} };
(function(e, i) {
  (function(n, t) {
    e.exports = t();
  })(Ot, function() {
    return function(n, t, s) {
      t.prototype.isBetween = function(u, V, c, m) {
        var v = s(u), k = s(V), y = (m = m || "()")[0] === "(", g = m[1] === ")";
        return (y ? this.isAfter(v, c) : !this.isBefore(v, c)) && (g ? this.isBefore(k, c) : !this.isAfter(k, c)) || (y ? this.isBefore(v, c) : !this.isAfter(v, c)) && (g ? this.isAfter(k, c) : !this.isBefore(k, c));
      };
    };
  });
})(je);
const Ar = je.exports;
var Me = { exports: {} };
(function(e, i) {
  (function(n, t) {
    e.exports = t();
  })(Ot, function() {
    var n, t, s = 1e3, u = 6e4, V = 36e5, c = 864e5, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v = 31536e6, k = 2592e6, y = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, g = { years: v, months: k, days: c, hours: V, minutes: u, seconds: s, milliseconds: 1, weeks: 6048e5 }, F = function(Y) {
      return Y instanceof C;
    }, G = function(Y, a, r) {
      return new C(Y, r, a.$l);
    }, M = function(Y) {
      return t.p(Y) + "s";
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
          return G(r * g[M(N)], this);
        if (typeof r == "number")
          return this.$ms = r, this.parseFromMilliseconds(), this;
        if (typeof r == "object")
          return Object.keys(r).forEach(function(T) {
            j.$d[M(T)] = r[T];
          }), this.calMilliseconds(), this;
        if (typeof r == "string") {
          var W = r.match(y);
          if (W) {
            var q = W.slice(2).map(function(T) {
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
          return N + (r.$d[L] || 0) * g[L];
        }, 0);
      }, a.parseFromMilliseconds = function() {
        var r = this.$ms;
        this.$d.years = f(r / v), r %= v, this.$d.months = f(r / k), r %= k, this.$d.days = f(r / c), r %= c, this.$d.hours = f(r / V), r %= V, this.$d.minutes = f(r / u), r %= u, this.$d.seconds = f(r / s), r %= s, this.$d.milliseconds = r;
      }, a.toISOString = function() {
        var r = D(this.$d.years, "Y"), N = D(this.$d.months, "M"), L = +this.$d.days || 0;
        this.$d.weeks && (L += 7 * this.$d.weeks);
        var j = D(L, "D"), W = D(this.$d.hours, "H"), q = D(this.$d.minutes, "M"), T = this.$d.seconds || 0;
        this.$d.milliseconds && (T += this.$d.milliseconds / 1e3);
        var x = D(T, "S"), h = r.negative || N.negative || j.negative || W.negative || q.negative || x.negative, O = W.format || q.format || x.format ? "T" : "", S = (h ? "-" : "") + "P" + r.format + N.format + j.format + O + W.format + q.format + x.format;
        return S === "P" || S === "-P" ? "P0D" : S;
      }, a.toJSON = function() {
        return this.toISOString();
      }, a.format = function(r) {
        var N = r || "YYYY-MM-DDTHH:mm:ss", L = { Y: this.$d.years, YY: t.s(this.$d.years, 2, "0"), YYYY: t.s(this.$d.years, 4, "0"), M: this.$d.months, MM: t.s(this.$d.months, 2, "0"), D: this.$d.days, DD: t.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: t.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: t.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: t.s(this.$d.seconds, 2, "0"), SSS: t.s(this.$d.milliseconds, 3, "0") };
        return N.replace(m, function(j, W) {
          return W || String(L[j]);
        });
      }, a.as = function(r) {
        return this.$ms / g[M(r)];
      }, a.get = function(r) {
        var N = this.$ms, L = M(r);
        return L === "milliseconds" ? N %= 1e3 : N = L === "weeks" ? f(N / g[L]) : this.$d[L], N === 0 ? 0 : N;
      }, a.add = function(r, N, L) {
        var j;
        return j = N ? r * g[M(N)] : F(r) ? r.$ms : G(r, this).$ms, G(this.$ms + j * (L ? -1 : 1), this);
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
      n = r, t = r().$utils(), r.duration = function(j, W) {
        var q = r.locale();
        return G(j, { $l: q }, W);
      }, r.isDuration = F;
      var N = a.prototype.add, L = a.prototype.subtract;
      a.prototype.add = function(j, W) {
        return F(j) && (j = j.asMilliseconds()), N.bind(this)(j, W);
      }, a.prototype.subtract = function(j, W) {
        return F(j) && (j = j.asMilliseconds()), L.bind(this)(j, W);
      };
    };
  });
})(Me);
const Lr = Me.exports;
function Br() {
  const e = (c) => {
    const m = [], v = c.localeData().firstDayOfWeek();
    for (let k = 0; k <= c.date(0 - v).day(); k++)
      m.push(c.date(0).subtract(k, "day"));
    return m.sort((k, y) => k.date() - y.date());
  };
  return {
    usePreviousDate: e,
    useCurrentDate: (c) => Array.from(
      {
        length: c.daysInMonth()
      },
      (m, v) => c.date(v + 1)
    ),
    useNextDate: (c) => {
      const m = [];
      for (let v = 1; v <= 42 - (e(c).length + c.daysInMonth()); v++)
        m.push(c.date(v).month(c.month()).add(1, "month"));
      return m;
    },
    useDisableDate: (c, { disableDate: m }) => typeof m == "function" ? m(c.toDate()) : !1,
    useBetweenRange: (c, { previous: m, next: v }) => {
      let k;
      return m.isAfter(v, "date") ? k = "(]" : k = "[)", !!(c.isBetween(m, v, "date", k) && !c.off);
    },
    useToValueFromString: (c, { formatter: m }) => c.format(m.date),
    useToValueFromArray: ({ previous: c, next: m }, { formatter: v, separator: k }) => `${c.format(v.date)}${k}${m.format(v.date)}`
  };
}
function Er() {
  return {
    useVisibleViewport: (i) => {
      if (i) {
        const { right: n } = i.getBoundingClientRect(), t = window.innerWidth || document.documentElement.clientWidth;
        return n > t;
      } else
        return null;
    }
  };
}
const Fr = ["placeholder"], Nr = { class: "tw-absolute tw-inset-y-0 tw-right-0 tw-inline-flex tw-items-center tw-rounded-md tw-overflow-hidden" }, Hr = {
  class: "tw-w-5 tw-h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Rr = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, Ir = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, Ur = { class: "tw-flex tw-flex-wrap lg:tw-flex-nowrap" }, zr = { class: "tw-relative tw-flex tw-flex-wrap sm:tw-flex-nowrap tw-p-1 tw-w-full" }, Wr = {
  key: 0,
  class: "tw-hidden tw-h-full tw-absolute tw-inset-0 sm:tw-flex tw-justify-center tw-items-center"
}, Zr = /* @__PURE__ */ P("div", { class: "tw-h-full tw-border-r tw-border-black/[.1] dark:tw-border-vtd-secondary-700/[1]" }, null, -1), Gr = [
  Zr
], Kr = { class: "tw-px-0.5 sm:tw-px-2" }, Jr = {
  key: 1,
  class: "tw-relative tw-w-full md:tw-w-1/2 lg:tw-w-80 tw-overflow-hidden tw-mt-3 sm:tw-mt-0 sm:tw-ml-2"
}, qr = { class: "tw-px-0.5 sm:tw-px-2" }, Xr = { key: 0 }, Qr = { class: "tw-mt-2 tw-mx-2 tw-py-1.5 tw-border-t tw-border-black/[.1] dark:tw-border-vtd-secondary-700/[1]" }, to = { class: "tw-mt-1.5 sm:tw-flex sm:tw-flex-row-reverse" }, eo = ["disabled", "onClick", "textContent"], ro = ["onClick", "textContent"], oo = {
  key: 1,
  class: "sm:tw-hidden"
}, ao = { class: "tw-mt-2 tw-mx-2 tw-py-1.5 tw-border-t tw-border-black/[.1] dark:tw-border-vtd-secondary-700/[1]" }, no = { class: "tw-mt-1.5 sm:tw-flex sm:tw-flex-row-reverse" }, so = ["onClick", "textContent"], lo = {
  key: 1,
  class: "tw-flex"
}, io = { class: "tw-bg-white tw-rounded-lg tw-shadow-sm tw-border-0 tw-border tw-border-black/[.1] tw-px-3 tw-py-3 sm:tw-px-4 sm:tw-py-4 dark:tw-bg-vtd-secondary-800 dark:tw-border-vtd-secondary-700/[1]" }, uo = { class: "tw-flex tw-flex-wrap lg:tw-flex-nowrap" }, co = { class: "tw-relative tw-flex tw-flex-wrap sm:tw-flex-nowrap tw-p-1 tw-w-full" }, fo = {
  key: 0,
  class: "tw-hidden tw-h-full tw-absolute tw-inset-0 sm:tw-flex tw-justify-center tw-items-center"
}, wo = /* @__PURE__ */ P("div", { class: "tw-h-full tw-border-r tw-border-black/[.1] dark:tw-border-vtd-secondary-700/[1]" }, null, -1), po = [
  wo
], mo = { class: "tw-px-0.5 sm:tw-px-2" }, vo = {
  key: 1,
  class: "tw-relative tw-w-full md:tw-w-1/2 lg:tw-w-80 tw-overflow-hidden tw-mt-3 sm:tw-mt-0 sm:tw-ml-2"
}, ho = { class: "tw-px-0.5 sm:tw-px-2" }, yo = { key: 0 }, xo = { class: "tw-mt-2 tw-mx-2 tw-py-1.5 tw-border-t tw-border-black/[.1] dark:tw-border-vtd-secondary-700/[1]" }, bo = { class: "tw-mt-1.5 sm:tw-flex sm:tw-flex-row-reverse" }, go = ["disabled", "textContent"], ko = {
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
          past: (e) => `Last ${e} Days`,
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
  setup(e, { expose: i, emit: n }) {
    const t = e, {
      useCurrentDate: s,
      useDisableDate: u,
      useBetweenRange: V,
      useNextDate: c,
      usePreviousDate: m,
      useToValueFromArray: v,
      useToValueFromString: k
    } = Br(), { useVisibleViewport: y } = Er();
    l.extend(Pr), l.extend(Cr), l.extend(Yr), l.extend(Tr), l.extend(Ar), l.extend(Lr);
    const g = rt(null), F = rt(null), G = rt(null), M = rt(""), _ = rt(null), f = rt(""), $ = rt([]), D = rt([]), C = rt(null), Y = rt(null), a = Ve({
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
    }), r = rt({
      previous: l(),
      next: l().add(1, "month"),
      year: {
        previous: l().year(),
        next: l().year()
      },
      weeks: t.weekdaysSize === "min" ? l.weekdaysMin() : l.weekdaysShort(),
      months: t.formatter.month === "MMM" ? l.monthsShort() : l.months()
    }), N = ft(() => r.value.weeks), L = ft(() => r.value.months), j = ft(() => {
      const { previous: d, next: w, year: b } = H(r);
      return {
        previous: {
          date: () => m(d).concat(s(d)).concat(c(d)).map((o) => (o.today = o.isToday(), o.active = d.month() === o.month(), o.off = d.month() !== o.month(), o.sunday = o.day() === 0, o.disabled = u(o, t) && !S(o), o.inRange = () => {
            if (t.asSingle && !t.useRange)
              return d.month() !== o.month();
          }, o.hovered = () => O() && $.value.length > 1 ? (o.isBetween($.value[0], $.value[1], "date", "()") || o.isBetween($.value[1], $.value[0], "date", "(]")) && d.month() === o.month() : !1, o.duration = () => !1, o)),
          month: d && d.format(t.formatter.month),
          year: d && d.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (o, p) => b.previous + p
          ),
          onPrevious: () => {
            r.value.previous = d.subtract(1, "month"), n("click:prev", r.value.previous);
          },
          onNext: () => {
            r.value.previous = d.add(1, "month"), d.diff(w, "month") === -1 && (r.value.next = w.add(1, "month")), n("click:next", r.value.previous);
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
            r.value.previous = d.month(o), a.previous.month = !a.previous.month, a.previous.year = !1, a.previous.calendar = !a.previous.month, n("select:month", r.value.previous), Et(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.next = r.value.next.year();
            });
          },
          openYear: () => {
            a.previous.year = !a.previous.year, a.previous.month = !1, a.previous.calendar = !a.previous.year;
          },
          setYear: (o, p) => {
            p || (r.value.previous = d.year(o), a.previous.year = !a.previous.year, a.previous.calendar = !a.previous.year, n("select:year", r.value.previous), Et(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            }));
          }
        },
        next: {
          date: () => m(w).concat(s(w)).concat(c(w)).map((o) => (o.today = o.isToday(), o.active = w.month() === o.month(), o.off = w.month() !== o.month(), o.sunday = o.day() === 0, o.disabled = u(o, t) && !S(o), o.inRange = () => {
            if (t.asSingle && !t.useRange)
              return w.month() !== o.month();
          }, o.hovered = () => $.value.length > 1 ? (o.isBetween($.value[0], $.value[1], "date", "()") || o.isBetween($.value[1], $.value[0], "date", "(]")) && w.month() === o.month() : !1, o.duration = () => !1, o)),
          month: w && w.format(t.formatter.month),
          year: w && w.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (o, p) => b.next + p
          ),
          onPrevious: () => {
            r.value.next = w.subtract(1, "month"), w.diff(d, "month") === 1 && (r.value.previous = d.subtract(1, "month")), n("click:right:prev", r.value.next);
          },
          onNext: () => {
            r.value.next = w.add(1, "month"), n("click:right:next", r.value.next);
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
            r.value.next = w.month(o), a.next.month = !a.next.month, a.next.year = !1, a.next.calendar = !a.next.month, n("select:right:month", r.value.next), Et(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(1, "month")), r.value.year.previous = r.value.previous.year();
            });
          },
          openYear: () => {
            a.next.year = !a.next.year, a.next.month = !1, a.next.calendar = !a.next.year;
          },
          setYear: (o, p) => {
            p && (r.value.next = w.year(o), a.next.year = !a.next.year, a.next.month = !1, a.next.calendar = !a.next.year, n("select:right:year", r.value.next), Et(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            }));
          }
        }
      };
    }), W = rt(!1);
    setTimeout(() => {
      W.value = !0;
    }, 250);
    const q = () => l().localeData().firstDayOfWeek(), T = (d) => {
      const w = [...d], b = w.shift();
      return [...w, b];
    }, x = () => Array.isArray(t.modelValue), h = () => typeof t.modelValue == "object", O = () => !t.useRange && !t.asSingle ? !0 : !t.useRange && t.asSingle ? !1 : t.useRange && !t.asSingle ? !0 : !!(t.useRange && t.asSingle), S = (d) => {
      if (t.disableInRange || f.value === "")
        return !1;
      let w, b;
      if (x()) {
        const [o, p] = t.modelValue;
        w = o, b = p;
      } else if (h()) {
        if (t.modelValue) {
          const [o, p] = Object.values(t.modelValue);
          w = o, b = p;
        }
      } else {
        const [o, p] = t.modelValue.split(t.separator);
        w = o, b = p;
      }
      return d.isBetween(l(w, t.formatter.date, !0), l(b, t.formatter.date, !0), "date", "[]");
    }, B = () => {
      C.value = null, Y.value = null, $.value = [], _.value = null;
    }, A = () => {
      if (f.value = "", x())
        n("update:modelValue", []);
      else if (h()) {
        const d = {}, [w, b] = Object.keys(t.modelValue);
        d[w] = "", d[b] = "", n("update:modelValue", d);
      } else
        n("update:modelValue", "");
      D.value = [], F.value && F.value.focus();
    };
    i({ clearPicker: A });
    const z = () => {
      if (O()) {
        const [d, w] = f.value.split(t.separator), [b, o] = [l(d, t.formatter.date, !0), l(w, t.formatter.date, !0)];
        if (b.isValid() && o.isValid())
          if (K(b), K(o), x())
            n("update:modelValue", [d, w]);
          else if (h()) {
            const p = {}, [E, R] = Object.keys(t.modelValue);
            p[E] = d, p[R] = w, n("update:modelValue", p);
          } else
            n(
              "update:modelValue",
              v(
                {
                  previous: b,
                  next: o
                },
                t
              )
            );
      } else {
        const d = l(f.value, t.formatter.date, !0);
        if (d.isValid())
          if (K(d), x())
            n("update:modelValue", [f.value]);
          else if (h()) {
            const w = {}, [b] = Object.keys(t.modelValue);
            w[b] = f.value, n("update:modelValue", w);
          } else
            n("update:modelValue", f.value);
      }
    }, K = (d, w, b) => {
      if (O())
        if (C.value)
          if (Y.value = d, t.autoApply) {
            d.isBefore(C.value) ? f.value = v(
              {
                previous: d,
                next: C.value
              },
              t
            ) : f.value = v(
              {
                previous: C.value,
                next: d
              },
              t
            );
            const [o, p] = f.value.split(t.separator);
            if (x())
              n("update:modelValue", [
                l(o, t.formatter.date, !0).format(t.formatter.date),
                l(p, t.formatter.date, !0).format(t.formatter.date)
              ]);
            else if (h()) {
              const E = {}, [R, tt] = Object.keys(t.modelValue);
              E[R] = o, E[tt] = p, n("update:modelValue", E);
            } else
              n(
                "update:modelValue",
                v(
                  {
                    previous: l(o, t.formatter.date, !0),
                    next: l(p, t.formatter.date, !0)
                  },
                  t
                )
              );
            b && b(), D.value = [], l(o, t.formatter.date, !0).isSame(l(p, t.formatter.date, !0), "month") || (r.value.previous = l(o, t.formatter.date, !0), r.value.next = l(p, t.formatter.date, !0)), B();
          } else {
            C.value.isAfter(d, "month") ? D.value = [d, C.value] : D.value = [C.value, d];
            const [o, p] = D.value;
            o.isSame(p, "month") || (r.value.previous = o, r.value.next = p), B();
          }
        else
          D.value = [], C.value = d, _.value = d, $.value.push(d), D.value.push(d), w ? (r.value.next = d, r.value.previous.isSame(d, "month") && (r.value.next = d.add(1, "month"))) : (r.value.previous = d, r.value.next.isSame(d, "month") && (r.value.previous = r.value.next, r.value.next = d.add(1, "month")));
      else if (t.autoApply) {
        if (f.value = k(d, t), x())
          n("update:modelValue", [f.value]);
        else if (h()) {
          const o = {}, [p] = Object.keys(t.modelValue);
          o[p] = f.value, n("update:modelValue", o);
        } else
          n("update:modelValue", f.value);
        b && b(), D.value = [], B();
      } else
        D.value = [d], B();
    }, X = (d) => {
      if (D.value.length < 1)
        return !1;
      let w;
      if (O()) {
        const [b, o] = D.value;
        o.isBefore(b) ? w = v(
          {
            previous: o,
            next: b
          },
          t
        ) : w = v(
          {
            previous: b,
            next: o
          },
          t
        );
      } else {
        const [b] = D.value;
        w = b;
      }
      if (O()) {
        const [b, o] = w.split(t.separator);
        if (x())
          n("update:modelValue", [
            l(b, t.formatter.date, !0).format(t.formatter.date),
            l(o, t.formatter.date, !0).format(t.formatter.date)
          ]);
        else if (h()) {
          const p = {}, [E, R] = Object.keys(t.modelValue);
          p[E] = b, p[R] = o, n("update:modelValue", p);
        } else
          n(
            "update:modelValue",
            v(
              {
                previous: l(b, t.formatter.date, !0),
                next: l(o, t.formatter.date, !0)
              },
              t
            )
          );
        f.value = w;
      } else if (f.value = w.format(t.formatter.date), x())
        n("update:modelValue", [f.value]);
      else if (h()) {
        const b = {}, [o] = Object.keys(t.modelValue);
        b[o] = f.value, n("update:modelValue", b);
      } else
        n("update:modelValue", f.value);
      d && d();
    }, ot = (d) => {
      if (!O())
        return !1;
      if (C.value)
        $.value = [C.value, d];
      else
        return $.value = [], !1;
    }, pt = (d) => {
      if (C.value && t.autoApply)
        return !1;
      let w, b;
      if ($.value.length > 1) {
        const [o, p] = $.value;
        w = l(o, t.formatter.date, !0), b = l(p, t.formatter.date, !0);
      } else if (x())
        if (t.autoApply) {
          const [o, p] = t.modelValue;
          w = o && l(o, t.formatter.date, !0), b = p && l(p, t.formatter.date, !0);
        } else {
          const [o, p] = D.value;
          w = l(o, t.formatter.date, !0), b = l(p, t.formatter.date, !0);
        }
      else if (h())
        if (t.autoApply) {
          if (t.modelValue) {
            const [o, p] = Object.values(t.modelValue);
            w = o && l(o, t.formatter.date, !0), b = p && l(p, t.formatter.date, !0);
          }
        } else {
          const [o, p] = D.value;
          w = l(o, t.formatter.date, !0), b = l(p, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        const [o, p] = t.modelValue ? t.modelValue.split(t.separator) : [!1, !1];
        w = o && l(o, t.formatter.date, !0), b = p && l(p, t.formatter.date, !0);
      } else {
        const [o, p] = D.value;
        w = l(o, t.formatter.date, !0), b = l(p, t.formatter.date, !0);
      }
      return w && b ? V(d, {
        previous: w,
        next: b
      }) : !1;
    }, wt = (d) => {
      const { today: w, active: b, off: o, disabled: p } = d;
      let E, R, tt;
      if (O())
        if (x())
          if (_.value) {
            const [I, Q] = $.value;
            R = I && l(I, t.formatter.date, !0), tt = Q && l(Q, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [I, Q] = t.modelValue;
            R = I && l(I, t.formatter.date, !0), tt = Q && l(Q, t.formatter.date, !0);
          } else {
            const [I, Q] = D.value;
            R = I && l(I, t.formatter.date, !0), tt = Q && l(Q, t.formatter.date, !0);
          }
        else if (h())
          if (_.value) {
            const [I, Q] = $.value;
            R = I && l(I, t.formatter.date, !0), tt = Q && l(Q, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [I, Q] = t.modelValue ? Object.values(t.modelValue) : [!1, !1];
            R = I && l(I, t.formatter.date, !0), tt = Q && l(Q, t.formatter.date, !0);
          } else {
            const [I, Q] = D.value;
            R = I && l(I, t.formatter.date, !0), tt = Q && l(Q, t.formatter.date, !0);
          }
        else if (_.value) {
          const [I, Q] = $.value;
          R = I && l(I, t.formatter.date, !0), tt = Q && l(Q, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [I, Q] = t.modelValue ? t.modelValue.split(t.separator) : [!1, !1];
          R = I && l(I, t.formatter.date, !0), tt = Q && l(Q, t.formatter.date, !0);
        } else {
          const [I, Q] = D.value;
          R = I && l(I, t.formatter.date, !0), tt = Q && l(Q, t.formatter.date, !0);
        }
      else if (x())
        if (t.autoApply) {
          if (t.modelValue.length > 0) {
            const [I] = t.modelValue;
            R = l(I, t.formatter.date, !0);
          }
        } else {
          const [I] = D.value;
          R = I && l(I, t.formatter.date, !0);
        }
      else if (h())
        if (t.autoApply) {
          if (t.modelValue) {
            const [I] = Object.values(t.modelValue);
            R = l(I, t.formatter.date, !0);
          }
        } else {
          const [I] = D.value;
          R = I && l(I, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        if (t.modelValue) {
          const [I] = t.modelValue.split(t.separator);
          R = l(I, t.formatter.date, !0);
        }
      } else {
        const [I] = D.value;
        R = I && l(I, t.formatter.date, !0);
      }
      return b && (E = w ? "tw-text-vtd-primary-500 tw-font-semibold dark:tw-text-vtd-primary-400 tw-rounded-full focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 tw-focus:ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none dark:tw-bg-vtd-secondary-800 dark:tw-text-vtd-secondary-300 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-secondary-300 dark:focus:tw-bg-vtd-secondary-600 dark:focus:tw-text-vtd-secondary-100 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-25 dark:focus:tw-bg-opacity-50" : p ? "tw-text-vtd-secondary-600 tw-font-normal disabled:tw-text-vtd-secondary-500 disabled:tw-cursor-not-allowed tw-rounded-full" : d.isBetween(R, tt, "date", "()") ? "tw-text-vtd-secondary-700 tw-font-medium dark:tw-text-vtd-secondary-100 tw-rounded-full" : "tw-text-vtd-secondary-600 tw-font-medium dark:tw-text-vtd-secondary-200 tw-rounded-full"), o && (E = "tw-text-vtd-secondary-400 tw-font-light disabled:tw-cursor-not-allowed"), R && tt && !o ? (d.isSame(R, "date") && (E = tt.isAfter(R, "date") ? "tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-l-full disabled:tw-cursor-not-allowed" : "tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-r-full disabled:tw-cursor-not-allowed", R.isSame(tt, "date") && (E = "tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-full disabled:tw-cursor-not-allowed")), d.isSame(tt, "date") && (E = tt.isAfter(R, "date") ? "tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-r-full disabled:tw-cursor-not-allowed" : "tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-l-full disabled:tw-cursor-not-allowed", R.isSame(tt, "date") && (E = "tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-full disabled:tw-cursor-not-allowed"))) : R && d.isSame(R, "date") && !o && (E = "tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-full disabled:tw-cursor-not-allowed"), E;
    }, xt = (d) => {
      let w, b, o;
      if (w = "", !O())
        return w;
      if (x())
        if ($.value.length > 1) {
          const [p, E] = $.value;
          b = p && l(p, t.formatter.date, !0), o = E && l(E, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [p, E] = t.modelValue;
          b = p && l(p, t.formatter.date, !0), o = E && l(E, t.formatter.date, !0);
        } else {
          const [p, E] = D.value;
          b = p && l(p, t.formatter.date, !0), o = E && l(E, t.formatter.date, !0);
        }
      else if (h())
        if ($.value.length > 1) {
          const [p, E] = $.value;
          b = p && l(p, t.formatter.date, !0), o = E && l(E, t.formatter.date, !0);
        } else if (t.autoApply) {
          if (t.modelValue) {
            const [p, E] = Object.values(t.modelValue);
            b = p && l(p, t.formatter.date, !0), o = E && l(E, t.formatter.date, !0);
          }
        } else {
          const [p, E] = D.value;
          b = p && l(p, t.formatter.date, !0), o = E && l(E, t.formatter.date, !0);
        }
      else if ($.value.length > 1) {
        const [p, E] = $.value;
        b = p && l(p, t.formatter.date, !0), o = E && l(E, t.formatter.date, !0);
      } else if (t.autoApply) {
        const [p, E] = t.modelValue ? t.modelValue.split(t.separator) : [!1, !1];
        b = p && l(p, t.formatter.date, !0), o = E && l(E, t.formatter.date, !0);
      } else {
        const [p, E] = D.value;
        b = p && l(p, t.formatter.date, !0), o = E && l(E, t.formatter.date, !0);
      }
      return b && o && (d.isSame(b, "date") ? (o.isBefore(b) && (w += " tw-rounded-r-full tw-inset-0"), b.isBefore(o) && (w += " tw-rounded-l-full tw-inset-0")) : d.isSame(o, "date") ? (o.isBefore(b) && (w += " tw-rounded-l-full tw-inset-0"), b.isBefore(o) && (w += " tw-rounded-r-full tw-inset-0")) : w += " tw-inset-0"), w;
    }, vt = (d, w) => {
      r.value.previous = l(d, t.formatter.date, !0), r.value.next = l(w, t.formatter.date, !0), (l.duration(r.value.next.diff(r.value.previous)).$d.months === 2 || l.duration(r.value.next.diff(r.value.previous)).$d.months === 1 && l.duration(r.value.next.diff(r.value.previous)).$d.days === 7) && (r.value.next = r.value.next.subtract(1, "month")), (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month"));
    }, nt = (d, w) => {
      if (O())
        if (t.autoApply) {
          if (x())
            n("update:modelValue", [d, w]);
          else if (h()) {
            const b = {}, [o, p] = Object.keys(t.modelValue);
            b[o] = d, b[p] = w, n("update:modelValue", b);
          } else
            n(
              "update:modelValue",
              v(
                {
                  previous: l(d, t.formatter.date, !0),
                  next: l(w, t.formatter.date, !0)
                },
                t
              )
            );
          f.value = `${d}${t.separator}${w}`;
        } else
          D.value = [l(d, t.formatter.date, !0), l(w, t.formatter.date, !0)];
      else if (t.autoApply) {
        if (x())
          n("update:modelValue", [d]);
        else if (h()) {
          const b = {}, [o] = Object.keys(t.modelValue);
          b[o] = d, n("update:modelValue", b);
        } else
          n("update:modelValue", d);
        f.value = d;
      } else
        D.value = [l(d, t.formatter.date, !0), l(w, t.formatter.date, !0)];
      vt(d, w);
    }, at = (d) => {
      const w = l().format(t.formatter.date), b = l().format(t.formatter.date);
      nt(w, b), d && d();
    }, it = (d) => {
      const w = l().subtract(1, "day").format(t.formatter.date), b = l().subtract(1, "day").format(t.formatter.date);
      nt(w, b), d && d();
    }, ht = (d, w) => {
      const b = l().subtract(d - 1, "day").format(t.formatter.date), o = l().format(t.formatter.date);
      nt(b, o), w && w();
    }, yt = (d) => {
      const w = l().date(1).format(t.formatter.date), b = l().date(l().daysInMonth()).format(t.formatter.date);
      nt(w, b), d && d();
    }, At = (d) => {
      const w = l().date(1).subtract(1, "month").format(t.formatter.date), b = l().date(0).format(t.formatter.date);
      nt(w, b), d && d();
    }, Lt = (d, w) => {
      let b, o;
      const [p, E] = d.atClick();
      b = l(p).format(t.formatter.date), o = l(E).format(t.formatter.date), nt(b, o), w && w();
    };
    Pe(
      () => D.value,
      (d) => {
        d.length > 0 && (a.previous.calendar = !0, a.previous.month = !1, a.previous.year = !1, a.next.calendar = !0, a.next.month = !1, a.next.year = !1);
      }
    ), bt(() => {
      t.placeholder ? M.value = t.placeholder : O() ? M.value = `${t.formatter.date}${t.separator}${t.formatter.date}` : M.value = t.formatter.date;
    }), bt(() => {
      const d = t.i18n;
      Et(() => {
        const w = /* @__PURE__ */ Object.assign({ "./locale/af.js": () => import("./af.07ed485a.mjs"), "./locale/am.js": () => import("./am.3aac6964.mjs"), "./locale/ar-dz.js": () => import("./ar-dz.ebe17e15.mjs"), "./locale/ar-iq.js": () => import("./ar-iq.ba443d54.mjs"), "./locale/ar-kw.js": () => import("./ar-kw.6d607bfd.mjs"), "./locale/ar-ly.js": () => import("./ar-ly.40f7c6b9.mjs"), "./locale/ar-ma.js": () => import("./ar-ma.6b273912.mjs"), "./locale/ar-sa.js": () => import("./ar-sa.e3848f13.mjs"), "./locale/ar-tn.js": () => import("./ar-tn.cda36b5b.mjs"), "./locale/ar.js": () => import("./ar.392053db.mjs"), "./locale/az.js": () => import("./az.3fc5d8c7.mjs"), "./locale/be.js": () => import("./be.82e4aba7.mjs"), "./locale/bg.js": () => import("./bg.bd3da298.mjs"), "./locale/bi.js": () => import("./bi.1ee60ac2.mjs"), "./locale/bm.js": () => import("./bm.b7d1c809.mjs"), "./locale/bn-bd.js": () => import("./bn-bd.88c2f443.mjs"), "./locale/bn.js": () => import("./bn.a0b95536.mjs"), "./locale/bo.js": () => import("./bo.c934f531.mjs"), "./locale/br.js": () => import("./br.03b5f627.mjs"), "./locale/bs.js": () => import("./bs.5ffc610e.mjs"), "./locale/ca.js": () => import("./ca.ab7cb0f8.mjs"), "./locale/cs.js": () => import("./cs.f68605fa.mjs"), "./locale/cv.js": () => import("./cv.a1f7e712.mjs"), "./locale/cy.js": () => import("./cy.74fa91c1.mjs"), "./locale/da.js": () => import("./da.7a574620.mjs"), "./locale/de-at.js": () => import("./de-at.a53f3f33.mjs"), "./locale/de-ch.js": () => import("./de-ch.0e697016.mjs"), "./locale/de.js": () => import("./de.b8b930f2.mjs"), "./locale/dv.js": () => import("./dv.426ff900.mjs"), "./locale/el.js": () => import("./el.1fcceb5c.mjs"), "./locale/en-au.js": () => import("./en-au.f6c7b274.mjs"), "./locale/en-ca.js": () => import("./en-ca.110f2af3.mjs"), "./locale/en-gb.js": () => import("./en-gb.a773ecd9.mjs"), "./locale/en-ie.js": () => import("./en-ie.831c9fe3.mjs"), "./locale/en-il.js": () => import("./en-il.df756568.mjs"), "./locale/en-in.js": () => import("./en-in.a51b3e40.mjs"), "./locale/en-nz.js": () => import("./en-nz.0839983e.mjs"), "./locale/en-sg.js": () => import("./en-sg.453a3446.mjs"), "./locale/en-tt.js": () => import("./en-tt.5e9ea0a8.mjs"), "./locale/en.js": () => import("./en.c289298e.mjs"), "./locale/eo.js": () => import("./eo.a758df48.mjs"), "./locale/es-do.js": () => import("./es-do.69e9a7ec.mjs"), "./locale/es-mx.js": () => import("./es-mx.2b05d961.mjs"), "./locale/es-pr.js": () => import("./es-pr.8d3570de.mjs"), "./locale/es-us.js": () => import("./es-us.cfef2999.mjs"), "./locale/es.js": () => import("./es.098d92db.mjs"), "./locale/et.js": () => import("./et.db0f8646.mjs"), "./locale/eu.js": () => import("./eu.f1fb2087.mjs"), "./locale/fa.js": () => import("./fa.869d60d1.mjs"), "./locale/fi.js": () => import("./fi.7d5561b3.mjs"), "./locale/fo.js": () => import("./fo.1eede009.mjs"), "./locale/fr-ca.js": () => import("./fr-ca.fd17fe1f.mjs"), "./locale/fr-ch.js": () => import("./fr-ch.d163181d.mjs"), "./locale/fr.js": () => import("./fr.752ef49b.mjs"), "./locale/fy.js": () => import("./fy.462aef2b.mjs"), "./locale/ga.js": () => import("./ga.accec322.mjs"), "./locale/gd.js": () => import("./gd.e6c586cd.mjs"), "./locale/gl.js": () => import("./gl.894214d1.mjs"), "./locale/gom-latn.js": () => import("./gom-latn.21cc4791.mjs"), "./locale/gu.js": () => import("./gu.372540af.mjs"), "./locale/he.js": () => import("./he.d4b71598.mjs"), "./locale/hi.js": () => import("./hi.641ff9e6.mjs"), "./locale/hr.js": () => import("./hr.2e2e0055.mjs"), "./locale/ht.js": () => import("./ht.8facd801.mjs"), "./locale/hu.js": () => import("./hu.13b88a4f.mjs"), "./locale/hy-am.js": () => import("./hy-am.d21a5c3b.mjs"), "./locale/id.js": () => import("./id.b004c09d.mjs"), "./locale/is.js": () => import("./is.07002c7c.mjs"), "./locale/it-ch.js": () => import("./it-ch.99e48446.mjs"), "./locale/it.js": () => import("./it.3713b3d0.mjs"), "./locale/ja.js": () => import("./ja.6013f434.mjs"), "./locale/jv.js": () => import("./jv.c8f1114c.mjs"), "./locale/ka.js": () => import("./ka.3a7e9613.mjs"), "./locale/kk.js": () => import("./kk.acee7899.mjs"), "./locale/km.js": () => import("./km.9fa6cbda.mjs"), "./locale/kn.js": () => import("./kn.1285bd2c.mjs"), "./locale/ko.js": () => import("./ko.9ac61018.mjs"), "./locale/ku.js": () => import("./ku.8f25462f.mjs"), "./locale/ky.js": () => import("./ky.6f20527c.mjs"), "./locale/lb.js": () => import("./lb.817d2739.mjs"), "./locale/lo.js": () => import("./lo.3cd7dfe8.mjs"), "./locale/lt.js": () => import("./lt.9432fd13.mjs"), "./locale/lv.js": () => import("./lv.9f808a55.mjs"), "./locale/me.js": () => import("./me.62290e46.mjs"), "./locale/mi.js": () => import("./mi.cf1f9d38.mjs"), "./locale/mk.js": () => import("./mk.90b1a957.mjs"), "./locale/ml.js": () => import("./ml.0633b1d8.mjs"), "./locale/mn.js": () => import("./mn.590a560c.mjs"), "./locale/mr.js": () => import("./mr.ad1c8f49.mjs"), "./locale/ms-my.js": () => import("./ms-my.5de74a38.mjs"), "./locale/ms.js": () => import("./ms.50ff5bb8.mjs"), "./locale/mt.js": () => import("./mt.5eeea1d7.mjs"), "./locale/my.js": () => import("./my.31326637.mjs"), "./locale/nb.js": () => import("./nb.6f58eea5.mjs"), "./locale/ne.js": () => import("./ne.c0832637.mjs"), "./locale/nl-be.js": () => import("./nl-be.ed822f22.mjs"), "./locale/nl.js": () => import("./nl.cbe452f1.mjs"), "./locale/nn.js": () => import("./nn.0be979e6.mjs"), "./locale/oc-lnc.js": () => import("./oc-lnc.f80edda2.mjs"), "./locale/pa-in.js": () => import("./pa-in.17ccb95b.mjs"), "./locale/pl.js": () => import("./pl.1563ce65.mjs"), "./locale/pt-br.js": () => import("./pt-br.0647326e.mjs"), "./locale/pt.js": () => import("./pt.08e0665e.mjs"), "./locale/rn.js": () => import("./rn.5cbe4953.mjs"), "./locale/ro.js": () => import("./ro.384052a8.mjs"), "./locale/ru.js": () => import("./ru.d088a91e.mjs"), "./locale/rw.js": () => import("./rw.8be291df.mjs"), "./locale/sd.js": () => import("./sd.095024e0.mjs"), "./locale/se.js": () => import("./se.b21a844c.mjs"), "./locale/si.js": () => import("./si.469d7fd0.mjs"), "./locale/sk.js": () => import("./sk.4e5806ea.mjs"), "./locale/sl.js": () => import("./sl.e2a48227.mjs"), "./locale/sq.js": () => import("./sq.d0fc5ace.mjs"), "./locale/sr-cyrl.js": () => import("./sr-cyrl.e34b6b71.mjs"), "./locale/sr.js": () => import("./sr.6833feda.mjs"), "./locale/ss.js": () => import("./ss.402b622c.mjs"), "./locale/sv-fi.js": () => import("./sv-fi.a1093109.mjs"), "./locale/sv.js": () => import("./sv.1af34f83.mjs"), "./locale/sw.js": () => import("./sw.7b35a961.mjs"), "./locale/ta.js": () => import("./ta.444340d4.mjs"), "./locale/te.js": () => import("./te.be051a1e.mjs"), "./locale/tet.js": () => import("./tet.d60833df.mjs"), "./locale/tg.js": () => import("./tg.3aea759c.mjs"), "./locale/th.js": () => import("./th.5c3fe116.mjs"), "./locale/tk.js": () => import("./tk.96543e69.mjs"), "./locale/tl-ph.js": () => import("./tl-ph.cd92d546.mjs"), "./locale/tlh.js": () => import("./tlh.bc72d90c.mjs"), "./locale/tr.js": () => import("./tr.45346db8.mjs"), "./locale/tzl.js": () => import("./tzl.8dfd161f.mjs"), "./locale/tzm-latn.js": () => import("./tzm-latn.7789ec01.mjs"), "./locale/tzm.js": () => import("./tzm.80b0d225.mjs"), "./locale/ug-cn.js": () => import("./ug-cn.706484ee.mjs"), "./locale/uk.js": () => import("./uk.8026d33d.mjs"), "./locale/ur.js": () => import("./ur.be9879f2.mjs"), "./locale/uz-latn.js": () => import("./uz-latn.a982d5ba.mjs"), "./locale/uz.js": () => import("./uz.184dcf8c.mjs"), "./locale/vi.js": () => import("./vi.268dce34.mjs"), "./locale/x-pseudo.js": () => import("./x-pseudo.e199b717.mjs"), "./locale/yo.js": () => import("./yo.78eb9aaa.mjs"), "./locale/zh-cn.js": () => import("./zh-cn.c8aee9ad.mjs"), "./locale/zh-hk.js": () => import("./zh-hk.f24d3d2c.mjs"), "./locale/zh-tw.js": () => import("./zh-tw.d754c3a7.mjs"), "./locale/zh.js": () => import("./zh.394f1518.mjs") });
        for (const b in w)
          w[b]().then(() => {
            l.locale(d);
            let o, p;
            if (O()) {
              if (x()) {
                if (t.modelValue.length > 0) {
                  const [R, tt] = t.modelValue;
                  o = l(R, t.formatter.date, !0), p = l(tt, t.formatter.date, !0);
                }
              } else if (h()) {
                if (!Ce(t.modelValue))
                  try {
                    Object.keys(t.modelValue);
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
                if (t.modelValue) {
                  const [R, tt] = Object.values(t.modelValue);
                  o = R && l(R, t.formatter.date, !0), p = tt && l(tt, t.formatter.date, !0);
                }
              } else if (t.modelValue) {
                const [R, tt] = t.modelValue.split(t.separator);
                o = l(R, t.formatter.date, !0), p = l(tt, t.formatter.date, !0);
              }
              o && p ? (f.value = v(
                {
                  previous: o,
                  next: p
                },
                t
              ), p.isBefore(o, "month") ? (r.value.previous = p, r.value.next = o, r.value.year.previous = p.year(), r.value.year.next = o.year()) : p.isSame(o, "month") ? (r.value.previous = o, r.value.next = p.add(1, "month"), r.value.year.previous = o.year(), r.value.year.next = o.add(1, "year").year()) : (r.value.previous = o, r.value.next = p, r.value.year.previous = o.year(), r.value.year.next = p.year()), t.autoApply || (D.value = [o, p])) : (r.value.previous = l(t.startFrom), r.value.next = l(t.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
            } else {
              if (x()) {
                if (t.modelValue.length > 0) {
                  const [R] = t.modelValue;
                  o = l(R, t.formatter.date, !0);
                }
              } else if (h()) {
                if (t.modelValue) {
                  const [R] = Object.values(t.modelValue);
                  o = l(R, t.formatter.date, !0);
                }
              } else if (t.modelValue.length) {
                const [R] = t.modelValue.split(t.separator);
                o = l(R, t.formatter.date, !0);
              }
              o && o.isValid() ? (f.value = k(o, t), r.value.previous = o, r.value.next = o.add(1, "month"), r.value.year.previous = o.year(), r.value.year.next = o.add(1, "year").year(), t.autoApply || (D.value = [o])) : (r.value.previous = l(t.startFrom), r.value.next = l(t.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
            }
            const E = t.weekdaysSize === "min" ? l.weekdaysMin() : l.weekdaysShort();
            r.value.weeks = q() ? T(E) : E, r.value.months = t.formatter.month === "MMM" ? l.monthsShort() : l.months();
          }).catch((o) => {
            console.warn(o.message);
          });
      });
    });
    const Bt = (d) => (d && G.value === null && (G.value = y(g.value)), d && G.value ? "place-right" : "place-left"), oe = (d) => (d && G.value === null && (G.value = y(g.value)), G.value ? "tw-left-auto tw-right-0" : "tw-left-0 tw-right-auto");
    return dt("isBetweenRange", pt), dt("betweenRangeClasses", xt), dt("datepickerClasses", wt), dt("atMouseOver", ot), dt("setToToday", at), dt("setToYesterday", it), dt("setToLastDay", ht), dt("setToThisMonth", yt), dt("setToLastMonth", At), dt("setToCustomShortcut", Lt), (d, w) => t.noInput ? W.value ? (Z(), J("div", lo, [
      P("div", io, [
        P("div", uo, [
          t.shortcuts ? (Z(), It(ae, {
            key: 0,
            shortcuts: t.shortcuts,
            "as-range": O(),
            "as-single": t.asSingle,
            i18n: t.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : mt("", !0),
          P("div", co, [
            O() && !t.asSingle ? (Z(), J("div", fo, po)) : mt("", !0),
            P("div", {
              class: Mt(["tw-relative tw-w-full lg:tw-w-80", {
                "tw-mb-3 sm:tw-mb-0 sm:tw-mr-2 md:tw-w-1/2": O() && !t.asSingle
              }])
            }, [
              et(Ut, {
                panel: a.previous,
                calendar: H(j).previous
              }, null, 8, ["panel", "calendar"]),
              P("div", mo, [
                lt(et(zt, {
                  months: H(L),
                  "onUpdate:month": H(j).previous.setMount
                }, null, 8, ["months", "onUpdate:month"]), [
                  [ut, a.previous.month]
                ]),
                lt(et(Zt, {
                  years: H(j).previous.years(),
                  "onUpdate:year": H(j).previous.setYear
                }, null, 8, ["years", "onUpdate:year"]), [
                  [ut, a.previous.year]
                ]),
                lt(P("div", null, [
                  et(Wt, { weeks: H(N) }, null, 8, ["weeks"]),
                  et(Gt, {
                    calendar: H(j).previous,
                    weeks: H(N),
                    "as-range": O(),
                    "onUpdate:date": w[2] || (w[2] = (b, o) => K(b, o))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ut, a.previous.calendar]
                ])
              ])
            ], 2),
            O() && !t.asSingle ? (Z(), J("div", vo, [
              et(Ut, {
                "as-prev-or-next": "",
                panel: a.next,
                calendar: H(j).next
              }, null, 8, ["panel", "calendar"]),
              P("div", ho, [
                lt(et(zt, {
                  months: H(L),
                  "onUpdate:month": H(j).next.setMount
                }, null, 8, ["months", "onUpdate:month"]), [
                  [ut, a.next.month]
                ]),
                lt(et(Zt, {
                  "as-prev-or-next": "",
                  years: H(j).next.years(),
                  "onUpdate:year": H(j).next.setYear
                }, null, 8, ["years", "onUpdate:year"]), [
                  [ut, a.next.year]
                ]),
                lt(P("div", null, [
                  et(Wt, { weeks: H(N) }, null, 8, ["weeks"]),
                  et(Gt, {
                    "as-prev-or-next": "",
                    calendar: H(j).next,
                    weeks: H(N),
                    "as-range": O(),
                    "onUpdate:date": w[3] || (w[3] = (b, o) => K(b, o))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ut, a.next.calendar]
                ])
              ])
            ])) : mt("", !0)
          ])
        ]),
        t.autoApply ? mt("", !0) : (Z(), J("div", yo, [
          P("div", xo, [
            P("div", bo, [
              P("button", {
                type: "button",
                class: "away-apply-picker tw-w-full tw-transition tw-ease-out tw-duration-300 tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-shadow-sm tw-px-4 tw-py-2 tw-bg-vtd-primary-600 tw-text-base tw-font-medium tw-text-white hover:tw-bg-vtd-primary-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-vtd-primary-500 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm dark:tw-ring-offset-vtd-secondary-800 disabled:tw-cursor-not-allowed",
                disabled: t.asSingle ? D.value.length < 1 : D.value.length < 2,
                onClick: w[4] || (w[4] = (b) => X()),
                textContent: st(t.options.footer.apply)
              }, null, 8, go)
            ])
          ])
        ]))
      ])
    ])) : mt("", !0) : (Z(), It(H(ye), {
      key: 0,
      as: "div",
      id: "vtd",
      class: "tw-relative tw-w-full"
    }, {
      default: _t(({ open: b }) => [
        t.overlay ? (Z(), It(H(_r), {
          key: 0,
          class: "tw-fixed tw-inset-0 tw-bg-black tw-opacity-30"
        })) : mt("", !0),
        et(H(Or), {
          as: "label",
          class: "tw-relative tw-block"
        }, {
          default: _t(() => [
            Ye(d.$slots, "default", {
              value: f.value,
              placeholder: M.value,
              clear: A
            }, () => [
              lt(P("input", Te({
                ref_key: "VtdInputRef",
                ref: F,
                type: "text",
                class: [
                  "tw-relative tw-block tw-w-full",
                  e.inputClasses || "tw-pl-3 tw-pr-12 tw-py-2.5 tw-rounded-lg tw-overflow-hidden tw-border-solid tw-text-sm tw-text-vtd-secondary-700 tw-placeholder-vtd-secondary-400 tw-transition-colors tw-bg-white tw-border tw-border-vtd-secondary-300 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none dark:tw-bg-vtd-secondary-800 dark:tw-border-vtd-secondary-700 dark:tw-text-vtd-secondary-100 dark:tw-placeholder-vtd-secondary-500 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-20"
                ],
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other"
              }, d.$attrs, {
                "onUpdate:modelValue": w[0] || (w[0] = (o) => f.value = o),
                placeholder: M.value,
                onKeyup: z
              }), null, 16, Fr), [
                [Ae, f.value]
              ]),
              P("div", Nr, [
                P("button", {
                  type: "button",
                  class: "tw-px-2 tw-py-1 tw-mr-1 focus:tw-outline-none tw-text-vtd-secondary-400 dark:tw-text-opacity-70 tw-rounded-md",
                  onClick: w[1] || (w[1] = (o) => f.value ? A() : d.$refs.VtdInputRef.focus())
                }, [
                  (Z(), J("svg", Hr, [
                    f.value ? (Z(), J("path", Rr)) : (Z(), J("path", Ir))
                  ]))
                ])
              ])
            ])
          ]),
          _: 3
        }),
        et(se, {
          "enter-from-class": "tw-opacity-0 tw-translate-y-3",
          "enter-to-class": "tw-opacity-100 tw-translate-y-0",
          "enter-active-class": "tw-transform tw-transition tw-ease-out tw-duration-200",
          "leave-active-class": "tw-transform tw-transition tw-ease-in tw-duration-150",
          "leave-from-class": "tw-opacity-100 tw-translate-y-0",
          "leave-to-class": "tw-opacity-0 tw-translate-y-3"
        }, {
          default: _t(() => [
            et(H(Vr), {
              as: "div",
              class: "tw-relative tw-z-50"
            }, {
              default: _t(({ close: o }) => [
                P("div", {
                  class: Mt(["tw-absolute tw-z-50 tw-top-full sm:tw-mt-2.5", oe(b)])
                }, [
                  P("div", {
                    ref_key: "VtdRef",
                    ref: g,
                    class: "tw-fixed tw-inset-0 tw-z-50 tw-overflow-y-auto sm:tw-overflow-visible sm:tw-static sm:tw-z-auto tw-bg-white dark:tw-bg-vtd-secondary-800 sm:tw-rounded-lg tw-shadow-sm"
                  }, [
                    P("div", {
                      class: Mt(["vtd-datepicker tw-static sm:tw-relative tw-w-full tw-bg-white sm:tw-rounded-lg sm:tw-shadow-sm tw-border-0 sm:tw-border tw-border-black/[.1] tw-px-3 tw-py-3 sm:tw-px-4 sm:tw-py-4 dark:tw-bg-vtd-secondary-800 dark:tw-border-vtd-secondary-700/[1]", Bt(b)])
                    }, [
                      P("div", Ur, [
                        t.shortcuts ? (Z(), It(ae, {
                          key: 0,
                          shortcuts: t.shortcuts,
                          "as-range": O(),
                          "as-single": t.asSingle,
                          i18n: t.options.shortcuts,
                          close: o
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : mt("", !0),
                        P("div", zr, [
                          O() && !t.asSingle ? (Z(), J("div", Wr, Gr)) : mt("", !0),
                          P("div", {
                            class: Mt(["tw-relative tw-w-full md:tw-w-1/2 lg:tw-w-80", {
                              "tw-mb-3 sm:tw-mb-0 sm:tw-mr-2": O() && !t.asSingle
                            }])
                          }, [
                            et(Ut, {
                              panel: a.previous,
                              calendar: H(j).previous
                            }, null, 8, ["panel", "calendar"]),
                            P("div", Kr, [
                              lt(et(zt, {
                                months: H(L),
                                "onUpdate:month": H(j).previous.setMount
                              }, null, 8, ["months", "onUpdate:month"]), [
                                [ut, a.previous.month]
                              ]),
                              lt(et(Zt, {
                                years: H(j).previous.years(),
                                "onUpdate:year": H(j).previous.setYear
                              }, null, 8, ["years", "onUpdate:year"]), [
                                [ut, a.previous.year]
                              ]),
                              lt(P("div", null, [
                                et(Wt, { weeks: H(N) }, null, 8, ["weeks"]),
                                et(Gt, {
                                  calendar: H(j).previous,
                                  weeks: H(N),
                                  "as-range": O(),
                                  "onUpdate:date": (p, E) => K(p, E, o)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ut, a.previous.calendar]
                              ])
                            ])
                          ], 2),
                          O() && !t.asSingle ? (Z(), J("div", Jr, [
                            et(Ut, {
                              "as-prev-or-next": "",
                              panel: a.next,
                              calendar: H(j).next
                            }, null, 8, ["panel", "calendar"]),
                            P("div", qr, [
                              lt(et(zt, {
                                months: H(L),
                                "onUpdate:month": H(j).next.setMount
                              }, null, 8, ["months", "onUpdate:month"]), [
                                [ut, a.next.month]
                              ]),
                              lt(et(Zt, {
                                "as-prev-or-next": "",
                                years: H(j).next.years(),
                                "onUpdate:year": H(j).next.setYear
                              }, null, 8, ["years", "onUpdate:year"]), [
                                [ut, a.next.year]
                              ]),
                              lt(P("div", null, [
                                et(Wt, { weeks: H(N) }, null, 8, ["weeks"]),
                                et(Gt, {
                                  "as-prev-or-next": "",
                                  calendar: H(j).next,
                                  weeks: H(N),
                                  "as-range": O(),
                                  "onUpdate:date": (p, E) => K(p, E, o)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ut, a.next.calendar]
                              ])
                            ])
                          ])) : mt("", !0)
                        ])
                      ]),
                      t.autoApply ? (Z(), J("div", oo, [
                        P("div", ao, [
                          P("div", no, [
                            P("button", {
                              type: "button",
                              onClick: (p) => o(),
                              class: "away-cancel-picker tw-w-full tw-transition tw-ease-out tw-duration-300 tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-vtd-secondary-300 tw-shadow-sm tw-px-4 tw-py-2 tw-bg-white tw-text-base tw-font-medium tw-text-vtd-secondary-700 hover:tw-bg-vtd-secondary-50 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-vtd-primary-500 sm:tw-mt-0 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm dark:tw-ring-offset-vtd-secondary-800",
                              textContent: st(t.options.footer.cancel)
                            }, null, 8, so)
                          ])
                        ])
                      ])) : (Z(), J("div", Xr, [
                        P("div", Qr, [
                          P("div", to, [
                            P("button", {
                              type: "button",
                              class: "away-apply-picker tw-w-full tw-transition tw-ease-out tw-duration-300 tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-shadow-sm tw-px-4 tw-py-2 tw-bg-vtd-primary-600 tw-text-base tw-font-medium tw-text-white hover:tw-bg-vtd-primary-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-vtd-primary-500 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm dark:tw-ring-offset-vtd-secondary-800 disabled:tw-cursor-not-allowed",
                              disabled: t.asSingle ? D.value.length < 1 : D.value.length < 2,
                              onClick: (p) => X(o),
                              textContent: st(t.options.footer.apply)
                            }, null, 8, eo),
                            P("button", {
                              type: "button",
                              onClick: (p) => o(),
                              class: "tw-mt-3 away-cancel-picker tw-w-full tw-transition tw-ease-out tw-duration-300 tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-vtd-secondary-300 tw-shadow-sm tw-px-4 tw-py-2 tw-bg-white tw-text-base tw-font-medium tw-text-vtd-secondary-700 hover:tw-bg-vtd-secondary-50 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-vtd-primary-500 sm:tw-mt-0 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm dark:tw-ring-offset-vtd-secondary-800",
                              textContent: st(t.options.footer.cancel)
                            }, null, 8, ro)
                          ])
                        ])
                      ]))
                    ], 2)
                  ], 512)
                ], 2)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }));
  }
}, Se = /* @__PURE__ */ (() => {
  const e = ko;
  return e.install = (i) => {
    i.component("VueTailwindDatepicker", e);
  }, e;
})(), $o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Se
}, Symbol.toStringTag, { value: "Module" }));
Object.entries($o).forEach(([e, i]) => {
  e !== "default" && (Se[e] = i);
});
export {
  Se as c,
  l as d
};
