import { d as l } from "./entry-a2048c7e.js";
import "vue";
var k = {
  s: ["nokkrar sekúndur", "nokkrar sekúndur", "nokkrum sekúndum"],
  m: ["mínúta", "mínútu", "mínútu"],
  mm: ["mínútur", "mínútur", "mínútum"],
  h: ["klukkustund", "klukkustund", "klukkustund"],
  hh: ["klukkustundir", "klukkustundir", "klukkustundum"],
  d: ["dagur", "dag", "degi"],
  dd: ["dagar", "daga", "dögum"],
  M: ["mánuður", "mánuð", "mánuði"],
  MM: ["mánuðir", "mánuði", "mánuðum"],
  y: ["ár", "ár", "ári"],
  yy: ["ár", "ár", "árum"]
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
  weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
  months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
  weekStart: 1,
  weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
  monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
  weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
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
    past: "fyrir %s síðan",
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
