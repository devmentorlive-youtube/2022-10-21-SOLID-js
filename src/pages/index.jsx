import { useState } from "react";
import Calendar from "@/features/calendar";

export default function Homepage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="mt-16 container mx-auto">
      <div className="w-full sm:w-1/5 mx-auto">
        <Calendar date={selectedDate} />
      </div>
    </div>
  );
}
