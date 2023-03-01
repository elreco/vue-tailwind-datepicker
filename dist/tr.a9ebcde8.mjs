import { d as _ } from "./entry.3468fba7.mjs";
import "vue";
var r = {
  name: "tr",
  weekdays: "Pazar_Pazartesi_Sal\u0131_\xC7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split("_"),
  weekdaysShort: "Paz_Pts_Sal_\xC7ar_Per_Cum_Cts".split("_"),
  weekdaysMin: "Pz_Pt_Sa_\xC7a_Pe_Cu_Ct".split("_"),
  months: "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\xFCl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
  monthsShort: "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split("_"),
  weekStart: 1,
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  relativeTime: {
    future: "%s sonra",
    past: "%s \xF6nce",
    s: "birka\xE7 saniye",
    m: "bir dakika",
    mm: "%d dakika",
    h: "bir saat",
    hh: "%d saat",
    d: "bir g\xFCn",
    dd: "%d g\xFCn",
    M: "bir ay",
    MM: "%d ay",
    y: "bir y\u0131l",
    yy: "%d y\u0131l"
  },
  ordinal: function(a) {
    return a + ".";
  }
};
_.locale(r, null, !0);
export {
  r as default
};
