
import React from "react";
import EducationTimeline from "@/components/EducationTimeline";
import SectionHeading from "@/components/SectionHeading";

const EducationSection = () => {
  return (
    <div className="mb-10">
      <SectionHeading title="TƏHSİL" />
      <div className="mt-6">
        <EducationTimeline 
          education={[
            {
              startYear: "2008",
              endYear: "2010",
              institution: "Bakı Dövlət Universiteti",
              degree: "MAGİSTR",
              details: ["İdarəetmənin informasiya texnologiyaları"]
            },
            {
              startYear: "2003",
              endYear: "2007",
              institution: "Azərbaycan Texniki Universiteti",
              degree: "BAKALAVR",
              details: ["İnformasiya texnologiyaları və proqramlaşdırma"]
            }
          ]}
        />
      </div>
    </div>
  );
};

export default EducationSection;
