import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DistributorsPage from "./pages/DistributorsPage";
import HomePage from "./pages/HomePage";
import InvoiceGenerator from "./pages/InvoiceGenerator";
import Invoice from "./pages/Invoice";
import { AppProvider } from "./AppContext";

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/distributors" element={<DistributorsPage />} />
        </Route>
        <Route path="/invoiceGenerator" element={<InvoiceGenerator />} />
        <Route path="invoiceGenerator/invoice" element={<Invoice />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
