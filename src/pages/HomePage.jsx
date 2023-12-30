import React, { useContext } from "react";
import CementBag from "../assets/images/Group 2019.png"
import Support from "../assets/images/support.png"
import Image4 from "../assets/images/Group.png";
import Iphone from "../assets/images/iPhone 13 Pro.png";
import Testimonials from "../components/Testimonials";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";

const HomePage = () => {
  const { setFoundDistributor, location, setLocation, material, setMaterial } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      // API-KEY to google sheets document
      const res = await fetch(
        "https://sheet.best/api/sheets/1e1a7ba3-50f2-4fed-832a-95e56f3318fb"
      );
      if (!res) {
        throw new Error(`err fetching data: ${res.statusText}`);
      }
      const data = await res.json();
      const distributor = data?.filter(
        (shop) =>
          shop.Location === location && shop.Materials.includes(material)
      );
      console.log(distributor);
      distributor && setFoundDistributor(distributor);
      navigate("/distributors");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="mt-10 max-w-screen-xl mx-auto md:mt-14">
        <section className="flex flex-wrap px-5 gap-3 md:items-center lg:flex-nowrap">
          <div className="first-col bg-[#001E48] text-white w-full flex flex-col md:flex-row items-center justify-between px-[32px] h-[683px] max-h-[683px]">
            <div className="max-w-[382px]">
              <h1 className="text-[32px] sm:text-[45px] font-[600] font-calSans">
                Building Materials at Unbeatable Prices!
              </h1>
              <p className="text-[18px] pt-[16px] font-[600] font-Inter">Find all your building materials on BuildDepot</p>
              <a href="#seller" className="bg-[#c74018] px-[10px] py-[20px] text-white w-[119px] h-[48px] flex items-center justify-center mt-[32px]">Shop Now</a>
            </div>
            <img src={CementBag} alt="" />
          </div>

          <div className="flex w-full gap-1 justify-between lg:w-[49%] lg:flex-col lg:gap-3 flex-wrap">
            <div className="second-col w-full md:w-[49%] lg:w-full flex items-center justify-center bg-[#001E48] text-white h-[336px]">
              <h2 className="text-[28px] px-4 sm:text-[32px] font-[600] text-center font-calSans max-w-[298px]">Buy the materials you need today, <span className="text-[#d26646]">pay tomorrow  - chop life!</span></h2>
            </div>

            <div className="third-col md:w-[49%] w-full lg:w-full flex flex-col sm:flex-row sm:items-center justify-between bg-[#003279] text-white sm:h-[336px]">
              <div className="pl-[20px] max-w-[197px]">
                <h2 className="text-[28px] font-[600] font-calSans max-w-[298px]">Need Help?</h2>
                <p className="text-[16px] pt-[12px] font-[600] font-Inter">Speak with our customer care agent on whatsapp</p>
                <button className="bg-[#c74018] px-[10px] py-[20px] text-white w-[119px] h-[48px] flex items-center justify-center mt-[32px]">Contact Us</button>
              </div>
              <img className="w-[50%] self-end sm:h-full sm:object-cover" src={Support} alt="" />
            </div>
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

          <div id="seller" className="block mt-24 md:flex md:flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
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
                  className="block w-full rounded-lg border-0 h-12 pl-2 text-gray-200 text-sm ring-1 ring-gray-50"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                >
                  <option value="">select an option</option>
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
                  className="block w-full rounded-lg border-0 h-12 pl-2 text-gray-200 text-sm ring-1 ring-gray-50"
                  onChange={(e) => setMaterial(e.target.value)}
                  value={material}
                >
                  <option value="">select an option</option>
                  <option>Cement</option>
                  <option>Grinite</option>
                </select>
              </div>
              <button
                className="disabled:opacity-75 disabled:cursor-not-allowed w-full p-3 bg-orange-clr-full text-white text-sm text-center font-semibold rounded-lg cursor-pointer sm:text-base"
                onClick={handleSubmit}
                type="button"
                disabled={!location || !material}
              >
                Search
              </button>
            </form>
            <div className="hidden md:flex md:justify-end">
              <img src={Image4} alt="illustration image of shops locations" />
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#001E48] banner w-full my-20">
        <div className="max-w-screen-xl px-5 mx-auto flex flex-col gap-9 md:flex-row items-center justify-between">
          <div className="max-w-[404px] pt-10 md:pt-0">
            <h2 className="text-white font-calSans text-[24px] md:text-[28px] font-[600]">No need to waste time! Talk to a Build Depot agent on <span className="text-[#48C546]">WhatsApp</span> and relax.</h2>
            <a href="#" className="bg-[#c74018] px-[10px] py-[20px] text-white w-fit h-[48px] flex items-center justify-center mt-[24px]">Order on Whatsapp</a>
          </div>
          <img src={Iphone} alt="" />
        </div>
      </div>
      <div className="container mx-auto">
        <Testimonials />
      </div>
      {/* {show && <DistributorsPage foundDistributor={foundDistributor} />} */}
    </>
  );
};

export default HomePage;
