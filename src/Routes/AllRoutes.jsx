import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home/Home";
import MakeUp from "../Pages/Makeup/MakeUp";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makeup" element={<MakeUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
