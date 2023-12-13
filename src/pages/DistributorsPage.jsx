import React from "react";
import { BsFilterRight } from "react-icons/bs";
import DistributorStore from "../components/DistributorStore";
import { useNavigate } from "react-router-dom";

const DistributorsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-screen-xl mx-auto my-10 font-calSans px-5">
      <aside
        className="w-fit flex items-center gap-3 text-gray-100 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <svg
          width="28"
          height="24"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[18px] sm:w-[28px]"
        >
          <path
            d="M26.5 12L1.5 12M1.5 12L12.75 23.25M1.5 12L12.75 0.75"
            stroke="#0F172A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="sm:text-lg">Go back</p>
      </aside>
      <div className="flex items-center justify-between my-6 lg:my-12">
        <p className="text-gray-300 text-lg md:font-semibold md:text-[26px] lg:text-[32px]">
          25 Distributors Near You
        </p>
        <div className="flex items-center gap-3 text-orange-clr-full border-[1px] border-orange-clr-full rounded-md px-3 py-1 cursor-pointer">
          <span className="font-Inter font-norma lg:font-semibold">Filter</span>
          <BsFilterRight size={20} />
        </div>
      </div>
      <DistributorStore />
    </div>
  );
};

export default DistributorsPage;
