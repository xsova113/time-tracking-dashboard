import { useSearchParams } from "react-router-dom";
import { IData } from "../../type";
import { BsThreeDots } from "react-icons/bs";
import { PERIOD } from "../lib/constants";

export const ActivityCard = ({ timeframes, title }: IData) => {
  const [searchParams] = useSearchParams();
  const period = searchParams.get("period") as PERIOD;

  const bgColor = {
    work: "#ff8c66",
    play: "#56c2e6",
    study: "#ff5c7c",
    exercise: "#4acf81",
    social: "#7536d3",
    self_care: "#f1c65b",
  };

  const pastTimeFrame = {
    [PERIOD.DAILY]: "Yesterday",
    [PERIOD.WEEKLY]: "Last Week",
    [PERIOD.MONTHLY]: "Last Month",
  };

  return (
    <div className="relative h-[170px] w-72 rounded-xl md:h-[212px] md:w-56">
      <div
        className={"absolute top-0 h-[70px] w-full overflow-auto rounded-t-xl"}
        style={{
          background:
            bgColor[
              title.toLowerCase().replace(" ", "_") as keyof typeof bgColor
            ],
        }}
      >
        <img
          src={`/images/icon-${title.toLowerCase().replace(" ", "-")}.svg`}
          className="relative -top-1 right-3 ml-auto"
          width={80}
        />
      </div>
      <div className="relative z-10 flex h-full w-full flex-col rounded-xl">
        <div className="mt-auto flex flex-col gap-y-4 rounded-lg bg-[#1c1f4a] p-6">
          <div className="flex justify-between">
            <h1>{title}</h1>
            <BsThreeDots className="cursor-pointer text-2xl text-gray-400 transition hover:text-white" />
          </div>

          <div className="flex flex-row justify-between gap-y-2 max-md:items-center md:flex-col">
            <h3 className="text-2xl font-light md:text-5xl">
              {timeframes[period].current}hrs
            </h3>
            <p className="text-xs text-gray-300">
              {pastTimeFrame[period]} - {timeframes[period].previous}hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
