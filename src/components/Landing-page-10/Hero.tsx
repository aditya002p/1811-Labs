import Navbar from "./Navbar";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { FaArrowRight } from "react-icons/fa6";
import Button from "./Button";
import dashboard from "@/assets/dashboard.png";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      id="product"
      className="flex flex-col items-center pt-4 px-4 pb-0 md:px-0 "
    >
      <Navbar />
      <div className="flex flex-col md:flex-row md:gap-10 pt-24 px-4 md:px-56 pb-24 md:h-[416px]">
        <div className="flex flex-col gap-8 items-center md:items-start justify-center self-stretch max-h-60">
          <div className="flex flex-col items-center md:items-start gap-4 md:max-w-2xl md:max-h-40">
            <div className="border border-[#222222] py-1.5 px-4 rounded-full gap-2 flex items-center">
              <span className="text-sm font-semibold">
                Unlock Your Creative Spark!
              </span>
              <ArrowRightIcon className="ml-2 w-3 h-3" />
            </div>
            <h1 className="text-center md:text-left font-semibold leading-10 text-3xl sm:text-4xl w-full h-auto tracking-normal text-[#FFFFFF]">
              Generate AI Apps with ease
            </h1>
            <div className="text-center md:text-left text-[#D1D1D3] md:h-14 w-full md:w-[625px] leading-7 font-normal text-sm md:text-base">
              Highly modular NextJS AI Boilerplate that allows you to ship any
              AI Apps within{" "}
              <span className="inline md:block">
                days. Save Hours of Effort and Use our robust Deployable code.
              </span>
            </div>
          </div>
          <Link href="#pricing" passHref>
            <Button
              fill={false}
              className="w-36 h-11 rounded-3xl py-2.5 px-6 gap-2.5 flex bg-[#343854]"
            >
              <span className="w-18 h-6 text-sm leading-6 tracking-tight text-[#FFFFFF] font-normal">
                Get Started
              </span>
              <FaArrowRight className="w-3 h-3" />
            </Button>
          </Link>
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
