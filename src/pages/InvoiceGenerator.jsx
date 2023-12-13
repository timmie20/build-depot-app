import React from "react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import PaymentModal from "../components/PaymentModal";

const InvoiceGenerator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/invoiceGenerator/invoice");
  };
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-10 font-calSans">
        <div className="w-full bg-orange-clr-darker h-4"></div>
        <form className="flex flex-col mx-2 sm:mx-4">
          <div className="flex flex-col justify-center items-center gap-3 my-10 md:gap-6">
            <h1 className="text-orange-clr-full text-lg font-semibold md:text-[32px] lg:text-xl">
              BuildDepot
            </h1>
            <p className="text-sm text-dark-100 md:text-[24px]">
              Invoice Generator
            </p>
          </div>
          <div className="flex flex-col text-sm gap-4 mt-5 md:mt-10">
            <h3 className="text-base md:text-[24px] text-gray-300">
              Supplier Infomation
            </h3>
            <div className="flex flex-col gap-3">
              <label htmlFor="supplierName">Supplier name</label>
              <input
                id="supplierName"
                type="text"
                className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="supplierPhone">Phone Number</label>
              <input
                id="supplierPhone"
                type="number"
                className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="supplierAddress">Address</label>
              <input
                id="supplierAddress"
                type="text"
                className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
              />
            </div>
          </div>
          <hr className="my-6 border-dashed" />

          <div className="flex flex-col text-sm gap-4">
            <h3 className="text-base md:text-[24px] text-gray-300">
              Buyers Infomation
            </h3>
            <div className="flex flex-col gap-3">
              <label htmlFor="fullname">Full name</label>
              <input
                id="fullname"
                type="text"
                className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
              />
            </div>
            <div className="flex items-center justify-between gap-3 md:gap-6">
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="buyerPhone">Phone Number</label>
                <input
                  id="buyerPhone"
                  type="number"
                  className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
                />
              </div>
            </div>
          </div>
          <hr className="my-6 border-dashed" />

          <div className="flex flex-col text-sm gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base md:text-[24px] text-gray-300">
                Product Infomation
              </h3>
              <aside className="font-Inter flex items-center text-orange-clr-full cursor-pointer">
                <p>Add new product</p>
                <IoMdAdd size={22} />
              </aside>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="productname">Product name</label>
              <input
                id="productname"
                type="text"
                className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
              />
            </div>
            <div className="flex items-center justify-between gap-3 md:gap-6">
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="bagQuantity">Number of Bags</label>
                <input
                  id="bagQuantity"
                  type="number"
                  className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="cost">Unit cost</label>
                <input
                  id="cost"
                  type="number"
                  className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="totalCost">Total cost</label>
                <input
                  id="totalCost"
                  type="number"
                  className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-base md:text-[24px] text-gray-300">
                Payment Method
              </h3>
              <aside
                className="font-Inter flex items-center text-orange-clr-full cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <p>Add payment method</p>
                <IoMdAdd size={22} onClick={() => setIsOpen(!isOpen)} />
              </aside>
            </div>
          </div>
          <div className="w-[50%] mx-auto flex items-center justify-center">
            <button
              className="w-full py-2 px-4 bg-orange-clr-full text-white rounded-md mt-8"
              type="submit"
              onClick={handleSubmit}
            >
              Generate Invoice Link
            </button>
          </div>
        </form>
      </div>
      {isOpen && <PaymentModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default InvoiceGenerator;
