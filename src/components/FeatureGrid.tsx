import { Pencil, Star, MessageSquare, Cloud } from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      title: "Start Instantly, No Barriers",
      description:
        "Jump right in and begin crafting your CV - no complicated setup required.",
      icon: <Pencil size={"1.5em"} />,
    },
    {
      title: "Choose a Look That Stands Out",
      description:
        "Pick from sleek, ATS-friendly designs that match your personality and industry.",
      icon: <Star size={"1.5em"} />,
    },
    {
      title: "Build Smarter, Not Harder",
      description:
        "Fill in your details and let AI fine-tune your wording for maximum impact.",
      icon: <MessageSquare size={"1.5em"} />,
    },
    {
      title: "Land the Job You Deserve",
      description:
        "Download, share, and apply with confidence - your next opportunity is waiting.",
      icon: <Cloud size={"1.5em"} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1vw] p-8 w-full text-[5.5vw] md:text-[2.5vw] lg:text-[1.5vw]">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`text-[1em] bg-gradient-to-b from-green-200 to-white border-2 border-green-400 p-6 rounded-[0.5em] transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400 shadow-md`}
        >
          <div className="text-[1em] flex flex-col items-start mb-4 ">
            <div className="w-full my-[1em] bg-opacity-30 flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className={`text-[1em] font-bold text-black`}>
              {feature.title}
            </h3>
          </div>
          <p className={`text-[1em] text-black`}>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
