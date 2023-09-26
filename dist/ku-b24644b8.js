import { d as m } from "./entry-a2048c7e.js";
import "vue";
var n = {
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
}, s = {
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
}, a = ["کانوونی دووەم", "شوبات", "ئادار", "نیسان", "ئایار", "حوزەیران", "تەممووز", "ئاب", "ئەیلوول", "تشرینی یەکەم", "تشرینی دووەم", "کانوونی یەکەم"], o = {
  name: "ku",
  months: a,
  monthsShort: a,
  weekdays: "یەکشەممە_دووشەممە_سێشەممە_چوارشەممە_پێنجشەممە_هەینی_شەممە".split("_"),
  weekdaysShort: "یەکشەم_دووشەم_سێشەم_چوارشەم_پێنجشەم_هەینی_شەممە".split("_"),
  weekStart: 6,
  weekdaysMin: "ی_د_س_چ_پ_هـ_ش".split("_"),
  preparse: function(r) {
    return r.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(t) {
      return s[t];
    }).replace(/،/g, ",");
  },
  postformat: function(r) {
    return r.replace(/\d/g, function(t) {
      return n[t];
    }).replace(/,/g, "،");
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
    return r < 12 ? "پ.ن" : "د.ن";
  },
  relativeTime: {
    future: "لە %s",
    past: "لەمەوپێش %s",
    s: "چەند چرکەیەک",
    m: "یەک خولەک",
    mm: "%d خولەک",
    h: "یەک کاتژمێر",
    hh: "%d کاتژمێر",
    d: "یەک ڕۆژ",
    dd: "%d ڕۆژ",
    M: "یەک مانگ",
    MM: "%d مانگ",
    y: "یەک ساڵ",
    yy: "%d ساڵ"
  }
};
m.locale(o, null, !0);
export {
  o as default,
  n as englishToArabicNumbersMap
};
