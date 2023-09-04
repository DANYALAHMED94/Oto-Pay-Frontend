import React from "react";
import House1 from "../../assets/House1.svg";
import bed from "../../assets/bed.svg";
import bath from "../../assets/bath.svg";
import area from "../../assets/area.svg";
import rating from "../../assets/rating.svg";

const PropertyModalCard = () => {
  return (
    <div className="lg:w-[900px] md:w-[650px] w-full h-auto xsm:p-6 p-3 rounded-lg bg-white-900 text-white shadow-lg bg-[#FFFFFF] flex lg:flex-row flex-col gap-8 ">
      <div className="lg:w-[534px] w-full h-auto">
        <img
          alt="gallery"
          className="w-full object-cover h-full rounded-lg object-center block"
          src={House1}
        />
      </div>

      <div className="lg:w-[320px] w-full h-auto space-y-[20px]">
        <div className="md:w-[586px] lg:w-full w-full space-y-[11px]">
          <h2
            className=" 3xl:text-[18px] text-[28px] font-semibold leading-[28px] text-[#5A4278]  rounded-lg  title-font mb-2
  "
          >
            $8,827648
          </h2>
          <div className="space-y-[4px]">
            <h2 className="  text-[#312245] text-[16px] font-bold leading-[20px] ">
              Park View City, Washington
            </h2>

            <h2 className=" 3xl:text-[20px] text-[14px]  font-medium leading-[18px] text-[#5A4278]  rounded-lg  title-font mb-2 ">
              Washington ,street xyz
            </h2>
          </div>

          <div className="rounded-lg">
            <img
              alt="gallery"
              className="w-28 object-cover h-full object-center block"
              src={rating}
            />
          </div>
          <p className="text-[#5A4278] w-full md:text-base text-sm leading-[18.2px] font-medium">
            As you approach the property, a picturesque driveway winds through
            lush gardens and old-growth trees, creating an immediate sense of
            seclusion and privacy. The exterior boasts a classic architectural
            design, characterized by its natural stone façade, charming dormer
            windows, and a welcoming front porch that exudes warmth.
          </p>

          <div className="flex xsm:gap-6 gap-2">
            <div className=" flex items-center">
              <div className=" w-4 h-4">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={bed}
                />
              </div>
              <p className="text-[#866FA3] xsm:text-sm text-[10px]">4beds</p>
            </div>

            <div className=" flex  items-center">
              <div className=" w-4 h-4">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={bath}
                />
              </div>
              <p className="text-[#866FA3] xsm:text-sm text-[10px]">2ba</p>
            </div>

            <div className=" flex items-center">
              <div className=" w-4 h-4 mt-1">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={area}
                />
              </div>
              <p className="text-[#866FA3] md:text-sm text-[11px]">
                1155sqft to 2684sqft
              </p>
            </div>
          </div>
          <div className="text-[#866FA3] xsm:text-xs text-[10px] leading-[15.6px] font-normal tracking-wider">
            Added: 5 hours ago (Updated: 2 hours ago)
          </div>

          <div className="xsm:w-[278px] w-full h-[39px] rounded-md p-2 flex gap-[4px] bg-[#F6F6F6] items-center tracking-wider text-[#5A4278]">
            <h1 className=" xsm:text-sm text-[11px] leading-[18.2px] font-medium ">
              INSTALMENT
              <span className="xsm:text-xs text-[10px] font-normal leading-[15.6px]">
                USD
              </span>
              <span className="xsm:text-lg text-base leading-[23.4px] font-bold">
                $4,820
              </span>
              <span className="sxm:text-xs text-[10px] leading-[15.6px] font-normal">
                per month
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyModalCard;
