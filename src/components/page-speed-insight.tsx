import { Root } from "@/types/types";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

const PageSpeedInsight = () => {
  const [root, setRoot] = useState<Root>();
  const [err, setErr] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const internalApiUrl = "/api/psi";
    setErr(null);
    setLoading(true);
    axios
      .get(internalApiUrl)
      .then((res) => {
        console.log(res);
        setRoot(res.data);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        setErr(err);
        setLoading(false);
      });
  }, []);

  if (err) {
    return <div>axios error</div>;
  }

  if(loading){
    return <div>Loading please wait ........</div>;
  }

  if (!root) {
    return <div>root is empty</div>;
  }

  //   console.log(root.data.lighthouseResult);

  return <div>ok</div>;
};

export default PageSpeedInsight;
