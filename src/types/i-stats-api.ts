import IResultSummary from "./i-result-summary";

export default interface IStatsApi {
  numSamples: number;
  statsSummary: IResultSummary[];
}
