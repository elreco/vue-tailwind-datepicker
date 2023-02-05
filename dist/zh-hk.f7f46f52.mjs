import { d as s } from "./entry.3468fba7.mjs";
import "vue";
var d = {
  name: "zh-hk",
  months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),
  monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
  weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),
  weekdaysShort: "\u9031\u65E5_\u9031\u4E00_\u9031\u4E8C_\u9031\u4E09_\u9031\u56DB_\u9031\u4E94_\u9031\u516D".split("_"),
  weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),
  ordinal: function(_, t) {
    switch (t) {
      case "W":
        return _ + "\u9031";
      default:
        return _ + "\u65E5";
    }
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY/MM/DD",
    LL: "YYYY\u5E74M\u6708D\u65E5",
    LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
    LLLL: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm"
  },
  relativeTime: {
    future: "%s\u5167",
    past: "%s\u524D",
    s: "\u5E7E\u79D2",
    m: "\u4E00\u5206\u9418",
    mm: "%d \u5206\u9418",
    h: "\u4E00\u5C0F\u6642",
    hh: "%d \u5C0F\u6642",
    d: "\u4E00\u5929",
    dd: "%d \u5929",
    M: "\u4E00\u500B\u6708",
    MM: "%d \u500B\u6708",
    y: "\u4E00\u5E74",
    yy: "%d \u5E74"
  }
};
s.locale(d, null, !0);
export {
  d as default
};
