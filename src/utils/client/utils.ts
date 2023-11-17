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

export function appendQueryStringToUrl(url: string, queryString: string): string {
  // Check if the URL already contains a query string
  const separator = url.includes('?') ? '&' : '?';

  // Concatenate the URL and query string
  const fullUrl = `${url}${separator}${queryString}`;

  return fullUrl;
}