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

export default async function Features() {
  return (
    <div id="features" className="flex justify-center p-[16px]">
      <div className="grid grid-cols-1 md:max-w-[1440px] md:max-h[1032.77px] md:py-[120px] items-center md:gap-24">
        <div className="flex flex-col items-center gap-7 justify-between text-center">
          <span className="text-[#227BFF] font-semibold md:max-w-[256px] md:max-h-[140px] md:p-[8px 16px 8px 16px] gap-[10px] md:leading-[24px] text-[13.9px]">
            What can you do with builder kit
          </span>
          <div className="grid grid-flow-row md:max-w-[628px] md:max-h-[174px] gap-[28px]">
            <h1 className="text-[25px] md:text-[36px] font-semibold md:w-[561px] md:h-[88px] text-center md:tracking-[-3%] md:grid grid-cols-1 flex flex-col md:leading-4 ">
              <span>Explore the power of</span>
              <span>AI apps generation Workflow</span>
            </h1>
            <span className="text-[#A8A8A8] md:leading-[28.8px] md:text-[18px] md:max-w-[628px] md:text-center grid grid-cols-1 justify-center md:mt-2 md:mb-15 mb-20">
              Highly modular NextJS AI Boilerplate that allows you to ship any
              AI Apps
              <span>
                {" "}
                within days. Save Hours of Effort and Use our robust Deployable
                code.
              </span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-[1016px] md:max-h-[468.77px]">
          {cardDetails.map((card) => (
            <div
              key={card.title}
              className="grid grid-cols-1 max-w-[328px] max-h-[468.77px] gap-[20px] p-4 border-[#2b2f45] border border-solid bg-[#161823] rounded-[24px]"
            >
              <div className="self-stretch rounded-md bg-[#1e202d]">
                <Image
                  src={card.url}
                  alt={card.title}
                  width={294}
                  height={294.77}
                  className="h-[294.77px] max-w-[294px] rounded-[6.12px] bg-[#1E212D] gap-[7.66px]"
                />
              </div>
              <div className="grid grid-cols-1 items-start gap-[12px] max-w-294px max-h-[120px]">
                <span className="font-semibold text-[20px] leading-[24.2px] tracking-[-2%] text-white">
                  {card.title}
                </span>
                <span className="max-w-[294px] max-h-[90px] font-normal leading-[29.76px] tracking-[-2%] text-[#A8A8A8] text-[16px]">
                  {card.content}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
