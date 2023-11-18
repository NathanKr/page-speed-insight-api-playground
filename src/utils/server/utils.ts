import CategoryGoogleApi from "@/types/e-category-google-api";
import IGetPsiInfo from "@/types/i-get-psi-info";

function getCategoryInUrl(option: boolean, cat: CategoryGoogleApi): string {
  return option ? `&category=${cat}` : "";
}

export function getPsiAPIUrl(info: IGetPsiInfo): string {
  const { PAGE_SPEED_INSIGHT_API_KEY } = process.env;
  const { pageUrl,strategy } = info;
  let categories = getCategoryInUrl(
    info.accessibility,
    CategoryGoogleApi.accessibility
  );
  categories += getCategoryInUrl(
    info.bestPractices,
    CategoryGoogleApi.bestPractices
  );
  categories += getCategoryInUrl(
    info.performance,
    CategoryGoogleApi.performance
  );
  categories += getCategoryInUrl(info.seo, CategoryGoogleApi.seo);

  return `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${pageUrl}&key=${PAGE_SPEED_INSIGHT_API_KEY}&strategy=${strategy}${categories}`;
}
