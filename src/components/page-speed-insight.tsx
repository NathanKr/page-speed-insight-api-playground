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
import React, { FC, useEffect, useState } from "react";
import PsiScore from "./psi-score";
import styles from "@/styles/page-speed-insight.module.css";

interface IProps {
  infos: IGetPsiInfo[];
  numRuns: number;
  delayBetweenRunSec: number;
}

const PageSpeedInsight: FC<IProps> = ({ infos }) => {
  const [roots, setRoots] = useState<Map<string, Root>>(new Map());
  const [err, setErr] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState(false);

  async function getInfo() {
    for (let i = 0; i < infos.length; i++) {
      const info = infos[i];
      await getPsiInfo(info);
      await pauseMs(3000);
   }
  }

  const addNewInfo = (newInfo: Root) => {
    setRoots((prevRoots) => {
      // Use the spread operator to create a new Map with the previous items
      const updatedRoots = new Map(prevRoots);

      // Add the new item to the Map using its ID as the key
      updatedRoots.set(newInfo.lighthouseResult.requestedUrl, newInfo);

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

  const elems = Array.from(roots.values()).map((p) => (
    <PsiScore
      key={p.id}
      strategy={determinePlatform(p.lighthouseResult.requestedUrl)}
      cat={p.lighthouseResult.categories}
      url={p.lighthouseResult.requestedUrl}
    />
  ));

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

  let elemComplate;
  if (infos.length == roots.size) {
    elemComplate = <p>completed : {getLocalDateAndTimeNow()}</p>;
  }

  return (
    <div className={styles.container}>
      <button onClick={getInfo}>Start</button>
      {elemError}
      {elemLoading}
      {elemTable}
      {elemComplate}
    </div>
  );
};

export default PageSpeedInsight;
