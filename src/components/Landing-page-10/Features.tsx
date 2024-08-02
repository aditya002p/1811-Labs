import Image from "next/image";
import features from "@/assets/images/features.svg";

const cardDetails = [
  {
    title: "Build your AI apps Fast",
    content:
      "Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.",
    url: features,
  },
  {
    title: "Build your AI apps Fast",
    content:
      "Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.",
    url: features,
  },
  {
    title: "Build your AI apps Fast",
    content:
      "Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.",
    url: features,
  },
];

export default function Features() {
  return (
    <div className="flex flex-col py-[120px] px-4 md:px-0 items-center gap-24 md:max-h-[1032.77px]">
      <div className="flex flex-col items-center gap-[14px] max-w-[628px]">
        <div className="max-w-[256px] max-h-[40px] rounded-3xl py-2 px-4 gap-[10px]">
          <span className="text-[#227AFF] font-semibold leading-6 text-[13.9px]">
            What can you do with builder kit
          </span>
        </div>
        <div className="grid text-center md:max-w-[628px] gap-[28px]">
          <h2 className="text-[24px] md:text-[36px] font-semibold tracking-[-0.03em] leading-[32px] md:leading-[44px]">
            <span>Explore the power of</span>
            <span>AI apps generation Workflow</span>
          </h2>
          <p className="text-[#A8A8A8] text-[16px] md:text-[18px] leading-[24px] md:leading-[28.8px]">
            Highly modular NextJS AI Boilerplate that allows you to ship any AI
            Apps within days. Save Hours of Effort and Use our robust Deployable
            code.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1016px]">
        {cardDetails.map((card, index) => (
          <div
            key={index}
            className="flex flex-col max-w-[328px] gap-[20px] p-4 border-[#2b2f45] border border-solid bg-[#161823] rounded-[24px]"
          >
            <div className="self-stretch rounded-md bg-[#1e202d]">
              <Image
                src={card.url}
                alt={card.title}
                width={294}
                height={294.77}
                className="w-full h-auto rounded-[6.12px] bg-[#1E212D] gap-[7.66px]"
              />
            </div>
            <div className="flex flex-col items-start gap-[12px]">
              <span className="font-semibold text-[20px] leading-[24.2px] tracking-[-2%] text-white">
                {card.title}
              </span>
              <span className="font-normal leading-[29.76px] tracking-[-2%] text-[#A8A8A8] text-[16px]">
                {card.content}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
