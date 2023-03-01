import { d as l } from "./entry.3468fba7.mjs";
import "vue";
var k = {
  s: ["nokkrar sek\xFAndur", "nokkrar sek\xFAndur", "nokkrum sek\xFAndum"],
  m: ["m\xEDn\xFAta", "m\xEDn\xFAtu", "m\xEDn\xFAtu"],
  mm: ["m\xEDn\xFAtur", "m\xEDn\xFAtur", "m\xEDn\xFAtum"],
  h: ["klukkustund", "klukkustund", "klukkustund"],
  hh: ["klukkustundir", "klukkustundir", "klukkustundum"],
  d: ["dagur", "dag", "degi"],
  dd: ["dagar", "daga", "d\xF6gum"],
  M: ["m\xE1nu\xF0ur", "m\xE1nu\xF0", "m\xE1nu\xF0i"],
  MM: ["m\xE1nu\xF0ir", "m\xE1nu\xF0i", "m\xE1nu\xF0um"],
  y: ["\xE1r", "\xE1r", "\xE1ri"],
  yy: ["\xE1r", "\xE1r", "\xE1rum"]
};
function o(u, a, t, e) {
  var m = t ? 1 : 2, d = e ? 0 : m, s = u.length === 2 && a % 10 === 1, _ = s ? u[0] : u, i = k[_], n = i[d];
  return u.length === 1 ? n : "%d " + n;
}
function r(u, a, t, e) {
  var m = o(t, u, e, a);
  return m.replace("%d", u);
}
var M = {
  name: "is",
  weekdays: "sunnudagur_m\xE1nudagur_\xFEri\xF0judagur_mi\xF0vikudagur_fimmtudagur_f\xF6studagur_laugardagur".split("_"),
  months: "jan\xFAar_febr\xFAar_mars_apr\xEDl_ma\xED_j\xFAn\xED_j\xFAl\xED_\xE1g\xFAst_september_okt\xF3ber_n\xF3vember_desember".split("_"),
  weekStart: 1,
  weekdaysShort: "sun_m\xE1n_\xFEri_mi\xF0_fim_f\xF6s_lau".split("_"),
  monthsShort: "jan_feb_mar_apr_ma\xED_j\xFAn_j\xFAl_\xE1g\xFA_sep_okt_n\xF3v_des".split("_"),
  weekdaysMin: "Su_M\xE1_\xDEr_Mi_Fi_F\xF6_La".split("_"),
  ordinal: function(a) {
    return a;
  },
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY [kl.] H:mm",
    LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
  },
  relativeTime: {
    future: "eftir %s",
    past: "fyrir %s s\xED\xF0an",
    s: r,
    m: r,
    mm: r,
    h: r,
    hh: r,
    d: r,
    dd: r,
    M: r,
    MM: r,
    y: r,
    yy: r
  }
};
l.locale(M, null, !0);
export {
  M as default
};
