import StrategyGoogleApi from "./e-strategy-google-api";
import { IPsiScore } from "./i-psi-score";

export default interface IFromRoot{
    score : IPsiScore;
    // pageUrl: string; part of the map
    strategy: StrategyGoogleApi;
}