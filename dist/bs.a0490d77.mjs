import { d as a } from "./entry.3468fba7.mjs";
import "vue";
var e = {
  name: "bs",
  weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split("_"),
  months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
  weekStart: 1,
  weekdaysShort: "ned._pon._uto._sri._\u010Det._pet._sub.".split("_"),
  monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
  weekdaysMin: "ne_po_ut_sr_\u010De_pe_su".split("_"),
  ordinal: function(_) {
    return _;
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
a.locale(e, null, !0);
export {
  e as default
};
