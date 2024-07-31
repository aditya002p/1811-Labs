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
  ],
};

export default function Footer() {
  return (
    <div className="bg-black md:py-20 md:pb-28 md:px-[135px] px-8 py-10 bg-gradient-to-b from-[#090A18] from-80% to-[#313B827D]">
      <div className="flex flex-col md:gap-16 gap-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="flex flex-col gap-6 md:gap-8 max-w-96">
            <Image src="/lp10-logo.png" alt="Logo" width={150} height={150} />
            <span className="text-[#B0B2B8] md:text-sm text-base">
              Unleash Your Creative Potential by Turning What You Consume into
              Engaging Content Ideas
            </span>
            <Button fill={false} size="md" className="rounded-3xl">
              <span>Get Started</span>
              <ArrowRightIcon />
            </Button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 md:gap-10 text-[#B0B2B8] md:text-sm text-base">
            <div className="flex flex-col">
              <span className="text-white pb-3 md:text-sm text-base font-medium font-inter">
                All
              </span>
              {options.all.map((option, index) => (
                <Link
                  href={option.url}
                  className="text-start text-lg hover:underline"
                  key={index}
                >
                  {option.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-white pb-3 font-medium">Info</span>
              {options.info.map((option, index) => (
                <Link
                  href={option.url}
                  className="text-start text-lg hover:underline"
                  key={index}
                >
                  {option.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-white pb-3 font-medium">Contact Us</span>
              {options.contact.map((option, index) => (
                <Link
                  href={option.url}
                  className="text-start text-lg hover:underline"
                  key={index}
                >
                  {option.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10 md:mt-20">
          <span className="text-[#B0B2B8] text-sm font-medium">
            © 2024 - 1811 Labs
          </span>
        </div>
      </div>
    </div>
  );
}
