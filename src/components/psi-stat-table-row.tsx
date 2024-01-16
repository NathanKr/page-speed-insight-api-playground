import IStat from "@/types/i-stat";
import { FC, ReactElement } from "react";
import PsiStats from "./psi-stats";

interface IProps {
  performance: IStat[];
  seo?: IStat[];
  bestPractices?: IStat[];
  accessibility?: IStat[];
}

function getTdStat(stats?: IStat[]): ReactElement {
  return <td>{stats && <PsiStats stats={stats} />}</td>;
}

const PsiStatTableRow: FC<IProps> = ({
  performance,
  seo,
  bestPractices,
  accessibility,
}) => {
  return (
    <tr>
      <td></td>
      <td></td>
      {getTdStat(performance)}
      {getTdStat(seo)}
      {getTdStat(bestPractices)}
      {getTdStat(accessibility)}
    </tr>
  );
};

export default PsiStatTableRow;
