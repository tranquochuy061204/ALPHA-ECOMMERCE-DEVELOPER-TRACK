import React, { useState } from 'react';

const SlidingBox = ({ thumb, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`mb-[16px] p-[16px] rounded-[32px]  border cursor-pointer transition-all duration-500 ease-out-slow ${
        isOpen ? 'border-[#039869]' : 'border-[#d2d2d2]'
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="thumb flex justify-between items-center gap-md">
        <p className="text-base m-0 font-medium">{thumb}</p>
        <span>
          <img
            className={`w-[24px] block transition-transform duration-200 ease-out-slow ${isOpen ? 'rotate-45' : ''}`}
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844"
          />
        </span>
      </div>

      <div
        className={`content grid transition-all duration-500 ease-out-slow [&_p]:tracking-[0px] [&_p]:leading-[1.3em] [&_p]:text    -[16px] ${
          isOpen ? 'grid-rows-[1fr]  pt-[16px]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SlidingBox;
