import IGetPsiInfo from "@/types/i-get-psi-info";
import { Root } from "@/types/types";
import {
  appendQueryStringToUrl,
  objectToQueryString,
} from "@/utils/client/utils";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import PsiScore from "./psi-score";

const PageSpeedInsight = () => {
  const [root, setRoot] = useState<Root>();
  const [err, setErr] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState(false);
  const info: IGetPsiInfo = {
    pageUrl: "https://developers.google.com",
    performance: true,
    accessibility: true,
    bestPractices: true,
    seo: true,
  };

  useEffect(() => {
    getPsiInfo(info);
  }, []);

  function getPsiInfo(info: IGetPsiInfo) {
    const baseApiUrl = "/api/psi";
    const queryString = objectToQueryString(info);
    const url = appendQueryStringToUrl(baseApiUrl, queryString);
    setErr(null);
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setRoot(res.data.root);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        setErr(err);
        setLoading(false);
      });
  }

  if (err) {
    return <div>axios error</div>;
  }

  if (loading) {
    return <div>Loading please wait ........</div>;
  }

  if (!root) {
    return <div>root is empty</div>;
  }

  return (
    <PsiScore
      cat={root.lighthouseResult.categories}
      url={root.lighthouseResult.requestedUrl}
    />
  );
};

export default PageSpeedInsight;
