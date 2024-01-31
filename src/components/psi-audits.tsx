import { Audits } from "@/types/google-api-psi-types";
import { FC } from "react";
import IPsiAudit from "@/types/i-psi-audit";
import ColorPsiScore from "./color-psi-score";
import { psiAuditsKeys } from "@/utils/common/audit-utils";
import { limitToThreeDecimalPlaces } from "@/utils/common/psi-utils";

interface IProps {
  audits: Audits;
}

const PsiAudits: FC<IProps> = ({ audits }) => {
  const psiAudits: IPsiAudit[] = psiAuditsKeys.map((it) => {
    return { ...audits[it.key], name: it } as IPsiAudit;
  });

  const elems = psiAudits.map((it, i) => {
    const elemColorPsiScore = it.score && (
      <ColorPsiScore score={it.score} as={"span"} />
    );
    return (
      <p key={i}>
        <span title={it.name.key}>{it.name.name}</span> score , value :{" "}
        {elemColorPsiScore} ,{limitToThreeDecimalPlaces(it.numericValue)} [
        {it.numericUnit}]
      </p>
    );
  });

  return <div>{elems}</div>;
};

export default PsiAudits;
