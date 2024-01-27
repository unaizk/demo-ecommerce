import React from "react";

const products = [
  {
    id: 1,
    name: "AUDIO AMPLIFIER",
    category: "HOT",
    image: "https://via.placeholder.com/150",
    price: "OMR 4,699.00",
    oldPrice: "OMR 4,699.00",
    description: "SMART PHONE",
  },
  {
    id: 2,
    name: "HDMI PROJECTORS",
    category: "HOT",
    image: "https://via.placeholder.com/150",
    price: "OMR 4,699.00",
    oldPrice: "OMR 4,699.00",
    description: "SMART PHONE",
  },
  {
    id: 3,
    name: "iPhone 14 Pro max 256GB - Deep Purple",
    category: "HOT",
    image: "https://via.placeholder.com/150",
    price: "OMR 4,699.00",
    oldPrice: "OMR 4,699.00",
    description: "SMART PHONE",
  },
  {
    id: 4,
    name: "iPhone 14 Pro max 256GB - Deep Purple",
    category: "HOT",
    image: "https://via.placeholder.com/150",
    price: "OMR 4,699.00",
    oldPrice: "OMR 4,699.00",
    description: "SMART PHONE",
  },
  {
    id: 5,
    name: "iPhone 14 Pro max 256GB - Deep Purple",
    category: "HOT",
    image: "https://via.placeholder.com/150",
    price: "OMR 4,699.00",
    oldPrice: "OMR 4,699.00",
    description: "SMART PHONE",
  },
  {
    id: 6,
    name: "iPhone 14 Pro max 256GB - Deep Purple",
    category: "HOT",
    image: "https://via.placeholder.com/150",
    price: "OMR 4,699.00",
    oldPrice: "OMR 4,699.00",
    description: "SMART PHONE",
  },
];

const Products = () => {
  return (
    <div className="bg-white py-8 flex ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 gap-6">
          {products.map((product) => (
           <div
           key={product.id}
           className="bg-white p-4 relative border border-gray-300 mb-4 mx-auto " 
           style={{width : '320px'}}// Adjust width here
         >
           {/* Remove the red box in the top-right corner */}
           <img
             src={product.image}
             alt={product.name}
             className="w-full h-50 object-cover rounded-t-lg mb-4" // Adjust height here
           />
           <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
           <p className="text-gray-600 text-base mb-2">{product.description}</p>
           <div className="flex items-center justify-between">
             <div className="text-lg font-semibold text-gray-800">
               {product.price}
             </div>
             <div className="text-base font-semibold line-through text-gray-400">
               {product.oldPrice}
             </div>
           </div>
           <button
             className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
           >
             ADD TO CART
           </button>
         </div>
         
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
