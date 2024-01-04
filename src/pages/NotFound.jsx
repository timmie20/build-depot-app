import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center px-5 pt-20">
      <h1 className="font-calSans text-[48px]">Oops! Page not found</h1>
      <Link
        to="/"
        className="bg-[#c74018] px-[10px] py-[20px] text-white w-fit h-[48px] flex items-center justify-center mt-[32px]"
      >
        Go to home page
      </Link>
    </div>
  );
};

export default NotFound;
