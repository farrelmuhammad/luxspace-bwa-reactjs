import React from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowseRoom from "../parts/Homepage/BrowseRoom";
import Clients from "../parts/Homepage/Clients";
import JustArrived from "../parts/Homepage/JustArrived";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
    </>
  );
};

export default Homepage;
