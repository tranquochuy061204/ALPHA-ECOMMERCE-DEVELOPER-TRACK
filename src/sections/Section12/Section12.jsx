import './Section12.css';
import BlackButton from '../../components/BlackButton';
const Section12 = () => {
  return (
    <div className="judge-outer bg-[#f3eee0]">
      <div className="page-width">
        <div className="flex items-center justify-center gap-[64px] [&>div]:w-full">
          <div>
            <div className="text-image-content">
              <img
                loading="lazy"
                className="desktop max-w-[350px] w-full"
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review.png?v=1752480694"
              ></img>
              <img
                loading="lazy"
                className="mobile max-w-[250px] w-full m-auto"
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_1.png?v=1752480694"
              ></img>
            </div>
            <div className="section-title">
              <h2>Stop Masking Symptoms. Start Restoring Root Cause.</h2>
            </div>
            <div className="product-text">
              <p>
                You deserve to feel like yourself again. To wake up without puffiness. To see your ankles. To look in
                the mirror and recognize the vibrant woman staring back. To have energy for the people you love.
              </p>
              <p>
                You deserve a solution that actually works. Not temporary relief. Not symptom masking. Complete
                lymphatic restoration.
              </p>
            </div>
            <img
              loading="lazy"
              className="mobile product_section-text-main-img"
              src="//trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928"
            ></img>
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
          <div className="desktop">
            <img src="//trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928" loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section12;
