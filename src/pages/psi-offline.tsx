import PsiPerformanceStatSummary from "@/components/psi-performance-stat-summary";
import InternalApiUrl from "@/types/e-internal-api-url";
import IStatsApi from "@/types/i-stats-api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const queryKey = ["latestOffline"];

const PsiOffline = () => {
  const { isPending, error, data } = useQuery({
    queryKey,
    queryFn: latestOfflineQueryHandler,
  });

  async function latestOfflineQueryHandler() {
    const url = InternalApiUrl.stats;
    const data: IStatsApi = (await axios.get(url)).data;
    return data;
  }

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const elemsStatsSummary = data.statsSummary.map((it, i) => (
    <div key={i} style={{ marginBottom: "1rem" }}>
      <PsiPerformanceStatSummary performanceStatsSummary={it} />
    </div>
  ));

  return (
    <div>
      <h1>PsiOffline</h1>
      <button onClick={latestOfflineQueryHandler}>Get stats</button>
      <p>samples : {data.numSamples}</p>
      {elemsStatsSummary}
    </div>
  );
};

export default PsiOffline;
