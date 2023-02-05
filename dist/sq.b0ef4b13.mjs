import { d as r } from "./entry.3468fba7.mjs";
import "vue";
var t = {
  name: "sq",
  weekdays: "E Diel_E H\xEBn\xEB_E Mart\xEB_E M\xEBrkur\xEB_E Enjte_E Premte_E Shtun\xEB".split("_"),
  months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xEBntor_Dhjetor".split("_"),
  weekStart: 1,
  weekdaysShort: "Die_H\xEBn_Mar_M\xEBr_Enj_Pre_Sht".split("_"),
  monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xEBn_Dhj".split("_"),
  weekdaysMin: "D_H_Ma_M\xEB_E_P_Sh".split("_"),
  ordinal: function(_) {
    return _;
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  relativeTime: {
    future: "n\xEB %s",
    past: "%s m\xEB par\xEB",
    s: "disa sekonda",
    m: "nj\xEB minut\xEB",
    mm: "%d minuta",
    h: "nj\xEB or\xEB",
    hh: "%d or\xEB",
    d: "nj\xEB dit\xEB",
    dd: "%d dit\xEB",
    M: "nj\xEB muaj",
    MM: "%d muaj",
    y: "nj\xEB vit",
    yy: "%d vite"
  }
};
r.locale(t, null, !0);
export {
  t as default
};
