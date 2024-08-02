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
    <div className="flex flex-col py-[60px] md:py-[120px] px-4 md:px-0 items-center gap-[40px] md:gap-[80px] w-full md:h-[964px]">
      <div className="grid grid-cols-1 gap-[14px] items-center max-w-[642px]">
        <div className="flex flex-col gap-[10px] items-center py-2 px-4">
          <span className="text-[#227BFF] text-[13.9px] font-semibold leading-[24px] text-center">
            What can you do with builder kit
          </span>
        </div>
        <div className="flex flex-col gap-7 text-center">
          <h1 className="font-medium text-2xl md:text-4xl leading-[32px] md:leading-[44px] text-[#ffffff]">
            Essentially, everything you need
            <span> to ship your first AI App</span>
          </h1>
          <p className="font-medium text-[16px] md:text-[18px] text-[#A8A8A8]">
            Highly modular NextJS AI Boilerplate that allows you to ship any AI
            Apps
            <span>
              {" "}
              within days. Save Hours of Effort and Use our robust Deployable
              code.
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] max-w-[972px] w-full">
        {cardDetails.map((card, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 w-full md:w-[308px] h-auto items-start rounded-3xl bg-[#161823]"
            >
              <div>
                <Image src={Lightning} width={34} height={34} alt="logo" />
              </div>
              <div className="flex flex-col gap-2 max-w-full">
                <h1 className="text-[20px] font-semibold text-[#FFFFFF] leading-[24.2px] tracking-[-0.02em]">
                  {card.title}
                </h1>
                <p className="text-[#A8A8A8] text-[14px] leading-[20px]">
                  {card.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
