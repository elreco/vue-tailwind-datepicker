import { d as _ } from "./entry.3468fba7.mjs";
import "vue";
var s = {
  name: "es-us",
  weekdays: "domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),
  weekdaysShort: "dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),
  weekdaysMin: "do_lu_ma_mi_ju_vi_s\xE1".split("_"),
  months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
  monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
  relativeTime: {
    future: "en %s",
    past: "hace %s",
    s: "unos segundos",
    m: "un minuto",
    mm: "%d minutos",
    h: "una hora",
    hh: "%d horas",
    d: "un d\xEDa",
    dd: "%d d\xEDas",
    M: "un mes",
    MM: "%d meses",
    y: "un a\xF1o",
    yy: "%d a\xF1os"
  },
  ordinal: function(e) {
    return e + "\xBA";
  },
  formats: {
    LT: "h:mm A",
    LTS: "h:mm:ss A",
    L: "MM/DD/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY h:mm A",
    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
  }
};
_.locale(s, null, !0);
export {
  s as default
};
