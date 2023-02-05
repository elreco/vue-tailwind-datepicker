import { openBlock as W, createElementBlock as K, createElementVNode as C, withDirectives as lt, vShow as ut, toDisplayString as nt, Fragment as $t, renderList as Ht, inject as ct, createVNode as tt, TransitionGroup as Se, withCtx as _t, normalizeClass as Mt, Transition as ne, unref as N, createCommentVNode as vt, withModifiers as jt, cloneVNode as De, h as Pt, provide as dt, ref as et, onMounted as Oe, watchEffect as bt, computed as ft, defineComponent as Yt, reactive as _e, nextTick as Et, onBeforeMount as Ve, watch as Pe, isProxy as Ce, createBlock as It, renderSlot as Ye, mergeProps as Te, vModelText as Ae } from "vue";
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
    return (a, t) => (W(), K("div", Le, [
      C("div", Be, [
        lt(C("span", Ee, [
          C("button", {
            type: "button",
            class: "tw-p-1.5 tw-rounded-full tw-bg-white tw-text-vtd-secondary-600 tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none dark:tw-bg-vtd-secondary-800 dark:tw-text-vtd-secondary-300 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-secondary-300 dark:focus:tw-bg-vtd-secondary-600 dark:focus:tw-text-vtd-secondary-100 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-25 dark:focus:tw-bg-opacity-50",
            onClick: t[0] || (t[0] = (i) => e.panel.calendar ? e.calendar.onPrevious() : e.calendar.onPreviousYear())
          }, [
            (W(), K("svg", Fe, [
              C("path", {
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
      C("div", He, [
        C("span", Re, [
          C("button", {
            type: "button",
            class: "tw-px-3 tw-py-1.5 tw-block tw-w-full tw-leading-relaxed tw-rounded-md tw-bg-white tw-text-xs 2xl:tw-text-sm tw-tracking-wide tw-text-vtd-secondary-600 tw-font-semibold sm:tw-font-medium tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none tw-uppercase dark:tw-bg-vtd-secondary-800 dark:tw-text-vtd-secondary-300 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-secondary-300 dark:focus:tw-bg-vtd-secondary-600 dark:focus:tw-text-vtd-secondary-100 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-25 dark:focus:tw-bg-opacity-50",
            textContent: nt(e.calendar.month),
            onClick: t[1] || (t[1] = (i) => e.calendar.openMonth())
          }, null, 8, Ie)
        ]),
        C("span", Ue, [
          C("button", {
            type: "button",
            class: "tw-px-3 tw-py-1.5 tw-block tw-w-full tw-leading-relaxed tw-rounded-md tw-bg-white tw-text-xs 2xl:tw-text-sm tw-tracking-wide tw-text-vtd-secondary-600 tw-font-semibold sm:tw-font-medium tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none tw-uppercase dark:tw-bg-vtd-secondary-800 dark:tw-text-vtd-secondary-300 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-secondary-300 dark:focus:tw-bg-vtd-secondary-600 dark:focus:tw-text-vtd-secondary-100 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-25 dark:focus:tw-bg-opacity-50",
            textContent: nt(e.calendar.year),
            onClick: t[2] || (t[2] = (i) => e.calendar.openYear())
          }, null, 8, ze)
        ])
      ]),
      C("div", We, [
        lt(C("span", Ze, [
          C("button", {
            type: "button",
            class: "tw-p-1.5 tw-rounded-full tw-bg-white tw-text-vtd-secondary-600 tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none dark:tw-bg-vtd-secondary-800 dark:tw-text-vtd-secondary-300 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-secondary-300 dark:focus:tw-bg-vtd-secondary-600 dark:focus:tw-text-vtd-secondary-100 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-25 dark:focus:tw-bg-opacity-50",
            onClick: t[3] || (t[3] = (i) => e.panel.calendar ? e.calendar.onNext() : e.calendar.onNextYear())
          }, [
            (W(), K("svg", Ge, [
              C("path", {
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
  setup(e, { emit: a }) {
    return (t, i) => (W(), K("div", Je, [
      (W(!0), K($t, null, Ht(e.months, (n, u) => (W(), K("div", {
        key: u,
        class: "tw-w-1/2 tw-px-0.5"
      }, [
        C("span", qe, [
          C("button", {
            type: "button",
            class: "tw-px-3 tw-py-2 tw-block tw-w-full tw-leading-6 tw-rounded-md tw-bg-white tw-text-xs 2xl:tw-text-sm tw-tracking-wide tw-text-vtd-secondary-600 tw-font-medium tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none tw-uppercase dark:tw-bg-vtd-secondary-800 dark:hover:tw-bg-vtd-secondary-700 dark:tw-text-vtd-secondary-300 dark:hover:tw-text-vtd-secondary-100 dark:focus:tw-bg-vtd-secondary-700",
            textContent: nt(n),
            onClick: (V) => a("update:month", u)
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
    return (a, t) => (W(), K("div", Qe, [
      (W(!0), K($t, null, Ht(e.weeks, (i, n) => (W(), K("div", {
        key: n,
        class: "tw-text-vtd-secondary-500 tw-text-xs 2xl:tw-text-sm tw-tracking-wide tw-font-medium tw-text-center tw-cursor-default dark:tw-text-vtd-secondary-400"
      }, [
        C("span", {
          textContent: nt(i)
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
  setup(e, { emit: a }) {
    return (t, i) => (W(), K("div", er, [
      (W(!0), K($t, null, Ht(e.years, (n, u) => (W(), K("div", {
        key: u,
        class: "tw-w-1/2 tw-px-0.5"
      }, [
        C("span", rr, [
          C("button", {
            type: "button",
            class: "tw-px-3 tw-py-2 tw-block tw-w-full tw-leading-6 tw-rounded-md tw-bg-white tw-text-xs 2xl:tw-text-sm tw-tracking-wide tw-text-vtd-secondary-600 tw-font-medium tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none tw-uppercase dark:tw-bg-vtd-secondary-800 dark:hover:tw-bg-vtd-secondary-700 dark:tw-text-vtd-secondary-300 dark:hover:tw-text-vtd-secondary-100 dark:focus:tw-bg-vtd-secondary-700",
            textContent: nt(n),
            onClick: (V) => a("update:year", n, e.asPrevOrNext)
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
  setup(e, { emit: a }) {
    const t = ct("isBetweenRange"), i = ct("betweenRangeClasses"), n = ct("datepickerClasses"), u = ct("atMouseOver");
    return (V, c) => (W(), K("div", ar, [
      tt(Se, {
        "enter-from-class": "tw-opacity-0",
        "enter-to-class": "tw-opacity-100",
        "enter-active-class": "tw-transition-opacity tw-ease-out tw-duration-300",
        "leave-active-class": "tw-transition-opacity tw-ease-in tw-duration-200",
        "leave-from-class": "tw-opacity-100",
        "leave-to-class": "tw-opacity-0"
      }, {
        default: _t(() => [
          (W(!0), K($t, null, Ht(e.calendar.date(), (f, k) => (W(), K("div", {
            key: k,
            class: Mt(["tw-relative", { "vtd-tooltip": e.asRange && f.duration() }]),
            "data-tooltip": `${f.duration()}`
          }, [
            tt(ne, {
              "enter-from-class": "tw-opacity-0",
              "enter-to-class": "tw-opacity-100",
              "enter-active-class": "tw-transition-opacity tw-ease-out tw-duration-200",
              "leave-active-class": "tw-transition-opacity tw-ease-in tw-duration-150",
              "leave-from-class": "tw-opacity-100",
              "leave-to-class": "tw-opacity-0"
            }, {
              default: _t(() => [
                N(t)(f) || f.hovered() ? (W(), K("span", {
                  key: 0,
                  class: Mt(["tw-absolute tw-bg-vtd-primary-100 tw-bg-opacity-60 dark:tw-bg-vtd-secondary-700 dark:tw-bg-opacity-50", N(i)(f)])
                }, null, 2)) : vt("", !0)
              ]),
              _: 2
            }, 1024),
            C("button", {
              type: "button",
              class: Mt(["vtd-datepicker-date tw-relative tw-w-[2.7rem] tw-h-[2.7rem] lg:tw-w-10 lg:tw-h-10 tw-flex tw-justify-center tw-items-center tw-text-xs 2xl:tw-text-sm", [N(n)(f), e.asRange ? "tw-transition-all" : "tw-transition-colors"]]),
              disabled: f.disabled || f.inRange(),
              onClick: (j) => a("update:date", f, e.asPrevOrNext),
              onMouseenter: (j) => N(u)(f),
              onFocusin: (j) => N(u)(f),
              textContent: nt(f.date()),
              "data-date": f.toDate()
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
}, oe = {
  __name: "Shortcut",
  props: {
    shortcuts: [Boolean, Function],
    close: Function,
    asRange: Boolean,
    asSingle: Boolean,
    i18n: Object
  },
  setup(e) {
    const a = e, t = ct("setToToday"), i = ct("setToYesterday"), n = ct("setToLastDay"), u = ct("setToThisMonth"), V = ct("setToLastMonth"), c = ct("setToCustomShortcut"), f = () => typeof a.shortcuts == "function" ? a.shortcuts() : !1;
    return (k, j) => a.asRange && a.asSingle || a.asRange && !a.asSingle ? (W(), K("div", lr, [
      f() ? (W(), K("ol", ir, [
        (W(!0), K($t, null, Ht(f(), (h, $) => (W(), K("li", { key: $ }, [
          C("a", {
            href: "#",
            class: "vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300",
            onClick: jt((L) => N(c)(h, e.close), ["prevent"]),
            textContent: nt(h.label)
          }, null, 8, ur)
        ]))), 128))
      ])) : (W(), K("ol", dr, [
        C("li", null, [
          C("a", {
            href: "#",
            class: "vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300",
            onClick: j[0] || (j[0] = jt((h) => N(t)(e.close), ["prevent"]))
          }, nt(a.i18n.today), 1)
        ]),
        C("li", null, [
          C("a", {
            href: "#",
            class: "vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300",
            onClick: j[1] || (j[1] = jt((h) => N(i)(e.close), ["prevent"]))
          }, nt(a.i18n.yesterday), 1)
        ]),
        C("li", null, [
          C("a", {
            href: "#",
            class: "vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300",
            onClick: j[2] || (j[2] = jt((h) => N(n)(7, e.close), ["prevent"]))
          }, nt(a.i18n.past(7)), 1)
        ]),
        C("li", null, [
          C("a", {
            href: "#",
            class: "vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300",
            onClick: j[3] || (j[3] = jt((h) => N(n)(30, e.close), ["prevent"]))
          }, nt(a.i18n.past(30)), 1)
        ]),
        C("li", null, [
          C("a", {
            href: "#",
            class: "vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300",
            onClick: j[4] || (j[4] = jt((h) => N(u)(e.close), ["prevent"]))
          }, nt(a.i18n.currentMonth), 1)
        ]),
        C("li", null, [
          C("a", {
            href: "#",
            class: "vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300",
            onClick: j[5] || (j[5] = jt((h) => N(V)(e.close), ["prevent"]))
          }, nt(a.i18n.pastMonth), 1)
        ])
      ]))
    ])) : vt("", !0);
  }
};
function kt(e, a, ...t) {
  if (e in a) {
    let n = a[e];
    return typeof n == "function" ? n(...t) : n;
  }
  let i = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(a).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(i, kt), i;
}
var Ft = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ft || {}), cr = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(cr || {});
function Tt({ visible: e = !0, features: a = 0, ourProps: t, theirProps: i, ...n }) {
  var u;
  let V = fr(i, t), c = Object.assign(n, { props: V });
  if (e || a & 2 && V.static)
    return Xt(c);
  if (a & 1) {
    let f = (u = V.unmount) == null || u ? 0 : 1;
    return kt(f, { [0]() {
      return null;
    }, [1]() {
      return Xt({ ...n, props: { ...V, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Xt(c);
}
function Xt({ props: e, attrs: a, slots: t, slot: i, name: n }) {
  var u;
  let { as: V, ...c } = le(e, ["unmount", "static"]), f = (u = t.default) == null ? void 0 : u.call(t, i), k = {};
  if (i) {
    let j = !1, h = [];
    for (let [$, L] of Object.entries(i))
      typeof L == "boolean" && (j = !0), L === !0 && h.push($);
    j && (k["data-headlessui-state"] = h.join(" "));
  }
  if (V === "template") {
    if (f = se(f), Object.keys(c).length > 0 || Object.keys(a).length > 0) {
      let [j, ...h] = f != null ? f : [];
      if (!wr(j) || h.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(a)).sort(($, L) => $.localeCompare(L)).map(($) => `  - ${$}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map(($) => `  - ${$}`).join(`
`)].join(`
`));
      return De(j, Object.assign({}, c, k));
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f;
  }
  return Pt(V, Object.assign({}, c, k), f);
}
function se(e) {
  return e.flatMap((a) => a.type === $t ? se(a.children) : [a]);
}
function fr(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let a = {}, t = {};
  for (let i of e)
    for (let n in i)
      n.startsWith("on") && typeof i[n] == "function" ? (t[n] != null || (t[n] = []), t[n].push(i[n])) : a[n] = i[n];
  if (a.disabled || a["aria-disabled"])
    return Object.assign(a, Object.fromEntries(Object.keys(t).map((i) => [i, void 0])));
  for (let i in t)
    Object.assign(a, { [i](n, ...u) {
      let V = t[i];
      for (let c of V) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        c(n, ...u);
      }
    } });
  return a;
}
function le(e, a = []) {
  let t = Object.assign({}, e);
  for (let i of a)
    i in t && delete t[i];
  return t;
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
  var a;
  return e == null || e.value == null ? null : (a = e.value.$el) != null ? a : e.value;
}
let ie = Symbol("Context");
var Nt = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Nt || {});
function ue() {
  return ct(ie, null);
}
function vr(e) {
  dt(ie, e);
}
function ae(e, a) {
  if (e)
    return e;
  let t = a != null ? a : "button";
  if (typeof t == "string" && t.toLowerCase() === "button")
    return "button";
}
function hr(e, a) {
  let t = et(ae(e.value.type, e.value.as));
  return Oe(() => {
    t.value = ae(e.value.type, e.value.as);
  }), bt(() => {
    var i;
    t.value || !U(a) || U(a) instanceof HTMLButtonElement && !((i = U(a)) != null && i.hasAttribute("type")) && (t.value = "button");
  }), t;
}
const Jt = typeof window > "u" || typeof document > "u";
function Rt(e) {
  if (Jt)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let a = U(e);
    if (a)
      return a.ownerDocument;
  }
  return document;
}
let te = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var St = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(St || {}), yr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(yr || {}), xr = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(xr || {});
function de(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(te));
}
var re = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(re || {});
function ce(e, a = 0) {
  var t;
  return e === ((t = Rt(e)) == null ? void 0 : t.body) ? !1 : kt(a, { [0]() {
    return e.matches(te);
  }, [1]() {
    let i = e;
    for (; i !== null; ) {
      if (i.matches(te))
        return !0;
      i = i.parentElement;
    }
    return !1;
  } });
}
let br = ["textarea", "input"].join(",");
function gr(e) {
  var a, t;
  return (t = (a = e == null ? void 0 : e.matches) == null ? void 0 : a.call(e, br)) != null ? t : !1;
}
function kr(e, a = (t) => t) {
  return e.slice().sort((t, i) => {
    let n = a(t), u = a(i);
    if (n === null || u === null)
      return 0;
    let V = n.compareDocumentPosition(u);
    return V & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : V & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Vt(e, a, t = !0, i = null) {
  var n;
  let u = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, V = Array.isArray(e) ? t ? kr(e) : e : de(e);
  i = i != null ? i : u.activeElement;
  let c = (() => {
    if (a & 5)
      return 1;
    if (a & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = (() => {
    if (a & 1)
      return 0;
    if (a & 2)
      return Math.max(0, V.indexOf(i)) - 1;
    if (a & 4)
      return Math.max(0, V.indexOf(i)) + 1;
    if (a & 8)
      return V.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), k = a & 32 ? { preventScroll: !0 } : {}, j = 0, h = V.length, $;
  do {
    if (j >= h || j + h <= 0)
      return 0;
    let L = f + j;
    if (a & 16)
      L = (L + h) % h;
    else {
      if (L < 0)
        return 3;
      if (L >= h)
        return 1;
    }
    $ = V[L], $ == null || $.focus(k), j += c;
  } while ($ !== u.activeElement);
  return a & 6 && gr($) && $.select(), $.hasAttribute("tabindex") || $.setAttribute("tabindex", "0"), 2;
}
function Qt(e, a, t) {
  Jt || bt((i) => {
    document.addEventListener(e, a, t), i(() => document.removeEventListener(e, a, t));
  });
}
function $r(e, a, t = ft(() => !0)) {
  function i(u, V) {
    if (!t.value || u.defaultPrevented)
      return;
    let c = V(u);
    if (c === null || !c.ownerDocument.documentElement.contains(c))
      return;
    let f = function k(j) {
      return typeof j == "function" ? k(j()) : Array.isArray(j) || j instanceof Set ? j : [j];
    }(e);
    for (let k of f) {
      if (k === null)
        continue;
      let j = k instanceof HTMLElement ? k : U(k);
      if (j != null && j.contains(c))
        return;
    }
    return !ce(c, re.Loose) && c.tabIndex !== -1 && u.preventDefault(), a(u, c);
  }
  let n = et(null);
  Qt("mousedown", (u) => {
    t.value && (n.value = u.target);
  }, !0), Qt("click", (u) => {
    !n.value || (i(u, () => n.value), n.value = null);
  }, !0), Qt("blur", (u) => i(u, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Kt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Kt || {});
let ee = Yt({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: a, attrs: t }) {
  return () => {
    let { features: i, ...n } = e, u = { "aria-hidden": (i & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(i & 4) === 4 && (i & 2) !== 2 && { display: "none" } } };
    return Tt({ ourProps: u, theirProps: n, slot: {}, attrs: t, slots: a, name: "Hidden" });
  };
} });
function jr(e, a, t) {
  Jt || bt((i) => {
    window.addEventListener(e, a, t), i(() => window.removeEventListener(e, a, t));
  });
}
var Dt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Dt || {});
function fe() {
  let e = et(0);
  return jr("keydown", (a) => {
    a.key === "Tab" && (e.value = a.shiftKey ? 1 : 0);
  }), e;
}
function Mr(e, a, t, i) {
  Jt || bt((n) => {
    e = e != null ? e : window, e.addEventListener(a, t, i), n(() => e.removeEventListener(a, t, i));
  });
}
var Sr = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Sr || {});
let we = Symbol("PopoverContext");
function qt(e) {
  let a = ct(we, null);
  if (a === null) {
    let t = new Error(`<${e} /> is missing a parent <${he.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, qt), t;
  }
  return a;
}
let pe = Symbol("PopoverGroupContext");
function me() {
  return ct(pe, null);
}
let ve = Symbol("PopoverPanelContext");
function Dr() {
  return ct(ve, null);
}
let he = Yt({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: a, attrs: t, expose: i }) {
  var n;
  let u = `headlessui-popover-button-${Ct()}`, V = `headlessui-popover-panel-${Ct()}`, c = et(null);
  i({ el: c, $el: c });
  let f = et(1), k = et(null), j = et(null), h = et(null), $ = et(null), L = ft(() => Rt(c)), G = ft(() => {
    if (!U(k) || !U($))
      return !1;
    for (let B of document.querySelectorAll("body > *"))
      if (Number(B == null ? void 0 : B.contains(U(k))) ^ Number(B == null ? void 0 : B.contains(U($))))
        return !0;
    return !1;
  }), D = { popoverState: f, buttonId: u, panelId: V, panel: $, button: k, isPortalled: G, beforePanelSentinel: j, afterPanelSentinel: h, togglePopover() {
    f.value = kt(f.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    f.value !== 1 && (f.value = 1);
  }, close(B) {
    D.closePopover();
    let l = (() => B ? B instanceof HTMLElement ? B : B.value instanceof HTMLElement ? U(B) : U(D.button) : U(D.button))();
    l == null || l.focus();
  } };
  dt(we, D), vr(ft(() => kt(f.value, { [0]: Nt.Open, [1]: Nt.Closed })));
  let y = { buttonId: u, panelId: V, close() {
    D.closePopover();
  } }, v = me(), g = v == null ? void 0 : v.registerPopover;
  function T() {
    var B, l, r, M;
    return (M = v == null ? void 0 : v.isFocusWithinPopoverGroup()) != null ? M : ((B = L.value) == null ? void 0 : B.activeElement) && (((l = U(k)) == null ? void 0 : l.contains(L.value.activeElement)) || ((r = U($)) == null ? void 0 : r.contains(L.value.activeElement)));
  }
  return bt(() => g == null ? void 0 : g(y)), Mr((n = L.value) == null ? void 0 : n.defaultView, "focus", (B) => {
    var l, r;
    f.value === 0 && (T() || !k || !$ || (l = U(D.beforePanelSentinel)) != null && l.contains(B.target) || (r = U(D.afterPanelSentinel)) != null && r.contains(B.target) || D.closePopover());
  }, !0), $r([k, $], (B, l) => {
    var r;
    D.closePopover(), ce(l, re.Loose) || (B.preventDefault(), (r = U(k)) == null || r.focus());
  }, ft(() => f.value === 0)), () => {
    let B = { open: f.value === 0, close: D.close };
    return Tt({ theirProps: e, ourProps: { ref: c }, slot: B, slots: a, attrs: t, name: "Popover" });
  };
} }), Or = Yt({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { attrs: a, slots: t, expose: i }) {
  let n = qt("PopoverButton"), u = ft(() => Rt(n.button));
  i({ el: n.button, $el: n.button });
  let V = me(), c = V == null ? void 0 : V.closeOthers, f = Dr(), k = f === null ? !1 : f === n.panelId, j = et(null), h = `headlessui-focus-sentinel-${Ct()}`;
  k || bt(() => {
    n.button.value = j.value;
  });
  let $ = hr(ft(() => ({ as: e.as, type: a.type })), j);
  function L(v) {
    var g, T, B, l, r;
    if (k) {
      if (n.popoverState.value === 1)
        return;
      switch (v.key) {
        case gt.Space:
        case gt.Enter:
          v.preventDefault(), (T = (g = v.target).click) == null || T.call(g), n.closePopover(), (B = U(n.button)) == null || B.focus();
          break;
      }
    } else
      switch (v.key) {
        case gt.Space:
        case gt.Enter:
          v.preventDefault(), v.stopPropagation(), n.popoverState.value === 1 && (c == null || c(n.buttonId)), n.togglePopover();
          break;
        case gt.Escape:
          if (n.popoverState.value !== 0)
            return c == null ? void 0 : c(n.buttonId);
          if (!U(n.button) || ((l = u.value) == null ? void 0 : l.activeElement) && !((r = U(n.button)) != null && r.contains(u.value.activeElement)))
            return;
          v.preventDefault(), v.stopPropagation(), n.closePopover();
          break;
      }
  }
  function G(v) {
    k || v.key === gt.Space && v.preventDefault();
  }
  function D(v) {
    var g, T;
    e.disabled || (k ? (n.closePopover(), (g = U(n.button)) == null || g.focus()) : (v.preventDefault(), v.stopPropagation(), n.popoverState.value === 1 && (c == null || c(n.buttonId)), n.togglePopover(), (T = U(n.button)) == null || T.focus()));
  }
  function y(v) {
    v.preventDefault(), v.stopPropagation();
  }
  return () => {
    let v = n.popoverState.value === 0, g = { open: v }, T = k ? { ref: j, type: $.value, onKeydown: L, onClick: D } : { ref: j, id: n.buttonId, type: $.value, "aria-expanded": e.disabled ? void 0 : n.popoverState.value === 0, "aria-controls": U(n.panel) ? n.panelId : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: L, onKeyup: G, onClick: D, onMousedown: y }, B = fe();
    function l() {
      let r = U(n.panel);
      if (!r)
        return;
      function M() {
        kt(B.value, { [Dt.Forwards]: () => Vt(r, St.First), [Dt.Backwards]: () => Vt(r, St.Last) });
      }
      M();
    }
    return Pt($t, [Tt({ ourProps: T, theirProps: { ...a, ...e }, slot: g, attrs: a, slots: t, name: "PopoverButton" }), v && !k && n.isPortalled.value && Pt(ee, { id: h, features: Kt.Focusable, as: "button", type: "button", onFocus: l })]);
  };
} }), _r = Yt({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: a, slots: t }) {
  let i = qt("PopoverOverlay"), n = `headlessui-popover-overlay-${Ct()}`, u = ue(), V = ft(() => u !== null ? u.value === Nt.Open : i.popoverState.value === 0);
  function c() {
    i.closePopover();
  }
  return () => {
    let f = { open: i.popoverState.value === 0 };
    return Tt({ ourProps: { id: n, "aria-hidden": !0, onClick: c }, theirProps: e, slot: f, attrs: a, slots: t, features: Ft.RenderStrategy | Ft.Static, visible: V.value, name: "PopoverOverlay" });
  };
} }), Vr = Yt({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 } }, inheritAttrs: !1, setup(e, { attrs: a, slots: t, expose: i }) {
  let { focus: n } = e, u = qt("PopoverPanel"), V = ft(() => Rt(u.panel)), c = `headlessui-focus-sentinel-before-${Ct()}`, f = `headlessui-focus-sentinel-after-${Ct()}`;
  i({ el: u.panel, $el: u.panel }), dt(ve, u.panelId), bt(() => {
    var y, v;
    if (!n || u.popoverState.value !== 0 || !u.panel)
      return;
    let g = (y = V.value) == null ? void 0 : y.activeElement;
    (v = U(u.panel)) != null && v.contains(g) || Vt(U(u.panel), St.First);
  });
  let k = ue(), j = ft(() => k !== null ? k.value === Nt.Open : u.popoverState.value === 0);
  function h(y) {
    var v, g;
    switch (y.key) {
      case gt.Escape:
        if (u.popoverState.value !== 0 || !U(u.panel) || V.value && !((v = U(u.panel)) != null && v.contains(V.value.activeElement)))
          return;
        y.preventDefault(), y.stopPropagation(), u.closePopover(), (g = U(u.button)) == null || g.focus();
        break;
    }
  }
  function $(y) {
    var v, g, T, B, l;
    let r = y.relatedTarget;
    !r || !U(u.panel) || (v = U(u.panel)) != null && v.contains(r) || (u.closePopover(), (((T = (g = U(u.beforePanelSentinel)) == null ? void 0 : g.contains) == null ? void 0 : T.call(g, r)) || ((l = (B = U(u.afterPanelSentinel)) == null ? void 0 : B.contains) == null ? void 0 : l.call(B, r))) && r.focus({ preventScroll: !0 }));
  }
  let L = fe();
  function G() {
    let y = U(u.panel);
    if (!y)
      return;
    function v() {
      kt(L.value, { [Dt.Forwards]: () => {
        Vt(y, St.Next);
      }, [Dt.Backwards]: () => {
        var g;
        (g = U(u.button)) == null || g.focus({ preventScroll: !0 });
      } });
    }
    v();
  }
  function D() {
    let y = U(u.panel);
    if (!y)
      return;
    function v() {
      kt(L.value, { [Dt.Forwards]: () => {
        var g, T;
        let B = U(u.button), l = U(u.panel);
        if (!B)
          return;
        let r = de(), M = r.indexOf(B), H = r.slice(0, M + 1), _ = [...r.slice(M + 1), ...H];
        for (let P of _.slice())
          if (((T = (g = P == null ? void 0 : P.id) == null ? void 0 : g.startsWith) == null ? void 0 : T.call(g, "headlessui-focus-sentinel-")) || (l == null ? void 0 : l.contains(P))) {
            let Z = _.indexOf(P);
            Z !== -1 && _.splice(Z, 1);
          }
        Vt(_, St.First, !1);
      }, [Dt.Backwards]: () => Vt(y, St.Previous) });
    }
    v();
  }
  return () => {
    let y = { open: u.popoverState.value === 0, close: u.close }, v = { ref: u.panel, id: u.panelId, onKeydown: h, onFocusout: n && u.popoverState.value === 0 ? $ : void 0, tabIndex: -1 };
    return Tt({ ourProps: v, theirProps: { ...a, ...le(e, ["focus"]) }, attrs: a, slot: y, slots: { ...t, default: (...g) => {
      var T;
      return [Pt($t, [j.value && u.isPortalled.value && Pt(ee, { id: c, ref: u.beforePanelSentinel, features: Kt.Focusable, as: "button", type: "button", onFocus: G }), (T = t.default) == null ? void 0 : T.call(t, ...g), j.value && u.isPortalled.value && Pt(ee, { id: f, ref: u.afterPanelSentinel, features: Kt.Focusable, as: "button", type: "button", onFocus: D })])];
    } }, features: Ft.RenderStrategy | Ft.Static, visible: j.value, name: "PopoverPanel" });
  };
} });
Yt({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: a, slots: t, expose: i }) {
  let n = et(null), u = et([]), V = ft(() => Rt(n));
  i({ el: n, $el: n });
  function c(h) {
    let $ = u.value.indexOf(h);
    $ !== -1 && u.value.splice($, 1);
  }
  function f(h) {
    return u.value.push(h), () => {
      c(h);
    };
  }
  function k() {
    var h;
    let $ = V.value;
    if (!$)
      return !1;
    let L = $.activeElement;
    return (h = U(n)) != null && h.contains(L) ? !0 : u.value.some((G) => {
      var D, y;
      return ((D = $.getElementById(G.buttonId)) == null ? void 0 : D.contains(L)) || ((y = $.getElementById(G.panelId)) == null ? void 0 : y.contains(L));
    });
  }
  function j(h) {
    for (let $ of u.value)
      $.buttonId !== h && $.close();
  }
  return dt(pe, { registerPopover: f, unregisterPopover: c, isFocusWithinPopoverGroup: k, closeOthers: j }), () => Tt({ ourProps: { ref: n }, theirProps: e, slot: {}, attrs: a, slots: t, name: "PopoverGroup" });
} });
var Ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ye = { exports: {} };
(function(e, a) {
  (function(t, i) {
    e.exports = i();
  })(Ot, function() {
    var t = 1e3, i = 6e4, n = 36e5, u = "millisecond", V = "second", c = "minute", f = "hour", k = "day", j = "week", h = "month", $ = "quarter", L = "year", G = "date", D = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(O) {
      var x = ["th", "st", "nd", "rd"], w = O % 100;
      return "[" + O + (x[(w - 20) % 10] || x[w] || x[0]) + "]";
    } }, T = function(O, x, w) {
      var E = String(O);
      return !E || E.length >= x ? O : "" + Array(x + 1 - E.length).join(w) + O;
    }, B = { s: T, z: function(O) {
      var x = -O.utcOffset(), w = Math.abs(x), E = Math.floor(w / 60), S = w % 60;
      return (x <= 0 ? "+" : "-") + T(E, 2, "0") + ":" + T(S, 2, "0");
    }, m: function O(x, w) {
      if (x.date() < w.date())
        return -O(w, x);
      var E = 12 * (w.year() - x.year()) + (w.month() - x.month()), S = x.clone().add(E, h), F = w - S < 0, A = x.clone().add(E + (F ? -1 : 1), h);
      return +(-(E + (w - S) / (F ? S - A : A - S)) || 0);
    }, a: function(O) {
      return O < 0 ? Math.ceil(O) || 0 : Math.floor(O);
    }, p: function(O) {
      return { M: h, y: L, w: j, d: k, D: G, h: f, m: c, s: V, ms: u, Q: $ }[O] || String(O || "").toLowerCase().replace(/s$/, "");
    }, u: function(O) {
      return O === void 0;
    } }, l = "en", r = {};
    r[l] = g;
    var M = function(O) {
      return O instanceof Z;
    }, H = function O(x, w, E) {
      var S;
      if (!x)
        return l;
      if (typeof x == "string") {
        var F = x.toLowerCase();
        r[F] && (S = F), w && (r[F] = w, S = F);
        var A = x.split("-");
        if (!S && A.length > 1)
          return O(A[0]);
      } else {
        var R = x.name;
        r[R] = x, S = R;
      }
      return !E && S && (l = S), S || !E && l;
    }, _ = function(O, x) {
      if (M(O))
        return O.clone();
      var w = typeof x == "object" ? x : {};
      return w.date = O, w.args = arguments, new Z(w);
    }, P = B;
    P.l = H, P.i = M, P.w = function(O, x) {
      return _(O, { locale: x.$L, utc: x.$u, x: x.$x, $offset: x.$offset });
    };
    var Z = function() {
      function O(w) {
        this.$L = H(w.locale, null, !0), this.parse(w);
      }
      var x = O.prototype;
      return x.parse = function(w) {
        this.$d = function(E) {
          var S = E.date, F = E.utc;
          if (S === null)
            return new Date(NaN);
          if (P.u(S))
            return new Date();
          if (S instanceof Date)
            return new Date(S);
          if (typeof S == "string" && !/Z$/i.test(S)) {
            var A = S.match(y);
            if (A) {
              var R = A[2] - 1 || 0, q = (A[7] || "0").substring(0, 3);
              return F ? new Date(Date.UTC(A[1], R, A[3] || 1, A[4] || 0, A[5] || 0, A[6] || 0, q)) : new Date(A[1], R, A[3] || 1, A[4] || 0, A[5] || 0, A[6] || 0, q);
            }
          }
          return new Date(S);
        }(w), this.$x = w.x || {}, this.init();
      }, x.init = function() {
        var w = this.$d;
        this.$y = w.getFullYear(), this.$M = w.getMonth(), this.$D = w.getDate(), this.$W = w.getDay(), this.$H = w.getHours(), this.$m = w.getMinutes(), this.$s = w.getSeconds(), this.$ms = w.getMilliseconds();
      }, x.$utils = function() {
        return P;
      }, x.isValid = function() {
        return this.$d.toString() !== D;
      }, x.isSame = function(w, E) {
        var S = _(w);
        return this.startOf(E) <= S && S <= this.endOf(E);
      }, x.isAfter = function(w, E) {
        return _(w) < this.startOf(E);
      }, x.isBefore = function(w, E) {
        return this.endOf(E) < _(w);
      }, x.$g = function(w, E, S) {
        return P.u(w) ? this[E] : this.set(S, w);
      }, x.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, x.valueOf = function() {
        return this.$d.getTime();
      }, x.startOf = function(w, E) {
        var S = this, F = !!P.u(E) || E, A = P.p(w), R = function(mt, ot) {
          var it = P.w(S.$u ? Date.UTC(S.$y, ot, mt) : new Date(S.$y, ot, mt), S);
          return F ? it : it.endOf(k);
        }, q = function(mt, ot) {
          return P.w(S.toDate()[mt].apply(S.toDate("s"), (F ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ot)), S);
        }, X = this.$W, rt = this.$M, pt = this.$D, wt = "set" + (this.$u ? "UTC" : "");
        switch (A) {
          case L:
            return F ? R(1, 0) : R(31, 11);
          case h:
            return F ? R(1, rt) : R(0, rt + 1);
          case j:
            var xt = this.$locale().weekStart || 0, st = (X < xt ? X + 7 : X) - xt;
            return R(F ? pt - st : pt + (6 - st), rt);
          case k:
          case G:
            return q(wt + "Hours", 0);
          case f:
            return q(wt + "Minutes", 1);
          case c:
            return q(wt + "Seconds", 2);
          case V:
            return q(wt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, x.endOf = function(w) {
        return this.startOf(w, !1);
      }, x.$set = function(w, E) {
        var S, F = P.p(w), A = "set" + (this.$u ? "UTC" : ""), R = (S = {}, S[k] = A + "Date", S[G] = A + "Date", S[h] = A + "Month", S[L] = A + "FullYear", S[f] = A + "Hours", S[c] = A + "Minutes", S[V] = A + "Seconds", S[u] = A + "Milliseconds", S)[F], q = F === k ? this.$D + (E - this.$W) : E;
        if (F === h || F === L) {
          var X = this.clone().set(G, 1);
          X.$d[R](q), X.init(), this.$d = X.set(G, Math.min(this.$D, X.daysInMonth())).$d;
        } else
          R && this.$d[R](q);
        return this.init(), this;
      }, x.set = function(w, E) {
        return this.clone().$set(w, E);
      }, x.get = function(w) {
        return this[P.p(w)]();
      }, x.add = function(w, E) {
        var S, F = this;
        w = Number(w);
        var A = P.p(E), R = function(rt) {
          var pt = _(F);
          return P.w(pt.date(pt.date() + Math.round(rt * w)), F);
        };
        if (A === h)
          return this.set(h, this.$M + w);
        if (A === L)
          return this.set(L, this.$y + w);
        if (A === k)
          return R(1);
        if (A === j)
          return R(7);
        var q = (S = {}, S[c] = i, S[f] = n, S[V] = t, S)[A] || 1, X = this.$d.getTime() + w * q;
        return P.w(X, this);
      }, x.subtract = function(w, E) {
        return this.add(-1 * w, E);
      }, x.format = function(w) {
        var E = this, S = this.$locale();
        if (!this.isValid())
          return S.invalidDate || D;
        var F = w || "YYYY-MM-DDTHH:mm:ssZ", A = P.z(this), R = this.$H, q = this.$m, X = this.$M, rt = S.weekdays, pt = S.months, wt = function(ot, it, ht, yt) {
          return ot && (ot[it] || ot(E, F)) || ht[it].slice(0, yt);
        }, xt = function(ot) {
          return P.s(R % 12 || 12, ot, "0");
        }, st = S.meridiem || function(ot, it, ht) {
          var yt = ot < 12 ? "AM" : "PM";
          return ht ? yt.toLowerCase() : yt;
        }, mt = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: X + 1, MM: P.s(X + 1, 2, "0"), MMM: wt(S.monthsShort, X, pt, 3), MMMM: wt(pt, X), D: this.$D, DD: P.s(this.$D, 2, "0"), d: String(this.$W), dd: wt(S.weekdaysMin, this.$W, rt, 2), ddd: wt(S.weekdaysShort, this.$W, rt, 3), dddd: rt[this.$W], H: String(R), HH: P.s(R, 2, "0"), h: xt(1), hh: xt(2), a: st(R, q, !0), A: st(R, q, !1), m: String(q), mm: P.s(q, 2, "0"), s: String(this.$s), ss: P.s(this.$s, 2, "0"), SSS: P.s(this.$ms, 3, "0"), Z: A };
        return F.replace(v, function(ot, it) {
          return it || mt[ot] || A.replace(":", "");
        });
      }, x.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, x.diff = function(w, E, S) {
        var F, A = P.p(E), R = _(w), q = (R.utcOffset() - this.utcOffset()) * i, X = this - R, rt = P.m(this, R);
        return rt = (F = {}, F[L] = rt / 12, F[h] = rt, F[$] = rt / 3, F[j] = (X - q) / 6048e5, F[k] = (X - q) / 864e5, F[f] = X / n, F[c] = X / i, F[V] = X / t, F)[A] || X, S ? rt : P.a(rt);
      }, x.daysInMonth = function() {
        return this.endOf(h).$D;
      }, x.$locale = function() {
        return r[this.$L];
      }, x.locale = function(w, E) {
        if (!w)
          return this.$L;
        var S = this.clone(), F = H(w, E, !0);
        return F && (S.$L = F), S;
      }, x.clone = function() {
        return P.w(this.$d, this);
      }, x.toDate = function() {
        return new Date(this.valueOf());
      }, x.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, x.toISOString = function() {
        return this.$d.toISOString();
      }, x.toString = function() {
        return this.$d.toUTCString();
      }, O;
    }(), J = Z.prototype;
    return _.prototype = J, [["$ms", u], ["$s", V], ["$m", c], ["$H", f], ["$W", k], ["$M", h], ["$y", L], ["$D", G]].forEach(function(O) {
      J[O[1]] = function(x) {
        return this.$g(x, O[0], O[1]);
      };
    }), _.extend = function(O, x) {
      return O.$i || (O(x, Z, _), O.$i = !0), _;
    }, _.locale = H, _.isDayjs = M, _.unix = function(O) {
      return _(1e3 * O);
    }, _.en = r[l], _.Ls = r, _.p = {}, _;
  });
})(ye);
const s = ye.exports;
var xe = { exports: {} };
(function(e, a) {
  (function(t, i) {
    e.exports = i();
  })(Ot, function() {
    return function(t, i, n) {
      var u = i.prototype, V = function(h) {
        return h && (h.indexOf ? h : h.s);
      }, c = function(h, $, L, G, D) {
        var y = h.name ? h : h.$locale(), v = V(y[$]), g = V(y[L]), T = v || g.map(function(l) {
          return l.slice(0, G);
        });
        if (!D)
          return T;
        var B = y.weekStart;
        return T.map(function(l, r) {
          return T[(r + (B || 0)) % 7];
        });
      }, f = function() {
        return n.Ls[n.locale()];
      }, k = function(h, $) {
        return h.formats[$] || function(L) {
          return L.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(G, D, y) {
            return D || y.slice(1);
          });
        }(h.formats[$.toUpperCase()]);
      }, j = function() {
        var h = this;
        return { months: function($) {
          return $ ? $.format("MMMM") : c(h, "months");
        }, monthsShort: function($) {
          return $ ? $.format("MMM") : c(h, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return h.$locale().weekStart || 0;
        }, weekdays: function($) {
          return $ ? $.format("dddd") : c(h, "weekdays");
        }, weekdaysMin: function($) {
          return $ ? $.format("dd") : c(h, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function($) {
          return $ ? $.format("ddd") : c(h, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function($) {
          return k(h.$locale(), $);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      u.localeData = function() {
        return j.bind(this)();
      }, n.localeData = function() {
        var h = f();
        return { firstDayOfWeek: function() {
          return h.weekStart || 0;
        }, weekdays: function() {
          return n.weekdays();
        }, weekdaysShort: function() {
          return n.weekdaysShort();
        }, weekdaysMin: function() {
          return n.weekdaysMin();
        }, months: function() {
          return n.months();
        }, monthsShort: function() {
          return n.monthsShort();
        }, longDateFormat: function($) {
          return k(h, $);
        }, meridiem: h.meridiem, ordinal: h.ordinal };
      }, n.months = function() {
        return c(f(), "months");
      }, n.monthsShort = function() {
        return c(f(), "monthsShort", "months", 3);
      }, n.weekdays = function(h) {
        return c(f(), "weekdays", null, null, h);
      }, n.weekdaysShort = function(h) {
        return c(f(), "weekdaysShort", "weekdays", 3, h);
      }, n.weekdaysMin = function(h) {
        return c(f(), "weekdaysMin", "weekdays", 2, h);
      };
    };
  });
})(xe);
const Pr = xe.exports;
var be = { exports: {} };
(function(e, a) {
  (function(t, i) {
    e.exports = i();
  })(Ot, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(i, n, u) {
      var V = n.prototype, c = V.format;
      u.en.formats = t, V.format = function(f) {
        f === void 0 && (f = "YYYY-MM-DDTHH:mm:ssZ");
        var k = this.$locale().formats, j = function(h, $) {
          return h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, G, D) {
            var y = D && D.toUpperCase();
            return G || $[D] || t[D] || $[y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(v, g, T) {
              return g || T.slice(1);
            });
          });
        }(f, k === void 0 ? {} : k);
        return c.call(this, j);
      };
    };
  });
})(be);
const Cr = be.exports;
var ge = { exports: {} };
(function(e, a) {
  (function(t, i) {
    e.exports = i();
  })(Ot, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, i = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d\d/, u = /\d\d?/, V = /\d*[^-_:/,()\s\d]+/, c = {}, f = function(D) {
      return (D = +D) + (D > 68 ? 1900 : 2e3);
    }, k = function(D) {
      return function(y) {
        this[D] = +y;
      };
    }, j = [/[+-]\d\d:?(\d\d)?|Z/, function(D) {
      (this.zone || (this.zone = {})).offset = function(y) {
        if (!y || y === "Z")
          return 0;
        var v = y.match(/([+-]|\d\d)/g), g = 60 * v[1] + (+v[2] || 0);
        return g === 0 ? 0 : v[0] === "+" ? -g : g;
      }(D);
    }], h = function(D) {
      var y = c[D];
      return y && (y.indexOf ? y : y.s.concat(y.f));
    }, $ = function(D, y) {
      var v, g = c.meridiem;
      if (g) {
        for (var T = 1; T <= 24; T += 1)
          if (D.indexOf(g(T, 0, y)) > -1) {
            v = T > 12;
            break;
          }
      } else
        v = D === (y ? "pm" : "PM");
      return v;
    }, L = { A: [V, function(D) {
      this.afternoon = $(D, !1);
    }], a: [V, function(D) {
      this.afternoon = $(D, !0);
    }], S: [/\d/, function(D) {
      this.milliseconds = 100 * +D;
    }], SS: [n, function(D) {
      this.milliseconds = 10 * +D;
    }], SSS: [/\d{3}/, function(D) {
      this.milliseconds = +D;
    }], s: [u, k("seconds")], ss: [u, k("seconds")], m: [u, k("minutes")], mm: [u, k("minutes")], H: [u, k("hours")], h: [u, k("hours")], HH: [u, k("hours")], hh: [u, k("hours")], D: [u, k("day")], DD: [n, k("day")], Do: [V, function(D) {
      var y = c.ordinal, v = D.match(/\d+/);
      if (this.day = v[0], y)
        for (var g = 1; g <= 31; g += 1)
          y(g).replace(/\[|\]/g, "") === D && (this.day = g);
    }], M: [u, k("month")], MM: [n, k("month")], MMM: [V, function(D) {
      var y = h("months"), v = (h("monthsShort") || y.map(function(g) {
        return g.slice(0, 3);
      })).indexOf(D) + 1;
      if (v < 1)
        throw new Error();
      this.month = v % 12 || v;
    }], MMMM: [V, function(D) {
      var y = h("months").indexOf(D) + 1;
      if (y < 1)
        throw new Error();
      this.month = y % 12 || y;
    }], Y: [/[+-]?\d+/, k("year")], YY: [n, function(D) {
      this.year = f(D);
    }], YYYY: [/\d{4}/, k("year")], Z: j, ZZ: j };
    function G(D) {
      var y, v;
      y = D, v = c && c.formats;
      for (var g = (D = y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(_, P, Z) {
        var J = Z && Z.toUpperCase();
        return P || v[Z] || t[Z] || v[J].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(O, x, w) {
          return x || w.slice(1);
        });
      })).match(i), T = g.length, B = 0; B < T; B += 1) {
        var l = g[B], r = L[l], M = r && r[0], H = r && r[1];
        g[B] = H ? { regex: M, parser: H } : l.replace(/^\[|\]$/g, "");
      }
      return function(_) {
        for (var P = {}, Z = 0, J = 0; Z < T; Z += 1) {
          var O = g[Z];
          if (typeof O == "string")
            J += O.length;
          else {
            var x = O.regex, w = O.parser, E = _.slice(J), S = x.exec(E)[0];
            w.call(P, S), _ = _.replace(S, "");
          }
        }
        return function(F) {
          var A = F.afternoon;
          if (A !== void 0) {
            var R = F.hours;
            A ? R < 12 && (F.hours += 12) : R === 12 && (F.hours = 0), delete F.afternoon;
          }
        }(P), P;
      };
    }
    return function(D, y, v) {
      v.p.customParseFormat = !0, D && D.parseTwoDigitYear && (f = D.parseTwoDigitYear);
      var g = y.prototype, T = g.parse;
      g.parse = function(B) {
        var l = B.date, r = B.utc, M = B.args;
        this.$u = r;
        var H = M[1];
        if (typeof H == "string") {
          var _ = M[2] === !0, P = M[3] === !0, Z = _ || P, J = M[2];
          P && (J = M[2]), c = this.$locale(), !_ && J && (c = v.Ls[J]), this.$d = function(E, S, F) {
            try {
              if (["x", "X"].indexOf(S) > -1)
                return new Date((S === "X" ? 1e3 : 1) * E);
              var A = G(S)(E), R = A.year, q = A.month, X = A.day, rt = A.hours, pt = A.minutes, wt = A.seconds, xt = A.milliseconds, st = A.zone, mt = new Date(), ot = X || (R || q ? 1 : mt.getDate()), it = R || mt.getFullYear(), ht = 0;
              R && !q || (ht = q > 0 ? q - 1 : mt.getMonth());
              var yt = rt || 0, At = pt || 0, Lt = wt || 0, Bt = xt || 0;
              return st ? new Date(Date.UTC(it, ht, ot, yt, At, Lt, Bt + 60 * st.offset * 1e3)) : F ? new Date(Date.UTC(it, ht, ot, yt, At, Lt, Bt)) : new Date(it, ht, ot, yt, At, Lt, Bt);
            } catch {
              return new Date("");
            }
          }(l, H, r), this.init(), J && J !== !0 && (this.$L = this.locale(J).$L), Z && l != this.format(H) && (this.$d = new Date("")), c = {};
        } else if (H instanceof Array)
          for (var O = H.length, x = 1; x <= O; x += 1) {
            M[1] = H[x - 1];
            var w = v.apply(this, M);
            if (w.isValid()) {
              this.$d = w.$d, this.$L = w.$L, this.init();
              break;
            }
            x === O && (this.$d = new Date(""));
          }
        else
          T.call(this, B);
      };
    };
  });
})(ge);
const Yr = ge.exports;
var ke = { exports: {} };
(function(e, a) {
  (function(t, i) {
    e.exports = i();
  })(Ot, function() {
    return function(t, i, n) {
      i.prototype.isToday = function() {
        var u = "YYYY-MM-DD", V = n();
        return this.format(u) === V.format(u);
      };
    };
  });
})(ke);
const Tr = ke.exports;
var $e = { exports: {} };
(function(e, a) {
  (function(t, i) {
    e.exports = i();
  })(Ot, function() {
    return function(t, i, n) {
      i.prototype.isBetween = function(u, V, c, f) {
        var k = n(u), j = n(V), h = (f = f || "()")[0] === "(", $ = f[1] === ")";
        return (h ? this.isAfter(k, c) : !this.isBefore(k, c)) && ($ ? this.isBefore(j, c) : !this.isAfter(j, c)) || (h ? this.isBefore(k, c) : !this.isAfter(k, c)) && ($ ? this.isAfter(j, c) : !this.isBefore(j, c));
      };
    };
  });
})($e);
const Ar = $e.exports;
var je = { exports: {} };
(function(e, a) {
  (function(t, i) {
    e.exports = i();
  })(Ot, function() {
    var t, i, n = 1e3, u = 6e4, V = 36e5, c = 864e5, f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, k = 31536e6, j = 2592e6, h = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, $ = { years: k, months: j, days: c, hours: V, minutes: u, seconds: n, milliseconds: 1, weeks: 6048e5 }, L = function(l) {
      return l instanceof B;
    }, G = function(l, r, M) {
      return new B(l, M, r.$l);
    }, D = function(l) {
      return i.p(l) + "s";
    }, y = function(l) {
      return l < 0;
    }, v = function(l) {
      return y(l) ? Math.ceil(l) : Math.floor(l);
    }, g = function(l) {
      return Math.abs(l);
    }, T = function(l, r) {
      return l ? y(l) ? { negative: !0, format: "" + g(l) + r } : { negative: !1, format: "" + l + r } : { negative: !1, format: "" };
    }, B = function() {
      function l(M, H, _) {
        var P = this;
        if (this.$d = {}, this.$l = _, M === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), H)
          return G(M * $[D(H)], this);
        if (typeof M == "number")
          return this.$ms = M, this.parseFromMilliseconds(), this;
        if (typeof M == "object")
          return Object.keys(M).forEach(function(O) {
            P.$d[D(O)] = M[O];
          }), this.calMilliseconds(), this;
        if (typeof M == "string") {
          var Z = M.match(h);
          if (Z) {
            var J = Z.slice(2).map(function(O) {
              return O != null ? Number(O) : 0;
            });
            return this.$d.years = J[0], this.$d.months = J[1], this.$d.weeks = J[2], this.$d.days = J[3], this.$d.hours = J[4], this.$d.minutes = J[5], this.$d.seconds = J[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var r = l.prototype;
      return r.calMilliseconds = function() {
        var M = this;
        this.$ms = Object.keys(this.$d).reduce(function(H, _) {
          return H + (M.$d[_] || 0) * $[_];
        }, 0);
      }, r.parseFromMilliseconds = function() {
        var M = this.$ms;
        this.$d.years = v(M / k), M %= k, this.$d.months = v(M / j), M %= j, this.$d.days = v(M / c), M %= c, this.$d.hours = v(M / V), M %= V, this.$d.minutes = v(M / u), M %= u, this.$d.seconds = v(M / n), M %= n, this.$d.milliseconds = M;
      }, r.toISOString = function() {
        var M = T(this.$d.years, "Y"), H = T(this.$d.months, "M"), _ = +this.$d.days || 0;
        this.$d.weeks && (_ += 7 * this.$d.weeks);
        var P = T(_, "D"), Z = T(this.$d.hours, "H"), J = T(this.$d.minutes, "M"), O = this.$d.seconds || 0;
        this.$d.milliseconds && (O += this.$d.milliseconds / 1e3);
        var x = T(O, "S"), w = M.negative || H.negative || P.negative || Z.negative || J.negative || x.negative, E = Z.format || J.format || x.format ? "T" : "", S = (w ? "-" : "") + "P" + M.format + H.format + P.format + E + Z.format + J.format + x.format;
        return S === "P" || S === "-P" ? "P0D" : S;
      }, r.toJSON = function() {
        return this.toISOString();
      }, r.format = function(M) {
        var H = M || "YYYY-MM-DDTHH:mm:ss", _ = { Y: this.$d.years, YY: i.s(this.$d.years, 2, "0"), YYYY: i.s(this.$d.years, 4, "0"), M: this.$d.months, MM: i.s(this.$d.months, 2, "0"), D: this.$d.days, DD: i.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: i.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: i.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: i.s(this.$d.seconds, 2, "0"), SSS: i.s(this.$d.milliseconds, 3, "0") };
        return H.replace(f, function(P, Z) {
          return Z || String(_[P]);
        });
      }, r.as = function(M) {
        return this.$ms / $[D(M)];
      }, r.get = function(M) {
        var H = this.$ms, _ = D(M);
        return _ === "milliseconds" ? H %= 1e3 : H = _ === "weeks" ? v(H / $[_]) : this.$d[_], H === 0 ? 0 : H;
      }, r.add = function(M, H, _) {
        var P;
        return P = H ? M * $[D(H)] : L(M) ? M.$ms : G(M, this).$ms, G(this.$ms + P * (_ ? -1 : 1), this);
      }, r.subtract = function(M, H) {
        return this.add(M, H, !0);
      }, r.locale = function(M) {
        var H = this.clone();
        return H.$l = M, H;
      }, r.clone = function() {
        return G(this.$ms, this);
      }, r.humanize = function(M) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!M);
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
      }, l;
    }();
    return function(l, r, M) {
      t = M, i = M().$utils(), M.duration = function(P, Z) {
        var J = M.locale();
        return G(P, { $l: J }, Z);
      }, M.isDuration = L;
      var H = r.prototype.add, _ = r.prototype.subtract;
      r.prototype.add = function(P, Z) {
        return L(P) && (P = P.asMilliseconds()), H.bind(this)(P, Z);
      }, r.prototype.subtract = function(P, Z) {
        return L(P) && (P = P.asMilliseconds()), _.bind(this)(P, Z);
      };
    };
  });
})(je);
const Lr = je.exports;
function Br() {
  const e = (c) => {
    const f = [], k = c.localeData().firstDayOfWeek();
    for (let j = 0; j <= c.date(0 - k).day(); j++)
      f.push(c.date(0).subtract(j, "day"));
    return f.sort((j, h) => j.date() - h.date());
  };
  return {
    usePreviousDate: e,
    useCurrentDate: (c) => Array.from(
      {
        length: c.daysInMonth()
      },
      (f, k) => c.date(k + 1)
    ),
    useNextDate: (c) => {
      const f = [];
      for (let k = 1; k <= 42 - (e(c).length + c.daysInMonth()); k++)
        f.push(c.date(k).month(c.month()).add(1, "month"));
      return f;
    },
    useDisableDate: (c, { disableDate: f }) => typeof f == "function" ? f(c.toDate()) : !1,
    useBetweenRange: (c, { previous: f, next: k }) => {
      let j;
      return f.isAfter(k, "date") ? j = "(]" : j = "[)", !!(c.isBetween(f, k, "date", j) && !c.off);
    },
    useToValueFromString: (c, { formatter: f }) => c.format(f.date),
    useToValueFromArray: ({ previous: c, next: f }, { formatter: k, separator: j }) => `${c.format(k.date)}${j}${f.format(k.date)}`
  };
}
function Er() {
  return {
    useVisibleViewport: (a) => {
      if (a) {
        const { right: t } = a.getBoundingClientRect(), i = window.innerWidth || document.documentElement.clientWidth;
        return t > i;
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
}, Zr = /* @__PURE__ */ C("div", { class: "tw-h-full tw-border-r tw-border-black/[.1] dark:tw-border-vtd-secondary-700/[1]" }, null, -1), Gr = [
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
}, wo = /* @__PURE__ */ C("div", { class: "tw-h-full tw-border-r tw-border-black/[.1] dark:tw-border-vtd-secondary-700/[1]" }, null, -1), po = [
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
  setup(e, { emit: a }) {
    const t = e, {
      useCurrentDate: i,
      useDisableDate: n,
      useBetweenRange: u,
      useNextDate: V,
      usePreviousDate: c,
      useToValueFromArray: f,
      useToValueFromString: k
    } = Br(), { useVisibleViewport: j } = Er();
    s.extend(Pr), s.extend(Cr), s.extend(Yr), s.extend(Tr), s.extend(Ar), s.extend(Lr);
    const h = et(null), $ = et(null), L = et(null), G = et(""), D = et(null), y = et(""), v = et([]), g = et([]), T = et(null), B = et(null), l = _e({
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
    }), r = et({
      previous: s(),
      next: s().add(1, "month"),
      year: {
        previous: s().year(),
        next: s().year()
      },
      weeks: s.weekdaysShort(),
      months: t.formatter.month === "MMM" ? s.monthsShort() : s.months()
    }), M = ft(() => r.value.weeks), H = ft(() => r.value.months), _ = ft(() => {
      const { previous: d, next: p, year: b } = N(r);
      return {
        previous: {
          date: () => c(d).concat(i(d)).concat(V(d)).map((o) => (o.today = o.isToday(), o.active = d.month() === o.month(), o.off = d.month() !== o.month(), o.sunday = o.day() === 0, o.disabled = n(o, t) && !E(o), o.inRange = () => {
            if (t.asSingle && !t.useRange)
              return d.month() !== o.month();
          }, o.hovered = () => w() && v.value.length > 1 ? (o.isBetween(v.value[0], v.value[1], "date", "()") || o.isBetween(v.value[1], v.value[0], "date", "(]")) && d.month() === o.month() : !1, o.duration = () => !1, o)),
          month: d && d.format(t.formatter.month),
          year: d && d.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (o, m) => b.previous + m
          ),
          onPrevious: () => {
            r.value.previous = d.subtract(1, "month"), a("click:prev", r.value.previous);
          },
          onNext: () => {
            r.value.previous = d.add(1, "month"), d.diff(p, "month") === -1 && (r.value.next = p.add(1, "month")), a("click:next", r.value.previous);
          },
          onPreviousYear: () => {
            r.value.year.previous = r.value.year.previous - 12;
          },
          onNextYear: () => {
            r.value.year.previous = r.value.year.previous + 12;
          },
          openMonth: () => {
            l.previous.month = !l.previous.month, l.previous.year = !1, l.previous.calendar = !l.previous.month;
          },
          setMount: (o) => {
            r.value.previous = d.month(o), l.previous.month = !l.previous.month, l.previous.year = !1, l.previous.calendar = !l.previous.month, a("select:month", r.value.previous), Et(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.next = r.value.next.year();
            });
          },
          openYear: () => {
            l.previous.year = !l.previous.year, l.previous.month = !1, l.previous.calendar = !l.previous.year;
          },
          setYear: (o, m) => {
            m || (r.value.previous = d.year(o), l.previous.year = !l.previous.year, l.previous.calendar = !l.previous.year, a("select:year", r.value.previous), Et(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            }));
          }
        },
        next: {
          date: () => c(p).concat(i(p)).concat(V(p)).map((o) => (o.today = o.isToday(), o.active = p.month() === o.month(), o.off = p.month() !== o.month(), o.sunday = o.day() === 0, o.disabled = n(o, t) && !E(o), o.inRange = () => {
            if (t.asSingle && !t.useRange)
              return p.month() !== o.month();
          }, o.hovered = () => v.value.length > 1 ? (o.isBetween(v.value[0], v.value[1], "date", "()") || o.isBetween(v.value[1], v.value[0], "date", "(]")) && p.month() === o.month() : !1, o.duration = () => !1, o)),
          month: p && p.format(t.formatter.month),
          year: p && p.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (o, m) => b.next + m
          ),
          onPrevious: () => {
            r.value.next = p.subtract(1, "month"), p.diff(d, "month") === 1 && (r.value.previous = d.subtract(1, "month")), a("click:right:prev", r.value.next);
          },
          onNext: () => {
            r.value.next = p.add(1, "month"), a("click:right:next", r.value.next);
          },
          onPreviousYear: () => {
            r.value.year.next = r.value.year.next - 12;
          },
          onNextYear: () => {
            r.value.year.next = r.value.year.next + 12;
          },
          openMonth: () => {
            l.next.month = !l.next.month, l.next.year = !1, l.next.calendar = !l.next.month;
          },
          setMount: (o) => {
            r.value.next = p.month(o), l.next.month = !l.next.month, l.next.year = !1, l.next.calendar = !l.next.month, a("select:right:month", r.value.next), Et(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(1, "month")), r.value.year.previous = r.value.previous.year();
            });
          },
          openYear: () => {
            l.next.year = !l.next.year, l.next.month = !1, l.next.calendar = !l.next.year;
          },
          setYear: (o, m) => {
            m && (r.value.next = p.year(o), l.next.year = !l.next.year, l.next.month = !1, l.next.calendar = !l.next.year, a("select:right:year", r.value.next), Et(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            }));
          }
        }
      };
    }), P = et(!1);
    setTimeout(() => {
      P.value = !0;
    }, 250);
    const Z = () => s().localeData().firstDayOfWeek(), J = (d) => {
      const p = [...d], b = p.shift();
      return [...p, b];
    }, O = () => Array.isArray(t.modelValue), x = () => typeof t.modelValue == "object", w = () => !t.useRange && !t.asSingle ? !0 : !t.useRange && t.asSingle ? !1 : t.useRange && !t.asSingle ? !0 : !!(t.useRange && t.asSingle), E = (d) => {
      if (t.disableInRange || y.value === "")
        return !1;
      let p, b;
      if (O()) {
        const [o, m] = t.modelValue;
        p = o, b = m;
      } else if (x()) {
        if (t.modelValue) {
          const [o, m] = Object.values(t.modelValue);
          p = o, b = m;
        }
      } else {
        const [o, m] = t.modelValue.split(t.separator);
        p = o, b = m;
      }
      return d.isBetween(s(p, t.formatter.date, !0), s(b, t.formatter.date, !0), "date", "[]");
    }, S = () => {
      T.value = null, B.value = null, v.value = [], D.value = null;
    }, F = () => {
      if (y.value = "", O())
        a("update:modelValue", []);
      else if (x()) {
        const d = {}, [p, b] = Object.keys(t.modelValue);
        d[p] = "", d[b] = "", a("update:modelValue", d);
      } else
        a("update:modelValue", "");
      g.value = [], $.value && $.value.focus();
    }, A = () => {
      if (w()) {
        const [d, p] = y.value.split(t.separator), [b, o] = [s(d, t.formatter.date, !0), s(p, t.formatter.date, !0)];
        if (b.isValid() && o.isValid())
          if (R(b), R(o), O())
            a("update:modelValue", [d, p]);
          else if (x()) {
            const m = {}, [Y, z] = Object.keys(t.modelValue);
            m[Y] = d, m[z] = p, a("update:modelValue", m);
          } else
            a(
              "update:modelValue",
              f(
                {
                  previous: b,
                  next: o
                },
                t
              )
            );
      } else {
        const d = s(y.value, t.formatter.date, !0);
        if (d.isValid())
          if (R(d), O())
            a("update:modelValue", [y.value]);
          else if (x()) {
            const p = {}, [b] = Object.keys(t.modelValue);
            p[b] = y.value, a("update:modelValue", p);
          } else
            a("update:modelValue", y.value);
      }
    }, R = (d, p, b) => {
      if (w())
        if (T.value)
          if (B.value = d, t.autoApply) {
            d.isBefore(T.value) ? y.value = f(
              {
                previous: d,
                next: T.value
              },
              t
            ) : y.value = f(
              {
                previous: T.value,
                next: d
              },
              t
            );
            const [o, m] = y.value.split(t.separator);
            if (O())
              a("update:modelValue", [
                s(o, t.formatter.date, !0).format(t.formatter.date),
                s(m, t.formatter.date, !0).format(t.formatter.date)
              ]);
            else if (x()) {
              const Y = {}, [z, at] = Object.keys(t.modelValue);
              Y[z] = o, Y[at] = m, a("update:modelValue", Y);
            } else
              a(
                "update:modelValue",
                f(
                  {
                    previous: s(o, t.formatter.date, !0),
                    next: s(m, t.formatter.date, !0)
                  },
                  t
                )
              );
            b && b(), g.value = [], s(o, t.formatter.date, !0).isSame(s(m, t.formatter.date, !0), "month") || (r.value.previous = s(o, t.formatter.date, !0), r.value.next = s(m, t.formatter.date, !0)), S();
          } else {
            T.value.isAfter(d, "month") ? g.value = [d, T.value] : g.value = [T.value, d];
            const [o, m] = g.value;
            o.isSame(m, "month") || (r.value.previous = o, r.value.next = m), S();
          }
        else
          g.value = [], T.value = d, D.value = d, v.value.push(d), g.value.push(d), p ? (r.value.next = d, r.value.previous.isSame(d, "month") && (r.value.next = d.add(1, "month"))) : (r.value.previous = d, r.value.next.isSame(d, "month") && (r.value.previous = r.value.next, r.value.next = d.add(1, "month")));
      else if (t.autoApply) {
        if (y.value = k(d, t), O())
          a("update:modelValue", [y.value]);
        else if (x()) {
          const o = {}, [m] = Object.keys(t.modelValue);
          o[m] = y.value, a("update:modelValue", o);
        } else
          a("update:modelValue", y.value);
        b && b(), g.value = [], S();
      } else
        g.value = [d], S();
    };
    Ve(() => {
      t.modelValue[0] && t.modelValue[1] && (R(s(t.modelValue[0]), !1), R(s(t.modelValue[1]), !1));
    });
    const q = (d) => {
      if (g.value.length < 1)
        return !1;
      let p;
      if (w()) {
        const [b, o] = g.value;
        o.isBefore(b) ? p = f(
          {
            previous: o,
            next: b
          },
          t
        ) : p = f(
          {
            previous: b,
            next: o
          },
          t
        );
      } else {
        const [b] = g.value;
        p = b;
      }
      if (w()) {
        const [b, o] = p.split(t.separator);
        if (O())
          a("update:modelValue", [
            s(b, t.formatter.date, !0).format(t.formatter.date),
            s(o, t.formatter.date, !0).format(t.formatter.date)
          ]);
        else if (x()) {
          const m = {}, [Y, z] = Object.keys(t.modelValue);
          m[Y] = b, m[z] = o, a("update:modelValue", m);
        } else
          a(
            "update:modelValue",
            f(
              {
                previous: s(b, t.formatter.date, !0),
                next: s(o, t.formatter.date, !0)
              },
              t
            )
          );
        y.value = p;
      } else if (y.value = p.format(t.formatter.date), O())
        a("update:modelValue", [y.value]);
      else if (x()) {
        const b = {}, [o] = Object.keys(t.modelValue);
        b[o] = y.value, a("update:modelValue", b);
      } else
        a("update:modelValue", y.value);
      d && d();
    }, X = (d) => {
      if (!w())
        return !1;
      if (T.value)
        v.value = [T.value, d];
      else
        return v.value = [], !1;
    }, rt = (d) => {
      if (T.value && t.autoApply)
        return !1;
      let p, b;
      if (v.value.length > 1) {
        const [o, m] = v.value;
        p = s(o, t.formatter.date, !0), b = s(m, t.formatter.date, !0);
      } else if (O())
        if (t.autoApply) {
          const [o, m] = t.modelValue;
          p = o && s(o, t.formatter.date, !0), b = m && s(m, t.formatter.date, !0);
        } else {
          const [o, m] = g.value;
          p = s(o, t.formatter.date, !0), b = s(m, t.formatter.date, !0);
        }
      else if (x())
        if (t.autoApply) {
          if (t.modelValue) {
            const [o, m] = Object.values(t.modelValue);
            p = o && s(o, t.formatter.date, !0), b = m && s(m, t.formatter.date, !0);
          }
        } else {
          const [o, m] = g.value;
          p = s(o, t.formatter.date, !0), b = s(m, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        const [o, m] = t.modelValue ? t.modelValue.split(t.separator) : [!1, !1];
        p = o && s(o, t.formatter.date, !0), b = m && s(m, t.formatter.date, !0);
      } else {
        const [o, m] = g.value;
        p = s(o, t.formatter.date, !0), b = s(m, t.formatter.date, !0);
      }
      return p && b ? u(d, {
        previous: p,
        next: b
      }) : !1;
    }, pt = (d) => {
      const { today: p, active: b, off: o, disabled: m } = d;
      let Y, z, at;
      if (w())
        if (O())
          if (D.value) {
            const [I, Q] = v.value;
            z = I && s(I, t.formatter.date, !0), at = Q && s(Q, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [I, Q] = t.modelValue;
            z = I && s(I, t.formatter.date, !0), at = Q && s(Q, t.formatter.date, !0);
          } else {
            const [I, Q] = g.value;
            z = I && s(I, t.formatter.date, !0), at = Q && s(Q, t.formatter.date, !0);
          }
        else if (x())
          if (D.value) {
            const [I, Q] = v.value;
            z = I && s(I, t.formatter.date, !0), at = Q && s(Q, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [I, Q] = t.modelValue ? Object.values(t.modelValue) : [!1, !1];
            z = I && s(I, t.formatter.date, !0), at = Q && s(Q, t.formatter.date, !0);
          } else {
            const [I, Q] = g.value;
            z = I && s(I, t.formatter.date, !0), at = Q && s(Q, t.formatter.date, !0);
          }
        else if (D.value) {
          const [I, Q] = v.value;
          z = I && s(I, t.formatter.date, !0), at = Q && s(Q, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [I, Q] = t.modelValue ? t.modelValue.split(t.separator) : [!1, !1];
          z = I && s(I, t.formatter.date, !0), at = Q && s(Q, t.formatter.date, !0);
        } else {
          const [I, Q] = g.value;
          z = I && s(I, t.formatter.date, !0), at = Q && s(Q, t.formatter.date, !0);
        }
      else if (O())
        if (t.autoApply) {
          if (t.modelValue.length > 0) {
            const [I] = t.modelValue;
            z = s(I, t.formatter.date, !0);
          }
        } else {
          const [I] = g.value;
          z = I && s(I, t.formatter.date, !0);
        }
      else if (x())
        if (t.autoApply) {
          if (t.modelValue) {
            const [I] = Object.values(t.modelValue);
            z = s(I, t.formatter.date, !0);
          }
        } else {
          const [I] = g.value;
          z = I && s(I, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        if (t.modelValue) {
          const [I] = t.modelValue.split(t.separator);
          z = s(I, t.formatter.date, !0);
        }
      } else {
        const [I] = g.value;
        z = I && s(I, t.formatter.date, !0);
      }
      return b && (Y = p ? "tw-text-vtd-primary-500 tw-font-semibold dark:tw-text-vtd-primary-400 tw-rounded-full focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 tw-focus:ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none dark:tw-bg-vtd-secondary-800 dark:tw-text-vtd-secondary-300 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-secondary-300 dark:focus:tw-bg-vtd-secondary-600 dark:focus:tw-text-vtd-secondary-100 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-25 dark:focus:tw-bg-opacity-50" : m ? "tw-text-vtd-secondary-600 tw-font-normal disabled:tw-text-vtd-secondary-500 disabled:tw-cursor-not-allowed tw-rounded-full" : d.isBetween(z, at, "date", "()") ? "tw-text-vtd-secondary-700 tw-font-medium dark:tw-text-vtd-secondary-100 tw-rounded-full" : "tw-text-vtd-secondary-600 tw-font-medium dark:tw-text-vtd-secondary-200 tw-rounded-full"), o && (Y = "tw-text-vtd-secondary-400 tw-font-light disabled:tw-cursor-not-allowed"), z && at && !o ? (d.isSame(z, "date") && (Y = at.isAfter(z, "date") ? "tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-l-full disabled:tw-cursor-not-allowed" : "tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-r-full disabled:tw-cursor-not-allowed", z.isSame(at, "date") && (Y = "tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-full disabled:tw-cursor-not-allowed")), d.isSame(at, "date") && (Y = at.isAfter(z, "date") ? "tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-r-full disabled:tw-cursor-not-allowed" : "tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-l-full disabled:tw-cursor-not-allowed", z.isSame(at, "date") && (Y = "tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-full disabled:tw-cursor-not-allowed"))) : z && d.isSame(z, "date") && !o && (Y = "tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-full disabled:tw-cursor-not-allowed"), Y;
    }, wt = (d) => {
      let p, b, o;
      if (p = "", !w())
        return p;
      if (O())
        if (v.value.length > 1) {
          const [m, Y] = v.value;
          b = m && s(m, t.formatter.date, !0), o = Y && s(Y, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [m, Y] = t.modelValue;
          b = m && s(m, t.formatter.date, !0), o = Y && s(Y, t.formatter.date, !0);
        } else {
          const [m, Y] = g.value;
          b = m && s(m, t.formatter.date, !0), o = Y && s(Y, t.formatter.date, !0);
        }
      else if (x())
        if (v.value.length > 1) {
          const [m, Y] = v.value;
          b = m && s(m, t.formatter.date, !0), o = Y && s(Y, t.formatter.date, !0);
        } else if (t.autoApply) {
          if (t.modelValue) {
            const [m, Y] = Object.values(t.modelValue);
            b = m && s(m, t.formatter.date, !0), o = Y && s(Y, t.formatter.date, !0);
          }
        } else {
          const [m, Y] = g.value;
          b = m && s(m, t.formatter.date, !0), o = Y && s(Y, t.formatter.date, !0);
        }
      else if (v.value.length > 1) {
        const [m, Y] = v.value;
        b = m && s(m, t.formatter.date, !0), o = Y && s(Y, t.formatter.date, !0);
      } else if (t.autoApply) {
        const [m, Y] = t.modelValue ? t.modelValue.split(t.separator) : [!1, !1];
        b = m && s(m, t.formatter.date, !0), o = Y && s(Y, t.formatter.date, !0);
      } else {
        const [m, Y] = g.value;
        b = m && s(m, t.formatter.date, !0), o = Y && s(Y, t.formatter.date, !0);
      }
      return b && o && (d.isSame(b, "date") ? (o.isBefore(b) && (p += " tw-rounded-r-full tw-inset-0"), b.isBefore(o) && (p += " tw-rounded-l-full tw-inset-0")) : d.isSame(o, "date") ? (o.isBefore(b) && (p += " tw-rounded-l-full tw-inset-0"), b.isBefore(o) && (p += " tw-rounded-r-full tw-inset-0")) : p += " tw-inset-0"), p;
    }, xt = (d, p) => {
      r.value.previous = s(d, t.formatter.date, !0), r.value.next = s(p, t.formatter.date, !0), (s.duration(r.value.next.diff(r.value.previous)).$d.months === 2 || s.duration(r.value.next.diff(r.value.previous)).$d.months === 1 && s.duration(r.value.next.diff(r.value.previous)).$d.days === 7) && (r.value.next = r.value.next.subtract(1, "month")), (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month"));
    }, st = (d, p) => {
      if (w())
        if (t.autoApply) {
          if (O())
            a("update:modelValue", [d, p]);
          else if (x()) {
            const b = {}, [o, m] = Object.keys(t.modelValue);
            b[o] = d, b[m] = p, a("update:modelValue", b);
          } else
            a(
              "update:modelValue",
              f(
                {
                  previous: s(d, t.formatter.date, !0),
                  next: s(p, t.formatter.date, !0)
                },
                t
              )
            );
          y.value = `${d}${t.separator}${p}`;
        } else
          g.value = [s(d, t.formatter.date, !0), s(p, t.formatter.date, !0)];
      else if (t.autoApply) {
        if (O())
          a("update:modelValue", [d]);
        else if (x()) {
          const b = {}, [o] = Object.keys(t.modelValue);
          b[o] = d, a("update:modelValue", b);
        } else
          a("update:modelValue", d);
        y.value = d;
      } else
        g.value = [s(d, t.formatter.date, !0), s(p, t.formatter.date, !0)];
      xt(d, p);
    }, mt = (d) => {
      const p = s().format(t.formatter.date), b = s().format(t.formatter.date);
      st(p, b), d && d();
    }, ot = (d) => {
      const p = s().subtract(1, "day").format(t.formatter.date), b = s().subtract(1, "day").format(t.formatter.date);
      st(p, b), d && d();
    }, it = (d, p) => {
      const b = s().subtract(d - 1, "day").format(t.formatter.date), o = s().format(t.formatter.date);
      st(b, o), p && p();
    }, ht = (d) => {
      const p = s().date(1).format(t.formatter.date), b = s().date(s().daysInMonth()).format(t.formatter.date);
      st(p, b), d && d();
    }, yt = (d) => {
      const p = s().date(1).subtract(1, "month").format(t.formatter.date), b = s().date(0).format(t.formatter.date);
      st(p, b), d && d();
    }, At = (d, p) => {
      let b, o;
      const [m, Y] = d.atClick();
      b = s(m).format(t.formatter.date), o = s(Y).format(t.formatter.date), st(b, o), p && p();
    };
    Pe(
      () => g.value,
      (d) => {
        d.length > 0 && (l.previous.calendar = !0, l.previous.month = !1, l.previous.year = !1, l.next.calendar = !0, l.next.month = !1, l.next.year = !1);
      }
    ), bt(() => {
      t.placeholder ? G.value = t.placeholder : w() ? G.value = `${t.formatter.date}${t.separator}${t.formatter.date}` : G.value = t.formatter.date;
    }), bt(() => {
      const d = t.i18n;
      Et(() => {
        const p = /* @__PURE__ */ Object.assign({ "./locale/af.js": () => import("./af.c8330aea.mjs"), "./locale/am.js": () => import("./am.0eedbf65.mjs"), "./locale/ar-dz.js": () => import("./ar-dz.e76a9821.mjs"), "./locale/ar-iq.js": () => import("./ar-iq.6d9bbac1.mjs"), "./locale/ar-kw.js": () => import("./ar-kw.96ac1f36.mjs"), "./locale/ar-ly.js": () => import("./ar-ly.1491db0c.mjs"), "./locale/ar-ma.js": () => import("./ar-ma.2c4a27e4.mjs"), "./locale/ar-sa.js": () => import("./ar-sa.8f9c5ef0.mjs"), "./locale/ar-tn.js": () => import("./ar-tn.21cd20c5.mjs"), "./locale/ar.js": () => import("./ar.044892c8.mjs"), "./locale/az.js": () => import("./az.58559a90.mjs"), "./locale/be.js": () => import("./be.b80cfaf2.mjs"), "./locale/bg.js": () => import("./bg.18c90c7b.mjs"), "./locale/bi.js": () => import("./bi.d4ffacf7.mjs"), "./locale/bm.js": () => import("./bm.8e0639aa.mjs"), "./locale/bn-bd.js": () => import("./bn-bd.16932671.mjs"), "./locale/bn.js": () => import("./bn.145bd5ae.mjs"), "./locale/bo.js": () => import("./bo.93ca206d.mjs"), "./locale/br.js": () => import("./br.a22e599f.mjs"), "./locale/bs.js": () => import("./bs.a0490d77.mjs"), "./locale/ca.js": () => import("./ca.a9da2fab.mjs"), "./locale/cs.js": () => import("./cs.c908c69f.mjs"), "./locale/cv.js": () => import("./cv.b37ec429.mjs"), "./locale/cy.js": () => import("./cy.2e84144c.mjs"), "./locale/da.js": () => import("./da.3f561b2d.mjs"), "./locale/de-at.js": () => import("./de-at.ca2e5cb0.mjs"), "./locale/de-ch.js": () => import("./de-ch.649e30f1.mjs"), "./locale/de.js": () => import("./de.1f4b20c0.mjs"), "./locale/dv.js": () => import("./dv.8ff88600.mjs"), "./locale/el.js": () => import("./el.3a5ef639.mjs"), "./locale/en-au.js": () => import("./en-au.6ebda97c.mjs"), "./locale/en-ca.js": () => import("./en-ca.8205b5e4.mjs"), "./locale/en-gb.js": () => import("./en-gb.a2c3f24e.mjs"), "./locale/en-ie.js": () => import("./en-ie.2d083a97.mjs"), "./locale/en-il.js": () => import("./en-il.e221e1e7.mjs"), "./locale/en-in.js": () => import("./en-in.b0e67ea7.mjs"), "./locale/en-nz.js": () => import("./en-nz.7f7da345.mjs"), "./locale/en-sg.js": () => import("./en-sg.17cf6ae0.mjs"), "./locale/en-tt.js": () => import("./en-tt.27d7b79c.mjs"), "./locale/en.js": () => import("./en.c289298e.mjs"), "./locale/eo.js": () => import("./eo.16e57266.mjs"), "./locale/es-do.js": () => import("./es-do.f57cbd6f.mjs"), "./locale/es-mx.js": () => import("./es-mx.3853c3d7.mjs"), "./locale/es-pr.js": () => import("./es-pr.6de05d0b.mjs"), "./locale/es-us.js": () => import("./es-us.648d1050.mjs"), "./locale/es.js": () => import("./es.0d695f5b.mjs"), "./locale/et.js": () => import("./et.96a608ba.mjs"), "./locale/eu.js": () => import("./eu.422165e3.mjs"), "./locale/fa.js": () => import("./fa.2a9ee128.mjs"), "./locale/fi.js": () => import("./fi.69f974bd.mjs"), "./locale/fo.js": () => import("./fo.cdf891bb.mjs"), "./locale/fr-ca.js": () => import("./fr-ca.b96fea17.mjs"), "./locale/fr-ch.js": () => import("./fr-ch.5d7e41f4.mjs"), "./locale/fr.js": () => import("./fr.3eb08c2c.mjs"), "./locale/fy.js": () => import("./fy.4a8c8dba.mjs"), "./locale/ga.js": () => import("./ga.da7cdf43.mjs"), "./locale/gd.js": () => import("./gd.b7e7f0d6.mjs"), "./locale/gl.js": () => import("./gl.63d83018.mjs"), "./locale/gom-latn.js": () => import("./gom-latn.9bf8fca2.mjs"), "./locale/gu.js": () => import("./gu.67de704b.mjs"), "./locale/he.js": () => import("./he.3cdcc50f.mjs"), "./locale/hi.js": () => import("./hi.2019bf41.mjs"), "./locale/hr.js": () => import("./hr.305e7aee.mjs"), "./locale/ht.js": () => import("./ht.25289ec5.mjs"), "./locale/hu.js": () => import("./hu.fa9c0bdc.mjs"), "./locale/hy-am.js": () => import("./hy-am.3a5f5eea.mjs"), "./locale/id.js": () => import("./id.c77c85df.mjs"), "./locale/is.js": () => import("./is.87cbacb2.mjs"), "./locale/it-ch.js": () => import("./it-ch.3a6e868e.mjs"), "./locale/it.js": () => import("./it.c90f947b.mjs"), "./locale/ja.js": () => import("./ja.b04fb7a9.mjs"), "./locale/jv.js": () => import("./jv.5cc43a03.mjs"), "./locale/ka.js": () => import("./ka.2012bf0a.mjs"), "./locale/kk.js": () => import("./kk.f2bb1f08.mjs"), "./locale/km.js": () => import("./km.e31dc488.mjs"), "./locale/kn.js": () => import("./kn.a1f1a304.mjs"), "./locale/ko.js": () => import("./ko.ad0d8c65.mjs"), "./locale/ku.js": () => import("./ku.e68d45dd.mjs"), "./locale/ky.js": () => import("./ky.c3811743.mjs"), "./locale/lb.js": () => import("./lb.a5b26f45.mjs"), "./locale/lo.js": () => import("./lo.3acb1c8e.mjs"), "./locale/lt.js": () => import("./lt.d5993860.mjs"), "./locale/lv.js": () => import("./lv.e69d41b2.mjs"), "./locale/me.js": () => import("./me.8548cfa8.mjs"), "./locale/mi.js": () => import("./mi.7729cbd8.mjs"), "./locale/mk.js": () => import("./mk.62380d88.mjs"), "./locale/ml.js": () => import("./ml.685ae2d8.mjs"), "./locale/mn.js": () => import("./mn.402b149d.mjs"), "./locale/mr.js": () => import("./mr.216ae2e2.mjs"), "./locale/ms-my.js": () => import("./ms-my.ed2fe779.mjs"), "./locale/ms.js": () => import("./ms.42ccfdbf.mjs"), "./locale/mt.js": () => import("./mt.db83c6a2.mjs"), "./locale/my.js": () => import("./my.4b674f9a.mjs"), "./locale/nb.js": () => import("./nb.c81f671e.mjs"), "./locale/ne.js": () => import("./ne.62744567.mjs"), "./locale/nl-be.js": () => import("./nl-be.662e0189.mjs"), "./locale/nl.js": () => import("./nl.adb70569.mjs"), "./locale/nn.js": () => import("./nn.b4df4b69.mjs"), "./locale/oc-lnc.js": () => import("./oc-lnc.81eaa8e7.mjs"), "./locale/pa-in.js": () => import("./pa-in.092d4b36.mjs"), "./locale/pl.js": () => import("./pl.c962b38f.mjs"), "./locale/pt-br.js": () => import("./pt-br.7f53b920.mjs"), "./locale/pt.js": () => import("./pt.9b1e5fb8.mjs"), "./locale/rn.js": () => import("./rn.391e62e1.mjs"), "./locale/ro.js": () => import("./ro.f7a62ec2.mjs"), "./locale/ru.js": () => import("./ru.83841c9e.mjs"), "./locale/rw.js": () => import("./rw.702b19bc.mjs"), "./locale/sd.js": () => import("./sd.2a0a52f9.mjs"), "./locale/se.js": () => import("./se.9262bc62.mjs"), "./locale/si.js": () => import("./si.643781cc.mjs"), "./locale/sk.js": () => import("./sk.0bb69342.mjs"), "./locale/sl.js": () => import("./sl.7c21247d.mjs"), "./locale/sq.js": () => import("./sq.b0ef4b13.mjs"), "./locale/sr-cyrl.js": () => import("./sr-cyrl.2cd1b7c0.mjs"), "./locale/sr.js": () => import("./sr.aa83e4f4.mjs"), "./locale/ss.js": () => import("./ss.ecd87d97.mjs"), "./locale/sv-fi.js": () => import("./sv-fi.d061b253.mjs"), "./locale/sv.js": () => import("./sv.17190e95.mjs"), "./locale/sw.js": () => import("./sw.d9b9b9d2.mjs"), "./locale/ta.js": () => import("./ta.29e502a4.mjs"), "./locale/te.js": () => import("./te.c5867ae3.mjs"), "./locale/tet.js": () => import("./tet.baf29644.mjs"), "./locale/tg.js": () => import("./tg.e3bd64e1.mjs"), "./locale/th.js": () => import("./th.6b8c62b6.mjs"), "./locale/tk.js": () => import("./tk.add30e43.mjs"), "./locale/tl-ph.js": () => import("./tl-ph.eba8e3eb.mjs"), "./locale/tlh.js": () => import("./tlh.4168a458.mjs"), "./locale/tr.js": () => import("./tr.a9ebcde8.mjs"), "./locale/tzl.js": () => import("./tzl.781b88e8.mjs"), "./locale/tzm-latn.js": () => import("./tzm-latn.a6af0fcb.mjs"), "./locale/tzm.js": () => import("./tzm.68a8d4e5.mjs"), "./locale/ug-cn.js": () => import("./ug-cn.eae6b8ca.mjs"), "./locale/uk.js": () => import("./uk.55ad74bc.mjs"), "./locale/ur.js": () => import("./ur.e03beb90.mjs"), "./locale/uz-latn.js": () => import("./uz-latn.a793b210.mjs"), "./locale/uz.js": () => import("./uz.42a75820.mjs"), "./locale/vi.js": () => import("./vi.40023c5c.mjs"), "./locale/x-pseudo.js": () => import("./x-pseudo.0bf15f70.mjs"), "./locale/yo.js": () => import("./yo.2c5b233f.mjs"), "./locale/zh-cn.js": () => import("./zh-cn.ed817fd7.mjs"), "./locale/zh-hk.js": () => import("./zh-hk.f7f46f52.mjs"), "./locale/zh-tw.js": () => import("./zh-tw.629f1361.mjs"), "./locale/zh.js": () => import("./zh.785be6e8.mjs") });
        for (const b in p)
          p[b]().then(() => {
            s.locale(d);
            let o, m;
            if (w()) {
              if (O()) {
                if (t.modelValue.length > 0) {
                  const [Y, z] = t.modelValue;
                  o = s(Y, t.formatter.date, !0), m = s(z, t.formatter.date, !0);
                }
              } else if (x()) {
                if (!Ce(t.modelValue))
                  try {
                    console.log(Object.keys(t.modelValue));
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
                if (t.modelValue) {
                  const [Y, z] = Object.values(t.modelValue);
                  o = Y && s(Y, t.formatter.date, !0), m = z && s(z, t.formatter.date, !0);
                }
              } else if (t.modelValue) {
                const [Y, z] = t.modelValue.split(t.separator);
                o = s(Y, t.formatter.date, !0), m = s(z, t.formatter.date, !0);
              }
              o && m ? (y.value = f(
                {
                  previous: o,
                  next: m
                },
                t
              ), m.isBefore(o, "month") ? (r.value.previous = m, r.value.next = o, r.value.year.previous = m.year(), r.value.year.next = o.year()) : m.isSame(o, "month") ? (r.value.previous = o, r.value.next = m.add(1, "month"), r.value.year.previous = o.year(), r.value.year.next = o.add(1, "year").year()) : (r.value.previous = o, r.value.next = m, r.value.year.previous = o.year(), r.value.year.next = m.year()), t.autoApply || (g.value = [o, m])) : (r.value.previous = s(t.startFrom), r.value.next = s(t.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
            } else {
              if (O()) {
                if (t.modelValue.length > 0) {
                  const [Y] = t.modelValue;
                  o = s(Y, t.formatter.date, !0);
                }
              } else if (x()) {
                if (t.modelValue) {
                  const [Y] = Object.values(t.modelValue);
                  o = s(Y, t.formatter.date, !0);
                }
              } else if (t.modelValue.length) {
                const [Y] = t.modelValue.split(t.separator);
                o = s(Y, t.formatter.date, !0);
              }
              o && o.isValid() ? (y.value = k(o, t), r.value.previous = o, r.value.next = o.add(1, "month"), r.value.year.previous = o.year(), r.value.year.next = o.add(1, "year").year(), t.autoApply || (g.value = [o])) : (r.value.previous = s(t.startFrom), r.value.next = s(t.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
            }
            r.value.weeks = Z() ? J(s.weekdaysShort()) : s.weekdaysShort(), r.value.months = t.formatter.month === "MMM" ? s.monthsShort() : s.months();
          }).catch((o) => {
            console.warn(o.message);
          });
      });
    });
    const Lt = (d) => (d && L.value === null && (L.value = j(h.value)), d && L.value ? "place-right" : "place-left"), Bt = (d) => (d && L.value === null && (L.value = j(h.value)), L.value ? "tw-left-auto tw-right-0" : "tw-left-0 tw-right-auto");
    return dt("isBetweenRange", rt), dt("betweenRangeClasses", wt), dt("datepickerClasses", pt), dt("atMouseOver", X), dt("setToToday", mt), dt("setToYesterday", ot), dt("setToLastDay", it), dt("setToThisMonth", ht), dt("setToLastMonth", yt), dt("setToCustomShortcut", At), (d, p) => t.noInput ? P.value ? (W(), K("div", lo, [
      C("div", io, [
        C("div", uo, [
          t.shortcuts ? (W(), It(oe, {
            key: 0,
            shortcuts: t.shortcuts,
            "as-range": w(),
            "as-single": t.asSingle,
            i18n: t.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : vt("", !0),
          C("div", co, [
            w() && !t.asSingle ? (W(), K("div", fo, po)) : vt("", !0),
            C("div", {
              class: Mt(["tw-relative tw-w-full lg:tw-w-80", {
                "tw-mb-3 sm:tw-mb-0 sm:tw-mr-2 md:tw-w-1/2": w() && !t.asSingle
              }])
            }, [
              tt(Ut, {
                panel: l.previous,
                calendar: N(_).previous
              }, null, 8, ["panel", "calendar"]),
              C("div", mo, [
                lt(tt(zt, {
                  months: N(H),
                  "onUpdate:month": N(_).previous.setMount
                }, null, 8, ["months", "onUpdate:month"]), [
                  [ut, l.previous.month]
                ]),
                lt(tt(Zt, {
                  years: N(_).previous.years(),
                  "onUpdate:year": N(_).previous.setYear
                }, null, 8, ["years", "onUpdate:year"]), [
                  [ut, l.previous.year]
                ]),
                lt(C("div", null, [
                  tt(Wt, { weeks: N(M) }, null, 8, ["weeks"]),
                  tt(Gt, {
                    calendar: N(_).previous,
                    weeks: N(M),
                    "as-range": w(),
                    "onUpdate:date": p[2] || (p[2] = (b, o) => R(b, o))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ut, l.previous.calendar]
                ])
              ])
            ], 2),
            w() && !t.asSingle ? (W(), K("div", vo, [
              tt(Ut, {
                "as-prev-or-next": "",
                panel: l.next,
                calendar: N(_).next
              }, null, 8, ["panel", "calendar"]),
              C("div", ho, [
                lt(tt(zt, {
                  months: N(H),
                  "onUpdate:month": N(_).next.setMount
                }, null, 8, ["months", "onUpdate:month"]), [
                  [ut, l.next.month]
                ]),
                lt(tt(Zt, {
                  "as-prev-or-next": "",
                  years: N(_).next.years(),
                  "onUpdate:year": N(_).next.setYear
                }, null, 8, ["years", "onUpdate:year"]), [
                  [ut, l.next.year]
                ]),
                lt(C("div", null, [
                  tt(Wt, { weeks: N(M) }, null, 8, ["weeks"]),
                  tt(Gt, {
                    "as-prev-or-next": "",
                    calendar: N(_).next,
                    weeks: N(M),
                    "as-range": w(),
                    "onUpdate:date": p[3] || (p[3] = (b, o) => R(b, o))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ut, l.next.calendar]
                ])
              ])
            ])) : vt("", !0)
          ])
        ]),
        t.autoApply ? vt("", !0) : (W(), K("div", yo, [
          C("div", xo, [
            C("div", bo, [
              C("button", {
                type: "button",
                class: "away-apply-picker tw-w-full tw-transition tw-ease-out tw-duration-300 tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-shadow-sm tw-px-4 tw-py-2 tw-bg-vtd-primary-600 tw-text-base tw-font-medium tw-text-white hover:tw-bg-vtd-primary-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-vtd-primary-500 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm dark:tw-ring-offset-vtd-secondary-800 disabled:tw-cursor-not-allowed",
                disabled: t.asSingle ? g.value.length < 1 : g.value.length < 2,
                onClick: p[4] || (p[4] = (b) => q()),
                textContent: nt(t.options.footer.apply)
              }, null, 8, go)
            ])
          ])
        ]))
      ])
    ])) : vt("", !0) : (W(), It(N(he), {
      key: 0,
      as: "div",
      id: "vtd",
      class: "tw-relative tw-w-full"
    }, {
      default: _t(({ open: b }) => [
        t.overlay ? (W(), It(N(_r), {
          key: 0,
          class: "tw-fixed tw-inset-0 tw-bg-black tw-opacity-30"
        })) : vt("", !0),
        tt(N(Or), {
          as: "label",
          class: "tw-relative tw-block"
        }, {
          default: _t(() => [
            Ye(d.$slots, "default", {
              value: y.value,
              placeholder: G.value,
              clear: F
            }, () => [
              lt(C("input", Te({
                ref_key: "VtdInputRef",
                ref: $,
                type: "text",
                class: [
                  "tw-relative tw-block tw-w-full",
                  e.inputClasses || "tw-pl-3 tw-pr-12 tw-py-2.5 tw-rounded-lg tw-overflow-hidden tw-border-solid tw-text-sm tw-text-vtd-secondary-700 tw-placeholder-vtd-secondary-400 tw-transition-colors tw-bg-white tw-border tw-border-vtd-secondary-300 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none dark:tw-bg-vtd-secondary-800 dark:tw-border-vtd-secondary-700 dark:tw-text-vtd-secondary-100 dark:tw-placeholder-vtd-secondary-500 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-20"
                ],
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other"
              }, d.$attrs, {
                "onUpdate:modelValue": p[0] || (p[0] = (o) => y.value = o),
                placeholder: G.value,
                onKeyup: A
              }), null, 16, Fr), [
                [Ae, y.value]
              ]),
              C("div", Nr, [
                C("button", {
                  type: "button",
                  class: "tw-px-2 tw-py-1 tw-mr-1 focus:tw-outline-none tw-text-vtd-secondary-400 dark:tw-text-opacity-70 tw-rounded-md",
                  onClick: p[1] || (p[1] = (o) => y.value ? F() : d.$refs.VtdInputRef.focus())
                }, [
                  (W(), K("svg", Hr, [
                    y.value ? (W(), K("path", Rr)) : (W(), K("path", Ir))
                  ]))
                ])
              ])
            ])
          ]),
          _: 3
        }),
        tt(ne, {
          "enter-from-class": "tw-opacity-0 tw-translate-y-3",
          "enter-to-class": "tw-opacity-100 tw-translate-y-0",
          "enter-active-class": "tw-transform tw-transition tw-ease-out tw-duration-200",
          "leave-active-class": "tw-transform tw-transition tw-ease-in tw-duration-150",
          "leave-from-class": "tw-opacity-100 tw-translate-y-0",
          "leave-to-class": "tw-opacity-0 tw-translate-y-3"
        }, {
          default: _t(() => [
            tt(N(Vr), {
              as: "div",
              class: "tw-relative tw-z-50"
            }, {
              default: _t(({ close: o }) => [
                C("div", {
                  class: Mt(["tw-absolute tw-z-50 tw-top-full sm:tw-mt-2.5", Bt(b)])
                }, [
                  C("div", {
                    ref_key: "VtdRef",
                    ref: h,
                    class: "tw-fixed tw-inset-0 tw-z-50 tw-overflow-y-auto sm:tw-overflow-visible sm:tw-static sm:tw-z-auto tw-bg-white dark:tw-bg-vtd-secondary-800 sm:tw-rounded-lg tw-shadow-sm"
                  }, [
                    C("div", {
                      class: Mt(["vtd-datepicker tw-static sm:tw-relative tw-w-full tw-bg-white sm:tw-rounded-lg sm:tw-shadow-sm tw-border-0 sm:tw-border tw-border-black/[.1] tw-px-3 tw-py-3 sm:tw-px-4 sm:tw-py-4 dark:tw-bg-vtd-secondary-800 dark:tw-border-vtd-secondary-700/[1]", Lt(b)])
                    }, [
                      C("div", Ur, [
                        t.shortcuts ? (W(), It(oe, {
                          key: 0,
                          shortcuts: t.shortcuts,
                          "as-range": w(),
                          "as-single": t.asSingle,
                          i18n: t.options.shortcuts,
                          close: o
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : vt("", !0),
                        C("div", zr, [
                          w() && !t.asSingle ? (W(), K("div", Wr, Gr)) : vt("", !0),
                          C("div", {
                            class: Mt(["tw-relative tw-w-full md:tw-w-1/2 lg:tw-w-80", {
                              "tw-mb-3 sm:tw-mb-0 sm:tw-mr-2": w() && !t.asSingle
                            }])
                          }, [
                            tt(Ut, {
                              panel: l.previous,
                              calendar: N(_).previous
                            }, null, 8, ["panel", "calendar"]),
                            C("div", Kr, [
                              lt(tt(zt, {
                                months: N(H),
                                "onUpdate:month": N(_).previous.setMount
                              }, null, 8, ["months", "onUpdate:month"]), [
                                [ut, l.previous.month]
                              ]),
                              lt(tt(Zt, {
                                years: N(_).previous.years(),
                                "onUpdate:year": N(_).previous.setYear
                              }, null, 8, ["years", "onUpdate:year"]), [
                                [ut, l.previous.year]
                              ]),
                              lt(C("div", null, [
                                tt(Wt, { weeks: N(M) }, null, 8, ["weeks"]),
                                tt(Gt, {
                                  calendar: N(_).previous,
                                  weeks: N(M),
                                  "as-range": w(),
                                  "onUpdate:date": (m, Y) => R(m, Y, o)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ut, l.previous.calendar]
                              ])
                            ])
                          ], 2),
                          w() && !t.asSingle ? (W(), K("div", Jr, [
                            tt(Ut, {
                              "as-prev-or-next": "",
                              panel: l.next,
                              calendar: N(_).next
                            }, null, 8, ["panel", "calendar"]),
                            C("div", qr, [
                              lt(tt(zt, {
                                months: N(H),
                                "onUpdate:month": N(_).next.setMount
                              }, null, 8, ["months", "onUpdate:month"]), [
                                [ut, l.next.month]
                              ]),
                              lt(tt(Zt, {
                                "as-prev-or-next": "",
                                years: N(_).next.years(),
                                "onUpdate:year": N(_).next.setYear
                              }, null, 8, ["years", "onUpdate:year"]), [
                                [ut, l.next.year]
                              ]),
                              lt(C("div", null, [
                                tt(Wt, { weeks: N(M) }, null, 8, ["weeks"]),
                                tt(Gt, {
                                  "as-prev-or-next": "",
                                  calendar: N(_).next,
                                  weeks: N(M),
                                  "as-range": w(),
                                  "onUpdate:date": (m, Y) => R(m, Y, o)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ut, l.next.calendar]
                              ])
                            ])
                          ])) : vt("", !0)
                        ])
                      ]),
                      t.autoApply ? (W(), K("div", oo, [
                        C("div", ao, [
                          C("div", no, [
                            C("button", {
                              type: "button",
                              onClick: (m) => o(),
                              class: "away-cancel-picker tw-w-full tw-transition tw-ease-out tw-duration-300 tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-vtd-secondary-300 tw-shadow-sm tw-px-4 tw-py-2 tw-bg-white tw-text-base tw-font-medium tw-text-vtd-secondary-700 hover:tw-bg-vtd-secondary-50 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-vtd-primary-500 sm:tw-mt-0 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm dark:tw-ring-offset-vtd-secondary-800",
                              textContent: nt(t.options.footer.cancel)
                            }, null, 8, so)
                          ])
                        ])
                      ])) : (W(), K("div", Xr, [
                        C("div", Qr, [
                          C("div", to, [
                            C("button", {
                              type: "button",
                              class: "away-apply-picker tw-w-full tw-transition tw-ease-out tw-duration-300 tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-shadow-sm tw-px-4 tw-py-2 tw-bg-vtd-primary-600 tw-text-base tw-font-medium tw-text-white hover:tw-bg-vtd-primary-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-vtd-primary-500 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm dark:tw-ring-offset-vtd-secondary-800 disabled:tw-cursor-not-allowed",
                              disabled: t.asSingle ? g.value.length < 1 : g.value.length < 2,
                              onClick: (m) => q(o),
                              textContent: nt(t.options.footer.apply)
                            }, null, 8, eo),
                            C("button", {
                              type: "button",
                              onClick: (m) => o(),
                              class: "tw-mt-3 away-cancel-picker tw-w-full tw-transition tw-ease-out tw-duration-300 tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-vtd-secondary-300 tw-shadow-sm tw-px-4 tw-py-2 tw-bg-white tw-text-base tw-font-medium tw-text-vtd-secondary-700 hover:tw-bg-vtd-secondary-50 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-vtd-primary-500 sm:tw-mt-0 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm dark:tw-ring-offset-vtd-secondary-800",
                              textContent: nt(t.options.footer.cancel)
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
}, Me = /* @__PURE__ */ (() => {
  const e = ko;
  return e.install = (a) => {
    a.component("VueTailwindDatepicker", e);
  }, e;
})(), $o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Me
}, Symbol.toStringTag, { value: "Module" }));
Object.entries($o).forEach(([e, a]) => {
  e !== "default" && (Me[e] = a);
});
export {
  Me as c,
  s as d
};
