// 'use client'
import { useEffect } from "react";
import { gsap } from "gsap";

import Testimonials from "@/components/Testimonials";
import HeroSection from "@/components/HeroSection";
// import FAQSection from "@/components/FAQSection";
import { Image } from "@nextui-org/react";

import TemplatesBanner from "./TemplatesBanner";
import PricingSection from "@/components/PricingSection";

import resume1Img from "@/assets/resumes/960.png";
import resume2Img from "@/assets/resumes/paris.jpg";
import Button from "@/components/ui/Custom Ui/Button";
import bg from "@/assets/illustrations/BGFRAME.svg";
import MasterCard from "@/assets/logos/mastercard.png";
import Maestro from "@/assets/logos/maestro.png";
import Visa from "@/assets/logos/visa.png";
import American from "@/assets/logos/american.png";
import Paypal from "@/assets/logos/paypal.png";
import { Check } from "lucide-react";
export default function PricingPage() {
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    gsap.set("#new-resume", { opacity: 0, filter: "grayscale(1) blur(50px)" });
    gsap.set("#scanner", { scaleX: 0 });
    gsap.set("#outdated-resume", { opacity: 0, scale: 0.8 });
    gsap.set("#outdated-text", { opacity: 0 });
    gsap.set("#downloadBtn", {
      opacity: 0,
      x: -50,
      filter: "blur(20px)",
    });

    timeline
      .to("#outdated-resume", {
        duration: 2,
        opacity: 1,
        scale: 1,
        ease: "power2.inOut",
      })
      .to("#scanner", {
        duration: 1,
        scaleX: 1,
        ease: "power2.inOut",
      })
      .to("#scanner", {
        duration: 2,
        delay: 0.5,
        y: "100%",
        ease: "power2.inOut",
      })
      .to("#scanner", {
        duration: 2,
        y: 0,
        ease: "power2.inOut",
      })
      .to("#scanner", {
        duration: 1,
        scaleX: 0,
        ease: "power2.inOut",
      })
      .to(
        "#outdated-text",
        {
          duration: 1,
          opacity: 1,
          ease: "power2.inOut",
        },
        "-=2"
      )
      .to("#outdated-resume", {
        duration: 2,
        filter: "grayscale(1) blur(50px)",
        ease: "power2.inOut",
      })
      .to(
        "#new-resume",
        {
          duration: 2,
          opacity: 1,
          filter: "grayscale(0) blur(0px)",
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#outdated-resume",
        {
          duration: 1,
          opacity: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        "#downloadBtn",
        {
          duration: 2,
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .to("#downloadBtn", {
        delay: 3,
        duration: 2,
        opacity: 0,
        x: -50,
        filter: "blur(20px)",
        ease: "power2.inOut",
      })
      .to(
        "#new-resume",
        {
          duration: 2,
          opacity: 0,
          filter: "grayscale(1) blur(50px)",
          ease: "power2.inOut",
        },
        "-=2"
      );
  }, []);
  const logos = [
    {
      src: MasterCard,
      alt: "Meta",
      width: 100,
    },
    {
      src: Maestro,
      alt: "Tesla",
      width: 100,
    },
    {
      src: Visa,
      alt: "Coinbase",
      width: 100,
    },
    {
      src: American,
      alt: "Google",
      width: 100,
    },
    {
      src: Paypal,
      alt: "Amazon",
      width: 100,
    },
  ];
  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-[10vh] text-[6.8vw] md:text-[3.8vw] lg:text-[2.8vw]">
      <div className="absolute inset-0 -z-10 pointer-events-none ">
        <img src={bg} className="w-full" />
      </div>
      <div className="relative mx-auto py-[5vw]">
        <div className="text-center">
          <h1 className="text-[1em] font-bold tracking-tight">
            Your Dream Job Starts with the &nbsp;
            <span className="text-[#00D2A8]">Perfect CV!</span>
          </h1>
          <p className="mt-4 text-[0.6em] text-gray-600">
            AI-powered, recruiter-approved resumes in minutes.
          </p>
        </div>

        {/* Billing Toggle */}
        <PricingSection />
      </div>
      <section className="py-[5vh] px-[5vw] opacity-70">
        <div className="flex flex-col text-center gap-[0.5em] justify-center bg-platformGreen/30 border border-platformGreen backdrop-blur-sm rounded-[1em] sm:rounded-[0.5em] p-[0.5em]">
          <p className="text-[0.7em] font-bold ">We Accept</p>
          <div className="flex flex-wrap justify-center items-center  gap-y-[1em] gap-x-[2em] ">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center "
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  className="object-contain h-[9vw] sm:h-[3.5vw]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero section */}
      <div className="flex items-center justify-center">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap- items-center px-[5vw]">
          {/* Text Section */}
          <div className=" md:pr-[2vw] ">
            <h1 className="text-center sm:text-left text-[1em] font-bold leading-tight text-gray-800 mb-4">
              <span className="text-platformGreen">Transform </span>
              Your Resume, Land Your{" "}
              <span className="text-platformGreen">Dream Job.</span>
            </h1>
            <ul className="text-[0.5em] sm:text-[0.4em] space-y-[0.5em] text-gray-600 cursor-default ">
              <li className="flex items-center gap-[0.4em] hover:scale-105 transition-all duration-200">
                <Check color="#31D0AD" size={"1.5em"} />
                <span>
                  <strong>Customizable Templates: </strong> Access
                  industry-specific designs tailored to stand out.
                </span>
              </li>
              <li className="flex items-center gap-[0.4em] hover:scale-105 transition-all duration-200">
                <Check color="#31D0AD" size={"1.5em"} />
                <span>
                  <strong>Content Suggestions: </strong>Pre-written phrases for
                  skills, achievements, and experience.
                </span>
              </li>
              <li className="flex items-center gap-[0.4em] hover:scale-105 transition-all duration-200">
                <Check color="#31D0AD" size={"1.5em"} />
                <span>
                  <strong>ATS Optimization: </strong>Resumes designed to pass
                  Applicant Tracking Systems.
                </span>
              </li>
              <li className="flex items-center gap-[0.4em] hover:scale-105 transition-all duration-200">
                <Check color="#31D0AD" size={"1.5em"} />
                <span>
                  <strong>Instant Downloads: </strong>Export your polished
                  resume in PDF format with one click.
                </span>
              </li>
            </ul>
            <div className="text-[1.5em] text-center sm:text-left">
              <Button text={"Create My Resume Now"} />
            </div>
          </div>

          {/* Image Section */}
          <div className="mb:mt-0 my-20 w-full h-[60vh] rounded-xl bg-platformGreen/5 p-[5vh] border border-platformGreen/40">
            <div className="relative w-full h-full">
              <div className="w-full h-full px-[10%] relative ">
                <div className="w-full h-full relative">
                  <div className="w-full h-full absolute z-10" id="scanner">
                    <div className="w-full h-[4px] bg-teal-300"></div>
                    <div className="w-full h-[50px] bg-gradient-to-b from-[rgba(20,184,166,0.5)]  via-transparent to-transparent"></div>
                  </div>
                  <div
                    className="w-full h-full flex flex-col items-center justify-center absolute"
                    id="outdated-resume"
                  >
                    <img
                      src={resume1Img}
                      alt="Resume example 1"
                      className="rounded-md h-full w-full object-contain  grayscale"
                    />
                    <div
                      className="absolute w-full left-[50%] top-[50%] translate-x-[-50%] text-white text-2xl text-center font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md"
                      id="outdated-text"
                    >
                      Outdated and Overlooked
                    </div>
                  </div>

                  <div
                    className="w-full h-full flex flex-col items-center justify-center absolute"
                    id="new-resume"
                  >
                    <img
                      src={resume2Img}
                      alt="Resume example 1"
                      className="rounded-md h-full w-full object-contain  "
                    />
                  </div>
                  <div id="downloadBtn" className="absolute bottom-0 right-0">
                    <Button text="Download PDF" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Temlates section */}

      <TemplatesBanner />

      {/* Testimonial Section */}

      <div className="px-[5vw]">
        <Testimonials />
      </div>

      {/* Hero Section */}
      <div className="pb-[5vh]">
        <HeroSection />
      </div>

      {/* FAQ */}
      {/* <div>
        <FAQSection />
      </div> */}
    </div>
  );
}
