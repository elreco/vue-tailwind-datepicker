import { d as a } from "./entry.3468fba7.mjs";
import "vue";
var s = {
  name: "hu",
  weekdays: "vas\xE1rnap_h\xE9tf\u0151_kedd_szerda_cs\xFCt\xF6rt\xF6k_p\xE9ntek_szombat".split("_"),
  weekdaysShort: "vas_h\xE9t_kedd_sze_cs\xFCt_p\xE9n_szo".split("_"),
  weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
  months: "janu\xE1r_febru\xE1r_m\xE1rcius_\xE1prilis_m\xE1jus_j\xFAnius_j\xFAlius_augusztus_szeptember_okt\xF3ber_november_december".split("_"),
  monthsShort: "jan_feb_m\xE1rc_\xE1pr_m\xE1j_j\xFAn_j\xFAl_aug_szept_okt_nov_dec".split("_"),
  ordinal: function(n) {
    return n + ".";
  },
  weekStart: 1,
  relativeTime: {
    future: "%s m\xFAlva",
    past: "%s",
    s: function(n, _, t, e) {
      return "n\xE9h\xE1ny m\xE1sodperc" + (e || _ ? "" : "e");
    },
    m: function(n, _, t, e) {
      return "egy perc" + (e || _ ? "" : "e");
    },
    mm: function(n, _, t, e) {
      return n + " perc" + (e || _ ? "" : "e");
    },
    h: function(n, _, t, e) {
      return "egy " + (e || _ ? "\xF3ra" : "\xF3r\xE1ja");
    },
    hh: function(n, _, t, e) {
      return n + " " + (e || _ ? "\xF3ra" : "\xF3r\xE1ja");
    },
    d: function(n, _, t, e) {
      return "egy " + (e || _ ? "nap" : "napja");
    },
    dd: function(n, _, t, e) {
      return n + " " + (e || _ ? "nap" : "napja");
    },
    M: function(n, _, t, e) {
      return "egy " + (e || _ ? "h\xF3nap" : "h\xF3napja");
    },
    MM: function(n, _, t, e) {
      return n + " " + (e || _ ? "h\xF3nap" : "h\xF3napja");
    },
    y: function(n, _, t, e) {
      return "egy " + (e || _ ? "\xE9v" : "\xE9ve");
    },
    yy: function(n, _, t, e) {
      return n + " " + (e || _ ? "\xE9v" : "\xE9ve");
    }
  },
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "YYYY.MM.DD.",
    LL: "YYYY. MMMM D.",
    LLL: "YYYY. MMMM D. H:mm",
    LLLL: "YYYY. MMMM D., dddd H:mm"
  }
};
a.locale(s, null, !0);
export {
  s as default
};
