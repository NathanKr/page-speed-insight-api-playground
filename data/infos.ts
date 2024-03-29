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
  "/blog",
  "/newsletter",
  "/posts/page-speed-insight-score-automation",
  "/posts/use-core-web-vitals-for-better-ux-and-google-ranking",
  "/posts/javascript-object-group-by",
  "/posts/server-fake-time-e2e",
  "/posts/next.js-turbopack",
  "/posts/what-is-postcss",
  "/posts/reduce-css-file-size-for-better-performance",
  "/posts/srcset-and-responsive-images",
  "/posts/load-image-faster-with-webp",
  "/events",
];

export const PSI_API_SAMPLE_SAVE_TO_MONGODB = true;
export const URL_CONTAIN = "/nathankrasney.com";

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
