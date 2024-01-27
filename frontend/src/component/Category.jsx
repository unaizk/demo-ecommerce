import React from 'react'


const brands = [
    '/apple.png','/realme.png','/sony.png','/mi.png','/samsung.png','/lg.png',
  ];

const Category = () => {
  return (

  
    <div className="container mx-auto py-4 mb-20">
        <h1 className="text-xl font-bold  mb-4">
        Top Brands
      </h1>
          <hr className="mb-6" />
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <div className="flex space-x-4">
          {brands.map((brand) => (
            <img style={{width:'100px', marginRight : '30px'}}  src={brand} alt="" />
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Category