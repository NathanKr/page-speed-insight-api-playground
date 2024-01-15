import StrategyGoogleApi from "@/types/e-strategy-google-api";
import { Root } from "@/types/google-api-psi-types";
import IFromRoot from "@/types/i-from-root";
import { IPsiScore } from "@/types/i-psi-score";


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
