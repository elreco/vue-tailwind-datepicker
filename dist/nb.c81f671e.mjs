import { d as _ } from "./entry.3468fba7.mjs";
import "vue";
var t = {
  name: "nb",
  weekdays: "s\xF8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xF8rdag".split("_"),
  weekdaysShort: "s\xF8._ma._ti._on._to._fr._l\xF8.".split("_"),
  weekdaysMin: "s\xF8_ma_ti_on_to_fr_l\xF8".split("_"),
  months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
  monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
  ordinal: function(e) {
    return e + ".";
  },
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY [kl.] HH:mm",
    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
  },
  relativeTime: {
    future: "om %s",
    past: "%s siden",
    s: "noen sekunder",
    m: "ett minutt",
    mm: "%d minutter",
    h: "en time",
    hh: "%d timer",
    d: "en dag",
    dd: "%d dager",
    M: "en m\xE5ned",
    MM: "%d m\xE5neder",
    y: "ett \xE5r",
    yy: "%d \xE5r"
  }
};
_.locale(t, null, !0);
export {
  t as default
};
