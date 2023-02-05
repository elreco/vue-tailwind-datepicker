import { d as e } from "./entry.3468fba7.mjs";
import "vue";
var _ = {
  name: "nl-be",
  weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
  months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
  monthsShort: "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
  weekStart: 1,
  weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
  weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
  ordinal: function(a) {
    return a;
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
    future: "over %s",
    past: "%s geleden",
    s: "een paar seconden",
    m: "\xE9\xE9n minuut",
    mm: "%d minuten",
    h: "\xE9\xE9n uur",
    hh: "%d uur",
    d: "\xE9\xE9n dag",
    dd: "%d dagen",
    M: "\xE9\xE9n maand",
    MM: "%d maanden",
    y: "\xE9\xE9n jaar",
    yy: "%d jaar"
  }
};
e.locale(_, null, !0);
export {
  _ as default
};
