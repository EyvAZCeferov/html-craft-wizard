
import React from "react";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SectionHeading from "@/components/SectionHeading";

const ExperienceSection = () => {
  return (
    <div className="mb-10">
      <SectionHeading title="İŞ TƏCRÜBƏSİ" />
      <div className="mt-6">
        <ExperienceTimeline 
          experiences={[
            {
              startDate: "04.05.2018",
              endDate: "13.07.2015",
              company: '"Azercell Telekom" MMC',
              position: "OFİS MENECERİ",
              responsibilities: [
                "Ofis daxili işlərin icra olunması",
                "Lazımi sənədlərin, məktubların hazırlanması",
                "Sosial mediadan yönləndiriləın sualları cavablandırmaq"
              ]
            },
            {
              startDate: "04.05.2015",
              endDate: "17.08.2011",
              company: '"Delta Telekom" MMC',
              position: "OFİS MENECERİ",
              responsibilities: [
                "E-mail və yazışmaların həyata keçirilməsi",
                "Rəhbərliyin verdiyi tapşırıqları yerinə yetirmək"
              ]
            }
          ]}
        />
      </div>
    </div>
  );
};

export default ExperienceSection;
