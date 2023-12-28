import React, { FC } from "react";
import ColorPsiScore from "./color-psi-score";
import IFromRoot from "@/types/i-from-root";

interface IProps {
  url: string;
  fromRoot: IFromRoot;
}

function getTdScore(score: number | undefined) {
  return score ? <ColorPsiScore score={score} as="td" /> : <td></td>;
}

const PsiScoreTableRow: FC<IProps> = ({ fromRoot, url }) => {
  const { strategy } = fromRoot;
  const { performance, seo, bestPractices, accessibility } = fromRoot.score;
  return (
    <tr>
      <td>{url}</td>
      <td>{strategy}</td>
      {getTdScore(performance)}
      {getTdScore(seo)}
      {getTdScore(bestPractices)}
      {getTdScore(accessibility)}
    </tr>
  );
};

export default PsiScoreTableRow;
