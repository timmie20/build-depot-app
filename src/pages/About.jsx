import React from "react";
import CementImg from "../assets/images/Group 2019.png";
import MapImg from "../assets/images/Group.png";

const About = () => {
  return (
    <>
      <div className="mx-auto max-w-[1300px] px-5">
        <div className="flex flex-col justify-center items-center pb-10">
          <h1 className="text-center text-[48px] font-calSans py-4">
            About Us
          </h1>
          <p className="text-center max-w-[500px]">
            At BuildDepot, we're passionate about supporting the construction
            community. We believe everyone deserves access to the tools and
            resources they need to succeed.
          </p>
        </div>
        <section className="flex justify-between items-center flex-wrap mb-14">
          <div className="max-w-[400px]">
            <h2 className="text-[32px] font-calSans">
              We believe every construction project deserves a{" "}
              <span className="text-[#C74018]">solid foundation.</span>
            </h2>
            <p className="font-Inter text-[16px]">
              That's why BuildDepot was created – to empower cement distributors
              like you and fuel the growth of the construction industry.
            </p>
          </div>
          <img src={CementImg} alt="" />
        </section>
        <section className="flex justify-between items-center flex-wrap">
          <img src={MapImg} alt="" />
          <div className="max-w-[500px]">
            <h2 className="text-[32px] font-calSans">
              More than just BNPL for cement
            </h2>
            <p className="font-Inter text-[16px]">
              We're not just a Buy Now, Pay Later (BNPL) platform. We're your
              construction industry partner, providing seamless solutions that:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="flex items-center justify-between gap-3 py-2">
                <div className="bg-white border-[10px] border-[#c74018] min-w-[32px] w-[32px] h-[32px] rounded-[50%]"></div>
                <p className="text-[14px] font-Inter">
                  Connect you with a wider customer base: Attract new buyers
                  with flexible payment options, like BNPL, and watch your sales
                  grow.
                </p>
              </div>
              <div className="flex items-center justify-between gap-3 py-2">
                <div className="bg-white border-[10px] border-[#c74018] min-w-[32px] w-[32px] h-[32px] rounded-[50%]"></div>
                <p className="text-[14px] font-Inter">
                  Simplify the buying process: Make it easy for customers to
                  purchase cement with instant credit decisions and convenient
                  payment methods.
                </p>
              </div>
              <div className="flex items-center justify-between gap-3 py-2">
                <div className="bg-white border-[10px] border-[#c74018] min-w-[32px] w-[32px] h-[32px] rounded-[50%]"></div>
                <p className="text-[14px] font-Inter">
                  Streamline your operations: Focus on what you do best, selling
                  cement, while we handle the payments and keep things running
                  smoothly.
                </p>
              </div>
              <div className="flex items-center justify-between gap-3 py-2">
                <div className="bg-white border-[10px] border-[#c74018] min-w-[32px] w-[32px] h-[32px] rounded-[50%]"></div>
                <p className="text-[14px] font-Inter">
                  Minimize risks: Reduce bad debts and late payments with our
                  advanced risk assessment tools.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
