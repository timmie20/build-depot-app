import React from "react";

const Invoice = ({ data }) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-10 text-dark-50 font-Inter text-sm">
        <div className="flex py-10 px-3 border-y-8 border-orange-clr-200  items-top justify-between">
          <div className="flex flex-col gap-3 w-[40%] md:gap-5">
            <h1 className="font-calSans text-orange-clr-full text-lg font-semibold md:text-[45px] lg:text-xl">
              BuildDepot
            </h1>
            <p className="w-[50%]">{data.address}</p>
          </div>
          <div className="text-right">
            <h1 className="text-lg mb-4 md:text-[45px] font-calSans">
              INVOICE
            </h1>
            <p>{data.ID}</p>
          </div>
        </div>
        <div className="py-7 px-3 font-medium border-b-8 border-orange-clr-200">
          <div className="my-10 flex items center justify-between">
            <aside className="flex flex-col gap-2">
              <p className="text-gray-200">ISSUED ON</p>
              <p className="">{data.issuedate}</p>
            </aside>
            <aside className="flex flex-col gap-2 text-right w-[60%]">
              <p className="text-gray-200">ISSUED TO</p>
              <h3 className="text-dark-50 font-semibold text-base md:text-lg">
                {data.buyersname}
              </h3>
              <p className="text-gray-200 truncate">{data.email}</p>
            </aside>
          </div>

          <table className="mt-10 w-full font-calSans font-semibold lg:mt-20">
            <thead className="bg-orange-clr-50">
              <tr>
                <th className="px-5 py-2 text-left text-gray-700">Item name</th>
                <th className="text-center font-medium text-gray-700 ">
                  Unit cost
                </th>
                <th className="py-2 text-center font-medium text-gray-700 ">
                  Quantity
                </th>
                <th className="py-2 text-center font-medium text-gray-700">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="w-full h-fit py-6 bg-[#FbFbFB]">
              <tr>
                <td className="px-6">{data.productname}</td>
                <td>{data.unitcost}</td>
                <td>{data.bagsnumber}</td>
                <td>{data.totalcost}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="px-8">Delivery cost</td>
              </tr>
            </tbody>
          </table>
        </div>
        <form className="w-full py-5 px-3">
          <h3 className="font-calSans font-semibold text-sm md:text-lg">
            Choose Payment Method
          </h3>
          <div className="mt-4 flex justify-between items-center border-[1px] px-[18px] py-[13px] shadow-md">
            <label className="flex flex-col gap-1 " htmlFor="card-payment">
              <h3 className="font-semibold text-sm md:text-[18px]">
                Pay with Debit/Credit Card, Bank transfer or USSD
              </h3>
              <p>You will be redirected to our secure checkout page</p>
            </label>
            <input
              id="card-payment"
              type="radio"
              name="payment-method"
              className="w-5 h-5 rounded-full"
            />
          </div>
          <div className="mt-4 flex justify-between items-center border-[1px] px-[18px] py-[13px] shadow-md">
            <label className="flex flex-col gap-1 " htmlFor="credit">
              <h3 className="font-semibold text-sm md:text-[18px]">
                Pay on credit
              </h3>
              <p>You will be redirected to our external credit checkout page</p>
            </label>
            <input
              id="credit"
              type="radio"
              name="payment-method"
              className="w-5 h-5 rounded-full"
            />
          </div>
          <div className="flex justify-end items-end mt-10">
            <button
              className="py-[10px] px-5 bg-orange-clr-full text-white"
              type="submit"
            >
              Check out
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Invoice;
