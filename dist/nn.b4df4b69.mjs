import { d as _ } from "./entry.3468fba7.mjs";
import "vue";
var e = {
  name: "nn",
  weekdays: "sundag_m\xE5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
  weekdaysShort: "sun_m\xE5n_tys_ons_tor_fre_lau".split("_"),
  weekdaysMin: "su_m\xE5_ty_on_to_fr_la".split("_"),
  months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
  monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
  ordinal: function(a) {
    return a + ".";
  },
  weekStart: 1,
  relativeTime: {
    future: "om %s",
    past: "for %s sidan",
    s: "nokre sekund",
    m: "eitt minutt",
    mm: "%d minutt",
    h: "ein time",
    hh: "%d timar",
    d: "ein dag",
    dd: "%d dagar",
    M: "ein m\xE5nad",
    MM: "%d m\xE5nadar",
    y: "eitt \xE5r",
    yy: "%d \xE5r"
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY [kl.] H:mm",
    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
  }
};
_.locale(e, null, !0);
export {
  e as default
};
