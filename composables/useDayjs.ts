import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const useDayjs = () => {
  type DayJSTime = string | number | Date | dayjs.Dayjs | null | undefined;

  const formatMiniDate = (dateTime: DayJSTime) =>
    dayjs(dateTime).format("MMM YYYY"); // Feb 2024

  const formatRange = (start: DayJSTime, finish: DayJSTime) =>
    dayjs(start).to(dayjs(finish), true); // 3 years

  return { dayjs, formatMiniDate, formatRange };
};
