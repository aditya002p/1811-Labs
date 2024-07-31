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

export default async function Features2() {
  return (
    <div className="flex flex-col md:py-32 py-16 pt-[120px] pr-[0px] pb-[120px] pl-[0px] items-center md:gap-20 gap-[80px]">
      <div className="grid grid-cols-1 gap-[14px] items-center max-md:max-w-[642px] max-h-[228px]">
        <div className="flex flex-col gap-4 items-center">
          <span className="text-[#227BFF] font-semibold text-fontSize gap-[10px] md:leading-[44px]">
            What can you do with builder kit
          </span>
          <h1 className="grid grid-cols-1 font-medium text-2xl md:text-4xl md:leading-[44px] max-w-xl text-center text-[#ffffff]">
            Essentially, everything you need{" "}
            <span>to ship you first AI App</span>
          </h1>
        </div>

        <span className="md:text-[18px] md:max-w-[642px] text-[#787878] text-center mt-5 pl-[16px]">
          Highly modular NextJS AI Boilerplate that allows you to ship any AI
          Apps{" "}
          <span>
            within days. Save Hours of Effort and Use our robust Deployable
            code.
          </span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid md:grid-cols-3 flex-col md:gap-[24px] gap-[24px] flex-wrap pl-10 pr-10 mt-10">
        {cardDetails.map((card, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 md:p-6 md:pb-8 p-6 w-[308px] h-[194px] items-start rounded-2xl bg-[#161823]"
            >
              <div className="flex bg-[#227BFF] z-1 gap-[10px] p-[10px] rounded-[8px] w-[34px] h-[34px]">
                <Image
                  src={Lightning}
                  width={18}
                  height={18}
                  alt="logo"
                  className="size-[18px] pb-[0.57px]"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="md:text-xl text-lg font-semibold text-left text-[#ffffff] leading-[24.2px] tracking-[-2%]">
                  {card.title}
                </h1>
                <p className="text-[#787878] text-left ">{card.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
