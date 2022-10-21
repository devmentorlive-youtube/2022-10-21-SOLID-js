import CalendarMonth from "@/ui/calendar/month";
import { PrimaryButton, SmallButton } from "@/ui/button";

export default function Calendar({ ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      <CalendarMonth {...rest} />
      <div className="flex gap-3">
        <div className="w-2/3">
          <PrimaryButton>HI Tribe!</PrimaryButton>
        </div>
        <div className="w-1/3">
          <SmallButton>I identify as a large button</SmallButton>
        </div>
      </div>
    </div>
  );
}
