import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestions from "../parts/Details/Suggestions";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Clients from "../parts/Homepage/Clients";
import Sitemap from "../parts/Homepage/Sitemap";

import { useParams } from "react-router-dom";
import useAsync from "../helpers/hooks/useAsync";
import fetchData from "../helpers/fetch";

const Details = () => {
  const { data, status, error, run, isLoading } = useAsync();

  const { idp } = useParams();

  useEffect(() => {
    run(
      fetchData({
        url: `/api/products/${idp}`,
      })
    );
  }, [run]);
  // console.log(data);
  return (
    <>
      <Header />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      <ProductDetails data={data} />
      <Suggestions data={data?.relatedProducts || {}} />
      <Sitemap />
      <Footer />
    </>
  );
};

export default Details;
