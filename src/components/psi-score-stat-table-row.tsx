import IStat from "@/types/i-stat";
import { FC, ReactElement } from "react";
import ColorPsiScore from "./color-psi-score";

interface IProps {
  performance: IStat;
  seo?: IStat;
  bestPractices?: IStat;
  accessibility?: IStat;
}

function getTdStat(stat?: IStat): ReactElement {
  return (
    <td>
      {stat && (
        <>
          Avg : <ColorPsiScore score={stat.avg} as="span" /> , Std :
          {stat.std.toFixed(2)}
        </>
      )}
    </td>
  );
}

const PsiScoreStatTableRow: FC<IProps> = ({
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

export default PsiScoreStatTableRow;
