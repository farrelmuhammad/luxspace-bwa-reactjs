import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetails from "../parts/Details/ProductDetails";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Clients from "../parts/Homepage/Clients";
import Sitemap from "../parts/Homepage/Sitemap";

const Details = () => {
  return (
    <>
      <Header />
      <Breadcrumb list={[
        { url: "/", name: "Home" },
        { url: "/categories/91231", name: "Office Room" },
        { url: "/categories/91231/products/7888", name: "Details" },
      ]} />
      <ProductDetails />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
};

export default Details;
