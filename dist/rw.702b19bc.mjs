import { d as m } from "./entry.3468fba7.mjs";
import "vue";
var u = {
  name: "rw",
  weekdays: "Ku Cyumweru_Kuwa Mbere_Kuwa Kabiri_Kuwa Gatatu_Kuwa Kane_Kuwa Gatanu_Kuwa Gatandatu".split("_"),
  months: "Mutarama_Gashyantare_Werurwe_Mata_Gicurasi_Kamena_Nyakanga_Kanama_Nzeri_Ukwakira_Ugushyingo_Ukuboza".split("_"),
  relativeTime: {
    future: "mu %s",
    past: "%s",
    s: "amasegonda",
    m: "Umunota",
    mm: "%d iminota",
    h: "isaha",
    hh: "%d amasaha",
    d: "Umunsi",
    dd: "%d iminsi",
    M: "ukwezi",
    MM: "%d amezi",
    y: "umwaka",
    yy: "%d imyaka"
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  ordinal: function(a) {
    return a;
  }
};
m.locale(u, null, !0);
export {
  u as default
};
