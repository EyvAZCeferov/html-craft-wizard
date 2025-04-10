
import React from 'react';

interface Education {
  startYear: string;
  endYear: string;
  institution: string;
  degree: string;
  details: string[];
}

interface EducationTimelineProps {
  education: Education[];
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({ education }) => {
  return (
    <div className="education-timeline relative">
      {education.map((edu, index) => (
        <div key={index} className="relative pl-8 pb-8 border-l border-gray-300">
          {/* Timeline dot */}
          <div className="absolute left-0 top-0 transform -translate-x-1/2 bg-transparent p-1 position-relative">
            <div className="w-2 h-2 bg-gray-500 rotate-45 absolute top-[30px] left-0"></div>
          </div>

          {/* Year range */}
          <div className="absolute left-15 top-30px text-gray-700 font-medium d-flex flex-column">
            {edu.endYear} - {edu.startYear}
          </div>

          {/* Education info */}
          <div className="mt-2 ml-5">
            <h4 className="font-bold text-gray-900">{edu.institution}</h4>
            <h5 className="font-semibold">{edu.degree}</h5>
            <ul className="mt-2 space-y-1">
              {edu.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="flex items-start">
                  <span className="mr-3 mt-1 text-xs text-gray-600">◆</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;
