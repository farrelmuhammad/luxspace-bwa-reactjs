import React from "react";
import useScrollToTop from "../helpers/hooks/useScrollToTop";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Sitemap from "../parts/Homepage/Sitemap";
import PageErrorMessage from "../parts/PageErrorMessage";

const NotFound = () => {
  useScrollToTop()
  return (
    <>
      <Header theme="black" />
      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
};

export default NotFound;
