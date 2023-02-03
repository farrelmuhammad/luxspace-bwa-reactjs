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

function LoadingSlider() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="w-full md:hidden px-4">
          <div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-40 h-4 mt-3 bg-gray-300 animate-pulse rounded-full"></div>
        </div>
        <div className="flex-1">
          <div className="slider">
            <div className="thumbnail">
              {Array(5).fill().map((_, index) => {
                return (
                  <div
                    className="px-4 relative card group"
                    key={index}
                  >
                    <div
                      className="rounded-xl item bg-gray-300 animate-pulse" style={{ width: 106, height: 106 }}
                    >
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="preview">
              <div className="item rounded-lg h-full overflow-hidden">
                <div className="item bg-gray-300 animate-pulse rounded-lg h-full overflow-hidden"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 md:p-6">
          <div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-40 h-4 mt-4 bg-gray-300 animate-pulse rounded-full"></div>

          <div className="w-44 h-10 mt-8 bg-gray-300 animate-pulse rounded-full"></div>
          <hr className="my-8" />

          <div className="w-36 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-88 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-36 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-88 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-36 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-88 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

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
      {isLoading ? <LoadingSlider /> : <ProductDetails data={data} />}
      {isLoading ? (
        "Loading..."
      ) : (
        <Suggestions data={data?.relatedProducts || {}} />
      )}
      <Sitemap />
      <Footer />
    </>
  );
};

export default Details;
