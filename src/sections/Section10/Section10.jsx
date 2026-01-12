import './Section10.css';
import FaqBox from '../../components/section10/FaqBox';
import { faqs } from '../../data/mockData';
import BlackButton from '../../components/BlackButton';
const Section10 = () => {
  return (
    <div className="judge-outer">
      <div className="page-width">
        <div className="section-title text-center">
          <p>Frequently Asked Questions</p>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <FaqBox key={index} title={faq.title} content={faq.content} />
          ))}
        </div>

        <div className="btn-container mt-[32px] text-center">
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

export default Section10;
