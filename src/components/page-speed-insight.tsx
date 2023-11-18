import IGetPsiInfo from "@/types/i-get-psi-info";
import { Root } from "@/types/types";
import {
  appendQueryStringToUrl,
  determinePlatform,
  objectToQueryString,
} from "@/utils/client/utils";
import axios, { AxiosError } from "axios";
import React, { FC, useEffect, useState } from "react";
import PsiScore from "./psi-score";
import styles from "@/styles/page-speed-insight.module.css";

interface IProps {
  infos: IGetPsiInfo[];
}

const PageSpeedInsight: FC<IProps> = ({ infos }) => {
  const [roots, setRoots] = useState<Map<string, Root>>(new Map());
  const [err, setErr] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    infos.forEach((info, i) => {
      // use setInterval so google api will get a lot of stuff at once
      setTimeout(() => {
        getPsiInfo(info);
      }, i * 3000);
    });
  }, []);

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

  function getPsiInfo(info: IGetPsiInfo) {
    const baseApiUrl = "/api/psi";
    const queryString = objectToQueryString(info);
    const url = appendQueryStringToUrl(baseApiUrl, queryString);

    setErr(null);
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        addNewInfo(res.data.root);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        setErr(err);
        setLoading(false);
      });
  }

  let elemError;
  if (err) {
    elemError = <div>axios error : {err.message} </div>;
  }

  let elemLoading;

  if (loading) {
    elemLoading = <div>Loading please wait ........</div>;
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
          <th>url</th>
          <th>strategy</th>
          <th>performance</th>
          <th>seo</th>
          <th>best practices</th>
          <th>accessibility</th>
        </tr>
      </thead>
      <tbody>{elems}</tbody>
    </table>
  );

  let elemComplate;
  if (infos.length == roots.size) {
    elemComplate = <p>completed</p>;
  }
  
  return (
    <div className={styles.container}>
      {elemError}
      {elemLoading}
      {elemTable}
      {elemComplate}
    </div>
  );
};

export default PageSpeedInsight;
