import StrategyGoogleApi from "./e-strategy-google-api";

export default interface IGetPsiInfo{
    pageUrl : string;
    strategy:StrategyGoogleApi,
    performance : boolean;
    accessibility : boolean;
    bestPractices: boolean;
    seo : boolean
}