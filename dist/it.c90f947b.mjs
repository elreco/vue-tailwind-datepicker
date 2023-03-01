import { d as _ } from "./entry.3468fba7.mjs";
import "vue";
var o = {
  name: "it",
  weekdays: "domenica_luned\xEC_marted\xEC_mercoled\xEC_gioved\xEC_venerd\xEC_sabato".split("_"),
  weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
  weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
  months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
  weekStart: 1,
  monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  relativeTime: {
    future: "tra %s",
    past: "%s fa",
    s: "qualche secondo",
    m: "un minuto",
    mm: "%d minuti",
    h: "un' ora",
    hh: "%d ore",
    d: "un giorno",
    dd: "%d giorni",
    M: "un mese",
    MM: "%d mesi",
    y: "un anno",
    yy: "%d anni"
  },
  ordinal: function(e) {
    return e + "\xBA";
  }
};
_.locale(o, null, !0);
export {
  o as default
};
