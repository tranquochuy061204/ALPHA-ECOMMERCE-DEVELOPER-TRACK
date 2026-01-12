import React from 'react';

const BlackButton = ({ className, content }) => {
  return (
    <div
      className={`text-[#fff]  text-[18px]
    cursor-pointer rounded-[8px]  mt-[16px] 
    hover:opacity-70 p-[12px] text-center bg-[#000] leading-[1.8em] inline-block ${className}`}
    >
      {content}
    </div>
  );
};

export default BlackButton;
