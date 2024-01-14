import { Audits } from "@/types/google-api-psi-types";
import { FC } from "react";
import PsiAudit from "./psi-audit";
import IPsiAudit from "@/types/i-psi-audit";
import ColorPsiScore from "./color-psi-score";

interface IProps {
  audits: Audits;
}

const PsiAudits: FC<IProps> = ({ audits }) => {
  const psiAudits: IPsiAudit[] = [
    {
      ...audits["cumulative-layout-shift"],
      name: "cls",
    },
    {
      ...audits["first-contentful-paint"],
      name: "fcp",
    },
    {
      ...audits["largest-contentful-paint"],
      name: "lcp",
    },
    {
      ...audits["network-rtt"],
      name: "nrtt",
    },
    {
      ...audits["network-server-latency"],
      name: "nsl",
    },
    {
      ...audits["render-blocking-resources"],
      name: "rbr",
    },
    {
      ...audits["server-response-time"],
      name: "srt",
    },
    {
      ...audits["total-blocking-time"],
      name: "tbt",
    },
  ];

  const elems = psiAudits.map((it) => {
    const elemColorPsiScore = it.score && (
      <ColorPsiScore score={it.score} as={"span"} />
    );
    return (
      <p>
        {it.name} score , numericValue : {elemColorPsiScore} ,{it.numericValue} [
        {it.numericUnit}]
      </p>
    );
  });

  return <div>{elems}</div>;
};

export default PsiAudits;
