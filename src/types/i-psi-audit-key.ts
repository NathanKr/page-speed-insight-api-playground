import { Audits } from "./google-api-psi-types";

export default interface IPsiAuditsKey {
  key: keyof (Audits); // --- e.g. "cumulative-layout-shift"
  name: string; // --- e.g. "cls"
}
