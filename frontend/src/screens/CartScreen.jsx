import React from "react";
import { useEffect, useState } from "react";

const CartScreen = () => {
  return (
    <>
      <div className="flex bg-gray-100">
        <h1 className="text-2xl font-bold  mx-auto pt-10 pb-10 mt-5 mb-5">
          Cart
        </h1>
      </div>
      <div className=" h-screen py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg  p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left text-sm font-semibold">
                        PRODUCT
                      </th>
                      <th className="text-left text-sm font-semibold">PRICE</th>
                      <th className="text-left text-sm font-semibold">
                        QUANTITY
                      </th>
                      <th className="text-left text-sm font-semibold">TOTAL</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src="https://via.placeholder.com/150"
                            alt="Product image"
                          />
                          <span className="font-semibold text-sm">
                            Product name
                          </span>
                        </div>
                      </td>
                      <td className="py-4">₹19.99</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button className="border rounded-md py-2 px-4 mr-2">
                            -
                          </button>
                          <span className="text-center w-8">1</span>
                          <button className="border rounded-md py-2 px-4 ml-2">
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">₹19.99</td>
                    </tr>
                    {/* <!-- More product rows --> */}
                  </tbody>
                </table>
                <hr className="my-6 border-t border-gray-300" />
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white p-6 border border-gray-300">
                <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-sm">Subtotal</span>
                  <span>₹19.99</span>
                </div>

                <hr className="my-2" />
                <div className="flex justify-between mb-2 pt-5">
                  <span className="font-semibold text-sm">Total</span>
                  <span className="font-black text-xl">₹21.98</span>
                </div>
                <button className="bg-cyan-600 text-white py-2 px-4 text-xs transition duration-500 ease-in-out hover:bg-cyan-900  mt-4 w-full">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
