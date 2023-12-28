import React, { FC } from "react";
import ScoreUrl from "./score-url";
import { getPerformanceStatSummary } from "@/utils/client/performance-utils";
import { PsiUrl2FromRootsMap } from "@/types/types";
import ColorPsiScore from "./color-psi-score";

interface IProps {
  psiUrl2FromRootsMap: PsiUrl2FromRootsMap;
}


const PsiPerformanceScoreSummary: FC<IProps> = ({ psiUrl2FromRootsMap }) => {
  const performanceScore = getPerformanceStatSummary(psiUrl2FromRootsMap);

  const elemLow = performanceScore.low.map((it,i) => (
    <ScoreUrl key={i} score={it.score} url={it.url} />
  ));
  const elemHigh = performanceScore.high.map((it,i) => (
    <ScoreUrl key={i} score={it.score} url={it.url} />
  ));

  return (
    <>
      <h3>performance score summary</h3>
      <p>
        avg : <ColorPsiScore score={performanceScore.avgScore!} as={"span"}/> , std : {performanceScore.stdScore}
      </p>
      <p>low : {elemLow}</p>
      <p>high : {elemHigh}</p>
    </>
  );
};



export default PsiPerformanceScoreSummary;
