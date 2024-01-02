import React from "react";
import { IoMdRemove } from "react-icons/io";

const Product = ({ handleChange, values, productList, setProductList, id }) => {
  const handleRemoveNewProduct = () => {
    if (productList.length > 1) {
      setProductList(productList.filter((item) => item.id !== id));
    }
    console.log(id);
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <label htmlFor="productName">Product name</label>
        <input
          required
          id="productName"
          type="text"
          onChange={handleChange}
          value={values.productName}
          className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
        />
      </div>
      <div className="flex items-center justify-between gap-3 md:gap-6">
        <div className="w-full flex flex-col gap-3">
          <label htmlFor="bagsNumber">Number of Bags</label>
          <input
            required
            id="bagsNumber"
            type="number"
            onChange={handleChange}
            value={values.bagsNumber}
            className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
          />
        </div>
        <div className="w-full flex flex-col gap-3">
          <label htmlFor="unitCost">Unit cost</label>
          <input
            required
            id="unitCost"
            type="number"
            onChange={handleChange}
            value={values.unitCost}
            className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
          />
        </div>
        <div className="w-full flex flex-col gap-3">
          <label htmlFor="totalCost">Total cost</label>
          <input
            required
            id="totalCost"
            type="number"
            onChange={handleChange}
            value={values.totalCost}
            className="border-[1px] w-full rounded-md border-gray-100 h-[30px] px-4 lg:h-[48px] font-Inter font-normal"
          />
        </div>
      </div>
      {productList.length > 1 && (
        <aside
          className="font-Inter flex items-center text-orange-clr-full cursor-pointer justify-end"
          onClick={handleRemoveNewProduct}
        >
          <p>Remove product</p>
          <IoMdRemove />
        </aside>
      )}
    </>
  );
};

export default Product;
