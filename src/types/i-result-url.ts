import EInterestingLighthouseResultType from "./e-interesting-lighthouse-result-type";

export default interface IResultUrl {
  type: EInterestingLighthouseResultType;
  result: number;
  url: string;
}
