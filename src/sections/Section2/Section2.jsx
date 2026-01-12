import './Section2.css';
import { symptoms } from '../../data/mockData.js';
import Symptoms from '../../components/section2/Symptoms.jsx';

import arrowImg from '../../../assets/section2/arrow.jxl';

const Section2 = () => {
  return (
    <div className="page-width pt-[56px]">
      <div className="product_judge-container max-w-[800px] mx-auto text-center">
        <h1 className="text-[32px] font-[400] my-[16px] leading-base">
          Why Your <span className="text-[#039869]!">Bloating, Brain Fog & Swollen Legs</span> Are Actually Connected
        </h1>

        <p className="leading-base text-[16px] md:text-[18px] my-[16px]">
          If you're experiencing more than one of these symptoms, your body is trying to tell you something:
        </p>
      </div>

      <div className="grid gap-[8px] mb-[24px] md:flex md:gap-lg mt-[40px]">
        {symptoms.map((symptom) => (
          <Symptoms key={symptom.id} imgLink={symptom.imgLink} text={symptom.text} />
        ))}
      </div>

      <div className="max-w-[920px] mx-auto">
        <div className="w-full">
          <img
            className="desktop w-full"
            src="//trysculptique.com/cdn/shop/files/Group_7207.png?v=1760690771"
            alt="w-full desktop"
          />
          <img
            className="mobile w-full"
            src="//trysculptique.com/cdn/shop/files/Frame_1000003583.png?v=1760690769"
            alt="w-full mobile"
          />
        </div>
        <img
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549"
          className="arrow-img"
          alt=""
        />
        <div className="judge-container">
          <div className="section-title text-center">
            <h1 className="">
              The Connection <span className="text-[#039869]">You've Been Missing</span>
            </h1>
          </div>
        </div>

        <div className="max-w-[920px] mx-auto">
          <div>
            <img
              src="https://trysculptique.com/cdn/shop/files/Frame_1000003590.png?v=1760690771"
              className="desktop w-full"
            />
            <img
              src="//trysculptique.com/cdn/shop/files/Frame_1000003590_1.png?v=1760690770"
              className="mobile w-full"
            />
          </div>

          <img src={arrowImg} alt="arrow" className="arrow-img" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
