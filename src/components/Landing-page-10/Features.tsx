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
    <div className="flex flex-col py-32 px-4 md:px-0 items-center gap-24 ">
      <div className="flex flex-col items-center gap-4 max-w-2xl">
        <div className="max-w-64 max-h-10 rounded-3xl py-2 px-4 gap-3">
          <span className="text-[#227AFF] font-semibold leading-6 text-sm">
            What can you do with builder kit
          </span>
        </div>
        <div className="flex flex-col text-center md:max-w-2xl gap-7 items-center">
          <div className="text-[24px] md:text-4xl font-semibold tracking-[-0.03em] leading-8  md:max-w-xl">
            <span className="flex flex-col">
              Explore the power of <span>AI apps generation Workflow</span>
            </span>
          </div>
          <div className="flex flex-col text-[#A8A8A8] text-base md:text-lg md:max-w-2xl font-medium">
            <span>
              Highly modular NextJS AI Boilerplate that allows you to ship any
              AI Apps
            </span>
            <span>
              within days. Save Hours of Effort and Use our robust Deployable
              code.
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
        {cardDetails.map((card, index) => (
          <div
            key={index}
            className="flex flex-col max-w-80 gap-5 p-4 border-[#2b2f45] border bg-[#161823] rounded-3xl"
          >
            <div className="self-stretch rounded-md bg-[#1e202d]">
              <Image
                src={card.url}
                alt={card.title}
                width={294}
                height={294.77}
                className="w-full h-auto rounded-xl bg-[#1E212D] gap-2"
              />
            </div>
            <div className="flex flex-col items-start gap-3">
              <span className="font-semibold text-xl tracking-tight text-white">
                {card.title}
              </span>
              <span className="font-normal -tracking-wide text-[#A8A8A8] text-base">
                {card.content}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
