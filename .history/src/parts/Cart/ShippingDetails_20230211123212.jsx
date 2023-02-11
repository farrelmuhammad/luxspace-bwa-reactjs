import React, { useEffect } from "react";
import Fedex from "../../assets/images/content/logo-fedex.svg";
import Dhl from "../../assets/images/content/logo-dhl.svg";
import Midtrans from "../../assets/images/content/logo-midtrans.png";
import MasterCard from "../../assets/images/content/logo-mastercard.svg";
import Bitcoin from "../../assets/images/content/logo-bitcoin.svg";
import AmericanExpress from "../../assets/images/content/logo-american-express.svg";
import useAsync from "../../helpers/hooks/useAsync";
import fetchData from "../../helpers/fetch";
import useForm from "../../helpers/hooks/useForm";

const ShippingDetails = () => {
  const { data, run, isLoading } = useAsync();

  const { state: payload, fnUpdateState } = useForm({
    completeName: "",
    emailAddress: "",
    address: "",
    phoneNumber: "",
    courier: "",
    payment: "",
  })

  useEffect(() => {
    run(
      fetchData({
        url: `/api/checkout/meta`,
      })
    );
  }, [run]);

  console.log(data);
  return (
    <>
      <div className="w-full md:px-4 md:w-4/12" id="shipping-detail">
        <div className="bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl">
          <form action="success.html">
            <div className="flex flex-start mb-6">
              <h3 className="text-2xl">Shipping Details</h3>
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="completeName" className="text-sm mb-2">
                Complete Name
              </label>
              <input
                onChange={fnUpdateState}
                value={payload.completeName}
                type="text"
                name="completeName"
                className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                placeholder="Input your name"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="emailAddress" className="text-sm mb-2">
                Email Address
              </label>
              <input
                onChange={fnUpdateState}
                value={payload.emailAddress}
                type="email"
                name="emailAddress"
                className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                placeholder="Input your email address"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="address" className="text-sm mb-2">
                Address
              </label>
              <input
                onChange={fnUpdateState}
                value={payload.address}
                type="text"
                name="address"
                className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                placeholder="Input your address"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="phoneNumber" className="text-sm mb-2">
                Phone Number
              </label>
              <input
                onChange={fnUpdateState}
                value={payload.phoneNumber}
                type="tel"
                name="phoneNumber"
                className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                placeholder="Input your phone number"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="complete-name" className="text-sm mb-2">
                Choose Courier
              </label>
              <div className="flex -mx-2 flex-wrap">
                {isLoading ? Array(2).fill().map((_, index) => <div key={index} className="px-2 h-24 mb-4 2-6/12">
                  <div className="bg-gray-300 w-full h-full animate-pulse rounded-lg mx-2"></div>
                </div>) : <div className="px-2 w-6/12 h-24 mb-4">
                  <button
                    type="button"
                    data-value="fedex"
                    data-name="courier"
                    className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                  >
                    <img
                      src={Fedex}
                      alt="Logo Fedex"
                      className="object-contain max-h-full"
                    />
                  </button>
                </div> }
                
                {/* <div className="px-2 w-6/12 h-24 mb-4">
                  <button
                    type="button"
                    data-value="dhl"
                    data-name="courier"
                    className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                  >
                    <img
                      src={Dhl}
                      alt="Logo dhl"
                      className="object-contain max-h-full"
                    />
                  </button>
                </div> */}
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="complete-name" className="text-sm mb-2">
                Choose Payment
              </label>
              <div className="flex -mx-2 flex-wrap">
                <div className="px-2 w-6/12 h-24 mb-4">
                  <button
                    type="button"
                    data-value="midtrans"
                    data-name="payment"
                    className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                  >
                    <img
                      src={Midtrans}
                      alt="Logo midtrans"
                      className="object-contain max-h-full"
                    />
                  </button>
                </div>
                <div className="px-2 w-6/12 h-24 mb-4">
                  <button
                    type="button"
                    data-value="mastercard"
                    data-name="payment"
                    className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                  >
                    <img src={MasterCard} alt="Logo mastercard" />
                  </button>
                </div>
                <div className="px-2 w-6/12 h-24 mb-4">
                  <button
                    type="button"
                    data-value="bitcoin"
                    data-name="payment"
                    className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                  >
                    <img
                      src={Bitcoin}
                      alt="Logo bitcoin"
                      className="object-contain max-h-full"
                    />
                  </button>
                </div>
                <div className="px-2 w-6/12 h-24 mb-4">
                  <button
                    type="button"
                    data-value="american-express"
                    data-name="payment"
                    className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                  >
                    <img
                      src={AmericanExpress}
                      alt="Logo american-logo-american-express"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled
                className="bg-pink-400 text-black hover:bg-black hover:text-pink-400 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-6"
              >
                Checkout Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShippingDetails;
