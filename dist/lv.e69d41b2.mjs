import { d as e } from "./entry.3468fba7.mjs";
import "vue";
var s = {
  name: "lv",
  weekdays: "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),
  months: "janv\u0101ris_febru\u0101ris_marts_apr\u012Blis_maijs_j\u016Bnijs_j\u016Blijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
  weekStart: 1,
  weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
  monthsShort: "jan_feb_mar_apr_mai_j\u016Bn_j\u016Bl_aug_sep_okt_nov_dec".split("_"),
  weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
  ordinal: function(a) {
    return a;
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY.",
    LL: "YYYY. [gada] D. MMMM",
    LLL: "YYYY. [gada] D. MMMM, HH:mm",
    LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
  },
  relativeTime: {
    future: "p\u0113c %s",
    past: "pirms %s",
    s: "da\u017E\u0101m sekund\u0113m",
    m: "min\u016Btes",
    mm: "%d min\u016Bt\u0113m",
    h: "stundas",
    hh: "%d stund\u0101m",
    d: "dienas",
    dd: "%d dien\u0101m",
    M: "m\u0113ne\u0161a",
    MM: "%d m\u0113ne\u0161iem",
    y: "gada",
    yy: "%d gadiem"
  }
};
e.locale(s, null, !0);
export {
  s as default
};
