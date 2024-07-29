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
    <div id="features" className="flex justify-center">
      <div className="md:max-w-5xl max-w-80 flex flex-col md:py-32 py-24 items-center md:gap-24 gap-16">
        <div className="flex flex-col items-center gap-7 justify-between text-center">
          <span className="text-[#227BFF]">
            What can you do with builder kit
          </span>
          <h1 className="md:text-4xl text-2xl font-medium max-w-lg flex flex-col md:gap-2">
            <span>Explore the power of</span>
            <span>
              AI apps generation <span>Workflow</span>
            </span>
          </h1>

          <span className="text-[grey] leading-6 md:text-lg max-w-[628px]">
            Highly modular NextJS AI Boilerplate that allows you to ship any AI
            Apps within days. Save Hours of Effort and Use our robust Deployable
            code.
          </span>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-4">
          {cardDetails.map((card) => (
            <div
              key={card.title}
              className="flex flex-col w-full md:w-[32%] gap-[18px] p-4 border-[#2b2f45] border border-solid bg-[#161823] rounded-[24px]"
            >
              <div className="self-stretch rounded-md bg-[#1e202d]">
                <Image
                  src={card.url}
                  alt={card.title}
                  width={294}
                  height={294}
                  className="h-[294px] w-full rounded-tl-md rounded-tr-md bg-[#1e202d]"
                />
              </div>
              <div className="flex flex-col items-start gap-0.5 self-stretch">
                <h2 className="font-medium text-xl md:text-2xl mb-4 text-white tracking-[-0.40px]">
                  {card.title}
                </h2>
                <span className="w-full font-normal leading-[186%] tracking-[-0.32px] text-gray-500">
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
