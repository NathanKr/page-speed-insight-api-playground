import IStat from "@/types/i-stat";
import { FC } from "react";
import ColorPsiScore from "./color-psi-score";
import { limitToTwoDecimalPlaces } from "@/utils/common/psi-utils";
import EInterestingLighthouseResultType from "@/types/e-interesting-lighthouse-result-type";

interface IProps {
  stat: IStat;
}

const PsiStat: FC<IProps> = ({ stat }) => {
  const { name, type, avg, std } = stat;
  const elemAvg =
    type == EInterestingLighthouseResultType.score ? (
      <ColorPsiScore score={avg} as="span" />
    ) : (
      <span>{limitToTwoDecimalPlaces(avg)}</span>
    );
  return (
    <>
      {name}{" "}
      {type == EInterestingLighthouseResultType.score ? "score" : "value"}, Avg
      : {elemAvg}, Std :{limitToTwoDecimalPlaces(std)}
    </>
  );
};

export default PsiStat;
