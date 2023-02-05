import { d as a } from "./entry.3468fba7.mjs";
import "vue";
var o = {
  name: "pt-br",
  weekdays: "domingo_segunda-feira_ter\xE7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xE1bado".split("_"),
  weekdaysShort: "dom_seg_ter_qua_qui_sex_s\xE1b".split("_"),
  weekdaysMin: "Do_2\xAA_3\xAA_4\xAA_5\xAA_6\xAA_S\xE1".split("_"),
  months: "janeiro_fevereiro_mar\xE7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
  monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
  ordinal: function(e) {
    return e + "\xBA";
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY [\xE0s] HH:mm",
    LLLL: "dddd, D [de] MMMM [de] YYYY [\xE0s] HH:mm"
  },
  relativeTime: {
    future: "em %s",
    past: "h\xE1 %s",
    s: "poucos segundos",
    m: "um minuto",
    mm: "%d minutos",
    h: "uma hora",
    hh: "%d horas",
    d: "um dia",
    dd: "%d dias",
    M: "um m\xEAs",
    MM: "%d meses",
    y: "um ano",
    yy: "%d anos"
  }
};
a.locale(o, null, !0);
export {
  o as default
};
