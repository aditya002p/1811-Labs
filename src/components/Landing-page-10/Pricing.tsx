import Image from "next/image";
import tick from "@/assets/icons/tick.svg";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";
import pricingDetails from "./PricingConstants";

export default function Pricing() {
  return (
    <div
      id="pricing"
      className=" flex flex-col md:gap-20 gap-10 items-center md:py-32 py-24 text-white"
    >
      <div className="flex flex-col gap-4 text-center">
        <h6 className="text-[#227BFF] md:text-sm font-medium m-auto">
          Pricing
        </h6>
        <h1 className="text-[white] md:text-4xl font-medium text-3xl">
          Pricing Plans to Suit Your Needs
        </h1>
        <span className="!font-normal tracking-[-0.18px] !text-[#a8a8a8]">
          Start making smarter decisions, Choose a plan
        </span>
      </div>
      {/* flex sm:flex-col justify-between items-center w-[50%] md:w-full gap-5 py-8 md:p-5 sm:py-5 border-[#161823] border-solid bg-[#161823] rounded-[24px] */}
      <div className="flex gap-4 md:gap-5 md:mx-2 flex-col md:flex-row justify-between items-center">
        {pricingDetails.map((plan) => {
          return (
            <div
              key={plan.title}
              className="rounded-2xl h-fit w-full md:w-[600px] flex flex-col md:flex-row"
            >
              <div className="card flex flex-col md:flex-row gap-6 md:gap-8 p-3 md:p-6 justify-start items-center bg-[#151627] rounded-2xl h-fit w-full">
                <div className="flex flex-col md:w-3/4 items-center md:items-start text-center md:text-left">
                  <h3 className="text-center text-lg font-semibold ">
                    {plan.title}
                  </h3>
                  <div className="flex flex-col items-center md:items-start mt-4">
                    <span className="text-5xl font-semibold">
                      {plan.price}
                      <span className="text-[grey]">/mo</span>
                    </span>
                  </div>
                  <Button
                    fill={plan.title !== "PRO"}
                    size="sm"
                    className="tracking-[-0.50px] mr-16 w-fit px-4 py-2 rounded-lg mt-4 p-5"
                  >
                    Buy Now
                    <FaArrowRight />
                  </Button>
                </div>
                <div className="flex flex-col md:w-2/4 md:pl-3 p-5">
                  {plan.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 text-start pt-2"
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