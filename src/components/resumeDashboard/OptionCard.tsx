import React from "react";
import { Card } from "@nextui-org/react";

interface OptionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const OptionCard: React.FC<OptionCardProps> = ({
  title,
  description,
  icon,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer text-[7vw] md:text-[4vw] lg:text-[3vw]"
    >
      <Card className="flex flex-col items-center justify-center p-[1em] text-center hover:shadow-platformGreen/40  hover:shadow-lg  transition-shadow rounded-[1em] sm:rounded-[0.5em] border-2 border-platformGreen/20 hover:border-platformGreen/80">
        <div className="flex justify-center mb-[2vh] w-[1em] h-[1em]">
          {icon}
        </div>
        <h3 className="text-[0.7em] sm:text-[0.5em] font-bold">{title}</h3>
        <p className="text-gray-600 text-[0.5em] sm:text-[0.2em]">
          {description}
        </p>
      </Card>
    </div>
  );
};

export default OptionCard;
