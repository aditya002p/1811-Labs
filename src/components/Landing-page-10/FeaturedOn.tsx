import {
  Notion,
  Grammarly,
  Intercom,
  Unsplash,
  Descript,
} from "@/assets/icons";
import Image from "next/image";

export default async function FeaturedOn() {
  const imageSrc = [Unsplash, Notion, Intercom, Descript, Grammarly];

  return (
    <div className="flex justify-center flex-col items-center text-base md:gap-[32px] gap-[32px] md:p-[80px 0px 80px 0px]">
      <p className=" font-medium text-center text-[#787878] text-[18px] leading-[21.78px] tracking-[-3%] mt-20">
        More than 25,000 teams use Builderkit
      </p>

      <div className="flex justify-center md:gap-10 gap-8 flex-wrap">
        {imageSrc.map((src, index) => {
          return (
            <Image key={index} src={src} width={125} height={125} alt="logo" />
          );
        })}
      </div>
    </div>
  );
}
