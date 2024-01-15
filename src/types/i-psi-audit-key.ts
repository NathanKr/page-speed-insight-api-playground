
export default interface IPsiAuditsKey {
  key:
    | "cumulative-layout-shift"
    | "first-contentful-paint"
    | "largest-contentful-paint"
    | "network-rtt"
    | "network-server-latency"
    | "render-blocking-resources"
    | "server-response-time"
    | "total-blocking-time";
  name: string; // --- e.g. "cls"
}
