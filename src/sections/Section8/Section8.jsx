import './Section8.css';
import BlackButton from '../../components/BlackButton';
const Section8 = () => {
  return (
    <div className="judge-outer">
      <div className="page-width">
        <div className="expert-wrapper tracking-[0.06em]">
          <div>
            <div className="expert-content p-[32px]">
              <p className="expert-subtitle text-basic text-[16px] m-0 text-[#737373]">July 4th, 2025</p>
              <h2 className="section-title">Expert Advice from Dr. Emily Chen of a Premier New York Skin Clinic</h2>
              <div className="product-text">
                <p>
                  “Your nutrition plays a powerful role in your appearance. If your body is missing key vitamins and
                  nutrients, it can’t process fat and upkeep healthy connective tissue, which is why unprocessed fat
                  flows up and starts pushing up against your skin, forming bumps you know as cellulite.
                </p>
                <p>
                  SmoothSkin by Sculptique™ contains ingredients that are scientifically proven to enhance
                  microcirculation, boost lymphatic drainage, and reduce inflammation, which restores your tissue and
                  breaks down the fat cells in your skin.”
                </p>
              </div>
              <div className="button-container mt-[24px]">
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

          <div className="expert-media">
            <img src="//trysculptique.com/cdn/shop/files/greendeskt-min.png?v=1758713213" loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
