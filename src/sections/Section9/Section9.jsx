import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaPlay } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';

import BlackButton from '../../components/BlackButton';
import './Section9.css';

const slides = [
  {
    video: 'https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4',
  },
  { video: 'https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov' },
  {
    video: 'https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4',
  },
  {
    video: 'https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4',
  },
  {
    video: 'https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4',
  },
  { video: 'https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4' },
  {
    video: 'https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4',
  },
  {
    video: 'https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4',
  },
  {
    video: 'https://cdn.shopify.com/videos/c/o/v/68b2aa06fab44d968723e052a14d87d5.mp4',
  },

  { video: 'https://cdn.shopify.com/videos/c/o/v/0ec8de99a9c3459da6c53e18c0eeab3c.mp4' },
];

const Section9 = () => {
  const [swiper, setSwiper] = useState(null);
  const [progress, setProgress] = useState(0);
  const [totalSteps, setTotalSteps] = useState(6);
  const [playingIndex, setPlayingIndex] = useState(null);

  const toggleVideo = (index) => {
    setPlayingIndex(playingIndex === index ? null : index);
  };

  useEffect(() => {
    if (swiper) {
      const updateSteps = () => {
        const spv = swiper.params.slidesPerView;
        const slidesPerView = typeof spv === 'number' ? Math.floor(spv) : 1;
        const steps = slides.length - slidesPerView + 1;
        setTotalSteps(steps);
      };
      updateSteps();
      swiper.on('resize', updateSteps);
      swiper.on('breakpoint', updateSteps);
      return () => {
        swiper.off('resize', updateSteps);
        swiper.off('breakpoint', updateSteps);
      };
    }
  }, [swiper]);

  const handleBarClick = (e) => {
    if (!swiper) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickProgress = clickX / rect.width;

    // Calculate which step was clicked (0 to totalSteps-1)
    const stepIndex = Math.round(clickProgress * (totalSteps - 1));
    swiper.slideTo(stepIndex);
  };

  return (
    <div className="judge-outer py-[50px] bg-[#f3eee0]">
      <div className="page-width">
        <div className="judge-container mb-[40px]">
          <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_2.png?v=1752485383"
            alt=""
            className="max-w-[300px] m-auto mb-[16px]"
          />
          <h2 className="text-center section-title">See The Stories of Sculptique™ Women Firsthand</h2>
        </div>
        <div className="carousel-outer relative">
          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiper}
            onProgress={(s) => setProgress(s.progress)}
            onSlideChange={(s) => setProgress(s.progress)}
            loop={false}
            spaceBetween={20}
            slidesPerView={1.2}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4 },
            }}
            className="stories-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="story-card relative rounded-[4px] overflow-hidden aspect-[9/16] bg-gray-200 cursor-pointer group"
                  onClick={() => slide.video && toggleVideo(index)}
                >
                  {playingIndex === index && slide.video ? (
                    <video
                      key={`video-${index}-playing`}
                      src={slide.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <>
                      {slide.image ? (
                        <img src={slide.image} alt={`Story ${index + 1}`} className="w-full h-full object-cover" />
                      ) : (
                        <video
                          src={slide.video}
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                          preload="metadata"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all flex items-center justify-center">
                        <div className="w-fit bg-white rounded-full flex items-center justify-center pl-1 shadow-lg">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519"
                            className="product_ugc-play w-[32px] h-[32px]"
                            style={{}}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="controls-container flex items-center justify-between mt-8 relative">
            <div
              className="custom-progress-bar w-[85%] min-w-[200px] h-[5px] bg-[#E5E5E5]  relative overflow-hidden cursor-pointer"
              onClick={handleBarClick}
            >
              <div
                className="progress-fill h-full bg-[#008761]  transition-all duration-300 ease-out"
                style={{
                  width: `${100 / totalSteps}%`,
                  transform: `translateX(${progress * (totalSteps - 1) * 100}%)`,
                }}
              ></div>
            </div>

            <div className="nav-buttons flex gap-3">
              <button className="custom-prev cursor-pointer w-[32px] h-[32px] rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-all border border-gray-200">
                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845" />
              </button>
              <button className="custom-next cursor-pointer w-[32px] h-[32px] rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-all border border-gray-200">
                <img
                  src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845"
                  className="rotate-180"
                />
              </button>
            </div>
          </div>
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

export default Section9;
