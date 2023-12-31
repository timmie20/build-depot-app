import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DistributorsPage from "./pages/DistributorsPage";
import HomePage from "./pages/HomePage";
import InvoiceGenerator from "./pages/InvoiceGenerator";
import { AppProvider } from "./AppContext";
import InvoicePage from "./pages/InvoicePage";

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/distributors" element={<DistributorsPage />} />
        </Route>
        <Route path="/invoiceGenerator" element={<InvoiceGenerator />} />
        <Route path="/invoice" element={<InvoicePage />}>
          <Route path=":invoiceId" element={<InvoicePage />} />
        </Route>
      </Routes>
    </AppProvider>
  );
};

export default App;
