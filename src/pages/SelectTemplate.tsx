import { ProgressDots } from "@/components/resumeDashboard/ProgressDots";
import ResumeSlider from "@/components/ResumeSlider";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SelectTemplate = () => {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate("/select/2");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 pt-[10vh]">
      <main className="flex-1 w-full mx-auto py-12 text-[7vw] md:text-[4.5vw] lg:text-[1.5vw]">
        <h1 className="text-[1.5em] font-bold text-center mb-6 text-gray-800">
          Choose Your Perfect Template
        </h1>
        <ProgressDots />
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-4 px-[5vw] sm:px-[20vw] mx-auto">
            Browse through our collection of professionally designed templates.
            Select the one that best showcases your skills and experience.
          </p>
          <Button
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={handleSkip}
          >
            Skip this step
          </Button>
        </div>
        {/* <TemplateSlider /> */}
        <ResumeSlider />
      </main>
    </div>
  );
};

export default SelectTemplate;
