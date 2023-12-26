import { FC, createElement } from "react";
import styles from "@/styles/color-psi-score.module.css";

// range is   0–49 : red , 50–89 : orange , 90–100 : green
const BEST_SCORE_LOW_LIMIT = 0.9;
const MEDIUM_SCORE_LOW_LIMIT = 0.5;

interface IProps {
  score: number;
  as: keyof JSX.IntrinsicElements;
}
const ColorPsiScore: FC<IProps> = ({ score, as: Element }) => {
  const scoreFixed = score.toFixed(2);
  const scoreFixedNumber = parseFloat(scoreFixed);
  function getClassName(): string {
    if (scoreFixedNumber >= BEST_SCORE_LOW_LIMIT) return styles.best;
    if (scoreFixedNumber >= MEDIUM_SCORE_LOW_LIMIT) return styles.middle;
    return styles.worst;
  }

  return <Element className={getClassName()}>{scoreFixed}</Element>
};
export default ColorPsiScore;
