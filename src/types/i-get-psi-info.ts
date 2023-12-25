import StrategyGoogleApi from "./e-strategy-google-api";

export interface IGetPsiInfoBase {
  performance: boolean;
  accessibility: boolean;
  bestPractices: boolean;
  seo: boolean;
}
export default interface IGetPsiInfo extends IGetPsiInfoBase {
  pageUrl: string;
  strategy: StrategyGoogleApi;
}
