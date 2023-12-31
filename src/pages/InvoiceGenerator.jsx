import { useFormik } from "formik";
import React from "react";
import { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import PaymentModal from "../components/PaymentModal";
import { v4 as ranID } from "uuid";
import AddProduct from "../components/AddProduct";
import CopyLInkModal from "../components/CopyLInkModal";
import Loader from "../assets/images/loader.svg"

const InvoiceGenerator = () => {
  const [openLinkModal, setOpenLinkModal] = useState(false)
  const [id, setId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [addProduct, setAddProduct] = useState([1]);
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerateLink = (e) => {
    e.preventDefault();
    setId(ranID());
  };

  const makeApiRequest = async () => {
    setLoading(true)
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/1e1a7ba3-50f2-4fed-832a-95e56f3318fb/tabs/OrderDetails",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            {
              ID: id,
              supplier: values.supplierName,
              phonenumber: values.supplierPhone,
              address: values.supplierAddress,
              buyersname: values.buyersName,
              buyersphone: values.buyersPhone,
              email: values.buyersEmail,
              productname: values.productName,
              bagsnumber: values.bagsNumber,
              unitcost: values.unitCost,
              totalcost: values.totalCost,
              issuedate: new Date().toLocaleDateString(),
            },
          ]),
        }
      );
      setLoading(false)
      setUrl('https://builddepot.netlify.app/invoice/:' + id)
      setOpenLinkModal(true)
    } catch (err) {
      setLoading(false)
      console.log(err.message);
      setOpenLinkModal(false)
    }
  };

  useEffect(() => {
    if (id) {
      makeApiRequest();
    }
  }, [id]);

  const { values, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      supplierName: "",
      supplierPhone: "",
      supplierAddress: "",
      buyersName: "",
      buyersPhone: "",
      buyersEmail: "",
      productName: "",
      bagsNumber: "",
      unitCost: "",
      totalCost: "",
    },
    handleGenerateLink,
  });

  const handleAddNewProduct = () => {
    setAddProduct([...addProduct, addProduct.length + 1]); // Add a new product field
  };
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-10 font-calSans">
        <div className="w-full bg-orange-clr-darker h-4"></div>
        <form
          className="flex flex-col mx-2 sm:mx-4"
          onSubmit={handleSubmit}
          autoComplete="false"
        >
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
                required
                id="supplierName"
                type="text"
                value={values.supplierName}
                onChange={handleChange}
                className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="supplierPhone">Phone Number</label>
              <input
                required
                id="supplierPhone"
                type="text"
                value={values.supplierPhone}
                onChange={handleChange}
                className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="supplierAddress">Address</label>
              <input
                required
                id="supplierAddress"
                type="text"
                value={values.supplierAddress}
                onChange={handleChange}
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
              <label htmlFor="buyersName">Full name</label>
              <input
                required
                id="buyersName"
                type="text"
                value={values.buyersName}
                onChange={handleChange}
                className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
              />
            </div>
            <div className="flex items-center justify-between gap-3 md:gap-6">
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="buyersPhone">Phone Number</label>
                <input
                  required
                  id="buyersPhone"
                  type="text"
                  value={values.buyersPhone}
                  onChange={handleChange}
                  className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="buyersEmail">Email address</label>
                <input
                  required
                  id="buyersEmail"
                  type="email"
                  value={values.buyersEmail}
                  onChange={handleChange}
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
              <aside
                className="font-Inter flex items-center text-orange-clr-full cursor-pointer"
                onClick={handleAddNewProduct}
              >
                <p>Add new product</p>
                <IoMdAdd size={22} />
              </aside>
            </div>

            {addProduct.map((product, index) => (
              <AddProduct
                key={index}
                handleChange={handleChange}
                values={values}
              />
            ))}

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
              className="disabled:opacity-30 flex items-center justify-center w-full py-2 px-4 bg-orange-clr-full text-white rounded-md mt-8"
              type="submit"
              onClick={handleGenerateLink}
              disabled={loading}
            >
              {loading ? <img src={Loader} alt="" /> : " Generate Invoice Link"}
            </button>
          </div>
        </form>
      </div>
      {isOpen && <PaymentModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      {openLinkModal && <CopyLInkModal setOpenLinkModal={setOpenLinkModal} url={url} />}
    </>
  );
};

export default InvoiceGenerator;
