export function getPsiAPIUrl(pageUrl: string): string {
  const { PAGE_SPEED_INSIGHT_API_KEY } = process.env;
  const categories =
    "&category=ACCESSIBILITY&category=BEST_PRACTICES&category=PERFORMANCE&category=SEO";
  return `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${pageUrl}&key=${PAGE_SPEED_INSIGHT_API_KEY}${categories}`;
}
