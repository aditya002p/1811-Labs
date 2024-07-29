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
    <div className="flex flex-col md:py-32 py-16 pt-[120px] pr-[0px] pb-[120px] pl-[0px] items-center md:gap-20 gap-10">
      <div className="flex flex-col gap-7 items-center max-md:max-w-80">
        <div className="flex flex-col gap-4 items-center">
          <span className="text-[#227BFF] font-semibold text-fontSize">
            What can you do with builder kit
          </span>
          <h1 className="font-medium text-2xl md:text-4xl md:leading-[44px] max-w-xl text-center">
            Essentially,everything you need to ship you first AI App
          </h1>
        </div>

        <span className="md:text-lg md:max-w-[642px] text-[#787878] text-center">
          Highly modular NextJS AI Boilerplate that allows you to ship any AI
          Apps within days. Save Hours of Effort and Use our robust Deployable
          code.
        </span>
      </div>

      <div className="flex md:grid grid-cols-3 flex-col md:gap-12 gap-24 flex-wrap pl-10 pr-10">
        {cardDetails.map((card, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 md:p-6 md:pb-8 p-6 w-96 items-start rounded-2xl bg-[#313B825D]"
            >
              <div className="flex bg-[#227BFF] z-1 gap-10 rounded-sm">
                <Image
                  src={Lightning}
                  width={25}
                  height={25}
                  alt="logo"
                  className="size-8 p-1 "
                />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="md:text-xl text-lg font-medium text-left text-[#ffffff]">
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
