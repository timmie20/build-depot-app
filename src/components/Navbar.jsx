import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => setIsMenuOpen((prev) => !prev);

  // const handleClickRef = useRef(null);
  // const handleOpen = () => {
  //   setIsMenuOpen(!isMenuOpen);
  //   console.log("hello");
  // };

  // useEffect(() => {
  //   handleClickRef.current = () => {
  //     if (isMenuOpen === true) {
  //       setIsMenuOpen(false);
  //       console.log("clicked");
  //     }
  //   };
  //   window.addEventListener("click", handleClickRef.current);
  //   // return () => window.removeEventListener("click", handleClickRef.current);
  // }, []);

  return (
    <div className="sticky w-full h-[60px] top-0 border-b-[1px] bg-white">
      <nav className="container m-auto p-5 flex justify-between items-center font-calSans">
        <h1 className="text-orange-clr-full text-lg font-semibold md:text-[32px] lg:text-xl">
          BuildDepot
        </h1>
        <div onClick={handleToggle} className="block md:hidden">
          {!isMenuOpen && <MdOutlineMenu size={24} />}
        </div>
        {isMenuOpen && (
          <div
            className={`fixed top-0 right-0 flex flex-col w-[50%] py-6 px-5 gap-6 h-full text-white text-sm font-semibold bg-gray-100 transition-transform duration-1000 ease-in-out ${
              isMenuOpen
                ? "transform-translate-x-0"
                : "transform-translate-x-full"
            }`}
          >
            <div onClick={handleToggle} className="flex flex-col items-end">
              {isMenuOpen && <MdClose size={24} />}
            </div>
            <div className="flex flex-col items-center gap-4">
              <NavLink to="/about">About us</NavLink>
              <NavLink to="/support">Support</NavLink>
              <div className="bg-orange-clr-full py-[10px] px-[12px] rounded-sm">
                Get started
              </div>
            </div>
          </div>
        )}
        <div className="hidden md:flex items-center justify-between text-base w-[388px] font-semibold text-gray-100 lg:text-lg">
          <div className="flex gap-6">
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/support">Support</NavLink>
          </div>

          <div className="bg-orange-clr-full py-[10px] px-[20px] rounded-sm text-white">
            Get started
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
