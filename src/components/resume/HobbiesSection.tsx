
import React from "react";
import Certificate from "@/components/Certificate";
import SectionHeading from "@/components/SectionHeading";

const HobbiesSection = () => {
  return (
    <div>
         <SectionHeading title="Hobbilər" />
        <div className="space-y-6 mt-6">
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm">Kitab oxumaq</span>
          <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm">Üzgüçülük</span>
          <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm">Şahmat</span>
          <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm">Səyahət</span>
        </div>
      </div>
    </div>
  )
}