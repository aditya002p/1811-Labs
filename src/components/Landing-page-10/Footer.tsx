import Button from "./Button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex flex-col border-t border-[#2B2F45] py-10 md:py-[80px] px-4 md:px-[180px] gap-10 md:gap-[128px] items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:max-w-[1080px] justify-between">
        <div className="flex flex-col gap-6 md:max-w-[443px] items-center md:items-start text-center md:text-left">
          <Image
            src="/lp10-logo.png"
            alt="Logo"
            width={132}
            height={32}
            className="gap-1"
          />
          <span className="text-[#A8A8A8] text-[16px] font-medium leading-[28.8px] tracking-[-2%]">
            Unleash Your Creative Potential by Turning What You Consume into
            Engaging Content Ideas
          </span>
          <Button fill={false} size="md" className="rounded-3xl">
            <span>Get Started</span>
            <ArrowRightIcon />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[24px] md:max-w-[567px]">
          <div className="grid gap-4">
            <span className="font-medium text-[10px] leading-[14px] tracking-[4%]">
              All
            </span>
            {options.all.map((option, index) => (
              <Link
                href={option.url}
                className="text-[16px] leading-[22.4px] tracking-[-2%] font-medium text-[#A8A8A8]"
                key={index}
              >
                {option.label}
              </Link>
            ))}
          </div>
          <div className="grid gap-4">
            <span className="font-medium text-[10px] leading-[14px] tracking-[4%]">
              Info
            </span>
            {options.info.map((option, index) => (
              <Link
                href={option.url}
                className="text-[16px] leading-[22.4px] tracking-[-2%] font-medium text-[#A8A8A8]"
                key={index}
              >
                {option.label}
              </Link>
            ))}
          </div>
          <div className="grid gap-4 max-w-[151px] max-h-[74px]">
            <span className="font-medium text-[10px] leading-[14px] tracking-[4%]">
              Contact Us
            </span>
            {options.contact.map((option, index) => (
              <Link
                href={option.url}
                className="text-[14px] leading-[19.6px] font-medium text-[#A8A8A8]"
                key={index}
              >
                {option.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between md:max-w-[1080px] w-full max-h-[18px]">
        <p className="mx-auto md:mx-0 text-[#B0B2B8] text-[12px] font-normal leading-[18px] opacity-[50%]">
          © 2024 - 1811 Labs
        </p>
      </div>
    </div>
  );
}
