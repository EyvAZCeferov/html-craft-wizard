
import React from "react";
import SkillsSection from "./SkillsSection";
import CertificatesSection from "./CertificatesSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import TrainingSection from "./TrainingSection";

const ResumeContent = () => {
  return (
    <div className="flex flex-col md:flex-row relative">
      {/* Left Column */}
      <div className="bg-white p-6 md:p-8 md:w-2/5 before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-full before:h-1.5 before:bg-black">
        <SkillsSection />
        <CertificatesSection />
      </div>

      {/* Separator */}
      <div className="hidden md:block absolute left-2/5 top-0 h-full">
        <div className="h-full w-0.5 bg-gray-300"></div>
      </div>

      {/* Right Column */}
      <div className="bg-gray-100 p-6 md:p-8 md:w-3/5 border-l border-gray-200">
        <ExperienceSection />
        <EducationSection />
        <TrainingSection />
      </div>
    </div>
  );
};

export default ResumeContent;
