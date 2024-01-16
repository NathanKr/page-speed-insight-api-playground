import IResultSummary from "@/types/i-result-summary";
import { FC } from "react";
import ColorPsiScore from "./color-psi-score";
import ResultUrls from "./result-urls";
import EInterestingLighthouseResultType from "@/types/e-interesting-lighthouse-result-type";
import { limitToTwoDecimalPlaces } from "@/utils/client/psi-utils";

interface IProps {
  performanceStatsSummary: IResultSummary;
}

const PsiPerformanceStatSummary: FC<IProps> = ({ performanceStatsSummary }) => {
  const { service, type } = performanceStatsSummary.resultMetaData;
  const avg = performanceStatsSummary.avgResult!;
  const elemAvg =
    type == EInterestingLighthouseResultType.score ? (
      <ColorPsiScore score={avg} as={"span"} />
    ) : (
      <span>{limitToTwoDecimalPlaces(avg)}</span>
    );

  return (
    <>
      <h3>
        {service} {type} summary
      </h3>
      <p>
        <h4>Avg : {elemAvg}</h4>
        <h4>Std : {performanceStatsSummary.stdResult}</h4>
      </p>
      <p>
        <h4>Low :</h4> <ResultUrls resultUrls={performanceStatsSummary.low} />
      </p>
      <p>
        <h4>High :</h4> <ResultUrls resultUrls={performanceStatsSummary.high} />
      </p>
    </>
  );
};

export default PsiPerformanceStatSummary;
