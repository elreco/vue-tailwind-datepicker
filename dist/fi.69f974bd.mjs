import { d as k } from "./entry.3468fba7.mjs";
import "vue";
function u(t, a, n, _) {
  var s = {
    s: "muutama sekunti",
    m: "minuutti",
    mm: "%d minuuttia",
    h: "tunti",
    hh: "%d tuntia",
    d: "p\xE4iv\xE4",
    dd: "%d p\xE4iv\xE4\xE4",
    M: "kuukausi",
    MM: "%d kuukautta",
    y: "vuosi",
    yy: "%d vuotta",
    numbers: "nolla_yksi_kaksi_kolme_nelj\xE4_viisi_kuusi_seitsem\xE4n_kahdeksan_yhdeks\xE4n".split("_")
  }, m = {
    s: "muutaman sekunnin",
    m: "minuutin",
    mm: "%d minuutin",
    h: "tunnin",
    hh: "%d tunnin",
    d: "p\xE4iv\xE4n",
    dd: "%d p\xE4iv\xE4n",
    M: "kuukauden",
    MM: "%d kuukauden",
    y: "vuoden",
    yy: "%d vuoden",
    numbers: "nollan_yhden_kahden_kolmen_nelj\xE4n_viiden_kuuden_seitsem\xE4n_kahdeksan_yhdeks\xE4n".split("_")
  }, i = _ && !a ? m : s, e = i[n];
  return t < 10 ? e.replace("%d", i.numbers[t]) : e.replace("%d", t);
}
var l = {
  name: "fi",
  weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
  weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
  weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
  months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xE4kuu_hein\xE4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
  monthsShort: "tammi_helmi_maalis_huhti_touko_kes\xE4_hein\xE4_elo_syys_loka_marras_joulu".split("_"),
  ordinal: function(a) {
    return a + ".";
  },
  weekStart: 1,
  yearStart: 4,
  relativeTime: {
    future: "%s p\xE4\xE4st\xE4",
    past: "%s sitten",
    s: u,
    m: u,
    mm: u,
    h: u,
    hh: u,
    d: u,
    dd: u,
    M: u,
    MM: u,
    y: u,
    yy: u
  },
  formats: {
    LT: "HH.mm",
    LTS: "HH.mm.ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM[ta] YYYY",
    LLL: "D. MMMM[ta] YYYY, [klo] HH.mm",
    LLLL: "dddd, D. MMMM[ta] YYYY, [klo] HH.mm",
    l: "D.M.YYYY",
    ll: "D. MMM YYYY",
    lll: "D. MMM YYYY, [klo] HH.mm",
    llll: "ddd, D. MMM YYYY, [klo] HH.mm"
  }
};
k.locale(l, null, !0);
export {
  l as default
};
