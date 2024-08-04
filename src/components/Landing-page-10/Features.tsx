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
    <div id="features" className="flex justify-center ">
      <div className="md:max-w-[1030px] max-w-80 flex flex-col md:py-32 py-24 items-center md:gap-24 gap-16">
        <div className="flex flex-col items-center gap-7 justify-between text-center">
          <div className="flex flex-col gap-4">
            <span className="text-[#227AFF] font-medium text-sm">
              What can you do with builderkit
            </span>
            <h1 className="md:text-4xl text-2xl font-semibold max-w-lg flex flex-col gap-2">
              <span>Explore the power of </span>
              <span>AI apps generation Workflow</span>
            </h1>
          </div>
          <span className="text-[#A8A8A8] leading-6 max-w-[628px] md:text-lg">
            Highly modular NextJS AI Boilerplate that allows you to ship any AI
            Apps <br />
            within days. Save Hours of Effort and Use our robust Deployable
            code.
          </span>
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
                <span className="font-normal -tracking-tightl text-[#A8A8A8] text-base leading-7">
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
