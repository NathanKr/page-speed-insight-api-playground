import IResultUrl from "@/types/i-result-url";
import { FC } from "react";
import ColorPsiScore from "./color-psi-score";

const ResultUrl: FC<IResultUrl> = ({ isScore, result, url }) => {
  const resultElem = isScore ? (
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
