
import React from "react";

const PersonalInfo = () => {
  return (
    <div className="bg-gray-700 text-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <span className="font-semibold">Doğum tarixi:</span>
          <span>01.05.1985</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Ailə vəziyyəti:</span>
          <span>Subay</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Hərbi xidmət:</span>
          <span>2007 - 2008</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Vətəndaşlıq:</span>
          <span>Azərbaycan</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Cinsi:</span>
          <span>Kişi</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Sürücülük vəsiqəsi:</span>
          <span>B kateqoriyası</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
