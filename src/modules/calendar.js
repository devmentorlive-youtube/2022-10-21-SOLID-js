const {
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth,
  isAfter,
  addDays,
} = require("date-fns");

export function calendarMonth(date = new Date(), weekBuilder = calendarWeek) {
  const month = [];
  const firstDay = startOfWeek(startOfMonth(date));
  const endDay = endOfWeek(endOfMonth(date));

  let currentDate = firstDay;

  while (true) {
    if (isAfter(currentDate, endDay)) break;
    const week = weekBuilder(currentDate);
    month.push(week);

    currentDate = addDays(week[week.length - 1], 1);
  }

  return month;
}

export function calendarWeek(date = new Date()) {
  const first = startOfWeek(date);
  const last = endOfWeek(date);
  let currentWeekDay = first;
  const week = [];

  while (true) {
    if (isAfter(currentWeekDay, last)) break;
    week.push(currentWeekDay);

    currentWeekDay = addDays(currentWeekDay, 1);
  }

  return week;
}

export default function Calendar() {
  return {
    calendarWeek,
    calendarMonth,
  };
}
