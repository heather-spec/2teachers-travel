
import React from 'react';

interface AnswerBoxProps {
  children: React.ReactNode;
  className?: string;
}

const AnswerBox: React.FC<AnswerBoxProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-warmStone/60 border-l-4 border-brass p-6 my-6 rounded-r-lg shadow-sm ${className}`}>
      <p className="text-lg leading-relaxed text-inkNavy font-medium italic">
        {children}
      </p>
    </div>
  );
};

export default AnswerBox;
