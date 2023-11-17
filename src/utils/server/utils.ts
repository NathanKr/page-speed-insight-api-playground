import CategoryGoogleApi from "@/types/e-category-google-api";
import IGetPsiInfo from "@/types/i-get-psi-info";

export function getPsiAPIUrl(info: IGetPsiInfo): string {
  const { PAGE_SPEED_INSIGHT_API_KEY } = process.env;
  const { pageUrl } = info;
  let categories = info.accessibility
    ? `&${CategoryGoogleApi.accessibility}`
    : "";
  categories += info.bestPractices ? `&${CategoryGoogleApi.bestPractices}` : "";
  categories += info.performance ? `&${CategoryGoogleApi.performance}` : "";
  categories += info.seo ? `&${CategoryGoogleApi.seo}` : "";

  return `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${pageUrl}&key=${PAGE_SPEED_INSIGHT_API_KEY}${categories}`;
}
