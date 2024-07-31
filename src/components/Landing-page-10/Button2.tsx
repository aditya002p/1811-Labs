import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  fill?: boolean;
  size?: string;
  className?: string;
}

function Button2({ children, fill, size, className }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex hover:opacity-90 rounded-3xl items-center shadow w-fit gap-2.5 text-sm",
        className,
        {
          "text-black bg-white ": fill,
          "text-[#000000] bg-[#ffff]": !fill,
          "px-3.5 h-10": size === "sm",
          "px-6 h-11": size == "md",
          "md:h-[52px] md:px-8 h-10 px-6 justify-center md:rounded-3xl":
            size == "lg",
        }
      )}
    >
      {children}
    </button>
  );
}

export default Button2;
