import IGetPsiInfo from "@/types/i-get-psi-info";
import { Root } from "@/types/google-api-psi-types";
import {
  appendQueryStringToUrl,
  getLocalDateAndTimeNow,
  objectToQueryString,
  pauseMs,
} from "@/utils/client/utils";
import axios, { AxiosError } from "axios";
import React, { FC, useState } from "react";
import PsiScoreTableRow from "./psi-score-table-row";
import styles from "@/styles/page-speed-insight.module.css";
import { PAUSE_BETWEEN_API_MS } from "@/utils/client/constants";
import RunStatus from "@/types/e-run-status";
import PsiStatTableRow from "./psi-stat-table-row";
import IStat from "@/types/i-stat";
import InternalApiUrl from "@/types/e-internal-api-url";
import { convert } from "@/utils/client/psi-utils";
import { PsiUrl2FromRootsMap } from "@/types/types";
import IFromRoot from "@/types/i-from-root";
import PsiPerformanceScoreSummary from "./psi-performance-score-summary";
import ISavePageRequestBody from "@/types/i-save-page-request-body";
import ISavePageResponseData from "@/types/i-save-page-response-data";
import {
  getAllInterestingLighthouseResultStat,
  getInterestingLighthouseResultStat,
} from "@/utils/client/psi-results-utils";
import InterestingLighthouseResult from "@/types/e-interesting-lighthouse-result";
import IInterestingLighthouseResultType from "@/types/i-interesting-lighthouse-result-type";

interface IProps {
  infos: IGetPsiInfo[];
  numRuns: number;
  delayBetweenRunSec: number;
}

