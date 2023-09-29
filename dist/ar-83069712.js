import { d as a } from "./entry-f870c8cc.js";
import "vue";
var _ = "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), s = {
  1: "١",
  2: "٢",
  3: "٣",
  4: "٤",
  5: "٥",
  6: "٦",
  7: "٧",
  8: "٨",
  9: "٩",
  0: "٠"
}, m = {
  "١": "1",
  "٢": "2",
  "٣": "3",
  "٤": "4",
  "٥": "5",
  "٦": "6",
  "٧": "7",
  "٨": "8",
  "٩": "9",
  "٠": "0"
}, n = {
  name: "ar",
  weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
  weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
  weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
  months: _,
  monthsShort: _,
  weekStart: 6,
  relativeTime: {
    future: "بعد %s",
    past: "منذ %s",
    s: "ثانية واحدة",
    m: "دقيقة واحدة",
    mm: "%d دقائق",
    h: "ساعة واحدة",
    hh: "%d ساعات",
    d: "يوم واحد",
    dd: "%d أيام",
    M: "شهر واحد",
    MM: "%d أشهر",
    y: "عام واحد",
    yy: "%d أعوام"
  },
  preparse: function(r) {
    return r.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
      return m[e];
    }).replace(/،/g, ",");
  },
  postformat: function(r) {
    return r.replace(/\d/g, function(e) {
      return s[e];
    }).replace(/,/g, "،");
  },
  ordinal: function(r) {
    return r;
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "D/‏M/‏YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  }
};
a.locale(n, null, !0);
export {
  n as default
};
