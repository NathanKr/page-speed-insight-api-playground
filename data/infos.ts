import StrategyGoogleApi from "@/types/e-strategy-google-api";
import IGetPsiInfo from "@/types/i-get-psi-info";
// --- todo nath - is this always last preview ??
// const baseUrl = "https://nathan-krasney-com-five.vercel.app/";
// const baseUrl = "https://nathan-krasney-51hs12604-natankrasney-gmailcom-s-team.vercel.app/"
const baseUrl = "https://nathankrasney.com"

const tabs: string[] = [
  "/",
  "/about",
  "/contact",
  "/courses",
  "/quiz",
  "/testimonials",
  "/blog",
  "/posts/page-speed-insight-score-automation",
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
