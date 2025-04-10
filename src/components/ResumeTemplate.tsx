
import React from "react";
import Header from "@/components/resume/Header";
import PersonalInfo from "@/components/resume/PersonalInfo";
import ResumeContent from "@/components/resume/ResumeContent";

const ResumeTemplate = () => {
  return (
    <div className="bg-white shadow-lg rounded-sm overflow-hidden">
      <Header />
      <PersonalInfo />
      <ResumeContent />
    </div>
  );
};

export default ResumeTemplate;
