import { useState } from 'react';

const IngredientBox = ({ uses, name, description, amount, imgLink, study }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-[0.5px] border-solid border-black p-[16px] md:p-[24px] cursor-pointer [*_h5:inline_block]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="flex justify-center items-center text-[16px] text-[#0c7c00] m-0 gap-[8px]">
        <span>
          <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419"
            className="max-w-[16px]"
          />
        </span>
        {uses}
      </p>

      <img
        src={imgLink}
        alt=""
        className="desktop main-ingr-img max-w-[120px] my-[12px] mx-auto max-h-[80px] w-auto "
      />

      <div className="thumb flex items-center gap-[8px] justify-between">
        <div className="mobile">
          <img src={imgLink} alt="" className="main-ingr-img ml-auto!" />
        </div>
        <div>
          <h5 className="font-family-trirong text-[16px] leading-base font-[600] m-0 tracking-[0.05px]">
            {name} ({amount})
          </h5>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626"
            alt=""
            className={`max-w-[24px] ml-auto `}
          />
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="content pt-[12px] text-[14px] leading-base m-0 ">
            <p>{description}</p>
            <p>{`[Study:${study}]`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientBox;
