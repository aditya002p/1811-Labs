import Image from "next/image";
import tick from "@/assets/icons/tick.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Card2, Card2Type } from "./Card2";
import { Card1, Card1Type } from "./card1";
import Button2 from "./Button2";
import Button1 from "./Button1";

export default function Pricing() {
  return (
    <div className="flex flex-col gap-[80px] items-center py-[120px] px-[0px] text-white md:h-[774px]">
      <div className="flex flex-col gap-[14px] items-center md:max-w-[561px] md:max-h-[155px]">
        <div className="max-w-[79px] max-h-[40px] py-[8px] px-[16px] gap-[10px]">
          <span className="text-[#227BFF] text-[13.9px] leading-[24px] font-semibold">
            Pricing
          </span>
        </div>
        <div className="flex flex-col md:max-w-[561px] md:max-h-[101px] gap-[28px] items-center">
          <span className="grid grid-flow-row text-center text-[#F7F7F8] text-[36px] font-medium leading-[44px] tracking-[-0.03em] md:max-w-[561px] md:max-h-[44px]">
            Pricing Plans to Suit Your Needs
          </span>

          <span className="!font-normal tracking-[-0.18px] !text-[#A8A8A8] max-w-[550px] max-h-[29px] leading-[28.8px]">
            Start making smarter decisions, Choose a plan
          </span>
        </div>
      </div>
      <div className="max-w-[1094px] grid md:grid-cols-2 gap-[16px]">
        {Card1.map((PricingPlan: Card1Type) => {
          return (
            <div
              key={PricingPlan.title}
              className="rounded-[24px] max-h[299px] max-w-[539px] grid grid-cols-1 gap-[48px] py-[32px] px-[4px]"
            >
              <div className=" flex flex-col md:flex-row gap-12 py-8 pr-[4px] pl-[38px] items-center bg-[#161823] border border-[#2B2F45] rounded-3xl">
                <div className="flex flex-col gap-[24px] max-w-[166px] max-h-[150px]">
                  <div className="max-w-[166px] max-h-[82px] gap-[8px]">
                    <div className="max-w-[134px] max-h-[28px] py-[6px] px-[14px] text-center font-semibold text-[#FCF9F7] gap-2 rounded-sm">
                      <span className="max-w-[37px] max-h-[24px] font-semibold text-[18px] leading-[24px] tracking-[-0.5px]">
                        {PricingPlan.title}
                      </span>
                    </div>
                    <div className="flex flex-col leading-[50px] font-semibold w-[166px] h-[50px] tracking-[--1.2000000476837158px] items-center">
                      <span className="text-5xl font-semibold">
                        {PricingPlan.price}
                        <span className="text-[grey]">/mo</span>
                      </span>
                    </div>
                  </div>
                  <div className="max-w-[166px] max-h-[52px] py-[16px] px-[26px] rounded-[24px] gap-[10px] items-center">
                    <Button1
                      fill={PricingPlan.title !== "PRO"}
                      size="sm"
                      className="max-w-[114px] max-h-[44px] rounded-[8px] py-[16px] px-[26px] bg-gray-500 items-center"
                    >
                      Buy Now
                      <FaArrowRight />
                    </Button1>
                  </div>
                </div>
                <div className="grid grid-cols-1 max-w-[283px] max-h-[235px] gap-[16px] px-[0px] py-[8px]">
                  {PricingPlan.features.map((feat: string) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 text-start max-w-[267px] max-h-[23px]"
                    >
                      <Image src={tick} width={20} height={20} alt="icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                  {(PricingPlan.features1 || []).map((feat: string) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 text-start text-[gray] max-w-[267px] max-h-[44px]"
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

        {Card2.map((PricingPlan: Card2Type) => {
          return (
            <div
              key={PricingPlan.title}
              className="rounded-[24px] max-h[299px] max-w-[539px] grid grid-cols-1 gap-[48px] py-[32px] px-[4px]"
            >
              <div className="flex flex-col md:flex-row gap-12 py-8 pr-[4px] pl-[38px] items-center bg-new-gradient border border-[#2B2F45] rounded-3xl">
                <div className="flex flex-col gap-[24px] max-w-[166px] max-h-[150px]">
                  <div className="max-w-[166px] max-h-[82px] gap-[8px]">
                    <div className="max-w-[134px] max-h-[28px] py-[6px] px-[14px] text-center font-semibold text-[#FCF9F7] gap-2 rounded-sm">
                      <span className="max-w-[37px] max-h-[24px] font-semibold text-[18px] leading-[24px] tracking-[-0.5px]">
                        {PricingPlan.title}
                      </span>
                    </div>
                    <div className="flex flex-col leading-[50px] font-semibold w-[166px] h-[50px] tracking-[--1.2000000476837158px] items-center">
                      <span className="text-5xl font-semibold">
                        {PricingPlan.price}
                        <span className="text-[grey]">/mo</span>
                      </span>
                    </div>
                  </div>
                  <div className="max-w-[166px] max-h-[52px] py-[16px] px-[26px] rounded-[24px] gap-[10px] items-center">
                    <Button2
                      fill={PricingPlan.title !== "PRO"}
                      size="sm"
                      className="max-w-[114px] max-h-[44px] rounded-[8px] py-[16px] px-[26px] bg-[#FFFFFF] items-center"
                    >
                      Buy Now
                      <FaArrowRight />
                    </Button2>
                  </div>
                </div>
                <div className="grid grid-cols-1 max-w-[283px] max-h-[235px] gap-[16px] px-[0px] py-[8px]">
                  {PricingPlan.features.map((feat: string) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 text-start max-w-[267px] max-h-[44px]"
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
