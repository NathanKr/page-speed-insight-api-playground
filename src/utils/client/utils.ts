import dayjs from "dayjs";


export function getDefaultDateFromInput(msFrom1970: number): string {
  return new Date(msFrom1970).toISOString().slice(0, 16); // "YYYY-MM-DDTHH:mm"
}

export function getMsFrom1970FromDatetimeInputValue(datetimeValue: string): number {
  return new Date(datetimeValue).getTime();
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
