import { d } from "./entry-f870c8cc.js";
import "vue";
var e = {
  name: "ar-sa",
  weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
  months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
  weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
  monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
  weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
  ordinal: function(_) {
    return _;
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  meridiem: function(_) {
    return _ > 12 ? "م" : "ص";
  },
  relativeTime: {
    future: "في %s",
    past: "منذ %s",
    s: "ثوان",
    m: "دقيقة",
    mm: "%d دقائق",
    h: "ساعة",
    hh: "%d ساعات",
    d: "يوم",
    dd: "%d أيام",
    M: "شهر",
    MM: "%d أشهر",
    y: "سنة",
    yy: "%d سنوات"
  }
};
d.locale(e, null, !0);
export {
  e as default
};
