import React from "react";
import Image1 from "../assets/images/Frame 29.png";
import Image2 from "../assets/images/Frame 30.png";
import Image3 from "../assets/images/Frame 31.png";
import Image4 from "../assets/images/Group.png";
import Banner from "../assets/images/AD-BANNER.png";

import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <>
      <div className="mt-10 container mx-auto md:mt-14">
        <section className="flex flex-wrap px-5 gap-3 md:items-center lg:flex-nowrap">
          <div className="w-full">
            <img
              src={Image1}
              alt="imgae illustration of materials a customer can buy"
            />
          </div>
          <div className="flex w-[50%] gap-1 lg:flex-col lg:gap-3">
            <img src={Image2} alt="" />
            <img src={Image3} alt="" />
          </div>
        </section>

        <section className="flex flex-col px-5 mt-12 md:mt-20 ">
          <ul className="flex flex-col items-center font-calSans font-semibold gap-10 lg:flex-row lg:items-start lg:justify-between">
            <li className="flex flex-col gap-2 text-center lg:text-left">
              <h1 className="text-[32px] text-gray-50 md:text-xl">01</h1>
              <p className="text-lg text-gray-100">Find a seller near you</p>
            </li>
            <li className="flex flex-col gap-2 text-center lg:text-left">
              <h1 className="text-[32px] text-gray-50 md:text-xl">02</h1>
              <p className="text-lg text-gray-100">
                Chat and conclude on what you need
              </p>
            </li>
            <li className="flex flex-col gap-2 text-center lg:text-left">
              <h1 className="text-[32px] text-gray-50 md:text-xl">03</h1>
              <p className="text-lg text-gray-100">
                Pay directly or apply for credit
              </p>
            </li>
          </ul>

          <div className="block mt-24 md:flex md:flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
            <form className="flex flex-col items-start font-calSans gap-4 sm:gap-10 md:w-[505px]">
              <h1 className="text-[24px] text-gray-300 font-semibold sm:text-[32px] lg:text-xl">
                Find a Seller Near You
              </h1>
              <div className="flex flex-col gap-5 w-full">
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold text-gray-100"
                >
                  Select Location
                </label>
                <select
                  id="location"
                  name="location"
                  autoComplete="location-name"
                  className="block w-full rounded-lg border-0 h-12 pl-2 text-gray-200 text-sm ring-1 ring-gray-50"
                >
                  <option>Lagos</option>
                  <option>Abuja</option>
                </select>
              </div>
              <div className="flex flex-col gap-5 w-full">
                <label
                  htmlFor="material"
                  className="block text-sm font-semibold text-gray-100"
                >
                  Select Material
                </label>
                <select
                  id="material"
                  name="material"
                  autoComplete="material-name"
                  className="block w-full rounded-lg border-0 h-12 pl-2 text-gray-200 text-sm ring-1 ring-gray-50"
                >
                  <option>Cement</option>
                  <option>Grinite</option>
                </select>
              </div>
              <div className="w-full p-3 bg-orange-clr-full text-white text-sm text-center font-semibold rounded-lg sm:text-base">
                Search
              </div>
            </form>
            <div className="hidden md:flex md:justify-end">
              <img src={Image4} alt="illustration image of shops locations" />
            </div>
          </div>
        </section>
      </div>
      <div className="w-full min-h-fit flex justify-center my-20">
        <img src={Banner} alt="" />
      </div>
      <div className="container mx-auto">
        <Testimonials />
      </div>
    </>
  );
};

export default HomePage;
