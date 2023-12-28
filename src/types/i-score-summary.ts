import IScoreUrl from "./i-score-url";

export default interface IScoreSummary {
    avgScore: number | null; // avarage on all avg
    stdScore: number | null; // avarage on all std
    low: IScoreUrl[]; // low scores (if few has same score)
    high: IScoreUrl[]; // high scores (if few has same score)
  }

