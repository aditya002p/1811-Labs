import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordion = [
  {
    title: "What is buildekit?",
    content: (
      <>
        Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps
        within
        <br />
        days.
      </>
    ),
  },
  {
    title: "What do i get exactly?",
    content: (
      <>
        Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps
        within
        <br />
        days.
      </>
    ),
  },
  {
    title: "Who is builder kit for?",
    content: (
      <>
        Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps
        within
        <br />
        days.
      </>
    ),
  },
  {
    title: "Is it a website template?",
    content: (
      <>
        Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps
        within
        <br />
        days.
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <div className="flex flex-col gap-10 py-[60px] md:py-[120px] px-4 md:px-[10px] items-center w-full md:gap-[10px]">
      <div className="flex flex-col md:flex-row gap-10 md:gap-[77px] md:w-[1080px] md:max-h-[325px] md:items-baseline">
        <div className="flex flex-col gap-4 md:gap-[16px] md:text-left items-center md:items-start md:w-[334px]">
          <span className="font-medium text-2xl md:text-[32px] leading-[38.73px] tracking-[-1.68px] text-[#ffffff]">
            Frequently asked questions
          </span>
          <p className="text-[#A8A8A8] font-normal text-sm md:text-base leading-[28.8px] tracking-[0.18px]">
            Don't worry, we got you. Here are some answers for your questions.
          </p>
        </div>
        <div className="flex flex-col md:w-[669px] w-full">
          <Accordion type="single" collapsible>
            {accordion.map((item, index) => {
              return (
                <AccordionItem
                  value={item.title}
                  key={index}
                  className="p-2 border-b border-[#2B2F45] w-full justify-between"
                >
                  <AccordionTrigger className="flex justify-between pl-4 font-medium text-base gap-4 ">
                    <span>{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#A8A8A8] pl-4 md:text-base leading-[25.6px] font-normal w-full">
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
