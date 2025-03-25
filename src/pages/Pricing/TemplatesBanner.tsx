import template2 from "@/assets/resumes/london.jpg";
import template3 from "@/assets/resumes/paris.jpg";
import template4 from "@/assets/resumes/rotterdam.jpg";
import template1 from "@/assets/resumes/chicago.jpg";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Custom Ui/Button";
import gsap from "gsap";

const TemplatesBanner = () => {
  const templates = [
    { id: 1, src: template1, alt: "Modern Design" },
    { id: 2, src: template2, alt: "Professional Look" },
    { id: 3, src: template3, alt: "Most Popular" },
    { id: 4, src: template4, alt: "ATS-Friendly" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLParagraphElement>(null);
  const offset = 30;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const totalItems = templates.length;
    let currentItem = 0;

    function updatePositions() {
      setActiveIndex(currentItem);

      for (let i = 0; i < totalItems; i++) {
        let itemIndex = (currentItem + i) % totalItems;
        let card = cardRefs.current[itemIndex];

        if (card) {
          gsap.to(card, {
            duration: 0.8,
            x: offset * i,
            y: -offset * i,
            zIndex: totalItems - i,
            scale: 1,
            opacity: 1,
            rotate: `${i * 8 - 16}deg`,
            ease: "power2.out",
          });
        }
      }

      // Animate text change
      gsap.to(textRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        onComplete: () => {
          if (textRef.current) {
            textRef.current.innerText = templates[currentItem].alt;
          }
          gsap.to(textRef.current, { opacity: 1, y: 0, duration: 0.4 });
        },
      });
    }

    function moveToNext() {
      currentItem = (currentItem + 1) % totalItems;
      setActiveIndex((prev) => (prev + 1) % totalItems);
      updatePositions();
    }

    const interval = setInterval(moveToNext, 2000);
    updatePositions();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-[10vh] w-full flex items-center justify-center px-[5vw]">
      <div className="flex flex-col-reverse md:flex-row gap-[2vw] w-full h-full items-center">
        {/* Left side - Resume previews */}
        <div
          ref={containerRef}
          className="relative w-full md:w-[60%] h-[50vh] md:h-[80vh] flex items-end justify-center"
        >
          <div className="z-[100] flex flex-col items-start w-full">
            <p
              ref={textRef}
              className="bg-platformGreen/30 border border-platformGreen text-[0.7em] p-[0.2em] px-[0.5em] rounded-[1em] sm:rounded-[0.5em] text-gray-800 transition-opacity"
            >
              {templates[activeIndex].alt}
            </p>
          </div>
          {templates.map((template, index) => (
            <div
              key={template.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="absolute w-[50%] sm:w-[35%] h-auto"
              style={{
                transformOrigin: "center",
                zIndex: templates.length - index,
              }}
            >
              <img
                src={template.src}
                alt={template.alt}
                className="w-full rounded-[1vmax] shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-[40%] text-center md:text-left">
          <h1 className="text-[1em] font-bold mb-[0.3em]">
            <span>One </span>
            <span className="text-platformGreen">resume builder</span>
            <span>, hundreds of templates</span>
          </h1>
          <p className="text-gray-600 text-[0.5em] mb-[0.5em]">
            Choose from hundreds of professionally designed and ATS-friendly
            resume templates, tens of resume sections, and thousands of
            combinations made to make you stand out.
          </p>
          <div className="text-[1.3em]">
            <Button text="View All Templates" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesBanner;
