import React, { FC } from "react";
import { getPerformanceStatSummary } from "@/utils/client/performance-utils";
import { PsiUrl2FromRootsMap } from "@/types/types";
import ColorPsiScore from "./color-psi-score";
import ScoreUrls from "./score-urls";

interface IProps {
  psiUrl2FromRootsMap: PsiUrl2FromRootsMap;
}

const PsiPerformanceScoreSummary: FC<IProps> = ({ psiUrl2FromRootsMap }) => {
  const performanceScore = getPerformanceStatSummary(psiUrl2FromRootsMap);

  return (
    <>
      <h3>performance score summary</h3>
      <p>
        <h4>Avg : <ColorPsiScore score={performanceScore.avgScore!} as={"span"} /> </h4>
        <h4>Std : {performanceScore.stdScore}</h4> 
      </p>
      <p>
        <h4>Low :</h4> <ScoreUrls scoreUrls={performanceScore.low} />
      </p>
      <p>
        <h4>High :</h4>
        <ScoreUrls scoreUrls={performanceScore.high} />
      </p>
    </>
  );
};

export default PsiPerformanceScoreSummary;
