import Button from "./Button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const options = {
  all: [
    { label: "About", url: "/about" },
    { label: "Company", url: "/company" },
    { label: "Careers", url: "/careers" },
    { label: "Newsletter", url: "/newsletter" },
  ],
  info: [
    { label: "Features", url: "/features" },
    { label: "Product", url: "/product" },
    { label: "Pricing", url: "/pricing" },
    { label: "FAQ's", url: "/FAQ" },
  ],
  contact: [
    { label: "vatsal1811@gmail.com", url: "/g-mail" },
    { label: "India", url: "/india" },
    { label: "", url: "/" },
    { label: "", url: "/" },
  ],
};

export default function Footer() {
  return (
    <div className="flex flex-col max-w-[1440px] max-h-[488px] border-solid border border-[#2B2F45] pt-[80px] pb-[80px] pl-[180px] pr-[180px] gap-[128px] md:px-[135px]">
      <div className="grid grid-cols-2 max-w-[1080px] h-[182px] justify-between">
        <div className="grid grid-rows-2 max-w-[443px] max-h-[182px] gap-6">
          <Image
            src="/lp10-logo.png"
            alt="Logo"
            width={132}
            height={32}
            className="gap-1"
          />
          <span className="max-w-[443px] max-h-[58px] text-[#A8A8A8] text-[16px] font-medium leading-[28.8px] tracking-[-2%]">
            Unleash Your Creative Potential by Turning What You Consume into
            Engaging Content Ideas
          </span>
          <Button fill={false} size="md" className="rounded-3xl">
            <span>Get Started</span>
            <ArrowRightIcon />
          </Button>
        </div>

        <div className="grid grid-cols-3 max-w-[567px] max-h-[154px] gap-[24px]">
          <div className="grid max-w-[184px] max-h-[154px] gap-4">
            <span className="max-w[20px] max-h-[14px] font-medium text-[10px] leading-[14px] tracking-[4%]">
              All
            </span>
            {options.all.map((option, index) => (
              <Link
                href={option.url}
                className="text-start text-[16px] leading-[22.4px] tracking-[-2%] font-medium text-[#A8A8A8]"
                key={index}
              >
                {option.label}
              </Link>
            ))}
          </div>
          <div className="grid max-w-[184px] max-h-[154px] gap-4">
            <span className="max-w[25px] max-h-[14px] font-medium text-[10px] leading-[14px] tracking-[4%]">
              Info
            </span>
            {options.info.map((option, index) => (
              <Link
                href={option.url}
                className="text-start text-[16px] leading-[22.4px] tracking-[-2%] font-medium text-[#A8A8A8]"
                key={index}
              >
                {option.label}
              </Link>
            ))}
          </div>
          <div className="grid max-w-[151px] max-h-[74px] gap-4">
            <span className="max-w[58px] max-h-[14px] font-medium text-[10px] leading-[14px] tracking-[4%]">
              Contact Us
            </span>
            {options.contact.map((option, index) => (
              <Link
                href={option.url}
                className="text-start text-[14px] leading-[19.6px] font-medium text-[#A8A8A8]"
                key={index}
              >
                {option.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between max-w-[1080px] max-h-[18px] mb-auto">
        <p className="mx-auto text-[#B0B2B8] text-[12px] font-normal leading-[18px] max-w-[118px] max-h-[18px] opacity-[50%]">
          © 2024 - 1811 Labs
        </p>
      </div>
    </div>
  );
}
