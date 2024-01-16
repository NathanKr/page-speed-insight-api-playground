import IFromRoot from "@/types/i-from-root";
import IResultSummary from "@/types/i-result-summary";
import IResultUrl from "@/types/i-result-url";
import IStat from "@/types/i-stat";
import { PsiUrl2FromRootsMap } from "@/types/types";
import { max, mean, min, std } from "mathjs";
import { limitToTwoDecimalPlaces } from "./psi-utils";
import InterestingLighthouseResult from "@/types/e-interesting-lighthouse-result";
import { psiAuditsKeys } from "./audit-utils";
import IPsiAuditsKey from "@/types/i-psi-audit-key";
import IInterestingLighthouseResultType from "@/types/i-interesting-lighthouse-result-type";
import InterestingLighthouseResultType from "@/types/e-interesting-lighthouse-result-type";

function getInterestingLighthouseResultValue(
  resultMetaData: IInterestingLighthouseResultType,
  root: IFromRoot
): number {
  const { service, type } = resultMetaData;

  // --- isScore not reevant for score
  if (
    service == InterestingLighthouseResult.performance &&
    type == InterestingLighthouseResultType.score
  ) {
    return root.score.performance!;
  }

  // -- expect audit
  const obj: IPsiAuditsKey | undefined = psiAuditsKeys.find(
    (it) => it.name == service
  );

  if (obj) {
    const audit = root.audits[obj.key];
    return type == InterestingLighthouseResultType.score
      ? audit.score
      : audit.numericValue;
  }

  throw new Error(`service not matched : ${service}`);
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
    name: resultMetaData.service,
    // isScore: resultMetaData._isScore ? true : false,
    avg: mean(arInterestingResults),
    std: std(...arInterestingResults),
    type: resultMetaData.type,
  };

  return interestingStat;
}

export function getAllInterestingLighthouseResultStat(
  roots: IFromRoot[]
): IStat[] {
  const stats: IStat[] = [];
  const resultsMetaData: IInterestingLighthouseResultType[] = getAllMetaData();

  resultsMetaData.forEach((resultMetaData) => {
    const stat = getInterestingLighthouseResultStat(resultMetaData, roots);
    stats.push(stat);
  });

  return stats;
}

function getAllMetaData(): IInterestingLighthouseResultType[] {
  return [
    {
      service: InterestingLighthouseResult.performance,
      type: InterestingLighthouseResultType.score,
    },
    {
      service: InterestingLighthouseResult.cls,
      type: InterestingLighthouseResultType.score,
    },
    {
      service: InterestingLighthouseResult.cls,
      type: InterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.ds,
      type: InterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.fcp,
      type: InterestingLighthouseResultType.score,
    },
    {
      service: InterestingLighthouseResult.fcp,
      type: InterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.lcp,
      type: InterestingLighthouseResultType.score,
    },
    {
      service: InterestingLighthouseResult.lcp,
      type: InterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.nrtt,
      type: InterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.nsl,
      type: InterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.rbr,
      type: InterestingLighthouseResultType.score,
    },
    {
      service: InterestingLighthouseResult.rbr,
      type: InterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.srt,
      type: InterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.si,
      type: InterestingLighthouseResultType.score,
    },
    {
      service: InterestingLighthouseResult.si,
      type: InterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.tbw,
      type: InterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.tbt,
      type: InterestingLighthouseResultType.score,
    },
    {
      service: InterestingLighthouseResult.tbt,
      type: InterestingLighthouseResultType.value,
    },
  ];
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

      if (avgLimited == lowScorePerformanceLimited) {
        const scoreUrl: IResultUrl = {
          result: avgLimited,
          url,
          type: stat.type,
        };
        performanceScore.low.push(scoreUrl);
      }
      if (avgLimited == highScorePerformanceLimited) {
        const scoreUrl: IResultUrl = {
          type: stat.type,
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
