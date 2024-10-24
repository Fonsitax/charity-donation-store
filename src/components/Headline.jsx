import React from 'react';

const Headline = ({ text }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="relative text-4xl md:text-6xl font-bold text-[#0077b6] dark:text-[#90e0ef]">
        {text}
        {/* Underline Effect */}
        <span className="block h-1 w-0 bg-[#0077b6] dark:bg-[#90e0ef] absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 underline-hover"></span>
      </h1>
    </div>
  );
};

export default Headline;
