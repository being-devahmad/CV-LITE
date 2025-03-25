import BussinessAnimtion from "@/components/Home/BussinessAnimation";
import BlurDiv from "@/components/ui/BlurDiv";

const CareerSection = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 relative">
      <BlurDiv />
      <div className="flex flex-col md:flex-row justify-between items-center gap-[5vw]">
        {/* Text Section */}
        <div className="flex flex-col gap-[0.5em] md:p-[1em] md:w-[70%] w-full md:text-left text-center">
          <h1 className="text-[0.8em] font-bold text-gray-800">
            <span className="text-[#4CD4C0] inline-block me-2">Empowering</span>
            Careers at Every Stage
          </h1>
          <p className="text-[0.4em] text-gray-600">
            Unlock your team’s full potential with AI-powered tools and
            personalized coaching—designed to support every stage of career
            growth, from graduates to seasoned leaders.
            <br />
            Our mission is to enhance your career prospects through the perfect
            blend of{" "}
            <span className="text-indigo-500 font-semibold">
              AI-powered tools
            </span>{" "}
            and{" "}
            <span className="text-indigo-500 font-semibold">
              personalized coaching
            </span>
            .
          </p>
        </div>

        <BussinessAnimtion />
      </div>
    </div>
  );
};

export default CareerSection;
