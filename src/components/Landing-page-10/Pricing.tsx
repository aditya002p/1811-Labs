import Image from "next/image";
import tick from "@/assets/icons/tick.svg";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";
import { Card2, Card2Type } from "./Card2";
import { Card1, Card1Type } from "./card1";
import Button2 from "./Button2";

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="flex flex-col gap-[80px] items-center p-[120px 0px 120px 0px] text-white md:max-w-[1440px] md:max-h-[774px]"
    >
      <div className="flex flex-col gap-[14px] items-center md:max-w-[561px] md:max-h-[155px]">
        <div className="max-w-[79px] max-h-[40px] p-[120px, 0px, 120px, 0px] mt-10">
          <span className="text-[#227BFF] text-[13.9px] leading-[24px] font-semibold">
            Pricing
          </span>
        </div>
        <div className="flex flex-col md:max-w-[561px] md:max-h-[101px] gap-[28px] items-center">
          <span className="grid grid-flow-row text-center text-[#F7F7F8] text-[36px] font-medium leading-[44px] tracking-[-3%] md:max-w-[561px] md:max-h-[44px]">
            Pricing Plans to Suit Your Needs
          </span>

          <span className="!font-normal tracking-[-0.18px] !text-[#a8a8a8] max-w-[550px] max-h-[29px  ]">
            Start making smarter decisions, Choose a plan
          </span>
        </div>
      </div>
      <div className="max-w-[1094px] grid md:grid-cols-2 gap-[16px] justify-between items-center">
        {Card1.map((PricingPlan: Card1Type) => {
          return (
            <div
              key={PricingPlan.title}
              className="rounded-[24px] max-h[299px] max-w-[539px] grid grid-cols-1 gap-[48px] p-[32px, 4px, 32px, 38px]"
            >
              <div className="card flex flex-col md:flex-row gap-6 md:gap-8 p-3 md:p-6 justify-between items-center bg-[#161823] border-solid border-[#2B2F45] rounded-2xl">
                <div className="grid grid-cols gap-[24px] max-w-[166px] max-h-[150px]">
                  <div className="max-w-[166px] max-h-[82px] gap-[8px]">
                    <div className="max-w-[134px] max-h-[28px] p-[6px, 14px, 6px, 14px] items-center text-center font-semibold text-[#FCF9F7]">
                      <span className="max-w-[37px] max-h-[24px] font-semibold text-[18px] leading-[24px] tracking-[-0.5px]">
                        {PricingPlan.title}
                      </span>
                    </div>
                    <div className="flex flex-col leading-[50px] font-semibold max-w-[166px] max-h-[50px] tracking-[-1.2px] items-center">
                      <span className="text-5xl font-semibold">
                        <span>$</span>
                        {PricingPlan.price}
                        <span className="text-[grey]">/mo</span>
                      </span>
                    </div>
                  </div>
                  <div className="max-w-[166px] max-h-[52px] p-[16px, 26px, 16px, 26px] rounded-[24px] gap-[10px] items-center">
                    <Button
                      fill={PricingPlan.title !== "PRO"}
                      size="sm"
                      className="max-w-[114px] max-h-[44px] rounded-[8px] p-[12px, 16px, 12px, 16px] gap-[10px] bg-gray-500 items-center"
                    >
                      Buy Now
                      <FaArrowRight />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 max-w-[283px] gap-[16px] p-[0px, 8px, 0px, 8px]">
                  {PricingPlan.features.map((feat: string) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 text-start "
                    >
                      <Image src={tick} width={20} height={20} alt="icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                  {(PricingPlan.features1 || []).map((feat: string) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 text-start text-[gray]"
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
              className="rounded-[24px] max-h[299px] max-w-[539px] grid grid-cols-1 gap-[48px] p-[32px, 4px, 32px, 38px]"
            >
              <div className="card flex flex-col md:flex-row gap-6 md:gap-8 p-3 md:p-6 justify-between items-center bg-new-gradient border-solid border-[#2B2F45] rounded-2xl">
                <div className="grid grid-cols gap-[24px] max-w-[166px] max-h-[150px]">
                  <div className="max-w-[166px] max-h-[82px] gap-[8px]">
                    <div className="max-w-[134px] max-h-[28px] p-[6px, 14px, 6px, 14px] items-center text-center font-semibold text-[#FCF9F7]">
                      <span className="max-w-[37px] max-h-[24px] font-semibold text-[18px] leading-[24px] tracking-[-0.5px]">
                        {PricingPlan.title}
                      </span>
                    </div>
                    <div className="flex flex-col leading-[50px] font-semibold max-w-[166px] max-h-[50px] tracking-[-1.2px] items-center">
                      <span className="text-5xl font-semibold">
                        <span>$</span>
                        {PricingPlan.price}
                        <span className="text-[grey]">/mo</span>
                      </span>
                    </div>
                  </div>
                  <div className="max-w-[166px] max-h-[52px] p-[16px, 26px, 16px, 26px] rounded-[24px] gap-[10px] items-center ">
                    <Button2
                      fill={PricingPlan.title !== "PRO"}
                      size="sm"
                      className="max-w-[114px] max-h-[44px] rounded-[8px] p-[12px, 16px, 12px, 16px] gap-[10px] bg-[#fffff] text-[black] items-center"
                    >
                      Buy Now
                      <FaArrowRight />
                    </Button2>
                  </div>
                </div>
                <div className="grid grid-cols-1 max-w-[283px] gap-[16px] p-[0px, 8px, 0px, 8px]">
                  {PricingPlan.features.map((feat: string) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 text-start "
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
