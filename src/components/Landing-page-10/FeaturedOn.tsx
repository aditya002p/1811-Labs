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
    <div className="flex justify-center flex-col items-center text-base gap-8 py-20 px-0">
      <p className="max-w-80 max-h-6 font-medium text-center text-[#787878] text-lg tracking-[-0.03em]">
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
