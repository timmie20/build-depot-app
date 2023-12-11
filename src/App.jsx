import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DistributorsPage from "./pages/DistributorsPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/distributors" element={<DistributorsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
