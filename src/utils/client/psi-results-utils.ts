import IFromRoot from "@/types/i-from-root";
import IResultSummary from "@/types/i-result-summary";
import IResultUrl from "@/types/i-result-url";
import IStat from "@/types/i-stat";
import { PsiUrl2FromRootsMap } from "@/types/types";
import { max, mean, min, std } from "mathjs";
import { limitToTwoDecimalPlaces } from "./psi-utils";
import InterestingLighthouseResult from "@/types/interesting-lighthouse-result";
import { psiAuditsKeys } from "./audit-utils";
import IPsiAuditsKey from "@/types/i-psi-audit-key";
import IInterestingLighthouseResultType from "@/types/i-interesting-lighthouse-result-type";

function getInterestingLighthouseResultValue(
  resultMetaData: IInterestingLighthouseResultType,
  root: IFromRoot
): number {
  const { type } = resultMetaData;

  // --- isScore not reevant for score
  if (type == InterestingLighthouseResult.score) return root.score.performance!;

  // -- expect audit
  const obj: IPsiAuditsKey | undefined = psiAuditsKeys.find(
    (it) => it.name == type
  );

  if (obj) {
    const audit = root.audits[obj.key];
    return isScoreWithOverride(resultMetaData) ? audit.score : audit.numericValue;
  }

  throw new Error(`type not matched : ${type}`);
}

function getInterestingLighthouseResultArray(
  resultMetaData: IInterestingLighthouseResultType,
  roots: IFromRoot[]
): number[] {
  return roots.map((root) => {
    return getInterestingLighthouseResultValue(resultMetaData, root);
  });
}

/**
 * This is the summary per page
 * @param resultMetaData 
 * @param roots 
 * @returns 
 */
export function getInterestingLighthouseResultStat(
  resultMetaData: IInterestingLighthouseResultType,
  roots: IFromRoot[]
): IStat {
  const arInterestingResults: number[] = getInterestingLighthouseResultArray(
    resultMetaData,
    roots
  );
  const interestingStat: IStat = {
    name : resultMetaData.type,
    isScore : resultMetaData._isScore ? true: false,
    avg: mean(arInterestingResults),
    std: std(...arInterestingResults),
  };

  return interestingStat;
}

function makeDefaultIScoreSummary(): IResultSummary {
  const performanceScore: IResultSummary = {
    avgResult: null,
    stdResult: null,
    low: [],
    high: [],
  };
  return performanceScore;
}

/**
 * This is the summary of all sample on all pages
 * @param psiUrl2FromRootsMap
 * @returns
 */
export function getInterestingLighthouseResultStatSummary(
  resultMetaData: IInterestingLighthouseResultType,
  psiUrl2FromRootsMap: PsiUrl2FromRootsMap
): IResultSummary {
  let performanceScore = makeDefaultIScoreSummary();

  try {
    const urlToPerformanceScoreAvgMap: Map<string, IStat> = new Map();
    psiUrl2FromRootsMap.forEach((psiRoots, url) => {
      const interestingStat: IStat = getInterestingLighthouseResultStat(
        resultMetaData,
        psiRoots
      );
      urlToPerformanceScoreAvgMap.set(url, interestingStat);
    });

    const arStats: IStat[] = Array.from(urlToPerformanceScoreAvgMap.values());
    const arAvg = arStats.map((it) => it.avg);
    performanceScore.avgResult = limitToTwoDecimalPlaces(mean(arAvg));

    performanceScore.stdResult = limitToTwoDecimalPlaces(std(...arAvg));

    const lowScorePerformanceLimited = limitToTwoDecimalPlaces(min(arAvg));
    const highScorePerformanceLimited = limitToTwoDecimalPlaces(max(arAvg));

    urlToPerformanceScoreAvgMap.forEach((stat, url) => {
      const avgLimited = limitToTwoDecimalPlaces(stat.avg);
      const isScore = isScoreWithOverride(resultMetaData);

      if (avgLimited == lowScorePerformanceLimited) {
        const scoreUrl: IResultUrl = {
          isScore,
          result: avgLimited,
          url,
        };
        performanceScore.low.push(scoreUrl);
      }
      if (avgLimited == highScorePerformanceLimited) {
        const scoreUrl: IResultUrl = {
          isScore,
          result: avgLimited,
          url,
        };
        performanceScore.high.push(scoreUrl);
      }
    });
  } catch (err) {
    performanceScore = makeDefaultIScoreSummary();
    console.error(err);
  }

  return performanceScore;
}

function isScoreWithOverride(resultMetaData: IInterestingLighthouseResultType): boolean {
  const { _isScore, type } = resultMetaData;
  if (type == InterestingLighthouseResult.score) return true; // decide by type

  return _isScore!;
}
