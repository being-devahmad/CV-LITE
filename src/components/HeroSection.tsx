import { NavLink } from "react-router-dom";
import Button from "./ui/Custom Ui/Button";
import CV from "@/assets/icons/cv.png";
import TARGET from "@/assets/icons/target.png";
import GLOAB from "@/assets/icons/earth.png";
import STAR from "@/assets/icons/star.png";
import MEDAL from "@/assets/icons/medal.png";
import bg from "@/assets/illustrations/bg1.png";

export default function HeroSection() {
  return (
    <div className="w-full px-0 sm:px-4 pt-[5vh] text-[10vw] md:text-[5vw] lg:text-[4vw] relative">
      <div className="absolute inset-0 -z-10 pointer-events-none ">
        <img src={bg} className="w-full" />
      </div>
      <div className="relative  w-full px-0 sm:px-6 py-16">
        <div className="relative mx-auto w-full text-center  px-[10vw]">
          {/* <BlurDiv /> */}

          <h1 className="mb-[0.5em] font-bold text-black leading-none">
            Join{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              thousands of professionals
            </span>{" "}
            <br />
            <span className="text-[0.85em]">who landed their </span>
            dream jobs!
          </h1>

          <p className="mb-[1em] text-[0.6em] text-black/70">
            Experience the power of streamlined OptimCV solutions
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-[2em] mb-10">
            {[
              {
                value: "10,000+",
                label: "Resumes Created",
                icon: CV, // Replace with a modern icon if using an icon library
              },
              {
                value: "85%",
                label: "Interview Rate",
                icon: TARGET,
              },
              {
                value: "50+",
                label: "Industries Covered",
                icon: GLOAB,
              },
              {
                value: "4.8/5",
                label: "Reviews Collected",
                icon: STAR,
              },
              {
                value: "25+",
                label: "Companies Trust Us",
                icon: MEDAL,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-[0.2em]"
              >
                <div
                  className="text-[#00C2A8] text-[0.6em] flex flex-shrink-0 items-center justify-center sm:justify-normal sm:h-full h-auto"
                  aria-label={stat.label}
                >
                  <img
                    src={stat.icon}
                    alt="icon"
                    className="w-[1.5em] h-[1.5em]"
                  />
                </div>
                <div className="">
                  <p className="text-black text-[0.5em] font-bold">
                    {stat.value}
                  </p>
                  <p className="text-black/70 text-[0.4em] text-bold">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <NavLink to={"/select"} onPointerEnter={() => {}}>
            <Button text={"Activate My Career Now"} icon />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
