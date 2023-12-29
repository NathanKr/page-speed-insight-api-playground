import dayjs from "dayjs";

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



export function getLocalDateAndTimeNow(): string {
  const now = new Date();
  const milliseconds = now.getTime();
  return getLocalDateAndTime(milliseconds);
}

export function getLocalDateAndTime(milliseconds: number): string {
  return dayjs(milliseconds).format("DD MMM YY  HH:mm  Z  A");
}

export function pauseMs(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}
