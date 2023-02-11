import React from "react";
// import useScrollToTop from "../helpers/hooks/useScrollToTop";
import Document from "../parts/Document";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Sitemap from "../parts/Homepage/Sitemap";
import PageErrorMessage from "../parts/PageErrorMessage";

const NotFound = () => {
  // useScrollToTop()
  return (
    <Document>
      <Header theme="black" />
      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </Document>
  );
};

export default NotFound;
