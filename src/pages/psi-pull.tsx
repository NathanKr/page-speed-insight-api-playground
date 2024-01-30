import PsiPerformanceStatSummary from "@/components/psi-performance-stat-summary";
import InternalApiUrl from "@/types/e-internal-api-url";
import IStatsApi from "@/types/i-stats-api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const queryKey = ["latestOffline"];

const PsiPull = () => {
  const { isLoading, isError, data, error, refetch, isFetching } =
    useQuery({
      queryKey,
      queryFn: latestOfflineQueryHandler,
      enabled: false,
    });

  async function latestOfflineQueryHandler() {
    const url = InternalApiUrl.stats;
    const data: IStatsApi = (await axios.get(url)).data;
    return data;
  }

  const elemsStatsSummary = data ? (
    <>
      <p>samples : {data.numSamples}</p>
      {data.statsSummary.map((it, i) => (
        <div key={i} style={{ marginBottom: "1rem" }}>
          <PsiPerformanceStatSummary performanceStatsSummary={it} />
        </div>
      ))}
    </>
  ) : isError ? (
    <span>Error: {error.message}</span>
  ) : isLoading ? (
    <span>Loading...</span>
  ) : (
    <span>Not ready ...</span>
  );

  return (
    <div>
      <h1>PsiPull</h1>
      <button onClick={() => refetch()}>Fetch all samples</button>
      <div>
      {elemsStatsSummary}
      <p>{isFetching ? 'Fetching...' : null}</p>
      </div>
    </div>
  );
};

export default PsiPull;
