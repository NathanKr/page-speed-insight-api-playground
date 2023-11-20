import CategoryGoogleApi from "@/types/e-category-google-api";
import IGetPsiInfo from "@/types/i-get-psi-info";

function getCategoryInUrl(option: boolean, cat: CategoryGoogleApi): string {
  return option ? `&category=${cat}` : "";
}

export function getCategories(
  accessibility: boolean,
  bestPractices: boolean,
  performance: boolean,
  seo: boolean
): string {
  let categories = getCategoryInUrl(
    accessibility,
    CategoryGoogleApi.accessibility
  );
  categories += getCategoryInUrl(
    bestPractices,
    CategoryGoogleApi.bestPractices
  );
  categories += getCategoryInUrl(performance, CategoryGoogleApi.performance);
  categories += getCategoryInUrl(seo, CategoryGoogleApi.seo);

  return categories;
}

export function getPsiAPIUrl(info: IGetPsiInfo): string {
  const { PAGE_SPEED_INSIGHT_API_KEY } = process.env;
  const { pageUrl, strategy } = info;

  let categories = getCategories(
    info.accessibility,
    info.bestPractices,
    info.performance,
    info.seo
  );

  return `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${pageUrl}&key=${PAGE_SPEED_INSIGHT_API_KEY}&strategy=${strategy}${categories}`;
}
