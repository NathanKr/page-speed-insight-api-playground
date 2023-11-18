import StrategyGoogleApi from "@/types/e-strategy-google-api";
import IGetPsiInfo from "@/types/i-get-psi-info";
const baseUrl = "https://nathankrasney.com";
const tabs: string[] = [
  "/",
  "/about",
  "/contact",
  "/courses",
  "/quiz",
  "/testimonials",
  "/events",
];
const catChosen = {
  performance: true,
  accessibility: true,
  bestPractices: true,
  seo: true,
};
const strategy = StrategyGoogleApi.mobile;
export const infos: IGetPsiInfo[] = tabs.map((tab) => {
  return { pageUrl: `${baseUrl}${tab}`, ...catChosen, strategy };
});
