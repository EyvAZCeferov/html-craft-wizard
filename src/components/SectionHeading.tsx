
import React from 'react';

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <div className="section-heading relative pb-3">
      <h3 className="text-2xl font-bold tracking-wide text-black text-center">{title}</h3>
      <div className="absolute bottom-0 left-0 w-full border-b border-gray-300"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-1">
        <div className="bg-white px-2">
          <div className="h-2 w-8 flex items-center justify-center">
            <div className="w-2 h-2 border border-gray-400 rotate-45 mx-0.5"></div>
            <div className="w-2 h-2 border border-gray-400 rotate-45 mx-0.5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
