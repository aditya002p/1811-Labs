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
    <div className="grid md:grid-flow-col items-center gap-10 pt-[120px] md:pt-[10px] md:pr-[120px] pb-[120px] md:pl-[120px] md:max-w-[1400px] md:max-h-[565px] ">
      <div className="grid md:grid-cols-2 gap-[77px] md:max-w-[1080px] md:h-[325px]">
        <div className="flex flex-1 flex-col md:max-w-[334px] md:max-h-[152px] gap-[16px] pt-10 md:pt-0">
          <span className="md:pl-0 pl-2 md:max-w-[334px] md:max-h-[78px] font-medium text-[32px] leading-[38.73px] tracking-[-1.68px] text-[#ffffff]">
            Frequently asked questions
          </span>
          <p className="text-[#A8A8A8] font-normal text-sm md:text-base leading-[28.8px] tracking-[0.18px] max-w-[334px] max-h-[58px] md:grid grid-cols-1 text-center md:text-start pl-2 md:pl-0">
            Don't worry, we got you. Here are some answers for your questions.
          </p>
        </div>
        <div className="flex flex-1 flex-col items-end self-center md:self-stretch leading-8 w-full md-w-[669px]">
          {accordion.map((item, index) => {
            return (
              <Accordion
                type="single"
                collapsible
                key={index}
                className="w-full"
              >
                <AccordionItem
                  value={item.title}
                  className="p-2 md:w-[599px] border-b border-[#2B2F45]"
                >
                  <AccordionTrigger className="flex justify-between font-medium text-base w-full gap-[16px]">
                    <span>{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-stone-400 text-[16px] leading-[25.6px] font-normal max-w-[621px] max-h-[52px]">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// width: Fill (1,440px)px;
// height: Hug (565px)px;
// padding: 120px 10px 120px 10px;
// gap: 10px;
// opacity: 0px;