const PageSpeedInsight: FC<IProps> = ({
  infos,
  numRuns,
  delayBetweenRunSec,
}) => {
  const [psiFromRoots, setPsiFromRoots] = useState<PsiUrl2FromRootsMap>(
    new Map()
  );
  const [err, setErr] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentRun, setCurrentRun] = useState(0);
  const [currentPage, setCurrentRunPage] = useState(0);
  const [allRunsStatus, setAllRunsStatus] = useState(RunStatus.notStarted);
  const [savePageResponseData, setSavePageResponseData] =
    useState<ISavePageResponseData | null>(null);

  async function saveHtmlOnDisk() {
    const body: ISavePageRequestBody = {
      htmlContent: document.documentElement.outerHTML,
    };
    try {
      const response = await axios.post(InternalApiUrl.savePage, {
        ...body,
      });
      setSavePageResponseData(response.data as ISavePageResponseData);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error("Error sending HTML:", axiosError.message);
    }
  }

  async function getAllRunsInfo(): Promise<void> {
    initState();

    for (let iRun = 0; iRun < numRuns; iRun++) {
      setCurrentRun(iRun + 1);
      for (let iPage = 0; iPage < infos.length; iPage++) {
        setCurrentRunPage(iPage + 1);
        const info = infos[iPage];
        await getPsiInfo(info);
        await pauseMs(PAUSE_BETWEEN_API_MS);
      }
      await pauseMs(delayBetweenRunSec * 1000);
    }
    setAllRunsStatus(RunStatus.completed);
  }

  const addNewInfo = (newInfoRoot: Root): void => {
    // console.log(newInfoRoot)
    const newInfo: IFromRoot = convert(newInfoRoot);
    console.log(newInfoRoot.lighthouseResult.audits);

    setPsiFromRoots((prevRoots) => {
      // Use the spread operator to create a new Map with the previous items
      const updatedRoots = new Map(prevRoots);
      const key = newInfoRoot.lighthouseResult.requestedUrl;
      let updatedValue = updatedRoots.get(key);
      if (updatedValue) {
        // Create a new array with the updated value --> strange results without this
        updatedValue = [...updatedValue, newInfo];

        // Add the new item to the Map using its ID as the key
        updatedRoots.set(key, updatedValue);
      } else {
        updatedRoots.set(key, [newInfo]);
      }

      // Return the updated Map, which will be used as the new state
      return updatedRoots;
    });
  };

  function initState() {
    setPsiFromRoots(new Map());
    setErr(null);
    setLoading(false);
    setCurrentRun(0);
    setAllRunsStatus(RunStatus.started);
    setSavePageResponseData(null);
  }

  async function getPsiInfo(info: IGetPsiInfo): Promise<void> {
    const baseApiUrl = InternalApiUrl.psi;
    const queryString = objectToQueryString(info);
    const url = appendQueryStringToUrl(baseApiUrl, queryString);

    setErr(null);
    setLoading(true);
    try {
      const response = await axios.get(url);

      addNewInfo(response.data.root);
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        setErr(axiosError);
      } else {
        // Handle non-Axios errors if needed
        console.error("Non-Axios error:", error);
      }
      setLoading(false);
    }
  }

  let elemError;

  if (err) {
    elemError = <p>axios error : {err.message} </p>;
  }

  let elemLoading = <p>&nbsp;</p>; // -- to remove layout shift

  if (loading) {
    elemLoading = <p>Loading please wait ........</p>;
  }

  let id = 0;
  const elemsTableRows = Array.from(psiFromRoots.entries()).map(
    (entryCurrentPage) => {
      let urlCurrentPage = entryCurrentPage[0];
      let fromRootsForCurrentPage = entryCurrentPage[1];
      const elementsForCurrentPage = fromRootsForCurrentPage.map((fromRoot) => {
        id++;
        return (
          <PsiScoreTableRow key={id} fromRoot={fromRoot} url={urlCurrentPage} />
        );
      });

      if (allRunsStatus == RunStatus.completed) {
        // --- per page statistics : avg , std
        // const resultMetaDataScore: IInterestingLighthouseResultType = {
        //   service: InterestingLighthouseResult.performance,
        //   _isScore: true,
        // };
        // const performance: IStat = getInterestingLighthouseResultStat(
        //   resultMetaDataScore,
        //   fromRootsForCurrentPage
        // );
        const performanceStats = getAllInterestingLighthouseResultStat(
          fromRootsForCurrentPage
        );
        elementsForCurrentPage.push(<PsiStatTableRow performance={performanceStats} />);
      }

      return elementsForCurrentPage;
    }
  );

  const elemTable = (
    <table>
      <thead>
        <tr>
          <th>Url</th>
          <th>Strategy</th>
          <th>Performance</th>
          <th>Seo</th>
          <th>Best Practices</th>
          <th>Accessibility</th>
        </tr>
      </thead>
      <tbody>{elemsTableRows}</tbody>
    </table>
  );

  let elemCompleteTime, elemCompleteSummary;
  if (allRunsStatus == RunStatus.completed) {
    // --- all pages statistics : avg , std
    elemCompleteTime = <p>completed : {getLocalDateAndTimeNow()}</p>;
    elemCompleteSummary = (
      <PsiPerformanceScoreSummary psiUrl2FromRootsMap={psiFromRoots} />
    );
  }

  return (
    <div className={styles.container}>
      <p>
        run {currentRun} / {numRuns}
      </p>
      <p>
        page {currentPage}/{infos.length}
      </p>
      <p>pause between api : {PAUSE_BETWEEN_API_MS} [ms]</p>
      <p>delay between run sec : {delayBetweenRunSec} [sec]</p>
      <button
        disabled={allRunsStatus == RunStatus.started}
        onClick={getAllRunsInfo}
      >
        Start
      </button>
      <br />
      {elemCompleteTime}
      <button
        disabled={allRunsStatus == RunStatus.started}
        onClick={saveHtmlOnDisk}
      >
        Save html to file
      </button>
      {savePageResponseData && (
        <p>file path : {savePageResponseData.filePath}</p>
      )}
      {elemCompleteSummary}
      {elemError}
      {elemLoading}
      {elemTable}
    </div>
  );
};

export default PageSpeedInsight;
