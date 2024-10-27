import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Ofertas from "../src/pages/Ofertas";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ofertas" element={<Ofertas />} />
    </Routes>
  );
};

export default AppRoutes;
