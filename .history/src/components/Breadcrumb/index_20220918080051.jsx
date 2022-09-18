import React from "react";
import propTypes from "prop-types";

const Breadcrumb = () => {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#">Office Room</a>
          </li>
          <li>
            <a href="#" aria-label="current-page">
              Details
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;

Breadcrumb.propTypes = {
  list: propTypes.array.isRequired,
};
