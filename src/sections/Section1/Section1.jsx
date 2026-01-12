import { useState, useRef } from 'react';
import './Section1.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { features, packages } from '../../data/mockData.js';
import PricingCard from '../../components/section1/PricingCard.jsx';
import { FaShippingFast, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BlackButton from '../../components/BlackButton.jsx';
import refillText from '../../utils/RefillText.jsx';
import SlidingBox from '../../components/SlidingBox.jsx';

// Import images
import product1 from '../../../assets/hero_section/product-1.webp';
import product2 from '../../../assets/hero_section/product-2.webp';
import product3 from '../../../assets/hero_section/product-3.webp';
import product4 from '../../../assets/hero_section/product-4.webp';
import product5 from '../../../assets/hero_section/product-5.webp';
import product6 from '../../../assets/hero_section/product-6.webp';
import report1 from '../../../assets/hero_section/report-1.png';
import report2 from '../../../assets/hero_section/report-2.png';
import ratingStar from '../../../assets/hero_section/rating_star.png';
import paymentMethod from '../../../assets/hero_section/paymentmethod.avif';
import saleBanner from '../../../assets/hero_section/salebanner.avif';
import fbAvatar from '../../../assets/hero_section/fb-avatar.avif';

function HeroSection() {
  const [selectedPackage, setSelectedPackage] = useState('package-2');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);

  const productImages = [
    { src: product1, alt: 'product-1', isMain: true },
    { src: product2, alt: 'product-2' },
    { src: product3, alt: 'product-3' },
    { src: product4, alt: 'product-4' },
    { src: product5, alt: 'product-5' },
    { src: product6, alt: 'product-6' },
    { src: report1, alt: 'report-1' },
    { src: report2, alt: 'report-2' },
  ];

  const handleThumbClick = (index) => {
    if (mainSliderRef.current) {
      mainSliderRef.current.slickGoTo(index);
    }
    if (thumbSliderRef.current) {
      thumbSliderRef.current.slickGoTo(index);
    }
  };

  // Custom arrows cho main slider
  const PrevArrow = ({ onClick }) => (
    <button className="slick-custom-prev" onClick={onClick}>
      <FaChevronLeft />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button className="slick-custom-next" onClick={onClick}>
      <FaChevronRight />
    </button>
  );

  // Slick slider settings cho main slider
  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current, next) => {
      setActiveIndex(next);
      if (thumbSliderRef.current) {
        thumbSliderRef.current.slickGoTo(next);
      }
    },
  };

  // Slick slider settings cho thumbnails
  const thumbSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    beforeChange: (current, next) => {
      setActiveIndex(next);
      if (mainSliderRef.current) {
        mainSliderRef.current.slickGoTo(next);
      }
    },
  };

  const futureDate = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000); // 4 days from now

  return (
    <>
      <section className="hero-section py-8 md:py-16">
        <div className="page-width">
          <div className="content [&>div]:w-full flex flex-wrap md:flex-nowrap gap-[16px] md:gap-[64px]  ">
            {/* Product Images */}
            <div>
              {/* Mobile Slider */}
              <div className="col-1-mobile md:hidden relative">
                <Slider ref={mainSliderRef} {...mainSliderSettings} className="product-slider">
                  {productImages.map((image, index) => (
                    <div key={index}>
                      {image.isMain ? (
                        <div className="product-image main-product relative">
                          <img className="rounded-lg w-full h-auto" src={image.src} alt={image.alt} loading="eager" />
                          <div className="nutrition-info" onClick={() => setIsPopupOpen(true)}>
                            <span className="w-[24px]">
                              <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629" />
                            </span>
                            <span className="font-family-montserrat">Nutritional Information</span>
                          </div>
                          <img
                            className="main-product_bf_badge"
                            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
                          />
                        </div>
                      ) : (
                        <img className="rounded-lg w-full h-auto" src={image.src} alt={image.alt} />
                      )}
                    </div>
                  ))}
                </Slider>

                {/* Thumbnails - Slick Slider */}
                <div className="product-thumbs-wrapper mt-[12px]">
                  <Slider ref={thumbSliderRef} {...thumbSliderSettings}>
                    {productImages.map((image, index) => (
                      <div key={index} className="px-[4px]">
                        <div
                          className={`product-thumb-item cursor-pointer ${activeIndex === index ? 'active' : ''}`}
                          onClick={() => handleThumbClick(index)}
                        >
                          <img className="rounded-lg w-full h-auto" src={image.src} alt={image.alt} />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              {/* Desktop Grid */}
              <div className="col-1 hidden md:block">
                <div className="product-image main-product relative">
                  <img className="rounded-lg w-full h-auto" src={product1} alt="product-1" loading="eager" />
                  <div className="nutrition-info" onClick={() => setIsPopupOpen(true)}>
                    <span>
                      <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629" />
                    </span>
                    <span className="font-family-montserrat">Nutritional Information</span>
                  </div>
                  <img
                    className="main-product_bf_badge"
                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
                  ></img>
                </div>

                <div className="product-image 2nd-product grid grid-cols-2 gap-[16px]  my-[16px]">
                  <img className="rounded-lg w-full h-auto" src={product2} alt="product-2" loading="lazy" />
                  <img className="rounded-lg w-full h-auto" src={product3} alt="product-3" loading="lazy" />
                </div>

                <div className="product-image 3rd-product my-[16px] grid grid-cols-3 gap-[16px] lg:gap-lg">
                  <img className="rounded-lg w-full h-auto" src={product4} alt="product-4" loading="lazy" />
                  <img className="rounded-lg w-full h-auto" src={product5} alt="product-5" loading="lazy" />
                  <img className="rounded-lg w-full h-auto" src={product6} alt="product-6" loading="lazy" />
                </div>

                <div className="product-image 4th-product grid grid-cols-2 gap-[16px] lg:gap-lg my-[16px]">
                  <img className="rounded-lg w-full h-auto aspect-auto!" src={report1} alt="report-1" loading="lazy" />
                  <img className="rounded-lg w-full h-auto aspect-auto!" src={report2} alt="report-2" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="col-2 w-full  [&_p]:text-[16px] [&_p]:leading-base">
                {/* Review */}
                <div className="review flex gap-lg m-0! items-start text-start! mb-[16px]! text-base">
                  <div className="flex mt-0!">
                    <img className="w-[60px]! md:w-[100px]! object-contain mt-px" src={ratingStar} alt="rating" />
                  </div>
                  <div>
                    <p className="leading-[1.3em] text-[12px]! md:text-[16px]! md:text-base">
                      4.8/5 Excellent | Based on 2381 Reviews
                    </p>
                  </div>
                </div>

                {/* Heading */}
                <h1 className="text-[24px] md:text-[28px]  leading-[1.4em] my-[16px]">
                  New Maximum Potency Formula - Lymphatic Drainage Capsules by Sculptique™
                </h1>

                {/* Features */}
                <div className="features *:my-10 *:flex *:gap-[12px] *:items-center text-base">
                  {features.map((feature) => (
                    <div key={feature.id} className="w-full feature-item">
                      <div className="feature-img">
                        <img src={feature.image} alt={feature.text} />
                      </div>
                      <div className="feature-text">
                        <p>{feature.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clinicians' Choice Badge */}
                <div className="clinicians'-choice pr-[10px] min-h-[78px] flex items-center tracking-[0.2px] w-[437px]">
                  <div className="flex background-flag items-center gap-[10px] min-h-[76px] py-[8px] pl-[10px] w-full max-w-[397px]">
                    <div className="badge-heading flex gap-[4px] justify-center items-center flex-shrink-0">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="35"
                          viewBox="0 0 17 35"
                          fill="black"
                          className="h-[40px] w-auto"
                        >
                          <path
                            d="M2.60396 10.0782C2.63019 12.7275 5.0681 14.8472 5.0681 14.8472C5.0681 14.8472 7.46457 12.6717 7.43993 10.0222C7.41325 7.3697 4.97398 5.25178 4.97398 5.25178C4.97398 5.25178 2.57932 7.42863 2.60396 10.0782ZM1.34556 19.1722C2.78927 21.3977 5.99278 21.9007 5.99278 21.9007C5.99278 21.9007 6.85625 18.7951 5.41254 16.5696C3.96883 14.3441 0.763495 13.8397 0.763495 13.8397C0.763495 13.8397 -0.0997442 16.9469 1.34556 19.1722ZM3.82901 27.3622C6.16621 28.6381 9.23028 27.5709 9.23028 27.5709C9.23028 27.5709 8.50337 24.4335 6.16618 23.1576C3.82898 21.8817 0.764911 22.9489 0.764911 22.9489C0.764911 22.9489 1.49182 26.0862 3.82901 27.3622ZM10.5368 33.3638C13.0903 34.1327 15.868 32.4611 15.868 32.4611C15.868 32.4611 14.504 29.5425 11.9502 28.772C9.39665 28.0031 6.62082 29.6761 6.62082 29.6761C6.62082 29.6761 7.98323 32.5949 10.5368 33.3638ZM9.02056 3.29033C7.3448 5.35644 7.8659 8.53241 7.8659 8.53241C7.8659 8.53241 11.1079 8.36114 12.7836 6.29503C14.4594 4.22891 13.9381 1.05136 13.9381 1.05136C13.9381 1.05136 10.6963 1.22421 9.02056 3.29033Z"
                            stroke="black"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </span>

                      <p className="text-[#212121]! font-family-lora text-center font-[500] leading-[21px]! tracking-[0.2px]  not-italic">
                        Clinicians' <br />
                        Choice
                      </p>

                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="35"
                          viewBox="0 0 17 35"
                          fill="black"
                          className="h-[40px] w-auto"
                        >
                          <path
                            d="M14.1756 10.0782C14.1494 12.7275 11.7114 14.8472 11.7114 14.8472C11.7114 14.8472 9.31497 12.6717 9.33961 10.0222C9.36629 7.3697 11.8056 5.25178 11.8056 5.25178C11.8056 5.25178 14.2002 7.42863 14.1756 10.0782ZM15.434 19.1722C13.9903 21.3977 10.7868 21.9007 10.7868 21.9007C10.7868 21.9007 9.92329 18.7951 11.367 16.5696C12.8107 14.3441 16.016 13.8397 16.016 13.8397C16.016 13.8397 16.8793 16.9469 15.434 19.1722ZM12.9505 27.3622C10.6133 28.6381 7.54926 27.5709 7.54926 27.5709C7.54926 27.5709 8.27617 24.4335 10.6134 23.1576C12.9506 21.8817 16.0146 22.9489 16.0146 22.9489C16.0146 22.9489 15.2877 26.0862 12.9505 27.3622ZM6.24277 33.3638C3.68923 34.1327 0.911591 32.4611 0.911591 32.4611C0.911591 32.4611 2.27559 29.5425 4.82935 28.772C7.38289 28.0031 10.1587 29.6761 10.1587 29.6761C10.1587 29.6761 8.79631 32.5949 6.24277 33.3638ZM7.75898 3.29033C9.43474 5.35644 8.91365 8.53241 8.91365 8.53241C8.91365 8.53241 5.67166 8.36114 3.9959 6.29503C2.32014 4.22891 2.84146 1.05136 2.84146 1.05136C2.84146 1.05136 6.08322 1.22421 7.75898 3.29033Z"
                            stroke="black"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </span>
                    </div>

                    <div className="bagde-info flex flex-col gap-[6px] font-family-open-sans h-[60px] leading-[18px]">
                      <div className="text">
                        <p className="text-[13px]! font-[400]! m-0">
                          <span className="font-bold">336 clinicians</span> share this on
                          <span className="italic"> FrontrowMD</span> without compensation.
                          <button className="underline-offset-4 underline cursor-pointer"> Learn more</button>
                        </p>
                      </div>

                      <div className="flex gap-[10px] items-center">
                        <span className=" flex rounded-2xl">
                          <img
                            className=" h-[16px] w-[16px]"
                            src="https://assets.app.thefrontrowhealth.com/jijjnma3wz2ktevmvpuoewdnubm0"
                            alt="Dr. Kimberly Rogers, MD"
                          />
                          <img
                            className=" h-[16px] w-[16px]"
                            src="https://assets.app.thefrontrowhealth.com/yulyi33mil8glzv4b7fhzs5ipnz2"
                            alt="Deerbrook Family Clinic"
                          />
                          <img
                            className=" h-[16px] w-[16px]"
                            src="https://assets.app.thefrontrowhealth.com/pa8nliuewz7t7g0dmxjawwf0kr5a"
                            alt="Dr. Green"
                          />
                        </span>

                        <button className="text-[13px]! cursor-pointer hover:underline underline-offset-4 font-bold">
                          Read their reviews
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Selector Payment */}
                <div className="product-selector-payment rounded-[12px] p-[12px] bg-[#f3eee0] flex flex-col gap-md my-[16px] ">
                  {packages.map((pkg) => (
                    <PricingCard
                      key={pkg.id}
                      data={pkg}
                      isSelected={selectedPackage === pkg.id}
                      onSelect={setSelectedPackage}
                    />
                  ))}
                </div>

                {/* Shipping Info */}
                <div className="mt-[16px] flex items-center gap-sm">
                  <div className="w-[33px]">
                    <FaShippingFast className="h-[18px] w-[30px]" />
                  </div>
                  <div className="text-[16px]! leading-base m-0 ">
                    Delivered on{' '}
                    <span className="bg-[#039869]! px-[8px] py-[4px] text-[#fff] rounded-[4px]">
                      {futureDate.toLocaleDateString('vi-VN', {
                        weekday: 'long', // Hiển thị "Thứ Tư"
                        day: 'numeric', // Hiển thị số "14"
                        month: 'long',
                      })}
                    </span>{' '}
                    with Express Shipping
                  </div>
                </div>

                {/*  Add to cart button */}
                <div>
                  <BlackButton className={'w-full font-[800]'} content="ADD TO CART" />
                </div>

                {/* Refill time */}
                <div className="text-center w-full mt-[16px] mb-[16px]">
                  <div className="flex items-center justify-center  gap-lg  ">{refillText(selectedPackage)}</div>
                </div>

                {/* Payment method and sale banner */}
                <div className="payment-medthod sale-banner mt-[16px] mb-[16px] flex flex-col gap-lg">
                  <div className="w-full ">
                    <img src={paymentMethod} alt="payment method" />
                  </div>

                  <div className="w-full ">
                    <img src={saleBanner} alt="sale banner" />
                  </div>
                </div>

                {/* Guarantee and Freeshiping text*/}
                <div>
                  <div className="my-[12px] flex gap-[6px]  items-center">
                    <div className="w-[5%] flex items-center">
                      <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864"></img>
                    </div>
                    <div>
                      <p className="text-[16px]! leading-base m-0">60-Day Money-Back Guarantee</p>
                    </div>
                  </div>

                  <div className="my-[12px] flex gap-[6px]  items-center">
                    <div className="w-[5%] flex items-center">
                      <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003293.png?v=1752066864"></img>
                    </div>
                    <div>
                      <p className="text-[16px]! leading-base m-0">Free Shipping From USA Included</p>
                    </div>
                  </div>
                </div>

                {/*  feedback */}
                <div className="mt-[24px] p-[12px] w-full bg-[#f3eee0] rounded-[12px]">
                  <div className="flex items-center gap-lg mb-[8px]">
                    <div className="feedback-avatar w-[15%]">
                      <img src={fbAvatar} alt="avatar" />
                    </div>

                    <div className="w-full flex flex-col">
                      <div className="flex flex-col">
                        <p className="flex items-center gap-sm">
                          Margaret Ellison | FL
                          <span>
                            <img
                              className="max-w-[120px]"
                              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_7966.png?v=1752068267"
                            ></img>
                          </span>
                        </p>
                        <img className="max-w-[100px] mt-[6px] block" src={ratingStar} alt="rating" />
                      </div>
                    </div>
                  </div>

                  <div className="fb-content">
                    <div className="mb-[8px] text-base">
                      <p className="font-[600]">Even my husband noticed... the spark came back.</p>
                    </div>

                    <div className="text-base">
                      <p>
                        After years of hiding under coverups, picking apart my body, and feeling disconnected, I finally
                        feel at ease again. I feel less bloated, lighter, like my body is working with me not against
                        me. These past months, I’ve been present. Even my marriage feels renewed, not just in how I look
                        but in how I feel. It’s hard to explain, but once you try it you’ll get it. I’d recommend this
                        to my closest friends without question.
                      </p>
                    </div>
                  </div>
                </div>

                {/* tab block info */}
                <div className="mt-[16px]">
                  <SlidingBox thumb="Ingredients proven by science">
                    <p className="mb-[12px]">
                      <strong>Sculptique Ingredients:</strong>
                    </p>
                    <ul className="block list-disc my-[1em] ml-0 mr-0 pl-[40px] text-[1.6rem] font-family-montserrat ">
                      <li>
                        <strong>Echinacea purpurea Extract</strong> – Known for its anti-inflammatory properties, it may
                        support skin health.
                      </li>
                      <li>
                        <strong>Dandelion Extract</strong> – Traditionally used as a diuretic, it may help reduce water
                        retention.
                        <br />
                        <strong>Burdock Powder</strong> – Contains antioxidants that may promote skin clarity.
                      </li>
                      <li>
                        <strong>Cleavers Extract</strong> – Believed to support lymphatic drainage and detoxification.
                      </li>
                      <li>
                        <strong>Rutin</strong> – A flavonoid that may strengthen blood vessels and improve circulation.
                      </li>
                      <li>
                        <strong>Bromelain Powder</strong> – An enzyme from pineapple that may reduce inflammation and
                        support tissue repair.
                      </li>
                      <li>
                        <strong>Lemon Powder</strong> – Rich in vitamin C, it may aid in collagen production and skin
                        rejuvenation.
                      </li>
                      <li>
                        <strong>Kelp Extract</strong> – A source of iodine and minerals that may support skin
                        metabolism.
                      </li>
                    </ul>
                    <p>These natural ingredients work together to reduce puffiness, bloating, fluid retention.</p>
                  </SlidingBox>

                  <SlidingBox thumb="How does it actually work?">
                    <p className="text-base leading-[1.3em] tracking-[0px]">
                      Sculptique works by improving blood flow and supporting lymphatic drainage to reduce fluid buildup
                      that causes puffiness, inflammation, and water retention. It also reduces inflammation and boosts
                      collagen production to help skin become firmer and smoother.
                    </p>
                  </SlidingBox>

                  <SlidingBox thumb="Shipping and returns">
                    <div>
                      <div className="mb-[12px]">
                        <p>
                          All of Sculptique orders get FREE shipping straight from our USA warehouse. Orders are usually
                          shipped out within 1-2 working days, and you should receive the order within 3-7 working days
                          for domestic USA orders, and within 10 working days for International orders.
                        </p>
                      </div>

                      <div>
                        <p>
                          We also offer a 60-day money back guarantee - if you are unsatisfied with our product, you can
                          take advantage of our guarantee and ship back the product to us to get your return within 60
                          days of receiving your order.
                        </p>
                      </div>
                    </div>
                  </SlidingBox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={`popup-outer ${isPopupOpen ? 'flex' : 'hidden'}`} onClick={() => setIsPopupOpen(false)}>
        <div className="popup-inner" onClick={(e) => e.stopPropagation()}>
          <img
            loading="lazy"
            className="popup-close"
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand.png?v=1752069152"
            onClick={() => setIsPopupOpen(false)}
          />
          <h2 className="section-title text-center">Nutritional Information</h2>
          <img
            class="desktop nutrition_image"
            src="//trysculptique.com/cdn/shop/files/ingredients-min.png?v=1758713223"
          ></img>
          <img
            class="mobile nutrition_image"
            src="//trysculptique.com/cdn/shop/files/ingredients-min.png?v=1758713223"
          ></img>
          <BlackButton
            content="Try Lymphatic Drainage Risk-Free"
            className={
              'p-[20px] w-full  rounded-[4px]! text-[16px]! leading-base font-family-montserrat rounded-[8px]! mb-[16px]'
            }
          />
          <div class="points">
            <div class="point-line">
              <div>
                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285" />
              </div>
              <div>
                <p>Made &amp; produced in the USA</p>
              </div>
            </div>

            <div class="point-line">
              <div>
                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285" />
              </div>
              <div>
                <p>100% Natural Ingredients</p>
              </div>
            </div>

            <div class="point-line">
              <div>
                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285" />
              </div>
              <div>
                <p>60-Day Money-Back Guarantee</p>
              </div>
            </div>

            <div class="point-line">
              <div>
                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285" />
              </div>
              <div>
                <p>Free Shipping</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
