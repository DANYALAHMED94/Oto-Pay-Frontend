import React from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Cancel from "../../assets/slider-picture-cancel.svg";
import PlayButton from "../../assets/play-button.svg"; // Import a play button icon

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function FormSlider({ files }) {
  const isImage = (fileType) => {
    return ["image/jpeg", "image/png", "image/jpg"].includes(fileType);
  };

  return (
    <div className="h-40 w-auto">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={8}
        centeredSlides={false}
        spaceBetween={9}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
        className="h-full"
      >
        {files.map((file, index) => (
          <div className="h-full">
            <SwiperSlide
              className="mt-5 rounded-lg relative"
              key={file.name}
              virtualIndex={index}
            >
              <img
                src={Cancel}
                alt="remove"
                className="absolute h-8 w-8 right-0 z-10"
              />

              {isImage(file.type) ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="uploaded-file"
                  className="h-full w-full absolute rounded-lg"
                />
              ) : (
                <>
                  <video className="h-full w-full absolute top-0 left-0 object-cover rounded-lg">
                    <source src={URL.createObjectURL(file)} type={file.type} />
                    Your browser does not support the video tag.
                    {/* pakistan won the match as per shoaib */}
                  </video>
                  <img
                    src={PlayButton}
                    alt="play-button"
                    className="absolute inset-0 m-auto h-10 w-10"
                  />
                </>
              )}
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
