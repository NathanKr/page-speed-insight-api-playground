import IGetPsiInfo from "@/types/i-get-psi-info";
import { Root } from "@/types/types";
import {
  appendQueryStringToUrl,
  determinePlatform,
  getLocalDateAndTimeNow,
  objectToQueryString,
  pauseMs,
} from "@/utils/client/utils";
import axios, { AxiosError } from "axios";
import React, { FC, useState } from "react";
import PsiScore from "./psi-score";
import styles from "@/styles/page-speed-insight.module.css";
import { PAUSE_BETWEEN_API_MS } from "@/utils/constants";
import RunStatus from "@/types/e-run-status";

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
  const [roots, setRoots] = useState<Map<string, Root[]>>(new Map());
  const [err, setErr] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentRun, setCurrentRun] = useState(0);
  const [runStatus, setRunStatus] = useState(RunStatus.notStarted);

  async function getInfo() {
    setRoots(new Map());
    setErr(null);
    setLoading(false);
    setCurrentRun(0);
    setRunStatus(RunStatus.started);

    for (let iRun = 0; iRun < numRuns; iRun++) {
      setCurrentRun(iRun + 1);
      for (let iPage = 0; iPage < infos.length; iPage++) {
        const info = infos[iPage];
        await getPsiInfo(info);
        await pauseMs(PAUSE_BETWEEN_API_MS);
      }
      await pauseMs(delayBetweenRunSec * 1000);
    }
    setRunStatus(RunStatus.completed);
  }

  const addNewInfo = (newInfo: Root) => {
    setRoots((prevRoots) => {
      // Use the spread operator to create a new Map with the previous items
      const updatedRoots = new Map(prevRoots);
      const key = newInfo.lighthouseResult.requestedUrl;
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

  async function getPsiInfo(info: IGetPsiInfo) {
    const baseApiUrl = "/api/psi";
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
  const elems = Array.from(roots.values()).map((roots) =>
    roots.map((root) => {
      id++;
      return (
        <PsiScore
          key={id}
          strategy={determinePlatform(root.lighthouseResult.requestedUrl)}
          cat={root.lighthouseResult.categories}
          url={root.lighthouseResult.requestedUrl}
        />
      );
    })
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
      <tbody>{elems}</tbody>
    </table>
  );

  let elemComplete;
  if (runStatus == RunStatus.completed) {
    elemComplete = <p>completed : {getLocalDateAndTimeNow()}</p>;
  }

  return (
    <div className={styles.container}>
      <p>
        run {currentRun} / {numRuns}
      </p>
      <p>PAUSE_BETWEEN_API_MS : {PAUSE_BETWEEN_API_MS}</p>
      <p>delayBetweenRunSec : {delayBetweenRunSec}</p>
      <button disabled={runStatus == RunStatus.started} onClick={getInfo}>
        Start
      </button>
      {elemComplete}
      {elemError}
      {elemLoading}
      {elemTable}
    </div>
  );
};

export default PageSpeedInsight;
