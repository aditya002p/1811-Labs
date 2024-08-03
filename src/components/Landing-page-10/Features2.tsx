import { Lightning } from "@/assets/icons";
import Image from "next/image";

const cardDetails = [
  {
    title: "Quality apps",
    content:
      "Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.",
  },
  {
    title: "Quality apps",
    content:
      "Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.",
  },
  {
    title: "Quality apps",
    content:
      "Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.",
  },
  {
    title: "Quality apps",
    content:
      "Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.",
  },
  {
    title: "Quality apps",
    content:
      "Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.",
  },
  {
    title: "Quality apps",
    content:
      "Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.",
  },
];

export default function Features2() {
  return (
    <div className="flex flex-col py-16 md:py-28 items-center gap-10 md:gap-20 max-w-full filter-custom-drop-shadow">
      <div className="grid grid-cols-1 gap-4 items-center max-w-2xl text-center">
        <span className="text-blue-500 text-sm font-semibold leading-6">
          What can you do with builderkit
        </span>
        <div className="flex flex-col gap-6 items-center md:max-w-2xl">
          <div className="flex flex-col font-medium text-3xl md:text-4xl leading-9 md:leading-10 text-white tracking-tight">
            Essentially, everything you need
            <span>to ship your first AI App</span>
          </div>
          <p className="flex flex-col font-medium text-base md:text-lg text-[#A8A8A8] md:max-w-2xl">
            Highly modular NextJS AI Boilerplate that allows you to ship any AI
            Apps
            <span>
              within days. Save Hours of Effort and Use our robust Deployable
              code.
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl">
        {cardDetails.map((card, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 p-6 bg-[#161823] rounded-3xl w-full h-auto items-start"
          >
            <div>
              <Image
                src={Lightning}
                width={34}
                height={34}
                alt="Lightning Icon"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-white leading-6 tracking-tight">
                {card.title}
              </h3>
              <p className="text-[#A8A8A8] text-sm leading-6 font-normal">
                {card.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
