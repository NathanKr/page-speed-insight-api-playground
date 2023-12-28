import IScoreUrl from "@/types/i-score-url";
import { FC } from "react";
import ColorPsiScore from "./color-psi-score";

const ScoreUrl: FC<IScoreUrl> = ({ score, url }) => {
    return (
      <>
        score : <ColorPsiScore score={score} as="span" /> , url :
        <span>{url}</span>
      </>
    );
  };

  export default ScoreUrl;
  