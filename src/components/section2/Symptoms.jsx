import React from 'react';

const Symptoms = ({ imgLink, text }) => {
  return (
    <div className="flex md:block w-full rounded-[6px] overflow-hidden">
      <div className="w-full md:w-auto">
        <img src={imgLink} className="min-h-[150px] w-full" />
      </div>

      <div className="min-h-[150px] p-0 md:p-[16px] bg-[#f7f7f7] text-center w-full md:w-auto flex md:block items-center justify-center">
        <div className="p-[12px] md:p-0">
          <p className="text-base m-0">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
