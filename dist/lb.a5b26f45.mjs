import { d as _ } from "./entry.3468fba7.mjs";
import "vue";
var r = {
  name: "lb",
  weekdays: "Sonndeg_M\xE9indeg_D\xEBnschdeg_M\xEBttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
  months: "Januar_Februar_M\xE4erz_Abr\xEBll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
  weekStart: 1,
  weekdaysShort: "So._M\xE9._D\xEB._M\xEB._Do._Fr._Sa.".split("_"),
  monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
  weekdaysMin: "So_M\xE9_D\xEB_M\xEB_Do_Fr_Sa".split("_"),
  ordinal: function(e) {
    return e;
  },
  formats: {
    LT: "H:mm [Auer]",
    LTS: "H:mm:ss [Auer]",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm [Auer]",
    LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
  }
};
_.locale(r, null, !0);
export {
  r as default
};
