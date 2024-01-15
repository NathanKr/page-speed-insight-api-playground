import IFromRoot from "./i-from-root";

export type PsiUrl2FromRootsMap = Map<string, IFromRoot[]>;

export type AuditKeyType =
  | "cumulative-layout-shift"
  | "dom-size"
  | "first-contentful-paint"
  | "largest-contentful-paint"
  | "network-rtt"
  | "network-server-latency"
  | "render-blocking-resources"
  | "server-response-time"
  | "speed-index" // --- how quickly the contents of a page are visibly populated.
  | "total-blocking-time"
  | "total-byte-weight"; // --- how heavy the page is
