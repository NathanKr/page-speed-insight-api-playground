import IPsiAudit from "@/types/i-psi-audit";
import { limitToTwoDecimalPlaces } from "@/utils/client/performance-utils";
import { FC } from "react";

interface IProps {
  audit: IPsiAudit;
}

const PsiAudit: FC<IProps> = ({ audit }) => {
  const { name, score, numericValue, numericUnit } = audit;
  return (
    <>
      {name} score , numericValue : {score} ,{" "}
      {limitToTwoDecimalPlaces(numericValue)} [{numericUnit}]
    </>
  );
};

export default PsiAudit;
