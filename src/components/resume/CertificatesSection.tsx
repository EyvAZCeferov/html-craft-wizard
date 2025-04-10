
import React from "react";
import Certificate from "@/components/Certificate";
import SectionHeading from "@/components/SectionHeading";

const CertificatesSection = () => {
  return (
    <div class="before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-full before:h-1.5 before:bg-black">
      <SectionHeading title="SERTİFİKATLAR" />
      <div className="space-y-6 mt-6">
        <Certificate 
          date="27.11.2018"
          title="MOS MASTER CERTIFICATE"
          organization="Microsoft Corporation"
          details={["Microsoft Office Specialist (MOS) Master"]}
        />
        <Certificate 
          date="12.04.2017"
          title="MOS EXPERT CERTIFICATE"
          organization="Microsoft Corporation"
          details={["Microsoft Office Specialist (MOS) Expert"]}
        />
      </div>
    </div>
  );
};

export default CertificatesSection;
