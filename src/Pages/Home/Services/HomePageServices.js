import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const HomePageServices = () => {
  const [{ limitedServices }, setLimitedServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setLimitedServices(data));
  }, []);
  return (
    <div className="my-16">
      <div className="text-center text-5xl font-mono font-bold text-gray-800">
        <h2>My Services</h2>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {limitedServices?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <Link to='/services'> <button
        type="button"
        className="px-14 block  mt-10 py-3 font-semibold rounded-full bg-green-200 text-gray-800 hover:bg-green-400 mx-auto "
      >
        See All
      </button></Link>
     
    </div>
  );
};

export default HomePageServices;
