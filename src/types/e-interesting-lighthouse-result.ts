// --- CAUTION : audit stuff string should match name in psiAuditsKeys
enum InterestingLighthouseResult {
  performance = "performance", // score
  // --- audit stuff start
  cls = "cls",
  ds = "ds",
  fcp = "fcp",
  lcp = "lcp",
  nrtt = "nrtt",
  nsl = "nsl",
  rbr = "rbr",
  si = "si",
  srt = "srt",
  tbt = "tbt",
  tbw = "tbw"
  // --- audit stuff end
}

export default InterestingLighthouseResult;
