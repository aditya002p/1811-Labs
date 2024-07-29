import Button from "./Button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import image from "@/assets/img_footer_logo.png";

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
    <div className="md:py-20 md:pb-28 md:px-[135px] px-8 py-10">
      <div className="flex flex-col md:gap-16 gap-8">
        <div className="flex justify-between flex-col md:flex-row gap-10 md:gap-0">
          <div className="flex flex-col gap-8 max-w-96">
            <Image src={image} alt="not found" width={150} height={150} />
            <span className="text-[#B0B2B8] md:text-sm">
              Unleash Your Creative Potential by Turning What You Consume into
              Engaging Content Ideas
            </span>
            <Button fill={false} size="md" className="rounded-3xl">
              <span>Get Started</span>
              <ArrowRightIcon />
            </Button>
          </div>

          <div className="grid ml-10 grid-cols-3 md:gap-x-[140px] gap-y-4 gap-x-20 text-[#B0B2B8] text-sm font-medium">
            <div className="flex flex-col">
              <span className="text-white pb-5 text-sm font-medium">All</span>
              {options.all.map((option, index) => (
                <Link
                  href={option.url}
                  className="text-start text-lg "
                  key={index}
                >
                  {option.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-white pb-5 font-medium ">Info</span>
              {options.info.map((option, index) => (
                <Link
                  href={option.url}
                  className="text-start text-lg"
                  key={index}
                >
                  {option.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-white pb-5 font-medium">Contact Us</span>
              {options.contact.map((option, index) => (
                <Link
                  href={option.url}
                  className="text-start text-lg"
                  key={index}
                >
                  {option.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <span className="text-[#B0B2B8] text-sm font-medium">
            © 2024 - 1811 Labs
          </span>
        </div>
      </div>
    </div>
  );
}
