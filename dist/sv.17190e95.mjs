import { d as _ } from "./entry.3468fba7.mjs";
import "vue";
var m = {
  name: "sv",
  weekdays: "s\xF6ndag_m\xE5ndag_tisdag_onsdag_torsdag_fredag_l\xF6rdag".split("_"),
  weekdaysShort: "s\xF6n_m\xE5n_tis_ons_tor_fre_l\xF6r".split("_"),
  weekdaysMin: "s\xF6_m\xE5_ti_on_to_fr_l\xF6".split("_"),
  months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
  monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
  weekStart: 1,
  yearStart: 4,
  ordinal: function(a) {
    var e = a % 10, r = e === 1 || e === 2 ? "a" : "e";
    return "[" + a + r + "]";
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY [kl.] HH:mm",
    LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
    lll: "D MMM YYYY HH:mm",
    llll: "ddd D MMM YYYY HH:mm"
  },
  relativeTime: {
    future: "om %s",
    past: "f\xF6r %s sedan",
    s: "n\xE5gra sekunder",
    m: "en minut",
    mm: "%d minuter",
    h: "en timme",
    hh: "%d timmar",
    d: "en dag",
    dd: "%d dagar",
    M: "en m\xE5nad",
    MM: "%d m\xE5nader",
    y: "ett \xE5r",
    yy: "%d \xE5r"
  }
};
_.locale(m, null, !0);
export {
  m as default
};
