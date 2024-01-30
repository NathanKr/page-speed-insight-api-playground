import React, { FC } from "react";
import { PsiUrl2FromRootsMap } from "@/types/types";
import { getAllInterestingLighthouseResultStatSummary } from "@/utils/common/psi-results-utils";
import PsiPerformanceStatSummary from "./psi-performance-stat-summary";

interface IProps {
  psiUrl2FromRootsMap: PsiUrl2FromRootsMap;
}

const PsiPerformanceStatsSummary: FC<IProps> = ({ psiUrl2FromRootsMap }) => {
  const performanceStatsSummary =
    getAllInterestingLighthouseResultStatSummary(psiUrl2FromRootsMap);

  const elems = performanceStatsSummary.map((it, i) => (
    <div key={i} style={{ marginBottom: "1rem" }}>
      <PsiPerformanceStatSummary performanceStatsSummary={it} />
    </div>
  ));

  return <>{elems}</>;
};

export default PsiPerformanceStatsSummary;
