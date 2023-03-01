import { d as l } from "./entry.3468fba7.mjs";
import "vue";
var a = "sausio_vasario_kovo_baland\u017Eio_gegu\u017E\u0117s_bir\u017Eelio_liepos_rugpj\u016B\u010Dio_rugs\u0117jo_spalio_lapkri\u010Dio_gruod\u017Eio".split("_"), i = "sausis_vasaris_kovas_balandis_gegu\u017E\u0117_bir\u017Eelis_liepa_rugpj\u016Btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"), d = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, M = function(s, m) {
  return d.test(m) ? a[s.month()] : i[s.month()];
};
M.s = i;
M.f = a;
var _ = {
  name: "lt",
  weekdays: "sekmadienis_pirmadienis_antradienis_tre\u010Diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"),
  weekdaysShort: "sek_pir_ant_tre_ket_pen_\u0161e\u0161".split("_"),
  weekdaysMin: "s_p_a_t_k_pn_\u0161".split("_"),
  months: M,
  monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
  ordinal: function(s) {
    return s + ".";
  },
  weekStart: 1,
  relativeTime: {
    future: "u\u017E %s",
    past: "prie\u0161 %s",
    s: "kelias sekundes",
    m: "minut\u0119",
    mm: "%d minutes",
    h: "valand\u0105",
    hh: "%d valandas",
    d: "dien\u0105",
    dd: "%d dienas",
    M: "m\u0117nes\u012F",
    MM: "%d m\u0117nesius",
    y: "metus",
    yy: "%d metus"
  },
  format: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "YYYY [m.] MMMM D [d.]",
    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
    l: "YYYY-MM-DD",
    ll: "YYYY [m.] MMMM D [d.]",
    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "YYYY [m.] MMMM D [d.]",
    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
    l: "YYYY-MM-DD",
    ll: "YYYY [m.] MMMM D [d.]",
    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
  }
};
l.locale(_, null, !0);
export {
  _ as default
};
