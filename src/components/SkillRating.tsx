
import React from 'react';

interface SkillRatingProps {
  name: string;
  rating: number; // Rating from 0 to 10
}

const SkillRating: React.FC<SkillRatingProps> = ({ name, rating }) => {
  // Create an array of 10 elements to represent the rating circles
  const circles = Array.from({ length: 10 }, (_, i) => i < rating);

  return (
    <div className="skill-rating">
      <div className="font-medium text-gray-700 mb-1">{name}</div>
      <div className="flex">
        {circles.map((filled, index) => (
          <div 
            key={index}
            className={`w-4 h-4 rotate-45 mr-1 ${
              filled ? 'bg-red-700' : 'border border-gray-400 bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillRating;
