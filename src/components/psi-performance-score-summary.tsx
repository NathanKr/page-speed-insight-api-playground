import React, { FC } from "react";
import { PsiUrl2FromRootsMap } from "@/types/types";
import ColorPsiScore from "./color-psi-score";
import ResultUrls from "./result-urls";
import { getInterestingLighthouseResultStatSummary } from "@/utils/client/psi-results-utils";
import InterestingLighthouseResult from "@/types/interesting-lighthouse-result";
import IInterestingLighthouseResultType from "@/types/i-interesting-lighthouse-result-type";

interface IProps {
  psiUrl2FromRootsMap: PsiUrl2FromRootsMap;
}

const PsiPerformanceScoreSummary: FC<IProps> = ({ psiUrl2FromRootsMap }) => {
  const resultMetaData: IInterestingLighthouseResultType = {
    type: InterestingLighthouseResult.score,
  };
  const performanceScore = getInterestingLighthouseResultStatSummary(
    resultMetaData,
    psiUrl2FromRootsMap
  );

  return (
    <>
      <h3>performance score summary</h3>
      <p>
        <h4>
          Avg :{" "}
          <ColorPsiScore score={performanceScore.avgResult!} as={"span"} />{" "}
        </h4>
        <h4>Std : {performanceScore.stdResult}</h4>
      </p>
      <p>
        <h4>Low :</h4> <ResultUrls resultUrls={performanceScore.low} />
      </p>
      <p>
        <h4>High :</h4>
        <ResultUrls resultUrls={performanceScore.high} />
      </p>
    </>
  );
};

export default PsiPerformanceScoreSummary;
