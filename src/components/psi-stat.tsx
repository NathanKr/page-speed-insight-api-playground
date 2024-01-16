import IStat from "@/types/i-stat";
import { FC } from "react";
import ColorPsiScore from "./color-psi-score";
import { limitToTwoDecimalPlaces } from "@/utils/client/psi-utils";
import InterestingLighthouseResultType from "@/types/e-interesting-lighthouse-result-type";

interface IProps {
  stat: IStat;
}

const PsiStat: FC<IProps> = ({ stat }) => {
  const { name, type, avg, std } = stat;
  const elemAvg =
    type == InterestingLighthouseResultType.score ? (
      <ColorPsiScore score={limitToTwoDecimalPlaces(avg)} as="span" />
    ) : (
      <span>{avg}</span>
    );
  return (
    <>
      {name} {type == InterestingLighthouseResultType.score ? "score" : "value"}
      , Avg : {elemAvg}, Std :{limitToTwoDecimalPlaces(std)}
    </>
  );
};

export default PsiStat;
