import { d as _ } from "./entry.3468fba7.mjs";
import "vue";
var a = {
  name: "oc-lnc",
  weekdays: "dimenge_diluns_dimars_dim\xE8cres_dij\xF2us_divendres_dissabte".split("_"),
  weekdaysShort: "Dg_Dl_Dm_Dc_Dj_Dv_Ds".split("_"),
  weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
  months: "geni\xE8r_febri\xE8r_mar\xE7_abrial_mai_junh_julhet_agost_setembre_oct\xF2bre_novembre_decembre".split("_"),
  monthsShort: "gen_feb_mar\xE7_abr_mai_junh_julh_ago_set_oct_nov_dec".split("_"),
  weekStart: 1,
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM [de] YYYY",
    LLL: "D MMMM [de] YYYY [a] H:mm",
    LLLL: "dddd D MMMM [de] YYYY [a] H:mm"
  },
  relativeTime: {
    future: "d'aqu\xED %s",
    past: "fa %s",
    s: "unas segondas",
    m: "una minuta",
    mm: "%d minutas",
    h: "una ora",
    hh: "%d oras",
    d: "un jorn",
    dd: "%d jorns",
    M: "un mes",
    MM: "%d meses",
    y: "un an",
    yy: "%d ans"
  },
  ordinal: function(e) {
    return e + "\xBA";
  }
};
_.locale(a, null, !0);
export {
  a as default
};
