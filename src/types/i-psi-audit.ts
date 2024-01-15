import IPsiAuditsKey from "./i-psi-audit-key";

export default interface IPsiAudit {
    name: IPsiAuditsKey;
    score: number | undefined;
    numericValue: number;
    numericUnit: string;
  }