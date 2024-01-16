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
import EInterestingLighthouseResultType from "@/types/e-interesting-lighthouse-result-type";

function getInterestingLighthouseResultValue(
  resultMetaData: IInterestingLighthouseResultType,
  root: IFromRoot
): number {
  const { service, type } = resultMetaData;

  // --- isScore not reevant for score
  if (
    service == InterestingLighthouseResult.performance &&
    type == EInterestingLighthouseResultType.score
  ) {
    return root.score.performance!;
  }

  // -- expect audit
  const obj: IPsiAuditsKey | undefined = psiAuditsKeys.find(
    (it) => it.name == service
  );

  if (obj) {
    const audit = root.audits[obj.key];
    return type == EInterestingLighthouseResultType.score
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
    avg: mean(arInterestingResults),
    std: std(...arInterestingResults),
    type: resultMetaData.type,
  };

  return interestingStat;
}

export function getAllInterestingLighthouseResultStat(
  roots: IFromRoot[]
): IStat[] {
  const resultsMetaData: IInterestingLighthouseResultType[] = getAllMetaData();

  // Use map to create a new array of stats
  const stats: IStat[] = resultsMetaData.map((resultMetaData) => {
    return getInterestingLighthouseResultStat(resultMetaData, roots);
  });

  return stats;
}

function getAllMetaData(): IInterestingLighthouseResultType[] {
  return [
    {
      service: InterestingLighthouseResult.performance,
      type: EInterestingLighthouseResultType.score,
    },
    {
      service: InterestingLighthouseResult.cls,
      type: EInterestingLighthouseResultType.score,
    },
    {
      service: InterestingLighthouseResult.cls,
      type: EInterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.ds,
      type: EInterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.fcp,
      type: EInterestingLighthouseResultType.score,
    },
    {
      service: InterestingLighthouseResult.fcp,
      type: EInterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.lcp,
      type: EInterestingLighthouseResultType.score,
    },
    {
      service: InterestingLighthouseResult.lcp,
      type: EInterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.nrtt,
      type: EInterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.nsl,
      type: EInterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.rbr,
      type: EInterestingLighthouseResultType.score,
    },
    {
      service: InterestingLighthouseResult.rbr,
      type: EInterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.srt,
      type: EInterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.si,
      type: EInterestingLighthouseResultType.score,
    },
    {
      service: InterestingLighthouseResult.si,
      type: EInterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.tbw,
      type: EInterestingLighthouseResultType.value,
    },
    {
      service: InterestingLighthouseResult.tbt,
      type: EInterestingLighthouseResultType.score,
    },
    {
      service: InterestingLighthouseResult.tbt,
      type: EInterestingLighthouseResultType.value,
    },
  ];
}

function makeDefaultIScoreSummary(
  resultMetaData: IInterestingLighthouseResultType
): IResultSummary {
  const performanceScore: IResultSummary = {
    resultMetaData,
    avgResult: null,
    stdResult: null,
    low: [],
    high: [],
  };
  return performanceScore;
}

export function getAllInterestingLighthouseResultStatSummary(
  psiUrl2FromRootsMap: PsiUrl2FromRootsMap
): IResultSummary[] {
  const resultsMetaData: IInterestingLighthouseResultType[] = getAllMetaData();

  const stats = resultsMetaData.map((resultMetaData) => {
    return getInterestingLighthouseResultStatSummary(
      resultMetaData,
      psiUrl2FromRootsMap
    );
  });

  return stats;
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
  let performanceScore = makeDefaultIScoreSummary(resultMetaData);

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
    performanceScore = makeDefaultIScoreSummary(resultMetaData);
    console.error(err);
  }

  return performanceScore;
}
