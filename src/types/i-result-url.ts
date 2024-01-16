import InterestingLighthouseResultType from "./e-interesting-lighthouse-result-type";

export default interface IResultUrl {
  type: InterestingLighthouseResultType;
  result: number;
  url: string;
}
