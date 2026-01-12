import React from 'react';
import './Section4.css';
import FailReasonsBox from '../../components/section4/FailReasonsBox';
import { failReasons } from '../../data/mockData';
import BlackButton from '../../components/BlackButton';

const Section4 = () => {
  return (
    <div className="outer-how-nothing">
      <div className="page-width">
        <div className="section-title">
          <h1>
            Why Nothing Has <span className="green-text">Worked</span>
          </h1>
        </div>

        <div className="grid gap-[8px] md:flex md:gap-[16px] mt-[40px] mb-[24px] md:mb-0!">
          {failReasons.map((item) => (
            <FailReasonsBox key={item.id} imgLink={item.imgLink} title={item.title} reason={item.reason} />
          ))}
        </div>

        <div className="w-full max-w-[920px] m-auto">
          <img className="desktop" src="//trysculptique.com/cdn/shop/files/Group_7207_1.png?v=1760694176" alt="" />
          <img className="mobile" src="//trysculptique.com/cdn/shop/files/Frame_1000003583_1.png?v=1760694176" alt="" />
        </div>
        <div className="mt-[24px]">
          <BlackButton
            content="Try Lymphatic Drainage Risk-Free"
            className={'py-[18px] px-[80px] rounded-[4px]! text-[18px]! leading-base'}
          />
          <p className="guarantee-tag">
            <span className="h-[29px]">
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"
                alt=""
              />
            </span>
            60 day money-back guarantee
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;

