import { d as t } from "./entry.3468fba7.mjs";
import "vue";
var d = {
  s: "\u05DE\u05E1\u05E4\u05E8 \u05E9\u05E0\u05D9\u05D5\u05EA",
  ss: "%d \u05E9\u05E0\u05D9\u05D5\u05EA",
  m: "\u05D3\u05E7\u05D4",
  mm: "%d \u05D3\u05E7\u05D5\u05EA",
  h: "\u05E9\u05E2\u05D4",
  hh: "%d \u05E9\u05E2\u05D5\u05EA",
  hh2: "\u05E9\u05E2\u05EA\u05D9\u05D9\u05DD",
  d: "\u05D9\u05D5\u05DD",
  dd: "%d \u05D9\u05DE\u05D9\u05DD",
  dd2: "\u05D9\u05D5\u05DE\u05D9\u05D9\u05DD",
  M: "\u05D7\u05D5\u05D3\u05E9",
  MM: "%d \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD",
  MM2: "\u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD",
  y: "\u05E9\u05E0\u05D4",
  yy: "%d \u05E9\u05E0\u05D9\u05DD",
  yy2: "\u05E9\u05E0\u05EA\u05D9\u05D9\u05DD"
};
function Y(M, _, m) {
  var l = d[m + (M === 2 ? "2" : "")] || d[m];
  return l.replace("%d", M);
}
var s = {
  name: "he",
  weekdays: "\u05E8\u05D0\u05E9\u05D5\u05DF_\u05E9\u05E0\u05D9_\u05E9\u05DC\u05D9\u05E9\u05D9_\u05E8\u05D1\u05D9\u05E2\u05D9_\u05D7\u05DE\u05D9\u05E9\u05D9_\u05E9\u05D9\u05E9\u05D9_\u05E9\u05D1\u05EA".split("_"),
  weekdaysShort: "\u05D0\u05F3_\u05D1\u05F3_\u05D2\u05F3_\u05D3\u05F3_\u05D4\u05F3_\u05D5\u05F3_\u05E9\u05F3".split("_"),
  weekdaysMin: "\u05D0\u05F3_\u05D1\u05F3_\u05D2\u05F3_\u05D3\u05F3_\u05D4\u05F3_\u05D5_\u05E9\u05F3".split("_"),
  months: "\u05D9\u05E0\u05D5\u05D0\u05E8_\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8_\u05DE\u05E8\u05E5_\u05D0\u05E4\u05E8\u05D9\u05DC_\u05DE\u05D0\u05D9_\u05D9\u05D5\u05E0\u05D9_\u05D9\u05D5\u05DC\u05D9_\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8_\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8_\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8_\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8_\u05D3\u05E6\u05DE\u05D1\u05E8".split("_"),
  monthsShort: "\u05D9\u05E0\u05D5_\u05E4\u05D1\u05E8_\u05DE\u05E8\u05E5_\u05D0\u05E4\u05E8_\u05DE\u05D0\u05D9_\u05D9\u05D5\u05E0_\u05D9\u05D5\u05DC_\u05D0\u05D5\u05D2_\u05E1\u05E4\u05D8_\u05D0\u05D5\u05E7_\u05E0\u05D5\u05D1_\u05D3\u05E6\u05DE".split("_"),
  relativeTime: {
    future: "\u05D1\u05E2\u05D5\u05D3 %s",
    past: "\u05DC\u05E4\u05E0\u05D9 %s",
    s: Y,
    m: Y,
    mm: Y,
    h: Y,
    hh: Y,
    d: Y,
    dd: Y,
    M: Y,
    MM: Y,
    y: Y,
    yy: Y
  },
  ordinal: function(_) {
    return _;
  },
  format: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [\u05D1]MMMM YYYY",
    LLL: "D [\u05D1]MMMM YYYY HH:mm",
    LLLL: "dddd, D [\u05D1]MMMM YYYY HH:mm",
    l: "D/M/YYYY",
    ll: "D MMM YYYY",
    lll: "D MMM YYYY HH:mm",
    llll: "ddd, D MMM YYYY HH:mm"
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [\u05D1]MMMM YYYY",
    LLL: "D [\u05D1]MMMM YYYY HH:mm",
    LLLL: "dddd, D [\u05D1]MMMM YYYY HH:mm",
    l: "D/M/YYYY",
    ll: "D MMM YYYY",
    lll: "D MMM YYYY HH:mm",
    llll: "ddd, D MMM YYYY HH:mm"
  }
};
t.locale(s, null, !0);
export {
  s as default
};
