"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AccordionPrimitive.Header className="flex max-w-full">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between py-4 px-6 text-base font-medium transition-all",
          className
        )}
        {...props}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-4">{children}</span>
        {isOpen ? (
          <MinusIcon className="size-4 shrink-0 transition-transform duration-200 bg-[#2B2F45] w-[24px] h-[24px] rounded-[10px] p-1 gap-3 text-[#FFFFF]" />
        ) : (
          <PlusIcon className="size-4 shrink-0 transition-transform duration-200 bg-[#2B2F45] w-[24px] h-[24px] rounded-[10px] p-1 gap-3 text-[#FFFFFF]" />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
