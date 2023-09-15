import React, { useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const generateDates = (baseDate) => {
    return Array.from(
      { length: 8 },
      (_, index) => new Date(baseDate.getTime() + index * 24 * 60 * 60 * 1000)
    );
  };
  const [displayedDates, setDisplayedDates] = useState(
    generateDates(selectedDate)
  );

  const handlePrevious = () => {
    const newDate = new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000);
    setSelectedDate(newDate);
    setDisplayedDates(generateDates(newDate));
  };

  const handleNext = () => {
    const newDate = new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000);
    setSelectedDate(newDate);
    setDisplayedDates(generateDates(newDate));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setDisplayedDates(generateDates(date));
  };

  // Calculate the first date of the month and the next 8 dates

  const formatDate = (date) => {
    return ` ${
      months[date.getMonth()]
    } ${date.getDate()} ${date.getFullYear()}`;
  };
  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="calendar  w-full  rounded p-4">
      <div className="header   flex items-center justify-between mb-2">
        <h1 className="text-[#17062F] xl:text-2xl lg:text-xl font-semibold leading-8 ">
          Calendar
        </h1>
        <div className="flex justify-between  items-center gap-4">
          <button className="arrow" onClick={handlePrevious}>
            &lt;
          </button>

          <h2 className="selected-date text-base font-medium leading-5 text-center">
            {formatDate(selectedDate)}
          </h2>
          <button className="arrow" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>

      <div className="dates grid grid-cols-1 md:grid-cols-8 grid-row-1 gap-4 ">
        {/* Display only one date on small screens */}
        <div className=" lg:hidden md:hidden w-full  text-center py-2 rounded-xl flex flex-col xl:gap-6 lg:gap-4 md:gap-3 bg-[#2E0664] text-[#F6EFFF] cursor-pointer">
          <div className="font-bold flex justify-center items-center xl:text-3xl lg:text-xl">
            {isToday(selectedDate) && (
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 16.5C14.7092 16.5 16.5 14.7092 16.5 12.5C16.5 10.2908 14.7092 8.5 12.5 8.5C10.2908 8.5 8.5 10.2908 8.5 12.5C8.5 14.7092 10.2908 16.5 12.5 16.5Z"
                  fill="#FFFFFF"
                  stroke="#FFFFFF"
                  strokeOpacity="0.08"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {selectedDate.getDate()}
          </div>
          <div className="xl:block hidden text-base">
            {selectedDate.toLocaleDateString("en-US", { weekday: "long" })}
          </div>
          <div className="xl:hidden text-base">
            {selectedDate.toLocaleDateString("en-US", { weekday: "short" })}
          </div>
        </div>
        {/* Display 8 dates on larger screens */}

        {window.innerWidth >= 768 &&
          displayedDates?.map((date, index) => (
            <div
              key={index}
              className={`lg:flex md:flex hidden overflow-x-auto snap-x-mandatory date text-center py-2 rounded-xl flex flex-col xl:gap-6 lg:gap-4 md:gap-3 ${
                date.getDate() === selectedDate.getDate()
                  ? "bg-[#2E0664] text-[#F6EFFF] "
                  : "bg-white text-[#312245]"
              } cursor-pointer  snap-align start`}
              onClick={() => handleDateClick(date)}
            >
              <div className="font-bold flex justify-center items-center xl:text-3xl lg:text-xl ">
                {isToday(date) && (
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 16.5C14.7092 16.5 16.5 14.7092 16.5 12.5C16.5 10.2908 14.7092 8.5 12.5 8.5C10.2908 8.5 8.5 10.2908 8.5 12.5C8.5 14.7092 10.2908 16.5 12.5 16.5Z"
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      strokeOpacity="0.08"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {date.getDate()}
              </div>
              <div className="xl:block hidden text-base">
                {date.toLocaleDateString("en-US", { weekday: "long" })}
              </div>
              <div className="xl:hidden text-base">
                {date.toLocaleDateString("en-US", { weekday: "short" })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Calendar;

