import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { __id, title, image, price, description } = useLoaderData();

  return (
    <div className="my-16">
      <div className="card lg:card-side bg-base-100 shadow-xl ">
        <figure>
          <img src={image} alt="" className="rounded-md h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p className="card-title">Price: {price}$</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
