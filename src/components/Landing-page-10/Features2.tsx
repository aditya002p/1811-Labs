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
    <div className="flex flex-col py-16 md:py-32 items-center gap-10 md:gap-20 ">
      <div className="flex flex-col gap-7 items-center max-md:max-w-80 text-center">
        <div className="flex flex-col gap-4 items-center">
          <span className="text-blue-500 text-sm font-semibold leading-6">
            What can you do with builderkit
          </span>
          <div className="flex flex-col gap-6 items-center md:max-w-2xl">
            <h1 className="flex flex-col font-medium text-3xl md:text-4xl leading-9 md:leading-10 text-white tracking-tight">
              Essentially, everything you need
              <span>to ship your first AI App</span>
            </h1>
          </div>
        </div>
        <p className="text-base md:text-lg text-[#A8A8A8] md:max-w-[642px] text-center">
          Highly modular NextJS AI Boilerplate that allows you to ship any AI
          Apps <br />
          within days. Save Hours of Effort and Use our robust Deployable code.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl">
        {cardDetails.map((card, index) => (
          <div
            key={index}
            className="flex flex-col md:rounded-3xl rounded-lg shadow-md gap-2 bg-[#0f111a] md:p-6 p-4 w-80 items-start"
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
