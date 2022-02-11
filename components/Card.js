import React from "react";

const Card = () => {
  return (
    <div className="bg-[#232323] lg:h-[150px] w-[210px] rounded-md">
    {/* 1st section */}

    <div className="flex justify-evenly pt-5">

      <div className="">
        {/* Image */}
        <img className="h-[70px] w-[70px] rounded-md" src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="product-image" />
      </div>
      <div>
        {/* Product name */}
        <h2 className="text-white text-lg">Product Name</h2>
        <h3 className="text-[#A5A5A5] text-base">Brand Name</h3>
        <span className="text-white">$ 29.99</span>
      </div>
    </div>

      {/* 2nd section */}
      <div className="flex items-center justify-evenly">
<h2 className="text-[#A5A5A5]">Location</h2>
<h3 className="text-sm text-[#A5A5A5]">Date:<span className="text-sm">10:12:2021</span></h3>
      </div>
      <h3 className="text-xs text-[#A5A5A5] text-center">Description of the Product / Item</h3>
    </div>
  );
};

export default Card;
