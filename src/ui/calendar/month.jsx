import { format } from "date-fns";

import { calendarMonth } from "@/modules/calendar";

export default function CalendarMonth({ date = new Date() }) {
  const calendar = calendarMonth(date);

  return (
    <div className="mt-16 container mx-auto">
      <div className="flex-col w-full">
        {calendar.map((week, i) => (
          <div key={i} className="flex w-full">
            {week.map((day, j) => (
              <div
                key={j}
                className="h-12 w-12 border border-gray-800 flex items-center justify-center">
                {format(day, "d")}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
