import { d as k } from "./entry-a2048c7e.js";
import "vue";
function u(t, a, n, _) {
  var s = {
    s: "muutama sekunti",
    m: "minuutti",
    mm: "%d minuuttia",
    h: "tunti",
    hh: "%d tuntia",
    d: "päivä",
    dd: "%d päivää",
    M: "kuukausi",
    MM: "%d kuukautta",
    y: "vuosi",
    yy: "%d vuotta",
    numbers: "nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_")
  }, m = {
    s: "muutaman sekunnin",
    m: "minuutin",
    mm: "%d minuutin",
    h: "tunnin",
    hh: "%d tunnin",
    d: "päivän",
    dd: "%d päivän",
    M: "kuukauden",
    MM: "%d kuukauden",
    y: "vuoden",
    yy: "%d vuoden",
    numbers: "nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_")
  }, i = _ && !a ? m : s, e = i[n];
  return t < 10 ? e.replace("%d", i.numbers[t]) : e.replace("%d", t);
}
var l = {
  name: "fi",
  // Finnish
  weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
  // Note weekdays are not capitalized in Finnish
  weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
  // There is no short form of weekdays in Finnish except this 2 letter format so it is used for both 'weekdaysShort' and 'weekdaysMin'
  weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
  months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
  // Note month names are not capitalized in Finnish
  monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
  ordinal: function(a) {
    return a + ".";
  },
  weekStart: 1,
  yearStart: 4,
  relativeTime: {
    future: "%s päästä",
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
