import StrategyGoogleApi from "@/types/e-strategy-google-api";
import { Root } from "@/types/types";

export function objectToQueryString(obj: Record<string, any>): string {
  const queryString = Object.keys(obj)
    .map((key) => {
      const value = obj[key];
      return value !== undefined
        ? `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`
        : "";
    })
    .filter(Boolean) // Remove empty string elements
    .join("&");

  return queryString;
}

export function appendQueryStringToUrl(
  url: string,
  queryString: string
): string {
  // Check if the URL already contains a query string
  const separator = url.includes("?") ? "&" : "?";

  // Concatenate the URL and query string
  const fullUrl = `${url}${separator}${queryString}`;

  return fullUrl;
}

export const determinePlatform = (url: string): StrategyGoogleApi => {
  // Your logic to determine if the URL is for a mobile or desktop version
  // You might use regex, string matching, or any other criteria specific to your URLs
  if (url.includes(`&strategy=${StrategyGoogleApi.desktop}`)) {
    return StrategyGoogleApi.desktop;
  } else {
    return StrategyGoogleApi.mobile;
  }
};

// export function determinePlatformFromRoot(root: Root): "mobile" | "desktop" {
//   return determinePlatform(root.lighthouseResult.requestedUrl);
// }
