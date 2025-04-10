
import React from 'react';

interface Training {
  date?: string;
  startDate?: string;
  endDate?: string;
  institution: string;
  type: string;
  details: string[];
}

interface TrainingTimelineProps {
  trainings: Training[];
}

const TrainingTimeline: React.FC<TrainingTimelineProps> = ({ trainings }) => {
  return (
    <div className="training-timeline relative">
      {trainings.map((training, index) => (
        <div key={index} className="relative pl-8 pb-8 border-l border-gray-300">
          {/* Timeline dot */}
          <div className="absolute left-0 top-0 transform -translate-x-1/2 bg-transparent p-1 position-relative">
            <div className="w-2 h-2 bg-gray-500 rotate-45 absolute top-[30px] left-0"></div>
          </div>

          {/* Date info - moved to the left side */}
          <div className="absolute left-[-120px] top-0 w-[100px] text-right text-gray-700 font-medium">
            {training.date || (
              <>
                {training.endDate} - {training.startDate}
              </>
            )}
          </div>

          {/* Training info */}
          <div className="mt-2">
            <h4 className="font-bold text-gray-900">{training.institution}</h4>
            <h5 className="font-semibold">{training.type}</h5>
            <ul className="mt-2 space-y-1">
              {training.details.map((detail, detailIndex) => (
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

export default TrainingTimeline;
