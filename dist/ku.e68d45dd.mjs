import { d as m } from "./entry.3468fba7.mjs";
import "vue";
var n = {
  1: "\u0661",
  2: "\u0662",
  3: "\u0663",
  4: "\u0664",
  5: "\u0665",
  6: "\u0666",
  7: "\u0667",
  8: "\u0668",
  9: "\u0669",
  0: "\u0660"
}, s = {
  "\u0661": "1",
  "\u0662": "2",
  "\u0663": "3",
  "\u0664": "4",
  "\u0665": "5",
  "\u0666": "6",
  "\u0667": "7",
  "\u0668": "8",
  "\u0669": "9",
  "\u0660": "0"
}, a = ["\u06A9\u0627\u0646\u0648\u0648\u0646\u06CC \u062F\u0648\u0648\u06D5\u0645", "\u0634\u0648\u0628\u0627\u062A", "\u0626\u0627\u062F\u0627\u0631", "\u0646\u06CC\u0633\u0627\u0646", "\u0626\u0627\u06CC\u0627\u0631", "\u062D\u0648\u0632\u06D5\u06CC\u0631\u0627\u0646", "\u062A\u06D5\u0645\u0645\u0648\u0648\u0632", "\u0626\u0627\u0628", "\u0626\u06D5\u06CC\u0644\u0648\u0648\u0644", "\u062A\u0634\u0631\u06CC\u0646\u06CC \u06CC\u06D5\u06A9\u06D5\u0645", "\u062A\u0634\u0631\u06CC\u0646\u06CC \u062F\u0648\u0648\u06D5\u0645", "\u06A9\u0627\u0646\u0648\u0648\u0646\u06CC \u06CC\u06D5\u06A9\u06D5\u0645"], o = {
  name: "ku",
  months: a,
  monthsShort: a,
  weekdays: "\u06CC\u06D5\u06A9\u0634\u06D5\u0645\u0645\u06D5_\u062F\u0648\u0648\u0634\u06D5\u0645\u0645\u06D5_\u0633\u06CE\u0634\u06D5\u0645\u0645\u06D5_\u0686\u0648\u0627\u0631\u0634\u06D5\u0645\u0645\u06D5_\u067E\u06CE\u0646\u062C\u0634\u06D5\u0645\u0645\u06D5_\u0647\u06D5\u06CC\u0646\u06CC_\u0634\u06D5\u0645\u0645\u06D5".split("_"),
  weekdaysShort: "\u06CC\u06D5\u06A9\u0634\u06D5\u0645_\u062F\u0648\u0648\u0634\u06D5\u0645_\u0633\u06CE\u0634\u06D5\u0645_\u0686\u0648\u0627\u0631\u0634\u06D5\u0645_\u067E\u06CE\u0646\u062C\u0634\u06D5\u0645_\u0647\u06D5\u06CC\u0646\u06CC_\u0634\u06D5\u0645\u0645\u06D5".split("_"),
  weekStart: 6,
  weekdaysMin: "\u06CC_\u062F_\u0633_\u0686_\u067E_\u0647\u0640_\u0634".split("_"),
  preparse: function(r) {
    return r.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(t) {
      return s[t];
    }).replace(/،/g, ",");
  },
  postformat: function(r) {
    return r.replace(/\d/g, function(t) {
      return n[t];
    }).replace(/,/g, "\u060C");
  },
  ordinal: function(r) {
    return r;
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  meridiem: function(r) {
    return r < 12 ? "\u067E.\u0646" : "\u062F.\u0646";
  },
  relativeTime: {
    future: "\u0644\u06D5 %s",
    past: "\u0644\u06D5\u0645\u06D5\u0648\u067E\u06CE\u0634 %s",
    s: "\u0686\u06D5\u0646\u062F \u0686\u0631\u06A9\u06D5\u06CC\u06D5\u06A9",
    m: "\u06CC\u06D5\u06A9 \u062E\u0648\u0644\u06D5\u06A9",
    mm: "%d \u062E\u0648\u0644\u06D5\u06A9",
    h: "\u06CC\u06D5\u06A9 \u06A9\u0627\u062A\u0698\u0645\u06CE\u0631",
    hh: "%d \u06A9\u0627\u062A\u0698\u0645\u06CE\u0631",
    d: "\u06CC\u06D5\u06A9 \u0695\u06C6\u0698",
    dd: "%d \u0695\u06C6\u0698",
    M: "\u06CC\u06D5\u06A9 \u0645\u0627\u0646\u06AF",
    MM: "%d \u0645\u0627\u0646\u06AF",
    y: "\u06CC\u06D5\u06A9 \u0633\u0627\u06B5",
    yy: "%d \u0633\u0627\u06B5"
  }
};
m.locale(o, null, !0);
export {
  o as default,
  n as englishToArabicNumbersMap
};
