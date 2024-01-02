import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DistributorsPage from "./pages/DistributorsPage";
import HomePage from "./pages/HomePage";
import InvoiceGenerator from "./pages/InvoiceGenerator";
import { AppProvider } from "./AppContext";
import InvoicePage from "./pages/InvoicePage";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <AppProvider>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/distributors" element={<DistributorsPage />} />
          </Route>
          <Route path="/invoiceGenerator" element={<InvoiceGenerator />} />
          <Route path="/invoice" element={<InvoicePage />}>
            <Route path=":invoiceId" element={<InvoicePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </AppProvider>
  );
};

export default App;
