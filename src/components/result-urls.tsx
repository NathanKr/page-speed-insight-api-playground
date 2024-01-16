import IResultUrl from "@/types/i-result-url";
import { FC } from "react";
import ResultUrl from "./result-url";

interface IProps {
  resultUrls: IResultUrl[];
}

const ResultUrls: FC<IProps> = ({ resultUrls }) => {
  const elems = resultUrls.map((it, i) => (
    <div key={i}>
      <ResultUrl result={it.result} url={it.url} type={it.type} />
    </div>
  ));
  return <>{elems}</>;
};

export default ResultUrls;
