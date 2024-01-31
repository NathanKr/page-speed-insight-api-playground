import IResultSummary from "@/types/i-result-summary";
import { FC } from "react";
import ColorPsiScore from "./color-psi-score";
import ResultUrls from "./result-urls";
import EInterestingLighthouseResultType from "@/types/e-interesting-lighthouse-result-type";
import { limitToThreeDecimalPlaces } from "@/utils/common/psi-utils";

interface IProps {
  performanceStatsSummary: IResultSummary;
}

const PsiPerformanceStatSummary: FC<IProps> = ({ performanceStatsSummary }) => {
  const { service, type } = performanceStatsSummary.resultMetaData;
  const { rankingAvgLowToHigh: rankingAvgHighToLow } = performanceStatsSummary;

  const avg = performanceStatsSummary.avgResult!;
  const elemAvg =
    type == EInterestingLighthouseResultType.score ? (
      <ColorPsiScore score={avg} as={"span"} />
    ) : (
      <span>{limitToThreeDecimalPlaces(avg)}</span>
    );

  const elemsLowHigh = (
    <>
      {" "}
      <p>
        <h4>Low :</h4>{" "}
        <ResultUrls resultUrls={performanceStatsSummary.lowAvg} />
      </p>
      <p>
        <h4>High :</h4>{" "}
        <ResultUrls resultUrls={performanceStatsSummary.highAvg} />
      </p>
    </>
  );

  const elemsRanking = <ResultUrls resultUrls={rankingAvgHighToLow} />;

  return (
    <>
      <h2>
        {service} {type} summary
      </h2>
      <p>
        <h3>Avg : {elemAvg}</h3>
        <h3>Std : {performanceStatsSummary.stdResult}</h3>
      </p>
      <br />
      {elemsLowHigh}
      <br />
      <h3>Ranking</h3>
      {elemsRanking}
    </>
  );
};

export default PsiPerformanceStatSummary;
