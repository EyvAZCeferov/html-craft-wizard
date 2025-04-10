
import React from 'react';

interface Experience {
  startDate: string;
  endDate: string;
  company: string;
  position: string;
  responsibilities: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className="experience-timeline relative">
      {experiences.map((experience, index) => (
        <div key={index} className="relative pl-8 pb-8 border-l border-gray-300">
          {/* Timeline dot */}
          <div className="absolute left-0 top-0 transform -translate-x-1/2 bg-transparent p-1 position-relative">
            <div className="w-2 h-2 bg-gray-500 rotate-45 absolute top-[30px] left-0"></div>
          </div>

          {/* Date range */}
          <div className="text-gray-700 font-medium">
            {experience.startDate} - {experience.endDate}
          </div>

          {/* Job info */}
          <div className="mt-2">
            <h4 className="font-bold text-gray-900">{experience.company}</h4>
            <h5 className="font-semibold">{experience.position}</h5>
            <ul className="mt-2 space-y-1">
              {experience.responsibilities.map((responsibility, respIndex) => (
                <li key={respIndex} className="flex items-start">
                  <span className="mr-2 text-xs text-gray-600">◆</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
