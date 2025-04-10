
import React from "react";

const PersonalInfo = () => {
  return (
    <div className="bg-gray-700 text-white p-4 px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-row text-center">
          <span className="font-semibold">Doğum tarixi:</span>
          <span>&nbsp; 01.05.1985</span>
        </div>
        <div className="flex flex-row text-center">
          <span className="font-semibold">Ailə vəziyyəti:</span>
          <span>&nbsp; Subay</span>
        </div>
        <div className="flex flex-row text-center">
          <span className="font-semibold">Hərbi xidmət:</span>
          <span>&nbsp; 2007 - 2008</span>
        </div>
        <div className="flex flex-row text-center">
          <span className="font-semibold">Vətəndaşlıq:</span>
          <span>&nbsp; Azərbaycan</span>
        </div>
        <div className="flex flex-row text-center">
          <span className="font-semibold">Cinsi:</span>
          <span>&nbsp; Kişi</span>
        </div>
        <div className="flex flex-row text-center">
          <span className="font-semibold">Sürücülük vəsiqəsi:</span>
          <span>&nbsp; B kateqoriyası</span>
        </div>
        <div className="flex flex-row text-center">
          <span className="font-semibold">Qeydiyyat ünvanı:</span>
          <span>&nbsp; Bakı şəhəri</span>
        </div>
        <div className="flex flex-row text-center">
          <span className="font-semibold">Əlillik dərəcəsi:</span>
          <span>&nbsp; Yoxdur</span>
        </div>
        <div className="flex flex-row text-center">
          <span className="font-semibold">Məhkumluq statusu:</span>
          <span>&nbsp; Yoxdur</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
