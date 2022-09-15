import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowseRoom from "../parts/Homepage/BrowseRoom";
import Clients from "../parts/Homepage/Clients";
import JustArrived from "../parts/Homepage/JustArrived";
import Sitemap from "../parts/Homepage/Sitemap";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
};

export default Homepage;
