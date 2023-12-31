import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Invoice from "../components/Invoice";

const InvoicePage = () => {
  const { invoiceId } = useParams();
  const [invoice, setInvoice] = useState([]);
  const [loading, setLoading] = useState(false);

  // ( invoiceId contains : as first character of paramsId , newId gets
  //   rid of it and returns a new string without the : )

  let newId = invoiceId?.slice(1);

  const loadInvoice = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/1e1a7ba3-50f2-4fed-832a-95e56f3318fb/tabs/OrderDetails"
      );
      if (!res) {
        throw new Error(`err fetching data: ${res.statusText}`);
      }
      const data = await res.json();
      const invoiceData = data?.filter((item) => item.ID === newId);
      setLoading(false);
      invoice && setInvoice(invoiceData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    loadInvoice();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="font-calSans text-[30px]">Loading...</h1>
        </div>
      ) : invoice.length <= 0 ? (
        <h1>no present data</h1>
      ) : (
        invoice?.map((data, index) => <Invoice data={data} key={index} />)
      )}
    </>
  );
};

export default InvoicePage;
