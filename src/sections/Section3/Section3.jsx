import React from 'react';
import './Section3.css';

const Section3 = () => {
  return (
    <>
      <div className="-mt-[16px]">
        <div className="page-width">
          <div className="judge-container mb-[40px]">
            <div className="section-title  text-center">
              Your <span className="green-text">Hidden</span> Drainage System
            </div>
          </div>

          <div className="flex md:flex-nowrap md:flex-row flex-wrap flex-col-reverse gap-[16px] md:gap-[100px] items-center [&>div]:w-full">
            <div>
              <div className="top-text ">
                <p>
                  Your lymphatic system is your body's internal cleaning crew—a network of vessels that processes{' '}
                  <strong>3-4 liters of cellular waste and excess fluid every single day.</strong>
                </p>
                <p>When it's working properly, you don't even know it exists.</p>
                <ul className="pl-0 ml-0">
                  <li>Waste gets drained away</li>
                  <li>Fluid stays balanced.</li>
                  <li>Your body feels light and energized.</li>
                </ul>
              </div>
              <div className="pink-text">
                <p>But after age 35, declining estrogen hijacks this system's ability to function.</p>
              </div>

              <div className="bottom-text">
                <ul className="pl-0 ml-0">
                  <li>Vessel pumping weakens.</li>
                  <li>One-way valves fail.</li>
                  <li>Protein clogs form.</li>
                  <li>Vessel walls become leaky.</li>
                </ul>
                <p>Instead of processing and removing waste, it backs up in your tissues.</p>
              </div>
            </div>

            <div>
              <img src="//trysculptique.com/cdn/shop/files/Frame_1484580366_1.png?v=1760701546" className="desktop" />
              <img src="//trysculptique.com/cdn/shop/files/Frame_1484580366_1.png?v=1760701546" className="mobile" />
            </div>
          </div>
        </div>
      </div>

      <div className="judge-outer">
        <div className="page-width">
          <div className="flex md:flex-nowrap md:flex-row flex-wrap flex-col-reverse gap-[16px] md:gap-[100px] items-center [&>div]:w-full">
            <div>
              <img
                src="//trysculptique.com/cdn/shop/files/ChatGPT_Image_Oct_10_2025_at_03_26_38_PM_2.png?v=1760702096"
                alt=""
                className="desktop"
              />
              <img
                src="//trysculptique.com/cdn/shop/files/ChatGPT_Image_Oct_10_2025_at_03_26_38_PM_2.png?v=1760702096"
                alt=""
                className="mobile"
              />
            </div>

            <div className="">
              <div className="top-text">
                <p>
                  <strong>And it accumulates. Day after day. Week after week.</strong>
                </p>
                <p>
                  That gallon of fluid your body should be draining every 24 hours? It's pooling in your stomach, your
                  legs, your face—anywhere gravity and tissue structure allow it to settle.
                </p>
              </div>

              <div className="pink-text">
                <p>
                  The metabolic waste your cells produce overnight? It's still sitting there at noon. At dinner. While
                  you're trying to fall asleep.
                </p>
                <ul>
                  <li>That's why you're bloated.</li>
                  <li>That's why your ankles swell.</li>
                  <li>That's why you see cellulite.</li>
                  <li>That's why you feel exhausted and foggy.</li>
                </ul>
              </div>

              <div className="bottom-text">
                <p>
                  <strong>Your cells are literally sitting in their own waste—and your body can't flush it out.</strong>
                </p>
                <p>
                  The longer this goes on, the worse it gets. More congestion. More inflammation. More pressure on an
                  already compromised system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
