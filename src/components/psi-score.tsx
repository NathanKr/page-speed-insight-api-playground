import {
  Accessibility,
  BestPractices,
  Categories,
  Performance,
  Seo,
} from "@/types/types";
import React, { FC } from "react";
import StrategyGoogleApi from "@/types/e-strategy-google-api";

interface IProps {
  cat: Categories;
  url: string;
  strategy: StrategyGoogleApi;
}
const PsiScore: FC<IProps> = ({ cat, url, strategy }) => {
  return (
    <tr>
      <td>{url}</td>
      <td>{strategy}</td>
      <td>{cat.performance.score}</td>
      <td>{cat.seo.score}</td>
      <td>{cat["best-practices"].score}</td>
      <td>{cat.accessibility.score}</td>
    </tr>
  );
};

export default PsiScore;
