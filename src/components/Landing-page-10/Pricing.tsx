import Image from "next/image";
import tick from "@/assets/icons/tick.svg";
import tickGray from "@/assets/icons/tickGray.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Card2, Card2Type } from "./Card2";
import { Card1, Card1Type } from "./card1";
import Button2 from "./Button2";
import Button1 from "./Button1";

export default function Pricing() {
  return (
    <div className="flex flex-col gap-20 items-center py-28 px-0 text-white max-h-full">
      <div className="flex flex-col gap-4 items-center md:max-w-xl md:max-h-40">
        <div className="max-w-20 max-h-10 py-2 px-4 gap-3">
          <span className="text-[#227BFF] text-sm font-semibold">Pricing</span>
        </div>
        <div className="flex flex-col md:max-w-xl md:max-h-28 gap-7 items-center">
          <span className="grid grid-flow-row text-center text-[#F7F7F8] text-4xl font-medium tracking-tight md:max-w-xl md:max-h-11">
            Pricing Plans to Suit Your Needs
          </span>

          <span className="font-normal tracking-tight text-[#A8A8A8] max-w-xl max-h-7 text-base">
            Start making smarter decisions, Choose a plan
          </span>
        </div>
      </div>
      <div className="max-w-6xl grid md:grid-cols-2 gap-4">
        {Card1.map((PricingPlan: Card1Type) => {
          return (
            <div
              key={PricingPlan.title}
              className="rounded-[24px] max-h[299px] max-w-[539px] grid grid-cols-1 gap-[48px] py-[32px] px-[4px]"
            >
              <div className=" flex flex-col md:flex-row gap-12 py-8 pr-[4px] pl-[38px] items-center bg-[#161823] border border-[#2B2F45] rounded-3xl">
                <div className="flex flex-col gap-[24px] max-w-[166px] max-h-[150px] items-center">
                  <div className="flex flex-col max-w-[166px] max-h-[82px] gap-[8px] items-center">
                    <span className="max-w-[37px] max-h-[24px] font-semibold text-[18px] leading-[24px] tracking-[-0.5px] text-[#FCF9F7]">
                      {PricingPlan.title}
                    </span>
                    <div className="flex flex-col leading-[50px] font-semibold w-[166px] h-[50px] tracking-[0.05em]">
                      <span className="text-[40px] font-semibold">
                        {PricingPlan.price}
                        <span className="text-[#9CA3AF]">/mo</span>
                      </span>
                    </div>
                  </div>
                  <Button1
                    fill={PricingPlan.title !== "PRO"}
                    className="w-[114px] max-h-[44px] gap-[10px] rounded-[8px] py-[12px] px-[16px] bg-gray-500 items-center"
                  >
                    Buy Now
                    <FaArrowRight />
                  </Button1>
                </div>
                <div className="grid grid-cols-1 max-w-[283px] max-h-[235px] gap-[16px] px-[0px] py-[8px]">
                  {PricingPlan.features.map((feat: string) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 text-start max-w-[267px] max-h-[22px]"
                    >
                      <Image src={tick} width={20} height={20} alt="icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                  {(PricingPlan.features1 || []).map((feat: string) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 text-start text-[#484848] max-w-[267px] max-h-[34px]"
                    >
                      <Image src={tickGray} width={20} height={20} alt="icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {Card2.map((PricingPlan: Card2Type) => {
          return (
            <div
              key={PricingPlan.title}
              className="rounded-[24px] max-h[299px] max-w-[539px] grid grid-cols-1 gap-[48px] py-[32px] px-[4px]"
            >
              <div className="flex flex-col md:flex-row gap-12 py-8 pr-[4px] pl-[38px] items-center card2 border border-[#2B2F45] rounded-3xl">
                <div className="flex flex-col gap-[24px] max-w-[166px] max-h-[150px] items-center">
                  <div className="flex flex-col max-w-[166px] max-h-[82px] gap-[8px] items-center">
                    <span className="max-w-[37px] max-h-[24px] font-semibold text-[18px] leading-[24px] tracking-[-0.5px]">
                      {PricingPlan.title}
                    </span>
                    <div className="flex flex-col leading-[50px] font-semibold w-[166px] h-[50px] tracking-[0.05em]">
                      <span className="text-[40px] font-semibold">
                        {PricingPlan.price}
                        <span className="text-[#9CA3AF]">/mo</span>
                      </span>
                    </div>
                  </div>
                  <Button2
                    fill={PricingPlan.title !== "PRO"}
                    className="w-[114px] max-h-[44px] gap-[10px] rounded-[8px] py-[12px] px-[16px] bg-[#FFFFFF] text-[#000000] items-center"
                  >
                    Buy Now
                    <FaArrowRight />
                  </Button2>
                </div>
                <div className="grid grid-cols-1 max-w-[283px] max-h-[235px] gap-[16px] px-[0px] py-[8px]">
                  {PricingPlan.features.map((feat: string) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 text-start max-w-[267px] max-h-[34px] "
                    >
                      <Image src={tick} width={20} height={20} alt="icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
