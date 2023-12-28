import IScoreUrl from "@/types/i-score-url";
import { FC } from "react";
import ScoreUrl from "./score-url";

interface IProps {
  scoreUrls: IScoreUrl[];
}

const ScoreUrls: FC<IProps> = ({ scoreUrls }) => {
  const elems = scoreUrls.map((it, i) => (
    <div key={i}>
      <ScoreUrl  score={it.score} url={it.url} />
    </div>
  ));
  return <>{elems}</>;
};

export default ScoreUrls;
