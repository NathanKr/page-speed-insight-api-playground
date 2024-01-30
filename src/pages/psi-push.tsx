import PageSpeedInsight from "@/components/page-speed-insight";
import { infos } from "../../data/infos";
import { DELAY_BETWEEN_RUN_SEC, NUM_RUNS } from "@/utils/client/constants";

const debug = false;

export default function PsiPush() {
  const elemPsi = debug ? (
    <PageSpeedInsight
      numRuns={2}
      delayBetweenRunSec={1}
      infos={infos.slice(0, 3)}
    />
  ) : (
    <PageSpeedInsight
      numRuns={NUM_RUNS}
      delayBetweenRunSec={DELAY_BETWEEN_RUN_SEC}
      infos={infos}
    />
  );

  return (
    <>
      <h1>PsiPush</h1>
      {elemPsi}
    </>
  );
}
