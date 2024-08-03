"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Button from "./Button";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";

const navOptions = [
  {
    label: "Product",
    url: "/#product",
  },
  {
    label: "Features",
    url: "/#features",
  },
  {
    label: "Pricing",
    url: "/#pricing",
  },
  {
    label: "FAQ",
    url: "/#faq",
  },
];

export default function Navbar() {
  return (
    <div className="md:max-w-[641.65px] max-h[57px] flex gap-3 justify-between items-center w-full border-b border-[#222222] pt[8px] pl-[8px] pb-[16px] pr-[8px]">
      <Link href="https://www.builderkit.ai">
        <div className="flex items-center w-fit">
          <Image src="/lp10-logo.png" width={132} height={32} alt="logo" />
        </div>
      </Link>
      <div className="flex items-center justify-center max-w-[374px] max-h-[32px] gap-[14px]">
        <div className="md:flex hidden gap-6 font-medium">
          {navOptions.map((opt) => {
            return (
              <Link href={opt.url} key={opt.label} className="text-sm ">
                {opt.label}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-1">
          <div className="md:block hidden">
            <Button
              fill={false}
              className="flex flex-row max-w-20 h-8 rounded-3xl py-2 px-3 gap-[10px] bg-[#343854] text-[#FFFFFF]"
            >
              <span className="flex font-normal text-sm tracking-[-0.04em] w-9 h-5">
                Signin
              </span>
              <ArrowRightIcon className="w-3 h-3" />
            </Button>
          </div>
        </div>
        <Sheet>
          <SheetTrigger className="block md:hidden">
            <HiBars3 size={25} />
          </SheetTrigger>
          <SheetContent
            side="top"
            className="bg-black text-white border-black w-full overflow-hidden"
          >
            <div className="space-y-6 p-4">
              <div className="flex flex-col gap-2 text-sm">
                {navOptions.map((item, index) => (
                  <div key={index} className="text-sm font-medium py-2">
                    <SheetClose asChild>
                      <Link href={item.url}>{item.label}</Link>
                    </SheetClose>
                  </div>
                ))}
              </div>
              <Button fill={false} size="sm">
                <span>Signin</span>
                <ArrowRightIcon />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
