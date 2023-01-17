import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ShippingDetails from "../parts/Cart/ShippingDetails";
import ShoppingCart from "../parts/Cart/ShoppingCart";
// import ProductDetails from "../parts/Details/ProductDetails";
// import Suggestions from "../parts/Details/Suggestions";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Sitemap from "../parts/Homepage/Sitemap";

const Cart = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
};

export default Cart;
