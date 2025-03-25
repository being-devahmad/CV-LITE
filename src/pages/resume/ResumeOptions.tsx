import { useState } from "react";
import {
  ExistingResumeIcon,
  NewResumeIcon,
} from "@/components/resumeDashboard/ResumeIcons";
import { useParams, useNavigate } from "react-router-dom";
import OptionCard from "@/components/resumeDashboard/OptionCard";
import ResumeUpload from "@/components/resumeDashboard/ResumeUpload";
import ResumeLoadingSkeleton from "@/components/skeletons/ResumeLoadingSkeleton";

export default function BuilderLandingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showResumeUpload, setShowResumeUpload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  console.log("Selected template ID:", id);

  const handleNewResume = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/select/${id}/start`);
    }, 1000); // Add a small delay to show the loading state
  };

  if (isLoading) {
    return <ResumeLoadingSkeleton />;
  }

  const handleExistingResume = () => {
    setShowResumeUpload(true);
  };

  if (showResumeUpload) {
    return <ResumeUpload />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 text-[7vw] md:text-[4vw] lg:text-[3vw]">
      <div className="w-full">
        <h1 className="font-bold text-center mb-16">
          How do you want to{" "}
          <span className="text-platformGreen">build your resume</span>?
        </h1>
        <div className="grid md:grid-cols-2 gap-[1em] px-[5vw] lg:px-[20vw] mx-auto">
          <OptionCard
            title="Create a new resume"
            description="We will help you create a resume step-by-step"
            icon={<NewResumeIcon />}
            onClick={handleNewResume}
          />
          <OptionCard
            title="I already have a resume"
            description="We'll re-format it and fill in your information so you don't have to."
            icon={<ExistingResumeIcon />}
            onClick={handleExistingResume}
          />
        </div>
      </div>
    </div>
  );
}
