import React from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
const Stepper = ({ currentStep, complete }) => {
  const steps = [
    "Your & Reference Info",
    "Upload Agreement",
    "Payment",
    "Confirmation",
  ];

  return (
    <div className="px-3">
      <div className="bg-[#E0E0E0] px-5 py-10 rounded-[16px]">
        <div className="flex justify-between">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              } `}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? (
                  <TiTick color="white" size={24} />
                ) : (
                  i + 1
                )}
              </div>
              <p className=" whitespace-nowrap">{step}</p>
            </div>
          ))}
        </div>
        {/* {!complete && (
          <button
            className="btn"
            onClick={() => {
              currentStep === steps.length
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1);
            }}
          >
            {currentStep === steps.length ? "Finish" : "Next"}
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Stepper;
