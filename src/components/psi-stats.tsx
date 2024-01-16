import IStat from "@/types/i-stat";
import { FC } from "react";
import PsiStat from "./psi-stat";

interface IProps {
  stats: IStat[];
}

const PsiStats: FC<IProps> = ({ stats }) => {
  const elems = stats.map((stat, i) => (
    <div key={i}>
      <PsiStat key={i} stat={stat} />
    </div>
  ));
  return <>{elems}</>;
};

export default PsiStats;
