import React from "react";
import Breadcrumb from "../components/Breadcrumb";
// import ProductDetails from "../parts/Details/ProductDetails";
// import Suggestions from "../parts/Details/Suggestions";
import Footer from "../parts/Footer";
import Header from "../parts/Header";

const Cart = () => {
  return (
    <>
      <Header />
      <Breadcrumb list={[
        { url: "/", name: "Home" },
        { url: "/categories/91231", name: "Office Room" },
        { url: "/categories/91231/products/7888", name: "Details" },
      ]} />
      <Footer />
    </>
  );
};

export default Cart;
