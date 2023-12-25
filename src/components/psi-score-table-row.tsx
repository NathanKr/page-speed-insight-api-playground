import { Categories } from "@/types/google-api-psi-types";
import React, { FC } from "react";
import StrategyGoogleApi from "@/types/e-strategy-google-api";
import ColorPsiScore from "./color-psi-score";

interface IProps {
  cat: Categories;
  url: string;
  strategy: StrategyGoogleApi;
}

function getTdScore(score: number) {
  return <ColorPsiScore score={score} as="td" />;
}

const PsiScoreTableRow: FC<IProps> = ({ cat, url, strategy }) => {
  return (
    <tr>
      <td>{url}</td>
      <td>{strategy}</td>
      {getTdScore(cat.performance.score)}
      {getTdScore(cat.seo.score)}
      {getTdScore(cat["best-practices"].score)}
      {getTdScore(cat.accessibility.score)}
    </tr>
  );
};

export default PsiScoreTableRow;
