import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestions from "../parts/Details/Suggestions";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Clients from "../parts/Homepage/Clients";
import Sitemap from "../parts/Homepage/Sitemap";

import useAsync from "../../helpers/hooks/useAsync";
import fetch from "../../helpers/fetch";
import { useParams } from "react-router-dom";

const Details = () => {
  const { data, status, error, run, isLoading } = useAsync();

  const { idp } = useParams();

  useEffect(() => {
    run(
      fetch({
        url: `/api/products/${idp}`,
      })
    );
  }, [run]);
  console.log(data);
  return (
    <>
      <Header />
      <Breadcrumb list={[
        { url: "/", name: "Home" },
        { url: "/categories/91231", name: "Office Room" },
        { url: "/categories/91231/products/7888", name: "Details" },
      ]} />
      <ProductDetails />
      <Suggestions />
      <Sitemap />
      <Footer />
    </>
  );
};

export default Details;
