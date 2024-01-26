import IInterestingLighthouseResultType from "./i-interesting-lighthouse-result-type";
import IResultUrl from "./i-result-url";

export default interface IResultSummary {
  resultMetaData: IInterestingLighthouseResultType;
  avgResult: number | null; // avarage on all avg
  stdResult: number | null; // avarage on all std
  lowAvg: IResultUrl[]; // low average (if few has same value)
  highAvg: IResultUrl[]; // high average (if few has same score)
  rankingAvgLowToHigh: IResultUrl[];
}
