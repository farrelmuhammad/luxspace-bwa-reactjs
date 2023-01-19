import React from "react";

const PageErrorMessage = ({
  title = "404",
  body = "Looks like this page not found",
}) => {
  return (
    <>
      <section className="">
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-4/12 text-center">
              {/* <img
                src="./images/content/illustration-success.png"
                alt="congrats illustration"
              /> */}
              <h2 className="text-3xl font-semibold mb-6">{title}</h2>
              <p className="text-lg mb-12">{body}</p>
              <a
                href="details.html"
                className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
              >
                Back to Shop
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageErrorMessage;
