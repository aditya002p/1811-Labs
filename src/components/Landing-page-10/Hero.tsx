import Navbar from "./Navbar";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { FaArrowRight } from "react-icons/fa6";
import Button from "./Button";
import dashboard from "@/assets/dashboard.png";

export default function Hero() {
  return (
    <div className="flex flex-col items-center md:gap-24 gap-16 p-4">
      <Navbar />
      <div className="flex flex-col gap-[42px] items-center max-w-screen-md:items-center">
        <div className="grid grid-flow-row md:gap-[42px] gap-10 md:mt-10 md:ml-[-70px]">
          <div className="flex flex-col md:items-baseline items-center gap-[32px]">
            <div
              className="border-[#222222] p-8 items-center flex h-8 font-medium text-sm rounded-full"
              id="border-unlock"
            >
              Unlock Your Creative Spark!
              <ArrowRightIcon className="ml-2" />
            </div>

            <h1 className="font-semibold leading-[40px] text-[32px] md:text-[40px] text-center md:text-left w-full md:max-w-[600px] md:max-h-[32px]">
              Generate AI Apps with ease
            </h1>

            <span className="text-[#787878] text-sm md:text-base text-center md:text-left w-full max-w-[736px] leading-6 md:grid grid-cols-1">
              Highly modular NextJS AI Boilerplate that allows you to ship any
              AI Apps within{" "}
              <span>
                days. Save Hours of Effort and Use our robust Deployable code.
              </span>
            </span>
          </div>
          <Button fill={false} size="md">
            <span>Get Started</span>
            <FaArrowRight />
          </Button>
        </div>
        <div className="flex md:gap-8 gap-[42px] mt-10">
          <Image
            src={dashboard}
            width={1100}
            height={1030.83}
            alt="hero"
            className="w-fit"
          />
        </div>
      </div>
    </div>
  );
}
