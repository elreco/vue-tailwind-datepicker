import { d as i } from "./entry.3468fba7.mjs";
import "vue";
function a(s, u, e, _) {
  var t = {
    s: ["m\xF5ne sekundi", "m\xF5ni sekund", "paar sekundit"],
    m: ["\xFChe minuti", "\xFCks minut"],
    mm: ["%d minuti", "%d minutit"],
    h: ["\xFChe tunni", "tund aega", "\xFCks tund"],
    hh: ["%d tunni", "%d tundi"],
    d: ["\xFChe p\xE4eva", "\xFCks p\xE4ev"],
    M: ["kuu aja", "kuu aega", "\xFCks kuu"],
    MM: ["%d kuu", "%d kuud"],
    y: ["\xFChe aasta", "aasta", "\xFCks aasta"],
    yy: ["%d aasta", "%d aastat"]
  };
  return u ? (t[e][2] ? t[e][2] : t[e][1]).replace("%d", s) : (_ ? t[e][0] : t[e][1]).replace("%d", s);
}
var r = {
  name: "et",
  weekdays: "p\xFChap\xE4ev_esmasp\xE4ev_teisip\xE4ev_kolmap\xE4ev_neljap\xE4ev_reede_laup\xE4ev".split("_"),
  weekdaysShort: "P_E_T_K_N_R_L".split("_"),
  weekdaysMin: "P_E_T_K_N_R_L".split("_"),
  months: "jaanuar_veebruar_m\xE4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
  monthsShort: "jaan_veebr_m\xE4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
  ordinal: function(u) {
    return u + ".";
  },
  weekStart: 1,
  relativeTime: {
    future: "%s p\xE4rast",
    past: "%s tagasi",
    s: a,
    m: a,
    mm: a,
    h: a,
    hh: a,
    d: a,
    dd: "%d p\xE4eva",
    M: a,
    MM: a,
    y: a,
    yy: a
  },
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd, D. MMMM YYYY H:mm"
  }
};
i.locale(r, null, !0);
export {
  r as default
};
