import React, { FC } from "react";
import ColorPsiScore from "./color-psi-score";
import IFromRoot from "@/types/i-from-root";
import { Audits } from "@/types/google-api-psi-types";
import PsiAudits from "./psi-audits";

interface IProps {
  url: string;
  fromRoot: IFromRoot;
}

function getTdScore(score: number | undefined) {
  return score ? <ColorPsiScore score={score} as="td" /> : <td></td>;
}

function getTdPerformanceScoreAndAudits(
  performanceScore: number | undefined,
  audits: Audits
) {
  return performanceScore ? (
    <td>
      <ColorPsiScore score={performanceScore} as="div" />
      <PsiAudits audits={audits}/>
    </td>
  ) : (
    <td></td>
  );
}

const PsiScoreTableRow: FC<IProps> = ({ fromRoot, url }) => {
  const { strategy , audits} = fromRoot;
  const { performance, seo, bestPractices, accessibility } = fromRoot.score;
  return (
    <tr>
      <td>{url}</td>
      <td>{strategy}</td>
      {getTdPerformanceScoreAndAudits(performance, audits)}
      {getTdScore(seo)}
      {getTdScore(bestPractices)}
      {getTdScore(accessibility)}
    </tr>
  );
};

export default PsiScoreTableRow;
