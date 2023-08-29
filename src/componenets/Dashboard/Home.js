import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select, Space } from "antd";

const Home = () => {
  const { Search } = Input;

  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
    },
  ];
  return (
    <div className="lg:w-full md:w-[700px] md:px-5">
      <div className="flex items-center pb-6 border-b lg:justify-between gap-2 lg:flex-row md:justify-between md:flex-row  flex-col justify-center my-2">
        <div className="w-[1061px] px-4">
          <p>Hi, Mark Smith ! Welcome To OTO~PAY 👋</p>

          <div className=" w-[602px] mt-6 flex  gap-x-4  flex items-center">
            <div className=" flex gap-4">
              <svg
                className="xl:w-[22px] xl:h-[23px] md:w-[16px] md:h-[16px]"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21.5L19 19.5M10.5 20.5C11.7476 20.5 12.9829 20.2543 14.1355 19.7769C15.2881 19.2994 16.3354 18.5997 17.2175 17.7175C18.0997 16.8354 18.7994 15.7881 19.2769 14.6355C19.7543 13.4829 20 12.2476 20 11C20 9.75244 19.7543 8.5171 19.2769 7.36451C18.7994 6.21191 18.0997 5.16464 17.2175 4.28249C16.3354 3.40033 15.2881 2.70056 14.1355 2.22314C12.9829 1.74572 11.7476 1.5 10.5 1.5C7.98044 1.5 5.56408 2.50089 3.78249 4.28249C2.00089 6.06408 1 8.48044 1 11C1 13.5196 2.00089 15.9359 3.78249 17.7175C5.56408 19.4991 7.98044 20.5 10.5 20.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                id="email-address"
                name="search"
                type="search"
                autoComplete="email"
                required
                className="w-[390px] h-[53px] flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="example@email.com"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
