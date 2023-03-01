import { d as i } from "./entry.3468fba7.mjs";
import "vue";
var _ = {
  s: "ein paar Sekunden",
  m: ["eine Minute", "einer Minute"],
  mm: "%d Minuten",
  h: ["eine Stunde", "einer Stunde"],
  hh: "%d Stunden",
  d: ["ein Tag", "einem Tag"],
  dd: ["%d Tage", "%d Tagen"],
  M: ["ein Monat", "einem Monat"],
  MM: ["%d Monate", "%d Monaten"],
  y: ["ein Jahr", "einem Jahr"],
  yy: ["%d Jahre", "%d Jahren"]
};
function e(r, t, n) {
  var a = _[n];
  return Array.isArray(a) && (a = a[t ? 0 : 1]), a.replace("%d", r);
}
var M = {
  name: "de",
  weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
  weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
  weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
  months: "Januar_Februar_M\xE4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
  monthsShort: "Jan._Feb._M\xE4rz_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),
  ordinal: function(t) {
    return t + ".";
  },
  weekStart: 1,
  yearStart: 4,
  formats: {
    LTS: "HH:mm:ss",
    LT: "HH:mm",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY HH:mm",
    LLLL: "dddd, D. MMMM YYYY HH:mm"
  },
  relativeTime: {
    future: "in %s",
    past: "vor %s",
    s: e,
    m: e,
    mm: e,
    h: e,
    hh: e,
    d: e,
    dd: e,
    M: e,
    MM: e,
    y: e,
    yy: e
  }
};
i.locale(M, null, !0);
export {
  M as default
};
