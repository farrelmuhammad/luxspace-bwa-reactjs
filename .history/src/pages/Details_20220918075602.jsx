import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Clients from "../parts/Homepage/Clients";
import Sitemap from "../parts/Homepage/Sitemap";

const Details = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
};

export default Details;
