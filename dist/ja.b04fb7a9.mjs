import { d as m } from "./entry.3468fba7.mjs";
import "vue";
var d = {
  name: "ja",
  weekdays: "\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5".split("_"),
  weekdaysShort: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),
  weekdaysMin: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),
  months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
  monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
  ordinal: function(_) {
    return _ + "\u65E5";
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY/MM/DD",
    LL: "YYYY\u5E74M\u6708D\u65E5",
    LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
    LLLL: "YYYY\u5E74M\u6708D\u65E5 dddd HH:mm",
    l: "YYYY/MM/DD",
    ll: "YYYY\u5E74M\u6708D\u65E5",
    lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
    llll: "YYYY\u5E74M\u6708D\u65E5(ddd) HH:mm"
  },
  meridiem: function(_) {
    return _ < 12 ? "\u5348\u524D" : "\u5348\u5F8C";
  },
  relativeTime: {
    future: "%s\u5F8C",
    past: "%s\u524D",
    s: "\u6570\u79D2",
    m: "1\u5206",
    mm: "%d\u5206",
    h: "1\u6642\u9593",
    hh: "%d\u6642\u9593",
    d: "1\u65E5",
    dd: "%d\u65E5",
    M: "1\u30F6\u6708",
    MM: "%d\u30F6\u6708",
    y: "1\u5E74",
    yy: "%d\u5E74"
  }
};
m.locale(d, null, !0);
export {
  d as default
};
