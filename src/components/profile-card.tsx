/* eslint-disable react-hooks/exhaustive-deps */
import { useSearchParams } from "react-router-dom";
import { PERIOD } from "../lib/constants";
import { cn } from "../lib/utils";
import { useEffect } from "react";

export const ProfileCard = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const isDaily = searchParams.get("period") === PERIOD.DAILY;
  const isWeekly = searchParams.get("period") === PERIOD.WEEKLY;
  const isMonthly = searchParams.get("period") === PERIOD.MONTHLY;

  const handleClick = (value: PERIOD) => {
    setSearchParams({ period: value });
  };

  useEffect(() => {
    setSearchParams({ period: PERIOD.DAILY });
  }, []);

  return (
    <div className="h-[180px] w-72 rounded-xl bg-[#1c1f4a]  md:h-[450px] md:w-56">
      <div className="flex h-[120px] w-full rounded-xl bg-[#5847eb] p-6 max-md:items-center max-md:gap-4 md:h-[300px] md:flex-col">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white p-0.5 md:mb-8">
          <img src="/images/image-jeremy.png" alt="profile-image" />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <h2 className="text-xs text-gray-300">Report for</h2>
          <h1 className="font-light md:text-4xl">Jeremy Robson</h1>
        </div>
      </div>

      <div className="flex justify-between p-5 font-light md:flex-col md:items-start md:gap-y-4 md:p-6">
        <button
          onClick={() => handleClick(PERIOD.DAILY)}
          className={cn("text-white", { "text-gray-400": isDaily })}
        >
          Daily
        </button>
        <button
          onClick={() => handleClick(PERIOD.WEEKLY)}
          className={cn("text-white", { "text-gray-400": isWeekly })}
        >
          Weekly
        </button>
        <button
          onClick={() => handleClick(PERIOD.MONTHLY)}
          className={cn("text-white", { "text-gray-400": isMonthly })}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};
