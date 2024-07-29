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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.",
  },
  {
    title: "What do i get exactly?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.",
  },
  {
    title: "Who is builder kit for?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.",
  },
  {
    title: "Is it a website template?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.",
  },
];

export default function FAQ() {
  return (
    <div
      id="faq"
      className="flex flex-col items-center md:py-32 md:gap-20 gap-10 py-16"
    >
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-between w-full md:max-w-7xl">
        <div className="ml-10 md:w-2/6 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="md:text-4xl font-medium text-2xl">
            Frequently asked questions
          </h1>
          <p className="text-[#787878] px-10 md:px-0">
            Don't worry, we got you. Here are some answers for your questions.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start leading-8 md:w-2/4 w-full">
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
                  className="w-full p-2 border-b border-[#F3F3F3]"
                >
                  <AccordionTrigger className="flex justify-between font-medium text-base w-full">
                    <span>{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-stone-400 text-sm">
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
