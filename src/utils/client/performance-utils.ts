import StrategyGoogleApi from "@/types/e-strategy-google-api";
import { Root } from "@/types/google-api-psi-types";
import IFromRoot from "@/types/i-from-root";
import { IPsiScore } from "@/types/i-psi-score";
import IScoreSummary from "@/types/i-score-summary";
import IScoreUrl from "@/types/i-score-url";
import IStat from "@/types/i-stat";
import { PsiUrl2FromRootsMap } from "@/types/types";
import { max, mean, min, std } from "mathjs";

export function getPerformanceArray(roots: IFromRoot[]): number[] {
  return roots.map((root) => {
    return root.score.performance!;
  });
}

export function getPerformanceStat(roots: IFromRoot[]): IStat {
  const arPerformance: number[] = getPerformanceArray(roots);
  const performanceStat: IStat = {
    avg: mean(arPerformance),
    std: std(...arPerformance),
  };

  return performanceStat;
}

function makeDefaultIScoreSummary(): IScoreSummary {
  const performanceScore: IScoreSummary = {
    avgScore: null,
    stdScore: null,
    low: [],
    high: [],
  };
  return performanceScore;
}

export function getPerformanceStatSummary(
  psiUrl2FromRootsMap: PsiUrl2FromRootsMap
): IScoreSummary {
  let performanceScore = makeDefaultIScoreSummary();

  try {
    const urlToPerformanceScoreAvgMap: Map<string, IStat> = new Map();
    psiUrl2FromRootsMap.forEach((psiRoots, url) => {
      const performanceStat: IStat = getPerformanceStat(psiRoots);
      urlToPerformanceScoreAvgMap.set(url, performanceStat);
    });

    const arStats: IStat[] = Array.from(urlToPerformanceScoreAvgMap.values());
    const arAvg = arStats.map((it) => it.avg);
    performanceScore.avgScore = limitToTwoDecimalPlaces(mean(arAvg));

    performanceScore.stdScore = limitToTwoDecimalPlaces(std(...arAvg));

    const lowScorePerformanceLimited = limitToTwoDecimalPlaces(min(arAvg));
    const highScorePerformanceLimited = limitToTwoDecimalPlaces(max(arAvg));

    urlToPerformanceScoreAvgMap.forEach((stat, url) => {
      const avgLimited = limitToTwoDecimalPlaces(stat.avg);
      if (avgLimited == lowScorePerformanceLimited) {
        const scoreUrl: IScoreUrl = {
          score: avgLimited,
          url,
        };
        performanceScore.low.push(scoreUrl);
      }
      if (avgLimited == highScorePerformanceLimited) {
        const scoreUrl: IScoreUrl = {
          score: avgLimited,
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

export function limitToTwoDecimalPlaces(num: number): number {
  // Round the number to two decimal places
  let roundedNumber: number = parseFloat(num.toFixed(2));

  return roundedNumber;
}

export function convert(newInfoRoot: Root): IFromRoot {
  const cat = newInfoRoot.lighthouseResult.categories;
  const score: IPsiScore = {
    performance: cat.performance.score,
    accessibility: cat.accessibility.score,
    bestPractices: cat["best-practices"].score,
    seo: cat.seo.score,
  };
  const newInfo: IFromRoot = {
    score,
    strategy: determinePlatform(newInfoRoot.lighthouseResult.requestedUrl),
    audits: newInfoRoot.lighthouseResult.audits,
  };
  return newInfo;
}

export const determinePlatform = (url: string): StrategyGoogleApi => {
  // Your logic to determine if the URL is for a mobile or desktop version
  // You might use regex, string matching, or any other criteria specific to your URLs
  if (url.includes(`&strategy=${StrategyGoogleApi.desktop}`)) {
    return StrategyGoogleApi.desktop;
  } else {
    return StrategyGoogleApi.mobile;
  }
};
