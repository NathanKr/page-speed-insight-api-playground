import InterestingLighthouseResultType from "./e-interesting-lighthouse-result-type";

export default interface IStat{
    name : string;
    type : InterestingLighthouseResultType;
    avg : number;
    std : number
}