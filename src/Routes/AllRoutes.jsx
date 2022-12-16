import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import AuthComp from "../Pages/AuthPage/AuthComp";
import Home from "../Pages/HomePage/Home";
import MakeUp from "../Pages/Makeup/MakeUp";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import WishListPage from "../Pages/WishListPage/WishListPage";


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makeup" element={<MakeUp />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/auth" element={<AuthComp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
