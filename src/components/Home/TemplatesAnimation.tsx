import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import resume1Img from "@/assets/resumes/paris.jpg";
import resume2Img from "@/assets/resumes/960.png";
import resume3Img from "@/assets/resumes/chicago.jpg";
const images = [
  {
    src: resume1Img,
    alt: "Resume 1",
    comment1: "Creative Style",
    comment2: "Most Popular",
  },
  {
    src: resume2Img,
    alt: "Resume 2",
    comment1: "Minimal Design",
    comment2: "ATS-Friendly",
  },
  {
    src: resume3Img,
    alt: "Resume 3",
    comment1: "Professional Look",
    comment2: "Tailored for Recruiters",
  },
];

function TemplatesAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 }); // State to hold the image height
  const imageRef = useRef<HTMLImageElement>(null); // Specify the type explicitly
  // Ref for the image element

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (imageRef.current || imageSize.height) {
      setImageSize({
        width: imageRef.current?.clientWidth || 0,
        height: imageRef.current?.clientHeight || 0,
      });
    }
  }, [imageRef.current, activeIndex]);
  return (
    <div>
      <div className="flex h-full items-center pl-[34%] pr-[34%] relative my-[10vh] ">
        <div
          className="flex flex-col h-full relative w-full pointer-events-none justify-center items-center"
          style={{ height: imageSize.height }} // Apply image height to the div
        >
          <AnimatePresence>
            {images.map((image, index) => {
              const isActive = index === activeIndex;
              const isPrevious =
                (activeIndex - 1 + images.length) % images.length === index;

              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8 }}
                  animate={{
                    scale: isActive ? 1.2 : 0.8,
                    zIndex: isActive ? 2 : isPrevious ? 1 : 0,
                    left: isActive ? "0" : isPrevious ? "-100%" : "100%",
                  }}
                  transition={{ duration: 0.8 }}
                  className="absolute w-full flex flex-col items-center justify-center"
                >
                  <motion.div
                    className="w-full bg-platformGreen absolute rounded-[0.5vw] bg-opacity-25 shadow-lg"
                    initial={{ height: 0 }}
                    animate={{
                      height: isActive
                        ? `calc(${imageSize.height}px + ${
                            imageSize.height * 0.2
                          }px)`
                        : 0,
                      width: isActive
                        ? `calc(${imageSize.width}px + ${
                            imageSize.height * 0.2
                          }px)`
                        : 0,
                    }}
                    transition={{ duration: isActive ? 0.8 : 2 }}
                  >
                    <p
                      className={`absolute top-0 right-0 font-bold italic text-teal-800  leading-none px-2 py-[2px] sm:py-[5px]`}
                      style={{ fontSize: `${imageSize.height * 0.07}px` }}
                    >
                      {image.comment1}
                    </p>
                    <p
                      className="absolute bottom-0 left-0 font-bold italic text-teal-800 leading-none px-2 py-[2px] sm:py-[5px]"
                      style={{ fontSize: `${imageSize.height * 0.07}px` }}
                    >
                      {image.comment2}
                    </p>
                  </motion.div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full absolute rounded-[0.5vw] border ${
                      isActive ? "border-platformGreen" : "border-transparent"
                    } transition-all duration-1000`}
                    style={{ userSelect: "none" }}
                    ref={index === activeIndex ? imageRef : null} // Set ref only on the active image
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default TemplatesAnimation;
