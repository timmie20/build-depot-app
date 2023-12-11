import React from "react";
import storeImage from "../assets/images/Product-image-container.png";
import StarRating from "./StarRating";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowUpSLine } from "react-icons/ri";
import useToogle from "../Hooks/useToogle";

const DistributorStore = () => {
  const storeInfo = [
    {
      id: 1,
      name: "Ms Ishola Store",
      distance: "27 KM Away from you",
      location: "2715 Ash Dr. San Jose, South Dakota 83475",
      starRate: 4,
      review: 20,
    },
  ];

  const [isExpanded, handleToggle] = useToogle(false);

  return (
    <div className="min-h-fit border-[1px] border-gray-100 py-[27px] px-4 rounded-lg md:flex md:items-center md:justify-between">
      {storeInfo ? (
        storeInfo.length > 0 ? (
          storeInfo.map((store) => (
            <div
              className="flex flex-col font-Inter text-sm md:flex-row md:items-center md:gap-2 lg:gap-7"
              key={store.id}
            >
              <img src={storeImage} alt="" />
              <div className="flex flex-col items-start justify-start gap-2 lg:gap-4">
                <p className="font-calSans text-base">{store.name}</p>
                <StarRating store={store} />
                <p className="font-normal text-[#8D2D11]">{store.distance}</p>
                <div className="flex items-center gap-1 text-dark-50 flex-wrap">
                  <IoLocationOutline />
                  <p>{store.location}</p>
                </div>
                <div className="text-white bg-orange-clr-full p-2 rounded-md font-semibold sm:hidden">
                  <Link to="#">contact on whatsapp</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>no stores available</h1>
        )
      ) : (
        console.log("data not available")
      )}

      <div className="hidden md:flex flex-col lg:hidden">
        {!isExpanded && (
          <div
            className="hidden font-Inter text-sm text-blue-500 md:flex md:items-center lg:hidden"
            onClick={handleToggle}
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
              onClick={handleToggle}
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
  );
};

export default DistributorStore;
