import {
  Accessibility,
  BestPractices,
  Categories,
  Performance,
  Seo,
} from "@/types/types";
import React, { FC } from "react";

interface IProps {
  cat: Categories;
  url: string;
}
const getElem = (
  title: string,
  cat: Performance | Accessibility | BestPractices | Seo
) => {
  return cat ? (
    <p>
      {title} : {cat.score}
    </p>
  ) : (
    ""
  );
};
const PsiScore: FC<IProps> = ({ cat, url }) => {
  return (
    <div>
      <p>url : {url}</p>
      {getElem("performance", cat.performance)}
      {getElem("seo", cat.seo)}
      {getElem("best-practices", cat["best-practices"])}
      {getElem("accessibility", cat.accessibility)}{" "}
    </div>
  );
};

export default PsiScore;
