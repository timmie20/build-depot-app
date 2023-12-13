import React from "react";

const PaymentModal = ({ setIsOpen }) => {
  const handleSave = () => {
    // what happans when save is clicked
    setIsOpen(false);
  };
  return (
    <div className="w-full bg-slate-700/70 p-3 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer">
      <div className="flex flex-col gap-4 bg-white px-3 py-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden md:gap-7 md:px-5 md:py-10">
        <div className="flex items-center justify-between">
          <h1 className="font-calSans text-[18px]">Choose payment option</h1>
          <label className="flex items-center gap-2 md:gap-4">
            <span className="font-calSans">select all</span>
            <input type="checkbox" className="checked:text-orange-clr-darker" />
          </label>
        </div>
        <div>
          <h3 className="font-calSans sm:text-lg">Direct Payment</h3>
          <div className="mt-3 flex flex-col gap-2">
            <label className="flex items-center justify-between">
              <span className="text-sm text-dark-50 sm:text-base">
                Payment via Paystack
              </span>
              <input type="checkbox" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-dark-50 sm:text-base">
                Payment via Flutterwave
              </span>
              <input type="checkbox" />
            </label>
          </div>
        </div>

        <div>
          <h3 className="font-calSans sm:text-lg">Credit Payment</h3>
          <div className="mt-3 flex flex-col gap-2">
            <label className="flex items-center justify-between">
              <span className="text-sm text-dark-50 sm:text-base">Credpal</span>
              <input type="checkbox" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-dark-50 sm:text-base">
                Carbonzero
              </span>
              <input type="checkbox" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-dark-50 sm:text-base">
                Pay with Spectra
              </span>
              <input type="checkbox" />
            </label>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-5 justify-end">
          <button
            className="w-[80px] py-2 px-3 border-[1px] border-orange-clr-full rounded-md text-orange-clr-full"
            onClick={() => setIsOpen(false)}
          >
            cancel
          </button>
          <button
            className="w-[80px] py-2 px-3 bg-orange-clr-full rounded-md text-white"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
