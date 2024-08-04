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
    { label: "Features", url: "/#features" },
    { label: "Product", url: "/#product" },
    { label: "Pricing", url: "/#pricing" },
    { label: "FAQs", url: "/#faq" },
  ],
  contact: [
    { label: "vatsal1811@gmail.com", url: "mailto:vatsal1811@gmail.com" },
    { label: "India", url: "" },
  ],
};

export default function Footer() {
  return (
    <div className="flex flex-col border-t border-[#2B2F45] py-10 md:py-20 px-4 md:px-44 gap-10 md:gap-32 md:items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:max-w-5xl justify-between">
        <div className="flex flex-col gap-6 md:max-w-md md:items-start">
          <Image
            src="/lp10-logo.png"
            alt="Logo"
            width={132}
            height={32}
            className="gap-1"
          />
          <span className="text-[#A8A8A8] text-base font-medium leading-7 tracking-[-2%]">
            Unleash Your Creative Potential by Turning What You Consume into
            Engaging Content Ideas
          </span>
          <Button fill={false} size="md" className="rounded-3xl">
            <span>Get Started</span>
            <ArrowRightIcon />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 md:max-w-xl">
          <div className="grid gap-4">
            <span className="font-medium text-xs tracking-wider">ALL</span>
            {options.all.map((option, index) => (
              <Link
                href={option.url}
                className="text-base tracking-tight font-medium text-[#A8A8A8]"
                key={index}
              >
                {option.label}
              </Link>
            ))}
          </div>
          <div className="grid gap-4">
            <span className="font-medium text-xs tracking-[4%]">INFO</span>
            {options.info.map((option, index) => (
              <Link
                href={option.url}
                className="text-base tracking-[-0.02em] font-medium text-[#A8A8A8]"
                key={index}
              >
                {option.label}
              </Link>
            ))}
          </div>
          <div className="grid gap-4 max-w-40 max-h-20">
            <span className="font-medium text-xs tracking-[4%]">CONTACTS</span>
            {options.contact.map((option, index) => {
              return option.url ? (
                <Link
                  href={option.url}
                  className="text-base tracking-[-0.02em] font-medium text-[#A8A8A8]"
                  key={index}
                >
                  {option.label}
                </Link>
              ) : (
                <span
                  className="text-base tracking-[-0.02em] font-medium text-[#A8A8A8]"
                  key={index}
                >
                  {option.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:items-center justify-between md:max-w-5xl w-full max-h-5">
        <p className="mx-auto md:mx-0 text-[#B0B2B8] text-xs font-normal opacity-50">
          © 2024 — 1811 Labs
        </p>
      </div>
    </div>
  );
}
