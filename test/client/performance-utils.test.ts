import StrategyGoogleApi from "@/types/e-strategy-google-api";
import IFromRoot from "@/types/i-from-root";
import { IPsiScore } from "@/types/i-psi-score";
import { PsiUrl2FromRootsMap } from "@/types/types";
import { getPerformanceStatSummary } from "@/utils/client/performance-utils";
import { describe } from "node:test";
import { test, expect } from "vitest";

describe("getPerformanceStatSummary", () => {
  test("empty map -> default values", () => {
    const summary = getPerformanceStatSummary(new Map());
    expect(summary.avgScore).toBeFalsy();
    expect(summary.stdScore).toBeFalsy();
    expect(summary.high).toEqual([]);
    expect(summary.low).toEqual([]);
  });

  test("map with one url and one sample", () => {
    const psiUrl2FromRootsMap: PsiUrl2FromRootsMap = new Map();
    const url = "https://nathankrasney.com/about";
    const strategy = StrategyGoogleApi.mobile;
    const score: IPsiScore = { performance: 0.89 };
    const fromRoot: IFromRoot[] = [{ score, strategy }];
    psiUrl2FromRootsMap.set(url, fromRoot);
    const summary = getPerformanceStatSummary(psiUrl2FromRootsMap);
    expect(summary.avgScore).toBe(0.89);
    expect(summary.stdScore).toBe(0);
    expect(summary.high).toEqual([
      {
        score: 0.89,
        url: "https://nathankrasney.com/about",
      },
    ]);
    expect(summary.low).toEqual([
      {
        score: 0.89,
        url: "https://nathankrasney.com/about",
      },
    ]);
  });

  test("map with one url and two samples", () => {
    const psiUrl2FromRootsMap: PsiUrl2FromRootsMap = new Map();
    const url = "https://nathankrasney.com/about";
    const strategy = StrategyGoogleApi.mobile;
    const score1: IPsiScore = { performance: 0.89 };
    const score2: IPsiScore = { performance: 0.79 };
    const fromRoot: IFromRoot[] = [
      { score: score1, strategy },
      { score: score2, strategy },
    ];
    psiUrl2FromRootsMap.set(url, fromRoot);
    const summary = getPerformanceStatSummary(psiUrl2FromRootsMap);
    expect(summary.avgScore).toBe(0.84);
    expect(summary.stdScore).toBe(0); // --- only one url
    expect(summary.high).toEqual([
      {
        score: 0.84,
        url: "https://nathankrasney.com/about",
      },
    ]);
    expect(summary.low).toEqual([
      {
        score: 0.84,
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
    const fromRoot1: IFromRoot[] = [
      { score: score1_1, strategy },
      { score: score1_2, strategy },
    ];
    psiUrl2FromRootsMap.set(url1, fromRoot1);
    const url2 = "https://nathankrasney.com/quiz";
    // --- avg url 0.64
    const score2_1: IPsiScore = { performance: 0.59 };
    const score2_2: IPsiScore = { performance: 0.69 };
    const fromRoot2: IFromRoot[] = [
      { score: score2_1, strategy },
      { score: score2_2, strategy },
    ];
    psiUrl2FromRootsMap.set(url2, fromRoot2);
    const summary = getPerformanceStatSummary(psiUrl2FromRootsMap);
    expect(summary.avgScore).toBe(0.74);
    expect(summary.stdScore).toBe(0.14);
    expect(summary.high).toEqual([
      {
        score: 0.84,
        url: "https://nathankrasney.com/about",
      },
    ]);
    expect(summary.low).toEqual([
      {
        score: 0.64,
        url: "https://nathankrasney.com/quiz",
      },
    ]);
  });
});
