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
function e(a, t, r) {
  var n = _[r];
  return Array.isArray(n) && (n = n[t ? 0 : 1]), n.replace("%d", a);
}
var M = {
  name: "de-at",
  weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
  weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
  weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
  months: "J\xE4nner_Februar_M\xE4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
  monthsShort: "J\xE4n._Feb._M\xE4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
  ordinal: function(t) {
    return t + ".";
  },
  weekStart: 1,
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
