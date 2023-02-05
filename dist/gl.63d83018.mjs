import { d as o } from "./entry.3468fba7.mjs";
import "vue";
var _ = {
  name: "gl",
  weekdays: "domingo_luns_martes_m\xE9rcores_xoves_venres_s\xE1bado".split("_"),
  months: "xaneiro_febreiro_marzo_abril_maio_xu\xF1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
  weekStart: 1,
  weekdaysShort: "dom._lun._mar._m\xE9r._xov._ven._s\xE1b.".split("_"),
  monthsShort: "xan._feb._mar._abr._mai._xu\xF1._xul._ago._set._out._nov._dec.".split("_"),
  weekdaysMin: "do_lu_ma_m\xE9_xo_ve_s\xE1".split("_"),
  ordinal: function(e) {
    return e + "\xBA";
  },
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY H:mm",
    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
  },
  relativeTime: {
    future: "en %s",
    past: "fai %s",
    s: "uns segundos",
    m: "un minuto",
    mm: "%d minutos",
    h: "unha hora",
    hh: "%d horas",
    d: "un d\xEDa",
    dd: "%d d\xEDas",
    M: "un mes",
    MM: "%d meses",
    y: "un ano",
    yy: "%d anos"
  }
};
o.locale(_, null, !0);
export {
  _ as default
};
