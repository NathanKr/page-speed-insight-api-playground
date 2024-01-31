import { FC } from "react";
import styles from "@/styles/color-psi-score.module.css";
import { limitToThreeDecimalPlaces } from "@/utils/common/psi-utils";

// range is   0–49 : red , 50–89 : orange , 90–100 : green
const BEST_SCORE_LOW_LIMIT = 0.9;
const MEDIUM_SCORE_LOW_LIMIT = 0.5;

interface IProps {
  score: number;
  as: keyof JSX.IntrinsicElements;
}

function getClassName(scoreFixedNumber: number): string {
  if (scoreFixedNumber >= BEST_SCORE_LOW_LIMIT) return styles.best;
  if (scoreFixedNumber >= MEDIUM_SCORE_LOW_LIMIT) return styles.middle;
  return styles.worst;
}

const ColorPsiScore: FC<IProps> = ({ score, as: Element }) => {
  const scoreFixedNumber = limitToThreeDecimalPlaces(score);

  return (
    <Element className={getClassName(scoreFixedNumber)}>
      {scoreFixedNumber}
    </Element>
  );
};
export default ColorPsiScore;
