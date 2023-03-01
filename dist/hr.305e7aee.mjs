import { d as o } from "./entry.3468fba7.mjs";
import "vue";
var t = "sije\u010Dnja_velja\u010De_o\u017Eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), s = "sije\u010Danj_velja\u010Da_o\u017Eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"), r = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/, _ = function(a, n) {
  return r.test(n) ? t[a.month()] : s[a.month()];
};
_.s = s;
_.f = t;
var i = {
  name: "hr",
  weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split("_"),
  weekdaysShort: "ned._pon._uto._sri._\u010Det._pet._sub.".split("_"),
  weekdaysMin: "ne_po_ut_sr_\u010De_pe_su".split("_"),
  months: _,
  monthsShort: "sij._velj._o\u017Eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
  weekStart: 1,
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd, D. MMMM YYYY H:mm"
  },
  relativeTime: {
    future: "za %s",
    past: "prije %s",
    s: "sekunda",
    m: "minuta",
    mm: "%d minuta",
    h: "sat",
    hh: "%d sati",
    d: "dan",
    dd: "%d dana",
    M: "mjesec",
    MM: "%d mjeseci",
    y: "godina",
    yy: "%d godine"
  },
  ordinal: function(a) {
    return a + ".";
  }
};
o.locale(i, null, !0);
export {
  i as default
};
