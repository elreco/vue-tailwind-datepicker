import { d as _ } from "./entry.3468fba7.mjs";
import "vue";
var t = {
  name: "sl",
  weekdays: "nedelja_ponedeljek_torek_sreda_\u010Detrtek_petek_sobota".split("_"),
  months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
  weekStart: 1,
  weekdaysShort: "ned._pon._tor._sre._\u010Det._pet._sob.".split("_"),
  monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
  weekdaysMin: "ne_po_to_sr_\u010De_pe_so".split("_"),
  ordinal: function(e) {
    return e + ".";
  },
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd, D. MMMM YYYY H:mm"
  },
  relativeTime: {
    future: "\u010Dez %s",
    past: "pred %s",
    s: "nekaj sekund",
    m: "minuta",
    mm: "%d minut",
    h: "ura",
    hh: "%d ur",
    d: "dan",
    dd: "%d dni",
    M: "mesec",
    MM: "%d mesecev",
    y: "leto",
    yy: "%d let"
  }
};
_.locale(t, null, !0);
export {
  t as default
};
