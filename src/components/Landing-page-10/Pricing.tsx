import Image from "next/image";
import tick from "@/assets/icons/tick.svg";
import tickGray from "@/assets/icons/tickGray.svg";
import { FaArrowRight } from "react-icons/fa6";
import { PricingPlans } from "./pricing-plans";
import Button from "./Button";

export default function Pricing() {
  return (
    <div id="pricing" className="flex justify-center md:py-20 py-10">
      <div className="flex flex-col gap-20 md:max-w-6xl max-w-80 items-center">
        <div className="items-center flex flex-col gap-7">
          <div className="items-center flex flex-col gap-4">
            <span className="text-[#227BFF] font-semibold text-sm">
              Pricing
            </span>
            <h1 className="md:text-4xl text-2xl text-center max-w-[560px] font-medium">
              Pricing Plans to Suit Your Needs
            </h1>
          </div>
          <span className="text-[#A8A8A8] text-center">
            Start making smarter decisions, Choose a plan
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 ">
          {PricingPlans.map((plan) => (
            <div
              key={plan.title}
              className={` ${plan.type === "Pro" ? "pricing-bg" : "bg-[#161823]"} border border-[#2B2F45] rounded-3xl flex gap-12 px-1 py-8 items-center md:flex-row flex-col w-full`}
            >
              <div className="flex flex-col gap-6 items-center flex-1">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-center text-lg">
                    {plan.title}
                  </h3>
                  <div className="font-semibold text-4xl leading-[50px]">
                    {plan.price}
                    <span className="text-[#9CA3AF]">/mo</span>
                  </div>
                </div>
                {plan.type === "Pro" ? (
                  <Button size="md-l" pro={true}>
                    Buy Now
                    <FaArrowRight />
                  </Button>
                ) : (
                  <Button size="md-l" price={true}>
                    Buy Now
                    <FaArrowRight />
                  </Button>
                )}
              </div>
              <div className="flex flex-col gap-4 max-w-80 flex-1 pl-2 pr-3">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2">
                    <Image src={tick} width={20} height={20} alt="icon" />
                    <span>{feat}</span>
                  </div>
                ))}
                {(plan.featuresNot || []).map((feat) => (
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
        </div>
      </div>
    </div>
  );
}
