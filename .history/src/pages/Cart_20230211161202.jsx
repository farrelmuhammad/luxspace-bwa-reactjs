import React from "react";
import Breadcrumb from "../components/Breadcrumb";
// import useScrollToTop from "../helpers/hooks/useScrollToTop";
import ShippingDetails from "../parts/Cart/ShippingDetails";
import ShoppingCart from "../parts/Cart/ShoppingCart";
import Document from "../parts/Document";
// import ProductDetails from "../parts/Details/ProductDetails";
// import Suggestions from "../parts/Details/Suggestions";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Sitemap from "../parts/Homepage/Sitemap";

const Cart = () => {
  // useScrollToTop()
  return (
    <Document>
      <Header />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </Document>
  );
};

export default Cart;