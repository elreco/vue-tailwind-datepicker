import { d as o } from "./entry.3468fba7.mjs";
import "vue";
function m(r) {
  return r > 1 && r < 5 && ~~(r / 10) !== 1;
}
function n(r, e, s, a) {
  var _ = r + " ";
  switch (s) {
    case "s":
      return e || a ? "p\xE1r sek\xFAnd" : "p\xE1r sekundami";
    case "m":
      return e ? "min\xFAta" : a ? "min\xFAtu" : "min\xFAtou";
    case "mm":
      return e || a ? _ + (m(r) ? "min\xFAty" : "min\xFAt") : _ + "min\xFAtami";
    case "h":
      return e ? "hodina" : a ? "hodinu" : "hodinou";
    case "hh":
      return e || a ? _ + (m(r) ? "hodiny" : "hod\xEDn") : _ + "hodinami";
    case "d":
      return e || a ? "de\u0148" : "d\u0148om";
    case "dd":
      return e || a ? _ + (m(r) ? "dni" : "dn\xED") : _ + "d\u0148ami";
    case "M":
      return e || a ? "mesiac" : "mesiacom";
    case "MM":
      return e || a ? _ + (m(r) ? "mesiace" : "mesiacov") : _ + "mesiacmi";
    case "y":
      return e || a ? "rok" : "rokom";
    case "yy":
      return e || a ? _ + (m(r) ? "roky" : "rokov") : _ + "rokmi";
  }
}
var t = {
  name: "sk",
  weekdays: "nede\u013Ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),
  weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"),
  weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"),
  months: "janu\xE1r_febru\xE1r_marec_apr\xEDl_m\xE1j_j\xFAn_j\xFAl_august_september_okt\xF3ber_november_december".split("_"),
  monthsShort: "jan_feb_mar_apr_m\xE1j_j\xFAn_j\xFAl_aug_sep_okt_nov_dec".split("_"),
  weekStart: 1,
  yearStart: 4,
  ordinal: function(e) {
    return e + ".";
  },
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd D. MMMM YYYY H:mm",
    l: "D. M. YYYY"
  },
  relativeTime: {
    future: "za %s",
    past: "pred %s",
    s: n,
    m: n,
    mm: n,
    h: n,
    hh: n,
    d: n,
    dd: n,
    M: n,
    MM: n,
    y: n,
    yy: n
  }
};
o.locale(t, null, !0);
export {
  t as default
};
