import IResultUrl from "@/types/i-result-url";
import { FC } from "react";
import ColorPsiScore from "./color-psi-score";
import InterestingLighthouseResultType from "@/types/e-interesting-lighthouse-result-type";

const ResultUrl: FC<IResultUrl> = ({ type, result, url }) => {
  const resultElem =
    type == InterestingLighthouseResultType.score ? (
      <>
        score : <ColorPsiScore score={result} as="span" />
      </>
    ) : (
      <>value : {result}</>
    );
  return (
    <>
      {resultElem}, url :<span>{url}</span>
    </>
  );
};

export default ResultUrl;
