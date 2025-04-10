
import React from "react";
import Certificate from "@/components/Certificate";
import SectionHeading from "@/components/SectionHeading";

const CertificatesSection = () => {
  return (
    <div>
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
      
      <SectionHeading title="Hobbilər" />
      <div className="mt-8">
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm">Kitab oxumaq</span>
          <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm">Üzgüçülük</span>
          <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm">Şahmat</span>
          <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm">Səyahət</span>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="font-bold mb-1">Əllillik statusu/dərəcəsi:</div>
        <div className="mt-1">
          <span className="text-gray-700">Yox</span>
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;
