import Navbar from "./Navbar";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { FaArrowRight } from "react-icons/fa6";
import Button from "./Button";
import dashboard from "@/assets/dashboard.png";

export default function Hero() {
  return (
    <div className="flex flex-col items-center md:gap-24 gap-16">
      <Navbar />

      <div className="flex flex-col gap-12 items-start max-w-screen-md:items-center">
        <div className="flex flex-col items-baseline gap-8 max-md:max-w-[625px] w-full">
          <div
            className="border-[#222222] px-6 items-center flex h-10 font-semibold text-sm rounded-full"
            id="border-unlock"
          >
            Unlock Your Creative Spark!
            <ArrowRightIcon className="ml-2" />
          </div>

          <h1 className="font-medium leading-[40px] text-[32px] md:text-[40px] text-left w-full md:w-[600px] h-auto">
            Generate AI Apps with ease
          </h1>

          <span className="text-[#787878] text-sm md:text-base text-left w-full max-w-[736px] leading-7">
            Highly modular NextJS AI Boilerplate that allows you to ship any AI
            Apps within days. Save Hours of Effort and Use our robust Deployable
            code.
          </span>
        </div>
        <Button fill={false} size="md">
          <span>Get Started</span>
          <FaArrowRight />
        </Button>

        <div className="flex md:gap-8 gap-4 w-full">
          <Image
            src={dashboard}
            width={700}
            height={250}
            alt="hero"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
