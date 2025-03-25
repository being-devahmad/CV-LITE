import img0 from "@/assets/resumes/Animation2/0.jpg";
import img1 from "@/assets/resumes/Animation2/1.png";
import img2 from "@/assets/resumes/Animation2/2.png";
import img2_1 from "@/assets/resumes/Animation2/2.1.png";
import img3 from "@/assets/resumes/Animation2/3.png";
import img3_1 from "@/assets/resumes/Animation2/3.1.png";
import img3_2 from "@/assets/resumes/Animation2/3.2.png";
import img3_3 from "@/assets/resumes/Animation2/3.3.png";
import img3_4 from "@/assets/resumes/Animation2/3.4.png";
import img3_5 from "@/assets/resumes/Animation2/3.5.png";
import img4 from "@/assets/resumes/Animation2/4.png";
import img5 from "@/assets/resumes/Animation2/5.png";
import img6 from "@/assets/resumes/Animation2/6.png";
import img7 from "@/assets/resumes/Animation2/7.png";
import img7_1 from "@/assets/resumes/Animation2/7.1.png";
import img7_2 from "@/assets/resumes/Animation2/7.2.png";
import img8 from "@/assets/resumes/Animation2/8.png";
import img9 from "@/assets/resumes/Animation2/9.png";
import img9_1 from "@/assets/resumes/Animation2/9.1.png";
import img10 from "@/assets/resumes/Animation2/10.png";
import img10_1 from "@/assets/resumes/Animation2/10.1.png";
import img11 from "@/assets/resumes/Animation2/11.png";
import img12 from "@/assets/resumes/Animation2/12.png";
import img13 from "@/assets/resumes/Animation2/13.png";
import img14 from "@/assets/resumes/Animation2/14.png";
import img14_1 from "@/assets/resumes/Animation2/14.1.png";
import img14_2 from "@/assets/resumes/Animation2/14.2.png";
import img15 from "@/assets/resumes/Animation2/15.png";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "../ui/Custom Ui/Button";

const images = [
  { id: "img0", src: img0 },
  { id: "img1", src: img1 },
  { id: "img2", src: img2 },
  { id: "img2_1", src: img2_1 },
  { id: "img3", src: img3 },
  { id: "img3_1", src: img3_1 },
  { id: "img3_2", src: img3_2 },
  { id: "img3_3", src: img3_3 },
  { id: "img3_4", src: img3_4 },
  { id: "img3_5", src: img3_5 },
  { id: "img4", src: img4 },
  { id: "img5", src: img5 },
  { id: "img6", src: img6 },
  { id: "img7", src: img7 },
  { id: "img7_1", src: img7_1 },
  { id: "img7_2", src: img7_2 },
  { id: "img8", src: img8 },
  { id: "img9", src: img9 },
  { id: "img9_1", src: img9_1 },
  { id: "img10", src: img10 },
  { id: "img10_1", src: img10_1 },
  { id: "img11", src: img11 },
  { id: "img12", src: img12 },
  { id: "img13", src: img13 },
  { id: "img14", src: img14 },
  { id: "img14_1", src: img14_1 },
  { id: "img14_2", src: img14_2 },
  { id: "img15", src: img15 },
];

