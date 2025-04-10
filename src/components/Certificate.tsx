
import React from 'react';

interface CertificateProps {
  date: string;
  title: string;
  organization: string;
  details: string[];
}

const Certificate: React.FC<CertificateProps> = ({ date, title, organization, details }) => {
  return (
    <div className="certificate">
      <div className="font-semibold text-gray-900">{date}</div>
      <div className="font-bold mt-1">{title}</div>
      <div className="font-semibold">{organization}</div>
      <ul className="mt-1 list-disc list-inside text-gray-700">
        {details.map((detail, index) => (
          <li key={index} className="text-sm">{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default Certificate;
