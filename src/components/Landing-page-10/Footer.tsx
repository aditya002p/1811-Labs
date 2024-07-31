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
    <div className="grid md:grid-cols-1 max-w-full border-solid border border-[#2B2F45] py-[80px] px-[20px] md:py-[80px] md:px-[180px] gap-[64px] md:gap-[128px]">
      <div className="grid md:grid-cols-2 gap-10 md:max-w-[1080px] justify-between">
        <div className="grid gap-6">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          <div className="grid gap-4">
            <span className="font-medium text-[10px] leading-[14px] tracking-[4%]">
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
          <div className="grid gap-4">
            <span className="font-medium text-[10px] leading-[14px] tracking-[4%]">
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
          <div className="grid gap-4">
            <span className="font-medium text-[10px] leading-[14px] tracking-[4%]">
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
