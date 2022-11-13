import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvide";
import useSetTitle from "../../../hooks/useSetTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const { allServices } = useLoaderData();
  useSetTitle("Services");
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-green-500  mx-auto"></div>
    );
  }

  return (
    <div className="my-16">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {allServices?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
