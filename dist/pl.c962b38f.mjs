import { d as m } from "./entry.3468fba7.mjs";
import "vue";
function r(t) {
  return t % 10 < 5 && t % 10 > 1 && ~~(t / 10) % 10 !== 1;
}
function a(t, e, _) {
  var i = t + " ";
  switch (_) {
    case "m":
      return e ? "minuta" : "minut\u0119";
    case "mm":
      return i + (r(t) ? "minuty" : "minut");
    case "h":
      return e ? "godzina" : "godzin\u0119";
    case "hh":
      return i + (r(t) ? "godziny" : "godzin");
    case "MM":
      return i + (r(t) ? "miesi\u0105ce" : "miesi\u0119cy");
    case "yy":
      return i + (r(t) ? "lata" : "lat");
  }
}
var s = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split("_"), o = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split("_"), l = /D MMMM/, n = function(e, _) {
  return l.test(_) ? s[e.month()] : o[e.month()];
};
n.s = o;
n.f = s;
var d = {
  name: "pl",
  weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split("_"),
  weekdaysShort: "ndz_pon_wt_\u015Br_czw_pt_sob".split("_"),
  weekdaysMin: "Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split("_"),
  months: n,
  monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split("_"),
  ordinal: function(e) {
    return e + ".";
  },
  weekStart: 1,
  yearStart: 4,
  relativeTime: {
    future: "za %s",
    past: "%s temu",
    s: "kilka sekund",
    m: a,
    mm: a,
    h: a,
    hh: a,
    d: "1 dzie\u0144",
    dd: "%d dni",
    M: "miesi\u0105c",
    MM: a,
    y: "rok",
    yy: a
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  }
};
m.locale(d, null, !0);
export {
  d as default
};
