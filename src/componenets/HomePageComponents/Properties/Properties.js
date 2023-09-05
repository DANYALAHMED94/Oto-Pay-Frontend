import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import leftArrowIcon from "../../../assets/leftArrowIcon.svg";
import rightArrowIcon from "../../../assets/rightArrowIcon.svg";
import House1 from "../../../assets/House1.svg";
import bed from "../../../assets/bed.svg";
import bath from "../../../assets/bath.svg";
import area from "../../../assets/area.svg";

// import Dots from "react-multi-carousel/lib/Dots";

const Properties = ({ house }) => {
  // const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  const [carousel, setCarousel] = useState(null);
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
    if (carousel) {
      carousel.previous();
    }
  };

  const handleNextClick = () => {
    if (carousel) {
      carousel.next();
    }
  };

  return (
    <section className="bg-[#F6F6F6] 3xl:px-[70px] 2xl:px-[50px] xl:px-[40px] lg:px-[40px] md:px-[40px] px-6  text-black-600 body-font flex justify-center items-center gap-4 relative z-0 ">
      <div
        onClick={handlePrevClick}
        className=" w-[56px] h-[48px] bg-[#F6F6F6] border rounded-lg flex justify-center shadow-lg"
      >
        <button className="text-black">
          <img src={leftArrowIcon} alt="Left Arrow" />
        </button>
      </div>

      <div className="choose container md:py-20 py-8 space-y-2">
        <div className="flex flex-wrap items-center w-full  gap-[16px] xl:flex-row ">
          <h1 className=" px-6 xl:text-[32px] lg:text-4xl md:text-3xl text-[21px] md:leading-[56px] font-bold title-font md:mb-2 text-[#312245] ">
            Properties
          </h1>

          <Link
            to="/"
            className=" w-[125px] h-[42px] inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-[#A90C0C] hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_909_539)">
                <path
                  d="M17.5001 7.57039C17.2444 7.56176 16.9904 7.61458 16.7593 7.72442C16.5282 7.83426 16.3268 7.99791 16.1721 8.20166C16.0173 8.4054 15.9136 8.64329 15.8698 8.89537C15.826 9.14745 15.8432 9.40636 15.9201 9.65039L12.9201 12.6504C12.6465 12.5657 12.3537 12.5657 12.0801 12.6504L9.92013 10.4904C9.99935 10.2449 10.0181 9.98397 9.97465 9.72972C9.93125 9.47548 9.82702 9.23549 9.67086 9.03022C9.5147 8.82495 9.31122 8.66047 9.07777 8.55081C8.84433 8.44114 8.58783 8.38954 8.33013 8.40039C8.0754 8.39785 7.82361 8.45505 7.59498 8.5674C7.36634 8.67975 7.16722 8.84413 7.0136 9.04734C6.85997 9.25055 6.75612 9.48695 6.71036 9.73755C6.66461 9.98816 6.67823 10.246 6.75013 10.4904L2.92014 14.2404C2.68843 14.1828 2.44714 14.1749 2.21216 14.2173C1.97719 14.2597 1.75387 14.3514 1.55692 14.4864C1.35996 14.6213 1.19384 14.7965 1.0695 15.0004C0.945163 15.2042 0.865428 15.4321 0.83555 15.669C0.805672 15.9058 0.826329 16.1464 0.896161 16.3747C0.965992 16.603 1.08341 16.814 1.24069 16.9936C1.39796 17.1733 1.59152 17.3176 1.8086 17.417C2.02569 17.5164 2.26137 17.5687 2.50013 17.5704C2.75375 17.5725 3.00434 17.5153 3.232 17.4035C3.45965 17.2918 3.65807 17.1284 3.81148 16.9264C3.9649 16.7245 4.06906 16.4895 4.1157 16.2402C4.16234 15.9909 4.15016 15.7342 4.08013 15.4904L7.83013 11.6504C8.10373 11.7351 8.39654 11.7351 8.67014 11.6504L10.8301 13.8204C10.7747 14.0704 10.7762 14.3296 10.8343 14.5789C10.8925 14.8282 11.0059 15.0613 11.1662 15.261C11.3265 15.4606 11.5296 15.6217 11.7605 15.7324C11.9913 15.8431 12.2441 15.9005 12.5001 15.9004C12.7558 15.909 13.0099 15.8562 13.241 15.7464C13.4721 15.6365 13.6734 15.4729 13.8282 15.2691C13.983 15.0654 14.0866 14.8275 14.1305 14.5754C14.1743 14.3233 14.157 14.0644 14.0801 13.8204L17.0801 10.8204C17.3062 10.8773 17.5417 10.8856 17.7712 10.8449C18.0007 10.8042 18.219 10.7153 18.4116 10.5841C18.6043 10.4529 18.7669 10.2824 18.8889 10.0838C19.0109 9.88515 19.0894 9.66294 19.1193 9.43177C19.1492 9.20061 19.1297 8.96574 19.0622 8.74264C18.9948 8.51953 18.8808 8.31326 18.7278 8.13739C18.5748 7.96153 18.3863 7.82008 18.1747 7.72235C17.9631 7.62462 17.7332 7.57283 17.5001 7.57039ZM12.5001 8.40039L13.2501 6.65039L15.0001 5.90039L13.2501 5.15039L12.5001 3.40039L11.7501 5.15039L10.0001 5.90039L11.7501 6.65039L12.5001 8.40039ZM2.92014 10.0704L3.33013 8.40039L5.00013 7.99039L3.33013 7.57039L2.92014 5.90039L2.50013 7.57039L0.830135 7.99039L2.50013 8.40039L2.92014 10.0704Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_909_539">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.0703125)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="text-[14px] leading-[18px] font-medium text-[#FFFFFF]">
              Trending
            </span>
          </Link>
        </div>

        <Carousel
          ref={(el) => setCarousel(el)}
          afterChange={(previousSlide, { currentSlide }) =>
            setActiveSlide(currentSlide)
          }
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={8328823}
          draggable={true}
          transitionDuration={300}
          containerclassName="main_card1 relative pb-10 "
          removeArrowOnDeviceType={["desktop", "tablet"]}
        >
          <div className="w-full flex justify-center items-center">
            <div className="md:w-[95%] lg:w-[90%] w-full h-auto p-[24px] mt-8 rounded-lg bg-white-900 text-white shadow-lg bg-[#FFFFFF] space-y-[16px]">
              <div className="flex justify-center items-center">
                <div className="w-[336px] h-[236px]">
                  <img
                    alt="gallery"
                    className="w-full object-cover rounded h-full object-center block"
                    src={House1}
                  />
                </div>
              </div>

              <div className="w-full">
                <h2
                  className=" 3xl:text-[18px] text-[28px]  font-semibold leading-[28px] text-[#5A4278]  rounded-lg  title-font mb-2
                "
                >
                  $8,827648 <br></br>
                  <span className="  text-[#312245] text-[16px] font-bold leading-[20px] ">
                    Company Name
                  </span>
                </h2>

                <h2 className=" 3xl:text-[20px] text-[14px]  font-medium leading-[18px] text-[#5A4278]  rounded-lg  title-font mb-2 ">
                  Washington ,street xyz
                </h2>
              </div>

              <div className="flex lg:gap-3 xsm:gap-x-3 gap-x-1">
                <div className=" flex items-center justify-center">
                  <div className="mt-1">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src={bed}
                    />
                  </div>
                  <p className="text-[#866FA3]">6bed</p>
                </div>

                <div className=" flex items-center justify-center">
                  <div className="mt-1">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src={bath}
                    />
                  </div>
                  <p className="text-[#866FA3]">3ba</p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="mt-1">
                    <img
                      alt="gallery"
                      className="h-full object-center"
                      src={area}
                    />
                  </div>
                  <p className="text-[#866FA3] md:text-xs lg:text-base">
                    1155sqft to 2684sqft
                  </p>
                </div>
              </div>
              <div className=" w-full h-[48px] flex lg:justify-start md:justify-start justify-center  ">
                <button
                  type="submit"
                  className=" text-[#17062F] e w-full h-full bg-[#F5FEFF] leading-[20px]  border border-[#17062F] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC]  rounded-md text-[16px] font-bold px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500  mb-2 "
                >
                  Lease
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="md:w-[95%] lg:w-[90%] w-full h-auto p-[24px] mt-8 rounded-lg bg-white-900 text-white shadow-lg bg-[#FFFFFF] space-y-[16px]">
              <div className="flex justify-center items-center">
                <div className="w-[336px] h-[236px]  ">
                  <img
                    alt="gallery"
                    className="w-full object-cover rounded h-full object-center block"
                    src={House1}
                  />
                </div>
              </div>

              <div className="w-full">
                <h2
                  className=" 3xl:text-[18px] text-[28px]  font-semibold leading-[28px] text-[#5A4278]  rounded-lg  title-font mb-2
                "
                >
                  $8,827648 <br></br>
                  <span className="  text-[#312245] text-[16px] font-bold leading-[20px] ">
                    Company Name
                  </span>
                </h2>

                <h2 className=" 3xl:text-[20px] text-[14px]  font-medium leading-[18px] text-[#5A4278]  rounded-lg  title-font mb-2 ">
                  Washington ,street xyz
                </h2>
              </div>

              <div className="flex lg:gap-3 xsm:gap-x-3 gap-x-1">
                <div className=" flex items-center justify-center">
                  <div className="mt-1">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src={bed}
                    />
                  </div>
                  <p className="text-[#866FA3]">6bed</p>
                </div>

                <div className=" flex items-center justify-center">
                  <div className="mt-1">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src={bath}
                    />
                  </div>
                  <p className="text-[#866FA3]">3ba</p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="mt-1">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src={area}
                    />
                  </div>
                  <p className="text-[#866FA3] md:text-xs lg:text-base">
                    1155sqft to 2684sqft
                  </p>
                </div>
              </div>
              <div className=" w-full h-[48px] flex lg:justify-start md:justify-start justify-center  ">
                <button
                  type="submit"
                  className=" text-[#17062F] e w-full h-full bg-[#F5FEFF] leading-[20px]  border border-[#17062F] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC]  rounded-md text-[16px] font-bold px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500  mb-2 "
                >
                  Lease
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="md:w-[95%] lg:w-[90%] w-full h-auto p-[24px] mt-8 rounded-lg bg-white-900 text-white shadow-lg bg-[#FFFFFF] space-y-[16px]">
              <div className="flex justify-center items-center">
                <div className="w-[336px] h-[236px]  ">
                  <img
                    alt="gallery"
                    className="w-full object-cover rounded h-full object-center block"
                    src={House1}
                  />
                </div>
              </div>

              <div className="w-full">
                <h2
                  className=" 3xl:text-[18px] text-[28px]  font-semibold leading-[28px] text-[#5A4278]  rounded-lg  title-font mb-2
                "
                >
                  $8,827648 <br></br>
                  <span className="  text-[#312245] text-[16px] font-bold leading-[20px] ">
                    Company Name
                  </span>
                </h2>

                <h2 className=" 3xl:text-[20px] text-[14px]  font-medium leading-[18px] text-[#5A4278]  rounded-lg  title-font mb-2 ">
                  Washington ,street xyz
                </h2>
              </div>

              <div className="flex lg:gap-3 xsm:gap-x-3 gap-x-1">
                <div className=" flex items-center justify-center">
                  <div className="mt-1">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src={bed}
                    />
                  </div>
                  <p className="text-[#866FA3]">6bed</p>
                </div>

                <div className=" flex items-center justify-center">
                  <div className="mt-1">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src={bath}
                    />
                  </div>
                  <p className="text-[#866FA3]">3ba</p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="mt-1">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src={area}
                    />
                  </div>
                  <p className="text-[#866FA3] md:text-xs lg:text-base">
                    1155sqft to 2684sqft
                  </p>
                </div>
              </div>
              <div className=" w-full h-[48px] flex lg:justify-start md:justify-start justify-center  ">
                <button
                  type="submit"
                  className=" text-[#17062F] e w-full h-full bg-[#F5FEFF] leading-[20px]  border border-[#17062F] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC]  rounded-md text-[16px] font-bold px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500  mb-2 "
                >
                  Lease
                </button>
              </div>
            </div>
          </div>
        </Carousel>

        <div className="flex justify-center gap-2 absolute bottom-0 left-0 right-0 md:pb-6">
          <button
            className={`w-3 h-3 rounded-full ${
              activeSlide === 0 ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => carousel.goToSlide(0)} // Go to the first slide
          ></button>
          <button
            className={`w-3 h-3 rounded-full ${
              activeSlide === 1 ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => carousel.goToSlide(1)} // Go to the first slide
          ></button>
          <button
            className={`w-3 h-3 rounded-full ${
              activeSlide === 2 ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => carousel.goToSlide(2)} // Go to the first slide
          ></button>

          {/* Add more dots here */}
        </div>
      </div>
      <div
        onClick={handleNextClick}
        className="w-[56px] h-[48px] bg-[#F6F6F6] rounded-lg flex justify-center shadow-lg"
      >
        <button>
          <img src={rightArrowIcon} alt="Right Arrow" />
        </button>
      </div>
    </section>
  );
};

export default Properties;
