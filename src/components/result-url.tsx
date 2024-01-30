import IResultUrl from "@/types/i-result-url";
import { FC } from "react";
import ColorPsiScore from "./color-psi-score";
import EInterestingLighthouseResultType from "@/types/e-interesting-lighthouse-result-type";
import { limitToTwoDecimalPlaces } from "@/utils/common/psi-utils";

const ResultUrl: FC<IResultUrl> = ({ type, result, url }) => {
  const resultElem =
    type == EInterestingLighthouseResultType.score ? (
      <>
        score : <ColorPsiScore score={result} as="span" />
      </>
    ) : (
      <>value : {limitToTwoDecimalPlaces(result)}</>
    );
  return (
    <>
      {resultElem}, url :<span>{url}</span>
    </>
  );
};

export default ResultUrl;
