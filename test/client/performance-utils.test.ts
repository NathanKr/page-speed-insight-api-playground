import StrategyGoogleApi from "@/types/e-strategy-google-api";
import { Audits } from "@/types/google-api-psi-types";
import IFromRoot from "@/types/i-from-root";
import IInterestingLighthouseResultType from "@/types/i-interesting-lighthouse-result-type";
import { IPsiScore } from "@/types/i-psi-score";
import InterestingLighthouseResult from "@/types/e-interesting-lighthouse-result";
import { PsiUrl2FromRootsMap } from "@/types/types";
import { getInterestingLighthouseResultStatSummary } from "@/utils/common/psi-results-utils";
import { limitToTwoDecimalPlaces } from "@/utils/common/psi-utils";
import { describe } from "node:test";
import { test, expect } from "vitest";
import EInterestingLighthouseResultType from "@/types/e-interesting-lighthouse-result-type";

test("limitToTwoDecimalPlaces", () => {
  expect(limitToTwoDecimalPlaces(1.234)).toBe(1.23);
  expect(limitToTwoDecimalPlaces(1.254)).toBe(1.25);
  expect(limitToTwoDecimalPlaces(1.256)).toBe(1.26);
  expect(limitToTwoDecimalPlaces(0.123)).toBe(0.12);
});

describe("getPerformanceStatSummary", () => {
  const resultMetaDataScore: IInterestingLighthouseResultType = {
    service: InterestingLighthouseResult.performance,
    type: EInterestingLighthouseResultType.score,
  };
  test("empty map -> default values", () => {
    const summary = getInterestingLighthouseResultStatSummary(
      resultMetaDataScore,
      new Map()
    );
    expect(summary.avgResult).toBeFalsy();
    expect(summary.stdResult).toBeFalsy();
    expect(summary.highAvg).toEqual([]);
    expect(summary.lowAvg).toEqual([]);
  });

  test("map with one url and one sample", () => {
    const psiUrl2FromRootsMap: PsiUrl2FromRootsMap = new Map();
    const url = "https://nathankrasney.com/about";
    const strategy = StrategyGoogleApi.mobile;
    const audits: Audits = {} as Audits;
    const score: IPsiScore = { performance: 0.89 };
    const fromRoot: IFromRoot[] = [{ score, strategy, audits }];
    psiUrl2FromRootsMap.set(url, fromRoot);
    const summary = getInterestingLighthouseResultStatSummary(
      resultMetaDataScore,
      psiUrl2FromRootsMap
    );
    expect(summary.avgResult).toBe(0.89);
    expect(summary.stdResult).toBe(0);
    expect(summary.highAvg).toEqual([
      {
        type: EInterestingLighthouseResultType.score,
        result: 0.89,
        url: "https://nathankrasney.com/about",
      },
    ]);
    expect(summary.lowAvg).toEqual([
      {
        type: EInterestingLighthouseResultType.score,
        result: 0.89,
        url: "https://nathankrasney.com/about",
      },
    ]);
  });

  test("map with one url and two samples", () => {
    const psiUrl2FromRootsMap: PsiUrl2FromRootsMap = new Map();
    const url = "https://nathankrasney.com/about";
    const audits: Audits = {} as Audits;
    const strategy = StrategyGoogleApi.mobile;
    const score1: IPsiScore = { performance: 0.89 };
    const score2: IPsiScore = { performance: 0.79 };
    const fromRoot: IFromRoot[] = [
      { score: score1, strategy, audits },
      { score: score2, strategy, audits },
    ];
    psiUrl2FromRootsMap.set(url, fromRoot);
    const summary = getInterestingLighthouseResultStatSummary(
      resultMetaDataScore,
      psiUrl2FromRootsMap
    );
    expect(summary.avgResult).toBe(0.84);
    expect(summary.stdResult).toBe(0); // --- only one url
    expect(summary.highAvg).toEqual([
      {
        type: EInterestingLighthouseResultType.score,
        result: 0.84,
        url: "https://nathankrasney.com/about",
      },
    ]);
    expect(summary.lowAvg).toEqual([
      {
        type: EInterestingLighthouseResultType.score,
        result: 0.84,
        url: "https://nathankrasney.com/about",
      },
    ]);
  });

  test("map with two url and two samples each", () => {
    const psiUrl2FromRootsMap: PsiUrl2FromRootsMap = new Map();
    const strategy = StrategyGoogleApi.mobile;
    const url1 = "https://nathankrasney.com/about";
    // --- avg url 0.84
    const score1_1: IPsiScore = { performance: 0.89 };
    const score1_2: IPsiScore = { performance: 0.79 };
    const audits: Audits = {} as Audits;

    const fromRoot1: IFromRoot[] = [
      { score: score1_1, strategy, audits },
      { score: score1_2, strategy, audits },
    ];
    psiUrl2FromRootsMap.set(url1, fromRoot1);
    const url2 = "https://nathankrasney.com/quiz";
    // --- avg url 0.64
    const score2_1: IPsiScore = { performance: 0.59 };
    const score2_2: IPsiScore = { performance: 0.69 };
    const fromRoot2: IFromRoot[] = [
      { score: score2_1, strategy, audits },
      { score: score2_2, strategy, audits },
    ];
    psiUrl2FromRootsMap.set(url2, fromRoot2);
    const summary = getInterestingLighthouseResultStatSummary(
      resultMetaDataScore,
      psiUrl2FromRootsMap
    );
    expect(summary.avgResult).toBe(0.74);
    expect(summary.stdResult).toBe(0.14);
    expect(summary.highAvg).toEqual([
      {
        type: EInterestingLighthouseResultType.score,
        result: 0.84,
        url: "https://nathankrasney.com/about",
      },
    ]);
    expect(summary.lowAvg).toEqual([
      {
        type: EInterestingLighthouseResultType.score,
        result: 0.64,
        url: "https://nathankrasney.com/quiz",
      },
    ]);
  });
});
