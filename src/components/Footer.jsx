import Facebook from "../assets/socialIcons/facebook.svg";
import Twitter from "../assets/socialIcons/twitter.svg";
import Youtube from "../assets/socialIcons/youtube.svg";
import Instagram from "../assets/socialIcons/instagram.svg";
import Visa from "../assets/paymentIcons/Visa.png";
import PayPal from "../assets/paymentIcons/PayPal.png";
import Mastercard from "../assets/paymentIcons/MasterCard.png";

const Footer = () => {
  return (
    <div className="mt-48 container mx-auto font-Inter">
      <div className=" flex flex-col font-normal gap-10 border-y-2 px-5 py-10 lg:flex-row lg:justify-between ">
        <div className="flex flex-col gap-5 items-center lg:w-[45%] lg:items-start lg:gap-10">
          <h1 className=" font-calSans text-orange-clr-full text-lg font-semibold md:text-[32px] lg:text-xl">
            BuildDepot
          </h1>
          <p className="text-base text-center text-dark-50 lg:text-left lg:text-[18px]">
            Est diam debitis an, error recusabo id pro, quo eripuit civibus ut.
            Mel ut tamquam erroribus, ad nonumy vituperata mei.Et qui falli
            latine consequuntur. In appellantur concludaturque pro.
          </p>
          <div className="flex gap-3">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" />
            <img src={Youtube} alt="" />
          </div>
        </div>
        <div className="flex gap-8 justify-center text-dark-50 font-normal sm:gap-12 lg:text-[18px]">
          <ul className="flex flex-col gap-3">
            <h3 className="font-semibold mb-2 text-base text-dark-50 lg:text-[22px]">
              About
            </h3>
            <li>Company info</li>
            <li>News</li>
            <li>Career</li>
            <li>Policies</li>
          </ul>
          <ul className="flex flex-col gap-3">
            <h3 className="font-semibold mb-2 text-base text-dark-50 lg:text-[22px]">
              Product
            </h3>
            <li>New Arrivals</li>
            <li>Best selling</li>
            <li>Cement</li>
          </ul>
          <ul className="flex flex-col gap-3">
            <h3 className="font-semibold mb-2 text-base text-dark-50 lg:text-[22px]">
              Help & Contact
            </h3>
            <li>FAQs</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 my-8 px-5 lg:flex-row lg:justify-between">
        <p className="text-gray-200 text-[12px] sm:text-base">
          Copyright 2023 BuildDepot Inc. All rights reserved.
        </p>
        <div className="flex gap-3">
          <img src={Visa} alt="" />
          <img src={Mastercard} alt="" />
          <img src={PayPal} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
