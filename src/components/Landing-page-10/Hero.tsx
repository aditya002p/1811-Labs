import Navbar from "./Navbar";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { FaArrowRight } from "react-icons/fa6";
import Button from "./Button";
import dashboard from "@/assets/dashboard.png";

export default function Hero() {
  return (
    <div className="flex flex-col items-center pt-4 px-4 pb-0 md:px-0 max-h-[1519.83px]">
      <Navbar />
      <div className="flex flex-col md:flex-row md:gap-[42px] pt-[88px] px-4 md:px-[230px] pb-[88px] md:h-[416px]">
        <div className="flex flex-col gap-8 items-center md:items-start justify-center self-stretch">
          <div className="flex flex-col items-center md:items-start gap-[18px] md:max-w-[625px] md:max-h-[164px]">
            <div className="border border-[#222222] py-[6px] px-4 md:px-[16px] max-w-[242px] max-h-[29px] rounded-[30px] gap-2">
              <div className="h-[17px] text-[14px] leading-[16.94px] font-semibold text-left flex flex-row items-center">
                Unlock Your Creative Spark!
                <ArrowRightIcon className="ml-2 w-[12px] h-[12px]" />
              </div>
            </div>
            <h1 className="font-semibold leading-[41.2px] text-[40px] text-left w-full md:w-[497px] h-auto tracking-[-0.04em] grid grid-flow-col">
              Generate AI Apps with ease
            </h1>
            <div className="text-[#787878] w-full md:w-[625px] leading-[28.8px] font-normal text-[14px] md:text-[16px] flex flex-col">
              Highly modular NextJS AI Boilerplate that allows you to ship any
              AI Apps within days. Save Hours of Effort and Use our robust
              Deployable code.
            </div>
          </div>
          <Button
            fill={false}
            className="w-[142px] h-[44px] rounded-3xl py-[10px] px-[24px] gap-[10px] flex bg-[#343854]"
          >
            <span className="w-[72px] h-[24px] text-[14px] leading-6 tracking-[-0.04em] text-[#FFFFFF] font-normal">
              Get Started
            </span>
            <FaArrowRight className="w-[12px] h-[12px]" />
          </Button>
        </div>
      </div>
      <Image
        src={dashboard}
        alt="Image not Found"
        className="rounded-2xl w-full md:w-[1271px] h-auto md:h-[1030.83px] px-5"
      />
    </div>
  );
}
