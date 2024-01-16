import EInterestingLighthouseResultType from "./e-interesting-lighthouse-result-type";

export default interface IStat {
  name: string;
  type: EInterestingLighthouseResultType;
  avg: number;
  std: number;
}
