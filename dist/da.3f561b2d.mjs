import { d as _ } from "./entry.3468fba7.mjs";
import "vue";
var a = {
  name: "da",
  weekdays: "s\xF8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xF8rdag".split("_"),
  weekdaysShort: "s\xF8n._man._tirs._ons._tors._fre._l\xF8r.".split("_"),
  weekdaysMin: "s\xF8._ma._ti._on._to._fr._l\xF8.".split("_"),
  months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
  monthsShort: "jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.".split("_"),
  weekStart: 1,
  ordinal: function(e) {
    return e + ".";
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY HH:mm",
    LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
  },
  relativeTime: {
    future: "om %s",
    past: "%s siden",
    s: "f\xE5 sekunder",
    m: "et minut",
    mm: "%d minutter",
    h: "en time",
    hh: "%d timer",
    d: "en dag",
    dd: "%d dage",
    M: "en m\xE5ned",
    MM: "%d m\xE5neder",
    y: "et \xE5r",
    yy: "%d \xE5r"
  }
};
_.locale(a, null, !0);
export {
  a as default
};
