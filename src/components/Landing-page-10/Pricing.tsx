import Image from "next/image";
import tick from "@/assets/icons/tick.svg";
import tickGray from "@/assets/icons/tickGray.svg";
import { FaArrowRight } from "react-icons/fa6";
import {
  PricingNormal,
  PricingPro,
  PricingNormalType,
  PricingProType,
} from "./PricingPlan";
import Button from "./Button";

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="flex flex-col gap-20 items-center md:py-28 text-white"
    >
      <div className="flex flex-col gap-4 items-center md:max-w-xl">
        <div className="py-2 px-4 gap-3">
          <span className="text-[#227BFF] text-sm font-semibold">Pricing</span>
        </div>
        <div className="flex flex-col gap-7 items-center">
          <span className="text-center text-[#F7F7F8] text-4xl font-medium tracking-tight">
            Pricing Plans to Suit Your Needs
          </span>
          <span className="font-normal tracking-[-0.18px] text-[#A8A8A8] text-base">
            Start making smarter decisions,Choose a plan
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1094px]">
        {PricingNormal.map((PricingPlan: PricingNormalType) => (
          <div
            key={PricingPlan.title}
            className="rounded-3xl py-8 md:pl-10 bg-[#161823] border border-[#2B2F45] flex flex-col gap-8 items-center md:flex-row md:max-w-lg md:max-h-72"
          >
            <div className="flex flex-col gap-6 justify-center  items-center md:w-40">
              <div className="flex flex-col gap-2 items-center ">
                <span className="text-lg font-semibold text-[#FCF9F7]">
                  {PricingPlan.title}
                </span>
                <span className="text-4xl font-semibold">
                  {PricingPlan.price}
                  <span className="text-[#9CA3AF]">/mo</span>
                </span>
              </div>
              <Button
                fill={PricingPlan.title !== "PRO"}
                price={true}
                size="md-l"
              >
                Buy Now
                <FaArrowRight />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {PricingPlan.features.map((feat: string) => (
                <div key={feat} className="flex items-start gap-2">
                  <Image src={tick} width={20} height={20} alt="icon" />
                  <span>{feat}</span>
                </div>
              ))}
              {(PricingPlan.featuresNot || []).map((feat: string) => (
                <div
                  key={feat}
                  className="flex items-start gap-2 text-[#484848]"
                >
                  <Image src={tickGray} width={20} height={20} alt="icon" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {PricingPro.map((PricingPlan: PricingProType) => (
          <div
            key={PricingPlan.title}
            className="rounded-3xl py-8 pl-10 pricing-bg border border-[#2B2F45] flex flex-col gap-8 items-center md:flex-row md:max-w-lg md:max-h-72"
          >
            <div className="flex flex-col gap-6 justify-center p-0 items-center md:w-40">
              <div className="flex flex-col gap-2 items-center">
                <span className="text-lg font-semibold text-[#FCF9F7]">
                  {PricingPlan.title}
                </span>
                <span className="text-4xl font-semibold">
                  {PricingPlan.price}
                  <span className="text-[#9CA3AF]">/mo</span>
                </span>
              </div>
              <Button fill={PricingPlan.title !== "PRO"} pro={true} size="md-l">
                Buy Now
                <FaArrowRight />
              </Button>
            </div>
            <div className="flex flex-col flex-grow items-start gap-4 max-w-72">
              {PricingPlan.features.map((feat: string) => (
                <div key={feat} className="flex items-start gap-2">
                  <Image src={tick} width={20} height={20} alt="icon" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
