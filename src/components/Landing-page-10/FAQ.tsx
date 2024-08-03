import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordion = [
  {
    title: "What is builderkit?",
    content: (
      <>
        Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps
        within <span>days.</span>
      </>
    ),
  },
  {
    title: "What do i get exactly?",
    content: (
      <>
        Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps
        within <span>days.</span>
      </>
    ),
  },
  {
    title: "Who is builderkit for?",
    content: (
      <>
        Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps
        within <span> days.</span>
      </>
    ),
  },
  {
    title: "Is it a website template?",
    content: (
      <>
        Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps
        within <span> days.</span>
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <div
      id="faq"
      className="flex flex-col py-32 px-3 items-center w-full md:gap-2"
    >
      <div className="flex flex-col md:flex-row gap-20 md:w-[1080px] md:items-baseline">
        <div className="flex flex-col gap-4 text-center md:text-start items-center md:items-start md:w-[334px]">
          <span className="font-medium text-2xl md:text-[32px] -tracking-wider text-[#ffffff]">
            Frequently asked questions
          </span>
          <p className="text-[#A8A8A8] font-normal text-sm md:text-base tracking-wide">
            Don't worry, we got you. Here are some answers for your questions.
          </p>
        </div>
        <div className="flex flex-col items-start leading-8">
          {accordion.map((item, index) => {
            return (
              <Accordion type="single" collapsible key={index}>
                <AccordionItem
                  value={item.title}
                  key={index}
                  className="md:w-[669px] w-screen p-2 border-b border-[#2B2F45] "
                >
                  <AccordionTrigger className="font-medium text-base gap-4 md:h-16">
                    <span>{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col text-[#A8A8A8] text-base font-medium mx-6 ">
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
