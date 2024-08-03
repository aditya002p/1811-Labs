import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  fill?: boolean;
  price?: boolean;
  pro?: boolean;
  size?: string;
  className?: string;
}

function Button({ children, fill, size, className, price, pro }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex hover:opacity-90 rounded-3xl items-center shadow w-fit gap-2.5 text-sm",
        className,
        {
          "text-black bg-white ": fill,
          "text-white bg-[#343854]": !fill,
          "text-white bg-[#FFFFFF0A]": price,
          "text-[#000000] bg-[#FFFFFF]": pro,
          "px-2.5 h-10": size === "sm",
          "px-6 h-11": size == "md",
          "md:h-14 md:px-8 h-10 px-6 justify-center md:rounded-3xl":
            size == "lg",
          "h-11 px-4 gap-3 py-2 justify-center rounded-[8px] font-medium":
            size == "md-l",
        }
      )}
    >
      {children}
    </button>
  );
}

export default Button;
