
import React from "react";
import SkillRating from "@/components/SkillRating";
import SectionHeading from "@/components/SectionHeading";

const SkillsSection = () => {
  return (
    <>
      <div className="mb-10">
        <SectionHeading title="KOMPÜTER BACARIQLARI" />
        <div className="space-y-4 mt-6">
          <SkillRating name="MS Windows" rating={8} />
          <SkillRating name="MS Office" rating={9} />
          <SkillRating name="Adobe Photoshop" rating={7} />
          <SkillRating name="Adobe Illustrator" rating={5} />
          <SkillRating name="Internet" rating={10} />
        </div>
      </div>

      <div className="mb-10">
        <SectionHeading title="DİL BACARIQLARI" />
        <div className="space-y-4 mt-6">
          <SkillRating name="Azərbaycan dili / ana dili" rating={10} />
          <SkillRating name="Türk dili" rating={9} />
          <SkillRating name="İngilis dili" rating={8} />
          <SkillRating name="Rus dili" rating={4} />
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
