import { FC, createElement } from "react";
import styles from "@/styles/color-psi-score.module.css";

interface IProps {
  score: number;
  as: keyof JSX.IntrinsicElements;
}

// range is   0–49 : red , 50–89 : orange , 90–100 : green
const BEST_SCORE_LOW_LIMIT = 0.9;
const MEDIUM_SCORE_LOW_LIMIT = 0.5;

const ColorPsiScore: FC<IProps> = ({ score, as: Element }) => {
  function getClassName(score: number): string {
    if (score >= BEST_SCORE_LOW_LIMIT) {
      return styles.best;
    }

    if (score >= MEDIUM_SCORE_LOW_LIMIT) {
      return styles.middle;
    }

    return styles.worst;
  }

  const name = getClassName(score);

  // Use the HTML element type directly
  return createElement(Element, { className: name }, score.toFixed(2));
};

export default ColorPsiScore;
