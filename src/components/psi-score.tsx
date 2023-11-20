import { Categories } from "@/types/types";
import React, { FC } from "react";
import StrategyGoogleApi from "@/types/e-strategy-google-api";
import styles from "@/styles/psi-score.module.css";

// range is   0–49 : red , 50–89 : orange , 90–100 : green
const BEST_SCORE_LOW_LIMIT = 0.9;
const MEDIUM_SCORE_LOW_LIMIT = 0.5;

interface IProps {
  cat: Categories;
  url: string;
  strategy: StrategyGoogleApi;
}

function getClassName(score: number): string {
  if (score >= BEST_SCORE_LOW_LIMIT) {
    return styles.best;
  }

  if (score >= MEDIUM_SCORE_LOW_LIMIT) {
    return styles.middle;
  }

  return styles.worst;
}

function getTdScore(score: number) {
  return <td className={getClassName(score)}>{score}</td>
}

const PsiScore: FC<IProps> = ({ cat, url, strategy }) => {
  return (
    <tr>
      <td>{url}</td>
      <td>{strategy}</td>
      {getTdScore(cat.performance.score)}
      {getTdScore(cat.seo.score)}
      {getTdScore(cat["best-practices"].score)}
      {getTdScore(cat.accessibility.score)}
    </tr>
  );
};

export default PsiScore;
