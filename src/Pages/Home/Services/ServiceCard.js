import React from "react";

const ServiceCard = ({ service }) => {
  const { title, image, price, description } = service;

  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-lg">
      <img
        className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
        src={image}
        alt=""
      />
      <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">{title}</p>
      <p className="text-gray-700 ">{description.slice(0, 100) + "....."}</p>
      <p className="text-gray-700 font-bold">Price: {price}$</p>
      <button
        type="button"
        className="px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-green-200 text-gray-800 hover:bg-green-400"
      >
        View Details
      </button>
    </div>
  );
};

export default ServiceCard;
