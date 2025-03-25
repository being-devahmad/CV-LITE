import plan from "@/assets/resumes/Animation/plan.jpg";
import cross from "@/assets/resumes/Animation/close.png";
import img1 from "@/assets/resumes/Animation/1.jpg";
import img2 from "@/assets/resumes/Animation/2.png";
import img3 from "@/assets/resumes/Animation/3.png";
import img4 from "@/assets/resumes/Animation/4.png";
import img41 from "@/assets/resumes/Animation/4.1.png";
import img5 from "@/assets/resumes/Animation/5.png";
import img51 from "@/assets/resumes/Animation/5.1.png";
import tick from "@/assets/resumes/Animation/tick.png";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Particles from "../ui/Particles/Particles";

const images = [img1, img2, img3, img4, img41, img5, img51];

function LandingAnimtion() {
  const [showParticles, setShowParticles] = useState(false);
  const [imageSize, setImageSize] = useState({
    height: 0,
    width: 0,
    percentHeight: 0,
  });
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 764) {
        if (imgRef.current) {
          const image = imgRef.current;
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;

          // Set the width as 30% of the screen width
          const imageWidth = windowWidth * 0.3;

          // Get natural dimensions
          const naturalWidth = image.naturalWidth || imageWidth;
          const naturalHeight = image.naturalHeight || image.clientHeight || 0;

          // Calculate image height based on aspect ratio
          const imageHeight = (naturalHeight / naturalWidth) * imageWidth;

          // Calculate height percentage
          const percentHeight = (imageHeight / windowHeight) * 100;

          setImageSize({
            width: imageWidth,
            height: imageHeight,
            percentHeight,
          });
        }
      } else {
        // Ensure it updates the size properly when < 764px
        setImageSize({
          height: window.innerHeight * 0.7,
          width: window.innerWidth,
          percentHeight: 70,
        });
      }
    };

    // Call updateSize immediately and on resize
    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [imgRef.current]);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    function resetStyles() {
      gsap.set("#particles", { opacity: 1 });
      gsap.set("#animation", { opacity: 1 });
      gsap.set("#img_plan", { opacity: 0, scale: 0.5 });
      gsap.set("#img_cross", { opacity: 0, scale: 1.5 });
      gsap.set("#img_0", {
        opacity: 1,
        clipPath: "inset(0 0 100% 0)",
      });
      gsap.set("#img_1", { opacity: 0, x: 50 });
      gsap.set("#img_2", { opacity: 0, x: -50 });
      gsap.set("#img_3", { opacity: 0, scale: 0.5 });
      gsap.set("#img_4", { opacity: 0, scale: 0.5 });
      gsap.set("#img_5", { opacity: 0, x: -50 });
      gsap.set("#img_6", { opacity: 0, x: 50 });
      gsap.set("#img_tick", { opacity: 0, scale: 1.5 });
    }
    resetStyles();
    timeline
      .to("#img_plan", {
        duration: 2,
        scale: 1,
        opacity: 1,
        ease: "power2.inOut",
      })
      .to("#img_cross", {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "power2.inOut",
      })
      .to("#img_0", {
        duration: 2,
        delay: 1.5,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power2.inOut",
        onStart: () => setShowParticles(true),
      })
      .to("#img_1", {
        duration: 1,
        opacity: 1,
        x: 0,
        ease: "power2.inOut",
      })
      .to(
        "#img_2",
        {
          duration: 1.5,
          opacity: 1,
          x: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#img_3",
        {
          duration: 1.5,
          opacity: 1,
          scale: 1,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#img_4",
        {
          duration: 1,
          opacity: 1,
          scale: 1,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#img_5",
        {
          duration: 1.5,
          opacity: 1,
          x: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#img_6",
        {
          duration: 1,
          opacity: 1,
          x: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#particles",
        {
          duration: 1,
          opacity: 0,
          ease: "power2.inOut",
          onComplete: () => setShowParticles(false),
        },
        "-=1"
      )
      .to("#img_tick", {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: "power2.inOut",
      })
      .to("#animation", {
        duration: 1,
        delay: 3,
        opacity: 0,
        ease: "power2.inOut",
        onComplete: () => resetStyles(),
      });
  }, []);
  return (
    <div
      className="relative w-full md:w-[30%]"
      style={{ minHeight: `${imageSize.height}px` }}
    >
      <div id="particles">{showParticles && <Particles />}</div>
      <div className="w-full h-full px-[30%]" id="animation">
        <img
          ref={imgRef}
          id={`img_plan`}
          src={plan}
          alt="Image plan"
          className="absolute inset-0 w-full h-full object-contain opacity-0 grayscale"
        />
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <img
            id={`img_cross`}
            src={cross}
            alt="Image cross"
            className="w-[10%] h-[10%] object-contain opacity-0 "
          />
        </div>
        {images.map((img, index) => (
          <img
            key={index}
            id={`img_${index}`}
            src={img}
            alt={`Image ${index}`}
            className="absolute inset-0 w-full h-full object-contain opacity-0"
          />
        ))}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <img
            id={`img_tick`}
            src={tick}
            alt="Image tick"
            className="w-[20%] h-[20%] object-contain opacity-0 "
          />
        </div>
      </div>
    </div>
  );
}

export default LandingAnimtion;
