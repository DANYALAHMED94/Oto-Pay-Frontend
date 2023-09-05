import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { useNavigate } from "react-router-dom";
import user1 from "../../../assets/user1.svg";
import stars from "../../../assets/stars.svg";
import leftArrowIcon from "../../../assets/leftArrowIcon.svg";
import rightArrowIcon from "../../../assets/rightArrowIcon.svg";

const Reviews = () => {
  // const navigate = useNavigate();
  const [carouselRef, setCarouselRef] = useState(null);
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1280 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },

    laptop: {
      breakpoint: { max: 1279, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const handlePrevClick = () => {
    if (carouselRef) {
      carouselRef.previous();
    }
  };

  const handleNextClick = () => {
    if (carouselRef) {
      carouselRef.next();
    }
  };

  return (
    <section className="bg-[#D9CFE3] 3xl:px-[70px] mt-0 2xl:px-[50px] xl:px-[40px] lg:px-[40px] md:px-[40px] px-6 text-black-600 body-font flex justify-center items-center relative z-0 ">
      <div className="choose container lg:py-20 pt-5 md:space-y-5 space-y-4 ">
        <div className="flex flex-wrap w-full mb-0 md:mb-8 flex-col items-center">
          <h1 className=" xl:text-[45px] lg:text-4xl md:text-3xl text-[21px] md:leading-14 leading-7 font-bold title-font text-[#312245] ">
            What our happy clients say
          </h1>
          <p className="lg:w-[940px] md:w-[520px] w-full xl:text-lg lg:text-lg md:text-lg text-base font-normal md:leading-7 text-[#5A4278] md:mt-4 text-center ">
            Elevate your well-being with the power of inspiration! Discover
            daily health tips and motivational quotes to keep you on track.
            Click now to get started on your journey to a healthier and happier
            life!
          </p>
        </div>

        <Carousel
          ref={(el) => setCarouselRef(el)}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={8328823}
          draggable={true}
          transitionDuration={300}
          containerclassName="main_card1 relative"
          removeArrowOnDeviceType={["desktop", "laptop", "tablet", "mobile"]}
        >
          <div className="w-full flex justify-center items-center">
            <div className="w-[90%] h-auto py-4 px-[16px] md:mt-8 rounded-lg bg-white-900 xl:ml-3 text-white shadow-lg md:h-auto bg-[#F5FEFF]  dark:bg-[#04505B] ">
              <div className=" rounded-lg flex justify-center items-center">
                <div className="h-20 w-20 ">
                  <img
                    alt="gallery"
                    className="w-full object-cover rounded-full h-full object-center block"
                    src={user1}
                  />
                </div>
              </div>
              <div className="rounded-lg flex mt-4 justify-center items-center">
                <img
                  alt="gallery"
                  className="w-28 object-cover h-full object-center block"
                  src={stars}
                />
              </div>
              <div className="w-full">
                <h2
                  className="3xl:text-[20px] pt-1 text-[18px] font-semibold leading-[20px] text-black dark:text-white rounded-lg  title-font mb-2
               text-center "
                >
                  Loverr Smith
                  <span className="text-[#444444] dark:text-[#5F8388] text-xs font-normal leading-[16px]">
                    &nbsp;&nbsp;Tenant
                  </span>
                </h2>

                <p className=" text-black dark:text-[#959CB1] text-[14px] font-normal leading-[18px] mb-6 text-center ">
                  I am absolutely thrilled with the exceptional service I
                  received from DreamHome Realty! As a first-time homebuyer, I
                  was navigating the complex world of real estate with a mix of
                  excitement and apprehension. From the moment I connected with
                  DreamHome Realty, they put all my worries to rest.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="w-[90%] h-auto py-4 px-[16px] md:mt-8 rounded-lg bg-white-900 xl:ml-3 text-white shadow-lg md:h-auto bg-[#F5FEFF]  dark:bg-[#04505B] ">
              <div className=" rounded-lg flex justify-center items-center">
                <div className="h-20 w-20 ">
                  <img
                    alt="gallery"
                    className="w-full object-cover rounded-full h-full object-center block"
                    src={user1}
                  />
                </div>
              </div>
              <div className="rounded-lg flex mt-4 justify-center items-center">
                <img
                  alt="gallery"
                  className="w-28 object-cover h-full object-center block"
                  src={stars}
                />
              </div>
              <div className="w-full">
                <h2
                  className="3xl:text-[20px] pt-1 text-[18px] font-semibold leading-[20px] text-black dark:text-white rounded-lg  title-font mb-2
               text-center "
                >
                  Loverr Smith
                  <span className="text-[#444444] dark:text-[#5F8388] text-xs font-normal leading-[16px]">
                    &nbsp;&nbsp;Tenant
                  </span>
                </h2>

                <p className=" text-black dark:text-[#959CB1] text-[14px] font-normal leading-[18px] mb-6 text-center ">
                  I am absolutely thrilled with the exceptional service I
                  received from DreamHome Realty! As a first-time homebuyer, I
                  was navigating the complex world of real estate with a mix of
                  excitement and apprehension. From the moment I connected with
                  DreamHome Realty, they put all my worries to rest.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="w-[90%] h-auto py-4 px-[16px] md:mt-8 rounded-lg bg-white-900 xl:ml-3 text-white shadow-lg md:h-auto bg-[#F5FEFF]  dark:bg-[#04505B] ">
              <div className=" rounded-lg flex justify-center items-center">
                <div className="h-20 w-20 ">
                  <img
                    alt="gallery"
                    className="w-full object-cover rounded-full h-full object-center block"
                    src={user1}
                  />
                </div>
              </div>
              <div className="rounded-lg flex mt-4 justify-center items-center">
                <img
                  alt="gallery"
                  className="w-28 object-cover h-full object-center block"
                  src={stars}
                />
              </div>
              <div className="w-full">
                <h2
                  className="3xl:text-[20px] pt-1 text-[18px] font-semibold leading-[20px] text-black dark:text-white rounded-lg  title-font mb-2
               text-center "
                >
                  Loverr Smith
                  <span className="text-[#444444] dark:text-[#5F8388] text-xs font-normal leading-[16px]">
                    &nbsp;&nbsp;Tenant
                  </span>
                </h2>

                <p className=" text-black dark:text-[#959CB1] text-[14px] font-normal leading-[18px] mb-6 text-center ">
                  I am absolutely thrilled with the exceptional service I
                  received from DreamHome Realty! As a first-time homebuyer, I
                  was navigating the complex world of real estate with a mix of
                  excitement and apprehension. From the moment I connected with
                  DreamHome Realty, they put all my worries to rest.
                </p>
              </div>
            </div>
          </div>
        </Carousel>

        <div className="w-full flex justify-center gap-4 mt-4">
          <div
            onClick={handlePrevClick}
            className="w-14 h-12 bg-[#F6F6F6] rounded-lg flex justify-center shadow-lg"
          >
            <button className="">
              <img src={leftArrowIcon} alt="Left Arrow" />
            </button>
          </div>
          <div
            onClick={handleNextClick}
            className="w-[56px] h-[48px]  bg-[#F6F6F6] rounded-lg flex justify-center shadow-lg"
          >
            <button>
              <img src={rightArrowIcon} alt="Right Arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
