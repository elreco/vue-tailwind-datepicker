import { d as o } from "./entry-f870c8cc.js";
import "vue";
var r = {
  words: {
    m: ["један минут", "једног минута"],
    mm: ["%d минут", "%d минута", "%d минута"],
    h: ["један сат", "једног сата"],
    hh: ["%d сат", "%d сата", "%d сати"],
    d: ["један дан", "једног дана"],
    dd: ["%d дан", "%d дана", "%d дана"],
    M: ["један месец", "једног месеца"],
    MM: ["%d месец", "%d месеца", "%d месеци"],
    y: ["једну годину", "једне године"],
    yy: ["%d годину", "%d године", "%d година"]
  },
  correctGrammarCase: function(e, t) {
    return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 === 1 ? t[0] : t[1] : t[2];
  },
  relativeTimeFormatter: function(e, t, a, d) {
    var m = r.words[a];
    if (a.length === 1)
      return a === "y" && t ? "једна година" : d || t ? m[0] : m[1];
    var i = r.correctGrammarCase(e, m);
    return a === "yy" && t && i === "%d годину" ? e + " година" : i.replace("%d", e);
  }
}, l = {
  name: "sr-cyrl",
  weekdays: "Недеља_Понедељак_Уторак_Среда_Четвртак_Петак_Субота".split("_"),
  weekdaysShort: "Нед._Пон._Уто._Сре._Чет._Пет._Суб.".split("_"),
  weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
  months: "Јануар_Фебруар_Март_Април_Мај_Јун_Јул_Август_Септембар_Октобар_Новембар_Децембар".split("_"),
  monthsShort: "Јан._Феб._Мар._Апр._Мај_Јун_Јул_Авг._Сеп._Окт._Нов._Дец.".split("_"),
  weekStart: 1,
  relativeTime: {
    future: "за %s",
    past: "пре %s",
    s: "неколико секунди",
    m: r.relativeTimeFormatter,
    mm: r.relativeTimeFormatter,
    h: r.relativeTimeFormatter,
    hh: r.relativeTimeFormatter,
    d: r.relativeTimeFormatter,
    dd: r.relativeTimeFormatter,
    M: r.relativeTimeFormatter,
    MM: r.relativeTimeFormatter,
    y: r.relativeTimeFormatter,
    yy: r.relativeTimeFormatter
  },
  ordinal: function(e) {
    return e + ".";
  },
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "D. M. YYYY.",
    LL: "D. MMMM YYYY.",
    LLL: "D. MMMM YYYY. H:mm",
    LLLL: "dddd, D. MMMM YYYY. H:mm"
  }
};
o.locale(l, null, !0);
export {
  l as default
};
