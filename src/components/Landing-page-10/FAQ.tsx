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

export default function Faq() {
  return (
    <div className="flex justify-center">
      <div
        id="faq"
        className="flex flex-col md:flex-row md:py-32 md:gap-20 gap-10 py-10 max-w-5xl"
      >
        <div className="flex flex-col gap-6 items-center mt-2">
          <h1 className="font-medium text-2xl md:text-3xl">
            Frequently asked questions
          </h1>
          <p className="text-[#A8A8A8] px-10 md:px-0 leading-7 md:w-[334px]">
            Don't worry, we got you. Here are some answers for your questions.
          </p>
        </div>
        <div className="flex flex-col items-center leading-8">
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
