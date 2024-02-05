import PsiPerformanceStatSummary from "@/components/psi-performance-stat-summary";
import InternalApiUrl from "@/types/e-internal-api-url";
import IStatsApi from "@/types/i-stats-api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL_CONTAIN } from "../../data/infos";
import IGetStats from "@/types/i-get-stats";
import { useRef } from "react";
import { getDefaultDateFromInput, getMsFrom1970FromDatetimeInputValue } from "@/utils/client/utils";
import Button from "@mui/material/Button";

const queryKey = ["latestOffline"];

const PsiPull = () => {
  const { isLoading, isError, data, error, refetch, isFetching } = useQuery({
    queryKey,
    queryFn: latestOfflineQueryHandler,
    enabled: false,
  });
  const urlContainRef = useRef<HTMLInputElement | null>(null);
  const createdMinRef = useRef<HTMLInputElement | null>(null);
  const createdMaxRef = useRef<HTMLInputElement | null>(null);

  async function latestOfflineQueryHandler() {
    const url = InternalApiUrl.stats;
    const params: IGetStats = {
      urlContain: urlContainRef.current!.value,
      createdMin: getMsFrom1970FromDatetimeInputValue(createdMinRef.current!.value),
      createdMax: getMsFrom1970FromDatetimeInputValue(createdMaxRef.current!.value),
    };
    const data: IStatsApi = (await axios.get(url, { params })).data;
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
      <div>
        <label>Url contains</label>
        <br />
        <input type="text" ref={urlContainRef} defaultValue={URL_CONTAIN} />
        <br />
        <label>Start time [UTC]</label>
        <br />
        <input
          type="datetime-local"
          ref={createdMinRef}
          defaultValue={getDefaultDateFromInput(1706943982515)}
        />
        <br />
        <label>End time [UTC]</label>
        <br />
        <input
          type="datetime-local"
          ref={createdMaxRef}
          defaultValue={getDefaultDateFromInput(new Date().getTime())}
        />
      </div>
      <Button variant="contained"
        onClick={() => {
          refetch();
        }}
      >
        Fetch all samples
      </Button>
      <div>
        {!isFetching && elemsStatsSummary}
        <p>{isFetching ? "Fetching..." : null}</p>
      </div>
    </div>
  );
};

export default PsiPull;
