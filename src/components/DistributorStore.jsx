import React, { useState } from "react";
import storeImage from "../assets/images/Product-image-container.png";
import StarRating from "./StarRating";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowUpSLine } from "react-icons/ri";

const DistributorStore = ({ distributor, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToogle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="min-h-fit border-[1px] border-gray-100 py-[27px] px-4 rounded-lg md:flex md:items-center md:justify-between">
        <div
          className="flex flex-col font-Inter text-sm md:flex-row md:items-center md:gap-2 lg:gap-7"
          key={index}
        >
          <img src={storeImage} alt="" />
          <div className="flex flex-col items-start justify-start gap-2 lg:gap-4">
            <p className="font-calSans text-base">{distributor?.Shopname}</p>
            <StarRating distributor={distributor} />
            <p className="font-normal text-[#8D2D11]">27 KM away from you</p>
            <div className="flex items-center gap-1 text-dark-50 flex-wrap">
              <IoLocationOutline />
              <p>{distributor?.Location}</p>
            </div>
            <div className="text-white bg-orange-clr-full p-2 rounded-md font-semibold sm:hidden">
              <Link to="#">contact on whatsapp</Link>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col lg:hidden">
          {!isExpanded && (
            <div
              className="hidden font-Inter text-sm text-blue-500 md:flex md:items-center lg:hidden"
              onClick={handleToogle}
            >
              view more
              <RiArrowDropDownLine size={25} />
            </div>
          )}

          {isExpanded && (
            <div className="w-full flex flex-col items-end text-sm">
              <div className="flex flex-col gap-2">
                <aside>
                  <h3>Price Per Bag</h3>
                  <p className="font-Inter font-normal">#5,000</p>
                </aside>
                <aside>
                  <h3>Minimum Order Quantity</h3>
                  <p className="font-Inter font-normal">5 Cement Bags</p>
                </aside>
                <div className="text-white bg-orange-clr-full p-2 rounded-md font-semibold">
                  <Link to="#">contact on whatsapp</Link>
                </div>
              </div>
              <div
                className="hidden font-Inter text-blue-500 text-sm md:flex md:items-center lg:hidden"
                onClick={handleToogle}
              >
                view less
                <RiArrowUpSLine size={16} />
              </div>
            </div>
          )}
        </div>
        <div className="hidden lg:flex items-center">
          <div className="flex flex-col items-start gap-4">
            <aside>
              <h3>Price Per Bag</h3>
              <p className="font-Inter font-normal">#5,000</p>
            </aside>
            <aside>
              <h3>Minimum Order Quantity</h3>
              <p className="font-Inter font-normal">5 Cement Bags</p>
            </aside>
          </div>
        </div>

        <div className="hidden lg:block text-white bg-orange-clr-full py-[10px] px-5 rounded-md font-semibold">
          <Link to="#">contact on whatsapp</Link>
        </div>
      </div>
    </>
  );
};

export default DistributorStore;
