import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useSetTitle from '../../../hooks/useSetTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const {allServices} = useLoaderData();
    useSetTitle('Services');
    return (
        <div className='my-16'>
           <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {allServices?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
        </div>
    );
};

export default Services;
