
import React from "react";
import TrainingTimeline from "@/components/TrainingTimeline";
import SectionHeading from "@/components/SectionHeading";

const TrainingSection = () => {
  return (
    <div>
      <SectionHeading title="TƏLİM, SEMİNAR VƏ KURSLAR" />
      <div className="mt-6">
        <TrainingTimeline 
          trainings={[
            {
              date: "10.2015",
              institution: "Step It Academy",
              type: "TƏLİM",
              details: ["Peşəkar ofis proqramları təlimi"]
            },
            {
              startDate: "03.2014",
              endDate: "07.2014",
              institution: "Celt Colleges",
              type: "KURS",
              details: ["MS Office proqramlarının tədrisi (MS Windows, Word, Excel, Outlook, PowerPoint)"]
            },
            {
              startDate: "08.2012",
              endDate: "04.2013",
              institution: "OLD SCHOOL Language Courses",
              type: "KURS",
              details: ["İngilis dili kursu"]
            }
          ]}
        />
      </div>
    </div>
  );
};

export default TrainingSection;
