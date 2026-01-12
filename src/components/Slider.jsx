import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const LogoMarquee = () => {
  const logos = [
    'VOGUE',
    'GRAZIA',
    'VOGUE',
    'WH',
    'VOGUE',
    'GRAZIA',
    'VOGUE',
    'WH',
    'VOGUE',
    'GRAZIA',
    'VOGUE',
    'WH',
    'VOGUE',
    'GRAZIA',
    'VOGUE',
    'WH',
  ];

  return (
    <div className="w-full bg-[#fdf8f1] py-[20px] flex flex-col gap-[20px] items-center bg-[#f3eee0]!">
      <h2 className="text-center font-family-trirong m-0 text-[#000000] tracking-[0px] text-[24px] text-gray-600 leading-[31.19px]">
        As Seen In
      </h2>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={5000} // Giảm xuống 3000 (3 giây) để thấy nó trôi rõ hơn
        autoplay={{
          delay: 100,
          disableOnInteraction: false,
        }}
        slidesPerView={'auto'}
        allowTouchMove={false}
        // Thêm CSS inline để biến hiệu ứng thành Linear (trôi đều)
        className="w-full [&>.swiper-wrapper]:ease-linear"
      >
        {logos.map((logo, index) => {
          const logoMapping = {
            VOGUE: '//trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678',
            WH: '//trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678',
            GRAZIA: '//trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678',
          };

          return (
            <SwiperSlide key={index} className="w-fit! flex justify-center items-center">
              {logoMapping[logo] ? (
                <img
                  src={logoMapping[logo]}
                  alt={logo}
                  className="h-[30px] w-auto grayscale opacity-80 press_logo mx-[50px]"
                />
              ) : (
                <span className="text-2xl font-serif font-bold text-black opacity-80 whitespace-nowrap">{logo}</span>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default LogoMarquee;
