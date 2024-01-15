import IPsiAuditsKey from "@/types/i-psi-audit-key";

export const psiAuditsKeys: IPsiAuditsKey[] = [
  {
    key: "cumulative-layout-shift",
    name: "cls",
  },
  {
    key : "dom-size",
    name : "ds"
  },
  // does not have numericValue
  // {
  //   key:"errors-in-console",
  //   name : "eic"
  // },
  {
    key: "first-contentful-paint",
    name: "fcp",
  },
  {
    key: "largest-contentful-paint",
    name: "lcp",
  },
  {
    key: "network-rtt",
    name: "nrtt",
  },
  {
    key: "network-server-latency",
    name: "nsl",
  },
  {
    key: "render-blocking-resources",
    name: "rbr",
  },
  {
    key: "server-response-time",
    name: "srt",
  },
  {
    key: "speed-index",
    name: "si",
  },
  {
    key: "total-byte-weight",
    name: "tbw",
  },
  {
    key: "total-blocking-time",
    name: "tbt",
  },
];
