import React from "react";
import { useEffect, useState } from "react";
import { useLoadingCartMutation, useChangingQuantityMutation } from "../slices/usersApliSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../component/Loader";

const CartScreen = () => {
  const [loadingCart, { isLoading }] = useLoadingCartMutation();
  const [productDetails, setProductDetails] = useState([]);
  const [refreshToggle, setRefreshToggle] = useState(false);
  const navigate = useNavigate();

  const [changeQuantity] = useChangingQuantityMutation();

  const PROFILE_IMAGE_DIR_PATH = "http://localhost:5000/productImage/";

  useEffect(() => {
    const getCartDetails = async () => {
      try {
        const res = await loadingCart().unwrap();
        setProductDetails(res);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    };

    getCartDetails();
  }, [refreshToggle]);

  const changeTheQuantity = async (count, productId) => {
    try {
      await changeQuantity({ count, productId }).unwrap();
      // Toggle the dummy state to trigger a re-render
      setRefreshToggle(!refreshToggle);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    let subtotal = 0;
    if (productDetails.products) {
      productDetails.products.forEach((product) => {
        subtotal += product.productId.price * product.quantity;
      });
    }
    return subtotal;
  };

  return (
    <>
      <div className="flex bg-gray-100">
        <h1 className="text-2xl font-bold  mx-auto pt-10 pb-10 mt-5 mb-5">
          Cart
        </h1>
      </div>
      
      {isLoading ? (
        <Loader />
      ) : productDetails.products && productDetails.products.length > 0 ? (
        <div className="h-screen py-8 mt-20">
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
                      {productDetails.products.map((product) => (
                        <tr key={product._id} className="border-b">
                          <td className="py-4">
                            <div className="flex items-center">
                              <img
                                className="h-16 w-16 mr-4"
                                src={
                                  PROFILE_IMAGE_DIR_PATH +
                                  product.productId.image
                                }
                                alt={product.productId.name}
                              />
                              <span className="font-semibold text-sm">
                                {product.productId.name}
                              </span>
                            </div>
                          </td>
                          <td className="py-4">₹{product.productId.price}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <button
                                className="border rounded-md py-2 px-4 mr-2"
                                onClick={() =>
                                  changeTheQuantity("-1", product.productId._id)
                                }
                              >
                                -
                              </button>
                              <span className="text-center w-8">
                                {product.quantity}
                              </span>
                              <button
                                className="border rounded-md py-2 px-4 ml-2"
                                onClick={() =>
                                  changeTheQuantity("1", product.productId._id)
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-4">
                            ₹{product.productId.price * product.quantity}
                          </td>
                        </tr>
                      ))}
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
                    <span>{calculateSubtotal()}</span>
                  </div>

                  <hr className="my-2" />
                  <div className="flex justify-between mb-2 pt-5">
                    <span className="font-semibold text-sm">Total</span>
                    <span className="font-black text-xl">
                      ₹{calculateSubtotal()}
                    </span>
                  </div>
                  <button className="bg-cyan-600 text-white py-3 px-6 text-xs transition duration-500 ease-in-out hover:bg-cyan-900  mt-4 w-full">
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg pt-20 p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet. Start
            shopping to fill it up!
          </p>
          <button
            className="bg-cyan-600 text-white py-3 px-6 text-xs transition duration-500 ease-in-out hover:bg-cyan-900  mt-4 w-ful"
            onClick={() => navigate("/")}
          >
            CONTINUE SHOPPING
          </button>
        </div>
      )}
    </>
  );
};

export default CartScreen;
