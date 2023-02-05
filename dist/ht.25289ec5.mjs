import { d as a } from "./entry.3468fba7.mjs";
import "vue";
var e = {
  name: "ht",
  weekdays: "dimanch_lendi_madi_m\xE8kredi_jedi_vandredi_samdi".split("_"),
  months: "janvye_fevriye_mas_avril_me_jen_jiy\xE8_out_septanm_okt\xF2b_novanm_desanm".split("_"),
  weekdaysShort: "dim._len._mad._m\xE8k._jed._van._sam.".split("_"),
  monthsShort: "jan._fev._mas_avr._me_jen_jiy\xE8._out_sept._okt._nov._des.".split("_"),
  weekdaysMin: "di_le_ma_m\xE8_je_va_sa".split("_"),
  ordinal: function(_) {
    return _;
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  relativeTime: {
    future: "nan %s",
    past: "sa gen %s",
    s: "k\xE8k segond",
    m: "yon minit",
    mm: "%d minit",
    h: "in\xE8dtan",
    hh: "%d z\xE8",
    d: "yon jou",
    dd: "%d jou",
    M: "yon mwa",
    MM: "%d mwa",
    y: "yon ane",
    yy: "%d ane"
  }
};
a.locale(e, null, !0);
export {
  e as default
};
