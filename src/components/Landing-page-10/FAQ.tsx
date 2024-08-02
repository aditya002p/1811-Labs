import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordion = [
  {
    title: "What is buildekit?",
    content:
      "Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days.",
  },
  {
    title: "What do i get exactly?",
    content:
      "Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days.",
  },
  {
    title: "Who is builder kit for?",
    content:
      "Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days.",
  },
  {
    title: "Is it a website template?",
    content:
      "Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days.",
  },
];

export default function FAQ() {
  return (
    <div className="flex flex-col gap-10 py-[60px] md:py-[120px] px-4 md:px-[10px] items-center w-full md:gap-[10px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[77px] max-w-[1080px] w-full">
        <div className="flex flex-col gap-4 md:gap-[16px] text-center md:text-left items-center md:items-start md:w-[334px]">
          <span className="font-medium text-2xl md:text-[32px] leading-[38.73px] tracking-[-1.68px] text-[#ffffff]">
            Frequently asked questions
          </span>
          <p className="text-[#A8A8A8] font-normal text-sm md:text-base leading-[28.8px] tracking-[0.18px]">
            Don't worry, we got you. Here are some answers for your questions.
          </p>
        </div>
        <div className="flex flex-col w-full">
          <Accordion type="single" collapsible className="w-full">
            {accordion.map((item, index) => {
              return (
                <AccordionItem
                  value={item.title}
                  key={index}
                  className="p-2 border-b border-[#2B2F45]"
                >
                  <AccordionTrigger className="flex justify-between font-medium text-base gap-4 md:gap-[16px]">
                    <span>{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-stone-400 text-sm md:text-[16px] leading-[25.6px] font-normal">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
