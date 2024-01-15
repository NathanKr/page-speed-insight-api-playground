import InterestingLighthouseResult from "./interesting-lighthouse-result";

export default interface IInterestingLighthouseResultType {
  type: InterestingLighthouseResult;
  _isScore?: boolean; //non exist for InterestingLighthouseResult.score
}
