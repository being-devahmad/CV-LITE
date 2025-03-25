import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthContainerProps {
  children: ReactNode;
  className?: string;
}

const MaxWidthContainer = ({ children, className }: MaxWidthContainerProps) => {
  return (
    <div className={cn("w-full mx-auto px-[4vw] mb-[5vh]", className)}>
      {children}
    </div>
  );
};

export default MaxWidthContainer;
