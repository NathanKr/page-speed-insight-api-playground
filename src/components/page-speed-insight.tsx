import IGetPsiInfo from "@/types/i-get-psi-info";
import { Root } from "@/types/types";
import {
  appendQueryStringToUrl,
  objectToQueryString,
} from "@/utils/client/utils";
import axios, { AxiosError } from "axios";
import React, { FC, useEffect, useState } from "react";
import PsiScore from "./psi-score";

interface IProps {
  infos: IGetPsiInfo[];
}

const PageSpeedInsight: FC<IProps> = ({ infos }) => {
  const [roots, setRoots] = useState<Root[]>([]);
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
    setRoots((prevItems) => {
      // Use the spread operator to create a new array with the new item
      const updatedItems = [...prevItems, newInfo];

      // Return the updated array, which will be used as the new state
      return updatedItems;
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

  const elems = roots.map(p => (
      <PsiScore
        key={p.id}
        cat={p.lighthouseResult.categories}
        url={p.lighthouseResult.requestedUrl}
      />
    ));

  return (
    <>
      {elemError}
      {elemLoading}
      {elems}
    </>
  );
};

export default PageSpeedInsight;
