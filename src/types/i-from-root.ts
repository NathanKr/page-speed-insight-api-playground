import StrategyGoogleApi from "./e-strategy-google-api";
import { Audits } from "./google-api-psi-types";
import { IPsiScore } from "./i-psi-score";

export default interface IFromRoot{
    score : IPsiScore;
    audits: Audits;
    // pageUrl: string; part of the map
    strategy: StrategyGoogleApi;
}