function BussinessAnimtion() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const rect = parentRef.current?.getBoundingClientRect() || {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      };
      const x = (clientX - rect.left - rect.width / 2) / rect.width;
      const y = (clientY - rect.top - rect.height / 2) / rect.height;

      if (parentRef.current) {
        gsap.to(parentRef.current, {
          rotationY: x * 20,
          rotationX: y * -20,
          transformPerspective: 1000,
          transformOrigin: "center center",
          ease: "power2.out",
          duration: 0.5,
        });
      }
    };

    const handleMouseLeave = () => {
      if (parentRef.current) {
        gsap.to(parentRef.current, {
          rotationX: 0,
          rotationY: 0,
          ease: "power2.out",
          duration: 0.5,
        });
      }
    };

    const parent = parentRef.current;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    function resetStyles() {
      gsap.set("#animation", { opacity: 1 });
      gsap.set("#img0", {
        opacity: 0,
        scale: 0.5,
      });
      gsap.set("#img1", { opacity: 0, scale: 1.2 });
      gsap.set("#img2", { opacity: 0, x: -50 });
      gsap.set("#img2_1", { opacity: 0, x: 50 });
      gsap.set("#img3", { opacity: 0, x: -50 });
      gsap.set("#img3_1", { opacity: 0, x: -50 });
      gsap.set("#img3_2", { opacity: 0, x: -50 });
      gsap.set("#img3_3", { opacity: 0, x: -50 });
      gsap.set("#img3_4", { opacity: 0, x: -50 });
      gsap.set("#img3_5", { opacity: 0, x: -50 });
      gsap.set("#img4", { opacity: 1, clipPath: "inset(0% 0% 100% 0%)" });
      gsap.set("#img5", { opacity: 0, x: 50 });
      gsap.set("#img6", { opacity: 0, x: 50 });
      gsap.set("#img7", { opacity: 0, x: 50 });
      gsap.set("#img7_1", { opacity: 0, x: 50 });
      gsap.set("#img7_2", { opacity: 0, x: 50 });
      gsap.set("#img8", { opacity: 0, x: 50 });
      gsap.set("#img9", { opacity: 0, x: 50 });
      gsap.set("#img9_1", { opacity: 0, x: 50 });
      gsap.set("#img10", { opacity: 0, x: 50 });
      gsap.set("#img10_1", { opacity: 0, x: 50 });
      gsap.set("#img11", { opacity: 0, x: 50 });
      gsap.set("#img12", { opacity: 0, scale: 1.2 });
      gsap.set("#img13", { opacity: 1, clipPath: "inset(0% 100% 0% 0%)" });
      gsap.set("#img14", { opacity: 0, scale: 1.2 });
      gsap.set("#img14_1", { opacity: 0, scale: 1.2 });
      gsap.set("#img14_2", { opacity: 0, scale: 1.2 });
      gsap.set("#img15", { opacity: 0, x: 50 });
      gsap.set("#caption", { opacity: 0, x: 50 });
    }
    resetStyles();
    timeline
      .to("#img0", {
        duration: 2,
        opacity: 1,
        scale: 1,
        ease: "power2.inOut",
      })
      .to("#img1", {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: "power2.inOut",
      })
      .to(
        "#img2",
        {
          duration: 1.5,
          opacity: 1,
          x: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#img2_1",
        {
          duration: 1.5,
          opacity: 1,
          x: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#img3",
        {
          duration: 1.5,
          opacity: 1,
          x: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#img3_1",
        {
          duration: 1.2,
          opacity: 1,
          x: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#img3_2",
        {
          duration: 1.2,
          opacity: 1,
          x: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#img3_3",
        {
          duration: 1.2,
          opacity: 1,
          x: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#img3_4",
        {
          duration: 1.2,
          opacity: 1,
          x: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#img3_5",
        {
          duration: 1.2,
          opacity: 1,
          x: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#img4",
        {
          duration: 2,
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to("#img5", {
        duration: 1.2,
        opacity: 1,
        x: 0,
        ease: "power2.inOut",
      })
      .to(
        "#img6",
        {
          duration: 1.5,
          opacity: 1,
          x: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to("#img7", {
        duration: 1,
        opacity: 1,
        x: 0,
        ease: "power2.inOut",
      })
      .to(
        "#img7_1",
        {
          duration: 1.2,
          opacity: 1,
          x: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#img7_2",
        {
          duration: 1.2,
          opacity: 1,
          x: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to("#img8", {
        duration: 1.2,
        opacity: 1,
        x: 0,
        ease: "power2.inOut",
      })
      .to("#img9", {
        duration: 1.2,
        opacity: 1,
        x: 0,
        ease: "power2.inOut",
      })
      .to(
        "#img9_1",
        {
          duration: 1.2,
          opacity: 1,
          x: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to("#img10", {
        duration: 1.2,
        opacity: 1,
        x: 0,
        ease: "power2.inOut",
      })
      .to(
        "#img10_1",
        {
          duration: 1.2,
          opacity: 1,
          x: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to("#img11", {
        duration: 1.2,
        opacity: 1,
        x: 0,
        ease: "power2.inOut",
      })
      .to("#img12", {
        duration: 1.2,
        opacity: 1,
        scale: 1,
        ease: "power2.inOut",
      })
      .to(
        "#img13",
        {
          duration: 3,
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#img14",
        {
          duration: 1.2,
          opacity: 1,
          scale: 1,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#img14_1",
        {
          duration: 1.2,
          opacity: 1,
          scale: 1,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#img14_2",
        {
          duration: 1.2,
          opacity: 1,
          scale: 1,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to("#img15", {
        duration: 1.2,
        opacity: 1,
        x: 0,
        ease: "power2.inOut",
      })
      .to("#caption", {
        duration: 2,
        opacity: 1,
        x: 0,
        ease: "power2.inOut",
      })

      .to("#caption", {
        delay: 2,
        duration: 2,
        opacity: 0,
        x: 50,
        ease: "power2.inOut",
      })
      .to(
        "#animation",
        {
          duration: 3,
          opacity: 0,
          ease: "power2.inOut",

          onComplete: resetStyles,
        },
        "-=2"
      );
    return () => {
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  return (
    <div className="relative md:w-[30%] w-full min-h-[70vh] " ref={parentRef}>
      {/* <Particles /> */}
      <div className="w-full h-full px-[30%]" id="animation">
        {images.map((img, index) => (
          <img
            key={img.id}
            id={img.id}
            src={img.src}
            alt={`Image ${index}`}
            className="absolute inset-0 w-full h-full object-contain opacity-0"
          />
        ))}
      </div>
      <div id="caption" className="absolute text-[0.7em] bottom-[10%] right-0">
        <Button text={"Professional Resumes for Every Role"} />
      </div>
    </div>
  );
}

export default BussinessAnimtion;
