import { ChevronLeft, ChevronRight } from "lucide-react";

import { RefObject } from "react";
interface SliderButtonProps {
  swiperRef: RefObject<{
    swiper: {
      slidePrev: () => void;
      slideNext: () => void;
    };
  }>;
}
export default function SliderButton({ swiperRef }: SliderButtonProps) {
  return (
    <div className="flex justify-between absolute w-full z-50 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div className="flex justify-between w-full -translate-y-6">
        {/* Left Button */}
        <div
          className="bg-platformGreen/50 flex justify-center items-center rounded-full cursor-pointer translate-x-[50%] p-[0.5vw] pointer-events-auto"
          onClick={(e) => {
            e.stopPropagation();
            if (swiperRef.current) {
              console.log(swiperRef.current.swiper);
              swiperRef.current.swiper.slidePrev();
            }
          }}
        >
          <ChevronLeft className="text-white" size={"4vh"} />
        </div>

        {/* Right Button */}
        <div
          className="bg-platformGreen/50 flex justify-center items-center rounded-full cursor-pointer translate-x-[-50%] p-[0.5vw] pointer-events-auto"
          onClick={(e) => {
            e.stopPropagation();
            if (swiperRef.current) {
              swiperRef.current.swiper.slideNext();
            }
          }}
        >
          <ChevronRight className="text-white" size={"4vh"} />
        </div>
      </div>
    </div>
  );
}
