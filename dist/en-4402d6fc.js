const n = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
  ordinal: function(a) {
    var e = ["th", "st", "nd", "rd"], r = a % 100;
    return "[" + a + (e[(r - 20) % 10] || e[r] || e[0]) + "]";
  }
};
export {
  n as default
};
