import './Section11.css';

const Section11 = () => {
  return (
    <div className="judge-outer">
      <div className="page-width">
        <div className="flex items-center">
          <div className="w-full ">
            <div className="px-[16px] md:px-[32px]">
              <div className="section-title text-center">
                We’re On A Mission To Help 100,000,000 Women Visibly, Naturally Get Rid Of Bloating…And Feel Like
                Themselves Again
              </div>
              <div className="product-text w-full text-center md:text-left">
                <p className="inline-block my-[12px]">Here's where we're at right now:</p>
              </div>
              <div>
                <img
                  loading="lazy"
                  class="mobile"
                  src="//trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777"
                />
                <img
                  loading="lazy"
                  class="desktop"
                  src="//trysculptique.com/cdn/shop/files/numbdeskt-min_png.png?v=1760942458"
                ></img>
                <img
                  loading="lazy"
                  class="mobile"
                  src="//trysculptique.com/cdn/shop/files/numbmob-min_png.png?v=1760942458"
                ></img>
              </div>
            </div>
          </div>

          <div className="desktop w-[70%]">
            <img
              className="w-full object-cover rounded-[12px] "
              src="//trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section11;
