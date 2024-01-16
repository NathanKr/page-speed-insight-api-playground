import IInterestingLighthouseResultType from "./i-interesting-lighthouse-result-type";
import IResultUrl from "./i-result-url";

export default interface IResultSummary {
  resultMetaData: IInterestingLighthouseResultType;
  avgResult: number | null; // avarage on all avg
  stdResult: number | null; // avarage on all std
  low: IResultUrl[]; // low scores (if few has same score)
  high: IResultUrl[]; // high scores (if few has same score)
}
