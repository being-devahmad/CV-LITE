import { useEffect, useState } from "react";
import BackCv from "@/assets/images/backCv.png";
import { FigmaLogoIcon } from "@radix-ui/react-icons";
import userVector from "@/assets/icons/user.png";
import twitter from "@/assets/icons/twitter.png";
import { Image } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import Button from "../ui/Custom Ui/Button";
interface JobCardProps {
  position: string;
  applied: string;
  icon: React.ReactNode;
  className?: string;
}

const JobCard: React.FC<JobCardProps> = ({
  position,
  applied,
  icon,
  className,
}) => {
  return (
    <div
      className={`absolute border border-platformGreen border-opacity-40 z-20 bg-white rounded-lg shadow-lg p-4 animate-fadeIn ${
        className || ""
      }`}
    >
      <div className="flex items-center gap-3 md:flex-row flex-col text-center md:text-left">
        <div className="w-8 h-8 bg-[#BAB7F03D] rounded-lg flex items-center justify-center">
          <span className="text-[#1491B9] text-xl">{icon}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#101019]">{position}</p>
          <p className="text-xs text-[#5F5F65] inline-flex gap-1 items-center justify-center md:justify-start">
            <span>
              <img src={userVector} alt="User Icon" className="w-4 h-4" />
            </span>
            {applied} applied
          </p>
        </div>
      </div>
    </div>
  );
};
const AnimatedHeroSection = () => {
  const [scene, setScene] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setScene((prevScene) => (prevScene % 3) + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative text-[10vw] md:text-[5vw] lg:text-[4vw] text-center md:text-left space-y-[1vh]">
          <h1 className="text-[1em] font-semibold ">
            Turn Your{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              CV{" "}
            </span>
            Into a{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Job Offer{" "}
            </span>
            – Fast.
          </h1>
          <p className="text-gray-600 text-[0.5em]">
            Create a CV that{" "}
            <span className="text-platformGreen">
              stands out, impresses recruiters,{" "}
            </span>
            and secures the job you deserve
          </p>
          <NavLink to="/select">
            <Button text={"Start Building My CV"} />
          </NavLink>
        </div>
        <div className="relative">
          <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] z-40">
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="iconify iconify--emojione-monotone"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M22.625 2c0 15.834-8.557 30-20.625 30c12.068 0 20.625 14.167 20.625 30c0-15.833 8.557-30 20.625-30c-12.068 0-20.625-14.166-20.625-30"
                fill="#31D0AD"
              />
              <path
                d="M47 32c0 7.918-4.277 15-10.313 15C42.723 47 47 54.084 47 62c0-7.916 4.277-15 10.313-15C51.277 47 47 39.918 47 32z"
                fill="#31D0AD"
              />
              <path
                d="M51.688 2c0 7.917-4.277 15-10.313 15c6.035 0 10.313 7.084 10.313 15c0-7.916 4.277-15 10.313-15c-6.036 0-10.313-7.083-10.313-15"
                fill="#31D0AD"
              />
            </svg>
          </div>
          <div className="absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%] z-40">
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="iconify iconify--emojione-monotone"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M22.625 2c0 15.834-8.557 30-20.625 30c12.068 0 20.625 14.167 20.625 30c0-15.833 8.557-30 20.625-30c-12.068 0-20.625-14.166-20.625-30"
                fill="#31D0AD"
              />
              <path
                d="M47 32c0 7.918-4.277 15-10.313 15C42.723 47 47 54.084 47 62c0-7.916 4.277-15 10.313-15C51.277 47 47 39.918 47 32z"
                fill="#31D0AD"
              />
              <path
                d="M51.688 2c0 7.917-4.277 15-10.313 15c6.035 0 10.313 7.084 10.313 15c0-7.916 4.277-15 10.313-15c-6.036 0-10.313-7.083-10.313-15"
                fill="#31D0AD"
              />
            </svg>
          </div>
          <div className="relative">
            {scene === 1 && (
              <JobCard
                position="UI Designer"
                applied="2/27"
                icon={<FigmaLogoIcon />}
                className="top-14 left-10 -rotate-6"
              />
            )}
            {scene === 2 && (
              <JobCard
                position="Frontend Dev"
                applied="4/15"
                icon={<span>💻</span>}
                className="top-14 right-14 rotate-6"
              />
            )}
            {scene === 3 && (
              <JobCard
                position="Resumes"
                applied="8/12"
                icon={<img src={twitter} alt="" />}
                className="bottom-48 right-12 -rotate-6"
              />
            )}
            <div className="rounded-2xl flex justify-center items-center overflow-hidden border border-platformGreen border-opacity-40 bg-platformGreen bg-opacity-5 p-4">
              <Image
                src={BackCv}
                alt="Person using laptop"
                className="h-[60vh] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHeroSection;
